window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-11-19 09:01 UTC",
    "lastTrade": "2026-10-06 16:57 UTC",
    "marketSource": "NVDA paper SELL: Google Finance last trade $230.55 at 2026-09-30 10:51:23 GMT-4 (17:51:23 Europe/Tallinn), after a $232.37 intraday high. EUR/USD 1.1358 USD per EUR from Investing.com real-time 1.1357/1.1359 bid/ask midpoint, raw time 11:04:37. See trade.execution and strategyState.latestReview.",
    "note": "Paper trading only — no real money is traded."
  },
  "automationConfig": {
    "schemaVersion": 1,
    "decision": {
      "maxBuyEur": 250,
      "maxQuoteAgeMinutes": 15,
      "maxPositionPct": 35,
      "positionReviewMovePct": 2,
      "watchlistMaterialMovePct": 2,
      "model": "gpt-6-luna",
      "reasoningEffort": "low",
      "promptCacheTtl": "30m",
      "positionReevaluationMinutes": 120,
      "watchlistReevaluationMinutes": 240,
      "criticModel": "gpt-5.6-terra",
      "maxOutputTokens": 1600,
      "criticMaxOutputTokens": 1200,
      "maxInputTokens": 6000,
      "maxPromptBytes": 24000,
      "monthlyLimitUsd": 5,
      "dailyLimitUsd": 0.16,
      "maxDailyRequests": 16,
      "pricingVerifiedAt": "2026-10-07",
      "mode": "BUDGETED_ANALYST_AND_TRADE_AUDIT"
    },
    "trigger": {
      "positionPriceMovePct": 2,
      "defaultConfirmation": {
        "timeframeMinutes": 60,
        "completedCloses": 2
      },
      "quote": {
        "equityInterval": "5m",
        "equityRange": "1d"
      }
    }
  },
  "summary": {
    "initial": 1000,
    "value": 847.27,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -151.3,
    "total": -152.73,
    "totalPct": -15.27
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 67.2300033569336,
      "costEur": 200,
      "entryReason": "ON is the strongest supplied confirmed breakout candidate: fresh price $85.35 is above the $81.05 trigger, with positive 5-day (+9.5%) and 20-day (+10.2%) momentum, reported volume at 1.12x, comparatively moderate 10-day realized volatility (35%), and low selected correlation (0.27). Use reduced sizing because the broader regime remains mixed with fragile participation and tight-liquidity risks.",
      "openedAt": "2026-10-02T13:33:00.322Z",
      "timeHorizon": "1-3 trading days",
      "riskLevel": "MEDIUM",
      "thesis": "ON is the strongest supplied confirmed breakout candidate: fresh price $85.35 is above the $81.05 trigger, with positive 5-day (+9.5%) and 20-day (+10.2%) momentum, reported volume at 1.12x, comparatively moderate 10-day realized volatility (35%), and low selected correlation (0.27). Use reduced sizing because the broader regime remains mixed with fragile participation and tight-liquidity risks.",
      "target": "Maintain while the breakout structure holds; reassess/trim on momentum failure or at the next strategy review rather than using an invented profit target.",
      "invalidation": "Loss of $79.11 or failed breakout/reversal of the ranked momentum signal.",
      "lastDecision": "HOLD",
      "lastDecisionReason": "ON is at $84.39, modestly below the $85.35 entry but still above the $81.05 breakout trigger and $79.11 invalidation. No supplied fresh participation or reversal evidence justifies adding, reducing, or exiting.",
      "setupId": "ON-20261002-daily-quant",
      "value": 161.31,
      "pnl": -38.69,
      "pnlPct": -19.35,
      "fxUsdPerEur": 1.0992635488510132,
      "lastPriceAt": "2026-11-18T21:00:00.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 90.31999969482422,
      "costEur": 150,
      "entryReason": "MSTR has a fresh confirmed 5-minute breakout above the $163.17 entry level: completed close was $163.53 with participation at 1.084x baseline, and the latest quote remains above trigger at $163.70. The daily selection data retain strong 20-day momentum (+29.9%) and above-baseline volume (1.55x). Size is reduced due to high realized volatility (57%), relatively high selected correlation (0.66), marginal participation confirmation, and the fragile broader-risk backdrop.",
      "openedAt": "2026-10-05T18:46:52.781Z",
      "timeHorizon": "1-3 trading days",
      "riskLevel": "HIGH",
      "thesis": "MSTR has a fresh confirmed 5-minute breakout above the $163.17 entry level: completed close was $163.53 with participation at 1.084x baseline, and the latest quote remains above trigger at $163.70. The daily selection data retain strong 20-day momentum (+29.9%) and above-baseline volume (1.55x). Size is reduced due to high realized volatility (57%), relatively high selected correlation (0.66), marginal participation confirmation, and the fragile broader-risk backdrop.",
      "target": "Break above $163.17 with sustained participation.",
      "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
      "lastDecision": "HOLD",
      "lastDecisionReason": "Maintain the existing MSTR paper position. The supplied quote of $164.76 remains above its documented $163.17 breakout-entry level and no completed 5-minute close below the $156.85 invalidation, or independently evidenced reversal, is supplied. The target-level alert is not actionable because the recorded target duplicates the entry threshold rather than providing an independent profit-taking level. Do not BUY: MSTR has deteriorated to rank 7 from 5, with sub-baseline daily volume (0.934x), elevated ATR (5.782%), and the portfolio is already about 55% allocated to clustered short-horizon long-equity momentum exposure in a tight-liquidity range regime. Do not REDUCE or SELL without the documented invalidation or new confirmed reversal evidence.",
      "setupId": "MSTR-20261005-daily-quant",
      "entryRule": {
        "operator": "ABOVE",
        "level": 163.17,
        "timeframeMinutes": 5,
        "requiredCloses": 1,
        "requireParticipation": true
      },
      "invalidationRule": {
        "operator": "BELOW",
        "level": 156.85,
        "timeframeMinutes": 5,
        "requiredCloses": 1
      },
      "setupExpiresAt": "2026-10-08T12:10:16.000Z",
      "value": 84.44,
      "pnl": -65.56,
      "pnlPct": -43.71,
      "fxUsdPerEur": 1.0992635488510132,
      "lastPriceAt": "2026-11-18T21:00:00.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 45.779998779296875,
      "costEur": 100,
      "entryReason": "Initiate a reduced paper position in HPE. The required entry condition is explicitly met: a completed 5-minute close of $70.73 exceeded the $69.39 trigger with 1.631x participation versus the 12-bar baseline, and the latest quote of $70.60 remains above the trigger. HPE remains a constructive ranked momentum candidate (rank 4, 5-day momentum +9.1%, 20-day momentum +25.6%) with moderate selected-set correlation (0.343). The €100 size is deliberately reduced for tight liquidity, weak daily volume participation (0.745x), rank deterioration from 1 to 4, high realized volatility/ATR, price extension above the trigger, and unverified overlap with existing ON and MSTR exposure. The risk report approves the allocation with no veto. The MSTR target-level event does not justify action because $163.17 is its documented entry trigger, not an evidence-backed profit target.",
      "openedAt": "2026-10-06T15:29:44.132Z",
      "timeHorizon": "1-3 trading days; reassess or exit by the setup expiry on 2026-10-09 if the thesis has not continued to validate.",
      "riskLevel": "HIGH",
      "thesis": "Initiate a reduced paper position in HPE. The required entry condition is explicitly met: a completed 5-minute close of $70.73 exceeded the $69.39 trigger with 1.631x participation versus the 12-bar baseline, and the latest quote of $70.60 remains above the trigger. HPE remains a constructive ranked momentum candidate (rank 4, 5-day momentum +9.1%, 20-day momentum +25.6%) with moderate selected-set correlation (0.343). The €100 size is deliberately reduced for tight liquidity, weak daily volume participation (0.745x), rank deterioration from 1 to 4, high realized volatility/ATR, price extension above the trigger, and unverified overlap with existing ON and MSTR exposure. The risk report approves the allocation with no veto. The MSTR target-level event does not justify action because $163.17 is its documented entry trigger, not an evidence-backed profit target.",
      "target": "Break above $69.39 with sustained participation.",
      "invalidation": "Loss of $67.33 or failed breakout/reversal of the ranked momentum signal.",
      "lastDecision": "HOLD",
      "lastDecisionReason": "Maintain the existing HPE paper position without adding. A completed 5-minute close at $70.735 remained above the $69.39 entry trigger with 1.364x baseline participation, while no completed 5-minute close below the documented $67.33 invalidation is supplied. The target-level alert is not actionable because the recorded target duplicates the entry threshold rather than providing an independent profit objective. Do not add despite the valid breakout: HPE fell from rank 1 to 4, daily volume participation is weak at 0.745x, realized volatility and ATR are elevated, and the portfolio already has roughly 55% exposure across four short-horizon long momentum equities in a tight-liquidity regime.",
      "setupId": "HPE-20261006-daily-quant",
      "entryRule": {
        "operator": "ABOVE",
        "level": 69.39,
        "timeframeMinutes": 5,
        "requiredCloses": 1,
        "requireParticipation": true
      },
      "invalidationRule": {
        "operator": "BELOW",
        "level": 67.33,
        "timeframeMinutes": 5,
        "requiredCloses": 1
      },
      "setupExpiresAt": "2026-10-09T12:15:49.745Z",
      "value": 66.55,
      "pnl": -33.45,
      "pnlPct": -33.45,
      "fxUsdPerEur": 1.0992635488510132,
      "lastPriceAt": "2026-11-18T21:00:00.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 139.4199981689453,
      "costEur": 100,
      "entryReason": "Initiate a reduced SHOP paper position. The documented entry rule is satisfied: the completed 5-minute close of $165.455 was above the $162.81 trigger with 1.132x participation, and the latest quote ($165.405) remains above the trigger. SHOP is rank 3 with positive 5-day and 20-day momentum (+11.2% and +9.8%), above-baseline daily volume (1.296x), high dollar liquidity, and low selected-set correlation (0.114). The €100 allocation is within cash, buy, and position limits and retains substantial cash. Existing MSTR and HPE target alerts are not profit-taking signals because their recorded targets duplicate entry triggers; neither has documented invalidation. ON has not met its new breakout rule. Reduced sizing is warranted because SHOP volatility is elevated, the portfolio already holds three short-horizon momentum positions, and the regime is neutral/range with tight liquidity.",
      "openedAt": "2026-10-06T16:57:00.973Z",
      "timeHorizon": "1-3 trading days; reassess or exit by setup expiry on 2026-10-09 if continuation and participation do not persist. Documented invalidation: one completed 5-minute close below $157.41.",
      "riskLevel": "HIGH",
      "thesis": "Initiate a reduced SHOP paper position. The documented entry rule is satisfied: the completed 5-minute close of $165.455 was above the $162.81 trigger with 1.132x participation, and the latest quote ($165.405) remains above the trigger. SHOP is rank 3 with positive 5-day and 20-day momentum (+11.2% and +9.8%), above-baseline daily volume (1.296x), high dollar liquidity, and low selected-set correlation (0.114). The €100 allocation is within cash, buy, and position limits and retains substantial cash. Existing MSTR and HPE target alerts are not profit-taking signals because their recorded targets duplicate entry triggers; neither has documented invalidation. ON has not met its new breakout rule. Reduced sizing is warranted because SHOP volatility is elevated, the portfolio already holds three short-horizon momentum positions, and the regime is neutral/range with tight liquidity.",
      "target": "Break above $162.81 with sustained participation.",
      "invalidation": "Loss of $157.41 or failed breakout/reversal of the ranked momentum signal.",
      "lastDecision": "HOLD",
      "lastDecisionReason": "Maintain the existing reduced SHOP paper position. The $162.81 target alert is not an actionable profit target because it duplicates the original entry threshold. SHOP remains above $162.81 and no completed 5-minute close below the documented $157.41 invalidation is supplied. Do not add: the latest completed 5-minute close above entry had inadequate participation at 0.845x of its 12-bar baseline, while volatility remains elevated and the portfolio already has clustered short-horizon long-equity momentum exposure.",
      "setupId": "SHOP-20261006-daily-quant",
      "entryRule": {
        "operator": "ABOVE",
        "level": 162.81,
        "timeframeMinutes": 5,
        "requiredCloses": 1,
        "requireParticipation": true
      },
      "invalidationRule": {
        "operator": "BELOW",
        "level": 157.41,
        "timeframeMinutes": 5,
        "requiredCloses": 1
      },
      "setupExpiresAt": "2026-10-09T12:15:49.745Z",
      "value": 86.4,
      "pnl": -13.6,
      "pnlPct": -13.6,
      "fxUsdPerEur": 1.0992635488510132,
      "lastPriceAt": "2026-11-18T21:00:00.000Z"
    }
  ],
  "trades": [
    {
      "date": "2026-09-10 13:28",
      "symbol": "BTC",
      "side": "BUY",
      "qty": 0.00148382,
      "priceUsd": 78425.8,
      "eur": 100,
      "pnl": null,
      "note": "Initial position"
    },
    {
      "date": "2026-09-10 13:28",
      "symbol": "ETH",
      "side": "BUY",
      "qty": 0.070926,
      "priceUsd": 2461.07,
      "eur": 150,
      "pnl": null,
      "note": "Initial position"
    },
    {
      "date": "2026-09-10 17:02",
      "symbol": "XLE",
      "side": "BUY",
      "qty": 2.6693,
      "priceUsd": 65.31,
      "eur": 150,
      "pnl": null,
      "note": "Initial position"
    },
    {
      "date": "2026-09-16",
      "symbol": "ETH",
      "side": "SELL",
      "qty": 0.035463,
      "priceUsd": 2400.81,
      "eur": 73.81,
      "pnl": -1.19,
      "note": "Reduce 50%"
    },
    {
      "date": "2026-09-17",
      "symbol": "ETH",
      "side": "SELL",
      "qty": 0.035463,
      "priceUsd": 2376,
      "eur": 73.45,
      "pnl": -1.55,
      "note": "Exit remaining initial ETH"
    },
    {
      "date": "2026-09-17 16:35",
      "symbol": "XLE",
      "side": "SELL",
      "qty": 2.6693,
      "priceUsd": 64.04,
      "eur": 148.96,
      "pnl": -1.04,
      "note": "Exit"
    },
    {
      "date": "2026-09-18 14:34",
      "symbol": "ETH",
      "side": "BUY",
      "qty": 0.045846,
      "priceUsd": 2506.23,
      "eur": 100,
      "pnl": null,
      "note": "Re-entry"
    },
    {
      "date": "2026-09-18",
      "symbol": "BTC",
      "side": "BUY",
      "qty": 0.00214363,
      "priceUsd": 80191,
      "eur": 150,
      "pnl": null,
      "note": "Add"
    },
    {
      "date": "2026-09-18 17:58",
      "symbol": "BTC",
      "side": "SELL",
      "qty": 0.00214363,
      "priceUsd": 77746.64,
      "eur": 145.39,
      "pnl": -4.61,
      "note": "Risk reduction"
    },
    {
      "date": "2026-09-18 22:33",
      "symbol": "BTC",
      "side": "BUY",
      "qty": 0.00212638,
      "priceUsd": 80997,
      "eur": 150,
      "pnl": null,
      "note": "Recovered historical trade; forensic reconciliation 2026-09-29"
    },
    {
      "date": "2026-09-19 01:30",
      "symbol": "ETH",
      "side": "BUY",
      "qty": 0.0442975,
      "priceUsd": 2592.02,
      "eur": 100,
      "pnl": null,
      "note": "Add"
    },
    {
      "date": "2026-09-21 05:57",
      "symbol": "ETH",
      "side": "BUY",
      "qty": 0.0433779,
      "priceUsd": 2641.9,
      "eur": 100,
      "pnl": null,
      "note": "Add"
    },
    {
      "date": "2026-09-21",
      "symbol": "BTC",
      "side": "BUY",
      "qty": 0.00134885,
      "priceUsd": 85117,
      "eur": 100,
      "pnl": null,
      "note": "Add"
    },
    {
      "date": "2026-09-23 22:51",
      "symbol": "BTC",
      "side": "SELL",
      "qty": 0.00134885,
      "priceUsd": 84153.19,
      "eur": 99.79,
      "pnl": -0.21,
      "note": "Exit lot"
    },
    {
      "date": "2026-09-24 11:13",
      "symbol": "BTC",
      "side": "SELL",
      "qty": 0.00135852,
      "priceUsd": 83900,
      "eur": 100,
      "pnl": 5.92,
      "note": "Reduce; cost basis €94.08"
    },
    {
      "date": "2026-09-25 21:17",
      "symbol": "QCOM",
      "side": "BUY",
      "qty": 0.557025,
      "priceUsd": 204.12,
      "eur": 100,
      "pnl": null,
      "note": "New position"
    },
    {
      "date": "2026-09-28 11:42",
      "symbol": "ETH",
      "side": "SELL",
      "qty": 0.1335214,
      "priceUsd": 2518.27,
      "eur": 295.39,
      "pnl": -4.61,
      "note": "Full exit; cost basis €300"
    },
    {
      "date": "2026-09-28 15:16",
      "symbol": "QCOM",
      "side": "SELL",
      "qty": 0.557025,
      "priceUsd": 196.15,
      "eur": 96.04,
      "pnl": -3.96,
      "note": "Full exit; EUR/USD 1.1377"
    },
    {
      "date": "2026-09-28 19:24",
      "symbol": "XLE",
      "side": "BUY",
      "qty": 2.725812,
      "priceUsd": 62.53,
      "eur": 150,
      "pnl": null,
      "note": "New position"
    },
    {
      "date": "2026-09-29 15:32",
      "symbol": "NVDA",
      "side": "BUY",
      "qty": 0.741391,
      "priceUsd": 229.98,
      "eur": 150,
      "pnl": null,
      "note": "New position"
    },
    {
      "date": "2026-09-29 18:21",
      "symbol": "XLE",
      "side": "SELL",
      "qty": 2.725812,
      "priceUsd": 61.55,
      "eur": 148.05,
      "pnl": -1.95,
      "note": "Full exit"
    },
    {
      "date": "2026-09-30 17:03",
      "symbol": "BTC",
      "side": "SELL",
      "qty": 0.00225168,
      "priceUsd": 84370.99,
      "eur": 167.2,
      "pnl": 11.28,
      "note": "Full exit after the prospective $84,486 review objective was observed and the timestamped Coinbase-linked price failed to hold above it; EUR/USD 1.13625.",
      "exitReason": "Target reached earlier; no durable breakout or higher target was verified, and the tactical horizon was already extended. Full exit after price moved back below the review level.",
      "thesisOutcome": "CONFIRMED",
      "thesisOutcomeScope": "Prospective migration-era range-retest objective only; historical entry thesis remains unknown.",
      "costBasisMethod": "FULL_EXIT",
      "costBasisEur": 155.92,
      "execution": {
        "priceUsd": 84370.99,
        "priceSide": "BID",
        "priceProvider": "ChartExchange Coinbase BTCUSD page",
        "priceSourceUrl": "https://chartexchange.com/symbol/crypto-btcusd/?exchange=coinbase",
        "quotedAt": "2026-09-30T17:03:00+03:00",
        "sourceTimeRaw": "Sep 30, 2026 10:03:00 AM EDT",
        "quoteType": "REAL_TIME_PAGE_BID",
        "fxPair": "EUR/USD",
        "fxUsdPerEur": 1.13625,
        "fxDirection": "USD per EUR",
        "fxFormula": "EUR = quantity * USD price / EURUSD",
        "fxProvider": "Investing.com real-time currencies page",
        "fxSourceUrl": "https://www.investing.com/currencies/eur-usd",
        "fxBid": 1.1362,
        "fxAsk": 1.1363,
        "fxSourceTimeRaw": "09:29:38",
        "fxSourceTimezone": null,
        "retrievedAt": "2026-09-30T14:12:43Z",
        "paperTrade": true
      },
      "closedPositionStrategy": {
        "symbol": "BTC",
        "openedAt": "2026-09-10T13:28:00+03:00",
        "entryReason": "Historical rationale not reliably recorded",
        "entryStrategy": null,
        "entryStrategyStatus": "Historical entry strategy not reliably recorded",
        "thesisEstablishedAt": "2026-09-29T23:18:28+03:00",
        "horizonBasis": "New prospective review window, not the historical entry horizon. The continuously open position dates from 2026-09-10; do not reset openedAt or ignore its already extended age.",
        "thesis": "The prospective range-retest objective at $84,486 has now been observed after softer US core PCE data. That fulfills the limited price objective, not the unknown historical entry thesis. A durable breakout with better risk/reward is not yet verified; no higher target is adopted. Current exposure remains unchanged because a sufficiently fresh timestamped execution price and FX quote could not be fixed, not because a new bullish ownership case has been established.",
        "invalidation": "Two completed 60-minute candles below $82,796 without prompt recovery, a verified material adverse crypto catalyst, or failure to improve within the prospective 24-48h window prompts a fresh exit/reduction decision. A single intraday touch is not an automatic sale.",
        "target": "Review a trim near the observed $84,486 range high; retain beyond it only if a fresh confirmed breakout materially improves risk/reward. This is an analyst-defined objective, not a forecast or an order.",
        "timeHorizon": "24-48h",
        "riskLevel": "VERY HIGH",
        "historicalRationaleStatus": "UNKNOWN",
        "openedAtSource": "First BUY in the current continuously nonzero position: trades date 2026-09-10 13:28, using ledger Europe/Tallinn convention; source precision is one minute.",
        "costBasisMethod": "WEIGHTED_AVERAGE",
        "costBasisNote": "BTC open-position basis reconciled 2026-09-29. The 2026-09-24 SELL cost basis €94.08 equals the weighted-average EUR cost allocation from the two then-open BTC BUY lots (€250 total over 0.00361020 BTC). Remaining cost €155.92 and qty 0.00225168 reconcile. avgUsd 79940 is the quantity-weighted average USD execution price of those two BUY lots (≈79940.22), rounded for display.",
        "thesisHistory": [
          {
            "recordedAt": "2026-09-29T23:18:28+03:00",
            "kind": "MIGRATION_BASELINE",
            "reason": "First recorded prospective thesis; not a reconstruction of historical entry intent.",
            "thesis": "New prospective thesis: BTC is near $83.5k and above the observed $82,796 range low despite macro pressure. A retest of $84,486 can support a short tactical hold, but upside to that first objective is modest; no fresh add is justified by the range alone.",
            "invalidation": "Two completed 60-minute candles below $82,796 without prompt recovery, a verified material adverse crypto catalyst, or failure to improve within the prospective 24-48h window prompts a fresh exit/reduction decision. A single intraday touch is not an automatic sale.",
            "target": "Review a trim near the observed $84,486 range high; retain beyond it only if a fresh confirmed breakout materially improves risk/reward. This is an analyst-defined objective, not a forecast or an order.",
            "timeHorizon": "24-48h",
            "riskLevel": "VERY HIGH",
            "evidenceIds": [
              "market-quotes",
              "btc-crosscheck",
              "macro"
            ]
          },
          {
            "recordedAt": "2026-09-30T16:12:08+03:00",
            "kind": "MATERIAL_REVIEW",
            "oldConditions": {
              "thesis": "New prospective thesis: BTC is near $83.5k and above the observed $82,796 range low despite macro pressure. A retest of $84,486 can support a short tactical hold, but upside to that first objective is modest; no fresh add is justified by the range alone.",
              "invalidation": "Two completed 60-minute candles below $82,796 without prompt recovery, a verified material adverse crypto catalyst, or failure to improve within the prospective 24-48h window prompts a fresh exit/reduction decision. A single intraday touch is not an automatic sale.",
              "target": "Review a trim near the observed $84,486 range high; retain beyond it only if a fresh confirmed breakout materially improves risk/reward. This is an analyst-defined objective, not a forecast or an order.",
              "timeHorizon": "24-48h"
            },
            "newConditions": {
              "thesis": "The prospective range-retest objective at $84,486 has now been observed after softer US core PCE data. That fulfills the limited price objective, not the unknown historical entry thesis. A durable breakout with better risk/reward is not yet verified; no higher target is adopted. Current exposure remains unchanged because a sufficiently fresh timestamped execution price and FX quote could not be fixed, not because a new bullish ownership case has been established.",
              "invalidation": "Two completed 60-minute candles below $82,796 without prompt recovery, a verified material adverse crypto catalyst, or failure to improve within the prospective 24-48h window prompts a fresh exit/reduction decision. A single intraday touch is not an automatic sale.",
              "target": "Review a trim near the observed $84,486 range high; retain beyond it only if a fresh confirmed breakout materially improves risk/reward. This is an analyst-defined objective, not a forecast or an order.",
              "timeHorizon": "24-48h"
            },
            "reason": "Existing price objective observed following new macro data. Do not silently extend the holding horizon or raise the target; execution readiness is now a material constraint.",
            "evidence": [
              {
                "sourceUrl": "https://www.coindesk.com/price/bitcoin",
                "priceUsd": 84883.7,
                "quotedAt": null,
                "retrievedAt": "2026-09-30T13:09:37.493Z",
                "kind": "INDICATIVE_TARGET_OBSERVATION",
                "execution": false
              },
              {
                "sourceUrl": "https://www.coindesk.com/markets/2026/09/30/live-updates-bitcoin-below-usd84-000-ahead-of-pce-inflation-data-micron-earnings",
                "publishedAt": "2026-09-30T12:37:00Z",
                "retrievedAt": "2026-09-30T13:07:28.941Z",
                "fact": "BTC around $84,750 after softer core PCE; reported US 10-year yield 5.218%. Context, not an execution quote."
              }
            ]
          }
        ],
        "finalReview": {
          "reviewedAt": "2026-09-30T17:12:43+03:00",
          "decision": "SELL",
          "reason": "The prospective $84,486 review objective was observed in the prior review, but the timestamped Coinbase-linked quote subsequently slipped below it. No durable breakout, higher target or horizon extension was established; close the full tactical exposure.",
          "originalEntryAttribution": "UNKNOWN; the exit confirms only the prospective migration-era range-retest objective, not the historical entry thesis."
        }
      }
    },
    {
      "date": "2026-09-30 17:51",
      "symbol": "NVDA",
      "side": "SELL",
      "qty": 0.741391,
      "priceUsd": 230.55,
      "eur": 150.49,
      "pnl": 0.49,
      "note": "Full exit after the $230.94-$232.75 reassessment zone was reached intraday and the timestamped quote fell back below its lower bound; EUR/USD 1.1358.",
      "exitReason": "Prospective rebound target reached, followed by a failed hold below the lower target boundary. Full exit avoids an uneconomic residual micro-position and preserves cash for a newly verified setup.",
      "thesisOutcome": "CONFIRMED",
      "thesisOutcomeScope": "Prospective migration-era rebound objective only; historical entry rationale remains unknown.",
      "costBasisMethod": "FULL_EXIT",
      "costBasisEur": 150,
      "execution": {
        "priceUsd": 230.55,
        "priceSide": "LAST_TRADE",
        "priceProvider": "Google Finance NVDA page",
        "priceSourceUrl": "https://www.google.com/finance/quote/NVDA:NASDAQ",
        "quotedAt": "2026-09-30T17:51:23+03:00",
        "sourceTimeRaw": "Sep 30, 10:51:23 AM GMT-4",
        "session": "US regular session",
        "quoteType": "REAL_TIME_PAGE_LAST_TRADE",
        "fxPair": "EUR/USD",
        "fxUsdPerEur": 1.1358,
        "fxDirection": "USD per EUR",
        "fxFormula": "EUR = quantity * USD price / EURUSD",
        "fxProvider": "Investing.com real-time currencies page",
        "fxSourceUrl": "https://www.investing.com/currencies/eur-usd",
        "fxBid": 1.1357,
        "fxAsk": 1.1359,
        "fxSourceTimeRaw": "11:04:37",
        "fxSourceTimezone": null,
        "retrievedAt": "2026-09-30T15:10:18Z",
        "paperTrade": true
      },
      "closedPositionStrategy": {
        "symbol": "NVDA",
        "openedAt": "2026-09-29T15:32:00+03:00",
        "entryReason": "Historical rationale not reliably recorded",
        "entryStrategy": null,
        "entryStrategyStatus": "Historical entry strategy not reliably recorded",
        "thesisEstablishedAt": "2026-09-29T23:18:28+03:00",
        "horizonBasis": "Prospective assessment introduced at migration; original intended holding period was not recorded. Preserve the actual 2026-09-29 opening timestamp.",
        "thesis": "New prospective thesis: the verified buyback expansion may support an event-driven rebound, but NVDA near $227.29 is close to its session low and lagging SPY. Continued ownership needs a recovery toward $230.94 and improving relative strength; the buyback is not a price floor.",
        "invalidation": "Two completed regular-session 60-minute candles below the observed $227.065 session low, verified material deterioration in the catalyst/AI outlook, or no recovery toward $230.94 within 1-2 trading days prompts exit/reduction review. Brief touches and after-hours noise alone are not mandatory executions.",
        "target": "First reassess or trim into $230.94-$232.75, the observed session open-to-high zone; exit/reduce on a failed rebound, sustained relative weakness or a demonstrably better opportunity.",
        "timeHorizon": "1-2 trading days",
        "riskLevel": "HIGH",
        "historicalRationaleStatus": "UNKNOWN",
        "openedAtSource": "BUY trades date 2026-09-29 15:32, using ledger Europe/Tallinn convention; source precision is one minute.",
        "thesisHistory": [
          {
            "recordedAt": "2026-09-29T23:18:28+03:00",
            "kind": "MIGRATION_BASELINE",
            "reason": "First recorded prospective thesis; not a reconstruction of historical entry intent.",
            "thesis": "New prospective thesis: the verified buyback expansion may support an event-driven rebound, but NVDA near $227.29 is close to its session low and lagging SPY. Continued ownership needs a recovery toward $230.94 and improving relative strength; the buyback is not a price floor.",
            "invalidation": "Two completed regular-session 60-minute candles below the observed $227.065 session low, verified material deterioration in the catalyst/AI outlook, or no recovery toward $230.94 within 1-2 trading days prompts exit/reduction review. Brief touches and after-hours noise alone are not mandatory executions.",
            "target": "First reassess or trim into $230.94-$232.75, the observed session open-to-high zone; exit/reduce on a failed rebound, sustained relative weakness or a demonstrably better opportunity.",
            "timeHorizon": "1-2 trading days",
            "riskLevel": "HIGH",
            "evidenceIds": [
              "market-quotes",
              "nvda-buyback",
              "macro"
            ]
          }
        ],
        "finalReview": {
          "reviewedAt": "2026-09-30T18:10:18+03:00",
          "decision": "SELL",
          "reason": "The recorded $230.94-$232.75 reassessment zone was reached intraday at $232.37. The timestamped $230.55 quote then fell below the lower boundary, satisfying the recorded failed-rebound exit condition; close the full small position rather than retain a micro-lot.",
          "originalEntryAttribution": "UNKNOWN; the result confirms only that the prospective migration-era rebound objective was reached, not the unrecorded historical entry thesis."
        }
      }
    },
    {
      "date": "2026-10-02 13:33",
      "symbol": "ON",
      "side": "BUY",
      "qty": 2.6375123,
      "priceUsd": 85.34500122070312,
      "eur": 200,
      "pnl": null,
      "note": "ON is the strongest supplied confirmed breakout candidate: fresh price $85.35 is above the $81.05 trigger, with positive 5-day (+9.5%) and 20-day (+10.2%) momentum, reported volume at 1.12x, comparatively moderate 10-day realized volatility (35%), and low selected correlation (0.27). Use reduced sizing because the broader regime remains mixed with fragile participation and tight-liquidity risks.",
      "execution": {
        "priceProvider": "Yahoo Finance chart",
        "priceSourceUrl": "https://query1.finance.yahoo.com/v8/finance/chart/ON?interval=5m&range=1d",
        "quotedAt": "2026-10-02T13:32:52.000Z",
        "retrievedAt": "2026-10-02T13:32:53.962Z",
        "fxUsdPerEur": 1.1254924535751343,
        "fxProvider": "Yahoo Finance chart",
        "paperTrade": true
      }
    },
    {
      "date": "2026-10-05 18:46",
      "symbol": "MSTR",
      "side": "BUY",
      "qty": 1.02771459,
      "priceUsd": 163.6999969482422,
      "eur": 150,
      "pnl": null,
      "note": "MSTR has a fresh confirmed 5-minute breakout above the $163.17 entry level: completed close was $163.53 with participation at 1.084x baseline, and the latest quote remains above trigger at $163.70. The daily selection data retain strong 20-day momentum (+29.9%) and above-baseline volume (1.55x). Size is reduced due to high realized volatility (57%), relatively high selected correlation (0.66), marginal participation confirmation, and the fragile broader-risk backdrop.",
      "execution": {
        "priceProvider": "Yahoo Finance chart",
        "priceSourceUrl": "https://query1.finance.yahoo.com/v8/finance/chart/MSTR?interval=5m&range=1d",
        "quotedAt": "2026-10-05T18:46:42.000Z",
        "retrievedAt": "2026-10-05T18:46:44.050Z",
        "fxUsdPerEur": 1.1215791702270508,
        "fxProvider": "Yahoo Finance chart",
        "paperTrade": true
      }
    },
    {
      "date": "2026-10-06 18:29",
      "symbol": "HPE",
      "side": "BUY",
      "qty": 1.59808207,
      "priceUsd": 70.51499938964844,
      "eur": 100,
      "pnl": null,
      "costBasisEur": null,
      "closedPositionStrategy": null,
      "note": "Initiate a reduced paper position in HPE. The required entry condition is explicitly met: a completed 5-minute close of $70.73 exceeded the $69.39 trigger with 1.631x participation versus the 12-bar baseline, and the latest quote of $70.60 remains above the trigger. HPE remains a constructive ranked momentum candidate (rank 4, 5-day momentum +9.1%, 20-day momentum +25.6%) with moderate selected-set correlation (0.343). The €100 size is deliberately reduced for tight liquidity, weak daily volume participation (0.745x), rank deterioration from 1 to 4, high realized volatility/ATR, price extension above the trigger, and unverified overlap with existing ON and MSTR exposure. The risk report approves the allocation with no veto. The MSTR target-level event does not justify action because $163.17 is its documented entry trigger, not an evidence-backed profit target.",
      "execution": {
        "priceProvider": "Yahoo Finance chart",
        "priceSourceUrl": "https://query1.finance.yahoo.com/v8/finance/chart/HPE?interval=5m&range=1d",
        "quotedAt": "2026-10-06T15:29:41.000Z",
        "retrievedAt": "2026-10-06T15:29:44.047Z",
        "fxUsdPerEur": 1.126887559890747,
        "fxProvider": "Yahoo Finance chart",
        "paperTrade": true
      },
      "agentDecisionKey": "2dd87a2fd4de4df7"
    },
    {
      "date": "2026-10-06 19:57",
      "symbol": "SHOP",
      "side": "BUY",
      "qty": 0.68122656,
      "priceUsd": 165.2899932861328,
      "eur": 100,
      "pnl": null,
      "costBasisEur": null,
      "closedPositionStrategy": null,
      "note": "Initiate a reduced SHOP paper position. The documented entry rule is satisfied: the completed 5-minute close of $165.455 was above the $162.81 trigger with 1.132x participation, and the latest quote ($165.405) remains above the trigger. SHOP is rank 3 with positive 5-day and 20-day momentum (+11.2% and +9.8%), above-baseline daily volume (1.296x), high dollar liquidity, and low selected-set correlation (0.114). The €100 allocation is within cash, buy, and position limits and retains substantial cash. Existing MSTR and HPE target alerts are not profit-taking signals because their recorded targets duplicate entry triggers; neither has documented invalidation. ON has not met its new breakout rule. Reduced sizing is warranted because SHOP volatility is elevated, the portfolio already holds three short-horizon momentum positions, and the regime is neutral/range with tight liquidity.",
      "execution": {
        "priceProvider": "Yahoo Finance chart",
        "priceSourceUrl": "https://query1.finance.yahoo.com/v8/finance/chart/SHOP?interval=5m&range=1d",
        "quotedAt": "2026-10-06T16:56:56.000Z",
        "retrievedAt": "2026-10-06T16:57:00.897Z",
        "fxUsdPerEur": 1.1259993314743042,
        "fxProvider": "Yahoo Finance chart",
        "paperTrade": true
      },
      "agentDecisionKey": "e33436172c17b3de"
    }
  ],
  "snapshots": [
    {
      "date": "2026-09-10",
      "value": 1000
    },
    {
      "date": "2026-09-18",
      "value": 994.65
    },
    {
      "date": "2026-09-21",
      "value": 1001.84
    },
    {
      "date": "2026-09-23",
      "value": 998.72
    },
    {
      "date": "2026-09-24",
      "value": 1000.91
    },
    {
      "date": "2026-09-25",
      "value": 999.42
    },
    {
      "date": "2026-09-28 11:43",
      "value": 996.13
    },
    {
      "date": "2026-09-28 12:25",
      "value": 993.79
    },
    {
      "date": "2026-09-28 15:16",
      "value": 992.89
    },
    {
      "date": "2026-09-28 19:24",
      "value": 994.44
    },
    {
      "date": "2026-09-29 15:32",
      "value": 994.45
    },
    {
      "date": "2026-09-29 18:21",
      "value": 992.49
    },
    {
      "date": "2026-09-30 17:03",
      "value": 999.19
    },
    {
      "date": "2026-09-30 17:51",
      "value": 998.57
    },
    {
      "date": "2026-10-06 17:56",
      "value": 1001.3
    },
    {
      "date": "2026-10-07 23:52",
      "value": 987.18
    },
    {
      "date": "2026-10-08 23:55",
      "value": 975.28
    },
    {
      "date": "2026-10-09 23:56",
      "value": 981.23
    },
    {
      "date": "2026-10-10 21:00",
      "value": 981.23
    },
    {
      "date": "2026-10-11 20:44",
      "value": 981.23
    },
    {
      "date": "2026-10-12 22:07",
      "value": 978.86
    },
    {
      "date": "2026-10-13 22:10",
      "value": 974.38
    },
    {
      "date": "2026-10-14 23:20",
      "value": 948.65
    },
    {
      "date": "2026-10-15 22:50",
      "value": 952.25
    },
    {
      "date": "2026-10-16 23:54",
      "value": 923.65
    },
    {
      "date": "2026-10-17 23:28",
      "value": 923.7
    },
    {
      "date": "2026-10-18 23:51",
      "value": 924.4
    },
    {
      "date": "2026-10-19 20:49",
      "value": 928.77
    },
    {
      "date": "2026-10-20 21:55",
      "value": 941.41
    },
    {
      "date": "2026-10-21 22:33",
      "value": 958.08
    },
    {
      "date": "2026-10-22 22:39",
      "value": 935.56
    },
    {
      "date": "2026-10-23 22:31",
      "value": 935.98
    },
    {
      "date": "2026-10-24 23:55",
      "value": 935.98
    },
    {
      "date": "2026-10-25 22:02",
      "value": 935.98
    },
    {
      "date": "2026-10-26 21:44",
      "value": 938.25
    },
    {
      "date": "2026-10-27 21:04",
      "value": 954.36
    },
    {
      "date": "2026-10-28 22:51",
      "value": 950.25
    },
    {
      "date": "2026-10-29 20:24",
      "value": 942.12
    },
    {
      "date": "2026-10-30 21:29",
      "value": 912.92
    },
    {
      "date": "2026-10-31 23:45",
      "value": 912.92
    },
    {
      "date": "2026-11-01 23:54",
      "value": 912.92
    },
    {
      "date": "2026-11-02 21:22",
      "value": 901.94
    },
    {
      "date": "2026-11-03 23:18",
      "value": 906.75
    },
    {
      "date": "2026-11-04 23:50",
      "value": 910.09
    },
    {
      "date": "2026-11-05 20:17",
      "value": 867.9
    },
    {
      "date": "2026-11-06 21:04",
      "value": 872.45
    },
    {
      "date": "2026-11-07 22:09",
      "value": 872.57
    },
    {
      "date": "2026-11-08 22:52",
      "value": 872.57
    },
    {
      "date": "2026-11-09 20:42",
      "value": 888.08
    },
    {
      "date": "2026-11-10 23:37",
      "value": 882.24
    },
    {
      "date": "2026-11-11 18:17",
      "value": 905.38
    },
    {
      "date": "2026-11-12 22:24",
      "value": 893.71
    },
    {
      "date": "2026-11-13 22:53",
      "value": 883.39
    },
    {
      "date": "2026-11-14 20:41",
      "value": 883.39
    },
    {
      "date": "2026-11-15 23:41",
      "value": 883.39
    },
    {
      "date": "2026-11-16 21:00",
      "value": 866.33
    },
    {
      "date": "2026-11-17 21:13",
      "value": 856.12
    },
    {
      "date": "2026-11-18 19:15",
      "value": 850.02
    },
    {
      "date": "2026-11-19 09:01",
      "value": 847.27
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 117 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: TGT, AVGO, UNG, ABNB, WMT.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is TGT, AVGO, UNG, ABNB, WMT. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
    "evaluationUniverse": [
      "AAPL",
      "MSFT",
      "NVDA",
      "AMZN",
      "META",
      "GOOGL",
      "TSLA",
      "AVGO",
      "AMD",
      "QCOM",
      "MU",
      "ON",
      "HPE",
      "PLTR",
      "COIN",
      "MSTR",
      "ORCL",
      "CRM",
      "ADBE",
      "INTC",
      "AMAT",
      "LRCX",
      "KLAC",
      "MRVL",
      "ARM",
      "SMCI",
      "DELL",
      "IBM",
      "CSCO",
      "NOW",
      "PANW",
      "CRWD",
      "SNOW",
      "SHOP",
      "UBER",
      "ABNB",
      "NFLX",
      "DIS",
      "NKE",
      "SBUX",
      "MCD",
      "WMT",
      "COST",
      "TGT",
      "HD",
      "LOW",
      "JPM",
      "BAC",
      "WFC",
      "C",
      "GS",
      "MS",
      "SCHW",
      "V",
      "MA",
      "AXP",
      "PYPL",
      "HOOD",
      "XOM",
      "CVX",
      "COP",
      "SLB",
      "OXY",
      "LLY",
      "UNH",
      "JNJ",
      "PFE",
      "MRK",
      "ABBV",
      "TMO",
      "ISRG",
      "CAT",
      "DE",
      "GE",
      "BA",
      "LMT",
      "RTX",
      "NOC",
      "GM",
      "F",
      "RIVN",
      "LCID",
      "NEE",
      "DUK",
      "SO",
      "SPY",
      "QQQ",
      "IWM",
      "DIA",
      "RSP",
      "XLK",
      "XLF",
      "XLE",
      "XLV",
      "XLI",
      "XLY",
      "XLP",
      "XLU",
      "XLB",
      "XLRE",
      "SMH",
      "SOXX",
      "KRE",
      "ARKK",
      "GLD",
      "SLV",
      "TLT",
      "HYG",
      "LQD",
      "USO",
      "UNG",
      "EEM",
      "FXI",
      "EWJ",
      "EWG",
      "EWQ",
      "EWU",
      "BTC",
      "ETH"
    ],
    "watchlist": [
      {
        "symbol": "TGT",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 172.34,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 167.06,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $172.34 with sustained participation.",
        "invalidation": "Loss of $167.06 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.43: 5d momentum 4.3%, 20d 10.2%, annualized 10d realized vol 45%, volume 2.05x, max selected correlation 0.00.",
        "quantScore": 1.433,
        "metrics": {
          "momentum5d": 4.302,
          "momentum20d": 10.195,
          "realizedVol10dAnnualized": 44.82,
          "volumeRatio": 2.051,
          "atrPct": 3.662,
          "gapPct": 0.915,
          "relativeStrength5dPct": 8.092,
          "relativeStrength20dPct": 15.14,
          "avgDollarVolume10d": 734382948,
          "maxSelectedCorrelation": 0
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "WATCH_ONLY",
        "setupId": "TGT-20261118-daily-quant"
      },
      {
        "symbol": "AVGO",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 365.24,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 343.98,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $365.24 with sustained participation.",
        "invalidation": "Loss of $343.98 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.10: 5d momentum 2.7%, 20d 6.1%, annualized 10d realized vol 86%, volume 0.46x, max selected correlation 0.53.",
        "quantScore": 1.099,
        "metrics": {
          "momentum5d": 2.72,
          "momentum20d": 6.053,
          "realizedVol10dAnnualized": 86.48,
          "volumeRatio": 0.458,
          "atrPct": 5.904,
          "gapPct": 2.08,
          "relativeStrength5dPct": 6.509,
          "relativeStrength20dPct": 10.999,
          "avgDollarVolume10d": 11645487025,
          "maxSelectedCorrelation": 0.526
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "WATCH_ONLY",
        "setupId": "AVGO-20261118-daily-quant"
      },
      {
        "symbol": "UNG",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 10.76,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 10.36,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $10.76 with sustained participation.",
        "invalidation": "Loss of $10.36 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.87: 5d momentum 3.3%, 20d 0.6%, annualized 10d realized vol 54%, volume 0.79x, max selected correlation 0.68.",
        "quantScore": 0.873,
        "metrics": {
          "momentum5d": 3.327,
          "momentum20d": 0.571,
          "realizedVol10dAnnualized": 53.78,
          "volumeRatio": 0.791,
          "atrPct": 3.869,
          "gapPct": 1.892,
          "relativeStrength5dPct": 7.116,
          "relativeStrength20dPct": 5.517,
          "avgDollarVolume10d": 212936540,
          "maxSelectedCorrelation": 0.683
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "WATCH_ONLY",
        "setupId": "UNG-20261118-daily-quant"
      },
      {
        "symbol": "ABNB",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 186.66,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 178.18,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $186.66 with sustained participation.",
        "invalidation": "Loss of $178.18 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.61: 5d momentum 0.7%, 20d 3.1%, annualized 10d realized vol 67%, volume 0.26x, max selected correlation 0.20.",
        "quantScore": 0.608,
        "metrics": {
          "momentum5d": 0.712,
          "momentum20d": 3.097,
          "realizedVol10dAnnualized": 67.01,
          "volumeRatio": 0.258,
          "atrPct": 4.485,
          "gapPct": -0.956,
          "relativeStrength5dPct": 4.502,
          "relativeStrength20dPct": 8.042,
          "avgDollarVolume10d": 1098202118,
          "maxSelectedCorrelation": 0.202
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "WATCH_ONLY",
        "setupId": "ABNB-20261118-daily-quant"
      },
      {
        "symbol": "WMT",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 128.29,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 126.25,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $128.29 with sustained participation.",
        "invalidation": "Loss of $126.25 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.57: 5d momentum 1.3%, 20d 8.0%, annualized 10d realized vol 13%, volume 0.87x, max selected correlation 0.26.",
        "quantScore": 0.572,
        "metrics": {
          "momentum5d": 1.273,
          "momentum20d": 7.993,
          "realizedVol10dAnnualized": 13.34,
          "volumeRatio": 0.866,
          "atrPct": 2.418,
          "gapPct": -0.851,
          "relativeStrength5dPct": 5.063,
          "relativeStrength20dPct": 12.939,
          "avgDollarVolume10d": 2757316695,
          "maxSelectedCorrelation": 0.26
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "WATCH_ONLY",
        "setupId": "WMT-20261118-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "TGT",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 172.34,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 167.06,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $172.34 with sustained participation.",
        "invalidation": "Loss of $167.06 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.43: 5d momentum 4.3%, 20d 10.2%, annualized 10d realized vol 45%, volume 2.05x, max selected correlation 0.00.",
        "quantScore": 1.433,
        "metrics": {
          "momentum5d": 4.302,
          "momentum20d": 10.195,
          "realizedVol10dAnnualized": 44.82,
          "volumeRatio": 2.051,
          "atrPct": 3.662,
          "gapPct": 0.915,
          "relativeStrength5dPct": 8.092,
          "relativeStrength20dPct": 15.14,
          "avgDollarVolume10d": 734382948,
          "maxSelectedCorrelation": 0
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "UNTRIGGERED",
        "setupId": "TGT-20261118-daily-quant"
      },
      {
        "symbol": "AVGO",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 365.24,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 343.98,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $365.24 with sustained participation.",
        "invalidation": "Loss of $343.98 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.10: 5d momentum 2.7%, 20d 6.1%, annualized 10d realized vol 86%, volume 0.46x, max selected correlation 0.53.",
        "quantScore": 1.099,
        "metrics": {
          "momentum5d": 2.72,
          "momentum20d": 6.053,
          "realizedVol10dAnnualized": 86.48,
          "volumeRatio": 0.458,
          "atrPct": 5.904,
          "gapPct": 2.08,
          "relativeStrength5dPct": 6.509,
          "relativeStrength20dPct": 10.999,
          "avgDollarVolume10d": 11645487025,
          "maxSelectedCorrelation": 0.526
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "UNTRIGGERED",
        "setupId": "AVGO-20261118-daily-quant"
      },
      {
        "symbol": "UNG",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 10.76,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 10.36,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $10.76 with sustained participation.",
        "invalidation": "Loss of $10.36 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.87: 5d momentum 3.3%, 20d 0.6%, annualized 10d realized vol 54%, volume 0.79x, max selected correlation 0.68.",
        "quantScore": 0.873,
        "metrics": {
          "momentum5d": 3.327,
          "momentum20d": 0.571,
          "realizedVol10dAnnualized": 53.78,
          "volumeRatio": 0.791,
          "atrPct": 3.869,
          "gapPct": 1.892,
          "relativeStrength5dPct": 7.116,
          "relativeStrength20dPct": 5.517,
          "avgDollarVolume10d": 212936540,
          "maxSelectedCorrelation": 0.683
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "UNTRIGGERED",
        "setupId": "UNG-20261118-daily-quant"
      },
      {
        "symbol": "ABNB",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 186.66,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 178.18,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $186.66 with sustained participation.",
        "invalidation": "Loss of $178.18 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.61: 5d momentum 0.7%, 20d 3.1%, annualized 10d realized vol 67%, volume 0.26x, max selected correlation 0.20.",
        "quantScore": 0.608,
        "metrics": {
          "momentum5d": 0.712,
          "momentum20d": 3.097,
          "realizedVol10dAnnualized": 67.01,
          "volumeRatio": 0.258,
          "atrPct": 4.485,
          "gapPct": -0.956,
          "relativeStrength5dPct": 4.502,
          "relativeStrength20dPct": 8.042,
          "avgDollarVolume10d": 1098202118,
          "maxSelectedCorrelation": 0.202
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "UNTRIGGERED",
        "setupId": "ABNB-20261118-daily-quant"
      },
      {
        "symbol": "WMT",
        "setup": "Daily quant momentum / volatility breakout",
        "entryRule": {
          "operator": "ABOVE",
          "level": 128.29,
          "timeframeMinutes": 5,
          "requiredCloses": 1,
          "requireParticipation": true
        },
        "invalidationRule": {
          "operator": "BELOW",
          "level": 126.25,
          "timeframeMinutes": 5,
          "requiredCloses": 1
        },
        "expiresAt": "2026-11-21T19:15:26.272Z",
        "trigger": "Break above $128.29 with sustained participation.",
        "invalidation": "Loss of $126.25 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.57: 5d momentum 1.3%, 20d 8.0%, annualized 10d realized vol 13%, volume 0.87x, max selected correlation 0.26.",
        "quantScore": 0.572,
        "metrics": {
          "momentum5d": 1.273,
          "momentum20d": 7.993,
          "realizedVol10dAnnualized": 13.34,
          "volumeRatio": 0.866,
          "atrPct": 2.418,
          "gapPct": -0.851,
          "relativeStrength5dPct": 5.063,
          "relativeStrength20dPct": 12.939,
          "avgDollarVolume10d": 2757316695,
          "maxSelectedCorrelation": 0.26
        },
        "createdAt": "2026-11-18T19:15:26.272Z",
        "lastReviewedAt": "2026-11-18T19:15:26.272Z",
        "status": "UNTRIGGERED",
        "setupId": "WMT-20261118-daily-quant"
      }
    ],
    "candidateDecisions": [
      {
        "symbol": "BTC",
        "decision": "HOLD",
        "reason": "Remain flat: BTC/USD was about $83,702 (-0.72%) inside a $83,200-$84,420 day range and below the prior exit. No confirmed breakout or superior re-entry structure was present."
      },
      {
        "symbol": "ETH",
        "decision": "HOLD",
        "reason": "Remain flat: ETH/USD was about $2,687.58 and the $2,720.05 day high remained below the $2,742.56 trigger, so two completed hourly closes above it were impossible. The $2,652.59 invalidation was not reached."
      },
      {
        "symbol": "NVDA",
        "decision": "HOLD",
        "reason": "Remain flat: NVDA was $231.76 (+1.48%) near its $231.88 intraday high after the prior position had already completed its rebound objective. Re-entering immediately without a new pullback or breakout plan would be churn against elevated yields and tight liquidity."
      },
      {
        "symbol": "QCOM",
        "decision": "HOLD",
        "reason": "Remain flat: QCOM was $184.23 (+0.10%) after fading from a $187.20 intraday high; no fresh near-term catalyst or confirmed breakout was verified."
      },
      {
        "symbol": "XLE",
        "decision": "HOLD",
        "reason": "Remain flat: XLE was $61.93 (+0.70%) near its $61.97 intraday high while WTI rose 1.29%. Relative strength improved, but chasing the opening move after a recent exit offered no defined invalidation or favorable fresh entry."
      },
      {
        "symbol": "HPE",
        "decision": "HOLD",
        "reason": "Remain flat: HPE opened at $65.53, traded as high as $66.11, then fell to $61.88 at 09:57:45 ET, below the $63.59-$63.44 support zone. The required two completed 15-minute closes above $65.76 were not verified. A strict 30-minute close below $63.44 could not be read directly from the available source, so the setup remains untriggered rather than being declared finally invalidated."
      }
    ],
    "keyRisks": [
      "The US 10-year yield above 5.3%, a firmer dollar and rising oil can tighten financial conditions and pressure long-duration growth assets.",
      "Regional banks materially underperformed SPY and credit ETFs were weak even while headline indexes held near flat, indicating fragile internal participation.",
      "HPE's event-driven setup failed to hold the reclaim/support area intraday; a verified 30-minute close below $63.44 would invalidate it under the recorded rule.",
      "BTC and ETH remained below their breakout levels and vulnerable to further range failure.",
      "Cboe VIX was delayed and several macro page clock times lacked explicit timezones; SHADOW output remains research only."
    ],
    "lastReviewedAt": "2026-11-18T19:15:26.272Z",
    "evidence": [
      {
        "id": "current-market-review",
        "type": "market-data",
        "provider": "Google Finance and ChatGPT web finance quote service",
        "retrievedAt": "2026-10-01T14:12:45.435Z",
        "fact": "Regular-session references: NVDA $231.76 (+1.48%), QCOM $184.23 (+0.10%), XLE $61.93 (+0.70%), HPE $61.88 (-3.15% at 09:57:45 ET after a $65.53 open and $66.11 high); SPY/QQQ/DIA about +0.15%/+0.16%/-0.06%. No execution.",
        "sourceUrls": [
          "https://www.google.com/finance/quote/NVDA:NASDAQ",
          "https://www.google.com/finance/quote/QCOM:NASDAQ",
          "https://www.google.com/finance/quote/XLE:NYSEARCA",
          "https://www.google.com/finance/quote/HPE:NYSE",
          "https://www.google.com/finance/quote/SPY:NYSEARCA",
          "https://www.google.com/finance/quote/QQQ:NASDAQ",
          "https://www.google.com/finance/quote/DIA:NYSEARCA"
        ]
      },
      {
        "id": "crypto-review",
        "type": "market-data",
        "provider": "ChatGPT web finance quote service",
        "retrievedAt": "2026-10-01T14:12:45.435Z",
        "fact": "BTC/USD about $83,702, range $83,200-$84,420; ETH/USD about $2,687.58, range $2,667.89-$2,720.05. No exchange timestamp was exposed, so these were assessment-only and not execution quotes.",
        "sourceUrls": [
          "https://www.google.com/finance/quote/BTC-USD",
          "https://www.google.com/finance/quote/ETH-USD"
        ]
      },
      {
        "id": "macro",
        "type": "market-data-and-news",
        "provider": "Reuters / Investing.com / Cboe",
        "publishedOn": "2026-10-01",
        "retrievedAt": "2026-10-01T14:12:45.435Z",
        "fact": "US 10-year yield 5.327% versus 5.311% prior close, DXY 101.80 (+0.34%), WTI $91.59 (+1.29%) and delayed VIX 16.71. Reuters reported yields briefly near 5.34% while Micron-supported technology strength offset some pressure.",
        "sourceUrls": [
          "https://www.reuters.com/world/china/global-markets-global-markets-2026-10-01/",
          "https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield",
          "https://www.investing.com/indices/usdollar",
          "https://www.investing.com/commodities/crude-oil",
          "https://www.cboe.com/tradable-products/vix"
        ]
      },
      {
        "id": "catalysts",
        "type": "news",
        "provider": "Reuters / Barron's",
        "publishedOn": "2026-10-01",
        "retrievedAt": "2026-10-01T14:12:45.435Z",
        "fact": "HPE's higher networking outlook and $1.2bn Vultr AI order remained positive, but the regular-session price failed to hold the reclaim/support area; the catalyst did not override the recorded confirmation rule.",
        "sourceUrls": [
          "https://www.reuters.com/business/hpe-boosts-networking-growth-outlook-gets-12-billion-ai-order-cloud-firm-vultr-2026-09-30/",
          "https://www.barrons.com/articles/hpe-stock-hewlett-packard-enterprise-ai-demand-b42d0a2b"
        ]
      }
    ],
    "dataQualityWarnings": [
      "US equity/ETF quotes were regular-session observations with exact UTC trade times, but the finance service exposed no 15- or 30-minute candle closes.",
      "HPE's 09:57:45 ET quote was below support; without a directly exposed completed 30-minute candle, the strict invalidation rule was not asserted.",
      "Investing.com FX, DXY, rates and oil pages displayed raw clock times without an explicit timezone.",
      "Cboe VIX data were delayed at least 20 minutes and its displayed timestamp timezone was unspecified.",
      "Crypto finance references did not expose an exchange timestamp and were not eligible as execution quotes."
    ],
    "accountingPolicy": {
      "positionCostBasisMethod": "WEIGHTED_AVERAGE",
      "btcReconciledAt": "2026-09-29T23:40:00+03:00",
      "btcReconciliation": "Before the 2026-09-24 reduction, the two open BTC lots were 0.00148382 BTC / €100 and 0.00212638 BTC / €150. Combined 0.00361020 BTC / €250. Weighted-average EUR cost allocated to the 0.00135852 BTC SELL = €94.0751, recorded €94.08. Remaining 0.00225168 BTC / €155.92. Quantity-weighted USD entry = $79,940.217, displayed avgUsd $79,940.",
      "status": "VALIDATED"
    },
    "migration": {
      "appliedAt": "2026-09-29T23:18:28+03:00",
      "sourceLedgerBlobSha": "67d271d3a9e460a9bb434f35aa6ed0d4d783738a",
      "kind": "STRATEGIC_METADATA_ONLY",
      "historicalEntryRationaleReconstructed": false,
      "accountingValuesChanged": false
    },
    "latestReview": {
      "reviewedAt": "2026-10-06T17:55:43.011Z",
      "accountingValidation": "PASS",
      "sourceLedgerBlobSha": "d6bd34fc5bc85289517fd3a0b088299d79c7dd74",
      "decision": "HOLD",
      "tradeProposal": null,
      "regimeEngine": {
        "engineVersion": "1.0.0",
        "mode": "SHADOW",
        "risk": "NEUTRAL",
        "trend": "RANGE",
        "volatility": "NORMAL",
        "liquidity": "TIGHT",
        "confidence": 65,
        "riskScore": 0.007,
        "positionSizeMultiplier": 0.68,
        "note": "Research output only; no trade or sizing effect."
      },
      "quotes": [
        {
          "symbol": "BTC",
          "priceUsd": 83702,
          "dayHighUsd": 84420,
          "dayLowUsd": 83200,
          "changePct": -0.7235,
          "provider": "ChatGPT web finance quote service",
          "sourceUrl": "https://www.google.com/finance/quote/BTC-USD",
          "quotedAt": null,
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "24/7 crypto; exchange timestamp not exposed",
          "execution": false
        },
        {
          "symbol": "ETH",
          "priceUsd": 2687.58,
          "dayHighUsd": 2720.05,
          "dayLowUsd": 2667.89,
          "changePct": -0.5907,
          "provider": "ChatGPT web finance quote service",
          "sourceUrl": "https://www.google.com/finance/quote/ETH-USD",
          "quotedAt": null,
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "24/7 crypto; exchange timestamp not exposed",
          "execution": false
        },
        {
          "symbol": "NVDA",
          "priceUsd": 231.76,
          "dayHighUsd": 231.88,
          "dayLowUsd": 228.45,
          "changePct": 1.47999,
          "provider": "ChatGPT web finance quote service",
          "sourceUrl": "https://www.google.com/finance/quote/NVDA:NASDAQ",
          "quotedAt": "2026-10-01T13:53:15Z",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "US regular session",
          "execution": false
        },
        {
          "symbol": "QCOM",
          "priceUsd": 184.23,
          "dayHighUsd": 187.2,
          "dayLowUsd": 183.3,
          "changePct": 0.10324,
          "provider": "ChatGPT web finance quote service",
          "sourceUrl": "https://www.google.com/finance/quote/QCOM:NASDAQ",
          "quotedAt": "2026-10-01T13:54:01Z",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "US regular session",
          "execution": false
        },
        {
          "symbol": "XLE",
          "priceUsd": 61.93,
          "dayHighUsd": 61.97,
          "dayLowUsd": 61.06,
          "changePct": 0.69919,
          "provider": "ChatGPT web finance quote service",
          "sourceUrl": "https://www.google.com/finance/quote/XLE:NYSEARCA",
          "quotedAt": "2026-10-01T13:54:00Z",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "US regular session",
          "execution": false
        },
        {
          "symbol": "HPE",
          "priceUsd": 61.88,
          "openUsd": 65.53,
          "dayHighUsd": 66.11,
          "dayLowUsd": 61.78,
          "changePct": -3.15,
          "provider": "Google Finance",
          "sourceUrl": "https://www.google.com/finance/quote/HPE:NYSE",
          "quotedAt": "2026-10-01T13:57:45Z",
          "sourceTimeRaw": "Oct 1, 9:57:45 AM GMT-4",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "session": "US regular session",
          "execution": false
        }
      ],
      "fx": {
        "pair": "EUR/USD",
        "usdPerEur": 1.1295,
        "direction": "USD per EUR",
        "provider": "Investing.com",
        "sourceUrl": "https://www.investing.com/currencies/eur-usd",
        "bid": 1.1294,
        "ask": 1.1296,
        "sourceTimeRaw": "09:54:20",
        "sourceTimezone": null,
        "quotedAt": null,
        "retrievedAt": "2026-10-01T14:12:45.435Z",
        "quoteType": "REAL_TIME_PAGE_REFERENCE",
        "executionUse": false
      },
      "evidence": [
        {
          "id": "current-market-review",
          "type": "market-data",
          "provider": "Google Finance and ChatGPT web finance quote service",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "fact": "Regular-session references: NVDA $231.76 (+1.48%), QCOM $184.23 (+0.10%), XLE $61.93 (+0.70%), HPE $61.88 (-3.15% at 09:57:45 ET after a $65.53 open and $66.11 high); SPY/QQQ/DIA about +0.15%/+0.16%/-0.06%. No execution.",
          "sourceUrls": [
            "https://www.google.com/finance/quote/NVDA:NASDAQ",
            "https://www.google.com/finance/quote/QCOM:NASDAQ",
            "https://www.google.com/finance/quote/XLE:NYSEARCA",
            "https://www.google.com/finance/quote/HPE:NYSE",
            "https://www.google.com/finance/quote/SPY:NYSEARCA",
            "https://www.google.com/finance/quote/QQQ:NASDAQ",
            "https://www.google.com/finance/quote/DIA:NYSEARCA"
          ]
        },
        {
          "id": "crypto-review",
          "type": "market-data",
          "provider": "ChatGPT web finance quote service",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "fact": "BTC/USD about $83,702, range $83,200-$84,420; ETH/USD about $2,687.58, range $2,667.89-$2,720.05. No exchange timestamp was exposed, so these were assessment-only and not execution quotes.",
          "sourceUrls": [
            "https://www.google.com/finance/quote/BTC-USD",
            "https://www.google.com/finance/quote/ETH-USD"
          ]
        },
        {
          "id": "macro",
          "type": "market-data-and-news",
          "provider": "Reuters / Investing.com / Cboe",
          "publishedOn": "2026-10-01",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "fact": "US 10-year yield 5.327% versus 5.311% prior close, DXY 101.80 (+0.34%), WTI $91.59 (+1.29%) and delayed VIX 16.71. Reuters reported yields briefly near 5.34% while Micron-supported technology strength offset some pressure.",
          "sourceUrls": [
            "https://www.reuters.com/world/china/global-markets-global-markets-2026-10-01/",
            "https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield",
            "https://www.investing.com/indices/usdollar",
            "https://www.investing.com/commodities/crude-oil",
            "https://www.cboe.com/tradable-products/vix"
          ]
        },
        {
          "id": "catalysts",
          "type": "news",
          "provider": "Reuters / Barron's",
          "publishedOn": "2026-10-01",
          "retrievedAt": "2026-10-01T14:12:45.435Z",
          "fact": "HPE's higher networking outlook and $1.2bn Vultr AI order remained positive, but the regular-session price failed to hold the reclaim/support area; the catalyst did not override the recorded confirmation rule.",
          "sourceUrls": [
            "https://www.reuters.com/business/hpe-boosts-networking-growth-outlook-gets-12-billion-ai-order-cloud-firm-vultr-2026-09-30/",
            "https://www.barrons.com/articles/hpe-stock-hewlett-packard-enterprise-ai-demand-b42d0a2b"
          ]
        }
      ],
      "limitations": [
        "No candidate met its recorded entry trigger; no paper execution was attempted.",
        "HPE intraday support breach was visible, but completed 15/30-minute candle closes were not exposed by the source.",
        "Crypto references lacked exchange timestamps and were not execution-eligible.",
        "Cboe VIX was delayed at least 20 minutes and several macro page clock timezones were unspecified.",
        "No market mark was required because the portfolio remained fully in cash."
      ],
      "alternativeAssessment": "NVDA and XLE showed early-session relative strength, but immediate re-entry after recent exits would be churn without a defined fresh setup. HPE's catalyst was overwhelmed by failed price confirmation; ETH and BTC remained below breakout levels.",
      "transactionReason": null,
      "reason": "Maintain the existing MSTR paper position. The supplied quote of $164.76 remains above its documented $163.17 breakout-entry level and no completed 5-minute close below the $156.85 invalidation, or independently evidenced reversal, is supplied. The target-level alert is not actionable because the recorded target duplicates the entry threshold rather than providing an independent profit-taking level. Do not BUY: MSTR has deteriorated to rank 7 from 5, with sub-baseline daily volume (0.934x), elevated ATR (5.782%), and the portfolio is already about 55% allocated to clustered short-horizon long-equity momentum exposure in a tight-liquidity range regime. Do not REDUCE or SELL without the documented invalidation or new confirmed reversal evidence."
    },
    "regimeEngine": {
      "engineVersion": "1.0.0",
      "mode": "SHADOW",
      "observedAt": "2026-10-01T17:12:45.435+03:00",
      "inputs": {
        "equityTrend": 0.10140666666666666,
        "breadth": 0.06249,
        "creditRisk": -0.04390000000000005,
        "ratesShock": 0.16000000000000014,
        "usdShock": 0.45333333333333337,
        "volatilityZ": -0.6579999999999998,
        "liquidity": -0.7446466666666667,
        "trendStrength": 0.11173333333333331,
        "dataCompleteness": 0.92,
        "rawEvidence": [
          {
            "feature": "equityTrend",
            "rawObservation": {
              "instrument": "SPY",
              "priceUsd": 763.79,
              "changePct": 0.15211,
              "session": "US regular session"
            },
            "provider": "ChatGPT web finance quote service",
            "sourceUrl": "https://www.google.com/finance/quote/SPY:NYSEARCA",
            "sourceTimestamp": "2026-10-01T13:52:47Z",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(SPY day change % / 1.5%, -1, 1)",
            "normalizedValue": 0.10140666666666666
          },
          {
            "feature": "breadth",
            "rawObservation": {
              "symbol": "RSP",
              "priceUsd": 208.15,
              "changePct": 0.06249,
              "session": "US regular session"
            },
            "provider": "ChatGPT web finance quote service",
            "sourceUrl": "https://www.google.com/finance/quote/RSP:NYSEARCA",
            "sourceTimestamp": "2026-10-01T13:52:31Z",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(RSP day change % / 1.0%, -1, 1); equal-weight participation proxy",
            "normalizedValue": 0.06249
          },
          {
            "feature": "creditRisk",
            "rawObservation": {
              "hyg": {
                "priceUsd": 76.63,
                "changePct": -0.7512,
                "sourceTimestamp": "2026-10-01T13:52:15Z"
              },
              "lqd": {
                "priceUsd": 101.39,
                "changePct": -0.77315,
                "sourceTimestamp": "2026-10-01T13:52:30Z"
              },
              "relativeChangePct": 0.02195
            },
            "provider": "ChatGPT web finance quote service",
            "sourceUrl": "https://www.google.com/finance/quote/HYG:NYSEARCA",
            "secondarySourceUrl": "https://www.google.com/finance/quote/LQD:NYSEARCA",
            "sourceTimestamp": "2026-10-01T13:52:30Z",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(-(HYG day % - LQD day %) / 0.5%, -1, 1); positive output means credit stress",
            "normalizedValue": -0.04390000000000005
          },
          {
            "feature": "ratesShock",
            "rawObservation": {
              "benchmark": "US 10Y",
              "yieldPct": 5.327,
              "previousClosePct": 5.311,
              "changeBasisPoints": 1.6
            },
            "provider": "Investing.com",
            "sourceUrl": "https://www.investing.com/rates-bonds/u.s.-10-year-bond-yield",
            "sourceTimestamp": null,
            "sourceTimeRaw": "09:50:27; timezone not stated",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(10Y day change bp / 10bp, -1, 1)",
            "normalizedValue": 0.16000000000000014
          },
          {
            "feature": "usdShock",
            "rawObservation": {
              "index": "DXY",
              "level": 101.8,
              "changePct": 0.34
            },
            "provider": "Investing.com",
            "sourceUrl": "https://www.investing.com/indices/usdollar",
            "sourceTimestamp": null,
            "sourceTimeRaw": "10:06:38; timezone not stated",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(DXY day change % / 0.75%, -1, 1)",
            "normalizedValue": 0.45333333333333337
          },
          {
            "feature": "volatilityZ",
            "rawObservation": {
              "index": "VIX",
              "level": 16.71,
              "previousClose": 16.34,
              "changePct": 2.26,
              "delay": "at least 20 minutes",
              "sourceTimeRaw": "Data as of 1:42 PM 10/1/2026; timezone not stated"
            },
            "provider": "Cboe",
            "sourceUrl": "https://www.cboe.com/tradable-products/vix",
            "sourceTimestamp": null,
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "(VIX - 20) / 5; transparent level proxy, not a rolling statistical z-score",
            "normalizedValue": -0.6579999999999998
          },
          {
            "feature": "liquidity",
            "rawObservation": {
              "kre": {
                "priceUsd": 68.77,
                "changePct": -0.96486,
                "sourceTimestamp": "2026-10-01T13:52:35Z"
              },
              "spy": {
                "priceUsd": 763.79,
                "changePct": 0.15211,
                "sourceTimestamp": "2026-10-01T13:52:47Z"
              },
              "relativeChangePct": -1.11697
            },
            "provider": "ChatGPT web finance quote service",
            "sourceUrl": "https://www.google.com/finance/quote/KRE:NYSEARCA",
            "secondarySourceUrl": "https://www.google.com/finance/quote/SPY:NYSEARCA",
            "sourceTimestamp": "2026-10-01T13:52:47Z",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp((KRE day % - SPY day %) / 1.5%, -1, 1)",
            "normalizedValue": -0.7446466666666667
          },
          {
            "feature": "trendStrength",
            "rawObservation": {
              "spyChangePct": 0.15211,
              "qqqChangePct": 0.16221,
              "diaChangePct": -0.06292,
              "meanChangePct": 0.0838,
              "session": "US regular session",
              "sourceTimestamps": [
                "2026-10-01T13:52:47Z",
                "2026-10-01T13:52:10Z",
                "2026-10-01T13:54:01Z"
              ]
            },
            "provider": "ChatGPT web finance quote service",
            "sourceUrl": "https://www.google.com/finance/quote/SPY:NYSEARCA",
            "secondarySourceUrls": [
              "https://www.google.com/finance/quote/QQQ:NASDAQ",
              "https://www.google.com/finance/quote/DIA:NYSEARCA"
            ],
            "sourceTimestamp": "2026-10-01T13:54:01Z",
            "retrievedAt": "2026-10-01T14:12:45.435Z",
            "normalization": "clamp(abs(mean(SPY, QQQ, DIA day changes)) / 0.75%, 0, 1)",
            "normalizedValue": 0.11173333333333331
          }
        ]
      },
      "dataCompleteness": {
        "score": 0.92,
        "availableFeatures": 8,
        "totalFeatures": 8,
        "qualityNote": "All eight features were represented with regular-session or same-day observations. Missing candle bars, delayed VIX and timezone-ambiguous macro page clocks reduce quality."
      },
      "output": {
        "version": "1.0.0",
        "risk": "NEUTRAL",
        "trend": "RANGE",
        "volatility": "NORMAL",
        "liquidity": "TIGHT",
        "riskScore": 0.007,
        "confidence": 65,
        "positionSizeMultiplier": 0.68,
        "allowedStrategies": [
          "MEAN_REVERSION",
          "CONFIRMED_RANGE_BREAKOUT",
          "EVENT_DRIVEN"
        ],
        "guardrails": {
          "decisionSupportOnly": true,
          "noAutomaticExecution": true,
          "requireFreshMarketData": true,
          "lowConfidenceThreshold": 60,
          "lowConfidenceAction": "DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"
        }
      },
      "limitations": [
        "SHADOW/observation only: output did not execute, block or size any trade.",
        "RSP is an equal-weight participation proxy, not exchange advance/decline breadth.",
        "HYG-minus-LQD and KRE-relative-to-SPY are imperfect credit/liquidity proxies.",
        "Cboe VIX was delayed and several macro page clock times lacked an explicit timezone.",
        "The finance service did not expose completed intraday candle closes."
      ],
      "decisionAlignment": "The independent HOLD-all decision is consistent with absent candidate triggers and HPE's failed intraday support/reclaim behavior, but the SHADOW engine did not execute, block or size it."
    },
    "regimeHistory": [
      {
        "engineVersion": "1.0.0",
        "mode": "SHADOW",
        "observedAt": "2026-09-30T22:03:00+03:00",
        "dataCompleteness": 0.94,
        "input": {
          "equityTrend": 0.235,
          "breadth": -0.339,
          "creditRisk": -0.334,
          "ratesShock": 0.42,
          "usdShock": 0.067,
          "volatilityZ": -0.81,
          "liquidity": -0.817,
          "trendStrength": 0.333
        },
        "output": {
          "version": "1.0.0",
          "risk": "NEUTRAL",
          "trend": "RANGE",
          "volatility": "LOW",
          "liquidity": "TIGHT",
          "riskScore": 0.007,
          "confidence": 66,
          "positionSizeMultiplier": 0.68,
          "allowedStrategies": [
            "MEAN_REVERSION",
            "CONFIRMED_RANGE_BREAKOUT",
            "EVENT_DRIVEN"
          ],
          "guardrails": {
            "decisionSupportOnly": true,
            "noAutomaticExecution": true,
            "requireFreshMarketData": true,
            "lowConfidenceThreshold": 60,
            "lowConfidenceAction": "DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"
          }
        }
      },
      {
        "engineVersion": "1.0.0",
        "mode": "SHADOW",
        "observedAt": "2026-09-30T23:59:02+03:00",
        "dataCompleteness": 0.94,
        "input": {
          "equityTrend": -0.135,
          "breadth": -0.695,
          "creditRisk": -0.022,
          "ratesShock": 0.34,
          "usdShock": 0.027,
          "volatilityZ": -0.732,
          "liquidity": -0.266,
          "trendStrength": 0.282
        },
        "output": {
          "version": "1.0.0",
          "risk": "NEUTRAL",
          "trend": "RANGE",
          "volatility": "NORMAL",
          "liquidity": "TIGHT",
          "riskScore": -0.188,
          "confidence": 76,
          "positionSizeMultiplier": 0.68,
          "allowedStrategies": [
            "MEAN_REVERSION",
            "CONFIRMED_RANGE_BREAKOUT",
            "EVENT_DRIVEN"
          ],
          "guardrails": {
            "decisionSupportOnly": true,
            "noAutomaticExecution": true,
            "requireFreshMarketData": true,
            "lowConfidenceThreshold": 60,
            "lowConfidenceAction": "DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"
          }
        }
      },
      {
        "engineVersion": "1.0.0",
        "mode": "SHADOW",
        "observedAt": "2026-10-01T15:05:50+03:00",
        "dataCompleteness": 0.86,
        "input": {
          "equityTrend": 0.17333333333333334,
          "breadth": -0.69451,
          "creditRisk": -0.022320000000000007,
          "ratesShock": -0.22999999999999687,
          "usdShock": 0.48,
          "volatilityZ": -0.718,
          "liquidity": -0.26575333333333334,
          "trendStrength": 0.39999999999999997
        },
        "output": {
          "version": "1.0.0",
          "risk": "NEUTRAL",
          "trend": "RANGE",
          "volatility": "NORMAL",
          "liquidity": "TIGHT",
          "riskScore": -0.062,
          "confidence": 61,
          "positionSizeMultiplier": 0.68,
          "allowedStrategies": [
            "MEAN_REVERSION",
            "CONFIRMED_RANGE_BREAKOUT",
            "EVENT_DRIVEN"
          ],
          "guardrails": {
            "decisionSupportOnly": true,
            "noAutomaticExecution": true,
            "requireFreshMarketData": true,
            "lowConfidenceThreshold": 60,
            "lowConfidenceAction": "DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"
          }
        },
        "materiality": "Appended because riskScore moved from -0.188 to -0.062, confidence fell from 76 to 61, equity-trend input turned positive and the rates-shock input turned negative; categorical regime remained unchanged."
      },
      {
        "engineVersion": "1.0.0",
        "mode": "SHADOW",
        "observedAt": "2026-10-01T17:12:45.435+03:00",
        "dataCompleteness": 0.92,
        "input": {
          "equityTrend": 0.10140666666666666,
          "breadth": 0.06249,
          "creditRisk": -0.04390000000000005,
          "ratesShock": 0.16000000000000014,
          "usdShock": 0.45333333333333337,
          "volatilityZ": -0.6579999999999998,
          "liquidity": -0.7446466666666667,
          "trendStrength": 0.11173333333333331
        },
        "output": {
          "version": "1.0.0",
          "risk": "NEUTRAL",
          "trend": "RANGE",
          "volatility": "NORMAL",
          "liquidity": "TIGHT",
          "riskScore": 0.007,
          "confidence": 65,
          "positionSizeMultiplier": 0.68,
          "allowedStrategies": [
            "MEAN_REVERSION",
            "CONFIRMED_RANGE_BREAKOUT",
            "EVENT_DRIVEN"
          ],
          "guardrails": {
            "decisionSupportOnly": true,
            "noAutomaticExecution": true,
            "requireFreshMarketData": true,
            "lowConfidenceThreshold": 60,
            "lowConfidenceAction": "DO_NOT_RELAX_ENTRY_OR_RISK_THRESHOLDS"
          }
        },
        "materiality": "Appended because the review moved from premarket to regular-session evidence: breadth flipped from -0.695 to +0.062, rates shock from -0.23 to +0.16, liquidity weakened from -0.266 to -0.745 and riskScore moved from -0.062 to +0.007; categorical regime remained unchanged."
      }
    ],
    "dailyUniverseSelection": {
      "selectedAt": "2026-11-18T19:15:26.272Z",
      "version": 2,
      "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
      "universeSize": 117,
      "attemptedCount": 119,
      "evaluatedCount": 119,
      "failedCount": 0,
      "topN": 5,
      "weights": {
        "r5": 0.2,
        "r20": 0.1,
        "rs5": 0.15,
        "rs20": 0.1,
        "atr": 0.2,
        "vol": 0.1,
        "vr": 0.1,
        "gap": 0.05
      },
      "correlationCap": 0.8,
      "previousSelectedAt": "2026-11-17T12:27:46.232Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "TGT",
          "quantScore": 1.433,
          "metrics": {
            "momentum5d": 4.302,
            "momentum20d": 10.195,
            "realizedVol10dAnnualized": 44.82,
            "volumeRatio": 2.051,
            "atrPct": 3.662,
            "gapPct": 0.915,
            "relativeStrength5dPct": 8.092,
            "relativeStrength20dPct": 15.14,
            "avgDollarVolume10d": 734382948,
            "maxSelectedCorrelation": 0
          }
        },
        {
          "symbol": "AVGO",
          "quantScore": 1.099,
          "metrics": {
            "momentum5d": 2.72,
            "momentum20d": 6.053,
            "realizedVol10dAnnualized": 86.48,
            "volumeRatio": 0.458,
            "atrPct": 5.904,
            "gapPct": 2.08,
            "relativeStrength5dPct": 6.509,
            "relativeStrength20dPct": 10.999,
            "avgDollarVolume10d": 11645487025,
            "maxSelectedCorrelation": 0.526
          }
        },
        {
          "symbol": "UNG",
          "quantScore": 0.873,
          "metrics": {
            "momentum5d": 3.327,
            "momentum20d": 0.571,
            "realizedVol10dAnnualized": 53.78,
            "volumeRatio": 0.791,
            "atrPct": 3.869,
            "gapPct": 1.892,
            "relativeStrength5dPct": 7.116,
            "relativeStrength20dPct": 5.517,
            "avgDollarVolume10d": 212936540,
            "maxSelectedCorrelation": 0.683
          }
        },
        {
          "symbol": "ABNB",
          "quantScore": 0.608,
          "metrics": {
            "momentum5d": 0.712,
            "momentum20d": 3.097,
            "realizedVol10dAnnualized": 67.01,
            "volumeRatio": 0.258,
            "atrPct": 4.485,
            "gapPct": -0.956,
            "relativeStrength5dPct": 4.502,
            "relativeStrength20dPct": 8.042,
            "avgDollarVolume10d": 1098202118,
            "maxSelectedCorrelation": 0.202
          }
        },
        {
          "symbol": "WMT",
          "quantScore": 0.572,
          "metrics": {
            "momentum5d": 1.273,
            "momentum20d": 7.993,
            "realizedVol10dAnnualized": 13.34,
            "volumeRatio": 0.866,
            "atrPct": 2.418,
            "gapPct": -0.851,
            "relativeStrength5dPct": 5.063,
            "relativeStrength20dPct": 12.939,
            "avgDollarVolume10d": 2757316695,
            "maxSelectedCorrelation": 0.26
          }
        }
      ],
      "candidates": [
        {
          "symbol": "TGT",
          "rank": 1,
          "previousRank": 45,
          "rankChange": 44,
          "rankChangeLabel": "+44",
          "status": "SELECTED",
          "quantScore": 1.433,
          "metrics": {
            "momentum5d": 4.302,
            "momentum20d": 10.195,
            "realizedVol10dAnnualized": 44.82,
            "volumeRatio": 2.051,
            "atrPct": 3.662,
            "gapPct": 0.915,
            "relativeStrength5dPct": 8.092,
            "relativeStrength20dPct": 15.14,
            "avgDollarVolume10d": 734382948,
            "maxSelectedCorrelation": 0
          },
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.707,
            "participation": 4.724,
            "volatility": -0.071,
            "gap": 0.858,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
          "entryRule": {
            "operator": "ABOVE",
            "level": 172.34,
            "timeframeMinutes": 5,
            "requiredCloses": 1,
            "requireParticipation": true
          },
          "invalidationRule": {
            "operator": "BELOW",
            "level": 167.06,
            "timeframeMinutes": 5,
            "requiredCloses": 1
          },
          "expiresAt": "2026-11-21T19:15:26.272Z",
          "trigger": "Break above $172.34 with sustained participation.",
          "invalidation": "Loss of $167.06 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.43: 5d momentum 4.3%, 20d 10.2%, annualized 10d realized vol 45%, volume 2.05x, max selected correlation 0.00.",
          "createdAt": "2026-11-18T19:15:26.272Z",
          "lastReviewedAt": "2026-11-18T19:15:26.272Z",
          "setupId": "TGT-20261118-daily-quant"
        },
        {
          "symbol": "CRWD",
          "rank": 2,
          "previousRank": 34,
          "rankChange": 32,
          "rankChangeLabel": "+32",
          "status": "REJECT",
          "quantScore": 1.39,
          "metrics": {
            "momentum5d": 4.562,
            "momentum20d": 5.339,
            "realizedVol10dAnnualized": 74.39,
            "volumeRatio": 1.029,
            "atrPct": 6.318,
            "gapPct": 1.922,
            "relativeStrength5dPct": 8.352,
            "relativeStrength20dPct": 10.285,
            "avgDollarVolume10d": 2036357756,
            "maxSelectedCorrelation": 0.9
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.592,
            "participation": 1.284,
            "volatility": 0.991,
            "gap": 1.767,
            "correlation": 0.9,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 3,
          "previousRank": 1,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "SELECTED",
          "quantScore": 1.099,
          "metrics": {
            "momentum5d": 2.72,
            "momentum20d": 6.053,
            "realizedVol10dAnnualized": 86.48,
            "volumeRatio": 0.458,
            "atrPct": 5.904,
            "gapPct": 2.08,
            "relativeStrength5dPct": 6.509,
            "relativeStrength20dPct": 10.999,
            "avgDollarVolume10d": 11645487025,
            "maxSelectedCorrelation": 0.526
          },
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.384,
            "participation": -0.638,
            "volatility": 1.021,
            "gap": 1.909,
            "correlation": 0.526,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
          "entryRule": {
            "operator": "ABOVE",
            "level": 365.24,
            "timeframeMinutes": 5,
            "requiredCloses": 1,
            "requireParticipation": true
          },
          "invalidationRule": {
            "operator": "BELOW",
            "level": 343.98,
            "timeframeMinutes": 5,
            "requiredCloses": 1
          },
          "expiresAt": "2026-11-21T19:15:26.272Z",
          "trigger": "Break above $365.24 with sustained participation.",
          "invalidation": "Loss of $343.98 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.10: 5d momentum 2.7%, 20d 6.1%, annualized 10d realized vol 86%, volume 0.46x, max selected correlation 0.53.",
          "createdAt": "2026-11-18T19:15:26.272Z",
          "lastReviewedAt": "2026-11-18T19:15:26.272Z",
          "setupId": "AVGO-20261118-daily-quant"
        },
        {
          "symbol": "PANW",
          "rank": 4,
          "previousRank": 76,
          "rankChange": 72,
          "rankChangeLabel": "+72",
          "status": "REJECT",
          "quantScore": 0.922,
          "metrics": {
            "momentum5d": 0.009,
            "momentum20d": -1.699,
            "realizedVol10dAnnualized": 73.77,
            "volumeRatio": 1.091,
            "atrPct": 5.893,
            "gapPct": 1.442,
            "relativeStrength5dPct": 3.798,
            "relativeStrength20dPct": 3.247,
            "avgDollarVolume10d": 2190042013,
            "maxSelectedCorrelation": 0.916
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.81,
            "participation": 1.492,
            "volatility": 0.869,
            "gap": 1.334,
            "correlation": 0.916,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 5,
          "previousRank": 86,
          "rankChange": 81,
          "rankChangeLabel": "+81",
          "status": "SELECTED",
          "quantScore": 0.873,
          "metrics": {
            "momentum5d": 3.327,
            "momentum20d": 0.571,
            "realizedVol10dAnnualized": 53.78,
            "volumeRatio": 0.791,
            "atrPct": 3.869,
            "gapPct": 1.892,
            "relativeStrength5dPct": 7.116,
            "relativeStrength20dPct": 5.517,
            "avgDollarVolume10d": 212936540,
            "maxSelectedCorrelation": 0.683
          },
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.293,
            "participation": 0.482,
            "volatility": 0.09,
            "gap": 1.74,
            "correlation": 0.683,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
          "entryRule": {
            "operator": "ABOVE",
            "level": 10.76,
            "timeframeMinutes": 5,
            "requiredCloses": 1,
            "requireParticipation": true
          },
          "invalidationRule": {
            "operator": "BELOW",
            "level": 10.36,
            "timeframeMinutes": 5,
            "requiredCloses": 1
          },
          "expiresAt": "2026-11-21T19:15:26.272Z",
          "trigger": "Break above $10.76 with sustained participation.",
          "invalidation": "Loss of $10.36 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.87: 5d momentum 3.3%, 20d 0.6%, annualized 10d realized vol 54%, volume 0.79x, max selected correlation 0.68.",
          "createdAt": "2026-11-18T19:15:26.272Z",
          "lastReviewedAt": "2026-11-18T19:15:26.272Z",
          "setupId": "UNG-20261118-daily-quant"
        },
        {
          "symbol": "AMD",
          "rank": 6,
          "previousRank": 2,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "REJECT",
          "quantScore": 0.814,
          "metrics": {
            "momentum5d": -6.096,
            "momentum20d": -2.907,
            "realizedVol10dAnnualized": 141.32,
            "volumeRatio": 0.51,
            "atrPct": 9.543,
            "gapPct": 1.322,
            "relativeStrength5dPct": -2.307,
            "relativeStrength20dPct": 2.038,
            "avgDollarVolume10d": 23977165135,
            "maxSelectedCorrelation": 0.9
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.012,
            "participation": -0.465,
            "volatility": 2.644,
            "gap": 1.225,
            "correlation": 0.9,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 7,
          "previousRank": 16,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "REJECT",
          "quantScore": 0.772,
          "metrics": {
            "momentum5d": 2.649,
            "momentum20d": 9.985,
            "realizedVol10dAnnualized": 29.58,
            "volumeRatio": 0.781,
            "atrPct": 2.656,
            "gapPct": 1.308,
            "relativeStrength5dPct": 6.439,
            "relativeStrength20dPct": 14.93,
            "avgDollarVolume10d": 1176709051,
            "maxSelectedCorrelation": 0.895
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.495,
            "participation": 0.448,
            "volatility": -0.52,
            "gap": 1.213,
            "correlation": 0.895,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 8,
          "previousRank": 15,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "SELECTED",
          "quantScore": 0.608,
          "metrics": {
            "momentum5d": 0.712,
            "momentum20d": 3.097,
            "realizedVol10dAnnualized": 67.01,
            "volumeRatio": 0.258,
            "atrPct": 4.485,
            "gapPct": -0.956,
            "relativeStrength5dPct": 4.502,
            "relativeStrength20dPct": 8.042,
            "avgDollarVolume10d": 1098202118,
            "maxSelectedCorrelation": 0.202
          },
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.044,
            "participation": -1.312,
            "volatility": 0.411,
            "gap": 0.83,
            "correlation": 0.202,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
          "entryRule": {
            "operator": "ABOVE",
            "level": 186.66,
            "timeframeMinutes": 5,
            "requiredCloses": 1,
            "requireParticipation": true
          },
          "invalidationRule": {
            "operator": "BELOW",
            "level": 178.18,
            "timeframeMinutes": 5,
            "requiredCloses": 1
          },
          "expiresAt": "2026-11-21T19:15:26.272Z",
          "trigger": "Break above $186.66 with sustained participation.",
          "invalidation": "Loss of $178.18 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.61: 5d momentum 0.7%, 20d 3.1%, annualized 10d realized vol 67%, volume 0.26x, max selected correlation 0.20.",
          "createdAt": "2026-11-18T19:15:26.272Z",
          "lastReviewedAt": "2026-11-18T19:15:26.272Z",
          "setupId": "ABNB-20261118-daily-quant"
        },
        {
          "symbol": "TSLA",
          "rank": 9,
          "previousRank": 6,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "REJECT",
          "quantScore": 0.582,
          "metrics": {
            "momentum5d": -1.847,
            "momentum20d": 2.652,
            "realizedVol10dAnnualized": 68.74,
            "volumeRatio": 0.599,
            "atrPct": 4.683,
            "gapPct": 1.336,
            "relativeStrength5dPct": 1.942,
            "relativeStrength20dPct": 7.597,
            "avgDollarVolume10d": 12873605037,
            "maxSelectedCorrelation": 0.887
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.711,
            "participation": -0.163,
            "volatility": 0.485,
            "gap": 1.238,
            "correlation": 0.887,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 10,
          "previousRank": 13,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "SELECTED",
          "quantScore": 0.572,
          "metrics": {
            "momentum5d": 1.273,
            "momentum20d": 7.993,
            "realizedVol10dAnnualized": 13.34,
            "volumeRatio": 0.866,
            "atrPct": 2.418,
            "gapPct": -0.851,
            "relativeStrength5dPct": 5.063,
            "relativeStrength20dPct": 12.939,
            "avgDollarVolume10d": 2757316695,
            "maxSelectedCorrelation": 0.26
          },
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.263,
            "participation": 0.736,
            "volatility": -0.774,
            "gap": 0.735,
            "correlation": 0.26,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
          "entryRule": {
            "operator": "ABOVE",
            "level": 128.29,
            "timeframeMinutes": 5,
            "requiredCloses": 1,
            "requireParticipation": true
          },
          "invalidationRule": {
            "operator": "BELOW",
            "level": 126.25,
            "timeframeMinutes": 5,
            "requiredCloses": 1
          },
          "expiresAt": "2026-11-21T19:15:26.272Z",
          "trigger": "Break above $128.29 with sustained participation.",
          "invalidation": "Loss of $126.25 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.57: 5d momentum 1.3%, 20d 8.0%, annualized 10d realized vol 13%, volume 0.87x, max selected correlation 0.26.",
          "createdAt": "2026-11-18T19:15:26.272Z",
          "lastReviewedAt": "2026-11-18T19:15:26.272Z",
          "setupId": "WMT-20261118-daily-quant"
        },
        {
          "symbol": "AMZN",
          "rank": 11,
          "previousRank": 53,
          "rankChange": 42,
          "rankChangeLabel": "+42",
          "status": "REJECT",
          "quantScore": 0.544,
          "metrics": {
            "momentum5d": 0.56,
            "momentum20d": 1.915,
            "realizedVol10dAnnualized": 33.49,
            "volumeRatio": 0.619,
            "atrPct": 4.101,
            "gapPct": 0.744,
            "relativeStrength5dPct": 4.349,
            "relativeStrength20dPct": 6.861,
            "avgDollarVolume10d": 11577396740,
            "maxSelectedCorrelation": 0.873
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.989,
            "participation": -0.098,
            "volatility": -0.085,
            "gap": 0.704,
            "correlation": 0.873,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 12,
          "previousRank": 28,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.51,
          "metrics": {
            "momentum5d": -4.128,
            "momentum20d": 11.842,
            "realizedVol10dAnnualized": 23.44,
            "volumeRatio": 0.855,
            "atrPct": 3.39,
            "gapPct": -3.806,
            "relativeStrength5dPct": -0.338,
            "relativeStrength20dPct": 16.787,
            "avgDollarVolume10d": 797848048,
            "maxSelectedCorrelation": 0.683
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.706,
            "participation": 0.697,
            "volatility": -0.394,
            "gap": 3.402,
            "correlation": 0.683,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 13,
          "previousRank": 11,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.483,
          "metrics": {
            "momentum5d": -0.318,
            "momentum20d": 10.234,
            "realizedVol10dAnnualized": 32.36,
            "volumeRatio": 0.471,
            "atrPct": 3.054,
            "gapPct": 0.723,
            "relativeStrength5dPct": 3.471,
            "relativeStrength20dPct": 15.18,
            "avgDollarVolume10d": 750007953,
            "maxSelectedCorrelation": 0.703
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.132,
            "participation": -0.597,
            "volatility": -0.38,
            "gap": 0.685,
            "correlation": 0.703,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 14,
          "previousRank": 3,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.468,
          "metrics": {
            "momentum5d": 1.853,
            "momentum20d": 11.376,
            "realizedVol10dAnnualized": 15.25,
            "volumeRatio": 0.402,
            "atrPct": 1.959,
            "gapPct": -0.539,
            "relativeStrength5dPct": 5.642,
            "relativeStrength20dPct": 16.322,
            "avgDollarVolume10d": 2723333160,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.438,
            "participation": -0.828,
            "volatility": -0.875,
            "gap": 0.454,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 15,
          "previousRank": 23,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "REJECT",
          "quantScore": 0.425,
          "metrics": {
            "momentum5d": -0.027,
            "momentum20d": 4.188,
            "realizedVol10dAnnualized": 13.29,
            "volumeRatio": 1.043,
            "atrPct": 1.831,
            "gapPct": -0.7,
            "relativeStrength5dPct": 3.762,
            "relativeStrength20dPct": 9.133,
            "avgDollarVolume10d": 1791740463,
            "maxSelectedCorrelation": 0.852
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.985,
            "participation": 1.33,
            "volatility": -0.933,
            "gap": 0.599,
            "correlation": 0.852,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 16,
          "previousRank": 31,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.39,
          "metrics": {
            "momentum5d": -0.298,
            "momentum20d": 11.139,
            "realizedVol10dAnnualized": 17.84,
            "volumeRatio": 0.324,
            "atrPct": 2.673,
            "gapPct": -1.28,
            "relativeStrength5dPct": 3.491,
            "relativeStrength20dPct": 16.084,
            "avgDollarVolume10d": 1375694458,
            "maxSelectedCorrelation": 0.456
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.162,
            "participation": -1.092,
            "volatility": -0.653,
            "gap": 1.122,
            "correlation": 0.456,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 17,
          "previousRank": 19,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.36,
          "metrics": {
            "momentum5d": 0.99,
            "momentum20d": 7.183,
            "realizedVol10dAnnualized": 11.84,
            "volumeRatio": 0.48,
            "atrPct": 1.786,
            "gapPct": -1.001,
            "relativeStrength5dPct": 4.78,
            "relativeStrength20dPct": 12.128,
            "avgDollarVolume10d": 738464436,
            "maxSelectedCorrelation": 0.638
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.203,
            "participation": -0.565,
            "volatility": -0.962,
            "gap": 0.871,
            "correlation": 0.638,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 18,
          "previousRank": 20,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.314,
          "metrics": {
            "momentum5d": -3.273,
            "momentum20d": 7.839,
            "realizedVol10dAnnualized": 22.27,
            "volumeRatio": 0.591,
            "atrPct": 3.066,
            "gapPct": -2.29,
            "relativeStrength5dPct": 0.516,
            "relativeStrength20dPct": 12.784,
            "avgDollarVolume10d": 1688799008,
            "maxSelectedCorrelation": 0.648
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.691,
            "participation": -0.193,
            "volatility": -0.495,
            "gap": 2.034,
            "correlation": 0.648,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 19,
          "previousRank": 36,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.301,
          "metrics": {
            "momentum5d": -3.853,
            "momentum20d": 1.029,
            "realizedVol10dAnnualized": 19.33,
            "volumeRatio": 1.486,
            "atrPct": 2.023,
            "gapPct": -0.837,
            "relativeStrength5dPct": -0.063,
            "relativeStrength20dPct": 5.974,
            "avgDollarVolume10d": 2098954081,
            "maxSelectedCorrelation": 0.509
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.411,
            "participation": 2.822,
            "volatility": -0.81,
            "gap": 0.723,
            "correlation": 0.509,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 20,
          "previousRank": 4,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": 0.28,
          "metrics": {
            "momentum5d": -3.365,
            "momentum20d": 8.201,
            "realizedVol10dAnnualized": 32.59,
            "volumeRatio": 0.558,
            "atrPct": 3.323,
            "gapPct": -0.538,
            "relativeStrength5dPct": 0.425,
            "relativeStrength20dPct": 13.146,
            "avgDollarVolume10d": 4069820898,
            "maxSelectedCorrelation": 0.618
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.69,
            "participation": -0.304,
            "volatility": -0.305,
            "gap": 0.453,
            "correlation": 0.618,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 21,
          "previousRank": 29,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.275,
          "metrics": {
            "momentum5d": -3.259,
            "momentum20d": -9.806,
            "realizedVol10dAnnualized": 27.27,
            "volumeRatio": 1.557,
            "atrPct": 2.948,
            "gapPct": -0.568,
            "relativeStrength5dPct": 0.531,
            "relativeStrength20dPct": -4.86,
            "avgDollarVolume10d": 2118537997,
            "maxSelectedCorrelation": 0.491
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.156,
            "participation": 3.059,
            "volatility": -0.469,
            "gap": 0.48,
            "correlation": 0.491,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 22,
          "previousRank": 67,
          "rankChange": 45,
          "rankChangeLabel": "+45",
          "status": "WATCH",
          "quantScore": 0.262,
          "metrics": {
            "momentum5d": -3.857,
            "momentum20d": 9.891,
            "realizedVol10dAnnualized": 39.36,
            "volumeRatio": 0.457,
            "atrPct": 3.371,
            "gapPct": 0.328,
            "relativeStrength5dPct": -0.068,
            "relativeStrength20dPct": 14.836,
            "avgDollarVolume10d": 1307552068,
            "maxSelectedCorrelation": 0.615
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.68,
            "participation": -0.644,
            "volatility": -0.213,
            "gap": 0.328,
            "correlation": 0.615,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 23,
          "previousRank": 66,
          "rankChange": 43,
          "rankChangeLabel": "+43",
          "status": "WATCH",
          "quantScore": 0.245,
          "metrics": {
            "momentum5d": -2.164,
            "momentum20d": 2.938,
            "realizedVol10dAnnualized": 13.62,
            "volumeRatio": 1.068,
            "atrPct": 1.52,
            "gapPct": -0.78,
            "relativeStrength5dPct": 1.625,
            "relativeStrength20dPct": 7.883,
            "avgDollarVolume10d": 306187533,
            "maxSelectedCorrelation": 0.67
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.68,
            "participation": 1.415,
            "volatility": -1.013,
            "gap": 0.671,
            "correlation": 0.67,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 24,
          "previousRank": 57,
          "rankChange": 33,
          "rankChangeLabel": "+33",
          "status": "WATCH",
          "quantScore": 0.243,
          "metrics": {
            "momentum5d": -1.337,
            "momentum20d": 7.583,
            "realizedVol10dAnnualized": 9.07,
            "volumeRatio": 0.615,
            "atrPct": 2.14,
            "gapPct": -0.379,
            "relativeStrength5dPct": 2.452,
            "relativeStrength20dPct": 12.528,
            "avgDollarVolume10d": 986860178,
            "maxSelectedCorrelation": 0.476
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.924,
            "participation": -0.11,
            "volatility": -0.899,
            "gap": 0.31,
            "correlation": 0.476,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 25,
          "previousRank": 65,
          "rankChange": 40,
          "rankChangeLabel": "+40",
          "status": "REJECT",
          "quantScore": 0.243,
          "metrics": {
            "momentum5d": -1.165,
            "momentum20d": 3.532,
            "realizedVol10dAnnualized": 27.82,
            "volumeRatio": 0.565,
            "atrPct": 2.334,
            "gapPct": 0.111,
            "relativeStrength5dPct": 2.624,
            "relativeStrength20dPct": 8.478,
            "avgDollarVolume10d": 1089391945,
            "maxSelectedCorrelation": 0.85
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.823,
            "participation": -0.281,
            "volatility": -0.627,
            "gap": 0.133,
            "correlation": 0.85,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 26,
          "previousRank": 27,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.229,
          "metrics": {
            "momentum5d": -0.725,
            "momentum20d": 3.991,
            "realizedVol10dAnnualized": 18.97,
            "volumeRatio": 0.438,
            "atrPct": 2.674,
            "gapPct": -0.011,
            "relativeStrength5dPct": 3.064,
            "relativeStrength20dPct": 8.937,
            "avgDollarVolume10d": 14470421479,
            "maxSelectedCorrelation": 0.66
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.892,
            "participation": -0.707,
            "volatility": -0.639,
            "gap": 0.022,
            "correlation": 0.66,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 27,
          "previousRank": 35,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.229,
          "metrics": {
            "momentum5d": -0.604,
            "momentum20d": 1.463,
            "realizedVol10dAnnualized": 14.84,
            "volumeRatio": 0.558,
            "atrPct": 2.423,
            "gapPct": 0.61,
            "relativeStrength5dPct": 3.186,
            "relativeStrength20dPct": 6.409,
            "avgDollarVolume10d": 842757811,
            "maxSelectedCorrelation": 0.665
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.83,
            "participation": -0.303,
            "volatility": -0.756,
            "gap": 0.583,
            "correlation": 0.665,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 28,
          "previousRank": 99,
          "rankChange": 71,
          "rankChangeLabel": "+71",
          "status": "WATCH",
          "quantScore": 0.219,
          "metrics": {
            "momentum5d": -6.249,
            "momentum20d": 8.114,
            "realizedVol10dAnnualized": 34.99,
            "volumeRatio": 0.945,
            "atrPct": 3.47,
            "gapPct": -0.262,
            "relativeStrength5dPct": -2.459,
            "relativeStrength20dPct": 13.059,
            "avgDollarVolume10d": 516093909,
            "maxSelectedCorrelation": 0.569
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.328,
            "participation": 1.001,
            "volatility": -0.237,
            "gap": 0.204,
            "correlation": 0.569,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 29,
          "previousRank": 63,
          "rankChange": 34,
          "rankChangeLabel": "+34",
          "status": "WATCH",
          "quantScore": 0.214,
          "metrics": {
            "momentum5d": -2.087,
            "momentum20d": 0.384,
            "realizedVol10dAnnualized": 26.93,
            "volumeRatio": 0.489,
            "atrPct": 3.342,
            "gapPct": -0.945,
            "relativeStrength5dPct": 1.703,
            "relativeStrength20dPct": 5.33,
            "avgDollarVolume10d": 1142571708,
            "maxSelectedCorrelation": 0.716
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.612,
            "participation": -0.536,
            "volatility": -0.366,
            "gap": 0.82,
            "correlation": 0.716,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 30,
          "previousRank": 32,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.213,
          "metrics": {
            "momentum5d": 0.538,
            "momentum20d": 4.007,
            "realizedVol10dAnnualized": 15.51,
            "volumeRatio": 0.254,
            "atrPct": 2.075,
            "gapPct": -0.502,
            "relativeStrength5dPct": 4.328,
            "relativeStrength20dPct": 8.953,
            "avgDollarVolume10d": 967757379,
            "maxSelectedCorrelation": 0.492
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.05,
            "participation": -1.327,
            "volatility": -0.841,
            "gap": 0.421,
            "correlation": 0.492,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 31,
          "previousRank": 54,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": 0.205,
          "metrics": {
            "momentum5d": -10.543,
            "momentum20d": -17.706,
            "realizedVol10dAnnualized": 112.61,
            "volumeRatio": 0.541,
            "atrPct": 9.217,
            "gapPct": 2.65,
            "relativeStrength5dPct": -6.753,
            "relativeStrength20dPct": -12.76,
            "avgDollarVolume10d": 1146081308,
            "maxSelectedCorrelation": 0.756
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.993,
            "participation": -0.358,
            "volatility": 2.219,
            "gap": 2.424,
            "correlation": 0.756,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 32,
          "previousRank": 50,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": 0.195,
          "metrics": {
            "momentum5d": -0.502,
            "momentum20d": 4.107,
            "realizedVol10dAnnualized": 12.36,
            "volumeRatio": 0.606,
            "atrPct": 1.378,
            "gapPct": -0.507,
            "relativeStrength5dPct": 3.287,
            "relativeStrength20dPct": 9.052,
            "avgDollarVolume10d": 960855001,
            "maxSelectedCorrelation": 0.606
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.923,
            "participation": -0.141,
            "volatility": -1.066,
            "gap": 0.425,
            "correlation": 0.606,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 33,
          "previousRank": 14,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": 0.181,
          "metrics": {
            "momentum5d": -1.811,
            "momentum20d": 1.307,
            "realizedVol10dAnnualized": 20.92,
            "volumeRatio": 0.419,
            "atrPct": 2.962,
            "gapPct": -1.115,
            "relativeStrength5dPct": 1.978,
            "relativeStrength20dPct": 6.252,
            "avgDollarVolume10d": 426981866,
            "maxSelectedCorrelation": 0.344
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.674,
            "participation": -0.769,
            "volatility": -0.539,
            "gap": 0.974,
            "correlation": 0.344,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 34,
          "previousRank": 59,
          "rankChange": 25,
          "rankChangeLabel": "+25",
          "status": "WATCH",
          "quantScore": 0.171,
          "metrics": {
            "momentum5d": -2.068,
            "momentum20d": 1.943,
            "realizedVol10dAnnualized": 22.51,
            "volumeRatio": 0.483,
            "atrPct": 2.703,
            "gapPct": -0.916,
            "relativeStrength5dPct": 1.722,
            "relativeStrength20dPct": 6.888,
            "avgDollarVolume10d": 482486463,
            "maxSelectedCorrelation": 0.646
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.662,
            "participation": -0.555,
            "volatility": -0.59,
            "gap": 0.794,
            "correlation": 0.646,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 35,
          "previousRank": 21,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": 0.168,
          "metrics": {
            "momentum5d": -2.304,
            "momentum20d": 5.625,
            "realizedVol10dAnnualized": 20.54,
            "volumeRatio": 0.366,
            "atrPct": 2.549,
            "gapPct": -1.13,
            "relativeStrength5dPct": 1.486,
            "relativeStrength20dPct": 10.571,
            "avgDollarVolume10d": 2003938093,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.744,
            "participation": -0.948,
            "volatility": -0.655,
            "gap": 0.987,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 36,
          "previousRank": 17,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": 0.164,
          "metrics": {
            "momentum5d": -2.102,
            "momentum20d": 2.468,
            "realizedVol10dAnnualized": 20.67,
            "volumeRatio": 0.639,
            "atrPct": 2.368,
            "gapPct": -0.19,
            "relativeStrength5dPct": 1.687,
            "relativeStrength20dPct": 7.414,
            "avgDollarVolume10d": 2837492855,
            "maxSelectedCorrelation": 0.548
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.673,
            "participation": -0.031,
            "volatility": -0.702,
            "gap": 0.139,
            "correlation": 0.548,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 37,
          "previousRank": 75,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "WATCH",
          "quantScore": 0.156,
          "metrics": {
            "momentum5d": -4.693,
            "momentum20d": -3.586,
            "realizedVol10dAnnualized": 41.66,
            "volumeRatio": 0.64,
            "atrPct": 4.437,
            "gapPct": -0.865,
            "relativeStrength5dPct": -0.904,
            "relativeStrength20dPct": 1.359,
            "avgDollarVolume10d": 869309618,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.166,
            "participation": -0.025,
            "volatility": 0.101,
            "gap": 0.748,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 38,
          "previousRank": 56,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": 0.155,
          "metrics": {
            "momentum5d": -2.288,
            "momentum20d": 1.73,
            "realizedVol10dAnnualized": 30.96,
            "volumeRatio": 0.431,
            "atrPct": 2.817,
            "gapPct": -0.505,
            "relativeStrength5dPct": 1.502,
            "relativeStrength20dPct": 6.675,
            "avgDollarVolume10d": 846760286,
            "maxSelectedCorrelation": 0.712
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.628,
            "participation": -0.729,
            "volatility": -0.46,
            "gap": 0.423,
            "correlation": 0.712,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 39,
          "previousRank": 94,
          "rankChange": 55,
          "rankChangeLabel": "+55",
          "status": "REJECT",
          "quantScore": 0.155,
          "metrics": {
            "momentum5d": -3.301,
            "momentum20d": -8.693,
            "realizedVol10dAnnualized": 59.53,
            "volumeRatio": 0.456,
            "atrPct": 4.37,
            "gapPct": 0.652,
            "relativeStrength5dPct": 0.489,
            "relativeStrength20dPct": -3.747,
            "avgDollarVolume10d": 2175571337,
            "maxSelectedCorrelation": 0.925
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.184,
            "participation": -0.648,
            "volatility": 0.293,
            "gap": 0.621,
            "correlation": 0.925,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 40,
          "previousRank": 103,
          "rankChange": 63,
          "rankChangeLabel": "+63",
          "status": "WATCH",
          "quantScore": 0.155,
          "metrics": {
            "momentum5d": -0.871,
            "momentum20d": 0.106,
            "realizedVol10dAnnualized": 10.71,
            "volumeRatio": 0.891,
            "atrPct": 0.912,
            "gapPct": 0.434,
            "relativeStrength5dPct": 2.918,
            "relativeStrength20dPct": 5.051,
            "avgDollarVolume10d": 2885976005,
            "maxSelectedCorrelation": 0.546
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.755,
            "participation": 0.82,
            "volatility": -1.21,
            "gap": 0.424,
            "correlation": 0.546,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 41,
          "previousRank": 47,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.148,
          "metrics": {
            "momentum5d": -2.748,
            "momentum20d": 0.46,
            "realizedVol10dAnnualized": 17.34,
            "volumeRatio": 0.911,
            "atrPct": 2.166,
            "gapPct": -0.155,
            "relativeStrength5dPct": 1.041,
            "relativeStrength20dPct": 5.406,
            "avgDollarVolume10d": 957410360,
            "maxSelectedCorrelation": 0.712
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.532,
            "participation": 0.886,
            "volatility": -0.795,
            "gap": 0.108,
            "correlation": 0.712,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 42,
          "previousRank": 25,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "WATCH",
          "quantScore": 0.135,
          "metrics": {
            "momentum5d": -2.591,
            "momentum20d": 3.738,
            "realizedVol10dAnnualized": 18.97,
            "volumeRatio": 0.555,
            "atrPct": 2.466,
            "gapPct": -0.407,
            "relativeStrength5dPct": 1.198,
            "relativeStrength20dPct": 8.683,
            "avgDollarVolume10d": 1706513855,
            "maxSelectedCorrelation": 0.626
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.651,
            "participation": -0.313,
            "volatility": -0.695,
            "gap": 0.335,
            "correlation": 0.626,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 43,
          "previousRank": 92,
          "rankChange": 49,
          "rankChangeLabel": "+49",
          "status": "WATCH",
          "quantScore": 0.132,
          "metrics": {
            "momentum5d": -0.774,
            "momentum20d": -0.063,
            "realizedVol10dAnnualized": 6.05,
            "volumeRatio": 0.981,
            "atrPct": 0.515,
            "gapPct": 0.224,
            "relativeStrength5dPct": 3.015,
            "relativeStrength20dPct": 4.882,
            "avgDollarVolume10d": 2511363922,
            "maxSelectedCorrelation": 0.566
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.762,
            "participation": 1.123,
            "volatility": -1.372,
            "gap": 0.234,
            "correlation": 0.566,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 44,
          "previousRank": 89,
          "rankChange": 45,
          "rankChangeLabel": "+45",
          "status": "WATCH",
          "quantScore": 0.129,
          "metrics": {
            "momentum5d": -3.719,
            "momentum20d": 0.53,
            "realizedVol10dAnnualized": 34.7,
            "volumeRatio": 0.589,
            "atrPct": 2.93,
            "gapPct": -0.875,
            "relativeStrength5dPct": 0.07,
            "relativeStrength20dPct": 5.476,
            "avgDollarVolume10d": 1280457870,
            "maxSelectedCorrelation": 0.682
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.413,
            "participation": -0.199,
            "volatility": -0.386,
            "gap": 0.757,
            "correlation": 0.682,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 45,
          "previousRank": 79,
          "rankChange": 34,
          "rankChangeLabel": "+34",
          "status": "WATCH",
          "quantScore": 0.128,
          "metrics": {
            "momentum5d": -3.683,
            "momentum20d": -15.161,
            "realizedVol10dAnnualized": 35.09,
            "volumeRatio": 1.116,
            "atrPct": 4.218,
            "gapPct": -0.357,
            "relativeStrength5dPct": 0.107,
            "relativeStrength20dPct": -10.216,
            "avgDollarVolume10d": 563131817,
            "maxSelectedCorrelation": 0.621
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.06,
            "participation": 1.576,
            "volatility": -0.035,
            "gap": 0.289,
            "correlation": 0.621,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 46,
          "previousRank": 62,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.102,
          "metrics": {
            "momentum5d": -3.043,
            "momentum20d": 0.007,
            "realizedVol10dAnnualized": 20.77,
            "volumeRatio": 0.965,
            "atrPct": 1.515,
            "gapPct": -0.25,
            "relativeStrength5dPct": 0.747,
            "relativeStrength20dPct": 4.952,
            "avgDollarVolume10d": 2379676065,
            "maxSelectedCorrelation": 0.717
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.481,
            "participation": 1.068,
            "volatility": -0.93,
            "gap": 0.193,
            "correlation": 0.717,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 47,
          "previousRank": 74,
          "rankChange": 27,
          "rankChangeLabel": "+27",
          "status": "WATCH",
          "quantScore": 0.097,
          "metrics": {
            "momentum5d": -2.318,
            "momentum20d": -0.854,
            "realizedVol10dAnnualized": 15.54,
            "volumeRatio": 0.695,
            "atrPct": 2.461,
            "gapPct": -0.089,
            "relativeStrength5dPct": 1.471,
            "relativeStrength20dPct": 4.091,
            "avgDollarVolume10d": 800237265,
            "maxSelectedCorrelation": 0.634
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.545,
            "participation": 0.158,
            "volatility": -0.737,
            "gap": 0.048,
            "correlation": 0.634,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 48,
          "previousRank": 73,
          "rankChange": 25,
          "rankChangeLabel": "+25",
          "status": "REJECT",
          "quantScore": 0.081,
          "metrics": {
            "momentum5d": -3.556,
            "momentum20d": -1.145,
            "realizedVol10dAnnualized": 30.72,
            "volumeRatio": 0.827,
            "atrPct": 2.157,
            "gapPct": -0.097,
            "relativeStrength5dPct": 0.233,
            "relativeStrength20dPct": 3.8,
            "avgDollarVolume10d": 1407561863,
            "maxSelectedCorrelation": 0.828
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.382,
            "participation": 0.603,
            "volatility": -0.641,
            "gap": 0.055,
            "correlation": 0.828,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 49,
          "previousRank": 22,
          "rankChange": -27,
          "rankChangeLabel": "-27",
          "status": "WATCH",
          "quantScore": 0.079,
          "metrics": {
            "momentum5d": -5.606,
            "momentum20d": 4.946,
            "realizedVol10dAnnualized": 34.07,
            "volumeRatio": 0.485,
            "atrPct": 3.441,
            "gapPct": -0.918,
            "relativeStrength5dPct": -1.817,
            "relativeStrength20dPct": 9.892,
            "avgDollarVolume10d": 589205659,
            "maxSelectedCorrelation": 0.71
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.312,
            "participation": -0.55,
            "volatility": -0.256,
            "gap": 0.796,
            "correlation": 0.71,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 50,
          "previousRank": 7,
          "rankChange": -43,
          "rankChangeLabel": "-43",
          "status": "WATCH",
          "quantScore": 0.074,
          "metrics": {
            "momentum5d": -2.397,
            "momentum20d": -7.807,
            "realizedVol10dAnnualized": 25.65,
            "volumeRatio": 0.612,
            "atrPct": 3.421,
            "gapPct": -0.401,
            "relativeStrength5dPct": 1.392,
            "relativeStrength20dPct": -2.862,
            "avgDollarVolume10d": 987122956,
            "maxSelectedCorrelation": 0.561
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.324,
            "participation": -0.121,
            "volatility": -0.36,
            "gap": 0.33,
            "correlation": 0.561,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 51,
          "previousRank": 33,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": 0.066,
          "metrics": {
            "momentum5d": -3.582,
            "momentum20d": 1.454,
            "realizedVol10dAnnualized": 19.88,
            "volumeRatio": 0.785,
            "atrPct": 1.874,
            "gapPct": -0.508,
            "relativeStrength5dPct": 0.208,
            "relativeStrength20dPct": 6.399,
            "avgDollarVolume10d": 2089983609,
            "maxSelectedCorrelation": 0.567
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.458,
            "participation": 0.46,
            "volatility": -0.844,
            "gap": 0.426,
            "correlation": 0.567,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 52,
          "previousRank": 82,
          "rankChange": 30,
          "rankChangeLabel": "+30",
          "status": "WATCH",
          "quantScore": 0.063,
          "metrics": {
            "momentum5d": -2.502,
            "momentum20d": -4.471,
            "realizedVol10dAnnualized": 27.61,
            "volumeRatio": 0.412,
            "atrPct": 3.525,
            "gapPct": -0.223,
            "relativeStrength5dPct": 1.287,
            "relativeStrength20dPct": 0.474,
            "avgDollarVolume10d": 13446907369,
            "maxSelectedCorrelation": 0.731
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.412,
            "participation": -0.796,
            "volatility": -0.309,
            "gap": 0.169,
            "correlation": 0.731,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 53,
          "previousRank": 37,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": 0.062,
          "metrics": {
            "momentum5d": -3.432,
            "momentum20d": -8.75,
            "realizedVol10dAnnualized": 28.11,
            "volumeRatio": 0.795,
            "atrPct": 2.786,
            "gapPct": -1.633,
            "relativeStrength5dPct": 0.357,
            "relativeStrength20dPct": -3.805,
            "avgDollarVolume10d": 1676594758,
            "maxSelectedCorrelation": 0.519
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.166,
            "participation": 0.496,
            "volatility": -0.502,
            "gap": 1.441,
            "correlation": 0.519,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 54,
          "previousRank": 30,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "WATCH",
          "quantScore": 0.054,
          "metrics": {
            "momentum5d": -2.788,
            "momentum20d": -0.804,
            "realizedVol10dAnnualized": 16.47,
            "volumeRatio": 0.512,
            "atrPct": 2.554,
            "gapPct": -0.963,
            "relativeStrength5dPct": 1.001,
            "relativeStrength20dPct": 4.141,
            "avgDollarVolume10d": 1299238150,
            "maxSelectedCorrelation": 0.473
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.488,
            "participation": -0.459,
            "volatility": -0.701,
            "gap": 0.837,
            "correlation": 0.473,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 55,
          "previousRank": 24,
          "rankChange": -31,
          "rankChangeLabel": "-31",
          "status": "REJECT",
          "quantScore": 0.041,
          "metrics": {
            "momentum5d": -8.673,
            "momentum20d": -11.088,
            "realizedVol10dAnnualized": 84.93,
            "volumeRatio": 0.363,
            "atrPct": 7.004,
            "gapPct": 1.163,
            "relativeStrength5dPct": -4.883,
            "relativeStrength20dPct": -6.143,
            "avgDollarVolume10d": 704640536,
            "maxSelectedCorrelation": 0.91
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.559,
            "participation": -0.958,
            "volatility": 1.299,
            "gap": 1.082,
            "correlation": 0.91,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 56,
          "previousRank": 41,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": 0.037,
          "metrics": {
            "momentum5d": -5.131,
            "momentum20d": 0.238,
            "realizedVol10dAnnualized": 37.3,
            "volumeRatio": 0.572,
            "atrPct": 3.234,
            "gapPct": -0.463,
            "relativeStrength5dPct": -1.341,
            "relativeStrength20dPct": 5.184,
            "avgDollarVolume10d": 1020385039,
            "maxSelectedCorrelation": 0.761
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.228,
            "participation": -0.257,
            "volatility": -0.274,
            "gap": 0.385,
            "correlation": 0.761,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 57,
          "previousRank": 97,
          "rankChange": 40,
          "rankChangeLabel": "+40",
          "status": "WATCH",
          "quantScore": 0.029,
          "metrics": {
            "momentum5d": -0.873,
            "momentum20d": -0.202,
            "realizedVol10dAnnualized": 4.1,
            "volumeRatio": 0.777,
            "atrPct": 0.399,
            "gapPct": 0.039,
            "relativeStrength5dPct": 2.917,
            "relativeStrength20dPct": 4.744,
            "avgDollarVolume10d": 2826341754,
            "maxSelectedCorrelation": 0.75
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.746,
            "participation": 0.435,
            "volatility": -1.426,
            "gap": 0.068,
            "correlation": 0.75,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 58,
          "previousRank": 55,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.028,
          "metrics": {
            "momentum5d": -3.444,
            "momentum20d": -3.386,
            "realizedVol10dAnnualized": 24.26,
            "volumeRatio": 0.69,
            "atrPct": 2.505,
            "gapPct": -0.485,
            "relativeStrength5dPct": 0.346,
            "relativeStrength20dPct": 1.559,
            "avgDollarVolume10d": 1435875389,
            "maxSelectedCorrelation": 0.686
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.328,
            "participation": 0.142,
            "volatility": -0.623,
            "gap": 0.406,
            "correlation": 0.686,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 59,
          "previousRank": 90,
          "rankChange": 31,
          "rankChangeLabel": "+31",
          "status": "WATCH",
          "quantScore": 0.015,
          "metrics": {
            "momentum5d": -2.116,
            "momentum20d": -11.349,
            "realizedVol10dAnnualized": 39.68,
            "volumeRatio": 0.43,
            "atrPct": 3.371,
            "gapPct": 0.257,
            "relativeStrength5dPct": 1.673,
            "relativeStrength20dPct": -6.403,
            "avgDollarVolume10d": 9097514450,
            "maxSelectedCorrelation": 0.529
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.251,
            "participation": -0.733,
            "volatility": -0.209,
            "gap": 0.264,
            "correlation": 0.529,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 60,
          "previousRank": 58,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "REJECT",
          "quantScore": 0.007,
          "metrics": {
            "momentum5d": -9.607,
            "momentum20d": -15.72,
            "realizedVol10dAnnualized": 85.91,
            "volumeRatio": 0.602,
            "atrPct": 7.06,
            "gapPct": 1.605,
            "relativeStrength5dPct": -5.818,
            "relativeStrength20dPct": -10.774,
            "avgDollarVolume10d": 6447216276,
            "maxSelectedCorrelation": 0.878
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.816,
            "participation": -0.153,
            "volatility": 1.326,
            "gap": 1.481,
            "correlation": 0.878,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 61,
          "previousRank": 46,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": 0.004,
          "metrics": {
            "momentum5d": -5.031,
            "momentum20d": -3.714,
            "realizedVol10dAnnualized": 31.8,
            "volumeRatio": 0.753,
            "atrPct": 3.105,
            "gapPct": -0.367,
            "relativeStrength5dPct": -1.242,
            "relativeStrength20dPct": 1.232,
            "avgDollarVolume10d": 1032115035,
            "maxSelectedCorrelation": 0.79
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.12,
            "participation": 0.355,
            "volatility": -0.373,
            "gap": 0.299,
            "correlation": 0.79,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 62,
          "previousRank": 85,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "REJECT",
          "quantScore": -0.007,
          "metrics": {
            "momentum5d": -4.532,
            "momentum20d": -8.157,
            "realizedVol10dAnnualized": 41.91,
            "volumeRatio": 0.717,
            "atrPct": 2.99,
            "gapPct": 0.627,
            "relativeStrength5dPct": -0.743,
            "relativeStrength20dPct": -3.212,
            "avgDollarVolume10d": 36241614581,
            "maxSelectedCorrelation": 0.868
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.047,
            "participation": 0.231,
            "volatility": -0.285,
            "gap": 0.598,
            "correlation": 0.868,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 63,
          "previousRank": 40,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": -0.013,
          "metrics": {
            "momentum5d": -5.161,
            "momentum20d": -3.301,
            "realizedVol10dAnnualized": 29.67,
            "volumeRatio": 0.655,
            "atrPct": 3.373,
            "gapPct": -0.449,
            "relativeStrength5dPct": -1.371,
            "relativeStrength20dPct": 1.644,
            "avgDollarVolume10d": 463503489,
            "maxSelectedCorrelation": 0.516
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.116,
            "participation": 0.024,
            "volatility": -0.326,
            "gap": 0.373,
            "correlation": 0.516,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 64,
          "previousRank": 95,
          "rankChange": 31,
          "rankChangeLabel": "+31",
          "status": "WATCH",
          "quantScore": -0.021,
          "metrics": {
            "momentum5d": -4.413,
            "momentum20d": -7.728,
            "realizedVol10dAnnualized": 38.04,
            "volumeRatio": 0.915,
            "atrPct": 2.184,
            "gapPct": -0.316,
            "relativeStrength5dPct": -0.623,
            "relativeStrength20dPct": -2.783,
            "avgDollarVolume10d": 474834115,
            "maxSelectedCorrelation": 0.768
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.075,
            "participation": 0.899,
            "volatility": -0.548,
            "gap": 0.252,
            "correlation": 0.768,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 65,
          "previousRank": 81,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.022,
          "metrics": {
            "momentum5d": -4.396,
            "momentum20d": -1.862,
            "realizedVol10dAnnualized": 31.58,
            "volumeRatio": 0.688,
            "atrPct": 2.158,
            "gapPct": -0.335,
            "relativeStrength5dPct": -0.607,
            "relativeStrength20dPct": 3.083,
            "avgDollarVolume10d": 6899181542,
            "maxSelectedCorrelation": 0.741
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.255,
            "participation": 0.135,
            "volatility": -0.63,
            "gap": 0.269,
            "correlation": 0.741,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 66,
          "previousRank": 69,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.027,
          "metrics": {
            "momentum5d": -4.275,
            "momentum20d": -4.26,
            "realizedVol10dAnnualized": 22.54,
            "volumeRatio": 0.956,
            "atrPct": 1.755,
            "gapPct": -0.349,
            "relativeStrength5dPct": -0.486,
            "relativeStrength20dPct": 0.685,
            "avgDollarVolume10d": 1988653841,
            "maxSelectedCorrelation": 0.742
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.198,
            "participation": 1.038,
            "volatility": -0.845,
            "gap": 0.282,
            "correlation": 0.742,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 67,
          "previousRank": 83,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "REJECT",
          "quantScore": -0.03,
          "metrics": {
            "momentum5d": -6.317,
            "momentum20d": -11.915,
            "realizedVol10dAnnualized": 50.71,
            "volumeRatio": 0.805,
            "atrPct": 4.119,
            "gapPct": 0.858,
            "relativeStrength5dPct": -2.528,
            "relativeStrength20dPct": -6.97,
            "avgDollarVolume10d": 2535575411,
            "maxSelectedCorrelation": 0.869
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.29,
            "participation": 0.529,
            "volatility": 0.122,
            "gap": 0.806,
            "correlation": 0.869,
            "regimeFit": null
          }
        },
        {
          "symbol": "HPE",
          "rank": 68,
          "previousRank": 18,
          "rankChange": -50,
          "rankChangeLabel": "-50",
          "status": "REJECT",
          "quantScore": -0.031,
          "metrics": {
            "momentum5d": -9.313,
            "momentum20d": -18.756,
            "realizedVol10dAnnualized": 75.57,
            "volumeRatio": 0.443,
            "atrPct": 8.239,
            "gapPct": 1.323,
            "relativeStrength5dPct": -5.524,
            "relativeStrength20dPct": -13.81,
            "avgDollarVolume10d": 662910568,
            "maxSelectedCorrelation": 0.901
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.872,
            "participation": -0.69,
            "volatility": 1.522,
            "gap": 1.227,
            "correlation": 0.901,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 69,
          "previousRank": 78,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "REJECT",
          "quantScore": -0.044,
          "metrics": {
            "momentum5d": -7.483,
            "momentum20d": -12.806,
            "realizedVol10dAnnualized": 56.2,
            "volumeRatio": 0.529,
            "atrPct": 5.989,
            "gapPct": 0.938,
            "relativeStrength5dPct": -3.693,
            "relativeStrength20dPct": -7.861,
            "avgDollarVolume10d": 1096208039,
            "maxSelectedCorrelation": 0.861
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.463,
            "participation": -0.401,
            "volatility": 0.689,
            "gap": 0.879,
            "correlation": 0.861,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 70,
          "previousRank": 44,
          "rankChange": -26,
          "rankChangeLabel": "-26",
          "status": "WATCH",
          "quantScore": -0.058,
          "metrics": {
            "momentum5d": -3.59,
            "momentum20d": -9.634,
            "realizedVol10dAnnualized": 26.99,
            "volumeRatio": 0.579,
            "atrPct": 3.049,
            "gapPct": -0.771,
            "relativeStrength5dPct": 0.199,
            "relativeStrength20dPct": -4.689,
            "avgDollarVolume10d": 2153933523,
            "maxSelectedCorrelation": 0.366
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.12,
            "participation": -0.231,
            "volatility": -0.445,
            "gap": 0.664,
            "correlation": 0.366,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 71,
          "previousRank": 9,
          "rankChange": -62,
          "rankChangeLabel": "-62",
          "status": "WATCH",
          "quantScore": -0.071,
          "metrics": {
            "momentum5d": -4.308,
            "momentum20d": -11.438,
            "realizedVol10dAnnualized": 30.87,
            "volumeRatio": 0.626,
            "atrPct": 3.629,
            "gapPct": -0.552,
            "relativeStrength5dPct": -0.518,
            "relativeStrength20dPct": -6.493,
            "avgDollarVolume10d": 832619154,
            "maxSelectedCorrelation": 0.709
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.025,
            "participation": -0.073,
            "volatility": -0.243,
            "gap": 0.466,
            "correlation": 0.709,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 72,
          "previousRank": 5,
          "rankChange": -67,
          "rankChangeLabel": "-67",
          "status": "WATCH",
          "quantScore": -0.071,
          "metrics": {
            "momentum5d": -6.085,
            "momentum20d": -1.627,
            "realizedVol10dAnnualized": 43.48,
            "volumeRatio": 0.427,
            "atrPct": 3.492,
            "gapPct": 0.283,
            "relativeStrength5dPct": -2.296,
            "relativeStrength20dPct": 3.318,
            "avgDollarVolume10d": 1890095605,
            "maxSelectedCorrelation": 0.78
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.052,
            "participation": -0.745,
            "volatility": -0.132,
            "gap": 0.287,
            "correlation": 0.78,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 73,
          "previousRank": 68,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.072,
          "metrics": {
            "momentum5d": -4.781,
            "momentum20d": -1.454,
            "realizedVol10dAnnualized": 19.05,
            "volumeRatio": 0.626,
            "atrPct": 2.168,
            "gapPct": -1.062,
            "relativeStrength5dPct": -0.992,
            "relativeStrength20dPct": 3.491,
            "avgDollarVolume10d": 574847015,
            "maxSelectedCorrelation": 0.729
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.22,
            "participation": -0.072,
            "volatility": -0.775,
            "gap": 0.926,
            "correlation": 0.729,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 74,
          "previousRank": 77,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.074,
          "metrics": {
            "momentum5d": -5.25,
            "momentum20d": -2.756,
            "realizedVol10dAnnualized": 24.28,
            "volumeRatio": 0.471,
            "atrPct": 3.784,
            "gapPct": -0.077,
            "relativeStrength5dPct": -1.461,
            "relativeStrength20dPct": 2.19,
            "avgDollarVolume10d": 897072965,
            "maxSelectedCorrelation": 0.697
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.122,
            "participation": -0.596,
            "volatility": -0.279,
            "gap": 0.037,
            "correlation": 0.697,
            "regimeFit": null
          }
        },
        {
          "symbol": "SHOP",
          "rank": 75,
          "previousRank": 48,
          "rankChange": -27,
          "rankChangeLabel": "-27",
          "status": "WATCH",
          "quantScore": -0.08,
          "metrics": {
            "momentum5d": -5.594,
            "momentum20d": -18.774,
            "realizedVol10dAnnualized": 45.92,
            "volumeRatio": 0.43,
            "atrPct": 6.505,
            "gapPct": 0.106,
            "relativeStrength5dPct": -1.805,
            "relativeStrength20dPct": -13.829,
            "avgDollarVolume10d": 854764197,
            "maxSelectedCorrelation": 0.647
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.409,
            "participation": -0.735,
            "volatility": 0.707,
            "gap": 0.128,
            "correlation": 0.647,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 76,
          "previousRank": 39,
          "rankChange": -37,
          "rankChangeLabel": "-37",
          "status": "REJECT",
          "quantScore": -0.083,
          "metrics": {
            "momentum5d": -11.68,
            "momentum20d": -20.922,
            "realizedVol10dAnnualized": 116.41,
            "volumeRatio": 0.402,
            "atrPct": 8.374,
            "gapPct": 1.443,
            "relativeStrength5dPct": -7.89,
            "relativeStrength20dPct": -15.977,
            "avgDollarVolume10d": 2833518396,
            "maxSelectedCorrelation": 0.827
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.233,
            "participation": -0.827,
            "volatility": 2.037,
            "gap": 1.334,
            "correlation": 0.827,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 77,
          "previousRank": 49,
          "rankChange": -28,
          "rankChangeLabel": "-28",
          "status": "REJECT",
          "quantScore": -0.097,
          "metrics": {
            "momentum5d": -11.496,
            "momentum20d": -11.896,
            "realizedVol10dAnnualized": 98.49,
            "volumeRatio": 0.267,
            "atrPct": 7.182,
            "gapPct": 2.055,
            "relativeStrength5dPct": -7.707,
            "relativeStrength20dPct": -6.95,
            "avgDollarVolume10d": 2086678173,
            "maxSelectedCorrelation": 0.809
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.936,
            "participation": -1.284,
            "volatility": 1.506,
            "gap": 1.886,
            "correlation": 0.809,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 78,
          "previousRank": 42,
          "rankChange": -36,
          "rankChangeLabel": "-36",
          "status": "WATCH",
          "quantScore": -0.106,
          "metrics": {
            "momentum5d": -5.374,
            "momentum20d": -3.08,
            "realizedVol10dAnnualized": 28.42,
            "volumeRatio": 0.571,
            "atrPct": 2.599,
            "gapPct": -0.739,
            "relativeStrength5dPct": -1.585,
            "relativeStrength20dPct": 1.866,
            "avgDollarVolume10d": 2088862601,
            "maxSelectedCorrelation": 0.658
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.096,
            "participation": -0.258,
            "volatility": -0.549,
            "gap": 0.635,
            "correlation": 0.658,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 79,
          "previousRank": 52,
          "rankChange": -27,
          "rankChangeLabel": "-27",
          "status": "REJECT",
          "quantScore": -0.108,
          "metrics": {
            "momentum5d": -11.861,
            "momentum20d": -14.016,
            "realizedVol10dAnnualized": 102.54,
            "volumeRatio": 0.268,
            "atrPct": 7.84,
            "gapPct": 1.644,
            "relativeStrength5dPct": -8.071,
            "relativeStrength20dPct": -9.07,
            "avgDollarVolume10d": 3085385004,
            "maxSelectedCorrelation": 0.817
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.046,
            "participation": -1.279,
            "volatility": 1.731,
            "gap": 1.516,
            "correlation": 0.817,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 80,
          "previousRank": 70,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.108,
          "metrics": {
            "momentum5d": -4.635,
            "momentum20d": -6.725,
            "realizedVol10dAnnualized": 17.31,
            "volumeRatio": 0.571,
            "atrPct": 2.786,
            "gapPct": -1.44,
            "relativeStrength5dPct": -0.846,
            "relativeStrength20dPct": -1.78,
            "avgDollarVolume10d": 982086409,
            "maxSelectedCorrelation": 0.587
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.078,
            "participation": -0.26,
            "volatility": -0.629,
            "gap": 1.267,
            "correlation": 0.587,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 81,
          "previousRank": 64,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "REJECT",
          "quantScore": -0.11,
          "metrics": {
            "momentum5d": -3.789,
            "momentum20d": -4.945,
            "realizedVol10dAnnualized": 27.43,
            "volumeRatio": 0.565,
            "atrPct": 1.959,
            "gapPct": 0.127,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 40989895500,
            "maxSelectedCorrelation": 0.845
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.237,
            "participation": -0.279,
            "volatility": -0.733,
            "gap": 0.147,
            "correlation": 0.845,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 82,
          "previousRank": 8,
          "rankChange": -74,
          "rankChangeLabel": "-74",
          "status": "WATCH",
          "quantScore": -0.111,
          "metrics": {
            "momentum5d": -13.98,
            "momentum20d": -22.118,
            "realizedVol10dAnnualized": 120.33,
            "volumeRatio": 0.646,
            "atrPct": 9.378,
            "gapPct": 0.853,
            "relativeStrength5dPct": -10.191,
            "relativeStrength20dPct": -17.172,
            "avgDollarVolume10d": 24800016410,
            "maxSelectedCorrelation": 0.768
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.556,
            "participation": -0.006,
            "volatility": 2.353,
            "gap": 0.803,
            "correlation": 0.768,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 83,
          "previousRank": 60,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": -0.121,
          "metrics": {
            "momentum5d": -5.315,
            "momentum20d": -1.168,
            "realizedVol10dAnnualized": 22.43,
            "volumeRatio": 0.452,
            "atrPct": 2.6,
            "gapPct": -0.955,
            "relativeStrength5dPct": -1.525,
            "relativeStrength20dPct": 3.777,
            "avgDollarVolume10d": 796612984,
            "maxSelectedCorrelation": 0.601
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.162,
            "participation": -0.66,
            "volatility": -0.619,
            "gap": 0.83,
            "correlation": 0.601,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 84,
          "previousRank": 107,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": -0.124,
          "metrics": {
            "momentum5d": -9.163,
            "momentum20d": -14.553,
            "realizedVol10dAnnualized": 59.67,
            "volumeRatio": 0.888,
            "atrPct": 5.035,
            "gapPct": 1.115,
            "relativeStrength5dPct": -5.373,
            "relativeStrength20dPct": -9.607,
            "avgDollarVolume10d": 525225894,
            "maxSelectedCorrelation": 0.779
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.725,
            "participation": 0.806,
            "volatility": 0.473,
            "gap": 1.039,
            "correlation": 0.779,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 85,
          "previousRank": 26,
          "rankChange": -59,
          "rankChangeLabel": "-59",
          "status": "WATCH",
          "quantScore": -0.125,
          "metrics": {
            "momentum5d": -9.801,
            "momentum20d": -9.359,
            "realizedVol10dAnnualized": 64.71,
            "volumeRatio": 0.386,
            "atrPct": 6.874,
            "gapPct": 0.216,
            "relativeStrength5dPct": -6.011,
            "relativeStrength20dPct": -4.414,
            "avgDollarVolume10d": 2341430104,
            "maxSelectedCorrelation": 0.713
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.647,
            "participation": -0.883,
            "volatility": 1.027,
            "gap": 0.227,
            "correlation": 0.713,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 86,
          "previousRank": 80,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.136,
          "metrics": {
            "momentum5d": -3.295,
            "momentum20d": -16.604,
            "realizedVol10dAnnualized": 29.72,
            "volumeRatio": 0.493,
            "atrPct": 3.348,
            "gapPct": 0.98,
            "relativeStrength5dPct": 0.494,
            "relativeStrength20dPct": -11.659,
            "avgDollarVolume10d": 9352146891,
            "maxSelectedCorrelation": 0.739
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.056,
            "participation": -0.52,
            "volatility": -0.332,
            "gap": 0.916,
            "correlation": 0.739,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 87,
          "previousRank": 102,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.148,
          "metrics": {
            "momentum5d": -6.966,
            "momentum20d": 1.798,
            "realizedVol10dAnnualized": 25.61,
            "volumeRatio": 0.448,
            "atrPct": 3.026,
            "gapPct": -0.784,
            "relativeStrength5dPct": -3.176,
            "relativeStrength20dPct": 6.743,
            "avgDollarVolume10d": 737769415,
            "maxSelectedCorrelation": 0.589
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.046,
            "participation": -0.673,
            "volatility": -0.467,
            "gap": 0.675,
            "correlation": 0.589,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 88,
          "previousRank": 111,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": -0.154,
          "metrics": {
            "momentum5d": -6.448,
            "momentum20d": -9.539,
            "realizedVol10dAnnualized": 24.61,
            "volumeRatio": 0.942,
            "atrPct": 2.304,
            "gapPct": -1.75,
            "relativeStrength5dPct": -2.658,
            "relativeStrength20dPct": -4.594,
            "avgDollarVolume10d": 3216339283,
            "maxSelectedCorrelation": 0.29
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.234,
            "participation": 0.989,
            "volatility": -0.673,
            "gap": 1.547,
            "correlation": 0.29,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 89,
          "previousRank": 101,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "REJECT",
          "quantScore": -0.164,
          "metrics": {
            "momentum5d": -4.201,
            "momentum20d": -3.029,
            "realizedVol10dAnnualized": 11.71,
            "volumeRatio": 0.555,
            "atrPct": 1.538,
            "gapPct": -0.973,
            "relativeStrength5dPct": -0.412,
            "relativeStrength20dPct": 1.916,
            "avgDollarVolume10d": 680688145,
            "maxSelectedCorrelation": 0.823
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.244,
            "participation": -0.312,
            "volatility": -1.03,
            "gap": 0.846,
            "correlation": 0.823,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 90,
          "previousRank": 72,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": -0.177,
          "metrics": {
            "momentum5d": -6.553,
            "momentum20d": -7.259,
            "realizedVol10dAnnualized": 23.79,
            "volumeRatio": 0.648,
            "atrPct": 2.992,
            "gapPct": -1.59,
            "relativeStrength5dPct": -2.764,
            "relativeStrength20dPct": -2.314,
            "avgDollarVolume10d": 986370266,
            "maxSelectedCorrelation": 0.347
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.178,
            "participation": 0.002,
            "volatility": -0.497,
            "gap": 1.403,
            "correlation": 0.347,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 91,
          "previousRank": 96,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.182,
          "metrics": {
            "momentum5d": -3.477,
            "momentum20d": -3.356,
            "realizedVol10dAnnualized": 19.25,
            "volumeRatio": 0.279,
            "atrPct": 1.666,
            "gapPct": -0.831,
            "relativeStrength5dPct": 0.312,
            "relativeStrength20dPct": 1.589,
            "avgDollarVolume10d": 71445076,
            "maxSelectedCorrelation": 0.582
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.325,
            "participation": -1.241,
            "volatility": -0.907,
            "gap": 0.717,
            "correlation": 0.582,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 92,
          "previousRank": 88,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "REJECT",
          "quantScore": -0.182,
          "metrics": {
            "momentum5d": -9.124,
            "momentum20d": -18.655,
            "realizedVol10dAnnualized": 64.59,
            "volumeRatio": 0.571,
            "atrPct": 6.261,
            "gapPct": 1.079,
            "relativeStrength5dPct": -5.335,
            "relativeStrength20dPct": -13.71,
            "avgDollarVolume10d": 3224128687,
            "maxSelectedCorrelation": 0.847
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.845,
            "participation": -0.26,
            "volatility": 0.861,
            "gap": 1.007,
            "correlation": 0.847,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 93,
          "previousRank": 10,
          "rankChange": -83,
          "rankChangeLabel": "-83",
          "status": "WATCH",
          "quantScore": -0.185,
          "metrics": {
            "momentum5d": -12.796,
            "momentum20d": -16.19,
            "realizedVol10dAnnualized": 55.61,
            "volumeRatio": 1.899,
            "atrPct": 3.972,
            "gapPct": -0.652,
            "relativeStrength5dPct": -9.006,
            "relativeStrength20dPct": -11.245,
            "avgDollarVolume10d": 1940418399,
            "maxSelectedCorrelation": 0.457
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.228,
            "participation": 4.211,
            "volatility": 0.14,
            "gap": 0.556,
            "correlation": 0.457,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 94,
          "previousRank": 84,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "REJECT",
          "quantScore": -0.186,
          "metrics": {
            "momentum5d": -10.021,
            "momentum20d": -16.509,
            "realizedVol10dAnnualized": 74.01,
            "volumeRatio": 0.454,
            "atrPct": 6.291,
            "gapPct": 1.652,
            "relativeStrength5dPct": -6.231,
            "relativeStrength20dPct": -11.564,
            "avgDollarVolume10d": 6225615485,
            "maxSelectedCorrelation": 0.841
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.892,
            "participation": -0.652,
            "volatility": 0.979,
            "gap": 1.523,
            "correlation": 0.841,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 95,
          "previousRank": 12,
          "rankChange": -83,
          "rankChangeLabel": "-83",
          "status": "WATCH",
          "quantScore": -0.188,
          "metrics": {
            "momentum5d": -10.905,
            "momentum20d": -12.78,
            "realizedVol10dAnnualized": 66.18,
            "volumeRatio": 0.349,
            "atrPct": 7.313,
            "gapPct": 1.13,
            "relativeStrength5dPct": -7.116,
            "relativeStrength20dPct": -7.835,
            "avgDollarVolume10d": 3367032140,
            "maxSelectedCorrelation": 0.648
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.889,
            "participation": -1.008,
            "volatility": 1.162,
            "gap": 1.053,
            "correlation": 0.648,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 96,
          "previousRank": 100,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.2,
          "metrics": {
            "momentum5d": -7.417,
            "momentum20d": -23.2,
            "realizedVol10dAnnualized": 58.57,
            "volumeRatio": 0.783,
            "atrPct": 4.979,
            "gapPct": 0.957,
            "relativeStrength5dPct": -3.628,
            "relativeStrength20dPct": -18.254,
            "avgDollarVolume10d": 2017480644,
            "maxSelectedCorrelation": 0.775
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.771,
            "participation": 0.455,
            "volatility": 0.445,
            "gap": 0.896,
            "correlation": 0.775,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWG",
          "rank": 97,
          "previousRank": 93,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.203,
          "metrics": {
            "momentum5d": -4.533,
            "momentum20d": -0.869,
            "realizedVol10dAnnualized": 25.3,
            "volumeRatio": 0.166,
            "atrPct": 1.957,
            "gapPct": -0.912,
            "relativeStrength5dPct": -0.744,
            "relativeStrength20dPct": 4.076,
            "avgDollarVolume10d": 84375076,
            "maxSelectedCorrelation": 0.55
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.269,
            "participation": -1.624,
            "volatility": -0.758,
            "gap": 0.79,
            "correlation": 0.55,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 98,
          "previousRank": 43,
          "rankChange": -55,
          "rankChangeLabel": "-55",
          "status": "WATCH",
          "quantScore": -0.23,
          "metrics": {
            "momentum5d": -5.879,
            "momentum20d": -14.375,
            "realizedVol10dAnnualized": 31.4,
            "volumeRatio": 0.505,
            "atrPct": 3.68,
            "gapPct": -1.274,
            "relativeStrength5dPct": -2.089,
            "relativeStrength20dPct": -9.43,
            "avgDollarVolume10d": 656503602,
            "maxSelectedCorrelation": 0.563
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.31,
            "participation": -0.481,
            "volatility": -0.223,
            "gap": 1.117,
            "correlation": 0.563,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 99,
          "previousRank": 110,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.266,
          "metrics": {
            "momentum5d": -12.001,
            "momentum20d": -4.143,
            "realizedVol10dAnnualized": 45.53,
            "volumeRatio": 0.531,
            "atrPct": 6.16,
            "gapPct": -0.253,
            "relativeStrength5dPct": -8.212,
            "relativeStrength20dPct": 0.802,
            "avgDollarVolume10d": 313041838,
            "maxSelectedCorrelation": 0.634
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.763,
            "participation": -0.395,
            "volatility": 0.61,
            "gap": 0.195,
            "correlation": 0.634,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 100,
          "previousRank": 91,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.269,
          "metrics": {
            "momentum5d": -6.73,
            "momentum20d": -8.615,
            "realizedVol10dAnnualized": 40.31,
            "volumeRatio": 0.573,
            "atrPct": 2.709,
            "gapPct": 0.017,
            "relativeStrength5dPct": -2.94,
            "relativeStrength20dPct": -3.67,
            "avgDollarVolume10d": 1830473740,
            "maxSelectedCorrelation": 0.733
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.241,
            "participation": -0.252,
            "volatility": -0.38,
            "gap": 0.048,
            "correlation": 0.733,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 101,
          "previousRank": 61,
          "rankChange": -40,
          "rankChangeLabel": "-40",
          "status": "WATCH",
          "quantScore": -0.273,
          "metrics": {
            "momentum5d": -16.297,
            "momentum20d": -32.234,
            "realizedVol10dAnnualized": 112.63,
            "volumeRatio": 0.506,
            "atrPct": 11.822,
            "gapPct": 1.803,
            "relativeStrength5dPct": -12.508,
            "relativeStrength20dPct": -27.289,
            "avgDollarVolume10d": 2629375676,
            "maxSelectedCorrelation": 0.78
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.153,
            "participation": -0.478,
            "volatility": 2.92,
            "gap": 1.659,
            "correlation": 0.78,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 102,
          "previousRank": 51,
          "rankChange": -51,
          "rankChangeLabel": "-51",
          "status": "REJECT",
          "quantScore": -0.305,
          "metrics": {
            "momentum5d": -15.142,
            "momentum20d": -40.421,
            "realizedVol10dAnnualized": 120.28,
            "volumeRatio": 0.51,
            "atrPct": 11.564,
            "gapPct": 2.198,
            "relativeStrength5dPct": -11.353,
            "relativeStrength20dPct": -35.476,
            "avgDollarVolume10d": 4316011087,
            "maxSelectedCorrelation": 0.804
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -2.258,
            "participation": -0.464,
            "volatility": 2.941,
            "gap": 2.016,
            "correlation": 0.804,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 103,
          "previousRank": 38,
          "rankChange": -65,
          "rankChangeLabel": "-65",
          "status": "WATCH",
          "quantScore": -0.329,
          "metrics": {
            "momentum5d": -7.352,
            "momentum20d": -4.94,
            "realizedVol10dAnnualized": 27.91,
            "volumeRatio": 0.436,
            "atrPct": 2.747,
            "gapPct": -0.277,
            "relativeStrength5dPct": -3.563,
            "relativeStrength20dPct": 0.006,
            "avgDollarVolume10d": 852814497,
            "maxSelectedCorrelation": 0.493
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.207,
            "participation": -0.712,
            "volatility": -0.515,
            "gap": 0.217,
            "correlation": 0.493,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 104,
          "previousRank": 108,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.345,
          "metrics": {
            "momentum5d": -7.673,
            "momentum20d": -6.913,
            "realizedVol10dAnnualized": 18.54,
            "volumeRatio": 0.566,
            "atrPct": 3.006,
            "gapPct": -0.441,
            "relativeStrength5dPct": -3.883,
            "relativeStrength20dPct": -1.967,
            "avgDollarVolume10d": 427064473,
            "maxSelectedCorrelation": 0.617
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.307,
            "participation": -0.275,
            "volatility": -0.555,
            "gap": 0.365,
            "correlation": 0.617,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 105,
          "previousRank": 104,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.37,
          "metrics": {
            "momentum5d": -6.262,
            "momentum20d": -14.102,
            "realizedVol10dAnnualized": 21.81,
            "volumeRatio": 0.572,
            "atrPct": 2.897,
            "gapPct": -0.293,
            "relativeStrength5dPct": -2.473,
            "relativeStrength20dPct": -9.157,
            "avgDollarVolume10d": 1130240266,
            "maxSelectedCorrelation": 0.492
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.35,
            "participation": -0.254,
            "volatility": -0.546,
            "gap": 0.232,
            "correlation": 0.492,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 106,
          "previousRank": 87,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.396,
          "metrics": {
            "momentum5d": -13.36,
            "momentum20d": -40.942,
            "realizedVol10dAnnualized": 89.47,
            "volumeRatio": 0.534,
            "atrPct": 11.286,
            "gapPct": 0.399,
            "relativeStrength5dPct": -9.571,
            "relativeStrength20dPct": -35.997,
            "avgDollarVolume10d": 6904499425,
            "maxSelectedCorrelation": 0.68
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.052,
            "participation": -0.384,
            "volatility": 2.505,
            "gap": 0.392,
            "correlation": 0.68,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 107,
          "previousRank": 105,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.419,
          "metrics": {
            "momentum5d": -7.004,
            "momentum20d": -12.622,
            "realizedVol10dAnnualized": 25.57,
            "volumeRatio": 0.444,
            "atrPct": 3.086,
            "gapPct": 0.034,
            "relativeStrength5dPct": -3.214,
            "relativeStrength20dPct": -7.677,
            "avgDollarVolume10d": 1994111667,
            "maxSelectedCorrelation": 0.53
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.397,
            "participation": -0.688,
            "volatility": -0.451,
            "gap": 0.063,
            "correlation": 0.53,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 108,
          "previousRank": 113,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.466,
          "metrics": {
            "momentum5d": -12.811,
            "momentum20d": -21.961,
            "realizedVol10dAnnualized": 36.04,
            "volumeRatio": 1.184,
            "atrPct": 4.05,
            "gapPct": -3.314,
            "relativeStrength5dPct": -9.021,
            "relativeStrength20dPct": -17.016,
            "avgDollarVolume10d": 737412896,
            "maxSelectedCorrelation": 0.305
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.406,
            "participation": 1.804,
            "volatility": -0.069,
            "gap": 2.958,
            "correlation": 0.305,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 109,
          "previousRank": 115,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": -0.468,
          "metrics": {
            "momentum5d": -12.753,
            "momentum20d": -29.979,
            "realizedVol10dAnnualized": 56.01,
            "volumeRatio": 0.556,
            "atrPct": 7.846,
            "gapPct": 2.399,
            "relativeStrength5dPct": -8.963,
            "relativeStrength20dPct": -25.033,
            "avgDollarVolume10d": 57698394160,
            "maxSelectedCorrelation": 0.476
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.642,
            "participation": -0.309,
            "volatility": 1.186,
            "gap": 2.198,
            "correlation": 0.476,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 110,
          "previousRank": 106,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.538,
          "metrics": {
            "momentum5d": -19.29,
            "momentum20d": -24.361,
            "realizedVol10dAnnualized": 96.89,
            "volumeRatio": 0.338,
            "atrPct": 10.691,
            "gapPct": 2.071,
            "relativeStrength5dPct": -15.501,
            "relativeStrength20dPct": -19.416,
            "avgDollarVolume10d": 1215701767,
            "maxSelectedCorrelation": 0.44
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.287,
            "participation": -1.043,
            "volatility": 2.431,
            "gap": 1.902,
            "correlation": 0.44,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 111,
          "previousRank": 71,
          "rankChange": -40,
          "rankChangeLabel": "-40",
          "status": "WATCH",
          "quantScore": -0.621,
          "metrics": {
            "momentum5d": -13.286,
            "momentum20d": -22.021,
            "realizedVol10dAnnualized": 48.44,
            "volumeRatio": 0.931,
            "atrPct": 4.491,
            "gapPct": -0.745,
            "relativeStrength5dPct": -9.497,
            "relativeStrength20dPct": -17.075,
            "avgDollarVolume10d": 1322069200,
            "maxSelectedCorrelation": 0.536
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.467,
            "participation": 0.952,
            "volatility": 0.195,
            "gap": 0.64,
            "correlation": 0.536,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 112,
          "previousRank": 116,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.631,
          "metrics": {
            "momentum5d": -8.016,
            "momentum20d": -22.748,
            "realizedVol10dAnnualized": 38.28,
            "volumeRatio": 0.545,
            "atrPct": 2.468,
            "gapPct": 0,
            "relativeStrength5dPct": -4.226,
            "relativeStrength20dPct": -17.802,
            "avgDollarVolume10d": 762102454,
            "maxSelectedCorrelation": 0.542
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.832,
            "participation": -0.346,
            "volatility": -0.469,
            "gap": 0.032,
            "correlation": 0.542,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 113,
          "previousRank": 117,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.647,
          "metrics": {
            "momentum5d": -8.751,
            "momentum20d": -25.345,
            "realizedVol10dAnnualized": 50.09,
            "volumeRatio": 0.441,
            "atrPct": 3.35,
            "gapPct": 0,
            "relativeStrength5dPct": -4.962,
            "relativeStrength20dPct": -20.4,
            "avgDollarVolume10d": 307394261,
            "maxSelectedCorrelation": 0.489
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.002,
            "participation": -0.697,
            "volatility": -0.093,
            "gap": 0.032,
            "correlation": 0.489,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 114,
          "previousRank": 98,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.824,
          "metrics": {
            "momentum5d": -12.213,
            "momentum20d": -39.675,
            "realizedVol10dAnnualized": 47.04,
            "volumeRatio": 0.91,
            "atrPct": 5.188,
            "gapPct": 0.108,
            "relativeStrength5dPct": -8.424,
            "relativeStrength20dPct": -34.73,
            "avgDollarVolume10d": 1404225444,
            "maxSelectedCorrelation": 0.452
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.87,
            "participation": 0.883,
            "volatility": 0.366,
            "gap": 0.13,
            "correlation": 0.452,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 115,
          "previousRank": 109,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.848,
          "metrics": {
            "momentum5d": -17.733,
            "momentum20d": -34.384,
            "realizedVol10dAnnualized": 53.4,
            "volumeRatio": 0.738,
            "atrPct": 8.904,
            "gapPct": 0.156,
            "relativeStrength5dPct": -13.944,
            "relativeStrength20dPct": -29.439,
            "avgDollarVolume10d": 902182447,
            "maxSelectedCorrelation": 0.72
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.398,
            "participation": 0.302,
            "volatility": 1.44,
            "gap": 0.174,
            "correlation": 0.72,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 116,
          "previousRank": 112,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.949,
          "metrics": {
            "momentum5d": -18.468,
            "momentum20d": -29.783,
            "realizedVol10dAnnualized": 71.29,
            "volumeRatio": 0.508,
            "atrPct": 7.511,
            "gapPct": -0.202,
            "relativeStrength5dPct": -14.678,
            "relativeStrength20dPct": -24.838,
            "avgDollarVolume10d": 1271679565,
            "maxSelectedCorrelation": 0.747
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.349,
            "participation": -0.471,
            "volatility": 1.276,
            "gap": 0.15,
            "correlation": 0.747,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSTR",
          "rank": 117,
          "previousRank": 114,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -1.197,
          "metrics": {
            "momentum5d": -25.01,
            "momentum20d": -35.713,
            "realizedVol10dAnnualized": 49.55,
            "volumeRatio": 0.9,
            "atrPct": 9.802,
            "gapPct": -1.534,
            "relativeStrength5dPct": -21.221,
            "relativeStrength20dPct": -30.768,
            "avgDollarVolume10d": 1695743823,
            "maxSelectedCorrelation": 0.463
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -3.346,
            "participation": 0.847,
            "volatility": 1.637,
            "gap": 1.352,
            "correlation": 0.463,
            "regimeFit": null
          }
        },
        {
          "symbol": "LCID",
          "rank": null,
          "previousRank": null,
          "rankChange": null,
          "rankChangeLabel": "—",
          "status": "REJECT",
          "quantScore": null,
          "metrics": {
            "momentum5d": -18.575,
            "momentum20d": -8.615,
            "realizedVol10dAnnualized": 124.54,
            "volumeRatio": 0.362,
            "atrPct": 11.868,
            "gapPct": 0,
            "relativeStrength5dPct": -14.786,
            "relativeStrength20dPct": -3.669,
            "avgDollarVolume10d": 47201783,
            "maxSelectedCorrelation": null
          },
          "selectionReason": "10-day average dollar volume below $50m.",
          "factors": null
        },
        {
          "symbol": "EWQ",
          "rank": null,
          "previousRank": null,
          "rankChange": null,
          "rankChangeLabel": "—",
          "status": "REJECT",
          "quantScore": null,
          "metrics": {
            "momentum5d": -3.334,
            "momentum20d": 1.372,
            "realizedVol10dAnnualized": 18.18,
            "volumeRatio": 0.856,
            "atrPct": 1.497,
            "gapPct": -0.745,
            "relativeStrength5dPct": 0.455,
            "relativeStrength20dPct": 6.318,
            "avgDollarVolume10d": 13475830,
            "maxSelectedCorrelation": null
          },
          "selectionReason": "10-day average dollar volume below $50m.",
          "factors": null
        }
      ]
    },
    "agentTeam": {
      "schemaVersion": 1,
      "mode": "MULTI_CALL_ROLE_PIPELINE",
      "processedAt": "2026-10-06T17:55:43.011Z",
      "evidenceHash": "f2ba97479c6a35f16423fcbe29cd190dde51f3070a5c5e078db294c9cc61d027",
      "reports": {
        "scout": {
          "role": "SCOUT",
          "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
          "selectedAt": "2026-10-06T12:15:49.745Z",
          "universeSize": 116,
          "symbols": [
            "ON",
            "MSTR",
            "HPE",
            "SHOP"
          ],
          "candidates": [
            {
              "symbol": "ON",
              "rank": 1,
              "previousRank": 2,
              "rankChange": 1,
              "rankChangeLabel": "+1",
              "status": "SELECTED",
              "quantScore": 1.939,
              "metrics": {
                "momentum5d": 13.589,
                "momentum20d": 16.673,
                "realizedVol10dAnnualized": 40.73,
                "volumeRatio": 0.936,
                "atrPct": 4.235,
                "gapPct": 0.247,
                "relativeStrength5dPct": 12.385,
                "relativeStrength20dPct": 16.459,
                "avgDollarVolume10d": 984874668,
                "maxSelectedCorrelation": 0
              },
              "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
              "factors": {
                "momentum": 2.703,
                "participation": 0.322,
                "volatility": 1.36,
                "gap": 0.255,
                "correlation": 0,
                "regimeFit": null
              },
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 87.14,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 84.72,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $87.14 with sustained participation.",
              "invalidation": "Loss of $84.72 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.94: 5d momentum 13.6%, 20d 16.7%, annualized 10d realized vol 41%, volume 0.94x, max selected correlation 0.00.",
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "setupId": "ON-20261006-daily-quant"
            },
            {
              "symbol": "SHOP",
              "rank": 3,
              "previousRank": 12,
              "rankChange": 9,
              "rankChangeLabel": "+9",
              "status": "SELECTED",
              "quantScore": 1.902,
              "metrics": {
                "momentum5d": 11.18,
                "momentum20d": 9.755,
                "realizedVol10dAnnualized": 48.69,
                "volumeRatio": 1.296,
                "atrPct": 4.395,
                "gapPct": 1.103,
                "relativeStrength5dPct": 9.976,
                "relativeStrength20dPct": 9.54,
                "avgDollarVolume10d": 1685843027,
                "maxSelectedCorrelation": 0.114
              },
              "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
              "factors": {
                "momentum": 2.068,
                "participation": 1.894,
                "volatility": 1.673,
                "gap": 1.454,
                "correlation": 0.114,
                "regimeFit": null
              },
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 162.81,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 157.41,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $162.81 with sustained participation.",
              "invalidation": "Loss of $157.41 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.90: 5d momentum 11.2%, 20d 9.8%, annualized 10d realized vol 49%, volume 1.30x, max selected correlation 0.11.",
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "setupId": "SHOP-20261006-daily-quant"
            },
            {
              "symbol": "HPE",
              "rank": 4,
              "previousRank": 1,
              "rankChange": -3,
              "rankChangeLabel": "-3",
              "status": "SELECTED",
              "quantScore": 1.821,
              "metrics": {
                "momentum5d": 9.149,
                "momentum20d": 25.569,
                "realizedVol10dAnnualized": 43.53,
                "volumeRatio": 0.745,
                "atrPct": 5.257,
                "gapPct": -0.591,
                "relativeStrength5dPct": 7.945,
                "relativeStrength20dPct": 25.355,
                "avgDollarVolume10d": 1300024690,
                "maxSelectedCorrelation": 0.343
              },
              "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
              "factors": {
                "momentum": 2.239,
                "participation": -0.516,
                "volatility": 1.984,
                "gap": 0.921,
                "correlation": 0.343,
                "regimeFit": null
              },
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 69.39,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 67.33,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $69.39 with sustained participation.",
              "invalidation": "Loss of $67.33 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.82: 5d momentum 9.1%, 20d 25.6%, annualized 10d realized vol 44%, volume 0.74x, max selected correlation 0.34.",
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "setupId": "HPE-20261006-daily-quant"
            },
            {
              "symbol": "MSTR",
              "rank": 7,
              "previousRank": 5,
              "rankChange": -2,
              "rankChangeLabel": "-2",
              "status": "WATCH",
              "quantScore": 1.432,
              "metrics": {
                "momentum5d": 4.639,
                "momentum20d": 13.541,
                "realizedVol10dAnnualized": 34.96,
                "volumeRatio": 0.934,
                "atrPct": 5.782,
                "gapPct": 2.919,
                "relativeStrength5dPct": 3.435,
                "relativeStrength20dPct": 13.326,
                "avgDollarVolume10d": 3219784257,
                "maxSelectedCorrelation": 0.368
              },
              "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
              "factors": {
                "momentum": 1.082,
                "participation": 0.313,
                "volatility": 2.019,
                "gap": 3.999,
                "correlation": 0.368,
                "regimeFit": null
              }
            }
          ],
          "setups": [
            {
              "symbol": "SHOP",
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 162.81,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 157.41,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $162.81 with sustained participation.",
              "invalidation": "Loss of $157.41 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.90: 5d momentum 11.2%, 20d 9.8%, annualized 10d realized vol 49%, volume 1.30x, max selected correlation 0.11.",
              "quantScore": 1.902,
              "metrics": {
                "momentum5d": 11.18,
                "momentum20d": 9.755,
                "realizedVol10dAnnualized": 48.69,
                "volumeRatio": 1.296,
                "atrPct": 4.395,
                "gapPct": 1.103,
                "relativeStrength5dPct": 9.976,
                "relativeStrength20dPct": 9.54,
                "avgDollarVolume10d": 1685843027,
                "maxSelectedCorrelation": 0.114
              },
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "status": "WATCH_ONLY",
              "setupId": "SHOP-20261006-daily-quant"
            },
            {
              "symbol": "HPE",
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 69.39,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 67.33,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $69.39 with sustained participation.",
              "invalidation": "Loss of $67.33 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.82: 5d momentum 9.1%, 20d 25.6%, annualized 10d realized vol 44%, volume 0.74x, max selected correlation 0.34.",
              "quantScore": 1.821,
              "metrics": {
                "momentum5d": 9.149,
                "momentum20d": 25.569,
                "realizedVol10dAnnualized": 43.53,
                "volumeRatio": 0.745,
                "atrPct": 5.257,
                "gapPct": -0.591,
                "relativeStrength5dPct": 7.945,
                "relativeStrength20dPct": 25.355,
                "avgDollarVolume10d": 1300024690,
                "maxSelectedCorrelation": 0.343
              },
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "status": "WATCH_ONLY",
              "setupId": "HPE-20261006-daily-quant"
            },
            {
              "symbol": "SHOP",
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 162.81,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 157.41,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $162.81 with sustained participation.",
              "invalidation": "Loss of $157.41 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.90: 5d momentum 11.2%, 20d 9.8%, annualized 10d realized vol 49%, volume 1.30x, max selected correlation 0.11.",
              "quantScore": 1.902,
              "metrics": {
                "momentum5d": 11.18,
                "momentum20d": 9.755,
                "realizedVol10dAnnualized": 48.69,
                "volumeRatio": 1.296,
                "atrPct": 4.395,
                "gapPct": 1.103,
                "relativeStrength5dPct": 9.976,
                "relativeStrength20dPct": 9.54,
                "avgDollarVolume10d": 1685843027,
                "maxSelectedCorrelation": 0.114
              },
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "status": "UNTRIGGERED",
              "setupId": "SHOP-20261006-daily-quant"
            },
            {
              "symbol": "HPE",
              "setup": "Daily quant momentum / volatility breakout",
              "entryRule": {
                "operator": "ABOVE",
                "level": 69.39,
                "timeframeMinutes": 5,
                "requiredCloses": 1,
                "requireParticipation": true
              },
              "invalidationRule": {
                "operator": "BELOW",
                "level": 67.33,
                "timeframeMinutes": 5,
                "requiredCloses": 1
              },
              "expiresAt": "2026-10-09T12:15:49.745Z",
              "trigger": "Break above $69.39 with sustained participation.",
              "invalidation": "Loss of $67.33 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.82: 5d momentum 9.1%, 20d 25.6%, annualized 10d realized vol 44%, volume 0.74x, max selected correlation 0.34.",
              "quantScore": 1.821,
              "metrics": {
                "momentum5d": 9.149,
                "momentum20d": 25.569,
                "realizedVol10dAnnualized": 43.53,
                "volumeRatio": 0.745,
                "atrPct": 5.257,
                "gapPct": -0.591,
                "relativeStrength5dPct": 7.945,
                "relativeStrength20dPct": 25.355,
                "avgDollarVolume10d": 1300024690,
                "maxSelectedCorrelation": 0.343
              },
              "createdAt": "2026-10-06T12:15:49.745Z",
              "lastReviewedAt": "2026-10-06T12:15:49.745Z",
              "status": "UNTRIGGERED",
              "setupId": "HPE-20261006-daily-quant"
            }
          ],
          "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
        },
        "quantMacro": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The $164.76 quote remains above the documented $163.17 entry threshold and well above the $156.85 5-minute-close invalidation. The target-level trigger is not actionable because the recorded target duplicates the entry threshold rather than defining an independent evidence-backed exit level. Do not add: MSTR has fallen to rank 7, has weaker 5-day momentum (+4.64%), sub-baseline daily volume (0.934x), elevated ATR (5.78%), and the portfolio already has concentrated short-horizon long-momentum exposure. Do not reduce or sell without a documented invalidation or confirmed reversal signal.",
          "timeHorizon": "1-3 trading days; reassess before setup expiry or on a completed 5-minute close below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "No live catalyst, earnings, or news feed was supplied, so event risk is unknown rather than absent. The macro regime observation is dated 2026-10-01 versus current quotes on 2026-10-06, and includes delayed/timezone-ambiguous inputs. The supplied trigger has duplicate entry/target fields and does not provide an independent profit-taking level. Intraday confirmation data establish no MSTR reversal or invalidation but do not establish fresh upside participation.",
          "quantView": "MSTR remains marginally above its original breakout level, but its current rank is 7, down from 5, with a quant score of 1.432 versus stronger selected names. Momentum remains positive over 5 and 20 days (+4.64% and +13.54%), but participation is below baseline and volatility/range risk remains high. HPE and SHOP are above their respective entry levels but their latest 5-minute continuation checks failed participation requirements (0.99x and 0.49x), reinforcing a no-add posture across the momentum basket. ON has not confirmed its new $87.14 breakout. No supplied position has completed its documented invalidation condition.",
          "macroView": "The supplied regime is neutral risk, range trend, normal volatility, and tight liquidity, with a 0.68 position-size multiplier. Its underlying observations indicate elevated yields, firmer USD, weak regional-bank relative performance, and fragile participation, which are unfavorable for expanding exposure to volatile growth/momentum equities. The regime is informative but stale and shadow-only; it supports retaining existing risk controls rather than forcing a reduction without price-based confirmation.",
          "disagreements": "Positive price location above MSTR's breakout threshold argues against selling, while rank deterioration, sub-baseline participation, tight-liquidity conditions, and clustered portfolio exposure argue against buying. Neither side has sufficient new evidence to justify changing the existing position, so HOLD is preferred."
        },
        "risk": {
          "verdict": "APPROVE",
          "reason": "The proposed HOLD of MSTR adds no exposure and is consistent with the documented risk framework. MSTR's quoted price of $164.76 remains above the $163.17 breakout threshold and above the $156.85 invalidation, with no supplied completed 5-minute close below invalidation or independently documented reversal. A target-level alert at $163.17 is not a valid exit signal because it duplicates the entry threshold. Given rank deterioration, sub-baseline daily volume, elevated ATR, tight-liquidity/range conditions, and an already clustered short-horizon long-momentum basket, the no-add posture is appropriate. Approval is only a risk assessment, not an instruction to trade.",
          "checks": {
            "action": "HOLD only; no purchase, sale, or sizing increase is supported by this assessment",
            "cashAndSizing": {
              "cashEur": 448.57,
              "mstrValueEur": 150.31,
              "mstrPortfolioPctApprox": 15,
              "incrementalExposureEur": 0,
              "result": "No cash, max-buy, or max-position limit is engaged by HOLD"
            },
            "portfolioExposure": {
              "grossLongEquityExposureEurApprox": 552.72,
              "grossLongEquityPctApprox": 55.2,
              "assessment": "Materially clustered exposure across ON, MSTR, HPE, and SHOP; all are short-horizon long momentum equities and may correlate substantially in a broad risk-off move despite selected-universe correlation statistics."
            },
            "mstrSetup": {
              "quotedPriceUsd": 164.755,
              "entryThresholdUsd": 163.17,
              "invalidationUsd": 156.85,
              "distanceToInvalidationPctApprox": 4.8,
              "expiry": "2026-10-08T12:10:16.000Z",
              "assessment": "Position remains technically valid on supplied prices, but has limited remaining setup life and requires reassessment by expiry."
            },
            "participationAndQuality": {
              "rank": 7,
              "previousRank": 5,
              "dailyVolumeRatio": 0.934,
              "atrPct": 5.782,
              "assessment": "Deteriorating rank and below-baseline participation support neither adding nor relaxing invalidation discipline."
            },
            "exitDiscipline": {
              "validExitTrigger": "One completed 5-minute close below $156.85, or independently evidenced reversal/failure consistent with the recorded invalidation.",
              "targetAlert": "Non-actionable: recorded target is the same $163.17 level as the entry trigger."
            }
          },
          "evidenceLimitations": [
            "No live catalyst, earnings-calendar, or news evidence is supplied; event risk is unknown, not absent.",
            "The regime inputs are dated 2026-10-01 while quotes are dated 2026-10-06; they are stale, shadow-mode observations and include delayed/timezone-ambiguous components.",
            "No MSTR-specific latest completed-candle volume/participation confirmation is supplied in this trigger payload; current price alone cannot establish upside continuation.",
            "Selected-set correlation metrics do not measure correlation to the actual held portfolio under stress; ON, MSTR, HPE, and SHOP remain concentrated long-equity momentum exposure.",
            "The $163.17 target/entry duplication prevents evaluation of a defined reward-to-risk or evidence-backed profit-taking plan."
          ]
        },
        "pm": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The supplied quote of $164.76 remains above its documented $163.17 breakout-entry level and no completed 5-minute close below the $156.85 invalidation, or independently evidenced reversal, is supplied. The target-level alert is not actionable because the recorded target duplicates the entry threshold rather than providing an independent profit-taking level. Do not BUY: MSTR has deteriorated to rank 7 from 5, with sub-baseline daily volume (0.934x), elevated ATR (5.782%), and the portfolio is already about 55% allocated to clustered short-horizon long-equity momentum exposure in a tight-liquidity range regime. Do not REDUCE or SELL without the documented invalidation or new confirmed reversal evidence.",
          "timeHorizon": "1-3 trading days; reassess by the 2026-10-08 setup expiry or immediately on one completed 5-minute close below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "No live catalyst, earnings-calendar, or news feed is provided, so event risk is unknown. The macro regime evidence is dated 2026-10-01 versus quotes dated 2026-10-06, is shadow-mode only, and contains delayed/timezone-ambiguous inputs. No current MSTR-specific completed-candle participation evidence is supplied. The duplicated target/entry field prevents an evidence-backed reward-to-risk or profit-taking assessment. Selected-set correlations may understate common stress exposure across the held long-equity momentum basket.",
          "reportTreatment": "Quant/Macro recommends HOLD of MSTR and Risk APPROVES that no-exposure-change decision; neither report issues a veto. The positive price position above entry supports holding rather than exiting, while rank deterioration, weaker participation, elevated range risk, tight liquidity, and concentrated portfolio exposure oppose adding. These considerations disagree on directional conviction but jointly support HOLD because no documented exit condition has occurred."
        },
        "hardRisk": {
          "verdict": "APPROVE",
          "errors": []
        },
        "critic": {
          "verdict": "PASS",
          "reason": "The final proposal is a no-exposure-change HOLD of the existing MSTR paper position. It is consistent with the supplied current quote ($164.755), which is above both the documented $163.17 entry threshold and $156.85 invalidation level. The proposal correctly treats the $163.17 target alert as non-actionable because it duplicates the entry threshold. It does not invent a catalyst, take-profit, reversal, or new participation confirmation, and it appropriately rejects adding exposure amid rank deterioration, sub-baseline daily volume, high ATR, tight-liquidity/range conditions, and clustered long-equity momentum exposure. Missing MSTR completed-candle evidence prevents confirmation of intraday continuation or invalidation history, but does not make a HOLD invalid.",
          "checks": {
            "timestampFreshness": "PASS with limitation. MSTR quote/trigger data are contemporaneous on 2026-10-06 around 17:55Z. The cited macro regime is dated 2026-10-01 and therefore stale relative to the quote, but the proposal explicitly identifies it as stale and shadow-only rather than treating it as current execution-grade evidence.",
            "priceAndTriggerConsistency": "PASS. Supplied MSTR price is $164.755, above the $163.17 breakout threshold. The documented invalidation is one completed 5-minute close below $156.85; no such completed close is supplied.",
            "targetInterpretation": "PASS. MSTR's recorded target is \"Break above $163.17 with sustained participation,\" identical to its entry trigger. The proposal correctly declines to portray the target-level event as a valid profit-taking signal.",
            "arithmeticAndSizing": "PASS. MSTR value of approximately €150.31 is consistent with 1.02771459 shares at $164.755 and EURUSD 1.1265067. Total held-position value is approximately €552.72 (€202.30 + €150.31 + €100.49 + €99.62), or about 55.2% of €1,001.30 portfolio value. Cash plus position values is approximately €1,001.29, consistent with stated €1,001.30 after rounding. HOLD adds €0, so max-buy and max-position limits are not engaged.",
            "riskVeto": "PASS. Risk and hard-risk reports approve the no-change decision. No supplied veto requires a reduction or exit, and HOLD does not increase the already clustered long-equity exposure.",
            "thesisAndInvalidation": "PASS with limitation. The proposal preserves the documented $156.85 5-minute-close invalidation and does not relax it. Rank decline from 5 to 7, 0.934x daily volume, and 5.782% ATR reasonably support no-add. The proposal's statement that no reversal is supplied is supportable; it does not assert a reversal has been disproven.",
            "participation": "PASS for HOLD; insufficient for continuation/add. No current MSTR-specific completed 5-minute candle or participation ratio is provided. Therefore, the evidence cannot validate fresh upside participation, but the proposal explicitly uses that absence to avoid adding rather than to justify a trade.",
            "evidenceQuality": "PASS with caveat. The proposal correctly limits conclusions to supplied evidence and acknowledges absent news, earnings, catalyst, and current MSTR intraday participation data."
          },
          "evidenceLimitations": [
            "No latest MSTR completed 5-minute candle sequence is supplied. A current quote above $156.85 cannot independently prove that no earlier completed intraday close crossed below invalidation.",
            "The quant/macro narrative says intraday data establish no MSTR reversal or invalidation, but no MSTR-specific completed-candle evidence appears in the payload. This is an overstatement in supporting commentary, though it does not change the defensible HOLD outcome.",
            "Macro regime evidence is approximately five days older than the quote and is explicitly SHADOW-mode; delayed and timezone-ambiguous source components further limit its decision weight.",
            "No catalyst, earnings-calendar, or live-news evidence is supplied; event risk is unknown.",
            "Selected-universe correlation statistics do not fully establish stress correlation for the actual four-position long-equity momentum basket.",
            "The duplicated MSTR target/entry field leaves no independent evidence-backed profit objective or reward-to-risk assessment."
          ]
        }
      },
      "decision": {
        "decision": "HOLD",
        "symbol": "MSTR",
        "eurAmount": 0,
        "reason": "Maintain the existing MSTR paper position. The supplied quote of $164.76 remains above its documented $163.17 breakout-entry level and no completed 5-minute close below the $156.85 invalidation, or independently evidenced reversal, is supplied. The target-level alert is not actionable because the recorded target duplicates the entry threshold rather than providing an independent profit-taking level. Do not BUY: MSTR has deteriorated to rank 7 from 5, with sub-baseline daily volume (0.934x), elevated ATR (5.782%), and the portfolio is already about 55% allocated to clustered short-horizon long-equity momentum exposure in a tight-liquidity range regime. Do not REDUCE or SELL without the documented invalidation or new confirmed reversal evidence.",
        "timeHorizon": "1-3 trading days; reassess by the 2026-10-08 setup expiry or immediately on one completed 5-minute close below $156.85.",
        "riskLevel": "HIGH",
        "evidenceLimitations": "No live catalyst, earnings-calendar, or news feed is provided, so event risk is unknown. The macro regime evidence is dated 2026-10-01 versus quotes dated 2026-10-06, is shadow-mode only, and contains delayed/timezone-ambiguous inputs. No current MSTR-specific completed-candle participation evidence is supplied. The duplicated target/entry field prevents an evidence-backed reward-to-risk or profit-taking assessment. Selected-set correlations may understate common stress exposure across the held long-equity momentum basket.",
        "reportTreatment": "Quant/Macro recommends HOLD of MSTR and Risk APPROVES that no-exposure-change decision; neither report issues a veto. The positive price position above entry supports holding rather than exiting, while rank deterioration, weaker participation, elevated range risk, tight liquidity, and concentrated portfolio exposure oppose adding. These considerations disagree on directional conviction but jointly support HOLD because no documented exit condition has occurred."
      },
      "tradePermitted": false,
      "decisionKey": "caed3fdc6be68eb1",
      "triggerKey": "d471d1e8f6e76006",
      "baseCommitSha": "72e2b4d5c367c8f41caf1ab00a7edf26f22f4385",
      "portfolioMutation": false
    },
    "agentTeamHistory": [
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T04:29:39.250Z",
        "decisionKey": "8247d7c5f03cf973",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "bc1ef21b331382ab452ca4c271546ce41d4357ac",
        "evidenceHash": "6658ce02aed9b02ddc2986b1f46a052c3ab41985416cad83a7f4d29395f9d89c",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/8247d7c5f03cf973.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T04:45:43.590Z",
        "decisionKey": "3aa8bd26014fd40c",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "9bce10ad5bd8e73487aedaf5c90eb542cd003d71",
        "evidenceHash": "3302ff9d1ef10fcd43bd3b6ce7c3898e0e31a584b893bcbfc3e9db4af363cfb5",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/3aa8bd26014fd40c.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T05:08:19.179Z",
        "decisionKey": "6e001ddd049ac3c8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "4b203c56374ac60040443101f9739a57dfaf25e8",
        "evidenceHash": "0e776c32a568965f8facf58eb3ecced487e728b574396a980d75f4087bf339e6",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/6e001ddd049ac3c8.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T05:27:34.087Z",
        "decisionKey": "161549ce38c13516",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "e9d3db05769b499b1326e0468ff2dbcc8aaf0bd4",
        "evidenceHash": "8c56778e9327afb25dd5f7ad0b8b9656a6affd0a7fe890463d474432b859aec1",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/161549ce38c13516.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T05:43:32.228Z",
        "decisionKey": "156c9a0b5175efda",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "9c9f455ff60bc3c07517e06ff8e36ab026a73d82",
        "evidenceHash": "b5adf56fa2bf9a3759d76eaac502d8ddbac13680e0e211f13b8528bd745915d4",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/156c9a0b5175efda.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T05:56:45.542Z",
        "decisionKey": "6bfa91da63b47143",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "f8ca12569c0c4f4b0df294ef4745a10577fd0abe",
        "evidenceHash": "1b639575c934a73fa8e436663c22d85ec60f7be4b781bd789517b45e00aeb914",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/6bfa91da63b47143.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T06:13:10.254Z",
        "decisionKey": "2aff5b6ddbbfb752",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "c583809e92f1903d8119dfc11b70907ac297dd66",
        "evidenceHash": "22295940b78ca1f3ad83214a79890433c1c8efd3867390afb5b1be5afbeba0f1",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/2aff5b6ddbbfb752.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T06:37:12.564Z",
        "decisionKey": "a3ba9885248238a5",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "c0dd17a397c15f251c98e964ff93ae98a358bbd1",
        "evidenceHash": "1f5a1aca45eb7cda13b3b0e5aa508bc9d2e51586ed06e54fe8869777f899f25e",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/a3ba9885248238a5.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T06:59:14.050Z",
        "decisionKey": "b6a5c2cff084b94b",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "0c99cd1600cd79d4ee4177bf130535a8d50b49e6",
        "evidenceHash": "fef8158ab2ed1aef71697118b96e9310d10f951091cc9cf3f711410ac6544025",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/b6a5c2cff084b94b.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T07:17:03.897Z",
        "decisionKey": "78ffaa5a9322141e",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "ad85daf4306f313457fe196ce629cbd383ea261c",
        "evidenceHash": "65b8b9f37c98df159d957945cd7ae7fbc33fd6cd8c56b9894f5140eba6706c69",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/78ffaa5a9322141e.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T07:41:31.669Z",
        "decisionKey": "0d66ce755dbd1dc8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "d37fdcf7f74cdfed6e5e04330bafd99b049ad956",
        "evidenceHash": "b44be48122d79ca97077bdb90b80989713b2254730d8cf57fe8d35db418bec2c",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/0d66ce755dbd1dc8.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T07:56:02.778Z",
        "decisionKey": "1c7721a6467dce85",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "890e3b5fc9962c1d576a633daf156624bed0c893",
        "evidenceHash": "3faa1af0992ec218be74100afa94f439f8fe8da623cb4757597127d0960fa14f",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/1c7721a6467dce85.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T08:10:33.369Z",
        "decisionKey": "b79ba49a9c1e2890",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "565ff4de708eb02fdfecf540c5b41f99a6b73e5b",
        "evidenceHash": "2b3fc564157b0aaf1f5496b35276f7cc7a9d88f77cb70d9b5e0962b264a8aa26",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/b79ba49a9c1e2890.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T08:30:29.098Z",
        "decisionKey": "3479d9de307c0c16",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "d86555b0c77a30a8a0fef9d8235cbbbc58869d2c",
        "evidenceHash": "dc96b352aab0ed83b78270f9c963d8f9b4002168b35fc6a921cfdee7d0537d00",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/3479d9de307c0c16.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T08:55:34.378Z",
        "decisionKey": "28d28103cc9f3f54",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "951ba8271507316d1f1fd6ad1e088f42c3caceea",
        "evidenceHash": "150b6f1fea39c37a52b8ff93c7913e4352e577c478cfe428a28bfaac4b535970",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/28d28103cc9f3f54.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T09:09:32.907Z",
        "decisionKey": "05ab8c2520920ce1",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "676534bac50b880725e1ddfe7197d45b9455bafb",
        "evidenceHash": "ce3f6023b295a3bb71b289274ca18f5ff4bcc951f79b16ed1221dc989519eb30",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/05ab8c2520920ce1.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T09:29:47.957Z",
        "decisionKey": "038570a8987590f9",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "922a59c583349b77caf25cac440ec6d67d11da31",
        "evidenceHash": "874c656b6143e68b242aafc5fe79854d16b2d8ac1e039981850afb593e59bfbb",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/038570a8987590f9.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T09:48:05.201Z",
        "decisionKey": "85c9ab3cd9190b7b",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "b890896a72a98f81972a93a03049030175526842",
        "evidenceHash": "70e2bfddfc95d204de7111c1c97c92e63534571ef2f41b1843220d6fc21fe719",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/85c9ab3cd9190b7b.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T10:08:09.928Z",
        "decisionKey": "28b07e4159527476",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "69ac87014caded0cf21b19d27e7e1dd6337aa912",
        "evidenceHash": "733f06c44f1726654d4d769848122b061efde9d0139bb1f1294c03211f4edb54",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/28b07e4159527476.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T10:28:32.858Z",
        "decisionKey": "3c856ecc120f25c6",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "41b9a3cf6a892454521c3c0a6cb68a5fe963dfea",
        "evidenceHash": "c950a25fde07f0de14fdeb2091ef550213a15f094b8697b49b0b2c97c9c8b1a0",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/3c856ecc120f25c6.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T10:46:37.197Z",
        "decisionKey": "032c812bdc13a2e8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "b4522951441594f0198b8b7ab2cb87eac4c3d874",
        "evidenceHash": "959b4864fe07f68c9ea1eca8e8657219be38f71cd03609445400874c30690c75",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/032c812bdc13a2e8.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T11:08:07.197Z",
        "decisionKey": "4e60824c637d9549",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "1a11e11d625cc5bc13f4f9440cb6e5da516d9578",
        "evidenceHash": "92b7f8cd2d2e0e9d47ef672fe9708f57e9aaa2a9f92d821b428c3a8fcd457329",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/4e60824c637d9549.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T11:27:33.606Z",
        "decisionKey": "745c844dbc29185c",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "670144642a30e288085b3978d16b287f83756980",
        "evidenceHash": "1e365dd34da807747e8b14d0536ba4af0bab0e72cf393268681b2fa95b6338ce",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/745c844dbc29185c.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T11:43:39.603Z",
        "decisionKey": "9dff3894ebb5dd86",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "ad971815cf061dab92ede2262906739f676de8a1",
        "evidenceHash": "1819ef87a5329bea350050ca87ef37c54c578565869cdf6fbdb09031db1e5a13",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/9dff3894ebb5dd86.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T11:57:44.000Z",
        "decisionKey": "496aa01c34a9309d",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "1f168fef7ef27ac390c7ef4926a3a78c280d486e",
        "evidenceHash": "c45aa2b1294ad28167ac830b8005d8717285821722ad0910bda4b161fa47dc00",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/496aa01c34a9309d.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T12:15:57.232Z",
        "decisionKey": "7057cee8a9307db8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "dc1610df520e47bfd4b99ae4519193e9497214f0",
        "evidenceHash": "883caf4f4d880e4c597e88d9089808aef509dd8a16b6418591348cfacffa8edb",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/7057cee8a9307db8.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T12:46:13.154Z",
        "decisionKey": "a7907da66eae3112",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "60f4e82c58341afb7b669e2ee894a76d47360740",
        "evidenceHash": "386fbeb0a4212d19cedef66ee13a3ae7ea8e0197189adb429a317bc04b4ceaaf",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/a7907da66eae3112.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T13:09:27.302Z",
        "decisionKey": "42ebaeee6fcc767f",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "223ae18ae4700fc3efce398998050d3f732189ad",
        "evidenceHash": "0cb132d49b2a97d9a188fab881a76063ea2a99eb38f887c964005c185c0b7b14",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/42ebaeee6fcc767f.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T13:30:07.692Z",
        "decisionKey": "66b6884d6b7f24ae",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "a9e7aee6afe4d79cba0054118eb651175a7cff2d",
        "evidenceHash": "d7e58c792eeb644a08d5bf88b2ecae9a46c35e50044f5e4554f97d17e6077a30",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/66b6884d6b7f24ae.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T13:48:26.952Z",
        "decisionKey": "e30d1b647220f764",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "225c10ae83cab8f8760680c7fa4fc606cc852012",
        "evidenceHash": "0e382f9ff4abaecc7ff7e88caae58ab817b69af512c169fec22bd4ebaa7e0d08",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/e30d1b647220f764.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T14:10:22.681Z",
        "decisionKey": "9ad2f160a9cbe13f",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "4f3b9921ebfd3c17846478be7415807ec6cb3439",
        "evidenceHash": "4b7cf4e5b76efdc393451f1481223833d9f4784caa88599f4aac3763506232df",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/9ad2f160a9cbe13f.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T14:30:03.694Z",
        "decisionKey": "dd078f17946c16e0",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "eafb371c233b9b798ea87783f58f68cd69c84b47",
        "evidenceHash": "ec5d8ac7c30044ff00c96e0b70a595673e47c6728c966f109f593c4310596093",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/dd078f17946c16e0.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T14:48:24.825Z",
        "decisionKey": "b0c098606bdc18e1",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "ec02a4875b25356d4ae16a68a2ee1374c378e923",
        "evidenceHash": "eb28f0bf239951dfd968322080cd9ad17db7029c13c83c512ecbbb3df8cdf923",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/b0c098606bdc18e1.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T15:10:22.578Z",
        "decisionKey": "f68fcab743b14e2f",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "3725144b14a9aabaf67bd8e6b08c2a62cca32905",
        "evidenceHash": "3b14f8f194d80c85a366afebd3a97240b23b109aea762c88e9f628264b821e9d",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/f68fcab743b14e2f.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T15:28:42.454Z",
        "decisionKey": "2dd87a2fd4de4df7",
        "triggerKey": "03ab4d0a11c8dca9",
        "baseCommitSha": "1b5ea2854f3be1254ed6f6c39474180f31342017",
        "evidenceHash": "396d06a1dc2ba3d07ed5a4cf2e7b4fce13c56960f0f4ca09c3287fce2d6a5419",
        "portfolioMutation": true,
        "decision": {
          "decision": "BUY",
          "symbol": "HPE",
          "eurAmount": 100
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/2dd87a2fd4de4df7.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T15:45:22.739Z",
        "decisionKey": "68b827fd62e481c9",
        "triggerKey": "037fc880ce4e6c9f",
        "baseCommitSha": "17cca069723b4f125f3feea7577965a84924885a",
        "evidenceHash": "068b40a7996fdbef96c9ac52e15f6ab7edc730c7c96fb13673e2cb8ca6aac35c",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/68b827fd62e481c9.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T16:09:26.261Z",
        "decisionKey": "2c794cd68ad52840",
        "triggerKey": "aacbd48833877d82",
        "baseCommitSha": "e74d2462409cefb603c471ebfe5a9fe93e5fb00d",
        "evidenceHash": "007946cf68af9a059bc0ffff049cb97dba53a5ef685c21b07731ced7b0e2f64f",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "SHOP",
          "eurAmount": null
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/2c794cd68ad52840.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T16:30:42.469Z",
        "decisionKey": "5f9599327eef800b",
        "triggerKey": "037fc880ce4e6c9f",
        "baseCommitSha": "8333fc743fed8760816ffbdf0b7935abca354c61",
        "evidenceHash": "9ccae038b001ef969133d0070f4bd4d31459013f916f8daa05c6f406786b68a7",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "HPE",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/5f9599327eef800b.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T16:56:05.680Z",
        "decisionKey": "e33436172c17b3de",
        "triggerKey": "6cb540b370525a3a",
        "baseCommitSha": "06796518ced449cc347fcea38f1469f31c005382",
        "evidenceHash": "f323456cd2dfe2a2167718ee1227c5350a0a456b843251126e0d39b98cef5ef0",
        "portfolioMutation": true,
        "decision": {
          "decision": "BUY",
          "symbol": "SHOP",
          "eurAmount": 100
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/e33436172c17b3de.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T17:08:59.715Z",
        "decisionKey": "d77ecef076315d10",
        "triggerKey": "d471d1e8f6e76006",
        "baseCommitSha": "b8c802a302845ece7d0f4ad104c8cf54bb633a91",
        "evidenceHash": "13e13cd6b5824adf6a579c4ae45b1656a6c089f65c2388d4d43f2362f166ec39",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "SHOP",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/d77ecef076315d10.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T17:26:18.357Z",
        "decisionKey": "89a3606307bc660c",
        "triggerKey": "d471d1e8f6e76006",
        "baseCommitSha": "a0c83820308aa71e426c513d92e400dd584b728b",
        "evidenceHash": "e5426a338876d2d686e4680a5219d4dc17dd2b8e576f45cca0abc4d35a252837",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/89a3606307bc660c.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T17:42:11.554Z",
        "decisionKey": "831f550587fec1f6",
        "triggerKey": "853e92bcf2b79fa8",
        "baseCommitSha": "22638951cb4f202edc386ce6d7b3f1e41ad20ea9",
        "evidenceHash": "098d7a177dffb0d3f075a7012a3980be03901f0735dece55a5e05276da52684f",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "HPE",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/831f550587fec1f6.json"
      },
      {
        "schemaVersion": 1,
        "processedAt": "2026-10-06T17:55:43.011Z",
        "decisionKey": "caed3fdc6be68eb1",
        "triggerKey": "d471d1e8f6e76006",
        "baseCommitSha": "72e2b4d5c367c8f41caf1ab00a7edf26f22f4385",
        "evidenceHash": "f2ba97479c6a35f16423fcbe29cd190dde51f3070a5c5e078db294c9cc61d027",
        "portfolioMutation": false,
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0
        },
        "reports": {
          "risk": {
            "verdict": "APPROVE"
          },
          "critic": {
            "verdict": "PASS"
          }
        },
        "archivePath": "quant/agent-reviews/caed3fdc6be68eb1.json"
      }
    ],
    "triggerProcessing": {
      "lastTriggerKey": "d471d1e8f6e76006",
      "processedAt": "2026-10-06T17:55:43.011Z",
      "decisionKey": "caed3fdc6be68eb1"
    },
    "agentTeamStats": {
      "reviews": 43,
      "riskVetoes": 0,
      "criticRejections": 0
    }
  },
  "strategyMemory": {
    "observations": []
  },
  "strategyFeedback": {
    "schemaVersion": 1,
    "selections": [
      {
        "selectedAt": "2026-10-02T13:13:32.224Z",
        "method": "35% 5d momentum + 20% 20d momentum + 30% realized volatility + 15% volume expansion; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "MSTR",
            "quantScore": 1.515,
            "entryPrice": null,
            "entryRule": null,
            "invalidationRule": null,
            "metrics": {
              "momentum5d": -0.687,
              "momentum20d": 28.523,
              "realizedVol10dAnnualized": 94.52,
              "volumeRatio": 1.121,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -1.359,
              "h4": -3.788,
              "d1": 0.687,
              "d3": 0.687
            },
            "selectionPrice": 163
          },
          {
            "symbol": "ON",
            "quantScore": 1.453,
            "entryPrice": null,
            "entryRule": null,
            "invalidationRule": null,
            "metrics": {
              "momentum5d": 9.474,
              "momentum20d": 10.227,
              "realizedVol10dAnnualized": 34.95,
              "volumeRatio": 1.123,
              "maxSelectedCorrelation": 0.274
            },
            "outcomes": {
              "h1": 1.231,
              "h4": 0.109,
              "d1": 1.909,
              "d3": 1.909
            },
            "selectionPrice": 83.2699966430664
          },
          {
            "symbol": "MU",
            "quantScore": 0.997,
            "entryPrice": null,
            "entryRule": null,
            "invalidationRule": null,
            "metrics": {
              "momentum5d": 1.56,
              "momentum20d": 17.564,
              "realizedVol10dAnnualized": 37.75,
              "volumeRatio": 1.963,
              "maxSelectedCorrelation": 0.589
            },
            "outcomes": {
              "h1": -1.784,
              "h4": -1.901,
              "d1": -2.189,
              "d3": -2.189
            },
            "selectionPrice": 1095.72998046875
          },
          {
            "symbol": "AMD",
            "quantScore": 0.73,
            "entryPrice": null,
            "entryRule": null,
            "invalidationRule": null,
            "metrics": {
              "momentum5d": -2.15,
              "momentum20d": 33.968,
              "realizedVol10dAnnualized": 53.48,
              "volumeRatio": 0.869,
              "maxSelectedCorrelation": 0.596
            },
            "outcomes": {
              "h1": -1.329,
              "h4": -1.845,
              "d1": -2.704,
              "d3": -2.704
            },
            "selectionPrice": 643.1901245117188
          },
          {
            "symbol": "HPE",
            "quantScore": 0.64,
            "entryPrice": null,
            "entryRule": null,
            "invalidationRule": null,
            "metrics": {
              "momentum5d": 1.669,
              "momentum20d": 26.951,
              "realizedVol10dAnnualized": 27.42,
              "volumeRatio": 0.846,
              "maxSelectedCorrelation": 0.26
            },
            "outcomes": {
              "h1": 0.649,
              "h4": 2.043,
              "d1": -1.489,
              "d3": -1.489
            },
            "selectionPrice": 68.5199966430664
          }
        ]
      },
      {
        "selectedAt": "2026-10-03T12:01:01.670Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "HPE",
            "quantScore": 2.268,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 70.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 68.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.153,
              "momentum20d": 33.764,
              "realizedVol10dAnnualized": 41.56,
              "volumeRatio": 1.577,
              "atrPct": 5.178,
              "gapPct": 3.561,
              "relativeStrength5dPct": 10.374,
              "relativeStrength20dPct": 33.179,
              "avgDollarVolume10d": 1350994228,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 1.951
            },
            "selectionPrice": 69.33000183105469,
            "invalidatedAt": "2026-10-05T13:30:00.000Z",
            "triggeredAt": "2026-10-06T13:30:00.000Z"
          },
          {
            "symbol": "ON",
            "quantScore": 2.096,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 86.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 83.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.961,
              "momentum20d": 17.349,
              "realizedVol10dAnnualized": 40.68,
              "volumeRatio": 2.344,
              "atrPct": 4.369,
              "gapPct": 5.832,
              "relativeStrength5dPct": 10.183,
              "relativeStrength20dPct": 16.763,
              "avgDollarVolume10d": 981230769,
              "maxSelectedCorrelation": 0.322
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 2.076
            },
            "selectionPrice": 84.88999938964844,
            "triggeredAt": "2026-10-05T17:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "ARM",
            "quantScore": 1.755,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 319.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 295.9,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -0.912,
              "momentum20d": 30.925,
              "realizedVol10dAnnualized": 108.76,
              "volumeRatio": 0.995,
              "atrPct": 6.634,
              "gapPct": 4.938,
              "relativeStrength5dPct": -0.69,
              "relativeStrength20dPct": 30.339,
              "avgDollarVolume10d": 2226667240,
              "maxSelectedCorrelation": 0.536
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.246
            },
            "selectionPrice": 307.489990234375,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "AMAT",
            "quantScore": 1.661,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 545.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 534.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.348,
              "momentum20d": 23.167,
              "realizedVol10dAnnualized": 28.51,
              "volumeRatio": 0.986,
              "atrPct": 3.325,
              "gapPct": 2.628,
              "relativeStrength5dPct": 11.57,
              "relativeStrength20dPct": 22.582,
              "avgDollarVolume10d": 3289880343,
              "maxSelectedCorrelation": 0.716
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.793
            },
            "selectionPrice": 540.0399780273438,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.58,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 163.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 156.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.883,
              "momentum20d": 29.889,
              "realizedVol10dAnnualized": 57.03,
              "volumeRatio": 1.551,
              "atrPct": 6.179,
              "gapPct": 3.358,
              "relativeStrength5dPct": 1.104,
              "relativeStrength20dPct": 29.303,
              "avgDollarVolume10d": 3511652944,
              "maxSelectedCorrelation": 0.658
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.94
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-04T17:31:23.915Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "HPE",
            "quantScore": 2.263,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 70.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 68.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.153,
              "momentum20d": 33.764,
              "realizedVol10dAnnualized": 41.56,
              "volumeRatio": 1.577,
              "atrPct": 5.178,
              "gapPct": 3.561,
              "relativeStrength5dPct": 10.374,
              "relativeStrength20dPct": 33.179,
              "avgDollarVolume10d": 1350994228,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.27,
              "d3": 6.226
            },
            "selectionPrice": 69.33000183105469,
            "invalidatedAt": "2026-10-05T13:30:00.000Z",
            "triggeredAt": "2026-10-06T13:30:00.000Z"
          },
          {
            "symbol": "ON",
            "quantScore": 2.094,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 86.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 83.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.961,
              "momentum20d": 17.349,
              "realizedVol10dAnnualized": 40.68,
              "volumeRatio": 2.344,
              "atrPct": 4.369,
              "gapPct": 5.832,
              "relativeStrength5dPct": 10.183,
              "relativeStrength20dPct": 16.763,
              "avgDollarVolume10d": 981230769,
              "maxSelectedCorrelation": 0.322
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 1.191,
              "d3": -2.618
            },
            "selectionPrice": 84.88999938964844,
            "triggeredAt": "2026-10-05T17:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "ARM",
            "quantScore": 1.752,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 319.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 295.9,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -0.912,
              "momentum20d": 30.925,
              "realizedVol10dAnnualized": 108.76,
              "volumeRatio": 0.995,
              "atrPct": 6.634,
              "gapPct": 4.938,
              "relativeStrength5dPct": -0.69,
              "relativeStrength20dPct": 30.339,
              "avgDollarVolume10d": 2226667240,
              "maxSelectedCorrelation": 0.536
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.529,
              "d3": -2.209
            },
            "selectionPrice": 307.489990234375,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "AMAT",
            "quantScore": 1.656,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 545.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 534.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.348,
              "momentum20d": 23.167,
              "realizedVol10dAnnualized": 28.51,
              "volumeRatio": 0.986,
              "atrPct": 3.325,
              "gapPct": 2.628,
              "relativeStrength5dPct": 11.57,
              "relativeStrength20dPct": 22.582,
              "avgDollarVolume10d": 3289880343,
              "maxSelectedCorrelation": 0.716
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.346,
              "d3": -3.17
            },
            "selectionPrice": 540.0399780273438,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.577,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 163.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 156.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.883,
              "momentum20d": 29.889,
              "realizedVol10dAnnualized": 57.03,
              "volumeRatio": 1.551,
              "atrPct": 6.179,
              "gapPct": 3.358,
              "relativeStrength5dPct": 1.104,
              "relativeStrength20dPct": 29.303,
              "avgDollarVolume10d": 3511652944,
              "maxSelectedCorrelation": 0.658
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.937,
              "d3": -6.503
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-05T12:10:16.000Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "HPE",
            "quantScore": 2.261,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 70.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 68.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.153,
              "momentum20d": 33.764,
              "realizedVol10dAnnualized": 41.56,
              "volumeRatio": 1.577,
              "atrPct": 5.178,
              "gapPct": 3.561,
              "relativeStrength5dPct": 10.374,
              "relativeStrength20dPct": 33.179,
              "avgDollarVolume10d": 1350994228,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.161,
              "d1": 1.951,
              "d3": 3.661
            },
            "selectionPrice": 69.33000183105469,
            "invalidatedAt": "2026-10-05T13:30:00.000Z",
            "triggeredAt": "2026-10-06T13:30:00.000Z"
          },
          {
            "symbol": "ON",
            "quantScore": 2.095,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 86.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 83.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.961,
              "momentum20d": 17.349,
              "realizedVol10dAnnualized": 40.68,
              "volumeRatio": 2.344,
              "atrPct": 4.369,
              "gapPct": 5.832,
              "relativeStrength5dPct": 10.183,
              "relativeStrength20dPct": 16.763,
              "avgDollarVolume10d": 981230769,
              "maxSelectedCorrelation": 0.322
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.89,
              "d1": 2.076,
              "d3": -4.647
            },
            "selectionPrice": 84.88999938964844,
            "triggeredAt": "2026-10-05T17:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "ARM",
            "quantScore": 1.749,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 319.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 295.9,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -0.912,
              "momentum20d": 30.925,
              "realizedVol10dAnnualized": 108.76,
              "volumeRatio": 0.995,
              "atrPct": 6.634,
              "gapPct": 4.938,
              "relativeStrength5dPct": -0.69,
              "relativeStrength20dPct": 30.339,
              "avgDollarVolume10d": 2226667240,
              "maxSelectedCorrelation": 0.536
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.965,
              "d1": -0.246,
              "d3": -7.528
            },
            "selectionPrice": 307.489990234375,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "AMAT",
            "quantScore": 1.652,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 545.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 534.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.348,
              "momentum20d": 23.167,
              "realizedVol10dAnnualized": 28.51,
              "volumeRatio": 0.986,
              "atrPct": 3.325,
              "gapPct": 2.628,
              "relativeStrength5dPct": 11.57,
              "relativeStrength20dPct": 22.582,
              "avgDollarVolume10d": 3289880343,
              "maxSelectedCorrelation": 0.716
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.001,
              "d1": -0.793,
              "d3": -5.807
            },
            "selectionPrice": 540.0399780273438,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.576,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 163.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 156.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.883,
              "momentum20d": 29.889,
              "realizedVol10dAnnualized": 57.03,
              "volumeRatio": 1.551,
              "atrPct": 6.179,
              "gapPct": 3.358,
              "relativeStrength5dPct": 1.104,
              "relativeStrength20dPct": 29.303,
              "avgDollarVolume10d": 3511652944,
              "maxSelectedCorrelation": 0.658
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.457,
              "d1": 0.94,
              "d3": -8.264
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z",
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-06T12:15:49.745Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "ON",
            "quantScore": 1.939,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 87.14,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 84.72,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.589,
              "momentum20d": 16.673,
              "realizedVol10dAnnualized": 40.73,
              "volumeRatio": 0.936,
              "atrPct": 4.235,
              "gapPct": 0.247,
              "relativeStrength5dPct": 12.385,
              "relativeStrength20dPct": 16.459,
              "avgDollarVolume10d": 984874668,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.654,
              "d1": -0.834,
              "d3": -5.987
            },
            "selectionPrice": 85.93000030517578,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "ARM",
            "quantScore": 1.906,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 310.2,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 295.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.907,
              "momentum20d": 24.861,
              "realizedVol10dAnnualized": 69.55,
              "volumeRatio": 0.508,
              "atrPct": 6.665,
              "gapPct": 0.176,
              "relativeStrength5dPct": 5.703,
              "relativeStrength20dPct": 24.646,
              "avgDollarVolume10d": 1887536457,
              "maxSelectedCorrelation": 0.765
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.334,
              "d1": -2.962,
              "d3": -7.849
            },
            "selectionPrice": 302.8999938964844,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 1.902,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 162.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 157.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.18,
              "momentum20d": 9.755,
              "realizedVol10dAnnualized": 48.69,
              "volumeRatio": 1.296,
              "atrPct": 4.395,
              "gapPct": 1.103,
              "relativeStrength5dPct": 9.976,
              "relativeStrength20dPct": 9.54,
              "avgDollarVolume10d": 1685843027,
              "maxSelectedCorrelation": 0.114
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.859,
              "d1": -0.615,
              "d3": 2.022
            },
            "selectionPrice": 160.11000061035156,
            "triggeredAt": "2026-10-06T13:30:00.000Z",
            "invalidatedAt": "2026-10-30T14:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.821,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 69.39,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 67.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.149,
              "momentum20d": 25.569,
              "realizedVol10dAnnualized": 43.53,
              "volumeRatio": 0.745,
              "atrPct": 5.257,
              "gapPct": -0.591,
              "relativeStrength5dPct": 7.945,
              "relativeStrength20dPct": 25.355,
              "avgDollarVolume10d": 1300024690,
              "maxSelectedCorrelation": 0.343
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.54,
              "d1": 0.937,
              "d3": 3.298
            },
            "selectionPrice": 68.36000061035156,
            "triggeredAt": "2026-10-06T13:30:00.000Z",
            "invalidatedAt": "2026-10-13T13:30:00.000Z"
          },
          {
            "symbol": "AMAT",
            "quantScore": 1.505,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 547.19,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 537.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.406,
              "momentum20d": 24.402,
              "realizedVol10dAnnualized": 26.15,
              "volumeRatio": 0.733,
              "atrPct": 3.298,
              "gapPct": 0.176,
              "relativeStrength5dPct": 10.202,
              "relativeStrength20dPct": 24.187,
              "avgDollarVolume10d": 3040678003,
              "maxSelectedCorrelation": 0.642
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.121,
              "d1": -2.517,
              "d3": -2.884
            },
            "selectionPrice": 542.280029296875,
            "invalidatedAt": "2026-10-06T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-07T12:20:06.325Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "HPE",
            "quantScore": 2.644,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 71.52,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 69.44,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.62,
              "momentum20d": 35.538,
              "realizedVol10dAnnualized": 42.77,
              "volumeRatio": 0.781,
              "atrPct": 5.072,
              "gapPct": 2.063,
              "relativeStrength5dPct": 12.672,
              "relativeStrength20dPct": 34.383,
              "avgDollarVolume10d": 1339672627,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 1.192,
              "d1": -1.725,
              "d3": -0.928
            },
            "selectionPrice": 70.4800033569336,
            "triggeredAt": "2026-10-07T13:30:00.000Z",
            "invalidatedAt": "2026-10-13T13:30:00.000Z"
          },
          {
            "symbol": "MRVL",
            "quantScore": 2.624,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 291.1,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 282.92,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.017,
              "momentum20d": 28.387,
              "realizedVol10dAnnualized": 41.14,
              "volumeRatio": 3.326,
              "atrPct": 4.717,
              "gapPct": 0.004,
              "relativeStrength5dPct": 7.069,
              "relativeStrength20dPct": 27.232,
              "avgDollarVolume10d": 5295986193,
              "maxSelectedCorrelation": 0.132
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.475,
              "d1": -2.613,
              "d3": -4.999
            },
            "selectionPrice": 287.010009765625,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 2.016,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 166.7,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 162.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.913,
              "momentum20d": 13.337,
              "realizedVol10dAnnualized": 39.66,
              "volumeRatio": 1.384,
              "atrPct": 4.37,
              "gapPct": 3.691,
              "relativeStrength5dPct": 8.965,
              "relativeStrength20dPct": 12.181,
              "avgDollarVolume10d": 1473444909,
              "maxSelectedCorrelation": 0.204
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.733,
              "d1": 1.897,
              "d3": 8.054
            },
            "selectionPrice": 164.44000244140625,
            "invalidatedAt": "2026-10-07T13:30:00.000Z",
            "triggeredAt": "2026-10-07T17:30:00.000Z"
          },
          {
            "symbol": "AMD",
            "quantScore": 1.846,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 656.26,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 642.58,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.888,
              "momentum20d": 35.984,
              "realizedVol10dAnnualized": 30.4,
              "volumeRatio": 1.441,
              "atrPct": 3.899,
              "gapPct": 2.579,
              "relativeStrength5dPct": 4.94,
              "relativeStrength20dPct": 34.829,
              "avgDollarVolume10d": 12312626212,
              "maxSelectedCorrelation": 0.628
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.35,
              "d1": -0.572,
              "d3": -7.166
            },
            "selectionPrice": 649.4199829101562,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          },
          {
            "symbol": "ON",
            "quantScore": 1.834,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 87.54,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 85.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.641,
              "momentum20d": 16.039,
              "realizedVol10dAnnualized": 41.02,
              "volumeRatio": 0.708,
              "atrPct": 3.644,
              "gapPct": 1.129,
              "relativeStrength5dPct": 11.692,
              "relativeStrength20dPct": 14.884,
              "avgDollarVolume10d": 961230127,
              "maxSelectedCorrelation": 0.395
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.447,
              "d1": -3.324,
              "d3": -9.088
            },
            "selectionPrice": 86.30999755859375,
            "invalidatedAt": "2026-10-07T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-08T12:10:27.632Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "HPE",
            "quantScore": 2.477,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 73.16,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 71.02,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.835,
              "momentum20d": 28.663,
              "realizedVol10dAnnualized": 42.83,
              "volumeRatio": 1.157,
              "atrPct": 4.764,
              "gapPct": -0.525,
              "relativeStrength5dPct": 10.921,
              "relativeStrength20dPct": 27.193,
              "avgDollarVolume10d": 1447680308,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.101,
              "d1": 0.681,
              "d3": -1.011
            },
            "selectionPrice": 72.08999633789062,
            "invalidatedAt": "2026-10-08T13:30:00.000Z",
            "triggeredAt": "2026-10-09T17:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 2.024,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 167.8,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 164.26,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.955,
              "momentum20d": 23.811,
              "realizedVol10dAnnualized": 30.79,
              "volumeRatio": 0.889,
              "atrPct": 4.433,
              "gapPct": -1.137,
              "relativeStrength5dPct": 10.042,
              "relativeStrength20dPct": 22.341,
              "avgDollarVolume10d": 1248260019,
              "maxSelectedCorrelation": 0.179
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.508,
              "d1": 0.117,
              "d3": 5.358
            },
            "selectionPrice": 166.02999877929688,
            "invalidatedAt": "2026-10-08T13:30:00.000Z",
            "triggeredAt": "2026-10-08T13:30:00.000Z"
          },
          {
            "symbol": "MRVL",
            "quantScore": 1.86,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 288.76,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 280.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.748,
              "momentum20d": 26.294,
              "realizedVol10dAnnualized": 41.39,
              "volumeRatio": 1.069,
              "atrPct": 4.564,
              "gapPct": -1.989,
              "relativeStrength5dPct": 5.835,
              "relativeStrength20dPct": 24.824,
              "avgDollarVolume10d": 5542884572,
              "maxSelectedCorrelation": 0.127
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.095,
              "d1": 0.384,
              "d3": -3.968
            },
            "selectionPrice": 284.67999267578125,
            "invalidatedAt": "2026-10-08T13:30:00.000Z"
          },
          {
            "symbol": "SMCI",
            "quantScore": 1.841,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 45.55,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 44.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.423,
              "momentum20d": 11.624,
              "realizedVol10dAnnualized": 39.24,
              "volumeRatio": 1.323,
              "atrPct": 4.733,
              "gapPct": -1.979,
              "relativeStrength5dPct": 7.51,
              "relativeStrength20dPct": 10.154,
              "avgDollarVolume10d": 1493411431,
              "maxSelectedCorrelation": 0.521
            },
            "outcomes": {
              "h1": 0,
              "h4": -2.495,
              "d1": -1.606,
              "d3": -8.431
            },
            "selectionPrice": 44.939998626708984,
            "invalidatedAt": "2026-10-08T13:30:00.000Z"
          },
          {
            "symbol": "ON",
            "quantScore": 1.58,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 83.94,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 81.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.337,
              "momentum20d": 16.08,
              "realizedVol10dAnnualized": 50.14,
              "volumeRatio": 1.066,
              "atrPct": 3.856,
              "gapPct": -2.433,
              "relativeStrength5dPct": 5.424,
              "relativeStrength20dPct": 14.61,
              "avgDollarVolume10d": 950705823,
              "maxSelectedCorrelation": 0.484
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.75,
              "d1": -0.91,
              "d3": -6.482
            },
            "selectionPrice": 82.51000213623047,
            "invalidatedAt": "2026-10-08T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-09T12:17:00.858Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 2.06,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 166.43,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 162.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.376,
              "momentum20d": 29.789,
              "realizedVol10dAnnualized": 32.79,
              "volumeRatio": 1.007,
              "atrPct": 4.531,
              "gapPct": -0.452,
              "relativeStrength5dPct": 9.075,
              "relativeStrength20dPct": 28.277,
              "avgDollarVolume10d": 1200401004,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.267,
              "d1": 4.617,
              "d3": 4.617
            },
            "selectionPrice": 164.55999755859375,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.987,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 72.11,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 69.89,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.941,
              "momentum20d": 20.543,
              "realizedVol10dAnnualized": 45.05,
              "volumeRatio": 0.776,
              "atrPct": 4.882,
              "gapPct": -2.275,
              "relativeStrength5dPct": 8.64,
              "relativeStrength20dPct": 19.031,
              "avgDollarVolume10d": 1388211880,
              "maxSelectedCorrelation": 0.053
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.868,
              "d1": 0.07,
              "d3": 0.07
            },
            "selectionPrice": 71,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-12T14:30:00.000Z"
          },
          {
            "symbol": "MRVL",
            "quantScore": 1.261,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 279.04,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 270.28,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.454,
              "momentum20d": 16.872,
              "realizedVol10dAnnualized": 46.03,
              "volumeRatio": 1.184,
              "atrPct": 5.001,
              "gapPct": -2.487,
              "relativeStrength5dPct": 1.153,
              "relativeStrength20dPct": 15.359,
              "avgDollarVolume10d": 5781128902,
              "maxSelectedCorrelation": 0.287
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.625,
              "d1": -0.418,
              "d3": -0.418
            },
            "selectionPrice": 274.6600036621094,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-09T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 1.235,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 200.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 197.19,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.599,
              "momentum20d": 17.254,
              "realizedVol10dAnnualized": 19.23,
              "volumeRatio": 2.405,
              "atrPct": 2.932,
              "gapPct": 2.514,
              "relativeStrength5dPct": 3.298,
              "relativeStrength20dPct": 15.741,
              "avgDollarVolume10d": 3929353809,
              "maxSelectedCorrelation": 0.05
            },
            "outcomes": {
              "h1": 0,
              "h4": 1.481,
              "d1": 2.385,
              "d3": 2.385
            },
            "selectionPrice": 198.77999877929688,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-15T13:30:00.000Z"
          },
          {
            "symbol": "DELL",
            "quantScore": 1.173,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 582.77,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 566.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.056,
              "momentum20d": 7.342,
              "realizedVol10dAnnualized": 41.29,
              "volumeRatio": 1.002,
              "atrPct": 4.351,
              "gapPct": -1.755,
              "relativeStrength5dPct": 4.755,
              "relativeStrength20dPct": 5.83,
              "avgDollarVolume10d": 3284995301,
              "maxSelectedCorrelation": 0.579
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.092,
              "d1": 0.523,
              "d3": 0.523
            },
            "selectionPrice": 574.5499877929688,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-09T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-10T12:08:07.738Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 2.085,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 172.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 169.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.854,
              "momentum20d": 34.953,
              "realizedVol10dAnnualized": 29.66,
              "volumeRatio": 0.886,
              "atrPct": 4.149,
              "gapPct": 0.902,
              "relativeStrength5dPct": 11.694,
              "relativeStrength20dPct": 32.216,
              "avgDollarVolume10d": 1259378107,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.488
            },
            "selectionPrice": 170.85000610351562,
            "triggeredAt": "2026-10-12T13:30:00.000Z",
            "invalidatedAt": "2026-10-15T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 1.777,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 211.05,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 207.05,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.755,
              "momentum20d": 26.04,
              "realizedVol10dAnnualized": 27.62,
              "volumeRatio": 1.69,
              "atrPct": 2.947,
              "gapPct": 1.356,
              "relativeStrength5dPct": 9.595,
              "relativeStrength20dPct": 23.303,
              "avgDollarVolume10d": 4544933121,
              "maxSelectedCorrelation": 0.108
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.637
            },
            "selectionPrice": 209.0500030517578,
            "triggeredAt": "2026-10-12T13:30:00.000Z",
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.634,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 74.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 72.32,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.957,
              "momentum20d": 33.032,
              "realizedVol10dAnnualized": 44.8,
              "volumeRatio": 0.652,
              "atrPct": 4.673,
              "gapPct": 1.197,
              "relativeStrength5dPct": 4.797,
              "relativeStrength20dPct": 30.295,
              "avgDollarVolume10d": 1421623613,
              "maxSelectedCorrelation": 0.126
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.155
            },
            "selectionPrice": 73.45999908447266,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "PANW",
            "quantScore": 1.168,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 424.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 412.72,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.854,
              "momentum20d": 23.72,
              "realizedVol10dAnnualized": 41.79,
              "volumeRatio": 0.83,
              "atrPct": 3.882,
              "gapPct": 1.478,
              "relativeStrength5dPct": 2.694,
              "relativeStrength20dPct": 20.983,
              "avgDollarVolume10d": 2071306813,
              "maxSelectedCorrelation": 0.322
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.195
            },
            "selectionPrice": 418.7799987792969,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "DELL",
            "quantScore": 1.124,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 593.27,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 578.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.185,
              "momentum20d": 15.68,
              "realizedVol10dAnnualized": 35.5,
              "volumeRatio": 1.133,
              "atrPct": 4.312,
              "gapPct": 1.236,
              "relativeStrength5dPct": 3.024,
              "relativeStrength20dPct": 12.944,
              "avgDollarVolume10d": 3162133602,
              "maxSelectedCorrelation": 0.772
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.314
            },
            "selectionPrice": 586.0599975585938,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-11T16:46:34.519Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 2.094,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 172.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 169.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.854,
              "momentum20d": 34.953,
              "realizedVol10dAnnualized": 29.66,
              "volumeRatio": 0.886,
              "atrPct": 4.149,
              "gapPct": 0.902,
              "relativeStrength5dPct": 11.694,
              "relativeStrength20dPct": 32.216,
              "avgDollarVolume10d": 1259378107,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -3.397
            },
            "selectionPrice": 170.85000610351562,
            "triggeredAt": "2026-10-12T13:30:00.000Z",
            "invalidatedAt": "2026-10-15T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 1.787,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 211.05,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 207.05,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.755,
              "momentum20d": 26.04,
              "realizedVol10dAnnualized": 27.62,
              "volumeRatio": 1.69,
              "atrPct": 2.947,
              "gapPct": 1.356,
              "relativeStrength5dPct": 9.595,
              "relativeStrength20dPct": 23.303,
              "avgDollarVolume10d": 4544933121,
              "maxSelectedCorrelation": 0.108
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.179,
              "d3": -2.911
            },
            "selectionPrice": 209.0500030517578,
            "triggeredAt": "2026-10-12T13:30:00.000Z",
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.634,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 74.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 72.32,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.957,
              "momentum20d": 33.032,
              "realizedVol10dAnnualized": 44.8,
              "volumeRatio": 0.652,
              "atrPct": 4.673,
              "gapPct": 1.197,
              "relativeStrength5dPct": 4.797,
              "relativeStrength20dPct": 30.295,
              "avgDollarVolume10d": 1421623613,
              "maxSelectedCorrelation": 0.126
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.593,
              "d3": -11.446
            },
            "selectionPrice": 73.45999908447266,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "PANW",
            "quantScore": 1.167,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 424.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 412.72,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.854,
              "momentum20d": 23.72,
              "realizedVol10dAnnualized": 41.79,
              "volumeRatio": 0.83,
              "atrPct": 3.882,
              "gapPct": 1.478,
              "relativeStrength5dPct": 2.694,
              "relativeStrength20dPct": 20.983,
              "avgDollarVolume10d": 2071306813,
              "maxSelectedCorrelation": 0.322
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -2.34,
              "d3": -7.709
            },
            "selectionPrice": 418.7799987792969,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          },
          {
            "symbol": "DELL",
            "quantScore": 1.125,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 593.27,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 578.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.185,
              "momentum20d": 15.68,
              "realizedVol10dAnnualized": 35.5,
              "volumeRatio": 1.133,
              "atrPct": 4.312,
              "gapPct": 1.236,
              "relativeStrength5dPct": 3.024,
              "relativeStrength20dPct": 12.944,
              "avgDollarVolume10d": 3162133602,
              "maxSelectedCorrelation": 0.772
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.21,
              "d3": -11.73
            },
            "selectionPrice": 586.0599975585938,
            "invalidatedAt": "2026-10-12T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-12T14:08:45.612Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 2.333,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 178.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 174.75,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.299,
              "momentum20d": 37.122,
              "realizedVol10dAnnualized": 30.25,
              "volumeRatio": 0.37,
              "atrPct": 3.867,
              "gapPct": 1.785,
              "relativeStrength5dPct": 9.895,
              "relativeStrength20dPct": 35.334,
              "avgDollarVolume10d": 1209069231,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.471,
              "h4": 0.46,
              "d1": 0.871,
              "d3": -2.326
            },
            "selectionPrice": 176.71499633789062,
            "triggeredAt": "2026-10-12T19:30:00.000Z",
            "invalidatedAt": "2026-10-13T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 1.586,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 209.43,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 205.57,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.556,
              "momentum20d": 24.081,
              "realizedVol10dAnnualized": 26.87,
              "volumeRatio": 0.272,
              "atrPct": 3.04,
              "gapPct": -0.072,
              "relativeStrength5dPct": 9.153,
              "relativeStrength20dPct": 22.292,
              "avgDollarVolume10d": 4275548954,
              "maxSelectedCorrelation": 0.016
            },
            "outcomes": {
              "h1": -0.586,
              "h4": -0.456,
              "d1": -0.192,
              "d3": -4.994
            },
            "selectionPrice": 207.5500030517578,
            "triggeredAt": "2026-10-13T13:30:00.000Z",
            "invalidatedAt": "2026-10-14T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.356,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 72.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 70.19,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.434,
              "momentum20d": 14.981,
              "realizedVol10dAnnualized": 48.73,
              "volumeRatio": 0.147,
              "atrPct": 4.825,
              "gapPct": -0.83,
              "relativeStrength5dPct": 4.031,
              "relativeStrength20dPct": 13.192,
              "avgDollarVolume10d": 1292844975,
              "maxSelectedCorrelation": 0.24
            },
            "outcomes": {
              "h1": 0.61,
              "h4": 0.079,
              "d1": -1.589,
              "d3": -15.774
            },
            "selectionPrice": 71.41500091552734,
            "invalidatedAt": "2026-10-12T14:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.323,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 145.26,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 142.64,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.783,
              "momentum20d": 8.617,
              "realizedVol10dAnnualized": 26.2,
              "volumeRatio": 0.382,
              "atrPct": 3.685,
              "gapPct": 3.322,
              "relativeStrength5dPct": 5.379,
              "relativeStrength20dPct": 6.828,
              "avgDollarVolume10d": 1223074633,
              "maxSelectedCorrelation": 0.325
            },
            "outcomes": {
              "h1": -1.002,
              "h4": -1.518,
              "d1": 0.302,
              "d3": 3.753
            },
            "selectionPrice": 143.85000610351562,
            "invalidatedAt": "2026-10-12T14:30:00.000Z",
            "triggeredAt": "2026-10-15T13:30:00.000Z"
          },
          {
            "symbol": "PANW",
            "quantScore": 1.1,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 416.57,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 405.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.028,
              "momentum20d": 24.282,
              "realizedVol10dAnnualized": 39.56,
              "volumeRatio": 0.183,
              "atrPct": 3.924,
              "gapPct": 0.628,
              "relativeStrength5dPct": 0.624,
              "relativeStrength20dPct": 22.494,
              "avgDollarVolume10d": 1817905082,
              "maxSelectedCorrelation": 0.563
            },
            "outcomes": {
              "h1": -0.091,
              "h4": -0.703,
              "d1": -0.421,
              "d3": -8.977
            },
            "selectionPrice": 410.4849853515625,
            "invalidatedAt": "2026-10-12T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-13T17:47:59.128Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.744,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 180.22,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 175.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.277,
              "momentum20d": 32.982,
              "realizedVol10dAnnualized": 35.1,
              "volumeRatio": 0.484,
              "atrPct": 3.482,
              "gapPct": -1.908,
              "relativeStrength5dPct": 8.499,
              "relativeStrength20dPct": 30.817,
              "avgDollarVolume10d": 1307446562,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0.062,
              "h4": -0.048,
              "d1": -2.413,
              "d3": -3.692
            },
            "selectionPrice": 178.05999755859375,
            "invalidatedAt": "2026-10-14T13:30:00.000Z",
            "triggeredAt": "2026-10-16T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 1.364,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 70.26,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 67.75,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -2.093,
              "momentum20d": 24.535,
              "realizedVol10dAnnualized": 52.31,
              "volumeRatio": 0.712,
              "atrPct": 5.306,
              "gapPct": -3.939,
              "relativeStrength5dPct": -1.87,
              "relativeStrength20dPct": 22.37,
              "avgDollarVolume10d": 1372630823,
              "maxSelectedCorrelation": 0.181
            },
            "outcomes": {
              "h1": 0.189,
              "h4": -4.558,
              "d1": -8.053,
              "d3": -19.368
            },
            "selectionPrice": 69.0199966430664,
            "invalidatedAt": "2026-10-14T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 1.156,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 209.79,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 206.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.242,
              "momentum20d": 19.958,
              "realizedVol10dAnnualized": 26.24,
              "volumeRatio": 0.405,
              "atrPct": 2.876,
              "gapPct": -0.526,
              "relativeStrength5dPct": 8.464,
              "relativeStrength20dPct": 17.793,
              "avgDollarVolume10d": 4567672076,
              "maxSelectedCorrelation": 0.117
            },
            "outcomes": {
              "h1": 0.192,
              "h4": -0.451,
              "d1": -3.569,
              "d3": -10.346
            },
            "selectionPrice": 207.9499969482422,
            "invalidatedAt": "2026-10-14T13:30:00.000Z"
          },
          {
            "symbol": "UNG",
            "quantScore": 0.987,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 11.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 11.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.493,
              "momentum20d": 9.68,
              "realizedVol10dAnnualized": 30.99,
              "volumeRatio": 0.622,
              "atrPct": 3.748,
              "gapPct": 0.916,
              "relativeStrength5dPct": 5.715,
              "relativeStrength20dPct": 7.514,
              "avgDollarVolume10d": 322899717,
              "maxSelectedCorrelation": 0.408
            },
            "outcomes": {
              "h1": 0.131,
              "h4": -4.347,
              "d1": -4.074,
              "d3": -6.615
            },
            "selectionPrice": 11.324999809265137,
            "invalidatedAt": "2026-10-14T13:30:00.000Z"
          },
          {
            "symbol": "META",
            "quantScore": 0.941,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 770.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 755.63,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.26,
              "momentum20d": 14.628,
              "realizedVol10dAnnualized": 27.74,
              "volumeRatio": 1.024,
              "atrPct": 3.029,
              "gapPct": -0.925,
              "relativeStrength5dPct": 3.482,
              "relativeStrength20dPct": 12.463,
              "avgDollarVolume10d": 11856784755,
              "maxSelectedCorrelation": 0.674
            },
            "outcomes": {
              "h1": -0.306,
              "h4": -2.623,
              "d1": -3.431,
              "d3": -7.567
            },
            "selectionPrice": 763.0700073242188,
            "invalidatedAt": "2026-10-14T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-14T16:19:55.543Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.504,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 174.89,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 169.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.861,
              "momentum20d": 32.789,
              "realizedVol10dAnnualized": 41.09,
              "volumeRatio": 0.501,
              "atrPct": 3.661,
              "gapPct": -1.116,
              "relativeStrength5dPct": 4.853,
              "relativeStrength20dPct": 31.19,
              "avgDollarVolume10d": 1263956714,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.277,
              "h4": -0.186,
              "d1": 0.699,
              "d3": 1.063
            },
            "selectionPrice": 172.46499633789062,
            "invalidatedAt": "2026-10-15T13:30:00.000Z",
            "triggeredAt": "2026-10-15T17:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 0.915,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 205.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 201.58,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.951,
              "momentum20d": 18.063,
              "realizedVol10dAnnualized": 30.4,
              "volumeRatio": 0.377,
              "atrPct": 2.917,
              "gapPct": -0.628,
              "relativeStrength5dPct": 5.943,
              "relativeStrength20dPct": 16.464,
              "avgDollarVolume10d": 4474108997,
              "maxSelectedCorrelation": 0.328
            },
            "outcomes": {
              "h1": -0.465,
              "h4": -3.501,
              "d1": -1.44,
              "d3": -3.964
            },
            "selectionPrice": 203.92990112304688,
            "invalidatedAt": "2026-10-14T17:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 0.725,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 146.57,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 141.32,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -6.145,
              "momentum20d": 11.069,
              "realizedVol10dAnnualized": 52.62,
              "volumeRatio": 0.561,
              "atrPct": 5.741,
              "gapPct": -1.627,
              "relativeStrength5dPct": -5.153,
              "relativeStrength20dPct": 9.469,
              "avgDollarVolume10d": 2578649934,
              "maxSelectedCorrelation": 0.424
            },
            "outcomes": {
              "h1": -0.761,
              "h4": -2.704,
              "d1": 3.083,
              "d3": -2.906
            },
            "selectionPrice": 144.0399932861328,
            "triggeredAt": "2026-10-15T14:30:00.000Z",
            "invalidatedAt": "2026-10-15T13:30:00.000Z"
          },
          {
            "symbol": "HPE",
            "quantScore": 0.707,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 65.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 62.78,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -10.986,
              "momentum20d": 14.835,
              "realizedVol10dAnnualized": 62.4,
              "volumeRatio": 0.499,
              "atrPct": 5.699,
              "gapPct": -5.77,
              "relativeStrength5dPct": -9.994,
              "relativeStrength20dPct": 13.236,
              "avgDollarVolume10d": 1200343246,
              "maxSelectedCorrelation": 0.434
            },
            "outcomes": {
              "h1": 0.032,
              "h4": -9.064,
              "d1": -6.437,
              "d3": -9.957
            },
            "selectionPrice": 64.22250366210938,
            "invalidatedAt": "2026-10-14T18:30:00.000Z"
          },
          {
            "symbol": "META",
            "quantScore": 0.57,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 743,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 726.66,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.874,
              "momentum20d": 9.637,
              "realizedVol10dAnnualized": 32.1,
              "volumeRatio": 0.449,
              "atrPct": 3.061,
              "gapPct": -0.23,
              "relativeStrength5dPct": 2.867,
              "relativeStrength20dPct": 8.037,
              "avgDollarVolume10d": 11069290894,
              "maxSelectedCorrelation": 0.556
            },
            "outcomes": {
              "h1": 0.282,
              "h4": -0.537,
              "d1": 0.772,
              "d3": -5.223
            },
            "selectionPrice": 735.52001953125,
            "invalidatedAt": "2026-10-15T13:30:00.000Z",
            "triggeredAt": "2026-10-15T16:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-15T16:07:28.035Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.625,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 174.87,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 169.91,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.758,
              "momentum20d": 32.648,
              "realizedVol10dAnnualized": 41.48,
              "volumeRatio": 0.531,
              "atrPct": 3.987,
              "gapPct": -5.008,
              "relativeStrength5dPct": 5.258,
              "relativeStrength20dPct": 30.525,
              "avgDollarVolume10d": 1330026737,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 1.816,
              "h4": 2.545,
              "d1": -2.031,
              "d3": 0.362
            },
            "selectionPrice": 172.44000244140625,
            "triggeredAt": "2026-10-15T17:30:00.000Z",
            "invalidatedAt": "2026-10-16T16:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.194,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 151.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 146.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -1.862,
              "momentum20d": 17.808,
              "realizedVol10dAnnualized": 51.19,
              "volumeRatio": 0.705,
              "atrPct": 6.062,
              "gapPct": -3.852,
              "relativeStrength5dPct": -1.362,
              "relativeStrength20dPct": 15.685,
              "avgDollarVolume10d": 2718499627,
              "maxSelectedCorrelation": 0.432
            },
            "outcomes": {
              "h1": 0.178,
              "h4": -1.904,
              "d1": -7.574,
              "d3": -5.81
            },
            "selectionPrice": 148.72999572753906,
            "triggeredAt": "2026-10-15T19:30:00.000Z",
            "invalidatedAt": "2026-10-16T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 1.089,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1286.28,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1256.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.723,
              "momentum20d": 11.759,
              "realizedVol10dAnnualized": 33.27,
              "volumeRatio": 0.794,
              "atrPct": 2.908,
              "gapPct": 2.176,
              "relativeStrength5dPct": 9.223,
              "relativeStrength20dPct": 9.636,
              "avgDollarVolume10d": 2659006494,
              "maxSelectedCorrelation": 0.197
            },
            "outcomes": {
              "h1": 0.289,
              "h4": 0.208,
              "d1": -0.319,
              "d3": -0.721
            },
            "selectionPrice": 1271.35498046875,
            "invalidatedAt": "2026-10-15T19:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          },
          {
            "symbol": "UNH",
            "quantScore": 1.05,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 416.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 407.49,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.043,
              "momentum20d": 9.768,
              "realizedVol10dAnnualized": 30.98,
              "volumeRatio": 0.596,
              "atrPct": 2.895,
              "gapPct": 1.421,
              "relativeStrength5dPct": 11.543,
              "relativeStrength20dPct": 7.645,
              "avgDollarVolume10d": 2709135559,
              "maxSelectedCorrelation": 0.684
            },
            "outcomes": {
              "h1": 0.004,
              "h4": -2.864,
              "d1": -2.147,
              "d3": -1.359
            },
            "selectionPrice": 412.1199951171875,
            "invalidatedAt": "2026-10-15T19:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          },
          {
            "symbol": "WMT",
            "quantScore": 0.835,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 119.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 117.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.417,
              "momentum20d": 10.474,
              "realizedVol10dAnnualized": 18.42,
              "volumeRatio": 0.893,
              "atrPct": 2.166,
              "gapPct": 3.366,
              "relativeStrength5dPct": 7.917,
              "relativeStrength20dPct": 8.351,
              "avgDollarVolume10d": 2260499614,
              "maxSelectedCorrelation": 0.574
            },
            "outcomes": {
              "h1": -0.101,
              "h4": 0.379,
              "d1": 0.211,
              "d3": -0.059
            },
            "selectionPrice": 118.70999908447266,
            "invalidatedAt": "2026-10-15T19:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-16T14:49:43.722Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.698,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 181.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 175.98,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.523,
              "momentum20d": 38.863,
              "realizedVol10dAnnualized": 42.04,
              "volumeRatio": 0.32,
              "atrPct": 3.896,
              "gapPct": -0.14,
              "relativeStrength5dPct": 5.318,
              "relativeStrength20dPct": 37.58,
              "avgDollarVolume10d": 1438882487,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -3.469,
              "h4": -3.377,
              "d1": -1.112,
              "d3": -1.679
            },
            "selectionPrice": 178.57000732421875,
            "invalidatedAt": "2026-10-16T15:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 0.955,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 147.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 142.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -6.013,
              "momentum20d": 9.686,
              "realizedVol10dAnnualized": 58.33,
              "volumeRatio": 0.365,
              "atrPct": 6.383,
              "gapPct": -3.404,
              "relativeStrength5dPct": -5.218,
              "relativeStrength20dPct": 8.404,
              "avgDollarVolume10d": 2491969292,
              "maxSelectedCorrelation": 0.609
            },
            "outcomes": {
              "h1": -0.816,
              "h4": -1.142,
              "d1": 1.077,
              "d3": 0.441
            },
            "selectionPrice": 145.0399932861328,
            "invalidatedAt": "2026-10-16T15:30:00.000Z",
            "triggeredAt": "2026-10-21T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 0.823,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 146.68,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 143.26,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.918,
              "momentum20d": 4.694,
              "realizedVol10dAnnualized": 34.05,
              "volumeRatio": 0.427,
              "atrPct": 4.231,
              "gapPct": 2.255,
              "relativeStrength5dPct": 3.713,
              "relativeStrength20dPct": 3.412,
              "avgDollarVolume10d": 1484846264,
              "maxSelectedCorrelation": 0.641
            },
            "outcomes": {
              "h1": 0.135,
              "h4": 0.795,
              "d1": 1.892,
              "d3": 2.464
            },
            "selectionPrice": 144.89500427246094,
            "invalidatedAt": "2026-10-16T15:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.788,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1280.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1256.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.587,
              "momentum20d": 10.092,
              "realizedVol10dAnnualized": 27.62,
              "volumeRatio": 0.288,
              "atrPct": 2.898,
              "gapPct": 0.351,
              "relativeStrength5dPct": 8.382,
              "relativeStrength20dPct": 8.809,
              "avgDollarVolume10d": 2735440466,
              "maxSelectedCorrelation": 0.409
            },
            "outcomes": {
              "h1": -0.251,
              "h4": -0.372,
              "d1": -0.653,
              "d3": -1.25
            },
            "selectionPrice": 1268.4150390625,
            "invalidatedAt": "2026-10-16T16:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          },
          {
            "symbol": "NKE",
            "quantScore": 0.672,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 37.77,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 37.1,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.851,
              "momentum20d": 2.957,
              "realizedVol10dAnnualized": 25.75,
              "volumeRatio": 0.282,
              "atrPct": 3.237,
              "gapPct": 1.427,
              "relativeStrength5dPct": 8.646,
              "relativeStrength20dPct": 1.674,
              "avgDollarVolume10d": 1335065504,
              "maxSelectedCorrelation": 0.743
            },
            "outcomes": {
              "h1": -0.629,
              "h4": -0.695,
              "d1": -1.15,
              "d3": -1.538
            },
            "selectionPrice": 37.435001373291016,
            "invalidatedAt": "2026-10-16T17:30:00.000Z",
            "triggeredAt": "2026-10-20T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-17T14:25:30.828Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.447,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 172.59,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 166.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -0.778,
              "momentum20d": 31.82,
              "realizedVol10dAnnualized": 52.21,
              "volumeRatio": 1.684,
              "atrPct": 4.486,
              "gapPct": -0.239,
              "relativeStrength5dPct": 1.189,
              "relativeStrength20dPct": 31.734,
              "avgDollarVolume10d": 1575493492,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.418
            },
            "selectionPrice": 169.52000427246094,
            "triggeredAt": "2026-10-19T13:30:00.000Z",
            "invalidatedAt": "2026-10-22T17:30:00.000Z"
          },
          {
            "symbol": "USO",
            "quantScore": 0.871,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 163.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 160.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.15,
              "momentum20d": 4.153,
              "realizedVol10dAnnualized": 24.29,
              "volumeRatio": 2.029,
              "atrPct": 2.936,
              "gapPct": -0.216,
              "relativeStrength5dPct": 11.118,
              "relativeStrength20dPct": 4.068,
              "avgDollarVolume10d": 636910567,
              "maxSelectedCorrelation": 0.461
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.747
            },
            "selectionPrice": 161.75999450683594,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-22T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 0.853,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 140.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 133.49,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -11.345,
              "momentum20d": 3.463,
              "realizedVol10dAnnualized": 70.38,
              "volumeRatio": 1.878,
              "atrPct": 7.233,
              "gapPct": -3.53,
              "relativeStrength5dPct": -9.377,
              "relativeStrength20dPct": 3.378,
              "avgDollarVolume10d": 2704216480,
              "maxSelectedCorrelation": 0.743
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 3.245
            },
            "selectionPrice": 136.8300018310547,
            "triggeredAt": "2026-10-19T13:30:00.000Z",
            "invalidatedAt": "2026-10-30T13:30:00.000Z"
          },
          {
            "symbol": "COP",
            "quantScore": 0.734,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 147.68,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 145.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.254,
              "momentum20d": 10.001,
              "realizedVol10dAnnualized": 20.83,
              "volumeRatio": 1.349,
              "atrPct": 2.084,
              "gapPct": 0.677,
              "relativeStrength5dPct": 11.222,
              "relativeStrength20dPct": 9.916,
              "avgDollarVolume10d": 863935740,
              "maxSelectedCorrelation": 0.508
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.195
            },
            "selectionPrice": 146.50999450683594,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-23T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.651,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1269.1,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1244.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.594,
              "momentum20d": 9.076,
              "realizedVol10dAnnualized": 27.72,
              "volumeRatio": 1.058,
              "atrPct": 2.96,
              "gapPct": 0.351,
              "relativeStrength5dPct": 8.562,
              "relativeStrength20dPct": 8.99,
              "avgDollarVolume10d": 2930941498,
              "maxSelectedCorrelation": 0.727
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 3.699
            },
            "selectionPrice": 1257.030029296875,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-18T14:49:16.299Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.449,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 172.59,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 166.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -0.778,
              "momentum20d": 31.82,
              "realizedVol10dAnnualized": 52.21,
              "volumeRatio": 1.684,
              "atrPct": 4.486,
              "gapPct": -0.239,
              "relativeStrength5dPct": 1.189,
              "relativeStrength20dPct": 31.734,
              "avgDollarVolume10d": 1575493492,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.574,
              "d3": 2.378
            },
            "selectionPrice": 169.52000427246094,
            "triggeredAt": "2026-10-19T13:30:00.000Z",
            "invalidatedAt": "2026-10-22T17:30:00.000Z"
          },
          {
            "symbol": "USO",
            "quantScore": 0.877,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 163.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 160.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.15,
              "momentum20d": 4.153,
              "realizedVol10dAnnualized": 24.29,
              "volumeRatio": 2.029,
              "atrPct": 2.936,
              "gapPct": -0.216,
              "relativeStrength5dPct": 11.118,
              "relativeStrength20dPct": 4.068,
              "avgDollarVolume10d": 636910567,
              "maxSelectedCorrelation": 0.461
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.366,
              "d3": 0.135
            },
            "selectionPrice": 161.75999450683594,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-22T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 0.859,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 140.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 133.49,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -11.345,
              "momentum20d": 3.463,
              "realizedVol10dAnnualized": 70.38,
              "volumeRatio": 1.878,
              "atrPct": 7.233,
              "gapPct": -3.53,
              "relativeStrength5dPct": -9.377,
              "relativeStrength20dPct": 3.378,
              "avgDollarVolume10d": 2704216480,
              "maxSelectedCorrelation": 0.743
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.629,
              "d3": 9.435
            },
            "selectionPrice": 136.8300018310547,
            "triggeredAt": "2026-10-19T13:30:00.000Z",
            "invalidatedAt": "2026-10-30T13:30:00.000Z"
          },
          {
            "symbol": "COP",
            "quantScore": 0.737,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 147.68,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 145.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.254,
              "momentum20d": 10.001,
              "realizedVol10dAnnualized": 20.83,
              "volumeRatio": 1.349,
              "atrPct": 2.084,
              "gapPct": 0.677,
              "relativeStrength5dPct": 11.222,
              "relativeStrength20dPct": 9.916,
              "avgDollarVolume10d": 863935740,
              "maxSelectedCorrelation": 0.508
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.406,
              "d3": 0.571
            },
            "selectionPrice": 146.50999450683594,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-23T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.652,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1269.1,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1244.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.594,
              "momentum20d": 9.076,
              "realizedVol10dAnnualized": 27.72,
              "volumeRatio": 1.058,
              "atrPct": 2.96,
              "gapPct": 0.351,
              "relativeStrength5dPct": 8.562,
              "relativeStrength20dPct": 8.99,
              "avgDollarVolume10d": 2930941498,
              "maxSelectedCorrelation": 0.727
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.601,
              "d3": 1.077
            },
            "selectionPrice": 1257.030029296875,
            "invalidatedAt": "2026-10-19T13:30:00.000Z",
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-19T15:46:48.769Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SHOP",
            "quantScore": 1.124,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 175.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 169.62,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -3.805,
              "momentum20d": 34.163,
              "realizedVol10dAnnualized": 46.53,
              "volumeRatio": 0.292,
              "atrPct": 4.325,
              "gapPct": 1.481,
              "relativeStrength5dPct": -2.758,
              "relativeStrength20dPct": 33.079,
              "avgDollarVolume10d": 1502120905,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.088,
              "h4": -0.064,
              "d1": 1.577,
              "d3": -1.63
            },
            "selectionPrice": 172.32479858398438,
            "triggeredAt": "2026-10-20T14:30:00.000Z",
            "invalidatedAt": "2026-10-22T14:30:00.000Z"
          },
          {
            "symbol": "USO",
            "quantScore": 0.784,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 161.52,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 158.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.098,
              "momentum20d": 4.174,
              "realizedVol10dAnnualized": 20.26,
              "volumeRatio": 0.469,
              "atrPct": 2.798,
              "gapPct": -1.706,
              "relativeStrength5dPct": 7.146,
              "relativeStrength20dPct": 3.089,
              "avgDollarVolume10d": 604646448,
              "maxSelectedCorrelation": 0.235
            },
            "outcomes": {
              "h1": -0.827,
              "h4": -0.79,
              "d1": -1.24,
              "d3": 0.185
            },
            "selectionPrice": 160.24000549316406,
            "triggeredAt": "2026-10-19T16:30:00.000Z",
            "invalidatedAt": "2026-10-20T13:30:00.000Z"
          },
          {
            "symbol": "AMZN",
            "quantScore": 0.776,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 266.62,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 259.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.42,
              "momentum20d": 3.746,
              "realizedVol10dAnnualized": 37.31,
              "volumeRatio": 0.752,
              "atrPct": 2.506,
              "gapPct": 2.136,
              "relativeStrength5dPct": 2.467,
              "relativeStrength20dPct": 2.662,
              "avgDollarVolume10d": 8676345054,
              "maxSelectedCorrelation": 0.738
            },
            "outcomes": {
              "h1": -0.306,
              "h4": -0.086,
              "d1": 0.257,
              "d3": -4.547
            },
            "selectionPrice": 263.2349853515625,
            "invalidatedAt": "2026-10-21T13:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 0.768,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 146.22,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 142.24,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.786,
              "momentum20d": 6.466,
              "realizedVol10dAnnualized": 39.9,
              "volumeRatio": 0.295,
              "atrPct": 4.384,
              "gapPct": -0.62,
              "relativeStrength5dPct": 3.834,
              "relativeStrength20dPct": 5.382,
              "avgDollarVolume10d": 1572780940,
              "maxSelectedCorrelation": 0.579
            },
            "outcomes": {
              "h1": -0.163,
              "h4": 0.345,
              "d1": 3.369,
              "d3": 7.745
            },
            "selectionPrice": 144.14500427246094,
            "triggeredAt": "2026-10-20T13:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.706,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1259.55,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1234.78,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.458,
              "momentum20d": 8.174,
              "realizedVol10dAnnualized": 28.67,
              "volumeRatio": 0.252,
              "atrPct": 2.955,
              "gapPct": -1.085,
              "relativeStrength5dPct": 6.505,
              "relativeStrength20dPct": 7.089,
              "avgDollarVolume10d": 2739526466,
              "maxSelectedCorrelation": 0.402
            },
            "outcomes": {
              "h1": 0.188,
              "h4": -0.738,
              "d1": 3.608,
              "d3": 4.912
            },
            "selectionPrice": 1247.1650390625,
            "triggeredAt": "2026-10-20T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-20T14:37:00.003Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "NOC",
            "quantScore": 1.333,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 549.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 534.51,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.605,
              "momentum20d": 2.924,
              "realizedVol10dAnnualized": 40.18,
              "volumeRatio": 0.694,
              "atrPct": 2.468,
              "gapPct": 2.544,
              "relativeStrength5dPct": 13.526,
              "relativeStrength20dPct": 3.267,
              "avgDollarVolume10d": 515148507,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.323,
              "h4": -0.22,
              "d1": 0.125,
              "d3": 1.72
            },
            "selectionPrice": 542.0599975585938,
            "invalidatedAt": "2026-10-20T16:30:00.000Z",
            "triggeredAt": "2026-10-22T13:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 1.262,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1316,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1284.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.456,
              "momentum20d": 11.611,
              "realizedVol10dAnnualized": 35.19,
              "volumeRatio": 0.413,
              "atrPct": 2.905,
              "gapPct": 1.867,
              "relativeStrength5dPct": 12.377,
              "relativeStrength20dPct": 11.954,
              "avgDollarVolume10d": 2893104366,
              "maxSelectedCorrelation": 0.439
            },
            "outcomes": {
              "h1": -0.074,
              "h4": -1.02,
              "d1": -2.186,
              "d3": -0.958
            },
            "selectionPrice": 1301,
            "invalidatedAt": "2026-10-20T18:30:00.000Z",
            "triggeredAt": "2026-10-22T14:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 0.976,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 149.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 145.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.432,
              "momentum20d": 7.151,
              "realizedVol10dAnnualized": 40.61,
              "volumeRatio": 0.261,
              "atrPct": 4.247,
              "gapPct": 1.871,
              "relativeStrength5dPct": 7.352,
              "relativeStrength20dPct": 7.493,
              "avgDollarVolume10d": 1603645957,
              "maxSelectedCorrelation": 0.332
            },
            "outcomes": {
              "h1": 0.893,
              "h4": 0.569,
              "d1": 3.366,
              "d3": 5.869
            },
            "selectionPrice": 147.5,
            "triggeredAt": "2026-10-20T16:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "UNH",
            "quantScore": 0.973,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 421.59,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 412.89,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.451,
              "momentum20d": 10.51,
              "realizedVol10dAnnualized": 30.1,
              "volumeRatio": 0.194,
              "atrPct": 3.114,
              "gapPct": 0.796,
              "relativeStrength5dPct": 11.372,
              "relativeStrength20dPct": 10.852,
              "avgDollarVolume10d": 2990784303,
              "maxSelectedCorrelation": 0.674
            },
            "outcomes": {
              "h1": -0.005,
              "h4": -0.285,
              "d1": -1.106,
              "d3": 0.844
            },
            "selectionPrice": 417.2077941894531,
            "triggeredAt": "2026-10-20T15:30:00.000Z",
            "invalidatedAt": "2026-10-26T14:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 0.876,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 177.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 171.59,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -1.235,
              "momentum20d": 26.407,
              "realizedVol10dAnnualized": 45.58,
              "volumeRatio": 0.166,
              "atrPct": 4.256,
              "gapPct": -0.362,
              "relativeStrength5dPct": -0.315,
              "relativeStrength20dPct": 26.749,
              "avgDollarVolume10d": 1439005067,
              "maxSelectedCorrelation": 0.567
            },
            "outcomes": {
              "h1": -0.452,
              "h4": -0.633,
              "d1": 1.689,
              "d3": -3.003
            },
            "selectionPrice": 174.33999633789062,
            "triggeredAt": "2026-10-21T13:30:00.000Z",
            "invalidatedAt": "2026-10-21T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-21T15:12:53.690Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "SMCI",
            "quantScore": 1.501,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 37.05,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 34.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.517,
              "momentum20d": -13.421,
              "realizedVol10dAnnualized": 87.28,
              "volumeRatio": 1.119,
              "atrPct": 7.593,
              "gapPct": 12.165,
              "relativeStrength5dPct": 0.303,
              "relativeStrength20dPct": -13.145,
              "avgDollarVolume10d": 1237136602,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 1.045,
              "h4": 0.155,
              "d1": -5.59,
              "d3": -7.212
            },
            "selectionPrice": 35.935001373291016,
            "invalidatedAt": "2026-10-22T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.413,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 155.65,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 151.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.587,
              "momentum20d": 11.971,
              "realizedVol10dAnnualized": 42.25,
              "volumeRatio": 0.318,
              "atrPct": 4.016,
              "gapPct": 0.067,
              "relativeStrength5dPct": 9.373,
              "relativeStrength20dPct": 12.247,
              "avgDollarVolume10d": 1719505662,
              "maxSelectedCorrelation": 0.528
            },
            "outcomes": {
              "h1": -0.176,
              "h4": -0.371,
              "d1": 2.052,
              "d3": 3.088
            },
            "selectionPrice": 153.41000366210938,
            "triggeredAt": "2026-10-22T13:30:00.000Z",
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 0.995,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 180.23,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 174.57,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.841,
              "momentum20d": 20.076,
              "realizedVol10dAnnualized": 45.98,
              "volumeRatio": 0.198,
              "atrPct": 4.341,
              "gapPct": -0.507,
              "relativeStrength5dPct": 2.627,
              "relativeStrength20dPct": 20.352,
              "avgDollarVolume10d": 1473858681,
              "maxSelectedCorrelation": 0.588
            },
            "outcomes": {
              "h1": -0.423,
              "h4": -1.491,
              "d1": -3.886,
              "d3": -3.678
            },
            "selectionPrice": 177.61000061035156,
            "invalidatedAt": "2026-10-21T18:30:00.000Z"
          },
          {
            "symbol": "NOC",
            "quantScore": 0.835,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 542.98,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 531.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.333,
              "momentum20d": 5.322,
              "realizedVol10dAnnualized": 32.15,
              "volumeRatio": 0.232,
              "atrPct": 2.556,
              "gapPct": 0.599,
              "relativeStrength5dPct": 8.119,
              "relativeStrength20dPct": 5.598,
              "avgDollarVolume10d": 558444777,
              "maxSelectedCorrelation": 0.448
            },
            "outcomes": {
              "h1": -0.486,
              "h4": -0.533,
              "d1": 2.1,
              "d3": 3.346
            },
            "selectionPrice": 537.094970703125,
            "triggeredAt": "2026-10-22T13:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.76,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 427.93,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 420.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.991,
              "momentum20d": 5.55,
              "realizedVol10dAnnualized": 24,
              "volumeRatio": 0.854,
              "atrPct": 3.071,
              "gapPct": -8.106,
              "relativeStrength5dPct": 0.777,
              "relativeStrength20dPct": 5.826,
              "avgDollarVolume10d": 947071086,
              "maxSelectedCorrelation": 0.372
            },
            "outcomes": {
              "h1": 0.147,
              "h4": 0.012,
              "d1": 2.668,
              "d3": 6.15
            },
            "selectionPrice": 426.0299987792969,
            "triggeredAt": "2026-10-21T15:30:00.000Z",
            "invalidatedAt": "2026-11-18T20:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-22T15:39:50.156Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LMT",
            "quantScore": 1.568,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 595.44,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 580.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.369,
              "momentum20d": 12.044,
              "realizedVol10dAnnualized": 37.15,
              "volumeRatio": 1.014,
              "atrPct": 2.524,
              "gapPct": 5.076,
              "relativeStrength5dPct": 11.455,
              "relativeStrength20dPct": 12.617,
              "avgDollarVolume10d": 754774458,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0.783,
              "h4": 1.409,
              "d1": 3.696,
              "d3": 6.795
            },
            "selectionPrice": 587.8699951171875,
            "invalidatedAt": "2026-10-22T16:30:00.000Z",
            "triggeredAt": "2026-10-23T13:30:00.000Z"
          },
          {
            "symbol": "ADBE",
            "quantScore": 1.037,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 272.54,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 264.9,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.775,
              "momentum20d": 11.646,
              "realizedVol10dAnnualized": 41.08,
              "volumeRatio": 0.516,
              "atrPct": 3.163,
              "gapPct": 1.407,
              "relativeStrength5dPct": 7.861,
              "relativeStrength20dPct": 12.219,
              "avgDollarVolume10d": 1043627278,
              "maxSelectedCorrelation": 0.412
            },
            "outcomes": {
              "h1": 0.69,
              "h4": 0.891,
              "d1": -1.175,
              "d3": -2.696
            },
            "selectionPrice": 268.92498779296875,
            "invalidatedAt": "2026-10-23T13:30:00.000Z"
          },
          {
            "symbol": "IBM",
            "quantScore": 1.024,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 251.46,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 246.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.418,
              "momentum20d": 7.039,
              "realizedVol10dAnnualized": 26.79,
              "volumeRatio": 0.906,
              "atrPct": 2.787,
              "gapPct": -4.062,
              "relativeStrength5dPct": 7.503,
              "relativeStrength20dPct": 7.613,
              "avgDollarVolume10d": 1347231181,
              "maxSelectedCorrelation": 0.615
            },
            "outcomes": {
              "h1": 0.282,
              "h4": 1.33,
              "d1": 1.773,
              "d3": 2.283
            },
            "selectionPrice": 248.91270446777344,
            "triggeredAt": "2026-10-22T18:30:00.000Z",
            "invalidatedAt": "2026-11-03T14:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.018,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 158.92,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 154.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.415,
              "momentum20d": 11.248,
              "realizedVol10dAnnualized": 42.47,
              "volumeRatio": 0.532,
              "atrPct": 3.863,
              "gapPct": 0.738,
              "relativeStrength5dPct": 6.501,
              "relativeStrength20dPct": 11.821,
              "avgDollarVolume10d": 1819145011,
              "maxSelectedCorrelation": 0.776
            },
            "outcomes": {
              "h1": 0.373,
              "h4": 0.589,
              "d1": 1.019,
              "d3": 1.39
            },
            "selectionPrice": 156.72000122070312,
            "invalidatedAt": "2026-10-23T13:30:00.000Z",
            "triggeredAt": "2026-10-23T19:30:00.000Z"
          },
          {
            "symbol": "NOC",
            "quantScore": 0.962,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 559.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 547.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.834,
              "momentum20d": 7.647,
              "realizedVol10dAnnualized": 32.29,
              "volumeRatio": 0.245,
              "atrPct": 2.524,
              "gapPct": 0.999,
              "relativeStrength5dPct": 11.92,
              "relativeStrength20dPct": 8.221,
              "avgDollarVolume10d": 582294599,
              "maxSelectedCorrelation": 0.582
            },
            "outcomes": {
              "h1": 0.373,
              "h4": 0.125,
              "d1": -0.398,
              "d3": 1.536
            },
            "selectionPrice": 553.7449951171875,
            "invalidatedAt": "2026-10-23T13:30:00.000Z",
            "triggeredAt": "2026-10-26T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-23T15:28:20.354Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "CRWD",
            "quantScore": 1.497,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 256.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 246.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.554,
              "momentum20d": -3.189,
              "realizedVol10dAnnualized": 60.82,
              "volumeRatio": 0.565,
              "atrPct": 5.258,
              "gapPct": 0.235,
              "relativeStrength5dPct": 10.589,
              "relativeStrength20dPct": -2.642,
              "avgDollarVolume10d": 2233843121,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0.223,
              "h4": 1.702,
              "d1": 3.911,
              "d3": 3.465
            },
            "selectionPrice": 251.23500061035156,
            "triggeredAt": "2026-10-23T19:30:00.000Z",
            "invalidatedAt": "2026-10-30T16:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.323,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 159.53,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 154.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.721,
              "momentum20d": 14.088,
              "realizedVol10dAnnualized": 42.94,
              "volumeRatio": 0.315,
              "atrPct": 3.895,
              "gapPct": -0.395,
              "relativeStrength5dPct": 10.756,
              "relativeStrength20dPct": 14.635,
              "avgDollarVolume10d": 1954960303,
              "maxSelectedCorrelation": 0.372
            },
            "outcomes": {
              "h1": 0.948,
              "h4": 1.095,
              "d1": 1.319,
              "d3": -0.307
            },
            "selectionPrice": 157.12579345703125,
            "invalidatedAt": "2026-10-27T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.295,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 152.79,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 144.33,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.573,
              "momentum20d": -8.075,
              "realizedVol10dAnnualized": 82.21,
              "volumeRatio": 0.301,
              "atrPct": 6.513,
              "gapPct": -0.974,
              "relativeStrength5dPct": 8.608,
              "relativeStrength20dPct": -7.528,
              "avgDollarVolume10d": 2682945809,
              "maxSelectedCorrelation": 0.694
            },
            "outcomes": {
              "h1": 1.175,
              "h4": -1.667,
              "d1": -5.397,
              "d3": -4.488
            },
            "selectionPrice": 148.41000366210938,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          },
          {
            "symbol": "SLB",
            "quantScore": 0.982,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 53.68,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 52.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.96,
              "momentum20d": 2.946,
              "realizedVol10dAnnualized": 40.28,
              "volumeRatio": 0.609,
              "atrPct": 2.891,
              "gapPct": 0.827,
              "relativeStrength5dPct": 6.995,
              "relativeStrength20dPct": 3.493,
              "avgDollarVolume10d": 555773938,
              "maxSelectedCorrelation": 0.477
            },
            "outcomes": {
              "h1": -1.003,
              "h4": -0.685,
              "d1": -2.682,
              "d3": -1.894
            },
            "selectionPrice": 52.935001373291016,
            "invalidatedAt": "2026-10-26T13:30:00.000Z",
            "triggeredAt": "2026-10-27T13:30:00.000Z"
          },
          {
            "symbol": "ADBE",
            "quantScore": 0.93,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 268.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 260.54,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.973,
              "momentum20d": 10.807,
              "realizedVol10dAnnualized": 45.86,
              "volumeRatio": 0.242,
              "atrPct": 3.35,
              "gapPct": -0.647,
              "relativeStrength5dPct": 8.008,
              "relativeStrength20dPct": 11.354,
              "avgDollarVolume10d": 1076332600,
              "maxSelectedCorrelation": 0.754
            },
            "outcomes": {
              "h1": 0.144,
              "h4": -0.31,
              "d1": -1.398,
              "d3": -3.654
            },
            "selectionPrice": 264.7300109863281,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-24T13:59:38.806Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "CRWD",
            "quantScore": 1.833,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 263.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 251.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.272,
              "momentum20d": -0.809,
              "realizedVol10dAnnualized": 68.56,
              "volumeRatio": 1.344,
              "atrPct": 5.277,
              "gapPct": 0.567,
              "relativeStrength5dPct": 13.702,
              "relativeStrength20dPct": 0.131,
              "avgDollarVolume10d": 2488803680,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 2.018
            },
            "selectionPrice": 257.57000732421875,
            "triggeredAt": "2026-10-26T14:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.415,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 161.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 156.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.967,
              "momentum20d": 15.372,
              "realizedVol10dAnnualized": 42.6,
              "volumeRatio": 0.835,
              "atrPct": 3.906,
              "gapPct": -0.395,
              "relativeStrength5dPct": 12.397,
              "relativeStrength20dPct": 16.312,
              "avgDollarVolume10d": 2087054281,
              "maxSelectedCorrelation": 0.396
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.978
            },
            "selectionPrice": 158.9600067138672,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 1.16,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 612.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 596.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.435,
              "momentum20d": 15.368,
              "realizedVol10dAnnualized": 38.08,
              "volumeRatio": 1.023,
              "atrPct": 2.729,
              "gapPct": -0.968,
              "relativeStrength5dPct": 9.865,
              "relativeStrength20dPct": 16.307,
              "avgDollarVolume10d": 925458746,
              "maxSelectedCorrelation": 0.18
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 1.441
            },
            "selectionPrice": 604.1799926757812,
            "triggeredAt": "2026-10-26T13:30:00.000Z",
            "invalidatedAt": "2026-11-04T15:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.158,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 150.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 141.89,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.709,
              "momentum20d": -9.653,
              "realizedVol10dAnnualized": 81.48,
              "volumeRatio": 0.873,
              "atrPct": 6.742,
              "gapPct": -0.94,
              "relativeStrength5dPct": 7.139,
              "relativeStrength20dPct": -8.713,
              "avgDollarVolume10d": 2814336804,
              "maxSelectedCorrelation": 0.693
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.057
            },
            "selectionPrice": 146.00999450683594,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          },
          {
            "symbol": "SLB",
            "quantScore": 1.121,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 53.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 52.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.192,
              "momentum20d": 3.169,
              "realizedVol10dAnnualized": 41.16,
              "volumeRatio": 1.593,
              "atrPct": 2.945,
              "gapPct": 0.827,
              "relativeStrength5dPct": 7.622,
              "relativeStrength20dPct": 4.109,
              "avgDollarVolume10d": 619471802,
              "maxSelectedCorrelation": 0.572
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 3.093
            },
            "selectionPrice": 53.060001373291016,
            "invalidatedAt": "2026-10-26T13:30:00.000Z",
            "triggeredAt": "2026-10-27T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-25T13:10:27.002Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "CRWD",
            "quantScore": 1.828,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 263.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 251.45,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.272,
              "momentum20d": -0.809,
              "realizedVol10dAnnualized": 68.56,
              "volumeRatio": 1.344,
              "atrPct": 5.277,
              "gapPct": 0.567,
              "relativeStrength5dPct": 13.702,
              "relativeStrength20dPct": 0.131,
              "avgDollarVolume10d": 2488803680,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 2.466
            },
            "selectionPrice": 257.57000732421875,
            "triggeredAt": "2026-10-26T14:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.414,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 161.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 156.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.967,
              "momentum20d": 15.372,
              "realizedVol10dAnnualized": 42.6,
              "volumeRatio": 0.835,
              "atrPct": 3.906,
              "gapPct": -0.395,
              "relativeStrength5dPct": 12.397,
              "relativeStrength20dPct": 16.312,
              "avgDollarVolume10d": 2087054281,
              "maxSelectedCorrelation": 0.396
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -3.321
            },
            "selectionPrice": 158.9600067138672,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.16,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 150.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 141.89,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.709,
              "momentum20d": -9.653,
              "realizedVol10dAnnualized": 81.48,
              "volumeRatio": 0.873,
              "atrPct": 6.742,
              "gapPct": -0.94,
              "relativeStrength5dPct": 7.139,
              "relativeStrength20dPct": -8.713,
              "avgDollarVolume10d": 2814336804,
              "maxSelectedCorrelation": 0.693
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.167
            },
            "selectionPrice": 146.00999450683594,
            "invalidatedAt": "2026-10-26T13:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 1.158,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 612.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 596.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.435,
              "momentum20d": 15.368,
              "realizedVol10dAnnualized": 38.08,
              "volumeRatio": 1.023,
              "atrPct": 2.729,
              "gapPct": -0.968,
              "relativeStrength5dPct": 9.865,
              "relativeStrength20dPct": 16.307,
              "avgDollarVolume10d": 925458746,
              "maxSelectedCorrelation": 0.547
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.038
            },
            "selectionPrice": 604.1799926757812,
            "triggeredAt": "2026-10-26T13:30:00.000Z",
            "invalidatedAt": "2026-11-04T15:30:00.000Z"
          },
          {
            "symbol": "SLB",
            "quantScore": 1.118,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 53.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 52.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.192,
              "momentum20d": 3.169,
              "realizedVol10dAnnualized": 41.16,
              "volumeRatio": 1.593,
              "atrPct": 2.945,
              "gapPct": 0.827,
              "relativeStrength5dPct": 7.622,
              "relativeStrength20dPct": 4.109,
              "avgDollarVolume10d": 619471802,
              "maxSelectedCorrelation": 0.572
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 2.891
            },
            "selectionPrice": 53.060001373291016,
            "invalidatedAt": "2026-10-26T13:30:00.000Z",
            "triggeredAt": "2026-10-27T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-26T17:20:58.865Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LMT",
            "quantScore": 1.731,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 637.14,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 620.22,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.675,
              "momentum20d": 21.002,
              "realizedVol10dAnnualized": 38.85,
              "volumeRatio": 0.593,
              "atrPct": 2.83,
              "gapPct": 1.521,
              "relativeStrength5dPct": 14.674,
              "relativeStrength20dPct": 21.633,
              "avgDollarVolume10d": 976317019,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.249,
              "h4": -0.991,
              "d1": -1.318,
              "d3": 2.458
            },
            "selectionPrice": 628.6799926757812,
            "invalidatedAt": "2026-10-28T13:30:00.000Z",
            "triggeredAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "CRWD",
            "quantScore": 1.652,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 266.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 254.52,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.187,
              "momentum20d": 3.304,
              "realizedVol10dAnnualized": 65.8,
              "volumeRatio": 0.488,
              "atrPct": 5.098,
              "gapPct": 0.373,
              "relativeStrength5dPct": 14.186,
              "relativeStrength20dPct": 3.935,
              "avgDollarVolume10d": 2455102339,
              "maxSelectedCorrelation": 0.214
            },
            "outcomes": {
              "h1": -0.682,
              "h4": 0.171,
              "d1": 1.588,
              "d3": -1.306
            },
            "selectionPrice": 260.3999938964844,
            "triggeredAt": "2026-10-27T13:30:00.000Z",
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "TSLA",
            "quantScore": 1.305,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 403.43,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 390.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.828,
              "momentum20d": 6.654,
              "realizedVol10dAnnualized": 47.73,
              "volumeRatio": 0.851,
              "atrPct": 3.313,
              "gapPct": 3.157,
              "relativeStrength5dPct": 7.827,
              "relativeStrength20dPct": 7.285,
              "avgDollarVolume10d": 15056161064,
              "maxSelectedCorrelation": 0.405
            },
            "outcomes": {
              "h1": -0.11,
              "h4": 2.063,
              "d1": 2.969,
              "d3": 2.761
            },
            "selectionPrice": 396.9150085449219,
            "triggeredAt": "2026-10-27T13:30:00.000Z",
            "invalidatedAt": "2026-10-30T13:30:00.000Z"
          },
          {
            "symbol": "MSTR",
            "quantScore": 1.26,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 147.28,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 139.17,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.297,
              "momentum20d": -9.7,
              "realizedVol10dAnnualized": 81.75,
              "volumeRatio": 0.555,
              "atrPct": 7.033,
              "gapPct": -2.966,
              "relativeStrength5dPct": 5.296,
              "relativeStrength20dPct": -9.069,
              "avgDollarVolume10d": 2718509527,
              "maxSelectedCorrelation": 0.578
            },
            "outcomes": {
              "h1": -0.61,
              "h4": -0.354,
              "d1": -0.748,
              "d3": -0.078
            },
            "selectionPrice": 143.16000366210938,
            "invalidatedAt": "2026-10-27T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.157,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 158.14,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 153.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.127,
              "momentum20d": 14.821,
              "realizedVol10dAnnualized": 44.87,
              "volumeRatio": 0.62,
              "atrPct": 3.976,
              "gapPct": -0.258,
              "relativeStrength5dPct": 7.126,
              "relativeStrength20dPct": 15.452,
              "avgDollarVolume10d": 2014140673,
              "maxSelectedCorrelation": 0.682
            },
            "outcomes": {
              "h1": 0.006,
              "h4": -1.75,
              "d1": -1.052,
              "d3": -30.099
            },
            "selectionPrice": 155.72000122070312,
            "triggeredAt": "2026-10-26T19:30:00.000Z",
            "invalidatedAt": "2026-10-27T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-27T16:46:11.087Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "PANW",
            "quantScore": 1.884,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 413.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 394.94,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 18.805,
              "momentum20d": 3.106,
              "realizedVol10dAnnualized": 66.63,
              "volumeRatio": 0.362,
              "atrPct": 4.78,
              "gapPct": 0.136,
              "relativeStrength5dPct": 18.75,
              "relativeStrength20dPct": 2.602,
              "avgDollarVolume10d": 2288867848,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.319,
              "h4": -1.039,
              "d1": -1.715,
              "d3": -10.354
            },
            "selectionPrice": 404.239990234375,
            "invalidatedAt": "2026-10-28T15:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 1.673,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 637.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 620.14,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.581,
              "momentum20d": 21.351,
              "realizedVol10dAnnualized": 39.38,
              "volumeRatio": 0.472,
              "atrPct": 2.924,
              "gapPct": -1.305,
              "relativeStrength5dPct": 14.527,
              "relativeStrength20dPct": 20.847,
              "avgDollarVolume10d": 1083886572,
              "maxSelectedCorrelation": 0.135
            },
            "outcomes": {
              "h1": -0.016,
              "h4": -0.526,
              "d1": 0.267,
              "d3": 2.571
            },
            "selectionPrice": 628.7100219726562,
            "invalidatedAt": "2026-10-28T13:30:00.000Z",
            "triggeredAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "DELL",
            "quantScore": 1.419,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 518.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 487.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.996,
              "momentum20d": -7.425,
              "realizedVol10dAnnualized": 90.28,
              "volumeRatio": 0.725,
              "atrPct": 6.566,
              "gapPct": 1.479,
              "relativeStrength5dPct": 8.941,
              "relativeStrength20dPct": -7.929,
              "avgDollarVolume10d": 3791778354,
              "maxSelectedCorrelation": 0.6
            },
            "outcomes": {
              "h1": -0.293,
              "h4": -1.851,
              "d1": -1.835,
              "d3": -17.342
            },
            "selectionPrice": 503.2650146484375,
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 1.004,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 158.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 153.94,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.487,
              "momentum20d": 18.866,
              "realizedVol10dAnnualized": 42.71,
              "volumeRatio": 0.45,
              "atrPct": 4.054,
              "gapPct": -1.315,
              "relativeStrength5dPct": 4.432,
              "relativeStrength20dPct": 18.362,
              "avgDollarVolume10d": 2019305656,
              "maxSelectedCorrelation": 0.258
            },
            "outcomes": {
              "h1": -0.068,
              "h4": -1.421,
              "d1": -3.293,
              "d3": -32.861
            },
            "selectionPrice": 156.26499938964844,
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          },
          {
            "symbol": "PLTR",
            "quantScore": 0.768,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 203.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 196.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.775,
              "momentum20d": 6.609,
              "realizedVol10dAnnualized": 53.95,
              "volumeRatio": 0.469,
              "atrPct": 4.572,
              "gapPct": -0.412,
              "relativeStrength5dPct": 3.72,
              "relativeStrength20dPct": 6.105,
              "avgDollarVolume10d": 4168153456,
              "maxSelectedCorrelation": 0.666
            },
            "outcomes": {
              "h1": 0.393,
              "h4": -2.186,
              "d1": -2.829,
              "d3": -7.387
            },
            "selectionPrice": 199.72999572753906,
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-28T12:48:39.723Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "CRWD",
            "quantScore": 1.858,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 274.23,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 261.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 17.878,
              "momentum20d": 3.383,
              "realizedVol10dAnnualized": 66.82,
              "volumeRatio": 0.738,
              "atrPct": 4.871,
              "gapPct": -0.569,
              "relativeStrength5dPct": 17.799,
              "relativeStrength20dPct": 2.854,
              "avgDollarVolume10d": 2650152169,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.743,
              "h4": -0.92,
              "d1": -2.263,
              "d3": -6.655
            },
            "selectionPrice": 268.0199890136719,
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 1.6,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 631.94,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 614.04,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.537,
              "momentum20d": 20.245,
              "realizedVol10dAnnualized": 41.46,
              "volumeRatio": 1.072,
              "atrPct": 2.951,
              "gapPct": -1.305,
              "relativeStrength5dPct": 13.458,
              "relativeStrength20dPct": 19.716,
              "avgDollarVolume10d": 1151478629,
              "maxSelectedCorrelation": 0.283
            },
            "outcomes": {
              "h1": 0.912,
              "h4": 0.797,
              "d1": 3.551,
              "d3": 2.488
            },
            "selectionPrice": 622.989990234375,
            "triggeredAt": "2026-10-28T16:30:00.000Z",
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          },
          {
            "symbol": "DELL",
            "quantScore": 1.333,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 517.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 486.36,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.753,
              "momentum20d": -7.631,
              "realizedVol10dAnnualized": 89.69,
              "volumeRatio": 1.141,
              "atrPct": 6.581,
              "gapPct": 1.479,
              "relativeStrength5dPct": 8.674,
              "relativeStrength20dPct": -8.16,
              "avgDollarVolume10d": 3900570466,
              "maxSelectedCorrelation": 0.672
            },
            "outcomes": {
              "h1": 0.436,
              "h4": 0.016,
              "d1": -1.169,
              "d3": -15.344
            },
            "selectionPrice": 501.9599914550781,
            "invalidatedAt": "2026-10-29T13:30:00.000Z"
          },
          {
            "symbol": "NOW",
            "quantScore": 0.918,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 157.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 152.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.504,
              "momentum20d": 17.748,
              "realizedVol10dAnnualized": 44.26,
              "volumeRatio": 1.003,
              "atrPct": 4.093,
              "gapPct": -1.315,
              "relativeStrength5dPct": 3.425,
              "relativeStrength20dPct": 17.219,
              "avgDollarVolume10d": 2115319427,
              "maxSelectedCorrelation": 0.225
            },
            "outcomes": {
              "h1": -1.134,
              "h4": -1.899,
              "d1": -25.645,
              "d3": -29.524
            },
            "selectionPrice": 154.77999877929688,
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          },
          {
            "symbol": "SLB",
            "quantScore": 0.72,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 54.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 53.31,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.203,
              "momentum20d": 5.03,
              "realizedVol10dAnnualized": 40.87,
              "volumeRatio": 0.864,
              "atrPct": 2.856,
              "gapPct": 0.17,
              "relativeStrength5dPct": 8.124,
              "relativeStrength20dPct": 4.501,
              "avgDollarVolume10d": 663328538,
              "maxSelectedCorrelation": 0.54
            },
            "outcomes": {
              "h1": 0.974,
              "h4": 0.693,
              "d1": 0.937,
              "d3": 0.3
            },
            "selectionPrice": 54.08000183105469,
            "invalidatedAt": "2026-10-28T13:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-29T15:22:52.648Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "ORCL",
            "quantScore": 1.192,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 144.03,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 137.73,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.219,
              "momentum20d": 2.607,
              "realizedVol10dAnnualized": 64.6,
              "volumeRatio": 0.421,
              "atrPct": 5.351,
              "gapPct": -0.28,
              "relativeStrength5dPct": 11.46,
              "relativeStrength20dPct": 1.673,
              "avgDollarVolume10d": 4436802067,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -1.196,
              "h4": -0.007,
              "d1": -5.516,
              "d3": -10.856
            },
            "selectionPrice": 140.85000610351562,
            "invalidatedAt": "2026-10-29T16:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 1.054,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 656.16,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 637.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.667,
              "momentum20d": 27.037,
              "realizedVol10dAnnualized": 41.17,
              "volumeRatio": 0.18,
              "atrPct": 3.063,
              "gapPct": 1.574,
              "relativeStrength5dPct": 8.908,
              "relativeStrength20dPct": 26.102,
              "avgDollarVolume10d": 1141776354,
              "maxSelectedCorrelation": 0.473
            },
            "outcomes": {
              "h1": 0.096,
              "h4": -0.449,
              "d1": -0.821,
              "d3": -1.566
            },
            "selectionPrice": 646.9349975585938,
            "triggeredAt": "2026-10-30T13:30:00.000Z",
            "invalidatedAt": "2026-10-30T14:30:00.000Z"
          },
          {
            "symbol": "KLAC",
            "quantScore": 1.026,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 173.9,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 165.53,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.804,
              "momentum20d": -12.935,
              "realizedVol10dAnnualized": 71.12,
              "volumeRatio": 0.369,
              "atrPct": 4.753,
              "gapPct": 2.066,
              "relativeStrength5dPct": 14.045,
              "relativeStrength20dPct": -13.87,
              "avgDollarVolume10d": 1961822316,
              "maxSelectedCorrelation": 0.478
            },
            "outcomes": {
              "h1": 0.285,
              "h4": -0.208,
              "d1": -5.051,
              "d3": -3.827
            },
            "selectionPrice": 169.72000122070312,
            "invalidatedAt": "2026-10-30T13:30:00.000Z"
          },
          {
            "symbol": "AMD",
            "quantScore": 0.998,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 585.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 559.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.756,
              "momentum20d": -6.382,
              "realizedVol10dAnnualized": 64.94,
              "volumeRatio": 0.312,
              "atrPct": 4.965,
              "gapPct": -2.842,
              "relativeStrength5dPct": 11.996,
              "relativeStrength20dPct": -7.317,
              "avgDollarVolume10d": 10394998621,
              "maxSelectedCorrelation": 0.753
            },
            "outcomes": {
              "h1": -0.67,
              "h4": -0.766,
              "d1": -11.997,
              "d3": -11.104
            },
            "selectionPrice": 573.010009765625,
            "invalidatedAt": "2026-10-30T13:30:00.000Z",
            "triggeredAt": "2026-11-12T15:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.921,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1392.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1353.79,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.067,
              "momentum20d": 18.652,
              "realizedVol10dAnnualized": 40.17,
              "volumeRatio": 0.992,
              "atrPct": 3.201,
              "gapPct": 3.449,
              "relativeStrength5dPct": 4.308,
              "relativeStrength20dPct": 17.717,
              "avgDollarVolume10d": 3064515769,
              "maxSelectedCorrelation": 0.414
            },
            "outcomes": {
              "h1": -0.607,
              "h4": -0.113,
              "d1": 3.667,
              "d3": 2.466
            },
            "selectionPrice": 1373.47998046875,
            "triggeredAt": "2026-10-30T13:30:00.000Z",
            "invalidatedAt": "2026-11-06T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-30T17:11:12.801Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LLY",
            "quantScore": 1.24,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1441.28,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1400.06,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.56,
              "momentum20d": 23.553,
              "realizedVol10dAnnualized": 41.87,
              "volumeRatio": 0.999,
              "atrPct": 3.396,
              "gapPct": 4.013,
              "relativeStrength5dPct": 12.164,
              "relativeStrength20dPct": 24.68,
              "avgDollarVolume10d": 3498685680,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.939,
              "h4": -0.995,
              "d1": -0.995,
              "d3": -0.7
            },
            "selectionPrice": 1420.6700439453125,
            "invalidatedAt": "2026-11-02T14:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "GM",
            "quantScore": 1.106,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 89.06,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 85.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.213,
              "momentum20d": 10.289,
              "realizedVol10dAnnualized": 52.55,
              "volumeRatio": 0.493,
              "atrPct": 3.338,
              "gapPct": -0.251,
              "relativeStrength5dPct": 15.817,
              "relativeStrength20dPct": 11.416,
              "avgDollarVolume10d": 855815877,
              "maxSelectedCorrelation": 0.199
            },
            "outcomes": {
              "h1": 0.287,
              "h4": 2.528,
              "d1": 2.528,
              "d3": 2.397
            },
            "selectionPrice": 87.48999786376953,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.754,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 649.53,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 631.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.985,
              "momentum20d": 26.675,
              "realizedVol10dAnnualized": 41.42,
              "volumeRatio": 0.333,
              "atrPct": 3.26,
              "gapPct": 0.987,
              "relativeStrength5dPct": 6.589,
              "relativeStrength20dPct": 27.802,
              "avgDollarVolume10d": 1177317519,
              "maxSelectedCorrelation": 0.148
            },
            "outcomes": {
              "h1": 0.067,
              "h4": -0.207,
              "d1": -0.207,
              "d3": 0.568
            },
            "selectionPrice": 640.3400268554688,
            "invalidatedAt": "2026-11-02T14:30:00.000Z"
          },
          {
            "symbol": "TSLA",
            "quantScore": 0.702,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 404.75,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 393.25,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.195,
              "momentum20d": 12.677,
              "realizedVol10dAnnualized": 41.56,
              "volumeRatio": 0.594,
              "atrPct": 3.604,
              "gapPct": -2.544,
              "relativeStrength5dPct": 7.799,
              "relativeStrength20dPct": 13.804,
              "avgDollarVolume10d": 15383219326,
              "maxSelectedCorrelation": 0.404
            },
            "outcomes": {
              "h1": 0.79,
              "h4": 4.028,
              "d1": 4.028,
              "d3": 3.343
            },
            "selectionPrice": 398.93499755859375,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "KLAC",
            "quantScore": 0.618,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 162.49,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 154.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.017,
              "momentum20d": -20.761,
              "realizedVol10dAnnualized": 68.11,
              "volumeRatio": 0.607,
              "atrPct": 5.204,
              "gapPct": -4.857,
              "relativeStrength5dPct": 9.621,
              "relativeStrength20dPct": -19.634,
              "avgDollarVolume10d": 1904637749,
              "maxSelectedCorrelation": 0.55
            },
            "outcomes": {
              "h1": 0.701,
              "h4": 3.149,
              "d1": 3.149,
              "d3": 0.089
            },
            "selectionPrice": 158.7100067138672,
            "invalidatedAt": "2026-11-02T19:30:00.000Z",
            "triggeredAt": "2026-11-11T15:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-10-31T13:07:20.501Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LLY",
            "quantScore": 1.276,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1437.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1397.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.314,
              "momentum20d": 23.28,
              "realizedVol10dAnnualized": 41.58,
              "volumeRatio": 2.073,
              "atrPct": 3.403,
              "gapPct": 4.013,
              "relativeStrength5dPct": 11.873,
              "relativeStrength20dPct": 24.363,
              "avgDollarVolume10d": 3878332845,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.963
            },
            "selectionPrice": 1417.5400390625,
            "invalidatedAt": "2026-11-02T14:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "GM",
            "quantScore": 1.165,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 88.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 85.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.121,
              "momentum20d": 10.2,
              "realizedVol10dAnnualized": 52.49,
              "volumeRatio": 1.321,
              "atrPct": 3.378,
              "gapPct": -0.245,
              "relativeStrength5dPct": 15.68,
              "relativeStrength20dPct": 11.283,
              "avgDollarVolume10d": 919179698,
              "maxSelectedCorrelation": 0.195
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.074
            },
            "selectionPrice": 87.4000015258789,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.727,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 646.25,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 627.65,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.424,
              "momentum20d": 26.004,
              "realizedVol10dAnnualized": 42.14,
              "volumeRatio": 0.898,
              "atrPct": 3.278,
              "gapPct": 0.987,
              "relativeStrength5dPct": 5.983,
              "relativeStrength20dPct": 27.086,
              "avgDollarVolume10d": 1246141743,
              "maxSelectedCorrelation": 0.139
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 1.004
            },
            "selectionPrice": 636.9500122070312,
            "triggeredAt": "2026-11-03T15:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "KLAC",
            "quantScore": 0.7,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 161.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 154.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.447,
              "momentum20d": -21.175,
              "realizedVol10dAnnualized": 69.04,
              "volumeRatio": 1.924,
              "atrPct": 5.347,
              "gapPct": -4.712,
              "relativeStrength5dPct": 9.006,
              "relativeStrength20dPct": -20.093,
              "avgDollarVolume10d": 2137719307,
              "maxSelectedCorrelation": 0.312
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -3.612
            },
            "selectionPrice": 157.91000366210938,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-02T19:30:00.000Z"
          },
          {
            "symbol": "TSLA",
            "quantScore": 0.691,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 405.53,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 394.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.412,
              "momentum20d": 12.906,
              "realizedVol10dAnnualized": 41.3,
              "volumeRatio": 1.087,
              "atrPct": 3.597,
              "gapPct": -2.499,
              "relativeStrength5dPct": 7.972,
              "relativeStrength20dPct": 13.988,
              "avgDollarVolume10d": 16180942301,
              "maxSelectedCorrelation": 0.547
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.264
            },
            "selectionPrice": 399.80999755859375,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-01T16:25:35.795Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LLY",
            "quantScore": 1.276,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1437.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1397.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.314,
              "momentum20d": 23.28,
              "realizedVol10dAnnualized": 41.58,
              "volumeRatio": 2.073,
              "atrPct": 3.403,
              "gapPct": 4.013,
              "relativeStrength5dPct": 11.873,
              "relativeStrength20dPct": 24.363,
              "avgDollarVolume10d": 3878332845,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.249,
              "d3": 1.464
            },
            "selectionPrice": 1417.5400390625,
            "invalidatedAt": "2026-11-02T14:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "GM",
            "quantScore": 1.165,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 88.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 85.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.121,
              "momentum20d": 10.2,
              "realizedVol10dAnnualized": 52.49,
              "volumeRatio": 1.321,
              "atrPct": 3.378,
              "gapPct": -0.245,
              "relativeStrength5dPct": 15.68,
              "relativeStrength20dPct": 11.283,
              "avgDollarVolume10d": 919179698,
              "maxSelectedCorrelation": 0.195
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.341,
              "d3": 4.132
            },
            "selectionPrice": 87.4000015258789,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.727,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 646.25,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 627.65,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.424,
              "momentum20d": 26.004,
              "realizedVol10dAnnualized": 42.14,
              "volumeRatio": 0.898,
              "atrPct": 3.278,
              "gapPct": 0.987,
              "relativeStrength5dPct": 5.983,
              "relativeStrength20dPct": 27.086,
              "avgDollarVolume10d": 1246141743,
              "maxSelectedCorrelation": 0.139
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.453,
              "d3": -6.73
            },
            "selectionPrice": 636.9500122070312,
            "triggeredAt": "2026-11-03T15:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "KLAC",
            "quantScore": 0.7,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 161.69,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 154.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.447,
              "momentum20d": -21.175,
              "realizedVol10dAnnualized": 69.04,
              "volumeRatio": 1.924,
              "atrPct": 5.347,
              "gapPct": -4.712,
              "relativeStrength5dPct": 9.006,
              "relativeStrength20dPct": -20.093,
              "avgDollarVolume10d": 2137719307,
              "maxSelectedCorrelation": 0.312
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.891,
              "d3": -6.009
            },
            "selectionPrice": 157.91000366210938,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-02T19:30:00.000Z"
          },
          {
            "symbol": "TSLA",
            "quantScore": 0.691,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 405.53,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 394.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.412,
              "momentum20d": 12.906,
              "realizedVol10dAnnualized": 41.3,
              "volumeRatio": 1.087,
              "atrPct": 3.597,
              "gapPct": -2.499,
              "relativeStrength5dPct": 7.972,
              "relativeStrength20dPct": 13.988,
              "avgDollarVolume10d": 16180942301,
              "maxSelectedCorrelation": 0.547
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.358,
              "d3": -5.565
            },
            "selectionPrice": 399.80999755859375,
            "triggeredAt": "2026-11-02T14:30:00.000Z",
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-02T21:21:56.888Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "RIVN",
            "quantScore": 1.239,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 13.47,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 12.91,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.398,
              "momentum20d": -7.762,
              "realizedVol10dAnnualized": 60.97,
              "volumeRatio": 1.673,
              "atrPct": 4.481,
              "gapPct": 4.852,
              "relativeStrength5dPct": 17.125,
              "relativeStrength20dPct": -5.49,
              "avgDollarVolume10d": 457681103,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 5.807,
              "d3": 0.45
            },
            "selectionPrice": 13.1899995803833,
            "triggeredAt": "2026-11-03T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T14:30:00.000Z"
          },
          {
            "symbol": "GM",
            "quantScore": 1.123,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 91.58,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 88.3,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 17.861,
              "momentum20d": 14.91,
              "realizedVol10dAnnualized": 52.61,
              "volumeRatio": 0.852,
              "atrPct": 3.315,
              "gapPct": 1.259,
              "relativeStrength5dPct": 19.589,
              "relativeStrength20dPct": 17.182,
              "avgDollarVolume10d": 949586321,
              "maxSelectedCorrelation": 0.237
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 3.539,
              "d3": -0.226
            },
            "selectionPrice": 89.94000244140625,
            "invalidatedAt": "2026-11-03T16:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.957,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1430.75,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1391.23,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.308,
              "momentum20d": 23.462,
              "realizedVol10dAnnualized": 40.42,
              "volumeRatio": 1.029,
              "atrPct": 3.445,
              "gapPct": -1.721,
              "relativeStrength5dPct": 12.035,
              "relativeStrength20dPct": 25.735,
              "avgDollarVolume10d": 4037757671,
              "maxSelectedCorrelation": 0.1
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.053,
              "d3": -3.945
            },
            "selectionPrice": 1410.989990234375,
            "triggeredAt": "2026-11-03T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T16:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.788,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 220.93,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 215.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.054,
              "momentum20d": 20.658,
              "realizedVol10dAnnualized": 36.8,
              "volumeRatio": 1.108,
              "atrPct": 2.537,
              "gapPct": 1.401,
              "relativeStrength5dPct": 11.782,
              "relativeStrength20dPct": 22.931,
              "avgDollarVolume10d": 706238572,
              "maxSelectedCorrelation": 0.671
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 4.803,
              "d3": 5.552
            },
            "selectionPrice": 218.14999389648438,
            "invalidatedAt": "2026-11-03T14:30:00.000Z",
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "GE",
            "quantScore": 0.586,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 320.85,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 310.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.482,
              "momentum20d": 2.009,
              "realizedVol10dAnnualized": 46.37,
              "volumeRatio": 0.797,
              "atrPct": 3.441,
              "gapPct": 2.452,
              "relativeStrength5dPct": 11.21,
              "relativeStrength20dPct": 4.282,
              "avgDollarVolume10d": 2039480627,
              "maxSelectedCorrelation": 0.738
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.008,
              "d3": 0.702
            },
            "selectionPrice": 315.7799987792969,
            "triggeredAt": "2026-11-03T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-03T18:02:39.669Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LLY",
            "quantScore": 1.002,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1438.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1400.36,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.73,
              "momentum20d": 24.174,
              "realizedVol10dAnnualized": 38.84,
              "volumeRatio": 0.321,
              "atrPct": 3.39,
              "gapPct": -0.805,
              "relativeStrength5dPct": 12.518,
              "relativeStrength20dPct": 26.617,
              "avgDollarVolume10d": 3870977606,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.599,
              "h4": -0.782,
              "d1": 0.263,
              "d3": -3.752
            },
            "selectionPrice": 1419.5301513671875,
            "triggeredAt": "2026-11-04T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T16:30:00.000Z"
          },
          {
            "symbol": "SHOP",
            "quantScore": 0.9,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 150.46,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 146.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -10.337,
              "momentum20d": -7.145,
              "realizedVol10dAnnualized": 34.76,
              "volumeRatio": 2.135,
              "atrPct": 5.997,
              "gapPct": -12.806,
              "relativeStrength5dPct": -8.549,
              "relativeStrength20dPct": -4.702,
              "avgDollarVolume10d": 1251656089,
              "maxSelectedCorrelation": 0.354
            },
            "outcomes": {
              "h1": -1.019,
              "h4": 2.504,
              "d1": 4.382,
              "d3": 2.545
            },
            "selectionPrice": 148.55499267578125,
            "invalidatedAt": "2026-11-03T18:30:00.000Z",
            "triggeredAt": "2026-11-04T15:30:00.000Z"
          },
          {
            "symbol": "RIVN",
            "quantScore": 0.8,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 13.52,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 12.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.014,
              "momentum20d": -9.315,
              "realizedVol10dAnnualized": 60.99,
              "volumeRatio": 0.321,
              "atrPct": 4.474,
              "gapPct": 1.744,
              "relativeStrength5dPct": 13.801,
              "relativeStrength20dPct": -6.872,
              "avgDollarVolume10d": 455282809,
              "maxSelectedCorrelation": 0.318
            },
            "outcomes": {
              "h1": -0.113,
              "h4": 6.245,
              "d1": 5.681,
              "d3": 1.354
            },
            "selectionPrice": 13.239999771118164,
            "triggeredAt": "2026-11-04T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T14:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.689,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 216.27,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 210.35,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.634,
              "momentum20d": 18.835,
              "realizedVol10dAnnualized": 40,
              "volumeRatio": 0.262,
              "atrPct": 2.652,
              "gapPct": -1.077,
              "relativeStrength5dPct": 9.422,
              "relativeStrength20dPct": 21.278,
              "avgDollarVolume10d": 643854785,
              "maxSelectedCorrelation": 0.657
            },
            "outcomes": {
              "h1": -0.363,
              "h4": 4.897,
              "d1": 6.748,
              "d3": 5.582
            },
            "selectionPrice": 213.3094940185547,
            "triggeredAt": "2026-11-04T14:30:00.000Z"
          },
          {
            "symbol": "ORCL",
            "quantScore": 0.673,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 131.58,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 123.68,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": -2.222,
              "momentum20d": -10.423,
              "realizedVol10dAnnualized": 89.37,
              "volumeRatio": 0.949,
              "atrPct": 6.195,
              "gapPct": 2.332,
              "relativeStrength5dPct": -0.434,
              "relativeStrength20dPct": -7.98,
              "avgDollarVolume10d": 5091110815,
              "maxSelectedCorrelation": 0.589
            },
            "outcomes": {
              "h1": 0.756,
              "h4": 2.066,
              "d1": 0.867,
              "d3": -7.678
            },
            "selectionPrice": 127.5250015258789,
            "invalidatedAt": "2026-11-04T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-04T18:22:53.847Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "RIVN",
            "quantScore": 0.944,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 14.36,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 13.73,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 20.344,
              "momentum20d": -3.211,
              "realizedVol10dAnnualized": 65.18,
              "volumeRatio": 0.602,
              "atrPct": 4.422,
              "gapPct": 3.01,
              "relativeStrength5dPct": 20.877,
              "relativeStrength20dPct": -1.812,
              "avgDollarVolume10d": 513688342,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.464,
              "h4": -8.098,
              "d1": -6.707,
              "d3": -0.397
            },
            "selectionPrice": 14.045000076293945,
            "invalidatedAt": "2026-11-05T14:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.943,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 231.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 224.24,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 14.937,
              "momentum20d": 24.155,
              "realizedVol10dAnnualized": 48,
              "volumeRatio": 0.723,
              "atrPct": 2.685,
              "gapPct": 4.462,
              "relativeStrength5dPct": 15.47,
              "relativeStrength20dPct": 25.554,
              "avgDollarVolume10d": 731282694,
              "maxSelectedCorrelation": 0.357
            },
            "outcomes": {
              "h1": 0.464,
              "h4": 0.801,
              "d1": -0.653,
              "d3": -0.131
            },
            "selectionPrice": 228.03500366210938,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-06T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.88,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 493.64,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 475.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.079,
              "momentum20d": 19.702,
              "realizedVol10dAnnualized": 54.43,
              "volumeRatio": 1.078,
              "atrPct": 3.345,
              "gapPct": 4.138,
              "relativeStrength5dPct": 9.612,
              "relativeStrength20dPct": 21.101,
              "avgDollarVolume10d": 1261298846,
              "maxSelectedCorrelation": 0.596
            },
            "outcomes": {
              "h1": 0.112,
              "h4": -1.184,
              "d1": -3.934,
              "d3": -5.639
            },
            "selectionPrice": 484.6300048828125,
            "invalidatedAt": "2026-11-05T15:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.652,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1440.46,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1403.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.365,
              "momentum20d": 22.838,
              "realizedVol10dAnnualized": 37.8,
              "volumeRatio": 0.492,
              "atrPct": 3.271,
              "gapPct": 2.173,
              "relativeStrength5dPct": 10.899,
              "relativeStrength20dPct": 24.237,
              "avgDollarVolume10d": 4100151591,
              "maxSelectedCorrelation": 0.516
            },
            "outcomes": {
              "h1": -0.076,
              "h4": 1.342,
              "d1": -2.453,
              "d3": -1.574
            },
            "selectionPrice": 1421.8399658203125,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T16:30:00.000Z"
          },
          {
            "symbol": "NEE",
            "quantScore": 0.631,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 89.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 87.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.306,
              "momentum20d": 13.713,
              "realizedVol10dAnnualized": 32.73,
              "volumeRatio": 1.208,
              "atrPct": 2.131,
              "gapPct": 3.723,
              "relativeStrength5dPct": 9.84,
              "relativeStrength20dPct": 15.112,
              "avgDollarVolume10d": 1155027571,
              "maxSelectedCorrelation": 0.786
            },
            "outcomes": {
              "h1": -0.124,
              "h4": 0.638,
              "d1": -0.768,
              "d3": -1.42
            },
            "selectionPrice": 88.57499694824219,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-06T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-05T12:45:13.617Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LOW",
            "quantScore": 1.029,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 233.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 225.42,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.615,
              "momentum20d": 24.887,
              "realizedVol10dAnnualized": 49.83,
              "volumeRatio": 1.461,
              "atrPct": 2.679,
              "gapPct": 4.462,
              "relativeStrength5dPct": 16.327,
              "relativeStrength20dPct": 26.463,
              "avgDollarVolume10d": 792659308,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.203,
              "d1": -1.955,
              "d3": -0.925
            },
            "selectionPrice": 229.3800048828125,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-06T14:30:00.000Z"
          },
          {
            "symbol": "RIVN",
            "quantScore": 0.916,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 14.38,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 13.74,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 20.48,
              "momentum20d": -3.101,
              "realizedVol10dAnnualized": 65.39,
              "volumeRatio": 0.918,
              "atrPct": 4.417,
              "gapPct": 3.085,
              "relativeStrength5dPct": 21.192,
              "relativeStrength20dPct": -1.525,
              "avgDollarVolume10d": 534915106,
              "maxSelectedCorrelation": 0.37
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.759,
              "d1": 4.076,
              "d3": 8.38
            },
            "selectionPrice": 14.0600004196167,
            "invalidatedAt": "2026-11-05T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.87,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 490.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 473.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.537,
              "momentum20d": 19.108,
              "realizedVol10dAnnualized": 52.27,
              "volumeRatio": 1.889,
              "atrPct": 3.366,
              "gapPct": 4.138,
              "relativeStrength5dPct": 9.249,
              "relativeStrength20dPct": 20.684,
              "avgDollarVolume10d": 1356508892,
              "maxSelectedCorrelation": 0.619
            },
            "outcomes": {
              "h1": 0,
              "h4": -3.278,
              "d1": -4.352,
              "d3": -4.508
            },
            "selectionPrice": 482.1000061035156,
            "invalidatedAt": "2026-11-05T15:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.653,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1436.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1399.38,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.067,
              "momentum20d": 22.506,
              "realizedVol10dAnnualized": 37.87,
              "volumeRatio": 0.997,
              "atrPct": 3.279,
              "gapPct": 2.173,
              "relativeStrength5dPct": 10.779,
              "relativeStrength20dPct": 24.082,
              "avgDollarVolume10d": 4362729803,
              "maxSelectedCorrelation": 0.473
            },
            "outcomes": {
              "h1": 0,
              "h4": -3.639,
              "d1": -5.175,
              "d3": -2.878
            },
            "selectionPrice": 1417.989990234375,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-05T16:30:00.000Z"
          },
          {
            "symbol": "NEE",
            "quantScore": 0.631,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 89.44,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 87.46,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.171,
              "momentum20d": 13.572,
              "realizedVol10dAnnualized": 32.35,
              "volumeRatio": 2.001,
              "atrPct": 2.147,
              "gapPct": 3.723,
              "relativeStrength5dPct": 9.883,
              "relativeStrength20dPct": 15.148,
              "avgDollarVolume10d": 1250210634,
              "maxSelectedCorrelation": 0.791
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.814,
              "d1": -1.555,
              "d3": -2.045
            },
            "selectionPrice": 88.44999694824219,
            "triggeredAt": "2026-11-05T14:30:00.000Z",
            "invalidatedAt": "2026-11-06T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-06T15:32:51.744Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "ABNB",
            "quantScore": 1.61,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 189.13,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 181.35,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.683,
              "momentum20d": 13.484,
              "realizedVol10dAnnualized": 60.54,
              "volumeRatio": 0.639,
              "atrPct": 3.596,
              "gapPct": 12.649,
              "relativeStrength5dPct": 15.032,
              "relativeStrength20dPct": 18.13,
              "avgDollarVolume10d": 791513168,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0.186,
              "h4": -0.179,
              "d1": 0.588,
              "d3": 2.122
            },
            "selectionPrice": 185.3300018310547,
            "triggeredAt": "2026-11-06T16:30:00.000Z",
            "invalidatedAt": "2026-11-11T14:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.734,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 229.43,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 222.22,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.015,
              "momentum20d": 19.58,
              "realizedVol10dAnnualized": 46.09,
              "volumeRatio": 0.114,
              "atrPct": 2.991,
              "gapPct": -3.036,
              "relativeStrength5dPct": 10.364,
              "relativeStrength20dPct": 24.227,
              "avgDollarVolume10d": 749203867,
              "maxSelectedCorrelation": 0.472
            },
            "outcomes": {
              "h1": 0.276,
              "h4": -0.078,
              "d1": 1.455,
              "d3": 3.085
            },
            "selectionPrice": 225.8350067138672,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          },
          {
            "symbol": "RIVN",
            "quantScore": 0.659,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 13.64,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 13.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.552,
              "momentum20d": -7.038,
              "realizedVol10dAnnualized": 68.48,
              "volumeRatio": 0.121,
              "atrPct": 4.914,
              "gapPct": 0.828,
              "relativeStrength5dPct": 11.901,
              "relativeStrength20dPct": -2.391,
              "avgDollarVolume10d": 508461521,
              "maxSelectedCorrelation": 0.51
            },
            "outcomes": {
              "h1": -0.704,
              "h4": 0.852,
              "d1": 3.402,
              "d3": 2.963
            },
            "selectionPrice": 13.329999923706055,
            "triggeredAt": "2026-11-06T20:30:00.000Z",
            "invalidatedAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.637,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 467.21,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 449.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.135,
              "momentum20d": 10.376,
              "realizedVol10dAnnualized": 54.75,
              "volumeRatio": 0.129,
              "atrPct": 3.838,
              "gapPct": -2.567,
              "relativeStrength5dPct": 8.484,
              "relativeStrength20dPct": 15.023,
              "avgDollarVolume10d": 1262469739,
              "maxSelectedCorrelation": 0.76
            },
            "outcomes": {
              "h1": -0.552,
              "h4": -0.977,
              "d1": -0.04,
              "d3": 0.996
            },
            "selectionPrice": 458.6449890136719,
            "invalidatedAt": "2026-11-10T14:30:00.000Z"
          },
          {
            "symbol": "AMZN",
            "quantScore": 0.612,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 266.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 258.56,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.185,
              "momentum20d": 3.293,
              "realizedVol10dAnnualized": 42.46,
              "volumeRatio": 0.144,
              "atrPct": 3.704,
              "gapPct": -0.154,
              "relativeStrength5dPct": 11.533,
              "relativeStrength20dPct": 7.939,
              "avgDollarVolume10d": 15165901666,
              "maxSelectedCorrelation": 0.688
            },
            "outcomes": {
              "h1": 0,
              "h4": -1.106,
              "d1": 2.545,
              "d3": 2.54
            },
            "selectionPrice": 262.4649963378906,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T16:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-07T13:41:40.489Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "ABNB",
            "quantScore": 2.029,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 194.63,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 185.35,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.573,
              "momentum20d": 16.394,
              "realizedVol10dAnnualized": 70.55,
              "volumeRatio": 2.221,
              "atrPct": 3.506,
              "gapPct": 12.352,
              "relativeStrength5dPct": 18.276,
              "relativeStrength20dPct": 21.387,
              "avgDollarVolume10d": 985217872,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.105
            },
            "selectionPrice": 189.99000549316406,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-10T17:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.827,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 228.19,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 220.91,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.404,
              "momentum20d": 18.904,
              "realizedVol10dAnnualized": 46.76,
              "volumeRatio": 0.834,
              "atrPct": 3.008,
              "gapPct": -3.036,
              "relativeStrength5dPct": 10.108,
              "relativeStrength20dPct": 23.897,
              "avgDollarVolume10d": 813457087,
              "maxSelectedCorrelation": 0.312
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.417
            },
            "selectionPrice": 224.5500030517578,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          },
          {
            "symbol": "RIVN",
            "quantScore": 0.733,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 13.93,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 13.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.924,
              "momentum20d": -5.024,
              "realizedVol10dAnnualized": 68.42,
              "volumeRatio": 0.412,
              "atrPct": 4.912,
              "gapPct": 0.903,
              "relativeStrength5dPct": 14.628,
              "relativeStrength20dPct": -0.032,
              "avgDollarVolume10d": 539167214,
              "maxSelectedCorrelation": 0.466
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 1.007
            },
            "selectionPrice": 13.609999656677246,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "GE",
            "quantScore": 0.707,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 328.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 318.11,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.104,
              "momentum20d": 5.765,
              "realizedVol10dAnnualized": 45.79,
              "volumeRatio": 0.935,
              "atrPct": 3.943,
              "gapPct": 0.743,
              "relativeStrength5dPct": 9.807,
              "relativeStrength20dPct": 10.758,
              "avgDollarVolume10d": 1900835389,
              "maxSelectedCorrelation": 0.489
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 0.42
            },
            "selectionPrice": 323.239990234375,
            "triggeredAt": "2026-11-09T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.569,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 461.64,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 443.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.812,
              "momentum20d": 9.001,
              "realizedVol10dAnnualized": 56.35,
              "volumeRatio": 0.579,
              "atrPct": 3.974,
              "gapPct": -2.459,
              "relativeStrength5dPct": 7.516,
              "relativeStrength20dPct": 13.993,
              "avgDollarVolume10d": 1322352556,
              "maxSelectedCorrelation": 0.769
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -1.697
            },
            "selectionPrice": 452.79998779296875,
            "triggeredAt": "2026-11-09T16:30:00.000Z",
            "invalidatedAt": "2026-11-11T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-08T14:32:17.729Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "ABNB",
            "quantScore": 2.027,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 194.63,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 185.35,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.573,
              "momentum20d": 16.394,
              "realizedVol10dAnnualized": 70.55,
              "volumeRatio": 2.221,
              "atrPct": 3.506,
              "gapPct": 12.352,
              "relativeStrength5dPct": 18.276,
              "relativeStrength20dPct": 21.387,
              "avgDollarVolume10d": 985217872,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.823,
              "d3": -6.011
            },
            "selectionPrice": 189.99000549316406,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-10T17:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.829,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 228.19,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 220.91,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.404,
              "momentum20d": 18.904,
              "realizedVol10dAnnualized": 46.76,
              "volumeRatio": 0.834,
              "atrPct": 3.008,
              "gapPct": -3.036,
              "relativeStrength5dPct": 10.108,
              "relativeStrength20dPct": 23.897,
              "avgDollarVolume10d": 813457087,
              "maxSelectedCorrelation": 0.312
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.805,
              "d3": 0.107
            },
            "selectionPrice": 224.5500030517578,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          },
          {
            "symbol": "RIVN",
            "quantScore": 0.736,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 13.93,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 13.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.924,
              "momentum20d": -5.024,
              "realizedVol10dAnnualized": 68.42,
              "volumeRatio": 0.412,
              "atrPct": 4.912,
              "gapPct": 0.903,
              "relativeStrength5dPct": 14.628,
              "relativeStrength20dPct": -0.032,
              "avgDollarVolume10d": 539167214,
              "maxSelectedCorrelation": 0.466
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.174,
              "d3": -2.61
            },
            "selectionPrice": 13.609999656677246,
            "triggeredAt": "2026-11-09T14:30:00.000Z",
            "invalidatedAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "GE",
            "quantScore": 0.708,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 328.37,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 318.11,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.104,
              "momentum20d": 5.765,
              "realizedVol10dAnnualized": 45.79,
              "volumeRatio": 0.935,
              "atrPct": 3.943,
              "gapPct": 0.743,
              "relativeStrength5dPct": 9.807,
              "relativeStrength20dPct": 10.758,
              "avgDollarVolume10d": 1900835389,
              "maxSelectedCorrelation": 0.489
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.473,
              "d3": 3.135
            },
            "selectionPrice": 323.239990234375,
            "triggeredAt": "2026-11-09T14:30:00.000Z"
          },
          {
            "symbol": "ISRG",
            "quantScore": 0.571,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 461.64,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 443.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.812,
              "momentum20d": 9.001,
              "realizedVol10dAnnualized": 56.35,
              "volumeRatio": 0.579,
              "atrPct": 3.974,
              "gapPct": -2.459,
              "relativeStrength5dPct": 7.516,
              "relativeStrength20dPct": 13.993,
              "avgDollarVolume10d": 1322352556,
              "maxSelectedCorrelation": 0.769
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0.669,
              "d3": -2.597
            },
            "selectionPrice": 452.79998779296875,
            "triggeredAt": "2026-11-09T16:30:00.000Z",
            "invalidatedAt": "2026-11-11T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-09T20:42:08.555Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 1.509,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 539.1,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 486.88,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.886,
              "momentum20d": -15.641,
              "realizedVol10dAnnualized": 146.91,
              "volumeRatio": 0.857,
              "atrPct": 8.005,
              "gapPct": 5.423,
              "relativeStrength5dPct": 9.591,
              "relativeStrength20dPct": -12.525,
              "avgDollarVolume10d": 19064077310,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -3.267,
              "d3": 9.893
            },
            "selectionPrice": 513.0601196289062,
            "triggeredAt": "2026-11-10T14:30:00.000Z",
            "invalidatedAt": "2026-11-17T15:30:00.000Z"
          },
          {
            "symbol": "UNG",
            "quantScore": 1.251,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 10.25,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 9.93,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.11,
              "momentum20d": -8.357,
              "realizedVol10dAnnualized": 45.06,
              "volumeRatio": 1.372,
              "atrPct": 3.522,
              "gapPct": 5.561,
              "relativeStrength5dPct": 11.815,
              "relativeStrength20dPct": -5.242,
              "avgDollarVolume10d": 218632775,
              "maxSelectedCorrelation": 0.586
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 3.373,
              "d3": 3.77
            },
            "selectionPrice": 10.09000015258789,
            "triggeredAt": "2026-11-10T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "ABNB",
            "quantScore": 1.223,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 197,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 187.67,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 12.404,
              "momentum20d": 15.955,
              "realizedVol10dAnnualized": 70,
              "volumeRatio": 0.536,
              "atrPct": 3.62,
              "gapPct": 1.742,
              "relativeStrength5dPct": 12.11,
              "relativeStrength20dPct": 19.071,
              "avgDollarVolume10d": 1034308752,
              "maxSelectedCorrelation": 0.424
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.293,
              "d3": -3.372
            },
            "selectionPrice": 192.1999969482422,
            "invalidatedAt": "2026-11-10T14:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.839,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 236.77,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 229.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.782,
              "momentum20d": 25.239,
              "realizedVol10dAnnualized": 47.36,
              "volumeRatio": 0.467,
              "atrPct": 3.037,
              "gapPct": 3.211,
              "relativeStrength5dPct": 6.488,
              "relativeStrength20dPct": 28.355,
              "avgDollarVolume10d": 814638764,
              "maxSelectedCorrelation": 0.289
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 1.253,
              "d3": -0.672
            },
            "selectionPrice": 232.94500732421875,
            "invalidatedAt": "2026-11-10T14:30:00.000Z"
          },
          {
            "symbol": "AMZN",
            "quantScore": 0.835,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 272.65,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 264.27,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.294,
              "momentum20d": 2.298,
              "realizedVol10dAnnualized": 45.07,
              "volumeRatio": 0.561,
              "atrPct": 3.932,
              "gapPct": 3.864,
              "relativeStrength5dPct": 9,
              "relativeStrength20dPct": 5.413,
              "avgDollarVolume10d": 16451823909,
              "maxSelectedCorrelation": 0.618
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -0.448,
              "d3": -1.709
            },
            "selectionPrice": 268.4016418457031,
            "triggeredAt": "2026-11-10T14:30:00.000Z",
            "invalidatedAt": "2026-11-13T16:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-10T18:17:01.936Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "LCID",
            "quantScore": 3.173,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 4.12,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 3.78,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 30.795,
              "momentum20d": 14.993,
              "realizedVol10dAnnualized": 122.56,
              "volumeRatio": 1.335,
              "atrPct": 8.463,
              "gapPct": -0.139,
              "relativeStrength5dPct": 31.837,
              "relativeStrength20dPct": 19.055,
              "avgDollarVolume10d": 54543837,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -3.992,
              "h4": -2.059,
              "d1": -5.663,
              "d3": -23.166
            },
            "selectionPrice": 3.950000047683716,
            "invalidatedAt": "2026-11-10T18:30:00.000Z"
          },
          {
            "symbol": "UNG",
            "quantScore": 1.162,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 10.5,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 10.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 13.252,
              "momentum20d": -5.312,
              "realizedVol10dAnnualized": 45.64,
              "volumeRatio": 1.058,
              "atrPct": 3.302,
              "gapPct": 1.29,
              "relativeStrength5dPct": 14.294,
              "relativeStrength20dPct": -1.25,
              "avgDollarVolume10d": 218307206,
              "maxSelectedCorrelation": 0.603
            },
            "outcomes": {
              "h1": 0.724,
              "h4": 1.882,
              "d1": -2.51,
              "d3": -2.317
            },
            "selectionPrice": 10.339900016784668,
            "triggeredAt": "2026-11-11T14:30:00.000Z",
            "invalidatedAt": "2026-11-11T17:30:00.000Z"
          },
          {
            "symbol": "ABNB",
            "quantScore": 0.947,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 190.98,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 181.81,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.641,
              "momentum20d": 14.003,
              "realizedVol10dAnnualized": 70.95,
              "volumeRatio": 0.224,
              "atrPct": 3.763,
              "gapPct": -1.203,
              "relativeStrength5dPct": 12.682,
              "relativeStrength20dPct": 18.066,
              "avgDollarVolume10d": 1010974331,
              "maxSelectedCorrelation": 0.53
            },
            "outcomes": {
              "h1": 0.029,
              "h4": -3.344,
              "d1": -2.137,
              "d3": 0.104
            },
            "selectionPrice": 186.47000122070312,
            "invalidatedAt": "2026-11-11T14:30:00.000Z"
          },
          {
            "symbol": "LOW",
            "quantScore": 0.83,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 235.63,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 228.07,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.656,
              "momentum20d": 24.939,
              "realizedVol10dAnnualized": 47.05,
              "volumeRatio": 0.256,
              "atrPct": 3.084,
              "gapPct": -1.551,
              "relativeStrength5dPct": 9.698,
              "relativeStrength20dPct": 29.002,
              "avgDollarVolume10d": 799160378,
              "maxSelectedCorrelation": 0.284
            },
            "outcomes": {
              "h1": -0.183,
              "h4": -1.483,
              "d1": -0.615,
              "d3": -1.733
            },
            "selectionPrice": 231.8800048828125,
            "invalidatedAt": "2026-11-11T14:30:00.000Z"
          },
          {
            "symbol": "AMZN",
            "quantScore": 0.556,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 272.8,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 264.6,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.184,
              "momentum20d": 3.533,
              "realizedVol10dAnnualized": 44,
              "volumeRatio": 0.317,
              "atrPct": 3.973,
              "gapPct": -0.225,
              "relativeStrength5dPct": 8.226,
              "relativeStrength20dPct": 7.596,
              "avgDollarVolume10d": 16495075142,
              "maxSelectedCorrelation": 0.698
            },
            "outcomes": {
              "h1": 0.435,
              "h4": -1.503,
              "d1": -1.481,
              "d3": -1.79
            },
            "selectionPrice": 268.6199951171875,
            "triggeredAt": "2026-11-11T14:30:00.000Z",
            "invalidatedAt": "2026-11-13T15:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-11T18:16:57.765Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 2.054,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 592,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 534.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.186,
              "momentum20d": -7.023,
              "realizedVol10dAnnualized": 148.64,
              "volumeRatio": 0.517,
              "atrPct": 7.55,
              "gapPct": 5.406,
              "relativeStrength5dPct": 15.881,
              "relativeStrength20dPct": -4.898,
              "avgDollarVolume10d": 23514749645,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -1.059,
              "h4": -0.131,
              "d1": 4.035,
              "d3": -9.965
            },
            "selectionPrice": 562.9949951171875,
            "triggeredAt": "2026-11-12T15:30:00.000Z",
            "invalidatedAt": "2026-11-13T14:30:00.000Z"
          },
          {
            "symbol": "LCID",
            "quantScore": 1.737,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 3.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 3.52,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 9.05,
              "momentum20d": 9.538,
              "realizedVol10dAnnualized": 118.13,
              "volumeRatio": 0.402,
              "atrPct": 8.785,
              "gapPct": -1.326,
              "relativeStrength5dPct": 9.746,
              "relativeStrength20dPct": 11.663,
              "avgDollarVolume10d": 54226616,
              "maxSelectedCorrelation": 0.737
            },
            "outcomes": {
              "h1": -1.091,
              "h4": -10.914,
              "d1": -10.095,
              "d3": -26.057
            },
            "selectionPrice": 3.6760001182556152,
            "invalidatedAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "UNG",
            "quantScore": 1.052,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 10.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 10.06,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 10.362,
              "momentum20d": -10.337,
              "realizedVol10dAnnualized": 47.08,
              "volumeRatio": 0.86,
              "atrPct": 3.585,
              "gapPct": 2.015,
              "relativeStrength5dPct": 11.058,
              "relativeStrength20dPct": -8.212,
              "avgDollarVolume10d": 218456195,
              "maxSelectedCorrelation": 0.64
            },
            "outcomes": {
              "h1": 0.644,
              "h4": 1.98,
              "d1": 3.695,
              "d3": -2.474
            },
            "selectionPrice": 10.230600357055664,
            "invalidatedAt": "2026-11-11T19:30:00.000Z",
            "triggeredAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "SMCI",
            "quantScore": 0.864,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 32.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 30,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.865,
              "momentum20d": -20.553,
              "realizedVol10dAnnualized": 97.14,
              "volumeRatio": 0.501,
              "atrPct": 7.766,
              "gapPct": 6.585,
              "relativeStrength5dPct": 5.56,
              "relativeStrength20dPct": -18.428,
              "avgDollarVolume10d": 1468264455,
              "maxSelectedCorrelation": 0.755
            },
            "outcomes": {
              "h1": -1.002,
              "h4": -8.56,
              "d1": -9.52,
              "d3": -17.673
            },
            "selectionPrice": 31.05500030517578,
            "invalidatedAt": "2026-11-12T14:30:00.000Z"
          },
          {
            "symbol": "ABNB",
            "quantScore": 0.741,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 187.43,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 178.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.714,
              "momentum20d": 10.472,
              "realizedVol10dAnnualized": 71.18,
              "volumeRatio": 0.416,
              "atrPct": 4.035,
              "gapPct": -2.507,
              "relativeStrength5dPct": 4.409,
              "relativeStrength20dPct": 12.597,
              "avgDollarVolume10d": 1051735113,
              "maxSelectedCorrelation": 0.648
            },
            "outcomes": {
              "h1": -0.774,
              "h4": -0.131,
              "d1": -0.859,
              "d3": 1.929
            },
            "selectionPrice": 182.96499633789062,
            "triggeredAt": "2026-11-16T15:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-12T16:29:45.289Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 2.723,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 618.44,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 557.96,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 45.45,
              "momentum20d": 3.045,
              "realizedVol10dAnnualized": 148.41,
              "volumeRatio": 0.628,
              "atrPct": 7.584,
              "gapPct": 2.963,
              "relativeStrength5dPct": 41.499,
              "relativeStrength20dPct": 4.037,
              "avgDollarVolume10d": 26518909144,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0.686,
              "h4": 1.353,
              "d1": -8.977,
              "d3": -12.49
            },
            "selectionPrice": 588.6900024414062,
            "invalidatedAt": "2026-11-13T14:30:00.000Z"
          },
          {
            "symbol": "LCID",
            "quantScore": 1.424,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 3.58,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 3.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 15.305,
              "momentum20d": 4.441,
              "realizedVol10dAnnualized": 118.57,
              "volumeRatio": 0.352,
              "atrPct": 9.76,
              "gapPct": -3.951,
              "relativeStrength5dPct": 11.354,
              "relativeStrength20dPct": 5.433,
              "avgDollarVolume10d": 52244000,
              "maxSelectedCorrelation": 0.655
            },
            "outcomes": {
              "h1": -1.178,
              "h4": -3.976,
              "d1": -10.386,
              "d3": -20.177
            },
            "selectionPrice": 3.440000057220459,
            "invalidatedAt": "2026-11-12T18:30:00.000Z"
          },
          {
            "symbol": "ORCL",
            "quantScore": 0.779,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 132.2,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 124.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 11.501,
              "momentum20d": -1.643,
              "realizedVol10dAnnualized": 85.4,
              "volumeRatio": 0.277,
              "atrPct": 7.253,
              "gapPct": -3.934,
              "relativeStrength5dPct": 7.55,
              "relativeStrength20dPct": -0.65,
              "avgDollarVolume10d": 6430289194,
              "maxSelectedCorrelation": 0.783
            },
            "outcomes": {
              "h1": 0.012,
              "h4": -0.184,
              "d1": -2.594,
              "d3": -6.2
            },
            "selectionPrice": 128.39500427246094,
            "invalidatedAt": "2026-11-13T14:30:00.000Z"
          },
          {
            "symbol": "SMCI",
            "quantScore": 0.665,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 28.57,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 26.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.068,
              "momentum20d": -22.75,
              "realizedVol10dAnnualized": 96.94,
              "volumeRatio": 0.837,
              "atrPct": 9.327,
              "gapPct": -10.647,
              "relativeStrength5dPct": -1.883,
              "relativeStrength20dPct": -21.757,
              "avgDollarVolume10d": 1383611785,
              "maxSelectedCorrelation": 0.791
            },
            "outcomes": {
              "h1": 1.979,
              "h4": 1.658,
              "d1": -0.584,
              "d3": -4.691
            },
            "selectionPrice": 27.460100173950195,
            "invalidatedAt": "2026-11-12T16:30:00.000Z"
          },
          {
            "symbol": "ABNB",
            "quantScore": 0.401,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 188.63,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 179.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.164,
              "momentum20d": 10.152,
              "realizedVol10dAnnualized": 72.34,
              "volumeRatio": 0.165,
              "atrPct": 4.044,
              "gapPct": -0.842,
              "relativeStrength5dPct": 4.213,
              "relativeStrength20dPct": 11.145,
              "avgDollarVolume10d": 1095100267,
              "maxSelectedCorrelation": 0.618
            },
            "outcomes": {
              "h1": -0.358,
              "h4": -1,
              "d1": 1.714,
              "d3": 1.815
            },
            "selectionPrice": 184.02000427246094,
            "triggeredAt": "2026-11-16T15:30:00.000Z",
            "invalidatedAt": "2026-11-18T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-13T17:42:44.078Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 2.09,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 550.15,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 496.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 16.566,
              "momentum20d": -6.901,
              "realizedVol10dAnnualized": 147.33,
              "volumeRatio": 0.598,
              "atrPct": 9.148,
              "gapPct": -3.183,
              "relativeStrength5dPct": 14.314,
              "relativeStrength20dPct": -4.317,
              "avgDollarVolume10d": 24294403940,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.463,
              "h4": -5.339,
              "d1": -5.339,
              "d3": -4.806
            },
            "selectionPrice": 524.3049926757812,
            "invalidatedAt": "2026-11-17T15:30:00.000Z"
          },
          {
            "symbol": "ORCL",
            "quantScore": 0.744,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 127.55,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 120.61,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.873,
              "momentum20d": -7.727,
              "realizedVol10dAnnualized": 80.74,
              "volumeRatio": 0.39,
              "atrPct": 7.621,
              "gapPct": 0.307,
              "relativeStrength5dPct": 4.621,
              "relativeStrength20dPct": -5.143,
              "avgDollarVolume10d": 6008564646,
              "maxSelectedCorrelation": 0.723
            },
            "outcomes": {
              "h1": -0.207,
              "h4": -4.753,
              "d1": -4.753,
              "d3": -5.07
            },
            "selectionPrice": 124.20999908447266,
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.531,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1458.62,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1428,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.596,
              "momentum20d": 15.316,
              "realizedVol10dAnnualized": 30.61,
              "volumeRatio": 0.264,
              "atrPct": 3.507,
              "gapPct": 0.184,
              "relativeStrength5dPct": 4.344,
              "relativeStrength20dPct": 17.9,
              "avgDollarVolume10d": 4476971285,
              "maxSelectedCorrelation": 0.578
            },
            "outcomes": {
              "h1": -0.087,
              "h4": 0.992,
              "d1": 0.992,
              "d3": -0.508
            },
            "selectionPrice": 1444,
            "triggeredAt": "2026-11-16T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T20:30:00.000Z"
          },
          {
            "symbol": "UNG",
            "quantScore": 0.529,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 10.32,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 9.99,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 8.61,
              "momentum20d": -8.431,
              "realizedVol10dAnnualized": 45.57,
              "volumeRatio": 0.394,
              "atrPct": 3.738,
              "gapPct": -2.581,
              "relativeStrength5dPct": 6.357,
              "relativeStrength20dPct": -5.847,
              "avgDollarVolume10d": 208489181,
              "maxSelectedCorrelation": 0.571
            },
            "outcomes": {
              "h1": 0.247,
              "h4": -2.667,
              "d1": -2.667,
              "d3": -2.882
            },
            "selectionPrice": 10.154999732971191,
            "invalidatedAt": "2026-11-16T14:30:00.000Z",
            "triggeredAt": "2026-11-18T15:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.376,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 602.47,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 583.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.587,
              "momentum20d": 11.349,
              "realizedVol10dAnnualized": 45.64,
              "volumeRatio": 0.306,
              "atrPct": 3.402,
              "gapPct": 0.151,
              "relativeStrength5dPct": 2.334,
              "relativeStrength20dPct": 13.933,
              "avgDollarVolume10d": 785182694,
              "maxSelectedCorrelation": 0.515
            },
            "outcomes": {
              "h1": 0.194,
              "h4": -0.396,
              "d1": -0.396,
              "d3": -1.741
            },
            "selectionPrice": 593.0900268554688,
            "invalidatedAt": "2026-11-16T16:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-14T16:07:58.552Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 2.084,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 560.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 507.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 18.934,
              "momentum20d": -5.01,
              "realizedVol10dAnnualized": 144.01,
              "volumeRatio": 1.001,
              "atrPct": 8.966,
              "gapPct": -3.162,
              "relativeStrength5dPct": 16.339,
              "relativeStrength20dPct": -2.753,
              "avgDollarVolume10d": 25861625736,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.459
            },
            "selectionPrice": 534.0599975585938,
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "ORCL",
            "quantScore": 0.725,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 128.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 121.86,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.967,
              "momentum20d": -6.782,
              "realizedVol10dAnnualized": 80.25,
              "volumeRatio": 0.704,
              "atrPct": 7.543,
              "gapPct": 0.307,
              "relativeStrength5dPct": 5.372,
              "relativeStrength20dPct": -4.525,
              "avgDollarVolume10d": 6197414233,
              "maxSelectedCorrelation": 0.715
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -4.383
            },
            "selectionPrice": 125.3499984741211,
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.486,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1458.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1428.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.61,
              "momentum20d": 15.331,
              "realizedVol10dAnnualized": 30.62,
              "volumeRatio": 0.688,
              "atrPct": 3.535,
              "gapPct": 0.184,
              "relativeStrength5dPct": 4.015,
              "relativeStrength20dPct": 17.589,
              "avgDollarVolume10d": 4662533870,
              "maxSelectedCorrelation": 0.6
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.979
            },
            "selectionPrice": 1443.5,
            "triggeredAt": "2026-11-16T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T20:30:00.000Z"
          },
          {
            "symbol": "SO",
            "quantScore": 0.465,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 94.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 92.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.354,
              "momentum20d": 4.945,
              "realizedVol10dAnnualized": 14.91,
              "volumeRatio": 2.814,
              "atrPct": 2.103,
              "gapPct": 0,
              "relativeStrength5dPct": -1.241,
              "relativeStrength20dPct": 7.202,
              "avgDollarVolume10d": 1002384425,
              "maxSelectedCorrelation": 0.414
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.888
            },
            "selectionPrice": 93.58999633789062,
            "triggeredAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.424,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 605.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 586.67,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.107,
              "momentum20d": 11.903,
              "realizedVol10dAnnualized": 45.39,
              "volumeRatio": 0.869,
              "atrPct": 3.386,
              "gapPct": 0.151,
              "relativeStrength5dPct": 2.512,
              "relativeStrength20dPct": 14.16,
              "avgDollarVolume10d": 824382894,
              "maxSelectedCorrelation": 0.525
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.091
            },
            "selectionPrice": 596.0399780273438,
            "invalidatedAt": "2026-11-16T15:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-15T14:27:59.635Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AMD",
            "quantScore": 2.102,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 560.71,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 507.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 18.934,
              "momentum20d": -5.01,
              "realizedVol10dAnnualized": 144.01,
              "volumeRatio": 1.001,
              "atrPct": 8.966,
              "gapPct": -3.162,
              "relativeStrength5dPct": 16.339,
              "relativeStrength20dPct": -2.753,
              "avgDollarVolume10d": 25861625736,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": 1.392
            },
            "selectionPrice": 534.0599975585938,
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "ORCL",
            "quantScore": 0.729,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 128.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 121.86,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 7.967,
              "momentum20d": -6.782,
              "realizedVol10dAnnualized": 80.25,
              "volumeRatio": 0.704,
              "atrPct": 7.543,
              "gapPct": 0.307,
              "relativeStrength5dPct": 5.372,
              "relativeStrength20dPct": -4.525,
              "avgDollarVolume10d": 6197414233,
              "maxSelectedCorrelation": 0.715
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -3.651
            },
            "selectionPrice": 125.3499984741211,
            "invalidatedAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.488,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1458.82,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1428.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 6.61,
              "momentum20d": 15.331,
              "realizedVol10dAnnualized": 30.62,
              "volumeRatio": 0.688,
              "atrPct": 3.535,
              "gapPct": 0.184,
              "relativeStrength5dPct": 4.015,
              "relativeStrength20dPct": 17.589,
              "avgDollarVolume10d": 4662533870,
              "maxSelectedCorrelation": 0.6
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -4.303
            },
            "selectionPrice": 1443.5,
            "triggeredAt": "2026-11-16T14:30:00.000Z",
            "invalidatedAt": "2026-11-16T20:30:00.000Z"
          },
          {
            "symbol": "SO",
            "quantScore": 0.461,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 94.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 92.84,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.354,
              "momentum20d": 4.945,
              "realizedVol10dAnnualized": 14.91,
              "volumeRatio": 2.814,
              "atrPct": 2.103,
              "gapPct": 0,
              "relativeStrength5dPct": -1.241,
              "relativeStrength20dPct": 7.202,
              "avgDollarVolume10d": 1002384425,
              "maxSelectedCorrelation": 0.414
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -0.984
            },
            "selectionPrice": 93.58999633789062,
            "triggeredAt": "2026-11-16T14:30:00.000Z"
          },
          {
            "symbol": "LMT",
            "quantScore": 0.424,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 605.41,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 586.67,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 5.107,
              "momentum20d": 11.903,
              "realizedVol10dAnnualized": 45.39,
              "volumeRatio": 0.869,
              "atrPct": 3.386,
              "gapPct": 0.151,
              "relativeStrength5dPct": 2.512,
              "relativeStrength20dPct": 14.16,
              "avgDollarVolume10d": 824382894,
              "maxSelectedCorrelation": 0.525
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 0,
              "d3": -2.186
            },
            "selectionPrice": 596.0399780273438,
            "invalidatedAt": "2026-11-16T15:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-16T21:00:05.269Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AVGO",
            "quantScore": 0.985,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 343.08,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 323.06,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.254,
              "momentum20d": 1.314,
              "realizedVol10dAnnualized": 86.71,
              "volumeRatio": 0.543,
              "atrPct": 6.137,
              "gapPct": -4.125,
              "relativeStrength5dPct": 5.992,
              "relativeStrength20dPct": 4.412,
              "avgDollarVolume10d": 10674787885,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": 4.597
            },
            "selectionPrice": 333.260009765625,
            "triggeredAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "COST",
            "quantScore": 0.729,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1122.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1105.01,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.478,
              "momentum20d": 12.618,
              "realizedVol10dAnnualized": 21.84,
              "volumeRatio": 0.883,
              "atrPct": 1.911,
              "gapPct": 0.384,
              "relativeStrength5dPct": 6.216,
              "relativeStrength20dPct": 15.716,
              "avgDollarVolume10d": 2630666993,
              "maxSelectedCorrelation": 0.305
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -1.191
            },
            "selectionPrice": 1112.9200439453125,
            "triggeredAt": "2026-11-17T14:30:00.000Z",
            "invalidatedAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.638,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1447.55,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1416.95,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.438,
              "momentum20d": 13.939,
              "realizedVol10dAnnualized": 30.83,
              "volumeRatio": 0.804,
              "atrPct": 3.671,
              "gapPct": 0.71,
              "relativeStrength5dPct": 3.176,
              "relativeStrength20dPct": 17.037,
              "avgDollarVolume10d": 4400535848,
              "maxSelectedCorrelation": 0.704
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -2.281
            },
            "selectionPrice": 1430.1199951171875,
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          },
          {
            "symbol": "COP",
            "quantScore": 0.573,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 142.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 138.95,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.499,
              "momentum20d": -4.088,
              "realizedVol10dAnnualized": 32.17,
              "volumeRatio": 0.993,
              "atrPct": 3.022,
              "gapPct": -1.525,
              "relativeStrength5dPct": 6.238,
              "relativeStrength20dPct": -0.991,
              "avgDollarVolume10d": 1121224220,
              "maxSelectedCorrelation": 0.234
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -3.437
            },
            "selectionPrice": 140.34500122070312,
            "triggeredAt": "2026-11-17T14:30:00.000Z",
            "invalidatedAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "ADBE",
            "quantScore": 0.564,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 247.97,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 244.03,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.658,
              "momentum20d": 0.326,
              "realizedVol10dAnnualized": 22.53,
              "volumeRatio": 0.884,
              "atrPct": 3.118,
              "gapPct": 1.613,
              "relativeStrength5dPct": 5.396,
              "relativeStrength20dPct": 3.424,
              "avgDollarVolume10d": 891605573,
              "maxSelectedCorrelation": 0.682
            },
            "outcomes": {
              "h1": 0,
              "h4": 0,
              "d1": -2.834
            },
            "selectionPrice": 245.72999572753906,
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-17T12:27:46.232Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "AVGO",
            "quantScore": 1.024,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 343.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 323.4,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.357,
              "momentum20d": 1.414,
              "realizedVol10dAnnualized": 86.58,
              "volumeRatio": 0.748,
              "atrPct": 6.131,
              "gapPct": -4.184,
              "relativeStrength5dPct": 6.05,
              "relativeStrength20dPct": 4.467,
              "avgDollarVolume10d": 10924951020,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.423,
              "d1": 4.597
            },
            "selectionPrice": 333.3999938964844,
            "triggeredAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "COST",
            "quantScore": 0.842,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1122.65,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1104.83,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.461,
              "momentum20d": 12.6,
              "realizedVol10dAnnualized": 21.84,
              "volumeRatio": 1.509,
              "atrPct": 1.911,
              "gapPct": 0.449,
              "relativeStrength5dPct": 6.153,
              "relativeStrength20dPct": 15.653,
              "avgDollarVolume10d": 2770740073,
              "maxSelectedCorrelation": 0.304
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.323,
              "d1": -1.191
            },
            "selectionPrice": 1113.739990234375,
            "triggeredAt": "2026-11-17T14:30:00.000Z",
            "invalidatedAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "LLY",
            "quantScore": 0.683,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 1446.98,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 1416.36,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.397,
              "momentum20d": 13.893,
              "realizedVol10dAnnualized": 30.87,
              "volumeRatio": 1.196,
              "atrPct": 3.673,
              "gapPct": 0.71,
              "relativeStrength5dPct": 3.089,
              "relativeStrength20dPct": 16.946,
              "avgDollarVolume10d": 4549417899,
              "maxSelectedCorrelation": 0.705
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.929,
              "d1": -2.281
            },
            "selectionPrice": 1431.6700439453125,
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          },
          {
            "symbol": "COP",
            "quantScore": 0.594,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 142.09,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 138.95,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.499,
              "momentum20d": -4.088,
              "realizedVol10dAnnualized": 32.17,
              "volumeRatio": 1.331,
              "atrPct": 3.022,
              "gapPct": -1.525,
              "relativeStrength5dPct": 6.192,
              "relativeStrength20dPct": -1.036,
              "avgDollarVolume10d": 1154702057,
              "maxSelectedCorrelation": 0.233
            },
            "outcomes": {
              "h1": 0,
              "h4": -0.633,
              "d1": -3.437
            },
            "selectionPrice": 140.52000427246094,
            "triggeredAt": "2026-11-17T14:30:00.000Z",
            "invalidatedAt": "2026-11-18T14:30:00.000Z"
          },
          {
            "symbol": "ADBE",
            "quantScore": 0.566,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 247.97,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 244.03,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.658,
              "momentum20d": 0.326,
              "realizedVol10dAnnualized": 22.53,
              "volumeRatio": 1.157,
              "atrPct": 3.118,
              "gapPct": 1.242,
              "relativeStrength5dPct": 5.35,
              "relativeStrength20dPct": 3.379,
              "avgDollarVolume10d": 913752240,
              "maxSelectedCorrelation": 0.681
            },
            "outcomes": {
              "h1": 0,
              "h4": 0.099,
              "d1": -2.834
            },
            "selectionPrice": 246,
            "invalidatedAt": "2026-11-17T14:30:00.000Z"
          }
        ]
      },
      {
        "selectedAt": "2026-11-18T19:15:26.272Z",
        "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
        "setups": [
          {
            "symbol": "TGT",
            "quantScore": 1.433,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 172.34,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 167.06,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 4.302,
              "momentum20d": 10.195,
              "realizedVol10dAnnualized": 44.82,
              "volumeRatio": 2.051,
              "atrPct": 3.662,
              "gapPct": 0.915,
              "relativeStrength5dPct": 8.092,
              "relativeStrength20dPct": 15.14,
              "avgDollarVolume10d": 734382948,
              "maxSelectedCorrelation": 0
            },
            "outcomes": {
              "h1": -0.783
            },
            "selectionPrice": 169.6649932861328,
            "invalidatedAt": "2026-11-18T20:30:00.000Z"
          },
          {
            "symbol": "AVGO",
            "quantScore": 1.099,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 365.24,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 343.98,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 2.72,
              "momentum20d": 6.053,
              "realizedVol10dAnnualized": 86.48,
              "volumeRatio": 0.458,
              "atrPct": 5.904,
              "gapPct": 2.08,
              "relativeStrength5dPct": 6.509,
              "relativeStrength20dPct": 10.999,
              "avgDollarVolume10d": 11645487025,
              "maxSelectedCorrelation": 0.526
            },
            "outcomes": {
              "h1": -0.116
            },
            "selectionPrice": 354.5299987792969
          },
          {
            "symbol": "UNG",
            "quantScore": 0.873,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 10.76,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 10.36,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 3.327,
              "momentum20d": 0.571,
              "realizedVol10dAnnualized": 53.78,
              "volumeRatio": 0.791,
              "atrPct": 3.869,
              "gapPct": 1.892,
              "relativeStrength5dPct": 7.116,
              "relativeStrength20dPct": 5.517,
              "avgDollarVolume10d": 212936540,
              "maxSelectedCorrelation": 0.683
            },
            "outcomes": {
              "h1": 0.047
            },
            "selectionPrice": 10.548700332641602
          },
          {
            "symbol": "ABNB",
            "quantScore": 0.608,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 186.66,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 178.18,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 0.712,
              "momentum20d": 3.097,
              "realizedVol10dAnnualized": 67.01,
              "volumeRatio": 0.258,
              "atrPct": 4.485,
              "gapPct": -0.956,
              "relativeStrength5dPct": 4.502,
              "relativeStrength20dPct": 8.042,
              "avgDollarVolume10d": 1098202118,
              "maxSelectedCorrelation": 0.202
            },
            "outcomes": {
              "h1": -0.804
            },
            "selectionPrice": 182.4199981689453
          },
          {
            "symbol": "WMT",
            "quantScore": 0.572,
            "entryPrice": null,
            "entryRule": {
              "operator": "ABOVE",
              "level": 128.29,
              "timeframeMinutes": 5,
              "requiredCloses": 1,
              "requireParticipation": true
            },
            "invalidationRule": {
              "operator": "BELOW",
              "level": 126.25,
              "timeframeMinutes": 5,
              "requiredCloses": 1
            },
            "metrics": {
              "momentum5d": 1.273,
              "momentum20d": 7.993,
              "realizedVol10dAnnualized": 13.34,
              "volumeRatio": 0.866,
              "atrPct": 2.418,
              "gapPct": -0.851,
              "relativeStrength5dPct": 5.063,
              "relativeStrength20dPct": 12.939,
              "avgDollarVolume10d": 2757316695,
              "maxSelectedCorrelation": 0.26
            },
            "outcomes": {
              "h1": 0.284
            },
            "selectionPrice": 127.29000091552734
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-11-19T09:01:52.776Z"
  },
  "automationHealth": {
    "openai": {
      "status": "BLOCKED_QUOTA",
      "code": "credit_balance_exhausted",
      "role": "QUANT_MACRO",
      "firstBlockedAt": "2026-10-06T18:09:06Z",
      "lastFailedAt": "2026-11-18T19:15:39.455Z",
      "nextProbeAt": "2026-11-19T01:15:39.455Z",
      "failedProbes": 12,
      "observedFailedRuns": 33,
      "initializedFromObservedError": true,
      "sourceRun": "https://github.com/mveskimagi-cpu/ChatGPT_public/actions/runs/37565300085",
      "actionRequired": "Add API credits to the OpenAI project/organization used by OPENAI_API_KEY. No trading decision was made."
    },
    "apiBudget": {
      "schemaVersion": 1,
      "currency": "USD",
      "monthlyLimitUsd": 5,
      "dailyLimitUsd": 0.16,
      "pricingVerifiedAt": "2026-10-07",
      "months": {
        "2026-10": {
          "openingMicroUsd": 5040000,
          "openingSource": "User OpenAI October-to-date screenshot, 2026-10-07. Conservative account-level opening balance; not exact Quant-only attribution.",
          "spentMicroUsd": 0,
          "uncertainMicroUsd": 0,
          "requestCount": 0,
          "inputTokens": 0,
          "outputTokens": 0,
          "cachedTokens": 0,
          "cacheWriteTokens": 0,
          "days": {
            "2026-10-07": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-08": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-09": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-10": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-11": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-12": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-13": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-14": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-15": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-16": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-17": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-18": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-19": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-20": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-21": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-22": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-23": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-24": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-25": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-26": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-27": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-28": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-29": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-30": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-10-31": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            }
          },
          "pending": {},
          "recent": []
        },
        "2026-11": {
          "openingMicroUsd": 0,
          "spentMicroUsd": 0,
          "uncertainMicroUsd": 0,
          "requestCount": 12,
          "inputTokens": 0,
          "outputTokens": 0,
          "cachedTokens": 0,
          "cacheWriteTokens": 0,
          "days": {
            "2026-11-01": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-02": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-03": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-04": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-05": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-06": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-07": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-08": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-09": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-10": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-11": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-12": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-13": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-14": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-15": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            },
            "2026-11-16": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-17": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-18": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 1
            },
            "2026-11-19": {
              "spentMicroUsd": 0,
              "uncertainMicroUsd": 0,
              "requestCount": 0
            }
          },
          "pending": {},
          "recent": [
            {
              "id": "699dbe3a-5c05-45c2-ae76-c1ad89825d37",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2631,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1242,
              "day": "2026-11-03",
              "month": "2026-11",
              "at": "2026-11-03T18:02:49.916Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "2a8b59e2-c891-403e-ae6d-9c1a7c995e77",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2309,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1198,
              "day": "2026-11-04",
              "month": "2026-11",
              "at": "2026-11-04T18:23:10.363Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "3851f677-6c53-4bde-9930-3d1ad3ba79e5",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2316,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1199,
              "day": "2026-11-05",
              "month": "2026-11",
              "at": "2026-11-05T20:17:22.692Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "b540d597-1f07-450e-b7f9-98a367892947",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2246,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1189,
              "day": "2026-11-06",
              "month": "2026-11",
              "at": "2026-11-06T15:33:07.303Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "0717db75-1523-47ea-b01c-2cc6b71a2367",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2268,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1192,
              "day": "2026-11-09",
              "month": "2026-11",
              "at": "2026-11-09T20:42:21.170Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "93eb721d-9891-4c17-9c66-43911c60fe4b",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2269,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1192,
              "day": "2026-11-10",
              "month": "2026-11",
              "at": "2026-11-10T18:17:11.134Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "67d6866e-6066-490f-a748-6f7c36adab5a",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2264,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1192,
              "day": "2026-11-11",
              "month": "2026-11",
              "at": "2026-11-11T18:17:07.961Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "aaa05c12-037a-4457-bf22-6dddf566b4d6",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2239,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1188,
              "day": "2026-11-12",
              "month": "2026-11",
              "at": "2026-11-12T16:29:54.814Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "10e43557-691d-4d1b-a295-847cb48a6f21",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2278,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1194,
              "day": "2026-11-13",
              "month": "2026-11",
              "at": "2026-11-13T17:43:01.404Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "fb973bf3-7a2c-4512-be08-4874c959ea7e",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2294,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1196,
              "day": "2026-11-16",
              "month": "2026-11",
              "at": "2026-11-16T21:00:15.053Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "e60e8cca-0714-4d8a-8840-31c02e9b0c35",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2262,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1192,
              "day": "2026-11-17",
              "month": "2026-11",
              "at": "2026-11-17T21:13:43.881Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            },
            {
              "id": "b10238de-64cb-4174-86f6-afe7ea9f4795",
              "role": "QUANT_MACRO",
              "model": "gpt-6-luna",
              "inputTokens": 2245,
              "maxOutputTokens": 1600,
              "maxMicroUsd": 1189,
              "day": "2026-11-18",
              "month": "2026-11",
              "at": "2026-11-18T19:15:36.280Z",
              "chargeMicroUsd": 0,
              "status": "METERED",
              "responseId": null,
              "usage": null
            }
          ]
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-11-19T09:01:55.832Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-11-18T21:00:00.000Z",
        "MSTR": "2026-11-18T21:00:00.000Z",
        "HPE": "2026-11-18T21:00:00.000Z",
        "SHOP": "2026-11-18T21:00:00.000Z"
      },
      "fxUsdPerEur": 1.0992635488510132,
      "fxAt": "2026-11-19T09:01:47.000Z",
      "decisionStatus": "IDLE",
      "reason": "NO_FRESH_TRIGGER_QUOTES"
    }
  }
};
