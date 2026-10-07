'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const B=require('../api-budget'),{callModel}=require('../model-client'),{runBudgetTeam}=require('../budget-team');
const now=Date.parse('2026-11-03T15:00:00Z');
function data(){const D={summary:{initial:1000,cash:1000,value:1000},positions:[],trades:[],strategyState:{}};B.initialize(D);return D;}
const usage={input_tokens:1000,output_tokens:100,input_tokens_details:{cached_tokens:200,cache_write_tokens:300}};
const response={status:'completed',id:'test-response',usage,output_text:'{"decision":"HOLD","reason":"No fresh setup"}'};
const http=(x,status=200)=>({ok:status===200,status,text:async()=>JSON.stringify(x)});
test('October opening balance is conservative, blocks further calls; November starts a new allowance',()=>{
 const D=data();assert.equal(B.capacity(D,0,Date.parse('2026-10-07')).reason,'MONTHLY_BUDGET_EXHAUSTED');
 assert.equal(B.capacity(D,0,now).remainingMicroUsd,5_000_000);
 assert.equal(D.automationHealth.apiBudget.months['2026-10'].openingMicroUsd,5_040_000);
});
test('monthly/daily limits include durable unfinished calls and cannot be raised in data',()=>{
 const D=data(),m=B.ledger(D,now).m;m.spentMicroUsd=4_990_000;D.automationHealth.apiBudget.monthlyLimitUsd=1000;
 assert.throws(()=>B.reserve(D,{id:'a',role:'CRITIC',model:'gpt-5.6-terra',inputTokens:6000,maxOutputTokens:1200},now),/MONTHLY/);
 m.spentMicroUsd=0;B.ledger(D,now).d.spentMicroUsd=159_999;
 assert.throws(()=>B.reserve(D,{id:'b',role:'QUANT_MACRO',model:'gpt-6-luna',inputTokens:1000,maxOutputTokens:1600},now),/DAILY/);
});
test('reservation survives restart, malformed counters fail closed, and unknown rates cannot spend',()=>{
 const D=data(),p=B.reserve(D,{id:'a',role:'CRITIC',model:'gpt-5.6-terra',inputTokens:1000,maxOutputTokens:1200},now);
 assert.equal(B.capacity(JSON.parse(JSON.stringify(D)),0,now).monthUsedMicroUsd,p.maxMicroUsd);
 assert.throws(()=>B.maximumCost('unknown',10,100),/UNPRICED/);
 D.automationHealth.apiBudget.months['2026-11'].spentMicroUsd=-1;assert.throws(()=>B.capacity(D,0,now),/INVALID/);
});
test('settlement counts cache writes, output and input; timeout retains the full reserved bound',()=>{
 const D=data(),p=B.reserve(D,{id:'a',role:'CRITIC',model:'gpt-5.6-terra',inputTokens:1000,maxOutputTokens:1200},now);
 B.settle(D,p,{usage});assert.equal(B.capacity(D,0,now).monthUsedMicroUsd,2990);
 const q=B.reserve(D,{id:'b',role:'CRITIC',model:'gpt-5.6-terra',inputTokens:1000,maxOutputTokens:1200},now);
 B.settle(D,q,null);assert.equal(B.capacity(D,0,now).monthUsedMicroUsd,2990+q.maxMicroUsd);
});
test('client proves token count and commits reservation before any generation; no costly fallback',async()=>{
 const D=data(),events=[];await callModel({role:'QUANT_MACRO',state:{},D,health:{},key:'test',now:()=>now,id:'x',
   persist:async()=>{events.push('persist');assert.ok(B.capacity(D,0,now).monthUsedMicroUsd>0);},
   fetchImpl:async(url,opts)=>{const body=JSON.parse(opts.body);if(url.endsWith('/input_tokens')){events.push('count');return http({input_tokens:1000});}
     events.push('generate');assert.equal(body.model,'gpt-6-luna');assert.equal(body.max_output_tokens,1600);assert.equal(body.service_tier,'default');return http(response);}});
 assert.deepEqual(events,['count','persist','generate']);assert.equal(B.ledger(D,now).m.requestCount,1);
});
test('failed reservation commit, missing meter, oversized prompt and exhausted month cannot generate',async()=>{
 for(const mode of ['commit','count','prompt','month']){
   const D=data();let generations=0;
   if(mode==='month')B.ledger(D,now).m.spentMicroUsd=5_000_000;
   await assert.rejects(callModel({role:'QUANT_MACRO',state:mode==='prompt'?{huge:'x'.repeat(30000)}:{},D,health:{},key:'test',now:()=>now,
     persist:async()=>{if(mode==='commit')throw Error('write failed');},
     fetchImpl:async url=>{if(url.endsWith('/input_tokens'))return http(mode==='count'?{}:{input_tokens:1000});generations++;return http(response);}}));
   assert.equal(generations,0,mode);
 }
});
test('provider timeout keeps charged maximum; incomplete JSON is charged but never returned as a decision',async()=>{
 for(const mode of ['timeout','incomplete','json']){
   const D=data();await assert.rejects(callModel({role:'QUANT_MACRO',state:{},D,health:{},key:'test',now:()=>now,
     persist:async()=>{},fetchImpl:async url=>{
       if(url.endsWith('/input_tokens'))return http({input_tokens:1000});
       if(mode==='timeout')throw Error('timeout');
       return http({...response,status:mode==='incomplete'?'incomplete':'completed',output_text:'not JSON'});
     }}));
   assert.ok(B.capacity(D,0,now).monthUsedMicroUsd>0);assert.equal(B.ledger(D,now).m.requestCount,1);
 }
});
test('16-request daily guard still applies to tiny successful responses',()=>{
 const D=data();B.ledger(D,now).d.requestCount=16;assert.equal(B.capacity(D,0,now).reason,'DAILY_REQUEST_LIMIT');
});
function tradingFixture(){
 const D=data(),setup={symbol:'TEST',setupId:'t',entryRule:{level:99,timeframeMinutes:5,requiredCloses:1,requireParticipation:true},invalidationRule:{level:95},expiresAt:'2026-11-04T15:00:00Z'};
 D.strategyState.watchlist=[setup];
 return {D,T:{triggers:[{symbol:'TEST',setupId:'t',type:'WATCHLIST_BREAKOUT_CONFIRMED'}]},
 Q:{TEST:{priceUsd:100,marketTime:new Date(now).toISOString(),confirmation:{t:{pass:true}}}},
 F:{usdPerEur:1.1,marketTime:new Date(now).toISOString()},C:{maxBuyEur:250},now};
}
test('HOLD costs one call; eligible trade costs two; critic can veto and hard gates cost no audit',async()=>{
 for(const mode of ['HOLD','BUY','VETO','UNCONFIRMED']){
   const f=tradingFixture(),called=[];if(mode==='UNCONFIRMED')f.Q.TEST.confirmation.t.pass=false;
   const r=await runBudgetTeam({...f,call:async role=>{called.push(role);return role==='CRITIC'?{verdict:mode==='VETO'?'FAIL':'PASS',reason:'Audit'}:
     {decision:mode==='HOLD'?'HOLD':'BUY',symbol:'TEST',eurAmount:100,reason:'Fixture'};}});
   assert.equal(called.length,['HOLD','UNCONFIRMED'].includes(mode)?1:2);assert.equal(r.tradePermitted,mode==='BUY');
   if(mode==='HOLD')assert.equal(r.reports.critic.verdict,'NOT_RUN');
 }
});
test('a budget block on the trade audit cannot commit the unreviewed analyst trade',async()=>{
 const f=tradingFixture();await assert.rejects(runBudgetTeam({...f,call:async role=>{
   if(role==='CRITIC')throw B.blocked('DAILY_BUDGET_EXHAUSTED');
   return {decision:'BUY',symbol:'TEST',eurAmount:100,reason:'Fixture'};}}),/DAILY_BUDGET/);
 assert.deepEqual(f.D.trades,[]);assert.equal(f.D.summary.cash,1000);
});
