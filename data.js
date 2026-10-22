window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-22 15:39 UTC",
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
    "value": 937.63,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -60.94,
    "total": -62.37,
    "totalPct": -6.24
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 73.26000213623047,
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
      "value": 172.38,
      "pnl": -27.62,
      "pnlPct": -13.81,
      "fxUsdPerEur": 1.1209505796432495,
      "lastPriceAt": "2026-10-22T15:39:50.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 147.67999267578125,
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
      "value": 135.4,
      "pnl": -14.6,
      "pnlPct": -9.74,
      "fxUsdPerEur": 1.1209505796432495,
      "lastPriceAt": "2026-10-22T15:39:56.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 54.45000076293945,
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
      "value": 77.63,
      "pnl": -22.37,
      "pnlPct": -22.37,
      "fxUsdPerEur": 1.1209505796432495,
      "lastPriceAt": "2026-10-22T15:39:54.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 170.5749969482422,
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
      "value": 103.66,
      "pnl": 3.66,
      "pnlPct": 3.66,
      "fxUsdPerEur": 1.1209505796432495,
      "lastPriceAt": "2026-10-22T15:39:48.000Z"
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
      "date": "2026-10-22 15:39",
      "value": 937.63
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 115 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: LMT, ADBE, IBM, NOW, NOC.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is LMT, ADBE, IBM, NOW, NOC. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "symbol": "LMT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $595.44 with sustained participation.",
        "invalidation": "Loss of $580.30 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.57: 5d momentum 10.4%, 20d 12.0%, annualized 10d realized vol 37%, volume 1.01x, max selected correlation 0.00.",
        "quantScore": 1.568,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "WATCH_ONLY",
        "setupId": "LMT-20261022-daily-quant"
      },
      {
        "symbol": "ADBE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $272.54 with sustained participation.",
        "invalidation": "Loss of $264.90 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.04: 5d momentum 6.8%, 20d 11.6%, annualized 10d realized vol 41%, volume 0.52x, max selected correlation 0.41.",
        "quantScore": 1.037,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "WATCH_ONLY",
        "setupId": "ADBE-20261022-daily-quant"
      },
      {
        "symbol": "IBM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $251.46 with sustained participation.",
        "invalidation": "Loss of $246.83 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.02: 5d momentum 6.4%, 20d 7.0%, annualized 10d realized vol 27%, volume 0.91x, max selected correlation 0.62.",
        "quantScore": 1.024,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "WATCH_ONLY",
        "setupId": "IBM-20261022-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $158.92 with sustained participation.",
        "invalidation": "Loss of $154.31 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.02: 5d momentum 5.4%, 20d 11.2%, annualized 10d realized vol 42%, volume 0.53x, max selected correlation 0.78.",
        "quantScore": 1.018,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "WATCH_ONLY",
        "setupId": "NOW-20261022-daily-quant"
      },
      {
        "symbol": "NOC",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $559.96 with sustained participation.",
        "invalidation": "Loss of $547.56 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.96: 5d momentum 10.8%, 20d 7.6%, annualized 10d realized vol 32%, volume 0.25x, max selected correlation 0.58.",
        "quantScore": 0.962,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "WATCH_ONLY",
        "setupId": "NOC-20261022-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "LMT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $595.44 with sustained participation.",
        "invalidation": "Loss of $580.30 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.57: 5d momentum 10.4%, 20d 12.0%, annualized 10d realized vol 37%, volume 1.01x, max selected correlation 0.00.",
        "quantScore": 1.568,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "UNTRIGGERED",
        "setupId": "LMT-20261022-daily-quant"
      },
      {
        "symbol": "ADBE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $272.54 with sustained participation.",
        "invalidation": "Loss of $264.90 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.04: 5d momentum 6.8%, 20d 11.6%, annualized 10d realized vol 41%, volume 0.52x, max selected correlation 0.41.",
        "quantScore": 1.037,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "UNTRIGGERED",
        "setupId": "ADBE-20261022-daily-quant"
      },
      {
        "symbol": "IBM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $251.46 with sustained participation.",
        "invalidation": "Loss of $246.83 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.02: 5d momentum 6.4%, 20d 7.0%, annualized 10d realized vol 27%, volume 0.91x, max selected correlation 0.62.",
        "quantScore": 1.024,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "UNTRIGGERED",
        "setupId": "IBM-20261022-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $158.92 with sustained participation.",
        "invalidation": "Loss of $154.31 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.02: 5d momentum 5.4%, 20d 11.2%, annualized 10d realized vol 42%, volume 0.53x, max selected correlation 0.78.",
        "quantScore": 1.018,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "UNTRIGGERED",
        "setupId": "NOW-20261022-daily-quant"
      },
      {
        "symbol": "NOC",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-25T15:39:50.156Z",
        "trigger": "Break above $559.96 with sustained participation.",
        "invalidation": "Loss of $547.56 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.96: 5d momentum 10.8%, 20d 7.6%, annualized 10d realized vol 32%, volume 0.25x, max selected correlation 0.58.",
        "quantScore": 0.962,
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
        "createdAt": "2026-10-22T15:39:50.156Z",
        "lastReviewedAt": "2026-10-22T15:39:50.156Z",
        "status": "UNTRIGGERED",
        "setupId": "NOC-20261022-daily-quant"
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
    "lastReviewedAt": "2026-10-22T15:39:50.156Z",
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
      "selectedAt": "2026-10-22T15:39:50.156Z",
      "version": 2,
      "method": "v2: momentum + relative strength vs SPY + ATR + realized volatility + volume expansion + gap; minimum $50m 10d dollar-volume for equities; abs 10d correlation <= 0.80",
      "universeSize": 115,
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
      "previousSelectedAt": "2026-10-21T15:12:53.690Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "LMT",
          "quantScore": 1.568,
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
          }
        },
        {
          "symbol": "ADBE",
          "quantScore": 1.037,
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
          }
        },
        {
          "symbol": "IBM",
          "quantScore": 1.024,
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
          }
        },
        {
          "symbol": "NOW",
          "quantScore": 1.018,
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
          }
        },
        {
          "symbol": "NOC",
          "quantScore": 0.962,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "LMT",
          "rank": 1,
          "previousRank": 24,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "SELECTED",
          "quantScore": 1.568,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.997,
            "participation": 3.385,
            "volatility": -0.038,
            "gap": 2.864,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-25T15:39:50.156Z",
          "trigger": "Break above $595.44 with sustained participation.",
          "invalidation": "Loss of $580.30 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.57: 5d momentum 10.4%, 20d 12.0%, annualized 10d realized vol 37%, volume 1.01x, max selected correlation 0.00.",
          "createdAt": "2026-10-22T15:39:50.156Z",
          "lastReviewedAt": "2026-10-22T15:39:50.156Z",
          "setupId": "LMT-20261022-daily-quant"
        },
        {
          "symbol": "ADBE",
          "rank": 2,
          "previousRank": 5,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "SELECTED",
          "quantScore": 1.037,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.511,
            "participation": 0.59,
            "volatility": 0.299,
            "gap": 1.14,
            "correlation": 0.412,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-25T15:39:50.156Z",
          "trigger": "Break above $272.54 with sustained participation.",
          "invalidation": "Loss of $264.90 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.04: 5d momentum 6.8%, 20d 11.6%, annualized 10d realized vol 41%, volume 0.52x, max selected correlation 0.41.",
          "createdAt": "2026-10-22T15:39:50.156Z",
          "lastReviewedAt": "2026-10-22T15:39:50.156Z",
          "setupId": "ADBE-20261022-daily-quant"
        },
        {
          "symbol": "IBM",
          "rank": 3,
          "previousRank": 11,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "SELECTED",
          "quantScore": 1.024,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.303,
            "participation": 2.776,
            "volatility": -0.138,
            "gap": 1.431,
            "correlation": 0.615,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-25T15:39:50.156Z",
          "trigger": "Break above $251.46 with sustained participation.",
          "invalidation": "Loss of $246.83 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.02: 5d momentum 6.4%, 20d 7.0%, annualized 10d realized vol 27%, volume 0.91x, max selected correlation 0.62.",
          "createdAt": "2026-10-22T15:39:50.156Z",
          "lastReviewedAt": "2026-10-22T15:39:50.156Z",
          "setupId": "IBM-20261022-daily-quant"
        },
        {
          "symbol": "NOW",
          "rank": 4,
          "previousRank": 2,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "SELECTED",
          "quantScore": 1.018,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.318,
            "participation": 0.684,
            "volatility": 0.611,
            "gap": 0.825,
            "correlation": 0.776,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-25T15:39:50.156Z",
          "trigger": "Break above $158.92 with sustained participation.",
          "invalidation": "Loss of $154.31 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.02: 5d momentum 5.4%, 20d 11.2%, annualized 10d realized vol 42%, volume 0.53x, max selected correlation 0.78.",
          "createdAt": "2026-10-22T15:39:50.156Z",
          "lastReviewedAt": "2026-10-22T15:39:50.156Z",
          "setupId": "NOW-20261022-daily-quant"
        },
        {
          "symbol": "NOC",
          "rank": 5,
          "previousRank": 6,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 0.962,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.905,
            "participation": -0.924,
            "volatility": -0.135,
            "gap": 0.948,
            "correlation": 0.582,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-25T15:39:50.156Z",
          "trigger": "Break above $559.96 with sustained participation.",
          "invalidation": "Loss of $547.56 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.96: 5d momentum 10.8%, 20d 7.6%, annualized 10d realized vol 32%, volume 0.25x, max selected correlation 0.58.",
          "createdAt": "2026-10-22T15:39:50.156Z",
          "lastReviewedAt": "2026-10-22T15:39:50.156Z",
          "setupId": "NOC-20261022-daily-quant"
        },
        {
          "symbol": "LLY",
          "rank": 6,
          "previousRank": 12,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.843,
          "metrics": {
            "momentum5d": 5.116,
            "momentum20d": 14.305,
            "realizedVol10dAnnualized": 32.32,
            "volumeRatio": 0.442,
            "atrPct": 3.011,
            "gapPct": 0.866,
            "relativeStrength5dPct": 6.201,
            "relativeStrength20dPct": 14.878,
            "avgDollarVolume10d": 2863328630,
            "maxSelectedCorrelation": 0.787
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.385,
            "participation": 0.179,
            "volatility": 0.063,
            "gap": 0.886,
            "correlation": 0.787,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 7,
          "previousRank": 8,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.783,
          "metrics": {
            "momentum5d": 5.606,
            "momentum20d": 0.694,
            "realizedVol10dAnnualized": 33.91,
            "volumeRatio": 0.679,
            "atrPct": 3.144,
            "gapPct": -3.219,
            "relativeStrength5dPct": 6.692,
            "relativeStrength20dPct": 1.267,
            "avgDollarVolume10d": 13171734393,
            "maxSelectedCorrelation": 0.636
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.975,
            "participation": 1.503,
            "volatility": 0.149,
            "gap": 1.034,
            "correlation": 0.636,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 8,
          "previousRank": 9,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.691,
          "metrics": {
            "momentum5d": 4.625,
            "momentum20d": 14.595,
            "realizedVol10dAnnualized": 28.82,
            "volumeRatio": 0.262,
            "atrPct": 3.11,
            "gapPct": 0.331,
            "relativeStrength5dPct": 5.711,
            "relativeStrength20dPct": 15.168,
            "avgDollarVolume10d": 2963293447,
            "maxSelectedCorrelation": 0.744
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.331,
            "participation": -0.829,
            "volatility": 0.034,
            "gap": 0.634,
            "correlation": 0.744,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSTR",
          "rank": 9,
          "previousRank": 3,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "REJECT",
          "quantScore": 0.6,
          "metrics": {
            "momentum5d": -2.386,
            "momentum20d": -8.952,
            "realizedVol10dAnnualized": 80.61,
            "volumeRatio": 0.381,
            "atrPct": 6.546,
            "gapPct": -5.473,
            "relativeStrength5dPct": -1.301,
            "relativeStrength20dPct": -8.379,
            "avgDollarVolume10d": 2624197939,
            "maxSelectedCorrelation": 0.883
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.412,
            "participation": -0.166,
            "volatility": 2.46,
            "gap": 2.094,
            "correlation": 0.883,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 10,
          "previousRank": 25,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.562,
          "metrics": {
            "momentum5d": 5.291,
            "momentum20d": 9.379,
            "realizedVol10dAnnualized": 26.41,
            "volumeRatio": 0.381,
            "atrPct": 2.135,
            "gapPct": -0.089,
            "relativeStrength5dPct": 6.377,
            "relativeStrength20dPct": 9.952,
            "avgDollarVolume10d": 1477807213,
            "maxSelectedCorrelation": 0.737
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.237,
            "participation": -0.165,
            "volatility": -0.41,
            "gap": 0.437,
            "correlation": 0.737,
            "regimeFit": null
          }
        },
        {
          "symbol": "SHOP",
          "rank": 11,
          "previousRank": 4,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.553,
          "metrics": {
            "momentum5d": -4.261,
            "momentum20d": 19.819,
            "realizedVol10dAnnualized": 46.61,
            "volumeRatio": 0.458,
            "atrPct": 4.706,
            "gapPct": 0.052,
            "relativeStrength5dPct": -3.175,
            "relativeStrength20dPct": 20.392,
            "avgDollarVolume10d": 1446959785,
            "maxSelectedCorrelation": 0.509
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.345,
            "participation": 0.27,
            "volatility": 1.036,
            "gap": 0.503,
            "correlation": 0.509,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 12,
          "previousRank": 36,
          "rankChange": 24,
          "rankChangeLabel": "+24",
          "status": "WATCH",
          "quantScore": 0.473,
          "metrics": {
            "momentum5d": 4.1,
            "momentum20d": 6.472,
            "realizedVol10dAnnualized": 28.45,
            "volumeRatio": 0.377,
            "atrPct": 2.421,
            "gapPct": 0.224,
            "relativeStrength5dPct": 5.186,
            "relativeStrength20dPct": 7.045,
            "avgDollarVolume10d": 606419656,
            "maxSelectedCorrelation": 0.642
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.979,
            "participation": -0.185,
            "volatility": -0.253,
            "gap": 0.584,
            "correlation": 0.642,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 13,
          "previousRank": 20,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.467,
          "metrics": {
            "momentum5d": 4.779,
            "momentum20d": 7.829,
            "realizedVol10dAnnualized": 26.74,
            "volumeRatio": 0.219,
            "atrPct": 2.599,
            "gapPct": 0.091,
            "relativeStrength5dPct": 5.865,
            "relativeStrength20dPct": 8.402,
            "avgDollarVolume10d": 895231966,
            "maxSelectedCorrelation": 0.56
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.115,
            "participation": -1.074,
            "volatility": -0.215,
            "gap": 0.521,
            "correlation": 0.56,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 14,
          "previousRank": 58,
          "rankChange": 44,
          "rankChangeLabel": "+44",
          "status": "WATCH",
          "quantScore": 0.46,
          "metrics": {
            "momentum5d": 4.087,
            "momentum20d": 11.208,
            "realizedVol10dAnnualized": 21.48,
            "volumeRatio": 0.4,
            "atrPct": 1.705,
            "gapPct": 0.763,
            "relativeStrength5dPct": 5.173,
            "relativeStrength20dPct": 11.781,
            "avgDollarVolume10d": 518458676,
            "maxSelectedCorrelation": 0.754
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.142,
            "participation": -0.056,
            "volatility": -0.683,
            "gap": 0.837,
            "correlation": 0.754,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 15,
          "previousRank": 51,
          "rankChange": 36,
          "rankChangeLabel": "+36",
          "status": "WATCH",
          "quantScore": 0.458,
          "metrics": {
            "momentum5d": 4.787,
            "momentum20d": 2.742,
            "realizedVol10dAnnualized": 31.55,
            "volumeRatio": 0.264,
            "atrPct": 2.742,
            "gapPct": 0.781,
            "relativeStrength5dPct": 5.873,
            "relativeStrength20dPct": 3.315,
            "avgDollarVolume10d": 1412360906,
            "maxSelectedCorrelation": 0.633
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.939,
            "participation": -0.822,
            "volatility": -0.061,
            "gap": 0.845,
            "correlation": 0.633,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 16,
          "previousRank": 1,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "REJECT",
          "quantScore": 0.439,
          "metrics": {
            "momentum5d": -4.665,
            "momentum20d": -19.274,
            "realizedVol10dAnnualized": 83.93,
            "volumeRatio": 0.46,
            "atrPct": 8.118,
            "gapPct": -3.177,
            "relativeStrength5dPct": -3.579,
            "relativeStrength20dPct": -18.701,
            "avgDollarVolume10d": 1236962682,
            "maxSelectedCorrelation": 0.9
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.072,
            "participation": 0.279,
            "volatility": 3.165,
            "gap": 1.014,
            "correlation": 0.9,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 17,
          "previousRank": 16,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.43,
          "metrics": {
            "momentum5d": 2.161,
            "momentum20d": 7.982,
            "realizedVol10dAnnualized": 18.27,
            "volumeRatio": 0.46,
            "atrPct": 2.719,
            "gapPct": 2.19,
            "relativeStrength5dPct": 3.247,
            "relativeStrength20dPct": 8.555,
            "avgDollarVolume10d": 695254041,
            "maxSelectedCorrelation": 0.364
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.776,
            "participation": 0.276,
            "volatility": -0.335,
            "gap": 1.508,
            "correlation": 0.364,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 18,
          "previousRank": 7,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.426,
          "metrics": {
            "momentum5d": 2.66,
            "momentum20d": 10.279,
            "realizedVol10dAnnualized": 23.74,
            "volumeRatio": 0.269,
            "atrPct": 2.948,
            "gapPct": 0.594,
            "relativeStrength5dPct": 3.746,
            "relativeStrength20dPct": 10.852,
            "avgDollarVolume10d": 1023175932,
            "maxSelectedCorrelation": 0.6
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.922,
            "participation": -0.791,
            "volatility": -0.133,
            "gap": 0.758,
            "correlation": 0.6,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 19,
          "previousRank": 23,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.426,
          "metrics": {
            "momentum5d": -1.027,
            "momentum20d": 3.467,
            "realizedVol10dAnnualized": 58.8,
            "volumeRatio": 0.341,
            "atrPct": 4.343,
            "gapPct": -0.367,
            "relativeStrength5dPct": 0.058,
            "relativeStrength20dPct": 4.04,
            "avgDollarVolume10d": 4589218708,
            "maxSelectedCorrelation": 0.744
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.2,
            "participation": -0.388,
            "volatility": 1.131,
            "gap": 0.306,
            "correlation": 0.744,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 20,
          "previousRank": 69,
          "rankChange": 49,
          "rankChangeLabel": "+49",
          "status": "WATCH",
          "quantScore": 0.417,
          "metrics": {
            "momentum5d": 4.991,
            "momentum20d": -1.207,
            "realizedVol10dAnnualized": 37.87,
            "volumeRatio": 0.272,
            "atrPct": 2.503,
            "gapPct": 1.071,
            "relativeStrength5dPct": 6.076,
            "relativeStrength20dPct": -0.634,
            "avgDollarVolume10d": 2099069888,
            "maxSelectedCorrelation": 0.639
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.828,
            "participation": -0.777,
            "volatility": -0.033,
            "gap": 0.982,
            "correlation": 0.639,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 21,
          "previousRank": 22,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.382,
          "metrics": {
            "momentum5d": 3.192,
            "momentum20d": 14.104,
            "realizedVol10dAnnualized": 16.68,
            "volumeRatio": 0.345,
            "atrPct": 1.778,
            "gapPct": 0.025,
            "relativeStrength5dPct": 4.278,
            "relativeStrength20dPct": 14.677,
            "avgDollarVolume10d": 2546755783,
            "maxSelectedCorrelation": 0.337
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.125,
            "participation": -0.366,
            "volatility": -0.749,
            "gap": 0.49,
            "correlation": 0.337,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 22,
          "previousRank": 14,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.368,
          "metrics": {
            "momentum5d": 2.706,
            "momentum20d": 5.811,
            "realizedVol10dAnnualized": 26.72,
            "volumeRatio": 0.381,
            "atrPct": 2.749,
            "gapPct": -1.279,
            "relativeStrength5dPct": 3.792,
            "relativeStrength20dPct": 6.384,
            "avgDollarVolume10d": 952677959,
            "maxSelectedCorrelation": 0.606
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.772,
            "participation": -0.165,
            "volatility": -0.155,
            "gap": 0.123,
            "correlation": 0.606,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 23,
          "previousRank": 29,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.359,
          "metrics": {
            "momentum5d": 0.77,
            "momentum20d": 4.655,
            "realizedVol10dAnnualized": 30.13,
            "volumeRatio": 0.393,
            "atrPct": 3.411,
            "gapPct": 1.166,
            "relativeStrength5dPct": 1.856,
            "relativeStrength20dPct": 5.228,
            "avgDollarVolume10d": 1726046444,
            "maxSelectedCorrelation": 0.641
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.477,
            "participation": -0.098,
            "volatility": 0.182,
            "gap": 1.027,
            "correlation": 0.641,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 24,
          "previousRank": 55,
          "rankChange": 31,
          "rankChangeLabel": "+31",
          "status": "REJECT",
          "quantScore": 0.312,
          "metrics": {
            "momentum5d": 2.855,
            "momentum20d": 8.158,
            "realizedVol10dAnnualized": 16.04,
            "volumeRatio": 0.516,
            "atrPct": 1.395,
            "gapPct": 0.999,
            "relativeStrength5dPct": 3.941,
            "relativeStrength20dPct": 8.731,
            "avgDollarVolume10d": 1239606672,
            "maxSelectedCorrelation": 0.836
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.874,
            "participation": 0.593,
            "volatility": -0.917,
            "gap": 0.948,
            "correlation": 0.836,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 25,
          "previousRank": 15,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "REJECT",
          "quantScore": 0.312,
          "metrics": {
            "momentum5d": -0.583,
            "momentum20d": -1.12,
            "realizedVol10dAnnualized": 41.56,
            "volumeRatio": 0.325,
            "atrPct": 4.701,
            "gapPct": -2.106,
            "relativeStrength5dPct": 0.502,
            "relativeStrength20dPct": -0.547,
            "avgDollarVolume10d": 627232312,
            "maxSelectedCorrelation": 0.887
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.098,
            "participation": -0.477,
            "volatility": 0.933,
            "gap": 0.511,
            "correlation": 0.887,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 26,
          "previousRank": 53,
          "rankChange": 27,
          "rankChangeLabel": "+27",
          "status": "WATCH",
          "quantScore": 0.311,
          "metrics": {
            "momentum5d": 3.363,
            "momentum20d": 11.739,
            "realizedVol10dAnnualized": 15.57,
            "volumeRatio": 0.308,
            "atrPct": 1.519,
            "gapPct": 0.902,
            "relativeStrength5dPct": 4.449,
            "relativeStrength20dPct": 12.312,
            "avgDollarVolume10d": 1929544100,
            "maxSelectedCorrelation": 0.701
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.065,
            "participation": -0.576,
            "volatility": -0.876,
            "gap": 0.902,
            "correlation": 0.701,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 27,
          "previousRank": 34,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.31,
          "metrics": {
            "momentum5d": 2.607,
            "momentum20d": 7.707,
            "realizedVol10dAnnualized": 20.86,
            "volumeRatio": 0.465,
            "atrPct": 1.707,
            "gapPct": 0.402,
            "relativeStrength5dPct": 3.693,
            "relativeStrength20dPct": 8.28,
            "avgDollarVolume10d": 1456677918,
            "maxSelectedCorrelation": 0.687
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.825,
            "participation": 0.307,
            "volatility": -0.694,
            "gap": 0.668,
            "correlation": 0.687,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 28,
          "previousRank": 18,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "REJECT",
          "quantScore": 0.305,
          "metrics": {
            "momentum5d": -7.146,
            "momentum20d": -14.143,
            "realizedVol10dAnnualized": 67.22,
            "volumeRatio": 0.44,
            "atrPct": 8.139,
            "gapPct": -5.542,
            "relativeStrength5dPct": -6.061,
            "relativeStrength20dPct": -13.57,
            "avgDollarVolume10d": 4064102291,
            "maxSelectedCorrelation": 0.879
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.219,
            "participation": 0.169,
            "volatility": 2.841,
            "gap": 2.126,
            "correlation": 0.879,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 29,
          "previousRank": 65,
          "rankChange": 36,
          "rankChangeLabel": "+36",
          "status": "REJECT",
          "quantScore": 0.293,
          "metrics": {
            "momentum5d": 3.886,
            "momentum20d": 8.172,
            "realizedVol10dAnnualized": 20.41,
            "volumeRatio": 0.286,
            "atrPct": 1.561,
            "gapPct": 0.514,
            "relativeStrength5dPct": 4.972,
            "relativeStrength20dPct": 8.745,
            "avgDollarVolume10d": 416563610,
            "maxSelectedCorrelation": 0.83
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.01,
            "participation": -0.696,
            "volatility": -0.763,
            "gap": 0.72,
            "correlation": 0.83,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 30,
          "previousRank": 21,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "REJECT",
          "quantScore": 0.29,
          "metrics": {
            "momentum5d": 1.238,
            "momentum20d": 12.019,
            "realizedVol10dAnnualized": 24.47,
            "volumeRatio": 0.26,
            "atrPct": 2.368,
            "gapPct": 0.81,
            "relativeStrength5dPct": 2.324,
            "relativeStrength20dPct": 12.592,
            "avgDollarVolume10d": 777378245,
            "maxSelectedCorrelation": 0.806
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.796,
            "participation": -0.841,
            "volatility": -0.354,
            "gap": 0.859,
            "correlation": 0.806,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 31,
          "previousRank": 19,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "WATCH",
          "quantScore": 0.288,
          "metrics": {
            "momentum5d": 0.723,
            "momentum20d": 17.355,
            "realizedVol10dAnnualized": 25.89,
            "volumeRatio": 0.161,
            "atrPct": 2.461,
            "gapPct": -0.512,
            "relativeStrength5dPct": 1.809,
            "relativeStrength20dPct": 17.928,
            "avgDollarVolume10d": 548990446,
            "maxSelectedCorrelation": 0.643
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.914,
            "participation": -1.399,
            "volatility": -0.288,
            "gap": 0.238,
            "correlation": 0.643,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 32,
          "previousRank": 30,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.269,
          "metrics": {
            "momentum5d": -4.783,
            "momentum20d": -18.02,
            "realizedVol10dAnnualized": 76.47,
            "volumeRatio": 0.317,
            "atrPct": 7.251,
            "gapPct": -5.099,
            "relativeStrength5dPct": -3.697,
            "relativeStrength20dPct": -17.447,
            "avgDollarVolume10d": 3365316629,
            "maxSelectedCorrelation": 0.72
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.043,
            "participation": -0.52,
            "volatility": 2.664,
            "gap": 1.918,
            "correlation": 0.72,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 33,
          "previousRank": 75,
          "rankChange": 42,
          "rankChangeLabel": "+42",
          "status": "WATCH",
          "quantScore": 0.267,
          "metrics": {
            "momentum5d": 2.394,
            "momentum20d": 4.973,
            "realizedVol10dAnnualized": 21.45,
            "volumeRatio": 0.46,
            "atrPct": 1.851,
            "gapPct": 0.709,
            "relativeStrength5dPct": 3.479,
            "relativeStrength20dPct": 5.546,
            "avgDollarVolume10d": 842961731,
            "maxSelectedCorrelation": 0.738
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.702,
            "participation": 0.28,
            "volatility": -0.624,
            "gap": 0.812,
            "correlation": 0.738,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRWD",
          "rank": 34,
          "previousRank": 67,
          "rankChange": 33,
          "rankChangeLabel": "+33",
          "status": "WATCH",
          "quantScore": 0.265,
          "metrics": {
            "momentum5d": -2.455,
            "momentum20d": -9.115,
            "realizedVol10dAnnualized": 58.14,
            "volumeRatio": 0.402,
            "atrPct": 5.182,
            "gapPct": 1.813,
            "relativeStrength5dPct": -1.37,
            "relativeStrength20dPct": -8.542,
            "avgDollarVolume10d": 2009637728,
            "maxSelectedCorrelation": 0.586
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.427,
            "participation": -0.049,
            "volatility": 1.459,
            "gap": 1.33,
            "correlation": 0.586,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 35,
          "previousRank": 32,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.256,
          "metrics": {
            "momentum5d": 2.22,
            "momentum20d": 12.516,
            "realizedVol10dAnnualized": 14.33,
            "volumeRatio": 0.346,
            "atrPct": 1.627,
            "gapPct": 0.292,
            "relativeStrength5dPct": 3.305,
            "relativeStrength20dPct": 13.089,
            "avgDollarVolume10d": 1877140062,
            "maxSelectedCorrelation": 0.35
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.942,
            "participation": -0.361,
            "volatility": -0.857,
            "gap": 0.616,
            "correlation": 0.35,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 36,
          "previousRank": 40,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "REJECT",
          "quantScore": 0.255,
          "metrics": {
            "momentum5d": -0.346,
            "momentum20d": 6.349,
            "realizedVol10dAnnualized": 23.59,
            "volumeRatio": 0.645,
            "atrPct": 2.171,
            "gapPct": 0.851,
            "relativeStrength5dPct": 0.74,
            "relativeStrength20dPct": 6.922,
            "avgDollarVolume10d": 1890287469,
            "maxSelectedCorrelation": 0.847
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.39,
            "participation": 1.316,
            "volatility": -0.452,
            "gap": 0.878,
            "correlation": 0.847,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 37,
          "previousRank": 26,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "REJECT",
          "quantScore": 0.251,
          "metrics": {
            "momentum5d": 1.121,
            "momentum20d": 6.956,
            "realizedVol10dAnnualized": 21.32,
            "volumeRatio": 0.363,
            "atrPct": 2.531,
            "gapPct": 1.116,
            "relativeStrength5dPct": 2.207,
            "relativeStrength20dPct": 7.529,
            "avgDollarVolume10d": 483821241,
            "maxSelectedCorrelation": 0.831
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.604,
            "participation": -0.265,
            "volatility": -0.351,
            "gap": 1.003,
            "correlation": 0.831,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 38,
          "previousRank": 43,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": 0.248,
          "metrics": {
            "momentum5d": 1.773,
            "momentum20d": 8.532,
            "realizedVol10dAnnualized": 19.58,
            "volumeRatio": 0.34,
            "atrPct": 2.038,
            "gapPct": 1.282,
            "relativeStrength5dPct": 2.859,
            "relativeStrength20dPct": 9.105,
            "avgDollarVolume10d": 2224904461,
            "maxSelectedCorrelation": 0.694
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.745,
            "participation": -0.395,
            "volatility": -0.586,
            "gap": 1.081,
            "correlation": 0.694,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 39,
          "previousRank": 42,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.242,
          "metrics": {
            "momentum5d": 2.972,
            "momentum20d": 7.576,
            "realizedVol10dAnnualized": 18.48,
            "volumeRatio": 0.274,
            "atrPct": 1.901,
            "gapPct": 0.653,
            "relativeStrength5dPct": 4.058,
            "relativeStrength20dPct": 8.149,
            "avgDollarVolume10d": 771635856,
            "maxSelectedCorrelation": 0.558
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.869,
            "participation": -0.767,
            "volatility": -0.663,
            "gap": 0.785,
            "correlation": 0.558,
            "regimeFit": null
          }
        },
        {
          "symbol": "PANW",
          "rank": 40,
          "previousRank": 87,
          "rankChange": 47,
          "rankChangeLabel": "+47",
          "status": "WATCH",
          "quantScore": 0.225,
          "metrics": {
            "momentum5d": -3.578,
            "momentum20d": -9.225,
            "realizedVol10dAnnualized": 59.29,
            "volumeRatio": 0.453,
            "atrPct": 5.169,
            "gapPct": 2.232,
            "relativeStrength5dPct": -2.493,
            "relativeStrength20dPct": -8.651,
            "avgDollarVolume10d": 1793281130,
            "maxSelectedCorrelation": 0.554
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.578,
            "participation": 0.237,
            "volatility": 1.477,
            "gap": 1.527,
            "correlation": 0.554,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 41,
          "previousRank": 54,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": 0.221,
          "metrics": {
            "momentum5d": 2.988,
            "momentum20d": 2.066,
            "realizedVol10dAnnualized": 17.33,
            "volumeRatio": 0.511,
            "atrPct": 1.756,
            "gapPct": -0.396,
            "relativeStrength5dPct": 4.074,
            "relativeStrength20dPct": 2.639,
            "avgDollarVolume10d": 1010370531,
            "maxSelectedCorrelation": 0.631
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.679,
            "participation": 0.565,
            "volatility": -0.745,
            "gap": 0.292,
            "correlation": 0.631,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 42,
          "previousRank": 35,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.211,
          "metrics": {
            "momentum5d": 1.758,
            "momentum20d": 8.596,
            "realizedVol10dAnnualized": 20.08,
            "volumeRatio": 0.254,
            "atrPct": 2.168,
            "gapPct": 0.916,
            "relativeStrength5dPct": 2.843,
            "relativeStrength20dPct": 9.169,
            "avgDollarVolume10d": 1678189989,
            "maxSelectedCorrelation": 0.793
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.745,
            "participation": -0.876,
            "volatility": -0.523,
            "gap": 0.909,
            "correlation": 0.793,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 43,
          "previousRank": 47,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.21,
          "metrics": {
            "momentum5d": 0.24,
            "momentum20d": 7.168,
            "realizedVol10dAnnualized": 26.94,
            "volumeRatio": 0.37,
            "atrPct": 2.61,
            "gapPct": -0.081,
            "relativeStrength5dPct": 1.326,
            "relativeStrength20dPct": 7.741,
            "avgDollarVolume10d": 1450703967,
            "maxSelectedCorrelation": 0.546
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.495,
            "participation": -0.228,
            "volatility": -0.206,
            "gap": 0.441,
            "correlation": 0.546,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 44,
          "previousRank": 41,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.181,
          "metrics": {
            "momentum5d": 2.947,
            "momentum20d": 0.14,
            "realizedVol10dAnnualized": 23.85,
            "volumeRatio": 0.247,
            "atrPct": 2.393,
            "gapPct": 0.916,
            "relativeStrength5dPct": 4.033,
            "relativeStrength20dPct": 0.714,
            "avgDollarVolume10d": 1037962991,
            "maxSelectedCorrelation": 0.681
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.606,
            "participation": -0.913,
            "volatility": -0.356,
            "gap": 0.909,
            "correlation": 0.681,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 45,
          "previousRank": 60,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.179,
          "metrics": {
            "momentum5d": 1.885,
            "momentum20d": 6.755,
            "realizedVol10dAnnualized": 15.02,
            "volumeRatio": 0.453,
            "atrPct": 1.579,
            "gapPct": 0.262,
            "relativeStrength5dPct": 2.971,
            "relativeStrength20dPct": 7.328,
            "avgDollarVolume10d": 1102660055,
            "maxSelectedCorrelation": 0.597
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.697,
            "participation": 0.24,
            "volatility": -0.863,
            "gap": 0.602,
            "correlation": 0.597,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 46,
          "previousRank": 64,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "REJECT",
          "quantScore": 0.178,
          "metrics": {
            "momentum5d": 3.348,
            "momentum20d": 5.161,
            "realizedVol10dAnnualized": 13.52,
            "volumeRatio": 0.291,
            "atrPct": 1.676,
            "gapPct": 0.776,
            "relativeStrength5dPct": 4.434,
            "relativeStrength20dPct": 5.734,
            "avgDollarVolume10d": 1282112623,
            "maxSelectedCorrelation": 0.82
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.834,
            "participation": -0.668,
            "volatility": -0.853,
            "gap": 0.843,
            "correlation": 0.82,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 47,
          "previousRank": 28,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": 0.175,
          "metrics": {
            "momentum5d": 3.184,
            "momentum20d": 7.254,
            "realizedVol10dAnnualized": 14.91,
            "volumeRatio": 0.231,
            "atrPct": 1.788,
            "gapPct": -0.077,
            "relativeStrength5dPct": 4.27,
            "relativeStrength20dPct": 7.827,
            "avgDollarVolume10d": 872083080,
            "maxSelectedCorrelation": 0.702
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.885,
            "participation": -1.006,
            "volatility": -0.78,
            "gap": 0.442,
            "correlation": 0.702,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 48,
          "previousRank": 17,
          "rankChange": -31,
          "rankChangeLabel": "-31",
          "status": "WATCH",
          "quantScore": 0.161,
          "metrics": {
            "momentum5d": 0.168,
            "momentum20d": -3.93,
            "realizedVol10dAnnualized": 22.65,
            "volumeRatio": 1.022,
            "atrPct": 1.194,
            "gapPct": 0,
            "relativeStrength5dPct": 1.253,
            "relativeStrength20dPct": -3.356,
            "avgDollarVolume10d": 414925031,
            "maxSelectedCorrelation": 0.602
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.099,
            "participation": 3.427,
            "volatility": -0.867,
            "gap": 0.478,
            "correlation": 0.602,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 49,
          "previousRank": 27,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": 0.14,
          "metrics": {
            "momentum5d": 0.786,
            "momentum20d": -6.015,
            "realizedVol10dAnnualized": 30.16,
            "volumeRatio": 0.534,
            "atrPct": 2.895,
            "gapPct": -0.196,
            "relativeStrength5dPct": 1.871,
            "relativeStrength20dPct": -5.442,
            "avgDollarVolume10d": 468243399,
            "maxSelectedCorrelation": 0.55
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.107,
            "participation": 0.695,
            "volatility": -0.027,
            "gap": 0.386,
            "correlation": 0.55,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 50,
          "previousRank": 52,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": 0.135,
          "metrics": {
            "momentum5d": 1.812,
            "momentum20d": 8.916,
            "realizedVol10dAnnualized": 12.27,
            "volumeRatio": 0.324,
            "atrPct": 1.756,
            "gapPct": -0.282,
            "relativeStrength5dPct": 2.897,
            "relativeStrength20dPct": 9.49,
            "avgDollarVolume10d": 830253968,
            "maxSelectedCorrelation": 0.629
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.763,
            "participation": -0.482,
            "volatility": -0.846,
            "gap": 0.346,
            "correlation": 0.629,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 51,
          "previousRank": 31,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": 0.116,
          "metrics": {
            "momentum5d": -1.085,
            "momentum20d": 1.093,
            "realizedVol10dAnnualized": 38.63,
            "volumeRatio": 0.444,
            "atrPct": 2.729,
            "gapPct": -1.618,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 1.666,
            "avgDollarVolume10d": 8473055726,
            "maxSelectedCorrelation": 0.706
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.109,
            "participation": 0.19,
            "volatility": 0.074,
            "gap": 0.282,
            "correlation": 0.706,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 52,
          "previousRank": 45,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "REJECT",
          "quantScore": 0.08,
          "metrics": {
            "momentum5d": 0.046,
            "momentum20d": 8.392,
            "realizedVol10dAnnualized": 21.23,
            "volumeRatio": 0.235,
            "atrPct": 2.156,
            "gapPct": 1.011,
            "relativeStrength5dPct": 1.132,
            "relativeStrength20dPct": 8.966,
            "avgDollarVolume10d": 1836877399,
            "maxSelectedCorrelation": 0.83
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.513,
            "participation": -0.982,
            "volatility": -0.505,
            "gap": 0.953,
            "correlation": 0.83,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 53,
          "previousRank": 66,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": 0.064,
          "metrics": {
            "momentum5d": 0.536,
            "momentum20d": 0.896,
            "realizedVol10dAnnualized": 16.02,
            "volumeRatio": 0.657,
            "atrPct": 1.443,
            "gapPct": -0.071,
            "relativeStrength5dPct": 1.622,
            "relativeStrength20dPct": 1.469,
            "avgDollarVolume10d": 305165364,
            "maxSelectedCorrelation": 0.277
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.316,
            "participation": 1.38,
            "volatility": -0.898,
            "gap": 0.445,
            "correlation": 0.277,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 54,
          "previousRank": 10,
          "rankChange": -44,
          "rankChangeLabel": "-44",
          "status": "WATCH",
          "quantScore": 0.043,
          "metrics": {
            "momentum5d": -1.671,
            "momentum20d": 2.939,
            "realizedVol10dAnnualized": 22.66,
            "volumeRatio": 0.338,
            "atrPct": 3.443,
            "gapPct": -0.334,
            "relativeStrength5dPct": -0.585,
            "relativeStrength20dPct": 3.512,
            "avgDollarVolume10d": 1704284151,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.097,
            "participation": -0.405,
            "volatility": 0.047,
            "gap": 0.321,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "HPE",
          "rank": 55,
          "previousRank": 70,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.027,
          "metrics": {
            "momentum5d": -7.104,
            "momentum20d": -12.618,
            "realizedVol10dAnnualized": 67.74,
            "volumeRatio": 0.243,
            "atrPct": 6.797,
            "gapPct": -3.868,
            "relativeStrength5dPct": -6.018,
            "relativeStrength20dPct": -12.045,
            "avgDollarVolume10d": 1090716262,
            "maxSelectedCorrelation": 0.666
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.16,
            "participation": -0.939,
            "volatility": 2.306,
            "gap": 1.339,
            "correlation": 0.666,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 56,
          "previousRank": 59,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 0.026,
          "metrics": {
            "momentum5d": 2.126,
            "momentum20d": 3.493,
            "realizedVol10dAnnualized": 11.35,
            "volumeRatio": 0.403,
            "atrPct": 1.225,
            "gapPct": -0.375,
            "relativeStrength5dPct": 3.212,
            "relativeStrength20dPct": 4.066,
            "avgDollarVolume10d": 1828190542,
            "maxSelectedCorrelation": 0.372
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.615,
            "participation": -0.041,
            "volatility": -1.08,
            "gap": 0.302,
            "correlation": 0.372,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 57,
          "previousRank": 50,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.025,
          "metrics": {
            "momentum5d": 1.71,
            "momentum20d": 4.247,
            "realizedVol10dAnnualized": 14.63,
            "volumeRatio": 0.403,
            "atrPct": 1.301,
            "gapPct": -1.073,
            "relativeStrength5dPct": 2.796,
            "relativeStrength20dPct": 4.82,
            "avgDollarVolume10d": 816770227,
            "maxSelectedCorrelation": 0.694
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.587,
            "participation": -0.042,
            "volatility": -0.983,
            "gap": 0.026,
            "correlation": 0.694,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 58,
          "previousRank": 72,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": 0.017,
          "metrics": {
            "momentum5d": 0.916,
            "momentum20d": 2.679,
            "realizedVol10dAnnualized": 9.66,
            "volumeRatio": 0.659,
            "atrPct": 0.918,
            "gapPct": -0.42,
            "relativeStrength5dPct": 2.002,
            "relativeStrength20dPct": 3.252,
            "avgDollarVolume10d": 1670209727,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.428,
            "participation": 1.394,
            "volatility": -1.238,
            "gap": 0.281,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 59,
          "previousRank": 49,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.007,
          "metrics": {
            "momentum5d": -6.129,
            "momentum20d": -6.056,
            "realizedVol10dAnnualized": 67.9,
            "volumeRatio": 0.288,
            "atrPct": 5.321,
            "gapPct": -1.19,
            "relativeStrength5dPct": -5.043,
            "relativeStrength20dPct": -5.483,
            "avgDollarVolume10d": 1538493745,
            "maxSelectedCorrelation": 0.622
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.803,
            "participation": -0.686,
            "volatility": 1.71,
            "gap": 0.081,
            "correlation": 0.622,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 60,
          "previousRank": 33,
          "rankChange": -27,
          "rankChangeLabel": "-27",
          "status": "WATCH",
          "quantScore": -0.007,
          "metrics": {
            "momentum5d": -0.099,
            "momentum20d": -11.392,
            "realizedVol10dAnnualized": 27.03,
            "volumeRatio": 0.907,
            "atrPct": 1.466,
            "gapPct": 0,
            "relativeStrength5dPct": 0.987,
            "relativeStrength20dPct": -10.819,
            "avgDollarVolume10d": 203617254,
            "maxSelectedCorrelation": 0.547
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.196,
            "participation": 2.782,
            "volatility": -0.669,
            "gap": 0.478,
            "correlation": 0.547,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 61,
          "previousRank": 86,
          "rankChange": 25,
          "rankChangeLabel": "+25",
          "status": "WATCH",
          "quantScore": -0.023,
          "metrics": {
            "momentum5d": 1.776,
            "momentum20d": 1.156,
            "realizedVol10dAnnualized": 9.87,
            "volumeRatio": 0.451,
            "atrPct": 0.994,
            "gapPct": 0.957,
            "relativeStrength5dPct": 2.861,
            "relativeStrength20dPct": 1.729,
            "avgDollarVolume10d": 2998050960,
            "maxSelectedCorrelation": 0.754
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.488,
            "participation": 0.228,
            "volatility": -1.203,
            "gap": 0.928,
            "correlation": 0.754,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 62,
          "previousRank": 78,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.046,
          "metrics": {
            "momentum5d": 0.959,
            "momentum20d": 2.451,
            "realizedVol10dAnnualized": 12.41,
            "volumeRatio": 0.31,
            "atrPct": 1.74,
            "gapPct": 0.275,
            "relativeStrength5dPct": 2.045,
            "relativeStrength20dPct": 3.024,
            "avgDollarVolume10d": 12820675848,
            "maxSelectedCorrelation": 0.435
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.425,
            "participation": -0.56,
            "volatility": -0.849,
            "gap": 0.608,
            "correlation": 0.435,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 63,
          "previousRank": 48,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "REJECT",
          "quantScore": -0.049,
          "metrics": {
            "momentum5d": -3.454,
            "momentum20d": -7.842,
            "realizedVol10dAnnualized": 38.38,
            "volumeRatio": 0.525,
            "atrPct": 3.595,
            "gapPct": -2.833,
            "relativeStrength5dPct": -2.369,
            "relativeStrength20dPct": -7.269,
            "avgDollarVolume10d": 329044607,
            "maxSelectedCorrelation": 0.809
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.514,
            "participation": 0.643,
            "volatility": 0.421,
            "gap": 0.853,
            "correlation": 0.809,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 64,
          "previousRank": 83,
          "rankChange": 19,
          "rankChangeLabel": "+19",
          "status": "WATCH",
          "quantScore": -0.058,
          "metrics": {
            "momentum5d": 0.747,
            "momentum20d": -7.526,
            "realizedVol10dAnnualized": 28.65,
            "volumeRatio": 0.279,
            "atrPct": 2.764,
            "gapPct": -1.941,
            "relativeStrength5dPct": 1.833,
            "relativeStrength20dPct": -6.953,
            "avgDollarVolume10d": 1139724964,
            "maxSelectedCorrelation": 0.687
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.05,
            "participation": -0.736,
            "volatility": -0.11,
            "gap": 0.434,
            "correlation": 0.687,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 65,
          "previousRank": 57,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.065,
          "metrics": {
            "momentum5d": 0.145,
            "momentum20d": 1.184,
            "realizedVol10dAnnualized": 25.97,
            "volumeRatio": 0.145,
            "atrPct": 2.481,
            "gapPct": -1.699,
            "relativeStrength5dPct": 1.231,
            "relativeStrength20dPct": 1.757,
            "avgDollarVolume10d": 1536847413,
            "maxSelectedCorrelation": 0.503
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.274,
            "participation": -1.485,
            "volatility": -0.278,
            "gap": 0.32,
            "correlation": 0.503,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 66,
          "previousRank": 61,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.069,
          "metrics": {
            "momentum5d": -3.948,
            "momentum20d": -14.254,
            "realizedVol10dAnnualized": 43.99,
            "volumeRatio": 0.843,
            "atrPct": 2.806,
            "gapPct": -3.827,
            "relativeStrength5dPct": -2.863,
            "relativeStrength20dPct": -13.681,
            "avgDollarVolume10d": 796458637,
            "maxSelectedCorrelation": 0.64
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.802,
            "participation": 2.425,
            "volatility": 0.212,
            "gap": 1.32,
            "correlation": 0.64,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 67,
          "previousRank": 38,
          "rankChange": -29,
          "rankChangeLabel": "-29",
          "status": "WATCH",
          "quantScore": -0.085,
          "metrics": {
            "momentum5d": -0.026,
            "momentum20d": 8.827,
            "realizedVol10dAnnualized": 12.22,
            "volumeRatio": 0.135,
            "atrPct": 2,
            "gapPct": -0.647,
            "relativeStrength5dPct": 1.06,
            "relativeStrength20dPct": 9.4,
            "avgDollarVolume10d": 612854866,
            "maxSelectedCorrelation": 0.635
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.518,
            "participation": -1.542,
            "volatility": -0.747,
            "gap": 0.174,
            "correlation": 0.635,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 68,
          "previousRank": 62,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.09,
          "metrics": {
            "momentum5d": 1.443,
            "momentum20d": 2.008,
            "realizedVol10dAnnualized": 8.49,
            "volumeRatio": 0.356,
            "atrPct": 1.31,
            "gapPct": -0.565,
            "relativeStrength5dPct": 2.529,
            "relativeStrength20dPct": 2.581,
            "avgDollarVolume10d": 456926906,
            "maxSelectedCorrelation": 0.407
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.474,
            "participation": -0.306,
            "volatility": -1.102,
            "gap": 0.213,
            "correlation": 0.407,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 69,
          "previousRank": 68,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.091,
          "metrics": {
            "momentum5d": -1.894,
            "momentum20d": -5.496,
            "realizedVol10dAnnualized": 30.47,
            "volumeRatio": 0.446,
            "atrPct": 2.845,
            "gapPct": -2.135,
            "relativeStrength5dPct": -0.809,
            "relativeStrength20dPct": -4.923,
            "avgDollarVolume10d": 19545857903,
            "maxSelectedCorrelation": 0.826
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.227,
            "participation": 0.2,
            "volatility": -0.041,
            "gap": 0.525,
            "correlation": 0.826,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 70,
          "previousRank": 13,
          "rankChange": -57,
          "rankChangeLabel": "-57",
          "status": "WATCH",
          "quantScore": -0.103,
          "metrics": {
            "momentum5d": -7.078,
            "momentum20d": -13.794,
            "realizedVol10dAnnualized": 61.91,
            "volumeRatio": 0.322,
            "atrPct": 5.84,
            "gapPct": -3.744,
            "relativeStrength5dPct": -5.992,
            "relativeStrength20dPct": -13.221,
            "avgDollarVolume10d": 1274625698,
            "maxSelectedCorrelation": 0.707
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.198,
            "participation": -0.492,
            "volatility": 1.801,
            "gap": 1.281,
            "correlation": 0.707,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 71,
          "previousRank": 39,
          "rankChange": -32,
          "rankChangeLabel": "-32",
          "status": "REJECT",
          "quantScore": -0.11,
          "metrics": {
            "momentum5d": -5.967,
            "momentum20d": -20.306,
            "realizedVol10dAnnualized": 60.09,
            "volumeRatio": 0.5,
            "atrPct": 5.323,
            "gapPct": -4.273,
            "relativeStrength5dPct": -4.881,
            "relativeStrength20dPct": -19.733,
            "avgDollarVolume10d": 1543271569,
            "maxSelectedCorrelation": 0.807
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.279,
            "participation": 0.504,
            "volatility": 1.555,
            "gap": 1.529,
            "correlation": 0.807,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 72,
          "previousRank": 71,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.111,
          "metrics": {
            "momentum5d": -0.006,
            "momentum20d": -4.82,
            "realizedVol10dAnnualized": 20.25,
            "volumeRatio": 0.278,
            "atrPct": 2.711,
            "gapPct": -2.189,
            "relativeStrength5dPct": 1.08,
            "relativeStrength20dPct": -4.247,
            "avgDollarVolume10d": 2244956362,
            "maxSelectedCorrelation": 0.798
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.045,
            "participation": -0.74,
            "volatility": -0.299,
            "gap": 0.55,
            "correlation": 0.798,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 73,
          "previousRank": 37,
          "rankChange": -36,
          "rankChangeLabel": "-36",
          "status": "WATCH",
          "quantScore": -0.128,
          "metrics": {
            "momentum5d": -6.18,
            "momentum20d": -12.728,
            "realizedVol10dAnnualized": 63.15,
            "volumeRatio": 0.337,
            "atrPct": 5.119,
            "gapPct": -2.153,
            "relativeStrength5dPct": -5.094,
            "relativeStrength20dPct": -12.155,
            "avgDollarVolume10d": 3530123446,
            "maxSelectedCorrelation": 0.603
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.042,
            "participation": -0.41,
            "volatility": 1.533,
            "gap": 0.533,
            "correlation": 0.603,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 74,
          "previousRank": 46,
          "rankChange": -28,
          "rankChangeLabel": "-28",
          "status": "WATCH",
          "quantScore": -0.151,
          "metrics": {
            "momentum5d": 0.546,
            "momentum20d": -5.087,
            "realizedVol10dAnnualized": 18.95,
            "volumeRatio": 0.331,
            "atrPct": 2.026,
            "gapPct": -0.411,
            "relativeStrength5dPct": 1.632,
            "relativeStrength20dPct": -4.514,
            "avgDollarVolume10d": 1010722397,
            "maxSelectedCorrelation": 0.406
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.108,
            "participation": -0.444,
            "volatility": -0.603,
            "gap": 0.285,
            "correlation": 0.406,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 75,
          "previousRank": 56,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "REJECT",
          "quantScore": -0.154,
          "metrics": {
            "momentum5d": -1.996,
            "momentum20d": -11.357,
            "realizedVol10dAnnualized": 31.24,
            "volumeRatio": 0.402,
            "atrPct": 3.389,
            "gapPct": -2.579,
            "relativeStrength5dPct": -0.91,
            "relativeStrength20dPct": -10.784,
            "avgDollarVolume10d": 1589331619,
            "maxSelectedCorrelation": 0.873
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.444,
            "participation": -0.045,
            "volatility": 0.196,
            "gap": 0.734,
            "correlation": 0.873,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 76,
          "previousRank": 73,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.157,
          "metrics": {
            "momentum5d": -0.632,
            "momentum20d": -7.2,
            "realizedVol10dAnnualized": 34.04,
            "volumeRatio": 0.248,
            "atrPct": 2.716,
            "gapPct": -1.332,
            "relativeStrength5dPct": 0.453,
            "relativeStrength20dPct": -6.627,
            "avgDollarVolume10d": 1158368172,
            "maxSelectedCorrelation": 0.322
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.12,
            "participation": -0.911,
            "volatility": -0.022,
            "gap": 0.148,
            "correlation": 0.322,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 77,
          "previousRank": 79,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.158,
          "metrics": {
            "momentum5d": 0.189,
            "momentum20d": -2.242,
            "realizedVol10dAnnualized": 17.36,
            "volumeRatio": 0.438,
            "atrPct": 1.362,
            "gapPct": -0.604,
            "relativeStrength5dPct": 1.275,
            "relativeStrength20dPct": -1.669,
            "avgDollarVolume10d": 6631947241,
            "maxSelectedCorrelation": 0.725
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.161,
            "participation": 0.155,
            "volatility": -0.904,
            "gap": 0.195,
            "correlation": 0.725,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 78,
          "previousRank": 74,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.166,
          "metrics": {
            "momentum5d": 1.032,
            "momentum20d": 2.384,
            "realizedVol10dAnnualized": 8.75,
            "volumeRatio": 0.327,
            "atrPct": 0.968,
            "gapPct": -0.443,
            "relativeStrength5dPct": 2.118,
            "relativeStrength20dPct": 2.957,
            "avgDollarVolume10d": 1674463583,
            "maxSelectedCorrelation": 0.663
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.433,
            "participation": -0.465,
            "volatility": -1.236,
            "gap": 0.27,
            "correlation": 0.663,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 79,
          "previousRank": 63,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": -0.172,
          "metrics": {
            "momentum5d": -2.708,
            "momentum20d": 4.842,
            "realizedVol10dAnnualized": 21.53,
            "volumeRatio": 0.307,
            "atrPct": 2.14,
            "gapPct": -0.047,
            "relativeStrength5dPct": -1.623,
            "relativeStrength20dPct": 5.415,
            "avgDollarVolume10d": 9674385420,
            "maxSelectedCorrelation": 0.759
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.027,
            "participation": -0.578,
            "volatility": -0.505,
            "gap": 0.456,
            "correlation": 0.759,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 80,
          "previousRank": 92,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": -0.181,
          "metrics": {
            "momentum5d": -1.191,
            "momentum20d": -0.957,
            "realizedVol10dAnnualized": 18.51,
            "volumeRatio": 0.253,
            "atrPct": 2.51,
            "gapPct": -0.243,
            "relativeStrength5dPct": -0.105,
            "relativeStrength20dPct": -0.384,
            "avgDollarVolume10d": 541611135,
            "maxSelectedCorrelation": 0.75
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.024,
            "participation": -0.881,
            "volatility": -0.415,
            "gap": 0.364,
            "correlation": 0.75,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 81,
          "previousRank": 82,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.193,
          "metrics": {
            "momentum5d": -1.388,
            "momentum20d": -2.669,
            "realizedVol10dAnnualized": 11.41,
            "volumeRatio": 0.62,
            "atrPct": 1.573,
            "gapPct": -0.838,
            "relativeStrength5dPct": -0.302,
            "relativeStrength20dPct": -2.096,
            "avgDollarVolume10d": 1169754395,
            "maxSelectedCorrelation": 0.66
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.062,
            "participation": 1.174,
            "volatility": -0.937,
            "gap": 0.085,
            "correlation": 0.66,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 82,
          "previousRank": 98,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.198,
          "metrics": {
            "momentum5d": 0.488,
            "momentum20d": 0.111,
            "realizedVol10dAnnualized": 6.05,
            "volumeRatio": 0.496,
            "atrPct": 0.58,
            "gapPct": 0.397,
            "relativeStrength5dPct": 1.574,
            "relativeStrength20dPct": 0.684,
            "avgDollarVolume10d": 3032760551,
            "maxSelectedCorrelation": 0.734
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.282,
            "participation": 0.482,
            "volatility": -1.447,
            "gap": 0.665,
            "correlation": 0.734,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 83,
          "previousRank": 44,
          "rankChange": -39,
          "rankChangeLabel": "-39",
          "status": "REJECT",
          "quantScore": -0.221,
          "metrics": {
            "momentum5d": -6.376,
            "momentum20d": -18.66,
            "realizedVol10dAnnualized": 46.94,
            "volumeRatio": 0.432,
            "atrPct": 5.466,
            "gapPct": -3.676,
            "relativeStrength5dPct": -5.29,
            "relativeStrength20dPct": -18.087,
            "avgDollarVolume10d": 21732238921,
            "maxSelectedCorrelation": 0.807
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.275,
            "participation": 0.123,
            "volatility": 1.352,
            "gap": 1.249,
            "correlation": 0.807,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 84,
          "previousRank": 76,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.223,
          "metrics": {
            "momentum5d": -3.837,
            "momentum20d": -1.274,
            "realizedVol10dAnnualized": 26.88,
            "volumeRatio": 0.435,
            "atrPct": 2.541,
            "gapPct": -0.251,
            "relativeStrength5dPct": -2.751,
            "relativeStrength20dPct": -0.701,
            "avgDollarVolume10d": 952815678,
            "maxSelectedCorrelation": 0.396
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.335,
            "participation": 0.14,
            "volatility": -0.236,
            "gap": 0.36,
            "correlation": 0.396,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 85,
          "previousRank": 77,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "REJECT",
          "quantScore": -0.242,
          "metrics": {
            "momentum5d": -9.08,
            "momentum20d": -16.829,
            "realizedVol10dAnnualized": 55.02,
            "volumeRatio": 0.495,
            "atrPct": 5.614,
            "gapPct": -5.265,
            "relativeStrength5dPct": -7.994,
            "relativeStrength20dPct": -16.255,
            "avgDollarVolume10d": 9426131512,
            "maxSelectedCorrelation": 0.879
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.567,
            "participation": 0.476,
            "volatility": 1.572,
            "gap": 1.996,
            "correlation": 0.879,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 86,
          "previousRank": 95,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.266,
          "metrics": {
            "momentum5d": -0.328,
            "momentum20d": -0.918,
            "realizedVol10dAnnualized": 13.82,
            "volumeRatio": 0.212,
            "atrPct": 1.832,
            "gapPct": -0.868,
            "relativeStrength5dPct": 0.758,
            "relativeStrength20dPct": -0.345,
            "avgDollarVolume10d": 2415053853,
            "maxSelectedCorrelation": 0.727
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.139,
            "participation": -1.111,
            "volatility": -0.784,
            "gap": 0.07,
            "correlation": 0.727,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 87,
          "previousRank": 84,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.3,
          "metrics": {
            "momentum5d": -5.181,
            "momentum20d": -14.099,
            "realizedVol10dAnnualized": 33.97,
            "volumeRatio": 0.397,
            "atrPct": 4.407,
            "gapPct": -2.545,
            "relativeStrength5dPct": -4.095,
            "relativeStrength20dPct": -13.526,
            "avgDollarVolume10d": 1856427695,
            "maxSelectedCorrelation": 0.579
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.959,
            "participation": -0.077,
            "volatility": 0.663,
            "gap": 0.718,
            "correlation": 0.579,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 88,
          "previousRank": 91,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.307,
          "metrics": {
            "momentum5d": -3.031,
            "momentum20d": -5.541,
            "realizedVol10dAnnualized": 18.11,
            "volumeRatio": 0.694,
            "atrPct": 1.351,
            "gapPct": -1.429,
            "relativeStrength5dPct": -1.945,
            "relativeStrength20dPct": -4.968,
            "avgDollarVolume10d": 2569468976,
            "maxSelectedCorrelation": 0.513
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.378,
            "participation": 1.591,
            "volatility": -0.894,
            "gap": 0.193,
            "correlation": 0.513,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 89,
          "previousRank": 90,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "REJECT",
          "quantScore": -0.309,
          "metrics": {
            "momentum5d": -5.587,
            "momentum20d": -12.269,
            "realizedVol10dAnnualized": 34.83,
            "volumeRatio": 0.545,
            "atrPct": 3.358,
            "gapPct": -3.626,
            "relativeStrength5dPct": -4.501,
            "relativeStrength20dPct": -11.696,
            "avgDollarVolume10d": 5001425641,
            "maxSelectedCorrelation": 0.857
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.948,
            "participation": 0.753,
            "volatility": 0.254,
            "gap": 1.225,
            "correlation": 0.857,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 90,
          "previousRank": 96,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "REJECT",
          "quantScore": -0.318,
          "metrics": {
            "momentum5d": -2.747,
            "momentum20d": -4.481,
            "realizedVol10dAnnualized": 20.28,
            "volumeRatio": 0.507,
            "atrPct": 1.652,
            "gapPct": -1.589,
            "relativeStrength5dPct": -1.661,
            "relativeStrength20dPct": -3.907,
            "avgDollarVolume10d": 25906160447,
            "maxSelectedCorrelation": 0.805
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.303,
            "participation": 0.544,
            "volatility": -0.728,
            "gap": 0.268,
            "correlation": 0.805,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 91,
          "previousRank": 89,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "REJECT",
          "quantScore": -0.319,
          "metrics": {
            "momentum5d": -10.806,
            "momentum20d": -11.69,
            "realizedVol10dAnnualized": 42.52,
            "volumeRatio": 1.023,
            "atrPct": 3.798,
            "gapPct": -3.115,
            "relativeStrength5dPct": -9.72,
            "relativeStrength20dPct": -11.117,
            "avgDollarVolume10d": 12898103179,
            "maxSelectedCorrelation": 0.84
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.614,
            "participation": 3.433,
            "volatility": 0.586,
            "gap": 0.986,
            "correlation": 0.84,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 92,
          "previousRank": 85,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "REJECT",
          "quantScore": -0.321,
          "metrics": {
            "momentum5d": -6.794,
            "momentum20d": -15.198,
            "realizedVol10dAnnualized": 40.35,
            "volumeRatio": 0.583,
            "atrPct": 3.909,
            "gapPct": -4.042,
            "relativeStrength5dPct": -5.708,
            "relativeStrength20dPct": -14.625,
            "avgDollarVolume10d": 4687223008,
            "maxSelectedCorrelation": 0.872
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.209,
            "participation": 0.965,
            "volatility": 0.588,
            "gap": 1.421,
            "correlation": 0.872,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 93,
          "previousRank": 99,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "REJECT",
          "quantScore": -0.337,
          "metrics": {
            "momentum5d": -1.086,
            "momentum20d": -0.573,
            "realizedVol10dAnnualized": 10.99,
            "volumeRatio": 0.395,
            "atrPct": 0.948,
            "gapPct": -0.869,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 26940892619,
            "maxSelectedCorrelation": 0.829
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.051,
            "participation": -0.086,
            "volatility": -1.199,
            "gap": 0.07,
            "correlation": 0.829,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 94,
          "previousRank": 93,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.361,
          "metrics": {
            "momentum5d": -6.232,
            "momentum20d": -9.048,
            "realizedVol10dAnnualized": 34.43,
            "volumeRatio": 0.376,
            "atrPct": 3.654,
            "gapPct": -3.336,
            "relativeStrength5dPct": -5.147,
            "relativeStrength20dPct": -8.475,
            "avgDollarVolume10d": 6151511868,
            "maxSelectedCorrelation": 0.878
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.921,
            "participation": -0.194,
            "volatility": 0.367,
            "gap": 1.089,
            "correlation": 0.878,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 95,
          "previousRank": 102,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.366,
          "metrics": {
            "momentum5d": -1.75,
            "momentum20d": -9.295,
            "realizedVol10dAnnualized": 26.28,
            "volumeRatio": 0.209,
            "atrPct": 2.545,
            "gapPct": -0.67,
            "relativeStrength5dPct": -0.665,
            "relativeStrength20dPct": -8.722,
            "avgDollarVolume10d": 2322953895,
            "maxSelectedCorrelation": 0.397
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.34,
            "participation": -1.13,
            "volatility": -0.246,
            "gap": 0.164,
            "correlation": 0.397,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 96,
          "previousRank": 94,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "REJECT",
          "quantScore": -0.375,
          "metrics": {
            "momentum5d": -3.499,
            "momentum20d": -6.537,
            "realizedVol10dAnnualized": 26.94,
            "volumeRatio": 0.373,
            "atrPct": 2.18,
            "gapPct": -1.915,
            "relativeStrength5dPct": -2.413,
            "relativeStrength20dPct": -5.964,
            "avgDollarVolume10d": 1655306664,
            "maxSelectedCorrelation": 0.823
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.474,
            "participation": -0.208,
            "volatility": -0.381,
            "gap": 0.421,
            "correlation": 0.823,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 97,
          "previousRank": 104,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": -0.42,
          "metrics": {
            "momentum5d": -5.398,
            "momentum20d": -2.358,
            "realizedVol10dAnnualized": 29.58,
            "volumeRatio": 0.221,
            "atrPct": 2.948,
            "gapPct": -1.417,
            "relativeStrength5dPct": -4.312,
            "relativeStrength20dPct": -1.785,
            "avgDollarVolume10d": 1366140069,
            "maxSelectedCorrelation": 0.552
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.578,
            "participation": -1.062,
            "volatility": -0.017,
            "gap": 0.188,
            "correlation": 0.552,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 98,
          "previousRank": 109,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.434,
          "metrics": {
            "momentum5d": -0.188,
            "momentum20d": -1.428,
            "realizedVol10dAnnualized": 3.72,
            "volumeRatio": 0.317,
            "atrPct": 0.354,
            "gapPct": -0.273,
            "relativeStrength5dPct": 0.898,
            "relativeStrength20dPct": -0.855,
            "avgDollarVolume10d": 3608050034,
            "maxSelectedCorrelation": 0.757
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.139,
            "participation": -0.523,
            "volatility": -1.585,
            "gap": 0.35,
            "correlation": 0.757,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 99,
          "previousRank": 114,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": -0.436,
          "metrics": {
            "momentum5d": -2.294,
            "momentum20d": -7.538,
            "realizedVol10dAnnualized": 23.73,
            "volumeRatio": 0.162,
            "atrPct": 2.316,
            "gapPct": -0.491,
            "relativeStrength5dPct": -1.208,
            "relativeStrength20dPct": -6.965,
            "avgDollarVolume10d": 887186737,
            "maxSelectedCorrelation": 0.407
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.351,
            "participation": -1.39,
            "volatility": -0.39,
            "gap": 0.248,
            "correlation": 0.407,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 100,
          "previousRank": 88,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "REJECT",
          "quantScore": -0.44,
          "metrics": {
            "momentum5d": -1.121,
            "momentum20d": -2.772,
            "realizedVol10dAnnualized": 11.05,
            "volumeRatio": 0.238,
            "atrPct": 1.191,
            "gapPct": -0.878,
            "relativeStrength5dPct": -0.035,
            "relativeStrength20dPct": -2.199,
            "avgDollarVolume10d": 323439822,
            "maxSelectedCorrelation": 0.809
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.03,
            "participation": -0.967,
            "volatility": -1.099,
            "gap": 0.066,
            "correlation": 0.809,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 101,
          "previousRank": 106,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.458,
          "metrics": {
            "momentum5d": -3.361,
            "momentum20d": -11.372,
            "realizedVol10dAnnualized": 33.01,
            "volumeRatio": 0.175,
            "atrPct": 2.926,
            "gapPct": -0.834,
            "relativeStrength5dPct": -2.275,
            "relativeStrength20dPct": -10.799,
            "avgDollarVolume10d": 689329721,
            "maxSelectedCorrelation": 0.269
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.625,
            "participation": -1.319,
            "volatility": 0.042,
            "gap": 0.086,
            "correlation": 0.269,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 102,
          "previousRank": 97,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.46,
          "metrics": {
            "momentum5d": -3.005,
            "momentum20d": -7.727,
            "realizedVol10dAnnualized": 20.51,
            "volumeRatio": 0.266,
            "atrPct": 2.318,
            "gapPct": -0.84,
            "relativeStrength5dPct": -1.919,
            "relativeStrength20dPct": -7.154,
            "avgDollarVolume10d": 396954806,
            "maxSelectedCorrelation": 0.348
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.451,
            "participation": -0.806,
            "volatility": -0.453,
            "gap": 0.084,
            "correlation": 0.348,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 103,
          "previousRank": 108,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "REJECT",
          "quantScore": -0.473,
          "metrics": {
            "momentum5d": -8.886,
            "momentum20d": -29.123,
            "realizedVol10dAnnualized": 47.37,
            "volumeRatio": 0.427,
            "atrPct": 6.19,
            "gapPct": -5.513,
            "relativeStrength5dPct": -7.801,
            "relativeStrength20dPct": -28.55,
            "avgDollarVolume10d": 7976048685,
            "maxSelectedCorrelation": 0.878
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.97,
            "participation": 0.091,
            "volatility": 1.654,
            "gap": 2.112,
            "correlation": 0.878,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 104,
          "previousRank": 103,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.478,
          "metrics": {
            "momentum5d": -15.873,
            "momentum20d": -24.037,
            "realizedVol10dAnnualized": 52.76,
            "volumeRatio": 0.821,
            "atrPct": 6.538,
            "gapPct": -10.04,
            "relativeStrength5dPct": -14.787,
            "relativeStrength20dPct": -23.464,
            "avgDollarVolume10d": 2286397223,
            "maxSelectedCorrelation": 0.835
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -2.711,
            "participation": 2.302,
            "volatility": 1.903,
            "gap": 4.24,
            "correlation": 0.835,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 105,
          "previousRank": 107,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "REJECT",
          "quantScore": -0.493,
          "metrics": {
            "momentum5d": -3.518,
            "momentum20d": -8.861,
            "realizedVol10dAnnualized": 19.31,
            "volumeRatio": 0.375,
            "atrPct": 1.855,
            "gapPct": -2.391,
            "relativeStrength5dPct": -2.432,
            "relativeStrength20dPct": -8.288,
            "avgDollarVolume10d": 1157515835,
            "maxSelectedCorrelation": 0.831
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.558,
            "participation": -0.195,
            "volatility": -0.665,
            "gap": 0.645,
            "correlation": 0.831,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 106,
          "previousRank": 101,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "REJECT",
          "quantScore": -0.504,
          "metrics": {
            "momentum5d": -6.157,
            "momentum20d": -2.993,
            "realizedVol10dAnnualized": 20.27,
            "volumeRatio": 0.39,
            "atrPct": 2.493,
            "gapPct": -1.361,
            "relativeStrength5dPct": -5.071,
            "relativeStrength20dPct": -2.42,
            "avgDollarVolume10d": 7009680776,
            "maxSelectedCorrelation": 0.833
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.7,
            "participation": -0.116,
            "volatility": -0.387,
            "gap": 0.161,
            "correlation": 0.833,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 107,
          "previousRank": 112,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.543,
          "metrics": {
            "momentum5d": -11.335,
            "momentum20d": -19.628,
            "realizedVol10dAnnualized": 42.55,
            "volumeRatio": 0.503,
            "atrPct": 5.345,
            "gapPct": -6.082,
            "relativeStrength5dPct": -10.249,
            "relativeStrength20dPct": -19.055,
            "avgDollarVolume10d": 2729517304,
            "maxSelectedCorrelation": 0.511
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.961,
            "participation": 0.521,
            "volatility": 1.215,
            "gap": 2.38,
            "correlation": 0.511,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 108,
          "previousRank": 111,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.543,
          "metrics": {
            "momentum5d": -9.423,
            "momentum20d": -7.59,
            "realizedVol10dAnnualized": 41.46,
            "volumeRatio": 0.367,
            "atrPct": 3.715,
            "gapPct": 0.301,
            "relativeStrength5dPct": -8.337,
            "relativeStrength20dPct": -7.017,
            "avgDollarVolume10d": 260016615,
            "maxSelectedCorrelation": 0.292
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.289,
            "participation": -0.241,
            "volatility": 0.531,
            "gap": 0.62,
            "correlation": 0.292,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 109,
          "previousRank": 80,
          "rankChange": -29,
          "rankChangeLabel": "-29",
          "status": "WATCH",
          "quantScore": -0.562,
          "metrics": {
            "momentum5d": -8.347,
            "momentum20d": -6.741,
            "realizedVol10dAnnualized": 36.34,
            "volumeRatio": 0.386,
            "atrPct": 3.007,
            "gapPct": 0.023,
            "relativeStrength5dPct": -7.261,
            "relativeStrength20dPct": -6.168,
            "avgDollarVolume10d": 2861617360,
            "maxSelectedCorrelation": 0.606
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.118,
            "participation": -0.137,
            "volatility": 0.142,
            "gap": 0.489,
            "correlation": 0.606,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 110,
          "previousRank": 81,
          "rankChange": -29,
          "rankChangeLabel": "-29",
          "status": "WATCH",
          "quantScore": -0.584,
          "metrics": {
            "momentum5d": -6.712,
            "momentum20d": -8.987,
            "realizedVol10dAnnualized": 22.51,
            "volumeRatio": 0.453,
            "atrPct": 2.754,
            "gapPct": -0.906,
            "relativeStrength5dPct": -5.626,
            "relativeStrength20dPct": -8.414,
            "avgDollarVolume10d": 1328282103,
            "maxSelectedCorrelation": 0.406
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.982,
            "participation": 0.239,
            "volatility": -0.236,
            "gap": 0.053,
            "correlation": 0.406,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 111,
          "previousRank": 105,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.593,
          "metrics": {
            "momentum5d": -5.648,
            "momentum20d": -5.923,
            "realizedVol10dAnnualized": 19.76,
            "volumeRatio": 0.461,
            "atrPct": 1.437,
            "gapPct": -2.307,
            "relativeStrength5dPct": -4.562,
            "relativeStrength20dPct": -5.35,
            "avgDollarVolume10d": 633980032,
            "maxSelectedCorrelation": 0.426
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.735,
            "participation": 0.283,
            "volatility": -0.826,
            "gap": 0.606,
            "correlation": 0.426,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 112,
          "previousRank": 100,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "REJECT",
          "quantScore": -0.625,
          "metrics": {
            "momentum5d": -6.336,
            "momentum20d": -18.808,
            "realizedVol10dAnnualized": 27.07,
            "volumeRatio": 0.387,
            "atrPct": 3.719,
            "gapPct": -1.669,
            "relativeStrength5dPct": -5.251,
            "relativeStrength20dPct": -18.235,
            "avgDollarVolume10d": 247728384,
            "maxSelectedCorrelation": 0.888
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.275,
            "participation": -0.131,
            "volatility": 0.246,
            "gap": 0.306,
            "correlation": 0.888,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 113,
          "previousRank": 115,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.707,
          "metrics": {
            "momentum5d": -8.176,
            "momentum20d": -8.297,
            "realizedVol10dAnnualized": 36.71,
            "volumeRatio": 0.191,
            "atrPct": 2.999,
            "gapPct": -0.815,
            "relativeStrength5dPct": -7.09,
            "relativeStrength20dPct": -7.723,
            "avgDollarVolume10d": 626057562,
            "maxSelectedCorrelation": 0.472
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.15,
            "participation": -1.229,
            "volatility": 0.146,
            "gap": 0.096,
            "correlation": 0.472,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 114,
          "previousRank": 113,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.812,
          "metrics": {
            "momentum5d": -14.508,
            "momentum20d": -20.606,
            "realizedVol10dAnnualized": 42.06,
            "volumeRatio": 0.446,
            "atrPct": 5.626,
            "gapPct": -5.244,
            "relativeStrength5dPct": -13.422,
            "relativeStrength20dPct": -20.033,
            "avgDollarVolume10d": 1554083784,
            "maxSelectedCorrelation": 0.758
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.412,
            "participation": 0.199,
            "volatility": 1.319,
            "gap": 1.986,
            "correlation": 0.758,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 115,
          "previousRank": 110,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "REJECT",
          "quantScore": -0.853,
          "metrics": {
            "momentum5d": -13.414,
            "momentum20d": -36.266,
            "realizedVol10dAnnualized": 56.02,
            "volumeRatio": 0.402,
            "atrPct": 6.82,
            "gapPct": -4.201,
            "relativeStrength5dPct": -12.328,
            "relativeStrength20dPct": -35.693,
            "avgDollarVolume10d": 1000621293,
            "maxSelectedCorrelation": 0.923
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -2.814,
            "participation": -0.048,
            "volatility": 2.082,
            "gap": 1.496,
            "correlation": 0.923,
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
            "momentum5d": 0.251,
            "momentum20d": -15.654,
            "realizedVol10dAnnualized": 96.42,
            "volumeRatio": 0.499,
            "atrPct": 7.379,
            "gapPct": -0.623,
            "relativeStrength5dPct": 1.337,
            "relativeStrength20dPct": -15.081,
            "avgDollarVolume10d": 40495853,
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
            "momentum5d": -0.566,
            "momentum20d": -1.349,
            "realizedVol10dAnnualized": 13.28,
            "volumeRatio": 0.222,
            "atrPct": 1.179,
            "gapPct": -0.456,
            "relativeStrength5dPct": 0.52,
            "relativeStrength20dPct": -0.776,
            "avgDollarVolume10d": 41841907,
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
            "momentum5d": -1.704,
            "momentum20d": -4.79,
            "realizedVol10dAnnualized": 15.59,
            "volumeRatio": 0.324,
            "atrPct": 1.199,
            "gapPct": -0.855,
            "relativeStrength5dPct": -0.618,
            "relativeStrength20dPct": -4.217,
            "avgDollarVolume10d": 19170407,
            "maxSelectedCorrelation": null
          },
          "selectionReason": "10-day average dollar volume below $50m.",
          "factors": null
        },
        {
          "symbol": "EWU",
          "rank": null,
          "previousRank": null,
          "rankChange": null,
          "rankChangeLabel": "—",
          "status": "REJECT",
          "quantScore": null,
          "metrics": {
            "momentum5d": -0.293,
            "momentum20d": 1.126,
            "realizedVol10dAnnualized": 12.38,
            "volumeRatio": 0.342,
            "atrPct": 0.983,
            "gapPct": 0.042,
            "relativeStrength5dPct": 0.793,
            "relativeStrength20dPct": 1.699,
            "avgDollarVolume10d": 32656224,
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
            "triggeredAt": "2026-10-19T13:30:00.000Z"
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
            "triggeredAt": "2026-10-19T13:30:00.000Z"
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
            "invalidatedAt": "2026-10-19T13:30:00.000Z"
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
            "triggeredAt": "2026-10-19T13:30:00.000Z"
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
            "triggeredAt": "2026-10-19T13:30:00.000Z"
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
            "invalidatedAt": "2026-10-19T13:30:00.000Z"
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
              "d1": 1.577
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
              "d1": -1.24
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
              "d1": 0.257
            },
            "selectionPrice": 263.2349853515625,
            "invalidatedAt": "2026-10-21T13:30:00.000Z"
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
              "d1": 3.369
            },
            "selectionPrice": 144.14500427246094,
            "triggeredAt": "2026-10-20T13:30:00.000Z"
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
              "d1": 3.608
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
              "d1": 0.125
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
              "d1": -2.186
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
              "d1": 3.366
            },
            "selectionPrice": 147.5,
            "triggeredAt": "2026-10-20T16:30:00.000Z"
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
              "d1": -1.106
            },
            "selectionPrice": 417.2077941894531,
            "triggeredAt": "2026-10-20T15:30:00.000Z"
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
              "d1": 1.689
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
              "d1": -5.59
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
              "d1": 2.052
            },
            "selectionPrice": 153.41000366210938,
            "triggeredAt": "2026-10-22T13:30:00.000Z"
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
              "d1": -3.886
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
              "d1": 2.1
            },
            "selectionPrice": 537.094970703125,
            "triggeredAt": "2026-10-22T13:30:00.000Z"
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
              "d1": 2.668
            },
            "selectionPrice": 426.0299987792969,
            "triggeredAt": "2026-10-21T15:30:00.000Z"
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
            "outcomes": {},
            "selectionPrice": 587.8699951171875
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
            "outcomes": {},
            "selectionPrice": 268.92498779296875
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
            "outcomes": {},
            "selectionPrice": 248.91270446777344
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
            "outcomes": {},
            "selectionPrice": 156.72000122070312
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
            "outcomes": {},
            "selectionPrice": 553.7449951171875
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-22T15:39:54.548Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-22T15:39:57.572Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-22T15:39:50.000Z",
        "MSTR": "2026-10-22T15:39:56.000Z",
        "HPE": "2026-10-22T15:39:54.000Z",
        "SHOP": "2026-10-22T15:39:48.000Z"
      },
      "fxUsdPerEur": 1.1209505796432495,
      "fxAt": "2026-10-22T15:39:30.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
