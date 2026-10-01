# Quant Trigger Engine — PR Bridge Shadow Mode

Purpose: monitor the Quant Challenge cheaply between expensive ChatGPT Work runs and emit a GitHub pull-request event only when a mechanical trigger needs review.

## Flow

`GitHub Actions every 15 min → trigger-engine.js → no trigger = stop → trigger = update quant-trigger-event branch → open/update one PR`

The PR is an **event envelope**, not a trade and not a portfolio-state change.

## What the sensor checks

- Open positions, watchlist and pending setups are read from authoritative `main/data.js`.
- BTC/ETH monitoring prices come from Coinbase public spot.
- US-listed symbols use Yahoo Finance chart data.
- Mechanical conditions currently include:
  - absolute move of at least 2% versus the stored `lastUsd`,
  - numeric USD levels parsed from open-position invalidation/target text,
  - numeric USD levels parsed from watchlist/pending setup trigger text.

Monitoring prices are not execution prices.

## PR bridge behavior

- Branch: `quant-trigger-event`.
- A positive trigger writes `quant/trigger.json` only on that branch.
- The workflow opens one PR to `main`, or updates/comments the existing open trigger PR.
- A stable `triggerKey` fingerprints the active mechanical conditions.
- Identical trigger keys are suppressed for 60 minutes to reduce repeated PR activity.
- The workflow never merges the PR automatically.

## Safety

- No BUY/SELL/REDUCE is executed here.
- `main/data.js` is never edited by the sensor.
- Cash, positions, cost bases, P/L, trade history and strategic memory remain untouched.
- Any downstream decision engine must re-read current `main/data.js` and fresh market evidence.
- A paper trade exists only after the existing atomic GitHub commit + read-back rules succeed.

## Intended downstream use

A GitHub-connected event-driven ChatGPT Work workflow can watch pull-request activity. On a trigger PR create/update, it should inspect the PR-head `quant/trigger.json`, then run the normal Quant Trader decision pipeline against current `main/data.js`.

This repository-side bridge does not itself configure or invoke ChatGPT Work.
