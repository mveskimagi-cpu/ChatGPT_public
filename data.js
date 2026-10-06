window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-06 10:08 UTC",
    "lastTrade": "2026-10-05 18:46 UTC",
    "marketSource": "NVDA paper SELL: Google Finance last trade $230.55 at 2026-09-30 10:51:23 GMT-4 (17:51:23 Europe/Tallinn), after a $232.37 intraday high. EUR/USD 1.1358 USD per EUR from Investing.com real-time 1.1357/1.1359 bid/ask midpoint, raw time 11:04:37. See trade.execution and strategyState.latestReview.",
    "note": "Paper trading only — no real money is traded."
  },
  "automationConfig": {
    "schemaVersion": 1,
    "decision": {
      "model": "gpt-5.6-terra",
      "reasoningEffort": "medium",
      "promptCacheTtl": "30m",
      "maxBuyEur": 250,
      "positionReviewMovePct": 2,
      "watchlistMaterialMovePct": 2,
      "positionReevaluationMinutes": 60,
      "watchlistReevaluationMinutes": 240
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
    "value": 1000.2,
    "cash": 648.57,
    "realized": -1.43,
    "unrealized": 1.63,
    "total": 0.2,
    "totalPct": 0.02
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 85.93000030517578,
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
      "value": 201.44,
      "pnl": 1.44,
      "pnlPct": 0.72,
      "fxUsdPerEur": 1.125112533569336
    },
    {
      "symbol": "MSTR",
      "qty": 1.02771459,
      "avgUsd": 163.6999969482422,
      "lastUsd": 164.42999267578125,
      "costEur": 150,
      "entryReason": "MSTR has a fresh confirmed 5-minute breakout above the $163.17 entry level: completed close was $163.53 with participation at 1.084x baseline, and the latest quote remains above trigger at $163.70. The daily selection data retain strong 20-day momentum (+29.9%) and above-baseline volume (1.55x). Size is reduced due to high realized volatility (57%), relatively high selected correlation (0.66), marginal participation confirmation, and the fragile broader-risk backdrop.",
      "openedAt": "2026-10-05T18:46:52.781Z",
      "timeHorizon": "1-3 trading days",
      "riskLevel": "HIGH",
      "thesis": "MSTR has a fresh confirmed 5-minute breakout above the $163.17 entry level: completed close was $163.53 with participation at 1.084x baseline, and the latest quote remains above trigger at $163.70. The daily selection data retain strong 20-day momentum (+29.9%) and above-baseline volume (1.55x). Size is reduced due to high realized volatility (57%), relatively high selected correlation (0.66), marginal participation confirmation, and the fragile broader-risk backdrop.",
      "target": "Break above $163.17 with sustained participation.",
      "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
      "lastDecision": "HOLD",
      "lastDecisionReason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only.",
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
      "value": 150.2,
      "pnl": 0.2,
      "pnlPct": 0.13,
      "fxUsdPerEur": 1.125112533569336
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
      "date": "2026-10-06 10:08",
      "value": 1000.2
    }
  ],
  "strategyState": {
    "schemaVersion": 1,
    "regime": "Daily quant cross-asset momentum / volatility selection",
    "regimeReason": "The daily selector ranked 116 liquid instruments using momentum, relative strength, ATR, realized volatility, volume and gaps, then applied an absolute 10-day correlation cap of 0.80. Today's diversified top 5: HPE, ON, ARM, AMAT, MSTR.",
    "riskPosture": "Active paper positions: ON. Require instrument-specific trigger confirmation before entry; watchlist selection alone is not an order. Position invalidation and fresh-price controls remain binding.",
    "marketView": "Today's quantitative opportunity set is HPE, ON, ARM, AMAT, MSTR. Rankings favor momentum, relative strength, realized movement and abnormal volume while excluding highly correlated duplicates.",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $70.33 with sustained participation.",
        "invalidation": "Loss of $68.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.26: 5d momentum 10.2%, 20d 33.8%, annualized 10d realized vol 42%, volume 1.58x, max selected correlation 0.00.",
        "quantScore": 2.261,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "WATCH_ONLY",
        "setupId": "HPE-20261005-daily-quant"
      },
      {
        "symbol": "ON",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $86.09 with sustained participation.",
        "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
        "quantScore": 2.095,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "WATCH_ONLY",
        "setupId": "ON-20261005-daily-quant"
      },
      {
        "symbol": "ARM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $319.08 with sustained participation.",
        "invalidation": "Loss of $295.90 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.75: 5d momentum -0.9%, 20d 30.9%, annualized 10d realized vol 109%, volume 1.00x, max selected correlation 0.54.",
        "quantScore": 1.749,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "WATCH_ONLY",
        "setupId": "ARM-20261005-daily-quant"
      },
      {
        "symbol": "AMAT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $545.37 with sustained participation.",
        "invalidation": "Loss of $534.71 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.65: 5d momentum 11.3%, 20d 23.2%, annualized 10d realized vol 29%, volume 0.99x, max selected correlation 0.72.",
        "quantScore": 1.652,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "WATCH_ONLY",
        "setupId": "AMAT-20261005-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $163.17 with sustained participation.",
        "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
        "quantScore": 1.576,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "WATCH_ONLY",
        "setupId": "MSTR-20261005-daily-quant"
      }
    ],
    "pendingSetups": [
      {
        "symbol": "HPE",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $70.33 with sustained participation.",
        "invalidation": "Loss of $68.33 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.26: 5d momentum 10.2%, 20d 33.8%, annualized 10d realized vol 42%, volume 1.58x, max selected correlation 0.00.",
        "quantScore": 2.261,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "UNTRIGGERED",
        "setupId": "HPE-20261005-daily-quant"
      },
      {
        "symbol": "ON",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $86.09 with sustained participation.",
        "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
        "quantScore": 2.095,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "UNTRIGGERED",
        "setupId": "ON-20261005-daily-quant"
      },
      {
        "symbol": "ARM",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $319.08 with sustained participation.",
        "invalidation": "Loss of $295.90 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.75: 5d momentum -0.9%, 20d 30.9%, annualized 10d realized vol 109%, volume 1.00x, max selected correlation 0.54.",
        "quantScore": 1.749,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "UNTRIGGERED",
        "setupId": "ARM-20261005-daily-quant"
      },
      {
        "symbol": "AMAT",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $545.37 with sustained participation.",
        "invalidation": "Loss of $534.71 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.65: 5d momentum 11.3%, 20d 23.2%, annualized 10d realized vol 29%, volume 0.99x, max selected correlation 0.72.",
        "quantScore": 1.652,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "UNTRIGGERED",
        "setupId": "AMAT-20261005-daily-quant"
      },
      {
        "symbol": "MSTR",
        "setup": "Daily quant momentum / volatility breakout",
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
        "expiresAt": "2026-10-08T12:10:16.000Z",
        "trigger": "Break above $163.17 with sustained participation.",
        "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
        "expectedHorizon": "1-3 trading days",
        "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
        "quantScore": 1.576,
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
        "createdAt": "2026-10-05T12:10:16.000Z",
        "lastReviewedAt": "2026-10-05T12:10:16.000Z",
        "status": "UNTRIGGERED",
        "setupId": "MSTR-20261005-daily-quant"
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
    "lastReviewedAt": "2026-10-06T10:08:09.928Z",
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
      "reviewedAt": "2026-10-06T10:08:09.928Z",
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
      "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only."
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
      "selectedAt": "2026-10-05T12:10:16.000Z",
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
      "previousSelectedAt": "2026-10-04T17:31:23.915Z",
      "factorNote": "Heatmap shows cross-sectional z-scores. Higher volatility is rewarded by this opportunity score, not a safety rating. Correlation is measured against earlier selected candidates at the selection gate. Regime fit is not scored by selector v2.",
      "selected": [
        {
          "symbol": "HPE",
          "quantScore": 2.261,
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
          }
        },
        {
          "symbol": "ON",
          "quantScore": 2.095,
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
          }
        },
        {
          "symbol": "ARM",
          "quantScore": 1.749,
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
          }
        },
        {
          "symbol": "AMAT",
          "quantScore": 1.652,
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
          }
        },
        {
          "symbol": "MSTR",
          "quantScore": 1.576,
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
          "quantScore": 2.261,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.836,
            "participation": 1.216,
            "volatility": 1.644,
            "gap": 1.716,
            "correlation": 0,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-08T12:10:16.000Z",
          "trigger": "Break above $70.33 with sustained participation.",
          "invalidation": "Loss of $68.33 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.26: 5d momentum 10.2%, 20d 33.8%, annualized 10d realized vol 42%, volume 1.58x, max selected correlation 0.00.",
          "createdAt": "2026-10-05T12:10:16.000Z",
          "lastReviewedAt": "2026-10-05T12:10:16.000Z",
          "setupId": "HPE-20261005-daily-quant"
        },
        {
          "symbol": "ON",
          "rank": 2,
          "previousRank": 2,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 2.095,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.305,
            "participation": 3.069,
            "volatility": 1.209,
            "gap": 3.147,
            "correlation": 0.322,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-08T12:10:16.000Z",
          "trigger": "Break above $86.09 with sustained participation.",
          "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
          "createdAt": "2026-10-05T12:10:16.000Z",
          "lastReviewedAt": "2026-10-05T12:10:16.000Z",
          "setupId": "ON-20261005-daily-quant"
        },
        {
          "symbol": "ARM",
          "rank": 3,
          "previousRank": 3,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.749,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 0.878,
            "participation": -0.192,
            "volatility": 3.853,
            "gap": 2.584,
            "correlation": 0.536,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-08T12:10:16.000Z",
          "trigger": "Break above $319.08 with sustained participation.",
          "invalidation": "Loss of $295.90 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.75: 5d momentum -0.9%, 20d 30.9%, annualized 10d realized vol 109%, volume 1.00x, max selected correlation 0.54.",
          "createdAt": "2026-10-05T12:10:16.000Z",
          "lastReviewedAt": "2026-10-05T12:10:16.000Z",
          "setupId": "ARM-20261005-daily-quant"
        },
        {
          "symbol": "AMAT",
          "rank": 4,
          "previousRank": 4,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.652,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 2.717,
            "participation": -0.214,
            "volatility": 0.408,
            "gap": 1.128,
            "correlation": 0.716,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-08T12:10:16.000Z",
          "trigger": "Break above $545.37 with sustained participation.",
          "invalidation": "Loss of $534.71 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.65: 5d momentum 11.3%, 20d 23.2%, annualized 10d realized vol 29%, volume 0.99x, max selected correlation 0.72.",
          "createdAt": "2026-10-05T12:10:16.000Z",
          "lastReviewedAt": "2026-10-05T12:10:16.000Z",
          "setupId": "AMAT-20261005-daily-quant"
        },
        {
          "symbol": "MSTR",
          "rank": 5,
          "previousRank": 5,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "SELECTED",
          "quantScore": 1.576,
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
          "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
          "factors": {
            "momentum": 1.15,
            "participation": 1.152,
            "volatility": 2.495,
            "gap": 1.588,
            "correlation": 0.658,
            "regimeFit": null
          },
          "setup": "Daily quant momentum / volatility breakout",
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
          "expiresAt": "2026-10-08T12:10:16.000Z",
          "trigger": "Break above $163.17 with sustained participation.",
          "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
          "expectedHorizon": "1-3 trading days",
          "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
          "createdAt": "2026-10-05T12:10:16.000Z",
          "lastReviewedAt": "2026-10-05T12:10:16.000Z",
          "setupId": "MSTR-20261005-daily-quant"
        },
        {
          "symbol": "LRCX",
          "rank": 6,
          "previousRank": 6,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.553,
          "metrics": {
            "momentum5d": 10.241,
            "momentum20d": 20.522,
            "realizedVol10dAnnualized": 28.63,
            "volumeRatio": 0.894,
            "atrPct": 3.723,
            "gapPct": 2.911,
            "relativeStrength5dPct": 10.462,
            "relativeStrength20dPct": 19.937,
            "avgDollarVolume10d": 3034244371,
            "maxSelectedCorrelation": 0.819
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 2.449,
            "participation": -0.435,
            "volatility": 0.615,
            "gap": 1.306,
            "correlation": 0.819,
            "regimeFit": null
          }
        },
        {
          "symbol": "KLAC",
          "rank": 7,
          "previousRank": 7,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.5,
          "metrics": {
            "momentum5d": 10.095,
            "momentum20d": 20.103,
            "realizedVol10dAnnualized": 27.93,
            "volumeRatio": 0.939,
            "atrPct": 3.3,
            "gapPct": 3.734,
            "relativeStrength5dPct": 10.316,
            "relativeStrength20dPct": 19.518,
            "avgDollarVolume10d": 1699113085,
            "maxSelectedCorrelation": 0.884
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 2.412,
            "participation": -0.328,
            "volatility": 0.383,
            "gap": 1.825,
            "correlation": 0.884,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRWD",
          "rank": 8,
          "previousRank": 8,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 1.494,
          "metrics": {
            "momentum5d": 7.103,
            "momentum20d": 32.75,
            "realizedVol10dAnnualized": 36.96,
            "volumeRatio": 0.741,
            "atrPct": 4.125,
            "gapPct": 1.282,
            "relativeStrength5dPct": 7.325,
            "relativeStrength20dPct": 32.164,
            "avgDollarVolume10d": 2408921601,
            "maxSelectedCorrelation": 0.371
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 2.29,
            "participation": -0.805,
            "volatility": 1.003,
            "gap": 0.279,
            "correlation": 0.371,
            "regimeFit": null
          }
        },
        {
          "symbol": "PANW",
          "rank": 9,
          "previousRank": 9,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 1.44,
          "metrics": {
            "momentum5d": 7.605,
            "momentum20d": 22.759,
            "realizedVol10dAnnualized": 40.71,
            "volumeRatio": 0.895,
            "atrPct": 4.05,
            "gapPct": 1.815,
            "relativeStrength5dPct": 7.827,
            "relativeStrength20dPct": 22.174,
            "avgDollarVolume10d": 2259571415,
            "maxSelectedCorrelation": 0.429
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 2.071,
            "participation": -0.434,
            "volatility": 1.046,
            "gap": 0.615,
            "correlation": 0.429,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRVL",
          "rank": 10,
          "previousRank": 10,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.377,
          "metrics": {
            "momentum5d": 3.951,
            "momentum20d": 31.872,
            "realizedVol10dAnnualized": 39.54,
            "volumeRatio": 1.024,
            "atrPct": 4.321,
            "gapPct": 3.7,
            "relativeStrength5dPct": 4.173,
            "relativeStrength20dPct": 31.287,
            "avgDollarVolume10d": 4405965472,
            "maxSelectedCorrelation": 0.878
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.73,
            "participation": -0.123,
            "volatility": 1.16,
            "gap": 1.804,
            "correlation": 0.878,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMD",
          "rank": 11,
          "previousRank": 11,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.217,
          "metrics": {
            "momentum5d": 0.52,
            "momentum20d": 38.693,
            "realizedVol10dAnnualized": 53.66,
            "volumeRatio": 1.1,
            "atrPct": 3.982,
            "gapPct": 3.284,
            "relativeStrength5dPct": 0.742,
            "relativeStrength20dPct": 38.107,
            "avgDollarVolume10d": 14225789237,
            "maxSelectedCorrelation": 0.801
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.356,
            "participation": 0.061,
            "volatility": 1.292,
            "gap": 1.541,
            "correlation": 0.801,
            "regimeFit": null
          }
        },
        {
          "symbol": "SHOP",
          "rank": 12,
          "previousRank": 12,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 1.16,
          "metrics": {
            "momentum5d": 6.425,
            "momentum20d": 6.71,
            "realizedVol10dAnnualized": 52.54,
            "volumeRatio": 0.824,
            "atrPct": 4.301,
            "gapPct": 1.798,
            "relativeStrength5dPct": 6.647,
            "relativeStrength20dPct": 6.125,
            "avgDollarVolume10d": 1710616159,
            "maxSelectedCorrelation": 0.566
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.384,
            "participation": -0.607,
            "volatility": 1.432,
            "gap": 0.604,
            "correlation": 0.566,
            "regimeFit": null
          }
        },
        {
          "symbol": "INTC",
          "rank": 13,
          "previousRank": 13,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 1.124,
          "metrics": {
            "momentum5d": -2.984,
            "momentum20d": 32.515,
            "realizedVol10dAnnualized": 73.37,
            "volumeRatio": 0.956,
            "atrPct": 5.541,
            "gapPct": 3.342,
            "relativeStrength5dPct": -2.762,
            "relativeStrength20dPct": 31.93,
            "avgDollarVolume10d": 13096013054,
            "maxSelectedCorrelation": 0.711
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.576,
            "participation": -0.285,
            "volatility": 2.522,
            "gap": 1.578,
            "correlation": 0.711,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMCI",
          "rank": 14,
          "previousRank": 14,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 1.047,
          "metrics": {
            "momentum5d": 0.994,
            "momentum20d": 18.081,
            "realizedVol10dAnnualized": 42.45,
            "volumeRatio": 1.366,
            "atrPct": 5.134,
            "gapPct": 2.052,
            "relativeStrength5dPct": 1.216,
            "relativeStrength20dPct": 17.496,
            "avgDollarVolume10d": 1578008914,
            "maxSelectedCorrelation": 0.817
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.81,
            "participation": 0.705,
            "volatility": 1.641,
            "gap": 0.764,
            "correlation": 0.817,
            "regimeFit": null
          }
        },
        {
          "symbol": "ORCL",
          "rank": 15,
          "previousRank": 15,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.813,
          "metrics": {
            "momentum5d": 3.793,
            "momentum20d": -2.367,
            "realizedVol10dAnnualized": 38.94,
            "volumeRatio": 1.153,
            "atrPct": 4.453,
            "gapPct": 2.912,
            "relativeStrength5dPct": 4.015,
            "relativeStrength20dPct": -2.953,
            "avgDollarVolume10d": 4575539912,
            "maxSelectedCorrelation": 0.737
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.663,
            "participation": 0.19,
            "volatility": 1.215,
            "gap": 1.306,
            "correlation": 0.737,
            "regimeFit": null
          }
        },
        {
          "symbol": "DELL",
          "rank": 16,
          "previousRank": 16,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.733,
          "metrics": {
            "momentum5d": -0.066,
            "momentum20d": 14.287,
            "realizedVol10dAnnualized": 45.42,
            "volumeRatio": 0.835,
            "atrPct": 4.806,
            "gapPct": 2.309,
            "relativeStrength5dPct": 0.156,
            "relativeStrength20dPct": 13.701,
            "avgDollarVolume10d": 4058193802,
            "maxSelectedCorrelation": 0.759
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.516,
            "participation": -0.579,
            "volatility": 1.537,
            "gap": 0.927,
            "correlation": 0.759,
            "regimeFit": null
          }
        },
        {
          "symbol": "SMH",
          "rank": 17,
          "previousRank": 17,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.726,
          "metrics": {
            "momentum5d": 3.963,
            "momentum20d": 14.555,
            "realizedVol10dAnnualized": 23.21,
            "volumeRatio": 1.426,
            "atrPct": 2.308,
            "gapPct": 2.341,
            "relativeStrength5dPct": 4.185,
            "relativeStrength20dPct": 13.969,
            "avgDollarVolume10d": 3864594114,
            "maxSelectedCorrelation": 0.899
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.206,
            "participation": 0.85,
            "volatility": -0.23,
            "gap": 0.946,
            "correlation": 0.899,
            "regimeFit": null
          }
        },
        {
          "symbol": "SOXX",
          "rank": 18,
          "previousRank": 18,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.722,
          "metrics": {
            "momentum5d": 2.832,
            "momentum20d": 17.442,
            "realizedVol10dAnnualized": 29.67,
            "volumeRatio": 1.205,
            "atrPct": 2.684,
            "gapPct": 2.53,
            "relativeStrength5dPct": 3.054,
            "relativeStrength20dPct": 16.856,
            "avgDollarVolume10d": 3748860998,
            "maxSelectedCorrelation": 0.895
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 1.102,
            "participation": 0.316,
            "volatility": 0.104,
            "gap": 1.066,
            "correlation": 0.895,
            "regimeFit": null
          }
        },
        {
          "symbol": "USO",
          "rank": 19,
          "previousRank": 19,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.602,
          "metrics": {
            "momentum5d": -0.647,
            "momentum20d": 4.407,
            "realizedVol10dAnnualized": 46.02,
            "volumeRatio": 1.179,
            "atrPct": 4.057,
            "gapPct": -4.306,
            "relativeStrength5dPct": -0.426,
            "relativeStrength20dPct": 3.821,
            "avgDollarVolume10d": 1033427670,
            "maxSelectedCorrelation": 0.677
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.117,
            "participation": 0.253,
            "volatility": 1.165,
            "gap": 3.244,
            "correlation": 0.677,
            "regimeFit": null
          }
        },
        {
          "symbol": "CSCO",
          "rank": 20,
          "previousRank": 20,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.559,
          "metrics": {
            "momentum5d": 5.155,
            "momentum20d": 2.503,
            "realizedVol10dAnnualized": 29.55,
            "volumeRatio": 1.082,
            "atrPct": 2.357,
            "gapPct": 0.984,
            "relativeStrength5dPct": 5.376,
            "relativeStrength20dPct": 1.918,
            "avgDollarVolume10d": 2274921136,
            "maxSelectedCorrelation": 0.664
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 1.041,
            "participation": 0.019,
            "volatility": -0.067,
            "gap": 0.091,
            "correlation": 0.664,
            "regimeFit": null
          }
        },
        {
          "symbol": "META",
          "rank": 21,
          "previousRank": 21,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.514,
          "metrics": {
            "momentum5d": -3.137,
            "momentum20d": 22.81,
            "realizedVol10dAnnualized": 68.94,
            "volumeRatio": 0.593,
            "atrPct": 3.966,
            "gapPct": 1.008,
            "relativeStrength5dPct": -2.915,
            "relativeStrength20dPct": 22.225,
            "avgDollarVolume10d": 19256806352,
            "maxSelectedCorrelation": 0.683
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.255,
            "participation": -1.163,
            "volatility": 1.616,
            "gap": 0.107,
            "correlation": 0.683,
            "regimeFit": null
          }
        },
        {
          "symbol": "SNOW",
          "rank": 22,
          "previousRank": 22,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.497,
          "metrics": {
            "momentum5d": 1.518,
            "momentum20d": 11.509,
            "realizedVol10dAnnualized": 22.07,
            "volumeRatio": 0.732,
            "atrPct": 4.019,
            "gapPct": 0.588,
            "relativeStrength5dPct": 1.74,
            "relativeStrength20dPct": 10.924,
            "avgDollarVolume10d": 1410374366,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.699,
            "participation": -0.829,
            "volatility": 0.625,
            "gap": 0.159,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "COIN",
          "rank": 23,
          "previousRank": 23,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.471,
          "metrics": {
            "momentum5d": -6.207,
            "momentum20d": 4.595,
            "realizedVol10dAnnualized": 30.28,
            "volumeRatio": 1.936,
            "atrPct": 6.668,
            "gapPct": 2.826,
            "relativeStrength5dPct": -5.985,
            "relativeStrength20dPct": 4.01,
            "avgDollarVolume10d": 1507103820,
            "maxSelectedCorrelation": 0.836
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.818,
            "participation": 2.083,
            "volatility": 2.165,
            "gap": 1.253,
            "correlation": 0.836,
            "regimeFit": null
          }
        },
        {
          "symbol": "MU",
          "rank": 24,
          "previousRank": 24,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.448,
          "metrics": {
            "momentum5d": -0.683,
            "momentum20d": 12.427,
            "realizedVol10dAnnualized": 37.59,
            "volumeRatio": 0.974,
            "atrPct": 3.931,
            "gapPct": 0.908,
            "relativeStrength5dPct": -0.461,
            "relativeStrength20dPct": 11.841,
            "avgDollarVolume10d": 28803623493,
            "maxSelectedCorrelation": 0.498
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.355,
            "participation": -0.243,
            "volatility": 0.917,
            "gap": 0.043,
            "correlation": 0.498,
            "regimeFit": null
          }
        },
        {
          "symbol": "NVDA",
          "rank": 25,
          "previousRank": 25,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.445,
          "metrics": {
            "momentum5d": 3.945,
            "momentum20d": 4.251,
            "realizedVol10dAnnualized": 17.38,
            "volumeRatio": 1.217,
            "atrPct": 2.201,
            "gapPct": 2.252,
            "relativeStrength5dPct": 4.167,
            "relativeStrength20dPct": 3.666,
            "avgDollarVolume10d": 24836017041,
            "maxSelectedCorrelation": 0.69
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.89,
            "participation": 0.345,
            "volatility": -0.412,
            "gap": 0.891,
            "correlation": 0.69,
            "regimeFit": null
          }
        },
        {
          "symbol": "CAT",
          "rank": 26,
          "previousRank": 26,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.417,
          "metrics": {
            "momentum5d": 2.902,
            "momentum20d": 6.707,
            "realizedVol10dAnnualized": 21.51,
            "volumeRatio": 1.127,
            "atrPct": 2.452,
            "gapPct": 1.749,
            "relativeStrength5dPct": 3.123,
            "relativeStrength20dPct": 6.122,
            "avgDollarVolume10d": 1849922644,
            "maxSelectedCorrelation": 0.678
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.788,
            "participation": 0.128,
            "volatility": -0.193,
            "gap": 0.573,
            "correlation": 0.678,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABNB",
          "rank": 27,
          "previousRank": 27,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.364,
          "metrics": {
            "momentum5d": 3.15,
            "momentum20d": -11.366,
            "realizedVol10dAnnualized": 48.08,
            "volumeRatio": 0.741,
            "atrPct": 3.29,
            "gapPct": 2.282,
            "relativeStrength5dPct": 3.371,
            "relativeStrength20dPct": -11.952,
            "avgDollarVolume10d": 929344827,
            "maxSelectedCorrelation": 0.308
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.281,
            "participation": -0.806,
            "volatility": 0.815,
            "gap": 0.91,
            "correlation": 0.308,
            "regimeFit": null
          }
        },
        {
          "symbol": "TSLA",
          "rank": 28,
          "previousRank": 28,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.334,
          "metrics": {
            "momentum5d": -0.408,
            "momentum20d": 3.804,
            "realizedVol10dAnnualized": 36.1,
            "volumeRatio": 1.467,
            "atrPct": 3.093,
            "gapPct": 1.686,
            "relativeStrength5dPct": -0.187,
            "relativeStrength20dPct": 3.218,
            "avgDollarVolume10d": 13638523457,
            "maxSelectedCorrelation": 0.716
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.139,
            "participation": 0.949,
            "volatility": 0.454,
            "gap": 0.534,
            "correlation": 0.716,
            "regimeFit": null
          }
        },
        {
          "symbol": "OXY",
          "rank": 29,
          "previousRank": 29,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.29,
          "metrics": {
            "momentum5d": 2.146,
            "momentum20d": -4.646,
            "realizedVol10dAnnualized": 34.22,
            "volumeRatio": 0.884,
            "atrPct": 2.843,
            "gapPct": -1.608,
            "relativeStrength5dPct": 2.367,
            "relativeStrength20dPct": -5.232,
            "avgDollarVolume10d": 560329722,
            "maxSelectedCorrelation": 0.393
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.315,
            "participation": -0.461,
            "volatility": 0.284,
            "gap": 1.543,
            "correlation": 0.393,
            "regimeFit": null
          }
        },
        {
          "symbol": "PLTR",
          "rank": 30,
          "previousRank": 30,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.271,
          "metrics": {
            "momentum5d": -0.485,
            "momentum20d": 11.383,
            "realizedVol10dAnnualized": 26.1,
            "volumeRatio": 1.026,
            "atrPct": 3.044,
            "gapPct": 1.573,
            "relativeStrength5dPct": -0.263,
            "relativeStrength20dPct": 10.798,
            "avgDollarVolume10d": 3897053300,
            "maxSelectedCorrelation": 0.446
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.357,
            "participation": -0.117,
            "volatility": 0.211,
            "gap": 0.463,
            "correlation": 0.446,
            "regimeFit": null
          }
        },
        {
          "symbol": "HOOD",
          "rank": 31,
          "previousRank": 31,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.257,
          "metrics": {
            "momentum5d": -5.578,
            "momentum20d": 5.374,
            "realizedVol10dAnnualized": 27.79,
            "volumeRatio": 1.537,
            "atrPct": 5.678,
            "gapPct": 2.191,
            "relativeStrength5dPct": -5.356,
            "relativeStrength20dPct": 4.789,
            "avgDollarVolume10d": 2290332222,
            "maxSelectedCorrelation": 0.853
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.688,
            "participation": 1.117,
            "volatility": 1.602,
            "gap": 0.852,
            "correlation": 0.853,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOW",
          "rank": 32,
          "previousRank": 32,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.209,
          "metrics": {
            "momentum5d": -0.914,
            "momentum20d": -1.712,
            "realizedVol10dAnnualized": 36.17,
            "volumeRatio": 0.894,
            "atrPct": 4.175,
            "gapPct": 1.205,
            "relativeStrength5dPct": -0.693,
            "relativeStrength20dPct": -2.297,
            "avgDollarVolume10d": 1381074375,
            "maxSelectedCorrelation": 0.33
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.114,
            "participation": -0.437,
            "volatility": 1.012,
            "gap": 0.231,
            "correlation": 0.33,
            "regimeFit": null
          }
        },
        {
          "symbol": "XOM",
          "rank": 33,
          "previousRank": 33,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.191,
          "metrics": {
            "momentum5d": 2.13,
            "momentum20d": -0.085,
            "realizedVol10dAnnualized": 20.84,
            "volumeRatio": 0.977,
            "atrPct": 2.188,
            "gapPct": -1.386,
            "relativeStrength5dPct": 2.351,
            "relativeStrength20dPct": -0.671,
            "avgDollarVolume10d": 2034589905,
            "maxSelectedCorrelation": 0.819
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.451,
            "participation": -0.236,
            "volatility": -0.343,
            "gap": 1.403,
            "correlation": 0.819,
            "regimeFit": null
          }
        },
        {
          "symbol": "ARKK",
          "rank": 34,
          "previousRank": 34,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.172,
          "metrics": {
            "momentum5d": -1.036,
            "momentum20d": 7.723,
            "realizedVol10dAnnualized": 24.38,
            "volumeRatio": 1.454,
            "atrPct": 2.487,
            "gapPct": 1.806,
            "relativeStrength5dPct": -0.814,
            "relativeStrength20dPct": 7.137,
            "avgDollarVolume10d": 404766802,
            "maxSelectedCorrelation": 0.558
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.152,
            "participation": 0.917,
            "volatility": -0.113,
            "gap": 0.61,
            "correlation": 0.558,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLK",
          "rank": 35,
          "previousRank": 35,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.169,
          "metrics": {
            "momentum5d": 1.804,
            "momentum20d": 8.829,
            "realizedVol10dAnnualized": 15.62,
            "volumeRatio": 1.142,
            "atrPct": 1.519,
            "gapPct": 1.694,
            "relativeStrength5dPct": 2.025,
            "relativeStrength20dPct": 8.243,
            "avgDollarVolume10d": 1560168412,
            "maxSelectedCorrelation": 0.882
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.666,
            "participation": 0.162,
            "volatility": -0.8,
            "gap": 0.539,
            "correlation": 0.882,
            "regimeFit": null
          }
        },
        {
          "symbol": "AVGO",
          "rank": 36,
          "previousRank": 36,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.162,
          "metrics": {
            "momentum5d": 0.66,
            "momentum20d": -3.295,
            "realizedVol10dAnnualized": 28.25,
            "volumeRatio": 1.214,
            "atrPct": 2.803,
            "gapPct": 1.81,
            "relativeStrength5dPct": 0.882,
            "relativeStrength20dPct": -3.88,
            "avgDollarVolume10d": 7717196070,
            "maxSelectedCorrelation": 0.565
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.105,
            "participation": 0.338,
            "volatility": 0.134,
            "gap": 0.612,
            "correlation": 0.565,
            "regimeFit": null
          }
        },
        {
          "symbol": "NKE",
          "rank": 37,
          "previousRank": 37,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.146,
          "metrics": {
            "momentum5d": -5.259,
            "momentum20d": -11.428,
            "realizedVol10dAnnualized": 23.48,
            "volumeRatio": 2.825,
            "atrPct": 3.341,
            "gapPct": -7.397,
            "relativeStrength5dPct": -5.037,
            "relativeStrength20dPct": -12.013,
            "avgDollarVolume10d": 1857197038,
            "maxSelectedCorrelation": 0.555
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.144,
            "participation": 4.233,
            "volatility": 0.307,
            "gap": 5.192,
            "correlation": 0.555,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWJ",
          "rank": 38,
          "previousRank": 38,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.108,
          "metrics": {
            "momentum5d": 1.011,
            "momentum20d": 2.999,
            "realizedVol10dAnnualized": 19.9,
            "volumeRatio": 1.472,
            "atrPct": 1.597,
            "gapPct": 1.366,
            "relativeStrength5dPct": 1.233,
            "relativeStrength20dPct": 2.413,
            "avgDollarVolume10d": 480640401,
            "maxSelectedCorrelation": 0.803
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.355,
            "participation": 0.96,
            "volatility": -0.668,
            "gap": 0.332,
            "correlation": 0.803,
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
          "quantScore": 0.033,
          "metrics": {
            "momentum5d": -0.122,
            "momentum20d": 1.893,
            "realizedVol10dAnnualized": 25.73,
            "volumeRatio": 0.893,
            "atrPct": 2.671,
            "gapPct": 0.911,
            "relativeStrength5dPct": 0.1,
            "relativeStrength20dPct": 1.307,
            "avgDollarVolume10d": 9489002010,
            "maxSelectedCorrelation": 0.339
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.13,
            "participation": -0.439,
            "volatility": 0.011,
            "gap": 0.045,
            "correlation": 0.339,
            "regimeFit": null
          }
        },
        {
          "symbol": "IBM",
          "rank": 40,
          "previousRank": 40,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": 0.026,
          "metrics": {
            "momentum5d": -1.273,
            "momentum20d": -3.91,
            "realizedVol10dAnnualized": 22.57,
            "volumeRatio": 1.454,
            "atrPct": 3.032,
            "gapPct": -0.049,
            "relativeStrength5dPct": -1.051,
            "relativeStrength20dPct": -4.496,
            "avgDollarVolume10d": 1248371420,
            "maxSelectedCorrelation": 0.538
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.241,
            "participation": 0.918,
            "volatility": 0.128,
            "gap": 0.56,
            "correlation": 0.538,
            "regimeFit": null
          }
        },
        {
          "symbol": "QCOM",
          "rank": 41,
          "previousRank": 41,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": 0.013,
          "metrics": {
            "momentum5d": -8.467,
            "momentum20d": 8.773,
            "realizedVol10dAnnualized": 64.45,
            "volumeRatio": 0.804,
            "atrPct": 4.996,
            "gapPct": 2.543,
            "relativeStrength5dPct": -8.245,
            "relativeStrength20dPct": 8.187,
            "avgDollarVolume10d": 2251126805,
            "maxSelectedCorrelation": 0.862
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -1.073,
            "participation": -0.653,
            "volatility": 2.048,
            "gap": 1.074,
            "correlation": 0.862,
            "regimeFit": null
          }
        },
        {
          "symbol": "RIVN",
          "rank": 42,
          "previousRank": 43,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": 0.007,
          "metrics": {
            "momentum5d": -7.563,
            "momentum20d": -8.392,
            "realizedVol10dAnnualized": 33.07,
            "volumeRatio": 2.47,
            "atrPct": 4.801,
            "gapPct": 3.455,
            "relativeStrength5dPct": -7.341,
            "relativeStrength20dPct": -8.978,
            "avgDollarVolume10d": 384089568,
            "maxSelectedCorrelation": 0.399
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.442,
            "participation": 3.373,
            "volatility": 1.266,
            "gap": 1.649,
            "correlation": 0.399,
            "regimeFit": null
          }
        },
        {
          "symbol": "CVX",
          "rank": 43,
          "previousRank": 42,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": 0.005,
          "metrics": {
            "momentum5d": 1.096,
            "momentum20d": -2.403,
            "realizedVol10dAnnualized": 19.14,
            "volumeRatio": 0.954,
            "atrPct": 2.017,
            "gapPct": -1.111,
            "relativeStrength5dPct": 1.317,
            "relativeStrength20dPct": -2.989,
            "avgDollarVolume10d": 1593377363,
            "maxSelectedCorrelation": 0.738
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.205,
            "participation": -0.292,
            "volatility": -0.468,
            "gap": 1.229,
            "correlation": 0.738,
            "regimeFit": null
          }
        },
        {
          "symbol": "BTC",
          "rank": 44,
          "previousRank": 53,
          "rankChange": 9,
          "rankChangeLabel": "+9",
          "status": "WATCH",
          "quantScore": -0.002,
          "metrics": {
            "momentum5d": 3.129,
            "momentum20d": 10.228,
            "realizedVol10dAnnualized": 14.32,
            "volumeRatio": 0.4,
            "atrPct": 0.674,
            "gapPct": 0,
            "relativeStrength5dPct": 3.351,
            "relativeStrength20dPct": 9.642,
            "avgDollarVolume10d": 394018902,
            "maxSelectedCorrelation": 0.474
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.933,
            "participation": -1.631,
            "volatility": -1.263,
            "gap": 0.529,
            "correlation": 0.474,
            "regimeFit": null
          }
        },
        {
          "symbol": "BA",
          "rank": 45,
          "previousRank": 45,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.011,
          "metrics": {
            "momentum5d": -2.277,
            "momentum20d": -7.33,
            "realizedVol10dAnnualized": 42.64,
            "volumeRatio": 1.068,
            "atrPct": 3.708,
            "gapPct": 0.827,
            "relativeStrength5dPct": -2.055,
            "relativeStrength20dPct": -7.915,
            "avgDollarVolume10d": 2043455477,
            "maxSelectedCorrelation": 0.61
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.515,
            "participation": -0.015,
            "volatility": 0.912,
            "gap": 0.008,
            "correlation": 0.61,
            "regimeFit": null
          }
        },
        {
          "symbol": "CRM",
          "rank": 46,
          "previousRank": 44,
          "rankChange": -2,
          "rankChangeLabel": "-2",
          "status": "WATCH",
          "quantScore": -0.012,
          "metrics": {
            "momentum5d": 0.286,
            "momentum20d": -8.656,
            "realizedVol10dAnnualized": 28.2,
            "volumeRatio": 0.74,
            "atrPct": 3.374,
            "gapPct": 0.6,
            "relativeStrength5dPct": 0.508,
            "relativeStrength20dPct": -9.242,
            "avgDollarVolume10d": 2556137896,
            "maxSelectedCorrelation": 0.338
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.122,
            "participation": -0.808,
            "volatility": 0.426,
            "gap": 0.151,
            "correlation": 0.338,
            "regimeFit": null
          }
        },
        {
          "symbol": "MSFT",
          "rank": 47,
          "previousRank": 46,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.014,
          "metrics": {
            "momentum5d": 0.263,
            "momentum20d": 4.169,
            "realizedVol10dAnnualized": 21.28,
            "volumeRatio": 0.706,
            "atrPct": 2.289,
            "gapPct": 1.285,
            "relativeStrength5dPct": 0.485,
            "relativeStrength20dPct": 3.583,
            "avgDollarVolume10d": 11884362931,
            "maxSelectedCorrelation": 0.668
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.264,
            "participation": -0.891,
            "volatility": -0.282,
            "gap": 0.281,
            "correlation": 0.668,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLE",
          "rank": 48,
          "previousRank": 47,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.014,
          "metrics": {
            "momentum5d": 1.257,
            "momentum20d": -3.502,
            "realizedVol10dAnnualized": 19.74,
            "volumeRatio": 0.859,
            "atrPct": 1.991,
            "gapPct": -1.34,
            "relativeStrength5dPct": 1.479,
            "relativeStrength20dPct": -4.088,
            "avgDollarVolume10d": 2198370813,
            "maxSelectedCorrelation": 0.649
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.199,
            "participation": -0.521,
            "volatility": -0.468,
            "gap": 1.374,
            "correlation": 0.649,
            "regimeFit": null
          }
        },
        {
          "symbol": "AMZN",
          "rank": 49,
          "previousRank": 48,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.037,
          "metrics": {
            "momentum5d": 0.741,
            "momentum20d": -1.357,
            "realizedVol10dAnnualized": 19.57,
            "volumeRatio": 0.95,
            "atrPct": 2.135,
            "gapPct": 1.321,
            "relativeStrength5dPct": 0.963,
            "relativeStrength20dPct": -1.942,
            "avgDollarVolume10d": 9340255723,
            "maxSelectedCorrelation": 0.559
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.177,
            "participation": -0.301,
            "volatility": -0.398,
            "gap": 0.304,
            "correlation": 0.559,
            "regimeFit": null
          }
        },
        {
          "symbol": "ADBE",
          "rank": 50,
          "previousRank": 49,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.045,
          "metrics": {
            "momentum5d": 0.943,
            "momentum20d": -15.047,
            "realizedVol10dAnnualized": 30.78,
            "volumeRatio": 0.716,
            "atrPct": 3.416,
            "gapPct": 0.734,
            "relativeStrength5dPct": 1.164,
            "relativeStrength20dPct": -15.633,
            "avgDollarVolume10d": 1067563254,
            "maxSelectedCorrelation": 0.276
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.205,
            "participation": -0.865,
            "volatility": 0.504,
            "gap": 0.067,
            "correlation": 0.276,
            "regimeFit": null
          }
        },
        {
          "symbol": "QQQ",
          "rank": 51,
          "previousRank": 50,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "REJECT",
          "quantScore": -0.055,
          "metrics": {
            "momentum5d": 0.682,
            "momentum20d": 5.688,
            "realizedVol10dAnnualized": 15.98,
            "volumeRatio": 1.047,
            "atrPct": 1.303,
            "gapPct": 1.251,
            "relativeStrength5dPct": 0.904,
            "relativeStrength20dPct": 5.102,
            "avgDollarVolume10d": 26098847052,
            "maxSelectedCorrelation": 0.887
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.381,
            "participation": -0.067,
            "volatility": -0.904,
            "gap": 0.259,
            "correlation": 0.887,
            "regimeFit": null
          }
        },
        {
          "symbol": "COP",
          "rank": 52,
          "previousRank": 51,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.088,
          "metrics": {
            "momentum5d": -0.432,
            "momentum20d": -7.617,
            "realizedVol10dAnnualized": 24.84,
            "volumeRatio": 0.837,
            "atrPct": 2.742,
            "gapPct": -1.613,
            "relativeStrength5dPct": -0.21,
            "relativeStrength20dPct": -8.202,
            "avgDollarVolume10d": 788867918,
            "maxSelectedCorrelation": 0.554
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.212,
            "participation": -0.575,
            "volatility": 0.028,
            "gap": 1.546,
            "correlation": 0.554,
            "regimeFit": null
          }
        },
        {
          "symbol": "ABBV",
          "rank": 53,
          "previousRank": 52,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.091,
          "metrics": {
            "momentum5d": -0.575,
            "momentum20d": 0.42,
            "realizedVol10dAnnualized": 10.09,
            "volumeRatio": 1.523,
            "atrPct": 1.802,
            "gapPct": -0.073,
            "relativeStrength5dPct": -0.353,
            "relativeStrength20dPct": -0.165,
            "avgDollarVolume10d": 1004682042,
            "maxSelectedCorrelation": 0.445
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.008,
            "participation": 1.084,
            "volatility": -0.775,
            "gap": 0.575,
            "correlation": 0.445,
            "regimeFit": null
          }
        },
        {
          "symbol": "DE",
          "rank": 54,
          "previousRank": 54,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.115,
          "metrics": {
            "momentum5d": -0.501,
            "momentum20d": -1.628,
            "realizedVol10dAnnualized": 25.23,
            "volumeRatio": 0.836,
            "atrPct": 2.399,
            "gapPct": 0.628,
            "relativeStrength5dPct": -0.279,
            "relativeStrength20dPct": -2.214,
            "avgDollarVolume10d": 891093960,
            "maxSelectedCorrelation": 0.469
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.041,
            "participation": -0.575,
            "volatility": -0.139,
            "gap": 0.133,
            "correlation": 0.469,
            "regimeFit": null
          }
        },
        {
          "symbol": "NEE",
          "rank": 55,
          "previousRank": 55,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.133,
          "metrics": {
            "momentum5d": 0.986,
            "momentum20d": -7.545,
            "realizedVol10dAnnualized": 18,
            "volumeRatio": 1.19,
            "atrPct": 1.74,
            "gapPct": 0.419,
            "relativeStrength5dPct": 1.207,
            "relativeStrength20dPct": -8.131,
            "avgDollarVolume10d": 1082430237,
            "maxSelectedCorrelation": 0.608
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.031,
            "participation": 0.279,
            "volatility": -0.635,
            "gap": 0.265,
            "correlation": 0.608,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNG",
          "rank": 56,
          "previousRank": 56,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.165,
          "metrics": {
            "momentum5d": -5.93,
            "momentum20d": -2.605,
            "realizedVol10dAnnualized": 56.77,
            "volumeRatio": 1.023,
            "atrPct": 3.725,
            "gapPct": 0.098,
            "relativeStrength5dPct": -5.708,
            "relativeStrength20dPct": -3.19,
            "avgDollarVolume10d": 380266117,
            "maxSelectedCorrelation": 0.467
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.989,
            "participation": -0.125,
            "volatility": 1.228,
            "gap": 0.467,
            "correlation": 0.467,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLU",
          "rank": 57,
          "previousRank": 57,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.165,
          "metrics": {
            "momentum5d": 0.81,
            "momentum20d": -6.656,
            "realizedVol10dAnnualized": 14.1,
            "volumeRatio": 1.387,
            "atrPct": 1.411,
            "gapPct": 0.504,
            "relativeStrength5dPct": 1.032,
            "relativeStrength20dPct": -7.241,
            "avgDollarVolume10d": 1539094999,
            "maxSelectedCorrelation": 0.612
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.028,
            "participation": 0.754,
            "volatility": -0.889,
            "gap": 0.211,
            "correlation": 0.612,
            "regimeFit": null
          }
        },
        {
          "symbol": "SO",
          "rank": 58,
          "previousRank": 58,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.186,
          "metrics": {
            "momentum5d": 1.014,
            "momentum20d": -5.198,
            "realizedVol10dAnnualized": 13.56,
            "volumeRatio": 1.085,
            "atrPct": 1.448,
            "gapPct": 0.3,
            "relativeStrength5dPct": 1.235,
            "relativeStrength20dPct": -5.783,
            "avgDollarVolume10d": 556031411,
            "maxSelectedCorrelation": 0.796
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.107,
            "participation": 0.026,
            "volatility": -0.882,
            "gap": 0.34,
            "correlation": 0.796,
            "regimeFit": null
          }
        },
        {
          "symbol": "NOC",
          "rank": 59,
          "previousRank": 60,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.193,
          "metrics": {
            "momentum5d": -6.37,
            "momentum20d": -8.747,
            "realizedVol10dAnnualized": 23.59,
            "volumeRatio": 3.117,
            "atrPct": 2.445,
            "gapPct": -0.635,
            "relativeStrength5dPct": -6.148,
            "relativeStrength20dPct": -9.333,
            "avgDollarVolume10d": 499725100,
            "maxSelectedCorrelation": 0.381
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.251,
            "participation": 4.937,
            "volatility": -0.151,
            "gap": 0.929,
            "correlation": 0.381,
            "regimeFit": null
          }
        },
        {
          "symbol": "ISRG",
          "rank": 60,
          "previousRank": 59,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.197,
          "metrics": {
            "momentum5d": -3.265,
            "momentum20d": 5.397,
            "realizedVol10dAnnualized": 23.77,
            "volumeRatio": 0.906,
            "atrPct": 2.748,
            "gapPct": 0.974,
            "relativeStrength5dPct": -3.044,
            "relativeStrength20dPct": 4.811,
            "avgDollarVolume10d": 785420790,
            "maxSelectedCorrelation": 0.582
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.296,
            "participation": -0.408,
            "volatility": 0.008,
            "gap": 0.085,
            "correlation": 0.582,
            "regimeFit": null
          }
        },
        {
          "symbol": "TMO",
          "rank": 61,
          "previousRank": 61,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.205,
          "metrics": {
            "momentum5d": -2.993,
            "momentum20d": 7.602,
            "realizedVol10dAnnualized": 21.55,
            "volumeRatio": 0.79,
            "atrPct": 2.473,
            "gapPct": 0.251,
            "relativeStrength5dPct": -2.771,
            "relativeStrength20dPct": 7.016,
            "avgDollarVolume10d": 1379761794,
            "maxSelectedCorrelation": 0.482
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.182,
            "participation": -0.687,
            "volatility": -0.181,
            "gap": 0.371,
            "correlation": 0.482,
            "regimeFit": null
          }
        },
        {
          "symbol": "EEM",
          "rank": 62,
          "previousRank": 62,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.207,
          "metrics": {
            "momentum5d": -0.456,
            "momentum20d": 0.774,
            "realizedVol10dAnnualized": 20.59,
            "volumeRatio": 0.952,
            "atrPct": 1.506,
            "gapPct": 1.182,
            "relativeStrength5dPct": -0.234,
            "relativeStrength20dPct": 0.189,
            "avgDollarVolume10d": 1343602024,
            "maxSelectedCorrelation": 0.811
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.039,
            "participation": -0.295,
            "volatility": -0.699,
            "gap": 0.216,
            "correlation": 0.811,
            "regimeFit": null
          }
        },
        {
          "symbol": "TGT",
          "rank": 63,
          "previousRank": 63,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.222,
          "metrics": {
            "momentum5d": -0.921,
            "momentum20d": -4.505,
            "realizedVol10dAnnualized": 12.81,
            "volumeRatio": 1.114,
            "atrPct": 2.273,
            "gapPct": 0.191,
            "relativeStrength5dPct": -0.699,
            "relativeStrength20dPct": -5.091,
            "avgDollarVolume10d": 536284320,
            "maxSelectedCorrelation": 0.229
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.2,
            "participation": 0.095,
            "volatility": -0.474,
            "gap": 0.408,
            "correlation": 0.229,
            "regimeFit": null
          }
        },
        {
          "symbol": "ETH",
          "rank": 64,
          "previousRank": 65,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.234,
          "metrics": {
            "momentum5d": 1.182,
            "momentum20d": 7.96,
            "realizedVol10dAnnualized": 11.91,
            "volumeRatio": 0.413,
            "atrPct": 0.676,
            "gapPct": 0,
            "relativeStrength5dPct": 1.404,
            "relativeStrength20dPct": 7.375,
            "avgDollarVolume10d": 184467939,
            "maxSelectedCorrelation": 0.333
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.535,
            "participation": -1.598,
            "volatility": -1.314,
            "gap": 0.529,
            "correlation": 0.333,
            "regimeFit": null
          }
        },
        {
          "symbol": "FXI",
          "rank": 65,
          "previousRank": 64,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.255,
          "metrics": {
            "momentum5d": -2.267,
            "momentum20d": -6.612,
            "realizedVol10dAnnualized": 17.55,
            "volumeRatio": 1.805,
            "atrPct": 1.401,
            "gapPct": -1.828,
            "relativeStrength5dPct": -2.046,
            "relativeStrength20dPct": -7.198,
            "avgDollarVolume10d": 603180431,
            "maxSelectedCorrelation": 0.615
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.492,
            "participation": 1.767,
            "volatility": -0.819,
            "gap": 1.681,
            "correlation": 0.615,
            "regimeFit": null
          }
        },
        {
          "symbol": "COST",
          "rank": 66,
          "previousRank": 66,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.271,
          "metrics": {
            "momentum5d": -0.23,
            "momentum20d": -0.843,
            "realizedVol10dAnnualized": 17.49,
            "volumeRatio": 0.732,
            "atrPct": 1.642,
            "gapPct": 0.682,
            "relativeStrength5dPct": -0.008,
            "relativeStrength20dPct": -1.429,
            "avgDollarVolume10d": 2317156427,
            "maxSelectedCorrelation": 0.613
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.028,
            "participation": -0.828,
            "volatility": -0.697,
            "gap": 0.099,
            "correlation": 0.613,
            "regimeFit": null
          }
        },
        {
          "symbol": "IWM",
          "rank": 67,
          "previousRank": 67,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.283,
          "metrics": {
            "momentum5d": -0.16,
            "momentum20d": -4.248,
            "realizedVol10dAnnualized": 11.95,
            "volumeRatio": 1.198,
            "atrPct": 1.359,
            "gapPct": 1.186,
            "relativeStrength5dPct": 0.062,
            "relativeStrength20dPct": -4.834,
            "avgDollarVolume10d": 7046664911,
            "maxSelectedCorrelation": 0.614
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.063,
            "participation": 0.3,
            "volatility": -0.962,
            "gap": 0.219,
            "correlation": 0.614,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLY",
          "rank": 68,
          "previousRank": 69,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.283,
          "metrics": {
            "momentum5d": -0.47,
            "momentum20d": -4.196,
            "realizedVol10dAnnualized": 13.13,
            "volumeRatio": 1.28,
            "atrPct": 1.401,
            "gapPct": 0.993,
            "relativeStrength5dPct": -0.249,
            "relativeStrength20dPct": -4.782,
            "avgDollarVolume10d": 735736249,
            "maxSelectedCorrelation": 0.739
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.114,
            "participation": 0.498,
            "volatility": -0.915,
            "gap": 0.097,
            "correlation": 0.739,
            "regimeFit": null
          }
        },
        {
          "symbol": "SCHW",
          "rank": 69,
          "previousRank": 68,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.284,
          "metrics": {
            "momentum5d": -2.353,
            "momentum20d": -10.661,
            "realizedVol10dAnnualized": 31.86,
            "volumeRatio": 0.999,
            "atrPct": 2.514,
            "gapPct": -1.098,
            "relativeStrength5dPct": -2.131,
            "relativeStrength20dPct": -11.247,
            "avgDollarVolume10d": 856215618,
            "maxSelectedCorrelation": 0.423
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.629,
            "participation": -0.183,
            "volatility": 0.064,
            "gap": 1.221,
            "correlation": 0.423,
            "regimeFit": null
          }
        },
        {
          "symbol": "AAPL",
          "rank": 70,
          "previousRank": 70,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.301,
          "metrics": {
            "momentum5d": -2.164,
            "momentum20d": 2.686,
            "realizedVol10dAnnualized": 19.06,
            "volumeRatio": 0.886,
            "atrPct": 1.949,
            "gapPct": 0.89,
            "relativeStrength5dPct": -1.942,
            "relativeStrength20dPct": 2.101,
            "avgDollarVolume10d": 11777408444,
            "maxSelectedCorrelation": 0.551
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.192,
            "participation": -0.455,
            "volatility": -0.505,
            "gap": 0.032,
            "correlation": 0.551,
            "regimeFit": null
          }
        },
        {
          "symbol": "DUK",
          "rank": 71,
          "previousRank": 71,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.321,
          "metrics": {
            "momentum5d": 0.688,
            "momentum20d": -5.333,
            "realizedVol10dAnnualized": 10.67,
            "volumeRatio": 0.869,
            "atrPct": 1.273,
            "gapPct": 0.413,
            "relativeStrength5dPct": 0.91,
            "relativeStrength20dPct": -5.919,
            "avgDollarVolume10d": 467583751,
            "maxSelectedCorrelation": 0.432
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": 0.047,
            "participation": -0.497,
            "volatility": -1.035,
            "gap": 0.269,
            "correlation": 0.432,
            "regimeFit": null
          }
        },
        {
          "symbol": "GM",
          "rank": 72,
          "previousRank": 72,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.325,
          "metrics": {
            "momentum5d": -5.277,
            "momentum20d": -7.777,
            "realizedVol10dAnnualized": 38.63,
            "volumeRatio": 1.128,
            "atrPct": 3.588,
            "gapPct": 0.731,
            "relativeStrength5dPct": -5.055,
            "relativeStrength20dPct": -8.362,
            "avgDollarVolume10d": 596602874,
            "maxSelectedCorrelation": 0.685
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.036,
            "participation": 0.128,
            "volatility": 0.763,
            "gap": 0.068,
            "correlation": 0.685,
            "regimeFit": null
          }
        },
        {
          "symbol": "SBUX",
          "rank": 73,
          "previousRank": 73,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.326,
          "metrics": {
            "momentum5d": -0.158,
            "momentum20d": -11.254,
            "realizedVol10dAnnualized": 13.67,
            "volumeRatio": 0.979,
            "atrPct": 2.046,
            "gapPct": 0.211,
            "relativeStrength5dPct": 0.064,
            "relativeStrength20dPct": -11.839,
            "avgDollarVolume10d": 661395913,
            "maxSelectedCorrelation": 0.507
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.276,
            "participation": -0.231,
            "volatility": -0.572,
            "gap": 0.396,
            "correlation": 0.507,
            "regimeFit": null
          }
        },
        {
          "symbol": "KRE",
          "rank": 74,
          "previousRank": 74,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.332,
          "metrics": {
            "momentum5d": -1.076,
            "momentum20d": -4.661,
            "realizedVol10dAnnualized": 15.49,
            "volumeRatio": 1.011,
            "atrPct": 1.848,
            "gapPct": 0.858,
            "relativeStrength5dPct": -0.854,
            "relativeStrength20dPct": -5.246,
            "avgDollarVolume10d": 1210405928,
            "maxSelectedCorrelation": 0.588
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.231,
            "participation": -0.153,
            "volatility": -0.634,
            "gap": 0.012,
            "correlation": 0.588,
            "regimeFit": null
          }
        },
        {
          "symbol": "LLY",
          "rank": 75,
          "previousRank": 75,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.334,
          "metrics": {
            "momentum5d": -3.431,
            "momentum20d": -1.485,
            "realizedVol10dAnnualized": 20.88,
            "volumeRatio": 0.922,
            "atrPct": 2.73,
            "gapPct": 0.345,
            "relativeStrength5dPct": -3.21,
            "relativeStrength20dPct": -2.071,
            "avgDollarVolume10d": 2592726597,
            "maxSelectedCorrelation": 0.305
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.533,
            "participation": -0.369,
            "volatility": -0.064,
            "gap": 0.311,
            "correlation": 0.305,
            "regimeFit": null
          }
        },
        {
          "symbol": "SPY",
          "rank": 76,
          "previousRank": 76,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.336,
          "metrics": {
            "momentum5d": -0.222,
            "momentum20d": 0.586,
            "realizedVol10dAnnualized": 10.44,
            "volumeRatio": 1.024,
            "atrPct": 0.931,
            "gapPct": 0.863,
            "relativeStrength5dPct": 0,
            "relativeStrength20dPct": 0,
            "avgDollarVolume10d": 35141655319,
            "maxSelectedCorrelation": 0.815
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": 0.073,
            "participation": -0.122,
            "volatility": -1.216,
            "gap": 0.015,
            "correlation": 0.815,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLI",
          "rank": 77,
          "previousRank": 77,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.358,
          "metrics": {
            "momentum5d": -0.282,
            "momentum20d": -1.638,
            "realizedVol10dAnnualized": 11.98,
            "volumeRatio": 0.792,
            "atrPct": 1.352,
            "gapPct": 0.925,
            "relativeStrength5dPct": -0.06,
            "relativeStrength20dPct": -2.223,
            "avgDollarVolume10d": 1309791030,
            "maxSelectedCorrelation": 0.824
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.004,
            "participation": -0.682,
            "volatility": -0.965,
            "gap": 0.054,
            "correlation": 0.824,
            "regimeFit": null
          }
        },
        {
          "symbol": "MRK",
          "rank": 78,
          "previousRank": 78,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.365,
          "metrics": {
            "momentum5d": -3.011,
            "momentum20d": -4.84,
            "realizedVol10dAnnualized": 20.11,
            "volumeRatio": 1.142,
            "atrPct": 2.247,
            "gapPct": -0.028,
            "relativeStrength5dPct": -2.789,
            "relativeStrength20dPct": -5.426,
            "avgDollarVolume10d": 1314682696,
            "maxSelectedCorrelation": 0.564
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.564,
            "participation": 0.164,
            "volatility": -0.329,
            "gap": 0.547,
            "correlation": 0.564,
            "regimeFit": null
          }
        },
        {
          "symbol": "EWU",
          "rank": 79,
          "previousRank": 79,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.374,
          "metrics": {
            "momentum5d": -2.409,
            "momentum20d": -4.231,
            "realizedVol10dAnnualized": 11.71,
            "volumeRatio": 1.787,
            "atrPct": 1.174,
            "gapPct": 0.305,
            "relativeStrength5dPct": -2.187,
            "relativeStrength20dPct": -4.816,
            "avgDollarVolume10d": 59225389,
            "maxSelectedCorrelation": 0.362
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.443,
            "participation": 1.721,
            "volatility": -1.063,
            "gap": 0.337,
            "correlation": 0.362,
            "regimeFit": null
          }
        },
        {
          "symbol": "UNH",
          "rank": 80,
          "previousRank": 80,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.382,
          "metrics": {
            "momentum5d": -1.245,
            "momentum20d": -6.946,
            "realizedVol10dAnnualized": 16.99,
            "volumeRatio": 0.796,
            "atrPct": 1.973,
            "gapPct": -0.016,
            "relativeStrength5dPct": -1.024,
            "relativeStrength20dPct": -7.531,
            "avgDollarVolume10d": 1591460487,
            "maxSelectedCorrelation": 0.357
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.329,
            "participation": -0.673,
            "volatility": -0.538,
            "gap": 0.539,
            "correlation": 0.357,
            "regimeFit": null
          }
        },
        {
          "symbol": "MCD",
          "rank": 81,
          "previousRank": 81,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.395,
          "metrics": {
            "momentum5d": -1.949,
            "momentum20d": -11.136,
            "realizedVol10dAnnualized": 24.27,
            "volumeRatio": 1.122,
            "atrPct": 2.033,
            "gapPct": 0.375,
            "relativeStrength5dPct": -1.728,
            "relativeStrength20dPct": -11.722,
            "avgDollarVolume10d": 1632922998,
            "maxSelectedCorrelation": 0.505
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.575,
            "participation": 0.114,
            "volatility": -0.348,
            "gap": 0.293,
            "correlation": 0.505,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIA",
          "rank": 82,
          "previousRank": 82,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.417,
          "metrics": {
            "momentum5d": -1.235,
            "momentum20d": -3.679,
            "realizedVol10dAnnualized": 9.45,
            "volumeRatio": 1.335,
            "atrPct": 1.026,
            "gapPct": 0.771,
            "relativeStrength5dPct": -1.013,
            "relativeStrength20dPct": -4.264,
            "avgDollarVolume10d": 1648486627,
            "maxSelectedCorrelation": 0.729
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.228,
            "participation": 0.629,
            "volatility": -1.188,
            "gap": 0.043,
            "correlation": 0.729,
            "regimeFit": null
          }
        },
        {
          "symbol": "WMT",
          "rank": 83,
          "previousRank": 83,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.418,
          "metrics": {
            "momentum5d": -3.445,
            "momentum20d": -1.725,
            "realizedVol10dAnnualized": 24.86,
            "volumeRatio": 1.008,
            "atrPct": 1.974,
            "gapPct": 0.652,
            "relativeStrength5dPct": -3.223,
            "relativeStrength20dPct": -2.31,
            "avgDollarVolume10d": 2406921387,
            "maxSelectedCorrelation": 0.355
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.542,
            "participation": -0.16,
            "volatility": -0.366,
            "gap": 0.118,
            "correlation": 0.355,
            "regimeFit": null
          }
        },
        {
          "symbol": "PYPL",
          "rank": 84,
          "previousRank": 84,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.426,
          "metrics": {
            "momentum5d": -4.07,
            "momentum20d": -3.421,
            "realizedVol10dAnnualized": 28.6,
            "volumeRatio": 0.767,
            "atrPct": 2.634,
            "gapPct": 0.302,
            "relativeStrength5dPct": -3.848,
            "relativeStrength20dPct": -4.006,
            "avgDollarVolume10d": 652133319,
            "maxSelectedCorrelation": 0.568
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.7,
            "participation": -0.743,
            "volatility": 0.054,
            "gap": 0.339,
            "correlation": 0.568,
            "regimeFit": null
          }
        },
        {
          "symbol": "LMT",
          "rank": 85,
          "previousRank": 85,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.444,
          "metrics": {
            "momentum5d": -2.723,
            "momentum20d": -4.918,
            "realizedVol10dAnnualized": 12.65,
            "volumeRatio": 0.93,
            "atrPct": 2.235,
            "gapPct": 0.057,
            "relativeStrength5dPct": -2.502,
            "relativeStrength20dPct": -5.503,
            "avgDollarVolume10d": 563036852,
            "maxSelectedCorrelation": 0.531
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.517,
            "participation": -0.348,
            "volatility": -0.497,
            "gap": 0.493,
            "correlation": 0.531,
            "regimeFit": null
          }
        },
        {
          "symbol": "RSP",
          "rank": 86,
          "previousRank": 86,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.449,
          "metrics": {
            "momentum5d": -0.654,
            "momentum20d": -4.058,
            "realizedVol10dAnnualized": 7.22,
            "volumeRatio": 1.123,
            "atrPct": 0.892,
            "gapPct": 0.56,
            "relativeStrength5dPct": -0.432,
            "relativeStrength20dPct": -4.643,
            "avgDollarVolume10d": 1613081635,
            "maxSelectedCorrelation": 0.845
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.141,
            "participation": 0.117,
            "volatility": -1.305,
            "gap": 0.176,
            "correlation": 0.845,
            "regimeFit": null
          }
        },
        {
          "symbol": "MS",
          "rank": 87,
          "previousRank": 87,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.454,
          "metrics": {
            "momentum5d": -3.056,
            "momentum20d": -10.155,
            "realizedVol10dAnnualized": 21.84,
            "volumeRatio": 1.053,
            "atrPct": 2.443,
            "gapPct": 0.495,
            "relativeStrength5dPct": -2.835,
            "relativeStrength20dPct": -10.74,
            "avgDollarVolume10d": 1098292318,
            "maxSelectedCorrelation": 0.606
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.733,
            "participation": -0.051,
            "volatility": -0.19,
            "gap": 0.217,
            "correlation": 0.606,
            "regimeFit": null
          }
        },
        {
          "symbol": "UBER",
          "rank": 88,
          "previousRank": 88,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.473,
          "metrics": {
            "momentum5d": -2.169,
            "momentum20d": -10.909,
            "realizedVol10dAnnualized": 17.18,
            "volumeRatio": 1.026,
            "atrPct": 2.118,
            "gapPct": 0.53,
            "relativeStrength5dPct": -1.947,
            "relativeStrength20dPct": -11.495,
            "avgDollarVolume10d": 1139017162,
            "maxSelectedCorrelation": 0.694
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.605,
            "participation": -0.118,
            "volatility": -0.459,
            "gap": 0.195,
            "correlation": 0.694,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLV",
          "rank": 89,
          "previousRank": 89,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.48,
          "metrics": {
            "momentum5d": -5.848,
            "momentum20d": -7.33,
            "realizedVol10dAnnualized": 35.78,
            "volumeRatio": 1.123,
            "atrPct": 3.019,
            "gapPct": 0.8,
            "relativeStrength5dPct": -5.626,
            "relativeStrength20dPct": -7.916,
            "avgDollarVolume10d": 836046235,
            "maxSelectedCorrelation": 0.598
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.119,
            "participation": 0.118,
            "volatility": 0.409,
            "gap": 0.025,
            "correlation": 0.598,
            "regimeFit": null
          }
        },
        {
          "symbol": "AXP",
          "rank": 90,
          "previousRank": 90,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.483,
          "metrics": {
            "momentum5d": -1.978,
            "momentum20d": -8.243,
            "realizedVol10dAnnualized": 17.49,
            "volumeRatio": 0.775,
            "atrPct": 2.049,
            "gapPct": 0.632,
            "relativeStrength5dPct": -1.756,
            "relativeStrength20dPct": -8.828,
            "avgDollarVolume10d": 1085926521,
            "maxSelectedCorrelation": 0.26
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.492,
            "participation": -0.723,
            "volatility": -0.488,
            "gap": 0.131,
            "correlation": 0.26,
            "regimeFit": null
          }
        },
        {
          "symbol": "C",
          "rank": 91,
          "previousRank": 91,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.483,
          "metrics": {
            "momentum5d": -4.304,
            "momentum20d": -4.347,
            "realizedVol10dAnnualized": 24.23,
            "volumeRatio": 0.791,
            "atrPct": 2.714,
            "gapPct": 1.063,
            "relativeStrength5dPct": -4.083,
            "relativeStrength20dPct": -4.933,
            "avgDollarVolume10d": 1220811680,
            "maxSelectedCorrelation": 0.617
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.767,
            "participation": -0.685,
            "volatility": 0.001,
            "gap": 0.141,
            "correlation": 0.617,
            "regimeFit": null
          }
        },
        {
          "symbol": "RTX",
          "rank": 92,
          "previousRank": 92,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.487,
          "metrics": {
            "momentum5d": -2.492,
            "momentum20d": -8.019,
            "realizedVol10dAnnualized": 12.58,
            "volumeRatio": 1.031,
            "atrPct": 1.929,
            "gapPct": -0.276,
            "relativeStrength5dPct": -2.27,
            "relativeStrength20dPct": -8.604,
            "avgDollarVolume10d": 693211127,
            "maxSelectedCorrelation": 0.467
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.572,
            "participation": -0.105,
            "volatility": -0.656,
            "gap": 0.703,
            "correlation": 0.467,
            "regimeFit": null
          }
        },
        {
          "symbol": "PFE",
          "rank": 93,
          "previousRank": 93,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.487,
          "metrics": {
            "momentum5d": -3.035,
            "momentum20d": -4.204,
            "realizedVol10dAnnualized": 12.9,
            "volumeRatio": 1.165,
            "atrPct": 1.693,
            "gapPct": 0.107,
            "relativeStrength5dPct": -2.813,
            "relativeStrength20dPct": -4.79,
            "avgDollarVolume10d": 859438644,
            "maxSelectedCorrelation": 0.523
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.548,
            "participation": 0.22,
            "volatility": -0.77,
            "gap": 0.462,
            "correlation": 0.523,
            "regimeFit": null
          }
        },
        {
          "symbol": "V",
          "rank": 94,
          "previousRank": 94,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.493,
          "metrics": {
            "momentum5d": -1.829,
            "momentum20d": -4.688,
            "realizedVol10dAnnualized": 16.76,
            "volumeRatio": 0.689,
            "atrPct": 1.568,
            "gapPct": 0.1,
            "relativeStrength5dPct": -1.607,
            "relativeStrength20dPct": -5.274,
            "avgDollarVolume10d": 2111505631,
            "maxSelectedCorrelation": 0.262
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.359,
            "participation": -0.933,
            "volatility": -0.751,
            "gap": 0.466,
            "correlation": 0.262,
            "regimeFit": null
          }
        },
        {
          "symbol": "WFC",
          "rank": 95,
          "previousRank": 95,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.502,
          "metrics": {
            "momentum5d": -3.037,
            "momentum20d": -9.88,
            "realizedVol10dAnnualized": 23.43,
            "volumeRatio": 0.715,
            "atrPct": 2.474,
            "gapPct": 0.087,
            "relativeStrength5dPct": -2.816,
            "relativeStrength20dPct": -10.466,
            "avgDollarVolume10d": 1072285829,
            "maxSelectedCorrelation": 0.397
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.721,
            "participation": -0.869,
            "volatility": -0.14,
            "gap": 0.474,
            "correlation": 0.397,
            "regimeFit": null
          }
        },
        {
          "symbol": "GLD",
          "rank": 96,
          "previousRank": 96,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.512,
          "metrics": {
            "momentum5d": -3.373,
            "momentum20d": -5.621,
            "realizedVol10dAnnualized": 22.26,
            "volumeRatio": 1.046,
            "atrPct": 1.754,
            "gapPct": 0.442,
            "relativeStrength5dPct": -3.151,
            "relativeStrength20dPct": -6.206,
            "avgDollarVolume10d": 3045773031,
            "maxSelectedCorrelation": 0.565
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.648,
            "participation": -0.07,
            "volatility": -0.536,
            "gap": 0.251,
            "correlation": 0.565,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLB",
          "rank": 97,
          "previousRank": 97,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.526,
          "metrics": {
            "momentum5d": -1.888,
            "momentum20d": -7.724,
            "realizedVol10dAnnualized": 12.76,
            "volumeRatio": 0.997,
            "atrPct": 1.504,
            "gapPct": 0.597,
            "relativeStrength5dPct": -1.666,
            "relativeStrength20dPct": -8.31,
            "avgDollarVolume10d": 626104751,
            "maxSelectedCorrelation": 0.61
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.461,
            "participation": -0.187,
            "volatility": -0.87,
            "gap": 0.152,
            "correlation": 0.61,
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
          "quantScore": -0.529,
          "metrics": {
            "momentum5d": -3.113,
            "momentum20d": -6.692,
            "realizedVol10dAnnualized": 21.27,
            "volumeRatio": 0.716,
            "atrPct": 2.119,
            "gapPct": 0.246,
            "relativeStrength5dPct": -2.891,
            "relativeStrength20dPct": -7.278,
            "avgDollarVolume10d": 2826343515,
            "maxSelectedCorrelation": 0.373
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.637,
            "participation": -0.866,
            "volatility": -0.369,
            "gap": 0.374,
            "correlation": 0.373,
            "regimeFit": null
          }
        },
        {
          "symbol": "GS",
          "rank": 99,
          "previousRank": 99,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "REJECT",
          "quantScore": -0.537,
          "metrics": {
            "momentum5d": -3.516,
            "momentum20d": -10.141,
            "realizedVol10dAnnualized": 20.15,
            "volumeRatio": 0.8,
            "atrPct": 2.69,
            "gapPct": 0.986,
            "relativeStrength5dPct": -3.294,
            "relativeStrength20dPct": -10.727,
            "avgDollarVolume10d": 1809542539,
            "maxSelectedCorrelation": 0.806
          },
          "selectionReason": "Absolute correlation with earlier selected instruments exceeds 0.80.",
          "factors": {
            "momentum": -0.81,
            "participation": -0.664,
            "volatility": -0.1,
            "gap": 0.092,
            "correlation": 0.806,
            "regimeFit": null
          }
        },
        {
          "symbol": "LQD",
          "rank": 100,
          "previousRank": 100,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.551,
          "metrics": {
            "momentum5d": -1.337,
            "momentum20d": -3.341,
            "realizedVol10dAnnualized": 6.76,
            "volumeRatio": 1.027,
            "atrPct": 0.688,
            "gapPct": 0.333,
            "relativeStrength5dPct": -1.115,
            "relativeStrength20dPct": -3.927,
            "avgDollarVolume10d": 4167934561,
            "maxSelectedCorrelation": 0.724
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.235,
            "participation": -0.114,
            "volatility": -1.42,
            "gap": 0.319,
            "correlation": 0.724,
            "regimeFit": null
          }
        },
        {
          "symbol": "GE",
          "rank": 101,
          "previousRank": 101,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.551,
          "metrics": {
            "momentum5d": -5.359,
            "momentum20d": -6.052,
            "realizedVol10dAnnualized": 21.65,
            "volumeRatio": 1.05,
            "atrPct": 2.744,
            "gapPct": 1.316,
            "relativeStrength5dPct": -5.138,
            "relativeStrength20dPct": -6.637,
            "avgDollarVolume10d": 1215174675,
            "maxSelectedCorrelation": 0.555
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.998,
            "participation": -0.058,
            "volatility": -0.04,
            "gap": 0.3,
            "correlation": 0.555,
            "regimeFit": null
          }
        },
        {
          "symbol": "F",
          "rank": 102,
          "previousRank": 102,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.567,
          "metrics": {
            "momentum5d": -4.799,
            "momentum20d": -14.427,
            "realizedVol10dAnnualized": 21.28,
            "volumeRatio": 1.155,
            "atrPct": 3.04,
            "gapPct": 0.244,
            "relativeStrength5dPct": -4.578,
            "relativeStrength20dPct": -15.013,
            "avgDollarVolume10d": 538017926,
            "maxSelectedCorrelation": 0.696
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.157,
            "participation": 0.194,
            "volatility": 0.104,
            "gap": 0.375,
            "correlation": 0.696,
            "regimeFit": null
          }
        },
        {
          "symbol": "DIS",
          "rank": 103,
          "previousRank": 103,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.569,
          "metrics": {
            "momentum5d": -3.731,
            "momentum20d": -5.362,
            "realizedVol10dAnnualized": 22.36,
            "volumeRatio": 0.706,
            "atrPct": 2.042,
            "gapPct": 0.168,
            "relativeStrength5dPct": -3.509,
            "relativeStrength20dPct": -5.948,
            "avgDollarVolume10d": 865589175,
            "maxSelectedCorrelation": 0.198
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.701,
            "participation": -0.891,
            "volatility": -0.385,
            "gap": 0.423,
            "correlation": 0.198,
            "regimeFit": null
          }
        },
        {
          "symbol": "MA",
          "rank": 104,
          "previousRank": 104,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.58,
          "metrics": {
            "momentum5d": -2.711,
            "momentum20d": -6.101,
            "realizedVol10dAnnualized": 16.89,
            "volumeRatio": 0.747,
            "atrPct": 1.616,
            "gapPct": 0.24,
            "relativeStrength5dPct": -2.489,
            "relativeStrength20dPct": -6.686,
            "avgDollarVolume10d": 1673657095,
            "maxSelectedCorrelation": 0.193
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.551,
            "participation": -0.791,
            "volatility": -0.723,
            "gap": 0.378,
            "correlation": 0.193,
            "regimeFit": null
          }
        },
        {
          "symbol": "HD",
          "rank": 105,
          "previousRank": 105,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.588,
          "metrics": {
            "momentum5d": -3.53,
            "momentum20d": -11.196,
            "realizedVol10dAnnualized": 22.02,
            "volumeRatio": 0.774,
            "atrPct": 2.349,
            "gapPct": 1.452,
            "relativeStrength5dPct": -3.308,
            "relativeStrength20dPct": -11.781,
            "avgDollarVolume10d": 1650624952,
            "maxSelectedCorrelation": 0.469
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.844,
            "participation": -0.726,
            "volatility": -0.235,
            "gap": 0.386,
            "correlation": 0.469,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLV",
          "rank": 106,
          "previousRank": 106,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.596,
          "metrics": {
            "momentum5d": -2.648,
            "momentum20d": -3.914,
            "realizedVol10dAnnualized": 11.3,
            "volumeRatio": 0.827,
            "atrPct": 1.342,
            "gapPct": 0.211,
            "relativeStrength5dPct": -2.426,
            "relativeStrength20dPct": -4.5,
            "avgDollarVolume10d": 1352804848,
            "maxSelectedCorrelation": 0.281
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.474,
            "participation": -0.598,
            "volatility": -0.986,
            "gap": 0.396,
            "correlation": 0.281,
            "regimeFit": null
          }
        },
        {
          "symbol": "JNJ",
          "rank": 107,
          "previousRank": 108,
          "rankChange": 1,
          "rankChangeLabel": "+1",
          "status": "WATCH",
          "quantScore": -0.601,
          "metrics": {
            "momentum5d": -5.601,
            "momentum20d": -6.969,
            "realizedVol10dAnnualized": 13.96,
            "volumeRatio": 1.735,
            "atrPct": 1.902,
            "gapPct": 0.278,
            "relativeStrength5dPct": -5.379,
            "relativeStrength20dPct": -7.555,
            "avgDollarVolume10d": 1679083136,
            "maxSelectedCorrelation": 0.534
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.066,
            "participation": 1.598,
            "volatility": -0.64,
            "gap": 0.354,
            "correlation": 0.534,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLP",
          "rank": 108,
          "previousRank": 107,
          "rankChange": -1,
          "rankChangeLabel": "-1",
          "status": "WATCH",
          "quantScore": -0.602,
          "metrics": {
            "momentum5d": -1.864,
            "momentum20d": -5.846,
            "realizedVol10dAnnualized": 11.57,
            "volumeRatio": 0.756,
            "atrPct": 1.134,
            "gapPct": 0.174,
            "relativeStrength5dPct": -1.643,
            "relativeStrength20dPct": -6.431,
            "avgDollarVolume10d": 895659478,
            "maxSelectedCorrelation": 0.333
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.4,
            "participation": -0.77,
            "volatility": -1.086,
            "gap": 0.419,
            "correlation": 0.333,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLRE",
          "rank": 109,
          "previousRank": 109,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.612,
          "metrics": {
            "momentum5d": -1.805,
            "momentum20d": -6.677,
            "realizedVol10dAnnualized": 8.4,
            "volumeRatio": 0.829,
            "atrPct": 1.247,
            "gapPct": 0.688,
            "relativeStrength5dPct": -1.583,
            "relativeStrength20dPct": -7.263,
            "avgDollarVolume10d": 275882547,
            "maxSelectedCorrelation": 0.607
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.415,
            "participation": -0.594,
            "volatility": -1.097,
            "gap": 0.095,
            "correlation": 0.607,
            "regimeFit": null
          }
        },
        {
          "symbol": "TLT",
          "rank": 110,
          "previousRank": 110,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.634,
          "metrics": {
            "momentum5d": -2.32,
            "momentum20d": -5.455,
            "realizedVol10dAnnualized": 9.86,
            "volumeRatio": 0.855,
            "atrPct": 1.103,
            "gapPct": 0.296,
            "relativeStrength5dPct": -2.098,
            "relativeStrength20dPct": -6.04,
            "avgDollarVolume10d": 4514015213,
            "maxSelectedCorrelation": 0.776
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.465,
            "participation": -0.53,
            "volatility": -1.14,
            "gap": 0.343,
            "correlation": 0.776,
            "regimeFit": null
          }
        },
        {
          "symbol": "HYG",
          "rank": 111,
          "previousRank": 111,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.635,
          "metrics": {
            "momentum5d": -1.22,
            "momentum20d": -2.781,
            "realizedVol10dAnnualized": 3.97,
            "volumeRatio": 0.811,
            "atrPct": 0.482,
            "gapPct": 0.416,
            "relativeStrength5dPct": -0.998,
            "relativeStrength20dPct": -3.366,
            "avgDollarVolume10d": 6227821387,
            "maxSelectedCorrelation": 0.636
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.198,
            "participation": -0.637,
            "volatility": -1.587,
            "gap": 0.267,
            "correlation": 0.636,
            "regimeFit": null
          }
        },
        {
          "symbol": "XLF",
          "rank": 112,
          "previousRank": 112,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.655,
          "metrics": {
            "momentum5d": -2.462,
            "momentum20d": -7.232,
            "realizedVol10dAnnualized": 11.65,
            "volumeRatio": 0.69,
            "atrPct": 1.395,
            "gapPct": 0.15,
            "relativeStrength5dPct": -2.24,
            "relativeStrength20dPct": -7.818,
            "avgDollarVolume10d": 2255303220,
            "maxSelectedCorrelation": 0.429
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.543,
            "participation": -0.929,
            "volatility": -0.95,
            "gap": 0.435,
            "correlation": 0.429,
            "regimeFit": null
          }
        },
        {
          "symbol": "LOW",
          "rank": 113,
          "previousRank": 113,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.657,
          "metrics": {
            "momentum5d": -4.48,
            "momentum20d": -9.528,
            "realizedVol10dAnnualized": 20.87,
            "volumeRatio": 0.747,
            "atrPct": 2.432,
            "gapPct": 1.223,
            "relativeStrength5dPct": -4.258,
            "relativeStrength20dPct": -10.113,
            "avgDollarVolume10d": 632986235,
            "maxSelectedCorrelation": 0.501
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -0.954,
            "participation": -0.792,
            "volatility": -0.217,
            "gap": 0.242,
            "correlation": 0.501,
            "regimeFit": null
          }
        },
        {
          "symbol": "SLB",
          "rank": 114,
          "previousRank": 114,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.66,
          "metrics": {
            "momentum5d": -5.433,
            "momentum20d": -16.153,
            "realizedVol10dAnnualized": 20.16,
            "volumeRatio": 0.814,
            "atrPct": 3.142,
            "gapPct": -1.932,
            "relativeStrength5dPct": -5.211,
            "relativeStrength20dPct": -16.739,
            "avgDollarVolume10d": 651844883,
            "maxSelectedCorrelation": 0.474
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.317,
            "participation": -0.629,
            "volatility": 0.133,
            "gap": 1.747,
            "correlation": 0.474,
            "regimeFit": null
          }
        },
        {
          "symbol": "NFLX",
          "rank": 115,
          "previousRank": 115,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.732,
          "metrics": {
            "momentum5d": -5.748,
            "momentum20d": -18.941,
            "realizedVol10dAnnualized": 24.27,
            "volumeRatio": 1.077,
            "atrPct": 2.901,
            "gapPct": -0.368,
            "relativeStrength5dPct": -5.527,
            "relativeStrength20dPct": -19.527,
            "avgDollarVolume10d": 2347567993,
            "maxSelectedCorrelation": 0.559
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.455,
            "participation": 0.007,
            "volatility": 0.098,
            "gap": 0.761,
            "correlation": 0.559,
            "regimeFit": null
          }
        },
        {
          "symbol": "BAC",
          "rank": 116,
          "previousRank": 116,
          "rankChange": 0,
          "rankChangeLabel": "0",
          "status": "WATCH",
          "quantScore": -0.816,
          "metrics": {
            "momentum5d": -5.203,
            "momentum20d": -14.137,
            "realizedVol10dAnnualized": 18.86,
            "volumeRatio": 0.955,
            "atrPct": 2.066,
            "gapPct": 0.298,
            "relativeStrength5dPct": -4.981,
            "relativeStrength20dPct": -14.723,
            "avgDollarVolume10d": 2013815775,
            "maxSelectedCorrelation": 0.361
          },
          "selectionReason": "Passed liquidity and correlation gates; below the 5 selection slots.",
          "factors": {
            "momentum": -1.217,
            "participation": -0.288,
            "volatility": -0.449,
            "gap": 0.341,
            "correlation": 0.361,
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
            "momentum5d": 1.474,
            "momentum20d": -12.314,
            "realizedVol10dAnnualized": 47.9,
            "volumeRatio": 0.851,
            "atrPct": 5.863,
            "gapPct": 1.909,
            "relativeStrength5dPct": 1.696,
            "relativeStrength20dPct": -12.9,
            "avgDollarVolume10d": 37767488,
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
            "momentum5d": -2.272,
            "momentum20d": -5.101,
            "realizedVol10dAnnualized": 15.98,
            "volumeRatio": 1.235,
            "atrPct": 1.332,
            "gapPct": 1.053,
            "relativeStrength5dPct": -2.05,
            "relativeStrength20dPct": -5.687,
            "avgDollarVolume10d": 40761447,
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
            "momentum5d": -3.694,
            "momentum20d": -7.37,
            "realizedVol10dAnnualized": 17.4,
            "volumeRatio": 1.09,
            "atrPct": 1.477,
            "gapPct": 1.031,
            "relativeStrength5dPct": -3.473,
            "relativeStrength20dPct": -7.956,
            "avgDollarVolume10d": 15245874,
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
      "processedAt": "2026-10-06T10:08:09.928Z",
      "evidenceHash": "733f06c44f1726654d4d769848122b061efde9d0139bb1f1294c03211f4edb54",
      "reports": {
        "scout": {
          "role": "SCOUT",
          "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
          "selectedAt": "2026-10-05T12:10:16.000Z",
          "universeSize": 116,
          "symbols": [
            "ON",
            "MSTR"
          ],
          "candidates": [
            {
              "symbol": "ON",
              "rank": 2,
              "previousRank": 2,
              "rankChange": 0,
              "rankChangeLabel": "0",
              "status": "SELECTED",
              "quantScore": 2.095,
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
              "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
              "factors": {
                "momentum": 2.305,
                "participation": 3.069,
                "volatility": 1.209,
                "gap": 3.147,
                "correlation": 0.322,
                "regimeFit": null
              },
              "setup": "Daily quant momentum / volatility breakout",
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
              "expiresAt": "2026-10-08T12:10:16.000Z",
              "trigger": "Break above $86.09 with sustained participation.",
              "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
              "createdAt": "2026-10-05T12:10:16.000Z",
              "lastReviewedAt": "2026-10-05T12:10:16.000Z",
              "setupId": "ON-20261005-daily-quant"
            },
            {
              "symbol": "MSTR",
              "rank": 5,
              "previousRank": 5,
              "rankChange": 0,
              "rankChangeLabel": "0",
              "status": "SELECTED",
              "quantScore": 1.576,
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
              "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
              "factors": {
                "momentum": 1.15,
                "participation": 1.152,
                "volatility": 2.495,
                "gap": 1.588,
                "correlation": 0.658,
                "regimeFit": null
              },
              "setup": "Daily quant momentum / volatility breakout",
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
              "expiresAt": "2026-10-08T12:10:16.000Z",
              "trigger": "Break above $163.17 with sustained participation.",
              "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
              "createdAt": "2026-10-05T12:10:16.000Z",
              "lastReviewedAt": "2026-10-05T12:10:16.000Z",
              "setupId": "MSTR-20261005-daily-quant"
            }
          ],
          "setups": [
            {
              "symbol": "MSTR",
              "setup": "Daily quant momentum / volatility breakout",
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
              "expiresAt": "2026-10-08T12:10:16.000Z",
              "trigger": "Break above $163.17 with sustained participation.",
              "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
              "quantScore": 1.576,
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
              "createdAt": "2026-10-05T12:10:16.000Z",
              "lastReviewedAt": "2026-10-05T12:10:16.000Z",
              "status": "WATCH_ONLY",
              "setupId": "MSTR-20261005-daily-quant"
            },
            {
              "symbol": "MSTR",
              "setup": "Daily quant momentum / volatility breakout",
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
              "expiresAt": "2026-10-08T12:10:16.000Z",
              "trigger": "Break above $163.17 with sustained participation.",
              "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
              "expectedHorizon": "1-3 trading days",
              "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
              "quantScore": 1.576,
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
              "createdAt": "2026-10-05T12:10:16.000Z",
              "lastReviewedAt": "2026-10-05T12:10:16.000Z",
              "status": "UNTRIGGERED",
              "setupId": "MSTR-20261005-daily-quant"
            }
          ],
          "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
        },
        "quantMacro": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position only. The observed $164.43 is above the documented $156.85 invalidation and above the $163.17 entry trigger, but the purported POSITION_TARGET_LEVEL event is not a valid take-profit signal: $163.17 is consistently defined in the setup metadata as the entry-breakout threshold. Do not add because the required participation confirmation failed; the completed 5-minute bar had zero reported volume against a 206,566.8 baseline. High 10-day realized volatility (57.03%), elevated selected correlation (0.658), and only 0.883% 5-day momentum reinforce a no-add stance.",
          "timeHorizon": "1-3 trading days, subject to setup expiry at 2026-10-08T12:10:16Z",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The price/5-minute observation is timestamped 2026-10-05T20:00:00Z and retrieved on 2026-10-06, so it is not demonstrably fresh. The only completed intraday bar reports zero volume, preventing participation validation. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live catalyst, earnings, or news feed was supplied; absence of such evidence must not be interpreted as absence of event risk. The target-level trigger conflicts with the explicit setup definition.",
          "quantView": "MSTR remains ranked and has strong 20-day momentum (+29.889%) and above-baseline daily volume (1.551x), but the entry condition requires a 5-minute close above $163.17 with participation. Price condition is met, participation is unconfirmed, and the existing position remains above invalidation. HOLD rather than BUY, REDUCE, or SELL.",
          "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Firmer USD, higher rates, weak regional-bank relative performance, and fragile participation argue against expanding a high-volatility momentum exposure; they do not independently evidence an exit below the recorded invalidation.",
          "disagreements": {
            "quant": "Price is above the breakout threshold and long-horizon momentum is favorable, which supports retaining the existing position.",
            "macro": "Tight liquidity and mixed/range conditions argue for restraint and make an unconfirmed breakout unsuitable for additional exposure.",
            "resolution": "HOLD existing reduced exposure; no new EUR allocation until fresh completed-bar volume confirms participation or the invalidation condition is met."
          }
        },
        "risk": {
          "verdict": "APPROVE",
          "reason": "Approve the proposed HOLD only. No incremental exposure is proposed, the existing MSTR position is modest at approximately €150.2 (about 15.0% of €1,000.2 portfolio value), remains above its documented $156.85 invalidation, and the $163.17 event is an entry trigger rather than a valid profit target. A HOLD does not relax the original entry, participation, or invalidation requirements. No add is appropriate because required 5-minute participation is unverified and the high-volatility, tight-liquidity/range backdrop remains unfavorable for expanding exposure.",
          "checks": {
            "proposedAction": "HOLD MSTR; €0 new allocation",
            "positionSizing": {
              "mstrValueEur": 150.2,
              "portfolioValueEur": 1000.2,
              "mstrPortfolioPct": 15.02,
              "maxPositionPct": 35,
              "result": "Within stated position limit"
            },
            "cash": {
              "cashEur": 648.57,
              "result": "No cash use for HOLD"
            },
            "exposure": {
              "onValueEur": 201.44,
              "mstrValueEur": 150.2,
              "grossLongEur": 351.64,
              "grossLongPct": 35.16,
              "result": "Existing gross exposure is moderate; no increase proposed"
            },
            "correlation": {
              "selectedCorrelationForMSTR": 0.658,
              "heldPortfolioAssessment": "MSTR and ON may both retain equity/risk-on sensitivity; supplied selected-universe correlation is not a measured correlation to the actual ON holding. This is a reason not to add, but does not require exit without invalidation evidence."
            },
            "invalidation": {
              "levelUsd": 156.85,
              "rule": "One completed 5-minute close below level",
              "observedPriceUsd": 164.43,
              "result": "Not breached on supplied observation"
            },
            "entryAndTargetIntegrity": {
              "entryTriggerUsd": 163.17,
              "participationRequired": true,
              "reportedBarVolume": 0,
              "baselineVolume": 206566.8,
              "result": "Price is above trigger but participation confirmation failed; $163.17 must not be treated as a take-profit target"
            },
            "horizonAndExpiry": {
              "expectedHorizon": "1-3 trading days",
              "setupExpiresAt": "2026-10-08T12:10:16Z",
              "result": "HOLD should be reassessed at expiry or earlier on fresh invalidation/reversal evidence"
            },
            "catalystRisk": {
              "status": "Unknown",
              "result": "No catalyst/earnings/news evidence supports assuming event risk is absent"
            }
          },
          "evidenceLimitations": [
            "The price and completed 5-minute bar are from 2026-10-05T20:00:00Z, retrieved on 2026-10-06, and are not demonstrably current at decision time.",
            "The zero reported intraday volume makes participation validation unavailable; it should not be interpreted as genuine zero trading volume.",
            "The macro/regime observation is dated 2026-10-01, marked SHADOW, and is stale for a short-horizon decision.",
            "No live catalyst, earnings calendar, news, or corporate-action feed was provided; event risk is unknown.",
            "The reported 0.658 correlation is selection correlation, not measured correlation against the actual ON position or total held portfolio.",
            "Portfolio position metadata conflict across setup versions for ON, though this does not alter the MSTR HOLD assessment."
          ]
        },
        "pm": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only.",
          "timeHorizon": "1-3 trading days; reassess at setup expiry on 2026-10-08T12:10:16Z or earlier upon fresh completed-bar invalidation or reversal evidence.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The observed price and 5-minute bar are timestamped 2026-10-05T20:00:00Z and are not demonstrably current at decision time. Zero reported volume prevents participation validation and should not be treated as actual zero trading. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live news, earnings, catalyst, or corporate-action data were supplied, so event risk is unknown. The stated correlation is a selection-universe measure, not correlation versus the held ON position.",
          "reportTreatment": "Quant/Macro is treated as decision support: its HOLD is accepted because MSTR is above invalidation but lacks required participation for any add; its characterization of $163.17 as an entry trigger overrides the contradictory target-level event label. Risk is treated as controlling on constraints: it approves HOLD only, confirms no invalidation breach, and rejects incremental exposure under the high-volatility, tight-liquidity conditions."
        },
        "hardRisk": {
          "verdict": "APPROVE",
          "errors": []
        },
        "critic": {
          "verdict": "PASS",
          "reason": "The final proposal is a non-sizing HOLD of the existing MSTR paper position and is internally consistent with the supplied position, price, setup metadata, and stated risk approval. The supplied completed 5-minute close of $164.43 is above the $156.85 invalidation level, so no documented invalidation-based reduction or exit is evidenced. It correctly rejects the sensor's POSITION_TARGET_LEVEL label because $163.17 is consistently defined elsewhere as the entry-breakout trigger, not a profit target. It also correctly treats the zero-volume bar as failure/unavailability of participation confirmation and therefore does not use the above-trigger price to justify an add. No risk-limit breach or hard-risk veto applies to a €0 HOLD action.",
          "checks": {
            "actionAndSizing": "PASS: Proposal is HOLD MSTR with €0 allocation; it neither uses cash nor increases exposure.",
            "positionArithmetic": "PASS: MSTR value of approximately €150.2 is consistent with 1.02771459 shares at $164.42999 and EURUSD 1.1251125 (approximately €150.2). This is about 15.0% of the €1,000.2 portfolio, below the 35% maximum-position limit.",
            "portfolioArithmetic": "PASS_WITH_ROUNDING: Cash €648.57 plus displayed position values €201.44 and €150.20 totals €1,000.21 versus stated €1,000.20; the €0.01 difference is immaterial display rounding. Displayed total P&L also reconciles within rounding.",
            "invalidation": "PASS: $164.43 is above MSTR's $156.85 invalidation threshold. The documented rule requires one completed 5-minute close below that threshold, and none is supplied.",
            "thesisAndTriggerIntegrity": "PASS: The proposal appropriately distinguishes the explicit $163.17 entry rule from the contradictory target-level sensor label. It does not claim a take-profit condition or invent a target.",
            "participation": "PASS: The proposal does not characterize reported zero volume as actual trading volume and correctly concludes that required participation cannot be validated. This supports no add, while not requiring liquidation of an already-held position absent invalidation evidence.",
            "riskVeto": "PASS: Supplied Risk and HardRisk approve HOLD only. The proposal follows that constraint and does not increase the high-volatility MSTR exposure in a TIGHT-liquidity/RANGE regime.",
            "timingAndExpiry": "PASS: The stated reassessment point of 2026-10-08T12:10:16Z matches the MSTR setup expiry. The proposal also conditions earlier review on fresh invalidation or reversal evidence.",
            "missingParticipationForHold": "PASS: Current participation is missing, but this does not invalidate a HOLD under the supplied rules; it bars confirmation for a new/additional entry. The proposal makes no unsupported claim that the original entry is newly confirmed."
          },
          "evidenceLimitations": [
            "The market observation is stale for the 2026-10-06T10:08Z decision: its completed-bar market time is 2026-10-05T20:00:00Z. It is the prior regular-session close, not demonstrably current decision-time pricing.",
            "The sole intraday bar reports zero volume, so participation cannot be verified; this must not be interpreted as genuine zero market activity.",
            "Regime evidence is from 2026-10-01 and is explicitly SHADOW/decision-support research, not a current executable risk signal.",
            "No news, earnings, corporate-action, or catalyst data are supplied. The proposal correctly labels event risk unknown rather than inferring its absence.",
            "The 0.658 correlation is a selected-universe statistic, not a measured correlation against the held ON position; it is unsuitable for precise portfolio-correlation conclusions.",
            "There are setup-version inconsistencies for ON and historical claims of prior MSTR participation confirmation, but they do not contradict the specific MSTR HOLD conclusion based on the supplied current observation and invalidation rule."
          ]
        }
      },
      "decision": {
        "decision": "HOLD",
        "symbol": "MSTR",
        "eurAmount": 0,
        "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only.",
        "timeHorizon": "1-3 trading days; reassess at setup expiry on 2026-10-08T12:10:16Z or earlier upon fresh completed-bar invalidation or reversal evidence.",
        "riskLevel": "HIGH",
        "evidenceLimitations": "The observed price and 5-minute bar are timestamped 2026-10-05T20:00:00Z and are not demonstrably current at decision time. Zero reported volume prevents participation validation and should not be treated as actual zero trading. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live news, earnings, catalyst, or corporate-action data were supplied, so event risk is unknown. The stated correlation is a selection-universe measure, not correlation versus the held ON position.",
        "reportTreatment": "Quant/Macro is treated as decision support: its HOLD is accepted because MSTR is above invalidation but lacks required participation for any add; its characterization of $163.17 as an entry trigger overrides the contradictory target-level event label. Risk is treated as controlling on constraints: it approves HOLD only, confirms no invalidation breach, and rejects incremental exposure under the high-volatility, tight-liquidity conditions."
      },
      "tradePermitted": false,
      "decisionKey": "28b07e4159527476",
      "triggerKey": "c3d75e106e0d7373",
      "baseCommitSha": "69ac87014caded0cf21b19d27e7e1dd6337aa912",
      "portfolioMutation": false
    },
    "agentTeamHistory": [
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T04:29:39.250Z",
        "evidenceHash": "6658ce02aed9b02ddc2986b1f46a052c3ab41985416cad83a7f4d29395f9d89c",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "MSTR remains above its $163.17 breakout level ($164.43 observed) and well above the $156.85 invalidation, so no exit condition is evidenced. However, the required participation confirmation failed because the observed 5-minute bar reported zero volume versus a stated baseline, despite the close being above the trigger. The target-level alert alone is not sufficient evidence to add exposure, particularly given 57% annualized 10-day realized volatility, 6.18% ATR, and 0.66 selected-correlation reading.",
            "timeHorizon": "1-3 trading days, subject to reassessment before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The decisive intraday observation is a 2026-10-05 20:00 UTC bar with zero reported volume, so participation cannot be verified and may reflect session/data artifacts. Macro-regime inputs were observed on 2026-10-01 and are stale relative to this decision. No live catalyst, earnings, or crypto-market feed was supplied; absence of such evidence must not be interpreted as absence of event risk. The regime engine is SHADOW-only and explicitly requires fresh market data.",
            "quantView": "MSTR ranks positively on 20-day momentum (+29.9%), volume ratio (1.55x), and relative strength (+29.3% over 20 days), with price 0.77% above entry trigger. Counterweights are weak 5-day momentum (+0.9%), high realized volatility (57.0%), high ATR (6.18%), and relatively elevated selected correlation (0.658). Since the entry rule explicitly requires a completed close above $163.17 with participation, price confirmation is present but volume confirmation is absent; maintain rather than add or reduce while price remains above invalidation.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Its underlying evidence indicates a firmer dollar, modestly higher 10-year yield, and weak regional-bank-relative liquidity proxy, which argues against increasing a high-volatility momentum position without full confirmation. VIX level was below 20 but delayed, so it does not offset the liquidity and data-timeliness concerns.",
            "disagreements": "The price-only target alert supports a constructive hold because MSTR is above its breakout level. The rule-based confirmation evidence disagrees with any BUY/add decision because participation was not confirmed. No evidence supports SELL or REDUCE because the observed price is above $156.85 invalidation and no confirmed momentum reversal was supplied."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only. MSTR is an existing approximately €150.58 position (about 15.0% of €1,001.11 portfolio value), below the 35% single-position limit and with no proposed incremental exposure. The observed $164.43 price remains above both the $163.17 breakout level and $156.85 invalidation. Required participation confirmation is unavailable/failed because the reported completed 5-minute bar has zero volume; this blocks any add but does not independently establish an exit. The 1-3 trading-day horizon remains within the stated 2026-10-08 expiry window.",
            "checks": {
              "proposedAction": "HOLD; €0 additional capital",
              "cashAndSizing": "€648.57 cash; no cash deployment proposed. MSTR is approximately 15.0% of portfolio value; ON is approximately 20.2%, for about 35.2% combined equity exposure before any market movement.",
              "positionLimit": "PASS for HOLD. MSTR is below the stated 35% maximum position percentage.",
              "incrementalRisk": "PASS for HOLD; no new exposure or leverage is proposed.",
              "correlationAndConcentration": "CAUTION. The supplied 0.658 is selected-universe correlation, not a demonstrated correlation to the held ON position. Both holdings are momentum equities and can share broad risk-off, liquidity, rates, and USD sensitivity. This is relevant to future adds, not a reason by itself to exit.",
              "invalidation": "No supplied completed 5-minute close below $156.85. Continue to treat a qualifying close below that level, or independently verified breakout/momentum failure, as the stated invalidation condition.",
              "entryConfirmation": "FAIL for any add. Price closed above $163.17, but participation cannot be confirmed from a zero-volume bar against the cited volume baseline.",
              "expiryAndHorizon": "PASS conditionally. Decision timestamp is before setup expiry of 2026-10-08T12:10:16Z; reassessment is required by expiry. The 1-3 trading-day holding horizon is short and should not be silently extended after expiry.",
              "regimeAndCatalyst": "CAUTION. Supplied regime is neutral/range with tight liquidity and a 0.68 size multiplier; no current catalyst or earnings evidence is available."
            },
            "evidenceLimitations": [
              "The decisive price/volume observation is a 2026-10-05 20:00 UTC bar with reported zero volume, plausibly a session or data artifact; it cannot validate participation.",
              "Macro/regime observations are dated 2026-10-01 and are stale relative to the proposed decision.",
              "No live news, earnings-calendar, corporate-action, or crypto-market data was supplied. MSTR may have material event and Bitcoin-linked risks that cannot be assessed here.",
              "The trigger labels $163.17 as a target-level alert even though the documented setup treats it as an entry trigger; the alert is not evidence of an achieved profit target.",
              "Selected-candidate correlation is not measured held-portfolio correlation, and no current covariance/beta data for MSTR versus ON was supplied.",
              "Approval is risk review only and is not an instruction to trade."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR position only. The observed price of $164.43 remains above the documented $163.17 breakout/entry level and the $156.85 invalidation, with no supplied completed 5-minute close below invalidation or independently verified momentum failure. Do not add: the setup explicitly requires participation, while the only completed 5-minute observation reports zero volume and therefore fails to confirm participation. The neutral/range, tight-liquidity regime and MSTR's high 57% realized volatility, 6.18% ATR, and elevated selected correlation further argue against increasing exposure on price alone.",
            "timeHorizon": "1-3 trading days; reassess no later than the setup expiry of 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The decisive bar is dated 2026-10-05T20:00:00Z and reports zero volume, which may be a session or data artifact and cannot establish participation. Regime inputs are dated 2026-10-01 and stale. No current news, earnings, corporate-action, or Bitcoin-market evidence was supplied. The selected-universe correlation measure is not a demonstrated correlation with the held ON position. The $163.17 trigger was labeled as a target alert by the sensor despite being an entry rule in the setup.",
            "reportTreatment": "Quant/Macro recommends HOLD and identifies price confirmation but failed participation confirmation; Risk APPROVES HOLD only and explicitly blocks an add. These reports agree. The positive price alert supports retaining the position, while failed volume confirmation and the tight-liquidity/high-volatility context rule out BUY. No supplied invalidation or confirmed reversal supports REDUCE or full-exit SELL."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The proposed action is a true HOLD with €0 incremental exposure, so it does not rely on the failed participation signal to justify a new entry or add. MSTR's supplied last price ($164.43) is above both the documented $163.17 entry/breakout level and the $156.85 invalidation level. No supplied completed 5-minute close below invalidation, nor independently verified momentum failure, supports a required reduction or exit. The proposal appropriately treats the zero-volume bar as a veto on adding rather than as affirmative breakout confirmation.",
            "checks": {
              "actionAndSizing": "PASS. Proposal specifies HOLD and €0. No cash deployment, leverage, or position increase is proposed.",
              "portfolioArithmetic": "PASS. ON value (€201.96) plus MSTR value (€150.58) plus cash (€648.57) equals €1,001.11. MSTR is approximately 15.04% of portfolio value; ON is approximately 20.17%; combined holdings are approximately 35.21%.",
              "positionLimit": "PASS. MSTR's approximately 15.0% weight is below the 35% maximum-position limit. A HOLD creates no incremental concentration breach.",
              "quoteAndFxArithmetic": "PASS. MSTR quantity 1.02771459 multiplied by $164.42999, converted at 1.12220848 USD/EUR, is approximately €150.58. The analogous ON valuation is approximately €201.96.",
              "invalidation": "PASS for HOLD. The observed $164.43 is above the $156.85 invalidation level. No qualifying completed 5-minute close below $156.85 is supplied.",
              "participation": "PASS for HOLD; FAIL for any add. The current MSTR 5-minute observation closed above $163.17 but reported zero volume against a 206,566.8 baseline, so required participation is not established. The proposal correctly rejects an add on that evidence.",
              "thesisConsistency": "PASS. The proposal does not claim the current bar confirms the entry rule; it distinguishes price being above the level from missing participation. The stated high volatility, tight-liquidity regime, and uncertain correlation evidence consistently support non-expansion.",
              "timeAndExpiry": "PASS conditionally. The decision is before the stated 2026-10-08T12:10:16Z setup expiry and retains the documented 1-3 trading-day horizon. The price bar is the regular-session-close timestamp of 2026-10-05T20:00:00Z, retrieved roughly 8.5 hours later; this is stale for a fresh trading decision but does not invalidate a no-action HOLD.",
              "riskVeto": "PASS. Risk and hard-risk reviews approve HOLD only and explicitly block an add. No risk rule requires an exit on the supplied evidence.",
              "triggerSemantics": "PASS with caution. The sensor labels $163.17 as a target-level alert, whereas the setup defines it as an entry trigger. The proposal identifies this inconsistency and does not use the alert as a profit-target or add signal."
            },
            "evidenceLimitations": [
              "The decisive MSTR price/volume observation is a 2026-10-05T20:00:00Z bar retrieved at 2026-10-06T04:29Z; it is not contemporaneous intraday evidence for a new trade decision.",
              "Reported zero volume may be a session, chart-feed, or data artifact. It cannot verify participation and should not be interpreted as actual absence of market trading.",
              "Macro/regime observations are from 2026-10-01, materially stale relative to the proposal, and the regime engine is explicitly SHADOW-only.",
              "No current news, earnings, corporate-action, Bitcoin/crypto-market, or broader covariance evidence is supplied. Lack of such evidence cannot be treated as absence of event risk.",
              "The supplied 0.658 correlation is a selected-universe measure, not demonstrated correlation between MSTR and the held ON position.",
              "The original MSTR entry narrative cites a prior qualifying 5-minute close with 1.084x participation, but no underlying contemporaneous bar is included here for independent verification. This does not undermine the present HOLD, but it limits auditability of the historical entry."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR position only. The observed price of $164.43 remains above the documented $163.17 breakout/entry level and the $156.85 invalidation, with no supplied completed 5-minute close below invalidation or independently verified momentum failure. Do not add: the setup explicitly requires participation, while the only completed 5-minute observation reports zero volume and therefore fails to confirm participation. The neutral/range, tight-liquidity regime and MSTR's high 57% realized volatility, 6.18% ATR, and elevated selected correlation further argue against increasing exposure on price alone.",
          "timeHorizon": "1-3 trading days; reassess no later than the setup expiry of 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The decisive bar is dated 2026-10-05T20:00:00Z and reports zero volume, which may be a session or data artifact and cannot establish participation. Regime inputs are dated 2026-10-01 and stale. No current news, earnings, corporate-action, or Bitcoin-market evidence was supplied. The selected-universe correlation measure is not a demonstrated correlation with the held ON position. The $163.17 trigger was labeled as a target alert by the sensor despite being an entry rule in the setup.",
          "reportTreatment": "Quant/Macro recommends HOLD and identifies price confirmation but failed participation confirmation; Risk APPROVES HOLD only and explicitly blocks an add. These reports agree. The positive price alert supports retaining the position, while failed volume confirmation and the tight-liquidity/high-volatility context rule out BUY. No supplied invalidation or confirmed reversal supports REDUCE or full-exit SELL."
        },
        "tradePermitted": false,
        "decisionKey": "8247d7c5f03cf973",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "bc1ef21b331382ab452ca4c271546ce41d4357ac",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T04:45:43.590Z",
        "evidenceHash": "3302ff9d1ef10fcd43bd3b6ce7c3898e0e31a584b893bcbfc3e9db4af363cfb5",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR position without adding or reducing. The observed $164.43 price is above the $163.17 breakout level and materially above the $156.85 invalidation, so there is no verified exit signal. However, the required breakout participation confirmation failed: the sole completed 5-minute bar recorded zero volume, despite a stated baseline of 206,566.8. Price alone is insufficient to validate continuation or justify additional exposure, particularly given MSTR's high 57.03% annualized 10-day realized volatility, 6.18% ATR, and 0.658 selected correlation. The target-level trigger appears to reflect price above the entry threshold rather than a separately evidenced profit-taking target.",
            "timeHorizon": "Until the next valid completed 5-minute confirmation, invalidation, or setup expiry on 2026-10-08T12:10:16Z; original intended horizon is 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest MSTR observation is a completed 5-minute bar with reported volume of zero, preventing the required participation test.",
              "No fresh independent intraday bars, order-flow data, or confirmation beyond the single Yahoo Finance chart observation were supplied.",
              "The macro-regime observations are from 2026-10-01, several days older than the 2026-10-06 decision trigger, and some source clocks were timezone-ambiguous.",
              "No live news, earnings, corporate-action, crypto-market, or catalyst feed was provided; event risk cannot be assessed or assumed absent.",
              "The regime engine is explicitly SHADOW/observation-only and does not itself authorize execution."
            ],
            "quantView": "MSTR remains rank 5 with a positive but decelerated momentum profile: 20-day momentum is +29.89%, while 5-day momentum is only +0.88%. Participation in the daily selection dataset was above baseline at 1.55x, but that does not substitute for the setup's required current 5-minute participation confirmation. The quote remains above the entry threshold, but no confirmed volume-supported breakout continuation exists. Hold is favored over BUY, while REDUCE/SELL lacks a completed close below $156.85 or supplied ranked-momentum reversal evidence.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. A firmer dollar, higher yields, and weak regional-bank relative performance point to fragile participation even though headline equity trend was mildly positive in the stale snapshot. This backdrop does not support relaxing confirmation requirements for a high-volatility momentum position.",
            "disagreements": "There is no material quant-versus-macro disagreement: both support retaining rather than expanding the already small position. The only positive signal is price holding above $163.17; the quant confirmation rule rejects it because participation is unverified, and the macro/liquidity backdrop reinforces caution."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD-only decision for the existing MSTR position; it entails no new exposure, no use of cash, and does not relax the documented risk controls. MSTR at $164.43 remains above the recorded $156.85 completed-5-minute-close invalidation. The trigger is not a separately supported profit target: it merely reflects price above the $163.17 entry threshold. No add is warranted because the required current participation confirmation failed (reported 5-minute volume is zero), MSTR has high realized volatility (57.03% annualized) and ATR (6.18%), and the current position is already correlated with the other held long equity exposure through common risk-on/liquidity sensitivity. The approximately €150.57 MSTR value is about 15% of €1,001.08 portfolio value, below the 35% maximum-position limit; combined ON and MSTR equity exposure is approximately 35.2%, leaving substantial cash (€648.57).",
            "checks": {
              "action": "HOLD only; no purchase, sale, or resizing proposed",
              "positionSizing": {
                "mstrValueEur": 150.57,
                "portfolioValueEur": 1001.08,
                "mstrPortfolioPct": 15.04,
                "maxPositionPct": 35,
                "withinLimit": true
              },
              "cash": {
                "cashEur": 648.57,
                "cashUseProposedEur": 0,
                "sufficient": true
              },
              "exposure": {
                "onValueEur": 201.94,
                "mstrValueEur": 150.57,
                "combinedEquityExposureEur": 352.51,
                "combinedEquityExposurePct": 35.21,
                "comment": "Combined exposure is modest, but both positions retain equity beta and can co-move in a risk-off or tightening-liquidity episode. Selected-universe correlation is not a full held-portfolio correlation estimate."
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "One completed 5-minute close below $156.85",
                "currentPriceUsd": 164.43,
                "distanceToInvalidationPct": 4.61,
                "exitSignalVerified": false
              },
              "entryConfirmation": {
                "entryLevelUsd": 163.17,
                "priceAboveEntry": true,
                "participationRequired": true,
                "participationConfirmed": false,
                "reportedBarVolume": 0,
                "conclusion": "Do not treat price above entry as confirmation for adding or as a target event."
              },
              "horizonAndExpiry": {
                "intendedHorizon": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "status": "Still within supplied expiry window at trigger time; reassess at expiry if neither valid confirmation nor invalidation occurs."
              },
              "regime": {
                "suppliedState": "NEUTRAL risk / RANGE trend / NORMAL volatility / TIGHT liquidity",
                "positionSizeMultiplier": 0.68,
                "implication": "Supports retaining a small existing position but not expanding a high-volatility breakout without valid participation."
              }
            },
            "evidenceLimitations": [
              "The decisive 5-minute observation reports zero volume, so participation cannot be validated; the quote alone is insufficient for a breakout-continuation assessment.",
              "Market observations are effectively from the October 5 close while the decision trigger is October 6; no current-session price, volume, or completed-bar evidence is supplied.",
              "Macro/regime inputs are dated October 1 and include delayed/timezone-ambiguous components; they are stale contextual evidence rather than current risk confirmation.",
              "No live earnings, corporate-action, MSTR/BTC relationship, cryptocurrency-market, news, or catalyst data is provided. Event and gap risk cannot be evaluated or presumed absent.",
              "Reported selected correlation (0.658) is a candidate-selection statistic, not a measured correlation of MSTR against the actual ON holding or total portfolio.",
              "The data contain inconsistent historic ON setup identifiers and duplicated observations; this does not alter the no-action MSTR HOLD assessment but reduces confidence in operational data hygiene."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR position without adding or reducing. The observed price ($164.43) remains above the documented $163.17 breakout level and the $156.85 invalidation, with no verified completed 5-minute close below invalidation or supplied momentum-reversal evidence. The target-level trigger is only price above the entry threshold, not an independently evidenced profit-taking target. Do not add because required current participation confirmation failed: the only completed 5-minute bar reports zero volume. MSTR's high 57.03% annualized realized volatility, 6.18% ATR, elevated selected correlation, and the neutral/range, tight-liquidity backdrop further support retaining rather than expanding exposure.",
            "timeHorizon": "Hold until a valid completed 5-minute invalidation close, a valid volume-supported confirmation/review, or setup expiry on 2026-10-08T12:10:16Z; intended holding horizon remains 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The sole current completed 5-minute MSTR bar reports zero volume, so the mandatory participation test cannot be validated.",
              "Price and bar evidence are from the October 5 close while the trigger is October 6; no current-session confirmation is supplied.",
              "Macro/regime inputs are dated October 1 and include delayed or timezone-ambiguous data.",
              "No live news, earnings, corporate-action, BTC/crypto-market, order-flow, or catalyst evidence is provided; event risk cannot be assessed or assumed absent.",
              "Selected correlation is a universe-selection metric rather than a full correlation estimate against the held ON position or portfolio."
            ],
            "reportTreatment": {
              "quantMacro": "Followed. Quant/Macro recommends HOLD: price is above entry and invalidation, but failed participation blocks an add and there is no exit signal.",
              "risk": "Followed. Risk explicitly APPROVEs the HOLD-only action and identifies no veto; it confirms no resizing, cash use, or risk-limit breach.",
              "disagreements": "No material disagreement. Both reports support holding the small existing position. The positive price-above-entry observation conflicts with the missing participation requirement only for continuation/add confirmation, not for a forced exit."
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD-only proposal is consistent with the supplied MSTR position, quote, invalidation rule, and risk constraints. It makes no trade, does not use cash, and correctly treats the price-above-$163.17 event as insufficient for adding or profit-taking because the setup requires participation and the only completed 5-minute bar has reported volume of zero. Stale evidence materially limits conviction but is not a veto for retaining an existing position absent a verified invalidation or reversal signal.",
            "checks": {
              "actionAndSizing": {
                "proposedAction": "HOLD",
                "proposedEurAmount": 0,
                "newExposureCreated": false,
                "cashUseEur": 0,
                "maxBuyEur": 250,
                "result": "PASS"
              },
              "portfolioArithmetic": {
                "portfolioValueEur": 1001.08,
                "cashEur": 648.57,
                "onValueEur": 201.94,
                "mstrValueEur": 150.57,
                "cashPlusPositionValuesEur": 1001.08,
                "result": "PASS"
              },
              "positionLimit": {
                "mstrValueEur": 150.57,
                "mstrPortfolioPct": 15.04,
                "maxPositionPct": 35,
                "withinLimit": true,
                "result": "PASS"
              },
              "quoteAndFxArithmetic": {
                "mstrQty": 1.02771459,
                "mstrPriceUsd": 164.42999267578125,
                "usdPerEur": 1.1223344802856445,
                "impliedMstrValueEur": 150.57,
                "reportedMstrValueEur": 150.57,
                "result": "PASS"
              },
              "invalidation": {
                "rule": "One completed 5-minute close below $156.85",
                "observedCompletedCloseUsd": 164.42999267578125,
                "observedCloseBelowInvalidation": false,
                "distanceAboveInvalidationPct": 4.61,
                "proposalClaimsNoVerifiedExitSignal": true,
                "result": "PASS"
              },
              "thesisAndParticipation": {
                "entryLevelUsd": 163.17,
                "observedCompletedCloseUsd": 164.43,
                "priceAboveEntry": true,
                "participationRequired": true,
                "reportedVolume": 0,
                "participationConfirmed": false,
                "proposalDoesNotUsePriceAloneToAdd": true,
                "result": "PASS"
              },
              "triggerInterpretation": {
                "triggerCondition": "MSTR target ABOVE $163.17",
                "positionTarget": "Break above $163.17 with sustained participation",
                "issue": "The sensor's target-level event omits the target text's participation condition and is not independently sufficient as either a continuation confirmation or a profit target.",
                "proposalTreatment": "Correctly identifies this as an entry-threshold-style price event and does not act on it.",
                "result": "PASS"
              },
              "timeAndExpiry": {
                "decisionTriggerTime": "2026-10-06T04:45:42.701Z",
                "latestBarMarketTime": "2026-10-05T20:00:00Z",
                "quoteAgeContext": "Latest quote is the prior session's 20:00Z bar; no October 6 regular-session evidence is supplied.",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "expiredAtTrigger": false,
                "result": "PASS_FOR_HOLD_WITH_STALENESS_LIMITATION"
              },
              "riskVeto": {
                "hardRiskVerdict": "APPROVE",
                "riskVerdict": "APPROVE",
                "highVolatilityAndTightLiquidity": "Cited as reasons not to expand rather than ignored.",
                "result": "PASS"
              },
              "dataHygiene": {
                "issues": [
                  "Duplicated trigger observations are present.",
                  "ON has inconsistent historic setup identifiers and levels across portfolio and scout data.",
                  "The sole relevant bar has zero reported volume despite a nonzero baseline, which could reflect unusable after-hours/feed data rather than confirmed lack of trading participation."
                ],
                "effectOnProposal": "These issues weaken evidence quality but do not create a contradiction in a no-action MSTR HOLD decision.",
                "result": "PASS_WITH_LIMITATIONS"
              }
            },
            "evidenceLimitations": [
              "The MSTR quote and completed bar are from 2026-10-05T20:00:00Z, while the decision is triggered on 2026-10-06; no current-session price, volume, or completed-candle evidence is available.",
              "Reported zero volume prevents validation of the required participation condition. It should not be interpreted as affirmative evidence of weak participation; it is primarily a data-quality/confirmation failure.",
              "The regime snapshot is dated 2026-10-01, several days before the decision, and includes delayed and timezone-ambiguous inputs.",
              "No independent news, earnings, corporate-action, Bitcoin/crypto-market, or catalyst evidence is supplied, so event and gap risk remain unassessed.",
              "The 0.658 correlation statistic is a selected-universe screening metric, not a demonstrated correlation between MSTR and the actual ON holding.",
              "The target-level sensor event is mechanically based on price above $163.17 and does not itself establish the setup's required participation or a separate profit-taking target."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR position without adding or reducing. The observed price ($164.43) remains above the documented $163.17 breakout level and the $156.85 invalidation, with no verified completed 5-minute close below invalidation or supplied momentum-reversal evidence. The target-level trigger is only price above the entry threshold, not an independently evidenced profit-taking target. Do not add because required current participation confirmation failed: the only completed 5-minute bar reports zero volume. MSTR's high 57.03% annualized realized volatility, 6.18% ATR, elevated selected correlation, and the neutral/range, tight-liquidity backdrop further support retaining rather than expanding exposure.",
          "timeHorizon": "Hold until a valid completed 5-minute invalidation close, a valid volume-supported confirmation/review, or setup expiry on 2026-10-08T12:10:16Z; intended holding horizon remains 1-3 trading days.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The sole current completed 5-minute MSTR bar reports zero volume, so the mandatory participation test cannot be validated.",
            "Price and bar evidence are from the October 5 close while the trigger is October 6; no current-session confirmation is supplied.",
            "Macro/regime inputs are dated October 1 and include delayed or timezone-ambiguous data.",
            "No live news, earnings, corporate-action, BTC/crypto-market, order-flow, or catalyst evidence is provided; event risk cannot be assessed or assumed absent.",
            "Selected correlation is a universe-selection metric rather than a full correlation estimate against the held ON position or portfolio."
          ],
          "reportTreatment": {
            "quantMacro": "Followed. Quant/Macro recommends HOLD: price is above entry and invalidation, but failed participation blocks an add and there is no exit signal.",
            "risk": "Followed. Risk explicitly APPROVEs the HOLD-only action and identifies no veto; it confirms no resizing, cash use, or risk-limit breach.",
            "disagreements": "No material disagreement. Both reports support holding the small existing position. The positive price-above-entry observation conflicts with the missing participation requirement only for continuation/add confirmation, not for a forced exit."
          }
        },
        "tradePermitted": false,
        "decisionKey": "3aa8bd26014fd40c",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "9bce10ad5bd8e73487aedaf5c90eb542cd003d71",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T05:08:19.179Z",
        "evidenceHash": "0e776c32a568965f8facf58eb3ecced487e728b574396a980d75f4087bf339e6",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR position. The observed $164.43 quote remains above the $163.17 breakout level and well above the $156.85 invalidation, but the required participation confirmation is absent: the only completed 5-minute bar has zero reported volume against a 206,566.8 baseline. The target trigger merely repeats the entry threshold and is not evidence of a separate profit-taking level. No verified reversal or invalidation close supports reducing or selling, while no valid fresh confirmation supports adding.",
            "timeHorizon": "1-3 trading days, subject to reassessment before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "Latest price/confirmation candle is from 2026-10-05 20:00Z and was retrieved outside the stated market timestamp; it may be stale for a new decision.",
              "The completed 5-minute MSTR candle reports zero volume, preventing required participation validation.",
              "No live catalyst, news, earnings, or event-risk feed was supplied; absence of supplied news is not evidence of no event risk.",
              "Macro-regime inputs were observed on 2026-10-01 and are not current confirmation.",
              "The regime engine is SHADOW/decision-support only, and its VIX input was delayed with some timezone-ambiguous macro observations."
            ],
            "quantView": "MSTR remains selected at rank 5 with strong 20-day momentum (+29.9%), above-baseline daily volume (1.55x), and a quote 0.77% above its $163.17 trigger. Offsetting this are weak 5-day momentum (+0.9%), high 10-day annualized realized volatility (57.0%), high ATR (6.18%), selected-correlation of 0.66, and failed intraday participation confirmation. Ranking metrics favor retaining the already-open small position, not increasing it.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity and a 0.68 position-size multiplier. Earlier evidence of higher 10-year yields, a firmer dollar, and weak regional-bank relative performance argues against relaxing confirmation requirements for a high-volatility momentum position.",
            "disagreements": "Price-only logic flags the target because MSTR is above $163.17. Quant process rejects treating that as a new actionable signal because $163.17 is also the entry threshold and the explicit volume-confirmation condition failed. The constructive 20-day momentum ranking conflicts with weak short-horizon momentum, high volatility/correlation, and constrained macro liquidity; HOLD resolves this by preserving exposure without adding or trimming."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only: it does not add risk, preserves a modest existing MSTR exposure (~15.0% of portfolio value, below the 35% position limit), and the supplied quote remains above the documented $156.85 invalidation. The price being above $163.17 is not a separate take-profit event because that level is the original entry trigger. Required participation confirmation is unavailable/failed, so adding would be unsupported. No verified completed 5-minute close below invalidation supports a risk-driven exit on the supplied evidence. Reassess promptly with current-session data and no later than the 2026-10-08T12:10:16Z setup expiry.",
            "checks": {
              "proposedExposureChangeEur": 0,
              "cashEur": 648.57,
              "mstrCurrentValueEur": 150.62,
              "mstrPortfolioWeightPct": 15.04,
              "maxPositionPct": 35,
              "maxBuyEur": 250,
              "sizingWithinLimits": true,
              "heldPortfolioCorrelationAssessment": "No full held-position correlation matrix is supplied. MSTR and ON are both long, short-horizon momentum/breakout equities and can share broad risk-off, liquidity, rates, and growth-beta exposure despite ON/MSTR selection metrics not constituting held-portfolio correlation evidence.",
              "concentrationAssessment": "Combined ON and MSTR exposure is approximately EUR352.63, or 35.22% of portfolio value; this is material but not increased by HOLD. MSTR's 57.03% realized volatility and 6.18% ATR make a fresh increase inappropriate without valid confirmation.",
              "invalidationAssessment": "MSTR quote of $164.43 is above the $156.85 invalidation level, but the only cited 5-minute candle has zero volume. A current, completed 5-minute close below $156.85 remains the documented invalidation condition.",
              "horizonAndExpiryAssessment": "The stated 1-3 trading-day horizon remains active, but the setup expires on 2026-10-08T12:10:16Z. Holding must not become open-ended after expiry without an independently refreshed thesis and risk review.",
              "catalystAssessment": "No catalyst, earnings, or live-news evidence was supplied; event risk is unassessed rather than absent.",
              "regimeAssessment": "The available NEUTRAL/RANGE, TIGHT-liquidity regime is stale (2026-10-01) and supports retaining rather than relaxing the confirmation or sizing standard."
            },
            "evidenceLimitations": [
              "The latest MSTR market timestamp is 2026-10-05T20:00:00Z, while retrieval occurred on 2026-10-06; it is not reliable as current-session confirmation.",
              "The completed 5-minute candle shows zero reported volume versus a stated 206,566.8 baseline, so participation cannot validate either a breakout continuation or a fresh add.",
              "No current full portfolio correlation/beta data are supplied; selected-candidate correlation is not correlation to current holdings.",
              "Macro observations are several days old; VIX was delayed and some macro source times were timezone-ambiguous.",
              "No live earnings, corporate-action, crypto-linked catalyst, or news feed was provided. Absence of such evidence does not establish absence of risk.",
              "Price alone cannot distinguish a sustainable breakout from an after-hours, stale, or illiquid print."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The supplied $164.43 quote is above both the $163.17 breakout threshold and the $156.85 documented invalidation, so there is no verified basis for a REDUCE or full SELL. Conversely, the required 5-minute participation condition failed because the sole completed candle reported zero volume against a 206,566.8 baseline; therefore there is no valid confirmation for a BUY/add. The target alert is not a profit-taking signal because it merely repeats the original entry threshold. This preserves the small existing exposure without expanding risk in a high-volatility setup.",
            "timeHorizon": "Reassess on current-session data within 1-3 trading days and no later than setup expiry at 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest MSTR price and candle are timestamped 2026-10-05T20:00:00Z, retrieved on 2026-10-06, and may be stale or after-hours rather than current-session evidence.",
              "The completed 5-minute candle has zero reported volume, preventing validation of the explicitly required participation condition.",
              "No live news, earnings, corporate-action, or crypto-linked catalyst feed was provided; event risk is unassessed, not absent.",
              "Macro/regime observations are from 2026-10-01, with delayed VIX and timezone ambiguity, so they are not current confirmation.",
              "No complete held-portfolio correlation or beta matrix is supplied; candidate-selection correlation is not a portfolio correlation measure."
            ],
            "reportTreatment": {
              "quantMacro": "Followed. Quant/Macro recommends HOLD: price remains above invalidation, but failed participation confirmation blocks an add and no reversal evidence supports a reduction or exit.",
              "risk": "Followed. Risk APPROVE applies only to HOLD, noting MSTR is about 15.0% of portfolio value, below the 35% position limit, while its 57.0% realized volatility, 6.18% ATR, and material combined long-equity exposure argue against increasing exposure.",
              "disagreements": "The sensor's price-only target event treats a move above $163.17 as positive. Quant and Risk correctly identify $163.17 as the original entry threshold rather than an independently evidenced take-profit level. Constructive 20-day momentum and the quote above trigger conflict with weak 5-day momentum, high volatility/correlation, tight-liquidity regime conditions, and absent intraday volume confirmation; HOLD resolves this by retaining but not adding or trimming.",
              "riskVeto": "No risk veto was issued. No risk limits are relaxed and no missing participation or current-session evidence is inferred."
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD proposal is consistent with the supplied MSTR position, documented entry/invalidation rules, and risk limits. It makes no trade or exposure increase, correctly treats $163.17 as the original entry threshold rather than an independently evidenced profit target, and does not infer participation confirmation from the zero-volume candle. The supplied $164.43 observation is above the $156.85 invalidation, so no evidenced invalidation exit is required. Its stale/after-hours character is explicitly disclosed and does not prevent a HOLD decision.",
            "checks": {
              "decisionAndSizing": {
                "decision": "HOLD",
                "eurAmount": 0,
                "proposedExposureChangeEur": 0,
                "maxBuyEur": 250,
                "maxPositionPct": 35,
                "result": "No sizing, cash, concentration, or risk-limit breach is created by HOLD."
              },
              "arithmetic": {
                "portfolioValueEur": 1001.19,
                "cashEur": 648.57,
                "onValueEur": 202.01,
                "mstrValueEur": 150.62,
                "positionsPlusCashEur": 1001.2,
                "roundingDifferenceEur": 0.01,
                "mstrWeightPct": 15.04,
                "mstrWeightCalculation": "150.62 / 1001.19 = 15.04%",
                "combinedOnMstrWeightPct": 35.22,
                "combinedWeightCalculation": "352.63 / 1001.19 = 35.22%",
                "result": "Reported values and weights reconcile within normal cent rounding; MSTR is below the 35% single-position limit."
              },
              "priceAndInvalidation": {
                "observedMstrPriceUsd": 164.42999267578125,
                "entryThresholdUsd": 163.17,
                "invalidationUsd": 156.85,
                "priceAboveEntryThreshold": true,
                "priceAboveInvalidation": true,
                "documentedInvalidationRequires": "One completed 5-minute close below $156.85",
                "result": "No supplied completed close below invalidation supports a forced reduction or exit."
              },
              "participation": {
                "required": true,
                "completedBarTimestamp": "2026-10-05T20:00:00.000Z",
                "reportedBarVolume": 0,
                "baselineVolume": 206566.8,
                "confirmationPass": false,
                "result": "The proposal correctly blocks an add because required participation confirmation failed/is unavailable."
              },
              "timestamps": {
                "triggeredAt": "2026-10-06T05:08:18.400Z",
                "quoteMarketTime": "2026-10-05T20:00:00.000Z",
                "quoteRetrievedAt": "2026-10-06T05:08:19.143Z",
                "fxMarketTime": "2026-10-06T05:07:48.000Z",
                "macroObservedAt": "2026-10-01T17:12:45.435+03:00",
                "result": "The quote is an approximately nine-hour-old, likely after-hours observation at decision time, and macro evidence is materially older. The proposal explicitly identifies both limitations and does not use them to justify new exposure."
              },
              "thesisAndHorizon": {
                "positionHorizon": "1-3 trading days",
                "openedAt": "2026-10-05T18:46:52.781Z",
                "setupExpiresAt": "2026-10-08T12:10:16.000Z",
                "result": "The proposed reassessment within 1-3 trading days and no later than expiry is consistent with the recorded setup. HOLD does not contradict the high-volatility risk characterization."
              },
              "riskVeto": {
                "riskVerdict": "APPROVE for HOLD only",
                "hardRiskVerdict": "APPROVE",
                "result": "No supplied risk veto conflicts with the final proposal."
              },
              "evidenceIntegrity": {
                "result": "No catalyst, current-session participation, completed invalidation close, or portfolio-correlation evidence is invented. The proposal appropriately treats absent news/catalyst evidence as unassessed rather than benign."
              }
            },
            "evidenceLimitations": [
              "Yahoo chart observations and all quoted provider data are supplied evidence and cannot independently establish live market conditions.",
              "The MSTR quote/candle is timestamped 2026-10-05T20:00:00Z, likely after the regular session, and is not current-session confirmation for 2026-10-06.",
              "The sole completed 5-minute bar has zero reported volume, so it cannot validate the explicitly required participation condition.",
              "The regime evidence is from 2026-10-01; delayed VIX and timezone-ambiguous source clocks further weaken its timeliness.",
              "No live news, earnings, corporate-action, crypto-linked catalyst, or complete current-holdings correlation/beta data are supplied.",
              "The supplied target-event sensor is price-only and should not be interpreted as proof of breakout quality or a take-profit signal."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The supplied $164.43 quote is above both the $163.17 breakout threshold and the $156.85 documented invalidation, so there is no verified basis for a REDUCE or full SELL. Conversely, the required 5-minute participation condition failed because the sole completed candle reported zero volume against a 206,566.8 baseline; therefore there is no valid confirmation for a BUY/add. The target alert is not a profit-taking signal because it merely repeats the original entry threshold. This preserves the small existing exposure without expanding risk in a high-volatility setup.",
          "timeHorizon": "Reassess on current-session data within 1-3 trading days and no later than setup expiry at 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The latest MSTR price and candle are timestamped 2026-10-05T20:00:00Z, retrieved on 2026-10-06, and may be stale or after-hours rather than current-session evidence.",
            "The completed 5-minute candle has zero reported volume, preventing validation of the explicitly required participation condition.",
            "No live news, earnings, corporate-action, or crypto-linked catalyst feed was provided; event risk is unassessed, not absent.",
            "Macro/regime observations are from 2026-10-01, with delayed VIX and timezone ambiguity, so they are not current confirmation.",
            "No complete held-portfolio correlation or beta matrix is supplied; candidate-selection correlation is not a portfolio correlation measure."
          ],
          "reportTreatment": {
            "quantMacro": "Followed. Quant/Macro recommends HOLD: price remains above invalidation, but failed participation confirmation blocks an add and no reversal evidence supports a reduction or exit.",
            "risk": "Followed. Risk APPROVE applies only to HOLD, noting MSTR is about 15.0% of portfolio value, below the 35% position limit, while its 57.0% realized volatility, 6.18% ATR, and material combined long-equity exposure argue against increasing exposure.",
            "disagreements": "The sensor's price-only target event treats a move above $163.17 as positive. Quant and Risk correctly identify $163.17 as the original entry threshold rather than an independently evidenced take-profit level. Constructive 20-day momentum and the quote above trigger conflict with weak 5-day momentum, high volatility/correlation, tight-liquidity regime conditions, and absent intraday volume confirmation; HOLD resolves this by retaining but not adding or trimming.",
            "riskVeto": "No risk veto was issued. No risk limits are relaxed and no missing participation or current-session evidence is inferred."
          }
        },
        "tradePermitted": false,
        "decisionKey": "6e001ddd049ac3c8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "4b203c56374ac60040443101f9739a57dfaf25e8",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T05:27:34.087Z",
        "evidenceHash": "8c56778e9327afb25dd5f7ad0b8b9656a6affd0a7fe890463d474432b859aec1",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position without adding or trimming. The $164.43 quote remains above the $163.17 breakout level and well above the recorded $156.85 invalidation, but the only completed 5-minute bar had zero reported volume versus a 206,566.8 baseline. Therefore the required participation confirmation failed. The target alert repeats the entry threshold and is not evidence of a separate profit-taking condition. With high 10-day realized volatility (57.03%), high selected correlation (0.658), and no fresh confirmed volume signal, neither BUY nor REDUCE is justified.",
            "timeHorizon": "Until the next valid completed 5-minute confirmation/invalidation or setup expiry on 2026-10-08",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The quote and candle are from a single 5-minute Yahoo chart observation at 2026-10-05 20:00Z, with zero reported candle volume; participation cannot be verified. Regime inputs were observed on 2026-10-01 and may be stale relative to the position review. No live catalyst, earnings, or news feed was supplied, so event risk is unknown rather than absent. The regime engine is explicitly SHADOW/research-only, and its breadth, liquidity, credit, and volatility proxies have documented data-quality limitations.",
            "quantView": "MSTR remains ranked eligible with strong 20-day momentum (+29.89%), above-baseline daily volume (1.55x), and price above its $163.17 trigger. However, short-horizon momentum is modest (+0.88% over 5 days), realized volatility is elevated (57.03% annualized), ATR is high (6.18%), correlation is comparatively high (0.658), and the mandatory intraday participation condition is unconfirmed. Preserve existing reduced exposure; do not add.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Higher 10-year yields, a firmer dollar, weak regional-bank relative performance, and fragile internal participation argue against increasing a high-beta, high-volatility momentum position. These macro observations are not current enough to support a forced exit while the documented price invalidation remains intact.",
            "disagreements": "Price-only evidence supports the original breakout because MSTR is above $163.17, while the strategy's required participation criterion rejects confirmation because reported completed-bar volume is zero. The target-level trigger suggests review only; it does not conflict with HOLD because its threshold is identical to the entry trigger and no independent take-profit rule was provided."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "The proposed HOLD is risk-consistent because it neither increases exposure nor relaxes the documented MSTR invalidation. MSTR is quoted above its $163.17 breakout level and $156.85 invalidation, while the target alert merely repeats the entry threshold and provides no independently defined take-profit basis. No add is justified: the required 5-minute participation confirmation is unavailable/failed, MSTR has high realized volatility (57.03%) and ATR (6.18%), and the broader supplied regime is range-bound with tight liquidity. Existing MSTR exposure is approximately €151 (about 15% of portfolio value); combined ON and MSTR equity exposure is roughly €353 (about 35%), so preserving—not expanding—risk is appropriate.",
            "checks": {
              "proposalAction": "HOLD; no new capital, leverage, or order is proposed.",
              "cashAndSizing": "Cash is approximately €649. MSTR is below the stated 35% per-position limit, but aggregate deployed equity exposure is already about 35% of portfolio value; cash availability is not a reason to add.",
              "invalidation": "Recorded MSTR invalidation remains a completed 5-minute close below $156.85. The latest supplied quote of $164.43 is above that level; no verified invalidation is present.",
              "expiryAndHorizon": "The setup expires at 2026-10-08T12:10:16Z. HOLD should not be interpreted as extending the setup beyond expiry; reassessment is required at expiry or on a valid confirmation/invalidation first.",
              "confirmation": "Price is above $163.17, but the only supplied completed 5-minute candle has zero reported volume against a 206,566.8 baseline. Mandatory participation is therefore not confirmed; no addition is permitted on this evidence.",
              "portfolioCorrelation": "The supplied 0.658 figure is a selection correlation metric, not a demonstrated correlation to actual held ON exposure. Nonetheless, both positions are momentum equities in a fragile/tight-liquidity backdrop, so shared risk-off and momentum-reversal exposure is plausible and supports no expansion.",
              "downside": "From $164.43 to the documented $156.85 invalidation is about 4.6% price downside, or roughly €7 on the current stated MSTR value before gaps, slippage, and FX effects. High volatility means realized loss could exceed this estimate if the level is crossed discontinuously."
            },
            "evidenceLimitations": [
              "The quote and candle come from a single Yahoo 5-minute observation at 2026-10-05T20:00:00Z; zero reported volume may reflect data/session quality rather than true absence of trading, so participation cannot be validated.",
              "The regime observations are dated 2026-10-01 and may be stale for a 1-3 trading-day position review.",
              "No current news, earnings-calendar, corporate-action, or crypto-market evidence was supplied; catalyst and gap risk are unknown, not absent.",
              "The regime engine is explicitly SHADOW/research-only and uses proxy-based breadth, liquidity, credit, and volatility measures.",
              "The stated selection correlation does not establish realized correlation between MSTR and the actual ON holding."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The supplied $164.43 quote remains above the documented $163.17 breakout level and the $156.85 invalidation, so neither a REDUCE nor full SELL is supported. Do not BUY: the required completed 5-minute participation confirmation failed/unavailable because the sole completed bar reported zero volume against a 206,566.8 baseline. The target alert only repeats the entry threshold and provides no independent take-profit rule. Elevated realized volatility (57.03%), high ATR (6.18%), relatively high selection correlation (0.658), tight-liquidity/range regime conditions, and existing aggregate equity exposure further support preserving rather than expanding exposure.",
            "timeHorizon": "Until a valid completed 5-minute confirmation or invalidation, or mandatory reassessment at setup expiry on 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The price and candle data are a single Yahoo 5-minute observation at 2026-10-05T20:00:00Z; zero volume may be a data/session artifact, but it prevents validating mandatory participation. Macro/regime inputs are dated 2026-10-01 and may be stale. No live news, earnings, corporate-action, or crypto-market evidence was supplied, so catalyst and gap risks are unknown. The regime engine is SHADOW/research-only and uses proxy-based indicators. The selection correlation metric does not prove realized correlation with the ON holding.",
            "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVEs that action; both agree no add is permitted without participation confirmation and no exit trigger is verified. The apparent disagreement is price-only versus rule-based evidence: price is above the breakout threshold, but the mandatory volume-confirmation requirement is not met. The target-level sensor event is treated as a review alert, not a profit-taking instruction, because it duplicates the entry threshold and no take-profit rule exists."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The final proposal is a non-executing HOLD of the existing MSTR paper position with €0 requested. It does not add risk, does not relax the documented $156.85 invalidation, and correctly rejects a BUY/add because the mandatory 5-minute participation condition is not verified. The $163.17 target-level alert duplicates the entry threshold and no independent take-profit rule is supplied, so treating it as a review alert rather than a sell instruction is supported. Although the market observation is materially stale at decision time, stale or incomplete trading evidence does not make a HOLD invalid here; it limits any claim about current status and supports avoiding action.",
            "checks": {
              "actionAndSizing": "PASS: HOLD with eurAmount 0 proposes no order, leverage, or incremental position sizing. MSTR is approximately €150.62, about 15.0% of €1,001.19 portfolio value, below the 35% per-position limit.",
              "portfolioArithmetic": "PASS: MSTR implied EUR value is approximately 1.02771459 × $164.43 / 1.121956706 = €150.62. ON plus MSTR value is about €352.63, or 35.22% of portfolio value; the proposal characterizes this as 'about 35%' and does not assert it breaches the stated per-position limit. Cash plus position values reconciles to portfolio value within rounding.",
              "priceAndInvalidation": "PASS WITH LIMITATION: The supplied MSTR quote of $164.43 is above both the $163.17 entry threshold and $156.85 invalidation. No supplied completed close below $156.85 establishes invalidation. However, the stale single observation cannot establish that no intervening invalidation occurred after the recorded candle.",
              "participation": "PASS: The only supplied completed 5-minute bar closed above $163.17 but reported zero volume versus a stated 206,566.8 baseline. Required participation therefore fails or is unvalidated, which supports no add. The proposal does not improperly treat price alone as confirmation.",
              "thesisAndTarget": "PASS: The proposal correctly identifies that the position target/alert ('above $163.17') is the same as the entry threshold and is not an independently documented profit-taking trigger. Its HOLD conclusion is consistent with the documented breakout thesis and does not invent a target.",
              "riskVeto": "PASS: High realized volatility (57.03%), high ATR (6.179%), tight-liquidity/range regime evidence, and approximate 35% aggregate equity deployment all support preserving exposure rather than expanding it. The regime engine is SHADOW only, but the proposal does not portray it as an execution veto.",
              "timestampFreshness": "LIMITED: Quote market time is 2026-10-05T20:00:00Z while the trigger/retrieval occurred around 2026-10-06T05:27Z, roughly 9.5 hours later. Regime inputs are dated 2026-10-01. These timestamps are too stale to validate a current breakout, ongoing participation, or current invalidation status, but are adequate to support a conservative no-action HOLD."
            },
            "evidenceLimitations": [
              "All quoted market status rests on one Yahoo 5-minute observation with a zero-volume bar; it may be an extended-session or data artifact and cannot validate participation.",
              "The MSTR quote is stale relative to the decision trigger, so statements that price 'remains' above levels should be read only as referring to the last supplied observation, not the decision-time market.",
              "No fresh completed candles were supplied to test the $156.85 invalidation rule over the elapsed period.",
              "No current news, earnings, corporate-action, or crypto-market evidence was supplied; event and gap risks remain unknown.",
              "The 0.658 correlation is a selection metric rather than demonstrated correlation to the existing ON holding.",
              "There are setup-record inconsistencies elsewhere for ON, including an older open-position invalidation versus a newer scout setup, but they do not alter this MSTR HOLD proposal."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The supplied $164.43 quote remains above the documented $163.17 breakout level and the $156.85 invalidation, so neither a REDUCE nor full SELL is supported. Do not BUY: the required completed 5-minute participation confirmation failed/unavailable because the sole completed bar reported zero volume against a 206,566.8 baseline. The target alert only repeats the entry threshold and provides no independent take-profit rule. Elevated realized volatility (57.03%), high ATR (6.18%), relatively high selection correlation (0.658), tight-liquidity/range regime conditions, and existing aggregate equity exposure further support preserving rather than expanding exposure.",
          "timeHorizon": "Until a valid completed 5-minute confirmation or invalidation, or mandatory reassessment at setup expiry on 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The price and candle data are a single Yahoo 5-minute observation at 2026-10-05T20:00:00Z; zero volume may be a data/session artifact, but it prevents validating mandatory participation. Macro/regime inputs are dated 2026-10-01 and may be stale. No live news, earnings, corporate-action, or crypto-market evidence was supplied, so catalyst and gap risks are unknown. The regime engine is SHADOW/research-only and uses proxy-based indicators. The selection correlation metric does not prove realized correlation with the ON holding.",
          "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVEs that action; both agree no add is permitted without participation confirmation and no exit trigger is verified. The apparent disagreement is price-only versus rule-based evidence: price is above the breakout threshold, but the mandatory volume-confirmation requirement is not met. The target-level sensor event is treated as a review alert, not a profit-taking instruction, because it duplicates the entry threshold and no take-profit rule exists."
        },
        "tradePermitted": false,
        "decisionKey": "161549ce38c13516",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "e9d3db05769b499b1326e0468ff2dbcc8aaf0bd4",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T05:43:32.228Z",
        "evidenceHash": "b5adf56fa2bf9a3759d76eaac502d8ddbac13680e0e211f13b8528bd745915d4",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position only. The supplied $164.43 quote is above the $163.17 breakout level and well above the recorded $156.85 invalidation, so a reduction or exit is not quantitatively supported. However, do not add: the required completed 5-minute participation confirmation is explicitly failed because the only reported completed bar has zero volume versus a 206,566.8 baseline. The target-level trigger merely repeats the entry threshold and supplies no independent profit-taking rule.",
            "timeHorizon": "Until the next valid 5-minute confirmation or invalidation, within the recorded 1-3 trading-day setup horizon and before setup expiry on 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The relevant quote is timestamped 2026-10-05T20:00:00Z and may not represent a current regular-session tradable price.",
              "The only completed confirmation bar has zero reported volume, preventing participation validation.",
              "Macro/regime observations are from 2026-10-01 and therefore stale relative to the position review.",
              "No live news, earnings, or event feed was provided; catalyst and event-risk assessment is unavailable rather than benign.",
              "The regime engine is SHADOW research output and cannot validate execution, sizing, or market conditions."
            ],
            "quantView": "MSTR remains marginally above its $163.17 breakout threshold ($164.43), preserving the existing position's technical structure. Its ranked 20-day momentum is strong at +29.9% and volume ratio is 1.55x in the daily selection data, but recent 5-day momentum is only +0.9%. Risk is elevated: 57.0% annualized 10-day realized volatility, 6.18% ATR, and 0.658 maximum selected correlation. With the required intraday volume confirmation absent, the evidence supports HOLD rather than BUY. A completed 5-minute close below $156.85 would invalidate the recorded setup.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Firmer USD, higher rates, and weak regional-bank relative performance point to fragile participation rather than a broad risk-on backdrop. This argues against expanding a high-volatility, relatively correlated momentum position, while not independently requiring an exit above its stated invalidation.",
            "disagreements": "The mechanical POSITION_TARGET_LEVEL alert is positive because price is above $163.17, but it conflicts with the setup's required participation condition: close confirmation passed while volume participation failed. The alert is treated as an entry-threshold observation, not as a take-profit signal. No disagreement supports a SELL because price remains above the defined invalidation."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "The proposed HOLD (with zero additional capital) is risk-consistent for the existing MSTR paper position. The supplied price of $164.43 remains above both the $163.17 breakout threshold and the defined $156.85 5-minute-close invalidation. The position is approximately €150.64, or about 15.0% of reported €1,001.23 equity, below the 35% per-position limit; no new sizing, cash use, or leverage is proposed. The proposal correctly rejects adding exposure because its mandatory participation confirmation failed. The trigger labeled as a target is only the original entry threshold and does not justify profit-taking or expansion. Continued holding is limited to the recorded short 1–3 trading-day horizon and setup expiry.",
            "checks": {
              "proposedAction": "HOLD only; eurAmount=0",
              "positionSizing": {
                "mstrValueEur": 150.64,
                "portfolioValueEur": 1001.23,
                "mstrExposurePct": 15.05,
                "maxPositionPct": 35,
                "result": "Within stated individual-position limit"
              },
              "aggregateExposure": {
                "onValueEur": 202.03,
                "mstrValueEur": 150.64,
                "combinedEquityExposureEur": 352.67,
                "combinedEquityExposurePct": 35.22,
                "cashEur": 648.57,
                "result": "No incremental exposure proposed; combined long-equity exposure is material in a tight-liquidity/range regime."
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "One completed 5-minute close below level",
                "distanceFromObservedPricePct": 4.61,
                "result": "Not breached on supplied observation; maintain monitoring rather than inventing an exit threshold."
              },
              "entryConfirmation": {
                "priceAboveEntryLevel": true,
                "participationConfirmed": false,
                "reportedCompletedBarVolume": 0,
                "result": "Insufficient for any add or re-entry, but does not by itself invalidate an already-open position under the recorded invalidation rule."
              },
              "horizonAndExpiry": {
                "expectedHorizon": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "result": "HOLD should be reassessed at a valid next observation and not extended past expiry without a renewed setup."
              },
              "correlation": {
                "selectionMaxCorrelation": 0.658,
                "heldPortfolioCorrelation": "Not established from supplied evidence",
                "result": "Do not treat selection correlation as a measured correlation to the held ON position; nonetheless, both positions are long momentum equities and may share broad risk-off exposure."
              },
              "catalystRisk": {
                "status": "Unavailable",
                "result": "No catalyst-based relaxation of risk controls is warranted."
              }
            },
            "evidenceLimitations": [
              "The MSTR quote and sole completed 5-minute bar are timestamped 2026-10-05T20:00:00Z, while review retrieval is 2026-10-06T05:43Z; this is not a current regular-session tradable observation.",
              "Zero reported bar volume versus the stated 206,566.8 baseline makes participation confirmation unusable and could reflect data/session artifacts rather than genuine absence of trading.",
              "The supplied macro/regime evidence is dated 2026-10-01 and is stale for this review; the regime engine is explicitly SHADOW research output.",
              "No live earnings, corporate-news, crypto-market, or event feed was supplied. MSTR may have material idiosyncratic and bitcoin-linked catalyst risk that cannot be assessed here.",
              "The reported 0.658 correlation is a selection metric, not verified correlation against the actual held ON position or the full portfolio.",
              "The stated target duplicates the entry trigger, so it provides no independently evidenced take-profit or de-risking level."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The supplied $164.43 observation remains above the documented $163.17 breakout level and the $156.85 invalidation, so neither REDUCE nor full SELL is evidenced. Do not BUY: although price is above the trigger, mandatory completed 5-minute participation confirmation failed because the reported bar volume was zero against a 206,566.8 baseline. The target alert repeats the entry threshold and is not an independently supported profit-taking signal. Elevated volatility, tight-liquidity/range conditions, and existing long-equity exposure further favor no expansion.",
            "timeHorizon": "Reassess on the next valid completed 5-minute observation, at invalidation, or no later than setup expiry on 2026-10-08T12:10:16Z; recorded horizon is 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The relevant MSTR quote and only completed 5-minute bar are timestamped 2026-10-05T20:00:00Z and may not be a current regular-session tradable observation.",
              "Reported zero bar volume prevents validation of mandatory participation and may be a data or session artifact.",
              "Macro/regime observations are dated 2026-10-01 and the regime engine is SHADOW research output.",
              "No live news, earnings, corporate-event, or crypto-market feed was supplied; event and bitcoin-linked risks cannot be assessed.",
              "The stated target duplicates the entry trigger and supplies no evidenced take-profit level."
            ],
            "reportTreatment": "Quant/Macro recommends HOLD: price preserves the existing technical structure but failed participation blocks adding; its positive target-level alert conflicts with that failed confirmation and is treated only as an entry-threshold observation. Risk APPROVES HOLD because MSTR is about 15.05% of portfolio value, below the 35% position cap, no capital is added, and the recorded invalidation has not been breached. There is no risk veto and no disagreement supporting REDUCE or SELL."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The final proposal is a zero-capital HOLD of the existing MSTR paper position and is internally consistent with the supplied recorded rules. The supplied MSTR observation ($164.43) is above the $163.17 entry threshold and above the $156.85 completed-5-minute-close invalidation. Mandatory participation confirmation failed because the sole completed bar has zero reported volume, which correctly blocks any add but does not itself trigger the documented exit rule. The target alert duplicates the entry threshold and is correctly not treated as an independent profit-taking signal. Although the market observation is stale/non-tradable, this supports a conservative HOLD with reassessment rather than an evidence-free trade action.",
            "checks": {
              "proposalScope": {
                "result": "PASS",
                "detail": "Proposal is HOLD, MSTR, EUR amount 0; no order, leverage, cash deployment, or position resizing is proposed."
              },
              "priceAndRuleConsistency": {
                "result": "PASS_WITH_STALENESS_LIMITATION",
                "observedPriceUsd": 164.42999267578125,
                "entryLevelUsd": 163.17,
                "invalidationLevelUsd": 156.85,
                "detail": "Observed price is 0.77% above entry and 4.61% above invalidation. The recorded invalidation requires one completed 5-minute close below $156.85; supplied data do not show such a close."
              },
              "participation": {
                "result": "PASS",
                "detail": "Required participation is explicitly failed/unusable: reported completed-bar volume is zero versus a 206,566.8 baseline. The proposal correctly uses this as a veto on BUY/addition, not as a fabricated exit condition."
              },
              "timestampFreshness": {
                "result": "LIMITED_BUT_ACCEPTABLE_FOR_HOLD",
                "detail": "MSTR quote and bar market time are 2026-10-05T20:00:00Z, retrieved 2026-10-06T05:43Z. This is a Sunday/non-regular-session timestamp and cannot establish current tradability or confirm that no later invalidation occurred. It is insufficient for an active trade, but a passive HOLD may pass under the supplied constraints."
              },
              "sizingAndArithmetic": {
                "result": "PASS",
                "detail": "MSTR value is approximately €150.64: 1.02771459 × $164.42999 ÷ 1.121830821 = €150.64. €150.64 / €1,001.23 = 15.05%, below the 35% position cap. No incremental sizing is proposed. Combined ON and MSTR value is €352.67, or 35.22% of portfolio value; this is material but unchanged by HOLD."
              },
              "portfolioArithmetic": {
                "result": "PASS_WITH_ROUNDING",
                "detail": "Cash (€648.57) plus reported position values (€202.03 + €150.64) equals €1,001.24, differing by €0.01 from reported portfolio value (€1,001.23), consistent with ordinary rounding. Initial €1,000 plus total P&L €1.23 equals €1,001.23."
              },
              "riskVeto": {
                "result": "PASS",
                "detail": "No hard-risk veto is supplied. High volatility, tight liquidity, range regime, and material aggregate equity exposure argue against expansion, which the proposal does not make."
              },
              "thesisAndInvalidation": {
                "result": "PASS",
                "detail": "The proposal does not contradict the position thesis: it retains the position only while above the documented invalidation and identifies the failed participation condition as preventing expansion. It does not invent a take-profit, new stop, correlation claim, or catalyst."
              },
              "expiryAndHorizon": {
                "result": "PASS",
                "detail": "Proposal calls for reassessment at a valid next observation, invalidation, or by setup expiry of 2026-10-08T12:10:16Z, consistent with the recorded 1-3 trading-day horizon."
              },
              "evidenceQuality": {
                "result": "PASS_FOR_HOLD_ONLY",
                "detail": "The proposal explicitly discloses stale quote, zero-volume confirmation artifact, stale macro inputs, SHADOW regime status, and absent news/earnings/crypto evidence. No unsupported catalyst or current-market assertion is presented."
              }
            },
            "evidenceLimitations": [
              "The relevant MSTR price is from 2026-10-05T20:00:00Z, a Sunday/non-regular-session timestamp, and is stale relative to the decision retrieval time. It cannot verify the current price or whether a subsequent completed 5-minute invalidation occurred.",
              "The sole completed 5-minute bar reports zero volume, making participation confirmation unusable and potentially reflecting a chart/session-data artifact.",
              "Regime evidence is from 2026-10-01 and the regime engine is explicitly SHADOW research output, so it is not current execution-grade market evidence.",
              "No live corporate-news, earnings, event, or bitcoin/crypto-market evidence is supplied; no conclusion about absence of idiosyncratic risk is warranted.",
              "The 0.658 correlation is a selection metric, not demonstrated correlation between held MSTR and ON or full-portfolio correlation.",
              "The alert labeled as a target is merely the original $163.17 entry threshold and provides no independently supported profit target."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The supplied $164.43 observation remains above the documented $163.17 breakout level and the $156.85 invalidation, so neither REDUCE nor full SELL is evidenced. Do not BUY: although price is above the trigger, mandatory completed 5-minute participation confirmation failed because the reported bar volume was zero against a 206,566.8 baseline. The target alert repeats the entry threshold and is not an independently supported profit-taking signal. Elevated volatility, tight-liquidity/range conditions, and existing long-equity exposure further favor no expansion.",
          "timeHorizon": "Reassess on the next valid completed 5-minute observation, at invalidation, or no later than setup expiry on 2026-10-08T12:10:16Z; recorded horizon is 1-3 trading days.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The relevant MSTR quote and only completed 5-minute bar are timestamped 2026-10-05T20:00:00Z and may not be a current regular-session tradable observation.",
            "Reported zero bar volume prevents validation of mandatory participation and may be a data or session artifact.",
            "Macro/regime observations are dated 2026-10-01 and the regime engine is SHADOW research output.",
            "No live news, earnings, corporate-event, or crypto-market feed was supplied; event and bitcoin-linked risks cannot be assessed.",
            "The stated target duplicates the entry trigger and supplies no evidenced take-profit level."
          ],
          "reportTreatment": "Quant/Macro recommends HOLD: price preserves the existing technical structure but failed participation blocks adding; its positive target-level alert conflicts with that failed confirmation and is treated only as an entry-threshold observation. Risk APPROVES HOLD because MSTR is about 15.05% of portfolio value, below the 35% position cap, no capital is added, and the recorded invalidation has not been breached. There is no risk veto and no disagreement supporting REDUCE or SELL."
        },
        "tradePermitted": false,
        "decisionKey": "156c9a0b5175efda",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "9c9f455ff60bc3c07517e06ff8e36ab026a73d82",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T05:56:45.542Z",
        "evidenceHash": "1b639575c934a73fa8e436663c22d85ec60f7be4b781bd789517b45e00aeb914",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing paper position: the observed price of $164.43 remains above the $163.17 breakout level and well above the recorded $156.85 invalidation. However, this is not evidence to add: the only completed 5-minute bar reported zero volume versus a 206,566.8 baseline, so the required participation confirmation failed. The target-level event merely repeats the entry threshold and provides no independently supported take-profit or exit signal.",
            "timeHorizon": "1-3 trading days, subject to reassessment before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The quote is based on a single completed 5-minute observation dated 2026-10-05 20:00Z, with zero reported volume. No fresh completed intraday participation data, updated ranking, current cross-asset regime reading, or live catalyst/news/earnings feed is supplied. Catalyst status is explicitly NOT_FETCHED, so event risk cannot be assessed or assumed absent. Regime inputs are also dated 2026-10-01 and include delayed/timezone-ambiguous components.",
            "quantView": "MSTR remains ranked and retains strong 20-day momentum (+29.9%), above-baseline daily volume (1.55x), and price above its $163.17 threshold. Offsetting factors are weak 5-day momentum (+0.9%), elevated 10-day annualized realized volatility (57.0%), high selected correlation (0.66), and failure of the mandatory intraday volume/participation test. The current evidence supports holding an already-open position rather than buying more, reducing, or selling.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Earlier evidence cites a high 10-year yield, firmer dollar, weak regional-bank relative performance, and fragile participation. These conditions constrain incremental long-risk exposure but do not, on the supplied data, establish MSTR-specific invalidation.",
            "disagreements": "Price-only evidence is constructive because MSTR is above the breakout level, while confirmation-quality evidence is negative because volume participation is absent/unusable. Macro conditions argue caution and no expansion, but do not justify a reduction while price remains above the documented invalidation. Therefore HOLD is preferred over BUY, REDUCE, or SELL."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only: it adds no exposure, MSTR's supplied price ($164.43) remains above both the $163.17 breakout level and the documented $156.85 invalidation, and no supplied evidence establishes a position-specific exit condition. A price-only target event at the entry threshold is not a supported take-profit signal. The high-volatility position should not be expanded: mandatory 5-minute participation confirmation failed, MSTR has 57% realized volatility, and the portfolio already has roughly 35% gross long-equity exposure across ON and MSTR despite a neutral/range, tight-liquidity regime. This approval is not an instruction to trade and does not validate holding beyond the setup's stated review/expiry window.",
            "checks": {
              "proposalExposureChange": "None; HOLD with EUR amount 0.",
              "cashAndSizing": "Cash is approximately EUR648.57. MSTR is approximately EUR150.65, or about 15.0% of portfolio value, below the stated 35% single-position limit. Combined ON and MSTR long exposure is approximately EUR352.70, or 35.2% of portfolio value.",
              "correlationAndConcentration": "The supplied 0.658 MSTR selected-candidate correlation is not a verified correlation with the actually held ON position. Nonetheless, both are long equities and may share broad market, liquidity, and risk-off sensitivity; MSTR also has additional crypto-linked sensitivity that is not quantified.",
              "invalidation": "Maintain the recorded MSTR invalidation at a completed 5-minute close below $156.85. The supplied observation does not test invalidation reliably because it is a single 20:00Z bar with reported zero volume.",
              "expiryAndHorizon": "The 1-3 trading-day horizon is still active, but the setup expires at 2026-10-08T12:10:16Z. Reassess using fresh regular-session data before expiry; do not treat expiry as an automatic execution instruction.",
              "catalystRisk": "No catalyst, news, or earnings evidence was fetched. Event risk is unassessed rather than absent."
            },
            "evidenceLimitations": [
              "The latest MSTR quote is a single completed 5-minute observation at 2026-10-05T20:00:00Z, retrieved on 2026-10-06, and reported zero volume versus a stated 206,566.8 baseline.",
              "The mandatory participation condition is therefore failed/unusable; the quote supports neither a new entry nor an expansion.",
              "Regime evidence is dated 2026-10-01, with delayed and timezone-ambiguous inputs, so it is stale for current risk assessment.",
              "No current intraday trend, spread/liquidity, actual ON-MSTR correlation, or live catalyst/earnings data is supplied.",
              "The target trigger duplicates the breakout threshold and is not independent evidence of a realized target or exit condition."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position only. The supplied $164.43 observation is above the documented $163.17 breakout level and $156.85 completed-5-minute-close invalidation, so there is no evidenced REDUCE or full SELL condition. Do not BUY: the required participation confirmation failed because the sole completed 5-minute bar reported zero volume against a 206,566.8 baseline. The target-level alert merely repeats the entry threshold and is not an independently evidenced profit-taking signal. This aligns with Quant/Macro and is approved by Risk; both cite high volatility, tight liquidity, and existing long-equity exposure as reasons not to expand.",
            "timeHorizon": "1-3 trading days; reassess with fresh regular-session evidence before the setup expiry of 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The latest quote is one completed 5-minute bar from 2026-10-05T20:00:00Z, retrieved 2026-10-06, with zero reported volume. No fresh usable participation, current intraday trend, updated macro regime, actual ON-MSTR correlation, spreads/liquidity, or live catalyst/earnings evidence is supplied. Catalyst risk is unassessed, not absent. Regime inputs are dated 2026-10-01 and include delayed/timezone-ambiguous components.",
            "reportTreatment": "Quant/Macro recommends HOLD rather than BUY because price is above the breakout threshold but mandatory volume participation is absent; it does not support REDUCE/SELL absent invalidation. Risk APPROVES HOLD and explicitly does not veto it, while warning against expansion due to 57% realized volatility, tight-liquidity/range conditions, and approximately 35% combined long-equity exposure. There is no material disagreement: constructive price evidence conflicts with deficient confirmation quality, resolved in favor of holding the existing reduced-size position without adding."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The FINAL proposal is a non-exposure-changing HOLD of the existing MSTR paper position and is consistent with the supplied position state, price observation, setup rule, and risk review. MSTR's supplied price of $164.43 is above the $163.17 breakout threshold and the $156.85 below-close invalidation level. The failed/absent participation reading blocks an addition but does not itself establish the documented invalidation or a supported reduction/sale condition. The target alert duplicates the entry threshold and is not independent take-profit evidence.",
            "checks": {
              "proposalConsistency": "PASS: HOLD, symbol MSTR, and EUR amount 0 match an existing MSTR position and create no sizing or cash-use issue.",
              "arithmetic": "PASS: cash EUR648.57 plus ON value EUR202.05 plus MSTR value EUR150.65 equals portfolio value EUR1001.27. MSTR is approximately 15.0% of portfolio value, below the 35% single-position limit. Combined stated equity value is EUR352.70, approximately 35.2% of portfolio value.",
              "priceAndInvalidation": "PASS with data-quality limitation: supplied MSTR price is $164.43, above the $156.85 completed-5-minute-close invalidation. No supplied completed close below invalidation supports REDUCE or SELL.",
              "entryAndParticipation": "PASS: MSTR is above the $163.17 threshold, but the sole completed 5-minute observation reports zero volume against a 206566.8 baseline, so required participation confirmation fails. The proposal correctly treats this as prohibiting expansion rather than as an exit trigger.",
              "riskVeto": "PASS: supplied Risk and hardRisk both approve HOLD only. HOLD changes no exposure in a neutral/range, tight-liquidity regime and therefore does not conflict with the cited cautionary conditions.",
              "thesisAndTarget": "PASS: the proposal correctly distinguishes the duplicated position target/entry threshold alert from an independently supported profit target. It does not assert that participation is currently sustained.",
              "timeliness": "PASS for HOLD only: the quote's market time is 2026-10-05T20:00:00Z and retrieval/decision trigger is roughly ten hours later on 2026-10-06. This is stale and unsuitable for a new trade or expansion, but the proposal explicitly limits itself to HOLD and requires fresh evidence before reassessment.",
              "expiry": "PASS: the proposal acknowledges reassessment before the 2026-10-08T12:10:16Z setup expiry and does not treat expiry as an automatic transaction."
            },
            "evidenceLimitations": [
              "The only MSTR observation is a single 5-minute bar at 2026-10-05T20:00:00Z with reported zero volume; it is stale at the trigger time and does not provide usable fresh participation or current-session trend confirmation.",
              "Zero reported volume at the closing-time bar may reflect an incomplete, delayed, or vendor-data artifact. It should not be treated as reliable evidence of actual market participation failure beyond blocking confirmation under the stated rule.",
              "No live catalyst, earnings, news, spread, order-book, or current liquidity evidence is supplied; catalyst status is explicitly NOT_FETCHED.",
              "The regime evidence is dated 2026-10-01 and contains delayed/timezone-ambiguous inputs, so it is not fresh macro confirmation.",
              "The reported 0.658 selected-candidate correlation is not demonstrated to be actual MSTR-versus-held-ON correlation; combined-exposure risk remains qualitatively rather than precisely evidenced."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position only. The supplied $164.43 observation is above the documented $163.17 breakout level and $156.85 completed-5-minute-close invalidation, so there is no evidenced REDUCE or full SELL condition. Do not BUY: the required participation confirmation failed because the sole completed 5-minute bar reported zero volume against a 206,566.8 baseline. The target-level alert merely repeats the entry threshold and is not an independently evidenced profit-taking signal. This aligns with Quant/Macro and is approved by Risk; both cite high volatility, tight liquidity, and existing long-equity exposure as reasons not to expand.",
          "timeHorizon": "1-3 trading days; reassess with fresh regular-session evidence before the setup expiry of 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The latest quote is one completed 5-minute bar from 2026-10-05T20:00:00Z, retrieved 2026-10-06, with zero reported volume. No fresh usable participation, current intraday trend, updated macro regime, actual ON-MSTR correlation, spreads/liquidity, or live catalyst/earnings evidence is supplied. Catalyst risk is unassessed, not absent. Regime inputs are dated 2026-10-01 and include delayed/timezone-ambiguous components.",
          "reportTreatment": "Quant/Macro recommends HOLD rather than BUY because price is above the breakout threshold but mandatory volume participation is absent; it does not support REDUCE/SELL absent invalidation. Risk APPROVES HOLD and explicitly does not veto it, while warning against expansion due to 57% realized volatility, tight-liquidity/range conditions, and approximately 35% combined long-equity exposure. There is no material disagreement: constructive price evidence conflicts with deficient confirmation quality, resolved in favor of holding the existing reduced-size position without adding."
        },
        "tradePermitted": false,
        "decisionKey": "6bfa91da63b47143",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "f8ca12569c0c4f4b0df294ef4745a10577fd0abe",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T06:13:10.254Z",
        "evidenceHash": "22295940b78ca1f3ad83214a79890433c1c8efd3867390afb5b1be5afbeba0f1",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The observed $164.43 price remains above the documented $163.17 breakout level and well above the $156.85 completed-5-minute-close invalidation. However, the trigger is not a valid take-profit signal: its stated target merely duplicates the entry threshold. Do not add because the only supplied completed 5-minute bar had zero reported volume versus a 206,566.8 baseline, so required participation confirmation failed. High 10-day realized volatility (57.03%), elevated selected correlation (0.658), and a tight-liquidity/range regime support holding rather than increasing exposure or reacting to the mechanical target alert.",
            "timeHorizon": "Until the next confirmed 5-minute participation reading, a completed 5-minute close below $156.85, or setup expiry on 2026-10-08T12:10:16Z; intended horizon remains 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The decisive intraday observation is a single completed 5-minute bar with zero reported volume, preventing participation validation.",
              "The supplied macro-regime observations were collected on 2026-10-01 and are stale relative to the 2026-10-06 decision trigger.",
              "No live news, earnings, corporate-action, or crypto-market catalyst feed was supplied; event risk cannot be assessed or assumed absent.",
              "The regime engine is explicitly SHADOW/decision-support only, and VIX was delayed while some source timestamps had ambiguous timezones.",
              "The position target condition duplicates the entry level and therefore does not establish an independently evidenced profit-taking threshold."
            ],
            "quantView": "MSTR ranks fifth in the supplied universe with quant score 1.576. Its 20-day momentum (+29.889%), volume ratio (1.551x), and very high average dollar volume support the broader momentum thesis, but short-term 5-day momentum is only +0.883%. Volatility is high (57.03% annualized; ATR 6.179%), selected correlation is relatively high (0.658), and the required intraday participation signal is absent. Price is above entry but neither a new BUY nor a REDUCE/SELL condition is quantitatively confirmed.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Supporting caution are the prior evidence of higher 10-year yields, firmer USD, weak regional-bank relative performance, and fragile participation. These are not current macro confirmations because the data are stale; they justify retaining existing reduced exposure without expanding it.",
            "disagreements": "No material Quant/Macro disagreement. Both views support HOLD: price has not breached invalidation, while participation confirmation and fresh macro/catalyst evidence are insufficient for BUY or a target-based reduction."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only: no additional MSTR exposure, no target-based reduction, and no inference from the mechanical alert. MSTR is above its documented $163.17 entry threshold and $156.85 completed-5-minute-close invalidation, while the position is already reduced in size (about €151, roughly 15% of portfolio value). Combined ON and MSTR exposure is about €353, roughly 35% of portfolio value, with ample cash remaining; this supports retaining rather than increasing the existing position. The duplicate target/entry level is not a valid exit catalyst, and failed volume confirmation plus high volatility and tight-liquidity conditions rule out adding.",
            "checks": [
              "No BUY: required participation confirmation failed; the only supplied completed 5-minute MSTR bar has zero reported volume versus a 206,566.8 baseline.",
              "No SELL/REDUCE condition is evidenced: observed price $164.43 remains above the documented $156.85 completed-5-minute-close invalidation.",
              "No take-profit condition is evidenced: the alert threshold $163.17 duplicates the entry trigger and is below the observed price, not an independently defined target.",
              "MSTR exposure is approximately €150.75 (about 15.1% of €1001.51 portfolio value), below the 35% maximum-position limit.",
              "Aggregate ON plus MSTR exposure is approximately €352.94 (about 35.2% of portfolio value); both are long, risk-on equity exposures, so no expansion is warranted despite their distinct company-specific drivers.",
              "Cash of €648.57 is adequate, but cash availability does not override failed participation confirmation, high 57.03% realized volatility, or the tight-liquidity regime.",
              "The HOLD review must not extend beyond setup expiry at 2026-10-08T12:10:16Z. Reassess on a fresh regular-session observation; exit/reduce consideration is required if a valid completed 5-minute close is below $156.85."
            ],
            "evidenceLimitations": [
              "The quote is from 2026-10-05T20:00:00Z and was retrieved before the next regular session; it is not fresh actionable-session confirmation.",
              "Zero reported bar volume prevents validation of the required participation condition and may reflect feed/session artifacts rather than actual absence of trading.",
              "Macro evidence is dated 2026-10-01, while the regime engine is SHADOW-only and cannot independently authorize risk sizing or execution.",
              "No current news, earnings, corporate-action, Bitcoin/crypto sensitivity, or other catalyst data is supplied; MSTR-specific event and correlated crypto-market risks cannot be assessed.",
              "Selected-universe correlation of 0.658 is not a measured correlation to the actual ON holding or to broader held-portfolio risk."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 price is above the $163.17 entry/breakout level and above the documented $156.85 completed-5-minute-close invalidation, so no evidenced SELL or REDUCE condition exists. The alert is not a profit-taking signal because its stated target duplicates the entry threshold. Do not BUY: required participation confirmation failed because the sole completed 5-minute bar reported zero volume versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, tight liquidity, and existing aggregate long-equity exposure favor no expansion.",
            "timeHorizon": "Reassess on a fresh regular-session observation, valid participation-confirmed 5-minute data, a completed 5-minute close below $156.85, or setup expiry at 2026-10-08T12:10:16Z; intended holding horizon remains 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The decisive quote/bar is timestamped 2026-10-05T20:00:00Z, before the next regular session, and is not fresh actionable-session confirmation.",
              "The only completed 5-minute bar has zero reported volume, preventing validation of required participation and potentially reflecting a feed or session artifact.",
              "Macro-regime observations are dated 2026-10-01 and the regime engine is SHADOW/decision-support only.",
              "No current news, earnings, corporate-action, or crypto-market catalyst evidence was supplied, so MSTR-specific event risk cannot be assessed.",
              "The selected-universe correlation measure is not a direct correlation measurement against the actual ON holding."
            ],
            "reportTreatment": {
              "quantMacro": "Followed. Quant/Macro recommends HOLD because price remains above invalidation but participation is unconfirmed; it also rejects adding on high volatility, correlation, and tight-liquidity/range conditions.",
              "risk": "Followed. Risk APPROVEs HOLD only, explicitly rejects adding and target-based reduction, finds no evidenced invalidation, and notes aggregate ON plus MSTR exposure is already about 35% of portfolio value.",
              "disagreements": "No material disagreement: both reports support HOLD. The mechanical target alert is treated as non-actionable because it repeats the entry threshold rather than providing an independently evidenced exit level."
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD proposal is consistent with the supplied position, price, and documented rules. MSTR's observed $164.43 is above both the $163.17 breakout/entry threshold and the $156.85 completed-5-minute-close invalidation. The trigger's stated target duplicates the entry threshold and is not an evidenced profit-taking rule. No additional exposure is proposed, so the failed current participation check and stale quote properly act as constraints against buying rather than as a forced exit signal.",
            "checks": [
              "Position arithmetic is broadly consistent: MSTR value of about €150.75 plus ON value of about €202.19 plus €648.57 cash equals the stated €1,001.51 portfolio value.",
              "MSTR is approximately 15.1% of portfolio value (€150.75 / €1,001.51), below the stated 35% maximum-position limit. The proposal has €0 amount and therefore does not create a sizing or limit breach.",
              "Combined stated ON and MSTR value is approximately €352.94, or 35.2% of portfolio value. This is slightly above 35% only if that limit were interpreted as an aggregate-long-exposure cap; the supplied limit is named maxPositionPct, and the proposal does not increase either position.",
              "No invalidation is evidenced: the supplied MSTR observation is above $156.85, and there is no completed 5-minute close below that level.",
              "Participation is missing for a new confirmation: the sole cited completed bar has zero volume versus a 206,566.8 baseline, so required participation fails. The proposal correctly does not treat price above the threshold alone as authority to add.",
              "The proposal explicitly identifies the quote as stale/non-actionable-session evidence and requires fresh regular-session review. This is appropriate for a HOLD and avoids representing stale data as a fresh trade signal.",
              "The thesis and action are not contradictory: high volatility, tight liquidity, relatively elevated selected correlation, and absent participation support retaining reduced existing exposure without expansion.",
              "No invented catalyst, target, exit price, or unsupported market claim is used. The proposal correctly distinguishes the mechanical target alert from an independent exit signal."
            ],
            "evidenceLimitations": [
              "The decisive MSTR quote and bar are timestamped 2026-10-05T20:00:00Z and retrieved on 2026-10-06 before the next US regular session; they are stale for an actionable intraday decision.",
              "Zero reported volume may be a post-session/feed artifact. It prevents validation of required participation but does not establish actual absence of market trading or a bearish reversal.",
              "Macro/regime observations are dated 2026-10-01, with delayed and timezone-ambiguous components; the regime engine is explicitly SHADOW-only.",
              "No current news, earnings, corporate-action, or crypto/BTC sensitivity evidence is available for MSTR, so event-risk assessment is incomplete.",
              "The supplied 0.658 correlation is a selected-universe measure, not a direct measured correlation between MSTR and the actual ON holding.",
              "The supplied risk and hard-risk approvals are advisory reports, not independently verifiable market evidence; this PASS rests on the provided portfolio arithmetic, documented rules, and the non-trading HOLD action."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 price is above the $163.17 entry/breakout level and above the documented $156.85 completed-5-minute-close invalidation, so no evidenced SELL or REDUCE condition exists. The alert is not a profit-taking signal because its stated target duplicates the entry threshold. Do not BUY: required participation confirmation failed because the sole completed 5-minute bar reported zero volume versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, tight liquidity, and existing aggregate long-equity exposure favor no expansion.",
          "timeHorizon": "Reassess on a fresh regular-session observation, valid participation-confirmed 5-minute data, a completed 5-minute close below $156.85, or setup expiry at 2026-10-08T12:10:16Z; intended holding horizon remains 1-3 trading days.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The decisive quote/bar is timestamped 2026-10-05T20:00:00Z, before the next regular session, and is not fresh actionable-session confirmation.",
            "The only completed 5-minute bar has zero reported volume, preventing validation of required participation and potentially reflecting a feed or session artifact.",
            "Macro-regime observations are dated 2026-10-01 and the regime engine is SHADOW/decision-support only.",
            "No current news, earnings, corporate-action, or crypto-market catalyst evidence was supplied, so MSTR-specific event risk cannot be assessed.",
            "The selected-universe correlation measure is not a direct correlation measurement against the actual ON holding."
          ],
          "reportTreatment": {
            "quantMacro": "Followed. Quant/Macro recommends HOLD because price remains above invalidation but participation is unconfirmed; it also rejects adding on high volatility, correlation, and tight-liquidity/range conditions.",
            "risk": "Followed. Risk APPROVEs HOLD only, explicitly rejects adding and target-based reduction, finds no evidenced invalidation, and notes aggregate ON plus MSTR exposure is already about 35% of portfolio value.",
            "disagreements": "No material disagreement: both reports support HOLD. The mechanical target alert is treated as non-actionable because it repeats the entry threshold rather than providing an independently evidenced exit level."
          }
        },
        "tradePermitted": false,
        "decisionKey": "2aff5b6ddbbfb752",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "c583809e92f1903d8119dfc11b70907ac297dd66",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T06:37:12.564Z",
        "evidenceHash": "1f5a1aca45eb7cda13b3b0e5aa508bc9d2e51586ed06e54fe8869777f899f25e",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed price of $164.43 is above the $163.17 breakout/entry threshold and remains above the documented $156.85 invalidation level. The target alert is not a take-profit signal because its stated target duplicates the entry threshold. Do not add: the required 5-minute participation confirmation failed, with the only completed bar showing zero reported volume against a 206,566.8 baseline, while MSTR retains high 10-day realized volatility and elevated selected correlation.",
            "timeHorizon": "1-3 trading days, subject to review before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The decisive intraday bar has zero reported volume, preventing confirmation of required participation. Prices are from a single chart source and the observed market timestamp is 2026-10-05T20:00:00Z. Regime inputs were observed on 2026-10-01 and include delayed/timezone-ambiguous components. No live catalyst, earnings, or news feed was supplied, so event risk is unknown rather than absent.",
            "quantView": "MSTR ranks below ON but retains strong 20-day momentum (+29.9%), positive 5-day momentum (+0.9%), and above-baseline daily volume (1.55x). These support holding while price remains above invalidation. Offsetting factors are 57.0% annualized 10-day realized volatility, 6.18% ATR, and 0.66 maximum selected correlation. A price-only move above the threshold without usable participation data is insufficient for a BUY.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity and a 0.68 position-size multiplier. Firmer USD, higher 10-year yields, weak regional-bank relative performance, and fragile participation argue against expanding high-beta long exposure. These inputs are stale relative to the latest price and should not be interpreted as current macro confirmation.",
            "disagreements": "No material quant-versus-macro disagreement: momentum and price level support HOLD, while the macro/liquidity backdrop and missing participation evidence oppose BUY. There is no evidenced SELL or REDUCE condition because MSTR remains above its explicit invalidation."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only, not any expansion. MSTR remains above its documented $156.85 completed-5-minute-close invalidation, and the $163.17 alert is an entry/breakout threshold rather than a valid profit target. No evidenced exit condition is supplied. A BUY/add would be unacceptable because required participation confirmation failed. Existing MSTR value is approximately €150.74 (about 15.0% of €1,001.47 NAV), within the 35% position limit; aggregate long equity exposure is approximately €352.90 (about 35.2% of NAV) with €648.57 cash. MSTR and ON are both existing long positions and the supplied 0.658 selected-candidate correlation indicates meaningful co-movement/concentration risk despite each individual position being moderate in size. The setup expires on 2026-10-08T12:10:16Z, so holding requires reassessment before expiry and immediate review if a valid completed 5-minute close is below $156.85.",
            "checks": {
              "proposalAction": "HOLD; no capital deployment or leverage requested",
              "cash": "€648.57; sufficient for current holdings, but irrelevant to HOLD",
              "mstrPositionPctNav": 15.05,
              "aggregateOpenPositionPctNav": 35.24,
              "maxPositionPct": 35,
              "mstrInvalidation": "Below $156.85 on one completed 5-minute close",
              "distanceToInvalidationPctFromObservedPrice": 4.61,
              "approximateMstrStopRiskPctNav": 0.69,
              "expiry": "2026-10-08T12:10:16Z",
              "correlationAndConcentration": "MSTR's supplied maximum selected correlation is 0.658; ON is also actually held, so correlated long-exposure risk is relevant.",
              "entryConfirmation": "Failed: sole completed 5-minute bar had zero reported volume versus 206,566.8 baseline; therefore no add is supported.",
              "regime": "Neutral/range and normal volatility, but tight liquidity with stale macro inputs; this supports no expansion rather than a new directional commitment."
            },
            "evidenceLimitations": [
              "Observed MSTR price and sole intraday bar are timestamped 2026-10-05T20:00:00Z and retrieved the following day; they are not fresh trading-session confirmation.",
              "Zero reported intraday volume makes participation verification unusable and may reflect data quality rather than genuine market activity.",
              "Price evidence comes from one chart source; no independent quote or completed-bar validation is supplied.",
              "Regime observations are from 2026-10-01, with delayed/timezone-ambiguous components, and should not be treated as current macro confirmation.",
              "No live earnings, news, or catalyst feed was supplied; event risk is unknown, not absent.",
              "The reported correlation is a selection statistic and is not a full portfolio covariance estimate; nonetheless, it is directionally relevant because ON is also held."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 price remains above the $163.17 breakout/entry threshold and the explicit $156.85 completed-5-minute-close invalidation. The trigger's “target” duplicates the entry threshold, so it is not evidence for profit-taking. Do not add: the required participation confirmation failed because the sole completed 5-minute bar reported zero volume versus the 206,566.8 baseline. High realized volatility (57.0%), elevated selected correlation (0.658) with the concurrently held ON position, tight-liquidity regime conditions, and roughly 35.2% aggregate open long exposure further favor no expansion. No evidence supports SELL or REDUCE while the documented invalidation remains unbroken.",
            "timeHorizon": "1-3 trading days; reassess before setup expiry on 2026-10-08T12:10:16Z and immediately upon a valid completed 5-minute close below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The price and sole intraday bar are timestamped 2026-10-05T20:00:00Z and were retrieved the following day, so they are not fresh-session confirmation. Zero reported volume prevents verification of required participation and may be a data artifact. Pricing is from one chart source without independent completed-bar validation. Macro/regime inputs are from 2026-10-01 and contain delayed or timezone-ambiguous components. No live news, earnings, or catalyst feed was supplied; event risk is unknown, not absent.",
            "reportTreatment": "Quant/Macro recommends HOLD: price and ranked momentum support retaining MSTR, but failed participation, high volatility, correlation, and neutral/range-tight-liquidity conditions reject BUY. Risk APPROVES HOLD only and explicitly vetoes expansion due to failed participation confirmation; it finds no evidenced exit condition because price is above invalidation. There is no material report disagreement: both support holding rather than adding or reducing."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD-only proposal is consistent with the supplied portfolio and documented MSTR invalidation: the last supplied $164.43 completed-bar close is above both the $163.17 breakout threshold and the $156.85 one-close invalidation. It requests no capital deployment, so failed current participation confirmation, high volatility, tight liquidity, and stale market evidence appropriately argue against an add rather than requiring an unsupported exit. No hard-risk veto applies to HOLD.",
            "checks": {
              "actionAndSizing": "PASS: HOLD with €0 requested; no new sizing, leverage, or cash use.",
              "priceAndInvalidation": "PASS with staleness caveat: supplied MSTR price is $164.42999 versus $156.85 invalidation. The documented rule requires a completed 5-minute close below $156.85; none is supplied.",
              "participation": "PASS for HOLD / vetoes BUY: the sole cited bar has zero volume against a 206,566.8 baseline, so required participation is not verified and the proposal correctly rejects expansion.",
              "arithmetic": "PASS: MSTR value €150.74 plus ON value €202.16 equals €352.90; €352.90 / €1,001.47 = 35.24%. MSTR alone is about 15.05% of NAV, below the 35% per-position limit. The stated aggregate exposure is not an identified aggregate limit.",
              "riskVeto": "PASS: risk and hardRisk approve HOLD only; no supplied risk process vetoes retaining the existing position.",
              "targetInterpretation": "PASS: the triggered $163.17 'target' matches the recorded MSTR entry/breakout level and is not substantiated as a profit-taking threshold.",
              "thesisConsistency": "PASS with qualification: retaining above the explicit invalidation is consistent with the stated HOLD thesis. However, the original entry record claims a 1.084x participating breakout, whereas current supplied bar data show zero volume; this discrepancy weakens confidence in the historical entry-confirmation narrative but does not establish a current exit condition.",
              "correlationClaim": "WEAKLY_SUPPORTED: 0.658 is stated as MSTR's maximum selected correlation and ON is held, but the evidence does not identify ON as the specific correlated pair. This is cautionary context, not necessary support for HOLD."
            },
            "evidenceLimitations": [
              "The decisive MSTR quote and completed 5-minute bar are timestamped 2026-10-05T20:00:00Z and retrieved on 2026-10-06T06:37Z; they are stale for a next-session trading decision and cannot confirm current price or invalidation status.",
              "The zero-volume bar may be a chart-data artifact. It prevents participation verification but cannot prove absent real market participation.",
              "All current price evidence is from a single Yahoo Finance chart source, without independent quote or completed-candle validation.",
              "Regime evidence is from 2026-10-01 and includes delayed/timezone-ambiguous inputs; it is stale directional context rather than current confirmation.",
              "No live news, earnings, or catalyst data are supplied, so event risk is unknown.",
              "The portfolio's historical MSTR entry reason reports a 1.084x participation confirmation, conflicting with the presently supplied zero-volume observation; no underlying historical bar evidence is provided to reconcile this."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 price remains above the $163.17 breakout/entry threshold and the explicit $156.85 completed-5-minute-close invalidation. The trigger's “target” duplicates the entry threshold, so it is not evidence for profit-taking. Do not add: the required participation confirmation failed because the sole completed 5-minute bar reported zero volume versus the 206,566.8 baseline. High realized volatility (57.0%), elevated selected correlation (0.658) with the concurrently held ON position, tight-liquidity regime conditions, and roughly 35.2% aggregate open long exposure further favor no expansion. No evidence supports SELL or REDUCE while the documented invalidation remains unbroken.",
          "timeHorizon": "1-3 trading days; reassess before setup expiry on 2026-10-08T12:10:16Z and immediately upon a valid completed 5-minute close below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The price and sole intraday bar are timestamped 2026-10-05T20:00:00Z and were retrieved the following day, so they are not fresh-session confirmation. Zero reported volume prevents verification of required participation and may be a data artifact. Pricing is from one chart source without independent completed-bar validation. Macro/regime inputs are from 2026-10-01 and contain delayed or timezone-ambiguous components. No live news, earnings, or catalyst feed was supplied; event risk is unknown, not absent.",
          "reportTreatment": "Quant/Macro recommends HOLD: price and ranked momentum support retaining MSTR, but failed participation, high volatility, correlation, and neutral/range-tight-liquidity conditions reject BUY. Risk APPROVES HOLD only and explicitly vetoes expansion due to failed participation confirmation; it finds no evidenced exit condition because price is above invalidation. There is no material report disagreement: both support holding rather than adding or reducing."
        },
        "tradePermitted": false,
        "decisionKey": "a3ba9885248238a5",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "c0dd17a397c15f251c98e964ff93ae98a358bbd1",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T06:59:14.050Z",
        "evidenceHash": "fef8158ab2ed1aef71697118b96e9310d10f951091cc9cf3f711410ac6544025",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed price of $164.43 is above the $163.17 entry/breakout threshold and above the explicit $156.85 completed-5-minute-close invalidation. The trigger was generated because the recorded target duplicates the entry level; it is not an independently supported profit-taking signal. Do not add because the required participation confirmation failed: the only supplied completed 5-minute bar has zero volume against a 206,566.8 baseline. No supplied evidence confirms a reversal requiring reduction or exit.",
            "timeHorizon": "Until the 1-3 trading-day setup horizon expires on 2026-10-08, or earlier on a verified completed 5-minute close below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest quote and completed bar are timestamped 2026-10-05 20:00 UTC while the decision trigger is dated 2026-10-06; no fresher regular-session confirmation is supplied.",
              "Zero reported intraday volume prevents validation of the required participation condition and may reflect an unusable/after-hours data point.",
              "The broader regime snapshot is from 2026-10-01 and is therefore stale for current risk assessment.",
              "No live news, earnings, corporate-action, bitcoin, or macro-event feed was provided; event risk cannot be assessed or assumed absent.",
              "The target field merely repeats the entry threshold, so it cannot establish a realized target or sell rule."
            ],
            "quantView": "MSTR remains ranked but is lower quality than ON: quant score 1.576, strong 20-day momentum of 29.9%, 1.55x volume ratio, and substantial 20-day relative strength of 29.3% are favorable. However, 5-day momentum is only 0.9%, annualized 10-day realized volatility is 57.0%, ATR is 6.18%, and maximum selected correlation is 0.658. Price has held above entry, but the mandatory breakout participation test is unconfirmed; this supports holding an already-open reduced position rather than buying more. The separate ON holding is also near its newer $86.09 trigger but remains unconfirmed, so no portfolio expansion is supported.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Fragile participation signals include regional-bank underperformance versus SPY, a firmer dollar, and a higher 10-year yield; these conditions argue against relaxing confirmation standards or increasing correlated long exposure. There is no verified macro deterioration sufficient to override MSTR's price-level invalidation, but regime evidence is stale.",
            "disagreements": "Price action alone supports continued holding because MSTR is above $163.17 and well above $156.85. Participation evidence conflicts with a bullish breakout interpretation because reported volume is zero, and the automated target trigger is mechanically unreliable because target equals entry. The resolution is HOLD with no additional capital and no reduction absent the documented invalidation or fresh reversal evidence."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "HOLD/no-add for the existing MSTR paper position is risk-consistent. The position is already reduced at about €150.69 (roughly 15.0% of €1,001.35 portfolio value), below the 35% position limit, with no incremental cash or exposure requested. Although the supplied price is above the $163.17 entry threshold and $156.85 invalidation, the required participation confirmation failed because the only completed 5-minute bar reported zero volume. Given MSTR's high 57.0% realized volatility, 6.18% ATR, 0.658 selected correlation with concurrently held ON, tight-liquidity/range regime, and stale data, no expansion is justified. Continued holding is conditional on the documented expiry and a verified completed 5-minute-close invalidation; this approval is not an instruction to trade.",
            "checks": {
              "proposedAction": "HOLD MSTR; €0 incremental amount",
              "cashAndSizing": {
                "cashEur": 648.57,
                "mstrValueEur": 150.69,
                "mstrPortfolioPct": 15.05,
                "onValueEur": 202.1,
                "aggregateOpenLongPct": 35.23,
                "maxPositionPct": 35,
                "maxBuyEur": 250,
                "result": "No new capital is requested; MSTR alone is within the position cap. Aggregate long exposure is material but does not increase under HOLD."
              },
              "correlationAndConcentration": {
                "mstrOnSelectedCorrelation": 0.658,
                "result": "Meaningful correlation/concentration risk exists across the two open longs; it supports no-add, not a forced exit absent invalidation."
              },
              "invalidationAndHorizon": {
                "invalidation": "Verified completed 5-minute close below $156.85, or failed breakout/reversal under the stated setup.",
                "expiry": "2026-10-08T12:10:16.000Z",
                "expectedHorizon": "1-3 trading days",
                "result": "The stated HOLD horizon is bounded by expiry or earlier verified invalidation. The observed price is above invalidation but is not sufficiently fresh or participation-confirmed to support adding."
              },
              "triggerIntegrity": {
                "result": "The automated target event is not a valid take-profit signal because target duplicates the $163.17 entry threshold."
              },
              "regime": {
                "risk": "NEUTRAL",
                "trend": "RANGE",
                "volatility": "NORMAL",
                "liquidity": "TIGHT",
                "positionSizeMultiplier": 0.68,
                "result": "Stale but cautionary regime evidence supports retaining strict confirmation requirements and avoiding increased correlated long exposure."
              }
            },
            "evidenceLimitations": [
              "Latest MSTR quote/bar is timestamped 2026-10-05T20:00:00Z, preceding the 2026-10-06 decision event; no fresh regular-session confirmation is provided.",
              "The sole relevant 5-minute bar has zero reported volume, so required participation cannot be validated and the quote may reflect unusable or after-hours data.",
              "Regime observations are dated 2026-10-01 and are stale relative to the decision.",
              "No current news, earnings, corporate-action, bitcoin, or macro-event data is available; event risk is unknown rather than absent.",
              "Selected-universe correlation is not a full held-portfolio correlation estimate and does not capture MSTR's potential bitcoin-linked exposure.",
              "Price remaining above entry/invalidation alone does not validate the breakout after participation failure."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the $163.17 breakout/entry threshold and the documented $156.85 completed-5-minute-close invalidation. The trigger is not a valid take-profit basis because its target duplicates the entry threshold. Do not add: the required participation test failed because the sole completed 5-minute bar reports zero volume versus the 206,566.8 baseline. No verified reversal or invalidation supports REDUCE or full SELL. Quant/Macro and Risk agree on HOLD/no-add; both cite high volatility, meaningful correlation with ON, tight-liquidity/range conditions, and stale data as reasons not to expand exposure.",
            "timeHorizon": "Until setup expiry on 2026-10-08T12:10:16Z, or earlier if a verified completed 5-minute close is below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "Latest MSTR quote and completed bar are timestamped 2026-10-05T20:00:00Z, before the 2026-10-06 decision event; no fresher regular-session evidence is supplied.",
              "The relevant bar reports zero volume, preventing verification of mandatory participation and potentially reflecting unusable or after-hours data.",
              "Macro/regime evidence is from 2026-10-01 and is stale.",
              "No current news, earnings, corporate-action, bitcoin, or macro-event feed is supplied; event risk is unknown.",
              "The target field repeats the entry threshold and therefore does not establish a profit-taking rule."
            ],
            "reportTreatment": "Quant/Macro recommends HOLD MSTR with no incremental capital: price is above entry and invalidation, but participation failed and the target trigger is mechanically unreliable. Risk APPROVE concurs only for HOLD/no-add, noting MSTR is within its individual position cap but has high 57% realized volatility, 6.18% ATR, 0.658 selected correlation with ON, and material aggregate long exposure. No risk veto is present; no report supports buying, reducing, or exiting on the supplied evidence."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The final proposal is a genuine HOLD/no-add for the existing MSTR paper position and does not rely on the mechanically triggered target event as a sell signal. It requests €0, creates no new exposure, and is consistent with the supplied price being above the documented $156.85 invalidation while participation and freshness are inadequate for an expansion. Stale and zero-volume evidence is explicitly disclosed rather than used to justify a new trade. No supplied hard-risk veto contradicts HOLD.",
            "checks": {
              "actionAndSizing": {
                "result": "PASS",
                "detail": "Proposal is HOLD MSTR with €0 incremental amount. No cash use, order, leverage, or position increase is proposed."
              },
              "positionArithmetic": {
                "result": "PASS",
                "detail": "MSTR value is approximately €150.69: 1.02771459 × $164.4299927 = about $168.99; divided by 1.1214534 USD/EUR = about €150.69. This is about 15.05% of the stated €1,001.35 portfolio value, below the 35% single-position cap."
              },
              "portfolioArithmetic": {
                "result": "PASS_WITH_ROUNDING",
                "detail": "Reported held values (€202.10 ON + €150.69 MSTR = €352.79) plus €648.57 cash equal €1,001.36, a €0.01 rounding difference from stated portfolio value of €1,001.35. Aggregate long exposure is approximately 35.23%, consistent with the risk report and unchanged under HOLD."
              },
              "priceAndInvalidation": {
                "result": "PASS_WITH_STALENESS_LIMITATION",
                "detail": "The supplied MSTR observation of $164.43 is above both the $163.17 entry threshold and $156.85 completed-5-minute-close invalidation. The proposal appropriately conditions the stated invalidation on verified completed-bar evidence and does not infer a fresh confirmation."
              },
              "triggerIntegrity": {
                "result": "PASS",
                "detail": "The proposal correctly rejects the POSITION_TARGET_LEVEL event as a take-profit basis because the stored MSTR target is the same $163.17 level as the entry/breakout threshold."
              },
              "participation": {
                "result": "PASS",
                "detail": "Mandatory participation is not verified: the sole cited completed 5-minute bar has volume 0 against a 206,566.8 baseline. The proposal uses this as a no-add constraint, not as invented confirmation."
              },
              "riskAndConcentration": {
                "result": "PASS",
                "detail": "No risk veto is supplied. Risk and hardRisk both approve HOLD/no-add. The proposal accurately retains caution around MSTR's 57.03% realized volatility, 6.179% ATR, 0.658 selected correlation with ON, tight-liquidity/range regime, and existing aggregate long exposure."
              },
              "thesisAndHorizon": {
                "result": "PASS_WITH_QUALIFICATION",
                "detail": "The HOLD horizon is bounded by setup expiry on 2026-10-08T12:10:16Z or verified invalidation. This is consistent with the current setup. The proposal does not treat failed current participation as retroactively proving that the existing position must be sold."
              },
              "evidenceIntegrity": {
                "result": "PASS_WITH_LIMITATIONS",
                "detail": "No unsupported catalyst, news, bitcoin, earnings, macro, or fresh-volume claim is introduced. The proposal acknowledges that the prior entry thesis claims a participation-confirmed breakout, but the supplied current evidence cannot independently verify that historical claim."
              }
            },
            "evidenceLimitations": [
              "Latest MSTR quote and sole completed bar are timestamped 2026-10-05T20:00:00Z, while retrieved shortly before the 2026-10-06 trigger; they are not fresh regular-session evidence for an active decision.",
              "The zero-volume bar prevents participation validation and may be after-hours, incomplete, or otherwise unusable for the 5-minute confirmation rule.",
              "Regime inputs were observed on 2026-10-01 and are stale relative to this decision.",
              "No live news, earnings, corporate-action, bitcoin-market, or macro-event evidence is supplied; event risk is unknown.",
              "The opening MSTR thesis states that a completed close had 1.084x participation, but no underlying historical bar is supplied here to independently audit that entry-time assertion.",
              "Selected-universe correlation of 0.658 is not a complete portfolio or bitcoin-beta correlation estimate."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the $163.17 breakout/entry threshold and the documented $156.85 completed-5-minute-close invalidation. The trigger is not a valid take-profit basis because its target duplicates the entry threshold. Do not add: the required participation test failed because the sole completed 5-minute bar reports zero volume versus the 206,566.8 baseline. No verified reversal or invalidation supports REDUCE or full SELL. Quant/Macro and Risk agree on HOLD/no-add; both cite high volatility, meaningful correlation with ON, tight-liquidity/range conditions, and stale data as reasons not to expand exposure.",
          "timeHorizon": "Until setup expiry on 2026-10-08T12:10:16Z, or earlier if a verified completed 5-minute close is below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "Latest MSTR quote and completed bar are timestamped 2026-10-05T20:00:00Z, before the 2026-10-06 decision event; no fresher regular-session evidence is supplied.",
            "The relevant bar reports zero volume, preventing verification of mandatory participation and potentially reflecting unusable or after-hours data.",
            "Macro/regime evidence is from 2026-10-01 and is stale.",
            "No current news, earnings, corporate-action, bitcoin, or macro-event feed is supplied; event risk is unknown.",
            "The target field repeats the entry threshold and therefore does not establish a profit-taking rule."
          ],
          "reportTreatment": "Quant/Macro recommends HOLD MSTR with no incremental capital: price is above entry and invalidation, but participation failed and the target trigger is mechanically unreliable. Risk APPROVE concurs only for HOLD/no-add, noting MSTR is within its individual position cap but has high 57% realized volatility, 6.18% ATR, 0.658 selected correlation with ON, and material aggregate long exposure. No risk veto is present; no report supports buying, reducing, or exiting on the supplied evidence."
        },
        "tradePermitted": false,
        "decisionKey": "b6a5c2cff084b94b",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "0c99cd1600cd79d4ee4177bf130535a8d50b49e6",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T07:17:03.897Z",
        "evidenceHash": "65b8b9f37c98df159d957945cd7ae7fbc33fd6cd8c56b9894f5140eba6706c69",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position, but do not add or treat the target-level alert as a take-profit signal. The observed price of $164.43 is above the $163.17 entry threshold, yet the required participation confirmation failed: the only completed 5-minute bar had zero reported volume against a 206,566.8 baseline. The triggered target duplicates the entry level and therefore provides no independently valid exit objective. Price also remains above the documented $156.85 completed-5-minute-close invalidation, so there is no verified exit condition.",
            "timeHorizon": "Until the 1-3 trading-day setup expires on 2026-10-08 or until a fresh confirmed invalidation/reversal occurs.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The latest quote is a 2026-10-05 20:00 5-minute observation retrieved on 2026-10-06, with zero bar volume; it cannot confirm participation. Macro-regime inputs are from 2026-10-01 and include delayed/timezone-ambiguous components. No live catalyst, earnings, or news feed was supplied, so event risk is unknown rather than absent.",
            "quantView": "MSTR remains above its breakout level and retains strong 20-day momentum (+29.9%) and above-baseline daily volume (1.55x), but near-term 5-day momentum is only +0.9%. Its 57.0% annualized 10-day realized volatility, 6.18% ATR, and 0.66 maximum selected correlation make adding unsuitable in a confirmation-dependent breakout process. The setup's required volume confirmation is explicitly unmet; hold the existing reduced exposure rather than buy, reduce, or sell.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with TIGHT liquidity and a 0.68 position-size multiplier. Higher rates, a firmer dollar, weak regional-bank relative performance, and fragile participation limit confidence in momentum continuation. These conditions argue against expanding risk, but do not independently validate a reduction while MSTR remains above its recorded invalidation level.",
            "disagreements": "No material disagreement: quant and macro both support HOLD/no-add. Quant notes that price is above the entry threshold but lacks required participation; macro notes tight-liquidity/range conditions and stale evidence. The target alert conflicts with the recorded trade logic because its $163.17 level duplicates the entry trigger, so it is not treated as an exit instruction."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve HOLD/no-add for the existing MSTR paper position. The proposed action does not increase exposure and is consistent with the recorded rule set: the supplied observation remains above the $156.85 completed-5-minute-close invalidation, while the required participation confirmation for the breakout is explicitly unmet. The $163.17 alert duplicates the entry trigger and is not a valid independent profit-taking target. Existing MSTR exposure is approximately €150.55 (about 15.0% of €1,001.04 portfolio value); combined ON and MSTR exposure is approximately €352.46 (about 35.2%), with cash of €648.57. This supports no expansion, especially given MSTR's 57% realized volatility, 6.18% ATR, and stated 0.66 selected-set correlation with ON. Approval applies only to maintaining the present paper position; it is not an instruction to trade or to ignore a subsequently verified invalidation.",
            "checks": {
              "actionAndSizing": {
                "proposedEurAmount": 0,
                "newExposureAdded": false,
                "maxBuyEur": 250,
                "maxPositionPct": 35,
                "mstrPortfolioPctApprox": 15.04,
                "combinedEquityExposurePctApprox": 35.21,
                "cashEur": 648.57,
                "result": "PASS_FOR_HOLD; no new sizing or cash use."
              },
              "invalidation": {
                "documentedRule": "MSTR below $156.85 on one completed 5-minute close.",
                "suppliedPrice": 164.43,
                "status": "NOT_INVALIDATED_ON_SUPPLIED_OBSERVATION",
                "requiredResponse": "Reassess promptly on fresh completed-bar data; a verified close below $156.85 supersedes this HOLD assessment."
              },
              "confirmation": {
                "entryLevel": 163.17,
                "priceAboveEntry": true,
                "participationRequired": true,
                "reportedCompletedBarVolume": 0,
                "baselineVolume": 206566.8,
                "participationConfirmed": false,
                "result": "FAILS_ADD_CONFIRMATION; supports no-add, not an automatic exit."
              },
              "correlationAndConcentration": {
                "heldPositions": [
                  "ON",
                  "MSTR"
                ],
                "selectionCorrelationProvided": 0.658,
                "assessment": "This is selected-universe correlation rather than a verified held-portfolio correlation estimate, but both positions are momentum-oriented equities and can share broad risk-on/risk-off and liquidity sensitivity. No-add avoids raising this clustered exposure."
              },
              "horizonAndExpiry": {
                "expectedHorizon": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16.000Z",
                "assessment": "The remaining validity window is short. HOLD is reasonable only with a fresh review at or before expiry; do not roll the thesis forward automatically."
              },
              "regime": {
                "suppliedRegime": "NEUTRAL / RANGE / TIGHT liquidity",
                "positionSizeMultiplier": 0.68,
                "assessment": "Tight liquidity, fragile participation, higher rates, and firmer USD argue against adding high-volatility momentum exposure. They do not by themselves establish the recorded price-based invalidation."
              },
              "targetIntegrity": {
                "triggeredTarget": 163.17,
                "entryTrigger": 163.17,
                "assessment": "The target field is logically unusable as a take-profit level because it equals the entry threshold."
              }
            },
            "evidenceLimitations": [
              "The MSTR price and 5-minute bar are timestamped 2026-10-05 20:00 and retrieved on 2026-10-06; they are stale for a live market decision and may represent an after-hours or incomplete-data condition.",
              "Reported 5-minute volume is zero, so participation cannot be confirmed; zero volume may be a data-quality artifact rather than genuine absence of trading.",
              "Macro/regime observations are from 2026-10-01, include delayed and timezone-ambiguous inputs, and are designated SHADOW/research-only.",
              "No live catalyst, earnings-calendar, news, corporate-action, or gap-risk evidence is available; event risk is unknown, not absent.",
              "The supplied 0.66 figure is maximum selected correlation, not a current correlation calculation for actual held positions, and no sector/factor exposure decomposition is supplied.",
              "No fresh verified completed 5-minute close is supplied for either continuation confirmation or invalidation."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position without adding, reducing, or exiting. The supplied $164.43 observation is above the $163.17 entry/breakout level and above the recorded $156.85 completed-5-minute-close invalidation, so no verified exit condition exists. The alert at $163.17 is not a valid profit target because it duplicates the entry trigger. Required breakout participation is not confirmed: the only reported completed 5-minute bar has zero volume versus a 206,566.8 baseline. High realized volatility, meaningful selected-set correlation with ON, tight-liquidity/range regime conditions, and already roughly 35% combined equity exposure support no-add rather than a discretionary reduction.",
            "timeHorizon": "Review promptly on fresh completed 5-minute data and no later than setup expiry on 2026-10-08T12:10:16.000Z; reassess sooner if a verified completed 5-minute close falls below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The latest MSTR observation is timestamped 2026-10-05 20:00 and retrieved on 2026-10-06, making it stale for a live decision. Reported bar volume is zero and may be a data artifact, so participation cannot be confirmed. Macro inputs are from 2026-10-01, partly delayed/timezone-ambiguous, and SHADOW/research-only. No live news, earnings, catalyst, corporate-action, or gap-risk evidence was supplied. The 0.66 correlation is a selected-universe statistic, not a current held-portfolio correlation estimate.",
            "reportTreatment": "Quant/Macro recommends HOLD/no-add, citing price above invalidation but failed participation confirmation, high volatility, and tight-liquidity/range conditions. Risk APPROVES HOLD/no-add and explicitly notes no risk veto; it requires reassessment on a fresh verified close below $156.85. There is no material disagreement. The target-level trigger is disregarded as an exit signal because it conflicts with the recorded logic by equaling the entry threshold."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The FINAL proposal is a non-executing HOLD with €0 added exposure. It does not rely on the malformed $163.17 target alert as a sell signal, does not add despite failed current participation evidence, and preserves the documented $156.85 completed-5-minute-close invalidation for a fresh review. Stale evidence materially limits confidence but does not make a no-change HOLD unsafe or contradictory.",
            "checks": {
              "actionAndSizing": "PASS: proposed amount is €0, so maxBuyEur €250, cash availability, and prospective sizing constraints are not implicated. MSTR value of approximately €150.55 is about 15.0% of €1,001.04 portfolio value; stated combined ON/MSTR exposure of approximately €352.46 is about 35.2%.",
              "arithmetic": "PASS_WITH_MINOR_ROUNDING: €201.91 ON plus €150.55 MSTR plus €648.57 cash equals €1001.03 versus reported €1001.04, a €0.01 rounding difference. The reported 35.21% combined exposure is arithmetically consistent with €352.46 / €1001.04.",
              "timestamps": "PASS_FOR_HOLD_WITH_STALENESS_FLAG: MSTR price/bar is from 2026-10-05T20:00:00Z and retrieved at 2026-10-06T07:17Z; macro regime inputs are from 2026-10-01. The proposal explicitly discloses this and requires fresh completed-bar review rather than treating the data as current confirmation.",
              "invalidation": "PASS: supplied MSTR observation of $164.43 is above the recorded $156.85 invalidation threshold. No completed 5-minute close below $156.85 is supplied. The proposal correctly makes HOLD contingent on reassessment if a fresh verified close breaches that rule.",
              "participation": "PASS: the current reported 5-minute bar has zero volume against a 206,566.8 baseline, so it cannot support an add/continuation confirmation. The proposal uses this only to justify no-add, not as an automatic exit.",
              "thesisAndTargetIntegrity": "PASS: the alert level/recorded target of $163.17 duplicates MSTR's entry trigger, so it is not a coherent profit target. Disregarding it as an exit instruction is consistent with the supplied setup. The proposal appropriately avoids claiming that the zero-volume later bar negates the original recorded entry confirmation.",
              "riskVeto": "PASS: Risk and hardRisk approve only maintenance, and no supplied risk rule requires a reduction solely because of volatility, correlation, or tight liquidity. Combined exposure slightly exceeds 35%, but the supplied maxPositionPct is not explicitly defined as a portfolio-wide aggregate cap and HOLD adds no exposure.",
              "expiry": "PASS: setup expiry is 2026-10-08T12:10:16Z, after the decision timestamp. The proposal specifies review no later than expiry and does not roll the short-horizon thesis forward automatically."
            },
            "evidenceLimitations": [
              "The decisive quote is an overnight/stale 2026-10-05 20:00 observation, not fresh market data at the 2026-10-06 decision time.",
              "Zero reported volume may be a chart/feed artifact; it establishes lack of usable participation confirmation, not necessarily absence of actual trading.",
              "Regime evidence is approximately five days older than the decision and is SHADOW/research-only, with delayed and timezone-ambiguous components.",
              "No live news, earnings, corporate-action, catalyst, or gap-risk evidence is supplied; event risk is unknown.",
              "The 0.658 correlation is a selected-universe maximum correlation statistic, not a current realized correlation estimate for the actual ON/MSTR holdings.",
              "The supplied target field is internally malformed because it repeats the entry level; therefore it provides no independent target evidence."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position without adding, reducing, or exiting. The supplied $164.43 observation is above the $163.17 entry/breakout level and above the recorded $156.85 completed-5-minute-close invalidation, so no verified exit condition exists. The alert at $163.17 is not a valid profit target because it duplicates the entry trigger. Required breakout participation is not confirmed: the only reported completed 5-minute bar has zero volume versus a 206,566.8 baseline. High realized volatility, meaningful selected-set correlation with ON, tight-liquidity/range regime conditions, and already roughly 35% combined equity exposure support no-add rather than a discretionary reduction.",
          "timeHorizon": "Review promptly on fresh completed 5-minute data and no later than setup expiry on 2026-10-08T12:10:16.000Z; reassess sooner if a verified completed 5-minute close falls below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The latest MSTR observation is timestamped 2026-10-05 20:00 and retrieved on 2026-10-06, making it stale for a live decision. Reported bar volume is zero and may be a data artifact, so participation cannot be confirmed. Macro inputs are from 2026-10-01, partly delayed/timezone-ambiguous, and SHADOW/research-only. No live news, earnings, catalyst, corporate-action, or gap-risk evidence was supplied. The 0.66 correlation is a selected-universe statistic, not a current held-portfolio correlation estimate.",
          "reportTreatment": "Quant/Macro recommends HOLD/no-add, citing price above invalidation but failed participation confirmation, high volatility, and tight-liquidity/range conditions. Risk APPROVES HOLD/no-add and explicitly notes no risk veto; it requires reassessment on a fresh verified close below $156.85. There is no material disagreement. The target-level trigger is disregarded as an exit signal because it conflicts with the recorded logic by equaling the entry threshold."
        },
        "tradePermitted": false,
        "decisionKey": "78ffaa5a9322141e",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "ad85daf4306f313457fe196ce629cbd383ea261c",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T07:41:31.669Z",
        "evidenceHash": "b44be48122d79ca97077bdb90b80989713b2254730d8cf57fe8d35db418bec2c",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position without adding, trimming, or exiting. The observed $164.43 is above the $163.17 breakout/entry level and remains above the $156.85 invalidation, but the event was triggered by a mislabeled target that duplicates the entry threshold rather than a valid profit objective. The required one completed 5-minute close is price-confirmed, yet participation is explicitly unconfirmed because the reported bar volume is zero versus a 206,566.8 baseline. With no verified failure condition and no valid participation confirmation, neither a buy nor a discretionary reduction is supported.",
            "timeHorizon": "Until the next verified completed 5-minute observation, setup expiry on 2026-10-08T12:10:16Z, or invalidation; original horizon 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest price/bar is timestamped 2026-10-05T20:00:00Z and retrieved on 2026-10-06, so it is not demonstrably current at decision time.",
              "Reported 5-minute volume is zero, preventing validation of the required participation filter.",
              "The trigger labels $163.17 as a target although it is the recorded entry/breakout level; no profit-taking target is supplied.",
              "Regime observations are from 2026-10-01 and the regime engine is SHADOW research output, not an execution control.",
              "No live catalyst, earnings, or news evidence was supplied; event risk is unknown rather than absent."
            ],
            "quantView": "MSTR remains a ranked momentum candidate (rank 5; quant score 1.576) with strong 20-day momentum (+29.9%), positive but weak 5-day momentum (+0.9%), 1.55x daily volume, and substantial liquidity. However, 57.0% annualized 10-day realized volatility, 6.18% ATR, and 0.658 maximum selected correlation make it a high-variance exposure. Its price is only about 0.8% above the entry threshold, while required intraday volume confirmation fails. ON remains above its earlier position-entry trigger but below its newer $86.09 trigger, which is likewise unconfirmed due to zero reported volume; this provides no basis to increase aggregate exposure.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Weak regional-bank relative performance, a firmer dollar, and higher rates are adverse to broad risk-taking despite low VIX-level conditions and near-flat major-index moves. This mixed, internally fragile backdrop permits only confirmed range-breakout execution, not relaxed confirmation standards.",
            "disagreements": "Price-only logic could view MSTR above $163.17 as a reason to add or treat the sensor alert as a target event. The quant and macro assessment rejects that interpretation: the participation requirement failed, the alert threshold is not a genuine target, the quote is stale for an intraday decision, and the tight-liquidity/range regime does not justify overriding those deficiencies."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD-only decision for the existing MSTR paper position. It adds no exposure, preserves substantial cash (€648.57; roughly 65% of portfolio value), and does not rely on the erroneous target alert as a trading signal. The observed price is above the recorded $156.85 invalidation, so the supplied evidence does not establish a rule-based exit. Conversely, an add is unsupported because the required participation condition is not met and aggregate existing equity exposure is already about 35%, concentrated in two momentum/breakout positions under a tight-liquidity range regime. Approval is only of no action, not an instruction to trade.",
            "checks": {
              "proposedAction": {
                "action": "HOLD",
                "incrementalExposureEur": 0,
                "withinMaxBuyEur": true
              },
              "portfolioExposure": {
                "positionsEur": 352.19,
                "positionsPctOfPortfolio": 35.19,
                "cashEur": 648.57,
                "cashPctOfPortfolio": 64.81,
                "concentration": "Two long momentum/breakout equity exposures; MSTR is high volatility and ON is another correlated risk-on selection."
              },
              "correlation": {
                "selectionCorrelationEvidence": "MSTR maximum selected correlation is 0.658; ON's selected-set maximum correlation is 0.322.",
                "heldPortfolioAssessment": "The data do not supply a direct pairwise MSTR-ON correlation. Selection correlation is not sufficient to quantify held-portfolio correlation, but both positions retain common momentum/risk-regime sensitivity; no add is therefore prudent."
              },
              "riskControls": {
                "MSTRInvalidation": "One completed 5-minute close below $156.85.",
                "MSTRExpiry": "2026-10-08T12:10:16Z.",
                "currentObservation": "Reported $164.43 is above $163.17 entry trigger and $156.85 invalidation, but the completed bar has zero volume and fails the required participation test.",
                "riskSizing": "Existing MSTR position is approximately €150.43, about 15.0% of portfolio value; no incremental risk is proposed.",
                "horizon": "Original 1-3 trading days; reassess on a fresh completed observation, invalidation, or expiry."
              },
              "regime": {
                "suppliedState": "NEUTRAL risk, RANGE trend, NORMAL volatility, TIGHT liquidity; position-size multiplier 0.68.",
                "implication": "This backdrop does not support relaxing volume confirmation or increasing high-volatility correlated momentum exposure."
              },
              "catalyst": {
                "status": "Unknown",
                "action": "No catalyst-based conclusion is warranted; HOLD does not require assuming that no catalyst exists."
              }
            },
            "evidenceLimitations": [
              "The operative MSTR price and completed bar are timestamped 2026-10-05T20:00:00Z but retrieved on 2026-10-06; they are stale for an intraday decision.",
              "Zero reported 5-minute volume versus a stated 206,566.8 baseline prevents confirmation of the mandatory participation filter and may reflect data quality rather than actual trading volume.",
              "The sensor's alleged MSTR target ($163.17) is identical to the entry trigger, so it cannot validate a profit-taking or reduction decision.",
              "Direct realized correlation between the actual ON and MSTR holdings, including beta and overlapping factor exposure, is absent.",
              "Regime inputs are dated 2026-10-01, include delayed/timezone-ambiguous data, and the regime engine is SHADOW-only.",
              "No current earnings calendar, news, corporate-action, or crypto-linked catalyst evidence is supplied; MSTR-specific event risk remains unquantified."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The observed $164.43 is above both the $163.17 entry/breakout level and the $156.85 rule-based invalidation, so no verified exit condition supports SELL or REDUCE. The sensor's target alert is not actionable because $163.17 duplicates the entry threshold rather than a supplied profit target. BUY is unsupported because the required completed 5-minute price confirmation lacks mandatory participation confirmation: reported volume is zero versus the 206,566.8 baseline. The high-volatility MSTR exposure and the tight-liquidity range backdrop further support no add.",
            "timeHorizon": "Reassess on a fresh completed 5-minute observation, a completed close below $156.85, setup expiry on 2026-10-08T12:10:16Z, or the next strategy review; original horizon is 1-3 trading days.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest MSTR bar is timestamped 2026-10-05T20:00:00Z and is not demonstrably current at decision time.",
              "Reported zero 5-minute volume prevents validation of the mandatory participation filter and could be a data-quality artifact.",
              "The purported target is identical to the entry trigger; no valid profit-taking level is supplied.",
              "Direct ON-MSTR holding correlation is unavailable.",
              "Macro/regime evidence is dated 2026-10-01, partly delayed or timezone-ambiguous, and the regime engine is SHADOW-only.",
              "No live catalyst, earnings, corporate-action, or news evidence is supplied; event risk is unknown."
            ],
            "reportTreatment": {
              "quantMacro": "Accepted. It supports HOLD: price remains above invalidation, but participation is unconfirmed, the alert is mislabeled, and neither adding nor discretionary trimming has evidentiary support.",
              "risk": "Accepted. Risk approves HOLD only, not an increase, noting roughly 35% aggregate equity exposure, MSTR's high volatility, common risk-on sensitivity with ON, and the tight-liquidity range regime.",
              "disagreements": "Price-only interpretation of $164.43 above $163.17 could suggest an add or target-based action. This is rejected because $163.17 is the entry level rather than a valid target, required participation failed, and the quote/bar is stale. There is no disagreement supporting an exit because the $156.85 completed-close invalidation has not been breached."
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The FINAL proposal is a true HOLD with €0 incremental exposure and is supported by the supplied evidence: MSTR's observed completed 5-minute close of $164.43 remains above the recorded $156.85 completed-close invalidation, while the $163.17 alert is correctly identified as the entry/breakout threshold rather than a valid profit target. No add is proposed despite price being above entry because the mandatory participation condition fails on reported zero volume. Stale and incomplete evidence appropriately supports no action rather than a new trade or discretionary exit.",
            "checks": {
              "actionAndSizing": {
                "proposal": "HOLD MSTR, €0",
                "incrementalExposureEur": 0,
                "maxBuyEur": 250,
                "result": "PASS; no purchase, sale, or exposure increase is proposed."
              },
              "portfolioArithmetic": {
                "onValueEur": "2.6375123 × $85.9300 / 1.12334299 = approximately €201.76",
                "mstrValueEur": "1.02771459 × $164.4300 / 1.12334299 = approximately €150.43",
                "positionsEur": "€201.76 + €150.43 = €352.19",
                "portfolioReconciliation": "€352.19 positions + €648.57 cash = €1,000.76 portfolio value",
                "aggregateExposurePct": "€352.19 / €1,000.76 = approximately 35.19%",
                "result": "PASS; supplied values reconcile subject to rounding."
              },
              "positionLimits": {
                "onPct": "approximately 20.16% of portfolio",
                "mstrPct": "approximately 15.03% of portfolio",
                "maxPositionPct": 35,
                "result": "PASS; each existing position is below the stated 35% maximum. The 35.19% figure is aggregate equity exposure, not a demonstrated breach of a per-position limit."
              },
              "triggerAndRules": {
                "mstrEntry": "ABOVE $163.17, one completed 5-minute close, participation required",
                "mstrInvalidation": "BELOW $156.85, one completed 5-minute close",
                "observation": "$164.43 completed close is above entry and invalidation, but reported volume is zero versus a 206,566.8 baseline",
                "result": "PASS; no verified invalidation supports an exit, and failed participation vetoes an add under the supplied entry rule."
              },
              "thesisConsistency": {
                "result": "PASS with caveats; the proposal does not treat the mislabeled target alert as a take-profit signal and does not claim a fresh breakout confirmation. It correctly distinguishes price-only confirmation from required price-plus-participation confirmation."
              },
              "riskVeto": {
                "result": "PASS; HOLD introduces no new risk. High MSTR volatility, tight-liquidity/range regime, and absent direct ON-MSTR correlation evidence are valid reasons not to increase exposure, though they do not independently compel an exit."
              },
              "timestamps": {
                "decisionTrigger": "2026-10-06T07:41:30Z",
                "latestMstrBar": "2026-10-05T20:00:00Z",
                "fxMarketTime": "2026-10-06T07:40:51Z",
                "result": "PASS for HOLD only; the MSTR bar is roughly 11 hours 41 minutes older than the decision trigger and is not sufficiently current for an intraday entry/add decision. The proposal expressly discloses this."
              }
            },
            "evidenceLimitations": [
              "The operative MSTR price is a 2026-10-05T20:00:00Z bar retrieved the following morning; its adequacy is limited to establishing that no supplied invalidation breach occurred, not to validating a fresh trading signal.",
              "Reported zero 5-minute volume makes participation confirmation unavailable and may be a data artifact rather than actual zero trading volume.",
              "The target field is internally malformed: its $163.17 level duplicates the MSTR entry trigger. It cannot support profit-taking analysis.",
              "The regime evidence is dated 2026-10-01, includes delayed/timezone-ambiguous inputs, and is explicitly SHADOW-only.",
              "No live catalyst, earnings, corporate-action, or news evidence is available.",
              "There are unrelated data-consistency weaknesses: ON's recorded last-decision narrative cites $84.39 while the current quoted/position mark is $85.93, and ON references differing setup identifiers/levels across records. These do not alter the proposed no-action decision on MSTR but reduce confidence in broader portfolio-state narratives.",
              "No direct pairwise ON-MSTR correlation is supplied; selected-set maximum correlations do not quantify actual held-pair correlation."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The observed $164.43 is above both the $163.17 entry/breakout level and the $156.85 rule-based invalidation, so no verified exit condition supports SELL or REDUCE. The sensor's target alert is not actionable because $163.17 duplicates the entry threshold rather than a supplied profit target. BUY is unsupported because the required completed 5-minute price confirmation lacks mandatory participation confirmation: reported volume is zero versus the 206,566.8 baseline. The high-volatility MSTR exposure and the tight-liquidity range backdrop further support no add.",
          "timeHorizon": "Reassess on a fresh completed 5-minute observation, a completed close below $156.85, setup expiry on 2026-10-08T12:10:16Z, or the next strategy review; original horizon is 1-3 trading days.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The latest MSTR bar is timestamped 2026-10-05T20:00:00Z and is not demonstrably current at decision time.",
            "Reported zero 5-minute volume prevents validation of the mandatory participation filter and could be a data-quality artifact.",
            "The purported target is identical to the entry trigger; no valid profit-taking level is supplied.",
            "Direct ON-MSTR holding correlation is unavailable.",
            "Macro/regime evidence is dated 2026-10-01, partly delayed or timezone-ambiguous, and the regime engine is SHADOW-only.",
            "No live catalyst, earnings, corporate-action, or news evidence is supplied; event risk is unknown."
          ],
          "reportTreatment": {
            "quantMacro": "Accepted. It supports HOLD: price remains above invalidation, but participation is unconfirmed, the alert is mislabeled, and neither adding nor discretionary trimming has evidentiary support.",
            "risk": "Accepted. Risk approves HOLD only, not an increase, noting roughly 35% aggregate equity exposure, MSTR's high volatility, common risk-on sensitivity with ON, and the tight-liquidity range regime.",
            "disagreements": "Price-only interpretation of $164.43 above $163.17 could suggest an add or target-based action. This is rejected because $163.17 is the entry level rather than a valid target, required participation failed, and the quote/bar is stale. There is no disagreement supporting an exit because the $156.85 completed-close invalidation has not been breached."
          }
        },
        "tradePermitted": false,
        "decisionKey": "0d66ce755dbd1dc8",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "d37fdcf7f74cdfed6e5e04330bafd99b049ad956",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T07:56:02.778Z",
        "evidenceHash": "3faa1af0992ec218be74100afa94f439f8fe8da623cb4757597127d0960fa14f",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The observed price of $164.43 remains above the $163.17 breakout/entry level and above the $156.85 rule-based invalidation. The target-level trigger is not a valid take-profit signal because its $163.17 level duplicates the entry threshold. No verified breakdown supports SELL or REDUCE, while BUY/additional exposure is unsupported because the required 5-minute participation confirmation failed: reported bar volume was zero against a 206,566.8 baseline. High realized volatility and the tight-liquidity range regime argue against increasing risk.",
            "timeHorizon": "Until the 1-3 trading-day setup horizon expires on 2026-10-08, or earlier on a verified 5-minute close below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The observed quote and candle are dated 2026-10-05 20:00 UTC while retrieved on 2026-10-06, so freshness is limited. The relevant 5-minute bar reports zero volume, preventing participation validation. Regime inputs were observed on 2026-10-01 and include delayed/timezone-ambiguous components. No live catalyst, earnings, or news evidence was supplied; this does not establish absence of event risk.",
            "quantView": "MSTR retains favorable 20-day momentum (+29.9%), above-baseline daily volume (1.55x), and price above its breakout threshold. However, 5-day momentum is modest (+0.9%), annualized 10-day realized volatility is high (57.0%), ATR is elevated (6.18%), and selected correlation is relatively high (0.66). The position is only marginally above entry, and the newest required intraday confirmation is incomplete without volume participation.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity and a 0.68 position-size multiplier. Firmer USD, higher rates, and weak regional-bank relative performance indicate fragile participation rather than a broad risk-on confirmation. This backdrop favors retaining existing risk only while the explicit invalidation remains intact, not adding exposure.",
            "disagreements": "The price-only target alert suggests a positive condition because MSTR is above $163.17, but the recorded strategy defines $163.17 as the entry/breakout level rather than a profit target. Price confirmation is positive, whereas mandatory participation confirmation is negative/unavailable. These conflicts support HOLD rather than BUY, SELL, or REDUCE."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "HOLD is risk-consistent for the existing MSTR paper position: it adds no exposure, preserves substantial cash (about 64.9% of portfolio value), and the current position is approximately 15.0% of portfolio value, below the 35% maximum-position limit. The supplied observed price ($164.43) is above the stated $156.85 invalidation, while the $163.17 alert is an entry/breakout threshold—not a profit target—and therefore does not support a reduction. Rejecting an add is appropriate because required participation confirmation failed and MSTR has high realized volatility (57%) and elevated ATR (6.18%) in a tight-liquidity/range regime. The position should not be extended beyond its stated expiry/horizon without a fresh review.",
            "checks": {
              "actionExposureChange": "None; HOLD has zero incremental sizing and does not consume cash.",
              "cashAndConcentration": {
                "cashEur": 648.57,
                "mstrValueEur": 150.36,
                "mstrPortfolioPct": 15.03,
                "onPortfolioPct": 20.16,
                "combinedEquityExposurePct": 35.19,
                "maxPositionPct": 35,
                "maxBuyEur": 250,
                "result": "MSTR individually complies with the position limit; no proposed purchase tests the buy cap. Aggregate long-equity exposure is moderate but should not be increased under the supplied regime."
              },
              "correlationAndFactorRisk": "The selector correlation of 0.658 is not a complete held-portfolio correlation measure. MSTR's crypto-linked/high-beta risk may still correlate with broad risk-off, liquidity stress, and the existing semiconductor exposure during market shocks. HOLD avoids increasing this unmeasured joint exposure.",
              "invalidationAndExpiry": {
                "invalidation": "Verified completed 5-minute close below $156.85 under the recorded rule, or a documented failure/reversal of the setup.",
                "expiry": "2026-10-08T12:10:16.000Z",
                "horizon": "1-3 trading days",
                "result": "The position remains within the recorded horizon, but requires reassessment at expiry; stale price data cannot independently verify that no invalidation occurred after the last bar."
              },
              "triggerIntegrity": "The POSITION_TARGET_LEVEL alert is misclassified for decision purposes because $163.17 duplicates MSTR's entry threshold. It is not evidence of a take-profit condition.",
              "regimeAndCatalyst": "NEUTRAL/RANGE, TIGHT-liquidity conditions and a 0.68 size multiplier support no-add discipline. No catalyst or earnings evidence was supplied, so event-gap risk remains unresolved."
            },
            "evidenceLimitations": [
              "The operative MSTR quote and 5-minute candle are from 2026-10-05T20:00:00Z but were retrieved on 2026-10-06; they are not a fresh regular-session confirmation.",
              "The relevant intraday candle has zero reported volume versus a 206,566.8 baseline, so mandatory participation confirmation fails and data completeness for the breakout is inadequate.",
              "Regime evidence is dated 2026-10-01 and includes delayed VIX plus timezone-ambiguous macro-source clocks.",
              "No news, earnings calendar, or live catalyst feed was supplied; absence of such evidence does not mean event risk is absent.",
              "A selection-universe correlation statistic does not establish actual correlation between MSTR and all held positions or tail-risk co-movement."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position. The supplied $164.43 observation is above both the $163.17 breakout/entry threshold and the $156.85 invalidation. The alert at $163.17 is not a take-profit signal because it duplicates the setup entry level. No verified breakdown supports SELL or REDUCE. BUY is unsupported because the required completed 5-minute participation confirmation failed: the bar reported zero volume against a 206,566.8 baseline. High realized volatility (57%), elevated ATR, relatively high selected correlation, and a neutral/range, tight-liquidity regime favor no additional exposure.",
            "timeHorizon": "Hold only through the stated 1-3 trading-day setup horizon, requiring reassessment by 2026-10-08T12:10:16Z, or earlier upon a verified completed 5-minute close below $156.85.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The operative MSTR quote/candle is timestamped 2026-10-05T20:00:00Z and was retrieved the following day, so it is not a fresh regular-session validation. Zero reported intraday volume prevents mandatory participation confirmation. Regime evidence is dated 2026-10-01 and includes delayed/timezone-ambiguous elements. No live catalyst, earnings, or news feed was supplied; this does not establish that event risk is absent. The supplied correlation metric is selection-universe based and does not fully measure joint or tail risk with ON.",
            "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVEs HOLD; both agree that the entry-level target alert is misclassified as a profit target and that failed participation blocks an add. There is no disagreement requiring escalation: price remains above the threshold, but price-only confirmation conflicts with the mandatory participation requirement, so HOLD rather than BUY is selected. No risk veto is present."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD proposal is consistent with the supplied MSTR position, explicit setup rules, and risk constraints. It makes no incremental purchase or sale, correctly treats $163.17 as the recorded entry/breakout threshold rather than a profit target, and does not claim that the stale observation proves an ongoing live condition. The last supplied MSTR price ($164.43) is above the $156.85 invalidation; no supplied verified completed 5-minute close below invalidation supports an exit. Mandatory participation failed because the relevant bar volume is zero versus the stated baseline, so the proposal appropriately rejects an add. No hard-risk veto is supplied.",
            "checks": {
              "timestampFreshness": "PASS_WITH_LIMITATION. MSTR's operative bar is timestamped 2026-10-05T20:00:00Z and retrieved 2026-10-06T07:56Z. The proposal explicitly identifies this as non-fresh regular-session validation and does not rely on it to authorize a trade.",
              "positionArithmetic": "PASS. MSTR market value is approximately EUR 150.36: 1.02771459 shares × USD 164.4299927 / 1.1238480806 USD-per-EUR. ON market value is approximately EUR 201.67. EUR 150.36 + EUR 201.67 + EUR 648.57 cash = EUR 1,000.60, matching reported portfolio value subject to rounding.",
              "sizingAndLimits": "PASS. HOLD has EUR 0 incremental sizing and therefore does not consume the EUR 250 buy cap. MSTR is about 15.0% of portfolio value, below the 35% single-position ceiling. Combined reported equity exposure is about 35.2%, but the supplied limit is explicitly per-position, not an aggregate-equity cap.",
              "riskVeto": "PASS. The supplied hard-risk verdict is APPROVE with no errors. The high-volatility, tight-liquidity backdrop supports no-add discipline rather than contradicting HOLD.",
              "thesisAndInvalidation": "PASS. The proposal preserves the recorded MSTR invalidation of a completed 5-minute close below USD 156.85 and requests review at setup expiry. It does not misstate the USD 163.17 entry trigger as a take-profit level.",
              "participation": "PASS. The proposal correctly identifies that price-only confirmation is insufficient because participation is mandatory and the supplied bar reports zero volume against a 206,566.8 baseline.",
              "scope": "PASS_WITH_LIMITATION. The proposal addresses the specific MSTR position-target event. ON is also priced above its separately recorded invalidation, but no ON exit or add is proposed and no fresh ON participation evidence is available."
            },
            "evidenceLimitations": [
              "Yahoo-chart price and candle evidence is stale relative to the decision retrieval time; it cannot establish whether MSTR subsequently breached invalidation or otherwise changed state.",
              "The zero-volume 5-minute candle prevents verification of the mandatory participation condition and may be a data-quality artifact rather than actual market participation.",
              "Regime data is dated 2026-10-01 and includes delayed VIX information and timezone-ambiguous source clocks.",
              "No news, earnings-calendar, or catalyst evidence was supplied. The proposal appropriately does not infer that event risk is absent.",
              "The selected-universe correlation metric is not a complete measure of MSTR's correlation or tail co-movement with the held ON position.",
              "The trigger labels USD 163.17 as a POSITION_TARGET_LEVEL even though the supplied setup defines that same level as an entry threshold; the proposal correctly declines to treat this label as trade-authorizing evidence."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing MSTR paper position. The supplied $164.43 observation is above both the $163.17 breakout/entry threshold and the $156.85 invalidation. The alert at $163.17 is not a take-profit signal because it duplicates the setup entry level. No verified breakdown supports SELL or REDUCE. BUY is unsupported because the required completed 5-minute participation confirmation failed: the bar reported zero volume against a 206,566.8 baseline. High realized volatility (57%), elevated ATR, relatively high selected correlation, and a neutral/range, tight-liquidity regime favor no additional exposure.",
          "timeHorizon": "Hold only through the stated 1-3 trading-day setup horizon, requiring reassessment by 2026-10-08T12:10:16Z, or earlier upon a verified completed 5-minute close below $156.85.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The operative MSTR quote/candle is timestamped 2026-10-05T20:00:00Z and was retrieved the following day, so it is not a fresh regular-session validation. Zero reported intraday volume prevents mandatory participation confirmation. Regime evidence is dated 2026-10-01 and includes delayed/timezone-ambiguous elements. No live catalyst, earnings, or news feed was supplied; this does not establish that event risk is absent. The supplied correlation metric is selection-universe based and does not fully measure joint or tail risk with ON.",
          "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVEs HOLD; both agree that the entry-level target alert is misclassified as a profit target and that failed participation blocks an add. There is no disagreement requiring escalation: price remains above the threshold, but price-only confirmation conflicts with the mandatory participation requirement, so HOLD rather than BUY is selected. No risk veto is present."
        },
        "tradePermitted": false,
        "decisionKey": "1c7721a6467dce85",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "890e3b5fc9962c1d576a633daf156624bed0c893",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T08:10:33.369Z",
        "evidenceHash": "2b3fc564157b0aaf1f5496b35276f7cc7a9d88f77cb70d9b5e0962b264a8aa26",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing MSTR paper position without adding or trimming. The observed $164.43 is above the $163.17 breakout/entry threshold and well above the recorded $156.85 invalidation, so the supplied evidence does not show a breakdown requiring SELL or REDUCE. The target-level alert is not a profit-taking signal because its level duplicates the original entry trigger. BUY is not supported: although the completed 5-minute close is above $163.17, the required participation confirmation failed because the reported bar volume is zero versus a 206,566.8 baseline. High 10-day realized volatility (57.03%), 6.18% ATR, and 0.66 selected correlation argue against increasing exposure in a neutral, range-bound, tight-liquidity regime.",
            "timeHorizon": "1-3 trading days, subject to reassessment on fresh regular-session data or a verified 5-minute close below $156.85",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The decisive 5-minute observation is timestamped 2026-10-05 20:00 UTC and has zero reported volume, so participation cannot be confirmed. Macro regime inputs were observed on 2026-10-01 and are stale relative to this decision. The regime engine is SHADOW-only, VIX was delayed, several macro timestamps had ambiguous time zones, and no live catalyst/news/earnings feed was supplied. Missing catalyst evidence must not be interpreted as absence of event risk.",
            "quantView": "MSTR remains rank 5 with strong 20-day momentum (+29.89%), positive 5-day momentum (+0.88%), and 1.55x volume in the daily selection snapshot. Price remains above the entry threshold, preserving the existing breakout structure, but the current intraday confirmation explicitly fails the required participation test. Its 57.03% annualized realized volatility, 6.18% ATR, and 0.658 correlation support holding existing reduced exposure only, not adding.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. A 5.327% US 10-year yield, firmer USD proxy, and weak regional-bank/liquidity proxy readings indicate fragile participation despite subdued VIX-level conditions. This backdrop does not independently invalidate MSTR, but it raises the confirmation threshold for momentum additions.",
            "disagreements": "The price-only trigger and close condition are positive because $164.43 exceeds $163.17. The required participation condition is negative because zero bar volume prevents validation. The resulting disagreement is resolved as HOLD: no exit signal is verified, while no add-on confirmation exists."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "The proposed HOLD is risk-consistent: it does not increase exposure, does not rely on the duplicate entry-level target alert as a profit-taking signal, and preserves the existing reduced MSTR position while price remains above the recorded $156.85 invalidation. Existing MSTR exposure is approximately €150.38 (about 15.0% of €1,000.64 portfolio value), within the 35% maximum-position limit; combined ON and MSTR equity exposure is about €352.07 (35.2%), leaving €648.57 cash. The stated 1–3 trading-day horizon remains valid only through the setup expiry on 2026-10-08T12:10:16Z. No add is justified given high volatility, 6.18% ATR, the 0.658 selection correlation, and a neutral/range, tight-liquidity backdrop.",
            "checks": {
              "action": "HOLD only; no new order or sizing change",
              "positionSizing": {
                "mstrValueEur": 150.38,
                "portfolioValueEur": 1000.64,
                "mstrPortfolioPct": 15.03,
                "maxPositionPct": 35,
                "withinLimit": true
              },
              "cash": {
                "cashEur": 648.57,
                "cashSufficient": true,
                "notApplicableToHold": true
              },
              "exposure": {
                "onValueEur": 201.69,
                "mstrValueEur": 150.38,
                "combinedEquityExposureEur": 352.07,
                "combinedEquityExposurePct": 35.18,
                "note": "Combined exposure is not itself a supplied portfolio cap, but concentration in two momentum equities should be monitored."
              },
              "correlation": {
                "selectedCorrelation": 0.658,
                "assessment": "Elevated selection correlation supports no addition, but it is not a measured correlation to the held ON position and must not be treated as such."
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "Verified completed 5-minute close below $156.85",
                "status": "Not triggered by supplied observation; observed $164.43 remains above level."
              },
              "entryConfirmation": {
                "priceCondition": true,
                "participationCondition": false,
                "assessment": "A zero-volume bar versus the supplied 206566.8 baseline fails the required participation condition; adding is vetoed by the setup rule, though holding the pre-existing position is acceptable."
              },
              "expiry": {
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "assessment": "Reassess or close the thesis at expiry absent fresh valid renewal evidence."
              },
              "riskControls": {
                "highVolatility": true,
                "realizedVol10dAnnualizedPct": 57.03,
                "atrPct": 6.179,
                "regime": "NEUTRAL/RANGE/NORMAL volatility/TIGHT liquidity",
                "appropriateResponse": "No increase; monitor invalidation using fresh regular-session data."
              }
            },
            "evidenceLimitations": [
              "The relevant quote and intraday bar are from 2026-10-05T20:00:00Z, retrieved on 2026-10-06T08:10Z; they are not fresh regular-session confirmation for a new action.",
              "Zero reported intraday volume prevents participation validation and may reflect data/session artifact rather than actual traded volume.",
              "Macro-regime observations are dated 2026-10-01 and therefore stale for this short-horizon decision; the regime engine is SHADOW-only.",
              "No live catalyst, earnings, or news data were fetched. This creates unquantified event and gap risk and cannot be interpreted as no catalyst risk.",
              "The reported 0.658 is a selection-universe correlation measure, not verified realized correlation of MSTR against the actually held ON position.",
              "Price-only evidence does not establish liquidity quality, executable spread, or overnight-gap protection."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 remains above the $163.17 entry/breakout level and the $156.85 verified 5-minute-close invalidation, so no supplied breakdown supports REDUCE or full-exit SELL. The target alert at $163.17 duplicates the entry trigger and is not a take-profit instruction. Do not BUY: the required completed 5-minute participation confirmation failed because the bar reported zero volume versus a 206,566.8 baseline. High realized volatility (57.03%), 6.18% ATR, elevated selected correlation (0.658), and the neutral/range, tight-liquidity backdrop further favor no exposure increase.",
            "timeHorizon": "1-3 trading days; reassess on fresh regular-session evidence, a verified completed 5-minute close below $156.85, or setup expiry on 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The relevant quote/bar is timestamped 2026-10-05T20:00:00Z and is not fresh regular-session confirmation. Zero reported volume prevents participation validation and may be a data/session artifact. Macro inputs are dated 2026-10-01, VIX was delayed, some timestamps had ambiguous time zones, and the regime engine is SHADOW-only. No live catalyst, earnings, or news evidence was supplied; this is unknown event risk, not evidence of no event risk. The reported correlation is from the selected universe, not verified correlation with held ON.",
            "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVE; both are adopted. Their apparent price-versus-confirmation disagreement is resolved as HOLD: price is above the entry threshold, preserving the existing thesis, but zero-volume participation fails the explicit add-on rule. Risk imposes no veto on holding, but supports no increase and requires reassessment/closure at setup expiry absent fresh valid renewal evidence."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The HOLD proposal is internally consistent and does not increase risk. MSTR's supplied $164.43 close is above the $163.17 entry/breakout level and the $156.85 five-minute-close invalidation, while the zero-volume bar fails the explicit participation requirement for any add. Treating the duplicate $163.17 target alert as non-actionable rather than as a take-profit instruction is supported by the original setup, whose target language is itself the entry breakout condition. Stale and incomplete evidence weakens any new action but does not contradict a HOLD of an already-open paper position.",
            "checks": {
              "actionAndSizing": {
                "result": "PASS",
                "detail": "HOLD has €0 amount and changes neither the existing MSTR position nor cash. MSTR value €150.38 is approximately 15.03% of €1,000.64 portfolio value, below the 35% per-position cap."
              },
              "portfolioArithmetic": {
                "result": "PASS",
                "detail": "€201.69 ON plus €150.38 MSTR plus €648.57 cash equals €1,000.64. Unrealized P/L of €1.69 plus €0.38 equals €2.07; €2.07 unrealized plus -€1.43 realized equals €0.64 total P/L."
              },
              "quoteAndFxArithmetic": {
                "result": "PASS",
                "detail": "MSTR quantity 1.02771459 times $164.42999 is about $168.99; divided by USD/EUR 1.1237217 is about €150.38. ON quantity 2.6375123 times $85.93000 is about $226.65; converted at the same FX rate is about €201.69."
              },
              "triggerAndThesis": {
                "result": "PASS",
                "detail": "The MSTR price condition is true ($164.43 > $163.17), but the required participation condition is false because reported completed-bar volume is zero against a 206,566.8 baseline. This supports no addition. No supplied completed five-minute close is below $156.85, so no rule-based exit or reduction is established."
              },
              "riskVeto": {
                "result": "PASS",
                "detail": "High 57.03% realized volatility, 6.179% ATR, tight-liquidity/range regime, and unverified current participation appropriately constrain the decision to no increase. No supplied hard-risk rule vetoes merely holding the pre-existing reduced position."
              },
              "timestampFreshness": {
                "result": "PASS_WITH_LIMITATION",
                "detail": "The decisive MSTR bar is from 2026-10-05T20:00:00Z and was retrieved 2026-10-06T08:10Z. It is stale for a new intraday trade, but it is the supplied latest regular-session close and the decision occurs before a fresh regular session. HOLD does not improperly represent it as fresh confirmation."
              },
              "expiry": {
                "result": "PASS_WITH_LIMITATION",
                "detail": "The cited setup expiry, 2026-10-08T12:10:16Z, is consistent with the scout setup and remains in the future at the trigger time. The proposal appropriately requires reassessment at expiry; continued holding beyond expiry would require fresh renewal evidence or an explicit later review."
              },
              "participation": {
                "result": "PASS",
                "detail": "Missing/zero intraday participation is explicitly disclosed and is not used to justify a BUY. Existing opening-thesis claims of prior participation are historical supplied assertions and are not relied upon as current confirmation."
              }
            },
            "evidenceLimitations": [
              "Yahoo chart evidence is limited to a 2026-10-05T20:00:00Z five-minute bar with zero reported volume; it cannot validate current-session participation, liquidity, or executable pricing.",
              "The decision-trigger price is a price-only target crossing; it is not independent evidence of sustained breakout quality or a profit-taking rule.",
              "Macro-regime inputs are dated 2026-10-01, VIX was delayed, and several macro source times lack explicit time zones. The regime engine is SHADOW-only.",
              "No current news, earnings, catalyst, spread, or overnight-gap evidence was provided. Absence of such evidence must not be read as absence of risk.",
              "The 0.658 correlation is selection-universe metadata, not a measured realized correlation between held MSTR and ON."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 remains above the $163.17 entry/breakout level and the $156.85 verified 5-minute-close invalidation, so no supplied breakdown supports REDUCE or full-exit SELL. The target alert at $163.17 duplicates the entry trigger and is not a take-profit instruction. Do not BUY: the required completed 5-minute participation confirmation failed because the bar reported zero volume versus a 206,566.8 baseline. High realized volatility (57.03%), 6.18% ATR, elevated selected correlation (0.658), and the neutral/range, tight-liquidity backdrop further favor no exposure increase.",
          "timeHorizon": "1-3 trading days; reassess on fresh regular-session evidence, a verified completed 5-minute close below $156.85, or setup expiry on 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The relevant quote/bar is timestamped 2026-10-05T20:00:00Z and is not fresh regular-session confirmation. Zero reported volume prevents participation validation and may be a data/session artifact. Macro inputs are dated 2026-10-01, VIX was delayed, some timestamps had ambiguous time zones, and the regime engine is SHADOW-only. No live catalyst, earnings, or news evidence was supplied; this is unknown event risk, not evidence of no event risk. The reported correlation is from the selected universe, not verified correlation with held ON.",
          "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVE; both are adopted. Their apparent price-versus-confirmation disagreement is resolved as HOLD: price is above the entry threshold, preserving the existing thesis, but zero-volume participation fails the explicit add-on rule. Risk imposes no veto on holding, but supports no increase and requires reassessment/closure at setup expiry absent fresh valid renewal evidence."
        },
        "tradePermitted": false,
        "decisionKey": "b79ba49a9c1e2890",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "565ff4de708eb02fdfecf540c5b41f99a6b73e5b",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T08:30:29.098Z",
        "evidenceHash": "dc96b352aab0ed83b78270f9c963d8f9b4002168b35fc6a921cfdee7d0537d00",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The last observed price ($164.43) remains above the $163.17 breakout/entry level and above the verified $156.85 invalidation level. The target-level alert is not a take-profit instruction because it duplicates the entry trigger. Do not add: the required completed 5-minute participation confirmation failed, with reported bar volume of zero against a 206,566.8 baseline, so the apparent price confirmation is not trade-validating evidence.",
            "timeHorizon": "1-3 trading days, subject to reassessment before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The latest 5-minute quote is from 2026-10-05 20:00Z and reports zero volume, preventing participation validation. Regime inputs are dated 2026-10-01 and include delayed/timezone-ambiguous components. No live catalyst, earnings, or news evidence was fetched, so event risk is unknown rather than absent. The regime engine is SHADOW-only.",
            "quantView": "MSTR retains strong 20-day momentum (+29.9%) and above-baseline daily volume (1.55x), but recent 5-day momentum is modest (+0.9%). Its 57.0% annualized 10-day realized volatility, 6.18% ATR, and 0.658 selected correlation imply unfavorable incremental risk for adding without confirmed participation. Price has not breached the $156.85 invalidation, supporting HOLD rather than REDUCE or SELL.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity and a 0.68 position-size multiplier. Higher 10-year yields, firmer USD, weak regional-bank relative performance, and fragile participation argue against increasing risk exposure. These inputs are stale relative to the quote and therefore only constrain sizing rather than establish a fresh directional signal.",
            "disagreements": "Price-only evidence is constructive because MSTR is above its breakout level, while volume-confirmation and macro/liquidity evidence do not support an increase. No evidence supports a reduction because the stated invalidation has not been breached."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "HOLD is risk-consistent for the existing reduced MSTR paper position: no exposure or cash usage is proposed, the last supplied price ($164.43) is above both the $163.17 breakout level and $156.85 5-minute-close invalidation, and the setup remains unexpired until 2026-10-08T12:10:16Z. Existing MSTR exposure is approximately 15.0% of portfolio value and combined ON/MSTR equity exposure is approximately 35.2%, near the stated 35% single-position limit only in aggregate rather than for MSTR individually. Given MSTR's high 57.0% realized volatility, 6.18% ATR, tight-liquidity/range regime, and likely meaningful co-movement with the existing momentum position, not adding is appropriate. This approval supports no action only and is not an instruction to trade.",
            "checks": {
              "proposedExposureChange": "0 EUR; no buy, sell, or leverage proposed.",
              "cash": "648.57 EUR cash is sufficient, but no deployment is warranted.",
              "positionSizing": {
                "MSTRValueEur": 150.43,
                "portfolioValueEur": 1000.76,
                "MSTRPortfolioPct": 15.03,
                "ONAndMSTRPortfolioPct": 35.2,
                "maxPositionPct": 35,
                "assessment": "MSTR is below the single-position cap; aggregate equity exposure is material for a neutral/range, tight-liquidity regime."
              },
              "correlation": {
                "assessment": "The 0.658 selected-correlation metric is not a complete held-portfolio correlation estimate, but it indicates limited diversification benefit between selected momentum holdings. No increase should be made without refreshed correlation and market data."
              },
              "invalidation": {
                "level": 156.85,
                "rule": "One completed 5-minute close below $156.85.",
                "assessment": "Not breached by the supplied $164.43 observation, but cannot be considered freshly verified."
              },
              "expiry": {
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "assessment": "Setup is still within its stated validity window at the supplied trigger time; reassessment is required before expiry."
              },
              "catalystRisk": {
                "assessment": "Unknown. No live earnings, corporate-news, or broader catalyst data were supplied; absence of evidence is not evidence of no event risk."
              }
            },
            "evidenceLimitations": [
              "The decisive MSTR quote and bar are timestamped 2026-10-05T20:00:00Z, while the decision trigger was generated on 2026-10-06T08:30Z; this is not fresh executable-session evidence.",
              "The completed 5-minute bar reports zero volume versus a 206,566.8 baseline, so required participation confirmation failed. Price above the entry level alone does not validate a new breakout or add.",
              "Macro/regime evidence is dated 2026-10-01, contains delayed and timezone-ambiguous inputs, and is SHADOW-only.",
              "Selected-correlation data are not a full, current correlation analysis of actual positions and factor exposures.",
              "No catalyst, earnings, or news feed was fetched; event risk cannot be assessed.",
              "Portfolio valuation and EUR/USD conversion may not be synchronized with the quoted instrument timestamps."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The last observed price of $164.43 remains above the $163.17 breakout/entry level and the $156.85 invalidation. The target-level alert merely repeats the breakout level and is not a take-profit or sell instruction. Do not BUY: the required completed 5-minute participation check failed because reported volume was zero against a 206,566.8 baseline. No supplied completed 5-minute close below $156.85 supports REDUCE or full-exit SELL.",
            "timeHorizon": "1-3 trading days, with reassessment before setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The MSTR observation is from 2026-10-05T20:00:00Z, stale versus the 2026-10-06T08:30Z trigger, and its zero reported volume prevents participation validation. Regime evidence is dated 2026-10-01, partly delayed/timezone-ambiguous, and SHADOW-only. No live catalyst, earnings, or news evidence was provided, so event risk is unknown. Correlation data are selected-universe metrics rather than a fresh full-portfolio analysis, and FX/portfolio marks may not be timestamp-synchronized.",
            "reportTreatment": "Quant/Macro recommends HOLD: price remains above entry and invalidation, but high 57.0% realized volatility, 6.18% ATR, 0.658 selected correlation, failed participation confirmation, and neutral/range tight-liquidity conditions rule out an addition. Risk APPROVE supports this no-exposure-change action: MSTR is about 15.0% of portfolio value and no risk veto applies. The reports agree on HOLD; apparent price strength conflicts with missing volume confirmation and stale macro evidence, which prevents BUY, while no invalidation breach prevents REDUCE or SELL."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The proposed HOLD for MSTR is internally consistent and does not change exposure. The supplied MSTR mark of $164.43 is above both the $163.17 entry/breakout level and the $156.85 one-completed-5-minute-close invalidation. The proposal correctly rejects the target-level alert as a sell signal because it duplicates the breakout level, and correctly does not add because required participation was not validated. Stale evidence prevents a fresh trading conclusion but does not contradict a no-action HOLD.",
            "checks": {
              "scope": "The decision is appropriately limited to the triggered MSTR position; it proposes EUR 0 and no buy, reduction, sale, leverage, or cash deployment.",
              "timestampFreshness": {
                "result": "STALE_BUT_ACCEPTABLE_FOR_HOLD",
                "details": "The decisive MSTR quote/bar is timestamped 2026-10-05T20:00:00Z and was retrieved on 2026-10-06T08:30Z. This is stale relative to the trigger and unsuitable for an exposure increase, but it is sufficient to avoid falsely claiming an invalidation breach and supports HOLD only."
              },
              "participation": {
                "result": "FAILED_FOR_ADD",
                "details": "The completed 5-minute MSTR bar closed above $163.17 at $164.43, but reported zero volume against a 206,566.8 baseline. Thus the required participation condition is not met; the proposal explicitly uses this as a veto on BUY/addition."
              },
              "invalidation": {
                "result": "NOT_SHOWN_BREACHED",
                "details": "No supplied completed 5-minute close below $156.85 exists. The last supplied close is $164.43. The proposal does not overstate this as a fresh verification."
              },
              "setupValidity": {
                "result": "VALID_AT_TRIGGER_TIME",
                "details": "The MSTR setup expires at 2026-10-08T12:10:16Z, after the 2026-10-06T08:30:28Z trigger."
              },
              "arithmetic": {
                "result": "CONSISTENT",
                "details": "MSTR value is approximately EUR 150.43: 1.02771459 × USD 164.42999 ÷ 1.12334299. This is about 15.03% of EUR 1,000.76 portfolio value. ON value is approximately EUR 201.76, and combined marked equity exposure is approximately EUR 352.19, or 35.19% of portfolio value. Cash plus marked positions approximately equals the stated EUR 1,000.76 portfolio value, subject to rounding."
              },
              "limits": {
                "result": "NO_VIOLATION_BY_HOLD",
                "details": "MSTR is below the stated 35% maximum-position limit. Combined ON/MSTR exposure slightly exceeds 35%, but the supplied limit is expressly maxPositionPct rather than a portfolio aggregate-equity cap, and HOLD creates no incremental breach."
              },
              "riskVeto": {
                "result": "NO_VETO_FOR_NO_ACTION",
                "details": "High volatility, 6.18% ATR, tight liquidity, stale macro inputs, incomplete correlation evidence, and unknown catalysts all argue against adding. They do not require a reduction under the supplied invalidation-based framework."
              },
              "thesisConsistency": {
                "result": "CONSISTENT",
                "details": "The proposal distinguishes price-only strength from missing participation and does not claim that the zero-volume bar confirms a breakout. It also does not mistake the entry-level target field for a take-profit instruction."
              }
            },
            "evidenceLimitations": [
              "The quote and intraday bar are overnight stale relative to the decision trigger; no fresh regular-session evidence is supplied.",
              "The zero-volume Yahoo 5-minute bar makes participation untestable/failed and weakens confidence in the price observation.",
              "Regime evidence is from 2026-10-01, includes delayed and timezone-ambiguous inputs, and is explicitly SHADOW-only.",
              "No current news, earnings, catalyst, or full held-portfolio correlation analysis was supplied.",
              "ON has a separate unconfirmed new breakout observation, but the final proposal is scoped to MSTR and does not make unsupported claims about ON."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The last observed price of $164.43 remains above the $163.17 breakout/entry level and the $156.85 invalidation. The target-level alert merely repeats the breakout level and is not a take-profit or sell instruction. Do not BUY: the required completed 5-minute participation check failed because reported volume was zero against a 206,566.8 baseline. No supplied completed 5-minute close below $156.85 supports REDUCE or full-exit SELL.",
          "timeHorizon": "1-3 trading days, with reassessment before setup expiry on 2026-10-08T12:10:16Z",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The MSTR observation is from 2026-10-05T20:00:00Z, stale versus the 2026-10-06T08:30Z trigger, and its zero reported volume prevents participation validation. Regime evidence is dated 2026-10-01, partly delayed/timezone-ambiguous, and SHADOW-only. No live catalyst, earnings, or news evidence was provided, so event risk is unknown. Correlation data are selected-universe metrics rather than a fresh full-portfolio analysis, and FX/portfolio marks may not be timestamp-synchronized.",
          "reportTreatment": "Quant/Macro recommends HOLD: price remains above entry and invalidation, but high 57.0% realized volatility, 6.18% ATR, 0.658 selected correlation, failed participation confirmation, and neutral/range tight-liquidity conditions rule out an addition. Risk APPROVE supports this no-exposure-change action: MSTR is about 15.0% of portfolio value and no risk veto applies. The reports agree on HOLD; apparent price strength conflicts with missing volume confirmation and stale macro evidence, which prevents BUY, while no invalidation breach prevents REDUCE or SELL."
        },
        "tradePermitted": false,
        "decisionKey": "3479d9de307c0c16",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "d86555b0c77a30a8a0fef9d8235cbbbc58869d2c",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T08:55:34.378Z",
        "evidenceHash": "150b6f1fea39c37a52b8ff93c7913e4352e577c478cfe428a28bfaac4b535970",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The last observed price ($164.43) is above the $163.17 entry/breakout level and materially above the $156.85 invalidation level. The triggered \"target\" is only the recorded breakout threshold, not a profit-taking rule. Do not add: the required completed 5-minute participation confirmation failed because the reported bar volume was zero versus a 206,566.8 baseline. No completed 5-minute close below invalidation supports REDUCE or SELL.",
            "timeHorizon": "Until the 1-3 trading-day setup expires on 2026-10-08T12:10:16Z, subject to a fresh confirmed invalidation or reversal review.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The MSTR quote is a prior-session 5-minute bar timestamped 2026-10-05T20:00:00Z and was retrieved roughly 13 hours later, so it is not fresh actionable market confirmation. Volume on the observed bar is zero, invalidating the participation test. The macro-regime observations are dated 2026-10-01 and may be stale. No live catalyst, earnings, or news feed was supplied; absence of evidence cannot be interpreted as absence of event risk. Correlation is a selected-universe metric rather than a full portfolio or market-beta estimate.",
            "quantView": "MSTR remains rank 5 with positive 20-day momentum (+29.9%), above-baseline daily volume (1.55x), and price above its $163.17 breakout level. However, short-term momentum is modest (+0.9% over 5 days), annualized 10-day realized volatility is high (57.0%), ATR is 6.18%, and selected correlation is elevated (0.66). The required intraday breakout participation condition is unconfirmed; therefore the quantitative evidence supports holding the existing small position but not increasing exposure. A fresh completed 5-minute close below $156.85 would support reduction or exit under the recorded rule.",
            "macroView": "The supplied regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity, a 0.68 position-size multiplier, and fragile internal participation. Higher yields, firmer USD, weak regional-bank relative performance, and weak credit/liquidity proxies are unfavorable to aggressive momentum additions. These conditions do not independently mandate an exit while the position remains above its defined invalidation, but they reinforce conservative sizing and strict confirmation requirements.",
            "disagreements": "There is no direct conflict between the position state and the quant setup: price is above the breakout level, while participation confirmation is absent. The trigger labels the breakout level as a target event, but the documented strategy defines it as an entry threshold rather than a take-profit signal; it should not cause a SELL. The main uncertainty is stale/incomplete intraday evidence, which favors HOLD rather than BUY, REDUCE, or SELL."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only: it neither increases exposure nor relaxes the recorded risk controls. The existing MSTR position is approximately €150.3 (about 15.0% of €1,000.44 portfolio value), below the 35% position limit, with cash of €648.57. The last supplied price ($164.43) remains above the $163.17 breakout level and the $156.85 invalidation, so the supplied evidence does not establish a rule-based reduction or exit. The target-level alert is a semantic mismatch because $163.17 is an entry threshold, not a take-profit target. No add is warranted: the required 5-minute participation condition failed, MSTR has high realized volatility (57.0%) and ATR (6.18%), and the regime specifies tight liquidity and reduced sizing. APPROVE is not an instruction to trade.",
            "checks": {
              "action": "HOLD",
              "newCapitalAtRiskEur": 0,
              "portfolioValueEur": 1000.44,
              "cashEur": 648.57,
              "mstrPositionValueEur": 150.3,
              "mstrPortfolioWeightPct": 15.02,
              "maxPositionPct": 35,
              "maxBuyEur": 250,
              "sizingCompliant": true,
              "cashConstraintSatisfied": true,
              "invalidation": "Require a fresh completed 5-minute close below $156.85 before treating the documented invalidation as met.",
              "expiry": "Setup expires 2026-10-08T12:10:16Z; reassess at expiry rather than extending the 1-3 trading-day horizon without refreshed setup evidence.",
              "heldPortfolioCorrelation": "Not adequately measured. Selected-universe correlation of 0.658 is not a correlation to the actual ON holding; both positions retain meaningful common equity/momentum and risk-regime exposure.",
              "concentration": "Combined ON and MSTR values are approximately €351.87, or 35.17% of portfolio value. This is not excessive under the supplied per-position limit, but it is material correlated directional exposure in a tight-liquidity regime.",
              "catalystRisk": "No catalyst/earnings/news evidence is available; do not infer that event risk is absent."
            },
            "evidenceLimitations": [
              "The MSTR quote and zero-volume 5-minute bar are from the prior session (2026-10-05T20:00:00Z) and were retrieved roughly 13 hours later; they are stale for an active decision.",
              "Zero reported volume prevents participation confirmation and may also reflect feed/session-data quality rather than tradable-market activity.",
              "Macro regime inputs are dated 2026-10-01 and are stale relative to the proposal.",
              "No live news, earnings calendar, corporate-action, market-hours, spread, or updated liquidity evidence was supplied.",
              "The reported selected correlation is not a full portfolio-correlation, beta, or stress-loss estimate."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The last supplied price of $164.43 is above both the $163.17 breakout/entry threshold and the documented $156.85 invalidation. The trigger's label as a target event is a semantic mismatch: $163.17 is an entry threshold, not a take-profit rule. Do not BUY because the required completed 5-minute participation confirmation failed: the observed bar reported zero volume against a 206,566.8 baseline. Do not REDUCE or SELL because no fresh completed 5-minute close below $156.85 or other confirmed reversal evidence was supplied.",
            "timeHorizon": "Hold through the remaining 1-3 trading-day setup window, reassessing on a fresh confirmed 5-minute invalidation, material reversal evidence, or at setup expiry on 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The price and zero-volume 5-minute bar are from the prior session at 2026-10-05T20:00:00Z and were retrieved about 13 hours later, so they are not fresh actionable confirmation. Zero volume prevents participation validation and may reflect feed quality. Macro inputs are dated 2026-10-01. No live news, earnings, corporate-action, spreads, market-hours, or updated liquidity evidence is available. Selected-universe correlation is not an actual portfolio-correlation or stress-risk estimate.",
            "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVES HOLD only; both agree that no add is justified and no documented invalidation supports reduction or exit. The apparent disagreement between the positive target-level trigger and HOLD is resolved by the recorded setup definition: the alerted level is the breakout entry threshold, not a sell target. Tight-liquidity regime conditions, high MSTR realized volatility, and stale/incomplete intraday evidence reinforce conservative maintenance rather than a BUY."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The FINAL proposal is a non-executing HOLD of the existing MSTR paper position and does not increase exposure, relax risk controls, or treat an entry-level alert as a sell target. The supplied evidence does not show the recorded 5-minute invalidation condition (a completed close below $156.85), while the proposal correctly refuses an add because required participation confirmation failed. Staleness and zero-volume quality issues are explicitly disclosed; they weaken any affirmative market claim but do not make a conservative HOLD impermissible.",
            "checks": {
              "actionAndRiskVeto": "PASS: HOLD has €0 new capital at risk and is consistent with tight-liquidity, high-volatility conditions and the 0.68 regime sizing multiplier. No rule-based exit is evidenced.",
              "triggerSemantics": "PASS: the $163.17 alert is labeled as a target event by the sensor but the underlying setup defines it as the breakout entry threshold. Treating it as neither a BUY confirmation nor a SELL target is consistent with the documented rules.",
              "participation": "PASS: proposal identifies that the completed 5-minute bar had zero volume versus a 206,566.8 baseline and therefore failed the required participation condition. It does not use the price-above-trigger observation to justify adding.",
              "invalidation": "PASS: MSTR's recorded invalidation is a completed 5-minute close below $156.85. The sole supplied completed bar closed at $164.43, so there is no documented invalidation. The proposal appropriately avoids claiming a fresh confirmation.",
              "timestamps": "PASS_WITH_LIMITATION: the quote/bar is timestamped 2026-10-05T20:00:00Z and retrieved approximately 13 hours later on 2026-10-06; macro inputs are from 2026-10-01. The proposal correctly calls them stale and does not rely on them for an active BUY/SELL action.",
              "sizingAndArithmetic": "PASS: MSTR value is approximately €150.30: 1.02771459 × $164.42999 ÷ 1.12435353 = about €150.30. This is about 15.02% of €1,000.44, below the 35% per-position limit. ON is approximately €201.57; cash plus both positions equals €648.57 + €201.57 + €150.30 = €1,000.44. Combined ON/MSTR value €351.87 is approximately 35.17% of portfolio value, matching the report.",
              "thesisConsistency": "PASS: HOLD aligns with price being above the prior observed breakout level, absent supplied invalidation, high 57% realized volatility, tight liquidity, and failed fresh participation. The proposal does not invent a profit target, catalyst, reversal, or liquidity confirmation.",
              "expiry": "PASS: proposal notes the setup expiry of 2026-10-08T12:10:16Z and calls for reassessment rather than silently extending the stated 1-3 trading-day window."
            },
            "evidenceLimitations": [
              "The only MSTR market observation is an after/prior-session 5-minute bar with zero reported volume; it is unsuitable as fresh actionable confirmation and may reflect feed/session artifacts.",
              "No fresh tradable-session quote, completed invalidation bar, bid/ask spread, market-hours validation, or updated liquidity data is supplied.",
              "Macro/regime evidence is approximately five days older than the decision trigger and is explicitly SHADOW/decision-support output, not a binding execution control.",
              "No live earnings, news, corporate-action, or catalyst evidence is available; neither event safety nor event risk can be inferred from its absence.",
              "Selected-universe correlation of 0.658 is not actual ON-to-MSTR portfolio correlation, beta, or stress-loss measurement.",
              "The existing MSTR entry thesis references an earlier 1.084x participation confirmation, but that historical confirming bar is not independently provided in this evidence package; this does not affect the proposed no-add HOLD, but limits auditability of the original entry."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The last supplied price of $164.43 is above both the $163.17 breakout/entry threshold and the documented $156.85 invalidation. The trigger's label as a target event is a semantic mismatch: $163.17 is an entry threshold, not a take-profit rule. Do not BUY because the required completed 5-minute participation confirmation failed: the observed bar reported zero volume against a 206,566.8 baseline. Do not REDUCE or SELL because no fresh completed 5-minute close below $156.85 or other confirmed reversal evidence was supplied.",
          "timeHorizon": "Hold through the remaining 1-3 trading-day setup window, reassessing on a fresh confirmed 5-minute invalidation, material reversal evidence, or at setup expiry on 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The price and zero-volume 5-minute bar are from the prior session at 2026-10-05T20:00:00Z and were retrieved about 13 hours later, so they are not fresh actionable confirmation. Zero volume prevents participation validation and may reflect feed quality. Macro inputs are dated 2026-10-01. No live news, earnings, corporate-action, spreads, market-hours, or updated liquidity evidence is available. Selected-universe correlation is not an actual portfolio-correlation or stress-risk estimate.",
          "reportTreatment": "Quant/Macro recommends HOLD and Risk APPROVES HOLD only; both agree that no add is justified and no documented invalidation supports reduction or exit. The apparent disagreement between the positive target-level trigger and HOLD is resolved by the recorded setup definition: the alerted level is the breakout entry threshold, not a sell target. Tight-liquidity regime conditions, high MSTR realized volatility, and stale/incomplete intraday evidence reinforce conservative maintenance rather than a BUY."
        },
        "tradePermitted": false,
        "decisionKey": "28d28103cc9f3f54",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "951ba8271507316d1f1fd6ad1e088f42c3caceea",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T09:09:32.907Z",
        "evidenceHash": "ce3f6023b295a3bb71b289274ca18f5ff4bcc951f79b16ed1221dc989519eb30",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 quote remains above the $163.17 breakout threshold and $156.85 invalidation level, so there is no confirmed exit signal. However, the event is not valid new-buy confirmation: the completed 5-minute bar has zero reported volume versus a 206,566.8 baseline, failing the required participation test. Do not add exposure or treat the threshold event as a profit target.",
            "timeHorizon": "1-3 trading days, subject to setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The quote and completed 5-minute candle are from 2026-10-05T20:00:00Z and may be stale relative to the decision timestamp.",
              "Required intraday participation cannot be confirmed because reported bar volume is zero; the observed trigger is therefore insufficient for entry/add confirmation.",
              "No current catalyst, earnings, or news feed was supplied; event risk cannot be assessed or assumed absent.",
              "The macro/regime data were observed on 2026-10-01 and are stale for current conditions.",
              "Regime engine is SHADOW research output and its VIX input was delayed, with some timestamps timezone-ambiguous."
            ],
            "quantView": "MSTR ranks fifth with strong 20-day momentum (+29.9%), positive but modest 5-day momentum (+0.9%), 1.55x volume ratio, and high liquidity by average dollar volume. Offsetting factors are high 10-day annualized realized volatility (57.0%), 6.18% ATR, and relatively elevated selected correlation (0.66). Price is 0.77% above entry threshold but only 4.84% above invalidation, while confirmation volume failed. This supports holding the already reduced position rather than adding or reducing absent a valid close/participation signal.",
            "macroView": "Last available regime is NEUTRAL/RANGE with NORMAL volatility but TIGHT liquidity and only 65 confidence. Firmer USD, higher rates, and fragile participation/liquidity proxies constrain risk appetite, making breakout follow-through less reliable. These conditions support reduced sizing and strict adherence to the documented invalidation rather than discretionary expansion.",
            "disagreements": [
              "The sensor labels a MSTR POSITION_TARGET_LEVEL event above $163.17, but the documented setup defines $163.17 as an entry/breakout threshold, not a take-profit target.",
              "Price-close condition is satisfied, but the required participation condition is not; therefore the apparent breakout cannot be treated as a fully confirmed signal.",
              "The setup remains technically above invalidation, while the broader stale macro evidence argues for caution rather than an automatic exit."
            ]
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "The proposed HOLD is risk-consistent for the existing reduced MSTR paper position: supplied price ($164.43) remains above the documented $156.85 5-minute-close invalidation, while the reported threshold event is not a valid basis to add because required participation failed (zero reported bar volume versus 206,566.8 baseline). No incremental capital, concentration, or correlation exposure is proposed. Current MSTR value is approximately €150.3, about 15.0% of portfolio value and below the 35% position limit; cash is approximately €648.57. The position is high volatility (57.0% annualized realized volatility; 6.18% ATR) and has relatively high selected correlation (0.66), so maintaining rather than averaging up is appropriate. HOLD should not override the stated invalidation or the setup expiry at 2026-10-08T12:10:16Z.",
            "checks": {
              "proposedAction": "HOLD; €0 incremental exposure",
              "positionValueEur": 150.3,
              "portfolioValueEur": 1000.44,
              "positionPctOfPortfolio": 15.02,
              "maxPositionPct": 35,
              "withinPositionLimit": true,
              "cashEur": 648.57,
              "maxBuyEur": 250,
              "newBuyProposed": false,
              "incrementalExposureEur": 0,
              "entryConfirmationValidForAdd": false,
              "entryCondition": {
                "priceAbove163_17": true,
                "requiredParticipation": true,
                "participationConfirmed": false,
                "reportedBarVolume": 0,
                "baselineVolume": 206566.8
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "one completed 5-minute close below level",
                "suppliedPriceUsd": 164.43,
                "exitConfirmed": false,
                "distanceToInvalidationPct": 4.84
              },
              "risk": {
                "riskLevel": "HIGH",
                "realizedVol10dAnnualizedPct": 57.03,
                "atrPct": 6.179,
                "selectedCorrelation": 0.658,
                "heldPortfolioCorrelationAssessment": "Not established; selected-universe correlation is not correlation to the actual ON holding. Both positions are directional equity/momentum exposures and may correlate materially in a risk-off or tight-liquidity move."
              },
              "horizon": {
                "expected": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "expiryCheck": "Required; reassess rather than extend the thesis automatically after expiry."
              }
            },
            "evidenceLimitations": [
              "The apparent MSTR event mislabels the $163.17 entry threshold as a target; it is not evidence of a take-profit condition.",
              "Latest price/candle is timestamped 2026-10-05T20:00:00Z and retrieved 2026-10-06T09:09Z, so it may not represent a current tradable regular-session price.",
              "Reported zero intraday volume prevents confirmation of the setup's mandatory participation condition and may indicate feed/session-data quality issues.",
              "No live catalyst, earnings, or news evidence was supplied; event-risk exposure is unknown, not absent.",
              "Regime inputs are from 2026-10-01, with delayed/timezone-ambiguous components; SHADOW regime output cannot validate current conditions.",
              "No actual held-position return/beta/correlation analysis was supplied. The cited 0.66 is a selection metric, not a portfolio correlation estimate."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 price is above the documented $163.17 breakout threshold and well above the $156.85 invalidation; no completed 5-minute close below invalidation is evidenced. Do not add: although price is above the threshold, the mandatory participation confirmation failed because the completed bar reports zero volume versus a 206,566.8 baseline. The sensor's POSITION_TARGET_LEVEL label conflicts with the documented setup, where $163.17 is an entry threshold rather than a profit-taking target. Risk approves HOLD and no risk veto applies.",
            "timeHorizon": "1-3 trading days, with mandatory reassessment at setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest MSTR quote and candle are timestamped 2026-10-05T20:00:00Z and may be stale.",
              "Zero reported intraday volume prevents validation of the required participation condition and may reflect feed or session-data quality issues.",
              "No live catalyst, earnings, or news evidence is available; event risk is unknown rather than absent.",
              "Macro/regime observations are from 2026-10-01, include delayed or timezone-ambiguous inputs, and the regime engine is SHADOW research only.",
              "The selected-universe correlation metric is not a measured correlation to the held ON position or full portfolio."
            ],
            "reportTreatment": {
              "quantMacro": "Followed. Its HOLD recommendation is supported by price remaining above invalidation, while failed mandatory participation blocks any add.",
              "risk": "Followed. Risk APPROVE confirms existing position size is within limits and supports no incremental exposure; it requires continued adherence to invalidation and expiry.",
              "disagreements": [
                "The event sensor calls $163.17 a target level, but the documented MSTR setup defines it as an entry/breakout threshold.",
                "The price-close criterion is met, but participation is not confirmed; the incomplete confirmation supports HOLD rather than BUY.",
                "Stale neutral/range, tight-liquidity macro evidence warrants caution but does not establish an exit signal."
              ]
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The FINAL proposal is a non-incremental HOLD of the existing MSTR paper position and is consistent with the supplied position, setup rules, and risk constraints. The last supplied MSTR price of $164.43 is above the documented $156.85 invalidation, so the evidence does not establish the required completed 5-minute close below invalidation for an exit. Required participation is unconfirmed because the reported bar volume is zero against a 206,566.8 baseline; the proposal correctly uses that failure to block an add rather than treating it as an exit signal. The proposal also correctly identifies that $163.17 is documented as an entry/breakout threshold, notwithstanding the sensor's misleading target-level label. A HOLD remains supportable despite stale and incomplete trading evidence because it creates no new exposure and explicitly requires reassessment at expiry.",
            "checks": {
              "actionAndSizing": {
                "proposal": "HOLD",
                "incrementalEur": 0,
                "newBuy": false,
                "maxBuyEur": 250,
                "result": "No incremental-sizing or buy-limit breach."
              },
              "arithmetic": {
                "cashEur": 648.57,
                "onValueEur": 201.57,
                "mstrValueEur": 150.3,
                "sumEur": 1000.44,
                "reportedPortfolioValueEur": 1000.44,
                "result": "Portfolio components reconcile exactly.",
                "mstrPositionPct": 15.02,
                "maxPositionPct": 35,
                "resultPositionLimit": "MSTR is below the individual position limit."
              },
              "priceAndInvalidation": {
                "lastMstrUsd": 164.42999267578125,
                "entryThresholdUsd": 163.17,
                "invalidationUsd": 156.85,
                "priceAboveThreshold": true,
                "priceAboveInvalidation": true,
                "documentedExitRule": "One completed 5-minute close below $156.85.",
                "exitConfirmed": false,
                "result": "No evidenced invalidation-based exit."
              },
              "participation": {
                "requiredForEntryOrAdd": true,
                "reportedBarVolume": 0,
                "baselineVolume": 206566.8,
                "participationConfirmed": false,
                "result": "The supplied evidence does not validate a new entry or add; FINAL correctly proposes none."
              },
              "timestampFreshness": {
                "decisionTimestamp": "2026-10-06T09:09Z",
                "latestMstrMarketTime": "2026-10-05T20:00:00Z",
                "quoteRetrievedAt": "2026-10-06T09:09:32.848Z",
                "result": "Quote is from the prior session and is not current regular-session confirmation; FINAL discloses this limitation."
              },
              "thesisAndExpiry": {
                "setupExpiry": "2026-10-08T12:10:16Z",
                "proposalRequiresReassessment": true,
                "result": "HOLD does not override the invalidation or automatically extend the setup beyond expiry."
              },
              "riskVeto": {
                "hardRisk": "APPROVE",
                "risk": "APPROVE",
                "result": "No supplied risk veto conflicts with HOLD."
              }
            },
            "evidenceLimitations": [
              "The deciding MSTR price and purported completed 5-minute bar are from 2026-10-05T20:00:00Z, roughly 13 hours before the 2026-10-06T09:09Z decision event; they cannot establish current-session tradability or current invalidation status.",
              "The zero-volume bar may be a feed, after-hours, or session-data artifact. It validly fails the mandatory participation test, but it is weak evidence about actual market participation.",
              "The trigger's POSITION_TARGET_LEVEL classification is semantically inconsistent with the setup, which defines $163.17 as an entry threshold. FINAL appropriately relies on the documented setup rather than the trigger label.",
              "No current catalyst, earnings, or news evidence is available, so event risk is unknown rather than absent.",
              "Regime evidence is dated 2026-10-01 and includes delayed/timezone-ambiguous inputs; it should not be treated as current market confirmation.",
              "The cited 0.66 correlation is a selected-universe metric, not a measured correlation of MSTR to the held ON position or total portfolio. This does not impair a zero-exposure HOLD, but it would be insufficient support for an exposure increase."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 price is above the documented $163.17 breakout threshold and well above the $156.85 invalidation; no completed 5-minute close below invalidation is evidenced. Do not add: although price is above the threshold, the mandatory participation confirmation failed because the completed bar reports zero volume versus a 206,566.8 baseline. The sensor's POSITION_TARGET_LEVEL label conflicts with the documented setup, where $163.17 is an entry threshold rather than a profit-taking target. Risk approves HOLD and no risk veto applies.",
          "timeHorizon": "1-3 trading days, with mandatory reassessment at setup expiry on 2026-10-08T12:10:16Z",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The latest MSTR quote and candle are timestamped 2026-10-05T20:00:00Z and may be stale.",
            "Zero reported intraday volume prevents validation of the required participation condition and may reflect feed or session-data quality issues.",
            "No live catalyst, earnings, or news evidence is available; event risk is unknown rather than absent.",
            "Macro/regime observations are from 2026-10-01, include delayed or timezone-ambiguous inputs, and the regime engine is SHADOW research only.",
            "The selected-universe correlation metric is not a measured correlation to the held ON position or full portfolio."
          ],
          "reportTreatment": {
            "quantMacro": "Followed. Its HOLD recommendation is supported by price remaining above invalidation, while failed mandatory participation blocks any add.",
            "risk": "Followed. Risk APPROVE confirms existing position size is within limits and supports no incremental exposure; it requires continued adherence to invalidation and expiry.",
            "disagreements": [
              "The event sensor calls $163.17 a target level, but the documented MSTR setup defines it as an entry/breakout threshold.",
              "The price-close criterion is met, but participation is not confirmed; the incomplete confirmation supports HOLD rather than BUY.",
              "Stale neutral/range, tight-liquidity macro evidence warrants caution but does not establish an exit signal."
            ]
          }
        },
        "tradePermitted": false,
        "decisionKey": "05ab8c2520920ce1",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "676534bac50b880725e1ddfe7197d45b9455bafb",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T09:29:47.957Z",
        "evidenceHash": "874c656b6143e68b242aafc5fe79854d16b2d8ac1e039981850afb593e59bfbb",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position, but do not add or reduce. The observed $164.43 is above the documented $163.17 entry threshold and remains above the $156.85 invalidation level. However, the required participation condition is not confirmed: the only completed 5-minute bar reports zero volume against a 206,566.8 baseline. The POSITION_TARGET_LEVEL event is not a valid profit-taking signal because $163.17 is explicitly the setup entry trigger, not a target. With no evidenced close below invalidation, an exit is not justified.",
            "timeHorizon": "Until the next verified 5-minute confirmation/invalidation event or setup expiry on 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The latest quoted 5-minute bar is timestamped 2026-10-05T20:00:00Z while the decision trigger was retrieved on 2026-10-06; it is not a fresh regular-session confirmation.",
              "Reported completed-bar volume is zero, so participation cannot be verified despite price being above the entry level.",
              "No live news, earnings, or event-risk feed was supplied; absence of catalyst evidence must not be interpreted as absence of event risk.",
              "The macro-regime observations are from 2026-10-01 and are stale relative to the position review.",
              "The regime engine is SHADOW-only and its market breadth, credit, liquidity, and VIX measures are imperfect or partially delayed proxies."
            ],
            "quantView": {
              "ranking": {
                "rank": 5,
                "quantScore": 1.576,
                "previousRank": 5,
                "rankChange": 0
              },
              "momentum": {
                "momentum5dPct": 0.883,
                "momentum20dPct": 29.889,
                "relativeStrength5dPct": 1.104,
                "relativeStrength20dPct": 29.303
              },
              "riskAndParticipation": {
                "realizedVol10dAnnualizedPct": 57.03,
                "atrPct": 6.179,
                "volumeRatio": 1.551,
                "maxSelectedCorrelation": 0.658
              },
              "setupState": {
                "entryLevel": 163.17,
                "observedPrice": 164.43,
                "invalidationLevel": 156.85,
                "priceAboveEntry": true,
                "priceAboveInvalidation": true,
                "closeConfirmation": true,
                "participationConfirmation": false,
                "action": "Hold only; no pyramiding without a fresh completed 5-minute close above $163.17 with valid participation."
              },
              "assessment": "The 20-day momentum and above-baseline daily volume remain favorable, but near-flat 5-day momentum, high 57% realized volatility, 0.66 selected correlation, and failed intraday participation confirmation make the signal insufficient for an increase."
            },
            "macroView": {
              "regime": "NEUTRAL risk / RANGE trend / NORMAL volatility / TIGHT liquidity",
              "confidence": 65,
              "positionSizeMultiplier": 0.68,
              "assessment": "The supplied regime supports only constrained confirmed-breakout exposure. Tight-liquidity conditions, a firm-dollar shock, higher rates, and weak regional-bank-relative performance create a fragile backdrop for a volatile momentum position. This supports retaining the already reduced exposure rather than adding.",
              "freshness": "Macro evidence was observed on 2026-10-01 and should not be treated as current market confirmation."
            },
            "disagreements": [
              {
                "issue": "Sensor target label versus documented setup",
                "quantPosition": "The $163.17 level is an entry trigger requiring participation, not a profit target.",
                "resolution": "Ignore the POSITION_TARGET_LEVEL label as a sell/reduce instruction; hold the existing position."
              },
              {
                "issue": "Price confirmation versus participation confirmation",
                "quantPosition": "Price is above $163.17, but the mandatory volume confirmation fails because the completed bar volume is zero.",
                "resolution": "No additional purchase until fresh valid volume data confirm the breakout."
              }
            ]
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve HOLD only, not an increase or a new entry. MSTR is above the recorded $156.85 invalidation and the current position is reduced at approximately €150.31 (about 15.0% of €1,000.48 portfolio value), below the 35% position limit. Combined ON and MSTR exposure is approximately 35.2% of portfolio value, with approximately €648.57 cash retained. Although MSTR has high realized volatility (57.03%) and meaningful selected-universe correlation (0.658), retaining rather than adding does not increase exposure. The $163.17 sensor event must not be treated as a target because documented setup metadata defines it as an entry threshold. No add is permitted without a fresh, valid completed 5-minute confirmation above $163.17 with nonzero verifiable participation. Reassess no later than setup expiry on 2026-10-08T12:10:16Z; expiry removes the validity of this short-horizon breakout thesis rather than extending it automatically.",
            "checks": {
              "actionScope": "HOLD existing MSTR only; eurAmount is zero; no execution instruction.",
              "positionSizing": {
                "mstrEurValue": 150.31,
                "mstrPortfolioPct": 15.02,
                "maxPositionPct": 35,
                "withinLimit": true,
                "maxBuyEur": 250,
                "newBuyProposed": 0
              },
              "portfolioExposure": {
                "onEurValue": 201.6,
                "mstrEurValue": 150.31,
                "combinedEurValue": 351.91,
                "combinedPortfolioPct": 35.18,
                "cashEur": 648.57,
                "assessment": "Exposure is moderate in aggregate and cash is sufficient; no incremental risk is approved."
              },
              "correlation": {
                "reportedMaxSelectedCorrelation": 0.658,
                "heldPortfolioAssessment": "The reported figure is selected-universe rather than a validated held-portfolio correlation. ON and MSTR retain common momentum/risk-appetite sensitivity, so the positions should be treated as partially correlated despite different business exposures."
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "One completed 5-minute close below $156.85.",
                "currentObservedPriceUsd": 164.43,
                "invalidatedOnSuppliedEvidence": false,
                "riskNote": "A stale quote cannot establish continuing validity; a verified regular-session close below the rule level would require exit/review under the setup."
              },
              "horizonAndExpiry": {
                "expectedHorizon": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "assessment": "Holding is time-bounded. No extension, pyramiding, or reuse of the setup after expiry without a newly sourced setup and fresh market evidence."
              },
              "entryAndTargetSemantics": {
                "entryLevelUsd": 163.17,
                "sensorLabel": "POSITION_TARGET_LEVEL",
                "assessment": "The sensor label conflicts with the explicit setup definition. $163.17 is an entry threshold, not a profit target or sell trigger."
              },
              "participation": {
                "required": true,
                "freshVerified": false,
                "latestCompletedBarVolume": 0,
                "baselineVolume": 206566.8,
                "assessment": "Participation confirmation fails; this blocks adding but, absent invalidation, does not by itself require liquidation of the existing reduced position."
              }
            },
            "evidenceLimitations": [
              "The latest MSTR quote and completed bar are timestamped 2026-10-05T20:00:00Z but were retrieved on 2026-10-06; they are stale and may be outside regular-session conditions.",
              "The only cited completed 5-minute bar has zero volume, preventing verification of the mandatory participation condition and undermining intraday signal reliability.",
              "No current live news, earnings calendar, corporate-action, Bitcoin-market, or broader event-risk evidence is supplied. No inference about the absence of catalysts or gaps is warranted.",
              "Macro/regime evidence is from 2026-10-01, is shadow-only, and includes delayed or proxy-based liquidity, volatility, breadth, and credit measures.",
              "Reported correlation is a candidate-selection metric, not a demonstrated correlation estimate for the actual ON-plus-MSTR held portfolio.",
              "Portfolio values mix EUR accounting with USD price observations via a supplied FX rate; minor valuation and exposure discrepancies are possible."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied price of $164.43 remains above both the documented $163.17 entry threshold and $156.85 invalidation. The trigger's POSITION_TARGET_LEVEL label conflicts with setup metadata: $163.17 is an entry trigger, not a profit-taking target. No completed 5-minute close below invalidation is evidenced. Do not add because required participation is unverified: the only completed bar shows zero volume versus a 206,566.8 baseline. Quant/Macro and Risk agree that HOLD preserves bounded exposure without increasing risk.",
            "timeHorizon": "Until the next fresh verified 5-minute confirmation or invalidation event, and no later than setup expiry on 2026-10-08T12:10:16Z.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "MSTR quote and completed bar are stale, timestamped 2026-10-05T20:00:00Z despite retrieval on 2026-10-06.",
              "Zero reported bar volume prevents validation of mandatory participation confirmation.",
              "No live news, earnings, corporate-action, Bitcoin-market, or event-risk feed was supplied; absence of evidence is not evidence of no risk.",
              "Macro/regime evidence is from 2026-10-01, SHADOW-only, and relies partly on delayed or proxy measures.",
              "Selected-universe correlation is not a validated ON-MSTR portfolio correlation estimate."
            ],
            "reportTreatment": {
              "quantMacro": "Followed. It recommends HOLD: price remains above invalidation, but failed participation confirmation blocks adding; the sensor target label is rejected as semantically inconsistent with the documented entry rule.",
              "risk": "Followed. Risk APPROVE applies only to maintaining the approximately €150.31 existing MSTR exposure, with no increase. No veto is present.",
              "disagreements": "Resolved the sensor-versus-setup conflict in favor of documented setup metadata. $163.17 is an entry threshold requiring participation, not a sell or reduce level."
            }
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The final proposal is a non-incremental HOLD of the existing MSTR paper position, with eurAmount 0. It does not misinterpret the sensor's erroneous POSITION_TARGET_LEVEL label as a sell signal: the supplied setup metadata consistently defines $163.17 as an entry threshold, while $156.85 is the invalidation level. The supplied, though stale, $164.43 completed-bar price is above $156.85 and contains no completed 5-minute close below invalidation. Mandatory participation is not verified because the cited bar volume is zero; the proposal correctly uses that failure to prohibit adding rather than inventing an exit requirement. Risk sizing and portfolio arithmetic are materially consistent with the source portfolio, and no risk veto is present.",
            "checks": {
              "actionScope": {
                "result": "PASS",
                "detail": "Proposal is HOLD, symbol MSTR, eurAmount 0; it neither directs execution nor increases exposure."
              },
              "setupSemantics": {
                "result": "PASS",
                "detail": "Scout setup, position entryRule, and invalidationRule define $163.17 as an ABOVE entry trigger requiring participation and $156.85 as a BELOW invalidation. Rejecting the sensor's target label is supported by the primary setup metadata."
              },
              "invalidation": {
                "result": "PASS_WITH_STALENESS",
                "detail": "Observed MSTR $164.42999 is above $156.85. No supplied completed 5-minute close below $156.85 exists. This supports HOLD only, not a claim of current live validity."
              },
              "participation": {
                "result": "PASS",
                "detail": "The latest cited completed 5-minute bar closes above $163.17 but has volume 0 versus baseline volume 206,566.8. Participation confirmation is therefore false, and the proposal correctly prohibits an add."
              },
              "freshness": {
                "result": "PASS_WITH_LIMITATION",
                "detail": "The quote/bar market time is 2026-10-05T20:00:00Z, while trigger retrieval and decision are on 2026-10-06. The proposal explicitly identifies this as stale and does not rely on it for a new entry, increase, or asserted fresh confirmation."
              },
              "sizingAndArithmetic": {
                "result": "PASS",
                "detail": "MSTR marked value is approximately €150.31 and ON is €201.60; together €351.91. €351.91 / €1,000.48 = 35.17%, consistent with reported 35.18%. MSTR is about 15.02%, below the 35% single-position limit. Cash €648.57 plus position values €351.91 equals portfolio value €1,000.48. No new buy conflicts with the €250 maximum-buy limit."
              },
              "riskVeto": {
                "result": "PASS",
                "detail": "Risk and hardRisk both approve HOLD only. High MSTR volatility, tight-liquidity regime context, and unvalidated portfolio correlation are acknowledged and do not create incremental exposure under a hold."
              },
              "horizon": {
                "result": "PASS",
                "detail": "The proposal limits the hold to fresh verified confirmation/invalidation review and no later than setup expiry on 2026-10-08T12:10:16Z, consistent with the stated 1-3 trading-day setup horizon."
              },
              "thesisConsistency": {
                "result": "PASS",
                "detail": "Holding despite failed current participation is consistent with the documented distinction between initial/existing-position management and prohibition on pyramiding. The proposal does not claim a newly confirmed breakout."
              }
            },
            "evidenceLimitations": [
              "Market evidence is stale: the decision uses a 2026-10-05T20:00:00Z bar retrieved on 2026-10-06, so it cannot establish MSTR's current-session price or invalidate/confirm the setup live.",
              "Zero bar volume and the absence of a valid participation measurement make the intraday confirmation evidence inadequate for any increase.",
              "The original claimed entry participation of 1.084x is embedded in portfolio narrative rather than independently corroborated by a raw entry-time bar in this evidence packet.",
              "Macro/regime observations are dated 2026-10-01, SHADOW-only, and partly based on delayed or proxy measures; they are weak current-market evidence.",
              "No live corporate-action, earnings, Bitcoin-market, news, or event-risk feed is supplied. The HOLD does not require such evidence, but no conclusion about absence of event risk is supportable.",
              "The reported 0.658 correlation is a selected-universe metric, not a measured ON-MSTR held-portfolio correlation."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied price of $164.43 remains above both the documented $163.17 entry threshold and $156.85 invalidation. The trigger's POSITION_TARGET_LEVEL label conflicts with setup metadata: $163.17 is an entry trigger, not a profit-taking target. No completed 5-minute close below invalidation is evidenced. Do not add because required participation is unverified: the only completed bar shows zero volume versus a 206,566.8 baseline. Quant/Macro and Risk agree that HOLD preserves bounded exposure without increasing risk.",
          "timeHorizon": "Until the next fresh verified 5-minute confirmation or invalidation event, and no later than setup expiry on 2026-10-08T12:10:16Z.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "MSTR quote and completed bar are stale, timestamped 2026-10-05T20:00:00Z despite retrieval on 2026-10-06.",
            "Zero reported bar volume prevents validation of mandatory participation confirmation.",
            "No live news, earnings, corporate-action, Bitcoin-market, or event-risk feed was supplied; absence of evidence is not evidence of no risk.",
            "Macro/regime evidence is from 2026-10-01, SHADOW-only, and relies partly on delayed or proxy measures.",
            "Selected-universe correlation is not a validated ON-MSTR portfolio correlation estimate."
          ],
          "reportTreatment": {
            "quantMacro": "Followed. It recommends HOLD: price remains above invalidation, but failed participation confirmation blocks adding; the sensor target label is rejected as semantically inconsistent with the documented entry rule.",
            "risk": "Followed. Risk APPROVE applies only to maintaining the approximately €150.31 existing MSTR exposure, with no increase. No veto is present.",
            "disagreements": "Resolved the sensor-versus-setup conflict in favor of documented setup metadata. $163.17 is an entry threshold requiring participation, not a sell or reduce level."
          }
        },
        "tradePermitted": false,
        "decisionKey": "038570a8987590f9",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "922a59c583349b77caf25cac440ec6d67d11da31",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T09:48:05.201Z",
        "evidenceHash": "70e2bfddfc95d204de7111c1c97c92e63534571ef2f41b1843220d6fc21fe719",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The observed $164.43 price is above the documented $163.17 entry threshold and above the $156.85 invalidation level. However, the apparent POSITION_TARGET_LEVEL event is a schema/label conflict: $163.17 is the setup entry trigger, not a profit target. The only completed 5-minute bar had zero reported volume versus a 206,566.8 baseline, so required participation was not confirmed. This prevents adding, but does not evidence a failed breakout or invalidation requiring reduction or sale.",
            "timeHorizon": "Until the next confirmed 5-minute participation reading, setup expiry on 2026-10-08T12:10:16.000Z, or a completed close below $156.85",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The MSTR quote/bar is timestamped 2026-10-05T20:00:00.000Z while retrieved on 2026-10-06; it may not represent a current tradable regular-session price.",
              "The completed confirmation bar reports zero volume, making participation confirmation unavailable despite price closing above the entry level.",
              "The macro-regime observations are from 2026-10-01 and are stale relative to this decision.",
              "No live catalyst, earnings, or news feed was supplied; event risk cannot be assessed or assumed absent.",
              "The regime engine is SHADOW research output and its liquidity, breadth, credit, and volatility measures are imperfect proxies."
            ],
            "quantView": "MSTR remains a ranked momentum candidate, with strong 20-day momentum (+29.9%), 1.55x volume ratio in the daily selection data, and price above the $163.17 trigger. Counterweights are weak 5-day momentum (+0.9%), high 10-day annualized realized volatility (57.0%), high selected correlation (0.66), and absent intraday participation confirmation. Existing exposure is only about EUR150.28, or roughly 15.0% of portfolio value, below the 35% position limit; no size increase is justified without the required volume-confirmed close.",
            "macroView": "The supplied regime is neutral/range with normal volatility but tight liquidity, driven by a firmer dollar, higher 10-year yield, and weak regional-bank-relative performance. This backdrop supports retaining bounded existing exposure rather than increasing a high-volatility momentum position. It does not independently establish an exit because no fresh broad-risk reversal or MSTR-specific invalidation is supplied.",
            "disagreements": "The trigger labels a price above $163.17 as POSITION_TARGET_LEVEL, while the setup metadata consistently defines $163.17 as an entry threshold. The setup interpretation takes precedence. Quant and macro both support HOLD: quant sees an intact but unconfirmed breakout, while macro argues against adding risk in tight-liquidity conditions."
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only: no new exposure is being added, MSTR's supplied price remains above the documented $156.85 completed-5-minute-close invalidation, and the existing position is approximately 15% of portfolio value, below the 35% single-position limit. The $163.17 event must not be treated as a profit target because the setup metadata consistently defines it as an entry threshold. HOLD is appropriate pending valid participation data, expiry, or invalidation; it is not approval to add or extend the trade.",
            "checks": {
              "proposedAction": "HOLD with EUR 0 additional allocation",
              "cashAndSizing": {
                "cashEur": 648.57,
                "mstrValueEur": 150.28,
                "mstrPortfolioPctApprox": 15.02,
                "onValueEur": 201.55,
                "combinedOpenEquityExposurePctApprox": 35.17,
                "maxPositionPct": 35,
                "maxBuyEur": 250,
                "result": "No incremental sizing; cash is sufficient but should not be used for an MSTR add under current evidence."
              },
              "invalidationAndExpiry": {
                "invalidation": "Require a completed 5-minute close below $156.85 before treating the setup as invalidated, subject to fresh, reliable market data.",
                "entryTrigger": "$163.17 is an entry trigger requiring participation, not a target.",
                "setupExpiry": "2026-10-08T12:10:16.000Z",
                "result": "Position remains above invalidation but requires reassessment at expiry; do not roll the short 1-3 trading-day thesis forward without refreshed selection and trigger evidence."
              },
              "correlationAndExposure": {
                "heldPositions": "ON and MSTR are both long momentum equities; selected-universe correlation for MSTR is reported as 0.658, but this is not a measured realized correlation against the actual ON holding.",
                "result": "Combined open equity exposure is material at about 35% of portfolio value. Holding does not worsen this concentration, while any add would increase correlated momentum/risk-regime exposure and is not supported."
              },
              "marketAndSetupQuality": {
                "result": "Price is above the trigger and invalidation, but the only completed 5-minute MSTR bar reports zero volume against a 206,566.8 baseline. Participation is therefore unconfirmed. Tight-liquidity/range regime evidence and MSTR's 57% annualized 10-day realized volatility support no-add discipline."
              }
            },
            "evidenceLimitations": [
              "The cited MSTR 5-minute price/bar is timestamped 2026-10-05T20:00:00Z but retrieved on 2026-10-06, so it is stale and may not be a tradable regular-session quote.",
              "Zero reported bar volume prevents confirmation of the required participation condition; price alone is insufficient for a fresh breakout decision.",
              "Regime inputs were observed on 2026-10-01 and are stale; the SHADOW regime engine is decision support, not a current risk control.",
              "No live earnings, corporate-action, crypto-market, news, or catalyst feed was supplied. MSTR-specific event and its potential indirect bitcoin sensitivity cannot be quantified from this evidence.",
              "The reported 0.658 correlation is a selection metric, not demonstrated correlation of MSTR with the actual ON holding; portfolio concentration risk may be understated.",
              "FX and position values are snapshot estimates and can change independently of the stale equity quotes."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation level, and no completed 5-minute close below that level is evidenced. The $163.17 POSITION_TARGET_LEVEL label conflicts with the setup metadata, which consistently identifies $163.17 as an entry trigger rather than a profit-taking level; it therefore does not justify a SELL or REDUCE. Do not add: the required participation confirmation is unavailable because the only completed 5-minute bar reports zero volume versus a 206,566.8 baseline. Quant/Macro supports HOLD for an intact but unconfirmed breakout, while the tight-liquidity/range backdrop and MSTR's high volatility argue against increasing exposure. Risk approves HOLD only and imposes no veto.",
            "timeHorizon": "Until fresh reliable 5-minute participation data, setup expiry on 2026-10-08T12:10:16.000Z, or a completed 5-minute close below $156.85; reassess at expiry rather than extending the 1-3 trading-day thesis automatically.",
            "riskLevel": "HIGH",
            "evidenceLimitations": [
              "The MSTR quote and completed bar are timestamped 2026-10-05T20:00:00Z but retrieved on 2026-10-06, so they may be stale and not represent a tradable regular-session price.",
              "The completed bar's zero volume prevents verification of the required participation condition; price above the entry threshold alone is insufficient to support an add.",
              "Macro regime data are from 2026-10-01 and the SHADOW regime output is research support rather than a live risk control.",
              "No live catalyst, earnings, corporate-action, news, or bitcoin-market evidence was provided, so MSTR-specific event risk cannot be assessed or assumed absent.",
              "Reported selected-universe correlation is not a realized correlation measurement against the actual ON position; correlated long-momentum concentration may be understated."
            ],
            "reportTreatment": "Follow Quant/Macro's HOLD recommendation and Risk's APPROVE-for-HOLD-only verdict. Resolve the trigger disagreement in favor of the setup metadata: $163.17 is an entry trigger, not a target. There is no risk veto, but risk explicitly rejects incremental MSTR exposure under stale, volume-unconfirmed evidence and material combined equity exposure."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The proposed HOLD of the existing MSTR paper position is internally consistent with the supplied evidence and does not add risk. The $163.17 trigger is consistently defined in the setup/scout metadata as an entry threshold requiring participation, so the sensor's POSITION_TARGET_LEVEL label is correctly treated as a schema conflict rather than a sell signal. No supplied completed 5-minute close is below the $156.85 invalidation level. The zero-volume bar prevents confirmation for an add, but does not itself establish an exit condition; HOLD is therefore supportable pending fresh data or expiry.",
            "checks": {
              "actionAndRiskVeto": "PASS: Proposal is HOLD with EUR 0 allocation. Risk explicitly approves HOLD only; hardRisk is APPROVE. No incremental exposure, order, leverage, or execution is proposed.",
              "priceAndInvalidation": "PASS WITH STALENESS LIMITATION: Supplied MSTR price is $164.43, above $156.85 invalidation. No completed 5-minute close below invalidation is evidenced.",
              "triggerInterpretation": "PASS: Scout candidates, setups, entryRule, and the existing MSTR thesis all identify $163.17 as an ABOVE entry trigger with required participation. The isolated POSITION_TARGET_LEVEL sensor label conflicts with these records and is not sufficient evidence of a profit target.",
              "participation": "PASS FOR HOLD / FAIL FOR ADD: The only cited completed bar has zero volume versus a 206,566.8 baseline, so required participation is unverified. The proposal correctly uses this as a no-add constraint rather than inventing confirmation.",
              "sizingAndArithmetic": "PASS: MSTR value is approximately EUR150.28, about 15.02% of EUR1000.40 portfolio value, below the 35% single-position limit. ON value of EUR201.55 plus MSTR value of EUR150.28 equals EUR351.83, approximately 35.17% of portfolio value; this is material combined long-equity exposure but HOLD does not increase it. Cash plus position values reconcile approximately to reported portfolio value: 648.57 + 201.55 + 150.28 = 1000.40.",
              "thesisAndExpiry": "PASS: HOLD is aligned with the stated intact-above-invalidation but unconfirmed-breakout thesis. The proposal explicitly requires reassessment at the recorded 2026-10-08T12:10:16Z expiry and does not automatically extend the 1-3 trading-day horizon.",
              "timestampFreshness": "PASS WITH LIMITATION: Equity quote/bar market time is 2026-10-05T20:00:00Z, retrieved 2026-10-06T09:48Z, making it overnight/stale for a fresh trading decision. The proposal acknowledges this and makes no trade based on it."
            },
            "evidenceLimitations": [
              "The MSTR market observation is stale relative to the decision retrieval time and may not represent a current tradable regular-session price.",
              "The only completion bar reports zero volume, so the mandatory participation condition cannot be independently verified.",
              "Macro/regime observations are from 2026-10-01 and the regime engine is explicitly SHADOW research support, not a live control.",
              "No live MSTR earnings, corporate-action, news, catalyst, or bitcoin-market evidence is supplied; absence of adverse events cannot be inferred.",
              "The reported 0.658 correlation is a universe-selection metric rather than demonstrated realized correlation against the actual ON holding.",
              "The original MSTR position was opened under earlier supporting evidence not independently reproduced in the current trigger data; this does not invalidate a no-action HOLD, but limits reassessment confidence."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation level, and no completed 5-minute close below that level is evidenced. The $163.17 POSITION_TARGET_LEVEL label conflicts with the setup metadata, which consistently identifies $163.17 as an entry trigger rather than a profit-taking level; it therefore does not justify a SELL or REDUCE. Do not add: the required participation confirmation is unavailable because the only completed 5-minute bar reports zero volume versus a 206,566.8 baseline. Quant/Macro supports HOLD for an intact but unconfirmed breakout, while the tight-liquidity/range backdrop and MSTR's high volatility argue against increasing exposure. Risk approves HOLD only and imposes no veto.",
          "timeHorizon": "Until fresh reliable 5-minute participation data, setup expiry on 2026-10-08T12:10:16.000Z, or a completed 5-minute close below $156.85; reassess at expiry rather than extending the 1-3 trading-day thesis automatically.",
          "riskLevel": "HIGH",
          "evidenceLimitations": [
            "The MSTR quote and completed bar are timestamped 2026-10-05T20:00:00Z but retrieved on 2026-10-06, so they may be stale and not represent a tradable regular-session price.",
            "The completed bar's zero volume prevents verification of the required participation condition; price above the entry threshold alone is insufficient to support an add.",
            "Macro regime data are from 2026-10-01 and the SHADOW regime output is research support rather than a live risk control.",
            "No live catalyst, earnings, corporate-action, news, or bitcoin-market evidence was provided, so MSTR-specific event risk cannot be assessed or assumed absent.",
            "Reported selected-universe correlation is not a realized correlation measurement against the actual ON position; correlated long-momentum concentration may be understated."
          ],
          "reportTreatment": "Follow Quant/Macro's HOLD recommendation and Risk's APPROVE-for-HOLD-only verdict. Resolve the trigger disagreement in favor of the setup metadata: $163.17 is an entry trigger, not a target. There is no risk veto, but risk explicitly rejects incremental MSTR exposure under stale, volume-unconfirmed evidence and material combined equity exposure."
        },
        "tradePermitted": false,
        "decisionKey": "85c9ab3cd9190b7b",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "b890896a72a98f81972a93a03049030175526842",
        "portfolioMutation": false
      },
      {
        "schemaVersion": 1,
        "mode": "MULTI_CALL_ROLE_PIPELINE",
        "processedAt": "2026-10-06T10:08:09.928Z",
        "evidenceHash": "733f06c44f1726654d4d769848122b061efde9d0139bb1f1294c03211f4edb54",
        "reports": {
          "scout": {
            "role": "SCOUT",
            "mode": "DETERMINISTIC_EXISTING_UNIVERSE_SELECTOR",
            "selectedAt": "2026-10-05T12:10:16.000Z",
            "universeSize": 116,
            "symbols": [
              "ON",
              "MSTR"
            ],
            "candidates": [
              {
                "symbol": "ON",
                "rank": 2,
                "previousRank": 2,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 2.095,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 2.305,
                  "participation": 3.069,
                  "volatility": 1.209,
                  "gap": 3.147,
                  "correlation": 0.322,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $86.09 with sustained participation.",
                "invalidation": "Loss of $83.69 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 2.09: 5d momentum 10.0%, 20d 17.3%, annualized 10d realized vol 41%, volume 2.34x, max selected correlation 0.32.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "ON-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "rank": 5,
                "previousRank": 5,
                "rankChange": 0,
                "rankChangeLabel": "0",
                "status": "SELECTED",
                "quantScore": 1.576,
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
                "selectionReason": "Top-ranked eligible candidate passing the correlation gate.",
                "factors": {
                  "momentum": 1.15,
                  "participation": 1.152,
                  "volatility": 2.495,
                  "gap": 1.588,
                  "correlation": 0.658,
                  "regimeFit": null
                },
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "setups": [
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "WATCH_ONLY",
                "setupId": "MSTR-20261005-daily-quant"
              },
              {
                "symbol": "MSTR",
                "setup": "Daily quant momentum / volatility breakout",
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
                "expiresAt": "2026-10-08T12:10:16.000Z",
                "trigger": "Break above $163.17 with sustained participation.",
                "invalidation": "Loss of $156.85 or failed breakout/reversal of the ranked momentum signal.",
                "expectedHorizon": "1-3 trading days",
                "reason": "Quant score 1.58: 5d momentum 0.9%, 20d 29.9%, annualized 10d realized vol 57%, volume 1.55x, max selected correlation 0.66.",
                "quantScore": 1.576,
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
                "createdAt": "2026-10-05T12:10:16.000Z",
                "lastReviewedAt": "2026-10-05T12:10:16.000Z",
                "status": "UNTRIGGERED",
                "setupId": "MSTR-20261005-daily-quant"
              }
            ],
            "reason": "Existing daily universe ranking; every open position and valid triggered setup is reviewed. No second scanner or schedule."
          },
          "quantMacro": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position only. The observed $164.43 is above the documented $156.85 invalidation and above the $163.17 entry trigger, but the purported POSITION_TARGET_LEVEL event is not a valid take-profit signal: $163.17 is consistently defined in the setup metadata as the entry-breakout threshold. Do not add because the required participation confirmation failed; the completed 5-minute bar had zero reported volume against a 206,566.8 baseline. High 10-day realized volatility (57.03%), elevated selected correlation (0.658), and only 0.883% 5-day momentum reinforce a no-add stance.",
            "timeHorizon": "1-3 trading days, subject to setup expiry at 2026-10-08T12:10:16Z",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The price/5-minute observation is timestamped 2026-10-05T20:00:00Z and retrieved on 2026-10-06, so it is not demonstrably fresh. The only completed intraday bar reports zero volume, preventing participation validation. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live catalyst, earnings, or news feed was supplied; absence of such evidence must not be interpreted as absence of event risk. The target-level trigger conflicts with the explicit setup definition.",
            "quantView": "MSTR remains ranked and has strong 20-day momentum (+29.889%) and above-baseline daily volume (1.551x), but the entry condition requires a 5-minute close above $163.17 with participation. Price condition is met, participation is unconfirmed, and the existing position remains above invalidation. HOLD rather than BUY, REDUCE, or SELL.",
            "macroView": "The supplied regime is NEUTRAL risk, RANGE trend, NORMAL volatility, and TIGHT liquidity, with a 0.68 position-size multiplier. Firmer USD, higher rates, weak regional-bank relative performance, and fragile participation argue against expanding a high-volatility momentum exposure; they do not independently evidence an exit below the recorded invalidation.",
            "disagreements": {
              "quant": "Price is above the breakout threshold and long-horizon momentum is favorable, which supports retaining the existing position.",
              "macro": "Tight liquidity and mixed/range conditions argue for restraint and make an unconfirmed breakout unsuitable for additional exposure.",
              "resolution": "HOLD existing reduced exposure; no new EUR allocation until fresh completed-bar volume confirms participation or the invalidation condition is met."
            }
          },
          "risk": {
            "verdict": "APPROVE",
            "reason": "Approve the proposed HOLD only. No incremental exposure is proposed, the existing MSTR position is modest at approximately €150.2 (about 15.0% of €1,000.2 portfolio value), remains above its documented $156.85 invalidation, and the $163.17 event is an entry trigger rather than a valid profit target. A HOLD does not relax the original entry, participation, or invalidation requirements. No add is appropriate because required 5-minute participation is unverified and the high-volatility, tight-liquidity/range backdrop remains unfavorable for expanding exposure.",
            "checks": {
              "proposedAction": "HOLD MSTR; €0 new allocation",
              "positionSizing": {
                "mstrValueEur": 150.2,
                "portfolioValueEur": 1000.2,
                "mstrPortfolioPct": 15.02,
                "maxPositionPct": 35,
                "result": "Within stated position limit"
              },
              "cash": {
                "cashEur": 648.57,
                "result": "No cash use for HOLD"
              },
              "exposure": {
                "onValueEur": 201.44,
                "mstrValueEur": 150.2,
                "grossLongEur": 351.64,
                "grossLongPct": 35.16,
                "result": "Existing gross exposure is moderate; no increase proposed"
              },
              "correlation": {
                "selectedCorrelationForMSTR": 0.658,
                "heldPortfolioAssessment": "MSTR and ON may both retain equity/risk-on sensitivity; supplied selected-universe correlation is not a measured correlation to the actual ON holding. This is a reason not to add, but does not require exit without invalidation evidence."
              },
              "invalidation": {
                "levelUsd": 156.85,
                "rule": "One completed 5-minute close below level",
                "observedPriceUsd": 164.43,
                "result": "Not breached on supplied observation"
              },
              "entryAndTargetIntegrity": {
                "entryTriggerUsd": 163.17,
                "participationRequired": true,
                "reportedBarVolume": 0,
                "baselineVolume": 206566.8,
                "result": "Price is above trigger but participation confirmation failed; $163.17 must not be treated as a take-profit target"
              },
              "horizonAndExpiry": {
                "expectedHorizon": "1-3 trading days",
                "setupExpiresAt": "2026-10-08T12:10:16Z",
                "result": "HOLD should be reassessed at expiry or earlier on fresh invalidation/reversal evidence"
              },
              "catalystRisk": {
                "status": "Unknown",
                "result": "No catalyst/earnings/news evidence supports assuming event risk is absent"
              }
            },
            "evidenceLimitations": [
              "The price and completed 5-minute bar are from 2026-10-05T20:00:00Z, retrieved on 2026-10-06, and are not demonstrably current at decision time.",
              "The zero reported intraday volume makes participation validation unavailable; it should not be interpreted as genuine zero trading volume.",
              "The macro/regime observation is dated 2026-10-01, marked SHADOW, and is stale for a short-horizon decision.",
              "No live catalyst, earnings calendar, news, or corporate-action feed was provided; event risk is unknown.",
              "The reported 0.658 correlation is selection correlation, not measured correlation against the actual ON position or total held portfolio.",
              "Portfolio position metadata conflict across setup versions for ON, though this does not alter the MSTR HOLD assessment."
            ]
          },
          "pm": {
            "decision": "HOLD",
            "symbol": "MSTR",
            "eurAmount": 0,
            "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only.",
            "timeHorizon": "1-3 trading days; reassess at setup expiry on 2026-10-08T12:10:16Z or earlier upon fresh completed-bar invalidation or reversal evidence.",
            "riskLevel": "HIGH",
            "evidenceLimitations": "The observed price and 5-minute bar are timestamped 2026-10-05T20:00:00Z and are not demonstrably current at decision time. Zero reported volume prevents participation validation and should not be treated as actual zero trading. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live news, earnings, catalyst, or corporate-action data were supplied, so event risk is unknown. The stated correlation is a selection-universe measure, not correlation versus the held ON position.",
            "reportTreatment": "Quant/Macro is treated as decision support: its HOLD is accepted because MSTR is above invalidation but lacks required participation for any add; its characterization of $163.17 as an entry trigger overrides the contradictory target-level event label. Risk is treated as controlling on constraints: it approves HOLD only, confirms no invalidation breach, and rejects incremental exposure under the high-volatility, tight-liquidity conditions."
          },
          "hardRisk": {
            "verdict": "APPROVE",
            "errors": []
          },
          "critic": {
            "verdict": "PASS",
            "reason": "The final proposal is a non-sizing HOLD of the existing MSTR paper position and is internally consistent with the supplied position, price, setup metadata, and stated risk approval. The supplied completed 5-minute close of $164.43 is above the $156.85 invalidation level, so no documented invalidation-based reduction or exit is evidenced. It correctly rejects the sensor's POSITION_TARGET_LEVEL label because $163.17 is consistently defined elsewhere as the entry-breakout trigger, not a profit target. It also correctly treats the zero-volume bar as failure/unavailability of participation confirmation and therefore does not use the above-trigger price to justify an add. No risk-limit breach or hard-risk veto applies to a €0 HOLD action.",
            "checks": {
              "actionAndSizing": "PASS: Proposal is HOLD MSTR with €0 allocation; it neither uses cash nor increases exposure.",
              "positionArithmetic": "PASS: MSTR value of approximately €150.2 is consistent with 1.02771459 shares at $164.42999 and EURUSD 1.1251125 (approximately €150.2). This is about 15.0% of the €1,000.2 portfolio, below the 35% maximum-position limit.",
              "portfolioArithmetic": "PASS_WITH_ROUNDING: Cash €648.57 plus displayed position values €201.44 and €150.20 totals €1,000.21 versus stated €1,000.20; the €0.01 difference is immaterial display rounding. Displayed total P&L also reconciles within rounding.",
              "invalidation": "PASS: $164.43 is above MSTR's $156.85 invalidation threshold. The documented rule requires one completed 5-minute close below that threshold, and none is supplied.",
              "thesisAndTriggerIntegrity": "PASS: The proposal appropriately distinguishes the explicit $163.17 entry rule from the contradictory target-level sensor label. It does not claim a take-profit condition or invent a target.",
              "participation": "PASS: The proposal does not characterize reported zero volume as actual trading volume and correctly concludes that required participation cannot be validated. This supports no add, while not requiring liquidation of an already-held position absent invalidation evidence.",
              "riskVeto": "PASS: Supplied Risk and HardRisk approve HOLD only. The proposal follows that constraint and does not increase the high-volatility MSTR exposure in a TIGHT-liquidity/RANGE regime.",
              "timingAndExpiry": "PASS: The stated reassessment point of 2026-10-08T12:10:16Z matches the MSTR setup expiry. The proposal also conditions earlier review on fresh invalidation or reversal evidence.",
              "missingParticipationForHold": "PASS: Current participation is missing, but this does not invalidate a HOLD under the supplied rules; it bars confirmation for a new/additional entry. The proposal makes no unsupported claim that the original entry is newly confirmed."
            },
            "evidenceLimitations": [
              "The market observation is stale for the 2026-10-06T10:08Z decision: its completed-bar market time is 2026-10-05T20:00:00Z. It is the prior regular-session close, not demonstrably current decision-time pricing.",
              "The sole intraday bar reports zero volume, so participation cannot be verified; this must not be interpreted as genuine zero market activity.",
              "Regime evidence is from 2026-10-01 and is explicitly SHADOW/decision-support research, not a current executable risk signal.",
              "No news, earnings, corporate-action, or catalyst data are supplied. The proposal correctly labels event risk unknown rather than inferring its absence.",
              "The 0.658 correlation is a selected-universe statistic, not a measured correlation against the held ON position; it is unsuitable for precise portfolio-correlation conclusions.",
              "There are setup-version inconsistencies for ON and historical claims of prior MSTR participation confirmation, but they do not contradict the specific MSTR HOLD conclusion based on the supplied current observation and invalidation rule."
            ]
          }
        },
        "decision": {
          "decision": "HOLD",
          "symbol": "MSTR",
          "eurAmount": 0,
          "reason": "Maintain the existing reduced MSTR paper position. The supplied $164.43 observation remains above the documented $156.85 invalidation, while the $163.17 trigger is an entry-breakout level—not a profit target—despite the sensor's conflicting POSITION_TARGET_LEVEL label. Do not add: the required completed 5-minute participation confirmation failed because reported volume was zero versus the 206,566.8 baseline. High realized volatility, elevated selected correlation, weak 5-day momentum, and the tight-liquidity/range backdrop support restraint rather than expansion. Quant/Macro and Risk agree on HOLD; neither provides evidence for a reduction or full exit, and Risk approves HOLD only.",
          "timeHorizon": "1-3 trading days; reassess at setup expiry on 2026-10-08T12:10:16Z or earlier upon fresh completed-bar invalidation or reversal evidence.",
          "riskLevel": "HIGH",
          "evidenceLimitations": "The observed price and 5-minute bar are timestamped 2026-10-05T20:00:00Z and are not demonstrably current at decision time. Zero reported volume prevents participation validation and should not be treated as actual zero trading. Regime evidence is dated 2026-10-01 and is SHADOW research output. No live news, earnings, catalyst, or corporate-action data were supplied, so event risk is unknown. The stated correlation is a selection-universe measure, not correlation versus the held ON position.",
          "reportTreatment": "Quant/Macro is treated as decision support: its HOLD is accepted because MSTR is above invalidation but lacks required participation for any add; its characterization of $163.17 as an entry trigger overrides the contradictory target-level event label. Risk is treated as controlling on constraints: it approves HOLD only, confirms no invalidation breach, and rejects incremental exposure under the high-volatility, tight-liquidity conditions."
        },
        "tradePermitted": false,
        "decisionKey": "28b07e4159527476",
        "triggerKey": "c3d75e106e0d7373",
        "baseCommitSha": "69ac87014caded0cf21b19d27e7e1dd6337aa912",
        "portfolioMutation": false
      }
    ],
    "triggerProcessing": {
      "lastTriggerKey": "c3d75e106e0d7373",
      "processedAt": "2026-10-06T10:08:09.928Z",
      "decisionKey": "28b07e4159527476"
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
              "d1": 0
            },
            "selectionPrice": 69.33000183105469,
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
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
              "d1": 0
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
              "d1": 0
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
              "d1": 0
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
              "d1": 0
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
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
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
              "h4": 0.161
            },
            "selectionPrice": 69.33000183105469,
            "invalidatedAt": "2026-10-05T13:30:00.000Z"
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
              "h4": 0.89
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
              "h4": -0.965
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
              "h4": -0.001
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
              "h4": -1.457
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z"
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-06T10:08:07.571Z"
  }
};
