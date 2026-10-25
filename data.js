window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-25 17:02 UTC",
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
    "value": 935.98,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -62.59,
    "total": -64.02,
    "totalPct": -6.4
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 72.25,
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
      "value": 170.08,
      "pnl": -29.92,
      "pnlPct": -14.96,
      "fxUsdPerEur": 1.1204482316970825,
      "lastPriceAt": "2026-10-23T20:00:00.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 146.00999450683594,
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
      "value": 133.93,
      "pnl": -16.07,
      "pnlPct": -10.72,
      "fxUsdPerEur": 1.1204482316970825,
      "lastPriceAt": "2026-10-23T20:00:00.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 56.689998626708984,
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
      "value": 80.86,
      "pnl": -19.14,
      "pnlPct": -19.14,
      "fxUsdPerEur": 1.1204482316970825,
      "lastPriceAt": "2026-10-23T20:00:00.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 168.67999267578125,
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
      "value": 102.56,
      "pnl": 2.56,
      "pnlPct": 2.56,
      "fxUsdPerEur": 1.1204482316970825,
      "lastPriceAt": "2026-10-23T20:00:00.000Z"
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
      "date": "2026-10-25 17:02",
      "value": 935.98
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 115 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: CRWD, NOW, MSTR, LMT, SLB.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is CRWD, NOW, MSTR, LMT, SLB. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "symbol": "CRWD",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $263.69 with sustained participation.",
        "invalidation": "Loss of $251.45 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.83: 5d momentum 13.3%, 20d -0.8%, annualized 10d realized vol 69%, volume 1.34x, max selected correlation 0.00.",
        "quantScore": 1.828,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "WATCH_ONLY",
        "setupId": "CRWD-20261025-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $161.31 with sustained participation.",
        "invalidation": "Loss of $156.61 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.41: 5d momentum 12.0%, 20d 15.4%, annualized 10d realized vol 43%, volume 0.84x, max selected correlation 0.40.",
        "quantScore": 1.414,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "WATCH_ONLY",
        "setupId": "NOW-20261025-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $150.13 with sustained participation.",
        "invalidation": "Loss of $141.89 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.16: 5d momentum 6.7%, 20d -9.7%, annualized 10d realized vol 81%, volume 0.87x, max selected correlation 0.69.",
        "quantScore": 1.16,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "WATCH_ONLY",
        "setupId": "MSTR-20261025-daily-quant"
      },
      {
        "symbol": "LMT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $612.15 with sustained participation.",
        "invalidation": "Loss of $596.21 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.16: 5d momentum 9.4%, 20d 15.4%, annualized 10d realized vol 38%, volume 1.02x, max selected correlation 0.55.",
        "quantScore": 1.158,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "WATCH_ONLY",
        "setupId": "LMT-20261025-daily-quant"
      },
      {
        "symbol": "SLB",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $53.82 with sustained participation.",
        "invalidation": "Loss of $52.30 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.12: 5d momentum 7.2%, 20d 3.2%, annualized 10d realized vol 41%, volume 1.59x, max selected correlation 0.57.",
        "quantScore": 1.118,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "WATCH_ONLY",
        "setupId": "SLB-20261025-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "CRWD",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $263.69 with sustained participation.",
        "invalidation": "Loss of $251.45 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.83: 5d momentum 13.3%, 20d -0.8%, annualized 10d realized vol 69%, volume 1.34x, max selected correlation 0.00.",
        "quantScore": 1.828,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "UNTRIGGERED",
        "setupId": "CRWD-20261025-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $161.31 with sustained participation.",
        "invalidation": "Loss of $156.61 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.41: 5d momentum 12.0%, 20d 15.4%, annualized 10d realized vol 43%, volume 0.84x, max selected correlation 0.40.",
        "quantScore": 1.414,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "UNTRIGGERED",
        "setupId": "NOW-20261025-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $150.13 with sustained participation.",
        "invalidation": "Loss of $141.89 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.16: 5d momentum 6.7%, 20d -9.7%, annualized 10d realized vol 81%, volume 0.87x, max selected correlation 0.69.",
        "quantScore": 1.16,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "UNTRIGGERED",
        "setupId": "MSTR-20261025-daily-quant"
      },
      {
        "symbol": "LMT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $612.15 with sustained participation.",
        "invalidation": "Loss of $596.21 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.16: 5d momentum 9.4%, 20d 15.4%, annualized 10d realized vol 38%, volume 1.02x, max selected correlation 0.55.",
        "quantScore": 1.158,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "UNTRIGGERED",
        "setupId": "LMT-20261025-daily-quant"
      },
      {
        "symbol": "SLB",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-28T13:10:27.002Z",
        "trigger": "Break above $53.82 with sustained participation.",
        "invalidation": "Loss of $52.30 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.12: 5d momentum 7.2%, 20d 3.2%, annualized 10d realized vol 41%, volume 1.59x, max selected correlation 0.57.",
        "quantScore": 1.118,
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
        "createdAt": "2026-10-25T13:10:27.002Z",
        "lastReviewedAt": "2026-10-25T13:10:27.002Z",
        "status": "UNTRIGGERED",
        "setupId": "SLB-20261025-daily-quant"
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
    "lastReviewedAt": "2026-10-25T13:10:27.002Z",
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
      "selectedAt": "2026-10-25T13:10:27.002Z",
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
      "previousSelectedAt": "2026-10-24T13:59:38.806Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "CRWD",
          "quantScore": 1.828,
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
          }
        },
        {
          "symbol": "NOW",
          "quantScore": 1.414,
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
          }
        },
        {
          "symbol": "MSTR",
          "quantScore": 1.16,
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
          }
        },
        {
          "symbol": "LMT",
          "quantScore": 1.158,
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
          }
        },
        {
          "symbol": "SLB",
          "quantScore": 1.118,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "CRWD",
          "rank": 1,
          "previousRank": 1,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.828,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.883,
            "participation": 2.255,
            "volatility": 1.651,
            "gap": 1.428,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-28T13:10:27.002Z",
          "trigger": "Break above $263.69 with sustained participation.",
          "invalidation": "Loss of $251.45 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.83: 5d momentum 13.3%, 20d -0.8%, annualized 10d realized vol 69%, volume 1.34x, max selected correlation 0.00.",
          "createdAt": "2026-10-25T13:10:27.002Z",
          "lastReviewedAt": "2026-10-25T13:10:27.002Z",
          "setupId": "CRWD-20261025-daily-quant"
        },
        {
          "symbol": "PANW",
          "rank": 2,
          "previousRank": 2,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.456,
          "metrics": {
            "momentum5d": 11.272,
            "momentum20d": -2.403,
            "realizedVol10dAnnualized": 64.6,
            "volumeRatio": 1.094,
            "atrPct": 5.253,
            "gapPct": -0.175,
            "relativeStrength5dPct": 11.702,
            "relativeStrength20dPct": -1.463,
            "avgDollarVolume10d": 2196584001,
            "maxSelectedCorrelation": 0.929
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.55,
            "participation": 1.128,
            "volatility": 1.562,
            "gap": 0.439,
            "correlation": 0.929,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 3,
          "previousRank": 3,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.414,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.249,
            "participation": -0.037,
            "volatility": 0.578,
            "gap": 0.146,
            "correlation": 0.396,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-28T13:10:27.002Z",
          "trigger": "Break above $161.31 with sustained participation.",
          "invalidation": "Loss of $156.61 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.41: 5d momentum 12.0%, 20d 15.4%, annualized 10d realized vol 43%, volume 0.84x, max selected correlation 0.40.",
          "createdAt": "2026-10-25T13:10:27.002Z",
          "lastReviewedAt": "2026-10-25T13:10:27.002Z",
          "setupId": "NOW-20261025-daily-quant"
        },
        {
          "symbol": "MSTR",
          "rank": 4,
          "previousRank": 5,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 1.16,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 0.668,
            "participation": 0.134,
            "volatility": 2.501,
            "gap": 0.58,
            "correlation": 0.693,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-28T13:10:27.002Z",
          "trigger": "Break above $150.13 with sustained participation.",
          "invalidation": "Loss of $141.89 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.16: 5d momentum 6.7%, 20d -9.7%, annualized 10d realized vol 81%, volume 0.87x, max selected correlation 0.69.",
          "createdAt": "2026-10-25T13:10:27.002Z",
          "lastReviewedAt": "2026-10-25T13:10:27.002Z",
          "setupId": "MSTR-20261025-daily-quant"
        },
        {
          "symbol": "LMT",
          "rank": 5,
          "previousRank": 4,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "SELECTED",
          "quantScore": 1.158,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.895,
            "participation": 0.811,
            "volatility": 0.012,
            "gap": 0.618,
            "correlation": 0.547,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-28T13:10:27.002Z",
          "trigger": "Break above $612.15 with sustained participation.",
          "invalidation": "Loss of $596.21 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.16: 5d momentum 9.4%, 20d 15.4%, annualized 10d realized vol 38%, volume 1.02x, max selected correlation 0.55.",
          "createdAt": "2026-10-25T13:10:27.002Z",
          "lastReviewedAt": "2026-10-25T13:10:27.002Z",
          "setupId": "LMT-20261025-daily-quant"
        },
        {
          "symbol": "SLB",
          "rank": 6,
          "previousRank": 6,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.118,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.169,
            "participation": 3.376,
            "volatility": 0.162,
            "gap": 1.775,
            "correlation": 0.572,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-28T13:10:27.002Z",
          "trigger": "Break above $53.82 with sustained participation.",
          "invalidation": "Loss of $52.30 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.12: 5d momentum 7.2%, 20d 3.2%, annualized 10d realized vol 41%, volume 1.59x, max selected correlation 0.57.",
          "createdAt": "2026-10-25T13:10:27.002Z",
          "lastReviewedAt": "2026-10-25T13:10:27.002Z",
          "setupId": "SLB-20261025-daily-quant"
        },
        {
          "symbol": "ADBE",
          "rank": 7,
          "previousRank": 7,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.894,
          "metrics": {
            "momentum5d": 7.594,
            "momentum20d": 10.417,
            "realizedVol10dAnnualized": 46.47,
            "volumeRatio": 0.735,
            "atrPct": 3.374,
            "gapPct": -0.532,
            "relativeStrength5dPct": 8.024,
            "relativeStrength20dPct": 11.357,
            "avgDollarVolume10d": 1127912316,
            "maxSelectedCorrelation": 0.706
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.47,
            "participation": -0.488,
            "volatility": 0.441,
            "gap": 0.037,
            "correlation": 0.706,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 8,
          "previousRank": 8,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.893,
          "metrics": {
            "momentum5d": 9.227,
            "momentum20d": 11.671,
            "realizedVol10dAnnualized": 24.99,
            "volumeRatio": 0.75,
            "atrPct": 2.918,
            "gapPct": -0.944,
            "relativeStrength5dPct": 9.657,
            "relativeStrength20dPct": 12.611,
            "avgDollarVolume10d": 1589073183,
            "maxSelectedCorrelation": 0.916
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.741,
            "participation": -0.421,
            "volatility": -0.173,
            "gap": 0.586,
            "correlation": 0.916,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 9,
          "previousRank": 9,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.844,
          "metrics": {
            "momentum5d": 6.059,
            "momentum20d": -2.566,
            "realizedVol10dAnnualized": 58.19,
            "volumeRatio": 0.636,
            "atrPct": 5.37,
            "gapPct": -1.163,
            "relativeStrength5dPct": 6.488,
            "relativeStrength20dPct": -1.626,
            "avgDollarVolume10d": 1505924037,
            "maxSelectedCorrelation": 0.817
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.817,
            "participation": -0.933,
            "volatility": 1.481,
            "gap": 0.877,
            "correlation": 0.817,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 10,
          "previousRank": 10,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.84,
          "metrics": {
            "momentum5d": 4.142,
            "momentum20d": -20.646,
            "realizedVol10dAnnualized": 83.18,
            "volumeRatio": 0.609,
            "atrPct": 8.312,
            "gapPct": -0.059,
            "relativeStrength5dPct": 4.571,
            "relativeStrength20dPct": -19.706,
            "avgDollarVolume10d": 1300100900,
            "maxSelectedCorrelation": 0.861
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.063,
            "participation": -1.057,
            "volatility": 3.169,
            "gap": 0.593,
            "correlation": 0.861,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 11,
          "previousRank": 11,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.827,
          "metrics": {
            "momentum5d": 4.803,
            "momentum20d": 10.739,
            "realizedVol10dAnnualized": 24.12,
            "volumeRatio": 1.115,
            "atrPct": 2.731,
            "gapPct": 2.252,
            "relativeStrength5dPct": 5.233,
            "relativeStrength20dPct": 11.679,
            "avgDollarVolume10d": 824977052,
            "maxSelectedCorrelation": 0.46
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.092,
            "participation": 1.224,
            "volatility": -0.266,
            "gap": 3.674,
            "correlation": 0.46,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 12,
          "previousRank": 12,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.797,
          "metrics": {
            "momentum5d": 5.763,
            "momentum20d": 2.16,
            "realizedVol10dAnnualized": 53.24,
            "volumeRatio": 0.755,
            "atrPct": 4.556,
            "gapPct": -0.596,
            "relativeStrength5dPct": 6.192,
            "relativeStrength20dPct": 3.1,
            "avgDollarVolume10d": 4450900143,
            "maxSelectedCorrelation": 0.755
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.935,
            "participation": -0.4,
            "volatility": 1.054,
            "gap": 0.123,
            "correlation": 0.755,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 13,
          "previousRank": 13,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.757,
          "metrics": {
            "momentum5d": 5.997,
            "momentum20d": 13.208,
            "realizedVol10dAnnualized": 26.26,
            "volumeRatio": 0.93,
            "atrPct": 2.865,
            "gapPct": -0.045,
            "relativeStrength5dPct": 6.427,
            "relativeStrength20dPct": 14.148,
            "avgDollarVolume10d": 1197749878,
            "maxSelectedCorrelation": 0.503
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.342,
            "participation": 0.39,
            "volatility": -0.169,
            "gap": 0.612,
            "correlation": 0.503,
            "regimeFit": null
          }
        },
        {
          "symbol": "HPE",
          "rank": 14,
          "previousRank": 14,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.749,
          "metrics": {
            "momentum5d": 2.83,
            "momentum20d": -10.753,
            "realizedVol10dAnnualized": 63.14,
            "volumeRatio": 0.922,
            "atrPct": 6.655,
            "gapPct": -1.028,
            "relativeStrength5dPct": 3.259,
            "relativeStrength20dPct": -9.813,
            "avgDollarVolume10d": 1208279860,
            "maxSelectedCorrelation": 0.815
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.089,
            "participation": 0.353,
            "volatility": 2.099,
            "gap": 0.698,
            "correlation": 0.815,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 15,
          "previousRank": 15,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.73,
          "metrics": {
            "momentum5d": 2.928,
            "momentum20d": 16.592,
            "realizedVol10dAnnualized": 24.88,
            "volumeRatio": 1.238,
            "atrPct": 2.405,
            "gapPct": 1.016,
            "relativeStrength5dPct": 3.358,
            "relativeStrength20dPct": 17.532,
            "avgDollarVolume10d": 927415495,
            "maxSelectedCorrelation": 0.767
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.028,
            "participation": 1.776,
            "volatility": -0.382,
            "gap": 2.027,
            "correlation": 0.767,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 16,
          "previousRank": 16,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.644,
          "metrics": {
            "momentum5d": 0.298,
            "momentum20d": -11.755,
            "realizedVol10dAnnualized": 70.05,
            "volumeRatio": 0.679,
            "atrPct": 8.034,
            "gapPct": 0.148,
            "relativeStrength5dPct": 0.728,
            "relativeStrength20dPct": -10.815,
            "avgDollarVolume10d": 4481985892,
            "maxSelectedCorrelation": 0.801
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.298,
            "participation": -0.738,
            "volatility": 2.794,
            "gap": 0.869,
            "correlation": 0.801,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 17,
          "previousRank": 17,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.622,
          "metrics": {
            "momentum5d": 2.87,
            "momentum20d": 10.543,
            "realizedVol10dAnnualized": 20.39,
            "volumeRatio": 1.321,
            "atrPct": 2.476,
            "gapPct": 0.88,
            "relativeStrength5dPct": 3.299,
            "relativeStrength20dPct": 11.482,
            "avgDollarVolume10d": 568954305,
            "maxSelectedCorrelation": 0.766
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.815,
            "participation": 2.15,
            "volatility": -0.444,
            "gap": 1.845,
            "correlation": 0.766,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 18,
          "previousRank": 18,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.536,
          "metrics": {
            "momentum5d": 6.075,
            "momentum20d": 8.342,
            "realizedVol10dAnnualized": 31.15,
            "volumeRatio": 0.613,
            "atrPct": 2.629,
            "gapPct": -1.043,
            "relativeStrength5dPct": 6.504,
            "relativeStrength20dPct": 9.282,
            "avgDollarVolume10d": 630896992,
            "maxSelectedCorrelation": 0.484
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.188,
            "participation": -1.035,
            "volatility": -0.167,
            "gap": 0.718,
            "correlation": 0.484,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 19,
          "previousRank": 19,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.528,
          "metrics": {
            "momentum5d": 3.653,
            "momentum20d": 13.401,
            "realizedVol10dAnnualized": 19.67,
            "volumeRatio": 0.992,
            "atrPct": 2.138,
            "gapPct": 0.666,
            "relativeStrength5dPct": 4.083,
            "relativeStrength20dPct": 14.341,
            "avgDollarVolume10d": 1901153628,
            "maxSelectedCorrelation": 0.769
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.021,
            "participation": 0.668,
            "volatility": -0.594,
            "gap": 1.56,
            "correlation": 0.769,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 20,
          "previousRank": 20,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.519,
          "metrics": {
            "momentum5d": 4.15,
            "momentum20d": 11.488,
            "realizedVol10dAnnualized": 31.6,
            "volumeRatio": 0.663,
            "atrPct": 3.129,
            "gapPct": -0.16,
            "relativeStrength5dPct": 4.58,
            "relativeStrength20dPct": 12.427,
            "avgDollarVolume10d": 2914175073,
            "maxSelectedCorrelation": 0.557
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.026,
            "participation": -0.811,
            "volatility": 0.045,
            "gap": 0.459,
            "correlation": 0.557,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 21,
          "previousRank": 21,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.513,
          "metrics": {
            "momentum5d": 1.047,
            "momentum20d": -14.846,
            "realizedVol10dAnnualized": 74.24,
            "volumeRatio": 0.636,
            "atrPct": 7.155,
            "gapPct": -0.294,
            "relativeStrength5dPct": 1.477,
            "relativeStrength20dPct": -13.907,
            "avgDollarVolume10d": 3530011126,
            "maxSelectedCorrelation": 0.647
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.299,
            "participation": -0.934,
            "volatility": 2.523,
            "gap": 0.281,
            "correlation": 0.647,
            "regimeFit": null
          }
        },
        {
          "symbol": "SHOP",
          "rank": 22,
          "previousRank": 22,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.412,
          "metrics": {
            "momentum5d": -0.496,
            "momentum20d": 16.203,
            "realizedVol10dAnnualized": 44.45,
            "volumeRatio": 0.443,
            "atrPct": 4.599,
            "gapPct": -0.924,
            "relativeStrength5dPct": -0.066,
            "relativeStrength20dPct": 17.143,
            "avgDollarVolume10d": 1500013824,
            "maxSelectedCorrelation": 0.685
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.537,
            "participation": -1.803,
            "volatility": 0.895,
            "gap": 0.56,
            "correlation": 0.685,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 23,
          "previousRank": 23,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.407,
          "metrics": {
            "momentum5d": 2.363,
            "momentum20d": 12.995,
            "realizedVol10dAnnualized": 20.55,
            "volumeRatio": 0.95,
            "atrPct": 2.143,
            "gapPct": 0.64,
            "relativeStrength5dPct": 2.793,
            "relativeStrength20dPct": 13.935,
            "avgDollarVolume10d": 2148529398,
            "maxSelectedCorrelation": 0.787
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.827,
            "participation": 0.479,
            "volatility": -0.575,
            "gap": 1.525,
            "correlation": 0.787,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 24,
          "previousRank": 24,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.402,
          "metrics": {
            "momentum5d": 1.307,
            "momentum20d": 7.748,
            "realizedVol10dAnnualized": 35.82,
            "volumeRatio": 0.959,
            "atrPct": 3.246,
            "gapPct": -0.194,
            "relativeStrength5dPct": 1.737,
            "relativeStrength20dPct": 8.688,
            "avgDollarVolume10d": 3076004332,
            "maxSelectedCorrelation": 0.529
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.502,
            "participation": 0.519,
            "volatility": 0.176,
            "gap": 0.413,
            "correlation": 0.529,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 25,
          "previousRank": 25,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.4,
          "metrics": {
            "momentum5d": 3.27,
            "momentum20d": 4.345,
            "realizedVol10dAnnualized": 32.35,
            "volumeRatio": 0.755,
            "atrPct": 3.516,
            "gapPct": -0.679,
            "relativeStrength5dPct": 3.699,
            "relativeStrength20dPct": 5.285,
            "avgDollarVolume10d": 1923002205,
            "maxSelectedCorrelation": 0.618
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.661,
            "participation": -0.398,
            "volatility": 0.216,
            "gap": 0.233,
            "correlation": 0.618,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 26,
          "previousRank": 26,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.39,
          "metrics": {
            "momentum5d": 1.597,
            "momentum20d": 10.751,
            "realizedVol10dAnnualized": 21.6,
            "volumeRatio": 1.11,
            "atrPct": 2.124,
            "gapPct": 0.755,
            "relativeStrength5dPct": 2.027,
            "relativeStrength20dPct": 11.691,
            "avgDollarVolume10d": 2196262837,
            "maxSelectedCorrelation": 0.827
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.645,
            "participation": 1.199,
            "volatility": -0.561,
            "gap": 1.678,
            "correlation": 0.827,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 27,
          "previousRank": 27,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.385,
          "metrics": {
            "momentum5d": 4.933,
            "momentum20d": -1.513,
            "realizedVol10dAnnualized": 35.58,
            "volumeRatio": 0.743,
            "atrPct": 3.144,
            "gapPct": -0.368,
            "relativeStrength5dPct": 5.363,
            "relativeStrength20dPct": -0.574,
            "avgDollarVolume10d": 13569350866,
            "maxSelectedCorrelation": 0.685
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.695,
            "participation": -0.452,
            "volatility": 0.13,
            "gap": 0.181,
            "correlation": 0.685,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 28,
          "previousRank": 28,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.374,
          "metrics": {
            "momentum5d": 3.294,
            "momentum20d": 9.463,
            "realizedVol10dAnnualized": 31.06,
            "volumeRatio": 0.782,
            "atrPct": 2.378,
            "gapPct": -0.833,
            "relativeStrength5dPct": 3.724,
            "relativeStrength20dPct": 10.403,
            "avgDollarVolume10d": 1518978150,
            "maxSelectedCorrelation": 0.721
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.838,
            "participation": -0.274,
            "volatility": -0.27,
            "gap": 0.438,
            "correlation": 0.721,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 29,
          "previousRank": 29,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.331,
          "metrics": {
            "momentum5d": 0.319,
            "momentum20d": -1.23,
            "realizedVol10dAnnualized": 40.97,
            "volumeRatio": 0.866,
            "atrPct": 4.702,
            "gapPct": -0.915,
            "relativeStrength5dPct": 0.749,
            "relativeStrength20dPct": -0.291,
            "avgDollarVolume10d": 672258795,
            "maxSelectedCorrelation": 0.814
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.061,
            "participation": 0.103,
            "volatility": 0.867,
            "gap": 0.547,
            "correlation": 0.814,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 30,
          "previousRank": 30,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.292,
          "metrics": {
            "momentum5d": 3.363,
            "momentum20d": 7.635,
            "realizedVol10dAnnualized": 22.98,
            "volumeRatio": 0.737,
            "atrPct": 2.674,
            "gapPct": -0.52,
            "relativeStrength5dPct": 3.793,
            "relativeStrength20dPct": 8.575,
            "avgDollarVolume10d": 896397291,
            "maxSelectedCorrelation": 0.652
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.786,
            "participation": -0.477,
            "volatility": -0.312,
            "gap": 0.021,
            "correlation": 0.652,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 31,
          "previousRank": 31,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.28,
          "metrics": {
            "momentum5d": -0.118,
            "momentum20d": 2.473,
            "realizedVol10dAnnualized": 25,
            "volumeRatio": 1.264,
            "atrPct": 2.083,
            "gapPct": -3.128,
            "relativeStrength5dPct": 0.312,
            "relativeStrength20dPct": 3.413,
            "avgDollarVolume10d": 974822081,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.125,
            "participation": 1.893,
            "volatility": -0.51,
            "gap": 3.497,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 32,
          "previousRank": 32,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.278,
          "metrics": {
            "momentum5d": 2.89,
            "momentum20d": 10.377,
            "realizedVol10dAnnualized": 24.95,
            "volumeRatio": 0.837,
            "atrPct": 1.689,
            "gapPct": 0.024,
            "relativeStrength5dPct": 3.319,
            "relativeStrength20dPct": 11.317,
            "avgDollarVolume10d": 472158205,
            "maxSelectedCorrelation": 0.695
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.812,
            "participation": -0.03,
            "volatility": -0.67,
            "gap": 0.704,
            "correlation": 0.695,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 33,
          "previousRank": 33,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.277,
          "metrics": {
            "momentum5d": 2.882,
            "momentum20d": 8.569,
            "realizedVol10dAnnualized": 26.21,
            "volumeRatio": 0.846,
            "atrPct": 1.944,
            "gapPct": -0.122,
            "relativeStrength5dPct": 3.312,
            "relativeStrength20dPct": 9.509,
            "avgDollarVolume10d": 992946938,
            "maxSelectedCorrelation": 0.773
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.75,
            "participation": 0.012,
            "volatility": -0.542,
            "gap": 0.509,
            "correlation": 0.773,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 34,
          "previousRank": 34,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.27,
          "metrics": {
            "momentum5d": 0.458,
            "momentum20d": 3.64,
            "realizedVol10dAnnualized": 32.04,
            "volumeRatio": 1.076,
            "atrPct": 2.796,
            "gapPct": -1.331,
            "relativeStrength5dPct": 0.888,
            "relativeStrength20dPct": 4.58,
            "avgDollarVolume10d": 991244496,
            "maxSelectedCorrelation": 0.624
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.245,
            "participation": 1.049,
            "volatility": -0.081,
            "gap": 1.102,
            "correlation": 0.624,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 35,
          "previousRank": 35,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.265,
          "metrics": {
            "momentum5d": 1.437,
            "momentum20d": 11.918,
            "realizedVol10dAnnualized": 19.38,
            "volumeRatio": 1.116,
            "atrPct": 1.635,
            "gapPct": -0.217,
            "relativeStrength5dPct": 1.866,
            "relativeStrength20dPct": 12.858,
            "avgDollarVolume10d": 2222845443,
            "maxSelectedCorrelation": 0.647
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.662,
            "participation": 1.229,
            "volatility": -0.803,
            "gap": 0.383,
            "correlation": 0.647,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 36,
          "previousRank": 36,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.243,
          "metrics": {
            "momentum5d": 0.909,
            "momentum20d": 11.432,
            "realizedVol10dAnnualized": 23.27,
            "volumeRatio": 0.886,
            "atrPct": 2.198,
            "gapPct": 0.38,
            "relativeStrength5dPct": 1.339,
            "relativeStrength20dPct": 12.372,
            "avgDollarVolume10d": 2555813808,
            "maxSelectedCorrelation": 0.686
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.572,
            "participation": 0.19,
            "volatility": -0.498,
            "gap": 1.178,
            "correlation": 0.686,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 37,
          "previousRank": 37,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.231,
          "metrics": {
            "momentum5d": 3.796,
            "momentum20d": 2.143,
            "realizedVol10dAnnualized": 18.3,
            "volumeRatio": 1.047,
            "atrPct": 1.779,
            "gapPct": -0.594,
            "relativeStrength5dPct": 4.226,
            "relativeStrength20dPct": 3.082,
            "avgDollarVolume10d": 1102220928,
            "maxSelectedCorrelation": 0.464
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.66,
            "participation": 0.917,
            "volatility": -0.767,
            "gap": 0.119,
            "correlation": 0.464,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 38,
          "previousRank": 38,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.214,
          "metrics": {
            "momentum5d": 1.875,
            "momentum20d": 12.064,
            "realizedVol10dAnnualized": 25.75,
            "volumeRatio": 0.785,
            "atrPct": 1.796,
            "gapPct": -0.149,
            "relativeStrength5dPct": 2.305,
            "relativeStrength20dPct": 13.004,
            "avgDollarVolume10d": 588355967,
            "maxSelectedCorrelation": 0.606
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.728,
            "participation": -0.264,
            "volatility": -0.611,
            "gap": 0.473,
            "correlation": 0.606,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 39,
          "previousRank": 39,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.201,
          "metrics": {
            "momentum5d": -0.147,
            "momentum20d": -18.785,
            "realizedVol10dAnnualized": 54.04,
            "volumeRatio": 0.816,
            "atrPct": 5.735,
            "gapPct": 0.677,
            "relativeStrength5dPct": 0.283,
            "relativeStrength20dPct": -17.845,
            "avgDollarVolume10d": 23789230579,
            "maxSelectedCorrelation": 0.728
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.599,
            "participation": -0.125,
            "volatility": 1.546,
            "gap": 1.575,
            "correlation": 0.728,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 40,
          "previousRank": 40,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.185,
          "metrics": {
            "momentum5d": 0.659,
            "momentum20d": 5.406,
            "realizedVol10dAnnualized": 32.31,
            "volumeRatio": 0.836,
            "atrPct": 2.645,
            "gapPct": -1.204,
            "relativeStrength5dPct": 1.088,
            "relativeStrength20dPct": 6.346,
            "avgDollarVolume10d": 655580398,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.333,
            "participation": -0.035,
            "volatility": -0.137,
            "gap": 0.932,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 41,
          "previousRank": 41,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.173,
          "metrics": {
            "momentum5d": 1.521,
            "momentum20d": 5.702,
            "realizedVol10dAnnualized": 21.01,
            "volumeRatio": 1.093,
            "atrPct": 1.922,
            "gapPct": -0.46,
            "relativeStrength5dPct": 1.951,
            "relativeStrength20dPct": 6.642,
            "avgDollarVolume10d": 846597972,
            "maxSelectedCorrelation": 0.592
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.463,
            "participation": 1.123,
            "volatility": -0.655,
            "gap": 0.059,
            "correlation": 0.592,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 42,
          "previousRank": 42,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.168,
          "metrics": {
            "momentum5d": 0.972,
            "momentum20d": 2.209,
            "realizedVol10dAnnualized": 14.52,
            "volumeRatio": 1.219,
            "atrPct": 1.534,
            "gapPct": 1.505,
            "relativeStrength5dPct": 1.402,
            "relativeStrength20dPct": 3.149,
            "avgDollarVolume10d": 343103129,
            "maxSelectedCorrelation": 0.275
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.268,
            "participation": 1.691,
            "volatility": -0.941,
            "gap": 2.678,
            "correlation": 0.275,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 43,
          "previousRank": 43,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.167,
          "metrics": {
            "momentum5d": 3.228,
            "momentum20d": -2.538,
            "realizedVol10dAnnualized": 39.25,
            "volumeRatio": 0.668,
            "atrPct": 2.664,
            "gapPct": -0.669,
            "relativeStrength5dPct": 3.658,
            "relativeStrength20dPct": -1.598,
            "avgDollarVolume10d": 2282863985,
            "maxSelectedCorrelation": 0.692
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.423,
            "participation": -0.789,
            "volatility": 0.01,
            "gap": 0.219,
            "correlation": 0.692,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 44,
          "previousRank": 44,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.137,
          "metrics": {
            "momentum5d": 0.077,
            "momentum20d": 7.74,
            "realizedVol10dAnnualized": 26.23,
            "volumeRatio": 0.901,
            "atrPct": 2.542,
            "gapPct": -0.214,
            "relativeStrength5dPct": 0.507,
            "relativeStrength20dPct": 8.68,
            "avgDollarVolume10d": 1587187305,
            "maxSelectedCorrelation": 0.442
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.33,
            "participation": 0.261,
            "volatility": -0.3,
            "gap": 0.387,
            "correlation": 0.442,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 45,
          "previousRank": 46,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.133,
          "metrics": {
            "momentum5d": -0.973,
            "momentum20d": 13.62,
            "realizedVol10dAnnualized": 28.79,
            "volumeRatio": 0.738,
            "atrPct": 2.593,
            "gapPct": -1.078,
            "relativeStrength5dPct": -0.543,
            "relativeStrength20dPct": 14.56,
            "avgDollarVolume10d": 597598843,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.383,
            "participation": -0.474,
            "volatility": -0.228,
            "gap": 0.765,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 46,
          "previousRank": 45,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.132,
          "metrics": {
            "momentum5d": 0.73,
            "momentum20d": 8.029,
            "realizedVol10dAnnualized": 22.75,
            "volumeRatio": 1.112,
            "atrPct": 1.555,
            "gapPct": -0.444,
            "relativeStrength5dPct": 1.16,
            "relativeStrength20dPct": 8.969,
            "avgDollarVolume10d": 1454159439,
            "maxSelectedCorrelation": 0.751
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.431,
            "participation": 1.208,
            "volatility": -0.768,
            "gap": 0.08,
            "correlation": 0.751,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 47,
          "previousRank": 47,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.115,
          "metrics": {
            "momentum5d": 0.416,
            "momentum20d": -10.589,
            "realizedVol10dAnnualized": 37.63,
            "volumeRatio": 1.151,
            "atrPct": 3.581,
            "gapPct": -0.428,
            "relativeStrength5dPct": 0.846,
            "relativeStrength20dPct": -9.649,
            "avgDollarVolume10d": 353365412,
            "maxSelectedCorrelation": 0.945
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.242,
            "participation": 1.386,
            "volatility": 0.348,
            "gap": 0.102,
            "correlation": 0.945,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 48,
          "previousRank": 48,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.107,
          "metrics": {
            "momentum5d": 1.319,
            "momentum20d": 10.854,
            "realizedVol10dAnnualized": 18.08,
            "volumeRatio": 0.797,
            "atrPct": 1.76,
            "gapPct": -0.905,
            "relativeStrength5dPct": 1.749,
            "relativeStrength20dPct": 11.794,
            "avgDollarVolume10d": 2678920867,
            "maxSelectedCorrelation": 0.577
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.609,
            "participation": -0.21,
            "volatility": -0.779,
            "gap": 0.534,
            "correlation": 0.577,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 49,
          "previousRank": 49,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.076,
          "metrics": {
            "momentum5d": 1.454,
            "momentum20d": 5.54,
            "realizedVol10dAnnualized": 21.9,
            "volumeRatio": 0.934,
            "atrPct": 1.75,
            "gapPct": -0.496,
            "relativeStrength5dPct": 1.884,
            "relativeStrength20dPct": 6.479,
            "avgDollarVolume10d": 1558800148,
            "maxSelectedCorrelation": 0.445
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.448,
            "participation": 0.409,
            "volatility": -0.707,
            "gap": 0.01,
            "correlation": 0.445,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 50,
          "previousRank": 50,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.07,
          "metrics": {
            "momentum5d": -1.614,
            "momentum20d": -9.589,
            "realizedVol10dAnnualized": 58.56,
            "volumeRatio": 0.641,
            "atrPct": 5.231,
            "gapPct": -0.534,
            "relativeStrength5dPct": -1.185,
            "relativeStrength20dPct": -8.649,
            "avgDollarVolume10d": 3791010967,
            "maxSelectedCorrelation": 0.623
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.492,
            "participation": -0.91,
            "volatility": 1.432,
            "gap": 0.039,
            "correlation": 0.623,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 51,
          "previousRank": 51,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.062,
          "metrics": {
            "momentum5d": 1.745,
            "momentum20d": 6.593,
            "realizedVol10dAnnualized": 13.4,
            "volumeRatio": 0.883,
            "atrPct": 1.748,
            "gapPct": -0.787,
            "relativeStrength5dPct": 2.175,
            "relativeStrength20dPct": 7.533,
            "avgDollarVolume10d": 891813240,
            "maxSelectedCorrelation": 0.476
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.525,
            "participation": 0.176,
            "volatility": -0.877,
            "gap": 0.376,
            "correlation": 0.476,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 52,
          "previousRank": 52,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.052,
          "metrics": {
            "momentum5d": 1.001,
            "momentum20d": 10.161,
            "realizedVol10dAnnualized": 16.61,
            "volumeRatio": 0.834,
            "atrPct": 1.663,
            "gapPct": -0.703,
            "relativeStrength5dPct": 1.431,
            "relativeStrength20dPct": 11.101,
            "avgDollarVolume10d": 2056252323,
            "maxSelectedCorrelation": 0.704
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.541,
            "participation": -0.043,
            "volatility": -0.847,
            "gap": 0.265,
            "correlation": 0.704,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 53,
          "previousRank": 53,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.047,
          "metrics": {
            "momentum5d": 2.26,
            "momentum20d": 4.827,
            "realizedVol10dAnnualized": 18.23,
            "volumeRatio": 0.747,
            "atrPct": 1.811,
            "gapPct": -0.831,
            "relativeStrength5dPct": 2.689,
            "relativeStrength20dPct": 5.766,
            "avgDollarVolume10d": 1309754441,
            "maxSelectedCorrelation": 0.745
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.537,
            "participation": -0.433,
            "volatility": -0.755,
            "gap": 0.436,
            "correlation": 0.745,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 54,
          "previousRank": 54,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.025,
          "metrics": {
            "momentum5d": 2.208,
            "momentum20d": -9.446,
            "realizedVol10dAnnualized": 34.44,
            "volumeRatio": 0.693,
            "atrPct": 3.397,
            "gapPct": -0.44,
            "relativeStrength5dPct": 2.638,
            "relativeStrength20dPct": -8.506,
            "avgDollarVolume10d": 1789141947,
            "maxSelectedCorrelation": 0.871
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.046,
            "participation": -0.676,
            "volatility": 0.209,
            "gap": 0.086,
            "correlation": 0.871,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 55,
          "previousRank": 55,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.023,
          "metrics": {
            "momentum5d": -2.262,
            "momentum20d": -17.873,
            "realizedVol10dAnnualized": 59.2,
            "volumeRatio": 0.728,
            "atrPct": 5.664,
            "gapPct": 0.449,
            "relativeStrength5dPct": -1.832,
            "relativeStrength20dPct": -16.934,
            "avgDollarVolume10d": 10520334926,
            "maxSelectedCorrelation": 0.83
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.863,
            "participation": -0.52,
            "volatility": 1.62,
            "gap": 1.27,
            "correlation": 0.83,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 56,
          "previousRank": 56,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.018,
          "metrics": {
            "momentum5d": -0.598,
            "momentum20d": -8.573,
            "realizedVol10dAnnualized": 28.84,
            "volumeRatio": 1.255,
            "atrPct": 2.87,
            "gapPct": -1.114,
            "relativeStrength5dPct": -0.168,
            "relativeStrength20dPct": -7.633,
            "avgDollarVolume10d": 1246856042,
            "maxSelectedCorrelation": 0.704
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.316,
            "participation": 1.853,
            "volatility": -0.115,
            "gap": 0.813,
            "correlation": 0.704,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 57,
          "previousRank": 57,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.012,
          "metrics": {
            "momentum5d": 1.243,
            "momentum20d": 3.516,
            "realizedVol10dAnnualized": 11.67,
            "volumeRatio": 0.928,
            "atrPct": 1.779,
            "gapPct": 0.258,
            "relativeStrength5dPct": 1.673,
            "relativeStrength20dPct": 4.456,
            "avgDollarVolume10d": 14155855768,
            "maxSelectedCorrelation": 0.365
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.35,
            "participation": 0.379,
            "volatility": -0.899,
            "gap": 1.017,
            "correlation": 0.365,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 58,
          "previousRank": 58,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.02,
          "metrics": {
            "momentum5d": -0.466,
            "momentum20d": -1.831,
            "realizedVol10dAnnualized": 32.42,
            "volumeRatio": 0.703,
            "atrPct": 3.101,
            "gapPct": -1.508,
            "relativeStrength5dPct": -0.036,
            "relativeStrength20dPct": -0.892,
            "avgDollarVolume10d": 1570031720,
            "maxSelectedCorrelation": 0.25
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.069,
            "participation": -0.634,
            "volatility": 0.049,
            "gap": 1.338,
            "correlation": 0.25,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 59,
          "previousRank": 59,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.041,
          "metrics": {
            "momentum5d": -0.829,
            "momentum20d": -0.439,
            "realizedVol10dAnnualized": 23.41,
            "volumeRatio": 0.957,
            "atrPct": 2.977,
            "gapPct": -0.543,
            "relativeStrength5dPct": -0.399,
            "relativeStrength20dPct": 0.5,
            "avgDollarVolume10d": 1586193960,
            "maxSelectedCorrelation": 0.779
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.073,
            "participation": 0.51,
            "volatility": -0.181,
            "gap": 0.052,
            "correlation": 0.779,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 60,
          "previousRank": 60,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.068,
          "metrics": {
            "momentum5d": 0.564,
            "momentum20d": 8.403,
            "realizedVol10dAnnualized": 13.23,
            "volumeRatio": 0.653,
            "atrPct": 1.846,
            "gapPct": -1.086,
            "relativeStrength5dPct": 0.994,
            "relativeStrength20dPct": 9.343,
            "avgDollarVolume10d": 624711125,
            "maxSelectedCorrelation": 0.63
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.421,
            "participation": -0.857,
            "volatility": -0.841,
            "gap": 0.776,
            "correlation": 0.63,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 61,
          "previousRank": 61,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.085,
          "metrics": {
            "momentum5d": 0.829,
            "momentum20d": 8.13,
            "realizedVol10dAnnualized": 17.62,
            "volumeRatio": 0.645,
            "atrPct": 1.616,
            "gapPct": -0.327,
            "relativeStrength5dPct": 1.259,
            "relativeStrength20dPct": 9.07,
            "avgDollarVolume10d": 1183554909,
            "maxSelectedCorrelation": 0.453
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.449,
            "participation": -0.894,
            "volatility": -0.846,
            "gap": 0.237,
            "correlation": 0.453,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 62,
          "previousRank": 62,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.11,
          "metrics": {
            "momentum5d": -5.03,
            "momentum20d": -17.449,
            "realizedVol10dAnnualized": 59.96,
            "volumeRatio": 0.895,
            "atrPct": 6.046,
            "gapPct": -0.645,
            "relativeStrength5dPct": -4.6,
            "relativeStrength20dPct": -16.509,
            "avgDollarVolume10d": 1199769620,
            "maxSelectedCorrelation": 0.896
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.235,
            "participation": 0.232,
            "volatility": 1.789,
            "gap": 0.187,
            "correlation": 0.896,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 63,
          "previousRank": 63,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.114,
          "metrics": {
            "momentum5d": 1.611,
            "momentum20d": 2.418,
            "realizedVol10dAnnualized": 11.98,
            "volumeRatio": 0.862,
            "atrPct": 1.019,
            "gapPct": 0.061,
            "relativeStrength5dPct": 2.041,
            "relativeStrength20dPct": 3.357,
            "avgDollarVolume10d": 3430110086,
            "maxSelectedCorrelation": 0.553
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.365,
            "participation": 0.083,
            "volatility": -1.2,
            "gap": 0.754,
            "correlation": 0.553,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 64,
          "previousRank": 64,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.126,
          "metrics": {
            "momentum5d": 0.684,
            "momentum20d": 2.512,
            "realizedVol10dAnnualized": 14.05,
            "volumeRatio": 0.929,
            "atrPct": 1.278,
            "gapPct": -0.812,
            "relativeStrength5dPct": 1.114,
            "relativeStrength20dPct": 3.452,
            "avgDollarVolume10d": 1879062899,
            "maxSelectedCorrelation": 0.419
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.238,
            "participation": 0.386,
            "volatility": -1.054,
            "gap": 0.41,
            "correlation": 0.419,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 65,
          "previousRank": 66,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "REJECT",
          "quantScore": -0.131,
          "metrics": {
            "momentum5d": -0.972,
            "momentum20d": -2.171,
            "realizedVol10dAnnualized": 30.2,
            "volumeRatio": 0.799,
            "atrPct": 2.722,
            "gapPct": -0.753,
            "relativeStrength5dPct": -0.543,
            "relativeStrength20dPct": -1.231,
            "avgDollarVolume10d": 574149967,
            "maxSelectedCorrelation": 0.831
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.151,
            "participation": -0.2,
            "volatility": -0.148,
            "gap": 0.331,
            "correlation": 0.831,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 66,
          "previousRank": 65,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.132,
          "metrics": {
            "momentum5d": 1.963,
            "momentum20d": -2.098,
            "realizedVol10dAnnualized": 17.14,
            "volumeRatio": 0.854,
            "atrPct": 1.338,
            "gapPct": -0.658,
            "relativeStrength5dPct": 2.393,
            "relativeStrength20dPct": -1.158,
            "avgDollarVolume10d": 7095188133,
            "maxSelectedCorrelation": 0.807
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.261,
            "participation": 0.049,
            "volatility": -0.968,
            "gap": 0.205,
            "correlation": 0.807,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 67,
          "previousRank": 67,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.134,
          "metrics": {
            "momentum5d": -0.8,
            "momentum20d": -0.553,
            "realizedVol10dAnnualized": 36.08,
            "volumeRatio": 0.603,
            "atrPct": 2.857,
            "gapPct": -0.611,
            "relativeStrength5dPct": -0.37,
            "relativeStrength20dPct": 0.386,
            "avgDollarVolume10d": 8887149440,
            "maxSelectedCorrelation": 0.748
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.073,
            "participation": -1.081,
            "volatility": 0.024,
            "gap": 0.142,
            "correlation": 0.748,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 68,
          "previousRank": 68,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.144,
          "metrics": {
            "momentum5d": 0.668,
            "momentum20d": -7.021,
            "realizedVol10dAnnualized": 21.98,
            "volumeRatio": 0.75,
            "atrPct": 2.928,
            "gapPct": -0.291,
            "relativeStrength5dPct": 1.098,
            "relativeStrength20dPct": -6.081,
            "avgDollarVolume10d": 673023404,
            "maxSelectedCorrelation": 0.236
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.087,
            "participation": -0.419,
            "volatility": -0.229,
            "gap": 0.285,
            "correlation": 0.236,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 69,
          "previousRank": 69,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.155,
          "metrics": {
            "momentum5d": -0.858,
            "momentum20d": 5.338,
            "realizedVol10dAnnualized": 19.73,
            "volumeRatio": 0.738,
            "atrPct": 2.105,
            "gapPct": -0.639,
            "relativeStrength5dPct": -0.428,
            "relativeStrength20dPct": 6.278,
            "avgDollarVolume10d": 10224651268,
            "maxSelectedCorrelation": 0.758
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.119,
            "participation": -0.474,
            "volatility": -0.607,
            "gap": 0.18,
            "correlation": 0.758,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 70,
          "previousRank": 70,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.157,
          "metrics": {
            "momentum5d": -3.843,
            "momentum20d": -21.313,
            "realizedVol10dAnnualized": 60.12,
            "volumeRatio": 0.839,
            "atrPct": 5.584,
            "gapPct": -0.155,
            "relativeStrength5dPct": -3.414,
            "relativeStrength20dPct": -20.373,
            "avgDollarVolume10d": 1604681771,
            "maxSelectedCorrelation": 0.885
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.2,
            "participation": -0.02,
            "volatility": 1.606,
            "gap": 0.465,
            "correlation": 0.885,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 71,
          "previousRank": 71,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.173,
          "metrics": {
            "momentum5d": -1.501,
            "momentum20d": 1.272,
            "realizedVol10dAnnualized": 27.03,
            "volumeRatio": 0.698,
            "atrPct": 2.518,
            "gapPct": -1.109,
            "relativeStrength5dPct": -1.071,
            "relativeStrength20dPct": 2.212,
            "avgDollarVolume10d": 1138360354,
            "maxSelectedCorrelation": 0.759
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.109,
            "participation": -0.653,
            "volatility": -0.294,
            "gap": 0.807,
            "correlation": 0.759,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 72,
          "previousRank": 72,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.183,
          "metrics": {
            "momentum5d": -0.978,
            "momentum20d": -4.294,
            "realizedVol10dAnnualized": 20.61,
            "volumeRatio": 1.01,
            "atrPct": 2.218,
            "gapPct": -0.928,
            "relativeStrength5dPct": -0.548,
            "relativeStrength20dPct": -3.354,
            "avgDollarVolume10d": 1113706052,
            "maxSelectedCorrelation": 0.42
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.224,
            "participation": 0.752,
            "volatility": -0.543,
            "gap": 0.564,
            "correlation": 0.42,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 73,
          "previousRank": 73,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.191,
          "metrics": {
            "momentum5d": 0.766,
            "momentum20d": 3.281,
            "realizedVol10dAnnualized": 10.08,
            "volumeRatio": 0.823,
            "atrPct": 1.31,
            "gapPct": -0.542,
            "relativeStrength5dPct": 1.196,
            "relativeStrength20dPct": 4.221,
            "avgDollarVolume10d": 492357946,
            "maxSelectedCorrelation": 0.488
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.276,
            "participation": -0.093,
            "volatility": -1.121,
            "gap": 0.05,
            "correlation": 0.488,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 74,
          "previousRank": 74,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.193,
          "metrics": {
            "momentum5d": -0.633,
            "momentum20d": -5.157,
            "realizedVol10dAnnualized": 20.64,
            "volumeRatio": 0.76,
            "atrPct": 2.791,
            "gapPct": -1.26,
            "relativeStrength5dPct": -0.203,
            "relativeStrength20dPct": -4.217,
            "avgDollarVolume10d": 2317723534,
            "maxSelectedCorrelation": 0.845
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.205,
            "participation": -0.375,
            "volatility": -0.311,
            "gap": 1.007,
            "correlation": 0.845,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 75,
          "previousRank": 75,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.198,
          "metrics": {
            "momentum5d": 0.569,
            "momentum20d": 2.52,
            "realizedVol10dAnnualized": 16.97,
            "volumeRatio": 0.721,
            "atrPct": 1.379,
            "gapPct": -0.826,
            "relativeStrength5dPct": 0.999,
            "relativeStrength20dPct": 3.46,
            "avgDollarVolume10d": 847808899,
            "maxSelectedCorrelation": 0.59
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.222,
            "participation": -0.55,
            "volatility": -0.955,
            "gap": 0.429,
            "correlation": 0.59,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 76,
          "previousRank": 76,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.216,
          "metrics": {
            "momentum5d": 0.437,
            "momentum20d": 1.695,
            "realizedVol10dAnnualized": 10.63,
            "volumeRatio": 0.895,
            "atrPct": 1.023,
            "gapPct": -0.976,
            "relativeStrength5dPct": 0.867,
            "relativeStrength20dPct": 2.635,
            "avgDollarVolume10d": 1754618582,
            "maxSelectedCorrelation": 0.591
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.176,
            "participation": 0.232,
            "volatility": -1.225,
            "gap": 0.628,
            "correlation": 0.591,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 77,
          "previousRank": 77,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.236,
          "metrics": {
            "momentum5d": -2.345,
            "momentum20d": -0.674,
            "realizedVol10dAnnualized": 25.68,
            "volumeRatio": 0.65,
            "atrPct": 3.372,
            "gapPct": -0.569,
            "relativeStrength5dPct": -1.915,
            "relativeStrength20dPct": 0.266,
            "avgDollarVolume10d": 1877222111,
            "maxSelectedCorrelation": 0.556
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.292,
            "participation": -0.869,
            "volatility": 0.024,
            "gap": 0.086,
            "correlation": 0.556,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 78,
          "previousRank": 78,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.241,
          "metrics": {
            "momentum5d": -1.48,
            "momentum20d": -6.065,
            "realizedVol10dAnnualized": 31.59,
            "volumeRatio": 0.781,
            "atrPct": 2.834,
            "gapPct": -0.575,
            "relativeStrength5dPct": -1.051,
            "relativeStrength20dPct": -5.125,
            "avgDollarVolume10d": 20939299578,
            "maxSelectedCorrelation": 0.837
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.354,
            "participation": -0.28,
            "volatility": -0.075,
            "gap": 0.094,
            "correlation": 0.837,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 79,
          "previousRank": 79,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.244,
          "metrics": {
            "momentum5d": -2.151,
            "momentum20d": -8.186,
            "realizedVol10dAnnualized": 33.49,
            "volumeRatio": 0.731,
            "atrPct": 3.665,
            "gapPct": -0.538,
            "relativeStrength5dPct": -1.721,
            "relativeStrength20dPct": -7.246,
            "avgDollarVolume10d": 6741431523,
            "maxSelectedCorrelation": 0.846
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.52,
            "participation": -0.504,
            "volatility": 0.299,
            "gap": 0.045,
            "correlation": 0.846,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 80,
          "previousRank": 80,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.257,
          "metrics": {
            "momentum5d": 1.144,
            "momentum20d": 2.987,
            "realizedVol10dAnnualized": 11,
            "volumeRatio": 0.711,
            "atrPct": 0.962,
            "gapPct": -0.513,
            "relativeStrength5dPct": 1.574,
            "relativeStrength20dPct": 3.927,
            "avgDollarVolume10d": 1825785104,
            "maxSelectedCorrelation": 0.638
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.319,
            "participation": -0.596,
            "volatility": -1.242,
            "gap": 0.012,
            "correlation": 0.638,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 81,
          "previousRank": 81,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.269,
          "metrics": {
            "momentum5d": -0.131,
            "momentum20d": -5.896,
            "realizedVol10dAnnualized": 27.2,
            "volumeRatio": 0.672,
            "atrPct": 2.258,
            "gapPct": -0.285,
            "relativeStrength5dPct": 0.299,
            "relativeStrength20dPct": -4.956,
            "avgDollarVolume10d": 1839900337,
            "maxSelectedCorrelation": 0.769
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.16,
            "participation": -0.771,
            "volatility": -0.396,
            "gap": 0.292,
            "correlation": 0.769,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 82,
          "previousRank": 83,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "REJECT",
          "quantScore": -0.276,
          "metrics": {
            "momentum5d": -3.216,
            "momentum20d": -31.737,
            "realizedVol10dAnnualized": 54.6,
            "volumeRatio": 0.693,
            "atrPct": 6.264,
            "gapPct": 0.503,
            "relativeStrength5dPct": -2.787,
            "relativeStrength20dPct": -30.797,
            "avgDollarVolume10d": 8733857944,
            "maxSelectedCorrelation": 0.832
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.465,
            "participation": -0.678,
            "volatility": 1.77,
            "gap": 1.342,
            "correlation": 0.832,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 83,
          "previousRank": 82,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.279,
          "metrics": {
            "momentum5d": 0.247,
            "momentum20d": -1.078,
            "realizedVol10dAnnualized": 3.77,
            "volumeRatio": 1.204,
            "atrPct": 0.369,
            "gapPct": -0.272,
            "relativeStrength5dPct": 0.677,
            "relativeStrength20dPct": -0.139,
            "avgDollarVolume10d": 3994396979,
            "maxSelectedCorrelation": 0.787
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.056,
            "participation": 1.625,
            "volatility": -1.627,
            "gap": 0.309,
            "correlation": 0.787,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 84,
          "previousRank": 84,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.308,
          "metrics": {
            "momentum5d": -2.929,
            "momentum20d": -8.69,
            "realizedVol10dAnnualized": 33.19,
            "volumeRatio": 0.892,
            "atrPct": 2.822,
            "gapPct": -1.102,
            "relativeStrength5dPct": -2.5,
            "relativeStrength20dPct": -7.751,
            "avgDollarVolume10d": 1222213539,
            "maxSelectedCorrelation": 0.208
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.645,
            "participation": 0.217,
            "volatility": -0.048,
            "gap": 0.797,
            "correlation": 0.208,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 85,
          "previousRank": 85,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.309,
          "metrics": {
            "momentum5d": -5.188,
            "momentum20d": -3.641,
            "realizedVol10dAnnualized": 30.08,
            "volumeRatio": 1.164,
            "atrPct": 2.736,
            "gapPct": -0.869,
            "relativeStrength5dPct": -4.759,
            "relativeStrength20dPct": -2.701,
            "avgDollarVolume10d": 1027095244,
            "maxSelectedCorrelation": 0.69
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.79,
            "participation": 1.445,
            "volatility": -0.145,
            "gap": 0.486,
            "correlation": 0.69,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 86,
          "previousRank": 86,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.313,
          "metrics": {
            "momentum5d": -1.765,
            "momentum20d": 0.256,
            "realizedVol10dAnnualized": 24.63,
            "volumeRatio": 0.514,
            "atrPct": 2.471,
            "gapPct": -1.144,
            "relativeStrength5dPct": -1.335,
            "relativeStrength20dPct": 1.195,
            "avgDollarVolume10d": 1475554631,
            "maxSelectedCorrelation": 0.595
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.18,
            "participation": -1.481,
            "volatility": -0.361,
            "gap": 0.853,
            "correlation": 0.595,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 87,
          "previousRank": 87,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.319,
          "metrics": {
            "momentum5d": -3.079,
            "momentum20d": -15.523,
            "realizedVol10dAnnualized": 43.72,
            "volumeRatio": 0.744,
            "atrPct": 4.062,
            "gapPct": -0.2,
            "relativeStrength5dPct": -2.649,
            "relativeStrength20dPct": -14.583,
            "avgDollarVolume10d": 5235209402,
            "maxSelectedCorrelation": 0.815
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.897,
            "participation": -0.448,
            "volatility": 0.664,
            "gap": 0.406,
            "correlation": 0.815,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 88,
          "previousRank": 88,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.335,
          "metrics": {
            "momentum5d": 0.435,
            "momentum20d": 0.679,
            "realizedVol10dAnnualized": 7.32,
            "volumeRatio": 0.865,
            "atrPct": 0.617,
            "gapPct": -0.288,
            "relativeStrength5dPct": 0.865,
            "relativeStrength20dPct": 1.618,
            "avgDollarVolume10d": 3320181032,
            "maxSelectedCorrelation": 0.572
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.141,
            "participation": 0.098,
            "volatility": -1.456,
            "gap": 0.289,
            "correlation": 0.572,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 89,
          "previousRank": 89,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.339,
          "metrics": {
            "momentum5d": -2.332,
            "momentum20d": -12.209,
            "realizedVol10dAnnualized": 38.4,
            "volumeRatio": 0.654,
            "atrPct": 3.485,
            "gapPct": -0.141,
            "relativeStrength5dPct": -1.903,
            "relativeStrength20dPct": -11.27,
            "avgDollarVolume10d": 5580169617,
            "maxSelectedCorrelation": 0.798
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.681,
            "participation": -0.853,
            "volatility": 0.324,
            "gap": 0.484,
            "correlation": 0.798,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 90,
          "previousRank": 90,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.365,
          "metrics": {
            "momentum5d": -5.988,
            "momentum20d": -14.685,
            "realizedVol10dAnnualized": 30.19,
            "volumeRatio": 1.126,
            "atrPct": 4.336,
            "gapPct": -1.375,
            "relativeStrength5dPct": -5.559,
            "relativeStrength20dPct": -13.745,
            "avgDollarVolume10d": 2014758030,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.275,
            "participation": 1.274,
            "volatility": 0.504,
            "gap": 1.16,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 91,
          "previousRank": 91,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.374,
          "metrics": {
            "momentum5d": -1.337,
            "momentum20d": -7.792,
            "realizedVol10dAnnualized": 18.09,
            "volumeRatio": 0.946,
            "atrPct": 1.777,
            "gapPct": -0.097,
            "relativeStrength5dPct": -0.907,
            "relativeStrength20dPct": -6.852,
            "avgDollarVolume10d": 1331318698,
            "maxSelectedCorrelation": 0.775
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.393,
            "participation": 0.461,
            "volatility": -0.772,
            "gap": 0.543,
            "correlation": 0.775,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 92,
          "previousRank": 92,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.385,
          "metrics": {
            "momentum5d": -5.416,
            "momentum20d": -15.446,
            "realizedVol10dAnnualized": 43.18,
            "volumeRatio": 1.177,
            "atrPct": 3.028,
            "gapPct": -1.5,
            "relativeStrength5dPct": -4.987,
            "relativeStrength20dPct": -14.506,
            "avgDollarVolume10d": 862806862,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.221,
            "participation": 1.502,
            "volatility": 0.235,
            "gap": 1.327,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 93,
          "previousRank": 93,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.416,
          "metrics": {
            "momentum5d": -0.761,
            "momentum20d": -4.952,
            "realizedVol10dAnnualized": 20.98,
            "volumeRatio": 0.65,
            "atrPct": 1.712,
            "gapPct": -0.322,
            "relativeStrength5dPct": -0.331,
            "relativeStrength20dPct": -4.012,
            "avgDollarVolume10d": 29437447584,
            "maxSelectedCorrelation": 0.804
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.216,
            "participation": -0.868,
            "volatility": -0.74,
            "gap": 0.243,
            "correlation": 0.804,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 94,
          "previousRank": 94,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.42,
          "metrics": {
            "momentum5d": -1.872,
            "momentum20d": -2.494,
            "realizedVol10dAnnualized": 10.35,
            "volumeRatio": 0.841,
            "atrPct": 1.63,
            "gapPct": -1.032,
            "relativeStrength5dPct": -1.442,
            "relativeStrength20dPct": -1.554,
            "avgDollarVolume10d": 1313807488,
            "maxSelectedCorrelation": 0.608
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.288,
            "participation": -0.011,
            "volatility": -0.986,
            "gap": 0.703,
            "correlation": 0.608,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 95,
          "previousRank": 95,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.435,
          "metrics": {
            "momentum5d": -1.308,
            "momentum20d": -9.763,
            "realizedVol10dAnnualized": 25.03,
            "volumeRatio": 0.613,
            "atrPct": 2.575,
            "gapPct": -0.685,
            "relativeStrength5dPct": -0.878,
            "relativeStrength20dPct": -8.823,
            "avgDollarVolume10d": 2445613052,
            "maxSelectedCorrelation": 0.486
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.455,
            "participation": -1.038,
            "volatility": -0.311,
            "gap": 0.241,
            "correlation": 0.486,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 96,
          "previousRank": 97,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.44,
          "metrics": {
            "momentum5d": -1.501,
            "momentum20d": -8.956,
            "realizedVol10dAnnualized": 23.28,
            "volumeRatio": 0.655,
            "atrPct": 2.34,
            "gapPct": -0.098,
            "relativeStrength5dPct": -1.071,
            "relativeStrength20dPct": -8.016,
            "avgDollarVolume10d": 938907915,
            "maxSelectedCorrelation": 0.198
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.455,
            "participation": -0.849,
            "volatility": -0.441,
            "gap": 0.541,
            "correlation": 0.198,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 97,
          "previousRank": 96,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.441,
          "metrics": {
            "momentum5d": -0.43,
            "momentum20d": -0.94,
            "realizedVol10dAnnualized": 10.21,
            "volumeRatio": 0.744,
            "atrPct": 0.945,
            "gapPct": -0.531,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 30479484840,
            "maxSelectedCorrelation": 0.872
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.034,
            "participation": -0.445,
            "volatility": -1.265,
            "gap": 0.036,
            "correlation": 0.872,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 98,
          "previousRank": 98,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.441,
          "metrics": {
            "momentum5d": -2.396,
            "momentum20d": -2.062,
            "realizedVol10dAnnualized": 15.65,
            "volumeRatio": 0.714,
            "atrPct": 1.917,
            "gapPct": -1.052,
            "relativeStrength5dPct": -1.966,
            "relativeStrength20dPct": -1.122,
            "avgDollarVolume10d": 2540423278,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.347,
            "participation": -0.582,
            "volatility": -0.764,
            "gap": 0.73,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 99,
          "previousRank": 99,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.475,
          "metrics": {
            "momentum5d": -0.822,
            "momentum20d": -1.785,
            "realizedVol10dAnnualized": 9.51,
            "volumeRatio": 0.631,
            "atrPct": 1.221,
            "gapPct": -1.047,
            "relativeStrength5dPct": -0.392,
            "relativeStrength20dPct": -0.845,
            "avgDollarVolume10d": 339288836,
            "maxSelectedCorrelation": 0.781
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.117,
            "participation": -0.957,
            "volatility": -1.168,
            "gap": 0.723,
            "correlation": 0.781,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 100,
          "previousRank": 100,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.512,
          "metrics": {
            "momentum5d": -4.031,
            "momentum20d": -6.403,
            "realizedVol10dAnnualized": 17.19,
            "volumeRatio": 1.13,
            "atrPct": 1.453,
            "gapPct": -0.014,
            "relativeStrength5dPct": -3.602,
            "relativeStrength20dPct": -5.463,
            "avgDollarVolume10d": 3096035991,
            "maxSelectedCorrelation": 0.587
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.722,
            "participation": 1.289,
            "volatility": -0.921,
            "gap": 0.654,
            "correlation": 0.587,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 101,
          "previousRank": 101,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.529,
          "metrics": {
            "momentum5d": -7.831,
            "momentum20d": -20.455,
            "realizedVol10dAnnualized": 47.62,
            "volumeRatio": 0.833,
            "atrPct": 5.451,
            "gapPct": 0.021,
            "relativeStrength5dPct": -7.401,
            "relativeStrength20dPct": -19.516,
            "avgDollarVolume10d": 3173629500,
            "maxSelectedCorrelation": 0.545
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.728,
            "participation": -0.046,
            "volatility": 1.302,
            "gap": 0.7,
            "correlation": 0.545,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 102,
          "previousRank": 102,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.534,
          "metrics": {
            "momentum5d": -4.75,
            "momentum20d": -22.629,
            "realizedVol10dAnnualized": 27.73,
            "volumeRatio": 1.059,
            "atrPct": 3.913,
            "gapPct": -1.078,
            "relativeStrength5dPct": -4.321,
            "relativeStrength20dPct": -21.689,
            "avgDollarVolume10d": 258300004,
            "maxSelectedCorrelation": 0.936
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.371,
            "participation": 0.97,
            "volatility": 0.284,
            "gap": 0.765,
            "correlation": 0.936,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 103,
          "previousRank": 103,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.577,
          "metrics": {
            "momentum5d": -6.677,
            "momentum20d": -7.937,
            "realizedVol10dAnnualized": 23.97,
            "volumeRatio": 1.116,
            "atrPct": 2.586,
            "gapPct": -0.921,
            "relativeStrength5dPct": -6.248,
            "relativeStrength20dPct": -6.997,
            "avgDollarVolume10d": 435613654,
            "maxSelectedCorrelation": 0.632
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.143,
            "participation": 1.226,
            "volatility": -0.327,
            "gap": 0.556,
            "correlation": 0.632,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 104,
          "previousRank": 104,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.617,
          "metrics": {
            "momentum5d": -7.669,
            "momentum20d": -31.341,
            "realizedVol10dAnnualized": 58.83,
            "volumeRatio": 0.525,
            "atrPct": 6.753,
            "gapPct": 0.271,
            "relativeStrength5dPct": -7.239,
            "relativeStrength20dPct": -30.401,
            "avgDollarVolume10d": 1035040249,
            "maxSelectedCorrelation": 0.827
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -2.074,
            "participation": -1.435,
            "volatility": 2.052,
            "gap": 1.034,
            "correlation": 0.827,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 105,
          "previousRank": 105,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.642,
          "metrics": {
            "momentum5d": -6.635,
            "momentum20d": -8.185,
            "realizedVol10dAnnualized": 38.11,
            "volumeRatio": 0.619,
            "atrPct": 3.184,
            "gapPct": -0.06,
            "relativeStrength5dPct": -6.206,
            "relativeStrength20dPct": -7.245,
            "avgDollarVolume10d": 3131335345,
            "maxSelectedCorrelation": 0.622
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.146,
            "participation": -1.008,
            "volatility": 0.197,
            "gap": 0.593,
            "correlation": 0.622,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 106,
          "previousRank": 106,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.664,
          "metrics": {
            "momentum5d": -8.983,
            "momentum20d": -10.676,
            "realizedVol10dAnnualized": 23.17,
            "volumeRatio": 1.009,
            "atrPct": 3.078,
            "gapPct": -2.926,
            "relativeStrength5dPct": -8.553,
            "relativeStrength20dPct": -9.736,
            "avgDollarVolume10d": 1510492961,
            "maxSelectedCorrelation": 0.614
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.558,
            "participation": 0.745,
            "volatility": -0.145,
            "gap": 3.228,
            "correlation": 0.614,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 107,
          "previousRank": 107,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.691,
          "metrics": {
            "momentum5d": -5.984,
            "momentum20d": -6.47,
            "realizedVol10dAnnualized": 20.97,
            "volumeRatio": 0.709,
            "atrPct": 2.619,
            "gapPct": -0.947,
            "relativeStrength5dPct": -5.554,
            "relativeStrength20dPct": -5.53,
            "avgDollarVolume10d": 7456003194,
            "maxSelectedCorrelation": 0.794
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.997,
            "participation": -0.605,
            "volatility": -0.374,
            "gap": 0.59,
            "correlation": 0.794,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 108,
          "previousRank": 108,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.702,
          "metrics": {
            "momentum5d": -10.131,
            "momentum20d": -17.056,
            "realizedVol10dAnnualized": 39.31,
            "volumeRatio": 0.945,
            "atrPct": 4.019,
            "gapPct": -2.73,
            "relativeStrength5dPct": -9.702,
            "relativeStrength20dPct": -16.116,
            "avgDollarVolume10d": 249170816,
            "maxSelectedCorrelation": 0.389
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.934,
            "participation": 0.459,
            "volatility": 0.558,
            "gap": 2.967,
            "correlation": 0.389,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 109,
          "previousRank": 110,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.725,
          "metrics": {
            "momentum5d": -12.821,
            "momentum20d": -25.088,
            "realizedVol10dAnnualized": 58.01,
            "volumeRatio": 0.928,
            "atrPct": 6.75,
            "gapPct": -1.191,
            "relativeStrength5dPct": -12.391,
            "relativeStrength20dPct": -24.148,
            "avgDollarVolume10d": 2751660127,
            "maxSelectedCorrelation": 0.783
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.581,
            "participation": 0.38,
            "volatility": 2.035,
            "gap": 0.915,
            "correlation": 0.783,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 110,
          "previousRank": 111,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.748,
          "metrics": {
            "momentum5d": -4.521,
            "momentum20d": -5.637,
            "realizedVol10dAnnualized": 12.94,
            "volumeRatio": 0.791,
            "atrPct": 1.324,
            "gapPct": -0.308,
            "relativeStrength5dPct": -4.092,
            "relativeStrength20dPct": -4.697,
            "avgDollarVolume10d": 635053400,
            "maxSelectedCorrelation": 0.391
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.764,
            "participation": -0.238,
            "volatility": -1.058,
            "gap": 0.261,
            "correlation": 0.391,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 111,
          "previousRank": 113,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.835,
          "metrics": {
            "momentum5d": -9.576,
            "momentum20d": -5.771,
            "realizedVol10dAnnualized": 37.08,
            "volumeRatio": 0.592,
            "atrPct": 3.029,
            "gapPct": -1.334,
            "relativeStrength5dPct": -9.146,
            "relativeStrength20dPct": -4.832,
            "avgDollarVolume10d": 660667971,
            "maxSelectedCorrelation": 0.385
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.474,
            "participation": -1.131,
            "volatility": 0.113,
            "gap": 1.106,
            "correlation": 0.385,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 112,
          "previousRank": 114,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "REJECT",
          "quantScore": -0.851,
          "metrics": {
            "momentum5d": -9.405,
            "momentum20d": -17.357,
            "realizedVol10dAnnualized": 46.04,
            "volumeRatio": 0.597,
            "atrPct": 3.934,
            "gapPct": -1.644,
            "relativeStrength5dPct": -8.975,
            "relativeStrength20dPct": -16.418,
            "avgDollarVolume10d": 14086654422,
            "maxSelectedCorrelation": 0.861
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.843,
            "participation": -1.111,
            "volatility": 0.658,
            "gap": 1.52,
            "correlation": 0.861,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 113,
          "previousRank": 109,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": -0.914,
          "metrics": {
            "momentum5d": -3.193,
            "momentum20d": -7.187,
            "realizedVol10dAnnualized": 19.66,
            "volumeRatio": 0.172,
            "atrPct": 1.145,
            "gapPct": 0,
            "relativeStrength5dPct": -2.763,
            "relativeStrength20dPct": -6.247,
            "avgDollarVolume10d": 356713001,
            "maxSelectedCorrelation": 0.56
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.631,
            "participation": -3.021,
            "volatility": -0.996,
            "gap": 0.672,
            "correlation": 0.56,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 114,
          "previousRank": 115,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.923,
          "metrics": {
            "momentum5d": -12.146,
            "momentum20d": -22.179,
            "realizedVol10dAnnualized": 44.13,
            "volumeRatio": 0.769,
            "atrPct": 5.74,
            "gapPct": -0.21,
            "relativeStrength5dPct": -11.716,
            "relativeStrength20dPct": -21.24,
            "avgDollarVolume10d": 1814513198,
            "maxSelectedCorrelation": 0.745
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.388,
            "participation": -0.336,
            "volatility": 1.349,
            "gap": 0.393,
            "correlation": 0.745,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 115,
          "previousRank": 112,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -1.112,
          "metrics": {
            "momentum5d": -4.628,
            "momentum20d": -14.423,
            "realizedVol10dAnnualized": 21.33,
            "volumeRatio": 0.156,
            "atrPct": 1.514,
            "gapPct": 0,
            "relativeStrength5dPct": -4.198,
            "relativeStrength20dPct": -13.483,
            "avgDollarVolume10d": 167621061,
            "maxSelectedCorrelation": 0.463
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.076,
            "participation": -3.095,
            "volatility": -0.813,
            "gap": 0.672,
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
            "momentum5d": 12.46,
            "momentum20d": -15.181,
            "realizedVol10dAnnualized": 93.45,
            "volumeRatio": 0.592,
            "atrPct": 7.67,
            "gapPct": -1.445,
            "relativeStrength5dPct": 12.89,
            "relativeStrength20dPct": -14.241,
            "avgDollarVolume10d": 43584745,
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
            "momentum5d": -1.516,
            "momentum20d": -2.221,
            "realizedVol10dAnnualized": 13.78,
            "volumeRatio": 0.837,
            "atrPct": 1.239,
            "gapPct": -1.161,
            "relativeStrength5dPct": -1.086,
            "relativeStrength20dPct": -1.281,
            "avgDollarVolume10d": 31290441,
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
            "momentum5d": -1.781,
            "momentum20d": -5.375,
            "realizedVol10dAnnualized": 15.22,
            "volumeRatio": 0.62,
            "atrPct": 1.179,
            "gapPct": -1.508,
            "relativeStrength5dPct": -1.351,
            "relativeStrength20dPct": -4.435,
            "avgDollarVolume10d": 20629564,
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
            "momentum5d": -1.021,
            "momentum20d": 0.763,
            "realizedVol10dAnnualized": 12.94,
            "volumeRatio": 0.906,
            "atrPct": 1.021,
            "gapPct": -0.92,
            "relativeStrength5dPct": -0.591,
            "relativeStrength20dPct": 1.703,
            "avgDollarVolume10d": 29331245,
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
              "d1": 3.369,
              "d3": 7.745
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
              "d1": -1.106,
              "d3": 0.844
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
            "outcomes": {
              "h1": 0.783,
              "h4": 1.409,
              "d1": 3.696
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
              "d1": -1.175
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
              "d1": 1.773
            },
            "selectionPrice": 248.91270446777344,
            "triggeredAt": "2026-10-22T18:30:00.000Z"
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
              "d1": 1.019
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
              "d1": -0.398
            },
            "selectionPrice": 553.7449951171875,
            "invalidatedAt": "2026-10-23T13:30:00.000Z"
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
              "h4": 1.702
            },
            "selectionPrice": 251.23500061035156,
            "triggeredAt": "2026-10-23T19:30:00.000Z"
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
              "h4": 1.095
            },
            "selectionPrice": 157.12579345703125
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
              "h4": -1.667
            },
            "selectionPrice": 148.41000366210938
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
              "h4": -0.685
            },
            "selectionPrice": 52.935001373291016
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
              "h4": -0.31
            },
            "selectionPrice": 264.7300109863281
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
            "outcomes": {},
            "selectionPrice": 257.57000732421875
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
            "outcomes": {},
            "selectionPrice": 158.9600067138672
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
            "outcomes": {},
            "selectionPrice": 604.1799926757812
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
            "outcomes": {},
            "selectionPrice": 146.00999450683594
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
            "outcomes": {},
            "selectionPrice": 53.060001373291016
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
            "outcomes": {},
            "selectionPrice": 257.57000732421875
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
            "outcomes": {},
            "selectionPrice": 158.9600067138672
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
            "outcomes": {},
            "selectionPrice": 146.00999450683594
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
            "outcomes": {},
            "selectionPrice": 604.1799926757812
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
            "outcomes": {},
            "selectionPrice": 53.060001373291016
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-25T17:02:49.037Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-25T17:02:52.573Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-23T20:00:00.000Z",
        "MSTR": "2026-10-23T20:00:00.000Z",
        "HPE": "2026-10-23T20:00:00.000Z",
        "SHOP": "2026-10-23T20:00:00.000Z"
      },
      "fxUsdPerEur": 1.1204482316970825,
      "fxAt": "2026-10-23T21:25:00.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
