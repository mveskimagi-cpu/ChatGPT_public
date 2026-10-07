window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-07 11:58 UTC",
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
    "value": 1004.23,
    "cash": 448.57,
    "realized": -1.43,
    "unrealized": 5.66,
    "total": 4.23,
    "totalPct": 0.42
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 86.30999755859375,
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
      "value": 203.56,
      "pnl": 3.56,
      "pnlPct": 1.78,
      "fxUsdPerEur": 1.11831796169281,
      "lastPriceAt": "2026-10-06T20:00:00.000Z"
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 164.5500030517578,
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
      "value": 151.22,
      "pnl": 1.22,
      "pnlPct": 0.81,
      "fxUsdPerEur": 1.11831796169281,
      "lastPriceAt": "2026-10-06T20:00:00.000Z"
    },
    {
      "symbol": "HPE",
      "qty": 1.59808207,
      "avgUsd": 70.51499938964844,
      "lastUsd": 70.4800033569336,
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
      "value": 100.72,
      "pnl": 0.72,
      "pnlPct": 0.72,
      "fxUsdPerEur": 1.11831796169281,
      "lastPriceAt": "2026-10-06T20:00:00.000Z"
    },
    {
      "symbol": "SHOP",
      "qty": 0.68122656,
      "avgUsd": 165.2899932861328,
      "lastUsd": 164.44000244140625,
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
      "value": 100.17,
      "pnl": 0.17,
      "pnlPct": 0.17,
      "fxUsdPerEur": 1.11831796169281,
      "lastPriceAt": "2026-10-06T20:00:00.000Z"
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
      "date": "2026-10-07 11:58",
      "value": 1004.23
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 116 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: ON, ARM, SHOP, HPE, AMAT.",
    "riskPosture": "Active paper positions: ON, MSTR. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is ON, ARM, SHOP, HPE, AMAT. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "symbol": "ON",
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "WATCH_ONLY",
        "setupId": "ON-20261006-daily-quant"
      },
      {
        "symbol": "ARM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-09T12:15:49.745Z",
        "trigger": "Break above $310.20 with sustained participation.",
        "invalidation": "Loss of $295.60 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.91: 5d momentum 6.9%, 20d 24.9%, annualized 10d realized vol 70%, volume 0.51x, max selected correlation 0.76.",
        "quantScore": 1.906,
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "WATCH_ONLY",
        "setupId": "ARM-20261006-daily-quant"
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
        "symbol": "AMAT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-09T12:15:49.745Z",
        "trigger": "Break above $547.19 with sustained participation.",
        "invalidation": "Loss of $537.37 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.50: 5d momentum 11.4%, 20d 24.4%, annualized 10d realized vol 26%, volume 0.73x, max selected correlation 0.64.",
        "quantScore": 1.505,
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "WATCH_ONLY",
        "setupId": "AMAT-20261006-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "ON",
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "UNTRIGGERED",
        "setupId": "ON-20261006-daily-quant"
      },
      {
        "symbol": "ARM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-09T12:15:49.745Z",
        "trigger": "Break above $310.20 with sustained participation.",
        "invalidation": "Loss of $295.60 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.91: 5d momentum 6.9%, 20d 24.9%, annualized 10d realized vol 70%, volume 0.51x, max selected correlation 0.76.",
        "quantScore": 1.906,
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "UNTRIGGERED",
        "setupId": "ARM-20261006-daily-quant"
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
      },
      {
        "symbol": "AMAT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-09T12:15:49.745Z",
        "trigger": "Break above $547.19 with sustained participation.",
        "invalidation": "Loss of $537.37 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.50: 5d momentum 11.4%, 20d 24.4%, annualized 10d realized vol 26%, volume 0.73x, max selected correlation 0.64.",
        "quantScore": 1.505,
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
        "createdAt": "2026-10-06T12:15:49.745Z",
        "lastReviewedAt": "2026-10-06T12:15:49.745Z",
        "status": "UNTRIGGERED",
        "setupId": "AMAT-20261006-daily-quant"
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
    "lastReviewedAt": "2026-10-06T17:55:43.011Z",
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
      "selectedAt": "2026-10-06T12:15:49.745Z",
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
      "previousSelectedAt": "2026-10-05T12:10:16.000Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "ON",
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
          }
        },
        {
          "symbol": "ARM",
          "quantScore": 1.906,
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
          }
        },
        {
          "symbol": "SHOP",
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
          }
        },
        {
          "symbol": "HPE",
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
          }
        },
        {
          "symbol": "AMAT",
          "quantScore": 1.505,
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
          }
        }
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
          "symbol": "ARM",
          "rank": 2,
          "previousRank": 3,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "SELECTED",
          "quantScore": 1.906,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.835,
            "participation": -1.551,
            "volatility": 3.481,
            "gap": 0.154,
            "correlation": 0.765,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-09T12:15:49.745Z",
          "trigger": "Break above $310.20 with sustained participation.",
          "invalidation": "Loss of $295.60 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.91: 5d momentum 6.9%, 20d 24.9%, annualized 10d realized vol 70%, volume 0.51x, max selected correlation 0.76.",
          "createdAt": "2026-10-06T12:15:49.745Z",
          "lastReviewedAt": "2026-10-06T12:15:49.745Z",
          "setupId": "ARM-20261006-daily-quant"
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
          "symbol": "MRVL",
          "rank": 5,
          "previousRank": 10,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "REJECT",
          "quantScore": 1.605,
          "metrics": {
            "momentum5d": 7.682,
            "momentum20d": 29.89,
            "realizedVol10dAnnualized": 32.88,
            "volumeRatio": 0.794,
            "atrPct": 4.414,
            "gapPct": 1.421,
            "relativeStrength5dPct": 6.477,
            "relativeStrength20dPct": 29.676,
            "avgDollarVolume10d": 4156540063,
            "maxSelectedCorrelation": 0.838
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 2.131,
            "participation": -0.303,
            "volatility": 1.23,
            "gap": 1.9,
            "correlation": 0.838,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMAT",
          "rank": 6,
          "previousRank": 4,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "SELECTED",
          "quantScore": 1.505,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.584,
            "participation": -0.567,
            "volatility": 0.442,
            "gap": 0.154,
            "correlation": 0.642,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-09T12:15:49.745Z",
          "trigger": "Break above $547.19 with sustained participation.",
          "invalidation": "Loss of $537.37 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.50: 5d momentum 11.4%, 20d 24.4%, annualized 10d realized vol 26%, volume 0.73x, max selected correlation 0.64.",
          "createdAt": "2026-10-06T12:15:49.745Z",
          "lastReviewedAt": "2026-10-06T12:15:49.745Z",
          "setupId": "AMAT-20261006-daily-quant"
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
        },
        {
          "symbol": "KLAC",
          "rank": 8,
          "previousRank": 7,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": 1.404,
          "metrics": {
            "momentum5d": 9.346,
            "momentum20d": 19.608,
            "realizedVol10dAnnualized": 25.81,
            "volumeRatio": 1.013,
            "atrPct": 3.34,
            "gapPct": -0.773,
            "relativeStrength5dPct": 8.142,
            "relativeStrength20dPct": 19.393,
            "avgDollarVolume10d": 1664259300,
            "maxSelectedCorrelation": 0.864
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 2.078,
            "participation": 0.659,
            "volatility": 0.454,
            "gap": 1.176,
            "correlation": 0.864,
            "regimeFit": null
          }
        },
        {
          "symbol": "LRCX",
          "rank": 9,
          "previousRank": 6,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 1.328,
          "metrics": {
            "momentum5d": 9.963,
            "momentum20d": 18.158,
            "realizedVol10dAnnualized": 25.73,
            "volumeRatio": 0.746,
            "atrPct": 3.667,
            "gapPct": -0.176,
            "relativeStrength5dPct": 8.759,
            "relativeStrength20dPct": 17.943,
            "avgDollarVolume10d": 2839031732,
            "maxSelectedCorrelation": 0.778
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 2.136,
            "participation": -0.511,
            "volatility": 0.626,
            "gap": 0.338,
            "correlation": 0.778,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 10,
          "previousRank": 13,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": 1.314,
          "metrics": {
            "momentum5d": 0.138,
            "momentum20d": 26.748,
            "realizedVol10dAnnualized": 45.57,
            "volumeRatio": 0.819,
            "atrPct": 5.694,
            "gapPct": -3.344,
            "relativeStrength5dPct": -1.066,
            "relativeStrength20dPct": 26.533,
            "avgDollarVolume10d": 11470213137,
            "maxSelectedCorrelation": 0.353
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.748,
            "participation": -0.191,
            "volatility": 2.276,
            "gap": 4.779,
            "correlation": 0.353,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 11,
          "previousRank": 11,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 1.214,
          "metrics": {
            "momentum5d": 3.928,
            "momentum20d": 38.493,
            "realizedVol10dAnnualized": 28.25,
            "volumeRatio": 0.741,
            "atrPct": 3.924,
            "gapPct": -0.521,
            "relativeStrength5dPct": 2.724,
            "relativeStrength20dPct": 38.278,
            "avgDollarVolume10d": 12233769258,
            "maxSelectedCorrelation": 0.517
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.774,
            "participation": -0.533,
            "volatility": 0.836,
            "gap": 0.822,
            "correlation": 0.517,
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
          "quantScore": 1.094,
          "metrics": {
            "momentum5d": 5.176,
            "momentum20d": 26.841,
            "realizedVol10dAnnualized": 31.64,
            "volumeRatio": 0.642,
            "atrPct": 3.929,
            "gapPct": 0.448,
            "relativeStrength5dPct": 3.972,
            "relativeStrength20dPct": 26.626,
            "avgDollarVolume10d": 2199539017,
            "maxSelectedCorrelation": 0.383
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.606,
            "participation": -0.966,
            "volatility": 0.936,
            "gap": 0.536,
            "correlation": 0.383,
            "regimeFit": null
          }
        },
        {
          "symbol": "PANW",
          "rank": 13,
          "previousRank": 9,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 1.02,
          "metrics": {
            "momentum5d": 3.741,
            "momentum20d": 22.54,
            "realizedVol10dAnnualized": 40.23,
            "volumeRatio": 0.811,
            "atrPct": 3.929,
            "gapPct": 0.293,
            "relativeStrength5dPct": 2.537,
            "relativeStrength20dPct": 22.326,
            "avgDollarVolume10d": 2241345276,
            "maxSelectedCorrelation": 0.495
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.223,
            "participation": -0.226,
            "volatility": 1.182,
            "gap": 0.318,
            "correlation": 0.495,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 14,
          "previousRank": 21,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.991,
          "metrics": {
            "momentum5d": 3.672,
            "momentum20d": 21.488,
            "realizedVol10dAnnualized": 42.99,
            "volumeRatio": 0.79,
            "atrPct": 3.862,
            "gapPct": -0.051,
            "relativeStrength5dPct": 2.468,
            "relativeStrength20dPct": 21.273,
            "avgDollarVolume10d": 17136607077,
            "maxSelectedCorrelation": 0.262
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.177,
            "participation": -0.319,
            "volatility": 1.226,
            "gap": 0.163,
            "correlation": 0.262,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 15,
          "previousRank": 14,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": 0.949,
          "metrics": {
            "momentum5d": 3.375,
            "momentum20d": 14.048,
            "realizedVol10dAnnualized": 37.06,
            "volumeRatio": 0.7,
            "atrPct": 5.072,
            "gapPct": -0.275,
            "relativeStrength5dPct": 2.171,
            "relativeStrength20dPct": 13.833,
            "avgDollarVolume10d": 1447373300,
            "maxSelectedCorrelation": 0.914
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.884,
            "participation": -0.713,
            "volatility": 1.701,
            "gap": 0.477,
            "correlation": 0.914,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 16,
          "previousRank": 28,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": 0.797,
          "metrics": {
            "momentum5d": 5.953,
            "momentum20d": 0.627,
            "realizedVol10dAnnualized": 34.64,
            "volumeRatio": 1.066,
            "atrPct": 3.184,
            "gapPct": -0.429,
            "relativeStrength5dPct": 4.749,
            "relativeStrength20dPct": 0.412,
            "avgDollarVolume10d": 14150205353,
            "maxSelectedCorrelation": 0.603
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.884,
            "participation": 0.888,
            "volatility": 0.625,
            "gap": 0.694,
            "correlation": 0.603,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 17,
          "previousRank": 15,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.769,
          "metrics": {
            "momentum5d": 7.451,
            "momentum20d": -7.505,
            "realizedVol10dAnnualized": 38.69,
            "volumeRatio": 0.546,
            "atrPct": 4.422,
            "gapPct": 0.162,
            "relativeStrength5dPct": 6.247,
            "relativeStrength20dPct": -7.719,
            "avgDollarVolume10d": 4519706256,
            "maxSelectedCorrelation": 0.791
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.873,
            "participation": -1.386,
            "volatility": 1.401,
            "gap": 0.134,
            "correlation": 0.791,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 18,
          "previousRank": 16,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.718,
          "metrics": {
            "momentum5d": 1.63,
            "momentum20d": 6.952,
            "realizedVol10dAnnualized": 45.52,
            "volumeRatio": 0.705,
            "atrPct": 4.664,
            "gapPct": -0.98,
            "relativeStrength5dPct": 0.426,
            "relativeStrength20dPct": 6.737,
            "avgDollarVolume10d": 3788957780,
            "maxSelectedCorrelation": 0.76
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.357,
            "participation": -0.692,
            "volatility": 1.725,
            "gap": 1.465,
            "correlation": 0.76,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 19,
          "previousRank": 20,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.675,
          "metrics": {
            "momentum5d": 5.696,
            "momentum20d": 3.876,
            "realizedVol10dAnnualized": 28.52,
            "volumeRatio": 1.183,
            "atrPct": 2.318,
            "gapPct": -0.196,
            "relativeStrength5dPct": 4.492,
            "relativeStrength20dPct": 3.662,
            "avgDollarVolume10d": 2253348213,
            "maxSelectedCorrelation": 0.624
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.946,
            "participation": 1.402,
            "volatility": -0.013,
            "gap": 0.367,
            "correlation": 0.624,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 20,
          "previousRank": 18,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.662,
          "metrics": {
            "momentum5d": 5.121,
            "momentum20d": 17.386,
            "realizedVol10dAnnualized": 21.39,
            "volumeRatio": 0.7,
            "atrPct": 2.678,
            "gapPct": -0.389,
            "relativeStrength5dPct": 3.917,
            "relativeStrength20dPct": 17.171,
            "avgDollarVolume10d": 3540933139,
            "maxSelectedCorrelation": 0.785
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.289,
            "participation": -0.713,
            "volatility": -0.025,
            "gap": 0.637,
            "correlation": 0.785,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 21,
          "previousRank": 27,
          "rankChange": 6,
          "rankChangeLabel": "+6",
          "status": "WATCH",
          "quantScore": 0.567,
          "metrics": {
            "momentum5d": 5.119,
            "momentum20d": -11.433,
            "realizedVol10dAnnualized": 48.36,
            "volumeRatio": 0.981,
            "atrPct": 3.213,
            "gapPct": 0.252,
            "relativeStrength5dPct": 3.915,
            "relativeStrength20dPct": -11.648,
            "avgDollarVolume10d": 952834927,
            "maxSelectedCorrelation": 0.292
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.35,
            "participation": 0.519,
            "volatility": 1.034,
            "gap": 0.262,
            "correlation": 0.292,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 22,
          "previousRank": 34,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": 0.512,
          "metrics": {
            "momentum5d": 3.955,
            "momentum20d": 6.472,
            "realizedVol10dAnnualized": 25.7,
            "volumeRatio": 1.058,
            "atrPct": 2.514,
            "gapPct": 0.334,
            "relativeStrength5dPct": 2.751,
            "relativeStrength20dPct": 6.258,
            "avgDollarVolume10d": 401862648,
            "maxSelectedCorrelation": 0.731
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.735,
            "participation": 0.852,
            "volatility": 0.011,
            "gap": 0.376,
            "correlation": 0.731,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 23,
          "previousRank": 17,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.498,
          "metrics": {
            "momentum5d": 5.648,
            "momentum20d": 14.712,
            "realizedVol10dAnnualized": 16.7,
            "volumeRatio": 0.615,
            "atrPct": 2.293,
            "gapPct": 0.138,
            "relativeStrength5dPct": 4.444,
            "relativeStrength20dPct": 14.498,
            "avgDollarVolume10d": 3479299742,
            "maxSelectedCorrelation": 0.793
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.291,
            "participation": -1.082,
            "volatility": -0.365,
            "gap": 0.101,
            "correlation": 0.793,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 24,
          "previousRank": 23,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.472,
          "metrics": {
            "momentum5d": -1.861,
            "momentum20d": -2.325,
            "realizedVol10dAnnualized": 28.16,
            "volumeRatio": 0.982,
            "atrPct": 5.929,
            "gapPct": 2.137,
            "relativeStrength5dPct": -3.066,
            "relativeStrength20dPct": -2.54,
            "avgDollarVolume10d": 1424588252,
            "maxSelectedCorrelation": 0.515
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.538,
            "participation": 0.523,
            "volatility": 1.902,
            "gap": 2.903,
            "correlation": 0.515,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 25,
          "previousRank": 24,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.462,
          "metrics": {
            "momentum5d": 0.947,
            "momentum20d": 11.042,
            "realizedVol10dAnnualized": 36.37,
            "volumeRatio": 0.623,
            "atrPct": 3.934,
            "gapPct": -0.485,
            "relativeStrength5dPct": -0.257,
            "relativeStrength20dPct": 10.827,
            "avgDollarVolume10d": 27462274857,
            "maxSelectedCorrelation": 0.485
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.374,
            "participation": -1.049,
            "volatility": 1.074,
            "gap": 0.772,
            "correlation": 0.485,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 26,
          "previousRank": 36,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": 0.459,
          "metrics": {
            "momentum5d": 3.702,
            "momentum20d": 1.498,
            "realizedVol10dAnnualized": 29.27,
            "volumeRatio": 0.977,
            "atrPct": 2.734,
            "gapPct": 0.746,
            "relativeStrength5dPct": 2.497,
            "relativeStrength20dPct": 1.283,
            "avgDollarVolume10d": 7694717219,
            "maxSelectedCorrelation": 0.507
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.53,
            "participation": 0.499,
            "volatility": 0.231,
            "gap": 0.954,
            "correlation": 0.507,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 27,
          "previousRank": 32,
          "rankChange": 5,
          "rankChangeLabel": "+5",
          "status": "WATCH",
          "quantScore": 0.441,
          "metrics": {
            "momentum5d": 3.522,
            "momentum20d": -6.532,
            "realizedVol10dAnnualized": 35.78,
            "volumeRatio": 0.78,
            "atrPct": 3.87,
            "gapPct": 0.625,
            "relativeStrength5dPct": 2.318,
            "relativeStrength20dPct": -6.747,
            "avgDollarVolume10d": 1356914934,
            "maxSelectedCorrelation": 0.222
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.238,
            "participation": -0.361,
            "volatility": 1.023,
            "gap": 0.784,
            "correlation": 0.222,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 28,
          "previousRank": 25,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.441,
          "metrics": {
            "momentum5d": 4.387,
            "momentum20d": 4.574,
            "realizedVol10dAnnualized": 16.92,
            "volumeRatio": 1.057,
            "atrPct": 2.25,
            "gapPct": 0.915,
            "relativeStrength5dPct": 3.183,
            "relativeStrength20dPct": 4.36,
            "avgDollarVolume10d": 25769714711,
            "maxSelectedCorrelation": 0.484
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.747,
            "participation": 0.848,
            "volatility": -0.381,
            "gap": 1.19,
            "correlation": 0.484,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 29,
          "previousRank": 26,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": 0.435,
          "metrics": {
            "momentum5d": 3.438,
            "momentum20d": 5.999,
            "realizedVol10dAnnualized": 21.36,
            "volumeRatio": 1.047,
            "atrPct": 2.624,
            "gapPct": -0.266,
            "relativeStrength5dPct": 2.234,
            "relativeStrength20dPct": 5.784,
            "avgDollarVolume10d": 1892582036,
            "maxSelectedCorrelation": 0.676
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.632,
            "participation": 0.805,
            "volatility": -0.055,
            "gap": 0.465,
            "correlation": 0.676,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 30,
          "previousRank": 47,
          "rankChange": 17,
          "rankChangeLabel": "+17",
          "status": "WATCH",
          "quantScore": 0.42,
          "metrics": {
            "momentum5d": 3.134,
            "momentum20d": 2.952,
            "realizedVol10dAnnualized": 21.14,
            "volumeRatio": 1.257,
            "atrPct": 2.317,
            "gapPct": 0.79,
            "relativeStrength5dPct": 1.93,
            "relativeStrength20dPct": 2.738,
            "avgDollarVolume10d": 11988341463,
            "maxSelectedCorrelation": 0.632
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.481,
            "participation": 1.723,
            "volatility": -0.225,
            "gap": 1.016,
            "correlation": 0.632,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 31,
          "previousRank": 45,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": 0.394,
          "metrics": {
            "momentum5d": 4.518,
            "momentum20d": -8.451,
            "realizedVol10dAnnualized": 41.69,
            "volumeRatio": 0.489,
            "atrPct": 3.73,
            "gapPct": 0.537,
            "relativeStrength5dPct": 3.313,
            "relativeStrength20dPct": -8.666,
            "avgDollarVolume10d": 2037491742,
            "maxSelectedCorrelation": 0.699
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.345,
            "participation": -1.636,
            "volatility": 1.118,
            "gap": 0.661,
            "correlation": 0.699,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 32,
          "previousRank": 41,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": 0.385,
          "metrics": {
            "momentum5d": -3.568,
            "momentum20d": 7.249,
            "realizedVol10dAnnualized": 45.22,
            "volumeRatio": 1.113,
            "atrPct": 4.922,
            "gapPct": 0.114,
            "relativeStrength5dPct": -4.773,
            "relativeStrength20dPct": 7.035,
            "avgDollarVolume10d": 2090246897,
            "maxSelectedCorrelation": 0.782
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.516,
            "participation": 1.096,
            "volatility": 1.854,
            "gap": 0.067,
            "correlation": 0.782,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 33,
          "previousRank": 29,
          "rankChange": -4,
          "rankChangeLabel": "-4",
          "status": "WATCH",
          "quantScore": 0.339,
          "metrics": {
            "momentum5d": 3.939,
            "momentum20d": -3.795,
            "realizedVol10dAnnualized": 31.36,
            "volumeRatio": 0.843,
            "atrPct": 2.835,
            "gapPct": -0.293,
            "relativeStrength5dPct": 2.735,
            "relativeStrength20dPct": -4.009,
            "avgDollarVolume10d": 560734630,
            "maxSelectedCorrelation": 0.414
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.398,
            "participation": -0.085,
            "volatility": 0.344,
            "gap": 0.503,
            "correlation": 0.414,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 34,
          "previousRank": 56,
          "rankChange": 22,
          "rankChangeLabel": "+22",
          "status": "WATCH",
          "quantScore": 0.312,
          "metrics": {
            "momentum5d": -2.224,
            "momentum20d": 0.572,
            "realizedVol10dAnnualized": 56.21,
            "volumeRatio": 1.037,
            "atrPct": 3.703,
            "gapPct": -0.764,
            "relativeStrength5dPct": -3.429,
            "relativeStrength20dPct": 0.357,
            "avgDollarVolume10d": 390741518,
            "maxSelectedCorrelation": 0.451
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.505,
            "participation": 0.761,
            "volatility": 1.52,
            "gap": 1.163,
            "correlation": 0.451,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 35,
          "previousRank": 22,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": 0.262,
          "metrics": {
            "momentum5d": 3.313,
            "momentum20d": -4.904,
            "realizedVol10dAnnualized": 20.09,
            "volumeRatio": 0.715,
            "atrPct": 3.86,
            "gapPct": 0.281,
            "relativeStrength5dPct": 2.109,
            "relativeStrength20dPct": -5.118,
            "avgDollarVolume10d": 1387584337,
            "maxSelectedCorrelation": 0.344
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.256,
            "participation": -0.646,
            "volatility": 0.568,
            "gap": 0.302,
            "correlation": 0.344,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 36,
          "previousRank": 30,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": 0.219,
          "metrics": {
            "momentum5d": 1.024,
            "momentum20d": 3.764,
            "realizedVol10dAnnualized": 22.66,
            "volumeRatio": 1.017,
            "atrPct": 2.955,
            "gapPct": 0.371,
            "relativeStrength5dPct": -0.18,
            "relativeStrength20dPct": 3.549,
            "avgDollarVolume10d": 3830618665,
            "maxSelectedCorrelation": 0.184
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.15,
            "participation": 0.673,
            "volatility": 0.159,
            "gap": 0.428,
            "correlation": 0.184,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 37,
          "previousRank": 61,
          "rankChange": 24,
          "rankChangeLabel": "+24",
          "status": "WATCH",
          "quantScore": 0.212,
          "metrics": {
            "momentum5d": -0.271,
            "momentum20d": 9.432,
            "realizedVol10dAnnualized": 26.4,
            "volumeRatio": 1.049,
            "atrPct": 2.397,
            "gapPct": -1.032,
            "relativeStrength5dPct": -1.475,
            "relativeStrength20dPct": 9.217,
            "avgDollarVolume10d": 1413893780,
            "maxSelectedCorrelation": 0.506
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.115,
            "participation": 0.817,
            "volatility": -0.031,
            "gap": 1.539,
            "correlation": 0.506,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 38,
          "previousRank": 31,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": 0.135,
          "metrics": {
            "momentum5d": -2.018,
            "momentum20d": -8.507,
            "realizedVol10dAnnualized": 23.22,
            "volumeRatio": 0.88,
            "atrPct": 5.26,
            "gapPct": 1.88,
            "relativeStrength5dPct": -3.222,
            "relativeStrength20dPct": -8.722,
            "avgDollarVolume10d": 2218624766,
            "maxSelectedCorrelation": 0.603
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.766,
            "participation": 0.077,
            "volatility": 1.404,
            "gap": 2.544,
            "correlation": 0.603,
            "regimeFit": null
          }
        },
        {
          "symbol": "GOOGL",
          "rank": 39,
          "previousRank": 39,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.116,
          "metrics": {
            "momentum5d": 1.085,
            "momentum20d": 1.165,
            "realizedVol10dAnnualized": 24.77,
            "volumeRatio": 0.949,
            "atrPct": 2.628,
            "gapPct": -0.265,
            "relativeStrength5dPct": -0.119,
            "relativeStrength20dPct": 0.95,
            "avgDollarVolume10d": 9403687821,
            "maxSelectedCorrelation": 0.335
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.076,
            "participation": 0.378,
            "volatility": 0.045,
            "gap": 0.464,
            "correlation": 0.335,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 40,
          "previousRank": 53,
          "rankChange": 13,
          "rankChangeLabel": "+13",
          "status": "WATCH",
          "quantScore": 0.103,
          "metrics": {
            "momentum5d": -0.195,
            "momentum20d": 2.133,
            "realizedVol10dAnnualized": 11.5,
            "volumeRatio": 1.671,
            "atrPct": 1.783,
            "gapPct": -0.59,
            "relativeStrength5dPct": -1.4,
            "relativeStrength20dPct": 1.918,
            "avgDollarVolume10d": 1125071083,
            "maxSelectedCorrelation": 0.502
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.11,
            "participation": 3.537,
            "volatility": -0.786,
            "gap": 0.919,
            "correlation": 0.502,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 41,
          "previousRank": 50,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": 0.094,
          "metrics": {
            "momentum5d": 3.368,
            "momentum20d": -16.434,
            "realizedVol10dAnnualized": 30.93,
            "volumeRatio": 0.758,
            "atrPct": 3.314,
            "gapPct": 0.417,
            "relativeStrength5dPct": 2.164,
            "relativeStrength20dPct": -16.649,
            "avgDollarVolume10d": 1027444092,
            "maxSelectedCorrelation": 0.448
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.11,
            "participation": -0.459,
            "volatility": 0.588,
            "gap": 0.492,
            "correlation": 0.448,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 42,
          "previousRank": 49,
          "rankChange": 7,
          "rankChangeLabel": "+7",
          "status": "WATCH",
          "quantScore": 0.077,
          "metrics": {
            "momentum5d": 2.133,
            "momentum20d": -2.897,
            "realizedVol10dAnnualized": 16.68,
            "volumeRatio": 1.12,
            "atrPct": 2.08,
            "gapPct": -0.529,
            "relativeStrength5dPct": 0.929,
            "relativeStrength20dPct": -3.112,
            "avgDollarVolume10d": 9241003714,
            "maxSelectedCorrelation": 0.461
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.121,
            "participation": 1.124,
            "volatility": -0.479,
            "gap": 0.833,
            "correlation": 0.461,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 43,
          "previousRank": 35,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "REJECT",
          "quantScore": 0.056,
          "metrics": {
            "momentum5d": 3.29,
            "momentum20d": 8.044,
            "realizedVol10dAnnualized": 10.27,
            "volumeRatio": 0.782,
            "atrPct": 1.507,
            "gapPct": 0.23,
            "relativeStrength5dPct": 2.086,
            "relativeStrength20dPct": 7.83,
            "avgDollarVolume10d": 1519659656,
            "maxSelectedCorrelation": 0.867
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.674,
            "participation": -0.352,
            "volatility": -0.969,
            "gap": 0.231,
            "correlation": 0.867,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 44,
          "previousRank": 42,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": 0.042,
          "metrics": {
            "momentum5d": -1.285,
            "momentum20d": -8.234,
            "realizedVol10dAnnualized": 32.28,
            "volumeRatio": 0.781,
            "atrPct": 4.651,
            "gapPct": -0.28,
            "relativeStrength5dPct": -2.489,
            "relativeStrength20dPct": -8.449,
            "avgDollarVolume10d": 401449932,
            "maxSelectedCorrelation": 0.368
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.633,
            "participation": -0.357,
            "volatility": 1.339,
            "gap": 0.484,
            "correlation": 0.368,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 45,
          "previousRank": 60,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.031,
          "metrics": {
            "momentum5d": -2.003,
            "momentum20d": 9.91,
            "realizedVol10dAnnualized": 28.18,
            "volumeRatio": 0.88,
            "atrPct": 2.795,
            "gapPct": -0.559,
            "relativeStrength5dPct": -3.208,
            "relativeStrength20dPct": 9.695,
            "avgDollarVolume10d": 761369579,
            "maxSelectedCorrelation": 0.682
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.164,
            "participation": 0.074,
            "volatility": 0.232,
            "gap": 0.875,
            "correlation": 0.682,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 46,
          "previousRank": 72,
          "rankChange": 26,
          "rankChangeLabel": "+26",
          "status": "WATCH",
          "quantScore": 0.025,
          "metrics": {
            "momentum5d": -0.508,
            "momentum20d": -8.014,
            "realizedVol10dAnnualized": 39.3,
            "volumeRatio": 0.77,
            "atrPct": 3.495,
            "gapPct": 0.92,
            "relativeStrength5dPct": -1.713,
            "relativeStrength20dPct": -8.229,
            "avgDollarVolume10d": 599943117,
            "maxSelectedCorrelation": 0.517
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.494,
            "participation": -0.408,
            "volatility": 0.924,
            "gap": 1.197,
            "correlation": 0.517,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 47,
          "previousRank": 62,
          "rankChange": 15,
          "rankChangeLabel": "+15",
          "status": "WATCH",
          "quantScore": 0.022,
          "metrics": {
            "momentum5d": 2.277,
            "momentum20d": 1.867,
            "realizedVol10dAnnualized": 17.52,
            "volumeRatio": 0.867,
            "atrPct": 1.549,
            "gapPct": 1.153,
            "relativeStrength5dPct": 1.073,
            "relativeStrength20dPct": 1.653,
            "avgDollarVolume10d": 1326744740,
            "maxSelectedCorrelation": 0.629
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.301,
            "participation": 0.017,
            "volatility": -0.738,
            "gap": 1.524,
            "correlation": 0.629,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 48,
          "previousRank": 52,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": 0.005,
          "metrics": {
            "momentum5d": 1.872,
            "momentum20d": -5.393,
            "realizedVol10dAnnualized": 20.66,
            "volumeRatio": 0.906,
            "atrPct": 2.636,
            "gapPct": 0.197,
            "relativeStrength5dPct": 0.668,
            "relativeStrength20dPct": -5.608,
            "avgDollarVolume10d": 793382278,
            "maxSelectedCorrelation": 0.292
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.005,
            "participation": 0.188,
            "volatility": -0.068,
            "gap": 0.184,
            "correlation": 0.292,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 49,
          "previousRank": 84,
          "rankChange": 35,
          "rankChangeLabel": "+35",
          "status": "WATCH",
          "quantScore": 0.003,
          "metrics": {
            "momentum5d": 0.24,
            "momentum20d": -4.241,
            "realizedVol10dAnnualized": 31.91,
            "volumeRatio": 0.874,
            "atrPct": 2.704,
            "gapPct": -0.587,
            "relativeStrength5dPct": -0.965,
            "relativeStrength20dPct": -4.456,
            "avgDollarVolume10d": 664245440,
            "maxSelectedCorrelation": 0.468
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.244,
            "participation": 0.047,
            "volatility": 0.29,
            "gap": 0.915,
            "correlation": 0.468,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 50,
          "previousRank": 40,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.012,
          "metrics": {
            "momentum5d": 0.412,
            "momentum20d": -5.594,
            "realizedVol10dAnnualized": 21.44,
            "volumeRatio": 1.043,
            "atrPct": 2.947,
            "gapPct": -0.153,
            "relativeStrength5dPct": -0.792,
            "relativeStrength20dPct": -5.809,
            "avgDollarVolume10d": 1200578061,
            "maxSelectedCorrelation": 0.49
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.259,
            "participation": 0.79,
            "volatility": 0.12,
            "gap": 0.306,
            "correlation": 0.49,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 51,
          "previousRank": 89,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "WATCH",
          "quantScore": -0.022,
          "metrics": {
            "momentum5d": 0.328,
            "momentum20d": -8.951,
            "realizedVol10dAnnualized": 36.56,
            "volumeRatio": 0.655,
            "atrPct": 2.993,
            "gapPct": 1.571,
            "relativeStrength5dPct": -0.877,
            "relativeStrength20dPct": -9.166,
            "avgDollarVolume10d": 841985070,
            "maxSelectedCorrelation": 0.614
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.383,
            "participation": -0.908,
            "volatility": 0.578,
            "gap": 2.11,
            "correlation": 0.614,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 52,
          "previousRank": 80,
          "rankChange": 28,
          "rankChangeLabel": "+28",
          "status": "WATCH",
          "quantScore": -0.034,
          "metrics": {
            "momentum5d": 0.199,
            "momentum20d": -5.577,
            "realizedVol10dAnnualized": 19.31,
            "volumeRatio": 1.456,
            "atrPct": 1.991,
            "gapPct": 0.116,
            "relativeStrength5dPct": -1.006,
            "relativeStrength20dPct": -5.792,
            "avgDollarVolume10d": 1624248217,
            "maxSelectedCorrelation": 0.153
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.295,
            "participation": 2.595,
            "volatility": -0.451,
            "gap": 0.07,
            "correlation": 0.153,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 53,
          "previousRank": 19,
          "rankChange": -34,
          "rankChangeLabel": "-34",
          "status": "WATCH",
          "quantScore": -0.042,
          "metrics": {
            "momentum5d": -4.013,
            "momentum20d": 1.337,
            "realizedVol10dAnnualized": 43.95,
            "volumeRatio": 0.529,
            "atrPct": 4.021,
            "gapPct": -1.852,
            "relativeStrength5dPct": -5.217,
            "relativeStrength20dPct": 1.122,
            "avgDollarVolume10d": 981060064,
            "maxSelectedCorrelation": 0.565
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.784,
            "participation": -1.461,
            "volatility": 1.338,
            "gap": 2.689,
            "correlation": 0.565,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 54,
          "previousRank": 33,
          "rankChange": -21,
          "rankChangeLabel": "-21",
          "status": "WATCH",
          "quantScore": -0.044,
          "metrics": {
            "momentum5d": 0.911,
            "momentum20d": 1.104,
            "realizedVol10dAnnualized": 11.99,
            "volumeRatio": 1.073,
            "atrPct": 2.135,
            "gapPct": -0.152,
            "relativeStrength5dPct": -0.294,
            "relativeStrength20dPct": 0.889,
            "avgDollarVolume10d": 1980513200,
            "maxSelectedCorrelation": 0.61
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.044,
            "participation": 0.921,
            "volatility": -0.584,
            "gap": 0.306,
            "correlation": 0.61,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 55,
          "previousRank": 88,
          "rankChange": 33,
          "rankChangeLabel": "+33",
          "status": "WATCH",
          "quantScore": -0.046,
          "metrics": {
            "momentum5d": 1.937,
            "momentum20d": -8.531,
            "realizedVol10dAnnualized": 20.29,
            "volumeRatio": 1.057,
            "atrPct": 2.136,
            "gapPct": 0.426,
            "relativeStrength5dPct": 0.732,
            "relativeStrength20dPct": -8.746,
            "avgDollarVolume10d": 1162443534,
            "maxSelectedCorrelation": 0.4
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.096,
            "participation": 0.849,
            "volatility": -0.346,
            "gap": 0.505,
            "correlation": 0.4,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 56,
          "previousRank": 48,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.055,
          "metrics": {
            "momentum5d": 2.174,
            "momentum20d": -1.811,
            "realizedVol10dAnnualized": 14.59,
            "volumeRatio": 0.909,
            "atrPct": 1.984,
            "gapPct": -0.111,
            "relativeStrength5dPct": 0.97,
            "relativeStrength20dPct": -2.025,
            "avgDollarVolume10d": 2175671974,
            "maxSelectedCorrelation": 0.261
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.163,
            "participation": 0.202,
            "volatility": -0.59,
            "gap": 0.248,
            "correlation": 0.261,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 57,
          "previousRank": 95,
          "rankChange": 38,
          "rankChangeLabel": "+38",
          "status": "WATCH",
          "quantScore": -0.056,
          "metrics": {
            "momentum5d": 0.78,
            "momentum20d": -8.689,
            "realizedVol10dAnnualized": 24.59,
            "volumeRatio": 0.893,
            "atrPct": 2.241,
            "gapPct": 2.126,
            "relativeStrength5dPct": -0.425,
            "relativeStrength20dPct": -8.904,
            "avgDollarVolume10d": 1110352993,
            "maxSelectedCorrelation": 0.329
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.297,
            "participation": 0.134,
            "volatility": -0.166,
            "gap": 2.887,
            "correlation": 0.329,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 58,
          "previousRank": 51,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.096,
          "metrics": {
            "momentum5d": 2.671,
            "momentum20d": 5.369,
            "realizedVol10dAnnualized": 10.43,
            "volumeRatio": 0.756,
            "atrPct": 1.31,
            "gapPct": -0.031,
            "relativeStrength5dPct": 1.466,
            "relativeStrength20dPct": 5.154,
            "avgDollarVolume10d": 24729041063,
            "maxSelectedCorrelation": 0.677
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.481,
            "participation": -0.467,
            "volatility": -1.069,
            "gap": 0.135,
            "correlation": 0.677,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 59,
          "previousRank": 46,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.126,
          "metrics": {
            "momentum5d": 1.109,
            "momentum20d": -13.1,
            "realizedVol10dAnnualized": 29.68,
            "volumeRatio": 0.606,
            "atrPct": 3.444,
            "gapPct": -0.111,
            "relativeStrength5dPct": -0.095,
            "relativeStrength20dPct": -13.315,
            "avgDollarVolume10d": 2405880549,
            "maxSelectedCorrelation": 0.449
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.385,
            "participation": -1.124,
            "volatility": 0.621,
            "gap": 0.248,
            "correlation": 0.449,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 60,
          "previousRank": 38,
          "rankChange": -22,
          "rankChangeLabel": "-22",
          "status": "WATCH",
          "quantScore": -0.146,
          "metrics": {
            "momentum5d": 2.551,
            "momentum20d": 1.43,
            "realizedVol10dAnnualized": 19.5,
            "volumeRatio": 0.559,
            "atrPct": 1.57,
            "gapPct": 0,
            "relativeStrength5dPct": 1.347,
            "relativeStrength20dPct": 1.215,
            "avgDollarVolume10d": 479783853,
            "maxSelectedCorrelation": 0.799
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.333,
            "participation": -1.329,
            "volatility": -0.67,
            "gap": 0.092,
            "correlation": 0.799,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 61,
          "previousRank": 94,
          "rankChange": 33,
          "rankChangeLabel": "+33",
          "status": "WATCH",
          "quantScore": -0.247,
          "metrics": {
            "momentum5d": 0.536,
            "momentum20d": -2.387,
            "realizedVol10dAnnualized": 21.09,
            "volumeRatio": 0.792,
            "atrPct": 1.676,
            "gapPct": -0.324,
            "relativeStrength5dPct": -0.669,
            "relativeStrength20dPct": -2.602,
            "avgDollarVolume10d": 2068922992,
            "maxSelectedCorrelation": 0.409
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.133,
            "participation": -0.308,
            "volatility": -0.568,
            "gap": 0.547,
            "correlation": 0.409,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 62,
          "previousRank": 65,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.27,
          "metrics": {
            "momentum5d": -0.936,
            "momentum20d": -4.216,
            "realizedVol10dAnnualized": 18.37,
            "volumeRatio": 1.194,
            "atrPct": 1.424,
            "gapPct": 0.964,
            "relativeStrength5dPct": -2.141,
            "relativeStrength20dPct": -4.431,
            "avgDollarVolume10d": 611786255,
            "maxSelectedCorrelation": 0.569
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.443,
            "participation": 1.449,
            "volatility": -0.78,
            "gap": 1.259,
            "correlation": 0.569,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 63,
          "previousRank": 44,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.272,
          "metrics": {
            "momentum5d": 1.794,
            "momentum20d": 14.271,
            "realizedVol10dAnnualized": 15.23,
            "volumeRatio": 0.301,
            "atrPct": 0.726,
            "gapPct": 0,
            "relativeStrength5dPct": 0.59,
            "relativeStrength20dPct": 14.056,
            "avgDollarVolume10d": 418496684,
            "maxSelectedCorrelation": 0.457
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.623,
            "participation": -2.459,
            "volatility": -1.243,
            "gap": 0.092,
            "correlation": 0.457,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 64,
          "previousRank": 43,
          "rankChange": -21,
          "rankChangeLabel": "-21",
          "status": "WATCH",
          "quantScore": -0.272,
          "metrics": {
            "momentum5d": 0.048,
            "momentum20d": -2.295,
            "realizedVol10dAnnualized": 13.04,
            "volumeRatio": 0.934,
            "atrPct": 2.008,
            "gapPct": 0.068,
            "relativeStrength5dPct": -1.156,
            "relativeStrength20dPct": -2.51,
            "avgDollarVolume10d": 1549997140,
            "maxSelectedCorrelation": 0.505
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.213,
            "participation": 0.311,
            "volatility": -0.622,
            "gap": 0.003,
            "correlation": 0.505,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 65,
          "previousRank": 66,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.283,
          "metrics": {
            "momentum5d": 0.065,
            "momentum20d": -0.204,
            "realizedVol10dAnnualized": 17.49,
            "volumeRatio": 0.87,
            "atrPct": 1.574,
            "gapPct": -0.071,
            "relativeStrength5dPct": -1.139,
            "relativeStrength20dPct": -0.419,
            "avgDollarVolume10d": 2305216791,
            "maxSelectedCorrelation": 0.611
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.142,
            "participation": 0.031,
            "volatility": -0.725,
            "gap": 0.191,
            "correlation": 0.611,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 66,
          "previousRank": 68,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.284,
          "metrics": {
            "momentum5d": 1.303,
            "momentum20d": -5.186,
            "realizedVol10dAnnualized": 11.89,
            "volumeRatio": 0.977,
            "atrPct": 1.336,
            "gapPct": -0.245,
            "relativeStrength5dPct": 0.098,
            "relativeStrength20dPct": -5.401,
            "avgDollarVolume10d": 761290677,
            "maxSelectedCorrelation": 0.697
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.094,
            "participation": 0.499,
            "volatility": -1.013,
            "gap": 0.436,
            "correlation": 0.697,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 67,
          "previousRank": 58,
          "rankChange": -9,
          "rankChangeLabel": "-9",
          "status": "REJECT",
          "quantScore": -0.296,
          "metrics": {
            "momentum5d": 1.749,
            "momentum20d": -5.61,
            "realizedVol10dAnnualized": 13.62,
            "volumeRatio": 0.846,
            "atrPct": 1.439,
            "gapPct": 0.036,
            "relativeStrength5dPct": 0.544,
            "relativeStrength20dPct": -5.825,
            "avgDollarVolume10d": 545984863,
            "maxSelectedCorrelation": 0.812
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.033,
            "participation": -0.072,
            "volatility": -0.908,
            "gap": 0.042,
            "correlation": 0.812,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 68,
          "previousRank": 69,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.317,
          "metrics": {
            "momentum5d": -0.346,
            "momentum20d": -11.252,
            "realizedVol10dAnnualized": 31.41,
            "volumeRatio": 0.756,
            "atrPct": 2.403,
            "gapPct": 0.207,
            "relativeStrength5dPct": -1.55,
            "relativeStrength20dPct": -11.467,
            "avgDollarVolume10d": 871571663,
            "maxSelectedCorrelation": 0.324
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.572,
            "participation": -0.468,
            "volatility": 0.116,
            "gap": 0.198,
            "correlation": 0.324,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 69,
          "previousRank": 70,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.317,
          "metrics": {
            "momentum5d": -1.628,
            "momentum20d": 1.426,
            "realizedVol10dAnnualized": 18.44,
            "volumeRatio": 0.9,
            "atrPct": 1.95,
            "gapPct": -0.261,
            "relativeStrength5dPct": -2.833,
            "relativeStrength20dPct": 1.211,
            "avgDollarVolume10d": 11728693913,
            "maxSelectedCorrelation": 0.553
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.377,
            "participation": 0.162,
            "volatility": -0.498,
            "gap": 0.458,
            "correlation": 0.553,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 70,
          "previousRank": 81,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.32,
          "metrics": {
            "momentum5d": -0.24,
            "momentum20d": -10.242,
            "realizedVol10dAnnualized": 24.8,
            "volumeRatio": 0.98,
            "atrPct": 1.986,
            "gapPct": 0.004,
            "relativeStrength5dPct": -1.444,
            "relativeStrength20dPct": -10.456,
            "avgDollarVolume10d": 1623762083,
            "maxSelectedCorrelation": 0.738
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.521,
            "participation": 0.513,
            "volatility": -0.296,
            "gap": 0.086,
            "correlation": 0.738,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 71,
          "previousRank": 73,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.321,
          "metrics": {
            "momentum5d": -0.882,
            "momentum20d": -10.764,
            "realizedVol10dAnnualized": 12.97,
            "volumeRatio": 1.396,
            "atrPct": 1.933,
            "gapPct": 0.053,
            "relativeStrength5dPct": -2.086,
            "relativeStrength20dPct": -10.978,
            "avgDollarVolume10d": 674941260,
            "maxSelectedCorrelation": 0.581
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.647,
            "participation": 2.332,
            "volatility": -0.664,
            "gap": 0.018,
            "correlation": 0.581,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 72,
          "previousRank": 54,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": -0.322,
          "metrics": {
            "momentum5d": -1.072,
            "momentum20d": -1.758,
            "realizedVol10dAnnualized": 25.48,
            "volumeRatio": 0.592,
            "atrPct": 2.471,
            "gapPct": 0.274,
            "relativeStrength5dPct": -2.276,
            "relativeStrength20dPct": -1.973,
            "avgDollarVolume10d": 871210348,
            "maxSelectedCorrelation": 0.532
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.386,
            "participation": -1.186,
            "volatility": -0.018,
            "gap": 0.291,
            "correlation": 0.532,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 73,
          "previousRank": 76,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.323,
          "metrics": {
            "momentum5d": 1.204,
            "momentum20d": 0.215,
            "realizedVol10dAnnualized": 7.91,
            "volumeRatio": 0.95,
            "atrPct": 0.945,
            "gapPct": 0.006,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 34939619165,
            "maxSelectedCorrelation": 0.738
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.065,
            "participation": 0.381,
            "volatility": -1.335,
            "gap": 0.083,
            "correlation": 0.738,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 74,
          "previousRank": 55,
          "rankChange": -19,
          "rankChangeLabel": "-19",
          "status": "WATCH",
          "quantScore": -0.331,
          "metrics": {
            "momentum5d": 1.046,
            "momentum20d": -9.255,
            "realizedVol10dAnnualized": 17.8,
            "volumeRatio": 0.833,
            "atrPct": 1.743,
            "gapPct": -0.208,
            "relativeStrength5dPct": -0.158,
            "relativeStrength20dPct": -9.47,
            "avgDollarVolume10d": 1103048448,
            "maxSelectedCorrelation": 0.673
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.27,
            "participation": -0.13,
            "volatility": -0.627,
            "gap": 0.384,
            "correlation": 0.673,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 75,
          "previousRank": 67,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.332,
          "metrics": {
            "momentum5d": 1.2,
            "momentum20d": -4.001,
            "realizedVol10dAnnualized": 12.15,
            "volumeRatio": 0.864,
            "atrPct": 1.36,
            "gapPct": 0.153,
            "relativeStrength5dPct": -0.004,
            "relativeStrength20dPct": -4.216,
            "avgDollarVolume10d": 7198770275,
            "maxSelectedCorrelation": 0.64
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.073,
            "participation": 0.004,
            "volatility": -0.993,
            "gap": 0.122,
            "correlation": 0.64,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 76,
          "previousRank": 77,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "REJECT",
          "quantScore": -0.339,
          "metrics": {
            "momentum5d": 0.782,
            "momentum20d": -2.555,
            "realizedVol10dAnnualized": 11.97,
            "volumeRatio": 0.856,
            "atrPct": 1.354,
            "gapPct": -0.182,
            "relativeStrength5dPct": -0.422,
            "relativeStrength20dPct": -2.77,
            "avgDollarVolume10d": 1274499811,
            "maxSelectedCorrelation": 0.817
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.097,
            "participation": -0.029,
            "volatility": -1.001,
            "gap": 0.348,
            "correlation": 0.817,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 77,
          "previousRank": 57,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.37,
          "metrics": {
            "momentum5d": 1.834,
            "momentum20d": -7.111,
            "realizedVol10dAnnualized": 13.78,
            "volumeRatio": 0.729,
            "atrPct": 1.401,
            "gapPct": 0.1,
            "relativeStrength5dPct": 0.63,
            "relativeStrength20dPct": -7.326,
            "avgDollarVolume10d": 1614024223,
            "maxSelectedCorrelation": 0.78
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.067,
            "participation": -0.587,
            "volatility": -0.924,
            "gap": 0.049,
            "correlation": 0.78,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 78,
          "previousRank": 101,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": -0.376,
          "metrics": {
            "momentum5d": -3.739,
            "momentum20d": -8.138,
            "realizedVol10dAnnualized": 20.1,
            "volumeRatio": 1.373,
            "atrPct": 2.557,
            "gapPct": -0.139,
            "relativeStrength5dPct": -4.944,
            "relativeStrength20dPct": -8.353,
            "avgDollarVolume10d": 1251977868,
            "maxSelectedCorrelation": 0.523
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.046,
            "participation": 2.233,
            "volatility": -0.127,
            "gap": 0.287,
            "correlation": 0.523,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 79,
          "previousRank": 97,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": -0.388,
          "metrics": {
            "momentum5d": 0.061,
            "momentum20d": -5.929,
            "realizedVol10dAnnualized": 14.51,
            "volumeRatio": 0.917,
            "atrPct": 1.596,
            "gapPct": -0.061,
            "relativeStrength5dPct": -1.144,
            "relativeStrength20dPct": -6.144,
            "avgDollarVolume10d": 648925695,
            "maxSelectedCorrelation": 0.593
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.329,
            "participation": 0.239,
            "volatility": -0.799,
            "gap": 0.178,
            "correlation": 0.593,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 80,
          "previousRank": 75,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.398,
          "metrics": {
            "momentum5d": -3.516,
            "momentum20d": -1.421,
            "realizedVol10dAnnualized": 20.06,
            "volumeRatio": 0.878,
            "atrPct": 2.709,
            "gapPct": 0.692,
            "relativeStrength5dPct": -4.721,
            "relativeStrength20dPct": -1.636,
            "avgDollarVolume10d": 2536183177,
            "maxSelectedCorrelation": 0.411
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.79,
            "participation": 0.065,
            "volatility": -0.047,
            "gap": 0.878,
            "correlation": 0.411,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 81,
          "previousRank": 64,
          "rankChange": -17,
          "rankChangeLabel": "-17",
          "status": "WATCH",
          "quantScore": -0.411,
          "metrics": {
            "momentum5d": 0.313,
            "momentum20d": 13.264,
            "realizedVol10dAnnualized": 12.19,
            "volumeRatio": 0.428,
            "atrPct": 0.646,
            "gapPct": 0,
            "relativeStrength5dPct": -0.892,
            "relativeStrength20dPct": 13.049,
            "avgDollarVolume10d": 196946539,
            "maxSelectedCorrelation": 0.363
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.338,
            "participation": -1.903,
            "volatility": -1.372,
            "gap": 0.092,
            "correlation": 0.363,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 82,
          "previousRank": 104,
          "rankChange": 22,
          "rankChangeLabel": "+22",
          "status": "WATCH",
          "quantScore": -0.432,
          "metrics": {
            "momentum5d": -0.646,
            "momentum20d": -3.606,
            "realizedVol10dAnnualized": 20.46,
            "volumeRatio": 0.729,
            "atrPct": 1.677,
            "gapPct": -0.04,
            "relativeStrength5dPct": -1.85,
            "relativeStrength20dPct": -3.821,
            "avgDollarVolume10d": 1701561423,
            "maxSelectedCorrelation": 0.315
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.374,
            "participation": -0.586,
            "volatility": -0.586,
            "gap": 0.148,
            "correlation": 0.315,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 83,
          "previousRank": 63,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.437,
          "metrics": {
            "momentum5d": -3.434,
            "momentum20d": -6.719,
            "realizedVol10dAnnualized": 15.42,
            "volumeRatio": 1.225,
            "atrPct": 2.312,
            "gapPct": -0.558,
            "relativeStrength5dPct": -4.638,
            "relativeStrength20dPct": -6.934,
            "avgDollarVolume10d": 568767884,
            "maxSelectedCorrelation": 0.187
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.948,
            "participation": 1.583,
            "volatility": -0.392,
            "gap": 0.874,
            "correlation": 0.187,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 84,
          "previousRank": 71,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.444,
          "metrics": {
            "momentum5d": 0.379,
            "momentum20d": -6.227,
            "realizedVol10dAnnualized": 10.48,
            "volumeRatio": 0.938,
            "atrPct": 1.234,
            "gapPct": -0.114,
            "relativeStrength5dPct": -0.825,
            "relativeStrength20dPct": -6.442,
            "avgDollarVolume10d": 465890185,
            "maxSelectedCorrelation": 0.575
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.285,
            "participation": 0.328,
            "volatility": -1.108,
            "gap": 0.252,
            "correlation": 0.575,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 85,
          "previousRank": 103,
          "rankChange": 18,
          "rankChangeLabel": "+18",
          "status": "WATCH",
          "quantScore": -0.444,
          "metrics": {
            "momentum5d": -1.875,
            "momentum20d": -3.313,
            "realizedVol10dAnnualized": 22.14,
            "volumeRatio": 0.75,
            "atrPct": 1.995,
            "gapPct": -0.372,
            "relativeStrength5dPct": -3.079,
            "relativeStrength20dPct": -3.528,
            "avgDollarVolume10d": 876697056,
            "maxSelectedCorrelation": 0.413
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.573,
            "participation": -0.494,
            "volatility": -0.368,
            "gap": 0.613,
            "correlation": 0.413,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 86,
          "previousRank": 90,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.457,
          "metrics": {
            "momentum5d": -0.754,
            "momentum20d": -7.822,
            "realizedVol10dAnnualized": 17.2,
            "volumeRatio": 0.805,
            "atrPct": 1.987,
            "gapPct": -0.132,
            "relativeStrength5dPct": -1.958,
            "relativeStrength20dPct": -8.037,
            "avgDollarVolume10d": 1100658767,
            "maxSelectedCorrelation": 0.306
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.529,
            "participation": -0.253,
            "volatility": -0.514,
            "gap": 0.277,
            "correlation": 0.306,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 87,
          "previousRank": 91,
          "rankChange": 4,
          "rankChangeLabel": "+4",
          "status": "WATCH",
          "quantScore": -0.481,
          "metrics": {
            "momentum5d": -2.102,
            "momentum20d": -6.942,
            "realizedVol10dAnnualized": 19.66,
            "volumeRatio": 0.693,
            "atrPct": 2.47,
            "gapPct": 0.786,
            "relativeStrength5dPct": -3.306,
            "relativeStrength20dPct": -7.157,
            "avgDollarVolume10d": 1172144638,
            "maxSelectedCorrelation": 0.468
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.729,
            "participation": -0.742,
            "volatility": -0.185,
            "gap": 1.01,
            "correlation": 0.468,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 88,
          "previousRank": 96,
          "rankChange": 8,
          "rankChangeLabel": "+8",
          "status": "WATCH",
          "quantScore": -0.49,
          "metrics": {
            "momentum5d": 0.434,
            "momentum20d": -7.476,
            "realizedVol10dAnnualized": 22.31,
            "volumeRatio": 0.467,
            "atrPct": 1.743,
            "gapPct": 0.147,
            "relativeStrength5dPct": -0.77,
            "relativeStrength20dPct": -7.691,
            "avgDollarVolume10d": 2965177347,
            "maxSelectedCorrelation": 0.635
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.316,
            "participation": -1.729,
            "volatility": -0.497,
            "gap": 0.114,
            "correlation": 0.635,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 89,
          "previousRank": 82,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.506,
          "metrics": {
            "momentum5d": -0.372,
            "momentum20d": -4.623,
            "realizedVol10dAnnualized": 8.52,
            "volumeRatio": 1.001,
            "atrPct": 1.026,
            "gapPct": -0.143,
            "relativeStrength5dPct": -1.576,
            "relativeStrength20dPct": -4.837,
            "avgDollarVolume10d": 1658949571,
            "maxSelectedCorrelation": 0.756
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.36,
            "participation": 0.604,
            "volatility": -1.275,
            "gap": 0.292,
            "correlation": 0.756,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 90,
          "previousRank": 102,
          "rankChange": 12,
          "rankChangeLabel": "+12",
          "status": "WATCH",
          "quantScore": -0.513,
          "metrics": {
            "momentum5d": -1.858,
            "momentum20d": -15.684,
            "realizedVol10dAnnualized": 22.02,
            "volumeRatio": 0.786,
            "atrPct": 2.887,
            "gapPct": 0.413,
            "relativeStrength5dPct": -3.062,
            "relativeStrength20dPct": -15.898,
            "avgDollarVolume10d": 522726518,
            "maxSelectedCorrelation": 0.639
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.973,
            "participation": -0.338,
            "volatility": 0.104,
            "gap": 0.487,
            "correlation": 0.639,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 91,
          "previousRank": 114,
          "rankChange": 23,
          "rankChangeLabel": "+23",
          "status": "WATCH",
          "quantScore": -0.523,
          "metrics": {
            "momentum5d": -2.35,
            "momentum20d": -12.419,
            "realizedVol10dAnnualized": 25.58,
            "volumeRatio": 0.529,
            "atrPct": 3.111,
            "gapPct": 0.739,
            "relativeStrength5dPct": -3.554,
            "relativeStrength20dPct": -12.634,
            "avgDollarVolume10d": 659564476,
            "maxSelectedCorrelation": 0.36
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.95,
            "participation": -1.459,
            "volatility": 0.326,
            "gap": 0.943,
            "correlation": 0.36,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 92,
          "previousRank": 85,
          "rankChange": -7,
          "rankChangeLabel": "-7",
          "status": "WATCH",
          "quantScore": -0.526,
          "metrics": {
            "momentum5d": -2.214,
            "momentum20d": -4.939,
            "realizedVol10dAnnualized": 12.42,
            "volumeRatio": 0.895,
            "atrPct": 2.158,
            "gapPct": 0.123,
            "relativeStrength5dPct": -3.418,
            "relativeStrength20dPct": -5.153,
            "avgDollarVolume10d": 566716323,
            "maxSelectedCorrelation": 0.502
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.683,
            "participation": 0.139,
            "volatility": -0.56,
            "gap": 0.08,
            "correlation": 0.502,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 93,
          "previousRank": 83,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.53,
          "metrics": {
            "momentum5d": -3.366,
            "momentum20d": -3.09,
            "realizedVol10dAnnualized": 24.97,
            "volumeRatio": 0.808,
            "atrPct": 1.982,
            "gapPct": -0.403,
            "relativeStrength5dPct": -4.57,
            "relativeStrength20dPct": -3.305,
            "avgDollarVolume10d": 2375965765,
            "maxSelectedCorrelation": 0.324
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.819,
            "participation": -0.241,
            "volatility": -0.294,
            "gap": 0.657,
            "correlation": 0.324,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 94,
          "previousRank": 74,
          "rankChange": -20,
          "rankChangeLabel": "-20",
          "status": "WATCH",
          "quantScore": -0.555,
          "metrics": {
            "momentum5d": -0.227,
            "momentum20d": -5.984,
            "realizedVol10dAnnualized": 15.04,
            "volumeRatio": 0.498,
            "atrPct": 1.872,
            "gapPct": 0,
            "relativeStrength5dPct": -1.431,
            "relativeStrength20dPct": -6.198,
            "avgDollarVolume10d": 1196879874,
            "maxSelectedCorrelation": 0.633
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.38,
            "participation": -1.596,
            "volatility": -0.637,
            "gap": 0.092,
            "correlation": 0.633,
            "regimeFit": null
          }
        },
        {
          "symbol": "JPM",
          "rank": 95,
          "previousRank": 98,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "WATCH",
          "quantScore": -0.56,
          "metrics": {
            "momentum5d": -1.251,
            "momentum20d": -8.198,
            "realizedVol10dAnnualized": 20.56,
            "volumeRatio": 0.64,
            "atrPct": 1.937,
            "gapPct": 0.28,
            "relativeStrength5dPct": -2.455,
            "relativeStrength20dPct": -8.412,
            "avgDollarVolume10d": 2790356731,
            "maxSelectedCorrelation": 0.473
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.626,
            "participation": -0.975,
            "volatility": -0.444,
            "gap": 0.3,
            "correlation": 0.473,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 96,
          "previousRank": 99,
          "rankChange": 3,
          "rankChangeLabel": "+3",
          "status": "REJECT",
          "quantScore": -0.564,
          "metrics": {
            "momentum5d": -2.491,
            "momentum20d": -13.919,
            "realizedVol10dAnnualized": 16.28,
            "volumeRatio": 0.979,
            "atrPct": 2.593,
            "gapPct": -0.123,
            "relativeStrength5dPct": -3.695,
            "relativeStrength20dPct": -14.134,
            "avgDollarVolume10d": 1794362566,
            "maxSelectedCorrelation": 0.818
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.023,
            "participation": 0.507,
            "volatility": -0.217,
            "gap": 0.265,
            "correlation": 0.818,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 97,
          "previousRank": 79,
          "rankChange": -18,
          "rankChangeLabel": "-18",
          "status": "WATCH",
          "quantScore": -0.578,
          "metrics": {
            "momentum5d": -2.285,
            "momentum20d": -5.115,
            "realizedVol10dAnnualized": 10.26,
            "volumeRatio": 1.135,
            "atrPct": 1.202,
            "gapPct": -0.325,
            "relativeStrength5dPct": -3.489,
            "relativeStrength20dPct": -5.33,
            "avgDollarVolume10d": 64077076,
            "maxSelectedCorrelation": 0.316
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.701,
            "participation": 1.192,
            "volatility": -1.132,
            "gap": 0.548,
            "correlation": 0.316,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 98,
          "previousRank": 92,
          "rankChange": -6,
          "rankChangeLabel": "-6",
          "status": "WATCH",
          "quantScore": -0.579,
          "metrics": {
            "momentum5d": -1.774,
            "momentum20d": -8.806,
            "realizedVol10dAnnualized": 12.21,
            "volumeRatio": 0.908,
            "atrPct": 1.873,
            "gapPct": -0.227,
            "relativeStrength5dPct": -2.979,
            "relativeStrength20dPct": -9.021,
            "avgDollarVolume10d": 700450320,
            "maxSelectedCorrelation": 0.628
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.735,
            "participation": 0.199,
            "volatility": -0.718,
            "gap": 0.411,
            "correlation": 0.628,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 99,
          "previousRank": 109,
          "rankChange": 10,
          "rankChangeLabel": "+10",
          "status": "WATCH",
          "quantScore": -0.589,
          "metrics": {
            "momentum5d": -1.644,
            "momentum20d": -8.09,
            "realizedVol10dAnnualized": 7.9,
            "volumeRatio": 1.161,
            "atrPct": 1.251,
            "gapPct": -0.098,
            "relativeStrength5dPct": -2.849,
            "relativeStrength20dPct": -8.305,
            "avgDollarVolume10d": 290580223,
            "maxSelectedCorrelation": 0.544
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.689,
            "participation": 1.307,
            "volatility": -1.173,
            "gap": 0.23,
            "correlation": 0.544,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 100,
          "previousRank": 86,
          "rankChange": -14,
          "rankChangeLabel": "-14",
          "status": "WATCH",
          "quantScore": -0.593,
          "metrics": {
            "momentum5d": 0.658,
            "momentum20d": -4.058,
            "realizedVol10dAnnualized": 8.04,
            "volumeRatio": 0.639,
            "atrPct": 0.925,
            "gapPct": 0.067,
            "relativeStrength5dPct": -0.546,
            "relativeStrength20dPct": -4.273,
            "avgDollarVolume10d": 1626833680,
            "maxSelectedCorrelation": 0.705
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.167,
            "participation": -0.98,
            "volatility": -1.342,
            "gap": 0.001,
            "correlation": 0.705,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 101,
          "previousRank": 115,
          "rankChange": 14,
          "rankChangeLabel": "+14",
          "status": "WATCH",
          "quantScore": -0.616,
          "metrics": {
            "momentum5d": -2.499,
            "momentum20d": -18.35,
            "realizedVol10dAnnualized": 20.54,
            "volumeRatio": 0.944,
            "atrPct": 2.681,
            "gapPct": -0.015,
            "relativeStrength5dPct": -3.703,
            "relativeStrength20dPct": -18.565,
            "avgDollarVolume10d": 2361976200,
            "maxSelectedCorrelation": 0.241
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.168,
            "participation": 0.354,
            "volatility": -0.048,
            "gap": 0.113,
            "correlation": 0.241,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 102,
          "previousRank": 87,
          "rankChange": -15,
          "rankChangeLabel": "-15",
          "status": "WATCH",
          "quantScore": -0.631,
          "metrics": {
            "momentum5d": -1.782,
            "momentum20d": -12.415,
            "realizedVol10dAnnualized": 18.33,
            "volumeRatio": 0.676,
            "atrPct": 2.324,
            "gapPct": 0.215,
            "relativeStrength5dPct": -2.986,
            "relativeStrength20dPct": -12.63,
            "avgDollarVolume10d": 1102508621,
            "maxSelectedCorrelation": 0.493
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.853,
            "participation": -0.818,
            "volatility": -0.301,
            "gap": 0.21,
            "correlation": 0.493,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 103,
          "previousRank": 112,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.652,
          "metrics": {
            "momentum5d": -0.572,
            "momentum20d": -7.992,
            "realizedVol10dAnnualized": 12.73,
            "volumeRatio": 0.653,
            "atrPct": 1.399,
            "gapPct": 0.019,
            "relativeStrength5dPct": -1.776,
            "relativeStrength20dPct": -8.207,
            "avgDollarVolume10d": 2261879751,
            "maxSelectedCorrelation": 0.342
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.504,
            "participation": -0.919,
            "volatility": -0.955,
            "gap": 0.066,
            "correlation": 0.342,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 104,
          "previousRank": 106,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.662,
          "metrics": {
            "momentum5d": -2.271,
            "momentum20d": -3.4,
            "realizedVol10dAnnualized": 11.79,
            "volumeRatio": 0.823,
            "atrPct": 1.344,
            "gapPct": -0.108,
            "relativeStrength5dPct": -3.476,
            "relativeStrength20dPct": -3.614,
            "avgDollarVolume10d": 1357203290,
            "maxSelectedCorrelation": 0.468
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.643,
            "participation": -0.174,
            "volatility": -1.012,
            "gap": 0.244,
            "correlation": 0.468,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 105,
          "previousRank": 116,
          "rankChange": 11,
          "rankChangeLabel": "+11",
          "status": "WATCH",
          "quantScore": -0.665,
          "metrics": {
            "momentum5d": -2.65,
            "momentum20d": -14.34,
            "realizedVol10dAnnualized": 18.96,
            "volumeRatio": 0.92,
            "atrPct": 1.991,
            "gapPct": 0.54,
            "relativeStrength5dPct": -3.854,
            "relativeStrength20dPct": -14.555,
            "avgDollarVolume10d": 2032733340,
            "maxSelectedCorrelation": 0.414
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.063,
            "participation": 0.252,
            "volatility": -0.461,
            "gap": 0.664,
            "correlation": 0.414,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 106,
          "previousRank": 93,
          "rankChange": -13,
          "rankChangeLabel": "-13",
          "status": "WATCH",
          "quantScore": -0.682,
          "metrics": {
            "momentum5d": -4.561,
            "momentum20d": -4.859,
            "realizedVol10dAnnualized": 14.54,
            "volumeRatio": 1.048,
            "atrPct": 1.772,
            "gapPct": -0.54,
            "relativeStrength5dPct": -5.766,
            "relativeStrength20dPct": -5.074,
            "avgDollarVolume10d": 858949084,
            "maxSelectedCorrelation": 0.306
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.079,
            "participation": 0.809,
            "volatility": -0.705,
            "gap": 0.849,
            "correlation": 0.306,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 107,
          "previousRank": 105,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.687,
          "metrics": {
            "momentum5d": -3.015,
            "momentum20d": -11.608,
            "realizedVol10dAnnualized": 21.94,
            "volumeRatio": 0.716,
            "atrPct": 2.286,
            "gapPct": 0.244,
            "relativeStrength5dPct": -4.219,
            "relativeStrength20dPct": -11.822,
            "avgDollarVolume10d": 1607730937,
            "maxSelectedCorrelation": 0.651
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.036,
            "participation": -0.642,
            "volatility": -0.218,
            "gap": 0.25,
            "correlation": 0.651,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 108,
          "previousRank": 108,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.699,
          "metrics": {
            "momentum5d": -1.507,
            "momentum20d": -4.95,
            "realizedVol10dAnnualized": 11.48,
            "volumeRatio": 0.736,
            "atrPct": 1.135,
            "gapPct": -0.025,
            "relativeStrength5dPct": -2.711,
            "relativeStrength20dPct": -5.164,
            "avgDollarVolume10d": 906262226,
            "maxSelectedCorrelation": 0.449
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.564,
            "participation": -0.556,
            "volatility": -1.132,
            "gap": 0.127,
            "correlation": 0.449,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 109,
          "previousRank": 78,
          "rankChange": -31,
          "rankChangeLabel": "-31",
          "status": "WATCH",
          "quantScore": -0.706,
          "metrics": {
            "momentum5d": -6.154,
            "momentum20d": -8.402,
            "realizedVol10dAnnualized": 22.12,
            "volumeRatio": 1.086,
            "atrPct": 2.475,
            "gapPct": -0.437,
            "relativeStrength5dPct": -7.358,
            "relativeStrength20dPct": -8.617,
            "avgDollarVolume10d": 1292051032,
            "maxSelectedCorrelation": 0.475
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.465,
            "participation": 0.977,
            "volatility": -0.112,
            "gap": 0.704,
            "correlation": 0.475,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 110,
          "previousRank": 100,
          "rankChange": -10,
          "rankChangeLabel": "-10",
          "status": "WATCH",
          "quantScore": -0.725,
          "metrics": {
            "momentum5d": -0.625,
            "momentum20d": -3.479,
            "realizedVol10dAnnualized": 6.06,
            "volumeRatio": 0.67,
            "atrPct": 0.703,
            "gapPct": -0.157,
            "relativeStrength5dPct": -1.829,
            "relativeStrength20dPct": -3.693,
            "avgDollarVolume10d": 4264971424,
            "maxSelectedCorrelation": 0.576
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.366,
            "participation": -0.843,
            "volatility": -1.518,
            "gap": 0.312,
            "correlation": 0.576,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 111,
          "previousRank": 113,
          "rankChange": 2,
          "rankChangeLabel": "+2",
          "status": "WATCH",
          "quantScore": -0.747,
          "metrics": {
            "momentum5d": -4.348,
            "momentum20d": -11.095,
            "realizedVol10dAnnualized": 20.86,
            "volumeRatio": 0.776,
            "atrPct": 2.382,
            "gapPct": -0.442,
            "relativeStrength5dPct": -5.553,
            "relativeStrength20dPct": -11.309,
            "avgDollarVolume10d": 614360290,
            "maxSelectedCorrelation": 0.637
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.246,
            "participation": -0.379,
            "volatility": -0.198,
            "gap": 0.712,
            "correlation": 0.637,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 112,
          "previousRank": 37,
          "rankChange": -75,
          "rankChangeLabel": "-75",
          "status": "WATCH",
          "quantScore": -0.752,
          "metrics": {
            "momentum5d": -6.678,
            "momentum20d": -12.407,
            "realizedVol10dAnnualized": 21.13,
            "volumeRatio": 0.974,
            "atrPct": 3.433,
            "gapPct": -0.148,
            "relativeStrength5dPct": -7.882,
            "relativeStrength20dPct": -12.621,
            "avgDollarVolume10d": 1955548172,
            "maxSelectedCorrelation": 0.722
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.684,
            "participation": 0.486,
            "volatility": 0.37,
            "gap": 0.299,
            "correlation": 0.722,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 113,
          "previousRank": 110,
          "rankChange": -3,
          "rankChangeLabel": "-3",
          "status": "WATCH",
          "quantScore": -0.782,
          "metrics": {
            "momentum5d": -1.921,
            "momentum20d": -6.044,
            "realizedVol10dAnnualized": 7.79,
            "volumeRatio": 0.685,
            "atrPct": 1.142,
            "gapPct": -0.413,
            "relativeStrength5dPct": -3.125,
            "relativeStrength20dPct": -6.258,
            "avgDollarVolume10d": 4662807037,
            "maxSelectedCorrelation": 0.697
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.669,
            "participation": -0.776,
            "volatility": -1.234,
            "gap": 0.671,
            "correlation": 0.697,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 114,
          "previousRank": 59,
          "rankChange": -55,
          "rankChangeLabel": "-55",
          "status": "WATCH",
          "quantScore": -0.791,
          "metrics": {
            "momentum5d": -5.87,
            "momentum20d": -9.869,
            "realizedVol10dAnnualized": 23.39,
            "volumeRatio": 0.93,
            "atrPct": 2.372,
            "gapPct": 0.414,
            "relativeStrength5dPct": -7.074,
            "relativeStrength20dPct": -10.083,
            "avgDollarVolume10d": 503610098,
            "maxSelectedCorrelation": 0.42
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.464,
            "participation": 0.296,
            "volatility": -0.131,
            "gap": 0.488,
            "correlation": 0.42,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 115,
          "previousRank": 107,
          "rankChange": -8,
          "rankChangeLabel": "-8",
          "status": "WATCH",
          "quantScore": -0.9,
          "metrics": {
            "momentum5d": -6.994,
            "momentum20d": -9.158,
            "realizedVol10dAnnualized": 14.19,
            "volumeRatio": 1.306,
            "atrPct": 1.847,
            "gapPct": -0.012,
            "relativeStrength5dPct": -8.198,
            "relativeStrength20dPct": -9.373,
            "avgDollarVolume10d": 1798913987,
            "maxSelectedCorrelation": 0.583
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.632,
            "participation": 1.941,
            "volatility": -0.675,
            "gap": 0.109,
            "correlation": 0.583,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 116,
          "previousRank": 111,
          "rankChange": -5,
          "rankChangeLabel": "-5",
          "status": "WATCH",
          "quantScore": -0.919,
          "metrics": {
            "momentum5d": -0.722,
            "momentum20d": -2.815,
            "realizedVol10dAnnualized": 3.74,
            "volumeRatio": 0.367,
            "atrPct": 0.487,
            "gapPct": -0.026,
            "relativeStrength5dPct": -1.926,
            "relativeStrength20dPct": -3.03,
            "avgDollarVolume10d": 6192490863,
            "maxSelectedCorrelation": 0.638
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.361,
            "participation": -2.167,
            "volatility": -1.699,
            "gap": 0.129,
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
            "momentum5d": 6.923,
            "momentum20d": -9.348,
            "realizedVol10dAnnualized": 40.5,
            "volumeRatio": 0.862,
            "atrPct": 5.781,
            "gapPct": 0,
            "relativeStrength5dPct": 5.719,
            "relativeStrength20dPct": -9.563,
            "avgDollarVolume10d": 36708344,
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
            "momentum5d": -2.089,
            "momentum20d": -6.079,
            "realizedVol10dAnnualized": 14.55,
            "volumeRatio": 0.761,
            "atrPct": 1.349,
            "gapPct": -0.484,
            "relativeStrength5dPct": -3.293,
            "relativeStrength20dPct": -6.294,
            "avgDollarVolume10d": 39937838,
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
            "momentum5d": -4.545,
            "momentum20d": -8.636,
            "realizedVol10dAnnualized": 15.68,
            "volumeRatio": 1.226,
            "atrPct": 1.576,
            "gapPct": -1.468,
            "relativeStrength5dPct": -5.75,
            "relativeStrength20dPct": -8.85,
            "avgDollarVolume10d": 14175586,
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
            "triggeredAt": "2026-10-05T17:30:00.000Z"
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
            "selectionPrice": 307.489990234375
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
            "triggeredAt": "2026-10-05T13:30:00.000Z"
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
              "d1": 0.27
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
              "d1": 1.191
            },
            "selectionPrice": 84.88999938964844,
            "triggeredAt": "2026-10-05T17:30:00.000Z"
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
              "d1": -1.529
            },
            "selectionPrice": 307.489990234375
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
              "d1": -0.346
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
              "d1": -1.937
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z"
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
              "d1": 1.951
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
              "d1": 2.076
            },
            "selectionPrice": 84.88999938964844,
            "triggeredAt": "2026-10-05T17:30:00.000Z"
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
              "d1": -0.246
            },
            "selectionPrice": 307.489990234375
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
              "d1": -0.793
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
              "d1": 0.94
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z"
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
              "h4": 0.654
            },
            "selectionPrice": 85.93000030517578
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
              "h4": -0.334
            },
            "selectionPrice": 302.8999938964844
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
              "h4": 0.859
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
              "h4": 0.54
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
              "h4": -0.121
            },
            "selectionPrice": 542.280029296875,
            "invalidatedAt": "2026-10-06T13:30:00.000Z"
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-07T11:58:35.354Z"
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
            }
          },
          "pending": {},
          "recent": []
        }
      }
    },
    "monitor": {
      "lastRunAt": "2026-10-07T11:58:38.754Z",
      "status": "OK",
      "priceTimes": {
        "ON": "2026-10-06T20:00:00.000Z",
        "MSTR": "2026-10-06T20:00:00.000Z",
        "HPE": "2026-10-06T20:00:00.000Z",
        "SHOP": "2026-10-06T20:00:00.000Z"
      },
      "fxUsdPerEur": 1.11831796169281,
      "fxAt": "2026-10-07T11:57:51.000Z",
      "decisionStatus": "BLOCKED_BUDGET",
      "reason": "MONTHLY_BUDGET_EXHAUSTED"
    }
  }
};
