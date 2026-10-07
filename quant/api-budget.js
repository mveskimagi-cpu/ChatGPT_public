'use strict';

// USD microdollars avoid floating-point overspend at the boundary.
// Prices: https://developers.openai.com/api/docs/models/{gpt-6-luna,gpt-5.6-terra}
const LIMIT = 5_000_000, DAILY_LIMIT = 160_000, MAX_DAILY_REQUESTS = 16;
const RATES = Object.freeze({
  'gpt-6-luna': {input:0.10, cached:0.01, write:0.125, output:0.50},
  'gpt-5.6-terra': {input:2, cached:0.20, write:2.50, output:12}
});
const POLICY = Object.freeze({model:'gpt-6-luna', criticModel:'gpt-5.6-terra',
  reasoningEffort:'low', maxOutputTokens:1600, criticMaxOutputTokens:1200,
  maxInputTokens:6000, maxPromptBytes:24000,
  positionReevaluationMinutes:120, watchlistReevaluationMinutes:240,
  monthlyLimitUsd:5, dailyLimitUsd:0.16, maxDailyRequests:MAX_DAILY_REQUESTS,
  pricingVerifiedAt:'2026-10-07', mode:'BUDGETED_ANALYST_AND_TRADE_AUDIT'});
const integer = n => Number.isSafeInteger(n) && n >= 0;
function blocked(reason) { return Object.assign(new Error(reason), {budgetBlocked:true, code:reason}); }
function initialize(D) {
  D.automationHealth ||= {};
  D.automationHealth.apiBudget = {schemaVersion:1, currency:'USD', monthlyLimitUsd:5,
    dailyLimitUsd:0.16, pricingVerifiedAt:POLICY.pricingVerifiedAt, months:{
      '2026-10': {openingMicroUsd:5_040_000,
        openingSource:'User OpenAI October-to-date screenshot, 2026-10-07. Conservative account-level opening balance; not exact Quant-only attribution.',
        spentMicroUsd:0, uncertainMicroUsd:0, requestCount:0, inputTokens:0, outputTokens:0,
        cachedTokens:0, cacheWriteTokens:0, days:{}, pending:{}, recent:[]}
    }};
  return D.automationHealth.apiBudget;
}
function ledger(D, now=Date.now()) {
  const b=D.automationHealth?.apiBudget;
  if(b?.schemaVersion!==1 || !b.months || b.integrityError) throw blocked('BUDGET_LEDGER_UNAVAILABLE');
  const day=new Date(now).toISOString().slice(0,10), month=day.slice(0,7);
  const m=b.months[month] ||= {openingMicroUsd:0,spentMicroUsd:0,uncertainMicroUsd:0,
    requestCount:0,inputTokens:0,outputTokens:0,cachedTokens:0,cacheWriteTokens:0,days:{},pending:{},recent:[]};
  const d=m.days[day] ||= {spentMicroUsd:0,uncertainMicroUsd:0,requestCount:0};
  for(const v of [m.openingMicroUsd,m.spentMicroUsd,m.uncertainMicroUsd,m.requestCount,d.spentMicroUsd,d.uncertainMicroUsd,d.requestCount])
    if(!integer(v)) throw blocked('BUDGET_LEDGER_INVALID');
  for(const p of Object.values(m.pending)) if(!integer(p.maxMicroUsd)) throw blocked('BUDGET_RESERVATION_INVALID');
  return {b,m,d,day,month};
}
function capacity(D, amount=0, now=Date.now()) {
  if(!integer(amount)) throw blocked('INVALID_RESERVATION');
  const {m,d,day,month}=ledger(D,now), pending=Object.values(m.pending);
  const monthUsed=m.openingMicroUsd+m.spentMicroUsd+m.uncertainMicroUsd+pending.reduce((s,p)=>s+p.maxMicroUsd,0);
  const dailyPending=pending.filter(p=>p.day===day), dayUsed=d.spentMicroUsd+d.uncertainMicroUsd+dailyPending.reduce((s,p)=>s+p.maxMicroUsd,0);
  const reason=monthUsed>=LIMIT||monthUsed+amount>LIMIT?'MONTHLY_BUDGET_EXHAUSTED':
    dayUsed>=DAILY_LIMIT||dayUsed+amount>DAILY_LIMIT?'DAILY_BUDGET_EXHAUSTED':
    d.requestCount+dailyPending.length>=MAX_DAILY_REQUESTS?'DAILY_REQUEST_LIMIT':null;
  return {allowed:!reason,reason,month,day,monthUsedMicroUsd:monthUsed,dayUsedMicroUsd:dayUsed,
    remainingMicroUsd:Math.max(0,LIMIT-monthUsed),monthlyLimitUsd:5,dailyLimitUsd:0.16};
}
function maximumCost(model,inputTokens,maxOutputTokens) {
  const r=RATES[model];
  if(!r||!integer(inputTokens)||inputTokens>POLICY.maxInputTokens||!integer(maxOutputTokens)||maxOutputTokens>1600)
    throw blocked('UNPRICED_OR_OVERSIZED_REQUEST');
  // Assume cache-write price, no cache savings, and a 10% metering margin.
  return Math.ceil((inputTokens*Math.max(r.input,r.write)+maxOutputTokens*r.output)*1.10);
}
function reserve(D,{id,role,model,inputTokens,maxOutputTokens},now=Date.now()) {
  if(typeof id!=='string'||!id) throw blocked('MISSING_REQUEST_ID');
  const maxMicroUsd=maximumCost(model,inputTokens,maxOutputTokens), c=capacity(D,maxMicroUsd,now);
  if(!c.allowed)throw blocked(c.reason);
  const {m,day,month}=ledger(D,now);
  if(m.pending[id]||m.recent.some(r=>r.id===id))throw blocked('DUPLICATE_REQUEST');
  const p={id,role,model,inputTokens,maxOutputTokens,maxMicroUsd,day,month,at:new Date(now).toISOString()};
  m.pending[id]=p;
  return p;
}
function usageCost(model,u) {
  const r=RATES[model], input=u?.input_tokens,output=u?.output_tokens,
    cached=u?.input_tokens_details?.cached_tokens??0,write=u?.input_tokens_details?.cache_write_tokens??0;
  if(!r||![input,output,cached,write].every(integer)||cached+write>input) return null;
  return {microUsd:Math.ceil((input-cached-write)*r.input+cached*r.cached+write*r.write+output*r.output),
    input,output,cached,write};
}
function settle(D,reservation,response,{knownUnbilled=false}={}) {
  const {b}=ledger(D,Date.parse(reservation.at)), m=b.months[reservation.month],p=m.pending[reservation.id];
  if(!p)throw blocked('MISSING_RESERVATION');
  const d=m.days[p.day], u=response?usageCost(p.model,response.usage):null;
  const charge=knownUnbilled?0:u?.microUsd??p.maxMicroUsd;
  const uncertain=!knownUnbilled&&!u;
  m[uncertain?'uncertainMicroUsd':'spentMicroUsd']+=charge;
  d[uncertain?'uncertainMicroUsd':'spentMicroUsd']+=charge;
  m.requestCount++;d.requestCount++;
  if(u){m.inputTokens+=u.input;m.outputTokens+=u.output;m.cachedTokens+=u.cached;m.cacheWriteTokens+=u.write;}
  delete m.pending[p.id];
  m.recent=[...m.recent,{...p,chargeMicroUsd:charge,status:uncertain?'UNCONFIRMED':'METERED',
    responseId:response?.id||null,usage:u}].slice(-20);
  if(charge>p.maxMicroUsd || (u&&(u.input>p.inputTokens||u.output>p.maxOutputTokens)))
    b.integrityError='PROVIDER_USAGE_EXCEEDED_RESERVED_BOUND';
  return {chargeMicroUsd:charge,uncertain};
}
module.exports={POLICY,RATES,LIMIT,DAILY_LIMIT,initialize,ledger,capacity,maximumCost,reserve,settle,usageCost,blocked};
