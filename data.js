window.PORTFOLIO_DATA = {
  "meta": {
    "lastSystemTest": {
      "timestamp": "2026-09-29T23:00:30+03:00",
      "status": "OK",
      "environment": "ChatGPT Work"
    },
    "title": "€1000 Quant Challenge",
    "currency": "EUR",
    "asOf": "2026-10-05 14:18 UTC",
    "lastTrade": "2026-10-02 13:33 UTC",
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
    "value": 999.24,
    "cash": 798.57,
    "realized": -1.43,
    "unrealized": 0.67,
    "total": -0.76,
    "totalPct": -0.08
  },
  "positions": [
    {
      "symbol": "ON",
      "qty": 2.6375123,
      "avgUsd": 85.34500122070312,
      "lastUsd": 85.16999816894531,
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
      "value": 200.67,
      "pnl": 0.67,
      "pnlPct": 0.33,
      "fxUsdPerEur": 1.119444727897644
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
    "lastReviewedAt": "2026-10-05T12:10:16.000Z",
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
      "reviewedAt": "2026-10-01T17:12:45.435+03:00",
      "accountingValidation": "PASS",
      "sourceLedgerBlobSha": "d6bd34fc5bc85289517fd3a0b088299d79c7dd74",
      "decision": "HOLD_ALL_FLAT",
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
      "transactionReason": null
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
            "selectionPrice": 84.88999938964844
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
              "h4": 0
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
              "h4": 0
            },
            "selectionPrice": 84.88999938964844
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
              "h4": 0
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
              "h4": 0
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
              "h4": 0
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
              "h1": 0
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
              "h1": 0
            },
            "selectionPrice": 84.88999938964844
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
              "h1": 0
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
              "h1": 0
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
              "h1": 0
            },
            "selectionPrice": 160.00999450683594,
            "triggeredAt": "2026-10-05T13:30:00.000Z"
          }
        ]
      }
    ],
    "lastUpdatedAt": "2026-10-05T14:44:11.103Z"
  }
};
