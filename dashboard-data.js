(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QuantDashboard=api;})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 function budget(D,now=Date.now()){
   const month=new Date(now).toISOString().slice(0,7),b=D.automationHealth?.apiBudget,m=b?.months?.[month];
   const sum=m=>m?(m.openingMicroUsd||0)+(m.spentMicroUsd||0)+(m.uncertainMicroUsd||0):0;
   const reserved=Object.values(m?.pending||{}).reduce((s,p)=>s+(p.maxMicroUsd||0),0)/1e6;
   const used=sum(m)/1e6,all=Object.values(b?.months||{}).reduce((s,x)=>s+sum(x),0)/1e6;
   const fx=D.automationHealth?.monitor?.fxUsdPerEur||D.positions?.find(p=>p.fxUsdPerEur>0)?.fxUsdPerEur;
   return {month,available:!!b&&!b.integrityError,limit:5,used,reserved,remaining:Math.max(0,5-used-reserved),
     allKnownUsd:all,netEstimateEur:fx>0?D.summary.total-all/fx:null,fx:fx||null,
     uncertainUsd:(m?.uncertainMicroUsd||0)/1e6,inputTokens:m?.inputTokens||0,outputTokens:m?.outputTokens||0,
     cachedTokens:m?.cachedTokens||0,requests:m?.requestCount||0,openingUsd:(m?.openingMicroUsd||0)/1e6};
 }
 function status(D,now=Date.now()){
   const b=budget(D,now),h=D.automationHealth?.openai||{},monitor=D.automationHealth?.monitor||{};
   if(!b.available)return {tone:'warn',title:'AI-otsused peatatud',text:'Kuluarvestus vajab kontrolli.',code:'BUDGET_UNKNOWN'};
   if(b.remaining<=0)return {tone:'warn',title:'AI-otsused pausil · kuueelarve täis',text:'Selle kuu 5 USD piir on täis. Uus kuueelarve avaneb järgmise kuu 1. kuupäeval UTC järgi.',code:'BUDGET'};
   if(h.status==='BLOCKED_QUOTA')return {tone:'warn',title:'Viimane API-vastus: krediidipiirang',text:'Viimane tasuline päring peatus krediidipiirangu tõttu. Konto praegust jääki siit ei näe.',code:'QUOTA'};
   if(h.status==='ERROR_MODEL')return {tone:'warn',title:'AI-otsused pausil · tehniline tõrge',text:'Viimane mudelipäring ei lõpetanud otsust. Tehingut ei kinnitatud.',code:'ERROR'};
   if(monitor.decisionStatus==='BLOCKED_BUDGET'&&String(monitor.lastRunAt||'').slice(0,10)===new Date(now).toISOString().slice(0,10))
     return {tone:'warn',title:'AI-otsused pausil · kulukontroll',text:'Päeva kulupiir, päringupiir või päringu mahu kontroll peatas uue analüüsi.',code:'DAILY'};
   if(!monitor.lastRunAt||now-Date.parse(monitor.lastRunAt)>3600000)return {tone:'warn',title:'Automaatika värskus kontrollimata',text:'Viimasest salvestatud jälgimiskontrollist on üle tunni või kontrolli aeg puudub.',code:'MONITOR_STALE'};
   return {tone:'ok',title:'Mudel jälgib signaale',text:'AI käivitub värske olulise signaali korral ja ainult vaba eelarve piires.',code:'READY'};
 }
 function positionReturn(p){return p.costEur>0?100*p.pnl/p.costEur:null;}
 function tradeTimestamp(t){
   const raw=String(t.date||'');
   // Early automated trades stored UTC without an offset. Only interpret that
   // legacy form as UTC when its execution evidence agrees within two minutes.
   // Other unzoned ledger dates retain the existing Europe/Tallinn convention.
   if(/^\d{4}-\d\d-\d\d \d\d:\d\d$/.test(raw)&&t.execution?.retrievedAt){
     const utc=raw.replace(' ','T')+':00Z',evidence=Date.parse(t.execution.retrievedAt);
     if(Number.isFinite(evidence)&&Math.abs(Date.parse(utc)-evidence)<=120000)return utc;
   }
   return raw;
 }
 function targetText(p){
   const match=String(p.target||'').match(/\$(\d+(?:\.\d+)?)/);
   if(!p.targetRule&&match&&p.entryRule?.level===Number(match[1]))
     return 'Kasumivõtu taset pole määratud. Varasem märge kordas ostutaset ja ei ole väljumissignaal.';
   return p.target||'Kasumivõtu taset pole määratud.';
 }
 return {budget,status,positionReturn,targetText,tradeTimestamp};
});
