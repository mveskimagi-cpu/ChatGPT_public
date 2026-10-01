# Quant Trigger Engine — Production Event Bridge

Purpose: monitor the €1000 Quant Challenge between Quant Trader decision runs and publish a durable GitHub event only when a mechanical condition requires a fresh model decision.

## Production flow

`GitHub Actions every 15 min → trigger-engine.js → no trigger = stop → trigger = commit quant/decision-event.json to main → downstream Quant Trader decision consumer`

The event is an **event envelope**, not a trade and not a portfolio-state change.

## Source of truth and sensor inputs

- Authoritative portfolio state is always `main/data.js`.
- Open positions, watchlist and pending setups are read from that file at the start of the run.
- BTC/ETH monitoring prices come from Coinbase public spot.
- US-listed symbols use Yahoo Finance chart data.
- Mechanical conditions include:
  - absolute move of at least 2% versus stored `lastUsd`,
  - numeric USD levels parsed from position invalidation/target text,
  - numeric USD levels parsed from watchlist/pending-setup trigger text.
- Monitoring prices are trigger observations, not paper-trade execution prices.

## Event bridge behavior

- Positive triggers are written to `main/quant/decision-event.json`.
- The event contains the full trigger payload, a stable `triggerKey`, publication time and downstream decision instructions.
- Identical trigger keys are suppressed for 60 minutes.
- No trigger means no repository mutation.
- Event publication is committed to `main`, pushed, then read back exactly. Failure is fail-closed.

## Trading invariants

- The sensor never performs BUY/SELL/REDUCE and never edits `data.js`.
- Cash, positions, cost bases, P/L, trade history and strategic memory remain under the Quant Trader decision pipeline.
- A downstream decision must re-read current `main/data.js` and obtain fresh market evidence before HOLD/BUY/SELL/REDUCE.
- Any proposed mutation must be rejected if the authoritative state changed after the decision base was read.
- A paper trade exists only after the existing atomic GitHub commit and read-back verification succeeds.
- Real trading is prohibited.

## Production status

The GitHub-native sensor → trigger → event → commit → push → read-back path has passed its scheduled production test. Production mode refers to this event bridge. Autonomous model decision consumption remains a separate integration and must not be represented as active until a supported consumer has been configured and verified.
