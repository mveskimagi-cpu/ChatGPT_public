window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-12 05:52 UTC",
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
      "date": "2026-10-10 21:00",
      "value": 981.23
    },
    {
      "date": "2026-10-11 20:44",
      "value": 981.23
    },
    {
      "date": "2026-10-12 05:52",
      "value": 981.23
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 116 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: SHOP, PLTR, HPE, NOW, PANW.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is SHOP, PLTR, HPE, NOW, PANW. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $178.45 with sustained participation.",
        "invalidation": "Loss of $174.75 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.33: 5d momentum 10.3%, 20d 37.1%, annualized 10d realized vol 30%, volume 0.37x, max selected correlation 0.00.",
        "quantScore": 2.333,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "WATCH_ONLY",
        "setupId": "SHOP-20261012-daily-quant"
      },
      {
        "symbol": "PLTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $209.43 with sustained participation.",
        "invalidation": "Loss of $205.57 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.59: 5d momentum 9.6%, 20d 24.1%, annualized 10d realized vol 27%, volume 0.27x, max selected correlation 0.02.",
        "quantScore": 1.586,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "WATCH_ONLY",
        "setupId": "PLTR-20261012-daily-quant"
      },
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $72.60 with sustained participation.",
        "invalidation": "Loss of $70.19 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.36: 5d momentum 4.4%, 20d 15.0%, annualized 10d realized vol 49%, volume 0.15x, max selected correlation 0.24.",
        "quantScore": 1.356,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "WATCH_ONLY",
        "setupId": "HPE-20261012-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $145.26 with sustained participation.",
        "invalidation": "Loss of $142.64 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.32: 5d momentum 5.8%, 20d 8.6%, annualized 10d realized vol 26%, volume 0.38x, max selected correlation 0.32.",
        "quantScore": 1.323,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "WATCH_ONLY",
        "setupId": "NOW-20261012-daily-quant"
      },
      {
        "symbol": "PANW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $416.57 with sustained participation.",
        "invalidation": "Loss of $405.31 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.10: 5d momentum 1.0%, 20d 24.3%, annualized 10d realized vol 40%, volume 0.18x, max selected correlation 0.56.",
        "quantScore": 1.1,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "WATCH_ONLY",
        "setupId": "PANW-20261012-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "SHOP",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $178.45 with sustained participation.",
        "invalidation": "Loss of $174.75 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.33: 5d momentum 10.3%, 20d 37.1%, annualized 10d realized vol 30%, volume 0.37x, max selected correlation 0.00.",
        "quantScore": 2.333,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "UNTRIGGERED",
        "setupId": "SHOP-20261012-daily-quant"
      },
      {
        "symbol": "PLTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $209.43 with sustained participation.",
        "invalidation": "Loss of $205.57 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.59: 5d momentum 9.6%, 20d 24.1%, annualized 10d realized vol 27%, volume 0.27x, max selected correlation 0.02.",
        "quantScore": 1.586,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "UNTRIGGERED",
        "setupId": "PLTR-20261012-daily-quant"
      },
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $72.60 with sustained participation.",
        "invalidation": "Loss of $70.19 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.36: 5d momentum 4.4%, 20d 15.0%, annualized 10d realized vol 49%, volume 0.15x, max selected correlation 0.24.",
        "quantScore": 1.356,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "UNTRIGGERED",
        "setupId": "HPE-20261012-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $145.26 with sustained participation.",
        "invalidation": "Loss of $142.64 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.32: 5d momentum 5.8%, 20d 8.6%, annualized 10d realized vol 26%, volume 0.38x, max selected correlation 0.32.",
        "quantScore": 1.323,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "UNTRIGGERED",
        "setupId": "NOW-20261012-daily-quant"
      },
      {
        "symbol": "PANW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-15T14:08:45.612Z",
        "trigger": "Break above $416.57 with sustained participation.",
        "invalidation": "Loss of $405.31 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.10: 5d momentum 1.0%, 20d 24.3%, annualized 10d realized vol 40%, volume 0.18x, max selected correlation 0.56.",
        "quantScore": 1.1,
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
        "createdAt": "2026-10-12T14:08:45.612Z",
        "lastReviewedAt": "2026-10-12T14:08:45.612Z",
        "status": "UNTRIGGERED",
        "setupId": "PANW-20261012-daily-quant"
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
    "lastReviewedAt": "2026-10-12T14:08:45.612Z",
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
      "selectedAt": "2026-10-12T14:08:45.612Z",
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
      "previousSelectedAt": "2026-10-11T16:46:34.519Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "SHOP",
          "quantScore": 2.333,
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
          }
        },
        {
          "symbol": "PLTR",
          "quantScore": 1.586,
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
          }
        },
        {
          "symbol": "HPE",
          "quantScore": 1.356,
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
          }
        },
        {
          "symbol": "NOW",
          "quantScore": 1.323,
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
          }
        },
        {
          "symbol": "PANW",
          "quantScore": 1.1,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "SHOP",
          "rank": 1,
          "previousRank": 1,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 2.333,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 3.059,
            "participation": 2.578,
            "volatility": 0.979,
            "gap": 1.979,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-15T14:08:45.612Z",
          "trigger": "Break above $178.45 with sustained participation.",
          "invalidation": "Loss of $174.75 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.33: 5d momentum 10.3%, 20d 37.1%, annualized 10d realized vol 30%, volume 0.37x, max selected correlation 0.00.",
          "createdAt": "2026-10-12T14:08:45.612Z",
          "lastReviewedAt": "2026-10-12T14:08:45.612Z",
          "setupId": "SHOP-20261012-daily-quant"
        },
        {
          "symbol": "PLTR",
          "rank": 2,
          "previousRank": 2,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.586,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.384,
            "participation": 1.459,
            "volatility": 0.414,
            "gap": 0.094,
            "correlation": 0.016,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-15T14:08:45.612Z",
          "trigger": "Break above $209.43 with sustained participation.",
          "invalidation": "Loss of $205.57 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.59: 5d momentum 9.6%, 20d 24.1%, annualized 10d realized vol 27%, volume 0.27x, max selected correlation 0.02.",
          "createdAt": "2026-10-12T14:08:45.612Z",
          "lastReviewedAt": "2026-10-12T14:08:45.612Z",
          "setupId": "PLTR-20261012-daily-quant"
        },
        {
          "symbol": "HPE",
          "rank": 3,
          "previousRank": 4,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 1.356,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.244,
            "participation": 0.032,
            "volatility": 2.071,
            "gap": 0.941,
            "correlation": 0.24,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-15T14:08:45.612Z",
          "trigger": "Break above $72.60 with sustained participation.",
          "invalidation": "Loss of $70.19 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.36: 5d momentum 4.4%, 20d 15.0%, annualized 10d realized vol 49%, volume 0.15x, max selected correlation 0.24.",
          "createdAt": "2026-10-12T14:08:45.612Z",
          "lastReviewedAt": "2026-10-12T14:08:45.612Z",
          "setupId": "HPE-20261012-daily-quant"
        },
        {
          "symbol": "NOW",
          "rank": 4,
          "previousRank": 12,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "SELECTED",
          "quantScore": 1.323,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.164,
            "participation": 2.712,
            "volatility": 0.756,
            "gap": 3.695,
            "correlation": 0.325,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-15T14:08:45.612Z",
          "trigger": "Break above $145.26 with sustained participation.",
          "invalidation": "Loss of $142.64 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.32: 5d momentum 5.8%, 20d 8.6%, annualized 10d realized vol 26%, volume 0.38x, max selected correlation 0.32.",
          "createdAt": "2026-10-12T14:08:45.612Z",
          "lastReviewedAt": "2026-10-12T14:08:45.612Z",
          "setupId": "NOW-20261012-daily-quant"
        },
        {
          "symbol": "PANW",
          "rank": 5,
          "previousRank": 5,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.1,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.155,
            "participation": 0.436,
            "volatility": 1.291,
            "gap": 0.687,
            "correlation": 0.563,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-15T14:08:45.612Z",
          "trigger": "Break above $416.57 with sustained participation.",
          "invalidation": "Loss of $405.31 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.10: 5d momentum 1.0%, 20d 24.3%, annualized 10d realized vol 40%, volume 0.18x, max selected correlation 0.56.",
          "createdAt": "2026-10-12T14:08:45.612Z",
          "lastReviewedAt": "2026-10-12T14:08:45.612Z",
          "setupId": "PANW-20261012-daily-quant"
        },
        {
          "symbol": "SNOW",
          "rank": 6,
          "previousRank": 3,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "REJECT",
          "quantScore": 1.094,
          "metrics": {
            "momentum5d": 6.086,
            "momentum20d": 9.31,
            "realizedVol10dAnnualized": 42.95,
            "volumeRatio": 0.175,
            "atrPct": 3.689,
            "gapPct": 0.024,
            "relativeStrength5dPct": 5.682,
            "relativeStrength20dPct": 7.522,
            "avgDollarVolume10d": 1451986157,
            "maxSelectedCorrelation": 0.802
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.238,
            "participation": 0.344,
            "volatility": 1.261,
            "gap": 0.013,
            "correlation": 0.802,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRWD",
          "rank": 7,
          "previousRank": 6,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": 1.005,
          "metrics": {
            "momentum5d": -1.764,
            "momentum20d": 29.564,
            "realizedVol10dAnnualized": 39.34,
            "volumeRatio": 0.194,
            "atrPct": 3.914,
            "gapPct": 0.487,
            "relativeStrength5dPct": -2.168,
            "relativeStrength20dPct": 27.775,
            "avgDollarVolume10d": 1826055065,
            "maxSelectedCorrelation": 0.9
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.979,
            "participation": 0.568,
            "volatility": 1.278,
            "gap": 0.53,
            "correlation": 0.9,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 8,
          "previousRank": 49,
          "rankChange": 41,
          "rankChangeLabel": "+41",
          "status": "WATCH",
          "quantScore": 0.907,
          "metrics": {
            "momentum5d": 5.278,
            "momentum20d": -2.137,
            "realizedVol10dAnnualized": 36.29,
            "volumeRatio": 0.277,
            "atrPct": 3.499,
            "gapPct": 2.294,
            "relativeStrength5dPct": 4.874,
            "relativeStrength20dPct": -3.925,
            "avgDollarVolume10d": 669883015,
            "maxSelectedCorrelation": 0.755
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.622,
            "participation": 1.514,
            "volatility": 0.955,
            "gap": 2.547,
            "correlation": 0.755,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 9,
          "previousRank": 9,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.873,
          "metrics": {
            "momentum5d": -0.959,
            "momentum20d": 13.787,
            "realizedVol10dAnnualized": 42.97,
            "volumeRatio": 0.169,
            "atrPct": 5.024,
            "gapPct": -0.287,
            "relativeStrength5dPct": -1.362,
            "relativeStrength20dPct": 11.998,
            "avgDollarVolume10d": 5392763840,
            "maxSelectedCorrelation": 0.423
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.41,
            "participation": 0.279,
            "volatility": 2.009,
            "gap": 0.334,
            "correlation": 0.423,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSTR",
          "rank": 10,
          "previousRank": 11,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.861,
          "metrics": {
            "momentum5d": -4.181,
            "momentum20d": 20.299,
            "realizedVol10dAnnualized": 47.69,
            "volumeRatio": 0.167,
            "atrPct": 5.174,
            "gapPct": -0.726,
            "relativeStrength5dPct": -4.585,
            "relativeStrength20dPct": 18.51,
            "avgDollarVolume10d": 2852885073,
            "maxSelectedCorrelation": 0.418
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.225,
            "participation": 0.259,
            "volatility": 2.235,
            "gap": 0.824,
            "correlation": 0.418,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 11,
          "previousRank": 7,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "REJECT",
          "quantScore": 0.85,
          "metrics": {
            "momentum5d": 4.614,
            "momentum20d": 1.847,
            "realizedVol10dAnnualized": 30.9,
            "volumeRatio": 0.203,
            "atrPct": 4.206,
            "gapPct": -0.739,
            "relativeStrength5dPct": 4.21,
            "relativeStrength20dPct": 0.059,
            "avgDollarVolume10d": 2777877694,
            "maxSelectedCorrelation": 0.824
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.699,
            "participation": 0.67,
            "volatility": 1.189,
            "gap": 0.839,
            "correlation": 0.824,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 12,
          "previousRank": 32,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": 0.785,
          "metrics": {
            "momentum5d": 0.123,
            "momentum20d": 14.626,
            "realizedVol10dAnnualized": 28.95,
            "volumeRatio": 0.362,
            "atrPct": 2.984,
            "gapPct": 1.294,
            "relativeStrength5dPct": -0.281,
            "relativeStrength20dPct": 12.837,
            "avgDollarVolume10d": 10618995563,
            "maxSelectedCorrelation": 0.641
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.603,
            "participation": 2.484,
            "volatility": 0.446,
            "gap": 1.431,
            "correlation": 0.641,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 13,
          "previousRank": 8,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": 0.735,
          "metrics": {
            "momentum5d": 4.686,
            "momentum20d": 15.273,
            "realizedVol10dAnnualized": 28.72,
            "volumeRatio": 0.102,
            "atrPct": 2.548,
            "gapPct": -0.222,
            "relativeStrength5dPct": 4.283,
            "relativeStrength20dPct": 13.484,
            "avgDollarVolume10d": 705855568,
            "maxSelectedCorrelation": 0.569
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.294,
            "participation": -0.482,
            "volatility": 0.194,
            "gap": 0.261,
            "correlation": 0.569,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 14,
          "previousRank": 76,
          "rankChange": 62,
          "rankChangeLabel": "+62",
          "status": "WATCH",
          "quantScore": 0.713,
          "metrics": {
            "momentum5d": 2.55,
            "momentum20d": -4.872,
            "realizedVol10dAnnualized": 28.62,
            "volumeRatio": 0.4,
            "atrPct": 3.277,
            "gapPct": 3.282,
            "relativeStrength5dPct": 2.146,
            "relativeStrength20dPct": -6.661,
            "avgDollarVolume10d": 1750815358,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.108,
            "participation": 2.916,
            "volatility": 0.6,
            "gap": 3.65,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 15,
          "previousRank": 10,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": 0.667,
          "metrics": {
            "momentum5d": 2.181,
            "momentum20d": 5.999,
            "realizedVol10dAnnualized": 36.53,
            "volumeRatio": 0.087,
            "atrPct": 3.817,
            "gapPct": -1.817,
            "relativeStrength5dPct": 1.777,
            "relativeStrength20dPct": 4.21,
            "avgDollarVolume10d": 290979084,
            "maxSelectedCorrelation": 0.767
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.527,
            "participation": -0.663,
            "volatility": 1.14,
            "gap": 2.042,
            "correlation": 0.767,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 16,
          "previousRank": 13,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.511,
          "metrics": {
            "momentum5d": -2.797,
            "momentum20d": 4.391,
            "realizedVol10dAnnualized": 43.99,
            "volumeRatio": 0.145,
            "atrPct": 5.214,
            "gapPct": -0.217,
            "relativeStrength5dPct": -3.201,
            "relativeStrength20dPct": 2.602,
            "avgDollarVolume10d": 1430926343,
            "maxSelectedCorrelation": 0.706
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.266,
            "participation": 0.004,
            "volatility": 2.146,
            "gap": 0.256,
            "correlation": 0.706,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 17,
          "previousRank": 21,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.445,
          "metrics": {
            "momentum5d": 6.524,
            "momentum20d": 4.456,
            "realizedVol10dAnnualized": 22.92,
            "volumeRatio": 0.089,
            "atrPct": 1.929,
            "gapPct": 0.135,
            "relativeStrength5dPct": 6.12,
            "relativeStrength20dPct": 2.668,
            "avgDollarVolume10d": 2198068206,
            "maxSelectedCorrelation": 0.43
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.09,
            "participation": -0.634,
            "volatility": -0.327,
            "gap": 0.137,
            "correlation": 0.43,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 18,
          "previousRank": 34,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.434,
          "metrics": {
            "momentum5d": 4.656,
            "momentum20d": -0.708,
            "realizedVol10dAnnualized": 29.05,
            "volumeRatio": 0.122,
            "atrPct": 2.541,
            "gapPct": 1.314,
            "relativeStrength5dPct": 4.252,
            "relativeStrength20dPct": -2.496,
            "avgDollarVolume10d": 493259137,
            "maxSelectedCorrelation": 0.557
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.594,
            "participation": -0.258,
            "volatility": 0.2,
            "gap": 1.453,
            "correlation": 0.557,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 19,
          "previousRank": 22,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.409,
          "metrics": {
            "momentum5d": 3.632,
            "momentum20d": 6.179,
            "realizedVol10dAnnualized": 21.6,
            "volumeRatio": 0.086,
            "atrPct": 2.928,
            "gapPct": 0.167,
            "relativeStrength5dPct": 3.228,
            "relativeStrength20dPct": 4.391,
            "avgDollarVolume10d": 2413218932,
            "maxSelectedCorrelation": 0.414
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.745,
            "participation": -0.674,
            "volatility": 0.193,
            "gap": 0.173,
            "correlation": 0.414,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 20,
          "previousRank": 52,
          "rankChange": 32,
          "rankChangeLabel": "+32",
          "status": "WATCH",
          "quantScore": 0.364,
          "metrics": {
            "momentum5d": 4.214,
            "momentum20d": 0.519,
            "realizedVol10dAnnualized": 19.36,
            "volumeRatio": 0.239,
            "atrPct": 1.919,
            "gapPct": 1.208,
            "relativeStrength5dPct": 3.81,
            "relativeStrength20dPct": -1.27,
            "avgDollarVolume10d": 1249179258,
            "maxSelectedCorrelation": 0.485
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.583,
            "participation": 1.083,
            "volatility": -0.439,
            "gap": 1.334,
            "correlation": 0.485,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 21,
          "previousRank": 37,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.347,
          "metrics": {
            "momentum5d": 6.067,
            "momentum20d": -0.845,
            "realizedVol10dAnnualized": 17.8,
            "volumeRatio": 0.075,
            "atrPct": 2.26,
            "gapPct": 1.424,
            "relativeStrength5dPct": 5.663,
            "relativeStrength20dPct": -2.633,
            "avgDollarVolume10d": 707593380,
            "maxSelectedCorrelation": 0.559
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.793,
            "participation": -0.796,
            "volatility": -0.295,
            "gap": 1.576,
            "correlation": 0.559,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 22,
          "previousRank": 24,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.345,
          "metrics": {
            "momentum5d": 4.914,
            "momentum20d": 8.44,
            "realizedVol10dAnnualized": 14.79,
            "volumeRatio": 0.065,
            "atrPct": 2.032,
            "gapPct": 0.427,
            "relativeStrength5dPct": 4.51,
            "relativeStrength20dPct": 6.651,
            "avgDollarVolume10d": 1294135006,
            "maxSelectedCorrelation": 0.318
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.03,
            "participation": -0.909,
            "volatility": -0.513,
            "gap": 0.463,
            "correlation": 0.318,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 23,
          "previousRank": 55,
          "rankChange": 32,
          "rankChangeLabel": "+32",
          "status": "WATCH",
          "quantScore": 0.331,
          "metrics": {
            "momentum5d": 4.773,
            "momentum20d": 3.517,
            "realizedVol10dAnnualized": 15.1,
            "volumeRatio": 0.142,
            "atrPct": 1.913,
            "gapPct": 1.225,
            "relativeStrength5dPct": 4.369,
            "relativeStrength20dPct": 1.728,
            "avgDollarVolume10d": 1707889826,
            "maxSelectedCorrelation": 0.507
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.795,
            "participation": -0.029,
            "volatility": -0.571,
            "gap": 1.354,
            "correlation": 0.507,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 24,
          "previousRank": 26,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.33,
          "metrics": {
            "momentum5d": 2.678,
            "momentum20d": 8.8,
            "realizedVol10dAnnualized": 15.08,
            "volumeRatio": 0.16,
            "atrPct": 2.255,
            "gapPct": 0.561,
            "relativeStrength5dPct": 2.274,
            "relativeStrength20dPct": 7.011,
            "avgDollarVolume10d": 10387545904,
            "maxSelectedCorrelation": 0.723
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.721,
            "participation": 0.172,
            "volatility": -0.379,
            "gap": 0.612,
            "correlation": 0.723,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 25,
          "previousRank": 35,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": 0.319,
          "metrics": {
            "momentum5d": -0.377,
            "momentum20d": -5.685,
            "realizedVol10dAnnualized": 28.57,
            "volumeRatio": 0.307,
            "atrPct": 3.161,
            "gapPct": -3.001,
            "relativeStrength5dPct": -0.781,
            "relativeStrength20dPct": -7.474,
            "avgDollarVolume10d": 952811132,
            "maxSelectedCorrelation": 0.404
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.353,
            "participation": 1.852,
            "volatility": 0.533,
            "gap": 3.363,
            "correlation": 0.404,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 26,
          "previousRank": 20,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.318,
          "metrics": {
            "momentum5d": 5.004,
            "momentum20d": 4.155,
            "realizedVol10dAnnualized": 20.38,
            "volumeRatio": 0.126,
            "atrPct": 1.659,
            "gapPct": 0.631,
            "relativeStrength5dPct": 4.6,
            "relativeStrength20dPct": 2.367,
            "avgDollarVolume10d": 1539190893,
            "maxSelectedCorrelation": 0.587
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.856,
            "participation": -0.215,
            "volatility": -0.554,
            "gap": 0.691,
            "correlation": 0.587,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 27,
          "previousRank": 41,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": 0.315,
          "metrics": {
            "momentum5d": 4.343,
            "momentum20d": 1.16,
            "realizedVol10dAnnualized": 26.29,
            "volumeRatio": 0.111,
            "atrPct": 2.346,
            "gapPct": 0.103,
            "relativeStrength5dPct": 3.939,
            "relativeStrength20dPct": -0.628,
            "avgDollarVolume10d": 1142346300,
            "maxSelectedCorrelation": 0.458
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.63,
            "participation": -0.388,
            "volatility": 0.008,
            "gap": 0.101,
            "correlation": 0.458,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 28,
          "previousRank": 17,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.309,
          "metrics": {
            "momentum5d": 5.054,
            "momentum20d": 4.844,
            "realizedVol10dAnnualized": 19.96,
            "volumeRatio": 0.135,
            "atrPct": 1.623,
            "gapPct": 0.086,
            "relativeStrength5dPct": 4.65,
            "relativeStrength20dPct": 3.056,
            "avgDollarVolume10d": 1851765354,
            "maxSelectedCorrelation": 0.637
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.894,
            "participation": -0.106,
            "volatility": -0.587,
            "gap": 0.082,
            "correlation": 0.637,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 29,
          "previousRank": 19,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.277,
          "metrics": {
            "momentum5d": -6.946,
            "momentum20d": 0.224,
            "realizedVol10dAnnualized": 45.26,
            "volumeRatio": 0.186,
            "atrPct": 5.659,
            "gapPct": -1.362,
            "relativeStrength5dPct": -7.35,
            "relativeStrength20dPct": -1.564,
            "avgDollarVolume10d": 1168040001,
            "maxSelectedCorrelation": 0.735
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.049,
            "participation": 0.472,
            "volatility": 2.434,
            "gap": 1.534,
            "correlation": 0.735,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 30,
          "previousRank": 48,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": 0.254,
          "metrics": {
            "momentum5d": 4.043,
            "momentum20d": 1.343,
            "realizedVol10dAnnualized": 18.34,
            "volumeRatio": 0.15,
            "atrPct": 1.894,
            "gapPct": 1.183,
            "relativeStrength5dPct": 3.639,
            "relativeStrength20dPct": -0.445,
            "avgDollarVolume10d": 1945178313,
            "maxSelectedCorrelation": 0.475
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.594,
            "participation": 0.065,
            "volatility": -0.484,
            "gap": 1.307,
            "correlation": 0.475,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 31,
          "previousRank": 29,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.249,
          "metrics": {
            "momentum5d": -6.141,
            "momentum20d": 14.885,
            "realizedVol10dAnnualized": 32.86,
            "volumeRatio": 0.181,
            "atrPct": 3.722,
            "gapPct": -1.355,
            "relativeStrength5dPct": -6.545,
            "relativeStrength20dPct": 13.096,
            "avgDollarVolume10d": 9923725229,
            "maxSelectedCorrelation": 0.662
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.295,
            "participation": 0.414,
            "volatility": 0.976,
            "gap": 1.526,
            "correlation": 0.662,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 32,
          "previousRank": 23,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": 0.219,
          "metrics": {
            "momentum5d": 3.699,
            "momentum20d": 1.527,
            "realizedVol10dAnnualized": 23.37,
            "volumeRatio": 0.126,
            "atrPct": 2.103,
            "gapPct": 0.044,
            "relativeStrength5dPct": 3.295,
            "relativeStrength20dPct": -0.262,
            "avgDollarVolume10d": 8600505473,
            "maxSelectedCorrelation": 0.684
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.553,
            "participation": -0.217,
            "volatility": -0.216,
            "gap": 0.035,
            "correlation": 0.684,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 33,
          "previousRank": 43,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": 0.189,
          "metrics": {
            "momentum5d": 2.875,
            "momentum20d": 3.067,
            "realizedVol10dAnnualized": 20.22,
            "volumeRatio": 0.164,
            "atrPct": 1.873,
            "gapPct": 0.452,
            "relativeStrength5dPct": 2.471,
            "relativeStrength20dPct": 1.278,
            "avgDollarVolume10d": 11502280341,
            "maxSelectedCorrelation": 0.356
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.5,
            "participation": 0.217,
            "volatility": -0.439,
            "gap": 0.49,
            "correlation": 0.356,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 34,
          "previousRank": 39,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": 0.186,
          "metrics": {
            "momentum5d": 5.059,
            "momentum20d": -8.379,
            "realizedVol10dAnnualized": 26.15,
            "volumeRatio": 0.122,
            "atrPct": 2.072,
            "gapPct": 1.465,
            "relativeStrength5dPct": 4.655,
            "relativeStrength20dPct": -10.167,
            "avgDollarVolume10d": 2361772763,
            "maxSelectedCorrelation": 0.52
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.319,
            "participation": -0.255,
            "volatility": -0.149,
            "gap": 1.622,
            "correlation": 0.52,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 35,
          "previousRank": 60,
          "rankChange": 25,
          "rankChangeLabel": "+25",
          "status": "WATCH",
          "quantScore": 0.185,
          "metrics": {
            "momentum5d": 3.883,
            "momentum20d": -1.066,
            "realizedVol10dAnnualized": 21.03,
            "volumeRatio": 0.184,
            "atrPct": 1.903,
            "gapPct": 0.061,
            "relativeStrength5dPct": 3.479,
            "relativeStrength20dPct": -2.854,
            "avgDollarVolume10d": 1718279033,
            "maxSelectedCorrelation": 0.482
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.466,
            "participation": 0.454,
            "volatility": -0.398,
            "gap": 0.055,
            "correlation": 0.482,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 36,
          "previousRank": 14,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": 0.185,
          "metrics": {
            "momentum5d": 0.247,
            "momentum20d": 3.893,
            "realizedVol10dAnnualized": 27.9,
            "volumeRatio": 0.142,
            "atrPct": 2.841,
            "gapPct": -0.025,
            "relativeStrength5dPct": -0.157,
            "relativeStrength20dPct": 2.104,
            "avgDollarVolume10d": 12363002971,
            "maxSelectedCorrelation": 0.693
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.154,
            "participation": -0.027,
            "volatility": 0.334,
            "gap": 0.042,
            "correlation": 0.693,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 37,
          "previousRank": 15,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "REJECT",
          "quantScore": 0.182,
          "metrics": {
            "momentum5d": 2.149,
            "momentum20d": 2.778,
            "realizedVol10dAnnualized": 34.51,
            "volumeRatio": 0.079,
            "atrPct": 2.115,
            "gapPct": -0.152,
            "relativeStrength5dPct": 1.745,
            "relativeStrength20dPct": 0.989,
            "avgDollarVolume10d": 1630928298,
            "maxSelectedCorrelation": 0.804
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.382,
            "participation": -0.748,
            "volatility": 0.126,
            "gap": 0.184,
            "correlation": 0.804,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 38,
          "previousRank": 45,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.175,
          "metrics": {
            "momentum5d": -0.139,
            "momentum20d": -3.73,
            "realizedVol10dAnnualized": 21.12,
            "volumeRatio": 0.287,
            "atrPct": 3.182,
            "gapPct": 0.811,
            "relativeStrength5dPct": -0.543,
            "relativeStrength20dPct": -5.518,
            "avgDollarVolume10d": 553036936,
            "maxSelectedCorrelation": 0.245
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.233,
            "participation": 1.625,
            "volatility": 0.321,
            "gap": 0.891,
            "correlation": 0.245,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 39,
          "previousRank": 59,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": 0.168,
          "metrics": {
            "momentum5d": 3.667,
            "momentum20d": 2.507,
            "realizedVol10dAnnualized": 17.68,
            "volumeRatio": 0.117,
            "atrPct": 1.889,
            "gapPct": 0.495,
            "relativeStrength5dPct": 3.263,
            "relativeStrength20dPct": 0.719,
            "avgDollarVolume10d": 829741077,
            "maxSelectedCorrelation": 0.43
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.591,
            "participation": -0.314,
            "volatility": -0.506,
            "gap": 0.539,
            "correlation": 0.43,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 40,
          "previousRank": 28,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "WATCH",
          "quantScore": 0.167,
          "metrics": {
            "momentum5d": 4.363,
            "momentum20d": 1.483,
            "realizedVol10dAnnualized": 22.53,
            "volumeRatio": 0.083,
            "atrPct": 1.776,
            "gapPct": -0.139,
            "relativeStrength5dPct": 3.959,
            "relativeStrength20dPct": -0.306,
            "avgDollarVolume10d": 851738129,
            "maxSelectedCorrelation": 0.387
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.647,
            "participation": -0.702,
            "volatility": -0.424,
            "gap": 0.169,
            "correlation": 0.387,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 41,
          "previousRank": 42,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.162,
          "metrics": {
            "momentum5d": -7.834,
            "momentum20d": 0.549,
            "realizedVol10dAnnualized": 43.73,
            "volumeRatio": 0.284,
            "atrPct": 4.362,
            "gapPct": -2.584,
            "relativeStrength5dPct": -8.238,
            "relativeStrength20dPct": -1.24,
            "avgDollarVolume10d": 24653839635,
            "maxSelectedCorrelation": 0.226
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.164,
            "participation": 1.589,
            "volatility": 1.662,
            "gap": 2.898,
            "correlation": 0.226,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 42,
          "previousRank": 18,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "WATCH",
          "quantScore": 0.155,
          "metrics": {
            "momentum5d": 2.717,
            "momentum20d": -3.749,
            "realizedVol10dAnnualized": 33.46,
            "volumeRatio": 0.077,
            "atrPct": 2.705,
            "gapPct": -0.097,
            "relativeStrength5dPct": 2.313,
            "relativeStrength20dPct": -5.538,
            "avgDollarVolume10d": 523582531,
            "maxSelectedCorrelation": 0.384
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.181,
            "participation": -0.777,
            "volatility": 0.425,
            "gap": 0.122,
            "correlation": 0.384,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 43,
          "previousRank": 44,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.138,
          "metrics": {
            "momentum5d": 1.994,
            "momentum20d": 4.396,
            "realizedVol10dAnnualized": 14.71,
            "volumeRatio": 0.156,
            "atrPct": 2.268,
            "gapPct": 0.08,
            "relativeStrength5dPct": 1.59,
            "relativeStrength20dPct": 2.607,
            "avgDollarVolume10d": 7944697256,
            "maxSelectedCorrelation": 0.514
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.43,
            "participation": 0.131,
            "volatility": -0.383,
            "gap": 0.075,
            "correlation": 0.514,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 44,
          "previousRank": 16,
          "rankChange": -28,
          "rankChangeLabel": "-28",
          "status": "WATCH",
          "quantScore": 0.116,
          "metrics": {
            "momentum5d": 2.077,
            "momentum20d": 3.388,
            "realizedVol10dAnnualized": 21.46,
            "volumeRatio": 0.079,
            "atrPct": 2.393,
            "gapPct": 0.108,
            "relativeStrength5dPct": 1.673,
            "relativeStrength20dPct": 1.599,
            "avgDollarVolume10d": 500941222,
            "maxSelectedCorrelation": 0.593
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.398,
            "participation": -0.746,
            "volatility": -0.111,
            "gap": 0.107,
            "correlation": 0.593,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 45,
          "previousRank": 50,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": 0.089,
          "metrics": {
            "momentum5d": 2.577,
            "momentum20d": -5.34,
            "realizedVol10dAnnualized": 23.2,
            "volumeRatio": 0.072,
            "atrPct": 3.209,
            "gapPct": -0.029,
            "relativeStrength5dPct": 2.173,
            "relativeStrength20dPct": -7.128,
            "avgDollarVolume10d": 1930064946,
            "maxSelectedCorrelation": 0.583
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.091,
            "participation": -0.825,
            "volatility": 0.399,
            "gap": 0.046,
            "correlation": 0.583,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 46,
          "previousRank": 46,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.079,
          "metrics": {
            "momentum5d": 3.487,
            "momentum20d": -5.619,
            "realizedVol10dAnnualized": 27.53,
            "volumeRatio": 0.07,
            "atrPct": 2.366,
            "gapPct": -0.543,
            "relativeStrength5dPct": 3.084,
            "relativeStrength20dPct": -7.408,
            "avgDollarVolume10d": 530822615,
            "maxSelectedCorrelation": 0.329
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.211,
            "participation": -0.855,
            "volatility": 0.057,
            "gap": 0.62,
            "correlation": 0.329,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 47,
          "previousRank": 58,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": 0.068,
          "metrics": {
            "momentum5d": 2.515,
            "momentum20d": 3.761,
            "realizedVol10dAnnualized": 14.28,
            "volumeRatio": 0.169,
            "atrPct": 1.52,
            "gapPct": 0.398,
            "relativeStrength5dPct": 2.111,
            "relativeStrength20dPct": 1.973,
            "avgDollarVolume10d": 1396442073,
            "maxSelectedCorrelation": 0.607
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.478,
            "participation": 0.277,
            "volatility": -0.815,
            "gap": 0.431,
            "correlation": 0.607,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 48,
          "previousRank": 33,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": 0.066,
          "metrics": {
            "momentum5d": -3.207,
            "momentum20d": -8.231,
            "realizedVol10dAnnualized": 45.02,
            "volumeRatio": 0.173,
            "atrPct": 4.357,
            "gapPct": 0.113,
            "relativeStrength5dPct": -3.611,
            "relativeStrength20dPct": -10.02,
            "avgDollarVolume10d": 3514882861,
            "maxSelectedCorrelation": 0.599
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.874,
            "participation": 0.323,
            "volatility": 1.697,
            "gap": 0.113,
            "correlation": 0.599,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 49,
          "previousRank": 25,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "WATCH",
          "quantScore": 0.04,
          "metrics": {
            "momentum5d": 1.101,
            "momentum20d": -1.988,
            "realizedVol10dAnnualized": 24.09,
            "volumeRatio": 0.182,
            "atrPct": 2.19,
            "gapPct": -0.489,
            "relativeStrength5dPct": 0.697,
            "relativeStrength20dPct": -3.777,
            "avgDollarVolume10d": 994798391,
            "maxSelectedCorrelation": 0.404
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.023,
            "participation": 0.428,
            "volatility": -0.145,
            "gap": 0.56,
            "correlation": 0.404,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 50,
          "previousRank": 31,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.001,
          "metrics": {
            "momentum5d": -2.785,
            "momentum20d": 7.887,
            "realizedVol10dAnnualized": 29.66,
            "volumeRatio": 0.071,
            "atrPct": 2.965,
            "gapPct": -0.12,
            "relativeStrength5dPct": -3.189,
            "relativeStrength20dPct": 6.098,
            "avgDollarVolume10d": 1265565252,
            "maxSelectedCorrelation": 0.622
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.112,
            "participation": -0.84,
            "volatility": 0.456,
            "gap": 0.148,
            "correlation": 0.622,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 51,
          "previousRank": 114,
          "rankChange": 63,
          "rankChangeLabel": "+63",
          "status": "WATCH",
          "quantScore": -0.006,
          "metrics": {
            "momentum5d": -0.475,
            "momentum20d": -4.291,
            "realizedVol10dAnnualized": 21.64,
            "volumeRatio": 0.52,
            "atrPct": 0.991,
            "gapPct": 0,
            "relativeStrength5dPct": -0.879,
            "relativeStrength20dPct": -6.08,
            "avgDollarVolume10d": 344847062,
            "maxSelectedCorrelation": 0.599
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.306,
            "participation": 4.29,
            "volatility": -0.89,
            "gap": 0.014,
            "correlation": 0.599,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 52,
          "previousRank": 36,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.008,
          "metrics": {
            "momentum5d": -1.541,
            "momentum20d": -1.399,
            "realizedVol10dAnnualized": 38.05,
            "volumeRatio": 0.106,
            "atrPct": 2.84,
            "gapPct": -0.508,
            "relativeStrength5dPct": -1.945,
            "relativeStrength20dPct": -3.188,
            "avgDollarVolume10d": 7313902403,
            "maxSelectedCorrelation": 0.587
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.335,
            "participation": -0.443,
            "volatility": 0.638,
            "gap": 0.58,
            "correlation": 0.587,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 53,
          "previousRank": 57,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.022,
          "metrics": {
            "momentum5d": 2.771,
            "momentum20d": 4.901,
            "realizedVol10dAnnualized": 11.23,
            "volumeRatio": 0.062,
            "atrPct": 1.624,
            "gapPct": 0.304,
            "relativeStrength5dPct": 2.367,
            "relativeStrength20dPct": 3.113,
            "avgDollarVolume10d": 1736402078,
            "maxSelectedCorrelation": 0.373
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.565,
            "participation": -0.947,
            "volatility": -0.849,
            "gap": 0.326,
            "correlation": 0.373,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 54,
          "previousRank": 51,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.024,
          "metrics": {
            "momentum5d": 3.421,
            "momentum20d": -5.821,
            "realizedVol10dAnnualized": 22.93,
            "volumeRatio": 0.069,
            "atrPct": 2.103,
            "gapPct": -0.426,
            "relativeStrength5dPct": 3.017,
            "relativeStrength20dPct": -7.61,
            "avgDollarVolume10d": 1545525348,
            "maxSelectedCorrelation": 0.38
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.193,
            "participation": -0.863,
            "volatility": -0.229,
            "gap": 0.49,
            "correlation": 0.38,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 55,
          "previousRank": 62,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.043,
          "metrics": {
            "momentum5d": -4.246,
            "momentum20d": -2.936,
            "realizedVol10dAnnualized": 26.82,
            "volumeRatio": 0.171,
            "atrPct": 4.318,
            "gapPct": -0.433,
            "relativeStrength5dPct": -4.65,
            "relativeStrength20dPct": -4.725,
            "avgDollarVolume10d": 2114914524,
            "maxSelectedCorrelation": 0.733
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.795,
            "participation": 0.307,
            "volatility": 1.129,
            "gap": 0.498,
            "correlation": 0.733,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 56,
          "previousRank": 116,
          "rankChange": 60,
          "rankChangeLabel": "+60",
          "status": "WATCH",
          "quantScore": -0.053,
          "metrics": {
            "momentum5d": -1.379,
            "momentum20d": -8.585,
            "realizedVol10dAnnualized": 31.61,
            "volumeRatio": 0.512,
            "atrPct": 1.275,
            "gapPct": 0,
            "relativeStrength5dPct": -1.783,
            "relativeStrength20dPct": -10.373,
            "avgDollarVolume10d": 193420964,
            "maxSelectedCorrelation": 0.557
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.624,
            "participation": 4.192,
            "volatility": -0.432,
            "gap": 0.014,
            "correlation": 0.557,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 57,
          "previousRank": 68,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.058,
          "metrics": {
            "momentum5d": 3.765,
            "momentum20d": -2.159,
            "realizedVol10dAnnualized": 15.04,
            "volumeRatio": 0.107,
            "atrPct": 1.494,
            "gapPct": 0.121,
            "relativeStrength5dPct": 3.361,
            "relativeStrength20dPct": -3.947,
            "avgDollarVolume10d": 1720991628,
            "maxSelectedCorrelation": 0.395
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.402,
            "participation": -0.429,
            "volatility": -0.807,
            "gap": 0.121,
            "correlation": 0.395,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 58,
          "previousRank": 63,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.072,
          "metrics": {
            "momentum5d": 3.43,
            "momentum20d": 0.528,
            "realizedVol10dAnnualized": 14.52,
            "volumeRatio": 0.117,
            "atrPct": 1.128,
            "gapPct": 0.18,
            "relativeStrength5dPct": 3.026,
            "relativeStrength20dPct": -1.261,
            "avgDollarVolume10d": 859695032,
            "maxSelectedCorrelation": 0.315
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.47,
            "participation": -0.318,
            "volatility": -1.027,
            "gap": 0.187,
            "correlation": 0.315,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 59,
          "previousRank": 40,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.077,
          "metrics": {
            "momentum5d": -0.164,
            "momentum20d": -0.298,
            "realizedVol10dAnnualized": 21.98,
            "volumeRatio": 0.109,
            "atrPct": 2.315,
            "gapPct": 0.97,
            "relativeStrength5dPct": -0.568,
            "relativeStrength20dPct": -2.087,
            "avgDollarVolume10d": 1785810464,
            "maxSelectedCorrelation": 0.652
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.087,
            "participation": -0.406,
            "volatility": -0.138,
            "gap": 1.069,
            "correlation": 0.652,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 60,
          "previousRank": 56,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.097,
          "metrics": {
            "momentum5d": -7.892,
            "momentum20d": 5.472,
            "realizedVol10dAnnualized": 39.46,
            "volumeRatio": 0.161,
            "atrPct": 3.718,
            "gapPct": -1.048,
            "relativeStrength5dPct": -8.296,
            "relativeStrength20dPct": 3.684,
            "avgDollarVolume10d": 1375752154,
            "maxSelectedCorrelation": 0.506
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.958,
            "participation": 0.191,
            "volatility": 1.172,
            "gap": 1.184,
            "correlation": 0.506,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 61,
          "previousRank": 27,
          "rankChange": -34,
          "rankChangeLabel": "-34",
          "status": "WATCH",
          "quantScore": -0.102,
          "metrics": {
            "momentum5d": 2.998,
            "momentum20d": -7.098,
            "realizedVol10dAnnualized": 17,
            "volumeRatio": 0.114,
            "atrPct": 2.01,
            "gapPct": 0.527,
            "relativeStrength5dPct": 2.594,
            "relativeStrength20dPct": -8.886,
            "avgDollarVolume10d": 1154721473,
            "maxSelectedCorrelation": 0.545
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.076,
            "participation": -0.346,
            "volatility": -0.459,
            "gap": 0.574,
            "correlation": 0.545,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 62,
          "previousRank": 61,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.114,
          "metrics": {
            "momentum5d": 2.266,
            "momentum20d": -6.86,
            "realizedVol10dAnnualized": 20.03,
            "volumeRatio": 0.069,
            "atrPct": 2.403,
            "gapPct": 0.52,
            "relativeStrength5dPct": 1.862,
            "relativeStrength20dPct": -8.649,
            "avgDollarVolume10d": 1172294148,
            "maxSelectedCorrelation": 0.543
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.02,
            "participation": -0.866,
            "volatility": -0.148,
            "gap": 0.566,
            "correlation": 0.543,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 63,
          "previousRank": 79,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.119,
          "metrics": {
            "momentum5d": 2.287,
            "momentum20d": -4.192,
            "realizedVol10dAnnualized": 14.46,
            "volumeRatio": 0.233,
            "atrPct": 1.327,
            "gapPct": 0,
            "relativeStrength5dPct": 1.883,
            "relativeStrength20dPct": -5.98,
            "avgDollarVolume10d": 303316430,
            "maxSelectedCorrelation": 0.614
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.099,
            "participation": 1.008,
            "volatility": -0.918,
            "gap": 0.014,
            "correlation": 0.614,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 64,
          "previousRank": 91,
          "rankChange": 27,
          "rankChangeLabel": "+27",
          "status": "WATCH",
          "quantScore": -0.133,
          "metrics": {
            "momentum5d": 1.335,
            "momentum20d": -4.088,
            "realizedVol10dAnnualized": 16.32,
            "volumeRatio": 0.109,
            "atrPct": 2.38,
            "gapPct": -0.136,
            "relativeStrength5dPct": 0.931,
            "relativeStrength20dPct": -5.876,
            "avgDollarVolume10d": 1185308105,
            "maxSelectedCorrelation": 0.436
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.035,
            "participation": -0.402,
            "volatility": -0.272,
            "gap": 0.166,
            "correlation": 0.436,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 65,
          "previousRank": 78,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.165,
          "metrics": {
            "momentum5d": -0.873,
            "momentum20d": -2.679,
            "realizedVol10dAnnualized": 21.32,
            "volumeRatio": 0.159,
            "atrPct": 2.412,
            "gapPct": -0.182,
            "relativeStrength5dPct": -1.277,
            "relativeStrength20dPct": -4.468,
            "avgDollarVolume10d": 591494168,
            "maxSelectedCorrelation": 0.617
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.294,
            "participation": 0.165,
            "volatility": -0.104,
            "gap": 0.217,
            "correlation": 0.617,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 66,
          "previousRank": 64,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.173,
          "metrics": {
            "momentum5d": -8.872,
            "momentum20d": 8.254,
            "realizedVol10dAnnualized": 39.71,
            "volumeRatio": 0.15,
            "atrPct": 3.352,
            "gapPct": -1.185,
            "relativeStrength5dPct": -9.276,
            "relativeStrength20dPct": 6.466,
            "avgDollarVolume10d": 2455365744,
            "maxSelectedCorrelation": 0.351
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.98,
            "participation": 0.063,
            "volatility": 0.974,
            "gap": 1.337,
            "correlation": 0.351,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 67,
          "previousRank": 80,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.178,
          "metrics": {
            "momentum5d": 1.602,
            "momentum20d": -6.789,
            "realizedVol10dAnnualized": 27.15,
            "volumeRatio": 0.05,
            "atrPct": 2.111,
            "gapPct": 0.41,
            "relativeStrength5dPct": 1.198,
            "relativeStrength20dPct": -8.578,
            "avgDollarVolume10d": 511264827,
            "maxSelectedCorrelation": 0.455
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.114,
            "participation": -1.079,
            "volatility": -0.098,
            "gap": 0.444,
            "correlation": 0.455,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 68,
          "previousRank": 83,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.189,
          "metrics": {
            "momentum5d": 1.369,
            "momentum20d": -6.13,
            "realizedVol10dAnnualized": 15.19,
            "volumeRatio": 0.157,
            "atrPct": 2.014,
            "gapPct": 0.285,
            "relativeStrength5dPct": 0.965,
            "relativeStrength20dPct": -7.919,
            "avgDollarVolume10d": 1025670551,
            "maxSelectedCorrelation": 0.463
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.119,
            "participation": 0.139,
            "volatility": -0.511,
            "gap": 0.305,
            "correlation": 0.463,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 69,
          "previousRank": 81,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": -0.193,
          "metrics": {
            "momentum5d": 3.085,
            "momentum20d": -0.912,
            "realizedVol10dAnnualized": 11.37,
            "volumeRatio": 0.056,
            "atrPct": 1.399,
            "gapPct": 0.058,
            "relativeStrength5dPct": 2.681,
            "relativeStrength20dPct": -2.701,
            "avgDollarVolume10d": 528408806,
            "maxSelectedCorrelation": 0.205
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.357,
            "participation": -1.007,
            "volatility": -0.97,
            "gap": 0.051,
            "correlation": 0.205,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 70,
          "previousRank": 75,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.195,
          "metrics": {
            "momentum5d": 1.198,
            "momentum20d": -2.192,
            "realizedVol10dAnnualized": 16.4,
            "volumeRatio": 0.091,
            "atrPct": 1.756,
            "gapPct": 0.679,
            "relativeStrength5dPct": 0.794,
            "relativeStrength20dPct": -3.981,
            "avgDollarVolume10d": 488096051,
            "maxSelectedCorrelation": 0.298
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.028,
            "participation": -0.614,
            "volatility": -0.619,
            "gap": 0.744,
            "correlation": 0.298,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 71,
          "previousRank": 38,
          "rankChange": -33,
          "rankChangeLabel": "-33",
          "status": "WATCH",
          "quantScore": -0.203,
          "metrics": {
            "momentum5d": -4.15,
            "momentum20d": 6.401,
            "realizedVol10dAnnualized": 28.31,
            "volumeRatio": 0.071,
            "atrPct": 2.651,
            "gapPct": -0.262,
            "relativeStrength5dPct": -4.554,
            "relativeStrength20dPct": 4.612,
            "avgDollarVolume10d": 375785206,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.375,
            "participation": -0.844,
            "volatility": 0.24,
            "gap": 0.307,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 72,
          "previousRank": 30,
          "rankChange": -42,
          "rankChangeLabel": "-42",
          "status": "WATCH",
          "quantScore": -0.204,
          "metrics": {
            "momentum5d": 0.65,
            "momentum20d": -1.218,
            "realizedVol10dAnnualized": 20.5,
            "volumeRatio": 0.13,
            "atrPct": 1.41,
            "gapPct": -0.438,
            "relativeStrength5dPct": 0.246,
            "relativeStrength20dPct": -3.007,
            "avgDollarVolume10d": 599876333,
            "maxSelectedCorrelation": 0.618
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.009,
            "participation": -0.166,
            "volatility": -0.69,
            "gap": 0.503,
            "correlation": 0.618,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 73,
          "previousRank": 53,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.218,
          "metrics": {
            "momentum5d": -15.474,
            "momentum20d": -3.308,
            "realizedVol10dAnnualized": 52.87,
            "volumeRatio": 0.179,
            "atrPct": 6.654,
            "gapPct": -2.114,
            "relativeStrength5dPct": -15.878,
            "relativeStrength20dPct": -5.097,
            "avgDollarVolume10d": 1030950466,
            "maxSelectedCorrelation": 0.573
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.441,
            "participation": 0.396,
            "volatility": 3.22,
            "gap": 2.374,
            "correlation": 0.573,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 74,
          "previousRank": 82,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.248,
          "metrics": {
            "momentum5d": -7.584,
            "momentum20d": 3.364,
            "realizedVol10dAnnualized": 26.12,
            "volumeRatio": 0.302,
            "atrPct": 2.683,
            "gapPct": -1.204,
            "relativeStrength5dPct": -7.988,
            "relativeStrength20dPct": 1.575,
            "avgDollarVolume10d": 2906150873,
            "maxSelectedCorrelation": 0.539
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.005,
            "participation": 1.796,
            "volatility": 0.192,
            "gap": 1.358,
            "correlation": 0.539,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 75,
          "previousRank": 47,
          "rankChange": -28,
          "rankChangeLabel": "-28",
          "status": "WATCH",
          "quantScore": -0.249,
          "metrics": {
            "momentum5d": -0.726,
            "momentum20d": -5.833,
            "realizedVol10dAnnualized": 23.15,
            "volumeRatio": 0.107,
            "atrPct": 2.579,
            "gapPct": -0.11,
            "relativeStrength5dPct": -1.13,
            "relativeStrength20dPct": -7.621,
            "avgDollarVolume10d": 735636071,
            "maxSelectedCorrelation": 0.568
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.41,
            "participation": -0.434,
            "volatility": 0.044,
            "gap": 0.136,
            "correlation": 0.568,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 76,
          "previousRank": 66,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.263,
          "metrics": {
            "momentum5d": 1.703,
            "momentum20d": -0.584,
            "realizedVol10dAnnualized": 9.34,
            "volumeRatio": 0.131,
            "atrPct": 1.165,
            "gapPct": -0.124,
            "relativeStrength5dPct": 1.299,
            "relativeStrength20dPct": -2.373,
            "avgDollarVolume10d": 704987885,
            "maxSelectedCorrelation": 0.715
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.171,
            "participation": -0.158,
            "volatility": -1.162,
            "gap": 0.152,
            "correlation": 0.715,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 77,
          "previousRank": 69,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.271,
          "metrics": {
            "momentum5d": -0.791,
            "momentum20d": -9.149,
            "realizedVol10dAnnualized": 22.17,
            "volumeRatio": 0.08,
            "atrPct": 3.032,
            "gapPct": 0.594,
            "relativeStrength5dPct": -1.195,
            "relativeStrength20dPct": -10.938,
            "avgDollarVolume10d": 1643063816,
            "maxSelectedCorrelation": 0.151
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.564,
            "participation": -0.741,
            "volatility": 0.269,
            "gap": 0.649,
            "correlation": 0.151,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 78,
          "previousRank": 100,
          "rankChange": 22,
          "rankChangeLabel": "+22",
          "status": "WATCH",
          "quantScore": -0.28,
          "metrics": {
            "momentum5d": 2.189,
            "momentum20d": -5.297,
            "realizedVol10dAnnualized": 13.31,
            "volumeRatio": 0.061,
            "atrPct": 1.755,
            "gapPct": 0.168,
            "relativeStrength5dPct": 1.785,
            "relativeStrength20dPct": -7.086,
            "avgDollarVolume10d": 935613905,
            "maxSelectedCorrelation": 0.29
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.037,
            "participation": -0.95,
            "volatility": -0.712,
            "gap": 0.174,
            "correlation": 0.29,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 79,
          "previousRank": 93,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": -0.281,
          "metrics": {
            "momentum5d": -4.944,
            "momentum20d": -1.51,
            "realizedVol10dAnnualized": 37.24,
            "volumeRatio": 0.081,
            "atrPct": 3.145,
            "gapPct": -0.256,
            "relativeStrength5dPct": -5.348,
            "relativeStrength20dPct": -3.299,
            "avgDollarVolume10d": 1711864115,
            "maxSelectedCorrelation": 0.513
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.834,
            "participation": -0.723,
            "volatility": 0.784,
            "gap": 0.3,
            "correlation": 0.513,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 80,
          "previousRank": 65,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.285,
          "metrics": {
            "momentum5d": 0.835,
            "momentum20d": -4.025,
            "realizedVol10dAnnualized": 15.18,
            "volumeRatio": 0.129,
            "atrPct": 1.506,
            "gapPct": -0.514,
            "relativeStrength5dPct": 0.431,
            "relativeStrength20dPct": -5.813,
            "avgDollarVolume10d": 2590170312,
            "maxSelectedCorrelation": 0.553
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.105,
            "participation": -0.176,
            "volatility": -0.796,
            "gap": 0.587,
            "correlation": 0.553,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 81,
          "previousRank": 86,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.286,
          "metrics": {
            "momentum5d": 2.758,
            "momentum20d": -2.043,
            "realizedVol10dAnnualized": 9.81,
            "volumeRatio": 0.057,
            "atrPct": 1.227,
            "gapPct": 0.094,
            "relativeStrength5dPct": 2.354,
            "relativeStrength20dPct": -3.832,
            "avgDollarVolume10d": 453786641,
            "maxSelectedCorrelation": 0.174
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.261,
            "participation": -0.996,
            "volatility": -1.114,
            "gap": 0.091,
            "correlation": 0.174,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 82,
          "previousRank": 94,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": -0.297,
          "metrics": {
            "momentum5d": -12.824,
            "momentum20d": -1.603,
            "realizedVol10dAnnualized": 38.25,
            "volumeRatio": 0.192,
            "atrPct": 5.418,
            "gapPct": -1.996,
            "relativeStrength5dPct": -13.228,
            "relativeStrength20dPct": -3.391,
            "avgDollarVolume10d": 8724995029,
            "maxSelectedCorrelation": 0.446
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.982,
            "participation": 0.542,
            "volatility": 2.088,
            "gap": 2.242,
            "correlation": 0.446,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 83,
          "previousRank": 71,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "WATCH",
          "quantScore": -0.314,
          "metrics": {
            "momentum5d": 2.151,
            "momentum20d": -4.352,
            "realizedVol10dAnnualized": 8.67,
            "volumeRatio": 0.085,
            "atrPct": 1.576,
            "gapPct": 0.016,
            "relativeStrength5dPct": 1.747,
            "relativeStrength20dPct": -6.14,
            "avgDollarVolume10d": 955107738,
            "maxSelectedCorrelation": 0.377
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.072,
            "participation": -0.682,
            "volatility": -0.952,
            "gap": 0.004,
            "correlation": 0.377,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 84,
          "previousRank": 84,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.315,
          "metrics": {
            "momentum5d": -2.19,
            "momentum20d": 4.721,
            "realizedVol10dAnnualized": 14.08,
            "volumeRatio": 0.165,
            "atrPct": 1.388,
            "gapPct": -0.357,
            "relativeStrength5dPct": -2.594,
            "relativeStrength20dPct": 2.932,
            "avgDollarVolume10d": 1375495617,
            "maxSelectedCorrelation": 0.642
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.163,
            "participation": 0.231,
            "volatility": -0.895,
            "gap": 0.413,
            "correlation": 0.642,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 85,
          "previousRank": 90,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.324,
          "metrics": {
            "momentum5d": 1.093,
            "momentum20d": -5.734,
            "realizedVol10dAnnualized": 15.66,
            "volumeRatio": 0.096,
            "atrPct": 1.64,
            "gapPct": 0.398,
            "relativeStrength5dPct": 0.689,
            "relativeStrength20dPct": -7.523,
            "avgDollarVolume10d": 659382569,
            "maxSelectedCorrelation": 0.454
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.141,
            "participation": -0.553,
            "volatility": -0.707,
            "gap": 0.43,
            "correlation": 0.454,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 86,
          "previousRank": 72,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.331,
          "metrics": {
            "momentum5d": 2.107,
            "momentum20d": -3.904,
            "realizedVol10dAnnualized": 9.92,
            "volumeRatio": 0.108,
            "atrPct": 1.133,
            "gapPct": 0.238,
            "relativeStrength5dPct": 1.703,
            "relativeStrength20dPct": -5.693,
            "avgDollarVolume10d": 1952959969,
            "maxSelectedCorrelation": 0.491
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.085,
            "participation": -0.415,
            "volatility": -1.163,
            "gap": 0.251,
            "correlation": 0.491,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 87,
          "previousRank": 102,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.354,
          "metrics": {
            "momentum5d": 1.074,
            "momentum20d": -1.556,
            "realizedVol10dAnnualized": 8.02,
            "volumeRatio": 0.172,
            "atrPct": 0.88,
            "gapPct": 0.06,
            "relativeStrength5dPct": 0.67,
            "relativeStrength20dPct": -3.344,
            "avgDollarVolume10d": 1631001021,
            "maxSelectedCorrelation": 0.518
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.037,
            "participation": 0.308,
            "volatility": -1.362,
            "gap": 0.053,
            "correlation": 0.518,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 88,
          "previousRank": 85,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.358,
          "metrics": {
            "momentum5d": 1.147,
            "momentum20d": -2.545,
            "realizedVol10dAnnualized": 11.75,
            "volumeRatio": 0.122,
            "atrPct": 1.009,
            "gapPct": 0.344,
            "relativeStrength5dPct": 0.743,
            "relativeStrength20dPct": -4.333,
            "avgDollarVolume10d": 51847363,
            "maxSelectedCorrelation": 0.385
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.005,
            "participation": -0.261,
            "volatility": -1.177,
            "gap": 0.37,
            "correlation": 0.385,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 89,
          "previousRank": 89,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.362,
          "metrics": {
            "momentum5d": -1.321,
            "momentum20d": 4.383,
            "realizedVol10dAnnualized": 10.76,
            "volumeRatio": 0.142,
            "atrPct": 1.122,
            "gapPct": -0.217,
            "relativeStrength5dPct": -1.725,
            "relativeStrength20dPct": 2.594,
            "avgDollarVolume10d": 20872956961,
            "maxSelectedCorrelation": 0.631
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.052,
            "participation": -0.029,
            "volatility": -1.144,
            "gap": 0.256,
            "correlation": 0.631,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 90,
          "previousRank": 87,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.368,
          "metrics": {
            "momentum5d": -10.418,
            "momentum20d": 3.875,
            "realizedVol10dAnnualized": 38.07,
            "volumeRatio": 0.116,
            "atrPct": 3.797,
            "gapPct": -1.409,
            "relativeStrength5dPct": -10.822,
            "relativeStrength20dPct": 2.086,
            "avgDollarVolume10d": 2055802851,
            "maxSelectedCorrelation": 0.256
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.394,
            "participation": -0.324,
            "volatility": 1.175,
            "gap": 1.587,
            "correlation": 0.256,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 91,
          "previousRank": 74,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "WATCH",
          "quantScore": -0.369,
          "metrics": {
            "momentum5d": 0.365,
            "momentum20d": -7.381,
            "realizedVol10dAnnualized": 16.07,
            "volumeRatio": 0.101,
            "atrPct": 2.023,
            "gapPct": 0,
            "relativeStrength5dPct": -0.039,
            "relativeStrength20dPct": -9.17,
            "avgDollarVolume10d": 1334998765,
            "maxSelectedCorrelation": 0.412
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.319,
            "participation": -0.502,
            "volatility": -0.479,
            "gap": 0.014,
            "correlation": 0.412,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 92,
          "previousRank": 97,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.37,
          "metrics": {
            "momentum5d": 0.829,
            "momentum20d": -0.931,
            "realizedVol10dAnnualized": 8.31,
            "volumeRatio": 0.16,
            "atrPct": 0.852,
            "gapPct": 0.127,
            "relativeStrength5dPct": 0.425,
            "relativeStrength20dPct": -2.719,
            "avgDollarVolume10d": 1761469557,
            "maxSelectedCorrelation": 0.41
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.029,
            "participation": 0.179,
            "volatility": -1.369,
            "gap": 0.128,
            "correlation": 0.41,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 93,
          "previousRank": 73,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.371,
          "metrics": {
            "momentum5d": -4.408,
            "momentum20d": -5.028,
            "realizedVol10dAnnualized": 17.81,
            "volumeRatio": 0.097,
            "atrPct": 3.782,
            "gapPct": -0.285,
            "relativeStrength5dPct": -4.812,
            "relativeStrength20dPct": -6.817,
            "avgDollarVolume10d": 1467777034,
            "maxSelectedCorrelation": 0.785
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.909,
            "participation": -0.545,
            "volatility": 0.558,
            "gap": 0.332,
            "correlation": 0.785,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 94,
          "previousRank": 101,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.387,
          "metrics": {
            "momentum5d": 0.686,
            "momentum20d": -6.055,
            "realizedVol10dAnnualized": 9.33,
            "volumeRatio": 0.151,
            "atrPct": 1.468,
            "gapPct": 0.393,
            "relativeStrength5dPct": 0.282,
            "relativeStrength20dPct": -7.844,
            "avgDollarVolume10d": 2138275088,
            "maxSelectedCorrelation": 0.438
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.215,
            "participation": 0.073,
            "volatility": -0.993,
            "gap": 0.425,
            "correlation": 0.438,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 95,
          "previousRank": 98,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.394,
          "metrics": {
            "momentum5d": -0.121,
            "momentum20d": -2.964,
            "realizedVol10dAnnualized": 12.73,
            "volumeRatio": 0.12,
            "atrPct": 1.394,
            "gapPct": -0.384,
            "relativeStrength5dPct": -0.525,
            "relativeStrength20dPct": -4.752,
            "avgDollarVolume10d": 599470301,
            "maxSelectedCorrelation": 0.445
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.197,
            "participation": -0.277,
            "volatility": -0.932,
            "gap": 0.443,
            "correlation": 0.445,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 96,
          "previousRank": 77,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.398,
          "metrics": {
            "momentum5d": -2.516,
            "momentum20d": -12.567,
            "realizedVol10dAnnualized": 33.5,
            "volumeRatio": 0.108,
            "atrPct": 2.781,
            "gapPct": 0.592,
            "relativeStrength5dPct": -2.92,
            "relativeStrength20dPct": -14.355,
            "avgDollarVolume10d": 631111098,
            "maxSelectedCorrelation": 0.29
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.963,
            "participation": -0.419,
            "volatility": 0.469,
            "gap": 0.648,
            "correlation": 0.29,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 97,
          "previousRank": 106,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.402,
          "metrics": {
            "momentum5d": -0.453,
            "momentum20d": -1.764,
            "realizedVol10dAnnualized": 15.16,
            "volumeRatio": 0.11,
            "atrPct": 1.352,
            "gapPct": -0.136,
            "relativeStrength5dPct": -0.857,
            "relativeStrength20dPct": -3.552,
            "avgDollarVolume10d": 1080081136,
            "maxSelectedCorrelation": 0.422
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.193,
            "participation": -0.393,
            "volatility": -0.883,
            "gap": 0.165,
            "correlation": 0.422,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 98,
          "previousRank": 67,
          "rankChange": -31,
          "rankChangeLabel": "-31",
          "status": "WATCH",
          "quantScore": -0.406,
          "metrics": {
            "momentum5d": -5.398,
            "momentum20d": 3.534,
            "realizedVol10dAnnualized": 22.25,
            "volumeRatio": 0.142,
            "atrPct": 2.295,
            "gapPct": -0.24,
            "relativeStrength5dPct": -5.802,
            "relativeStrength20dPct": 1.746,
            "avgDollarVolume10d": 22269748040,
            "maxSelectedCorrelation": 0.427
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.681,
            "participation": -0.033,
            "volatility": -0.142,
            "gap": 0.282,
            "correlation": 0.427,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 99,
          "previousRank": 109,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": -0.406,
          "metrics": {
            "momentum5d": -2.574,
            "momentum20d": -6.827,
            "realizedVol10dAnnualized": 23.25,
            "volumeRatio": 0.131,
            "atrPct": 2.488,
            "gapPct": 0.143,
            "relativeStrength5dPct": -2.978,
            "relativeStrength20dPct": -8.616,
            "avgDollarVolume10d": 860518898,
            "maxSelectedCorrelation": 0.441
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.721,
            "participation": -0.157,
            "volatility": -0.003,
            "gap": 0.146,
            "correlation": 0.441,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 100,
          "previousRank": 54,
          "rankChange": -46,
          "rankChangeLabel": "-46",
          "status": "WATCH",
          "quantScore": -0.439,
          "metrics": {
            "momentum5d": -11.62,
            "momentum20d": -0.256,
            "realizedVol10dAnnualized": 50.21,
            "volumeRatio": 0.063,
            "atrPct": 4.375,
            "gapPct": -1.006,
            "relativeStrength5dPct": -12.024,
            "relativeStrength20dPct": -2.045,
            "avgDollarVolume10d": 803451550,
            "maxSelectedCorrelation": 0.457
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.749,
            "participation": -0.93,
            "volatility": 1.863,
            "gap": 1.137,
            "correlation": 0.457,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 101,
          "previousRank": 88,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.449,
          "metrics": {
            "momentum5d": -6.823,
            "momentum20d": 3.891,
            "realizedVol10dAnnualized": 23.67,
            "volumeRatio": 0.167,
            "atrPct": 2.233,
            "gapPct": -0.81,
            "relativeStrength5dPct": -7.227,
            "relativeStrength20dPct": 2.102,
            "avgDollarVolume10d": 3317960624,
            "maxSelectedCorrelation": 0.478
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.872,
            "participation": 0.251,
            "volatility": -0.134,
            "gap": 0.918,
            "correlation": 0.478,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 102,
          "previousRank": 104,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.461,
          "metrics": {
            "momentum5d": 0.404,
            "momentum20d": 1.789,
            "realizedVol10dAnnualized": 6.65,
            "volumeRatio": 0.08,
            "atrPct": 0.795,
            "gapPct": 0.027,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 28845725962,
            "maxSelectedCorrelation": 0.697
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.086,
            "participation": -0.734,
            "volatility": -1.45,
            "gap": 0.016,
            "correlation": 0.697,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 103,
          "previousRank": 110,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.464,
          "metrics": {
            "momentum5d": 1.206,
            "momentum20d": -3.499,
            "realizedVol10dAnnualized": 6.77,
            "volumeRatio": 0.078,
            "atrPct": 1.093,
            "gapPct": -0.18,
            "relativeStrength5dPct": 0.802,
            "relativeStrength20dPct": -5.288,
            "avgDollarVolume10d": 3858444485,
            "maxSelectedCorrelation": 0.526
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.028,
            "participation": -0.756,
            "volatility": -1.28,
            "gap": 0.214,
            "correlation": 0.526,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 104,
          "previousRank": 105,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.5,
          "metrics": {
            "momentum5d": 0.035,
            "momentum20d": -13.157,
            "realizedVol10dAnnualized": 14.03,
            "volumeRatio": 0.129,
            "atrPct": 2.034,
            "gapPct": 0.343,
            "relativeStrength5dPct": -0.369,
            "relativeStrength20dPct": -14.946,
            "avgDollarVolume10d": 1615247635,
            "maxSelectedCorrelation": 0.516
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.618,
            "participation": -0.182,
            "volatility": -0.535,
            "gap": 0.369,
            "correlation": 0.516,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 105,
          "previousRank": 96,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.507,
          "metrics": {
            "momentum5d": -0.053,
            "momentum20d": -11.33,
            "realizedVol10dAnnualized": 16.85,
            "volumeRatio": 0.086,
            "atrPct": 1.989,
            "gapPct": 0.105,
            "relativeStrength5dPct": -0.457,
            "relativeStrength20dPct": -13.119,
            "avgDollarVolume10d": 1001898181,
            "maxSelectedCorrelation": 0.533
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.551,
            "participation": -0.67,
            "volatility": -0.475,
            "gap": 0.104,
            "correlation": 0.533,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 106,
          "previousRank": 103,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.522,
          "metrics": {
            "momentum5d": 0.75,
            "momentum20d": -13.216,
            "realizedVol10dAnnualized": 12.53,
            "volumeRatio": 0.123,
            "atrPct": 1.69,
            "gapPct": 0.331,
            "relativeStrength5dPct": 0.346,
            "relativeStrength20dPct": -15.004,
            "avgDollarVolume10d": 1877453953,
            "maxSelectedCorrelation": 0.545
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.517,
            "participation": -0.244,
            "volatility": -0.772,
            "gap": 0.356,
            "correlation": 0.545,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 107,
          "previousRank": 113,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": -0.531,
          "metrics": {
            "momentum5d": -1.861,
            "momentum20d": -3.733,
            "realizedVol10dAnnualized": 10.26,
            "volumeRatio": 0.184,
            "atrPct": 1.288,
            "gapPct": -0.168,
            "relativeStrength5dPct": -2.265,
            "relativeStrength20dPct": -5.522,
            "avgDollarVolume10d": 6530168161,
            "maxSelectedCorrelation": 0.437
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.483,
            "participation": 0.449,
            "volatility": -1.066,
            "gap": 0.202,
            "correlation": 0.437,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 108,
          "previousRank": 70,
          "rankChange": -38,
          "rankChangeLabel": "-38",
          "status": "WATCH",
          "quantScore": -0.541,
          "metrics": {
            "momentum5d": -5.377,
            "momentum20d": -13.818,
            "realizedVol10dAnnualized": 23.61,
            "volumeRatio": 0.101,
            "atrPct": 3.974,
            "gapPct": -0.788,
            "relativeStrength5dPct": -5.781,
            "relativeStrength20dPct": -15.606,
            "avgDollarVolume10d": 361684242,
            "maxSelectedCorrelation": 0.691
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.432,
            "participation": -0.504,
            "volatility": 0.84,
            "gap": 0.893,
            "correlation": 0.691,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 109,
          "previousRank": 92,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "REJECT",
          "quantScore": -0.552,
          "metrics": {
            "momentum5d": -0.873,
            "momentum20d": -9.459,
            "realizedVol10dAnnualized": 17.69,
            "volumeRatio": 0.077,
            "atrPct": 1.77,
            "gapPct": 0.383,
            "relativeStrength5dPct": -1.277,
            "relativeStrength20dPct": -11.248,
            "avgDollarVolume10d": 631499026,
            "maxSelectedCorrelation": 0.855
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.589,
            "participation": -0.771,
            "volatility": -0.573,
            "gap": 0.413,
            "correlation": 0.855,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 110,
          "previousRank": 107,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.566,
          "metrics": {
            "momentum5d": -1.868,
            "momentum20d": -1.131,
            "realizedVol10dAnnualized": 12.53,
            "volumeRatio": 0.07,
            "atrPct": 1.408,
            "gapPct": -0.041,
            "relativeStrength5dPct": -2.272,
            "relativeStrength20dPct": -2.92,
            "avgDollarVolume10d": 387164146,
            "maxSelectedCorrelation": 0.726
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.371,
            "participation": -0.855,
            "volatility": -0.93,
            "gap": 0.059,
            "correlation": 0.726,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 111,
          "previousRank": 95,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.568,
          "metrics": {
            "momentum5d": -0.535,
            "momentum20d": -13.493,
            "realizedVol10dAnnualized": 18.59,
            "volumeRatio": 0.058,
            "atrPct": 2.267,
            "gapPct": -0.082,
            "relativeStrength5dPct": -0.939,
            "relativeStrength20dPct": -15.282,
            "avgDollarVolume10d": 459950787,
            "maxSelectedCorrelation": 0.382
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.715,
            "participation": -0.994,
            "volatility": -0.268,
            "gap": 0.106,
            "correlation": 0.382,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 112,
          "previousRank": 112,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.601,
          "metrics": {
            "momentum5d": -1.549,
            "momentum20d": -6.225,
            "realizedVol10dAnnualized": 14.42,
            "volumeRatio": 0.066,
            "atrPct": 1.711,
            "gapPct": 0.014,
            "relativeStrength5dPct": -1.952,
            "relativeStrength20dPct": -8.013,
            "avgDollarVolume10d": 1094721130,
            "maxSelectedCorrelation": 0.34
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.546,
            "participation": -0.898,
            "volatility": -0.704,
            "gap": 0.002,
            "correlation": 0.34,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 113,
          "previousRank": 99,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.606,
          "metrics": {
            "momentum5d": -3.667,
            "momentum20d": -2.403,
            "realizedVol10dAnnualized": 17.72,
            "volumeRatio": 0.107,
            "atrPct": 1.523,
            "gapPct": -0.502,
            "relativeStrength5dPct": -4.07,
            "relativeStrength20dPct": -4.191,
            "avgDollarVolume10d": 1142588020,
            "maxSelectedCorrelation": 0.681
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.687,
            "participation": -0.431,
            "volatility": -0.71,
            "gap": 0.574,
            "correlation": 0.681,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 114,
          "previousRank": 108,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.628,
          "metrics": {
            "momentum5d": -7.779,
            "momentum20d": -6.898,
            "realizedVol10dAnnualized": 33.79,
            "volumeRatio": 0.118,
            "atrPct": 3.178,
            "gapPct": -0.118,
            "relativeStrength5dPct": -8.183,
            "relativeStrength20dPct": -8.686,
            "avgDollarVolume10d": 738876701,
            "maxSelectedCorrelation": 0.702
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.48,
            "participation": -0.309,
            "volatility": 0.7,
            "gap": 0.145,
            "correlation": 0.702,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 115,
          "previousRank": 111,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.637,
          "metrics": {
            "momentum5d": 0.638,
            "momentum20d": -1.764,
            "realizedVol10dAnnualized": 2.96,
            "volumeRatio": 0.026,
            "atrPct": 0.673,
            "gapPct": -0.107,
            "relativeStrength5dPct": 0.234,
            "relativeStrength20dPct": -3.552,
            "avgDollarVolume10d": 3644413609,
            "maxSelectedCorrelation": 0.433
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.035,
            "participation": -1.355,
            "volatility": -1.63,
            "gap": 0.134,
            "correlation": 0.433,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 116,
          "previousRank": 115,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.693,
          "metrics": {
            "momentum5d": 0.357,
            "momentum20d": -1.711,
            "realizedVol10dAnnualized": 3.26,
            "volumeRatio": 0.027,
            "atrPct": 0.472,
            "gapPct": -0.026,
            "relativeStrength5dPct": -0.047,
            "relativeStrength20dPct": -3.5,
            "avgDollarVolume10d": 5117006189,
            "maxSelectedCorrelation": 0.488
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.073,
            "participation": -1.347,
            "volatility": -1.733,
            "gap": 0.043,
            "correlation": 0.488,
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
            "momentum5d": -13.909,
            "momentum20d": -14.929,
            "realizedVol10dAnnualized": 49.84,
            "volumeRatio": 0.198,
            "atrPct": 5.959,
            "gapPct": -1.055,
            "relativeStrength5dPct": -14.313,
            "relativeStrength20dPct": -16.718,
            "avgDollarVolume10d": 30077697,
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
            "momentum5d": -0.359,
            "momentum20d": -4.124,
            "realizedVol10dAnnualized": 13.98,
            "volumeRatio": 0.036,
            "atrPct": 1.309,
            "gapPct": 0.22,
            "relativeStrength5dPct": -0.763,
            "relativeStrength20dPct": -5.913,
            "avgDollarVolume10d": 43561884,
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
            "momentum5d": -0.718,
            "momentum20d": -7.656,
            "realizedVol10dAnnualized": 15.43,
            "volumeRatio": 0.153,
            "atrPct": 1.396,
            "gapPct": -0.217,
            "relativeStrength5dPct": -1.122,
            "relativeStrength20dPct": -9.445,
            "avgDollarVolume10d": 16707169,
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
              "d1": -1.725,
              "d3": -0.928
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
              "h4": 0.868,
              "d1": 0.07,
              "d3": 0.07
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
              "d1": 0
            },
            "selectionPrice": 170.85000610351562,
            "triggeredAt": "2026-10-12T13:30:00.000Z"
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
              "d1": 0
            },
            "selectionPrice": 209.0500030517578,
            "triggeredAt": "2026-10-12T13:30:00.000Z"
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
              "d1": 0
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
              "d1": 0
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
              "d1": 0
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
              "h4": 0
            },
            "selectionPrice": 170.85000610351562,
            "triggeredAt": "2026-10-12T13:30:00.000Z"
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
              "h4": 0
            },
            "selectionPrice": 209.0500030517578,
            "triggeredAt": "2026-10-12T13:30:00.000Z"
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
              "h4": 0
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
              "h4": 0
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
              "h4": 0
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
            "outcomes": {},
            "selectionPrice": 176.71499633789062
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
            "outcomes": {},
            "selectionPrice": 207.5500030517578
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
            "outcomes": {},
            "selectionPrice": 71.41500091552734
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
            "outcomes": {},
            "selectionPrice": 143.85000610351562
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
            "outcomes": {},
            "selectionPrice": 410.4849853515625
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-12T14:08:50.339Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-12T05:52:42.012Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-09T20:00:00.000Z",
        "MSTR": "2026-10-09T20:00:00.000Z",
        "HPE": "2026-10-09T20:00:00.000Z",
        "SHOP": "2026-10-09T20:00:00.000Z"
      },
      "fxUsdPerEur": 1.1205737590789795,
      "fxAt": "2026-10-12T05:52:25.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
