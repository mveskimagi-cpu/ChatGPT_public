#!/usr/bin/env node
const fs=require('fs'),vm=require('vm'),https=require('https');
const U=["AAPL","MSFT","NVDA","AMZN","META","GOOGL","TSLA","AVGO","AMD","QCOM","MU","ON","HPE","PLTR","COIN","MSTR","ORCL","CRM","ADBE","INTC","AMAT","LRCX","KLAC","MRVL","ARM","SMCI","DELL","IBM","CSCO","NOW","PANW","CRWD","SNOW","SHOP","UBER","ABNB","NFLX","DIS","NKE","SBUX","MCD","WMT","COST","TGT","HD","LOW","JPM","BAC","WFC","C","GS","MS","SCHW","V","MA","AXP","PYPL","HOOD","XOM","CVX","COP","SLB","OXY","LLY","UNH","JNJ","PFE","MRK","ABBV","TMO","ISRG","CAT","DE","GE","BA","LMT","RTX","NOC","GM","F","RIVN","LCID","NEE","DUK","SO","SPY","QQQ","IWM","DIA","RSP","XLK","XLF","XLE","XLV","XLI","XLY","XLP","XLU","XLB","XLRE","SMH","SOXX","KRE","ARKK","GLD","SLV","TLT","HYG","LQD","USO","UNG","EEM","FXI","EWJ","EWG","EWQ","EWU","BTC","ETH"],N=5,L=20,MAX=.80;
function load(){const s={window:{}};vm.createContext(s);vm.runInContext(fs.readFileSync('data.js','utf8'),s);return s.window.PORTFOLIO_DATA}
function get(url){return new Promise((ok,no)=>https.get(url,{headers:{'User-Agent':'quant-daily-selector/1.0'}},r=>{let d='';r.on('data',x=>d+=x);r.on('end',()=>{if(r.statusCode<200||r.statusCode>=300)return no(Error('HTTP '+r.statusCode));try{ok(JSON.parse(d))}catch(e){no(e)}})}).on('error',no).setTimeout(15000,function(){this.destroy(Error('Market-data request timed out'))}))}
const mean=a=>a.reduce((x,y)=>x+y,0)/a.length,sd=a=>{const m=mean(a);return Math.sqrt(mean(a.map(x=>(x-m)**2)))};
async function series(s){if(s==='BTC'||s==='ETH'){const x=await get('https://api.exchange.coinbase.com/products/'+s+'-USD/candles?granularity=86400');return x.sort((a,b)=>a[0]-b[0]).slice(-(L+2)).map(x=>({c:+x[4],v:+x[5]}))}const x=await get('https://query1.finance.yahoo.com/v8/finance/chart/'+s+'?interval=1d&range=2mo'),r=x.chart?.result?.[0],q=r?.indicators?.quote?.[0];if(!q)return[];return q.close.map((c,i)=>({c,v:q.volume[i],h:q.high?.[i],l:q.low?.[i],o:q.open?.[i]})).filter(x=>Number.isFinite(x.c)).slice(-(L+2))}
function feat(a){const p=a.map(x=>x.c),ret=p.slice(1).map((x,i)=>x/p[i]-1),v=a.map(x=>x.v).filter(Number.isFinite),last=a.at(-1),prev=a.at(-2),trs=a.slice(1).map((x,i)=>Math.max((x.h??x.c)-(x.l??x.c),Math.abs((x.h??x.c)-a[i].c),Math.abs((x.l??x.c)-a[i].c))),atr=mean(trs.slice(-14))/(last.c||1),gap=Number.isFinite(last.o)&&prev?last.o/prev.c-1:0,dollarVol=v.length?last.c*mean(v.slice(-10)):0;return{price:p.at(-1),r5:p.at(-1)/p.at(-6)-1,r20:p.at(-1)/p[0]-1,vol:sd(ret.slice(-10))*Math.sqrt(252),vr:v.length>6?v.at(-1)/mean(v.slice(-6,-1)):1,atr,gap,dollarVol,returns:ret.slice(-10)}}
function corr(a,b){const n=Math.min(a.length,b.length);if(n<5)return 0;const x=a.slice(-n),y=b.slice(-n),mx=mean(x),my=mean(y),sx=sd(x),sy=sd(y);return sx&&sy?mean(x.map((v,i)=>(v-mx)*(y[i]-my)))/(sx*sy):0}
function z(xs,k){const a=xs.map(x=>x.f[k]),m=mean(a),s=sd(a)||1;xs.forEach(x=>x.f[k+'Z']=(x.f[k]-m)/s)}

