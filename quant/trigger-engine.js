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

async function completedHourlyCloses(symbol,count=2){
  if(symbol!=="BTC"&&symbol!=="ETH") return null;
  const end=Math.floor(Date.now()/1000), start=end-6*3600;
  const a=await fetchJson("https://api.exchange.coinbase.com/products/"+symbol+"-USD/candles?granularity=3600&start="+new Date(start*1000).toISOString()+"&end="+new Date(end*1000).toISOString());
  const currentHour=Math.floor(end/3600)*3600;
  return (Array.isArray(a)?a:[]).filter(x=>Array.isArray(x)&&x.length>=5&&Number(x[0])+3600<=currentHour).sort((a,b)=>b[0]-a[0]).slice(0,count).map(x=>({start:new Date(Number(x[0])*1000).toISOString(),close:Number(x[4])}));
}
function requiresTwoHourlyCloses(s){return /two completed 60-minute closes|two completed hourly closes/i.test(String(s.trigger||""))}
async function price(symbol){
  if(symbol==="BTC"||symbol==="ETH"){
    const x=await fetchJson("https://api.coinbase.com/v2/prices/"+symbol+"-USD/spot");
    return {price:Number(x.data.amount),source:"Coinbase spot",url:"https://api.coinbase.com/v2/prices/"+symbol+"-USD/spot"};
  }
  const y=await fetchJson("https://query1.finance.yahoo.com/v8/finance/chart/"+encodeURIComponent(symbol)+"?interval=5m&range=1d");
  const r=y.chart&&y.chart.result&&y.chart.result[0];
  if(!r) throw new Error("No Yahoo chart result for "+symbol);
  const meta=r.meta||{}, q=r.indicators&&r.indicators.quote&&r.indicators.quote[0], closes=(q&&q.close)||[];
  let p=null; for(let i=closes.length-1;i>=0;i--) if(Number.isFinite(closes[i])){p=closes[i];break}
  if(!Number.isFinite(p)) p=Number(meta.regularMarketPrice);
  if(!Number.isFinite(p)) throw new Error("No price for "+symbol);
  return {price:p,source:"Yahoo Finance chart",url:"https://query1.finance.yahoo.com/v8/finance/chart/"+symbol+"?interval=5m&range=1d"};
}

(async()=>{
  const D=loadLedger("data.js"), now=new Date().toISOString(), triggers=[], observations=[], errors=[];
  const symbols=new Set([...(D.positions||[]).map(p=>p.symbol),...((D.strategyState||{}).watchlist||[]).map(x=>x.symbol),...((D.strategyState||{}).pendingSetups||[]).map(x=>x.symbol)]);
  for(const symbol of symbols){
    try{
      const q=await price(symbol); observations.push({symbol,...q});
      const pos=(D.positions||[]).find(p=>p.symbol===symbol);
      if(pos){
        const movePct=pos.lastUsd?((q.price/pos.lastUsd)-1)*100:null;
        if(Number.isFinite(movePct)&&Math.abs(movePct)>=2){
          triggers.push({type:"PRICE_MOVE",symbol,condition:"abs(move from stored lastUsd) >= 2%",observedPrice:q.price,referencePrice:pos.lastUsd,movePct:Number(movePct.toFixed(3)),source:q.source});
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
          if(requiresTwoHourlyCloses(s)&&rule.op==="ABOVE"&&(symbol==="BTC"||symbol==="ETH")){
            const candles=await completedHourlyCloses(symbol,2),confirmed=Array.isArray(candles)&&candles.length===2&&candles.every(x=>x.close>rule.level);
            observations.push({symbol,setupId:s.setupId||null,type:"HOURLY_CLOSE_CONFIRMATION",level:rule.level,requiredCloses:2,completedCloses:candles||[],confirmed,source:"Coinbase Exchange candles"});
            if(confirmed) triggers.push({type:"WATCHLIST_BREAKOUT_CONFIRMED",symbol,setup:s.setup||null,setupId:s.setupId||null,condition:"2 completed 60m closes ABOVE $"+rule.level,observedPrice:q.price,completedCloses:candles,source:"Coinbase Exchange candles",shadow:true});
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