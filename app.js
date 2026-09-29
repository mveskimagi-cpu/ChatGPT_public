const D=window.PORTFOLIO_DATA,
eur=n=>"€"+Number(n).toLocaleString("en-IE",{minimumFractionDigits:2,maximumFractionDigits:2}),
cls=n=>n>=0?"pos":"neg",
sign=n=>(n>=0?"+":"")+eur(n),
esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])),
shortDate=s=>s?String(s).replace("T"," ").replace(/\+\d\d:\d\d$/,""):"—";

document.querySelector("#asof").textContent="Last market update: "+D.meta.asOf;
document.querySelector("#lasttrade").textContent="Last trade: "+D.meta.lastTrade+" · "+D.meta.marketSource;

const cards=[
["Portfolio",eur(D.summary.value)],
["Cash",eur(D.summary.cash)],
["Realized P/L",sign(D.summary.realized),cls(D.summary.realized)],
["Unrealized P/L",sign(D.summary.unrealized),cls(D.summary.unrealized)],
["Total return",(D.summary.totalPct>=0?"+":"")+D.summary.totalPct.toFixed(2)+"%",cls(D.summary.totalPct)]
];
document.querySelector("#cards").innerHTML=cards.map(x=>`<div class="card"><div class="label">${x[0]}</div><div class="value ${x[2]||""}">${x[1]}</div></div>`).join("");

document.querySelector("#positions").innerHTML=D.positions.map(p=>`<tr><td><span class="symbol">${esc(p.symbol)}</span><br><span class="label">${esc(p.name)}</span></td><td>${p.qty}</td><td>${eur(p.cost)}</td><td>$${Number(p.lastUsd).toLocaleString()}</td><td>${eur(p.value)}</td><td class="${cls(p.pnl)}">${sign(p.pnl)}<br><span class="label">${Number(p.pnlPct).toFixed(2)}%</span></td></tr>`).join("");

const S=D.strategyState||{};
document.querySelector("#strategyReviewed").textContent=S.lastReviewedAt?"Reviewed "+shortDate(S.lastReviewedAt):"";
document.querySelector("#strategySummary").innerHTML=`
  <div class="strategy-hero">
    <div><span class="label">Market regime</span><div class="strategy-title">${esc(S.regime||"—")}</div></div>
    <div><span class="label">Risk posture</span><div class="strategy-copy">${esc(S.riskPosture||"—")}</div></div>
  </div>
  <div class="strategy-copy full"><span class="label">Market view</span><p>${esc(S.marketView||"—")}</p></div>
  <div class="strategy-copy full"><span class="label">Why this regime</span><p>${esc(S.regimeReason||"—")}</p></div>`;

document.querySelector("#positionStrategy").innerHTML=D.positions.map(p=>`
  <article class="strategy-card">
    <div class="strategy-card-head"><div><span class="symbol">${esc(p.symbol)}</span><span class="pill">${esc(p.lastDecision||"—")}</span></div><span class="riskpill">${esc(p.riskLevel||"—")}</span></div>
    <div class="strategy-meta"><span>Opened ${esc(shortDate(p.openedAt))}</span><span>Horizon ${esc(p.timeHorizon||"—")}</span></div>
    <div class="strategy-field"><span class="label">Current thesis</span><p>${esc(p.thesis||"—")}</p></div>
    <div class="strategy-two">
      <div class="strategy-field"><span class="label">Target / trim</span><p>${esc(p.target||"—")}</p></div>
      <div class="strategy-field"><span class="label">Invalidation</span><p>${esc(p.invalidation||"—")}</p></div>
    </div>
    <div class="strategy-field decision"><span class="label">Last decision reason</span><p>${esc(p.lastDecisionReason||"—")}</p></div>
  </article>`).join("");

