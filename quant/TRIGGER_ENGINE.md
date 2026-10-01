# Quant Trigger Engine — Shadow Mode

Purpose: cheaply monitor the Quant Challenge between expensive ChatGPT Work runs.

## What it does
- Runs every 15 minutes in GitHub Actions.
- Reads the authoritative `data.js`.
- Fetches public spot/intraday prices for symbols already present in open positions, watchlist, or pending setups.
- Checks simple mechanical conditions only:
  - >=2% move versus the stored `lastUsd` mark,
  - numeric USD levels found in position invalidation/target text,
  - numeric USD levels found in watchlist/pending setup trigger text.
- Produces `quant/trigger.json`.

## Shadow-mode safety
- It never buys, sells, sizes, or changes portfolio accounting.
- It never edits `data.js`.
- It does not invoke ChatGPT Work.
- When there is no trigger, it makes no repository commit.
- A positive trigger only records sensor evidence in `quant/trigger.json`.

## Data sources
- BTC/ETH: Coinbase public spot endpoint.
- US-listed symbols: Yahoo Finance chart endpoint.
These are monitoring sources, not guaranteed executable prices. Work must re-fetch reliable current prices before any paper-trade decision.

## Next promotion step
After observing false-positive/false-negative behavior, a later version can route a positive trigger to a supported event-driven decision workflow. Promotion out of SHADOW mode must be explicit.
