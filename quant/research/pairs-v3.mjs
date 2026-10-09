// Isolated research, EWA/EWC two-leg long/short pair, frozen adjusted-close data.
// Not executable prices: adjusted-close daily return approximation, no FX, borrow availability or slippage.
import fs from 'node:fs';
export function parse(csv){
 const lines=csv.trim().split(/\r?\n/);if(lines.shift().trim()!=='Date,EWA,EWC')throw Error('Expected Date,EWA,EWC');
 const rows=lines.map(s=>{const [date,x,y]=s.split(',');return {date,a:+x,b:+y}});
 if(rows.length<500)throw Error('Too few rows');
 rows.forEach((r,i)=>{if(!Number.isFinite(r.a)||!Number.isFinite(r.b)||r.a<=0||r.b<=0||(i&&r.date<=rows[i-1].date))throw Error('Invalid date or price')});
 return rows;
}
const mean=a=>a.reduce((s,v)=>s+v,0)/a.length;
const sd=a=>Math.sqrt(mean(a.map(v=>(v-mean(a))**2)));
export function signal(rows,t,model='kalman'){
 const h=rows.slice(t-61,t-1); // t-2 is last observed; t-1 is fill proxy
 const x=h.map(v=>Math.log(v.b)),y=h.map(v=>Math.log(v.a));
 let beta=1;
 if(model==='ols'){const mx=mean(x),my=mean(y),den=x.reduce((s,v)=>s+(v-mx)**2,0);beta=den>1e-10?x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0)/den:0;}
 else if(model==='kalman'){let p=1;for(let i=0;i<x.length;i++){p+=1e-5;const k=p*x[i]/(p*x[i]*x[i]+.005);beta+=k*(y[i]-beta*x[i]);p*=(1-k*x[i]);}}
 else throw Error('Bad model');
 const alpha=mean(y.map((v,i)=>v-beta*x[i]));const spread=y.map((v,i)=>v-alpha-beta*x[i]);const dev=sd(spread);
 return {z:dev>1e-8?(spread.at(-1)-mean(spread))/dev:0,beta:Math.max(.1,Math.min(3,Math.abs(beta)))};
}
export function simulate(rows,from,to,model,costBps=10,borrowBpsAnnual=100){
 if(from<90||to>rows.length||from>=to)throw Error('Invalid interval');
 let wealth=1000,peak=1000,drawdown=0,turnover=0,changes=0,weights=[0,0],state=0;const returns=[];
 for(let t=from;t<to;t++){
  const {z,beta}=signal(rows,t,model);
  if(state===0){if(z<=-2)state=1;else if(z>=2)state=-1;}
  else if(Math.abs(z)<=.5)state=0;
  else if(state===1&&z>=2)state=-1;
  else if(state===-1&&z<=-2)state=1;
  // Gross leverage 1, with EWA and EWC opposite signed weights.
  const wanted=[state/(1+beta),-state*beta/(1+beta)];
  const turn=Math.abs(wanted[0]-weights[0])+Math.abs(wanted[1]-weights[1]);
  if(turn>1e-10)changes++;
  turnover+=turn;
  const rA=rows[t].a/rows[t-1].a-1,rB=rows[t].b/rows[t-1].b-1;
  const shortGross=Math.max(0,-wanted[0])+Math.max(0,-wanted[1]);
  const pnl=wanted[0]*rA+wanted[1]*rB-turn*costBps/1e4-shortGross*borrowBpsAnnual/1e4/252;
  wealth*=1+pnl;returns.push(pnl);weights=wanted;
  peak=Math.max(peak,wealth);drawdown=Math.max(drawdown,1-wealth/peak);
 }
 const vol=sd(returns);return {model,costBps,borrowBpsAnnual,start:rows[from].date,end:rows[to-1].date,netReturnPct:+((wealth/1000-1)*100).toFixed(2),netSharpe:vol>1e-12?+(mean(returns)/vol*Math.sqrt(252)).toFixed(3):null,maxDrawdownPct:+(drawdown*100).toFixed(2),grossTurnover:+turnover.toFixed(2),positionChanges:changes};
}
export function evaluate(rows){
 const folds=[[.4,.6],[.6,.8],[.8,1]].map(([a,b])=>[Math.floor(rows.length*a),Math.floor(rows.length*b)]);
 const results=[];
 for(let i=0;i<folds.length;i++)for(const model of ['ols','kalman'])for(const cost of [0,10,30,60])for(const borrow of [0,100,300])results.push({fold:i+1,...simulate(rows,...folds[i],model,cost,borrow)});
 return {method:'Research two-leg dollar-gross-1, signal t-2, approximate rebalance at t-1 adjusted close, earn t-1 to t',source:'External frozen adjusted EWA/EWC closes; provenance not independently verified',folds:folds.map(([a,b])=>[rows[a].date,rows[b-1].date]),limitations:'No real executable OHLC/bid-ask, no actual borrow availability/financing/margin, no EUR conversion; adjusted-price returns proxy; state-space specification and pair selection not validated; results are exploratory',results};
}
if(process.argv[1]?.endsWith('pairs-v3.mjs'))console.log(JSON.stringify(evaluate(parse(fs.readFileSync(process.argv[2],'utf8'))),null,2));
