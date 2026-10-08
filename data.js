window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-08 23:27 UTC",
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
    "value": 975.22,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -23.35,
    "total": -24.78,
    "totalPct": -2.48
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 79.41000366210938,
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
      "value": 186.74,
      "pnl": -13.26,
      "pnlPct": -6.63,
      "fxUsdPerEur": 1.1215791702270508,
      "lastPriceAt": "2026-10-08T20:00:00.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 151.47000122070312,
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
      "value": 138.79,
      "pnl": -11.21,
      "pnlPct": -7.47,
      "fxUsdPerEur": 1.1215791702270508,
      "lastPriceAt": "2026-10-08T20:00:00.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 71,
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
      "value": 101.16,
      "pnl": 1.16,
      "pnlPct": 1.16,
      "fxUsdPerEur": 1.1215791702270508,
      "lastPriceAt": "2026-10-08T20:00:00.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 164.55999755859375,
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
      "value": 99.95,
      "pnl": -0.05,
      "pnlPct": -0.05,
      "fxUsdPerEur": 1.1215791702270508,
      "lastPriceAt": "2026-10-08T20:00:00.000Z"
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
      "date": "2026-10-08 23:27",
      "value": 975.22
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 116 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: HPE, SHOP, MRVL, SMCI, ON.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is HPE, SHOP, MRVL, SMCI, ON. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $73.16 with sustained participation.",
        "invalidation": "Loss of $71.02 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.48: 5d momentum 12.8%, 20d 28.7%, annualized 10d realized vol 43%, volume 1.16x, max selected correlation 0.00.",
        "quantScore": 2.477,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "WATCH_ONLY",
        "setupId": "HPE-20261008-daily-quant"
      },
      {
        "symbol": "SHOP",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $167.80 with sustained participation.",
        "invalidation": "Loss of $164.26 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.02: 5d momentum 12.0%, 20d 23.8%, annualized 10d realized vol 31%, volume 0.89x, max selected correlation 0.18.",
        "quantScore": 2.024,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "WATCH_ONLY",
        "setupId": "SHOP-20261008-daily-quant"
      },
      {
        "symbol": "MRVL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $288.76 with sustained participation.",
        "invalidation": "Loss of $280.60 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.86: 5d momentum 7.7%, 20d 26.3%, annualized 10d realized vol 41%, volume 1.07x, max selected correlation 0.13.",
        "quantScore": 1.86,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "WATCH_ONLY",
        "setupId": "MRVL-20261008-daily-quant"
      },
      {
        "symbol": "SMCI",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $45.55 with sustained participation.",
        "invalidation": "Loss of $44.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.84: 5d momentum 9.4%, 20d 11.6%, annualized 10d realized vol 39%, volume 1.32x, max selected correlation 0.52.",
        "quantScore": 1.841,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "WATCH_ONLY",
        "setupId": "SMCI-20261008-daily-quant"
      },
      {
        "symbol": "ON",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $83.94 with sustained participation.",
        "invalidation": "Loss of $81.08 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.58: 5d momentum 7.3%, 20d 16.1%, annualized 10d realized vol 50%, volume 1.07x, max selected correlation 0.48.",
        "quantScore": 1.58,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "WATCH_ONLY",
        "setupId": "ON-20261008-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $73.16 with sustained participation.",
        "invalidation": "Loss of $71.02 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.48: 5d momentum 12.8%, 20d 28.7%, annualized 10d realized vol 43%, volume 1.16x, max selected correlation 0.00.",
        "quantScore": 2.477,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "UNTRIGGERED",
        "setupId": "HPE-20261008-daily-quant"
      },
      {
        "symbol": "SHOP",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $167.80 with sustained participation.",
        "invalidation": "Loss of $164.26 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.02: 5d momentum 12.0%, 20d 23.8%, annualized 10d realized vol 31%, volume 0.89x, max selected correlation 0.18.",
        "quantScore": 2.024,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "UNTRIGGERED",
        "setupId": "SHOP-20261008-daily-quant"
      },
      {
        "symbol": "MRVL",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $288.76 with sustained participation.",
        "invalidation": "Loss of $280.60 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.86: 5d momentum 7.7%, 20d 26.3%, annualized 10d realized vol 41%, volume 1.07x, max selected correlation 0.13.",
        "quantScore": 1.86,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "UNTRIGGERED",
        "setupId": "MRVL-20261008-daily-quant"
      },
      {
        "symbol": "SMCI",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $45.55 with sustained participation.",
        "invalidation": "Loss of $44.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.84: 5d momentum 9.4%, 20d 11.6%, annualized 10d realized vol 39%, volume 1.32x, max selected correlation 0.52.",
        "quantScore": 1.841,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "UNTRIGGERED",
        "setupId": "SMCI-20261008-daily-quant"
      },
      {
        "symbol": "ON",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-11T12:10:27.632Z",
        "trigger": "Break above $83.94 with sustained participation.",
        "invalidation": "Loss of $81.08 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.58: 5d momentum 7.3%, 20d 16.1%, annualized 10d realized vol 50%, volume 1.07x, max selected correlation 0.48.",
        "quantScore": 1.58,
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
        "createdAt": "2026-10-08T12:10:27.632Z",
        "lastReviewedAt": "2026-10-08T12:10:27.632Z",
        "status": "UNTRIGGERED",
        "setupId": "ON-20261008-daily-quant"
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
    "lastReviewedAt": "2026-10-08T12:10:27.632Z",
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
      "selectedAt": "2026-10-08T12:10:27.632Z",
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
      "previousSelectedAt": "2026-10-07T12:20:06.325Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "HPE",
          "quantScore": 2.477,
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
          }
        },
        {
          "symbol": "SHOP",
          "quantScore": 2.024,
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
          }
        },
        {
          "symbol": "MRVL",
          "quantScore": 1.86,
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
          }
        },
        {
          "symbol": "SMCI",
          "quantScore": 1.841,
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
          }
        },
        {
          "symbol": "ON",
          "quantScore": 1.58,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "HPE",
          "rank": 1,
          "previousRank": 1,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 2.477,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 3.337,
            "participation": 1.053,
            "volatility": 1.758,
            "gap": 0.178,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-11T12:10:27.632Z",
          "trigger": "Break above $73.16 with sustained participation.",
          "invalidation": "Loss of $71.02 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.48: 5d momentum 12.8%, 20d 28.7%, annualized 10d realized vol 43%, volume 1.16x, max selected correlation 0.00.",
          "createdAt": "2026-10-08T12:10:27.632Z",
          "lastReviewedAt": "2026-10-08T12:10:27.632Z",
          "setupId": "HPE-20261008-daily-quant"
        },
        {
          "symbol": "SHOP",
          "rank": 2,
          "previousRank": 3,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 2.024,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.983,
            "participation": -0.069,
            "volatility": 1.237,
            "gap": 0.37,
            "correlation": 0.179,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-11T12:10:27.632Z",
          "trigger": "Break above $167.80 with sustained participation.",
          "invalidation": "Loss of $164.26 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.02: 5d momentum 12.0%, 20d 23.8%, annualized 10d realized vol 31%, volume 0.89x, max selected correlation 0.18.",
          "createdAt": "2026-10-08T12:10:27.632Z",
          "lastReviewedAt": "2026-10-08T12:10:27.632Z",
          "setupId": "SHOP-20261008-daily-quant"
        },
        {
          "symbol": "MRVL",
          "rank": 3,
          "previousRank": 2,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "SELECTED",
          "quantScore": 1.86,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.278,
            "participation": 0.682,
            "volatility": 1.609,
            "gap": 1.134,
            "correlation": 0.127,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-11T12:10:27.632Z",
          "trigger": "Break above $288.76 with sustained participation.",
          "invalidation": "Loss of $280.60 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.86: 5d momentum 7.7%, 20d 26.3%, annualized 10d realized vol 41%, volume 1.07x, max selected correlation 0.13.",
          "createdAt": "2026-10-08T12:10:27.632Z",
          "lastReviewedAt": "2026-10-08T12:10:27.632Z",
          "setupId": "MRVL-20261008-daily-quant"
        },
        {
          "symbol": "SMCI",
          "rank": 4,
          "previousRank": 11,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "SELECTED",
          "quantScore": 1.841,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.033,
            "participation": 1.751,
            "volatility": 1.64,
            "gap": 1.124,
            "correlation": 0.521,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-11T12:10:27.632Z",
          "trigger": "Break above $45.55 with sustained participation.",
          "invalidation": "Loss of $44.33 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.84: 5d momentum 9.4%, 20d 11.6%, annualized 10d realized vol 39%, volume 1.32x, max selected correlation 0.52.",
          "createdAt": "2026-10-08T12:10:27.632Z",
          "lastReviewedAt": "2026-10-08T12:10:27.632Z",
          "setupId": "SMCI-20261008-daily-quant"
        },
        {
          "symbol": "ON",
          "rank": 5,
          "previousRank": 5,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.58,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.808,
            "participation": 0.672,
            "volatility": 1.473,
            "gap": 1.531,
            "correlation": 0.484,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-11T12:10:27.632Z",
          "trigger": "Break above $83.94 with sustained participation.",
          "invalidation": "Loss of $81.08 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.58: 5d momentum 7.3%, 20d 16.1%, annualized 10d realized vol 50%, volume 1.07x, max selected correlation 0.48.",
          "createdAt": "2026-10-08T12:10:27.632Z",
          "lastReviewedAt": "2026-10-08T12:10:27.632Z",
          "setupId": "ON-20261008-daily-quant"
        },
        {
          "symbol": "ARM",
          "rank": 6,
          "previousRank": 7,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 1.457,
          "metrics": {
            "momentum5d": 1.626,
            "momentum20d": 12.557,
            "realizedVol10dAnnualized": 67.24,
            "volumeRatio": 0.868,
            "atrPct": 6.473,
            "gapPct": -3.784,
            "relativeStrength5dPct": -0.287,
            "relativeStrength20dPct": 11.087,
            "avgDollarVolume10d": 1611222393,
            "maxSelectedCorrelation": 0.711
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.586,
            "participation": -0.16,
            "volatility": 3.379,
            "gap": 2.741,
            "correlation": 0.711,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 7,
          "previousRank": 4,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 1.401,
          "metrics": {
            "momentum5d": 5.574,
            "momentum20d": 27.706,
            "realizedVol10dAnnualized": 29.26,
            "volumeRatio": 1.01,
            "atrPct": 3.67,
            "gapPct": -2.256,
            "relativeStrength5dPct": 3.661,
            "relativeStrength20dPct": 26.236,
            "avgDollarVolume10d": 12388905615,
            "maxSelectedCorrelation": 0.634
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.919,
            "participation": 0.435,
            "volatility": 0.779,
            "gap": 1.372,
            "correlation": 0.634,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 8,
          "previousRank": 16,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 1.326,
          "metrics": {
            "momentum5d": 6.365,
            "momentum20d": 5.449,
            "realizedVol10dAnnualized": 50.82,
            "volumeRatio": 1.226,
            "atrPct": 3.614,
            "gapPct": 1.862,
            "relativeStrength5dPct": 4.451,
            "relativeStrength20dPct": 3.979,
            "avgDollarVolume10d": 372062296,
            "maxSelectedCorrelation": 0.613
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.214,
            "participation": 1.344,
            "volatility": 1.36,
            "gap": 2.317,
            "correlation": 0.613,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 9,
          "previousRank": 10,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 1.321,
          "metrics": {
            "momentum5d": 7.623,
            "momentum20d": 8.444,
            "realizedVol10dAnnualized": 43.65,
            "volumeRatio": 0.746,
            "atrPct": 4.395,
            "gapPct": -1.869,
            "relativeStrength5dPct": 5.71,
            "relativeStrength20dPct": 6.974,
            "avgDollarVolume10d": 3472196940,
            "maxSelectedCorrelation": 0.798
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.569,
            "participation": -0.669,
            "volatility": 1.581,
            "gap": 1.026,
            "correlation": 0.798,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSTR",
          "rank": 10,
          "previousRank": 9,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 1.202,
          "metrics": {
            "momentum5d": 0.183,
            "momentum20d": 12.343,
            "realizedVol10dAnnualized": 45.62,
            "volumeRatio": 1.077,
            "atrPct": 6.35,
            "gapPct": -4.163,
            "relativeStrength5dPct": -1.73,
            "relativeStrength20dPct": 10.872,
            "avgDollarVolume10d": 2911602060,
            "maxSelectedCorrelation": 0.526
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.303,
            "participation": 0.717,
            "volatility": 2.699,
            "gap": 3.08,
            "correlation": 0.526,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 11,
          "previousRank": 12,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.99,
          "metrics": {
            "momentum5d": 9.068,
            "momentum20d": 7.53,
            "realizedVol10dAnnualized": 24.11,
            "volumeRatio": 0.994,
            "atrPct": 2.243,
            "gapPct": -0.738,
            "relativeStrength5dPct": 7.155,
            "relativeStrength20dPct": 6.059,
            "avgDollarVolume10d": 2201090662,
            "maxSelectedCorrelation": 0.612
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.809,
            "participation": 0.369,
            "volatility": -0.142,
            "gap": 0.012,
            "correlation": 0.612,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRWD",
          "rank": 12,
          "previousRank": 8,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.988,
          "metrics": {
            "momentum5d": 0.261,
            "momentum20d": 26.388,
            "realizedVol10dAnnualized": 36.02,
            "volumeRatio": 1.278,
            "atrPct": 4.09,
            "gapPct": -0.739,
            "relativeStrength5dPct": -1.652,
            "relativeStrength20dPct": 24.918,
            "avgDollarVolume10d": 1997027241,
            "maxSelectedCorrelation": 0.613
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.857,
            "participation": 1.559,
            "volatility": 1.199,
            "gap": 0.013,
            "correlation": 0.613,
            "regimeFit": null
          }
        },
        {
          "symbol": "PANW",
          "rank": 13,
          "previousRank": 6,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.895,
          "metrics": {
            "momentum5d": 2.079,
            "momentum20d": 20.354,
            "realizedVol10dAnnualized": 41.5,
            "volumeRatio": 0.743,
            "atrPct": 4.007,
            "gapPct": -1.548,
            "relativeStrength5dPct": 0.166,
            "relativeStrength20dPct": 18.884,
            "avgDollarVolume10d": 2030060393,
            "maxSelectedCorrelation": 0.573
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.971,
            "participation": -0.685,
            "volatility": 1.309,
            "gap": 0.738,
            "correlation": 0.573,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 14,
          "previousRank": 46,
          "rankChange": 32,
          "rankChangeLabel": "+32",
          "status": "WATCH",
          "quantScore": 0.767,
          "metrics": {
            "momentum5d": 2.149,
            "momentum20d": 8.772,
            "realizedVol10dAnnualized": 32.62,
            "volumeRatio": 1.061,
            "atrPct": 4.003,
            "gapPct": -2.696,
            "relativeStrength5dPct": 0.236,
            "relativeStrength20dPct": 7.302,
            "avgDollarVolume10d": 28264542720,
            "maxSelectedCorrelation": 0.353
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.54,
            "participation": 0.65,
            "volatility": 1.055,
            "gap": 1.767,
            "correlation": 0.353,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 15,
          "previousRank": 14,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.718,
          "metrics": {
            "momentum5d": 7.21,
            "momentum20d": 2.157,
            "realizedVol10dAnnualized": 30.4,
            "volumeRatio": 0.742,
            "atrPct": 2.754,
            "gapPct": -0.854,
            "relativeStrength5dPct": 5.297,
            "relativeStrength20dPct": 0.687,
            "avgDollarVolume10d": 8177243942,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.249,
            "participation": -0.688,
            "volatility": 0.314,
            "gap": 0.117,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 16,
          "previousRank": 43,
          "rankChange": 27,
          "rankChangeLabel": "+27",
          "status": "WATCH",
          "quantScore": 0.698,
          "metrics": {
            "momentum5d": 1.94,
            "momentum20d": 18.38,
            "realizedVol10dAnnualized": 29.72,
            "volumeRatio": 1.14,
            "atrPct": 2.739,
            "gapPct": 0.077,
            "relativeStrength5dPct": 0.027,
            "relativeStrength20dPct": 16.91,
            "avgDollarVolume10d": 776267438,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.869,
            "participation": 0.982,
            "volatility": 0.286,
            "gap": 0.717,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 17,
          "previousRank": 13,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.68,
          "metrics": {
            "momentum5d": 6.482,
            "momentum20d": 2.621,
            "realizedVol10dAnnualized": 34.61,
            "volumeRatio": 0.653,
            "atrPct": 2.936,
            "gapPct": -0.586,
            "relativeStrength5dPct": 4.569,
            "relativeStrength20dPct": 1.151,
            "avgDollarVolume10d": 13799687732,
            "maxSelectedCorrelation": 0.649
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.128,
            "participation": -1.063,
            "volatility": 0.532,
            "gap": 0.124,
            "correlation": 0.649,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 18,
          "previousRank": 41,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": 0.658,
          "metrics": {
            "momentum5d": 4.607,
            "momentum20d": 3.328,
            "realizedVol10dAnnualized": 31.42,
            "volumeRatio": 1.202,
            "atrPct": 2.661,
            "gapPct": -0.568,
            "relativeStrength5dPct": 2.694,
            "relativeStrength20dPct": 1.858,
            "avgDollarVolume10d": 562262145,
            "maxSelectedCorrelation": 0.433
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.798,
            "participation": 1.242,
            "volatility": 0.292,
            "gap": 0.14,
            "correlation": 0.433,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 19,
          "previousRank": 20,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.639,
          "metrics": {
            "momentum5d": -0.534,
            "momentum20d": 17.577,
            "realizedVol10dAnnualized": 44.06,
            "volumeRatio": 0.91,
            "atrPct": 3.957,
            "gapPct": -0.08,
            "relativeStrength5dPct": -2.447,
            "relativeStrength20dPct": 16.107,
            "avgDollarVolume10d": 14267656014,
            "maxSelectedCorrelation": 0.585
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.367,
            "participation": 0.018,
            "volatility": 1.355,
            "gap": 0.577,
            "correlation": 0.585,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 20,
          "previousRank": 15,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": 0.611,
          "metrics": {
            "momentum5d": 2.88,
            "momentum20d": 2.727,
            "realizedVol10dAnnualized": 33.53,
            "volumeRatio": 0.884,
            "atrPct": 3.805,
            "gapPct": 1.109,
            "relativeStrength5dPct": 0.967,
            "relativeStrength20dPct": 1.257,
            "avgDollarVolume10d": 1286161610,
            "maxSelectedCorrelation": 0.31
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.447,
            "participation": -0.092,
            "volatility": 0.974,
            "gap": 1.642,
            "correlation": 0.31,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 21,
          "previousRank": 25,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.598,
          "metrics": {
            "momentum5d": 3.78,
            "momentum20d": 13.987,
            "realizedVol10dAnnualized": 15.86,
            "volumeRatio": 0.881,
            "atrPct": 2.834,
            "gapPct": 0.331,
            "relativeStrength5dPct": 1.867,
            "relativeStrength20dPct": 12.517,
            "avgDollarVolume10d": 3465329210,
            "maxSelectedCorrelation": 0.325
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.05,
            "participation": -0.106,
            "volatility": -0.055,
            "gap": 0.945,
            "correlation": 0.325,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 22,
          "previousRank": 33,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": 0.543,
          "metrics": {
            "momentum5d": 5.182,
            "momentum20d": -5.595,
            "realizedVol10dAnnualized": 41.43,
            "volumeRatio": 0.804,
            "atrPct": 3.271,
            "gapPct": -0.671,
            "relativeStrength5dPct": 3.269,
            "relativeStrength20dPct": -7.065,
            "avgDollarVolume10d": 609826337,
            "maxSelectedCorrelation": 0.449
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.565,
            "participation": -0.428,
            "volatility": 0.908,
            "gap": 0.048,
            "correlation": 0.449,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 23,
          "previousRank": 17,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.519,
          "metrics": {
            "momentum5d": 1.813,
            "momentum20d": 10.123,
            "realizedVol10dAnnualized": 34.7,
            "volumeRatio": 0.676,
            "atrPct": 3.456,
            "gapPct": -2.519,
            "relativeStrength5dPct": -0.1,
            "relativeStrength20dPct": 8.653,
            "avgDollarVolume10d": 2828748854,
            "maxSelectedCorrelation": 0.54
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.528,
            "participation": -0.965,
            "volatility": 0.817,
            "gap": 1.608,
            "correlation": 0.54,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 24,
          "previousRank": 26,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "REJECT",
          "quantScore": 0.496,
          "metrics": {
            "momentum5d": 2.632,
            "momentum20d": 8.941,
            "realizedVol10dAnnualized": 16.04,
            "volumeRatio": 1.402,
            "atrPct": 2.243,
            "gapPct": -1.802,
            "relativeStrength5dPct": 0.719,
            "relativeStrength20dPct": 7.471,
            "avgDollarVolume10d": 3404426064,
            "maxSelectedCorrelation": 0.896
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.638,
            "participation": 2.08,
            "volatility": -0.371,
            "gap": 0.966,
            "correlation": 0.896,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 25,
          "previousRank": 71,
          "rankChange": 46,
          "rankChangeLabel": "+46",
          "status": "WATCH",
          "quantScore": 0.473,
          "metrics": {
            "momentum5d": 2.734,
            "momentum20d": 5.766,
            "realizedVol10dAnnualized": 23.09,
            "volumeRatio": 0.981,
            "atrPct": 2.88,
            "gapPct": 1.394,
            "relativeStrength5dPct": 0.821,
            "relativeStrength20dPct": 4.296,
            "avgDollarVolume10d": 2616824369,
            "maxSelectedCorrelation": 0.589
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.536,
            "participation": 0.315,
            "volatility": 0.175,
            "gap": 1.897,
            "correlation": 0.589,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 26,
          "previousRank": 54,
          "rankChange": 28,
          "rankChangeLabel": "+28",
          "status": "WATCH",
          "quantScore": 0.47,
          "metrics": {
            "momentum5d": 3.735,
            "momentum20d": 9.076,
            "realizedVol10dAnnualized": 14.03,
            "volumeRatio": 1.161,
            "atrPct": 2.002,
            "gapPct": 0.641,
            "relativeStrength5dPct": 1.822,
            "relativeStrength20dPct": 7.606,
            "avgDollarVolume10d": 1266694844,
            "maxSelectedCorrelation": 0.418
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.853,
            "participation": 1.068,
            "volatility": -0.559,
            "gap": 1.223,
            "correlation": 0.418,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 27,
          "previousRank": 24,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.456,
          "metrics": {
            "momentum5d": 0.975,
            "momentum20d": 4.154,
            "realizedVol10dAnnualized": 36.63,
            "volumeRatio": 0.884,
            "atrPct": 3.682,
            "gapPct": -2.745,
            "relativeStrength5dPct": -0.938,
            "relativeStrength20dPct": 2.684,
            "avgDollarVolume10d": 1556183265,
            "maxSelectedCorrelation": 0.373
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.139,
            "participation": -0.093,
            "volatility": 0.994,
            "gap": 1.81,
            "correlation": 0.373,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 28,
          "previousRank": 27,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.424,
          "metrics": {
            "momentum5d": 0.375,
            "momentum20d": -1.052,
            "realizedVol10dAnnualized": 37.07,
            "volumeRatio": 1.55,
            "atrPct": 3.005,
            "gapPct": -2.02,
            "relativeStrength5dPct": -1.538,
            "relativeStrength20dPct": -2.522,
            "avgDollarVolume10d": 1853302545,
            "maxSelectedCorrelation": 0.793
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.175,
            "participation": 2.7,
            "volatility": 0.64,
            "gap": 1.161,
            "correlation": 0.793,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 29,
          "previousRank": 23,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "REJECT",
          "quantScore": 0.418,
          "metrics": {
            "momentum5d": 2.494,
            "momentum20d": 10.299,
            "realizedVol10dAnnualized": 18.82,
            "volumeRatio": 0.948,
            "atrPct": 2.601,
            "gapPct": -2.156,
            "relativeStrength5dPct": 0.581,
            "relativeStrength20dPct": 8.829,
            "avgDollarVolume10d": 3099897227,
            "maxSelectedCorrelation": 0.845
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.664,
            "participation": 0.178,
            "volatility": -0.098,
            "gap": 1.283,
            "correlation": 0.845,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 30,
          "previousRank": 22,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.399,
          "metrics": {
            "momentum5d": 5.224,
            "momentum20d": -4.023,
            "realizedVol10dAnnualized": 28.86,
            "volumeRatio": 0.764,
            "atrPct": 2.558,
            "gapPct": 0.634,
            "relativeStrength5dPct": 3.311,
            "relativeStrength20dPct": -5.493,
            "avgDollarVolume10d": 534957459,
            "maxSelectedCorrelation": 0.324
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.633,
            "participation": -0.594,
            "volatility": 0.164,
            "gap": 1.217,
            "correlation": 0.324,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 31,
          "previousRank": 21,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.393,
          "metrics": {
            "momentum5d": 4.559,
            "momentum20d": -11.666,
            "realizedVol10dAnnualized": 37,
            "volumeRatio": 0.647,
            "atrPct": 3.966,
            "gapPct": -1.54,
            "relativeStrength5dPct": 2.646,
            "relativeStrength20dPct": -13.136,
            "avgDollarVolume10d": 4293468945,
            "maxSelectedCorrelation": 0.768
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.213,
            "participation": -1.085,
            "volatility": 1.159,
            "gap": 0.731,
            "correlation": 0.768,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 32,
          "previousRank": 19,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": 0.385,
          "metrics": {
            "momentum5d": 0.304,
            "momentum20d": 2.837,
            "realizedVol10dAnnualized": 33.17,
            "volumeRatio": 0.849,
            "atrPct": 3.898,
            "gapPct": -3.543,
            "relativeStrength5dPct": -1.609,
            "relativeStrength20dPct": 1.367,
            "avgDollarVolume10d": 2544100654,
            "maxSelectedCorrelation": 0.625
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.039,
            "participation": -0.24,
            "volatility": 1.014,
            "gap": 2.525,
            "correlation": 0.625,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 33,
          "previousRank": 30,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.288,
          "metrics": {
            "momentum5d": 3.287,
            "momentum20d": 7.25,
            "realizedVol10dAnnualized": 20.36,
            "volumeRatio": 0.746,
            "atrPct": 2.249,
            "gapPct": 0.27,
            "relativeStrength5dPct": 1.374,
            "relativeStrength20dPct": 5.78,
            "avgDollarVolume10d": 11923986633,
            "maxSelectedCorrelation": 0.625
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.698,
            "participation": -0.672,
            "volatility": -0.245,
            "gap": 0.891,
            "correlation": 0.625,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 34,
          "previousRank": 37,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.249,
          "metrics": {
            "momentum5d": 4.323,
            "momentum20d": 1.148,
            "realizedVol10dAnnualized": 15.02,
            "volumeRatio": 0.993,
            "atrPct": 2.035,
            "gapPct": -0.804,
            "relativeStrength5dPct": 2.41,
            "relativeStrength20dPct": -0.322,
            "avgDollarVolume10d": 9142865817,
            "maxSelectedCorrelation": 0.648
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.66,
            "participation": 0.365,
            "volatility": -0.513,
            "gap": 0.071,
            "correlation": 0.648,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 35,
          "previousRank": 52,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.24,
          "metrics": {
            "momentum5d": 4.08,
            "momentum20d": 1.99,
            "realizedVol10dAnnualized": 24.24,
            "volumeRatio": 0.697,
            "atrPct": 2.042,
            "gapPct": 0.317,
            "relativeStrength5dPct": 2.167,
            "relativeStrength20dPct": 0.52,
            "avgDollarVolume10d": 2402775563,
            "maxSelectedCorrelation": 0.197
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.647,
            "participation": -0.876,
            "volatility": -0.248,
            "gap": 0.933,
            "correlation": 0.197,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 36,
          "previousRank": 28,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.197,
          "metrics": {
            "momentum5d": 3.98,
            "momentum20d": 5.201,
            "realizedVol10dAnnualized": 15.16,
            "volumeRatio": 0.697,
            "atrPct": 2.166,
            "gapPct": -0.648,
            "relativeStrength5dPct": 2.067,
            "relativeStrength20dPct": 3.731,
            "avgDollarVolume10d": 25578052936,
            "maxSelectedCorrelation": 0.378
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.751,
            "participation": -0.875,
            "volatility": -0.438,
            "gap": 0.068,
            "correlation": 0.378,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 37,
          "previousRank": 55,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": 0.178,
          "metrics": {
            "momentum5d": 3.505,
            "momentum20d": 3.523,
            "realizedVol10dAnnualized": 18.16,
            "volumeRatio": 0.866,
            "atrPct": 1.648,
            "gapPct": 0.551,
            "relativeStrength5dPct": 1.592,
            "relativeStrength20dPct": 2.053,
            "avgDollarVolume10d": 2296329208,
            "maxSelectedCorrelation": 0.519
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.596,
            "participation": -0.166,
            "volatility": -0.634,
            "gap": 1.143,
            "correlation": 0.519,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 38,
          "previousRank": 36,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.16,
          "metrics": {
            "momentum5d": -4.27,
            "momentum20d": -0.274,
            "realizedVol10dAnnualized": 31.82,
            "volumeRatio": 0.875,
            "atrPct": 6.021,
            "gapPct": -2.967,
            "relativeStrength5dPct": -6.183,
            "relativeStrength20dPct": -1.744,
            "avgDollarVolume10d": 1319311164,
            "maxSelectedCorrelation": 0.543
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.029,
            "participation": -0.13,
            "volatility": 2.128,
            "gap": 2.009,
            "correlation": 0.543,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 39,
          "previousRank": 32,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.155,
          "metrics": {
            "momentum5d": -0.898,
            "momentum20d": 2.579,
            "realizedVol10dAnnualized": 29.06,
            "volumeRatio": 1.318,
            "atrPct": 2.702,
            "gapPct": -2.089,
            "relativeStrength5dPct": -2.811,
            "relativeStrength20dPct": 1.109,
            "avgDollarVolume10d": 398648024,
            "maxSelectedCorrelation": 0.534
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.278,
            "participation": 1.728,
            "volatility": 0.248,
            "gap": 1.222,
            "correlation": 0.534,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 40,
          "previousRank": 40,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.151,
          "metrics": {
            "momentum5d": 3.747,
            "momentum20d": -3.851,
            "realizedVol10dAnnualized": 15.29,
            "volumeRatio": 0.816,
            "atrPct": 2.302,
            "gapPct": 1.5,
            "relativeStrength5dPct": 1.834,
            "relativeStrength20dPct": -5.321,
            "avgDollarVolume10d": 756867202,
            "maxSelectedCorrelation": 0.565
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.359,
            "participation": -0.376,
            "volatility": -0.36,
            "gap": 1.992,
            "correlation": 0.565,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 41,
          "previousRank": 65,
          "rankChange": 24,
          "rankChangeLabel": "+24",
          "status": "WATCH",
          "quantScore": 0.094,
          "metrics": {
            "momentum5d": 3.554,
            "momentum20d": 0.939,
            "realizedVol10dAnnualized": 17.68,
            "volumeRatio": 0.899,
            "atrPct": 1.594,
            "gapPct": -0.248,
            "relativeStrength5dPct": 1.641,
            "relativeStrength20dPct": -0.531,
            "avgDollarVolume10d": 1862155876,
            "maxSelectedCorrelation": 0.637
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.506,
            "participation": -0.03,
            "volatility": -0.677,
            "gap": 0.426,
            "correlation": 0.637,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 42,
          "previousRank": 18,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "WATCH",
          "quantScore": 0.085,
          "metrics": {
            "momentum5d": -5.914,
            "momentum20d": 8.28,
            "realizedVol10dAnnualized": 46.26,
            "volumeRatio": 0.865,
            "atrPct": 5.392,
            "gapPct": -0.738,
            "relativeStrength5dPct": -7.827,
            "relativeStrength20dPct": 6.81,
            "avgDollarVolume10d": 11061624985,
            "maxSelectedCorrelation": 0.384
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.013,
            "participation": -0.173,
            "volatility": 2.196,
            "gap": 0.012,
            "correlation": 0.384,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 43,
          "previousRank": 49,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.072,
          "metrics": {
            "momentum5d": 1.096,
            "momentum20d": 6.467,
            "realizedVol10dAnnualized": 18.77,
            "volumeRatio": 0.925,
            "atrPct": 1.858,
            "gapPct": 0.998,
            "relativeStrength5dPct": -0.817,
            "relativeStrength20dPct": 4.997,
            "avgDollarVolume10d": 11601177325,
            "maxSelectedCorrelation": 0.692
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.251,
            "participation": 0.081,
            "volatility": -0.502,
            "gap": 1.543,
            "correlation": 0.692,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 44,
          "previousRank": 60,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": 0.058,
          "metrics": {
            "momentum5d": 2.425,
            "momentum20d": -6.202,
            "realizedVol10dAnnualized": 18.32,
            "volumeRatio": 1.229,
            "atrPct": 2.105,
            "gapPct": -0.106,
            "relativeStrength5dPct": 0.511,
            "relativeStrength20dPct": -7.672,
            "avgDollarVolume10d": 1700012419,
            "maxSelectedCorrelation": 0.373
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.017,
            "participation": 1.356,
            "volatility": -0.382,
            "gap": 0.553,
            "correlation": 0.373,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 45,
          "previousRank": 31,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": 0.047,
          "metrics": {
            "momentum5d": -3.76,
            "momentum20d": 1.74,
            "realizedVol10dAnnualized": 43.51,
            "volumeRatio": 0.806,
            "atrPct": 4.8,
            "gapPct": -1.166,
            "relativeStrength5dPct": -5.673,
            "relativeStrength20dPct": 0.27,
            "avgDollarVolume10d": 1956910266,
            "maxSelectedCorrelation": 0.775
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.855,
            "participation": -0.42,
            "volatility": 1.797,
            "gap": 0.395,
            "correlation": 0.775,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 46,
          "previousRank": 42,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.041,
          "metrics": {
            "momentum5d": 1.866,
            "momentum20d": 3.588,
            "realizedVol10dAnnualized": 14.81,
            "volumeRatio": 0.751,
            "atrPct": 2.551,
            "gapPct": -0.276,
            "relativeStrength5dPct": -0.047,
            "relativeStrength20dPct": 2.118,
            "avgDollarVolume10d": 8610375990,
            "maxSelectedCorrelation": 0.502
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.287,
            "participation": -0.648,
            "volatility": -0.239,
            "gap": 0.401,
            "correlation": 0.502,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 47,
          "previousRank": 29,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": 0.04,
          "metrics": {
            "momentum5d": -1.201,
            "momentum20d": -1.452,
            "realizedVol10dAnnualized": 38.47,
            "volumeRatio": 0.642,
            "atrPct": 3.884,
            "gapPct": 0.911,
            "relativeStrength5dPct": -3.115,
            "relativeStrength20dPct": -2.922,
            "avgDollarVolume10d": 868532850,
            "maxSelectedCorrelation": 0.316
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.491,
            "participation": -1.107,
            "volatility": 1.157,
            "gap": 1.465,
            "correlation": 0.316,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 48,
          "previousRank": 48,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.023,
          "metrics": {
            "momentum5d": -1.924,
            "momentum20d": 9.791,
            "realizedVol10dAnnualized": 30.53,
            "volumeRatio": 0.812,
            "atrPct": 2.772,
            "gapPct": 0.886,
            "relativeStrength5dPct": -3.837,
            "relativeStrength20dPct": 8.321,
            "avgDollarVolume10d": 1391325705,
            "maxSelectedCorrelation": 0.539
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.196,
            "participation": -0.394,
            "volatility": 0.327,
            "gap": 1.443,
            "correlation": 0.539,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 49,
          "previousRank": 38,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.012,
          "metrics": {
            "momentum5d": 3.024,
            "momentum20d": -2.177,
            "realizedVol10dAnnualized": 13.24,
            "volumeRatio": 0.887,
            "atrPct": 1.906,
            "gapPct": 0.455,
            "relativeStrength5dPct": 1.111,
            "relativeStrength20dPct": -3.647,
            "avgDollarVolume10d": 2040308602,
            "maxSelectedCorrelation": 0.325
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.286,
            "participation": -0.081,
            "volatility": -0.633,
            "gap": 1.056,
            "correlation": 0.325,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 50,
          "previousRank": 58,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.003,
          "metrics": {
            "momentum5d": -1.266,
            "momentum20d": -9.348,
            "realizedVol10dAnnualized": 32.04,
            "volumeRatio": 1.469,
            "atrPct": 2.774,
            "gapPct": -2.795,
            "relativeStrength5dPct": -3.179,
            "relativeStrength20dPct": -10.818,
            "avgDollarVolume10d": 832382268,
            "maxSelectedCorrelation": 0.749
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.806,
            "participation": 2.361,
            "volatility": 0.371,
            "gap": 1.855,
            "correlation": 0.749,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 51,
          "previousRank": 45,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "REJECT",
          "quantScore": -0.013,
          "metrics": {
            "momentum5d": 4.336,
            "momentum20d": -5.293,
            "realizedVol10dAnnualized": 17.12,
            "volumeRatio": 0.831,
            "atrPct": 1.496,
            "gapPct": -0.413,
            "relativeStrength5dPct": 2.423,
            "relativeStrength20dPct": -6.763,
            "avgDollarVolume10d": 1869872118,
            "maxSelectedCorrelation": 0.861
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.415,
            "participation": -0.314,
            "volatility": -0.746,
            "gap": 0.279,
            "correlation": 0.861,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 52,
          "previousRank": 39,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "REJECT",
          "quantScore": -0.022,
          "metrics": {
            "momentum5d": 2.881,
            "momentum20d": 7.196,
            "realizedVol10dAnnualized": 9.81,
            "volumeRatio": 0.759,
            "atrPct": 1.375,
            "gapPct": -0.851,
            "relativeStrength5dPct": 0.968,
            "relativeStrength20dPct": 5.726,
            "avgDollarVolume10d": 1480180245,
            "maxSelectedCorrelation": 0.853
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.618,
            "participation": -0.616,
            "volatility": -1.019,
            "gap": 0.114,
            "correlation": 0.853,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 53,
          "previousRank": 74,
          "rankChange": 21,
          "rankChangeLabel": "+21",
          "status": "WATCH",
          "quantScore": -0.039,
          "metrics": {
            "momentum5d": 3.371,
            "momentum20d": -0.145,
            "realizedVol10dAnnualized": 17.37,
            "volumeRatio": 0.618,
            "atrPct": 1.663,
            "gapPct": 0.161,
            "relativeStrength5dPct": 1.458,
            "relativeStrength20dPct": -1.615,
            "avgDollarVolume10d": 1572926647,
            "maxSelectedCorrelation": 0.53
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.43,
            "participation": -1.208,
            "volatility": -0.648,
            "gap": 0.792,
            "correlation": 0.53,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 54,
          "previousRank": 44,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.06,
          "metrics": {
            "momentum5d": 1.22,
            "momentum20d": -10.634,
            "realizedVol10dAnnualized": 40.81,
            "volumeRatio": 0.613,
            "atrPct": 3.273,
            "gapPct": -0.864,
            "relativeStrength5dPct": -0.693,
            "relativeStrength20dPct": -12.104,
            "avgDollarVolume10d": 1920171057,
            "maxSelectedCorrelation": 0.586
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.383,
            "participation": -1.227,
            "volatility": 0.891,
            "gap": 0.125,
            "correlation": 0.586,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 55,
          "previousRank": 68,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.068,
          "metrics": {
            "momentum5d": -2.658,
            "momentum20d": -6.673,
            "realizedVol10dAnnualized": 22.92,
            "volumeRatio": 0.784,
            "atrPct": 5.059,
            "gapPct": -3.179,
            "relativeStrength5dPct": -4.571,
            "relativeStrength20dPct": -8.143,
            "avgDollarVolume10d": 2143327572,
            "maxSelectedCorrelation": 0.521
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.968,
            "participation": -0.511,
            "volatility": 1.353,
            "gap": 2.199,
            "correlation": 0.521,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 56,
          "previousRank": 50,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.113,
          "metrics": {
            "momentum5d": 2.428,
            "momentum20d": 5.481,
            "realizedVol10dAnnualized": 8.9,
            "volumeRatio": 0.833,
            "atrPct": 1.207,
            "gapPct": -0.773,
            "relativeStrength5dPct": 0.515,
            "relativeStrength20dPct": 4.01,
            "avgDollarVolume10d": 23159433401,
            "maxSelectedCorrelation": 0.698
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.466,
            "participation": -0.304,
            "volatility": -1.136,
            "gap": 0.044,
            "correlation": 0.698,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 57,
          "previousRank": 51,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.116,
          "metrics": {
            "momentum5d": -2.988,
            "momentum20d": -9.52,
            "realizedVol10dAnnualized": 23.73,
            "volumeRatio": 1.792,
            "atrPct": 3.378,
            "gapPct": -0.706,
            "relativeStrength5dPct": -4.901,
            "relativeStrength20dPct": -10.99,
            "avgDollarVolume10d": 954680568,
            "maxSelectedCorrelation": 0.329
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.141,
            "participation": 3.717,
            "volatility": 0.464,
            "gap": 0.017,
            "correlation": 0.329,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 58,
          "previousRank": 47,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": -0.151,
          "metrics": {
            "momentum5d": 0.799,
            "momentum20d": 2.11,
            "realizedVol10dAnnualized": 10.34,
            "volumeRatio": 0.822,
            "atrPct": 2.035,
            "gapPct": 0.681,
            "relativeStrength5dPct": -1.114,
            "relativeStrength20dPct": 0.64,
            "avgDollarVolume10d": 1850790808,
            "maxSelectedCorrelation": 0.448
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.027,
            "participation": -0.35,
            "volatility": -0.646,
            "gap": 1.259,
            "correlation": 0.448,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 59,
          "previousRank": 63,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "REJECT",
          "quantScore": -0.154,
          "metrics": {
            "momentum5d": 3.076,
            "momentum20d": -3.989,
            "realizedVol10dAnnualized": 13.31,
            "volumeRatio": 0.776,
            "atrPct": 1.48,
            "gapPct": 0.07,
            "relativeStrength5dPct": 1.163,
            "relativeStrength20dPct": -5.459,
            "avgDollarVolume10d": 569349962,
            "maxSelectedCorrelation": 0.892
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.226,
            "participation": -0.547,
            "volatility": -0.863,
            "gap": 0.711,
            "correlation": 0.892,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 60,
          "previousRank": 73,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.171,
          "metrics": {
            "momentum5d": -0.404,
            "momentum20d": -8.264,
            "realizedVol10dAnnualized": 19.87,
            "volumeRatio": 1.457,
            "atrPct": 2.054,
            "gapPct": 0.114,
            "relativeStrength5dPct": -2.318,
            "relativeStrength20dPct": -9.734,
            "avgDollarVolume10d": 660897533,
            "maxSelectedCorrelation": 0.525
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.601,
            "participation": 2.311,
            "volatility": -0.365,
            "gap": 0.751,
            "correlation": 0.525,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 61,
          "previousRank": 81,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": -0.173,
          "metrics": {
            "momentum5d": -0.143,
            "momentum20d": -0.295,
            "realizedVol10dAnnualized": 22.26,
            "volumeRatio": 1.063,
            "atrPct": 1.91,
            "gapPct": -0.529,
            "relativeStrength5dPct": -2.056,
            "relativeStrength20dPct": -1.765,
            "avgDollarVolume10d": 878398933,
            "maxSelectedCorrelation": 0.327
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.245,
            "participation": 0.658,
            "volatility": -0.375,
            "gap": 0.175,
            "correlation": 0.327,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 62,
          "previousRank": 67,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.209,
          "metrics": {
            "momentum5d": 2.315,
            "momentum20d": -2.307,
            "realizedVol10dAnnualized": 11.3,
            "volumeRatio": 0.959,
            "atrPct": 1.235,
            "gapPct": -0.618,
            "relativeStrength5dPct": 0.402,
            "relativeStrength20dPct": -3.777,
            "avgDollarVolume10d": 745454980,
            "maxSelectedCorrelation": 0.781
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.146,
            "participation": 0.222,
            "volatility": -1.053,
            "gap": 0.095,
            "correlation": 0.781,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 63,
          "previousRank": 106,
          "rankChange": 43,
          "rankChangeLabel": "+43",
          "status": "WATCH",
          "quantScore": -0.236,
          "metrics": {
            "momentum5d": 0.232,
            "momentum20d": 1.005,
            "realizedVol10dAnnualized": 12.31,
            "volumeRatio": 1.01,
            "atrPct": 1.492,
            "gapPct": 0.467,
            "relativeStrength5dPct": -1.682,
            "relativeStrength20dPct": -0.465,
            "avgDollarVolume10d": 1397009080,
            "maxSelectedCorrelation": 0.403
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.124,
            "participation": 0.438,
            "volatility": -0.885,
            "gap": 1.067,
            "correlation": 0.403,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 64,
          "previousRank": 56,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.238,
          "metrics": {
            "momentum5d": 0.46,
            "momentum20d": -2.216,
            "realizedVol10dAnnualized": 12.17,
            "volumeRatio": 0.925,
            "atrPct": 1.99,
            "gapPct": 0.414,
            "relativeStrength5dPct": -1.453,
            "relativeStrength20dPct": -3.686,
            "avgDollarVolume10d": 1408789626,
            "maxSelectedCorrelation": 0.276
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.204,
            "participation": 0.082,
            "volatility": -0.618,
            "gap": 1.02,
            "correlation": 0.276,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 65,
          "previousRank": 62,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.239,
          "metrics": {
            "momentum5d": 0.868,
            "momentum20d": -2.121,
            "realizedVol10dAnnualized": 15.99,
            "volumeRatio": 0.959,
            "atrPct": 1.499,
            "gapPct": -1.582,
            "relativeStrength5dPct": -1.045,
            "relativeStrength20dPct": -3.591,
            "avgDollarVolume10d": 1218042239,
            "maxSelectedCorrelation": 0.755
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.122,
            "participation": 0.224,
            "volatility": -0.776,
            "gap": 0.768,
            "correlation": 0.755,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 66,
          "previousRank": 35,
          "rankChange": -31,
          "rankChangeLabel": "-31",
          "status": "WATCH",
          "quantScore": -0.257,
          "metrics": {
            "momentum5d": -0.012,
            "momentum20d": -7.97,
            "realizedVol10dAnnualized": 25.84,
            "volumeRatio": 0.621,
            "atrPct": 3.304,
            "gapPct": -0.736,
            "relativeStrength5dPct": -1.926,
            "relativeStrength20dPct": -9.44,
            "avgDollarVolume10d": 728653041,
            "maxSelectedCorrelation": 0.467
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.515,
            "participation": -1.195,
            "volatility": 0.483,
            "gap": 0.01,
            "correlation": 0.467,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 67,
          "previousRank": 76,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "REJECT",
          "quantScore": -0.26,
          "metrics": {
            "momentum5d": 0.515,
            "momentum20d": -3.773,
            "realizedVol10dAnnualized": 16.65,
            "volumeRatio": 1.159,
            "atrPct": 1.395,
            "gapPct": -1.096,
            "relativeStrength5dPct": -1.398,
            "relativeStrength20dPct": -5.243,
            "avgDollarVolume10d": 1237531288,
            "maxSelectedCorrelation": 0.817
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.253,
            "participation": 1.063,
            "volatility": -0.814,
            "gap": 0.333,
            "correlation": 0.817,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 68,
          "previousRank": 61,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.27,
          "metrics": {
            "momentum5d": -1.56,
            "momentum20d": -16.007,
            "realizedVol10dAnnualized": 30.6,
            "volumeRatio": 1.256,
            "atrPct": 3.229,
            "gapPct": -0.18,
            "relativeStrength5dPct": -3.473,
            "relativeStrength20dPct": -17.477,
            "avgDollarVolume10d": 644071134,
            "maxSelectedCorrelation": 0.478
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.118,
            "participation": 1.47,
            "volatility": 0.578,
            "gap": 0.487,
            "correlation": 0.478,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 69,
          "previousRank": 94,
          "rankChange": 25,
          "rankChangeLabel": "+25",
          "status": "WATCH",
          "quantScore": -0.282,
          "metrics": {
            "momentum5d": 0.172,
            "momentum20d": -9.209,
            "realizedVol10dAnnualized": 24.77,
            "volumeRatio": 0.797,
            "atrPct": 2.557,
            "gapPct": 0.16,
            "relativeStrength5dPct": -1.741,
            "relativeStrength20dPct": -10.679,
            "avgDollarVolume10d": 2426666730,
            "maxSelectedCorrelation": 0.517
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.527,
            "participation": -0.457,
            "volatility": 0.047,
            "gap": 0.792,
            "correlation": 0.517,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 70,
          "previousRank": 66,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.283,
          "metrics": {
            "momentum5d": 0.264,
            "momentum20d": -4.989,
            "realizedVol10dAnnualized": 20.79,
            "volumeRatio": 0.619,
            "atrPct": 2.577,
            "gapPct": 0.276,
            "relativeStrength5dPct": -1.649,
            "relativeStrength20dPct": -6.459,
            "avgDollarVolume10d": 1161401885,
            "maxSelectedCorrelation": 0.413
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.348,
            "participation": -1.204,
            "volatility": -0.055,
            "gap": 0.896,
            "correlation": 0.413,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 71,
          "previousRank": 34,
          "rankChange": -37,
          "rankChangeLabel": "-37",
          "status": "WATCH",
          "quantScore": -0.292,
          "metrics": {
            "momentum5d": -1.976,
            "momentum20d": -0.79,
            "realizedVol10dAnnualized": 20.5,
            "volumeRatio": 0.636,
            "atrPct": 3.654,
            "gapPct": -0.753,
            "relativeStrength5dPct": -3.889,
            "relativeStrength20dPct": -2.26,
            "avgDollarVolume10d": 1263478652,
            "maxSelectedCorrelation": 0.409
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.613,
            "participation": -1.133,
            "volatility": 0.522,
            "gap": 0.026,
            "correlation": 0.409,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 72,
          "previousRank": 64,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.317,
          "metrics": {
            "momentum5d": -2.186,
            "momentum20d": -3.505,
            "realizedVol10dAnnualized": 25.83,
            "volumeRatio": 1.022,
            "atrPct": 2.718,
            "gapPct": -0.751,
            "relativeStrength5dPct": -4.099,
            "relativeStrength20dPct": -4.975,
            "avgDollarVolume10d": 747163345,
            "maxSelectedCorrelation": 0.714
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.757,
            "participation": 0.489,
            "volatility": 0.165,
            "gap": 0.024,
            "correlation": 0.714,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 73,
          "previousRank": 57,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "REJECT",
          "quantScore": -0.332,
          "metrics": {
            "momentum5d": 1.743,
            "momentum20d": -8.076,
            "realizedVol10dAnnualized": 17.14,
            "volumeRatio": 0.671,
            "atrPct": 1.762,
            "gapPct": 0.36,
            "relativeStrength5dPct": -0.17,
            "relativeStrength20dPct": -9.546,
            "avgDollarVolume10d": 1128481246,
            "maxSelectedCorrelation": 0.808
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.185,
            "participation": -0.985,
            "volatility": -0.601,
            "gap": 0.971,
            "correlation": 0.808,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 74,
          "previousRank": 87,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.333,
          "metrics": {
            "momentum5d": 1.365,
            "momentum20d": -2.761,
            "realizedVol10dAnnualized": 11.28,
            "volumeRatio": 0.859,
            "atrPct": 1.139,
            "gapPct": 0.342,
            "relativeStrength5dPct": -0.548,
            "relativeStrength20dPct": -4.231,
            "avgDollarVolume10d": 917624954,
            "maxSelectedCorrelation": 0.271
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.053,
            "participation": -0.198,
            "volatility": -1.105,
            "gap": 0.955,
            "correlation": 0.271,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 75,
          "previousRank": 84,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.34,
          "metrics": {
            "momentum5d": 0.498,
            "momentum20d": -13.429,
            "realizedVol10dAnnualized": 23.8,
            "volumeRatio": 0.862,
            "atrPct": 2.664,
            "gapPct": -0.733,
            "relativeStrength5dPct": -1.416,
            "relativeStrength20dPct": -14.899,
            "avgDollarVolume10d": 512682176,
            "maxSelectedCorrelation": 0.579
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.627,
            "participation": -0.184,
            "volatility": 0.078,
            "gap": 0.008,
            "correlation": 0.579,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 76,
          "previousRank": 91,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.345,
          "metrics": {
            "momentum5d": 0.45,
            "momentum20d": -8.903,
            "realizedVol10dAnnualized": 15.2,
            "volumeRatio": 1.006,
            "atrPct": 2.119,
            "gapPct": -0.589,
            "relativeStrength5dPct": -1.463,
            "relativeStrength20dPct": -10.373,
            "avgDollarVolume10d": 1628834641,
            "maxSelectedCorrelation": 0.683
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.463,
            "participation": 0.421,
            "volatility": -0.462,
            "gap": 0.121,
            "correlation": 0.683,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 77,
          "previousRank": 95,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": -0.348,
          "metrics": {
            "momentum5d": 0.486,
            "momentum20d": -3.221,
            "realizedVol10dAnnualized": 8.88,
            "volumeRatio": 1.293,
            "atrPct": 0.951,
            "gapPct": -0.795,
            "relativeStrength5dPct": -1.427,
            "relativeStrength20dPct": -4.691,
            "avgDollarVolume10d": 1644319239,
            "maxSelectedCorrelation": 0.736
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.238,
            "participation": 1.625,
            "volatility": -1.276,
            "gap": 0.063,
            "correlation": 0.736,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 78,
          "previousRank": 75,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.352,
          "metrics": {
            "momentum5d": 0.262,
            "momentum20d": -8.754,
            "realizedVol10dAnnualized": 17.31,
            "volumeRatio": 0.964,
            "atrPct": 2.062,
            "gapPct": -1.264,
            "relativeStrength5dPct": -1.651,
            "relativeStrength20dPct": -10.224,
            "avgDollarVolume10d": 1056339610,
            "maxSelectedCorrelation": 0.649
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.493,
            "participation": 0.245,
            "volatility": -0.433,
            "gap": 0.483,
            "correlation": 0.649,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 79,
          "previousRank": 53,
          "rankChange": -26,
          "rankChangeLabel": "-26",
          "status": "REJECT",
          "quantScore": -0.356,
          "metrics": {
            "momentum5d": 0.882,
            "momentum20d": 0.367,
            "realizedVol10dAnnualized": 17.64,
            "volumeRatio": 0.543,
            "atrPct": 1.496,
            "gapPct": -1.359,
            "relativeStrength5dPct": -1.031,
            "relativeStrength20dPct": -1.103,
            "avgDollarVolume10d": 448332316,
            "maxSelectedCorrelation": 0.847
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.024,
            "participation": -1.52,
            "volatility": -0.731,
            "gap": 0.569,
            "correlation": 0.847,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 80,
          "previousRank": 72,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.366,
          "metrics": {
            "momentum5d": 1.307,
            "momentum20d": -4.734,
            "realizedVol10dAnnualized": 9.91,
            "volumeRatio": 0.893,
            "atrPct": 1.25,
            "gapPct": 0.208,
            "relativeStrength5dPct": -0.606,
            "relativeStrength20dPct": -6.204,
            "avgDollarVolume10d": 498949605,
            "maxSelectedCorrelation": 0.754
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.139,
            "participation": -0.054,
            "volatility": -1.084,
            "gap": 0.834,
            "correlation": 0.754,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 81,
          "previousRank": 115,
          "rankChange": 34,
          "rankChangeLabel": "+34",
          "status": "WATCH",
          "quantScore": -0.368,
          "metrics": {
            "momentum5d": -1.823,
            "momentum20d": 0.756,
            "realizedVol10dAnnualized": 16.37,
            "volumeRatio": 0.999,
            "atrPct": 1.862,
            "gapPct": 0.436,
            "relativeStrength5dPct": -3.736,
            "relativeStrength20dPct": -0.714,
            "avgDollarVolume10d": 862955520,
            "maxSelectedCorrelation": 0.577
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.524,
            "participation": 0.391,
            "volatility": -0.569,
            "gap": 1.039,
            "correlation": 0.577,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 82,
          "previousRank": 93,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.384,
          "metrics": {
            "momentum5d": -0.792,
            "momentum20d": -7.294,
            "realizedVol10dAnnualized": 15.5,
            "volumeRatio": 1.231,
            "atrPct": 1.795,
            "gapPct": -1.142,
            "relativeStrength5dPct": -2.705,
            "relativeStrength20dPct": -8.764,
            "avgDollarVolume10d": 1156419908,
            "maxSelectedCorrelation": 0.796
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.637,
            "participation": 1.365,
            "volatility": -0.63,
            "gap": 0.374,
            "correlation": 0.796,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 83,
          "previousRank": 77,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.386,
          "metrics": {
            "momentum5d": 1.913,
            "momentum20d": 1.47,
            "realizedVol10dAnnualized": 7.4,
            "volumeRatio": 0.653,
            "atrPct": 0.857,
            "gapPct": -0.426,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 33285339048,
            "maxSelectedCorrelation": 0.693
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.214,
            "participation": -1.061,
            "volatility": -1.369,
            "gap": 0.267,
            "correlation": 0.693,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 84,
          "previousRank": 104,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": -0.41,
          "metrics": {
            "momentum5d": 0.867,
            "momentum20d": -12.269,
            "realizedVol10dAnnualized": 15.27,
            "volumeRatio": 0.79,
            "atrPct": 2.198,
            "gapPct": -1.743,
            "relativeStrength5dPct": -1.046,
            "relativeStrength20dPct": -13.739,
            "avgDollarVolume10d": 1058204315,
            "maxSelectedCorrelation": 0.534
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.513,
            "participation": -0.487,
            "volatility": -0.417,
            "gap": 0.913,
            "correlation": 0.534,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 85,
          "previousRank": 100,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.412,
          "metrics": {
            "momentum5d": 0.049,
            "momentum20d": -6.7,
            "realizedVol10dAnnualized": 10.31,
            "volumeRatio": 1.06,
            "atrPct": 1.707,
            "gapPct": -1.189,
            "relativeStrength5dPct": -1.864,
            "relativeStrength20dPct": -8.17,
            "avgDollarVolume10d": 1010329060,
            "maxSelectedCorrelation": 0.389
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.454,
            "participation": 0.645,
            "volatility": -0.825,
            "gap": 0.416,
            "correlation": 0.389,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 86,
          "previousRank": 82,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.414,
          "metrics": {
            "momentum5d": -0.088,
            "momentum20d": -6.4,
            "realizedVol10dAnnualized": 19.71,
            "volumeRatio": 0.737,
            "atrPct": 2.102,
            "gapPct": -0.333,
            "relativeStrength5dPct": -2.001,
            "relativeStrength20dPct": -7.87,
            "avgDollarVolume10d": 1026151017,
            "maxSelectedCorrelation": 0.503
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.469,
            "participation": -0.708,
            "volatility": -0.344,
            "gap": 0.35,
            "correlation": 0.503,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 87,
          "previousRank": 78,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "REJECT",
          "quantScore": -0.427,
          "metrics": {
            "momentum5d": -1.302,
            "momentum20d": -5.964,
            "realizedVol10dAnnualized": 22.46,
            "volumeRatio": 1.051,
            "atrPct": 1.573,
            "gapPct": -1.91,
            "relativeStrength5dPct": -3.215,
            "relativeStrength20dPct": -7.434,
            "avgDollarVolume10d": 2962099826,
            "maxSelectedCorrelation": 0.834
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.683,
            "participation": 0.61,
            "volatility": -0.552,
            "gap": 1.062,
            "correlation": 0.834,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 88,
          "previousRank": 59,
          "rankChange": -29,
          "rankChangeLabel": "-29",
          "status": "WATCH",
          "quantScore": -0.437,
          "metrics": {
            "momentum5d": -2.182,
            "momentum20d": -9.859,
            "realizedVol10dAnnualized": 28.37,
            "volumeRatio": 0.612,
            "atrPct": 3.501,
            "gapPct": 0.111,
            "relativeStrength5dPct": -4.095,
            "relativeStrength20dPct": -11.329,
            "avgDollarVolume10d": 2047852442,
            "maxSelectedCorrelation": 0.315
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1,
            "participation": -1.232,
            "volatility": 0.662,
            "gap": 0.748,
            "correlation": 0.315,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 89,
          "previousRank": 107,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": -0.438,
          "metrics": {
            "momentum5d": -1.734,
            "momentum20d": -3.819,
            "realizedVol10dAnnualized": 23.37,
            "volumeRatio": 0.701,
            "atrPct": 2.473,
            "gapPct": 0.063,
            "relativeStrength5dPct": -3.647,
            "relativeStrength20dPct": -5.289,
            "avgDollarVolume10d": 1230088671,
            "maxSelectedCorrelation": 0.384
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.683,
            "participation": -0.858,
            "volatility": -0.038,
            "gap": 0.705,
            "correlation": 0.384,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 90,
          "previousRank": 105,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.444,
          "metrics": {
            "momentum5d": 0.655,
            "momentum20d": -6.195,
            "realizedVol10dAnnualized": 9.71,
            "volumeRatio": 1.032,
            "atrPct": 1.239,
            "gapPct": -0.889,
            "relativeStrength5dPct": -1.258,
            "relativeStrength20dPct": -7.666,
            "avgDollarVolume10d": 1966366350,
            "maxSelectedCorrelation": 0.497
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.32,
            "participation": 0.531,
            "volatility": -1.096,
            "gap": 0.147,
            "correlation": 0.497,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 91,
          "previousRank": 98,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.453,
          "metrics": {
            "momentum5d": -0.378,
            "momentum20d": -6.769,
            "realizedVol10dAnnualized": 13.81,
            "volumeRatio": 0.985,
            "atrPct": 1.735,
            "gapPct": -1.232,
            "relativeStrength5dPct": -2.291,
            "relativeStrength20dPct": -8.239,
            "avgDollarVolume10d": 2593814269,
            "maxSelectedCorrelation": 0.619
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.538,
            "participation": 0.33,
            "volatility": -0.71,
            "gap": 0.455,
            "correlation": 0.619,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 92,
          "previousRank": 69,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": -0.466,
          "metrics": {
            "momentum5d": -4.016,
            "momentum20d": -11.317,
            "realizedVol10dAnnualized": 32.08,
            "volumeRatio": 0.707,
            "atrPct": 4.265,
            "gapPct": -1.516,
            "relativeStrength5dPct": -5.929,
            "relativeStrength20dPct": -12.787,
            "avgDollarVolume10d": 396215638,
            "maxSelectedCorrelation": 0.433
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.405,
            "participation": -0.836,
            "volatility": 1.182,
            "gap": 0.71,
            "correlation": 0.433,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 93,
          "previousRank": 88,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.486,
          "metrics": {
            "momentum5d": -1.668,
            "momentum20d": -6.889,
            "realizedVol10dAnnualized": 18.46,
            "volumeRatio": 0.85,
            "atrPct": 2.259,
            "gapPct": -2.039,
            "relativeStrength5dPct": -3.581,
            "relativeStrength20dPct": -8.359,
            "avgDollarVolume10d": 1128848401,
            "maxSelectedCorrelation": 0.551
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.788,
            "participation": -0.233,
            "volatility": -0.294,
            "gap": 1.177,
            "correlation": 0.551,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 94,
          "previousRank": 70,
          "rankChange": -24,
          "rankChangeLabel": "-24",
          "status": "WATCH",
          "quantScore": -0.494,
          "metrics": {
            "momentum5d": 1.24,
            "momentum20d": -2.828,
            "realizedVol10dAnnualized": 8.85,
            "volumeRatio": 0.754,
            "atrPct": 0.877,
            "gapPct": -0.542,
            "relativeStrength5dPct": -0.673,
            "relativeStrength20dPct": -4.298,
            "avgDollarVolume10d": 1766634999,
            "maxSelectedCorrelation": 0.702
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.079,
            "participation": -0.636,
            "volatility": -1.317,
            "gap": 0.163,
            "correlation": 0.702,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 95,
          "previousRank": 102,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.506,
          "metrics": {
            "momentum5d": -1.461,
            "momentum20d": -14.406,
            "realizedVol10dAnnualized": 16.71,
            "volumeRatio": 1.2,
            "atrPct": 2.232,
            "gapPct": -1.82,
            "relativeStrength5dPct": -3.374,
            "relativeStrength20dPct": -15.876,
            "avgDollarVolume10d": 1804381126,
            "maxSelectedCorrelation": 0.697
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.038,
            "participation": 1.233,
            "volatility": -0.358,
            "gap": 0.982,
            "correlation": 0.697,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 96,
          "previousRank": 86,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "REJECT",
          "quantScore": -0.513,
          "metrics": {
            "momentum5d": -0.068,
            "momentum20d": -5.759,
            "realizedVol10dAnnualized": 10.25,
            "volumeRatio": 0.958,
            "atrPct": 1.333,
            "gapPct": -1.098,
            "relativeStrength5dPct": -1.981,
            "relativeStrength20dPct": -7.229,
            "avgDollarVolume10d": 6960509151,
            "maxSelectedCorrelation": 0.806
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.44,
            "participation": 0.218,
            "volatility": -1.029,
            "gap": 0.335,
            "correlation": 0.806,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 97,
          "previousRank": 79,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": -0.528,
          "metrics": {
            "momentum5d": 0.575,
            "momentum20d": -5.699,
            "realizedVol10dAnnualized": 13.5,
            "volumeRatio": 0.634,
            "atrPct": 1.544,
            "gapPct": -0.865,
            "relativeStrength5dPct": -1.338,
            "relativeStrength20dPct": -7.169,
            "avgDollarVolume10d": 651154808,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.316,
            "participation": -1.138,
            "volatility": -0.823,
            "gap": 0.126,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 98,
          "previousRank": 103,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.545,
          "metrics": {
            "momentum5d": -0.831,
            "momentum20d": -7.585,
            "realizedVol10dAnnualized": 10.01,
            "volumeRatio": 1.141,
            "atrPct": 1.251,
            "gapPct": 0.195,
            "relativeStrength5dPct": -2.744,
            "relativeStrength20dPct": -9.055,
            "avgDollarVolume10d": 309992933,
            "maxSelectedCorrelation": 0.689
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.656,
            "participation": 0.985,
            "volatility": -1.081,
            "gap": 0.823,
            "correlation": 0.689,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 99,
          "previousRank": 83,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.563,
          "metrics": {
            "momentum5d": -0.026,
            "momentum20d": -9.746,
            "realizedVol10dAnnualized": 9.37,
            "volumeRatio": 0.797,
            "atrPct": 1.948,
            "gapPct": -0.258,
            "relativeStrength5dPct": -1.939,
            "relativeStrength20dPct": -11.216,
            "avgDollarVolume10d": 1347076315,
            "maxSelectedCorrelation": 0.495
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.586,
            "participation": -0.455,
            "volatility": -0.721,
            "gap": 0.417,
            "correlation": 0.495,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 100,
          "previousRank": 89,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": -0.57,
          "metrics": {
            "momentum5d": -1.97,
            "momentum20d": -6.888,
            "realizedVol10dAnnualized": 11.85,
            "volumeRatio": 1.032,
            "atrPct": 2.006,
            "gapPct": -0.106,
            "relativeStrength5dPct": -3.883,
            "relativeStrength20dPct": -8.358,
            "avgDollarVolume10d": 526707054,
            "maxSelectedCorrelation": 0.415
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.846,
            "participation": 0.531,
            "volatility": -0.619,
            "gap": 0.554,
            "correlation": 0.415,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 101,
          "previousRank": 97,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.581,
          "metrics": {
            "momentum5d": -2.776,
            "momentum20d": -9.343,
            "realizedVol10dAnnualized": 22.14,
            "volumeRatio": 0.945,
            "atrPct": 2.487,
            "gapPct": -1.254,
            "relativeStrength5dPct": -4.689,
            "relativeStrength20dPct": -10.813,
            "avgDollarVolume10d": 1231081922,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.093,
            "participation": 0.164,
            "volatility": -0.066,
            "gap": 0.475,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 102,
          "previousRank": 99,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.625,
          "metrics": {
            "momentum5d": -1.492,
            "momentum20d": -9.592,
            "realizedVol10dAnnualized": 17.46,
            "volumeRatio": 0.726,
            "atrPct": 2.279,
            "gapPct": -0.37,
            "relativeStrength5dPct": -3.405,
            "relativeStrength20dPct": -11.062,
            "avgDollarVolume10d": 597598796,
            "maxSelectedCorrelation": 0.694
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.859,
            "participation": -0.755,
            "volatility": -0.311,
            "gap": 0.317,
            "correlation": 0.694,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 103,
          "previousRank": 110,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.628,
          "metrics": {
            "momentum5d": -2.21,
            "momentum20d": -10.564,
            "realizedVol10dAnnualized": 15.65,
            "volumeRatio": 0.982,
            "atrPct": 2.34,
            "gapPct": -0.888,
            "relativeStrength5dPct": -4.123,
            "relativeStrength20dPct": -12.034,
            "avgDollarVolume10d": 706691771,
            "maxSelectedCorrelation": 0.763
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.033,
            "participation": 0.319,
            "volatility": -0.33,
            "gap": 0.147,
            "correlation": 0.763,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 104,
          "previousRank": 101,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.632,
          "metrics": {
            "momentum5d": -1.764,
            "momentum20d": -4.514,
            "realizedVol10dAnnualized": 16.86,
            "volumeRatio": 0.893,
            "atrPct": 1.4,
            "gapPct": -0.918,
            "relativeStrength5dPct": -3.677,
            "relativeStrength20dPct": -5.984,
            "avgDollarVolume10d": 564889874,
            "maxSelectedCorrelation": 0.658
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.715,
            "participation": -0.054,
            "volatility": -0.805,
            "gap": 0.174,
            "correlation": 0.658,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 105,
          "previousRank": 116,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.64,
          "metrics": {
            "momentum5d": -2.376,
            "momentum20d": -3.965,
            "realizedVol10dAnnualized": 18.05,
            "volumeRatio": 0.655,
            "atrPct": 1.921,
            "gapPct": 0.561,
            "relativeStrength5dPct": -4.289,
            "relativeStrength20dPct": -5.435,
            "avgDollarVolume10d": 1805862601,
            "maxSelectedCorrelation": 0.578
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.811,
            "participation": -1.054,
            "volatility": -0.489,
            "gap": 1.151,
            "correlation": 0.578,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 106,
          "previousRank": 85,
          "rankChange": -21,
          "rankChangeLabel": "-21",
          "status": "WATCH",
          "quantScore": -0.663,
          "metrics": {
            "momentum5d": -2.836,
            "momentum20d": 7.846,
            "realizedVol10dAnnualized": 20.06,
            "volumeRatio": 0.556,
            "atrPct": 0.845,
            "gapPct": 0,
            "relativeStrength5dPct": -4.749,
            "relativeStrength20dPct": 6.376,
            "avgDollarVolume10d": 429499222,
            "maxSelectedCorrelation": 0.591
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.444,
            "participation": -1.466,
            "volatility": -1.016,
            "gap": 0.649,
            "correlation": 0.591,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 107,
          "previousRank": 92,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.665,
          "metrics": {
            "momentum5d": -2.938,
            "momentum20d": -9.816,
            "realizedVol10dAnnualized": 24.23,
            "volumeRatio": 0.455,
            "atrPct": 3.411,
            "gapPct": -0.636,
            "relativeStrength5dPct": -4.851,
            "relativeStrength20dPct": -11.286,
            "avgDollarVolume10d": 2032571334,
            "maxSelectedCorrelation": 0.552
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.142,
            "participation": -1.891,
            "volatility": 0.496,
            "gap": 0.079,
            "correlation": 0.552,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 108,
          "previousRank": 108,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.677,
          "metrics": {
            "momentum5d": -2.072,
            "momentum20d": -8.701,
            "realizedVol10dAnnualized": 22.5,
            "volumeRatio": 0.483,
            "atrPct": 2.394,
            "gapPct": 0.304,
            "relativeStrength5dPct": -3.986,
            "relativeStrength20dPct": -10.171,
            "avgDollarVolume10d": 494850914,
            "maxSelectedCorrelation": 0.49
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.935,
            "participation": -1.772,
            "volatility": -0.106,
            "gap": 0.921,
            "correlation": 0.49,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 109,
          "previousRank": 90,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.69,
          "metrics": {
            "momentum5d": -3.682,
            "momentum20d": -7.246,
            "realizedVol10dAnnualized": 16.73,
            "volumeRatio": 1.012,
            "atrPct": 2.241,
            "gapPct": -0.201,
            "relativeStrength5dPct": -5.596,
            "relativeStrength20dPct": -8.716,
            "avgDollarVolume10d": 607379042,
            "maxSelectedCorrelation": 0.536
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.185,
            "participation": 0.446,
            "volatility": -0.352,
            "gap": 0.469,
            "correlation": 0.536,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 110,
          "previousRank": 111,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.697,
          "metrics": {
            "momentum5d": -0.039,
            "momentum20d": -2.452,
            "realizedVol10dAnnualized": 3.62,
            "volumeRatio": 0.807,
            "atrPct": 0.486,
            "gapPct": -0.349,
            "relativeStrength5dPct": -1.952,
            "relativeStrength20dPct": -3.922,
            "avgDollarVolume10d": 6262787333,
            "maxSelectedCorrelation": 0.567
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.308,
            "participation": -0.417,
            "volatility": -1.678,
            "gap": 0.336,
            "correlation": 0.567,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 111,
          "previousRank": 109,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.717,
          "metrics": {
            "momentum5d": -0.078,
            "momentum20d": -3.204,
            "realizedVol10dAnnualized": 4.85,
            "volumeRatio": 0.739,
            "atrPct": 0.693,
            "gapPct": -0.744,
            "relativeStrength5dPct": -1.991,
            "relativeStrength20dPct": -4.674,
            "avgDollarVolume10d": 4266997850,
            "maxSelectedCorrelation": 0.735
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.344,
            "participation": -0.699,
            "volatility": -1.53,
            "gap": 0.018,
            "correlation": 0.735,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 112,
          "previousRank": 96,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "REJECT",
          "quantScore": -0.743,
          "metrics": {
            "momentum5d": -2.903,
            "momentum20d": -9.331,
            "realizedVol10dAnnualized": 10.41,
            "volumeRatio": 1.089,
            "atrPct": 1.805,
            "gapPct": -0.164,
            "relativeStrength5dPct": -4.816,
            "relativeStrength20dPct": -10.801,
            "avgDollarVolume10d": 677092591,
            "maxSelectedCorrelation": 0.823
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.117,
            "participation": 0.767,
            "volatility": -0.769,
            "gap": 0.502,
            "correlation": 0.823,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 113,
          "previousRank": 113,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.779,
          "metrics": {
            "momentum5d": -1.672,
            "momentum20d": -14.217,
            "realizedVol10dAnnualized": 14.99,
            "volumeRatio": 0.816,
            "atrPct": 1.787,
            "gapPct": -1.664,
            "relativeStrength5dPct": -3.585,
            "relativeStrength20dPct": -15.687,
            "avgDollarVolume10d": 1877853580,
            "maxSelectedCorrelation": 0.488
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.071,
            "participation": -0.379,
            "volatility": -0.648,
            "gap": 0.842,
            "correlation": 0.488,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 114,
          "previousRank": 114,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.788,
          "metrics": {
            "momentum5d": -0.81,
            "momentum20d": -6.144,
            "realizedVol10dAnnualized": 6.53,
            "volumeRatio": 0.672,
            "atrPct": 1.108,
            "gapPct": -1.061,
            "relativeStrength5dPct": -2.723,
            "relativeStrength20dPct": -7.614,
            "avgDollarVolume10d": 4626857636,
            "maxSelectedCorrelation": 0.612
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.596,
            "participation": -0.979,
            "volatility": -1.257,
            "gap": 0.302,
            "correlation": 0.612,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 115,
          "previousRank": 112,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.9,
          "metrics": {
            "momentum5d": -1.289,
            "momentum20d": -5.005,
            "realizedVol10dAnnualized": 10.21,
            "volumeRatio": 0.391,
            "atrPct": 1.146,
            "gapPct": -0.949,
            "relativeStrength5dPct": -3.203,
            "relativeStrength20dPct": -6.475,
            "avgDollarVolume10d": 52536572,
            "maxSelectedCorrelation": 0.292
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.644,
            "participation": -2.159,
            "volatility": -1.132,
            "gap": 0.201,
            "correlation": 0.292,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 116,
          "previousRank": 80,
          "rankChange": -36,
          "rankChangeLabel": "-36",
          "status": "WATCH",
          "quantScore": -0.958,
          "metrics": {
            "momentum5d": -5.855,
            "momentum20d": 3.438,
            "realizedVol10dAnnualized": 25.94,
            "volumeRatio": 0.657,
            "atrPct": 0.983,
            "gapPct": 0,
            "relativeStrength5dPct": -7.768,
            "relativeStrength20dPct": 1.968,
            "avgDollarVolume10d": 217846691,
            "maxSelectedCorrelation": 0.638
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.188,
            "participation": -1.044,
            "volatility": -0.774,
            "gap": 0.649,
            "correlation": 0.638,
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
            "momentum5d": -4.423,
            "momentum20d": -15.983,
            "realizedVol10dAnnualized": 47.68,
            "volumeRatio": 1.61,
            "atrPct": 5.913,
            "gapPct": -1.683,
            "relativeStrength5dPct": -6.336,
            "relativeStrength20dPct": -17.453,
            "avgDollarVolume10d": 34586224,
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
            "momentum5d": -0.968,
            "momentum20d": -6.105,
            "realizedVol10dAnnualized": 14.04,
            "volumeRatio": 1.461,
            "atrPct": 1.4,
            "gapPct": -1.735,
            "relativeStrength5dPct": -2.881,
            "relativeStrength20dPct": -7.575,
            "avgDollarVolume10d": 35170327,
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
            "momentum5d": -2.958,
            "momentum20d": -9.382,
            "realizedVol10dAnnualized": 15.34,
            "volumeRatio": 2.155,
            "atrPct": 1.559,
            "gapPct": -1.579,
            "relativeStrength5dPct": -4.871,
            "relativeStrength20dPct": -10.852,
            "avgDollarVolume10d": 15865052,
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
              "d1": -0.834
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
              "d1": -2.962
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
              "d1": -0.615
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
              "d1": 0.937
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
              "d1": -2.517
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
              "h4": -1.101
            },
            "selectionPrice": 72.08999633789062,
            "invalidatedAt": "2026-10-08T13:30:00.000Z"
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
              "h4": -0.508
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
              "h4": -1.095
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
              "h4": -2.495
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
              "h4": -0.75
            },
            "selectionPrice": 82.51000213623047,
            "invalidatedAt": "2026-10-08T13:30:00.000Z"
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-08T23:27:01.731Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-08T23:27:05.415Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-08T20:00:00.000Z",
        "MSTR": "2026-10-08T20:00:00.000Z",
        "HPE": "2026-10-08T20:00:00.000Z",
        "SHOP": "2026-10-08T20:00:00.000Z"
      },
      "fxUsdPerEur": 1.1215791702270508,
      "fxAt": "2026-10-08T23:26:50.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
