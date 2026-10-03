const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const {selectUniverse,main}=require('../daily-universe-selector');
function fixture(){
 const rows=Array.from({length:20},(_,i)=>({symbol:i===0?'SPY':'ASSET'+i,f:{price:100+i,r5:i*.007,r20:i*.013,vol:.20+i*.02,vr:1+i*.08,atr:.01+i*.002,gap:i*.001,dollarVol:1e8,returns:Array.from({length:10},(_,j)=>Math.sin((i+1)*(j+1)*1.79))}}));
 rows.push({symbol:'ILLIQUID',f:{...rows[0].f,dollarVol:1e6}},{symbol:'MISSING',error:'HTTP 429'});return rows;
}
const NOW='2026-10-03T12:00:00.000Z';
test('entire scan persisted; selection uses exact existing v2 weights',()=>{
 const {selection:s,setups}=selectUniverse(fixture(),{},NOW);
 assert.equal(s.candidates.length,22);assert.equal(s.selected.length,5);assert.equal(s.evaluatedCount,21);assert.equal(s.failedCount,1);
 assert.equal(s.candidates.filter(x=>x.status==='SELECTED').length,5);
 assert.match(s.candidates.find(x=>x.symbol==='ILLIQUID').selectionReason,/below \$50m/);
 assert.equal(s.candidates.find(x=>x.symbol==='MISSING').selectionReason,'HTTP 429');
 const elig=fixture().slice(0,20),mean=k=>elig.reduce((n,x)=>n+x.f[k],0)/20;
 // Independent score computation, guarding against accidental weight changes.
 for(const x of elig){x.f.rs5=x.f.r5-elig[0].f.r5;x.f.rs20=x.f.r20-elig[0].f.r20;}
 for(const candidate of s.candidates.filter(x=>x.rank)){
  const f=elig.find(x=>x.symbol===candidate.symbol).f;
  let expected=0;for(const [k,w] of Object.entries({r5:.20,r20:.10,rs5:.15,rs20:.10,atr:.20,vol:.10,vr:.10,gap:.05})){
   const m=mean(k),sd=Math.sqrt(elig.reduce((n,x)=>n+(x.f[k]-m)**2,0)/20)||1,z=(f[k]-m)/sd;expected+=w*(k==='gap'?Math.abs(z):z);
  }
  assert.equal(candidate.quantScore,+expected.toFixed(3));
 }
 for(const x of setups){assert.ok(x.metrics.maxSelectedCorrelation<=.80);assert.equal(x.entryRule.requireParticipation,true);assert.equal(x.status,'WATCH_ONLY');assert.equal(x.expiresAt,'2026-10-06T12:00:00.000Z');assert.ok(x.invalidationRule.level<x.entryRule.level);}
 assert.ok(s.candidates.every(x=>!x.factors||x.factors.regimeFit===null));
});
test('rank change compares full prior daily ranks only',()=>{
 const before=selectUniverse(fixture(),{},'2026-10-02T12:00:00.000Z').selection;
 const next=fixture();next[1].f.r5=1;
 const s=selectUniverse(next,before,NOW).selection,c=s.candidates.find(x=>x.symbol==='ASSET1');
 assert.ok(c.rank<c.previousRank);assert.ok(c.rankChange>0);assert.equal(c.rankChange,c.previousRank-c.rank);
 const legacy=selectUniverse(fixture(),{selectedAt:before.selectedAt,selected:before.selected},NOW).selection;
 assert.ok(legacy.candidates.every(x=>x.rankChangeLabel==='—'));
 const same=selectUniverse(fixture(),before,before.selectedAt).selection;
 assert.equal(same.previousSelectedAt,null);
});
test('correlated duplicates are rejected, missing benchmark fails closed',()=>{
 const rows=fixture();rows[18].f={...rows[19].f,r5:rows[19].f.r5-.001};
 const s=selectUniverse(rows,{},NOW).selection;
 assert.equal(s.candidates.find(x=>x.symbol==='ASSET18').status,'REJECT');
 assert.throws(()=>selectUniverse(rows.filter(x=>x.symbol!=='SPY'),{},NOW),/benchmark unavailable/);
 assert.throws(()=>selectUniverse(rows.slice(0,4),{},NOW),/Insufficient eligible/);
});
test('crypto confirmation requires two 60 minute closes',()=>{
 const rows=fixture();rows[19].symbol='BTC';rows[19].f.dollarVol=0;
 const x=selectUniverse(rows,{},NOW).setups.find(x=>x.symbol==='BTC');assert.ok(x);
 assert.equal(x.entryRule.requiredCloses,2);assert.equal(x.entryRule.timeframeMinutes,60);assert.equal(x.entryRule.requireParticipation,false);
});
test('daily write preserves ledger and stores identical full selection in both files',async()=>{
 const source=fs.readFileSync(require.resolve('../daily-universe-selector'),'utf8'),writes=new Map(),sandbox={window:{}};
 vm.createContext(sandbox);vm.runInContext(fs.readFileSync('data.js','utf8'),sandbox);
 const original=JSON.parse(JSON.stringify(sandbox.window.PORTFOLIO_DATA));
 const mockFs={readFileSync:()=> 'window.PORTFOLIO_DATA = '+JSON.stringify(original)+';',writeFileSync:(path,data)=>writes.set(path,data),mkdirSync:()=>{}};
 const context={module:{exports:{}},require:name=>name==='fs'?mockFs:require(name),console:{log(){},error(){}},Date,Number,Math,Map};
 vm.createContext(context);vm.runInContext(source,context);
 vm.runInContext("series=async function(s){const i=U.indexOf(s)+1;return Array.from({length:22},(_,j)=>({c:100+i*.2+j*.2+Math.sin(j*i*1.79),v:1e7,h:103+i*.2+j*.2,l:98+i*.2+j*.2,o:100+i*.2+j*.2}));}",context);
 await context.module.exports.main();
 const after={window:{}};vm.createContext(after);vm.runInContext(writes.get('data.js'),after);
 const actual=JSON.parse(JSON.stringify(after.window.PORTFOLIO_DATA));
 for(const key of Object.keys(original).filter(k=>k!=='strategyState'))assert.deepEqual(actual[key],original[key],key+' must stay unchanged');
 assert.deepEqual(actual.strategyState.dailyUniverseSelection,JSON.parse(writes.get('quant/daily-universe.json')));
 assert.equal(actual.strategyState.dailyUniverseSelection.candidates.length,context.module.exports.U.length);
 // Failed benchmark must never write a replacement selection or portfolio.
 writes.clear();vm.runInContext("series=async()=>[]",context);await assert.rejects(context.module.exports.main(),/benchmark unavailable/);assert.equal(writes.size,0);
});
