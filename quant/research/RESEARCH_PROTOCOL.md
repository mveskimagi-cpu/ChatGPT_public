# Quant research — initial evidence gate (9 Oct 2026)

Status: literature screening; NOT a completed systematic full-text review or a backtest. Research branch only. Do not change main/data.js, existing scheduled workflow, positions, or paid API usage.

## Question and scoring
Evaluate 18 papers on mean reversion, pairs trading, Kalman/state-space models and costs. Full-text scores: methods 35%, reproducibility 25%, costs 20%, architecture fit 20%; do not score unknown items as zero or infer details from abstracts.

## Confirmed findings
- Do & Faff (2012), DOI 10.1111/j.1475-6803.2012.01317.x: 1963–2009, commissions, impact and borrow fees considered; ~30 bps/month risk-adjusted for selected industry pairs; largely unprofitable after 2002. Abstract verified from Wiley.
- de Moura, Pizzinga & Zubelli (2016), DOI 10.1080/14697688.2016.1164886: Kalman-filter conditional probabilities of mean reversion; authors acknowledge limited evidence. Publisher abstract verified.
- Rad, Low & Faff (2016), DOI 10.1080/14697688.2016.1164337: historical costs and pair-selection comparisons; SciSpace metadata/abstract, full methodology still pending.

## Screening queue (18 distinct papers)
1 Gatev et al. (2006), Pairs Trading: Performance of a Relative-Value Arbitrage Rule
2 Krauss (2017), Statistical Arbitrage Pairs Trading Strategies: Review and Outlook
3 Rad, Low & Faff (2016), The Profitability of Pairs Trading Strategies
4 de Moura et al. (2016), A Pairs Trading Strategy Based on Linear State Space Models and the Kalman Filter
5 Clegg & Krauss (2018), Pairs Trading with Partial Cointegration
6 Göncü & Akyıldırım (2016), Statistical Arbitrage with Pairs Trading
7 Systematic Risk in Pairs Trading and Dynamic Parameterization (2021)
8 Zhang (2021), Pairs Trading with General State Space Models
9 Stübinger & Endres (2018), Pairs Trading with a Mean-Reverting Jump–Diffusion Model
10 Xing (2022), A Singular Stochastic Control Approach for Optimal Pairs Trading with Proportional Transaction Costs
11 Miao (2014), High Frequency and Dynamic Pairs Trading
12 Hoffman (2021), Statistical Arbitrage on the JSE Based on Partial Co-Integration
13 Liang et al. (2020), Dynamic Data Science Applications in Optimal Profit Algorithmic Trading
14 Liang et al. (2023), A Novel Fading-Memory Filter Multiple Trading Strategy
15 Krauss, Do & Huck (2017), Deep Neural Networks, Gradient-Boosted Trees, Random Forests
16 Do & Faff (2010), Does Simple Pairs Trading Still Work?
17 Do & Faff (2012), Are Pairs Trading Profits Robust to Trading Costs?
18 Elliott, Van Der Hoek & Malcolm (2005), Pairs Trading

## Provisional shadow candidates (not production-approved)
A. Kalman residual mean reversion vs simple rolling OLS/z-score; paper-only synthetic paired signals, no borrowing assumptions hidden.
B. Deterministic regime gate for existing long-only momentum signals.
C. Cost-aware no-trade threshold including commissions, FX, spreads and slippage.

## Next acceptance gate
Inspect full texts and data/code availability, score with evidence and uncertainties. Create reproducible point-in-time walk-forward tests with transaction-cost sensitivity, holdout period, drawdown, Sharpe, turnover, trade counts, multiple-testing adjustment. Reject if no net-of-cost improvement over unchanged momentum baseline. No live trading, no autonomous promotion.

Sources: https://onlinelibrary.wiley.com/doi/10.1111/j.1475-6803.2012.01317.x ; https://www.tandfonline.com/doi/full/10.1080/14697688.2016.1164886
