'use strict';
const crypto = require('crypto');
const hash = x => crypto.createHash('sha256').update(JSON.stringify(x)).digest('hex');
const tradeAction = d => ['BUY', 'SELL', 'REDUCE'].includes(d?.decision);
const finitePositive = x => Number.isFinite(x) && x > 0;

function chartEvidence(result,setups=[],now=Date.now()) {
  const bars=result?.indicators?.quote?.[0]||{}, timestamps=result?.timestamp||[];
  const rows=timestamps.map((t,i)=>({time:t*1000,close:bars.close?.[i],volume:bars.volume?.[i]})).filter(x=>finitePositive(x.close));
  const last=rows.at(-1);
  if(!last) throw Error('No timestamped chart price');
  const confirmation={};
  for(const s of setups){
    const rule=s.entryRule, minutes=rule?.timeframeMinutes;
    // This chart contains 5m bars; other timeframes need a separate provider series.
    const done=rows.filter(x=>x.time+300000<=now), n=rule?.requiredCloses||1, selected=done.slice(-n);
    const baseline=done.slice(-n-20,-n).map(x=>x.volume).filter(finitePositive);
    const mean=baseline.length?baseline.reduce((a,b)=>a+b,0)/baseline.length:null;
    const fresh=selected.length===n&&now-(selected.at(-1).time+300000)<=15*60000;
    const continuous=selected.every((x,i)=>!i||x.time-selected[i-1].time===300000);
    const participation=!rule?.requireParticipation||(baseline.length>=5&&selected.every(x=>finitePositive(x.volume)&&x.volume>=mean));
    confirmation[s.setupId]={pass:minutes===5&&fresh&&continuous&&participation&&selected.every(x=>x.close>rule.level),
      completedCloses:selected.map(x=>({time:new Date(x.time).toISOString(),close:x.close,volume:x.volume})),baselineVolume:mean,
      limitation:minutes===5?null:'Only 5-minute candles fetched; requested timeframe unverified.'};
  }
  return {priceUsd:last.close,marketTime:new Date(last.time).toISOString(),confirmation};
}

// Historical sale P/L is the committed cost-allocation record; never rewrite it.
function validateLedger(D) {
  const fail = msg => { throw Error('LEDGER VALIDATION FAILED: ' + msg); };
  const near = (a,b,msg,tol=.02) => { if (!Number.isFinite(a)||!Number.isFinite(b)||Math.abs(a-b)>tol+1e-9) fail(msg); };
  if (!finitePositive(D.summary?.initial)) fail('initial capital');
  let cash=D.summary.initial, realized=0; const lots=new Map(), seen=new Set();
  for (const [i,t] of (D.trades||[]).entries()) {
    if (!['BUY','SELL'].includes(t.side)||!t.symbol||!finitePositive(t.qty)||!finitePositive(t.eur)||!finitePositive(t.priceUsd)) fail('invalid trade '+i);
    const id=hash([t.date,t.symbol,t.side,t.qty,t.priceUsd,t.eur]);
    if (seen.has(id)) fail('duplicate trade '+i); seen.add(id);
    const p=lots.get(t.symbol)||{qty:0,cost:0};
    if(t.side==='BUY'){cash-=t.eur;p.qty+=t.qty;p.cost+=t.eur;}
    else {
      if(t.qty>p.qty+1e-8||!Number.isFinite(t.pnl)) fail('oversell or missing sale P/L '+i);
      const basis=t.eur-t.pnl;
      if(basis<-.02||basis>p.cost+.02) fail('sale cost basis '+i);
      if(t.costBasisEur!=null) near(t.costBasisEur,basis,'explicit sale basis '+i);
      p.qty-=t.qty;p.cost-=basis;cash+=t.eur;realized+=t.pnl;
      if(Math.abs(p.qty)<=1e-8){near(p.cost,0,'closed position basis '+i,.03);p.qty=0;p.cost=0;}
    }
    if(cash<-.02) fail('negative historical cash '+i); lots.set(t.symbol,p);
  }
  near(cash,D.summary.cash,'cash');near(realized,D.summary.realized,'realized P/L');
  const symbols=new Set(); let value=cash, unreal=0;
  for(const p of D.positions||[]){
    if(symbols.has(p.symbol)) fail('duplicate position '+p.symbol); symbols.add(p.symbol);
    const l=lots.get(p.symbol);
    if(!l||!finitePositive(p.qty)||!finitePositive(p.lastUsd)||!finitePositive(p.avgUsd)) fail('position '+p.symbol);
    near(l.qty,p.qty,'quantity '+p.symbol,1e-8);near(l.cost,p.costEur,'cost '+p.symbol,.03);
    if(!Number.isFinite(p.value)||p.value<0) fail('valuation '+p.symbol);
    near(p.value-p.costEur,p.pnl,'position P/L '+p.symbol);
    value+=p.value;unreal+=p.value-p.costEur;
  }
  for(const [s,l] of lots) if(l.qty>1e-8&&!symbols.has(s)) fail('missing position '+s);
  near(value,D.summary.value,'value');near(unreal,D.summary.unrealized,'unrealized P/L');
  near(realized+unreal,D.summary.value-D.summary.initial,'P/L identity',.03);
  near(D.summary.total,D.summary.value-D.summary.initial,'total');
  near(D.summary.totalPct,100*D.summary.total/D.summary.initial,'return');
  return {status:'PASS',cash,realized,tradeCount:D.trades.length};
}

