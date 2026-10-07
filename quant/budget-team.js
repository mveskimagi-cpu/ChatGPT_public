'use strict';
const {scout,hardRisk,hash}=require('./agent-team');
const {positionRules}=require('./trigger-engine');
const isTrade=d=>['BUY','SELL','REDUCE'].includes(d?.decision);
const pick=(x,keys)=>Object.fromEntries(keys.filter(k=>x?.[k]!==undefined).map(k=>[k,x[k]]));
const brief=x=>typeof x==='string'?x.slice(0,500):x;
function evidence(D,T,Q,F,C,now) {
  const sc=scout(D,T,now), regime=D.strategyState?.regimeEngine;
  const freshRegime=Number.isFinite(Date.parse(regime?.observedAt))&&now-Date.parse(regime.observedAt)<=24*3600000;
  const setups=sc.setups.filter((s,i,a)=>a.findIndex(t=>t.setupId===s.setupId)===i).map(s=>({...pick(s,
    ['symbol','setupId','entryRule','invalidationRule','expiresAt','metrics','quantScore']),reason:brief(s.reason)}));
  return {asOf:new Date(now).toISOString(),portfolio:{summary:pick(D.summary,['initial','cash','value','realized','unrealized']),
    positions:D.positions.map(p=>({...pick(p,['symbol','qty','costEur','value','pnl','lastUsd','openedAt','setupExpiresAt','entryRule','invalidationRule','targetRule']),
      thesis:brief(p.thesis),invalidation:brief(p.invalidation),
      target:positionRules(p,'target').length?brief(p.target):'No verified numeric profit target; review thesis or momentum failure.',timeHorizon:p.timeHorizon}))},
    trigger:{triggers:(T.triggers||[]).map(t=>pick(t,['type','symbol','setupId','condition']))},
    quotes:Object.fromEntries(Object.entries(Q).map(([s,q])=>[s,pick(q,['priceUsd','marketTime','confirmation'])])),
    fx:pick(F,['usdPerEur','marketTime']),setups,
    rankedMetrics:sc.candidates.map(x=>pick(x,['symbol','rank','quantScore','metrics'])),
    regime:{status:freshRegime?'RECENT_SHADOW_ONLY':'STALE_NOT_FOR_CURRENT_DECISIONS',observedAt:regime?.observedAt||null,
      output:freshRegime?regime.output:null},
    limits:{maxBuyEur:C.maxBuyEur,maxPositionPct:C.maxPositionPct||35,maxQuoteAgeMinutes:C.maxQuoteAgeMinutes||15},
    catalystEvidence:'NOT_FETCHED: current news/earnings/crypto events unknown; do not invent them.'};
}
async function runBudgetTeam({D,T,Q,F,C,call,now=Date.now()}) {
  const sc=scout(D,T,now),shared=evidence(D,T,Q,F,C,now),reports={scout:sc};
  const proposal=await call('QUANT_MACRO',shared);
  if(!['HOLD','BUY','SELL','REDUCE'].includes(proposal?.decision)||typeof proposal.reason!=='string'||!proposal.reason.trim())throw Error('Invalid analyst decision');
  reports.quantMacro=proposal;reports.pm={...proposal,mode:'CONSOLIDATED_WITH_ANALYST'};
  const errors=hardRisk(proposal,D,Q,F,C,sc,now);
  reports.hardRisk={verdict:errors.length?'VETO':'APPROVE',errors};
  reports.risk={mode:'DETERMINISTIC',verdict:errors.length?'VETO':'APPROVE',reason:errors.join(', ')||'Price, FX, size, cash, concentration, expiry and candle gates checked in code.'};
  const hold=reason=>({decision:'HOLD',symbol:proposal.symbol||null,eurAmount:0,reason});
  let decision=errors.length?hold('Deterministic risk veto: '+errors.join(', ')):proposal;
  reports.critic={verdict:'NOT_RUN',reason:'No eligible transaction; no paid audit needed.'};
  if(isTrade(decision)) {
    const critic=await call('CRITIC',{...shared,proposal:decision,hardRisk:reports.hardRisk});
    if(!['PASS','FAIL'].includes(critic?.verdict)||typeof critic.reason!=='string'||!critic.reason.trim())throw Error('Invalid critic report');
    reports.critic=critic;
    if(critic.verdict!=='PASS')decision=hold('Risk audit rejected proposal: '+critic.reason);
  }
  return {schemaVersion:2,mode:'BUDGETED_ANALYST_AND_TRADE_AUDIT',processedAt:new Date(now).toISOString(),
    evidenceHash:hash(shared),reports,decision,tradePermitted:isTrade(decision)&&!errors.length&&reports.critic.verdict==='PASS'};
}
module.exports={runBudgetTeam,evidence};