document.querySelector("#bigReturn").innerHTML=`<span class="${cls(D.summary.total)}">${sign(D.summary.total)} (${D.summary.totalPct.toFixed(2)}%)</span>`;
const pts=D.snapshots||[];
if(pts.length){
  const vals=pts.map(x=>x.value),min=Math.min(...vals,990),max=Math.max(...vals,1005),w=600,h=130,p=10,
  x=i=>p+i*(w-2*p)/Math.max(1,pts.length-1),
  y=v=>p+(max-v)*(h-2*p)/Math.max(1,max-min),
  poly=pts.map((d,i)=>x(i)+","+y(d.value)).join(" "),base=y(1000);
  document.querySelector("#chart").innerHTML='<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><line class="base" x1="'+p+'" y1="'+base+'" x2="'+(w-p)+'" y2="'+base+'"></line><polyline class="line" points="'+poly+'"></polyline>'+pts.map((d,i)=>'<circle class="dot" cx="'+x(i)+'" cy="'+y(d.value)+'" r="3"><title>'+d.date+': €'+d.value.toFixed(2)+'</title></circle>').join("")+'</svg>';
  const mobile=window.matchMedia("(max-width:600px)").matches,maxLabels=mobile?4:6,step=Math.max(1,Math.ceil((pts.length-1)/(maxLabels-1))),
  candidates=pts.filter((d,i)=>i===0||i===pts.length-1||(i%step===0&&i<pts.length-1)),seen=new Set(),
  shown=candidates.filter(d=>{const day=d.date.slice(0,10);if(seen.has(day))return false;seen.add(day);return true});
  document.querySelector("#chartDates").innerHTML=shown.map(d=>{const idx=pts.indexOf(d),left=(idx/Math.max(1,pts.length-1))*100,raw=d.date.slice(0,10).split("-"),label=raw[2]+"."+raw[1];return '<span class="chartdate" style="left:'+left+'%">'+label+'</span>'}).join("");
}

const invested=D.positions.reduce((a,p)=>a+p.value,0),largest=D.positions.length?Math.max(...D.positions.map(p=>p.value))/D.summary.value*100:0;
document.querySelector("#risk").innerHTML=`<div class="riskrow"><span class="label">Invested</span><b>${eur(invested)}</b></div><div class="riskrow"><span class="label">Cash allocation</span><b>${(D.summary.cash/D.summary.value*100).toFixed(1)}%</b></div><div class="riskrow"><span class="label">Largest position</span><b>${largest.toFixed(1)}%</b></div><div class="riskrow"><span class="label">Open positions</span><b>${D.positions.length}</b></div>`;

const watch=S.watchlist||[],pending=S.pendingSetups||[];
const setupMap=new Map();
[...watch,...pending].forEach(x=>{
  const key=x.setupId||x.symbol+"|"+x.setup;
  if(!setupMap.has(key))setupMap.set(key,x);
  else setupMap.set(key,{...setupMap.get(key),...x});
});
const setups=[...setupMap.values()];
document.querySelector("#watchlist").innerHTML=setups.length?setups.map(x=>`
  <article class="watch-card">
    <div class="strategy-card-head"><div><span class="symbol">${esc(x.symbol)}</span><span class="pill">${esc(x.status||"WATCH")}</span></div><span class="label">${esc(x.expectedHorizon||"")}</span></div>
    <div class="watch-setup">${esc(x.setup||"")}</div>
    <div class="strategy-field"><span class="label">Trigger</span><p>${esc(x.trigger||"—")}</p></div>
    <div class="strategy-field"><span class="label">Invalidation</span><p>${esc(x.invalidation||"—")}</p></div>
    <div class="strategy-field"><span class="label">Why watching</span><p>${esc(x.reason||"—")}</p></div>
  </article>`).join(""):'<div class="empty">No active setups.</div>';

const tbody=document.querySelector("#trades");
function render(f="ALL"){
  const a=D.trades.filter(t=>f==="ALL"||t.side===f).slice().reverse();
  tbody.innerHTML=a.map(t=>`<tr><td>${esc(t.date)}</td><td class="symbol">${esc(t.symbol)}</td><td><span class="side ${t.side==="SELL"?"neg":"pos"}">${esc(t.side)}</span></td><td>${t.qty}</td><td>$${Number(t.priceUsd).toLocaleString()}</td><td>${eur(t.eur)}</td><td class="${t.pnl==null?"":cls(t.pnl)}">${t.pnl==null?"—":sign(t.pnl)}</td><td class="label">${esc(t.note)}</td></tr>`).join("");
  document.querySelector("#tradeCount").textContent=a.length+" trades";
}
render();
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.f)});