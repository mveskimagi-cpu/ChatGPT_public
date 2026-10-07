const fs=require('fs'),vm=require('vm'),crypto=require('crypto'); const {execFileSync}=require('child_process');
const {validateLedger,scout,chartEvidence}=require('./agent-team');
const budget=require('./api-budget');
const {callModel}=require('./model-client');
const {runBudgetTeam}=require('./budget-team');
const {apiError,quotaFailure,quotaGate,decisionGate,compactReview,reviewStats}=require('./decision-policy');
const git=(...a)=>execFileSync('git',a,{encoding:'utf8'}).trim();
function ledger(){const src=fs.readFileSync('data.js','utf8'),s={window:{}};vm.createContext(s);vm.runInContext(src,s,{timeout:1000});return{src,data:s.window.PORTFOLIO_DATA}}
async function j(url){const r=await fetch(url,{headers:{'User-Agent':'quant-consumer-production/1.0'},signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('HTTP '+r.status+' '+url);return r.json()}
async function quote(sym,setups=[]){
 if(sym==='BTC'||sym==='ETH'){const x=await j('https://api.coinbase.com/v2/prices/'+sym+'-USD/spot');return{symbol:sym,priceUsd:+x.data.amount,provider:'Coinbase',url:'https://api.coinbase.com/v2/prices/'+sym+'-USD/spot',retrievedAt:new Date().toISOString()}}
 const x=await j('https://query1.finance.yahoo.com/v8/finance/chart/'+encodeURIComponent(sym)+'?interval=5m&range=1d');const r=x.chart?.result?.[0];if(!r)throw Error('No quote '+sym);const evidence=chartEvidence(r,setups);return{symbol:sym,...evidence,provider:'Yahoo Finance chart',url:'https://query1.finance.yahoo.com/v8/finance/chart/'+sym+'?interval=5m&range=1d',retrievedAt:new Date().toISOString()}}
async function fx(){const url='https://query1.finance.yahoo.com/v8/finance/chart/EURUSD=X?interval=5m&range=1d',x=await j(url),r=x.chart?.result?.[0],e=chartEvidence(r);return{usdPerEur:e.priceUsd,marketTime:e.marketTime,url,provider:'Yahoo Finance chart',retrievedAt:new Date().toISOString()}}
function n2(x){return Math.round(x*100)/100} function n8(x){return Math.round(x*1e8)/1e8}
function portfolioFingerprint(D){return crypto.createHash('sha256').update(JSON.stringify({summary:{cash:D.summary?.cash,realized:D.summary?.realized},positions:(D.positions||[]).map(p=>({symbol:p.symbol,qty:p.qty,avgUsd:p.avgUsd,costEur:p.costEur}))})).digest('hex').slice(0,16)}
function priorDecision(){try{return JSON.parse(fs.readFileSync('quant/decision-result.json','utf8'))}catch{return null}}
function priorEvent(){try{return JSON.parse(fs.readFileSync('quant/decision-event.json','utf8'))}catch{return null}}
function gate(T,D,Q,C,options={}){
 return decisionGate({T,D,Q,C,R:options.R===undefined?priorDecision():options.R,E:options.E===undefined?priorEvent():options.E,portfolioFingerprint:portfolioFingerprint(D),now:options.now??Date.now()});
}
function writeLedger(D){validateLedger(D);fs.writeFileSync('data.js','window.PORTFOLIO_DATA = '+JSON.stringify(D,null,2)+';\n')}
function reportStatus(status){
 console.log(JSON.stringify(status));
 if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,'## Quant decision status\n\n'+status.status+' — '+status.reason+'\n\nNo new paper trade was recorded by this blocked/skipped attempt.\n');
}
function validate(d,D,quotes,F,C){
 if(!['HOLD','BUY','SELL','REDUCE'].includes(d.decision))throw Error('bad decision');
 if(!d.reason||typeof d.reason!=='string')throw Error('missing reason');
 if(d.decision==='HOLD')return null;
 if(!d.symbol||!quotes[d.symbol])throw Error('decision symbol lacks fresh quote');
 if(!Number.isFinite(d.eurAmount)||d.eurAmount<=0)throw Error('invalid eurAmount');
 const p=quotes[d.symbol].priceUsd, qty=n8(d.eurAmount*F.usdPerEur/p);
 if(d.decision==='BUY'){if(d.eurAmount>D.summary.cash+0.005)throw Error('BUY exceeds cash');if(d.eurAmount>C.maxBuyEur)throw Error('BUY > EUR'+C.maxBuyEur+' guardrail');return{side:'BUY',qty,priceUsd:p,eur:n2(d.eurAmount)}}
 const pos=(D.positions||[]).find(x=>x.symbol===d.symbol);if(!pos)throw Error('SELL without position');
 const maxQty=+pos.qty;if(!Number.isFinite(maxQty)||qty>maxQty+1e-8)throw Error('SELL exceeds position');
 if(d.decision==='SELL'&&Math.abs(qty-maxQty)>Math.max(1e-8,maxQty*.01))throw Error('SELL must close position; use REDUCE');
 return{side:'SELL',qty:d.decision==='SELL'?maxQty:qty,priceUsd:p,eur:n2((d.decision==='SELL'?maxQty:qty)*p/F.usdPerEur)}
}
function mutate(D,d,e,q,F){
 const now=new Date(),stamp=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Tallinn',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(now); const positions=D.positions||[];
 if(e.side==='BUY'){let p=positions.find(x=>x.symbol===d.symbol);if(p){const oldQty=+p.qty,oldCost=+p.costEur||(oldQty*+p.avgUsd/F.usdPerEur);const nq=n8(oldQty+e.qty),cost=oldCost+e.eur;p.qty=nq;p.costEur=n2(cost);p.avgUsd=n2((+p.avgUsd*oldQty+e.priceUsd*e.qty)/nq);p.lastUsd=e.priceUsd}else {const s=(D.strategyState?.watchlist||[]).find(x=>x.symbol===d.symbol)||(D.strategyState?.pendingSetups||[]).find(x=>x.symbol===d.symbol)||{};positions.push({symbol:d.symbol,qty:e.qty,avgUsd:e.priceUsd,lastUsd:e.priceUsd,costEur:e.eur,entryReason:d.reason,openedAt:now.toISOString(),timeHorizon:d.timeHorizon||s.expectedHorizon||'tactical',riskLevel:d.riskLevel||'HIGH',thesis:d.reason,target:s.target||'Manage/trim on momentum failure or next strategy review.',invalidation:s.invalidation||'Reassess on material adverse price move.',lastDecision:'BUY',lastDecisionReason:d.reason,setupId:s.setupId||null,entryRule:s.entryRule||null,invalidationRule:s.invalidationRule||null,setupExpiresAt:s.expiresAt||null})}D.summary.cash=n2(D.summary.cash-e.eur)}
 else {const p=positions.find(x=>x.symbol===d.symbol);e.closedPositionStrategy=JSON.parse(JSON.stringify(p));const oldQty=+p.qty,cost=+p.costEur||(+p.avgUsd*oldQty/F.usdPerEur),soldFrac=e.qty/oldQty,basis=cost*soldFrac,pnl=e.eur-basis;D.summary.cash=n2(D.summary.cash+e.eur);D.summary.realized=n2((D.summary.realized||0)+pnl);p.qty=n8(oldQty-e.qty);p.costEur=n2(cost-basis);p.lastUsd=e.priceUsd;if(p.qty<=1e-8)D.positions=positions.filter(x=>x!==p);e.pnl=n2(pnl);e.costBasisEur=n2(basis)}
 D.trades=D.trades||[];D.trades.push({date:stamp,symbol:d.symbol,side:e.side,qty:e.qty,priceUsd:e.priceUsd,eur:e.eur,pnl:e.pnl??null,costBasisEur:e.costBasisEur??null,closedPositionStrategy:e.closedPositionStrategy||null,note:d.reason,execution:{priceProvider:q.provider,priceSourceUrl:q.url,quotedAt:q.marketTime||null,retrievedAt:q.retrievedAt,fxUsdPerEur:F.usdPerEur,fxProvider:F.provider,paperTrade:true}});
 const unreal=(D.positions||[]).reduce((s,p)=>s+((+p.lastUsd-(+p.avgUsd))*+p.qty/F.usdPerEur),0);D.summary.unrealized=n2(unreal);D.summary.value=n2(D.summary.cash+(D.positions||[]).reduce((s,p)=>s+(+p.qty*+p.lastUsd/F.usdPerEur),0));D.summary.total=n2(D.summary.value-D.summary.initial);D.summary.totalPct=n2(100*D.summary.total/D.summary.initial);D.meta.asOf=now.toISOString().slice(0,16).replace('T',' ')+' UTC';D.meta.lastTrade=D.meta.asOf;D.meta.note='Paper trading only — no real money is traded.';
}
function recordSnapshot(D){
 const value=+D.summary?.value;if(!Number.isFinite(value))return;
 D.snapshots=D.snapshots||[];const date=new Date().toISOString().slice(0,16).replace('T',' '),last=D.snapshots[D.snapshots.length-1];
 if(last&&String(last.date||'').slice(0,10)===date.slice(0,10)){last.date=date;last.value=n2(value)}
 else D.snapshots.push({date,value:n2(value)});
}
function markToMarket(D,Q,F){
 if(!Number.isFinite(F?.usdPerEur)||F.usdPerEur<=0)throw Error('Invalid mark-to-market FX');
 let unreal=0,value=+D.summary.cash||0;
 for(const p of D.positions||[]){const q=Q[p.symbol];if(q&&Number.isFinite(+q.priceUsd)){p.lastUsd=+q.priceUsd;p.lastPriceAt=q.marketTime||null;}const cost=+p.costEur||0,current=+p.qty*+p.lastUsd/F.usdPerEur,pnl=current-cost;p.value=n2(current);p.pnl=n2(pnl);p.pnlPct=cost?n2(100*pnl/cost):0;p.fxUsdPerEur=F.usdPerEur;unreal+=pnl;value+=current}
 D.summary.unrealized=n2(unreal);D.summary.value=n2(value);D.summary.total=n2(D.summary.value-D.summary.initial);D.summary.totalPct=n2(100*D.summary.total/D.summary.initial);D.meta.asOf=new Date().toISOString().slice(0,16).replace('T',' ')+' UTC';recordSnapshot(D);return true
}
// Reserve on authoritative main before generation. A crash leaves the maximum
// charge reserved, so another runner cannot spend the same money again.
function commitBudget(D,expectedBase,gitWrite=git){
 gitWrite('fetch','origin','main');
 if(gitWrite('rev-parse','HEAD')!==expectedBase||gitWrite('rev-parse','origin/main')!==expectedBase)
   throw Error('main changed before budget reservation; fail closed');
 writeLedger(D);
 gitWrite('config','user.name','github-actions[bot]');
 gitWrite('config','user.email','41898282+github-actions[bot]@users.noreply.github.com');
 gitWrite('add','--','data.js');
 gitWrite('commit','-m','Reserve Quant API budget before generation');
 gitWrite('push','origin','HEAD:main');
 gitWrite('fetch','origin','main');
 if(gitWrite('show','origin/main:data.js').trim()!==fs.readFileSync('data.js','utf8').trim())
   throw Error('Budget reservation read-back failed');
 return gitWrite('rev-parse','HEAD');
}
async function main({gitRead=git,quoteRead=quote,fxRead=fx,teamRun=runBudgetTeam,
  persistBudget=commitBudget,modelCall=callModel,now=()=>Date.now()}={}){
 gitRead('fetch','origin','main');let base=gitRead('rev-parse','origin/main');
 if(gitRead('rev-parse','HEAD')!==base)throw Error('Checkout differs from authoritative main; fail closed');
 const {data:D}=ledger(),T=JSON.parse(fs.readFileSync('quant/trigger.json'));
 validateLedger(D);
 const C={maxBuyEur:250,maxQuoteAgeMinutes:15,maxPositionPct:35,positionReviewMovePct:2,
   watchlistMaterialMovePct:2,...(D.automationConfig?.decision||{}),...budget.POLICY};
 D.automationConfig ||= {};D.automationConfig.decision=C;
 D.automationHealth ||= {};
 const health=D.automationHealth.openai ||= {status:'UNKNOWN'};
 const SC=scout(D,T,now()),Q={};for(const symbol of SC.symbols)Q[symbol]=await quoteRead(symbol,SC.setups.filter(s=>s.symbol===symbol));
 const G=gate(T,D,Q,C,{now:now()}),F=await fxRead();markToMarket(D,Q,F);validateLedger(D);
 const monitor=D.automationHealth.monitor={lastRunAt:new Date(now()).toISOString(),status:'OK',
   priceTimes:Object.fromEntries(Object.entries(Q).map(([s,q])=>[s,q.marketTime||null])),
   fxUsdPerEur:F.usdPerEur,fxAt:F.marketTime||null,decisionStatus:'IDLE'};
 const stop=(status,reason)=>{Object.assign(monitor,{decisionStatus:status,reason});writeLedger(D);reportStatus({status,reason,decisionApiCall:false});};
 let cap;try{cap=budget.capacity(D,0,now());}catch(error){if(!error.budgetBlocked)throw error;return stop('BLOCKED_BUDGET',error.code);}
 if(!cap.allowed)return stop('BLOCKED_BUDGET',cap.reason);
 const manual=process.env.GITHUB_EVENT_NAME==='workflow_dispatch'&&process.env.QUANT_RETRY_OPENAI==='true';
 const probe=quotaGate(health,now(),manual);
 if(!probe.call)return stop('BLOCKED_QUOTA','OPENAI_QUOTA_BLOCKED');
 if(health.status==='ERROR_MODEL'&&!manual&&Date.parse(health.nextRetryAt)>now())return stop('ERROR_MODEL','MODEL_RETRY_COOLDOWN');
 if(!T.needsDecision||!G.call)return stop('IDLE',!T.needsDecision?'NO_MECHANICAL_TRIGGER':G.reason);
 let team;
 try{
   team=await teamRun({D,T,Q,F,C,now:now(),call:(role,state)=>modelCall({role,state,D,health,now,
     persist:async()=>{base=await persistBudget(D,base,gitRead);}})});
 }catch(error){
   if(error.quotaExhausted){D.automationHealth.openai={...health,...quotaFailure(health,error,now())};return stop('BLOCKED_QUOTA','OPENAI_QUOTA_BLOCKED');}
   if(error.budgetBlocked)return stop('BLOCKED_BUDGET',error.code);
   D.automationHealth.openai={...health,status:'ERROR_MODEL',lastFailedAt:new Date(now()).toISOString(),
     nextRetryAt:new Date(now()+3600000).toISOString(),errorCode:error.code||'MODEL_OR_RESERVATION_ERROR'};
   stop('ERROR_MODEL',D.automationHealth.openai.errorCode);
   throw error;
 }
 D.automationHealth.openai={...health,status:'AVAILABLE',lastSuccessAt:new Date(now()).toISOString(),nextProbeAt:null,nextRetryAt:null,actionRequired:null};
 monitor.decisionStatus='REVIEW_COMPLETED';monitor.reason=G.reason;
 const d=team.decision;
 // Re-fetch execution evidence AFTER model latency, then re-apply all hard gates.
 if(team.tradePermitted){
   const reviewedPrice=Q[d.symbol].priceUsd,reviewedFx=F.usdPerEur;
   Q[d.symbol]=await quoteRead(d.symbol,SC.setups.filter(s=>s.symbol===d.symbol));Object.assign(F,await fxRead());
   const errors=require('./agent-team').hardRisk(d,D,Q,F,C,SC);
   if(Math.abs(Q[d.symbol].priceUsd/reviewedPrice-1)>.005||Math.abs(F.usdPerEur/reviewedFx-1)>.005)errors.push('EVIDENCE_MOVED_AFTER_AUDIT');
   team.executionRecheck={verdict:errors.length?'VETO':'PASS',errors,quotes:Q[d.symbol],fx:{...F}};
   if(errors.length){team.tradePermitted=false;team.executionRecheck={verdict:'VETO',errors};d.decision='HOLD';d.eurAmount=null;d.reason='Execution recheck: '+errors.join(', ')}
 }
 const e=team.tradePermitted?validate(d,D,Q,F,C):null;
 if(e)mutate(D,d,e,Q[d.symbol],F);
 const event={schemaVersion:4,eventType:'QUANT_DECISION_REQUIRED',publishedAt:new Date().toISOString(),baseRef:'main',baseCommitSha:base,triggerKey:T.triggerKey,trigger:T,freshEvidence:{quotes:Q,fx:F},agentTeam:team};
 markToMarket(D,Q,F);validateLedger(D);
 const decisionKey=crypto.createHash('sha256').update(base+T.triggerKey+JSON.stringify(d)).digest('hex').slice(0,16);
 D.strategyState=D.strategyState||{};
 const memory={...team,decisionKey,triggerKey:T.triggerKey,baseCommitSha:base,portfolioMutation:!!e};
 D.strategyState.agentTeam=memory;
 const history=D.strategyState.agentTeamHistory||[],stats=D.strategyState.agentTeamStats||reviewStats(history);
 fs.mkdirSync('quant/agent-reviews',{recursive:true});
 const compact=review=>{const summary=compactReview(review);if(!review.archivePath)fs.writeFileSync(summary.archivePath,JSON.stringify(review,null,2)+'\n');return summary;};
 D.strategyState.agentTeamHistory=[...history.map(compact),compact(memory)].slice(-200);
 D.strategyState.agentTeamStats={reviews:stats.reviews+1,riskVetoes:stats.riskVetoes+(team.reports?.risk?.verdict==='VETO'?1:0),criticRejections:stats.criticRejections+(team.reports?.critic?.verdict==='FAIL'?1:0)};
 D.strategyState.triggerProcessing={...(D.strategyState.triggerProcessing||{}),lastTriggerKey:T.triggerKey,processedAt:team.processedAt,decisionKey};
 D.strategyState.lastReviewedAt=team.processedAt;
 D.strategyState.latestReview={...(D.strategyState.latestReview||{}),decision:d.decision,reason:d.reason,reviewedAt:team.processedAt};
 for(const p of D.positions||[])if(p.symbol===d.symbol){p.lastDecision=d.decision;p.lastDecisionReason=d.reason;}
 if(e)D.trades.at(-1).agentDecisionKey=decisionKey;
 const R={schemaVersion:4,processedAt:new Date().toISOString(),baseCommitSha:base,triggerKey:T.triggerKey,portfolioFingerprint:portfolioFingerprint(D),portfolioFingerprintVersion:2,gateReason:G.reason,decision:d.decision,symbol:d.symbol||null,eurAmount:d.eurAmount||null,reason:d.reason,evidenceLimitations:d.evidenceLimitations||[],portfolioMutation:!!e,execution:e||null,model:C.model,consumerMode:'BUDGETED_ANALYST_AND_TRADE_AUDIT',decisionKey,agentTeam:team};
 fs.writeFileSync('quant/decision-event.json',JSON.stringify(event,null,2)+'\n');
 fs.writeFileSync('data.js','window.PORTFOLIO_DATA = '+JSON.stringify(D,null,2)+';\n');
 fs.writeFileSync('quant/decision-result.json',JSON.stringify(R,null,2)+'\n');
}
module.exports={main,validate,mutate,markToMarket,gate,commitBudget};
if(require.main===module)main().catch(e=>{console.error(e.stack||e);process.exit(1)});
