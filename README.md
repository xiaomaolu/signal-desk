# Signal Desk

Signal Desk is a pre-trade risk desk demo for the Bitget AI x Crypto Hackathon.

It does not place live orders. The app focuses on the full decision loop a safer trading agent should show before execution:

1. Scan Bitget public market candles, with local fallback when live data is unavailable.
2. Generate a trade plan with entry, stop, targets, position size, and risk/reward.
3. Let a role-based signal council review the setup.
4. Decompose the setup into measurable evidence: momentum, liquidity, volatility, context, and stress.
5. Map the market into a regime quadrant using trend, volatility, liquidity, and context.
6. Replay the plan across recent candle windows to reveal win rate, median outcome, and worst path.
7. Run scenario stress tests and decide whether the Trade Gate allows execution.
8. Run a paper trade simulation only when the gate permits it.
9. Record the agent's reasoning and outcome in a decision log.

The interface supports English and Chinese from the language switch in the left sidebar.

Market OHLCV candles and order book depth are loaded from Bitget's public spot market APIs when available:

`GET https://api.bitget.com/api/v2/spot/market/candles`

`GET https://api.bitget.com/api/v2/spot/market/orderbook`

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
4. Review the generated plan, Signal Council votes, Trade Gate, and Stress Tape.
5. Check the Edge Decomposer and Reality Harness to see why the setup is or is not attractive.
6. Click **Run Paper Trade**.
7. If the gate allows it, watch the paper order appear in the blotter and the decision log update.

## Hackathon Positioning

Track: Trading Agent

Pitch: A pre-trade risk committee that can veto weak crypto trades before execution.

Signal Desk is not a generic AI trading chatbot. It behaves like a small risk committee: a signal council can approve, caution, or veto a setup before paper execution.

## Requirement Fit

This MVP is aligned with the Bitget AI x Crypto Hackathon theme because it demonstrates an AI-style trading agent workflow:

- Market perception: Bitget public OHLCV candle data with automatic refresh.
- Order book pulse: Bid/ask depth, spread, and imbalance from Bitget public depth data.
- Context feed: Best-effort public crypto headline feed with explicit fallback state.
- Regime map: A two-axis market state visualization derived from loaded candles, book depth, and context score.
- Risk radar: Spread, depth balance, volume pulse, and range heat scored from live-derived data.
- Reasoning: Signal interpretation, thesis generation, and risk/reward calculation.
- Planning: Entry, stop, targets, and position sizing.
- Governance: Momentum, risk, liquidity, and context reviewers vote on the setup.
- Edge decomposer: The plan is broken into momentum, liquidity, volatility, context, and stress evidence.
- Reality harness: The current setup is replayed across recent OHLCV windows, showing win rate, median R, and worst path.
- Pre-trade gate: The Trade Gate can block weak setups before simulation.
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
- Execution simulation: Paper trade blotter with take-profit, stop-loss, and time-exit outcomes.
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

- Add Bitget order book depth, funding, and derivatives markets.
- Add live news, macro calendar, and sentiment inputs.
- Add an LLM reasoning layer with Qwen or OpenAI.
- Add strategy backtesting across historical candles.
- Add optional Bitget API execution after explicit user approval.
