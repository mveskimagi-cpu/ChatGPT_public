'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const {apiError,quotaFailure,quotaGate,decisionGate,recordUsage}=require('../decision-policy');
const {positionRules}=require('../trigger-engine');
const now=Date.parse('2026-10-07T14:00:00Z');
function fixture(){
 const trigger={type:'POSITION_TARGET_LEVEL',symbol:'TEST',condition:'ABOVE $100'};
 return {now,T:{triggers:[trigger]},D:{positions:[{symbol:'TEST'}]},Q:{TEST:{priceUsd:101,marketTime:new Date(now).toISOString()}},
   C:{positionReviewMovePct:2,watchlistMaterialMovePct:2,positionReevaluationMinutes:60,watchlistReevaluationMinutes:240},
   R:{processedAt:new Date(now-15*60000).toISOString(),portfolioFingerprintVersion:2,portfolioFingerprint:'abc'},
   E:{trigger:{triggers:[{...trigger}]},freshEvidence:{quotes:{TEST:{priceUsd:101}}}},portfolioFingerprint:'abc'};
}
test('same satisfied target no longer bypasses the hourly gate',()=>{assert.deepEqual(decisionGate(fixture()).reason,'DUPLICATE_SUPPRESSED');});
test('old market close never invokes a team, even with new trigger and overdue review',()=>{const f=fixture();f.Q.TEST.marketTime='2026-10-06T20:00:00Z';f.T.triggers.push({symbol:'TEST',type:'NEW'});f.R.processedAt='2026-10-06T20:01:00Z';assert.equal(decisionGate(f).reason,'NO_FRESH_TRIGGER_QUOTES');});
test('new invalidation remains immediate; repeated breach waits for material evidence',()=>{const f=fixture();f.T.triggers=[{type:'POSITION_INVALIDATION_LEVEL',symbol:'TEST',condition:'BELOW $105'}];assert.equal(decisionGate(f).reason,'NEW_POSITION_INVALIDATION');f.E.trigger.triggers=f.T.triggers;assert.equal(decisionGate(f).call,false);f.Q.TEST.priceUsd=97;assert.equal(decisionGate(f).reason,'POSITION_MATERIAL_MOVE');});
test('fresh unchanged review still runs when the hourly limit expires',()=>{const f=fixture();f.R.processedAt=new Date(now-61*60000).toISOString();assert.equal(decisionGate(f).reason,'POSITION_REEVALUATION_DUE');});
test('a new setup or portfolio change still requests a review',()=>{const f=fixture();f.T.triggers[0]={type:'WATCHLIST_BREAKOUT_CONFIRMED',symbol:'TEST',setupId:'new'};assert.equal(decisionGate(f).call,true);f.portfolioFingerprint='changed';assert.equal(decisionGate(f).reason,'PORTFOLIO_CHANGED');});
test('entry breakout accidentally copied as target is excluded, explicit targets survive',()=>{const p={entryRule:{operator:'ABOVE',level:163.17},target:'Break above $163.17 with sustained participation.',invalidationRule:{operator:'BELOW',level:156.85}};assert.deepEqual(positionRules(p,'target'),[]);assert.deepEqual(positionRules(p,'invalidation'),[{op:'BELOW',level:156.85}]);assert.deepEqual(positionRules({...p,targetRule:{operator:'ABOVE',level:170}},'target'),[{op:'ABOVE',level:170}]);assert.deepEqual(positionRules({...p,target:'Review a trim on a break above $170.'},'target'),[{op:'ABOVE',level:170}]);});
test('billing exhaustion is distinct from transient throttling and server errors',()=>{
 const quota=apiError('QUANT_MACRO',429,JSON.stringify({error:{code:'credit_balance_exhausted',type:'insufficient_quota'}}));assert.equal(quota.quotaExhausted,true);
 for(const [code,status] of [['rate_limit_exceeded',429],['server_error',500]]){const e=apiError('PM',status,JSON.stringify({error:{code}}));assert.equal(e.quotaExhausted,false);assert.throws(()=>quotaFailure({},e,now));}
});
test('quota circuit stays blocked for six hours; eligible probe/manual retry can recover',()=>{const error=apiError('RISK',429,'{"error":{"type":"insufficient_quota"}}');const h=quotaFailure(null,error,now);assert.equal(h.status,'BLOCKED_QUOTA');assert.equal(h.role,'RISK');assert.equal(quotaGate(h,now+5*3600000).call,false);assert.equal(quotaGate(h,now+6*3600000).call,true);assert.equal(quotaGate(h,now,true).call,true);const second=quotaFailure(h,error,now+6*3600000);assert.equal(second.failedProbes,2);assert.equal(second.firstBlockedAt,h.firstBlockedAt);assert.equal(quotaGate({...second,status:'AVAILABLE'},now).call,true);});
test('API token counters survive a later role failure without inventing a decision',()=>{const h={};recordUsage(h,'QUANT_MACRO',{id:'r1',usage:{input_tokens:100,output_tokens:50,input_tokens_details:{cached_tokens:20}}},'configured',now);const blocked={...h,...quotaFailure(h,apiError('RISK',429,'{"error":{"code":"credit_balance_exhausted"}}'),now)};assert.deepEqual(blocked.usage,{requests:1,inputTokens:100,outputTokens:50,cachedInputTokens:20});assert.equal(blocked.decision,undefined);});

