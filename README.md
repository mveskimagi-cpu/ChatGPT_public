# €1000 Quant Challenge

A paper-trading experiment with a public dashboard and one existing scheduled GitHub Actions workflow. No real orders are placed.

Dashboard: https://mveskimagi-cpu.github.io/ChatGPT_public/

## Dashboard

The overview contains portfolio value, gross return, cash, estimated return after known API costs, open positions, five recent trades and operational status. Separate hash routes provide trades, performance/risk, position strategy, daily universe selection, and model/budget details. Deep links and browser back navigation are supported. All displayed portfolio figures come from `main/data.js`.

Historical AI reports and stale macro observations are labelled as historical. Position returns are consistently measured in EUR, including FX. Historical entry levels accidentally copied as profit targets are not presented as valid exit signals.

## Automation and budget

See [quant/BUDGET.md](quant/BUDGET.md) for the current architecture, prices, enforced limits, accounting and recovery behavior. The October 2026 opening budget charge is conservatively $5.04 from the owner's account screenshot; new paid calls therefore remain blocked for that month.

`main/data.js` is the only portfolio ledger. API costs are operational expenses, separately recorded under `automationHealth.apiBudget`; they never alter simulated cash, trade history or holdings. A trade exists only after atomic commit and exact read-back. All trading and freshness safeguards remain in force.

## Validation

```sh
node --test quant/tests/*.test.js
node --check app.js
```

`quant/tests/dashboard-preview.html` provides desktop and 390px mobile frames for visual checks. Tests use fake model responses; they spend no API credits. A successful budget-blocked Actions run verifies monitoring and enforcement, not live availability of the newly configured model.