function scout(D,T,now=Date.now()) {
  const selection=D.strategyState?.dailyUniverseSelection||{};
  const open=new Set((D.positions||[]).map(p=>p.symbol));
  const requested=new Set((T.triggers||[]).map(t=>t.symbol));
  const setups=[...(D.strategyState?.watchlist||[]),...(D.strategyState?.pendingSetups||[])];
  const eligible=setups.filter(s=>requested.has(s.symbol)&&(!s.expiresAt||Date.parse(s.expiresAt)>now));
  const symbols=[...new Set([...open,...eligible.map(s=>s.symbol)])];
  return {role:'SCOUT',mode:'DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR',selectedAt:selection.selectedAt||null,
    universeSize:selection.universeSize||0,symbols,
    candidates:(selection.candidates||selection.selected||[]).filter(s=>symbols.includes(s.symbol)),
    setups:eligible,reason:'Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule.'};
}

function hardRisk(d,D,Q,F,C,scoutResult,now=Date.now()) {
  const errors=[];
  if(!['HOLD','BUY','SELL','REDUCE'].includes(d?.decision)||typeof d.reason!=='string'||!d.reason.trim()) errors.push('INVALID_DECISION');
  if(!tradeAction(d)) return errors;
  const q=Q[d.symbol];
  if(!q||!finitePositive(q.priceUsd)||!finitePositive(F?.usdPerEur)) errors.push('INVALID_PRICE_OR_FX');
  for(const [label,time] of [['QUOTE',q?.marketTime],['FX',F?.marketTime]]) {
    const age=now-Date.parse(time);
    if(!Number.isFinite(age)||age< -60000||age>(C.maxQuoteAgeMinutes||15)*60000) errors.push(label+'_STALE_OR_UNTIMESTAMPED');
  }
  if(!finitePositive(d.eurAmount)) errors.push('INVALID_AMOUNT');
  const pos=(D.positions||[]).find(p=>p.symbol===d.symbol);
  if(d.decision==='BUY') {
    if(d.eurAmount>C.maxBuyEur||d.eurAmount>D.summary.cash) errors.push('SIZE_OR_CASH_LIMIT');
    if(!scoutResult.symbols.includes(d.symbol)) errors.push('OUTSIDE_SCOUT');
    const setup=scoutResult.setups.find(s=>s.symbol===d.symbol);
    if(!setup||!setup.entryRule||!setup.invalidationRule) errors.push('MISSING_VALID_SETUP');
    if(setup?.expiresAt&&Date.parse(setup.expiresAt)<=now) errors.push('EXPIRED_SETUP');
    if(!setup?.entryRule||!(q?.priceUsd>setup.entryRule.level)) errors.push('ENTRY_LEVEL_NOT_HELD');
    if(setup?.invalidationRule&&!(q?.priceUsd>setup.invalidationRule.level)) errors.push('INVALIDATION_BREACHED');
    const confirmation=q?.confirmation?.[setup?.setupId];
    if(!confirmation?.pass) errors.push('COMPLETED_CANDLES_OR_PARTICIPATION_NOT_CONFIRMED');
    const exposure=(pos?.value||0)+d.eurAmount;
    if(exposure>D.summary.value*(C.maxPositionPct||35)/100) errors.push('POSITION_CONCENTRATION');
  } else {
    if(!pos) errors.push('NO_OPEN_POSITION');
    if(pos&&q&&F){const value=pos.qty*q.priceUsd/F.usdPerEur;
      if(d.eurAmount>value+.02) errors.push('OVERSELL');
      if(d.decision==='SELL'&&Math.abs(d.eurAmount-value)>Math.max(.02,value*.01)) errors.push('SELL_NOT_FULL_EXIT');
      if(d.decision==='REDUCE'&&d.eurAmount>=value-.02) errors.push('REDUCE_MUST_BE_PARTIAL');
    }
  }
  return errors;
}

