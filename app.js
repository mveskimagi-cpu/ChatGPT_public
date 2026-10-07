'use strict';
const D=window.PORTFOLIO_DATA,S=D.strategyState||{},H=D.automationHealth||{},now=Date.now();
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=(n,d=2)=>Number(n).toLocaleString('et-EE',{minimumFractionDigits:d,maximumFractionDigits:d});
const eur=n=>num(n)+' €',usd=n=>'$'+Number(n).toFixed(2),signed=n=>(n>0?'+':'')+eur(n),tone=n=>n>=0?'pos':'neg';
function date(s){
 if(!s)return 'Puudub';
 let text=String(s).replace(' UTC','Z').replace(' ','T');
 if(/^\d{4}-\d\d-\d\dT\d\d:\d\d$/.test(text))text+='Z';
 const d=new Date(text);return Number.isNaN(d.getTime())?'Aeg teadmata':d.toLocaleString('et-EE',{timeZone:'Europe/Tallinn',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
}
function tradeDate(t){const s=QuantDashboard.tradeTimestamp(t),m=s.match(/^(\d{4})-(\d\d)-(\d\d)(?: (\d\d:\d\d))?$/);return m?`${m[3]}.${m[2]}.${m[1]}${m[4]?' '+m[4]:''}`:date(s);}
const row=(label,value)=>`<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`;
const B=QuantDashboard.budget(D,now),status=QuantDashboard.status(D,now);
const cards=[
 ['Portfelli väärtus',eur(D.summary.value),'Algkapital '+eur(D.summary.initial),''],
 ['Portfelli tootlus',signed(D.summary.total),(D.summary.totalPct>0?'+':'')+num(D.summary.totalPct)+'% · enne API-kulu',tone(D.summary.total)],
 ['Vaba raha',eur(D.summary.cash),num(D.summary.cash/D.summary.value*100,1)+'% portfellist',''],
 ['Tulemus teadaoleva API-kuluga',B.netEstimateEur===null?'—':signed(B.netEstimateEur),'Hinnang · kulude alus '+usd(B.allKnownUsd),B.netEstimateEur===null?'':tone(B.netEstimateEur)]
];
$('#cards').innerHTML=cards.map(([label,value,note,color])=>`<article class="card"><span class="label">${label}</span><strong class="value ${color}">${value}</strong><span class="card-note">${note}</span></article>`).join('');
$('#asof').textContent='Portfelli hinnang: '+date(D.meta?.asOf);
$('#modelStatus').classList.add(status.tone);
$('#modelStatus').innerHTML=`<div><div class="status-title"><span class="status-dot" aria-hidden="true"></span>${esc(status.title)}</div><p>${B.available?'Kuu kulu ja broneeringud '+usd(B.used+B.reserved)+' / $5.00. ':''}Hinnavaatlus: ${date(H.monitor?.lastRunAt)}.</p></div><a href="#/model">Vaata staatust →</a>`;
$('#positionCount').textContent=D.positions.length+' positsiooni';
$('#positions').innerHTML=D.positions.length?D.positions.map(p=>{
 const pct=QuantDashboard.positionReturn(p),age=now-Date.parse(p.lastPriceAt);
 const stamp=p.lastPriceAt?date(p.lastPriceAt):(D.meta?.asOf?'Hinna aeg eraldi salvestamata':'Aeg teadmata');
 return `<tr><td><a class="symbol" href="#/strategy">${esc(p.symbol)}</a><small>${num(p.qty,5)} tk</small></td><td>$${num(p.lastUsd)}<small class="${age>900000?'muted':''}">${stamp}${age>900000?' · varasem hind':''}</small></td><td>${eur(p.value)}</td><td class="${tone(p.pnl)}"><strong>${signed(p.pnl)}</strong><small>${pct===null?'—':num(pct)+'%'}</small></td></tr>`;
}).join(''):'<tr><td colspan="4" class="empty">Avatud positsioone ei ole.</td></tr>';
function tradeItem(t,details=false){
 const action=t.side==='BUY'?'Ost':'Müük';
 const top=`<span class="trade-symbol"><span class="trade-action ${t.side==='BUY'?'buy':'sell'}">${action}</span><strong>${esc(t.symbol)}</strong><small>${tradeDate(t)}</small></span><span class="trade-value">${eur(t.eur)}${t.pnl==null?'':`<small class="${tone(t.pnl)}">${signed(t.pnl)} realiseeritud</small>`}</span>`;
 if(!details)return `<div class="trade-row">${top}</div>`;
 return `<details class="trade-detail"><summary class="trade-row">${top}</summary><div class="trade-body">${row('Kogus',num(t.qty,8))}${row('Tehingu hind','$'+num(t.priceUsd))}${row('Hinnavaatlus',date(t.execution?.quotedAt))}${row('EUR/USD',t.execution?.fxUsdPerEur?num(t.execution.fxUsdPerEur,5):'Puudub')}<p>${esc(t.note||'Põhjendus puudub.')}</p></div></details>`;
}
const reversed=(D.trades||[]).slice().reverse();
$('#recentTrades').innerHTML=reversed.slice(0,5).map(t=>tradeItem(t)).join('')||'<p class="empty">Tehinguid veel pole.</p>';
function renderTrades(filter='ALL'){
 const selected=reversed.filter(t=>filter==='ALL'||t.side===filter);
 $('#tradeCount').textContent=selected.length+' tehingut';
 $('#allTrades').innerHTML=selected.map(t=>tradeItem(t,true)).join('')||'<p class="empty">Selle filtriga tehinguid ei ole.</p>';
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
renderTrades();document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>renderTrades(b.dataset.filter)));
$('#performanceSummary').innerHTML=`<p class="large-return ${tone(D.summary.total)}">${signed(D.summary.total)} <span>${num(D.summary.totalPct)}%</span></p>`;
$('#performanceBreakdown').innerHTML=row('Realiseeritud tulemus',`<span class="${tone(D.summary.realized)}">${signed(D.summary.realized)}</span>`)+row('Avatud positsioonide tulemus',`<span class="${tone(D.summary.unrealized)}">${signed(D.summary.unrealized)}</span>`)+row('Teadaolev API-kulu',usd(B.allKnownUsd))+row('Tulemus teadaoleva kuluga',B.netEstimateEur===null?'FX-andmed puuduvad':`<span class="${tone(B.netEstimateEur)}">${signed(B.netEstimateEur)} (hinnang)</span>`);
$('#risk').innerHTML=row('Investeeritud',eur(D.summary.value-D.summary.cash))+row('Vaba raha osakaal',num(D.summary.cash/D.summary.value*100,1)+'%')+row('Suurim positsioon',num(D.positions.length?Math.max(...D.positions.map(p=>p.value))/D.summary.value*100:0,1)+'%')+row('Avatud positsioone',D.positions.length);
const points=(D.snapshots||[]).filter(p=>Number.isFinite(p.value)).map(p=>({...p}));
const currentDay=String(D.meta?.asOf||'').slice(0,10);
if(points.at(-1)?.date?.slice(0,10)===currentDay)points[points.length-1].value=D.summary.value;
else if(currentDay)points.push({date:currentDay,value:D.summary.value});
if(points.length){
 const values=points.map(p=>p.value),min=Math.min(...values,D.summary.initial)-1,max=Math.max(...values,D.summary.initial)+1;
 const x=i=>12+i*576/Math.max(1,points.length-1),y=v=>12+(max-v)*136/(max-min);
 $('#chart').innerHTML=`<svg viewBox="0 0 600 160" role="img" aria-label="Portfelli väärtuse ajalugu eurodes"><line class="base" x1="12" x2="588" y1="${y(D.summary.initial)}" y2="${y(D.summary.initial)}"/><polyline class="line" points="${points.map((p,i)=>x(i)+','+y(p.value)).join(' ')}"/>${points.map((p,i)=>`<circle cx="${x(i)}" cy="${y(p.value)}" r="3"><title>${esc(p.date)}: ${eur(p.value)}</title></circle>`).join('')}</svg>`;
 const candidates=[0,Math.floor((points.length-1)/3),Math.floor(2*(points.length-1)/3),points.length-1],seen=new Set();
 $('#chartDates').innerHTML=candidates.filter(i=>{const d=points[i].date.slice(0,10);if(seen.has(d))return false;seen.add(d);return true;}).map(i=>{const d=points[i].date.slice(0,10).split('-');return `<span>${d[2]}.${d[1]}.${d[0]}</span>`;}).join('');
}
function rule(r,text){return r?`${r.operator==='ABOVE'?'Üle':'Alla'} $${num(r.level)}${r.timeframeMinutes?' · '+r.timeframeMinutes+' min küünal':''}`:esc(text||'Arvuline reegel pole salvestatud.');}
$('#positionStrategy').innerHTML=D.positions.map(p=>`<article class="strategy-card"><div class="panelhead"><h3>${esc(p.symbol)}</h3><span>Avatud ${date(p.openedAt)}</span></div><p>${esc(p.thesis||p.entryReason||'Tees puudub.')}</p>${row('Investeeritud',eur(p.costEur))}${row('Ajahorisont',esc(p.timeHorizon||'Määramata'))}<h4>Teesi kehtetuks muutumine</h4><p>${rule(p.invalidationRule,p.invalidation)}</p><h4>Väljumine või vähendamine</h4><p>${rule(p.targetRule,QuantDashboard.targetText(p))}</p><details><summary>Varasem otsuse põhjendus</summary><p class="note">Ajalooline märge; see ei ole uus turuhinnang.</p><p>${esc(p.lastDecisionReason||'Puudub.')}</p></details></article>`).join('');
const team=S.agentTeam;
$('#latestAnalysis').innerHTML=team?`<p class="note">Ajalooline otsus · ${date(team.processedAt)}. Mudeli praegune staatus: ${esc(status.title)}.</p><p><strong>${esc(team.decision?.decision)} ${esc(team.decision?.symbol||'')}</strong></p><p>${esc(team.decision?.reason)}</p><details><summary>Rollide raportid ja tõendite piirangud</summary>${Object.entries(team.reports||{}).filter(([k])=>k!=='scout').map(([k,r])=>`<h4>${esc(k)} · ${esc(r.verdict||r.decision||'')}</h4><p>${esc(r.reason||r.errors?.join(', ')||'')}</p><p class="note">${esc(Array.isArray(r.evidenceLimitations)?r.evidenceLimitations.join(' '):r.evidenceLimitations||'')}</p>`).join('')}</details>`:'<p class="empty">Lõpetatud analüüsi veel ei ole.</p>';
const regime=S.regimeEngine,regimeOld=!regime?.observedAt||now-Date.parse(regime.observedAt)>86400000;
$('#regimeHistory').innerHTML=`<p class="notice ${regimeOld?'warn':''}">${regimeOld?'Aegunud makroandmed – neid ei kasutata uue otsuse värske alusena.':'Varasem makrohinnang; hinnang on ainult taustinfo.'} Vaatlus: ${date(regime?.observedAt)}.</p><details><summary>Ava ajalooline hinnang</summary><p>${esc(S.marketView||'Kirjeldus puudub.')}</p><p>${esc(S.regimeReason||'')}</p><pre>${esc(JSON.stringify(regime?.output||{},null,2))}</pre></details>`;
const selection=S.dailyUniverseSelection||{},selectionAge=now-Date.parse(selection.selectedAt);
$('#selectionStatus').innerHTML=`<p class="notice ${selectionAge>36*3600000?'warn':''}">Valik koostatud ${date(selection.selectedAt)}.${selectionAge>36*3600000?' Valik on üle 36 tunni vana; värskendus vajab kontrolli.':''}</p>`;
const setups=[...new Map([...(S.watchlist||[]),...(S.pendingSetups||[])].map(x=>[x.setupId||x.symbol,x])).values()];
$('#watchlist').innerHTML=setups.map(x=>`<article class="strategy-card"><div class="panelhead"><h3>${esc(x.symbol)}</h3><span class="pill ${Date.parse(x.expiresAt)<=now?'warn':''}">${Date.parse(x.expiresAt)<=now?'Aegunud':'Jälgimisel'}</span></div><h4>Sisenemise kinnitus</h4><p>${rule(x.entryRule,x.trigger)}</p><h4>Kehtetuks muutumine</h4><p>${rule(x.invalidationRule,x.invalidation)}</p><p class="note">Kehtib kuni ${date(x.expiresAt)}</p><details><summary>Valiku põhjendus</summary><p>${esc(x.reason||'Puudub.')}</p></details></article>`).join('')||'<p class="empty">Jälgitavaid võimalusi pole.</p>';
$('#modelDetails').innerHTML=`<p class="notice ${status.tone}"><strong>${esc(status.title)}</strong><br>${esc(status.text)}</p>${row('Viimane hinnavaatlus',date(H.monitor?.lastRunAt))}${row('Viimane lõpetatud AI-analüüs',date(H.openai?.lastSuccessAt||team?.processedAt))}${row('Esmane mudel',esc(D.automationConfig?.decision?.model||'Määramata'))}${row('Tehingu riskikontroll',esc(D.automationConfig?.decision?.criticModel||'Määramata'))}<p class="note">Hinnavaatlus, turuvalik ja portfelli arvestus toimivad ka tasuliste AI-otsuste pausi ajal. Vanad raportid jäävad ajalooks. Mudeli vahetuse järel kinnitab uue mudeli API-ligipääsu alles esimene edukas päring.</p>${H.openai?.status==='BLOCKED_QUOTA'?'<p class="note">Viimane API-veateade osutas ebapiisavale krediidile. Konto praegust jääki siit ei näe; krediidi lisamine ei tühista kuueelarve piirangut.</p>':''}`;
$('#budgetDetails').innerHTML=`<div class="budget-total"><strong>${usd(B.used+B.reserved)}</strong><span> / $5.00 · ${B.month} UTC</span></div><progress value="${Math.min(5,B.used+B.reserved)}" max="5" aria-label="Kuueelarve kasutus"></progress>${row('Kasutatav kuueelarve',usd(B.remaining))}${row('Päevane ülempiir','$0.16')}${row('Broneeritud päringute maksimum',usd(B.reserved))}${row('Kinnitamata kulu ülempiir',usd(B.uncertainUsd))}${row('Mõõdetud päringuid sel kuul',B.requests)}${row('Sisend- / väljundtokenid',num(B.inputTokens,0)+' / '+num(B.outputTokens,0))}<p class="note">Enne tasulist päringut salvestatakse selle maksimaalne kulu GitHubi. Kuu või päeva piiri täitumisel uut päringut ei tehta. Piir katab selle Quant-töövoo; muude rakenduste kasutust sama API-kontoga siit piirata ei saa.</p><details><summary>Kuluarvestuse alus ja ajalugu</summary><p class="note">Oktoobri algsaldo $5.04 pärineb 7.10 konto kuukulude kuvatõmmiselt ning on konservatiivselt täielikult projektile arvestatud. See ei ole täpne ainult Quanti kulujaotus. Septembrikulu pole mõõdetud. Hilisem kulu põhineb API tokeniarvestusel; katkestuste puhul jääb maksimaalne broneering arvesse. Hinnakiri kontrollitud 7.10.2026.</p>${Object.entries(H.apiBudget?.months||{}).map(([m,v])=>row(esc(m),usd(((v.openingMicroUsd||0)+(v.spentMicroUsd||0)+(v.uncertainMicroUsd||0))/1e6))).join('')}</details>`;
$('#reviewHistory').innerHTML=(S.agentTeamHistory||[]).slice().reverse().map(r=>`<div class="detail-row"><span>${date(r.processedAt)} · ${esc(r.decision?.decision)} ${esc(r.decision?.symbol||'')}</span>${/^[a-f0-9]{16}$/.test(r.decisionKey||'')?`<a href="quant/agent-reviews/${r.decisionKey}.json" target="_blank" rel="noopener">Raport ↗</a>`:'<span>Raport puudub</span>'}</div>`).join('')||'<p class="empty">Arhiiv on tühi.</p>';
const titles={overview:'Ülevaade',trades:'Tehingud',performance:'Tulemus',strategy:'Strateegia',universe:'Turuvalik',model:'Mudel ja kulud'};
function route(focus=false){
 const key=location.hash.replace(/^#\//,'');const active=Object.hasOwn(titles,key)?key:'overview';
 document.querySelectorAll('[data-view]').forEach(el=>{el.hidden=el.dataset.view!==active;});
 document.querySelectorAll('[data-route]').forEach(a=>{if(a.dataset.route===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.title=titles[active]+' · Quant Challenge';
 if(focus){window.scrollTo(0,0);$('#content').focus({preventScroll:true});}
}
window.addEventListener('hashchange',()=>route(true));route();
