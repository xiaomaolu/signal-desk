# Signal Desk

Signal Desk is an AI trading arena demo for the Bitget AI x Crypto Hackathon.

It does not place live orders. The app focuses on the full decision loop a trading agent should show before execution and while a paper position is live:

1. Scan Bitget USDT-M futures ticker, candles, and depth, with local fallback when live data is unavailable.
2. Let strategy agents debate the setup: Trend Hunter, Mean Reversion, Breakout Scout, and Risk Officer.
3. Generate a trade plan with entry, stop, targets, position size, and risk/reward.
4. Show what would make the agent change its mind before the trade is deployed.
5. Deploy a live paper position when the Trade Gate allows it, then update mark price and unrealized PnL from market refreshes.
6. Decompose the setup into measurable evidence: momentum, liquidity, volatility, context, and stress.
7. Replay the plan across recent candle windows to reveal win rate, median outcome, and worst path.
8. Record the agent's reasoning, thesis changes, and outcomes in a timeline and decision log.

The interface supports English and Chinese from the language switch in the left sidebar.

Market ticker price, OHLCV candles, and order book depth are loaded from Bitget's public USDT-M futures APIs when available:

`GET https://api.bitget.com/api/v2/mix/market/candles`

`GET https://api.bitget.com/api/v2/mix/market/ticker`

`GET https://api.bitget.com/api/v2/mix/market/merge-depth`

The header price uses the ticker endpoint so it tracks the latest public futures quote more closely. Candles are still used for charting, timeframe analysis, and replay logic, because the latest candle close can lag the exchange's visible last traded price.

The context feed attempts to load public crypto headlines from CryptoCompare's public news endpoint:

`GET https://min-api.cryptocompare.com/data/v2/news/`

If the browser blocks the request or the network is unavailable, the app falls back to local simulated candles and shows the fallback state in the price panel.
If public headlines are blocked by the browser or network, the app marks the context layer as fallback and uses conservative placeholder context instead of pretending that news is live.

During automatic refresh, the desk preserves the current analysis instead of resetting the plan. If a refresh fails after live data has already loaded for the same pair/timeframe, the UI keeps the previous Bitget snapshot and marks it as stale instead of silently replacing it with simulated data. When the user changes pair or timeframe, stale data is not reused across markets.

The sidebar is independently scrollable on desktop and becomes part of the normal page flow on tablet/mobile.

## Demo Flow

Open `index.html` in a browser, then:

1. Choose a market pair and risk level.
2. Choose **EN** or **中文** if needed.
3. Click **Analyze Market**.
4. Review the Agent Trading Arena, generated plan, Trade Gate, and What Would Change My Mind panel.
5. Click **Run Paper Trade**.
6. Watch the live paper position update mark price, unrealized PnL, distance to stop, and distance to target.
7. Check the Edge Decomposer, Reality Harness, and thesis timeline to see why the setup is or is not attractive.

## Hackathon Positioning

Track: Trading Agent

Pitch: A live AI trading arena where strategy agents debate real Bitget futures data, deploy paper trades, and explain what would make them change their mind.

Signal Desk is not a generic AI trading chatbot. It behaves like a small strategy desk: multiple agents argue for trend, mean reversion, breakout, or risk control, then the app turns the consensus into a bounded paper trade.

## Requirement Fit

This MVP is aligned with the Bitget AI x Crypto Hackathon theme because it demonstrates an AI-style trading agent workflow:

- Market perception: Bitget public OHLCV candle data with automatic refresh.
- Live futures ticker: The headline price and paper-position mark use Bitget USDT-M futures ticker data.
- Agent arena: Trend Hunter, Mean Reversion, Breakout Scout, and Risk Officer debate the same market.
- Live paper position: Simulated deployment shows mark price, unrealized PnL, distance to stop, and distance to target.
- Change-my-mind map: The agent exposes invalidation, confirmation, and risk-reduction triggers.
- Thesis timeline: The agent records plan formation, paper deployment, live refreshes, and position resolution.
- Order book pulse: Bid/ask depth, spread, and imbalance from Bitget public depth data.
- Context feed: Best-effort public crypto headline feed with explicit fallback state.
- Regime map: A two-axis market state visualization derived from loaded candles, book depth, and context score.
- Risk radar: Spread, depth balance, volume pulse, and range heat scored from live-derived data.
- Reasoning: Signal interpretation, thesis generation, and risk/reward calculation.
- Planning: Entry, stop, targets, and position sizing.
- Governance: Momentum, risk, liquidity, and context reviewers vote on the setup.
- Edge decomposer: The plan is broken into momentum, liquidity, volatility, context, and stress evidence.
- Reality harness: The current setup is replayed across recent OHLCV windows, showing win rate, median R, and worst path.
- Trade gate: The Trade Gate can block weak setups or allow reduced-size paper deployment.
- Stress tests: Adverse shock, volatility expansion, and late-entry scenarios.
- Boundary ledger: The UI clearly marks which layers are live, derived, and simulated.
- Provenance tape: A compact chain showing market feed, desk logic, and execution boundaries.
- Decision passport: An auditable decision card summarizing source, gate, radar, plan, and boundaries.
- Copyable passport summary: Generates a text summary for README, community posts, or demo narration.
- Demo runway: A live five-step submission flow showing market scan, plan, gate, passport, and paper-trade completion.
- System monitor: Candle/book latency, refresh mode, and active market key for debugging data freshness.
- Market fingerprint: A visual candle matrix derived from OHLCV direction, range, and volume.
- Kill switch drill: A playful incident-response check for latency, slippage, and exposure.
- What-if shock lab: Interactive price shock, depth removal, and latency sliders that return Normal, Reduce, or Freeze.
- Execution simulation: Paper position monitor plus blotter with take-profit, stop-loss, and time-exit outcomes.
- Explainability: Decision log and post-trade outcome summary.

Important demo limits:

- This is not a guaranteed-profit simulator. Paper trades can close via stop-loss or time exit.
- The current context layer is rule-based and pair-specific; it is not yet a real-time news or macro feed.
- A stronger submission should add live news/macro inputs and show how those inputs change the agent's decision.

Typical remaining submission assets:

- Public GitHub repository.
- 3-5 minute demo video.
- Short pitch/README section explaining track, problem, solution, and future roadmap.
- Optional community post if required by the campaign rules.

## Next Steps

- Add Bitget funding and open-interest feeds.
- Add live news, macro calendar, and sentiment inputs.
- Add an LLM reasoning layer with Qwen or OpenAI.
- Add strategy backtesting across historical candles.
- Add optional Bitget API execution after explicit user approval.
