# Quant investment team v1

The existing GitHub Actions bridge now invokes a role pipeline in `decision-consumer.js`. No second scheduler, scanner, broker or portfolio is created. `main/data.js` remains the authoritative paper ledger. Scout consumes the existing daily universe selector; it includes all open positions and unexpired triggered setups. Quant and Macro are combined in v1.

## Roles and control

1. Scout: deterministic universe ranking and candidate routing; not an LLM claim of discovery.
2. Quant/Macro: separate model call, supplied momentum/volatility/correlation/regime and strategic memory. There is no live news or earnings-calendar feed; the report must identify this limitation.
3. Risk: separate model call assessing the proposal. VETO is binding and skips PM.
4. PM: separate model call selecting one action from structured evidence and reports.
5. Hard risk gate: executable checks on quotes/FX, cash, position size, expiry, entry/invalidation and completed-candle participation. A rejection becomes HOLD.
6. Critic: separate model call and context auditing the final proposal against original evidence. FAIL becomes HOLD. It cannot originate trades.

Calls share the configured model and evidence. This provides context separation, not statistical independence or calibrated success probabilities. Maximum four model calls per material review (three on Risk veto); existing suppression gates still avoid repeat calls. API errors or malformed reports fail closed before files are written. Each request has a timeout; the existing ten-minute job limit remains.

## Trading guards

- Full committed trade history is checked before decisions and after mutation: cash, quantities, oversells, duplicate records, recorded sale cost allocations, open EUR basis, realized/unrealized P/L, portfolio identity and return. Historic sale allocations remain authoritative; no historical rationale or accounting entries are fabricated.
- Trading quotes and FX must carry a provider bar timestamp within 15 minutes. Retrieval time alone does not prove freshness. Off-hours stale prices can mark existing positions, but cannot execute trades.
- BUY requires an unexpired structured setup, current price above entry and invalidation, completed candles and volume confirmation. Five-minute chart bars support five-minute rules only. Hourly crypto confirmation remains fail-closed until an appropriate series is added; spot quotes alone cannot authorize crypto execution.
- Existing EUR250 maximum BUY remains; cumulative position value after BUY may not exceed 35% of NAV. The Risk role also reviews exposure/correlation and uncertainty. Selected-candidate correlation is explicitly not represented as correlation against held positions.
- Execution price and FX are fetched again after the audit. Hard risk checks are repeated. More than 0.5% movement in either versus reviewed evidence converts to HOLD; no stale proposal is executed.
- New trade dates use Europe/Tallinn. Existing `meta.asOf`/`lastTrade` retain the UTC convention. Closed position strategy and cost allocation are preserved on sale records.
- Main must still match the checkout. Commit checks compare the exact decision base with remote main, push without force, and read back all changed ledger/decision files. Only successful commit plus exact read-back establishes a paper trade.

## Persistent evidence and dashboard

`strategyState.agentTeam` contains the latest reports, final action, hard gate and critic. `agentTeamHistory` appends each actual review with decision key, trigger key, evidence hash and base commit. Trades link to their decision key. The same reports are included in the existing decision-event/result files; these are audit artifacts, not another portfolio.

The dashboard shows each role's verdict and reason, final action, review count, Risk veto count and Critic rejection count. Reports appear after the first eligible live trigger. No synthetic historical agent votes or returns are inserted. Forward return attribution, counterfactual portfolios and agent performance calibration remain future work; veto counts are not proof of avoided losses.

Tests use injected model reports and fixtures to exercise approval, veto, critic failure, malformed/API failure, stale prices/FX, expired setup, concentration, incomplete candles and ledger reconciliation. Live model execution is verified only by an actual GitHub Actions run using its existing API secret.