function checkReport(r,role) {
  if(!r||typeof r!=='object'||Array.isArray(r)||typeof r.reason!=='string'||!r.reason.trim()) throw Error(role+' malformed report');
  if(['QUANT_MACRO','PM'].includes(role)&&!['HOLD','BUY','SELL','REDUCE'].includes(r.decision)) throw Error(role+' invalid decision');
  if(role==='RISK'&&!['APPROVE','VETO'].includes(r.verdict)) throw Error('RISK invalid verdict');
  if(role==='CRITIC'&&!['PASS','FAIL'].includes(r.verdict)) throw Error('CRITIC invalid verdict');
  return r;
}
async function runTeam({D,T,Q,F,C,call,now=Date.now()}) {
  const sc=scout(D,T,now), reports={scout:sc};
  const shared={portfolio:{summary:D.summary,positions:D.positions,strategyMemory:D.strategyMemory},
    strategy:{regime:D.strategyState?.regime,regimeEngine:D.strategyState?.regimeEngine,keyRisks:D.strategyState?.keyRisks},
    trigger:T,quotes:Q,fx:F,scout:sc,limits:{maxBuyEur:C.maxBuyEur,maxPositionPct:C.maxPositionPct||35},
    catalystEvidence:{status:'NOT_FETCHED',limitation:'No live news/earnings feed. Never invent catalysts or infer absence of events.'}};
  const qm=reports.quantMacro=checkReport(await call('QUANT_MACRO',shared), 'QUANT_MACRO');
  const risk=reports.risk=checkReport(await call('RISK',{...shared,proposal:qm}), 'RISK');
  const hold=reason=>({decision:'HOLD',symbol:qm.symbol||null,eurAmount:null,reason,evidenceLimitations:['See agent reports.']});
  let pm;
  if(risk.verdict==='VETO') pm=hold('Risk veto: '+risk.reason);
  else pm=checkReport(await call('PM',{...shared,quantMacro:qm,risk}), 'PM');
  reports.pm=pm;
  const errors=hardRisk(pm,D,Q,F,C,sc,now);
  if(errors.length) pm=hold('Deterministic risk gate: '+errors.join(', '));
  reports.hardRisk={verdict:errors.length?'VETO':'APPROVE',errors};
  // Separate context and API call: critic is forbidden to change or originate a trade.
  const critic=reports.critic=checkReport(await call('CRITIC',{...shared,proposal:pm,quantMacro:qm,risk,hardRisk:reports.hardRisk}), 'CRITIC');
  let decision=critic.verdict==='PASS'?pm:hold('Independent critic rejected proposal: '+critic.reason);
  if(risk.verdict==='VETO'||errors.length) decision=pm;
  const finalErrors=hardRisk(decision,D,Q,F,C,sc,now);
  if(finalErrors.length) decision=hold('Final risk gate: '+finalErrors.join(', '));
  return {schemaVersion:1,mode:'MULTI_CALL_ROLE_PIPELINE',processedAt:new Date(now).toISOString(),
    evidenceHash:hash(shared),reports,decision,tradePermitted:tradeAction(decision)&&risk.verdict==='APPROVE'&&critic.verdict==='PASS'&&!errors.length&&!finalErrors.length};
}
module.exports={validateLedger,scout,hardRisk,runTeam,hash,chartEvidence};
