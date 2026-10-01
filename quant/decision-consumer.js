const fs = require('fs');
const vm = require('vm');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) throw new Error('OPENAI_API_KEY is missing');

function readPortfolio() {
  const src = fs.readFileSync('data.js','utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox);
  return { src, data: sandbox.window.PORTFOLIO_DATA };
}
function git(...args){ return execFileSync('git',args,{encoding:'utf8'}).trim(); }
function stableKey(x){ return crypto.createHash('sha256').update(JSON.stringify(x)).digest('hex').slice(0,16); }
function extractOutputText(resp){
  if (typeof resp.output_text === 'string' && resp.output_text.trim()) return resp.output_text.trim();
  const parts=[];
  for (const item of resp.output||[]) for (const c of item.content||[]) if(c.type==='output_text' && c.text) parts.push(c.text);
  return parts.join('\n').trim();
}
function stripFence(s){ return s.replace(/^\s*```(?:json)?\s*/i,'').replace(/\s*```\s*$/,'').trim(); }
function assertDecision(d){
  if (!d || !['HOLD','BUY','SELL','REDUCE'].includes(d.decision)) throw new Error('Invalid decision');
  if (!d.reason || typeof d.reason!=='string') throw new Error('Missing reason');
  if (d.decision!=='HOLD') throw new Error('Fail closed: autonomous portfolio mutations are not enabled until execution validation is implemented');
}
async function callOpenAI(payload){
  const res=await fetch('https://api.openai.com/v1/responses',{
    method:'POST',
    headers:{'Authorization':`Bearer ${API_KEY}`,'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const txt=await res.text();
  if(!res.ok) throw new Error(`OpenAI API ${res.status}: ${txt.slice(0,500)}`);
  return JSON.parse(txt);
}
(async()=>{
  git('fetch','origin','main');
  const baseCommitSha=git('rev-parse','origin/main');
  const {src,data}=readPortfolio();
  const trigger=JSON.parse(fs.readFileSync('quant/trigger.json','utf8'));
  if(!trigger.needsDecision) process.exit(0);

  const event={
    schemaVersion:2,eventType:'QUANT_DECISION_REQUIRED',publishedAt:new Date().toISOString(),
    baseRef:'main',baseCommitSha,triggerKey:trigger.triggerKey,trigger,
    instructions:{
      sourceOfTruth:'main/data.js',
      requiredAction:'Use the supplied current portfolio and trigger observations to decide HOLD/BUY/SELL/REDUCE. Do not assume a trigger is an order.',
      tradeRule:'Paper trading only. Repository mutation is independently validated and fail-closed.',
      staleStateRule:'The workflow rejects output if main changes before commit.'
    }
  };
  fs.writeFileSync('quant/decision-event.json',JSON.stringify(event,null,2)+'\n');

  const compact={
    meta:data.meta,summary:data.summary,positions:data.positions,
    strategyState:data.strategyState,strategyMemory:data.strategyMemory,
    trigger
  };
  const prompt=`You are the decision consumer for a PAPER-TRADING €1000 Quant Challenge.
Return JSON only with keys decision, symbol, reason, confidence, evidenceLimitations.
Allowed decision values: HOLD, BUY, SELL, REDUCE.
A mechanical trigger is only a request for review, never an order.
Use only the supplied repository state and trigger observations. Do not invent current news or prices.
Because this consumer currently has no independent fresh-news retrieval, choose HOLD unless the supplied evidence alone is sufficient for a safe decision.
Do not output code or data.js.

STATE:
${JSON.stringify(compact)}`;

  const response=await callOpenAI({
    model:'gpt-5.4',
    input:prompt,
    reasoning:{effort:'medium'},
    text:{format:{type:'json_object'}}
  });
  const raw=extractOutputText(response);
  if(!raw) throw new Error('No model output');
  const decision=JSON.parse(stripFence(raw));
  assertDecision(decision);

  const result={
    schemaVersion:1,processedAt:new Date().toISOString(),baseCommitSha,
    triggerKey:trigger.triggerKey,decision:decision.decision,symbol:decision.symbol||null,
    reason:decision.reason,confidence:decision.confidence??null,
    evidenceLimitations:decision.evidenceLimitations||[],
    portfolioMutation:false,
    model:'gpt-5.4',
    consumerMode:'PRODUCTION_FAIL_CLOSED_HOLD_ONLY',
    note:'Autonomous model consumer is live. BUY/SELL/REDUCE are deliberately blocked until fresh evidence and deterministic portfolio mutation validation are implemented.'
  };
  result.decisionKey=stableKey({baseCommitSha,triggerKey:result.triggerKey,decision:result.decision,symbol:result.symbol,reason:result.reason});
  fs.writeFileSync('quant/decision-result.json',JSON.stringify(result,null,2)+'\n');

  if(fs.readFileSync('data.js','utf8')!==src) throw new Error('Unexpected data.js mutation');
})().catch(e=>{ console.error(e.stack||e); process.exit(1); });
