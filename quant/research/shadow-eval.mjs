// Research-only, deterministic. Input CSV Date,EWA,EWC. Run: node shadow-eval.mjs prices.csv
import fs from 'node:fs';
const backtest = function backtest(csv){
 const p=csv.trim().split(/\r?\n/).slice(1).map(l=>{let a=l.split(',');return [a[0],+a[1],+a[2]]});
 const mean=a=>a.reduce((s,v)=>s+v,0)/a.length, sd=a=>Math.sqrt(mean(a.map(x=>(x-mean(a))**2)));
 const start=Math.floor(p.length*.6), results=[];
 for(const name of ['hold','kalman','regime','cost_gate'])for(const cost of [0,10,30,60]){
 let wealth=1000,pos=0,trades=0,peak=1000,dd=0,ret=[];
 for(let t=start;t<p.length;t++){
 const h=p.slice(t-60,t),x=h.map(r=>Math.log(r[2])),y=h.map(r=>Math.log(r[1]));
 let beta=1,variance=1;
 if(name==='kalman')for(let i=0;i<x.length;i++){variance+=.00001;let k=variance*x[i]/(variance*x[i]*x[i]+.005);beta+=k*(y[i]-beta*x[i]);variance*=(1-k*x[i]);}
 const alpha=mean(y.map((v,i)=>v-beta*x[i])),res=y.map((v,i)=>v-alpha-beta*x[i]),z=sd(res)>1e-8?(res.at(-1)-mean(res))/sd(res):0;
 const momentum=p[t-1][1]/p[t-21][1]-1;
 const regime=p[t-1][2]>mean(h.map(r=>r[2]));
 const target=name==='hold'?1:name==='kalman'?+(z < -1.5):name==='regime'?+(momentum>0&&regime):+(momentum>Math.max(.025,2*cost/10000));
 if(target!==pos){wealth*=1-cost/10000;trades++;pos=target}
 const r=pos*(p[t][1]/p[t-1][1]-1);wealth*=1+r;ret.push(r);peak=Math.max(peak,wealth);dd=Math.max(dd,1-wealth/peak);
 }
 results.push({strategy:name,cost_bps_per_side:cost,return_pct:+((wealth/1000-1)*100).toFixed(2),ending_value:+wealth.toFixed(2),gross_signal_sharpe_before_costs:sd(ret)>0?+(mean(ret)/sd(ret)*Math.sqrt(252)).toFixed(2):null,max_drawdown_pct:+(100*dd).toFixed(2),transactions:trades});
 }
 return {data_source:"maddoxk/quant-statarb-research data/prices.csv; provenance flag real (unverified independently)",rows:p.length,train_end:p[start-1][0],test_start:p[start][0],test_end:p.at(-1)[0],execution:"previous close signal, next close-to-close EWA return; optimistic close proxy; not executable fill",caveats:"No SPY data; EWC trend proxy for regime; EWA long-only, not pair-neutral; no FX or borrow, no multiple-testing control; Kalman beta is simplified and no independent calibration; performance is exploratory",results};
};
const csv=fs.readFileSync(process.argv[2],'utf8');
console.log(JSON.stringify(backtest(csv),null,2));
