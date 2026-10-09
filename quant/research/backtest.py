"""Research-only shadow backtest. Input CSV Date,EWA,EWC,SPY adjusted USD closes."""
import argparse,csv,json,math,statistics
def avg(x):return sum(x)/len(x)
def sd(x):return statistics.pstdev(x)
def ols(x,y):
 mx,my=avg(x),avg(y);den=sum((v-mx)**2 for v in x)
 b=sum((a-mx)*(v-my) for a,v in zip(x,y))/den if den>1e-12 else 0
 return my-b*mx,b
def kalman_beta(xs,ys,process=1e-5,measurement=.005):
 b,p=1.,1.
 for x,y in zip(xs,ys):
  p+=process;k=p*x/(x*x*p+measurement);b+=k*(y-b*x);p=(1-k*x)*p
 return b
def load(path):
 with open(path,newline='') as f:rows=list(csv.DictReader(f))
 if len(rows)<260:raise ValueError('At least 260 dates required')
 if not all(set(('Date','EWA','EWC','SPY')).issubset(r) for r in rows):raise ValueError('Bad headers')
 dates=[r['Date'] for r in rows]
 if dates!=sorted(set(dates)):raise ValueError('Dates not unique ascending')
 prices=[[float(r[k]) for k in ('EWA','EWC','SPY')] for r in rows]
 if not all(all(math.isfinite(v) and v>0 for v in row) for row in prices):raise ValueError('Invalid prices')
 return dates,prices
def run(prices,method,cost_bps=20,train=180):
 wealth=1000.;position=0;trades=0;daily=[];peak=wealth;maxdd=0.
 for t in range(train,len(prices)):
  hist=prices[t-60:t];x=[math.log(r[1]) for r in hist];y=[math.log(r[0]) for r in hist]
  intercept,beta=ols(x,y)
  if method=='kalman':beta=kalman_beta(x,y);intercept=avg([v-beta*u for u,v in zip(x,y)])
  residuals=[v-intercept-beta*u for u,v in zip(x,y)]
  z=(residuals[-1]-avg(residuals))/sd(residuals) if sd(residuals)>1e-8 else 0
  mom=prices[t-1][0]/prices[t-21][0]-1
  regime=prices[t-1][2]>avg([r[2] for r in hist])
  if method=='kalman':target=int(z < -1.5)
  elif method=='regime':target=int(mom>0 and regime)
  elif method=='cost_gate':target=int(mom>max(.025,2*cost_bps/10000))
  elif method=='hold':target=1
  else:raise ValueError(method)
  if target!=position:wealth*=1-cost_bps/10000;trades+=1
  position=target;r=prices[t][0]/prices[t-1][0]-1
  wealth*=1+position*r;daily.append(position*r)
  peak=max(peak,wealth);maxdd=max(maxdd,1-wealth/peak)
 vol=sd(daily)
 return dict(strategy=method,cost_bps_per_side=cost_bps,ending_eur=round(wealth,2),return_pct=round(100*(wealth/1000-1),2),sharpe=round(avg(daily)/vol*math.sqrt(252),2) if vol else None,max_drawdown_pct=round(100*maxdd,2),transactions=trades,observations=len(daily))
def main():
 ap=argparse.ArgumentParser();ap.add_argument('csv');args=ap.parse_args()
 dates,prices=load(args.csv);start=max(180,int(len(prices)*.6));subset=prices[start-180:]
 result=[run(subset,m,c,180) for m in ('hold','kalman','regime','cost_gate') for c in (0,10,30,60)]
 print(json.dumps(dict(first_test_date=dates[start],last_date=dates[-1],results=result,limitations='Long-only EWA proxies, no true short-leg pairs, no FX, dividends not independently audited, close-to-close fill approximation; no parameter selection or confidence intervals.'),indent=2))
if __name__=='__main__':main()
