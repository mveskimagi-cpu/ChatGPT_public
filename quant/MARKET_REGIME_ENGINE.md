# Market Regime Engine v1

Purpose: add a deterministic, auditable market-regime layer to the €1000 Quant Challenge without changing portfolio accounting or executing trades.

## Output
Risk, trend, volatility, liquidity, confidence (0–100), position-size multiplier (0.20–1.00), and allowed strategy families.

## Inputs
All directional inputs are normalized before calling the engine. dataCompleteness measures the share/quality of required fresh observations. Missing observations must not be inferred as bullish or bearish.

Suggested hourly features: broad equity trend, market breadth, liquid credit-risk proxy, benchmark-yield shock, broad USD shock, volatility stress, liquidity/financial-conditions proxy, and trend strength.

## Research guardrails
1. Decision support only; no direct order generation.
2. Missing or stale data reduces confidence and must never loosen entry/risk thresholds.
3. Existing ledger, cash, positions, trades and strategic-memory semantics remain authoritative in main/data.js.
4. Position-size multiplier is a ceiling modifier, not an instruction to invest.
5. Weight/threshold changes require a version bump and walk-forward/out-of-sample evaluation before promotion.
6. First deployment runs in shadow/observation mode and records outputs before the regime can constrain paper-trading decisions.

## Integration contract
The hourly trader calculates normalized features, calls classifyMarketRegime(features), persists timestamp + raw feature snapshot + output, then passes the result to candidate ranking/risk logic. The engine itself never modifies data.js.
