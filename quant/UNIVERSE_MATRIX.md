# Daily Universe Matrix

The dashboard reads only `data.js` → `strategyState.dailyUniverseSelection`.
The selector writes the identical selection to `quant/daily-universe.json`.
No additional scheduler, decision API call or portfolio accounting change is required.

`candidates` contains every attempted instrument, including unavailable data and
liquidity rejections. `universeSize` remains the eligible ranked count for backwards
compatibility; `attemptedCount`, `evaluatedCount` and `failedCount` explain coverage.
Eligible candidates retain their score rank even when the correlation gate rejects them.
`SELECTED` means a top-5 watchlist candidate, `WATCH` means eligible but outside the
five slots, and `REJECT` carries a liquidity, correlation or data-failure reason.
Only selected candidates have active structured setup rules and expiry.

The v2 weights are unchanged: 20% 5d momentum, 10% 20d momentum,
15% 5d relative strength vs SPY, 10% 20d relative strength, 20% ATR,
10% realized volatility, 10% participation and 5% absolute gap z-score.
Momentum combines the four momentum/relative-strength contributions divided by 55%;
volatility combines ATR/realized-volatility contributions divided by 30%.
Factor colours use cross-sectional z-scores: green >= +0.5, red <= -0.5, amber between.
Correlation is measured against earlier selected instruments at the selection gate,
with green <= 0.5, amber <= 0.80 and red above the 0.80 cap.
Higher volatility is rewarded as opportunity; green does not mean low risk.
Regime fit is not part of selector v2 and is explicitly shown as unavailable.
The score is a weighted z-score, not a probability or a 0–100 rating.

Rank change compares against the prior saved full scan on a different UTC selection
date. Positive means a rise; NEW means absent from the previous full ranking.
Legacy top-5 snapshots have no full ranking: the dashboard labels partial coverage
and does not invent omitted candidates, factor scores or prior ranks.
All attempted candidates appear after the next successful daily refresh; rank changes
appear after two full daily scans. Existing refresh timing is unchanged (after 12 UTC).

The selector requires SPY and five diversified eligible candidates before writing.
A failed refresh preserves the previous selection. The regression tests check scores,
correlation rejection, rank changes, crypto confirmations, complete write/read contract
and preservation of all portfolio ledger fields. Run:

    node --test quant/tests/universe-matrix.test.js
