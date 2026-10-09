"""Download research-only adjusted closes from Yahoo via yfinance; no credentials or paid LLM.
Usage: python quant/research/fetch_prices.py --out prices.csv
Fail closed on unavailable/incomplete data. Research use only; Yahoo is unofficial.
"""
import argparse, csv, datetime as dt, hashlib, json, pathlib
def main():
 p=argparse.ArgumentParser()
 p.add_argument('--out',default='quant/research/prices.csv')
 p.add_argument('--start',default='2015-01-01')
 p.add_argument('--end',default=dt.date.today().isoformat())
 args=p.parse_args()
 try: import yfinance as yf
 except ImportError as e: raise SystemExit('Install: pip install yfinance') from e
 tickers=['EWA','EWC','SPY']
 raw=yf.download(tickers,start=args.start,end=args.end,auto_adjust=True,progress=False,threads=False)
 if raw.empty: raise SystemExit('No data returned; no synthetic fallback')
 closes=raw['Close']
 if any(t not in closes.columns for t in tickers): raise SystemExit('Missing ticker')
 closes=closes[tickers].dropna(how='any')
 if len(closes)<500: raise SystemExit('Insufficient overlapping rows')
 if not closes.index.is_monotonic_increasing or closes.index.has_duplicates: raise SystemExit('Bad dates')
 if (closes<=0).any().any(): raise SystemExit('Nonpositive prices')
 dest=pathlib.Path(args.out);dest.parent.mkdir(parents=True,exist_ok=True)
 with dest.open('w',newline='') as f:
  w=csv.writer(f);w.writerow(['Date']+tickers)
  for date,row in closes.iterrows():w.writerow([date.strftime('%Y-%m-%d')]+[format(float(row[t]),'.10g') for t in tickers])
 digest=hashlib.sha256(dest.read_bytes()).hexdigest()
 print(json.dumps({'path':str(dest),'rows':len(closes),'first':str(closes.index[0].date()),'last':str(closes.index[-1].date()),'sha256':digest,'source':'Yahoo Finance via unofficial yfinance, adjusted closes','limitations':'Not licensed institutional point-in-time data; delisted universe and FX not modeled.'}))
if __name__=='__main__':main()
