#!/usr/bin/env node
const fs=require("fs"), https=require("https"), vm=require("vm"), crypto=require("crypto");

function fetchJson(url){
  return new Promise((resolve,reject)=>{
    const req=https.get(url,{headers:{"User-Agent":"quant-trigger-production/1.0","Accept":"application/json"}},res=>{
      let d=""; res.on("data",c=>d+=c); res.on("end",()=>{
        if(res.statusCode<200||res.statusCode>=300) return reject(new Error("HTTP "+res.statusCode+" "+url));
        try{resolve(JSON.parse(d))}catch(e){reject(e)}
      });
    }); req.on("error",reject); req.setTimeout(10000,()=>req.destroy(new Error("timeout "+url)));
  });
}

function loadLedger(path){
  const src=fs.readFileSync(path,"utf8");
  const sandbox={window:{}}; vm.createContext(sandbox); vm.runInContext(src,sandbox,{timeout:1000});
  return sandbox.window.PORTFOLIO_DATA;
}

function nums(text){
  return [...String(text||"").matchAll(/\$\s*([0-9][0-9,]*(?:\.\d+)?)/g)].map(m=>Number(m[1].replace(/,/g,""))).filter(Number.isFinite);
}
function classifyRule(text){
  const s=String(text||"").toLowerCase();
  const values=nums(text);
  const rules=[];
  for(const v of values){
    if(/below|under|loss of|lose|break below/.test(s)) rules.push({op:"BELOW",level:v});
    if(/above|over|break above|recovery toward|retest|into/.test(s)) rules.push({op:"ABOVE",level:v});
  }
  return rules;
}
function crossed(price,rule){return rule.op==="BELOW"?price<rule.level:price>rule.level}

async function completedCloses(symbol,count,timeframeMinutes){
  if(symbol!=="BTC"&&symbol!=="ETH") return null;
  const granularity=timeframeMinutes*60,end=Math.floor(Date.now()/1000), start=end-Math.max(6*3600,(count+3)*granularity);
  const a=await fetchJson("https://api.exchange.coinbase.com/products/"+symbol+"-USD/candles?granularity="+granularity+"&start="+new Date(start*1000).toISOString()+"&end="+new Date(end*1000).toISOString());
  const currentBucket=Math.floor(end/granularity)*granularity;
  return (Array.isArray(a)?a:[]).filter(x=>Array.isArray(x)&&x.length>=5&&Number(x[0])+granularity<=currentBucket).sort((a,b)=>b[0]-a[0]).slice(0,count).map(x=>({start:new Date(Number(x[0])*1000).toISOString(),close:Number(x[4])}));
}
function confirmationSpec(s,C){const t=String(s.trigger||"");let m=t.match(/(\d+)\s+completed\s+(\d+)[- ]minute\s+closes?/i);if(m)return{count:+m[1],timeframeMinutes:+m[2]};m=t.match(/(\d+)\s+completed\s+hourly\s+closes?/i);if(m)return{count:+m[1],timeframeMinutes:60};return s.confirmation||null}
async function price(symbol,C){
  if(symbol==="BTC"||symbol==="ETH"){
    const x=await fetchJson("https://api.coinbase.com/v2/prices/"+symbol+"-USD/spot");
    return {price:Number(x.data.amount),source:"Coinbase spot",url:"https://api.coinbase.com/v2/prices/"+symbol+"-USD/spot"};
  }
  const y=await fetchJson("https://query1.finance.yahoo.com/v8/finance/chart/"+encodeURIComponent(symbol)+"?interval="+encodeURIComponent(C.quote.equityInterval)+"&range="+encodeURIComponent(C.quote.equityRange));
  const r=y.chart&&y.chart.result&&y.chart.result[0];
  if(!r) throw new Error("No Yahoo chart result for "+symbol);
  const meta=r.meta||{}, q=r.indicators&&r.indicators.quote&&r.indicators.quote[0], closes=(q&&q.close)||[];
  let p=null; for(let i=closes.length-1;i>=0;i--) if(Number.isFinite(closes[i])){p=closes[i];break}
  if(!Number.isFinite(p)) p=Number(meta.regularMarketPrice);
  if(!Number.isFinite(p)) throw new Error("No price for "+symbol);
  return {price:p,source:"Yahoo Finance chart",url:"https://query1.finance.yahoo.com/v8/finance/chart/"+symbol+"?interval="+C.quote.equityInterval+"&range="+C.quote.equityRange};
}