const WEIGHTS={r5:.20,r20:.10,rs5:.15,rs20:.10,atr:.20,vol:.10,vr:.10,gap:.05};
const round=(n,d=3)=>Number.isFinite(n)?+n.toFixed(d):null;
const crypto=s=>s==='BTC'||s==='ETH';
function metrics(x){return {momentum5d:round(100*x.f.r5),momentum20d:round(100*x.f.r20),
 realizedVol10dAnnualized:round(100*x.f.vol,2),volumeRatio:round(x.f.vr),atrPct:round(100*x.f.atr),
 gapPct:round(100*x.f.gap),relativeStrength5dPct:round(100*x.f.rs5),relativeStrength20dPct:round(100*x.f.rs20),
 avgDollarVolume10d:round(x.f.dollarVol,0),maxSelectedCorrelation:round(x.mc)};}
function setup(x,now){
 const b=Math.max(.008,x.f.vol/Math.sqrt(252)*.55),up=round(x.f.price*(1+b),2),dn=round(x.f.price*(1-b),2),c=crypto(x.symbol);
 const o={symbol:x.symbol,setup:'Daily quant momentum / volatility breakout',
 entryRule:{operator:'ABOVE',level:up,timeframeMinutes:c?60:5,requiredCloses:c?2:1,requireParticipation:!c},
 invalidationRule:{operator:'BELOW',level:dn,timeframeMinutes:5,requiredCloses:1},
 expiresAt:new Date(Date.parse(now)+72*3600e3).toISOString(),
 trigger:(c?'Two completed 60-minute closes above $':'Break above $')+up.toFixed(2)+(c?'.':' with sustained participation.'),
 invalidation:'Loss of $'+dn.toFixed(2)+' or failed breakout/reversal of the ranked momentum signal.',
 expectedHorizon:'1-3 trading days',reason:'Quant score '+x.score.toFixed(2)+': 5d momentum '+(100*x.f.r5).toFixed(1)+'%, 20d '+(100*x.f.r20).toFixed(1)+'%, annualized 10d realized vol '+(100*x.f.vol).toFixed(0)+'%, volume '+x.f.vr.toFixed(2)+'x, max selected correlation '+x.mc.toFixed(2)+'.',
 quantScore:round(x.score),metrics:metrics(x),createdAt:now,lastReviewedAt:now,status:'WATCH_ONLY',
 setupId:x.symbol+'-'+now.slice(0,10).replaceAll('-','')+'-daily-quant'};
 if(c)o.confirmation={count:2,timeframeMinutes:60};return o;
}
function selectUniverse(input,previous={},now=new Date().toISOString()){
 const rows=input.map(x=>({...x,f:x.f?{...x.f}:null})),valid=rows.filter(x=>x.f);
 const spy=valid.find(x=>x.symbol==='SPY');
 if(!spy)throw Error('SPY benchmark unavailable; preserve previous selection.');
 valid.forEach(x=>{x.f.rs5=x.f.r5-spy.f.r5;x.f.rs20=x.f.r20-spy.f.r20});
 const eligible=valid.filter(x=>crypto(x.symbol)||x.f.dollarVol>=5e7);
 if(eligible.length<N)throw Error('Insufficient eligible instruments; preserve previous selection.');
 Object.keys(WEIGHTS).forEach(k=>z(eligible,k));
 eligible.forEach(x=>x.score=Object.entries(WEIGHTS).reduce((s,[k,w])=>s+w*(k==='gap'?Math.abs(x.f[k+'Z']):x.f[k+'Z']),0));
 eligible.sort((a,b)=>b.score-a.score||a.symbol.localeCompare(b.symbol));
 const chosen=[];
 for(const [i,x] of eligible.entries()){
  x.rank=i+1;x.mc=chosen.length?Math.max(...chosen.map(y=>Math.abs(corr(x.f.returns,y.f.returns)))):0;
  if(x.mc>MAX){x.status='REJECT';x.selectionReason='Absolute correlation with earlier selected instruments exceeds '+MAX.toFixed(2)+'.';}
  else if(chosen.length<N){x.status='SELECTED';x.selectionReason='Top-ranked eligible candidate passing the correlation gate.';chosen.push(x);}
  else {x.status='WATCH';x.selectionReason='Passed liquidity and correlation gates; below the '+N+' selection slots.';}
 }
 if(chosen.length<N)throw Error('Insufficient diversified candidates; preserve previous selection.');
 // Compare full rankings only: old top-5 order is not a universe rank.
 const prior=new Map((previous.candidates||[]).filter(x=>Number.isInteger(x.rank)).map(x=>[x.symbol,x.rank]));
 const compare=previous.candidates?.length>0&&previous.selectedAt?.slice(0,10)!==now.slice(0,10);
 const candidates=[...eligible,...valid.filter(x=>!eligible.includes(x)),...rows.filter(x=>!x.f)].map(x=>{
  const scored=Number.isFinite(x.score),old=compare?prior.get(x.symbol):null;
  const candidate={symbol:x.symbol,rank:x.rank||null,previousRank:old??null,rankChange:old&&x.rank?old-x.rank:null,
   rankChangeLabel:!compare?'—':!x.rank?'—':old?((old-x.rank>0?'+':'')+(old-x.rank)):'NEW',
   status:x.status||'REJECT',quantScore:round(x.score),metrics:x.f?metrics(x):null,
   selectionReason:x.selectionReason||(x.f?'10-day average dollar volume below $50m.':x.error||'Market data unavailable.'),
   factors:scored?{momentum:round((.20*x.f.r5Z+.10*x.f.r20Z+.15*x.f.rs5Z+.10*x.f.rs20Z)/.55),
    participation:round(x.f.vrZ),volatility:round((.20*x.f.atrZ+.10*x.f.volZ)/.30),gap:round(Math.abs(x.f.gapZ)),
    correlation:round(x.mc),regimeFit:null}:null};
  if(x.status==='SELECTED')Object.assign(candidate,setup(x,now));
  // Matrix selection status must not be replaced by setup's WATCH_ONLY status.
  candidate.status=x.status||'REJECT';return candidate;
 });
 return {selection:{selectedAt:now,version:2,method:'v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80',
  universeSize:eligible.length,attemptedCount:rows.length,evaluatedCount:valid.length,failedCount:rows.length-valid.length,topN:N,
  weights:WEIGHTS,correlationCap:MAX,previousSelectedAt:compare?previous.selectedAt:null,
  factorNote:'Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.',
  selected:chosen.map(x=>({symbol:x.symbol,quantScore:round(x.score),metrics:metrics(x)})),candidates},
  setups:chosen.map(x=>setup(x,now))};
}
async function main(){
 const D=load(),rows=[];
 for(const symbol of U){try{const a=await series(symbol);
  if(a.length<12)throw Error('Insufficient daily bars (minimum 12).');
  const f=feat(a);if(!['price','r5','r20','vol','vr','atr','gap','dollarVol'].every(k=>Number.isFinite(f[k])))throw Error('Invalid market metrics.');
  rows.push({symbol,f});
 }catch(e){console.error(symbol,e.message);rows.push({symbol,error:e.message});}}
 const now=new Date().toISOString(),{selection,setups}=selectUniverse(rows,D.strategyState?.dailyUniverseSelection,now);
 D.strategyState=D.strategyState||{};
 const S=D.strategyState,leaders=setups.map(x=>x.symbol).join(', '),open=(D.positions||[]).map(x=>x.symbol);
 S.lastReviewedAt=now;S.evaluationUniverse=U;S.regime='Daily quant cross-asset momentum / volatility selection';
 S.regimeReason='The daily selector ranked '+selection.universeSize+' liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of '+MAX.toFixed(2)+'. Today\'s diversified top '+N+': '+leaders+'.';
 S.riskPosture=(open.length?'Active paper positions: '+open.join(', ')+'.':'No open paper positions.')+' Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.';
 S.marketView='Today\'s quantitative opportunity set is '+leaders+'. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.';
 S.watchlist=setups;S.pendingSetups=setups.map(x=>({...x,status:'UNTRIGGERED'}));S.dailyUniverseSelection=selection;
 fs.writeFileSync('data.js','window.PORTFOLIO_DATA = '+JSON.stringify(D,null,2)+';\n');
 fs.mkdirSync('quant',{recursive:true});fs.writeFileSync('quant/daily-universe.json',JSON.stringify(selection,null,2)+'\n');
 console.log(JSON.stringify({selectedAt:now,attempted:selection.attemptedCount,evaluated:selection.evaluatedCount,selected:leaders}));
}
module.exports={selectUniverse,feat,corr,U,WEIGHTS,main};
if(require.main===module)main().catch(e=>{console.error(e);process.exit(1)});