test('consumer persists quota pause, skips repeated API calls and recovers without losing ledger/history',async()=>{
 const fs=require('fs'),os=require('os'),path=require('path'),vm=require('vm'),{main}=require('../decision-consumer');
 const cwd=process.cwd(),tmp=fs.mkdtempSync(path.join(os.tmpdir(),'quant-quota-test-'));
 const D={meta:{lastTrade:'unchanged'},summary:{initial:1000,cash:1000,value:1000,realized:0,unrealized:0,total:0,totalPct:0},positions:[],trades:[],strategyState:{watchlist:[{symbol:'TEST',setupId:'t',expiresAt:'2099-01-01T00:00:00Z'}],triggerProcessing:{lastTriggerKey:'old'},agentTeamHistory:[]}};
 require('../api-budget').initialize(D);D.automationHealth.apiBudget.months['2026-10'].openingMicroUsd=0;
 const write=d=>fs.writeFileSync('data.js','window.PORTFOLIO_DATA = '+JSON.stringify(d)+';\n');
 const read=()=>{const s={window:{}};vm.runInNewContext(fs.readFileSync('data.js','utf8'),s);return JSON.parse(JSON.stringify(s.window.PORTFOLIO_DATA))};
 try{
   process.chdir(tmp);fs.mkdirSync('quant');write(D);
   fs.writeFileSync('quant/trigger.json',JSON.stringify({needsDecision:true,triggerKey:'new',triggers:[{symbol:'TEST',type:'WATCHLIST_BREAKOUT_CONFIRMED'}]}));
   const previous='{"processedAt":"2026-01-01T00:00:00Z","decision":"HOLD"}\n';fs.writeFileSync('quant/decision-result.json',previous);fs.writeFileSync('quant/decision-event.json','{}\n');
   let calls=0;
   const deps={gitRead:()=> 'same-sha',quoteRead:async()=>({priceUsd:100,marketTime:new Date().toISOString()}),fxRead:async()=>({usdPerEur:1.1,marketTime:new Date().toISOString()}),teamRun:async()=>{calls++;throw apiError('RISK',429,'{"error":{"code":"credit_balance_exhausted"}}')}};
   await main(deps);let after=read();assert.equal(after.automationHealth.openai.status,'BLOCKED_QUOTA');assert.deepEqual(after.trades,D.trades);assert.deepEqual(after.positions,D.positions);assert.equal(after.summary.cash,1000);assert.equal(after.meta.lastTrade,'unchanged');assert.equal(after.strategyState.triggerProcessing.lastTriggerKey,'old');assert.equal(fs.readFileSync('quant/decision-result.json','utf8'),previous);
   await main(deps);assert.equal(calls,1);assert.equal(read().strategyState.agentTeamHistory.length,0);
   after=read();after.automationHealth.openai.nextProbeAt='2000-01-01T00:00:00Z';write(after);
   await main({...deps,teamRun:async()=>({processedAt:new Date().toISOString(),tradePermitted:false,reports:{},decision:{decision:'HOLD',reason:'Recovery fixture'}})});
   after=read();assert.equal(after.automationHealth.openai.status,'AVAILABLE');assert.equal(after.strategyState.agentTeamHistory.length,1);assert.equal(after.strategyState.triggerProcessing.lastTriggerKey,'new');assert.deepEqual(after.trades,[]);assert.equal(after.summary.cash,1000);
   const summary=after.strategyState.agentTeamHistory[0],full=JSON.parse(fs.readFileSync(summary.archivePath,'utf8'));
   assert.equal(full.decision.reason,'Recovery fixture');assert.equal(summary.decision.reason,undefined);assert.equal(full.decisionKey,summary.decisionKey);assert.equal(after.strategyState.agentTeamStats.reviews,1);
 }finally{process.chdir(cwd);fs.rmSync(tmp,{recursive:true,force:true})}
});
test('review archive paths cannot escape their directory',()=>{const {compactReview}=require('../decision-policy');assert.throws(()=>compactReview({decisionKey:'../../data'}),/Invalid/);});
