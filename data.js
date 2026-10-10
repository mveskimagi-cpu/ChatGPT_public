window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-10 04:46 UTC",
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
    "value": 981.23,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -17.34,
    "total": -18.77,
    "totalPct": -1.88
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 77.52999877929688,
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
      "value": 182.48,
      "pnl": -17.52,
      "pnlPct": -8.76,
      "fxUsdPerEur": 1.1205737590789795,
      "lastPriceAt": "2026-10-09T20:00:00.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 154.33999633789062,
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
      "value": 141.55,
      "pnl": -8.45,
      "pnlPct": -5.63,
      "fxUsdPerEur": 1.1205737590789795,
      "lastPriceAt": "2026-10-09T20:00:00.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 73.45999908447266,
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
      "value": 104.76,
      "pnl": 4.76,
      "pnlPct": 4.76,
      "fxUsdPerEur": 1.1205737590789795,
      "lastPriceAt": "2026-10-09T20:00:00.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 170.85000610351562,
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
      "value": 103.86,
      "pnl": 3.86,
      "pnlPct": 3.86,
      "fxUsdPerEur": 1.1205737590789795,
      "lastPriceAt": "2026-10-09T20:00:00.000Z"
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
      "date": "2026-10-10 04:46",
      "value": 981.23
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 116 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: SHOP, HPE, MRVL, PLTR, DELL.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is SHOP, HPE, MRVL, PLTR, DELL. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "symbol": "SHOP",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $166.43 with sustained participation.",
        "invalidation": "Loss of $162.69 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.06: 5d momentum 10.4%, 20d 29.8%, annualized 10d realized vol 33%, volume 1.01x, max selected correlation 0.00.",
        "quantScore": 2.06,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "WATCH_ONLY",
        "setupId": "SHOP-20261009-daily-quant"
      },
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $72.11 with sustained participation.",
        "invalidation": "Loss of $69.89 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.99: 5d momentum 9.9%, 20d 20.5%, annualized 10d realized vol 45%, volume 0.78x, max selected correlation 0.05.",
        "quantScore": 1.987,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "WATCH_ONLY",
        "setupId": "HPE-20261009-daily-quant"
      },
      {
        "symbol": "MRVL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $279.04 with sustained participation.",
        "invalidation": "Loss of $270.28 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.26: 5d momentum 2.5%, 20d 16.9%, annualized 10d realized vol 46%, volume 1.18x, max selected correlation 0.29.",
        "quantScore": 1.261,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "WATCH_ONLY",
        "setupId": "MRVL-20261009-daily-quant"
      },
      {
        "symbol": "PLTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $200.37 with sustained participation.",
        "invalidation": "Loss of $197.19 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.23: 5d momentum 4.6%, 20d 17.3%, annualized 10d realized vol 19%, volume 2.40x, max selected correlation 0.05.",
        "quantScore": 1.235,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "WATCH_ONLY",
        "setupId": "PLTR-20261009-daily-quant"
      },
      {
        "symbol": "DELL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $582.77 with sustained participation.",
        "invalidation": "Loss of $566.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.17: 5d momentum 6.1%, 20d 7.3%, annualized 10d realized vol 41%, volume 1.00x, max selected correlation 0.58.",
        "quantScore": 1.173,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "WATCH_ONLY",
        "setupId": "DELL-20261009-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "SHOP",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $166.43 with sustained participation.",
        "invalidation": "Loss of $162.69 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.06: 5d momentum 10.4%, 20d 29.8%, annualized 10d realized vol 33%, volume 1.01x, max selected correlation 0.00.",
        "quantScore": 2.06,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "UNTRIGGERED",
        "setupId": "SHOP-20261009-daily-quant"
      },
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $72.11 with sustained participation.",
        "invalidation": "Loss of $69.89 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.99: 5d momentum 9.9%, 20d 20.5%, annualized 10d realized vol 45%, volume 0.78x, max selected correlation 0.05.",
        "quantScore": 1.987,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "UNTRIGGERED",
        "setupId": "HPE-20261009-daily-quant"
      },
      {
        "symbol": "MRVL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $279.04 with sustained participation.",
        "invalidation": "Loss of $270.28 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.26: 5d momentum 2.5%, 20d 16.9%, annualized 10d realized vol 46%, volume 1.18x, max selected correlation 0.29.",
        "quantScore": 1.261,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "UNTRIGGERED",
        "setupId": "MRVL-20261009-daily-quant"
      },
      {
        "symbol": "PLTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $200.37 with sustained participation.",
        "invalidation": "Loss of $197.19 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.23: 5d momentum 4.6%, 20d 17.3%, annualized 10d realized vol 19%, volume 2.40x, max selected correlation 0.05.",
        "quantScore": 1.235,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "UNTRIGGERED",
        "setupId": "PLTR-20261009-daily-quant"
      },
      {
        "symbol": "DELL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-12T12:17:00.858Z",
        "trigger": "Break above $582.77 with sustained participation.",
        "invalidation": "Loss of $566.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.17: 5d momentum 6.1%, 20d 7.3%, annualized 10d realized vol 41%, volume 1.00x, max selected correlation 0.58.",
        "quantScore": 1.173,
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
        "createdAt": "2026-10-09T12:17:00.858Z",
        "lastReviewedAt": "2026-10-09T12:17:00.858Z",
        "status": "UNTRIGGERED",
        "setupId": "DELL-20261009-daily-quant"
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
    "lastReviewedAt": "2026-10-09T12:17:00.858Z",
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
      "selectedAt": "2026-10-09T12:17:00.858Z",
      "version": 2,
      "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
      "universeSize": 116,
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
      "previousSelectedAt": "2026-10-08T12:10:27.632Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "SHOP",
          "quantScore": 2.06,
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
          }
        },
        {
          "symbol": "HPE",
          "quantScore": 1.987,
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
          }
        },
        {
          "symbol": "MRVL",
          "quantScore": 1.261,
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
          }
        },
        {
          "symbol": "PLTR",
          "quantScore": 1.235,
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
          }
        },
        {
          "symbol": "DELL",
          "quantScore": 1.173,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "SHOP",
          "rank": 1,
          "previousRank": 2,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 2.06,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 3.129,
            "participation": -0.457,
            "volatility": 1.275,
            "gap": 0.038,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-12T12:17:00.858Z",
          "trigger": "Break above $166.43 with sustained participation.",
          "invalidation": "Loss of $162.69 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.06: 5d momentum 10.4%, 20d 29.8%, annualized 10d realized vol 33%, volume 1.01x, max selected correlation 0.00.",
          "createdAt": "2026-10-09T12:17:00.858Z",
          "lastReviewedAt": "2026-10-09T12:17:00.858Z",
          "setupId": "SHOP-20261009-daily-quant"
        },
        {
          "symbol": "HPE",
          "rank": 2,
          "previousRank": 1,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "SELECTED",
          "quantScore": 1.987,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.636,
            "participation": -0.976,
            "volatility": 1.822,
            "gap": 1.759,
            "correlation": 0.053,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-12T12:17:00.858Z",
          "trigger": "Break above $72.11 with sustained participation.",
          "invalidation": "Loss of $69.89 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.99: 5d momentum 9.9%, 20d 20.5%, annualized 10d realized vol 45%, volume 0.78x, max selected correlation 0.05.",
          "createdAt": "2026-10-09T12:17:00.858Z",
          "lastReviewedAt": "2026-10-09T12:17:00.858Z",
          "setupId": "HPE-20261009-daily-quant"
        },
        {
          "symbol": "MRVL",
          "rank": 3,
          "previousRank": 3,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.261,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.081,
            "participation": -0.058,
            "volatility": 1.915,
            "gap": 1.959,
            "correlation": 0.287,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-12T12:17:00.858Z",
          "trigger": "Break above $279.04 with sustained participation.",
          "invalidation": "Loss of $270.28 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.26: 5d momentum 2.5%, 20d 16.9%, annualized 10d realized vol 46%, volume 1.18x, max selected correlation 0.29.",
          "createdAt": "2026-10-09T12:17:00.858Z",
          "lastReviewedAt": "2026-10-09T12:17:00.858Z",
          "setupId": "MRVL-20261009-daily-quant"
        },
        {
          "symbol": "PLTR",
          "rank": 4,
          "previousRank": 21,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "SELECTED",
          "quantScore": 1.235,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.497,
            "participation": 2.682,
            "volatility": 0.018,
            "gap": 2.761,
            "correlation": 0.05,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-12T12:17:00.858Z",
          "trigger": "Break above $200.37 with sustained participation.",
          "invalidation": "Loss of $197.19 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.23: 5d momentum 4.6%, 20d 17.3%, annualized 10d realized vol 19%, volume 2.40x, max selected correlation 0.05.",
          "createdAt": "2026-10-09T12:17:00.858Z",
          "lastReviewedAt": "2026-10-09T12:17:00.858Z",
          "setupId": "PLTR-20261009-daily-quant"
        },
        {
          "symbol": "DELL",
          "rank": 5,
          "previousRank": 9,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "SELECTED",
          "quantScore": 1.173,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.325,
            "participation": -0.467,
            "volatility": 1.426,
            "gap": 1.268,
            "correlation": 0.579,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-12T12:17:00.858Z",
          "trigger": "Break above $582.77 with sustained participation.",
          "invalidation": "Loss of $566.33 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.17: 5d momentum 6.1%, 20d 7.3%, annualized 10d realized vol 41%, volume 1.00x, max selected correlation 0.58.",
          "createdAt": "2026-10-09T12:17:00.858Z",
          "lastReviewedAt": "2026-10-09T12:17:00.858Z",
          "setupId": "DELL-20261009-daily-quant"
        },
        {
          "symbol": "UNG",
          "rank": 6,
          "previousRank": 8,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 1.146,
          "metrics": {
            "momentum5d": 6.398,
            "momentum20d": 7.136,
            "realizedVol10dAnnualized": 40.09,
            "volumeRatio": 0.963,
            "atrPct": 3.912,
            "gapPct": 1.632,
            "relativeStrength5dPct": 5.097,
            "relativeStrength20dPct": 5.623,
            "avgDollarVolume10d": 324735223,
            "maxSelectedCorrelation": 0.757
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.379,
            "participation": -0.556,
            "volatility": 1.155,
            "gap": 1.929,
            "correlation": 0.757,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 7,
          "previousRank": 4,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 1.064,
          "metrics": {
            "momentum5d": 2.028,
            "momentum20d": 9.864,
            "realizedVol10dAnnualized": 47.71,
            "volumeRatio": 1.199,
            "atrPct": 5.137,
            "gapPct": -2.025,
            "relativeStrength5dPct": 0.727,
            "relativeStrength20dPct": 8.352,
            "avgDollarVolume10d": 1438062996,
            "maxSelectedCorrelation": 0.774
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.689,
            "participation": -0.025,
            "volatility": 2.037,
            "gap": 1.523,
            "correlation": 0.774,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 8,
          "previousRank": 16,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.845,
          "metrics": {
            "momentum5d": 3.532,
            "momentum20d": 17.6,
            "realizedVol10dAnnualized": 29.73,
            "volumeRatio": 1.481,
            "atrPct": 2.623,
            "gapPct": -0.704,
            "relativeStrength5dPct": 2.23,
            "relativeStrength20dPct": 16.088,
            "avgDollarVolume10d": 818174927,
            "maxSelectedCorrelation": 0.585
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.314,
            "participation": 0.607,
            "volatility": 0.159,
            "gap": 0.277,
            "correlation": 0.585,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRWD",
          "rank": 9,
          "previousRank": 12,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.841,
          "metrics": {
            "momentum5d": -1.157,
            "momentum20d": 26.569,
            "realizedVol10dAnnualized": 35.89,
            "volumeRatio": 1.366,
            "atrPct": 4.081,
            "gapPct": -0.307,
            "relativeStrength5dPct": -2.459,
            "relativeStrength20dPct": 25.056,
            "avgDollarVolume10d": 2005272478,
            "maxSelectedCorrelation": 0.467
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.843,
            "participation": 0.349,
            "volatility": 1.124,
            "gap": 0.098,
            "correlation": 0.467,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 10,
          "previousRank": 7,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "REJECT",
          "quantScore": 0.823,
          "metrics": {
            "momentum5d": 0.804,
            "momentum20d": 19.11,
            "realizedVol10dAnnualized": 34.05,
            "volumeRatio": 1.252,
            "atrPct": 3.982,
            "gapPct": -1.006,
            "relativeStrength5dPct": -0.497,
            "relativeStrength20dPct": 17.597,
            "avgDollarVolume10d": 11790896444,
            "maxSelectedCorrelation": 0.819
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.875,
            "participation": 0.094,
            "volatility": 1.016,
            "gap": 0.562,
            "correlation": 0.819,
            "regimeFit": null
          }
        },
        {
          "symbol": "PANW",
          "rank": 11,
          "previousRank": 13,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.78,
          "metrics": {
            "momentum5d": 0.568,
            "momentum20d": 18.92,
            "realizedVol10dAnnualized": 42.35,
            "volumeRatio": 0.921,
            "atrPct": 4.007,
            "gapPct": -0.639,
            "relativeStrength5dPct": -0.733,
            "relativeStrength20dPct": 17.407,
            "avgDollarVolume10d": 2012640190,
            "maxSelectedCorrelation": 0.402
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.822,
            "participation": -0.65,
            "volatility": 1.272,
            "gap": 0.215,
            "correlation": 0.402,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 12,
          "previousRank": 6,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.717,
          "metrics": {
            "momentum5d": -5.832,
            "momentum20d": 4.186,
            "realizedVol10dAnnualized": 63.93,
            "volumeRatio": 1.629,
            "atrPct": 7.18,
            "gapPct": -2.595,
            "relativeStrength5dPct": -7.133,
            "relativeStrength20dPct": 2.673,
            "avgDollarVolume10d": 1413630711,
            "maxSelectedCorrelation": 0.783
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.024,
            "participation": 0.941,
            "volatility": 3.611,
            "gap": 2.062,
            "correlation": 0.783,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 13,
          "previousRank": 5,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.665,
          "metrics": {
            "momentum5d": -0.837,
            "momentum20d": 11.877,
            "realizedVol10dAnnualized": 54.35,
            "volumeRatio": 0.87,
            "atrPct": 4.137,
            "gapPct": -2.472,
            "relativeStrength5dPct": -2.138,
            "relativeStrength20dPct": 10.364,
            "avgDollarVolume10d": 924448381,
            "maxSelectedCorrelation": 0.586
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.247,
            "participation": -0.764,
            "volatility": 1.693,
            "gap": 1.946,
            "correlation": 0.586,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 14,
          "previousRank": 17,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.654,
          "metrics": {
            "momentum5d": 5.899,
            "momentum20d": 1.955,
            "realizedVol10dAnnualized": 34.69,
            "volumeRatio": 0.778,
            "atrPct": 2.951,
            "gapPct": -0.977,
            "relativeStrength5dPct": 4.598,
            "relativeStrength20dPct": 0.442,
            "avgDollarVolume10d": 13780038750,
            "maxSelectedCorrelation": 0.652
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.056,
            "participation": -0.971,
            "volatility": 0.48,
            "gap": 0.534,
            "correlation": 0.652,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 15,
          "previousRank": 61,
          "rankChange": 46,
          "rankChangeLabel": "+46",
          "status": "WATCH",
          "quantScore": 0.613,
          "metrics": {
            "momentum5d": 5.615,
            "momentum20d": 2.726,
            "realizedVol10dAnnualized": 22.57,
            "volumeRatio": 1.892,
            "atrPct": 1.895,
            "gapPct": 0.057,
            "relativeStrength5dPct": 4.314,
            "relativeStrength20dPct": 1.214,
            "avgDollarVolume10d": 965789117,
            "maxSelectedCorrelation": 0.224
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.037,
            "participation": 1.532,
            "volatility": -0.443,
            "gap": 0.442,
            "correlation": 0.224,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 16,
          "previousRank": 18,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.605,
          "metrics": {
            "momentum5d": 3.694,
            "momentum20d": 5.463,
            "realizedVol10dAnnualized": 31.43,
            "volumeRatio": 1.5,
            "atrPct": 2.717,
            "gapPct": -0.855,
            "relativeStrength5dPct": 2.393,
            "relativeStrength20dPct": 3.951,
            "avgDollarVolume10d": 593150268,
            "maxSelectedCorrelation": 0.409
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.803,
            "participation": 0.65,
            "volatility": 0.259,
            "gap": 0.419,
            "correlation": 0.409,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 17,
          "previousRank": 20,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.605,
          "metrics": {
            "momentum5d": 1.445,
            "momentum20d": 6.59,
            "realizedVol10dAnnualized": 32.54,
            "volumeRatio": 1.33,
            "atrPct": 3.859,
            "gapPct": 1.001,
            "relativeStrength5dPct": 0.143,
            "relativeStrength20dPct": 5.078,
            "avgDollarVolume10d": 1335009390,
            "maxSelectedCorrelation": 0.708
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.435,
            "participation": 0.27,
            "volatility": 0.906,
            "gap": 1.333,
            "correlation": 0.708,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 18,
          "previousRank": 15,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.598,
          "metrics": {
            "momentum5d": 4.802,
            "momentum20d": -1.164,
            "realizedVol10dAnnualized": 37.78,
            "volumeRatio": 1.131,
            "atrPct": 2.941,
            "gapPct": -1.564,
            "relativeStrength5dPct": 3.5,
            "relativeStrength20dPct": -2.676,
            "avgDollarVolume10d": 8043705619,
            "maxSelectedCorrelation": 0.68
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.713,
            "participation": -0.179,
            "volatility": 0.565,
            "gap": 1.088,
            "correlation": 0.68,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 19,
          "previousRank": 35,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.582,
          "metrics": {
            "momentum5d": 6.043,
            "momentum20d": 4.469,
            "realizedVol10dAnnualized": 22.88,
            "volumeRatio": 1.145,
            "atrPct": 2.089,
            "gapPct": 0.407,
            "relativeStrength5dPct": 4.742,
            "relativeStrength20dPct": 2.957,
            "avgDollarVolume10d": 2429304975,
            "maxSelectedCorrelation": 0.46
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.194,
            "participation": -0.146,
            "volatility": -0.329,
            "gap": 0.772,
            "correlation": 0.46,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 20,
          "previousRank": 30,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": 0.565,
          "metrics": {
            "momentum5d": 4.219,
            "momentum20d": -1.664,
            "realizedVol10dAnnualized": 32.89,
            "volumeRatio": 1.36,
            "atrPct": 2.633,
            "gapPct": 2.439,
            "relativeStrength5dPct": 2.917,
            "relativeStrength20dPct": -3.176,
            "avgDollarVolume10d": 566085852,
            "maxSelectedCorrelation": 0.775
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.582,
            "participation": 0.337,
            "volatility": 0.256,
            "gap": 2.691,
            "correlation": 0.775,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 21,
          "previousRank": 11,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.515,
          "metrics": {
            "momentum5d": 5.636,
            "momentum20d": 4.989,
            "realizedVol10dAnnualized": 28.36,
            "volumeRatio": 0.744,
            "atrPct": 2.29,
            "gapPct": -0.622,
            "relativeStrength5dPct": 4.335,
            "relativeStrength20dPct": 3.477,
            "avgDollarVolume10d": 1931405440,
            "maxSelectedCorrelation": 0.705
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.142,
            "participation": -1.046,
            "volatility": -0.06,
            "gap": 0.199,
            "correlation": 0.705,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 22,
          "previousRank": 40,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "REJECT",
          "quantScore": 0.5,
          "metrics": {
            "momentum5d": 5.612,
            "momentum20d": -1.714,
            "realizedVol10dAnnualized": 21.49,
            "volumeRatio": 1.098,
            "atrPct": 2.392,
            "gapPct": 2.249,
            "relativeStrength5dPct": 4.31,
            "relativeStrength20dPct": -3.226,
            "avgDollarVolume10d": 791782742,
            "maxSelectedCorrelation": 0.913
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.839,
            "participation": -0.252,
            "volatility": -0.207,
            "gap": 2.511,
            "correlation": 0.913,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 23,
          "previousRank": 19,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.446,
          "metrics": {
            "momentum5d": -0.694,
            "momentum20d": 10.28,
            "realizedVol10dAnnualized": 36.27,
            "volumeRatio": 1.206,
            "atrPct": 3.8,
            "gapPct": 0.448,
            "relativeStrength5dPct": -1.995,
            "relativeStrength20dPct": 8.768,
            "avgDollarVolume10d": 12907132014,
            "maxSelectedCorrelation": 0.587
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.203,
            "participation": -0.01,
            "volatility": 0.983,
            "gap": 0.811,
            "correlation": 0.587,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSTR",
          "rank": 24,
          "previousRank": 10,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": 0.444,
          "metrics": {
            "momentum5d": -5.626,
            "momentum20d": 14.145,
            "realizedVol10dAnnualized": 45.74,
            "volumeRatio": 1.134,
            "atrPct": 5.698,
            "gapPct": -1.976,
            "relativeStrength5dPct": -6.927,
            "relativeStrength20dPct": 12.632,
            "avgDollarVolume10d": 2978590927,
            "maxSelectedCorrelation": 0.309
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.541,
            "participation": -0.172,
            "volatility": 2.282,
            "gap": 1.477,
            "correlation": 0.309,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 25,
          "previousRank": 26,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.414,
          "metrics": {
            "momentum5d": 4.805,
            "momentum20d": 8.573,
            "realizedVol10dAnnualized": 14,
            "volumeRatio": 0.985,
            "atrPct": 2.071,
            "gapPct": -0.14,
            "relativeStrength5dPct": 3.504,
            "relativeStrength20dPct": 7.06,
            "avgDollarVolume10d": 1327115889,
            "maxSelectedCorrelation": 0.413
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.148,
            "participation": -0.505,
            "volatility": -0.598,
            "gap": 0.256,
            "correlation": 0.413,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 26,
          "previousRank": 49,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": 0.399,
          "metrics": {
            "momentum5d": 4.051,
            "momentum20d": -0.107,
            "realizedVol10dAnnualized": 18.85,
            "volumeRatio": 1.651,
            "atrPct": 2.011,
            "gapPct": 1.815,
            "relativeStrength5dPct": 2.75,
            "relativeStrength20dPct": -1.62,
            "avgDollarVolume10d": 2186454593,
            "maxSelectedCorrelation": 0.736
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.62,
            "participation": 0.99,
            "volatility": -0.488,
            "gap": 2.102,
            "correlation": 0.736,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 27,
          "previousRank": 69,
          "rankChange": 42,
          "rankChangeLabel": "+42",
          "status": "WATCH",
          "quantScore": 0.364,
          "metrics": {
            "momentum5d": 5.483,
            "momentum20d": -5.866,
            "realizedVol10dAnnualized": 28.3,
            "volumeRatio": 1.262,
            "atrPct": 2.163,
            "gapPct": 0.56,
            "relativeStrength5dPct": 4.182,
            "relativeStrength20dPct": -7.378,
            "avgDollarVolume10d": 2620342300,
            "maxSelectedCorrelation": 0.528
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.629,
            "participation": 0.116,
            "volatility": -0.131,
            "gap": 0.916,
            "correlation": 0.528,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 28,
          "previousRank": 22,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.345,
          "metrics": {
            "momentum5d": 3.707,
            "momentum20d": -1.803,
            "realizedVol10dAnnualized": 37.67,
            "volumeRatio": 0.701,
            "atrPct": 2.974,
            "gapPct": -0.852,
            "relativeStrength5dPct": 2.406,
            "relativeStrength20dPct": -3.315,
            "avgDollarVolume10d": 594975115,
            "maxSelectedCorrelation": 0.424
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.481,
            "participation": -1.144,
            "volatility": 0.579,
            "gap": 0.416,
            "correlation": 0.424,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 29,
          "previousRank": 25,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.32,
          "metrics": {
            "momentum5d": 1.718,
            "momentum20d": 4.038,
            "realizedVol10dAnnualized": 21.03,
            "volumeRatio": 1.453,
            "atrPct": 3.172,
            "gapPct": -0.439,
            "relativeStrength5dPct": 0.417,
            "relativeStrength20dPct": 2.525,
            "avgDollarVolume10d": 2653424681,
            "maxSelectedCorrelation": 0.267
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.372,
            "participation": 0.545,
            "volatility": 0.2,
            "gap": 0.026,
            "correlation": 0.267,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 30,
          "previousRank": 27,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.313,
          "metrics": {
            "momentum5d": -1.802,
            "momentum20d": 7.55,
            "realizedVol10dAnnualized": 36.46,
            "volumeRatio": 1.243,
            "atrPct": 3.791,
            "gapPct": -2.088,
            "relativeStrength5dPct": -3.103,
            "relativeStrength20dPct": 6.038,
            "avgDollarVolume10d": 1601414908,
            "maxSelectedCorrelation": 0.32
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.125,
            "participation": 0.074,
            "volatility": 0.984,
            "gap": 1.583,
            "correlation": 0.32,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 31,
          "previousRank": 76,
          "rankChange": 45,
          "rankChangeLabel": "+45",
          "status": "WATCH",
          "quantScore": 0.308,
          "metrics": {
            "momentum5d": 4.606,
            "momentum20d": -4.825,
            "realizedVol10dAnnualized": 22.21,
            "volumeRatio": 1.663,
            "atrPct": 2.259,
            "gapPct": -0.434,
            "relativeStrength5dPct": 3.305,
            "relativeStrength20dPct": -6.338,
            "avgDollarVolume10d": 1738911870,
            "maxSelectedCorrelation": 0.569
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.513,
            "participation": 1.016,
            "volatility": -0.257,
            "gap": 0.021,
            "correlation": 0.569,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 32,
          "previousRank": 53,
          "rankChange": 21,
          "rankChangeLabel": "+21",
          "status": "WATCH",
          "quantScore": 0.268,
          "metrics": {
            "momentum5d": 4.502,
            "momentum20d": 1.279,
            "realizedVol10dAnnualized": 17.05,
            "volumeRatio": 1.425,
            "atrPct": 1.731,
            "gapPct": -0.275,
            "relativeStrength5dPct": 3.201,
            "relativeStrength20dPct": -0.233,
            "avgDollarVolume10d": 1656354891,
            "maxSelectedCorrelation": 0.416
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.766,
            "participation": 0.482,
            "volatility": -0.692,
            "gap": 0.128,
            "correlation": 0.416,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 33,
          "previousRank": 37,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.265,
          "metrics": {
            "momentum5d": 3.605,
            "momentum20d": 5.021,
            "realizedVol10dAnnualized": 16.76,
            "volumeRatio": 1.162,
            "atrPct": 1.682,
            "gapPct": 1.132,
            "relativeStrength5dPct": 2.304,
            "relativeStrength20dPct": 3.509,
            "avgDollarVolume10d": 2251234126,
            "maxSelectedCorrelation": 0.669
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.766,
            "participation": -0.108,
            "volatility": -0.727,
            "gap": 1.457,
            "correlation": 0.669,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 34,
          "previousRank": 46,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": 0.263,
          "metrics": {
            "momentum5d": 2.971,
            "momentum20d": 5.335,
            "realizedVol10dAnnualized": 14.53,
            "volumeRatio": 0.959,
            "atrPct": 2.531,
            "gapPct": 0.753,
            "relativeStrength5dPct": 1.67,
            "relativeStrength20dPct": 3.823,
            "avgDollarVolume10d": 8547054224,
            "maxSelectedCorrelation": 0.561
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.663,
            "participation": -0.564,
            "volatility": -0.335,
            "gap": 1.099,
            "correlation": 0.561,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 35,
          "previousRank": 41,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.261,
          "metrics": {
            "momentum5d": 4.238,
            "momentum20d": 2.099,
            "realizedVol10dAnnualized": 16.15,
            "volumeRatio": 1.47,
            "atrPct": 1.691,
            "gapPct": -0.188,
            "relativeStrength5dPct": 2.937,
            "relativeStrength20dPct": 0.586,
            "avgDollarVolume10d": 1951859139,
            "maxSelectedCorrelation": 0.552
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.754,
            "participation": 0.584,
            "volatility": -0.74,
            "gap": 0.211,
            "correlation": 0.552,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 36,
          "previousRank": 43,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.251,
          "metrics": {
            "momentum5d": 3.058,
            "momentum20d": 7.953,
            "realizedVol10dAnnualized": 19.39,
            "volumeRatio": 1.046,
            "atrPct": 1.832,
            "gapPct": 0.045,
            "relativeStrength5dPct": 1.757,
            "relativeStrength20dPct": 6.441,
            "avgDollarVolume10d": 12090101882,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.796,
            "participation": -0.368,
            "volatility": -0.569,
            "gap": 0.43,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 37,
          "previousRank": 71,
          "rankChange": 34,
          "rankChangeLabel": "+34",
          "status": "WATCH",
          "quantScore": 0.241,
          "metrics": {
            "momentum5d": 0.412,
            "momentum20d": 3.596,
            "realizedVol10dAnnualized": 25.52,
            "volumeRatio": 1.231,
            "atrPct": 3.591,
            "gapPct": -0.222,
            "relativeStrength5dPct": -0.889,
            "relativeStrength20dPct": 2.084,
            "avgDollarVolume10d": 1344579242,
            "maxSelectedCorrelation": 0.463
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.11,
            "participation": 0.047,
            "volatility": 0.557,
            "gap": 0.178,
            "correlation": 0.463,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 38,
          "previousRank": 58,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": 0.239,
          "metrics": {
            "momentum5d": 2.857,
            "momentum20d": 2.6,
            "realizedVol10dAnnualized": 15.92,
            "volumeRatio": 1.224,
            "atrPct": 2.105,
            "gapPct": 1.865,
            "relativeStrength5dPct": 1.556,
            "relativeStrength20dPct": 1.088,
            "avgDollarVolume10d": 1914529015,
            "maxSelectedCorrelation": 0.605
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.519,
            "participation": 0.031,
            "volatility": -0.524,
            "gap": 2.149,
            "correlation": 0.605,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 39,
          "previousRank": 47,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.226,
          "metrics": {
            "momentum5d": -1.626,
            "momentum20d": -1.594,
            "realizedVol10dAnnualized": 37.85,
            "volumeRatio": 1.26,
            "atrPct": 3.903,
            "gapPct": 3.071,
            "relativeStrength5dPct": -2.928,
            "relativeStrength20dPct": -3.106,
            "avgDollarVolume10d": 837773300,
            "maxSelectedCorrelation": 0.597
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.5,
            "participation": 0.112,
            "volatility": 1.085,
            "gap": 3.287,
            "correlation": 0.597,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 40,
          "previousRank": 48,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.219,
          "metrics": {
            "momentum5d": -0.081,
            "momentum20d": 7.643,
            "realizedVol10dAnnualized": 29.27,
            "volumeRatio": 1.204,
            "atrPct": 2.962,
            "gapPct": -0.684,
            "relativeStrength5dPct": -1.382,
            "relativeStrength20dPct": 6.13,
            "avgDollarVolume10d": 1401939512,
            "maxSelectedCorrelation": 0.502
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.199,
            "participation": -0.015,
            "volatility": 0.328,
            "gap": 0.258,
            "correlation": 0.502,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 41,
          "previousRank": 102,
          "rankChange": 61,
          "rankChangeLabel": "+61",
          "status": "WATCH",
          "quantScore": 0.212,
          "metrics": {
            "momentum5d": 3.548,
            "momentum20d": -4.909,
            "realizedVol10dAnnualized": 26.92,
            "volumeRatio": 1.375,
            "atrPct": 2.452,
            "gapPct": -0.573,
            "relativeStrength5dPct": 2.246,
            "relativeStrength20dPct": -6.422,
            "avgDollarVolume10d": 628904513,
            "maxSelectedCorrelation": 0.517
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.313,
            "participation": 0.369,
            "volatility": -0.015,
            "gap": 0.152,
            "correlation": 0.517,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 42,
          "previousRank": 60,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": 0.2,
          "metrics": {
            "momentum5d": -1.76,
            "momentum20d": -6.827,
            "realizedVol10dAnnualized": 19.81,
            "volumeRatio": 4.205,
            "atrPct": 2.465,
            "gapPct": -0.62,
            "relativeStrength5dPct": -3.061,
            "relativeStrength20dPct": -8.34,
            "avgDollarVolume10d": 873254654,
            "maxSelectedCorrelation": 0.426
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.759,
            "participation": 6.725,
            "volatility": -0.216,
            "gap": 0.197,
            "correlation": 0.426,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 43,
          "previousRank": 33,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.189,
          "metrics": {
            "momentum5d": 1.913,
            "momentum20d": 6.297,
            "realizedVol10dAnnualized": 21.81,
            "volumeRatio": 0.99,
            "atrPct": 2.378,
            "gapPct": 0.009,
            "relativeStrength5dPct": 0.612,
            "relativeStrength20dPct": 4.785,
            "avgDollarVolume10d": 11949137619,
            "maxSelectedCorrelation": 0.678
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.509,
            "participation": -0.495,
            "volatility": -0.205,
            "gap": 0.397,
            "correlation": 0.678,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 44,
          "previousRank": 86,
          "rankChange": 42,
          "rankChangeLabel": "+42",
          "status": "WATCH",
          "quantScore": 0.119,
          "metrics": {
            "momentum5d": 3.477,
            "momentum20d": -1.182,
            "realizedVol10dAnnualized": 23.6,
            "volumeRatio": 0.937,
            "atrPct": 2.189,
            "gapPct": -0.402,
            "relativeStrength5dPct": 2.176,
            "relativeStrength20dPct": -2.694,
            "avgDollarVolume10d": 1053356235,
            "maxSelectedCorrelation": 0.437
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.466,
            "participation": -0.615,
            "volatility": -0.254,
            "gap": 0.009,
            "correlation": 0.437,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 45,
          "previousRank": 29,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": 0.115,
          "metrics": {
            "momentum5d": -2.264,
            "momentum20d": 5.88,
            "realizedVol10dAnnualized": 25.7,
            "volumeRatio": 1.943,
            "atrPct": 2.853,
            "gapPct": -1.633,
            "relativeStrength5dPct": -3.565,
            "relativeStrength20dPct": 4.367,
            "avgDollarVolume10d": 3301671525,
            "maxSelectedCorrelation": 0.703
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.285,
            "participation": 1.646,
            "volatility": 0.165,
            "gap": 1.154,
            "correlation": 0.703,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 46,
          "previousRank": 23,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": 0.113,
          "metrics": {
            "momentum5d": -3.728,
            "momentum20d": 8.685,
            "realizedVol10dAnnualized": 37.53,
            "volumeRatio": 1.326,
            "atrPct": 3.434,
            "gapPct": -2.057,
            "relativeStrength5dPct": -5.029,
            "relativeStrength20dPct": 7.173,
            "avgDollarVolume10d": 2900431716,
            "maxSelectedCorrelation": 0.471
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.432,
            "participation": 0.259,
            "volatility": 0.823,
            "gap": 1.553,
            "correlation": 0.471,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 47,
          "previousRank": 64,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.108,
          "metrics": {
            "momentum5d": 2.149,
            "momentum20d": -1.057,
            "realizedVol10dAnnualized": 19.29,
            "volumeRatio": 1.257,
            "atrPct": 2.018,
            "gapPct": 2.033,
            "relativeStrength5dPct": 0.848,
            "relativeStrength20dPct": -2.569,
            "avgDollarVolume10d": 1415464146,
            "maxSelectedCorrelation": 0.576
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.225,
            "participation": 0.105,
            "volatility": -0.472,
            "gap": 2.307,
            "correlation": 0.576,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 48,
          "previousRank": 74,
          "rankChange": 26,
          "rankChangeLabel": "+26",
          "status": "WATCH",
          "quantScore": 0.102,
          "metrics": {
            "momentum5d": 3.847,
            "momentum20d": 0.446,
            "realizedVol10dAnnualized": 14.48,
            "volumeRatio": 1.381,
            "atrPct": 1.223,
            "gapPct": 0.477,
            "relativeStrength5dPct": 2.546,
            "relativeStrength20dPct": -1.067,
            "avgDollarVolume10d": 970187926,
            "maxSelectedCorrelation": 0.377
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.607,
            "participation": 0.383,
            "volatility": -1.041,
            "gap": 0.839,
            "correlation": 0.377,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 49,
          "previousRank": 66,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.094,
          "metrics": {
            "momentum5d": 1.72,
            "momentum20d": -3.773,
            "realizedVol10dAnnualized": 26.1,
            "volumeRatio": 0.939,
            "atrPct": 3.36,
            "gapPct": -0.255,
            "relativeStrength5dPct": 0.419,
            "relativeStrength20dPct": -5.285,
            "avgDollarVolume10d": 656488191,
            "maxSelectedCorrelation": 0.501
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.024,
            "participation": -0.61,
            "volatility": 0.449,
            "gap": 0.147,
            "correlation": 0.501,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 50,
          "previousRank": 24,
          "rankChange": -26,
          "rankChangeLabel": "-26",
          "status": "WATCH",
          "quantScore": 0.06,
          "metrics": {
            "momentum5d": -1.706,
            "momentum20d": 5.743,
            "realizedVol10dAnnualized": 22.25,
            "volumeRatio": 1.978,
            "atrPct": 2.361,
            "gapPct": -1.493,
            "relativeStrength5dPct": -3.007,
            "relativeStrength20dPct": 4.23,
            "avgDollarVolume10d": 3645915598,
            "maxSelectedCorrelation": 0.607
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.188,
            "participation": 1.724,
            "volatility": -0.201,
            "gap": 1.021,
            "correlation": 0.607,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 51,
          "previousRank": 34,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "WATCH",
          "quantScore": 0.057,
          "metrics": {
            "momentum5d": 2.349,
            "momentum20d": 0.658,
            "realizedVol10dAnnualized": 19.73,
            "volumeRatio": 1.093,
            "atrPct": 2.136,
            "gapPct": -0.069,
            "relativeStrength5dPct": 1.048,
            "relativeStrength20dPct": -0.855,
            "avgDollarVolume10d": 9078742551,
            "maxSelectedCorrelation": 0.701
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.338,
            "participation": -0.263,
            "volatility": -0.396,
            "gap": 0.323,
            "correlation": 0.701,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 52,
          "previousRank": 45,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "REJECT",
          "quantScore": 0.038,
          "metrics": {
            "momentum5d": -3.339,
            "momentum20d": -0.221,
            "realizedVol10dAnnualized": 43.47,
            "volumeRatio": 0.966,
            "atrPct": 4.423,
            "gapPct": -1.491,
            "relativeStrength5dPct": -4.64,
            "relativeStrength20dPct": -1.733,
            "avgDollarVolume10d": 1953181149,
            "maxSelectedCorrelation": 0.858
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.757,
            "participation": -0.549,
            "volatility": 1.529,
            "gap": 1.019,
            "correlation": 0.858,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 53,
          "previousRank": 99,
          "rankChange": 46,
          "rankChangeLabel": "+46",
          "status": "WATCH",
          "quantScore": 0.036,
          "metrics": {
            "momentum5d": 2.187,
            "momentum20d": -6.541,
            "realizedVol10dAnnualized": 16.63,
            "volumeRatio": 2.009,
            "atrPct": 2.034,
            "gapPct": 0.143,
            "relativeStrength5dPct": 0.886,
            "relativeStrength20dPct": -8.053,
            "avgDollarVolume10d": 1476514747,
            "maxSelectedCorrelation": 0.598
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.013,
            "participation": 1.795,
            "volatility": -0.541,
            "gap": 0.523,
            "correlation": 0.598,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 54,
          "previousRank": 57,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.03,
          "metrics": {
            "momentum5d": -0.095,
            "momentum20d": -5.419,
            "realizedVol10dAnnualized": 29.87,
            "volumeRatio": 1.424,
            "atrPct": 3.4,
            "gapPct": 0.021,
            "relativeStrength5dPct": -1.396,
            "relativeStrength20dPct": -6.931,
            "avgDollarVolume10d": 1039947565,
            "maxSelectedCorrelation": 0.514
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.387,
            "participation": 0.479,
            "volatility": 0.581,
            "gap": 0.409,
            "correlation": 0.514,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 55,
          "previousRank": 31,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "REJECT",
          "quantScore": -0.039,
          "metrics": {
            "momentum5d": -1.724,
            "momentum20d": -16.049,
            "realizedVol10dAnnualized": 42.52,
            "volumeRatio": 1.84,
            "atrPct": 4.322,
            "gapPct": -0.954,
            "relativeStrength5dPct": -3.025,
            "relativeStrength20dPct": -17.561,
            "avgDollarVolume10d": 3863186639,
            "maxSelectedCorrelation": 0.831
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.163,
            "participation": 1.415,
            "volatility": 1.447,
            "gap": 0.513,
            "correlation": 0.831,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 56,
          "previousRank": 36,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.075,
          "metrics": {
            "momentum5d": -0.165,
            "momentum20d": 3.045,
            "realizedVol10dAnnualized": 22.24,
            "volumeRatio": 1.087,
            "atrPct": 2.322,
            "gapPct": -1.074,
            "relativeStrength5dPct": -1.466,
            "relativeStrength20dPct": 1.532,
            "avgDollarVolume10d": 25773098241,
            "maxSelectedCorrelation": 0.532
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.022,
            "participation": -0.278,
            "volatility": -0.222,
            "gap": 0.625,
            "correlation": 0.532,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 57,
          "previousRank": 44,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.083,
          "metrics": {
            "momentum5d": 1.574,
            "momentum20d": -5.625,
            "realizedVol10dAnnualized": 18.9,
            "volumeRatio": 1.534,
            "atrPct": 2.17,
            "gapPct": -0.16,
            "relativeStrength5dPct": 0.273,
            "relativeStrength20dPct": -7.137,
            "avgDollarVolume10d": 1774873395,
            "maxSelectedCorrelation": 0.445
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.086,
            "participation": 0.727,
            "volatility": -0.402,
            "gap": 0.238,
            "correlation": 0.445,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 58,
          "previousRank": 85,
          "rankChange": 27,
          "rankChangeLabel": "+27",
          "status": "WATCH",
          "quantScore": -0.093,
          "metrics": {
            "momentum5d": 1.989,
            "momentum20d": -4.257,
            "realizedVol10dAnnualized": 10.42,
            "volumeRatio": 1.736,
            "atrPct": 1.749,
            "gapPct": -0.904,
            "relativeStrength5dPct": 0.688,
            "relativeStrength20dPct": -5.77,
            "avgDollarVolume10d": 1064651895,
            "maxSelectedCorrelation": 0.422
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.052,
            "participation": 1.181,
            "volatility": -0.876,
            "gap": 0.465,
            "correlation": 0.422,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 59,
          "previousRank": 39,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.096,
          "metrics": {
            "momentum5d": -1.106,
            "momentum20d": 3.595,
            "realizedVol10dAnnualized": 26.45,
            "volumeRatio": 0.973,
            "atrPct": 2.757,
            "gapPct": -0.17,
            "relativeStrength5dPct": -2.407,
            "relativeStrength20dPct": 2.083,
            "avgDollarVolume10d": 388923845,
            "maxSelectedCorrelation": 0.545
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.172,
            "participation": -0.534,
            "volatility": 0.135,
            "gap": 0.228,
            "correlation": 0.545,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 60,
          "previousRank": 68,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.101,
          "metrics": {
            "momentum5d": 0.658,
            "momentum20d": -14.145,
            "realizedVol10dAnnualized": 33.53,
            "volumeRatio": 1.311,
            "atrPct": 3.128,
            "gapPct": 0.938,
            "relativeStrength5dPct": -0.643,
            "relativeStrength20dPct": -15.658,
            "avgDollarVolume10d": 691121998,
            "maxSelectedCorrelation": 0.327
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.636,
            "participation": 0.227,
            "volatility": 0.542,
            "gap": 1.274,
            "correlation": 0.327,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 61,
          "previousRank": 56,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.103,
          "metrics": {
            "momentum5d": 0.748,
            "momentum20d": 4.365,
            "realizedVol10dAnnualized": 11.61,
            "volumeRatio": 1.673,
            "atrPct": 1.298,
            "gapPct": -0.496,
            "relativeStrength5dPct": -0.553,
            "relativeStrength20dPct": 2.853,
            "avgDollarVolume10d": 24387159100,
            "maxSelectedCorrelation": 0.674
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.207,
            "participation": 1.04,
            "volatility": -1.084,
            "gap": 0.08,
            "correlation": 0.674,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 62,
          "previousRank": 70,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "REJECT",
          "quantScore": -0.118,
          "metrics": {
            "momentum5d": 0.439,
            "momentum20d": -5.556,
            "realizedVol10dAnnualized": 23.34,
            "volumeRatio": 1.45,
            "atrPct": 2.54,
            "gapPct": -0.163,
            "relativeStrength5dPct": -0.862,
            "relativeStrength20dPct": -7.068,
            "avgDollarVolume10d": 1301838196,
            "maxSelectedCorrelation": 0.818
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.294,
            "participation": 0.538,
            "volatility": -0.073,
            "gap": 0.234,
            "correlation": 0.818,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 63,
          "previousRank": 78,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.147,
          "metrics": {
            "momentum5d": 2.218,
            "momentum20d": -8.52,
            "realizedVol10dAnnualized": 20.71,
            "volumeRatio": 1.263,
            "atrPct": 2.151,
            "gapPct": -0.449,
            "relativeStrength5dPct": 0.917,
            "relativeStrength20dPct": -10.032,
            "avgDollarVolume10d": 1116392190,
            "maxSelectedCorrelation": 0.386
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.095,
            "participation": 0.118,
            "volatility": -0.359,
            "gap": 0.035,
            "correlation": 0.386,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 64,
          "previousRank": 59,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.15,
          "metrics": {
            "momentum5d": 3.211,
            "momentum20d": -2.479,
            "realizedVol10dAnnualized": 12.58,
            "volumeRatio": 0.898,
            "atrPct": 1.463,
            "gapPct": -0.14,
            "relativeStrength5dPct": 1.91,
            "relativeStrength20dPct": -3.991,
            "avgDollarVolume10d": 583314768,
            "maxSelectedCorrelation": 0.685
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.359,
            "participation": -0.701,
            "volatility": -0.967,
            "gap": 0.256,
            "correlation": 0.685,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 65,
          "previousRank": 63,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.162,
          "metrics": {
            "momentum5d": 1.179,
            "momentum20d": 0.948,
            "realizedVol10dAnnualized": 11.95,
            "volumeRatio": 1.367,
            "atrPct": 1.597,
            "gapPct": -0.344,
            "relativeStrength5dPct": -0.122,
            "relativeStrength20dPct": -0.564,
            "avgDollarVolume10d": 1429502967,
            "maxSelectedCorrelation": 0.295
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.134,
            "participation": 0.351,
            "volatility": -0.913,
            "gap": 0.064,
            "correlation": 0.295,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 66,
          "previousRank": 32,
          "rankChange": -34,
          "rankChangeLabel": "-34",
          "status": "WATCH",
          "quantScore": -0.19,
          "metrics": {
            "momentum5d": -5.737,
            "momentum20d": 1.504,
            "realizedVol10dAnnualized": 36.94,
            "volumeRatio": 1.238,
            "atrPct": 3.921,
            "gapPct": -2.577,
            "relativeStrength5dPct": -7.038,
            "relativeStrength20dPct": -0.008,
            "avgDollarVolume10d": 2510389584,
            "maxSelectedCorrelation": 0.521
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.125,
            "participation": 0.063,
            "volatility": 1.068,
            "gap": 2.044,
            "correlation": 0.521,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 67,
          "previousRank": 51,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "REJECT",
          "quantScore": -0.199,
          "metrics": {
            "momentum5d": 3.503,
            "momentum20d": -4.355,
            "realizedVol10dAnnualized": 15.95,
            "volumeRatio": 0.552,
            "atrPct": 1.52,
            "gapPct": 0,
            "relativeStrength5dPct": 2.202,
            "relativeStrength20dPct": -5.867,
            "avgDollarVolume10d": 1879286796,
            "maxSelectedCorrelation": 0.846
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.329,
            "participation": -1.479,
            "volatility": -0.838,
            "gap": 0.388,
            "correlation": 0.846,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 68,
          "previousRank": 52,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.205,
          "metrics": {
            "momentum5d": -0.015,
            "momentum20d": 5.275,
            "realizedVol10dAnnualized": 13.85,
            "volumeRatio": 1.174,
            "atrPct": 1.494,
            "gapPct": -0.814,
            "relativeStrength5dPct": -1.316,
            "relativeStrength20dPct": 3.763,
            "avgDollarVolume10d": 1508501673,
            "maxSelectedCorrelation": 0.634
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.105,
            "participation": -0.082,
            "volatility": -0.913,
            "gap": 0.38,
            "correlation": 0.634,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 69,
          "previousRank": 14,
          "rankChange": -55,
          "rankChangeLabel": "-55",
          "status": "WATCH",
          "quantScore": -0.225,
          "metrics": {
            "momentum5d": -5.609,
            "momentum20d": 0.785,
            "realizedVol10dAnnualized": 39.95,
            "volumeRatio": 1.034,
            "atrPct": 4.325,
            "gapPct": -0.965,
            "relativeStrength5dPct": -6.91,
            "relativeStrength20dPct": -0.727,
            "avgDollarVolume10d": 27736168845,
            "maxSelectedCorrelation": 0.309
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.134,
            "participation": -0.395,
            "volatility": 1.373,
            "gap": 0.523,
            "correlation": 0.309,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 70,
          "previousRank": 108,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "WATCH",
          "quantScore": -0.226,
          "metrics": {
            "momentum5d": 0.515,
            "momentum20d": -6.03,
            "realizedVol10dAnnualized": 26.92,
            "volumeRatio": 0.817,
            "atrPct": 2.446,
            "gapPct": 0.287,
            "relativeStrength5dPct": -0.787,
            "relativeStrength20dPct": -7.543,
            "avgDollarVolume10d": 533034598,
            "maxSelectedCorrelation": 0.407
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.301,
            "participation": -0.883,
            "volatility": -0.019,
            "gap": 0.659,
            "correlation": 0.407,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 71,
          "previousRank": 65,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.234,
          "metrics": {
            "momentum5d": -1.063,
            "momentum20d": -3.475,
            "realizedVol10dAnnualized": 18.08,
            "volumeRatio": 2.084,
            "atrPct": 1.656,
            "gapPct": -1.351,
            "relativeStrength5dPct": -2.364,
            "relativeStrength20dPct": -4.988,
            "avgDollarVolume10d": 1311117927,
            "maxSelectedCorrelation": 0.512
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.48,
            "participation": 1.961,
            "volatility": -0.702,
            "gap": 0.887,
            "correlation": 0.512,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 72,
          "previousRank": 80,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.242,
          "metrics": {
            "momentum5d": 2.726,
            "momentum20d": -2.981,
            "realizedVol10dAnnualized": 9.66,
            "volumeRatio": 0.973,
            "atrPct": 1.269,
            "gapPct": 0.087,
            "relativeStrength5dPct": 1.424,
            "relativeStrength20dPct": -4.493,
            "avgDollarVolume10d": 510552227,
            "maxSelectedCorrelation": 0.377
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.246,
            "participation": -0.534,
            "volatility": -1.156,
            "gap": 0.47,
            "correlation": 0.377,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 73,
          "previousRank": 54,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.243,
          "metrics": {
            "momentum5d": -2.356,
            "momentum20d": -9.045,
            "realizedVol10dAnnualized": 40.47,
            "volumeRatio": 1.214,
            "atrPct": 3.279,
            "gapPct": -1.285,
            "relativeStrength5dPct": -3.657,
            "relativeStrength20dPct": -10.557,
            "avgDollarVolume10d": 1946999418,
            "maxSelectedCorrelation": 0.498
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.968,
            "participation": 0.007,
            "volatility": 0.826,
            "gap": 0.825,
            "correlation": 0.498,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 74,
          "previousRank": 55,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.244,
          "metrics": {
            "momentum5d": -3.725,
            "momentum20d": -7.174,
            "realizedVol10dAnnualized": 23.53,
            "volumeRatio": 1.091,
            "atrPct": 4.752,
            "gapPct": -1.945,
            "relativeStrength5dPct": -5.026,
            "relativeStrength20dPct": -8.686,
            "avgDollarVolume10d": 2176922665,
            "maxSelectedCorrelation": 0.568
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.139,
            "participation": -0.268,
            "volatility": 1.124,
            "gap": 1.448,
            "correlation": 0.568,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 75,
          "previousRank": 62,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.246,
          "metrics": {
            "momentum5d": 2.665,
            "momentum20d": -0.667,
            "realizedVol10dAnnualized": 11.18,
            "volumeRatio": 0.79,
            "atrPct": 1.225,
            "gapPct": -0.485,
            "relativeStrength5dPct": 1.364,
            "relativeStrength20dPct": -2.179,
            "avgDollarVolume10d": 755575155,
            "maxSelectedCorrelation": 0.7
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.338,
            "participation": -0.943,
            "volatility": -1.136,
            "gap": 0.069,
            "correlation": 0.7,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 76,
          "previousRank": 100,
          "rankChange": 24,
          "rankChangeLabel": "+24",
          "status": "WATCH",
          "quantScore": -0.265,
          "metrics": {
            "momentum5d": 0.473,
            "momentum20d": -3.159,
            "realizedVol10dAnnualized": 15.94,
            "volumeRatio": 1.136,
            "atrPct": 1.987,
            "gapPct": 0.16,
            "relativeStrength5dPct": -0.828,
            "relativeStrength20dPct": -4.672,
            "avgDollarVolume10d": 550014412,
            "maxSelectedCorrelation": 0.375
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.18,
            "participation": -0.167,
            "volatility": -0.587,
            "gap": 0.54,
            "correlation": 0.375,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 77,
          "previousRank": 79,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.275,
          "metrics": {
            "momentum5d": -0.062,
            "momentum20d": 0.33,
            "realizedVol10dAnnualized": 17.15,
            "volumeRatio": 1.289,
            "atrPct": 1.497,
            "gapPct": -0.834,
            "relativeStrength5dPct": -1.363,
            "relativeStrength20dPct": -1.182,
            "avgDollarVolume10d": 456782124,
            "maxSelectedCorrelation": 0.677
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.124,
            "participation": 0.177,
            "volatility": -0.815,
            "gap": 0.399,
            "correlation": 0.677,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 78,
          "previousRank": 28,
          "rankChange": -50,
          "rankChangeLabel": "-50",
          "status": "WATCH",
          "quantScore": -0.277,
          "metrics": {
            "momentum5d": -3.651,
            "momentum20d": -2.376,
            "realizedVol10dAnnualized": 38.4,
            "volumeRatio": 1.148,
            "atrPct": 3.27,
            "gapPct": -0.63,
            "relativeStrength5dPct": -4.952,
            "relativeStrength20dPct": -3.889,
            "avgDollarVolume10d": 1860202897,
            "maxSelectedCorrelation": 0.509
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.911,
            "participation": -0.14,
            "volatility": 0.76,
            "gap": 0.207,
            "correlation": 0.509,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 79,
          "previousRank": 72,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.284,
          "metrics": {
            "momentum5d": -2.2,
            "momentum20d": -3.637,
            "realizedVol10dAnnualized": 24.91,
            "volumeRatio": 1.295,
            "atrPct": 2.853,
            "gapPct": -1.235,
            "relativeStrength5dPct": -3.501,
            "relativeStrength20dPct": -5.149,
            "avgDollarVolume10d": 756692633,
            "maxSelectedCorrelation": 0.442
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.698,
            "participation": 0.19,
            "volatility": 0.141,
            "gap": 0.777,
            "correlation": 0.442,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 80,
          "previousRank": 75,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.285,
          "metrics": {
            "momentum5d": -0.163,
            "momentum20d": -8.922,
            "realizedVol10dAnnualized": 22.51,
            "volumeRatio": 1.438,
            "atrPct": 2.408,
            "gapPct": -0.825,
            "relativeStrength5dPct": -1.464,
            "relativeStrength20dPct": -10.434,
            "avgDollarVolume10d": 526438728,
            "maxSelectedCorrelation": 0.536
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.555,
            "participation": 0.512,
            "volatility": -0.168,
            "gap": 0.391,
            "correlation": 0.536,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 81,
          "previousRank": 81,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.308,
          "metrics": {
            "momentum5d": -1.067,
            "momentum20d": 0.144,
            "realizedVol10dAnnualized": 15.87,
            "volumeRatio": 1.441,
            "atrPct": 1.926,
            "gapPct": -0.357,
            "relativeStrength5dPct": -2.368,
            "relativeStrength20dPct": -1.368,
            "avgDollarVolume10d": 884025002,
            "maxSelectedCorrelation": 0.309
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.319,
            "participation": 0.518,
            "volatility": -0.622,
            "gap": 0.051,
            "correlation": 0.309,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 82,
          "previousRank": 89,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.308,
          "metrics": {
            "momentum5d": -0.994,
            "momentum20d": -3.491,
            "realizedVol10dAnnualized": 23.32,
            "volumeRatio": 1.015,
            "atrPct": 2.57,
            "gapPct": -0.623,
            "relativeStrength5dPct": -2.295,
            "relativeStrength20dPct": -5.003,
            "avgDollarVolume10d": 1199397771,
            "maxSelectedCorrelation": 0.53
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.468,
            "participation": -0.439,
            "volatility": -0.057,
            "gap": 0.2,
            "correlation": 0.53,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 83,
          "previousRank": 90,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.311,
          "metrics": {
            "momentum5d": 1.44,
            "momentum20d": -4.96,
            "realizedVol10dAnnualized": 10.91,
            "volumeRatio": 1.496,
            "atrPct": 1.274,
            "gapPct": -0.502,
            "relativeStrength5dPct": 0.139,
            "relativeStrength20dPct": -6.472,
            "avgDollarVolume10d": 2086215609,
            "maxSelectedCorrelation": 0.377
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.081,
            "participation": 0.641,
            "volatility": -1.118,
            "gap": 0.086,
            "correlation": 0.377,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 84,
          "previousRank": 93,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.326,
          "metrics": {
            "momentum5d": 0.85,
            "momentum20d": -7.054,
            "realizedVol10dAnnualized": 18.9,
            "volumeRatio": 0.865,
            "atrPct": 2.3,
            "gapPct": -0.558,
            "relativeStrength5dPct": -0.451,
            "relativeStrength20dPct": -8.566,
            "avgDollarVolume10d": 1126052479,
            "maxSelectedCorrelation": 0.661
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.284,
            "participation": -0.775,
            "volatility": -0.332,
            "gap": 0.138,
            "correlation": 0.661,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 85,
          "previousRank": 42,
          "rankChange": -43,
          "rankChangeLabel": "-43",
          "status": "WATCH",
          "quantScore": -0.332,
          "metrics": {
            "momentum5d": -10.767,
            "momentum20d": 0.791,
            "realizedVol10dAnnualized": 43.64,
            "volumeRatio": 1.286,
            "atrPct": 5.949,
            "gapPct": -2.422,
            "relativeStrength5dPct": -12.068,
            "relativeStrength20dPct": -0.722,
            "avgDollarVolume10d": 10478400314,
            "maxSelectedCorrelation": 0.499
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.091,
            "participation": 0.17,
            "volatility": 2.355,
            "gap": 1.898,
            "correlation": 0.499,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 86,
          "previousRank": 101,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.344,
          "metrics": {
            "momentum5d": -2.167,
            "momentum20d": -6.084,
            "realizedVol10dAnnualized": 22.74,
            "volumeRatio": 1.562,
            "atrPct": 2.588,
            "gapPct": -1.199,
            "relativeStrength5dPct": -3.468,
            "relativeStrength20dPct": -7.597,
            "avgDollarVolume10d": 1320522875,
            "maxSelectedCorrelation": 0.668
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.801,
            "participation": 0.79,
            "volatility": -0.064,
            "gap": 0.743,
            "correlation": 0.668,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 87,
          "previousRank": 94,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.355,
          "metrics": {
            "momentum5d": 1.373,
            "momentum20d": -1.291,
            "realizedVol10dAnnualized": 8.95,
            "volumeRatio": 1.277,
            "atrPct": 0.889,
            "gapPct": -0.294,
            "relativeStrength5dPct": 0.072,
            "relativeStrength20dPct": -2.803,
            "avgDollarVolume10d": 1876971118,
            "maxSelectedCorrelation": 0.379
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.07,
            "participation": 0.149,
            "volatility": -1.382,
            "gap": 0.11,
            "correlation": 0.379,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 88,
          "previousRank": 109,
          "rankChange": 21,
          "rankChangeLabel": "+21",
          "status": "WATCH",
          "quantScore": -0.358,
          "metrics": {
            "momentum5d": -1.238,
            "momentum20d": -1.752,
            "realizedVol10dAnnualized": 21.7,
            "volumeRatio": 0.937,
            "atrPct": 2.321,
            "gapPct": -0.106,
            "relativeStrength5dPct": -2.539,
            "relativeStrength20dPct": -3.264,
            "avgDollarVolume10d": 635794295,
            "maxSelectedCorrelation": 0.617
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.435,
            "participation": -0.615,
            "volatility": -0.239,
            "gap": 0.288,
            "correlation": 0.617,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 89,
          "previousRank": 97,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.364,
          "metrics": {
            "momentum5d": 1.504,
            "momentum20d": -4.125,
            "realizedVol10dAnnualized": 13.05,
            "volumeRatio": 0.903,
            "atrPct": 1.499,
            "gapPct": -0.347,
            "relativeStrength5dPct": 0.203,
            "relativeStrength20dPct": -5.638,
            "avgDollarVolume10d": 659047844,
            "maxSelectedCorrelation": 0.303
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.032,
            "participation": -0.689,
            "volatility": -0.934,
            "gap": 0.061,
            "correlation": 0.303,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 90,
          "previousRank": 38,
          "rankChange": -52,
          "rankChangeLabel": "-52",
          "status": "WATCH",
          "quantScore": -0.367,
          "metrics": {
            "momentum5d": -9.134,
            "momentum20d": -1.557,
            "realizedVol10dAnnualized": 32.81,
            "volumeRatio": 1.404,
            "atrPct": 5.624,
            "gapPct": -1.917,
            "relativeStrength5dPct": -10.435,
            "relativeStrength20dPct": -3.069,
            "avgDollarVolume10d": 1334897160,
            "maxSelectedCorrelation": 0.601
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.893,
            "participation": 0.436,
            "volatility": 1.864,
            "gap": 1.421,
            "correlation": 0.601,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 91,
          "previousRank": 83,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.373,
          "metrics": {
            "momentum5d": 1.301,
            "momentum20d": 1.512,
            "realizedVol10dAnnualized": 7.81,
            "volumeRatio": 0.98,
            "atrPct": 0.88,
            "gapPct": -0.304,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 32865757505,
            "maxSelectedCorrelation": 0.692
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.182,
            "participation": -0.518,
            "volatility": -1.42,
            "gap": 0.102,
            "correlation": 0.692,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 92,
          "previousRank": 107,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.375,
          "metrics": {
            "momentum5d": -1.166,
            "momentum20d": -6.988,
            "realizedVol10dAnnualized": 25.36,
            "volumeRatio": 0.53,
            "atrPct": 3.345,
            "gapPct": -0.669,
            "relativeStrength5dPct": -2.467,
            "relativeStrength20dPct": -8.5,
            "avgDollarVolume10d": 2070680579,
            "maxSelectedCorrelation": 0.522
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.656,
            "participation": -1.529,
            "volatility": 0.42,
            "gap": 0.244,
            "correlation": 0.522,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 93,
          "previousRank": 67,
          "rankChange": -26,
          "rankChangeLabel": "-26",
          "status": "WATCH",
          "quantScore": -0.376,
          "metrics": {
            "momentum5d": -0.142,
            "momentum20d": -1.973,
            "realizedVol10dAnnualized": 16.43,
            "volumeRatio": 1.274,
            "atrPct": 1.418,
            "gapPct": -0.548,
            "relativeStrength5dPct": -1.443,
            "relativeStrength20dPct": -3.486,
            "avgDollarVolume10d": 1250774115,
            "maxSelectedCorrelation": 0.494
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.242,
            "participation": 0.143,
            "volatility": -0.879,
            "gap": 0.129,
            "correlation": 0.494,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 94,
          "previousRank": 92,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.387,
          "metrics": {
            "momentum5d": -2.913,
            "momentum20d": -10.465,
            "realizedVol10dAnnualized": 29.95,
            "volumeRatio": 0.826,
            "atrPct": 4.073,
            "gapPct": -1.255,
            "relativeStrength5dPct": -4.214,
            "relativeStrength20dPct": -11.978,
            "avgDollarVolume10d": 394871029,
            "maxSelectedCorrelation": 0.491
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.135,
            "participation": -0.863,
            "volatility": 0.946,
            "gap": 0.797,
            "correlation": 0.491,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 95,
          "previousRank": 73,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": -0.391,
          "metrics": {
            "momentum5d": 1.336,
            "momentum20d": -6.388,
            "realizedVol10dAnnualized": 14.18,
            "volumeRatio": 0.774,
            "atrPct": 1.783,
            "gapPct": 0.052,
            "relativeStrength5dPct": 0.035,
            "relativeStrength20dPct": -7.901,
            "avgDollarVolume10d": 1107335727,
            "maxSelectedCorrelation": 0.718
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.164,
            "participation": -0.98,
            "volatility": -0.748,
            "gap": 0.437,
            "correlation": 0.718,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 96,
          "previousRank": 87,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.428,
          "metrics": {
            "momentum5d": -1.082,
            "momentum20d": -6.131,
            "realizedVol10dAnnualized": 23.14,
            "volumeRatio": 1.404,
            "atrPct": 1.542,
            "gapPct": 0.524,
            "relativeStrength5dPct": -2.383,
            "relativeStrength20dPct": -7.643,
            "avgDollarVolume10d": 3096460334,
            "maxSelectedCorrelation": 0.618
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.602,
            "participation": 0.435,
            "volatility": -0.615,
            "gap": 0.883,
            "correlation": 0.618,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 97,
          "previousRank": 82,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.459,
          "metrics": {
            "momentum5d": -0.515,
            "momentum20d": -5.255,
            "realizedVol10dAnnualized": 15.89,
            "volumeRatio": 1.172,
            "atrPct": 1.822,
            "gapPct": -0.334,
            "relativeStrength5dPct": -1.816,
            "relativeStrength20dPct": -6.768,
            "avgDollarVolume10d": 1186512221,
            "maxSelectedCorrelation": 0.517
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.457,
            "participation": -0.085,
            "volatility": -0.677,
            "gap": 0.073,
            "correlation": 0.517,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 98,
          "previousRank": 112,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": -0.461,
          "metrics": {
            "momentum5d": -0.373,
            "momentum20d": -6.697,
            "realizedVol10dAnnualized": 15.43,
            "volumeRatio": 1.165,
            "atrPct": 1.878,
            "gapPct": -0.006,
            "relativeStrength5dPct": -1.674,
            "relativeStrength20dPct": -8.209,
            "avgDollarVolume10d": 710435663,
            "maxSelectedCorrelation": 0.35
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.495,
            "participation": -0.101,
            "volatility": -0.66,
            "gap": 0.383,
            "correlation": 0.35,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 99,
          "previousRank": 88,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": -0.479,
          "metrics": {
            "momentum5d": -3.756,
            "momentum20d": -6.701,
            "realizedVol10dAnnualized": 29.73,
            "volumeRatio": 0.851,
            "atrPct": 3.45,
            "gapPct": 0.401,
            "relativeStrength5dPct": -5.057,
            "relativeStrength20dPct": -8.213,
            "avgDollarVolume10d": 1966002868,
            "maxSelectedCorrelation": 0.566
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.124,
            "participation": -0.806,
            "volatility": 0.604,
            "gap": 0.767,
            "correlation": 0.566,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 100,
          "previousRank": 105,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.497,
          "metrics": {
            "momentum5d": -0.843,
            "momentum20d": -3.969,
            "realizedVol10dAnnualized": 17.37,
            "volumeRatio": 0.765,
            "atrPct": 1.98,
            "gapPct": -0.863,
            "relativeStrength5dPct": -2.144,
            "relativeStrength20dPct": -5.481,
            "avgDollarVolume10d": 1788306877,
            "maxSelectedCorrelation": 0.239
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.461,
            "participation": -0.999,
            "volatility": -0.549,
            "gap": 0.426,
            "correlation": 0.239,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 101,
          "previousRank": 91,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.5,
          "metrics": {
            "momentum5d": -0.528,
            "momentum20d": -6.566,
            "realizedVol10dAnnualized": 14.11,
            "volumeRatio": 1.205,
            "atrPct": 1.769,
            "gapPct": -0.707,
            "relativeStrength5dPct": -1.829,
            "relativeStrength20dPct": -8.078,
            "avgDollarVolume10d": 2645629855,
            "maxSelectedCorrelation": 0.555
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.518,
            "participation": -0.013,
            "volatility": -0.757,
            "gap": 0.279,
            "correlation": 0.555,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 102,
          "previousRank": 77,
          "rankChange": -25,
          "rankChangeLabel": "-25",
          "status": "WATCH",
          "quantScore": -0.509,
          "metrics": {
            "momentum5d": 0.596,
            "momentum20d": -2.37,
            "realizedVol10dAnnualized": 8.81,
            "volumeRatio": 1.056,
            "atrPct": 0.935,
            "gapPct": -0.393,
            "relativeStrength5dPct": -0.705,
            "relativeStrength20dPct": -3.882,
            "avgDollarVolume10d": 1709678455,
            "maxSelectedCorrelation": 0.712
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.122,
            "participation": -0.346,
            "volatility": -1.361,
            "gap": 0.017,
            "correlation": 0.712,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 103,
          "previousRank": 96,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.53,
          "metrics": {
            "momentum5d": -0.52,
            "momentum20d": -4.497,
            "realizedVol10dAnnualized": 10.25,
            "volumeRatio": 1.339,
            "atrPct": 1.345,
            "gapPct": -0.497,
            "relativeStrength5dPct": -1.821,
            "relativeStrength20dPct": -6.009,
            "avgDollarVolume10d": 7190958993,
            "maxSelectedCorrelation": 0.177
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.424,
            "participation": 0.29,
            "volatility": -1.098,
            "gap": 0.081,
            "correlation": 0.177,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 104,
          "previousRank": 113,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.533,
          "metrics": {
            "momentum5d": -0.223,
            "momentum20d": -14.457,
            "realizedVol10dAnnualized": 15.1,
            "volumeRatio": 1.603,
            "atrPct": 1.872,
            "gapPct": -1.009,
            "relativeStrength5dPct": -1.524,
            "relativeStrength20dPct": -15.969,
            "avgDollarVolume10d": 1981697425,
            "maxSelectedCorrelation": 0.632
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.814,
            "participation": 0.882,
            "volatility": -0.673,
            "gap": 0.564,
            "correlation": 0.632,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 105,
          "previousRank": 115,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": -0.541,
          "metrics": {
            "momentum5d": 0.741,
            "momentum20d": -3.345,
            "realizedVol10dAnnualized": 10.96,
            "volumeRatio": 0.678,
            "atrPct": 1.094,
            "gapPct": -0.022,
            "relativeStrength5dPct": -0.56,
            "relativeStrength20dPct": -4.858,
            "avgDollarVolume10d": 52499250,
            "maxSelectedCorrelation": 0.332
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.139,
            "participation": -1.196,
            "volatility": -1.213,
            "gap": 0.368,
            "correlation": 0.332,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 106,
          "previousRank": 84,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": -0.556,
          "metrics": {
            "momentum5d": -0.303,
            "momentum20d": -12.96,
            "realizedVol10dAnnualized": 15.44,
            "volumeRatio": 0.972,
            "atrPct": 2.259,
            "gapPct": -1.529,
            "relativeStrength5dPct": -1.604,
            "relativeStrength20dPct": -14.473,
            "avgDollarVolume10d": 1057903876,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.762,
            "participation": -0.535,
            "volatility": -0.455,
            "gap": 1.055,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 107,
          "previousRank": 98,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.558,
          "metrics": {
            "momentum5d": 0.418,
            "momentum20d": -5.897,
            "realizedVol10dAnnualized": 11.01,
            "volumeRatio": 0.949,
            "atrPct": 1.276,
            "gapPct": -0.271,
            "relativeStrength5dPct": -0.883,
            "relativeStrength20dPct": -7.41,
            "avgDollarVolume10d": 320995612,
            "maxSelectedCorrelation": 0.353
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.313,
            "participation": -0.586,
            "volatility": -1.113,
            "gap": 0.132,
            "correlation": 0.353,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 108,
          "previousRank": 50,
          "rankChange": -58,
          "rankChangeLabel": "-58",
          "status": "WATCH",
          "quantScore": -0.562,
          "metrics": {
            "momentum5d": -2.854,
            "momentum20d": -11.973,
            "realizedVol10dAnnualized": 32.03,
            "volumeRatio": 1.14,
            "atrPct": 2.737,
            "gapPct": -0.892,
            "relativeStrength5dPct": -4.155,
            "relativeStrength20dPct": -13.485,
            "avgDollarVolume10d": 831296637,
            "maxSelectedCorrelation": 0.665
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.191,
            "participation": -0.157,
            "volatility": 0.287,
            "gap": 0.454,
            "correlation": 0.665,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 109,
          "previousRank": 103,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.582,
          "metrics": {
            "momentum5d": -1.525,
            "momentum20d": -9.076,
            "realizedVol10dAnnualized": 17.7,
            "volumeRatio": 0.994,
            "atrPct": 2.328,
            "gapPct": 0.021,
            "relativeStrength5dPct": -2.826,
            "relativeStrength20dPct": -10.589,
            "avgDollarVolume10d": 693606656,
            "maxSelectedCorrelation": 0.798
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.815,
            "participation": -0.486,
            "volatility": -0.352,
            "gap": 0.408,
            "correlation": 0.798,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 110,
          "previousRank": 114,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.597,
          "metrics": {
            "momentum5d": 0.206,
            "momentum20d": -4.723,
            "realizedVol10dAnnualized": 7.55,
            "volumeRatio": 0.93,
            "atrPct": 1.112,
            "gapPct": 0.052,
            "relativeStrength5dPct": -1.095,
            "relativeStrength20dPct": -6.235,
            "avgDollarVolume10d": 4594434508,
            "maxSelectedCorrelation": 0.732
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.3,
            "participation": -0.629,
            "volatility": -1.303,
            "gap": 0.437,
            "correlation": 0.732,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 111,
          "previousRank": 104,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.601,
          "metrics": {
            "momentum5d": -1.386,
            "momentum20d": -3.184,
            "realizedVol10dAnnualized": 16.94,
            "volumeRatio": 0.882,
            "atrPct": 1.411,
            "gapPct": 0.06,
            "relativeStrength5dPct": -2.687,
            "relativeStrength20dPct": -4.696,
            "avgDollarVolume10d": 574530858,
            "maxSelectedCorrelation": 0.65
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.527,
            "participation": -0.737,
            "volatility": -0.867,
            "gap": 0.445,
            "correlation": 0.65,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 112,
          "previousRank": 111,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.609,
          "metrics": {
            "momentum5d": 0.431,
            "momentum20d": -2.697,
            "realizedVol10dAnnualized": 4.53,
            "volumeRatio": 0.995,
            "atrPct": 0.686,
            "gapPct": -0.029,
            "relativeStrength5dPct": -0.87,
            "relativeStrength20dPct": -4.209,
            "avgDollarVolume10d": 4253439577,
            "maxSelectedCorrelation": 0.612
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.167,
            "participation": -0.485,
            "volatility": -1.62,
            "gap": 0.361,
            "correlation": 0.612,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 113,
          "previousRank": 110,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.735,
          "metrics": {
            "momentum5d": 0.312,
            "momentum20d": -2.33,
            "realizedVol10dAnnualized": 3.54,
            "volumeRatio": 0.653,
            "atrPct": 0.482,
            "gapPct": -0.143,
            "relativeStrength5dPct": -0.989,
            "relativeStrength20dPct": -3.842,
            "avgDollarVolume10d": 6027298368,
            "maxSelectedCorrelation": 0.548
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.173,
            "participation": -1.252,
            "volatility": -1.759,
            "gap": 0.254,
            "correlation": 0.548,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 114,
          "previousRank": 95,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "REJECT",
          "quantScore": -0.785,
          "metrics": {
            "momentum5d": -1.57,
            "momentum20d": -14.21,
            "realizedVol10dAnnualized": 16.08,
            "volumeRatio": 0.833,
            "atrPct": 2.221,
            "gapPct": -0.748,
            "relativeStrength5dPct": -2.871,
            "relativeStrength20dPct": -15.722,
            "avgDollarVolume10d": 1742109150,
            "maxSelectedCorrelation": 0.858
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.053,
            "participation": -0.847,
            "volatility": -0.456,
            "gap": 0.318,
            "correlation": 0.858,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 115,
          "previousRank": 106,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.832,
          "metrics": {
            "momentum5d": -3.795,
            "momentum20d": 2.905,
            "realizedVol10dAnnualized": 23.51,
            "volumeRatio": 0.338,
            "atrPct": 0.998,
            "gapPct": 0,
            "relativeStrength5dPct": -5.096,
            "relativeStrength20dPct": 1.393,
            "avgDollarVolume10d": 459805119,
            "maxSelectedCorrelation": 0.61
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.702,
            "participation": -1.96,
            "volatility": -0.898,
            "gap": 0.388,
            "correlation": 0.61,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 116,
          "previousRank": 116,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -1.337,
          "metrics": {
            "momentum5d": -8.171,
            "momentum20d": -4.116,
            "realizedVol10dAnnualized": 31.62,
            "volumeRatio": 0.362,
            "atrPct": 1.231,
            "gapPct": 0,
            "relativeStrength5dPct": -9.472,
            "relativeStrength20dPct": -5.628,
            "avgDollarVolume10d": 223784173,
            "maxSelectedCorrelation": 0.543
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.828,
            "participation": -1.905,
            "volatility": -0.535,
            "gap": 0.388,
            "correlation": 0.543,
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
            "momentum5d": -8.831,
            "momentum20d": -10.539,
            "realizedVol10dAnnualized": 47.94,
            "volumeRatio": 1.395,
            "atrPct": 5.871,
            "gapPct": -0.514,
            "relativeStrength5dPct": -10.132,
            "relativeStrength20dPct": -12.051,
            "avgDollarVolume10d": 35777050,
            "maxSelectedCorrelation": null
          },
          "selectionReason": "10-day average dollar volume below $50m.",
          "factors": null
        },
        {
          "symbol": "EWG",
          "rank": null,
          "previousRank": null,
          "rankChange": null,
          "rankChangeLabel": "—",
          "status": "REJECT",
          "quantScore": null,
          "metrics": {
            "momentum5d": -0.367,
            "momentum20d": -5.507,
            "realizedVol10dAnnualized": 14.08,
            "volumeRatio": 1.148,
            "atrPct": 1.393,
            "gapPct": -0.831,
            "relativeStrength5dPct": -1.669,
            "relativeStrength20dPct": -7.019,
            "avgDollarVolume10d": 35586655,
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
            "momentum5d": -0.935,
            "momentum20d": -7.953,
            "realizedVol10dAnnualized": 15.08,
            "volumeRatio": 1.065,
            "atrPct": 1.495,
            "gapPct": -0.484,
            "relativeStrength5dPct": -2.236,
            "relativeStrength20dPct": -9.465,
            "avgDollarVolume10d": 17150692,
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
            "triggeredAt": "2026-10-06T13:30:00.000Z"
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
            "triggeredAt": "2026-10-06T13:30:00.000Z"
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
              "d1": -1.725
            },
            "selectionPrice": 70.4800033569336,
            "triggeredAt": "2026-10-07T13:30:00.000Z"
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
              "d1": -2.613
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
              "d1": 1.897
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
              "d1": -0.572
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
              "d1": -3.324
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
              "d1": 0.681
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
              "d1": 0.117
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
              "d1": 0.384
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
              "d1": -1.606
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
              "d1": -0.91
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
              "h4": 0.267
            },
            "selectionPrice": 164.55999755859375,
            "triggeredAt": "2026-10-09T13:30:00.000Z"
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
              "h4": 0.868
            },
            "selectionPrice": 71,
            "triggeredAt": "2026-10-09T13:30:00.000Z"
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
              "h4": 0.625
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
              "h4": 1.481
            },
            "selectionPrice": 198.77999877929688,
            "triggeredAt": "2026-10-09T13:30:00.000Z"
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
              "h4": 0.092
            },
            "selectionPrice": 574.5499877929688,
            "triggeredAt": "2026-10-09T13:30:00.000Z",
            "invalidatedAt": "2026-10-09T14:30:00.000Z"
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-10T05:07:11.542Z"
  },
  "automationHealth": {
    "openai": {
      "status": "BLOCKED_QUOTA",
      "code": "credit_balance_exhausted",
      "role": "QUANT_MACRO",
      "firstBlockedAt": "2026-10-06T18:09:06Z",
      "lastFailedAt": "2026-10-07T03:07:56Z",
      "nextProbeAt": "2026-10-07T09:07:56Z",
      "failedProbes": 0,
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-10T04:46:26.139Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-09T20:00:00.000Z",
        "MSTR": "2026-10-09T20:00:00.000Z",
        "HPE": "2026-10-09T20:00:00.000Z",
        "SHOP": "2026-10-09T20:00:00.000Z"
      },
      "fxUsdPerEur": 1.1205737590789795,
      "fxAt": "2026-10-09T21:25:00.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
