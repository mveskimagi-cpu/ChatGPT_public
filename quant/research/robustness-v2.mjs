// Research-only evaluation v2. Requires frozen Date,EWA,EWC adjusted-close CSV.
// Signals at t-2 close; execution proxy at t-1 close; earn t-1 -> t.
// Deliberate one-session delay avoids pretending to fill at the observed signal close.
import fs from 'node:fs';
export function parse(csv) {
 const lines=csv.trim().split(/\r?\n/);if(lines.shift().trim()!=='Date,EWA,EWC')throw Error('Expected Date,EWA,EWC');
 const a=lines.map(s=>{let [date,x,y]=s.split(',');return {date,a:Number(x),b:Number(y)}});
 if(a.length<500)throw Error('Need >=500 observations');
 for(let i=0;i<a.length;i++){if(!(a[i].a>0&&a[i].b>0&&Number.isFinite(a[i].a)&&Number.isFinite(a[i].b)))throw Error('Invalid price');if(i&&a[i].date<=a[i-1].date)throw Error('Nonmonotonic date');}
 return a;
}
const mean=x=>x.reduce((s,v)=>s+v,0)/x.length;
const std=x=>Math.sqrt(mean(x.map(v=>(v-mean(x))**2)));
export function target(a,t,method,bps=0) {
 if(method==='hold')return 1;
 const h=a.slice(t-61,t-1); // last observation t-2
 const mom=a[t-2].a/a[t-22].a-1;
 if(method==='regime')return +(mom>0&&a[t-2].b>mean(h.map(v=>v.b)));
 if(method==='cost_gate')return +(mom>Math.max(.025,2*bps/1e4));
 if(method==='kalman'||method==='ols'){
 const x=h.map(v=>Math.log(v.b)),y=h.map(v=>Math.log(v.a));
 let beta=1;
 if(method==='ols'){const mx=mean(x),my=mean(y),den=x.reduce((s,v)=>s+(v-mx)**2,0);beta=den>1e-10?x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0)/den:0;}
 else {let p=1;for(let i=0;i<x.length;i++){p+=1e-5;let k=p*x[i]/(p*x[i]*x[i]+.005);beta+=k*(y[i]-beta*x[i]);p*=(1-k*x[i]);}}
 const alpha=mean(y.map((v,i)=>v-beta*x[i])),r=y.map((v,i)=>v-alpha-beta*x[i]);return +(std(r)>1e-8&&(r.at(-1)-mean(r))/std(r)<-1.5);
 }
 throw Error('Unknown strategy');
}
export function simulate(a,from,to,method,bps=0) {
 if(from<90||to>a.length||to<=from)throw Error('Invalid interval');
 let equity=1000,pos=0,peak=1000,maxdd=0,turns=0;const returns=[];
 for(let t=from;t<to;t++){
 const wanted=target(a,t,method,bps);
 const before=equity;
 if(wanted!==pos){equity*=1-bps/10000;turns++;pos=wanted;}
 equity*=1+pos*(a[t].a/a[t-1].a-1);
 const r=equity/before-1;returns.push(r);
 peak=Math.max(peak,equity);maxdd=Math.max(maxdd,1-equity/peak);
 }
 const v=std(returns),sharpe=v>1e-12?mean(returns)/v*Math.sqrt(252):null;
 return {strategy:method,costBps:bps,start:a[from].date,end:a[to-1].date,netReturnPct:+((equity/1000-1)*100).toFixed(2),netSharpe:sharpe===null?null:+sharpe.toFixed(3),maxDrawdownPct:+(maxdd*100).toFixed(2),transactions:turns,observations:returns.length};
}
export function evaluate(a){
 const folds=[[.4,.6],[.6,.8],[.8,1]].map(([s,e])=>[Math.floor(a.length*s),Math.floor(a.length*e)]);
 const results=[];for(const [start,end] of folds)for(const method of ['hold','ols','kalman','regime','cost_gate'])for(const bps of [0,10,30,60])results.push(simulate(a,start,end,method,bps));
 return {source:'Frozen external adjusted closes; independently unverified',execution:'Signals through t-2, trade proxy at t-1 close, hold until t close',limitations:'Long-only EWA only; not market-neutral pairs; adjusted-close proxy cannot model real bid/ask/open fills; USD results not EUR; no borrow or FX; exploratory fixed-parameter test',folds:folds.map(([s,e])=>[a[s].date,a[e-1].date]),results};
}
if(process.argv[1]?.endsWith('robustness-v2.mjs'))console.log(JSON.stringify(evaluate(parse(fs.readFileSync(process.argv[2],'utf8'))),null,2));