(async()=>{
  const D=loadLedger("data.js"), C={positionPriceMovePct:2,defaultConfirmation:{timeframeMinutes:60,completedCloses:2},quote:{equityInterval:"5m",equityRange:"1d"},...((D.automationConfig||{}).trigger||{})}, now=new Date().toISOString(), triggers=[], observations=[], errors=[];
  const symbols=new Set([...(D.positions||[]).map(p=>p.symbol),...((D.strategyState||{}).watchlist||[]).map(x=>x.symbol),...((D.strategyState||{}).pendingSetups||[]).map(x=>x.symbol)]);
  for(const symbol of symbols){
    try{
      const q=await price(symbol,C); observations.push({symbol,...q});
      const pos=(D.positions||[]).find(p=>p.symbol===symbol);
      if(pos){
        const movePct=pos.lastUsd?((q.price/pos.lastUsd)-1)*100:null;
        if(Number.isFinite(movePct)&&Math.abs(movePct)>=C.positionPriceMovePct){
          triggers.push({type:"PRICE_MOVE",symbol,condition:"abs(move from stored lastUsd) >= "+C.positionPriceMovePct+"%",observedPrice:q.price,referencePrice:pos.lastUsd,movePct:Number(movePct.toFixed(3)),source:q.source});
        }
        for(const field of ["invalidation","target"]){
          for(const rule of classifyRule(pos[field])){
            if(crossed(q.price,rule)) triggers.push({type:field==="invalidation"?"POSITION_INVALIDATION_LEVEL":"POSITION_TARGET_LEVEL",symbol,field,condition:rule.op+" $"+rule.level,observedPrice:q.price,source:q.source,shadow:true});
          }
        }
      }
      const setups=[...((D.strategyState||{}).watchlist||[]),...((D.strategyState||{}).pendingSetups||[])].filter(x=>x.symbol===symbol);
      for(const s of setups){
        for(const rule of classifyRule(s.trigger)){
          const spec=confirmationSpec(s,C);
          if(spec&&rule.op==="ABOVE"&&(symbol==="BTC"||symbol==="ETH")){
            const count=spec.count||spec.completedCloses||C.defaultConfirmation.completedCloses,timeframe=spec.timeframeMinutes||C.defaultConfirmation.timeframeMinutes,candles=await completedCloses(symbol,count,timeframe),confirmed=Array.isArray(candles)&&candles.length===count&&candles.every(x=>x.close>rule.level);
            observations.push({symbol,setupId:s.setupId||null,type:"CANDLE_CLOSE_CONFIRMATION",level:rule.level,timeframeMinutes:timeframe,requiredCloses:count,completedCloses:candles||[],confirmed,source:"Coinbase Exchange candles"});
            if(confirmed) triggers.push({type:"WATCHLIST_BREAKOUT_CONFIRMED",symbol,setup:s.setup||null,setupId:s.setupId||null,condition:count+" completed "+timeframe+"m closes ABOVE $"+rule.level,observedPrice:q.price,completedCloses:candles,source:"Coinbase Exchange candles",shadow:true});
          }else if(crossed(q.price,rule)) triggers.push({type:"WATCHLIST_TRIGGER_LEVEL",symbol,setup:s.setup||null,setupId:s.setupId||null,condition:rule.op+" $"+rule.level,observedPrice:q.price,source:q.source,shadow:true});
        }
      }
    }catch(e){errors.push({symbol,error:String(e.message||e)})}
  }
  const unique=[]; const seen=new Set();
  for(const t of triggers){const k=[t.type,t.symbol,t.condition,t.setupId||""].join("|");if(!seen.has(k)){seen.add(k);unique.push(t)}}
  const keyMaterial=unique.map(t=>[t.type,t.symbol,t.condition,t.setupId||""].join("|")).sort().join("\n");
  const triggerKey=unique.length?crypto.createHash("sha256").update(keyMaterial).digest("hex").slice(0,16):null;
  const out={schemaVersion:3,mode:"EVENT_BRIDGE_PRODUCTION",triggeredAt:now,needsDecision:unique.length>0,triggerKey,triggers:unique,observations,errors,note:"Production sensor. No trade is performed by the sensor. Positive events are committed to main/quant/decision-event.json for the downstream Quant Trader decision consumer."};
  fs.mkdirSync("quant",{recursive:true});
  fs.writeFileSync("quant/trigger.json",JSON.stringify(out,null,2)+"\n");
  console.log(JSON.stringify(out,null,2));
})().catch(e=>{console.error(e);process.exit(1)});