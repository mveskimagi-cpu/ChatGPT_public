window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-23 19:28 UTC",
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
    "value": 937.11,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": -61.46,
    "total": -62.89,
    "totalPct": -6.29
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 72.26000213623047,
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
      "value": 170.21,
      "pnl": -29.79,
      "pnlPct": -14.89,
      "fxUsdPerEur": 1.1196954250335693,
      "lastPriceAt": "2026-10-23T19:28:30.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 146.6199951171875,
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
      "value": 134.58,
      "pnl": -15.42,
      "pnlPct": -10.28,
      "fxUsdPerEur": 1.1196954250335693,
      "lastPriceAt": "2026-10-23T19:28:28.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 56.80889892578125,
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
      "value": 81.08,
      "pnl": -18.92,
      "pnlPct": -18.92,
      "fxUsdPerEur": 1.1196954250335693,
      "lastPriceAt": "2026-10-23T19:28:27.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 168.7550048828125,
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
      "value": 102.67,
      "pnl": 2.67,
      "pnlPct": 2.67,
      "fxUsdPerEur": 1.1196954250335693,
      "lastPriceAt": "2026-10-23T19:28:24.000Z"
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
      "date": "2026-10-23 19:28",
      "value": 937.11
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 115 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: CRWD, NOW, MSTR, SLB, ADBE.",
    "riskPosture": "Active paper positions: ON, MSTR, HPE, SHOP. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is CRWD, NOW, MSTR, SLB, ADBE. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $256.69 with sustained participation.",
        "invalidation": "Loss of $246.09 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.50: 5d momentum 10.6%, 20d -3.2%, annualized 10d realized vol 61%, volume 0.57x, max selected correlation 0.00.",
        "quantScore": 1.497,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "WATCH_ONLY",
        "setupId": "CRWD-20261023-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $159.53 with sustained participation.",
        "invalidation": "Loss of $154.85 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.32: 5d momentum 10.7%, 20d 14.1%, annualized 10d realized vol 43%, volume 0.31x, max selected correlation 0.37.",
        "quantScore": 1.323,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "WATCH_ONLY",
        "setupId": "NOW-20261023-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $152.79 with sustained participation.",
        "invalidation": "Loss of $144.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.29: 5d momentum 8.6%, 20d -8.1%, annualized 10d realized vol 82%, volume 0.30x, max selected correlation 0.69.",
        "quantScore": 1.295,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "WATCH_ONLY",
        "setupId": "MSTR-20261023-daily-quant"
      },
      {
        "symbol": "SLB",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $53.68 with sustained participation.",
        "invalidation": "Loss of $52.21 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.98: 5d momentum 7.0%, 20d 2.9%, annualized 10d realized vol 40%, volume 0.61x, max selected correlation 0.48.",
        "quantScore": 0.982,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "WATCH_ONLY",
        "setupId": "SLB-20261023-daily-quant"
      },
      {
        "symbol": "ADBE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $268.96 with sustained participation.",
        "invalidation": "Loss of $260.54 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.93: 5d momentum 8.0%, 20d 10.8%, annualized 10d realized vol 46%, volume 0.24x, max selected correlation 0.75.",
        "quantScore": 0.93,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "WATCH_ONLY",
        "setupId": "ADBE-20261023-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "CRWD",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $256.69 with sustained participation.",
        "invalidation": "Loss of $246.09 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.50: 5d momentum 10.6%, 20d -3.2%, annualized 10d realized vol 61%, volume 0.57x, max selected correlation 0.00.",
        "quantScore": 1.497,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "UNTRIGGERED",
        "setupId": "CRWD-20261023-daily-quant"
      },
      {
        "symbol": "NOW",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $159.53 with sustained participation.",
        "invalidation": "Loss of $154.85 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.32: 5d momentum 10.7%, 20d 14.1%, annualized 10d realized vol 43%, volume 0.31x, max selected correlation 0.37.",
        "quantScore": 1.323,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "UNTRIGGERED",
        "setupId": "NOW-20261023-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $152.79 with sustained participation.",
        "invalidation": "Loss of $144.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.29: 5d momentum 8.6%, 20d -8.1%, annualized 10d realized vol 82%, volume 0.30x, max selected correlation 0.69.",
        "quantScore": 1.295,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "UNTRIGGERED",
        "setupId": "MSTR-20261023-daily-quant"
      },
      {
        "symbol": "SLB",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $53.68 with sustained participation.",
        "invalidation": "Loss of $52.21 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.98: 5d momentum 7.0%, 20d 2.9%, annualized 10d realized vol 40%, volume 0.61x, max selected correlation 0.48.",
        "quantScore": 0.982,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "UNTRIGGERED",
        "setupId": "SLB-20261023-daily-quant"
      },
      {
        "symbol": "ADBE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-26T15:28:20.354Z",
        "trigger": "Break above $268.96 with sustained participation.",
        "invalidation": "Loss of $260.54 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 0.93: 5d momentum 8.0%, 20d 10.8%, annualized 10d realized vol 46%, volume 0.24x, max selected correlation 0.75.",
        "quantScore": 0.93,
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
        "createdAt": "2026-10-23T15:28:20.354Z",
        "lastReviewedAt": "2026-10-23T15:28:20.354Z",
        "status": "UNTRIGGERED",
        "setupId": "ADBE-20261023-daily-quant"
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
    "lastReviewedAt": "2026-10-23T15:28:20.354Z",
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
      "selectedAt": "2026-10-23T15:28:20.354Z",
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
      "previousSelectedAt": "2026-10-22T15:39:50.156Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "CRWD",
          "quantScore": 1.497,
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
          }
        },
        {
          "symbol": "NOW",
          "quantScore": 1.323,
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
          }
        },
        {
          "symbol": "MSTR",
          "quantScore": 1.295,
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
          }
        },
        {
          "symbol": "SLB",
          "quantScore": 0.982,
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
          }
        },
        {
          "symbol": "ADBE",
          "quantScore": 0.93,
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
          }
        }
      ],
      "candidates": [
        {
          "symbol": "CRWD",
          "rank": 1,
          "previousRank": 34,
          "rankChange": 33,
          "rankChangeLabel": "+33",
          "status": "SELECTED",
          "quantScore": 1.497,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.446,
            "participation": 1.964,
            "volatility": 1.514,
            "gap": 1.025,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-26T15:28:20.354Z",
          "trigger": "Break above $256.69 with sustained participation.",
          "invalidation": "Loss of $246.09 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.50: 5d momentum 10.6%, 20d -3.2%, annualized 10d realized vol 61%, volume 0.57x, max selected correlation 0.00.",
          "createdAt": "2026-10-23T15:28:20.354Z",
          "lastReviewedAt": "2026-10-23T15:28:20.354Z",
          "setupId": "CRWD-20261023-daily-quant"
        },
        {
          "symbol": "PANW",
          "rank": 2,
          "previousRank": 40,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "REJECT",
          "quantScore": 1.337,
          "metrics": {
            "momentum5d": 10.499,
            "momentum20d": -3.081,
            "realizedVol10dAnnualized": 62.31,
            "volumeRatio": 0.392,
            "atrPct": 5.244,
            "gapPct": -0.175,
            "relativeStrength5dPct": 10.534,
            "relativeStrength20dPct": -2.534,
            "avgDollarVolume10d": 2021648329,
            "maxSelectedCorrelation": 0.914
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.441,
            "participation": 0.59,
            "volatility": 1.538,
            "gap": 0.473,
            "correlation": 0.914,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 3,
          "previousRank": 4,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 1.323,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.066,
            "participation": -0.021,
            "volatility": 0.6,
            "gap": 0.177,
            "correlation": 0.372,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-26T15:28:20.354Z",
          "trigger": "Break above $159.53 with sustained participation.",
          "invalidation": "Loss of $154.85 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.32: 5d momentum 10.7%, 20d 14.1%, annualized 10d realized vol 43%, volume 0.31x, max selected correlation 0.37.",
          "createdAt": "2026-10-23T15:28:20.354Z",
          "lastReviewedAt": "2026-10-23T15:28:20.354Z",
          "setupId": "NOW-20261023-daily-quant"
        },
        {
          "symbol": "MSTR",
          "rank": 4,
          "previousRank": 9,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "SELECTED",
          "quantScore": 1.295,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 0.985,
            "participation": -0.129,
            "volatility": 2.453,
            "gap": 0.602,
            "correlation": 0.694,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-26T15:28:20.354Z",
          "trigger": "Break above $152.79 with sustained participation.",
          "invalidation": "Loss of $144.33 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.29: 5d momentum 8.6%, 20d -8.1%, annualized 10d realized vol 82%, volume 0.30x, max selected correlation 0.69.",
          "createdAt": "2026-10-23T15:28:20.354Z",
          "lastReviewedAt": "2026-10-23T15:28:20.354Z",
          "setupId": "MSTR-20261023-daily-quant"
        },
        {
          "symbol": "SMCI",
          "rank": 5,
          "previousRank": 16,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "REJECT",
          "quantScore": 1.043,
          "metrics": {
            "momentum5d": 6.734,
            "momentum20d": -18.67,
            "realizedVol10dAnnualized": 83.92,
            "volumeRatio": 0.197,
            "atrPct": 7.986,
            "gapPct": -0.237,
            "relativeStrength5dPct": 6.769,
            "relativeStrength20dPct": -18.123,
            "avgDollarVolume10d": 1264353067,
            "maxSelectedCorrelation": 0.864
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.348,
            "participation": -0.956,
            "volatility": 3.093,
            "gap": 0.389,
            "correlation": 0.864,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 6,
          "previousRank": 49,
          "rankChange": 43,
          "rankChangeLabel": "+43",
          "status": "SELECTED",
          "quantScore": 0.982,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.126,
            "participation": 2.308,
            "volatility": 0.135,
            "gap": 1.821,
            "correlation": 0.477,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-26T15:28:20.354Z",
          "trigger": "Break above $53.68 with sustained participation.",
          "invalidation": "Loss of $52.21 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.98: 5d momentum 7.0%, 20d 2.9%, annualized 10d realized vol 40%, volume 0.61x, max selected correlation 0.48.",
          "createdAt": "2026-10-23T15:28:20.354Z",
          "lastReviewedAt": "2026-10-23T15:28:20.354Z",
          "setupId": "SLB-20261023-daily-quant"
        },
        {
          "symbol": "ADBE",
          "rank": 7,
          "previousRank": 2,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "SELECTED",
          "quantScore": 0.93,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.547,
            "participation": -0.593,
            "volatility": 0.434,
            "gap": 0.162,
            "correlation": 0.754,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-26T15:28:20.354Z",
          "trigger": "Break above $268.96 with sustained participation.",
          "invalidation": "Loss of $260.54 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 0.93: 5d momentum 8.0%, 20d 10.8%, annualized 10d realized vol 46%, volume 0.24x, max selected correlation 0.75.",
          "createdAt": "2026-10-23T15:28:20.354Z",
          "lastReviewedAt": "2026-10-23T15:28:20.354Z",
          "setupId": "ADBE-20261023-daily-quant"
        },
        {
          "symbol": "LMT",
          "rank": 8,
          "previousRank": 1,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.912,
          "metrics": {
            "momentum5d": 8.019,
            "momentum20d": 13.874,
            "realizedVol10dAnnualized": 38.01,
            "volumeRatio": 0.286,
            "atrPct": 2.622,
            "gapPct": -0.968,
            "relativeStrength5dPct": 8.054,
            "relativeStrength20dPct": 14.422,
            "avgDollarVolume10d": 835478572,
            "maxSelectedCorrelation": 0.557
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.66,
            "participation": -0.245,
            "volatility": -0.02,
            "gap": 0.594,
            "correlation": 0.557,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 9,
          "previousRank": 18,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": 0.879,
          "metrics": {
            "momentum5d": 7.078,
            "momentum20d": 14.362,
            "realizedVol10dAnnualized": 27.91,
            "volumeRatio": 0.371,
            "atrPct": 2.823,
            "gapPct": -0.045,
            "relativeStrength5dPct": 7.113,
            "relativeStrength20dPct": 14.91,
            "avgDollarVolume10d": 1127439891,
            "maxSelectedCorrelation": 0.464
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.538,
            "participation": 0.425,
            "volatility": -0.138,
            "gap": 0.648,
            "correlation": 0.464,
            "regimeFit": null
          }
        },
        {
          "symbol": "HPE",
          "rank": 10,
          "previousRank": 55,
          "rankChange": 45,
          "rankChangeLabel": "+45",
          "status": "REJECT",
          "quantScore": 0.857,
          "metrics": {
            "momentum5d": 4.487,
            "momentum20d": -9.314,
            "realizedVol10dAnnualized": 66.61,
            "volumeRatio": 0.311,
            "atrPct": 6.499,
            "gapPct": -1.028,
            "relativeStrength5dPct": 4.523,
            "relativeStrength20dPct": -8.766,
            "avgDollarVolume10d": 1162743208,
            "maxSelectedCorrelation": 0.862
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.339,
            "participation": -0.051,
            "volatility": 2.139,
            "gap": 0.674,
            "correlation": 0.862,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 11,
          "previousRank": 19,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": 0.811,
          "metrics": {
            "momentum5d": 5.779,
            "momentum20d": 2.176,
            "realizedVol10dAnnualized": 53.25,
            "volumeRatio": 0.285,
            "atrPct": 4.556,
            "gapPct": -0.596,
            "relativeStrength5dPct": 5.814,
            "relativeStrength20dPct": 2.723,
            "avgDollarVolume10d": 4234442991,
            "maxSelectedCorrelation": 0.757
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.925,
            "participation": -0.252,
            "volatility": 1.076,
            "gap": 0.094,
            "correlation": 0.757,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 12,
          "previousRank": 3,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "REJECT",
          "quantScore": 0.81,
          "metrics": {
            "momentum5d": 8.624,
            "momentum20d": 11.054,
            "realizedVol10dAnnualized": 25.43,
            "volumeRatio": 0.219,
            "atrPct": 2.886,
            "gapPct": -0.944,
            "relativeStrength5dPct": 8.659,
            "relativeStrength20dPct": 11.602,
            "avgDollarVolume10d": 1474758714,
            "maxSelectedCorrelation": 0.866
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.652,
            "participation": -0.781,
            "volatility": -0.162,
            "gap": 0.562,
            "correlation": 0.866,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 13,
          "previousRank": 30,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.764,
          "metrics": {
            "momentum5d": 3.925,
            "momentum20d": 17.721,
            "realizedVol10dAnnualized": 27.58,
            "volumeRatio": 0.453,
            "atrPct": 2.358,
            "gapPct": 1.016,
            "relativeStrength5dPct": 3.96,
            "relativeStrength20dPct": 18.268,
            "avgDollarVolume10d": 866374838,
            "maxSelectedCorrelation": 0.764
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.188,
            "participation": 1.075,
            "volatility": -0.336,
            "gap": 2.075,
            "correlation": 0.764,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 14,
          "previousRank": 28,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": 0.697,
          "metrics": {
            "momentum5d": 0.702,
            "momentum20d": -11.4,
            "realizedVol10dAnnualized": 70.66,
            "volumeRatio": 0.282,
            "atrPct": 8.002,
            "gapPct": 0,
            "relativeStrength5dPct": 0.738,
            "relativeStrength20dPct": -10.852,
            "avgDollarVolume10d": 4322445851,
            "maxSelectedCorrelation": 0.698
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.292,
            "participation": -0.282,
            "volatility": 2.836,
            "gap": 0.708,
            "correlation": 0.698,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 15,
          "previousRank": 32,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.681,
          "metrics": {
            "momentum5d": 2.522,
            "momentum20d": -13.604,
            "realizedVol10dAnnualized": 76.1,
            "volumeRatio": 0.263,
            "atrPct": 7.029,
            "gapPct": -0.295,
            "relativeStrength5dPct": 2.557,
            "relativeStrength20dPct": -13.057,
            "avgDollarVolume10d": 3463302333,
            "maxSelectedCorrelation": 0.708
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.1,
            "participation": -0.431,
            "volatility": 2.545,
            "gap": 0.312,
            "correlation": 0.708,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 16,
          "previousRank": 17,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.645,
          "metrics": {
            "momentum5d": 3.165,
            "momentum20d": 9.008,
            "realizedVol10dAnnualized": 19.98,
            "volumeRatio": 0.491,
            "atrPct": 2.685,
            "gapPct": 2.252,
            "relativeStrength5dPct": 3.201,
            "relativeStrength20dPct": 9.555,
            "avgDollarVolume10d": 751851595,
            "maxSelectedCorrelation": 0.344
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.775,
            "participation": 1.377,
            "volatility": -0.352,
            "gap": 3.738,
            "correlation": 0.344,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 17,
          "previousRank": 37,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": 0.626,
          "metrics": {
            "momentum5d": 3.439,
            "momentum20d": 11.154,
            "realizedVol10dAnnualized": 21.93,
            "volumeRatio": 0.532,
            "atrPct": 2.414,
            "gapPct": 0.88,
            "relativeStrength5dPct": 3.474,
            "relativeStrength20dPct": 11.702,
            "avgDollarVolume10d": 527211404,
            "maxSelectedCorrelation": 0.783
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.89,
            "participation": 1.699,
            "volatility": -0.425,
            "gap": 1.892,
            "correlation": 0.783,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 18,
          "previousRank": 7,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.611,
          "metrics": {
            "momentum5d": 6.1,
            "momentum20d": -0.419,
            "realizedVol10dAnnualized": 35.67,
            "volumeRatio": 0.413,
            "atrPct": 3.109,
            "gapPct": -0.386,
            "relativeStrength5dPct": 6.135,
            "relativeStrength20dPct": 0.128,
            "avgDollarVolume10d": 13134959378,
            "maxSelectedCorrelation": 0.639
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.883,
            "participation": 0.757,
            "volatility": 0.133,
            "gap": 0.189,
            "correlation": 0.639,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 19,
          "previousRank": 8,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.597,
          "metrics": {
            "momentum5d": 5.822,
            "momentum20d": 13.277,
            "realizedVol10dAnnualized": 29.1,
            "volumeRatio": 0.14,
            "atrPct": 3.013,
            "gapPct": -0.16,
            "relativeStrength5dPct": 5.857,
            "relativeStrength20dPct": 13.824,
            "avgDollarVolume10d": 2830756033,
            "maxSelectedCorrelation": 0.748
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.315,
            "participation": -1.401,
            "volatility": -0.037,
            "gap": 0.493,
            "correlation": 0.748,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 20,
          "previousRank": 59,
          "rankChange": 39,
          "rankChangeLabel": "+39",
          "status": "REJECT",
          "quantScore": 0.583,
          "metrics": {
            "momentum5d": 4.022,
            "momentum20d": -4.437,
            "realizedVol10dAnnualized": 54.7,
            "volumeRatio": 0.151,
            "atrPct": 5.369,
            "gapPct": -1.163,
            "relativeStrength5dPct": 4.057,
            "relativeStrength20dPct": -3.89,
            "avgDollarVolume10d": 1400649519,
            "maxSelectedCorrelation": 0.819
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.438,
            "participation": -1.32,
            "volatility": 1.439,
            "gap": 0.856,
            "correlation": 0.819,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 21,
          "previousRank": 42,
          "rankChange": 21,
          "rankChangeLabel": "+21",
          "status": "REJECT",
          "quantScore": 0.482,
          "metrics": {
            "momentum5d": 3.498,
            "momentum20d": 13.231,
            "realizedVol10dAnnualized": 19.3,
            "volumeRatio": 0.378,
            "atrPct": 2.114,
            "gapPct": 0.666,
            "relativeStrength5dPct": 3.533,
            "relativeStrength20dPct": 13.779,
            "avgDollarVolume10d": 1780663100,
            "maxSelectedCorrelation": 0.838
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.97,
            "participation": 0.479,
            "volatility": -0.6,
            "gap": 1.604,
            "correlation": 0.838,
            "regimeFit": null
          }
        },
        {
          "symbol": "SHOP",
          "rank": 22,
          "previousRank": 11,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": 0.466,
          "metrics": {
            "momentum5d": -0.062,
            "momentum20d": 16.709,
            "realizedVol10dAnnualized": 44.51,
            "volumeRatio": 0.135,
            "atrPct": 4.579,
            "gapPct": -0.918,
            "relativeStrength5dPct": -0.027,
            "relativeStrength20dPct": 17.257,
            "avgDollarVolume10d": 1458221969,
            "maxSelectedCorrelation": 0.685
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.564,
            "participation": -1.444,
            "volatility": 0.912,
            "gap": 0.527,
            "correlation": 0.685,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 23,
          "previousRank": 36,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "REJECT",
          "quantScore": 0.431,
          "metrics": {
            "momentum5d": 1.868,
            "momentum20d": 11.046,
            "realizedVol10dAnnualized": 22.26,
            "volumeRatio": 0.507,
            "atrPct": 2.098,
            "gapPct": 0.755,
            "relativeStrength5dPct": 1.904,
            "relativeStrength20dPct": 11.594,
            "avgDollarVolume10d": 2056137356,
            "maxSelectedCorrelation": 0.862
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.654,
            "participation": 1.5,
            "volatility": -0.548,
            "gap": 1.723,
            "correlation": 0.862,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 24,
          "previousRank": 22,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.408,
          "metrics": {
            "momentum5d": 1.656,
            "momentum20d": 4.876,
            "realizedVol10dAnnualized": 29.29,
            "volumeRatio": 0.531,
            "atrPct": 2.757,
            "gapPct": -1.331,
            "relativeStrength5dPct": 1.692,
            "relativeStrength20dPct": 5.424,
            "avgDollarVolume10d": 953505433,
            "maxSelectedCorrelation": 0.683
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.41,
            "participation": 1.694,
            "volatility": -0.138,
            "gap": 1.082,
            "correlation": 0.683,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 25,
          "previousRank": 5,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": 0.378,
          "metrics": {
            "momentum5d": 4.961,
            "momentum20d": 7.205,
            "realizedVol10dAnnualized": 32.83,
            "volumeRatio": 0.115,
            "atrPct": 2.641,
            "gapPct": -1.043,
            "relativeStrength5dPct": 4.997,
            "relativeStrength20dPct": 7.752,
            "avgDollarVolume10d": 587968804,
            "maxSelectedCorrelation": 0.521
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.978,
            "participation": -1.602,
            "volatility": -0.115,
            "gap": 0.695,
            "correlation": 0.521,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 26,
          "previousRank": 83,
          "rankChange": 57,
          "rankChangeLabel": "+57",
          "status": "WATCH",
          "quantScore": 0.362,
          "metrics": {
            "momentum5d": 0.928,
            "momentum20d": -17.911,
            "realizedVol10dAnnualized": 56.29,
            "volumeRatio": 0.405,
            "atrPct": 5.674,
            "gapPct": 0.665,
            "relativeStrength5dPct": 0.964,
            "relativeStrength20dPct": -17.363,
            "avgDollarVolume10d": 23071906845,
            "maxSelectedCorrelation": 0.744
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.483,
            "participation": 0.693,
            "volatility": 1.595,
            "gap": 1.603,
            "correlation": 0.744,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 27,
          "previousRank": 6,
          "rankChange": -21,
          "rankChangeLabel": "-21",
          "status": "WATCH",
          "quantScore": 0.357,
          "metrics": {
            "momentum5d": 2.08,
            "momentum20d": 8.57,
            "realizedVol10dAnnualized": 34.21,
            "volumeRatio": 0.28,
            "atrPct": 3.13,
            "gapPct": -0.194,
            "relativeStrength5dPct": 2.115,
            "relativeStrength20dPct": 9.117,
            "avgDollarVolume10d": 2892831148,
            "maxSelectedCorrelation": 0.78
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.6,
            "participation": -0.293,
            "volatility": 0.113,
            "gap": 0.447,
            "correlation": 0.78,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 28,
          "previousRank": 52,
          "rankChange": 24,
          "rankChangeLabel": "+24",
          "status": "REJECT",
          "quantScore": 0.331,
          "metrics": {
            "momentum5d": 2.285,
            "momentum20d": 12.909,
            "realizedVol10dAnnualized": 20.37,
            "volumeRatio": 0.314,
            "atrPct": 2.118,
            "gapPct": 0.64,
            "relativeStrength5dPct": 2.321,
            "relativeStrength20dPct": 13.456,
            "avgDollarVolume10d": 2005713975,
            "maxSelectedCorrelation": 0.85
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.78,
            "participation": -0.027,
            "volatility": -0.577,
            "gap": 1.569,
            "correlation": 0.85,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 29,
          "previousRank": 13,
          "rankChange": -16,
          "rankChangeLabel": "-16",
          "status": "WATCH",
          "quantScore": 0.323,
          "metrics": {
            "momentum5d": 4.184,
            "momentum20d": 8.489,
            "realizedVol10dAnnualized": 21.37,
            "volumeRatio": 0.209,
            "atrPct": 2.622,
            "gapPct": -0.754,
            "relativeStrength5dPct": 4.219,
            "relativeStrength20dPct": 9.037,
            "avgDollarVolume10d": 860386176,
            "maxSelectedCorrelation": 0.764
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.908,
            "participation": -0.861,
            "volatility": -0.35,
            "gap": 0.306,
            "correlation": 0.764,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 30,
          "previousRank": 41,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": 0.321,
          "metrics": {
            "momentum5d": 4.211,
            "momentum20d": 2.551,
            "realizedVol10dAnnualized": 18.17,
            "volumeRatio": 0.514,
            "atrPct": 1.771,
            "gapPct": -0.601,
            "relativeStrength5dPct": 4.247,
            "relativeStrength20dPct": 3.099,
            "avgDollarVolume10d": 1047146127,
            "maxSelectedCorrelation": 0.668
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.707,
            "participation": 1.559,
            "volatility": -0.764,
            "gap": 0.1,
            "correlation": 0.668,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 31,
          "previousRank": 23,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.318,
          "metrics": {
            "momentum5d": 2.21,
            "momentum20d": 3.274,
            "realizedVol10dAnnualized": 33.88,
            "volumeRatio": 0.296,
            "atrPct": 3.553,
            "gapPct": -0.679,
            "relativeStrength5dPct": 2.246,
            "relativeStrength20dPct": 3.822,
            "avgDollarVolume10d": 1815976709,
            "maxSelectedCorrelation": 0.682
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.437,
            "participation": -0.165,
            "volatility": 0.28,
            "gap": 0.205,
            "correlation": 0.682,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 32,
          "previousRank": 10,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "REJECT",
          "quantScore": 0.306,
          "metrics": {
            "momentum5d": 3.11,
            "momentum20d": 9.268,
            "realizedVol10dAnnualized": 31.54,
            "volumeRatio": 0.233,
            "atrPct": 2.381,
            "gapPct": -0.835,
            "relativeStrength5dPct": 3.146,
            "relativeStrength20dPct": 9.816,
            "avgDollarVolume10d": 1434309148,
            "maxSelectedCorrelation": 0.843
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.776,
            "participation": -0.667,
            "volatility": -0.248,
            "gap": 0.414,
            "correlation": 0.843,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 33,
          "previousRank": 53,
          "rankChange": 20,
          "rankChangeLabel": "+20",
          "status": "WATCH",
          "quantScore": 0.288,
          "metrics": {
            "momentum5d": 1.186,
            "momentum20d": 2.425,
            "realizedVol10dAnnualized": 14.52,
            "volumeRatio": 0.69,
            "atrPct": 1.501,
            "gapPct": 1.505,
            "relativeStrength5dPct": 1.221,
            "relativeStrength20dPct": 2.972,
            "avgDollarVolume10d": 326093922,
            "maxSelectedCorrelation": 0.441
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.256,
            "participation": 2.949,
            "volatility": -0.947,
            "gap": 2.733,
            "correlation": 0.441,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 34,
          "previousRank": 24,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.247,
          "metrics": {
            "momentum5d": 1.004,
            "momentum20d": 8.323,
            "realizedVol10dAnnualized": 22.04,
            "volumeRatio": 0.619,
            "atrPct": 1.533,
            "gapPct": -0.444,
            "relativeStrength5dPct": 1.04,
            "relativeStrength20dPct": 8.871,
            "avgDollarVolume10d": 1379800456,
            "maxSelectedCorrelation": 0.73
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.433,
            "participation": 2.391,
            "volatility": -0.785,
            "gap": 0.11,
            "correlation": 0.73,
            "regimeFit": null
          }
        },
        {
          "symbol": "ON",
          "rank": 35,
          "previousRank": 25,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": 0.238,
          "metrics": {
            "momentum5d": 0.701,
            "momentum20d": -0.854,
            "realizedVol10dAnnualized": 40.86,
            "volumeRatio": 0.2,
            "atrPct": 4.684,
            "gapPct": -0.915,
            "relativeStrength5dPct": 0.737,
            "relativeStrength20dPct": -0.307,
            "avgDollarVolume10d": 629343628,
            "maxSelectedCorrelation": 0.762
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.071,
            "participation": -0.925,
            "volatility": 0.883,
            "gap": 0.523,
            "correlation": 0.762,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 36,
          "previousRank": 47,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": 0.231,
          "metrics": {
            "momentum5d": 0.287,
            "momentum20d": 2.889,
            "realizedVol10dAnnualized": 23.51,
            "volumeRatio": 0.496,
            "atrPct": 2.053,
            "gapPct": -3.128,
            "relativeStrength5dPct": 0.322,
            "relativeStrength20dPct": 3.436,
            "avgDollarVolume10d": 900087869,
            "maxSelectedCorrelation": 0.596
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.139,
            "participation": 1.419,
            "volatility": -0.542,
            "gap": 3.499,
            "correlation": 0.596,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 37,
          "previousRank": 38,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.187,
          "metrics": {
            "momentum5d": 1.187,
            "momentum20d": 11.739,
            "realizedVol10dAnnualized": 22.78,
            "volumeRatio": 0.27,
            "atrPct": 2.17,
            "gapPct": 0.363,
            "relativeStrength5dPct": 1.222,
            "relativeStrength20dPct": 12.286,
            "avgDollarVolume10d": 2406930259,
            "maxSelectedCorrelation": 0.613
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.577,
            "participation": -0.376,
            "volatility": -0.508,
            "gap": 1.197,
            "correlation": 0.613,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 38,
          "previousRank": 73,
          "rankChange": 35,
          "rankChangeLabel": "+35",
          "status": "WATCH",
          "quantScore": 0.167,
          "metrics": {
            "momentum5d": -0.667,
            "momentum20d": -8.718,
            "realizedVol10dAnnualized": 59.38,
            "volumeRatio": 0.264,
            "atrPct": 5.134,
            "gapPct": -0.534,
            "relativeStrength5dPct": -0.631,
            "relativeStrength20dPct": -8.17,
            "avgDollarVolume10d": 3682954160,
            "maxSelectedCorrelation": 0.634
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.402,
            "participation": -0.425,
            "volatility": 1.435,
            "gap": 0.01,
            "correlation": 0.634,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 39,
          "previousRank": 31,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": 0.164,
          "metrics": {
            "momentum5d": 0.161,
            "momentum20d": 14.922,
            "realizedVol10dAnnualized": 26.74,
            "volumeRatio": 0.206,
            "atrPct": 2.534,
            "gapPct": -1.144,
            "relativeStrength5dPct": 0.197,
            "relativeStrength20dPct": 15.469,
            "avgDollarVolume10d": 572657348,
            "maxSelectedCorrelation": 0.694
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.536,
            "participation": -0.878,
            "volatility": -0.28,
            "gap": 0.83,
            "correlation": 0.694,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 40,
          "previousRank": 14,
          "rankChange": -26,
          "rankChangeLabel": "-26",
          "status": "WATCH",
          "quantScore": 0.153,
          "metrics": {
            "momentum5d": 2.292,
            "momentum20d": 12.523,
            "realizedVol10dAnnualized": 25.11,
            "volumeRatio": 0.183,
            "atrPct": 1.767,
            "gapPct": -0.149,
            "relativeStrength5dPct": 2.328,
            "relativeStrength20dPct": 13.07,
            "avgDollarVolume10d": 554304112,
            "maxSelectedCorrelation": 0.54
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.768,
            "participation": -1.063,
            "volatility": -0.627,
            "gap": 0.507,
            "correlation": 0.54,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 41,
          "previousRank": 27,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": 0.153,
          "metrics": {
            "momentum5d": 1.828,
            "momentum20d": 5.928,
            "realizedVol10dAnnualized": 21.28,
            "volumeRatio": 0.45,
            "atrPct": 1.743,
            "gapPct": -0.496,
            "relativeStrength5dPct": 1.863,
            "relativeStrength20dPct": 6.476,
            "avgDollarVolume10d": 1492327948,
            "maxSelectedCorrelation": 0.712
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.472,
            "participation": 1.053,
            "volatility": -0.713,
            "gap": 0.04,
            "correlation": 0.712,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 42,
          "previousRank": 33,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": 0.149,
          "metrics": {
            "momentum5d": 2.293,
            "momentum20d": 7.948,
            "realizedVol10dAnnualized": 26.55,
            "volumeRatio": 0.245,
            "atrPct": 1.955,
            "gapPct": -0.122,
            "relativeStrength5dPct": 2.329,
            "relativeStrength20dPct": 8.495,
            "avgDollarVolume10d": 919211081,
            "maxSelectedCorrelation": 0.515
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.61,
            "participation": -0.572,
            "volatility": -0.522,
            "gap": 0.544,
            "correlation": 0.515,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 43,
          "previousRank": 29,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": 0.145,
          "metrics": {
            "momentum5d": 2.593,
            "momentum20d": 10.059,
            "realizedVol10dAnnualized": 25.29,
            "volumeRatio": 0.197,
            "atrPct": 1.691,
            "gapPct": 0.024,
            "relativeStrength5dPct": 2.629,
            "relativeStrength20dPct": 10.607,
            "avgDollarVolume10d": 440700869,
            "maxSelectedCorrelation": 0.562
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.727,
            "participation": -0.953,
            "volatility": -0.655,
            "gap": 0.74,
            "correlation": 0.562,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 44,
          "previousRank": 21,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": 0.13,
          "metrics": {
            "momentum5d": 1.674,
            "momentum20d": 11.242,
            "realizedVol10dAnnualized": 17.11,
            "volumeRatio": 0.31,
            "atrPct": 1.754,
            "gapPct": -0.905,
            "relativeStrength5dPct": 1.709,
            "relativeStrength20dPct": 11.79,
            "avgDollarVolume10d": 2561421700,
            "maxSelectedCorrelation": 0.529
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.632,
            "participation": -0.059,
            "volatility": -0.791,
            "gap": 0.509,
            "correlation": 0.529,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 45,
          "previousRank": 39,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.128,
          "metrics": {
            "momentum5d": 1.978,
            "momentum20d": 6.177,
            "realizedVol10dAnnualized": 20.08,
            "volumeRatio": 0.377,
            "atrPct": 1.913,
            "gapPct": -0.46,
            "relativeStrength5dPct": 2.013,
            "relativeStrength20dPct": 6.725,
            "avgDollarVolume10d": 792134646,
            "maxSelectedCorrelation": 0.646
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.502,
            "participation": 0.475,
            "volatility": -0.667,
            "gap": 0.089,
            "correlation": 0.646,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 46,
          "previousRank": 12,
          "rankChange": -34,
          "rankChangeLabel": "-34",
          "status": "WATCH",
          "quantScore": 0.118,
          "metrics": {
            "momentum5d": 0.978,
            "momentum20d": 5.74,
            "realizedVol10dAnnualized": 31.5,
            "volumeRatio": 0.228,
            "atrPct": 2.633,
            "gapPct": -1.204,
            "relativeStrength5dPct": 1.013,
            "relativeStrength20dPct": 6.288,
            "avgDollarVolume10d": 616419662,
            "maxSelectedCorrelation": 0.741
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.34,
            "participation": -0.706,
            "volatility": -0.145,
            "gap": 0.911,
            "correlation": 0.741,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 47,
          "previousRank": 85,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "WATCH",
          "quantScore": 0.104,
          "metrics": {
            "momentum5d": -1.713,
            "momentum20d": -17.412,
            "realizedVol10dAnnualized": 60.06,
            "volumeRatio": 0.335,
            "atrPct": 5.633,
            "gapPct": 0.437,
            "relativeStrength5dPct": -1.677,
            "relativeStrength20dPct": -16.864,
            "avgDollarVolume10d": 10149308238,
            "maxSelectedCorrelation": 0.748
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.856,
            "participation": 0.139,
            "volatility": 1.653,
            "gap": 1.296,
            "correlation": 0.748,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 48,
          "previousRank": 20,
          "rankChange": -28,
          "rankChangeLabel": "-28",
          "status": "WATCH",
          "quantScore": 0.101,
          "metrics": {
            "momentum5d": 3.115,
            "momentum20d": -2.645,
            "realizedVol10dAnnualized": 39.36,
            "volumeRatio": 0.169,
            "atrPct": 2.667,
            "gapPct": -0.669,
            "relativeStrength5dPct": 3.15,
            "relativeStrength20dPct": -2.098,
            "avgDollarVolume10d": 2175941865,
            "maxSelectedCorrelation": 0.521
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.366,
            "participation": -1.171,
            "volatility": 0.025,
            "gap": 0.192,
            "correlation": 0.521,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 49,
          "previousRank": 26,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": 0.086,
          "metrics": {
            "momentum5d": 1.971,
            "momentum20d": 12.508,
            "realizedVol10dAnnualized": 18.11,
            "volumeRatio": 0.215,
            "atrPct": 1.609,
            "gapPct": -0.217,
            "relativeStrength5dPct": 2.007,
            "relativeStrength20dPct": 13.055,
            "avgDollarVolume10d": 2038568411,
            "maxSelectedCorrelation": 0.668
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.72,
            "participation": -0.813,
            "volatility": -0.831,
            "gap": 0.416,
            "correlation": 0.668,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 50,
          "previousRank": 46,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "REJECT",
          "quantScore": 0.008,
          "metrics": {
            "momentum5d": 2.098,
            "momentum20d": 4.661,
            "realizedVol10dAnnualized": 18.71,
            "volumeRatio": 0.255,
            "atrPct": 1.814,
            "gapPct": -0.831,
            "relativeStrength5dPct": 2.133,
            "relativeStrength20dPct": 5.208,
            "avgDollarVolume10d": 1239366804,
            "maxSelectedCorrelation": 0.878
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.468,
            "participation": -0.494,
            "volatility": -0.735,
            "gap": 0.41,
            "correlation": 0.878,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 51,
          "previousRank": 63,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "REJECT",
          "quantScore": -0.001,
          "metrics": {
            "momentum5d": 0.306,
            "momentum20d": -10.687,
            "realizedVol10dAnnualized": 37.56,
            "volumeRatio": 0.396,
            "atrPct": 3.58,
            "gapPct": -0.428,
            "relativeStrength5dPct": 0.342,
            "relativeStrength20dPct": -10.14,
            "avgDollarVolume10d": 326645421,
            "maxSelectedCorrelation": 0.951
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.326,
            "participation": 0.625,
            "volatility": 0.364,
            "gap": 0.133,
            "correlation": 0.951,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 52,
          "previousRank": 43,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "WATCH",
          "quantScore": -0.004,
          "metrics": {
            "momentum5d": -0.053,
            "momentum20d": 7.6,
            "realizedVol10dAnnualized": 26.26,
            "volumeRatio": 0.224,
            "atrPct": 2.509,
            "gapPct": -0.214,
            "relativeStrength5dPct": -0.017,
            "relativeStrength20dPct": 8.148,
            "avgDollarVolume10d": 1485915945,
            "maxSelectedCorrelation": 0.503
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.252,
            "participation": -0.735,
            "volatility": -0.3,
            "gap": 0.42,
            "correlation": 0.503,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 53,
          "previousRank": 35,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": -0.008,
          "metrics": {
            "momentum5d": 0.865,
            "momentum20d": 10.013,
            "realizedVol10dAnnualized": 17.04,
            "volumeRatio": 0.28,
            "atrPct": 1.665,
            "gapPct": -0.703,
            "relativeStrength5dPct": 0.9,
            "relativeStrength20dPct": 10.56,
            "avgDollarVolume10d": 1941922957,
            "maxSelectedCorrelation": 0.712
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.47,
            "participation": -0.294,
            "volatility": -0.829,
            "gap": 0.237,
            "correlation": 0.712,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 54,
          "previousRank": 62,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.02,
          "metrics": {
            "momentum5d": 1.333,
            "momentum20d": 3.608,
            "realizedVol10dAnnualized": 11.59,
            "volumeRatio": 0.345,
            "atrPct": 1.763,
            "gapPct": 0.256,
            "relativeStrength5dPct": 1.369,
            "relativeStrength20dPct": 4.155,
            "avgDollarVolume10d": 13297843978,
            "maxSelectedCorrelation": 0.282
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.319,
            "participation": 0.217,
            "volatility": -0.897,
            "gap": 1.052,
            "correlation": 0.282,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 55,
          "previousRank": 50,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.042,
          "metrics": {
            "momentum5d": 1.854,
            "momentum20d": 6.707,
            "realizedVol10dAnnualized": 13.22,
            "volumeRatio": 0.224,
            "atrPct": 1.746,
            "gapPct": -0.787,
            "relativeStrength5dPct": 1.889,
            "relativeStrength20dPct": 7.255,
            "avgDollarVolume10d": 837283326,
            "maxSelectedCorrelation": 0.745
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.502,
            "participation": -0.74,
            "volatility": -0.872,
            "gap": 0.35,
            "correlation": 0.745,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 56,
          "previousRank": 51,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.046,
          "metrics": {
            "momentum5d": -0.278,
            "momentum20d": -0.03,
            "realizedVol10dAnnualized": 36.01,
            "volumeRatio": 0.262,
            "atrPct": 2.842,
            "gapPct": -0.731,
            "relativeStrength5dPct": -0.243,
            "relativeStrength20dPct": 0.517,
            "avgDollarVolume10d": 8570093370,
            "maxSelectedCorrelation": 0.412
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.045,
            "participation": -0.437,
            "volatility": 0.03,
            "gap": 0.276,
            "correlation": 0.412,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 57,
          "previousRank": 45,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "WATCH",
          "quantScore": -0.065,
          "metrics": {
            "momentum5d": 0.805,
            "momentum20d": 8.105,
            "realizedVol10dAnnualized": 17.66,
            "volumeRatio": 0.261,
            "atrPct": 1.616,
            "gapPct": -0.327,
            "relativeStrength5dPct": 0.841,
            "relativeStrength20dPct": 8.652,
            "avgDollarVolume10d": 1135858839,
            "maxSelectedCorrelation": 0.302
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.396,
            "participation": -0.447,
            "volatility": -0.837,
            "gap": 0.269,
            "correlation": 0.302,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 58,
          "previousRank": 15,
          "rankChange": -43,
          "rankChangeLabel": "-43",
          "status": "WATCH",
          "quantScore": -0.068,
          "metrics": {
            "momentum5d": -0.733,
            "momentum20d": -2.095,
            "realizedVol10dAnnualized": 32.72,
            "volumeRatio": 0.248,
            "atrPct": 3.108,
            "gapPct": -1.508,
            "relativeStrength5dPct": -0.698,
            "relativeStrength20dPct": -1.547,
            "avgDollarVolume10d": 1487188223,
            "maxSelectedCorrelation": 0.257
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.183,
            "participation": -0.552,
            "volatility": 0.074,
            "gap": 1.32,
            "correlation": 0.257,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 59,
          "previousRank": 78,
          "rankChange": 19,
          "rankChangeLabel": "+19",
          "status": "WATCH",
          "quantScore": -0.071,
          "metrics": {
            "momentum5d": 0.83,
            "momentum20d": 2.093,
            "realizedVol10dAnnualized": 9.5,
            "volumeRatio": 0.528,
            "atrPct": 1.019,
            "gapPct": -0.976,
            "relativeStrength5dPct": 0.866,
            "relativeStrength20dPct": 2.64,
            "avgDollarVolume10d": 1696655830,
            "maxSelectedCorrelation": 0.701
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.192,
            "participation": 1.667,
            "volatility": -1.244,
            "gap": 0.604,
            "correlation": 0.701,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 60,
          "previousRank": 71,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "REJECT",
          "quantScore": -0.081,
          "metrics": {
            "momentum5d": -2.726,
            "momentum20d": -20.398,
            "realizedVol10dAnnualized": 60.24,
            "volumeRatio": 0.349,
            "atrPct": 5.486,
            "gapPct": -0.155,
            "relativeStrength5dPct": -2.69,
            "relativeStrength20dPct": -19.851,
            "avgDollarVolume10d": 1544666224,
            "maxSelectedCorrelation": 0.886
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.109,
            "participation": 0.249,
            "volatility": 1.596,
            "gap": 0.499,
            "correlation": 0.886,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 61,
          "previousRank": 70,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "REJECT",
          "quantScore": -0.09,
          "metrics": {
            "momentum5d": -3.774,
            "momentum20d": -16.357,
            "realizedVol10dAnnualized": 59.21,
            "volumeRatio": 0.308,
            "atrPct": 5.932,
            "gapPct": -0.645,
            "relativeStrength5dPct": -3.739,
            "relativeStrength20dPct": -15.81,
            "avgDollarVolume10d": 1143655298,
            "maxSelectedCorrelation": 0.896
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.124,
            "participation": -0.076,
            "volatility": 1.759,
            "gap": 0.159,
            "correlation": 0.896,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 62,
          "previousRank": 67,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.097,
          "metrics": {
            "momentum5d": 1.005,
            "momentum20d": 8.878,
            "realizedVol10dAnnualized": 12.4,
            "volumeRatio": 0.155,
            "atrPct": 1.838,
            "gapPct": -1.086,
            "relativeStrength5dPct": 1.041,
            "relativeStrength20dPct": 9.426,
            "avgDollarVolume10d": 590469311,
            "maxSelectedCorrelation": 0.708
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.452,
            "participation": -1.284,
            "volatility": -0.85,
            "gap": 0.753,
            "correlation": 0.708,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 63,
          "previousRank": 97,
          "rankChange": 34,
          "rankChangeLabel": "+34",
          "status": "WATCH",
          "quantScore": -0.113,
          "metrics": {
            "momentum5d": -0.903,
            "momentum20d": -0.514,
            "realizedVol10dAnnualized": 23.2,
            "volumeRatio": 0.342,
            "atrPct": 2.945,
            "gapPct": -0.62,
            "relativeStrength5dPct": -0.868,
            "relativeStrength20dPct": 0.033,
            "avgDollarVolume10d": 1492130896,
            "maxSelectedCorrelation": 0.758
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.154,
            "participation": 0.199,
            "volatility": -0.181,
            "gap": 0.125,
            "correlation": 0.758,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 64,
          "previousRank": 77,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": -0.128,
          "metrics": {
            "momentum5d": 2.052,
            "momentum20d": -2.013,
            "realizedVol10dAnnualized": 17.12,
            "volumeRatio": 0.349,
            "atrPct": 1.337,
            "gapPct": -0.658,
            "relativeStrength5dPct": 2.088,
            "relativeStrength20dPct": -1.466,
            "avgDollarVolume10d": 6760952623,
            "maxSelectedCorrelation": 0.797
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.231,
            "participation": 0.248,
            "volatility": -0.963,
            "gap": 0.177,
            "correlation": 0.797,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 65,
          "previousRank": 75,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "REJECT",
          "quantScore": -0.13,
          "metrics": {
            "momentum5d": 1.301,
            "momentum20d": -10.249,
            "realizedVol10dAnnualized": 33.55,
            "volumeRatio": 0.189,
            "atrPct": 3.382,
            "gapPct": -0.532,
            "relativeStrength5dPct": 1.337,
            "relativeStrength20dPct": -9.702,
            "avgDollarVolume10d": 1681245131,
            "maxSelectedCorrelation": 0.897
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.164,
            "participation": -1.014,
            "volatility": 0.203,
            "gap": 0.008,
            "correlation": 0.897,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 66,
          "previousRank": 58,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.132,
          "metrics": {
            "momentum5d": 1.458,
            "momentum20d": 3.306,
            "realizedVol10dAnnualized": 10.43,
            "volumeRatio": 0.397,
            "atrPct": 0.959,
            "gapPct": -0.513,
            "relativeStrength5dPct": 1.494,
            "relativeStrength20dPct": 3.854,
            "avgDollarVolume10d": 1770865501,
            "maxSelectedCorrelation": 0.724
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.327,
            "participation": 0.629,
            "volatility": -1.251,
            "gap": 0.018,
            "correlation": 0.724,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 67,
          "previousRank": 72,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "REJECT",
          "quantScore": -0.139,
          "metrics": {
            "momentum5d": 0.528,
            "momentum20d": -4.049,
            "realizedVol10dAnnualized": 19.15,
            "volumeRatio": 0.253,
            "atrPct": 2.757,
            "gapPct": -1.26,
            "relativeStrength5dPct": 0.563,
            "relativeStrength20dPct": -3.501,
            "avgDollarVolume10d": 2239534876,
            "maxSelectedCorrelation": 0.899
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.064,
            "participation": -0.508,
            "volatility": -0.339,
            "gap": 0.987,
            "correlation": 0.899,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 68,
          "previousRank": 57,
          "rankChange": -11,
          "rankChangeLabel": "-11",
          "status": "WATCH",
          "quantScore": -0.14,
          "metrics": {
            "momentum5d": 1.165,
            "momentum20d": 3.127,
            "realizedVol10dAnnualized": 15.69,
            "volumeRatio": 0.293,
            "atrPct": 1.371,
            "gapPct": -0.826,
            "relativeStrength5dPct": 1.2,
            "relativeStrength20dPct": 3.675,
            "avgDollarVolume10d": 809487099,
            "maxSelectedCorrelation": 0.682
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.277,
            "participation": -0.191,
            "volatility": -0.977,
            "gap": 0.403,
            "correlation": 0.682,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 69,
          "previousRank": 68,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.144,
          "metrics": {
            "momentum5d": 1.286,
            "momentum20d": 3.814,
            "realizedVol10dAnnualized": 8.88,
            "volumeRatio": 0.344,
            "atrPct": 1.303,
            "gapPct": -0.542,
            "relativeStrength5dPct": 1.322,
            "relativeStrength20dPct": 4.362,
            "avgDollarVolume10d": 470088731,
            "maxSelectedCorrelation": 0.534
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.319,
            "participation": 0.211,
            "volatility": -1.14,
            "gap": 0.021,
            "correlation": 0.534,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 70,
          "previousRank": 61,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "REJECT",
          "quantScore": -0.156,
          "metrics": {
            "momentum5d": 1.786,
            "momentum20d": 2.594,
            "realizedVol10dAnnualized": 11.68,
            "volumeRatio": 0.285,
            "atrPct": 1.009,
            "gapPct": 0.037,
            "relativeStrength5dPct": 1.822,
            "relativeStrength20dPct": 3.141,
            "avgDollarVolume10d": 3236183508,
            "maxSelectedCorrelation": 0.814
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.35,
            "participation": -0.252,
            "volatility": -1.205,
            "gap": 0.758,
            "correlation": 0.814,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 71,
          "previousRank": 94,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": -0.157,
          "metrics": {
            "momentum5d": -0.759,
            "momentum20d": -6.88,
            "realizedVol10dAnnualized": 34.84,
            "volumeRatio": 0.233,
            "atrPct": 3.614,
            "gapPct": -0.616,
            "relativeStrength5dPct": -0.724,
            "relativeStrength20dPct": -6.333,
            "avgDollarVolume10d": 6473881520,
            "maxSelectedCorrelation": 0.769
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.352,
            "participation": -0.665,
            "volatility": 0.324,
            "gap": 0.12,
            "correlation": 0.769,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 72,
          "previousRank": 64,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.176,
          "metrics": {
            "momentum5d": 0.67,
            "momentum20d": -7.406,
            "realizedVol10dAnnualized": 27.36,
            "volumeRatio": 0.215,
            "atrPct": 2.799,
            "gapPct": -1.114,
            "relativeStrength5dPct": 0.705,
            "relativeStrength20dPct": -6.859,
            "avgDollarVolume10d": 1147893339,
            "maxSelectedCorrelation": 0.729
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.159,
            "participation": -0.806,
            "volatility": -0.159,
            "gap": 0.791,
            "correlation": 0.729,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 73,
          "previousRank": 79,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": -0.18,
          "metrics": {
            "momentum5d": -0.724,
            "momentum20d": 5.481,
            "realizedVol10dAnnualized": 19.89,
            "volumeRatio": 0.254,
            "atrPct": 2.102,
            "gapPct": -0.592,
            "relativeStrength5dPct": -0.689,
            "relativeStrength20dPct": 6.028,
            "avgDollarVolume10d": 9758399605,
            "maxSelectedCorrelation": 0.699
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.079,
            "participation": -0.503,
            "volatility": -0.593,
            "gap": 0.088,
            "correlation": 0.699,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 74,
          "previousRank": 69,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.188,
          "metrics": {
            "momentum5d": -0.775,
            "momentum20d": -5.392,
            "realizedVol10dAnnualized": 31.89,
            "volumeRatio": 0.308,
            "atrPct": 2.814,
            "gapPct": -0.598,
            "relativeStrength5dPct": -0.74,
            "relativeStrength20dPct": -4.845,
            "avgDollarVolume10d": 20045963212,
            "maxSelectedCorrelation": 0.579
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.303,
            "participation": -0.075,
            "volatility": -0.063,
            "gap": 0.097,
            "correlation": 0.579,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 75,
          "previousRank": 96,
          "rankChange": 21,
          "rankChangeLabel": "+21",
          "status": "WATCH",
          "quantScore": -0.191,
          "metrics": {
            "momentum5d": 0.245,
            "momentum20d": -5.542,
            "realizedVol10dAnnualized": 27.7,
            "volumeRatio": 0.309,
            "atrPct": 2.249,
            "gapPct": -0.285,
            "relativeStrength5dPct": 0.281,
            "relativeStrength20dPct": -4.994,
            "avgDollarVolume10d": 1772618202,
            "maxSelectedCorrelation": 0.783
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.158,
            "participation": -0.069,
            "volatility": -0.378,
            "gap": 0.325,
            "correlation": 0.783,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 76,
          "previousRank": 92,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.191,
          "metrics": {
            "momentum5d": -2.449,
            "momentum20d": -14.974,
            "realizedVol10dAnnualized": 44.6,
            "volumeRatio": 0.401,
            "atrPct": 4.036,
            "gapPct": -0.239,
            "relativeStrength5dPct": -2.414,
            "relativeStrength20dPct": -14.427,
            "avgDollarVolume10d": 5068100274,
            "maxSelectedCorrelation": 0.75
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.881,
            "participation": 0.666,
            "volatility": 0.691,
            "gap": 0.387,
            "correlation": 0.75,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 77,
          "previousRank": 56,
          "rankChange": -21,
          "rankChangeLabel": "-21",
          "status": "WATCH",
          "quantScore": -0.196,
          "metrics": {
            "momentum5d": 1.162,
            "momentum20d": 2.998,
            "realizedVol10dAnnualized": 12.89,
            "volumeRatio": 0.263,
            "atrPct": 1.272,
            "gapPct": -0.812,
            "relativeStrength5dPct": 1.197,
            "relativeStrength20dPct": 3.546,
            "avgDollarVolume10d": 1772938191,
            "maxSelectedCorrelation": 0.558
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.272,
            "participation": -0.426,
            "volatility": -1.073,
            "gap": 0.384,
            "correlation": 0.558,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 78,
          "previousRank": 66,
          "rankChange": -12,
          "rankChangeLabel": "-12",
          "status": "WATCH",
          "quantScore": -0.196,
          "metrics": {
            "momentum5d": -5.145,
            "momentum20d": -15.203,
            "realizedVol10dAnnualized": 43.18,
            "volumeRatio": 0.787,
            "atrPct": 3.02,
            "gapPct": -1.51,
            "relativeStrength5dPct": -5.109,
            "relativeStrength20dPct": -14.656,
            "avgDollarVolume10d": 835151267,
            "maxSelectedCorrelation": 0.673
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.287,
            "participation": 3.723,
            "volatility": 0.245,
            "gap": 1.323,
            "correlation": 0.673,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 79,
          "previousRank": 44,
          "rankChange": -35,
          "rankChangeLabel": "-35",
          "status": "WATCH",
          "quantScore": -0.2,
          "metrics": {
            "momentum5d": -1.129,
            "momentum20d": 1.654,
            "realizedVol10dAnnualized": 26.33,
            "volumeRatio": 0.206,
            "atrPct": 2.509,
            "gapPct": -1.109,
            "relativeStrength5dPct": -1.094,
            "relativeStrength20dPct": 2.202,
            "avgDollarVolume10d": 1072492041,
            "maxSelectedCorrelation": 0.752
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.112,
            "participation": -0.879,
            "volatility": -0.299,
            "gap": 0.784,
            "correlation": 0.752,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 80,
          "previousRank": 80,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.232,
          "metrics": {
            "momentum5d": -0.525,
            "momentum20d": -1.729,
            "realizedVol10dAnnualized": 29.03,
            "volumeRatio": 0.171,
            "atrPct": 2.668,
            "gapPct": -0.753,
            "relativeStrength5dPct": -0.49,
            "relativeStrength20dPct": -1.182,
            "avgDollarVolume10d": 538179875,
            "maxSelectedCorrelation": 0.829
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.14,
            "participation": -1.162,
            "volatility": -0.179,
            "gap": 0.304,
            "correlation": 0.829,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 81,
          "previousRank": 48,
          "rankChange": -33,
          "rankChangeLabel": "-33",
          "status": "WATCH",
          "quantScore": -0.236,
          "metrics": {
            "momentum5d": -0.654,
            "momentum20d": -3.591,
            "realizedVol10dAnnualized": 21.78,
            "volumeRatio": 0.487,
            "atrPct": 1.153,
            "gapPct": 0,
            "relativeStrength5dPct": -0.618,
            "relativeStrength20dPct": -3.043,
            "avgDollarVolume10d": 416454698,
            "maxSelectedCorrelation": 0.609
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.223,
            "participation": 1.346,
            "volatility": -0.946,
            "gap": 0.708,
            "correlation": 0.609,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 82,
          "previousRank": 60,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": -0.243,
          "metrics": {
            "momentum5d": -0.233,
            "momentum20d": -9.978,
            "realizedVol10dAnnualized": 26.07,
            "volumeRatio": 0.502,
            "atrPct": 1.508,
            "gapPct": 0,
            "relativeStrength5dPct": -0.198,
            "relativeStrength20dPct": -9.431,
            "avgDollarVolume10d": 206780221,
            "maxSelectedCorrelation": 0.63
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.381,
            "participation": 1.462,
            "volatility": -0.715,
            "gap": 0.708,
            "correlation": 0.63,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 83,
          "previousRank": 89,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": -0.25,
          "metrics": {
            "momentum5d": -1.877,
            "momentum20d": -11.8,
            "realizedVol10dAnnualized": 39.09,
            "volumeRatio": 0.315,
            "atrPct": 3.467,
            "gapPct": -0.154,
            "relativeStrength5dPct": -1.841,
            "relativeStrength20dPct": -11.252,
            "avgDollarVolume10d": 5394299062,
            "maxSelectedCorrelation": 0.729
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.687,
            "participation": -0.018,
            "volatility": 0.348,
            "gap": 0.501,
            "correlation": 0.729,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 84,
          "previousRank": 103,
          "rankChange": 19,
          "rankChangeLabel": "+19",
          "status": "WATCH",
          "quantScore": -0.264,
          "metrics": {
            "momentum5d": -3.328,
            "momentum20d": -31.816,
            "realizedVol10dAnnualized": 54.42,
            "volumeRatio": 0.324,
            "atrPct": 6.266,
            "gapPct": 0.445,
            "relativeStrength5dPct": -3.293,
            "relativeStrength20dPct": -31.269,
            "avgDollarVolume10d": 8385179201,
            "maxSelectedCorrelation": 0.662
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.591,
            "participation": 0.052,
            "volatility": 1.802,
            "gap": 1.306,
            "correlation": 0.662,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 85,
          "previousRank": 101,
          "rankChange": 16,
          "rankChangeLabel": "+16",
          "status": "WATCH",
          "quantScore": -0.281,
          "metrics": {
            "momentum5d": 0.125,
            "momentum20d": -7.522,
            "realizedVol10dAnnualized": 22.14,
            "volumeRatio": 0.194,
            "atrPct": 2.915,
            "gapPct": -0.291,
            "relativeStrength5dPct": 0.161,
            "relativeStrength20dPct": -6.975,
            "avgDollarVolume10d": 636299943,
            "maxSelectedCorrelation": 0.216
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.244,
            "participation": -0.98,
            "volatility": -0.215,
            "gap": 0.316,
            "correlation": 0.216,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 86,
          "previousRank": 90,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "REJECT",
          "quantScore": -0.32,
          "metrics": {
            "momentum5d": -0.287,
            "momentum20d": -4.499,
            "realizedVol10dAnnualized": 21.45,
            "volumeRatio": 0.311,
            "atrPct": 1.704,
            "gapPct": -0.336,
            "relativeStrength5dPct": -0.252,
            "relativeStrength20dPct": -3.951,
            "avgDollarVolume10d": 28437076622,
            "maxSelectedCorrelation": 0.801
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.2,
            "participation": -0.046,
            "volatility": -0.726,
            "gap": 0.256,
            "correlation": 0.801,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 87,
          "previousRank": 82,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.321,
          "metrics": {
            "momentum5d": 0.542,
            "momentum20d": 0.785,
            "realizedVol10dAnnualized": 7.14,
            "volumeRatio": 0.372,
            "atrPct": 0.614,
            "gapPct": -0.288,
            "relativeStrength5dPct": 0.577,
            "relativeStrength20dPct": 1.333,
            "avgDollarVolume10d": 3145848524,
            "maxSelectedCorrelation": 0.799
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.104,
            "participation": 0.431,
            "volatility": -1.457,
            "gap": 0.321,
            "correlation": 0.799,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 88,
          "previousRank": 65,
          "rankChange": -23,
          "rankChangeLabel": "-23",
          "status": "WATCH",
          "quantScore": -0.333,
          "metrics": {
            "momentum5d": -1.395,
            "momentum20d": 0.633,
            "realizedVol10dAnnualized": 24.46,
            "volumeRatio": 0.109,
            "atrPct": 2.461,
            "gapPct": -1.144,
            "relativeStrength5dPct": -1.36,
            "relativeStrength20dPct": 1.18,
            "avgDollarVolume10d": 1424005086,
            "maxSelectedCorrelation": 0.36
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.187,
            "participation": -1.648,
            "volatility": -0.356,
            "gap": 0.831,
            "correlation": 0.36,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 89,
          "previousRank": 54,
          "rankChange": -35,
          "rankChangeLabel": "-35",
          "status": "WATCH",
          "quantScore": -0.345,
          "metrics": {
            "momentum5d": -2.909,
            "momentum20d": -1.247,
            "realizedVol10dAnnualized": 26.19,
            "volumeRatio": 0.185,
            "atrPct": 3.392,
            "gapPct": -0.569,
            "relativeStrength5dPct": -2.873,
            "relativeStrength20dPct": -0.7,
            "avgDollarVolume10d": 1768599102,
            "maxSelectedCorrelation": 0.513
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.475,
            "participation": -1.048,
            "volatility": 0.061,
            "gap": 0.057,
            "correlation": 0.513,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 90,
          "previousRank": 76,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.365,
          "metrics": {
            "momentum5d": -2.282,
            "momentum20d": -8.081,
            "realizedVol10dAnnualized": 32.92,
            "volumeRatio": 0.255,
            "atrPct": 2.803,
            "gapPct": -1.102,
            "relativeStrength5dPct": -2.246,
            "relativeStrength20dPct": -7.534,
            "avgDollarVolume10d": 1169280487,
            "maxSelectedCorrelation": 0.203
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.618,
            "participation": -0.493,
            "volatility": -0.047,
            "gap": 0.774,
            "correlation": 0.203,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 91,
          "previousRank": 74,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "WATCH",
          "quantScore": -0.37,
          "metrics": {
            "momentum5d": -2.156,
            "momentum20d": -5.432,
            "realizedVol10dAnnualized": 20.63,
            "volumeRatio": 0.376,
            "atrPct": 2.185,
            "gapPct": -0.928,
            "relativeStrength5dPct": -2.12,
            "relativeStrength20dPct": -4.884,
            "avgDollarVolume10d": 1023556094,
            "maxSelectedCorrelation": 0.391
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.508,
            "participation": 0.464,
            "volatility": -0.544,
            "gap": 0.54,
            "correlation": 0.391,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 92,
          "previousRank": 98,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": -0.395,
          "metrics": {
            "momentum5d": 0.15,
            "momentum20d": -1.175,
            "realizedVol10dAnnualized": 3.82,
            "volumeRatio": 0.427,
            "atrPct": 0.369,
            "gapPct": -0.272,
            "relativeStrength5dPct": 0.185,
            "relativeStrength20dPct": -0.627,
            "avgDollarVolume10d": 3708876452,
            "maxSelectedCorrelation": 0.792
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.021,
            "participation": 0.867,
            "volatility": -1.624,
            "gap": 0.342,
            "correlation": 0.792,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 93,
          "previousRank": 87,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.396,
          "metrics": {
            "momentum5d": -5.665,
            "momentum20d": -14.391,
            "realizedVol10dAnnualized": 29.98,
            "volumeRatio": 0.476,
            "atrPct": 4.322,
            "gapPct": -1.375,
            "relativeStrength5dPct": -5.629,
            "relativeStrength20dPct": -13.844,
            "avgDollarVolume10d": 1901667648,
            "maxSelectedCorrelation": 0.492
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.335,
            "participation": 1.26,
            "volatility": 0.518,
            "gap": 1.141,
            "correlation": 0.492,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 94,
          "previousRank": 105,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.399,
          "metrics": {
            "momentum5d": -1.408,
            "momentum20d": -7.859,
            "realizedVol10dAnnualized": 17.97,
            "volumeRatio": 0.402,
            "atrPct": 1.771,
            "gapPct": -0.097,
            "relativeStrength5dPct": -1.373,
            "relativeStrength20dPct": -7.311,
            "avgDollarVolume10d": 1251899557,
            "maxSelectedCorrelation": 0.721
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.482,
            "participation": 0.672,
            "volatility": -0.768,
            "gap": 0.577,
            "correlation": 0.721,
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
          "quantScore": -0.409,
          "metrics": {
            "momentum5d": -0.664,
            "momentum20d": -9.174,
            "realizedVol10dAnnualized": 25.01,
            "volumeRatio": 0.192,
            "atrPct": 2.558,
            "gapPct": -0.685,
            "relativeStrength5dPct": -0.628,
            "relativeStrength20dPct": -8.626,
            "avgDollarVolume10d": 2365806281,
            "maxSelectedCorrelation": 0.493
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.417,
            "participation": -0.992,
            "volatility": -0.304,
            "gap": 0.214,
            "correlation": 0.493,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 96,
          "previousRank": 81,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.412,
          "metrics": {
            "momentum5d": -1.717,
            "momentum20d": -2.34,
            "realizedVol10dAnnualized": 9.99,
            "volumeRatio": 0.361,
            "atrPct": 1.627,
            "gapPct": -1.032,
            "relativeStrength5dPct": -1.681,
            "relativeStrength20dPct": -1.792,
            "avgDollarVolume10d": 1247849420,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.337,
            "participation": 0.35,
            "volatility": -0.985,
            "gap": 0.68,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 97,
          "previousRank": 93,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "REJECT",
          "quantScore": -0.438,
          "metrics": {
            "momentum5d": -0.035,
            "momentum20d": -0.547,
            "realizedVol10dAnnualized": 10.11,
            "volumeRatio": 0.261,
            "atrPct": 0.941,
            "gapPct": -0.532,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 28939978830,
            "maxSelectedCorrelation": 0.883
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.027,
            "participation": -0.445,
            "volatility": -1.264,
            "gap": 0.007,
            "correlation": 0.883,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 98,
          "previousRank": 84,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.451,
          "metrics": {
            "momentum5d": -3.632,
            "momentum20d": -2.059,
            "realizedVol10dAnnualized": 27.23,
            "volumeRatio": 0.239,
            "atrPct": 2.571,
            "gapPct": -0.869,
            "relativeStrength5dPct": -3.596,
            "relativeStrength20dPct": -1.511,
            "avgDollarVolume10d": 942872645,
            "maxSelectedCorrelation": 0.569
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.61,
            "participation": -0.618,
            "volatility": -0.255,
            "gap": 0.46,
            "correlation": 0.569,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 99,
          "previousRank": 100,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.452,
          "metrics": {
            "momentum5d": -0.754,
            "momentum20d": -1.717,
            "realizedVol10dAnnualized": 9.49,
            "volumeRatio": 0.263,
            "atrPct": 1.22,
            "gapPct": -1.047,
            "relativeStrength5dPct": -0.718,
            "relativeStrength20dPct": -1.169,
            "avgDollarVolume10d": 324974181,
            "maxSelectedCorrelation": 0.684
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.173,
            "participation": -0.429,
            "volatility": -1.162,
            "gap": 0.7,
            "correlation": 0.684,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 100,
          "previousRank": 86,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.46,
          "metrics": {
            "momentum5d": -1.879,
            "momentum20d": -1.543,
            "realizedVol10dAnnualized": 14.6,
            "volumeRatio": 0.218,
            "atrPct": 1.907,
            "gapPct": -1.052,
            "relativeStrength5dPct": -1.844,
            "relativeStrength20dPct": -0.996,
            "avgDollarVolume10d": 2443296554,
            "maxSelectedCorrelation": 0.615
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.333,
            "participation": -0.782,
            "volatility": -0.778,
            "gap": 0.707,
            "correlation": 0.615,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 101,
          "previousRank": 112,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "REJECT",
          "quantScore": -0.51,
          "metrics": {
            "momentum5d": -3.905,
            "momentum20d": -21.942,
            "realizedVol10dAnnualized": 27.82,
            "volumeRatio": 0.443,
            "atrPct": 3.878,
            "gapPct": -1.078,
            "relativeStrength5dPct": -3.87,
            "relativeStrength20dPct": -21.395,
            "avgDollarVolume10d": 244138139,
            "maxSelectedCorrelation": 0.94
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.336,
            "participation": 0.994,
            "volatility": 0.293,
            "gap": 0.742,
            "correlation": 0.94,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 102,
          "previousRank": 107,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": -0.519,
          "metrics": {
            "momentum5d": -6.763,
            "momentum20d": -19.534,
            "realizedVol10dAnnualized": 49.92,
            "volumeRatio": 0.273,
            "atrPct": 5.388,
            "gapPct": -0.056,
            "relativeStrength5dPct": -6.728,
            "relativeStrength20dPct": -18.987,
            "avgDollarVolume10d": 3031911139,
            "maxSelectedCorrelation": 0.61
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.675,
            "participation": -0.351,
            "volatility": 1.352,
            "gap": 0.633,
            "correlation": 0.61,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 103,
          "previousRank": 88,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.522,
          "metrics": {
            "momentum5d": -4.102,
            "momentum20d": -6.472,
            "realizedVol10dAnnualized": 17.21,
            "volumeRatio": 0.538,
            "atrPct": 1.454,
            "gapPct": -0.015,
            "relativeStrength5dPct": -4.067,
            "relativeStrength20dPct": -5.924,
            "avgDollarVolume10d": 2878264296,
            "maxSelectedCorrelation": 0.573
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.832,
            "participation": 1.745,
            "volatility": -0.913,
            "gap": 0.688,
            "correlation": 0.573,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 104,
          "previousRank": 99,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.555,
          "metrics": {
            "momentum5d": -1.773,
            "momentum20d": -9.207,
            "realizedVol10dAnnualized": 23.41,
            "volumeRatio": 0.146,
            "atrPct": 2.342,
            "gapPct": -0.098,
            "relativeStrength5dPct": -1.737,
            "relativeStrength20dPct": -8.659,
            "avgDollarVolume10d": 887145997,
            "maxSelectedCorrelation": 0.181
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.582,
            "participation": -1.36,
            "volatility": -0.425,
            "gap": 0.576,
            "correlation": 0.181,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARM",
          "rank": 105,
          "previousRank": 115,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "REJECT",
          "quantScore": -0.575,
          "metrics": {
            "momentum5d": -6.831,
            "momentum20d": -30.718,
            "realizedVol10dAnnualized": 59.9,
            "volumeRatio": 0.202,
            "atrPct": 6.692,
            "gapPct": -0.083,
            "relativeStrength5dPct": -6.795,
            "relativeStrength20dPct": -30.17,
            "avgDollarVolume10d": 1012386460,
            "maxSelectedCorrelation": 0.837
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -2.071,
            "participation": -0.915,
            "volatility": 2.085,
            "gap": 0.596,
            "correlation": 0.837,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 106,
          "previousRank": 109,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.606,
          "metrics": {
            "momentum5d": -5.6,
            "momentum20d": -7.167,
            "realizedVol10dAnnualized": 37.62,
            "volumeRatio": 0.199,
            "atrPct": 3.087,
            "gapPct": -0.06,
            "relativeStrength5dPct": -5.565,
            "relativeStrength20dPct": -6.619,
            "avgDollarVolume10d": 2992895660,
            "maxSelectedCorrelation": 0.607
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.077,
            "participation": -0.937,
            "volatility": 0.162,
            "gap": 0.628,
            "correlation": 0.607,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 107,
          "previousRank": 106,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.64,
          "metrics": {
            "momentum5d": -4.994,
            "momentum20d": -5.485,
            "realizedVol10dAnnualized": 21.16,
            "volumeRatio": 0.251,
            "atrPct": 2.592,
            "gapPct": -1.032,
            "relativeStrength5dPct": -4.959,
            "relativeStrength20dPct": -4.938,
            "avgDollarVolume10d": 7162178217,
            "maxSelectedCorrelation": 0.447
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.929,
            "participation": -0.528,
            "volatility": -0.367,
            "gap": 0.68,
            "correlation": 0.447,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 108,
          "previousRank": 102,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.676,
          "metrics": {
            "momentum5d": -6.637,
            "momentum20d": -7.897,
            "realizedVol10dAnnualized": 23.87,
            "volumeRatio": 0.422,
            "atrPct": 2.585,
            "gapPct": -0.921,
            "relativeStrength5dPct": -6.602,
            "relativeStrength20dPct": -7.349,
            "avgDollarVolume10d": 403937663,
            "maxSelectedCorrelation": 0.603
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.255,
            "participation": 0.827,
            "volatility": -0.316,
            "gap": 0.531,
            "correlation": 0.603,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 109,
          "previousRank": 108,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.714,
          "metrics": {
            "momentum5d": -10.46,
            "momentum20d": -17.359,
            "realizedVol10dAnnualized": 39.75,
            "volumeRatio": 0.496,
            "atrPct": 4.019,
            "gapPct": -2.73,
            "relativeStrength5dPct": -10.424,
            "relativeStrength20dPct": -16.812,
            "avgDollarVolume10d": 238800934,
            "maxSelectedCorrelation": 0.42
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.146,
            "participation": 1.413,
            "volatility": 0.587,
            "gap": 2.964,
            "correlation": 0.42,
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
          "quantScore": -0.763,
          "metrics": {
            "momentum5d": -4.344,
            "momentum20d": -5.461,
            "realizedVol10dAnnualized": 13.02,
            "volumeRatio": 0.311,
            "atrPct": 1.322,
            "gapPct": -0.308,
            "relativeStrength5dPct": -4.309,
            "relativeStrength20dPct": -4.914,
            "avgDollarVolume10d": 602506969,
            "maxSelectedCorrelation": 0.4
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.832,
            "participation": -0.049,
            "volatility": -1.05,
            "gap": 0.294,
            "correlation": 0.4,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 111,
          "previousRank": 110,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.77,
          "metrics": {
            "momentum5d": -8.454,
            "momentum20d": -10.157,
            "realizedVol10dAnnualized": 22.11,
            "volumeRatio": 0.312,
            "atrPct": 3.06,
            "gapPct": -2.926,
            "relativeStrength5dPct": -8.418,
            "relativeStrength20dPct": -9.61,
            "avgDollarVolume10d": 1389956479,
            "maxSelectedCorrelation": 0.562
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.601,
            "participation": -0.041,
            "volatility": -0.156,
            "gap": 3.228,
            "correlation": 0.562,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 112,
          "previousRank": 104,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.802,
          "metrics": {
            "momentum5d": -12.382,
            "momentum20d": -24.71,
            "realizedVol10dAnnualized": 58.74,
            "volumeRatio": 0.318,
            "atrPct": 6.678,
            "gapPct": -1.356,
            "relativeStrength5dPct": -12.346,
            "relativeStrength20dPct": -24.163,
            "avgDollarVolume10d": 2571067470,
            "maxSelectedCorrelation": 0.536
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.683,
            "participation": 0.007,
            "volatility": 2.056,
            "gap": 1.115,
            "correlation": 0.536,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 113,
          "previousRank": 91,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": -0.809,
          "metrics": {
            "momentum5d": -8.949,
            "momentum20d": -16.942,
            "realizedVol10dAnnualized": 46.13,
            "volumeRatio": 0.271,
            "atrPct": 3.915,
            "gapPct": -1.654,
            "relativeStrength5dPct": -8.914,
            "relativeStrength20dPct": -16.395,
            "avgDollarVolume10d": 13631879418,
            "maxSelectedCorrelation": 0.52
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.908,
            "participation": -0.363,
            "volatility": 0.671,
            "gap": 1.516,
            "correlation": 0.52,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 114,
          "previousRank": 113,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.932,
          "metrics": {
            "momentum5d": -10.195,
            "momentum20d": -6.417,
            "realizedVol10dAnnualized": 37.6,
            "volumeRatio": 0.217,
            "atrPct": 3.049,
            "gapPct": -1.334,
            "relativeStrength5dPct": -10.16,
            "relativeStrength20dPct": -5.869,
            "avgDollarVolume10d": 624088331,
            "maxSelectedCorrelation": 0.429
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.729,
            "participation": -0.793,
            "volatility": 0.147,
            "gap": 1.086,
            "correlation": 0.429,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 115,
          "previousRank": 114,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.944,
          "metrics": {
            "momentum5d": -10.688,
            "momentum20d": -20.889,
            "realizedVol10dAnnualized": 46.05,
            "volumeRatio": 0.196,
            "atrPct": 5.601,
            "gapPct": -0.399,
            "relativeStrength5dPct": -10.653,
            "relativeStrength20dPct": -20.341,
            "avgDollarVolume10d": 1729409679,
            "maxSelectedCorrelation": 0.599
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -2.301,
            "participation": -0.957,
            "volatility": 1.363,
            "gap": 0.171,
            "correlation": 0.599,
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
            "momentum5d": 10.703,
            "momentum20d": -16.506,
            "realizedVol10dAnnualized": 92.77,
            "volumeRatio": 0.209,
            "atrPct": 7.514,
            "gapPct": -1.445,
            "relativeStrength5dPct": 10.738,
            "relativeStrength20dPct": -15.959,
            "avgDollarVolume10d": 41152740,
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
            "momentum5d": -1.455,
            "momentum20d": -2.161,
            "realizedVol10dAnnualized": 13.67,
            "volumeRatio": 0.173,
            "atrPct": 1.236,
            "gapPct": -1.161,
            "relativeStrength5dPct": -1.42,
            "relativeStrength20dPct": -1.614,
            "avgDollarVolume10d": 28893700,
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
            "momentum5d": -1.887,
            "momentum20d": -5.478,
            "realizedVol10dAnnualized": 15.4,
            "volumeRatio": 0.224,
            "atrPct": 1.181,
            "gapPct": -1.508,
            "relativeStrength5dPct": -1.852,
            "relativeStrength20dPct": -4.931,
            "avgDollarVolume10d": 19745358,
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
            "momentum5d": -1.135,
            "momentum20d": 0.647,
            "realizedVol10dAnnualized": 13.15,
            "volumeRatio": 0.349,
            "atrPct": 1.023,
            "gapPct": -0.92,
            "relativeStrength5dPct": -1.1,
            "relativeStrength20dPct": 1.194,
            "avgDollarVolume10d": 27754793,
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
            "invalidatedAt": "2026-10-23T13:30:00.000Z"
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
            "selectionPrice": 251.23500061035156
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
              "h1": 1.175
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
      }
    ],
    "lastUpdatedAt": "2026-10-23T19:28:28.589Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-23T19:28:32.076Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-23T19:28:30.000Z",
        "MSTR": "2026-10-23T19:28:28.000Z",
        "HPE": "2026-10-23T19:28:27.000Z",
        "SHOP": "2026-10-23T19:28:24.000Z"
      },
      "fxUsdPerEur": 1.1196954250335693,
      "fxAt": "2026-10-23T19:28:25.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
