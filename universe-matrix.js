(function(){
  const S=window.PORTFOLIO_DATA.strategyState||{},U=S.dailyUniverseSelection||{},esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const full=Array.isArray(U.candidates)&&U.candidates.length>0,watch=new Map((S.watchlist||[]).map(x=>[x.symbol,x]));
  const rows=full?U.candidates:(U.selected||[]).map(x=>({...watch.get(x.symbol),...x,status:'SELECTED',rank:null,rankChangeLabel:'—'}));
  const date=s=>{if(!s)return '—';const d=new Date(s);return Number.isNaN(d.getTime())?'—':d.toLocaleString('en-GB',{timeZone:'Europe/Tallinn',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'})+' Tallinn';};
  const num=(n,d=2)=>typeof n==='number'&&Number.isFinite(n)?n.toFixed(d):'—';
  document.querySelector('#universeCount').textContent=rows.length+' instruments';
  document.querySelector('#universeMeta').textContent='Selection: '+date(U.selectedAt)+(full?' · '+U.evaluatedCount+' evaluated / '+U.attemptedCount+' scanned · '+U.failedCount+' data failures':' · Partial snapshot: '+rows.length+' selected / '+(U.universeSize??'—')+' ranked. Full scan was not saved; available after the next successful daily refresh.');
  document.querySelector('#universeMethod').textContent=(U.method||'No selection yet.')+' Heatmap: green ≥ +0.5σ, amber between −0.5σ and +0.5σ, red ≤ −0.5σ; correlation green ≤ 0.5, amber ≤ 0.80, red > 0.80. Volatility measures opportunity, not safety. Regime fit is not scored. — means unavailable, not neutral.';
  document.querySelector('#universeComparison').textContent=U.previousSelectedAt?'Rank change versus '+date(U.previousSelectedAt)+'. Positive = moved up.':'Rank change requires two saved daily full scans.';
  function heat(n,correlation=false){
    if(typeof n!=='number'||!Number.isFinite(n))return '<span class="matrix-factor missing">—</span>';
    const tone=correlation?(n>.8?'weak':n>.5?'mid':'strong'):(n>=.5?'strong':n<=-.5?'weak':'mid');
    return '<span class="matrix-factor '+tone+'">'+num(n)+(correlation?'':'σ')+'</span>';
  }
  function metric(n,suffix,d=2){return num(n,d)+(typeof n==='number'?suffix:'');}
  function factor(x,key,raw){return heat(x.factors?.[key])+'<small>'+esc(raw)+'</small>';}
  const search=document.querySelector('#universeSearch'),filter=document.querySelector('#universeFilter'),sort=document.querySelector('#universeSort'),body=document.querySelector('#universeRows');
  function render(){
    const q=search.value.trim().toUpperCase(),display=rows.filter(x=>(!q||x.symbol.toUpperCase().includes(q))&&(filter.value==='ALL'||x.status===filter.value)).slice();
    display.sort(sort.value==='symbol'?(a,b)=>a.symbol.localeCompare(b.symbol):sort.value==='change'?(a,b)=>(b.rankChange??-Infinity)-(a.rankChange??-Infinity): (a,b)=>(b.quantScore??-Infinity)-(a.quantScore??-Infinity));
    document.querySelector('#universeVisible').textContent=display.length+' / '+rows.length+' shown';
    body.innerHTML=display.length?display.map((x,i)=>{
      const m=x.metrics||{},f=x.factors||{},entry=x.entryRule,inv=x.invalidationRule,id='universe-detail-'+i;
      const label=x.selectionReason||(full?'—':'Selected in the saved top-5 snapshot; full ranking not available.');
      return `<tr class="${x.status==='SELECTED'?'matrix-selected':''}"><td><button type="button" class="matrix-symbol" data-detail="${id}" aria-expanded="false" aria-controls="${id}">${esc(x.symbol)} <span aria-hidden="true">+</span></button></td><td>${x.rank?'#'+x.rank:'—'}</td><td title="${x.previousRank?'Previous rank #'+x.previousRank:'No comparable saved full rank'}">${esc(x.rankChangeLabel||'—')}</td><td>${factor(x,'momentum',metric(m.momentum5d,'%',1)+' / '+metric(m.momentum20d,'%',1))}</td><td>${factor(x,'participation',metric(m.volumeRatio,'×'))}</td><td>${factor(x,'volatility',metric(m.realizedVol10dAnnualized,'%',1)+' ann.')}</td><td>${heat(f.correlation??m.maxSelectedCorrelation,true)}</td><td><span class="matrix-factor missing">—</span></td><td>${entry?'$'+num(entry.level):'—'}</td><td>${inv?'$'+num(inv.level):'—'}</td><td>${esc(x.expiresAt?date(x.expiresAt):'—')}</td><td class="matrix-score">${num(x.quantScore,3)}</td><td><span class="matrix-status ${esc((x.status||'').toLowerCase())}">${esc(x.status||'—')}</span></td></tr>
      <tr id="${id}" class="matrix-detail" hidden><td colspan="13"><div class="matrix-detail-grid"><div><span class="label">Selection / rejection reason</span><p>${esc(label)}</p><span class="label">Why watching</span><p>${esc(x.reason||'No active setup for this candidate.')}</p></div><div><span class="label">Structured trigger</span><p>${esc(entry?JSON.stringify(entry):'No active setup.')}</p><span class="label">Invalidation</span><p>${esc(inv?JSON.stringify(inv):'No active setup.')}</p><span class="label">Expiry</span><p>${esc(date(x.expiresAt))}</p></div><div><span class="label">Additional metrics</span><p>ATR: ${metric(m.atrPct,'%')} · Gap: ${metric(m.gapPct,'%')}<br>Relative strength vs SPY: ${metric(m.relativeStrength5dPct,'%')} (5d) / ${metric(m.relativeStrength20dPct,'%')} (20d)<br>10d average dollar volume: ${typeof m.avgDollarVolume10d==='number'?'$'+m.avgDollarVolume10d.toLocaleString('en-US'):'—'}</p></div></div></td></tr>`;
    }).join(''):'<tr><td colspan="13" class="empty">No matching instruments.</td></tr>';
    body.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>{const el=document.getElementById(b.dataset.detail),open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));el.hidden=open;b.querySelector('span').textContent=open?'+':'-';});
  }
  search.addEventListener('input',render);filter.addEventListener('change',render);sort.addEventListener('change',render);render();
})();
