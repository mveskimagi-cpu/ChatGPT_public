'use strict';

const QUOTA_CODES=new Set(['credit_balance_exhausted','insufficient_quota','billing_hard_limit_reached']);
function apiError(role,status,body){
  let info={};try{info=JSON.parse(body)?.error||{}}catch{}
  const error=new Error('OpenAI '+role+' '+status+': '+(info.code||info.type||'request_failed'));
  error.status=status;error.code=info.code||info.type||null;error.role=role;
  error.quotaExhausted=status===429&&(QUOTA_CODES.has(info.code)||QUOTA_CODES.has(info.type));
  return error;
}
function quotaFailure(previous,error,now=Date.now()){
  if(!error.quotaExhausted)throw error;
  return {status:'BLOCKED_QUOTA',code:error.code,role:error.role,firstBlockedAt:previous?.firstBlockedAt||new Date(now).toISOString(),
    lastFailedAt:new Date(now).toISOString(),nextProbeAt:new Date(now+6*3600000).toISOString(),
    failedProbes:(previous?.failedProbes||0)+1,actionRequired:'Add API credits to the OpenAI project/organization used by OPENAI_API_KEY. No trading decision was made.'};
}
function quotaGate(health,now=Date.now(),force=false){
  if(health?.status!=='BLOCKED_QUOTA')return {call:true};
  const next=Date.parse(health.nextProbeAt);
  if(force||(Number.isFinite(next)&&now>=next))return {call:true,probe:true};
  return {call:false,reason:'OPENAI_QUOTA_BLOCKED',nextProbeAt:health.nextProbeAt||null};
}
const signature=t=>[t.type,t.symbol,t.setupId||t.setup||'',t.condition||''].join('|');
function fresh(q,now,maxMinutes=15){const age=now-Date.parse(q?.marketTime);return Number.isFinite(q?.priceUsd)&&q.priceUsd>0&&Number.isFinite(age)&&age>=-60000&&age<=maxMinutes*60000;}
function decisionGate({T,D,Q,C,R,E,portfolioFingerprint,now=Date.now()}){
  const triggers=(T.triggers||[]).filter(t=>fresh(Q[t.symbol],now,C.maxQuoteAgeMinutes||15));
  const result=(call,reason,rest={})=>({call,reason,portfolioFingerprint,...rest});
  // A new trigger key or expired timer cannot turn yesterday's close into new evidence.
  if(!triggers.length)return result(false,'NO_FRESH_TRIGGER_QUOTES');
  if(!R||!E)return result(true,'NO_PRIOR_DECISION');
  if(R.portfolioFingerprintVersion===2&&R.portfolioFingerprint&&R.portfolioFingerprint!==portfolioFingerprint)return result(true,'PORTFOLIO_CHANGED');
  const prior=new Set((E.trigger?.triggers||[]).map(signature)),newTrigger=triggers.find(t=>!prior.has(signature(t)));
  if(newTrigger)return result(true,newTrigger.type==='POSITION_INVALIDATION_LEVEL'?'NEW_POSITION_INVALIDATION':'NEW_SEMANTIC_TRIGGER',{symbol:newTrigger.symbol});
  const open=new Set((D.positions||[]).map(p=>p.symbol)),old=E.freshEvidence?.quotes||{};
  let maxOpen=0,maxWatch=0,movedOpen=null,movedWatch=null;
  for(const [symbol,q] of Object.entries(Q)){
    if(!fresh(q,now,C.maxQuoteAgeMinutes||15)||!(old[symbol]?.priceUsd>0))continue;
    const move=Math.abs(q.priceUsd/old[symbol].priceUsd-1)*100;
    if(open.has(symbol)&&move>maxOpen){maxOpen=move;movedOpen=symbol}
    else if(!open.has(symbol)&&move>maxWatch){maxWatch=move;movedWatch=symbol}
  }
  if(maxOpen>=(C.positionReviewMovePct??2))return result(true,'POSITION_MATERIAL_MOVE',{symbol:movedOpen,maxMovePct:maxOpen});
  if(maxWatch>=(C.watchlistMaterialMovePct??2))return result(true,'WATCHLIST_MATERIAL_MOVE',{symbol:movedWatch,maxMovePct:maxWatch});
  const age=(now-Date.parse(R.processedAt))/60000,limit=open.size?(C.positionReevaluationMinutes??60):(C.watchlistReevaluationMinutes??240);
  if(!Number.isFinite(age)||age>=limit)return result(true,open.size?'POSITION_REEVALUATION_DUE':'WATCHLIST_REEVALUATION_DUE',{ageMinutes:age});
  return result(false,'DUPLICATE_SUPPRESSED',{ageMinutes:age,maxOpenMovePct:maxOpen,maxWatchMovePct:maxWatch});
}
function recordUsage(health,role,response,model,now=Date.now()){
  const u=response.usage||{};
  health.usage=health.usage||{requests:0,inputTokens:0,outputTokens:0,cachedInputTokens:0};
  health.usage.requests++;health.usage.inputTokens+=Number(u.input_tokens)||0;
  health.usage.outputTokens+=Number(u.output_tokens)||0;health.usage.cachedInputTokens+=Number(u.input_tokens_details?.cached_tokens)||0;
  health.lastRequest={role,model,at:new Date(now).toISOString(),responseId:response.id||null,inputTokens:u.input_tokens??null,outputTokens:u.output_tokens??null};
}
function compactReview(review){
  if(!/^[a-f0-9]{16}$/.test(review.decisionKey||''))throw Error('Invalid agent decision key for audit archive');
  return {schemaVersion:1,processedAt:review.processedAt,decisionKey:review.decisionKey,triggerKey:review.triggerKey,
    baseCommitSha:review.baseCommitSha,evidenceHash:review.evidenceHash,portfolioMutation:review.portfolioMutation,
    decision:{decision:review.decision?.decision,symbol:review.decision?.symbol||null,eurAmount:review.decision?.eurAmount??null},
    reports:{risk:{verdict:review.reports?.risk?.verdict||null},critic:{verdict:review.reports?.critic?.verdict||null}},
    archivePath:'quant/agent-reviews/'+review.decisionKey+'.json'};
}
function reviewStats(history){return {reviews:history.length,riskVetoes:history.filter(x=>x.reports?.risk?.verdict==='VETO').length,criticRejections:history.filter(x=>x.reports?.critic?.verdict==='FAIL').length};}
module.exports={apiError,quotaFailure,quotaGate,decisionGate,fresh,recordUsage,compactReview,reviewStats};
