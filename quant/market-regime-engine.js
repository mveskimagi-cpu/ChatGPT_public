// Market Regime Engine v1
// Decision-support only: does not execute trades or mutate portfolio accounting.
const clamp=(x,lo,hi)=>Math.max(lo,Math.min(hi,x));
const sign=x=>x>0?1:x<0?-1:0;
export const REGIME_ENGINE_VERSION="1.0.0";
export function classifyMarketRegime(input){
 const {equityTrend=0,breadth=0,creditRisk=0,ratesShock=0,usdShock=0,volatilityZ=0,liquidity=0,trendStrength=0,dataCompleteness=0}=input||{};
 const riskScore=clamp(0.30*equityTrend+0.20*breadth-0.15*creditRisk-0.10*ratesShock-0.05*usdShock-0.15*clamp(volatilityZ/3,-1,1)+0.05*liquidity,-1,1);
 const risk=riskScore>=0.25?"RISK_ON":riskScore<=-0.25?"RISK_OFF":"NEUTRAL";
 const trend=trendStrength>=0.55?"TRENDING":"RANGE";
 const volatility=volatilityZ>=2?"EXTREME":volatilityZ>=1?"HIGH":volatilityZ<=-0.75?"LOW":"NORMAL";
 const liquidityState=liquidity>=0.25?"SUPPORTIVE":liquidity<=-0.25?"TIGHT":"NEUTRAL";
 const a=[sign(equityTrend),sign(breadth),-sign(creditRisk),-sign(ratesShock),-sign(usdShock),-sign(volatilityZ),sign(liquidity)].filter(x=>x!==0);
 const coherence=a.length?Math.abs(a.reduce((x,y)=>x+y,0))/a.length:0;
 const confidence=Math.round(100*clamp(0.65*dataCompleteness+0.35*coherence,0,1));
 let m=1;
 if(risk==="RISK_OFF")m*=0.60; if(risk==="NEUTRAL")m*=0.85;
 if(volatility==="HIGH")m*=0.75; if(volatility==="EXTREME")m*=0.50;
 if(liquidityState==="TIGHT")m*=0.80;
 m=Math.round(clamp(m,0.20,1.00)*100)/100;
 const allowedStrategies=[];
 if(risk==="RISK_ON"&&trend==="TRENDING")allowedStrategies.push("MOMENTUM","BREAKOUT","RELATIVE_STRENGTH");
 if(trend==="RANGE")allowedStrategies.push("MEAN_REVERSION","CONFIRMED_RANGE_BREAKOUT");
 if(risk!=="RISK_OFF")allowedStrategies.push("EVENT_DRIVEN");
 if(risk==="RISK_OFF")allowedStrategies.push("DEFENSIVE_ONLY","HIGH_CONVICTION_EVENT_ONLY");
 return {version:REGIME_ENGINE_VERSION,risk,trend,volatility,liquidity:liquidityState,riskScore:Math.round(riskScore*1000)/1000,confidence,positionSizeMultiplier:m,allowedStrategies,guardrails:{decisionSupportOnly:true,noAutomaticExecution:true,requireFreshMarketData:true,lowConfidenceThreshold:60,lowConfidenceAction:"DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"}};
}
