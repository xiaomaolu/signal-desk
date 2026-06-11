const pairProfiles = {
  BTCUSDT: {
    label: "BTC/USDT",
    base: 68420,
    bias: 0.32,
    volatility: 0.018,
    liquidity: "deep",
    news: "etfInflows",
    macroLens: {
      en: "Global liquidity proxy. Feels macro fear and rate repricing quickly.",
      zh: "全球流动性代理。对宏观恐慌和利率重定价反应很快。",
    },
    crossMarket: {
      en: "Watch how BTC trades versus Nasdaq beta when FOMC risk compresses.",
      zh: "观察 FOMC 风险升温时，BTC 相对纳指 beta 的强弱。",
    },
  },
  ETHUSDT: {
    label: "ETH/USDT",
    base: 3620,
    bias: 0.18,
    volatility: 0.022,
    liquidity: "deep",
    news: "l2Fees",
    macroLens: {
      en: "Long-duration crypto beta. Sensitive to rates, valuation, and growth sentiment.",
      zh: "偏长久期的加密 beta，对利率、估值和成长情绪更敏感。",
    },
    crossMarket: {
      en: "Useful when the market reprices duration after CPI, PCE, or dot plot changes.",
      zh: "适合观察 CPI、PCE 或点阵图变化后市场如何重定价久期资产。",
    },
  },
  SOLUSDT: {
    label: "SOL/USDT",
    base: 154.2,
    bias: 0.46,
    volatility: 0.038,
    liquidity: "strong",
    news: "developerActivity",
    macroLens: {
      en: "High-beta extension trade. Strong only when risk appetite survives the event window.",
      zh: "高 beta 延伸品种。只有在事件窗口过后风险偏好仍在时才更好做。",
    },
    crossMarket: {
      en: "Acts like speculative momentum. Best avoided during crowded macro weeks.",
      zh: "更像投机动能资产，宏观拥挤周更适合回避。",
    },
  },
  LINKUSDT: {
    label: "LINK/USDT",
    base: 18.35,
    bias: -0.14,
    volatility: 0.031,
    liquidity: "moderate",
    news: "rangeFlows",
    macroLens: {
      en: "Range-sensitive alt beta. Good for patience rules because liquidity thins first.",
      zh: "对区间更敏感的山寨 beta，适合体现“先耐心、再出手”的规则。",
    },
    crossMarket: {
      en: "A clean reminder that cross-market stress hits thinner liquidity first.",
      zh: "能直观看到跨市场压力会先打到更薄的流动性。",
    },
  },
  AAPLUSDT: {
    label: "AAPL/USDT",
    base: 205.4,
    bias: 0.14,
    volatility: 0.016,
    liquidity: "deep",
    news: "megaCapRates",
    assetClass: "stock",
    macroLens: {
      en: "Mega-cap duration proxy. Very sensitive to FOMC, real yields, and valuation compression.",
      zh: "大型科技久期代理。对 FOMC、实际利率和估值压缩非常敏感。",
    },
    crossMarket: {
      en: "Lets the desk express the same macro thesis on a cleaner rates-sensitive equity proxy.",
      zh: "让风控台能用更纯粹的利率敏感权益代理，表达同一套宏观观点。",
    },
  },
  NVDAUSDT: {
    label: "NVDA/USDT",
    base: 141.8,
    bias: 0.26,
    volatility: 0.028,
    liquidity: "strong",
    news: "aiCapex",
    assetClass: "stock",
    macroLens: {
      en: "AI leadership proxy. Strong when growth and capex survive the macro window.",
      zh: "AI 龙头代理。只有在宏观窗口过去后，成长和资本开支逻辑还成立时才更强。",
    },
    crossMarket: {
      en: "Pairs naturally with Micron earnings and semiconductor cycle confirmation.",
      zh: "和美光财报、半导体景气确认天然联动。",
    },
  },
  TSLAUSDT: {
    label: "TSLA/USDT",
    base: 179.3,
    bias: 0.24,
    volatility: 0.033,
    liquidity: "strong",
    news: "betaShock",
    assetClass: "stock",
    macroLens: {
      en: "High-beta retail favorite. Useful for testing whether the market still wants speculative duration.",
      zh: "高 beta 的散户偏爱品种，适合检验市场是否还愿意持有投机型久期资产。",
    },
    crossMarket: {
      en: "Gets hit hardest when rates rise and crowding unwinds.",
      zh: "利率上行、拥挤交易退潮时，往往最先受压。",
    },
  },
  MSFTUSDT: {
    label: "MSFT/USDT",
    base: 462.7,
    bias: 0.12,
    volatility: 0.015,
    liquidity: "deep",
    news: "cloudDefensive",
    assetClass: "stock",
    macroLens: {
      en: "Quality growth anchor. Useful when the desk wants tech beta with slightly better defensiveness.",
      zh: "高质量成长锚点。适合在还想保留科技 beta、但想更防守一点时使用。",
    },
    crossMarket: {
      en: "Helps separate AI quality leadership from the more crowded speculative names.",
      zh: "能把 AI 质量龙头和更拥挤的投机名字区分开。",
    },
  },
  METAUSDT: {
    label: "META/USDT",
    base: 701.5,
    bias: 0.18,
    volatility: 0.022,
    liquidity: "deep",
    news: "adMomentum",
    assetClass: "stock",
    macroLens: {
      en: "Ad-cycle and AI multiple proxy. Strong when growth optimism survives policy fear.",
      zh: "广告周期与 AI 估值代理。只有在政策恐惧下成长预期仍成立时才更强。",
    },
    crossMarket: {
      en: "Good read-through for whether large-cap tech breadth is broadening or narrowing.",
      zh: "适合观察大型科技的广度是在扩散还是继续收缩到少数龙头。",
    },
  },
  COINUSDT: {
    label: "COIN/USDT",
    base: 254.2,
    bias: 0.29,
    volatility: 0.036,
    liquidity: "moderate",
    news: "cryptoEquityBridge",
    assetClass: "stock",
    macroLens: {
      en: "Bridge asset between crypto and equities. Great for cross-market contagion reads.",
      zh: "连接加密和美股的桥梁资产，非常适合做跨市场传染的观察。",
    },
    crossMarket: {
      en: "Tells the desk whether crypto risk is being accepted by equity investors too.",
      zh: "能看出股票投资者是否也在接受同样的加密风险偏好。",
    },
  },
};

const godotPersona = {
  style: {
    en: "Macro event-driven trader. Policy, inflation, and catalyst dates matter more than forcing perfect timing.",
    zh: "宏观事件驱动交易者。政策、通胀和关键催化日期，比追求完美抄顶抄底更重要。",
  },
  habit: {
    en: "Risk off first after weak data, then reassess after the open. Missing a move is cheaper than getting trapped in the acceleration leg.",
    zh: "弱数据先避险，再等开盘后的消化。错过一段，也比被加速段夹住更便宜。",
  },
  focus: {
    en: "Anchors on FOMC, CPI, PCE, Micron earnings, and China fund-flow windows. Watches tech, semis, AI memory, and cross-market spillover together.",
    zh: "锚定 FOMC、CPI、PCE、美光财报和中国公募持仓窗口，把科技、半导体、AI 存储和跨市场传导放在一起看。",
  },
  link: {
    en: "Use crypto here as a live risk proxy, but keep the mental model rooted in rates, valuation, and crowded event windows.",
    zh: "这里用加密资产做实时风险代理，但心智模型仍然要落在利率、估值和拥挤事件窗口上。",
  },
};

const macroEventBoard = [
  {
    id: "cpi",
    start: "2026-06-10",
    end: "2026-06-10",
    importance: 76,
    digestion: true,
    title: { en: "US May CPI", zh: "美国 5 月 CPI" },
    impact: {
      en: "Sets the short-term tape, but the trader treats it as secondary when FOMC is next.",
      zh: "先影响短线情绪，但当 FOMC 紧随其后时，它不是最高优先级。",
    },
  },
  {
    id: "fomc",
    start: "2026-06-16",
    end: "2026-06-17",
    importance: 98,
    digestion: true,
    title: { en: "FOMC + dot plot", zh: "FOMC + 点阵图" },
    impact: {
      en: "The real pricing anchor. Rewrites rates expectations and hits tech-style valuation hardest.",
      zh: "真正的定价锚。它会重写利率预期，并直接打到科技股式估值。",
    },
  },
  {
    id: "mu",
    start: "2026-06-24",
    end: "2026-06-24",
    importance: 72,
    digestion: true,
    title: { en: "Micron earnings", zh: "美光财报" },
    impact: {
      en: "Checks whether AI memory and semiconductor demand still justify rich positioning.",
      zh: "检验 AI 存储和半导体景气度，确认高估值有没有基本面支撑。",
    },
  },
  {
    id: "pce",
    start: "2026-06-25",
    end: "2026-06-25",
    importance: 82,
    digestion: true,
    title: { en: "US May PCE", zh: "美国 5 月 PCE" },
    impact: {
      en: "Helps frame the policy path after June and can extend or reverse the post-FOMC move.",
      zh: "决定 6 月之后的政策路径，可能延续也可能反转 FOMC 后的走势。",
    },
  },
  {
    id: "china-funds",
    start: "2026-06-27",
    end: "2026-06-30",
    importance: 64,
    digestion: false,
    title: { en: "A-share half-year fund lock", zh: "A 股公募半年报持仓锁定" },
    impact: {
      en: "A reminder to watch how China positioning interacts with US macro and tech leadership.",
      zh: "提醒交易者把中国机构持仓变化和美国宏观、科技龙头走势一起看。",
    },
  },
];

const translations = {
  en: {
    brandSubtitle: "Agent trading arena for Bitget AI Hackathon",
    deskMap: "Desk Map",
    navMarket: "Market",
    navArena: "Arena",
    navBook: "Book",
    navContext: "Context",
    navRisk: "Risk",
    navPassport: "Passport",
    navOps: "Ops",
    navLog: "Log",
    market: "Market",
    pair: "Pair",
    timeframe: "Timeframe",
    tf15: "15m scalp",
    tf1h: "1h swing",
    tf4h: "4h position",
    tf1d: "1 day macro",
    risk: "Risk",
    riskPerIdea: "Risk per idea",
    agentMode: "Agent mode",
    balanced: "Balanced",
    conservative: "Conservative",
    aggressive: "Aggressive",
    analyze: "Analyze Market",
    simulate: "Run Paper Trade",
    refreshData: "Refresh Data",
    compliance: "Demo mode only. No live orders, no custody, no financial advice.",
    boundaryLedger: "Boundary Ledger",
    boundaryLive: "Live",
    boundaryDerived: "Derived",
    boundarySim: "Sim",
    boundaryLiveText: "Bitget USDT-M futures ticker, OHLCV candles, and depth when the browser can reach the API.",
    boundaryDerivedText: "Signals, council votes, and trade gate are deterministic demo logic.",
    boundarySimText: "Paper execution, stress tape, and fallback candles are simulated.",
    provenanceTape: "Provenance Tape",
    tapeMarketTitle: "Market feed",
    tapeMarketLive: "Bitget OHLCV + order book, {state}.",
    tapeMarketFallback: "Local fallback candles, {state}.",
    tapeDerivedTitle: "Desk logic",
    tapeDerivedBody: "Council votes, gate score, radar, and shock lab are deterministic demo logic.",
    tapeExecutionTitle: "Execution layer",
    tapeExecutionBody: "No live orders. Paper trades are simulated with stop, target, and time-exit rules.",
    decisionPassport: "Decision Passport",
    auditCard: "Audit card",
    issuePassport: "Issue Passport",
    copySummary: "Copy Summary",
    copied: "Copied",
    copyFallback: "Summary ready below",
    passportEmpty: "Run analysis, then issue a decision passport.",
    passPair: "Pair",
    passSource: "Data source",
    passGate: "Gate",
    passRadar: "Radar avg",
    passMacro: "Macro",
    passBoundary: "Boundary",
    passPlan: "Plan",
    passTimestamp: "Issued",
    passBoundaryText: "Live market feed, deterministic desk logic, simulated execution.",
    systemMonitor: "System Monitor",
    monitorCandles: "Candles",
    monitorTicker: "Ticker",
    monitorBook: "Book",
    monitorRefresh: "Refresh",
    monitorMarket: "Market",
    monitorAuto: "Auto 15s",
    monitorManual: "Manual",
    readiness: "Readiness",
    readinessLabel: "submission-ready MVP",
    fitTheme: "Fits Trading Agent track",
    fitDemo: "Working demo with README",
    fitData: "Uses Bitget public market data",
    fitMissing: "Still needs public repo and 3-5 min video",
    demoRunway: "Demo Runway",
    runwayTitle: "Submission flow",
    runwayMarket: "Market scan",
    runwayPlan: "Plan",
    runwayGate: "Risk gate",
    runwayPassport: "Passport",
    runwayExecution: "Paper trade",
    runwayPending: "Pending",
    runwayActive: "Active",
    runwayDone: "Done",
    runwayBlocked: "Blocked",
    heroEyebrow: "Agent Trading Arena",
    heroTitle: "AI strategy agents debate, deploy paper trades, and adapt to live Bitget futures.",
    projectInfoOpen: "Open project introduction",
    projectInfoClose: "Close project introduction",
    projectInfoEyebrow: "Project Brief",
    projectInfoTitle: "Signal Desk",
    projectInfoIntro: "Signal Desk is an AI trading arena demo for the Bitget AI x Crypto Hackathon. Multiple strategy agents debate live futures data, produce a plan, and deploy only paper trades.",
    projectInfoBoundary: "The arena uses real Bitget USDT-M futures ticker, candles, and depth when the browser can reach the public API. Agent debate, trade-gate logic, and paper-position updates are transparent demo logic.",
    projectInfoReal: "Live market layer",
    projectInfoRealBody: "Bitget futures ticker, candles, depth, and best-effort public headlines.",
    projectInfoDemo: "Demo boundary",
    projectInfoDemoBody: "No live orders, no custody, no financial advice. All positions are paper simulations.",
    projectInfoUnique: "Trading-native workflow",
    projectInfoUniqueBody: "Strategy-agent battle, live paper position, change-my-mind map, thesis timeline, Trade Gate, and Decision Passport.",
    projectInfoNote: "The goal is not to claim the agent always wins, but to show how a trading agent debates a setup, deploys a bounded paper trade, adapts to live ticks, and explains what would invalidate the thesis.",
    agent: "Agent",
    confidence: "Confidence",
    sessionPnl: "Session PnL",
    liveSimulation: "Live Simulation",
    agentArena: "Agent Trading Arena",
    arenaTitle: "Strategy desk battle",
    arenaEmpty: "Run analysis to let strategy agents debate this market.",
    arenaConsensus: "Consensus",
    arenaLong: "Long bias",
    arenaShort: "Short bias",
    arenaWait: "Wait",
    arenaScore: "Arena score",
    trendHunter: "Trend Hunter",
    meanReversion: "Mean Reversion",
    breakoutScout: "Breakout Scout",
    riskOfficer: "Risk Officer",
    trendHunterLong: "Slope and current price favor continuation.",
    trendHunterShort: "Slope and current price favor downside continuation.",
    trendHunterWait: "Trend lacks clean follow-through.",
    meanReversionLong: "Price is near the lower range; bounce risk is attractive.",
    meanReversionShort: "Price is near the upper range; fade risk is attractive.",
    meanReversionWait: "Price is too centered for a clean mean-reversion bet.",
    breakoutScoutLong: "Recent high is close; a breakout plan has room.",
    breakoutScoutShort: "Recent low is close; breakdown continuation is live.",
    breakoutScoutWait: "No decisive range break yet.",
    riskOfficerLong: "Risk can be defined with a valid stop.",
    riskOfficerShort: "Downside plan has a defined invalidation.",
    riskOfficerWait: "Risk/reward or volatility blocks deployment.",
    livePosition: "Live Paper Position",
    positionIdle: "No active deployment",
    positionActive: "Paper trade live",
    positionClosed: "Paper trade closed",
    markPrice: "Mark",
    unrealizedPnl: "Unrealized PnL",
    distanceToStop: "To stop",
    distanceToTarget: "To target",
    noPositionBody: "Deploy a paper trade to see live PnL react to Bitget futures ticks.",
    changeMind: "What Would Change My Mind",
    invalidationMap: "Invalidation map",
    mindEmpty: "Run analysis to see the exact market conditions that would flip the agent.",
    mindStop: "Invalidation",
    mindTarget: "Confirmation",
    mindReduce: "Reduce size",
    mindWait: "Wait trigger",
    mindStopLong: "Flip out if price loses {price}.",
    mindStopShort: "Flip out if price reclaims {price}.",
    mindTargetLong: "Raise confidence if price accepts above {price}.",
    mindTargetShort: "Raise confidence if price accepts below {price}.",
    mindReduceBody: "Reduce if spread widens or volatility expands before entry.",
    mindWaitBody: "Stay flat until price escapes the recent {low} - {high} range.",
    thesisTimeline: "Trade Thesis Timeline",
    adaptiveReasoning: "Adaptive reasoning",
    timelineEmpty: "The agent has not formed a thesis yet.",
    timelineScan: "Market scan",
    timelinePlan: "Plan formed",
    timelineDeploy: "Paper deployment",
    timelineRefresh: "Live refresh",
    timelineClose: "Position resolved",
    timelineScanBody: "{pair} loaded from Bitget futures. Arena is waiting for a trading thesis.",
    timelinePlanBody: "{side} thesis at {entry} with {confidence}% confidence. Arena consensus: {consensus}.",
    timelineDeployBody: "Paper agent deployed {side} at {entry}; live PnL now updates with market ticks.",
    timelineRefreshBody: "Mark {price}; thesis is {state}.",
    timelineCloseBody: "Paper position closed via {exitReason} at {exit}.",
    thesisHealthy: "intact",
    thesisThreatened: "under pressure",
    marketFingerprint: "Market Fingerprint",
    candleMatrix: "Candle matrix",
    orderBookPulse: "Order Book Pulse",
    depthImbalance: "Depth imbalance",
    bidDepth: "Bid depth",
    askDepth: "Ask depth",
    spread: "Spread",
    imbalance: "Imbalance",
    bookLive: "Book live",
    bookUnavailable: "Book unavailable",
    contextFeed: "Context Feed",
    headlineTape: "Headline tape",
    personaEyebrow: "Embedded Trader DNA",
    personaTitle: "Godot-style playbook",
    personaStyle: "Core style",
    personaHabit: "Default habit",
    personaFocus: "Event focus",
    personaLink: "How it maps here",
    personaPairLens: "Pair lens",
    personaCrossMarket: "Cross-market note",
    macroCalendar: "Macro Event Calendar",
    macroTitle: "Avoid the acceleration leg",
    macroPriority: "Priority",
    macroWindowLive: "Live window",
    macroWindowNext: "Next window",
    macroWindowPast: "Recent window",
    macroToday: "today",
    macroInDays: "in {days}d",
    macroDaysAgo: "{days}d ago",
    macroDigest: "Wait for market digestion after release.",
    macroDirect: "Can trade normally if price and liquidity stay stable.",
    macroRiskOn: "Event-light window",
    macroRiskTight: "Caution window",
    macroRiskOff: "High-risk event window",
    macroDeskLead: "Desk lead",
    macroDeskRisk: "Desk risk",
    macroScoreLabel: "Macro pressure",
    macroPassport: "Macro stance",
    macroReasonFomc: "FOMC risk is close enough that the desk refuses to overreact to lower-tier prints.",
    macroReasonNear: "A major macro event is too close. Size down or wait for the first reaction to clear.",
    macroReasonRecent: "The event just passed. Let the opening impulse settle before upgrading confidence.",
    macroReasonClear: "No immediate macro catalyst dominates the next few sessions.",
    contextLive: "News live",
    contextFallback: "Fallback context",
    contextLoading: "Loading context",
    contextScore: "Context score",
    contextEvents: "Events",
    contextSourceNote: "Best-effort public crypto news feed. Headlines are read-only context, not trading signals by themselves.",
    fallbackHeadline1: "BTC and ETH flows remain the primary driver for broad crypto risk appetite.",
    fallbackHeadline2: "Altcoin beta remains sensitive to liquidity shifts and fast leverage resets.",
    fallbackHeadline3: "Desk keeps context cautious when live news cannot be reached from the browser.",
    stockFallbackHeadline1: "Mega-cap tech remains highly sensitive to rates repricing around FOMC and inflation data.",
    stockFallbackHeadline2: "Semis and AI leaders need earnings and capex follow-through to defend rich multiples.",
    stockFallbackHeadline3: "Desk treats stock-perp setups as macro proxies first, not pure chart trades.",
    regimeMap: "Regime Map",
    regimeTrend: "Trend",
    regimeVol: "Volatility",
    regimeLiquidity: "Liquidity",
    regimeContext: "Context",
    regimeCalmUptrend: "Calm uptrend",
    regimeHotMomentum: "Hot momentum",
    regimeMeanRevert: "Mean reversion",
    regimeRiskOff: "Risk-off chop",
    regimeNoteCalmUptrend: "Trend is constructive while volatility remains contained.",
    regimeNoteHotMomentum: "Momentum is strong, but volatility is crowding the setup.",
    regimeNoteMeanRevert: "Market sits near the middle; avoid forcing direction.",
    regimeNoteRiskOff: "Volatility and weak context argue for patience.",
    riskRadar: "Risk radar",
    radarSpread: "Spread",
    radarDepth: "Depth",
    radarVolume: "Volume",
    radarRange: "Range",
    trend: "Trend",
    volatility: "Volatility",
    liquidity: "Liquidity",
    newsPulse: "Context layer",
    generatedPlan: "Generated Plan",
    entry: "Entry",
    stop: "Stop",
    target1: "Target 1",
    target2: "Target 2",
    positionSize: "Position size",
    riskReward: "Risk / reward",
    agentThesis: "Agent thesis",
    paperOrders: "Paper Orders",
    simulationBlotter: "Simulation blotter",
    reset: "Reset",
    time: "Time",
    side: "Side",
    exit: "Exit",
    pnl: "PnL",
    noTrades: "No paper trades yet.",
    agentMemory: "Agent Memory",
    decisionLog: "Decision log",
    ready: "Ready",
    analyzing: "Analyzing",
    watching: "Watching",
    simulating: "Simulating",
    waitingScan: "Agent is waiting for a market scan.",
    bitgetLive: "Bitget futures live",
    simulated: "Simulated",
    loadingData: "Loading data",
    fallbackData: "Fallback data",
    staleData: "Stale live data",
    updated: "Updated {time}",
    awaitingAnalysis: "Awaiting analysis",
    standBy: "Stand by",
    waiting: "Waiting",
    noTrade: "No trade",
    longSetup: "LONG setup",
    shortSetup: "SHORT setup",
    neutralRange: "Neutral range",
    bullishMomentum: "Bullish momentum",
    bearishPressure: "Bearish pressure",
    elevated: "Elevated",
    normal: "Normal",
    deep: "Deep",
    strong: "Strong",
    moderate: "Moderate",
    etfInflows: "ETF inflows steady",
    l2Fees: "L2 fees cooling",
    developerActivity: "Developer activity rising",
    rangeFlows: "Range-bound flows",
    megaCapRates: "Mega-cap rates repricing",
    aiCapex: "AI capex still in focus",
    betaShock: "High-beta equity stress",
    cloudDefensive: "Cloud leadership holding up",
    adMomentum: "Ad and AI momentum mixed",
    cryptoEquityBridge: "Crypto-equity bridge active",
    noPlanThesis: "Choose a pair and run analysis to generate a trade plan with risk controls.",
    waitThesis: "{pair} is not offering enough asymmetry. The context layer marks {news}, but price is still inside the recent range between {low} and {high}. Best action: wait for a breakout or reclaim.",
    tradeThesis: "{pair} is showing {direction} with {liquidity} liquidity. The context layer marks {news}. The plan uses a defined stop and staged targets before any live execution is considered.",
    upside: "upside continuation",
    downside: "downside continuation",
    planGeneratedTitle: "{side} plan generated",
    planGeneratedBody: "Scanned {pair} on {timeframe}. Confidence {confidence}%. Risk budget {risk}% of demo equity.",
    tradeSkippedTitle: "Trade skipped",
    tradeSkippedBody: "The agent refused to force a setup because the expected reward did not clear the risk filter.",
    gateBlockedTitle: "Blocked by Trade Gate",
    gateBlockedBody: "The risk desk vetoed execution. Fix the setup or reduce risk before simulating.",
    tradeClosedTitle: "Paper trade closed",
    tradeClosedBody: "{side} {pair} exited at {exit} via {exitReason}, with {result} of {pnl}.",
    takeProfit: "take-profit",
    stopLoss: "stop-loss",
    timeExit: "time exit",
    profit: "profit",
    loss: "loss",
    resetTitle: "Session reset",
    resetBody: "Cleared paper orders and reset demo PnL.",
    timeframeChangedTitle: "Timeframe changed",
    timeframeChangedBody: "Agent lens switched to {timeframe}. Run analysis to refresh the plan.",
    dataLoadedTitle: "Bitget data loaded",
    dataLoadedBody: "Pulled {count} candles for {pair} from Bitget public market data.",
    dataFallbackTitle: "Using fallback data",
    dataFallbackBody: "Live Bitget candles were unavailable, so the demo switched to local simulated candles.",
    dataStaleTitle: "Keeping last live data",
    dataStaleBody: "Refresh failed, so the desk kept the previous Bitget snapshot and marked it stale.",
    contextLoadedTitle: "Context feed loaded",
    contextLoadedBody: "Pulled {count} public crypto headlines for the context layer.",
    contextFallbackTitle: "Using fallback context",
    contextFallbackBody: "Live headlines were unavailable, so the desk marked context as fallback.",
    tradeGate: "Trade Gate",
    signalCouncil: "Signal Council",
    roleVotes: "Role votes",
    edgeDecomposer: "Edge Decomposer",
    evidenceStack: "Evidence stack",
    edgeEmpty: "Run analysis to decompose the setup into measurable evidence.",
    edgeMomentum: "Momentum edge",
    edgeLiquidity: "Liquidity edge",
    edgeVolatility: "Volatility edge",
    edgeContext: "Context edge",
    edgeMacro: "Macro discipline",
    edgeStress: "Stress edge",
    edgeMomentumBody: "Recent slope versus the selected timeframe baseline.",
    edgeLiquidityBody: "Order book spread, depth balance, and volume participation.",
    edgeVolatilityBody: "Range heat and stop distance pressure.",
    edgeContextBody: "Best-effort public headlines plus fallback context when news cannot load.",
    edgeMacroBody: "Calendar pressure, event hierarchy, and patience after data releases.",
    edgeStressBody: "Scenario tests and execution incident sensitivity.",
    realityHarness: "Reality Harness",
    rollingReplay: "Rolling replay",
    harnessEmpty: "Run analysis to replay the plan across recent candle windows.",
    harnessWinRate: "Win rate",
    harnessWorst: "Worst path",
    harnessMedian: "Median PnL",
    harnessWindows: "Windows",
    harnessLiveNote: "Replay uses the latest loaded OHLCV windows. Execution is still simulated.",
    stressTape: "Stress Tape",
    scenarioTests: "Scenario tests",
    gateReasonEmpty: "Run analysis to let the desk decide whether this trade is allowed.",
    noDecision: "No decision",
    allowTrade: "Allow trade",
    cautionTrade: "Caution",
    vetoTrade: "Veto",
    gateAllow: "The desk allows the plan because signal quality, risk/reward, stress tests, and calendar timing are aligned.",
    gateCaution: "The desk allows only a reduced-size paper trade. Macro timing or another reviewer raised concerns.",
    gateVeto: "The desk blocks this trade. The setup does not survive the risk gate or the event window.",
    momentumReviewer: "Momentum",
    riskReviewer: "Risk",
    liquidityReviewer: "Liquidity",
    macroReviewer: "Context",
    calendarReviewer: "Calendar",
    approve: "Approve",
    caution: "Caution",
    veto: "Veto",
    voteMomentumOk: "Trend and recent slope support the proposed direction.",
    voteMomentumBad: "Momentum does not confirm the proposed direction.",
    voteRiskOk: "Risk/reward clears the desk minimum.",
    voteRiskBad: "Reward does not compensate for stop distance.",
    voteLiquidityOk: "Liquidity profile can absorb a demo entry.",
    voteLiquidityBad: "Liquidity profile is thin for this setup.",
    voteContextOk: "Context layer does not conflict with the plan.",
    voteContextBad: "Context layer is not supportive enough.",
    voteCalendarOk: "No dominant event window is forcing the desk to stay defensive.",
    voteCalendarCaution: "A macro catalyst is close. The desk prefers smaller size or patience.",
    voteCalendarBad: "FOMC-level event pressure is too high for clean deployment.",
    shockDown: "Adverse shock",
    volatilityExpansion: "Volatility expansion",
    lateEntry: "Late entry",
    pass: "Pass",
    watch: "Watch",
    fail: "Fail",
    stressShockBody: "Tests whether the stop survives an immediate adverse move.",
    stressVolBody: "Checks whether wider volatility breaks the risk budget.",
    stressLateBody: "Simulates chasing after a worse entry.",
    killSwitch: "Kill Switch Drill",
    killTitle: "Run an execution incident drill",
    runDrill: "Run Drill",
    drillLatency: "Latency",
    drillSlippage: "Slippage",
    drillExposure: "Exposure",
    drillAction: "Action",
    drillPass: "Normal",
    drillWatch: "Reduce",
    drillFail: "Freeze",
    drillLoggedTitle: "Kill switch drill complete",
    drillLoggedBody: "Execution safety check returned {action}: latency {latency}ms, slippage {slippage}bps, exposure {exposure}%.",
    shockMove: "Price shock",
    shockDepth: "Depth removed",
    shockLatency: "Latency spike",
    shockVerdict: "Verdict",
    shockNotes: "Desk note",
    shockNormal: "Normal",
    shockReduce: "Reduce",
    shockFreeze: "Freeze",
    shockNormalNote: "Shock remains inside the demo risk envelope. Paper execution can continue.",
    shockReduceNote: "Shock is elevated. The desk would cut size and re-check order book depth.",
    shockFreezeNote: "Shock breaches limits. The desk freezes execution and waits for a fresh market read.",
  },
  zh: {
    brandSubtitle: "面向 Bitget AI 黑客松的 Agent 交易竞技场",
    deskMap: "工作台地图",
    navMarket: "市场",
    navArena: "竞技场",
    navBook: "盘口",
    navContext: "上下文",
    navRisk: "风控",
    navPassport: "护照",
    navOps: "演练",
    navLog: "日志",
    market: "市场",
    pair: "交易对",
    timeframe: "周期",
    tf15: "15分钟 短线",
    tf1h: "1小时 波段",
    tf4h: "4小时 持仓",
    tf1d: "1日 宏观",
    risk: "风险",
    riskPerIdea: "单笔风险",
    agentMode: "Agent 模式",
    balanced: "均衡",
    conservative: "保守",
    aggressive: "进取",
    analyze: "分析市场",
    simulate: "运行模拟交易",
    refreshData: "刷新数据",
    compliance: "仅演示模式。不下真实订单，不托管资产，不构成投资建议。",
    boundaryLedger: "边界账本",
    boundaryLive: "真实",
    boundaryDerived: "推导",
    boundarySim: "模拟",
    boundaryLiveText: "浏览器可访问 API 时，现价、OHLCV K 线和深度来自 Bitget USDT-M 永续公共行情。",
    boundaryDerivedText: "信号、委员会投票和交易闸门是确定性的演示逻辑。",
    boundarySimText: "模拟执行、压力测试和备用 K 线属于模拟层。",
    provenanceTape: "来源磁带",
    tapeMarketTitle: "市场数据",
    tapeMarketLive: "Bitget OHLCV + 盘口，状态：{state}。",
    tapeMarketFallback: "本地备用 K 线，状态：{state}。",
    tapeDerivedTitle: "风控逻辑",
    tapeDerivedBody: "委员会投票、闸门分数、风险雷达和冲击实验室是确定性演示逻辑。",
    tapeExecutionTitle: "执行层",
    tapeExecutionBody: "不下真实订单。模拟交易使用止损、止盈和时间退出规则。",
    decisionPassport: "决策护照",
    auditCard: "审计卡",
    issuePassport: "签发护照",
    copySummary: "复制摘要",
    copied: "已复制",
    copyFallback: "摘要已生成在下方",
    passportEmpty: "先运行分析，然后签发决策护照。",
    passPair: "交易对",
    passSource: "数据来源",
    passGate: "闸门",
    passRadar: "雷达均分",
    passMacro: "宏观",
    passBoundary: "边界",
    passPlan: "计划",
    passTimestamp: "签发时间",
    passBoundaryText: "真实市场数据、确定性风控逻辑、模拟执行。",
    systemMonitor: "系统监控",
    monitorCandles: "K线",
    monitorTicker: "现价",
    monitorBook: "盘口",
    monitorRefresh: "刷新",
    monitorMarket: "市场",
    monitorAuto: "自动15秒",
    monitorManual: "手动",
    readiness: "准备度",
    readinessLabel: "可提交 MVP",
    fitTheme: "符合 Trading Agent 赛道",
    fitDemo: "可运行 demo 与 README",
    fitData: "使用 Bitget 公共行情数据",
    fitMissing: "还需要公开仓库和 3-5 分钟视频",
    demoRunway: "演示跑道",
    runwayTitle: "提交流程",
    runwayMarket: "市场扫描",
    runwayPlan: "交易计划",
    runwayGate: "风险闸门",
    runwayPassport: "决策护照",
    runwayExecution: "模拟交易",
    runwayPending: "待处理",
    runwayActive: "进行中",
    runwayDone: "完成",
    runwayBlocked: "阻止",
    heroEyebrow: "Agent 交易竞技场",
    heroTitle: "AI 策略 Agent 会辩论、部署模拟仓位，并跟随 Bitget 永续实时调整观点。",
    projectInfoOpen: "打开项目介绍",
    projectInfoClose: "关闭项目介绍",
    projectInfoEyebrow: "项目简介",
    projectInfoTitle: "Signal Desk",
    projectInfoIntro: "Signal Desk 是一个面向 Bitget AI x Crypto Hackathon 的 AI 交易竞技场 Demo。多个策略 Agent 会围绕实时永续行情辩论、生成计划，并只部署模拟交易。",
    projectInfoBoundary: "浏览器可访问公共接口时，竞技场会使用真实 Bitget USDT-M 永续现价、K 线和深度数据。Agent 辩论、交易门闩逻辑和模拟仓位更新是透明的 Demo 推导层。",
    projectInfoReal: "实时市场层",
    projectInfoRealBody: "Bitget 永续现价、K 线、深度，以及尽力拉取的公开新闻标题。",
    projectInfoDemo: "Demo 边界",
    projectInfoDemoBody: "不下真实订单，不托管资产，不构成投资建议。所有仓位都是纸面模拟。",
    projectInfoUnique: "交易原生流程",
    projectInfoUniqueBody: "策略 Agent 对战、实时模拟仓位、反转条件地图、观点时间轴、交易门闩和决策护照。",
    projectInfoNote: "目标不是宣称 Agent 总能赚钱，而是展示交易 Agent 如何辩论交易、部署有边界的模拟仓位、跟随实时价格调整观点，并解释什么会让交易观点失效。",
    agent: "Agent",
    confidence: "置信度",
    sessionPnl: "本轮盈亏",
    liveSimulation: "实时模拟",
    agentArena: "Agent 交易竞技场",
    arenaTitle: "策略席位对战",
    arenaEmpty: "运行分析后，让策略 Agent 围绕当前市场辩论。",
    arenaConsensus: "共识",
    arenaLong: "偏多",
    arenaShort: "偏空",
    arenaWait: "等待",
    arenaScore: "竞技分",
    trendHunter: "趋势猎手",
    meanReversion: "均值回归",
    breakoutScout: "突破侦察",
    riskOfficer: "风险官",
    trendHunterLong: "斜率与现价支持趋势延续。",
    trendHunterShort: "斜率与现价支持下行动能延续。",
    trendHunterWait: "趋势延续不够干净。",
    meanReversionLong: "价格接近区间下沿，反弹风险回报较好。",
    meanReversionShort: "价格接近区间上沿，回落交易更有吸引力。",
    meanReversionWait: "价格处于区间中部，均值回归优势不清晰。",
    breakoutScoutLong: "价格接近近期高点，突破计划有空间。",
    breakoutScoutShort: "价格接近近期低点，跌破延续仍然存在。",
    breakoutScoutWait: "暂未出现明确区间突破。",
    riskOfficerLong: "做多风险可以用明确止损定义。",
    riskOfficerShort: "做空计划有清晰失效位。",
    riskOfficerWait: "盈亏比或波动环境阻止部署。",
    livePosition: "实时模拟仓位",
    positionIdle: "暂无部署",
    positionActive: "模拟交易运行中",
    positionClosed: "模拟交易已结束",
    markPrice: "标记价",
    unrealizedPnl: "浮动盈亏",
    distanceToStop: "距止损",
    distanceToTarget: "距目标",
    noPositionBody: "部署模拟交易后，浮动盈亏会随 Bitget 永续价格跳动。",
    changeMind: "什么会让我改变主意",
    invalidationMap: "失效条件地图",
    mindEmpty: "运行分析后，查看会让 Agent 反转观点的具体市场条件。",
    mindStop: "失效",
    mindTarget: "确认",
    mindReduce: "降仓",
    mindWait: "等待触发",
    mindStopLong: "如果价格跌破 {price}，退出多头观点。",
    mindStopShort: "如果价格重新站上 {price}，退出空头观点。",
    mindTargetLong: "如果价格接受在 {price} 上方，提高信心。",
    mindTargetShort: "如果价格接受在 {price} 下方，提高信心。",
    mindReduceBody: "如果入场前价差扩大或波动放大，降低仓位。",
    mindWaitBody: "保持空仓，直到价格脱离近期 {low} - {high} 区间。",
    thesisTimeline: "交易观点时间轴",
    adaptiveReasoning: "动态推理",
    timelineEmpty: "Agent 还没有形成交易观点。",
    timelineScan: "市场扫描",
    timelinePlan: "计划形成",
    timelineDeploy: "模拟部署",
    timelineRefresh: "实时刷新",
    timelineClose: "仓位结束",
    timelineScanBody: "{pair} 已从 Bitget 永续载入。竞技场正在等待交易观点。",
    timelinePlanBody: "{side} 观点，入场 {entry}，置信度 {confidence}%。竞技场共识：{consensus}。",
    timelineDeployBody: "模拟 Agent 已在 {entry} 部署 {side}，浮动盈亏开始跟随价格变化。",
    timelineRefreshBody: "标记价 {price}，观点状态：{state}。",
    timelineCloseBody: "模拟仓位通过{exitReason}在 {exit} 结束。",
    thesisHealthy: "仍然有效",
    thesisThreatened: "承压",
    marketFingerprint: "市场指纹",
    candleMatrix: "K 线矩阵",
    orderBookPulse: "盘口脉冲",
    depthImbalance: "深度失衡",
    bidDepth: "买盘深度",
    askDepth: "卖盘深度",
    spread: "价差",
    imbalance: "失衡",
    bookLive: "盘口实时",
    bookUnavailable: "盘口不可用",
    contextFeed: "上下文信息流",
    headlineTape: "新闻标题带",
    personaEyebrow: "嵌入式交易 DNA",
    personaTitle: "Godot 风格作战手册",
    personaStyle: "核心风格",
    personaHabit: "默认习惯",
    personaFocus: "事件关注",
    personaLink: "映射到本项目",
    personaPairLens: "当前品种视角",
    personaCrossMarket: "跨市场备注",
    macroCalendar: "宏观事件日历",
    macroTitle: "避开加速段",
    macroPriority: "优先级",
    macroWindowLive: "事件进行中",
    macroWindowNext: "下一个窗口",
    macroWindowPast: "最近窗口",
    macroToday: "今天",
    macroInDays: "{days}天后",
    macroDaysAgo: "{days}天前",
    macroDigest: "数据落地后先等市场消化。",
    macroDirect: "若价格与流动性稳定，可按常规节奏观察。",
    macroRiskOn: "事件空窗期",
    macroRiskTight: "谨慎窗口",
    macroRiskOff: "高风险事件窗",
    macroDeskLead: "当前主导",
    macroDeskRisk: "风控建议",
    macroScoreLabel: "宏观压力",
    macroPassport: "宏观立场",
    macroReasonFomc: "FOMC 风险足够近，风控台不会因为次级数据就贸然提高风险。",
    macroReasonNear: "重大宏观事件太近，应该降仓或先等第一轮反应出清。",
    macroReasonRecent: "事件刚过去，先等开盘脉冲稳定，再提高信心。",
    macroReasonClear: "未来几个交易时段没有绝对主导的宏观催化。",
    contextLive: "新闻实时",
    contextFallback: "备用上下文",
    contextLoading: "加载上下文",
    contextScore: "上下文分",
    contextEvents: "事件数",
    contextSourceNote: "尽力拉取公开加密新闻标题。标题只作为只读上下文，不单独构成交易信号。",
    fallbackHeadline1: "BTC 与 ETH 资金流仍是整体加密风险偏好的主要驱动。",
    fallbackHeadline2: "山寨币 beta 对流动性变化和杠杆快速出清较敏感。",
    fallbackHeadline3: "浏览器无法访问实时新闻时，风控台会把上下文标记为谨慎备用状态。",
    stockFallbackHeadline1: "大型科技在 FOMC 与通胀数据附近，对利率重定价非常敏感。",
    stockFallbackHeadline2: "半导体与 AI 龙头需要财报和资本开支继续验证，才能支撑高估值。",
    stockFallbackHeadline3: "风控台会先把股票永续当作宏观代理，而不是纯图形交易。",
    regimeMap: "市场状态地图",
    regimeTrend: "趋势",
    regimeVol: "波动",
    regimeLiquidity: "流动性",
    regimeContext: "上下文",
    regimeCalmUptrend: "平稳上行",
    regimeHotMomentum: "高温动能",
    regimeMeanRevert: "均值回归",
    regimeRiskOff: "避险震荡",
    regimeNoteCalmUptrend: "趋势建设性较强，同时波动仍受控。",
    regimeNoteHotMomentum: "动能较强，但波动拥挤度正在抬升。",
    regimeNoteMeanRevert: "市场处于中部区域，避免强行押方向。",
    regimeNoteRiskOff: "波动与弱上下文提示应保持耐心。",
    riskRadar: "风险雷达",
    radarSpread: "价差",
    radarDepth: "深度",
    radarVolume: "成交量",
    radarRange: "区间",
    trend: "趋势",
    volatility: "波动",
    liquidity: "流动性",
    newsPulse: "上下文层",
    generatedPlan: "生成计划",
    entry: "入场",
    stop: "止损",
    target1: "目标 1",
    target2: "目标 2",
    positionSize: "仓位大小",
    riskReward: "盈亏比",
    agentThesis: "Agent 观点",
    paperOrders: "模拟订单",
    simulationBlotter: "交易记录",
    reset: "重置",
    time: "时间",
    side: "方向",
    exit: "出场",
    pnl: "盈亏",
    noTrades: "暂无模拟交易。",
    agentMemory: "Agent 记忆",
    decisionLog: "决策日志",
    ready: "就绪",
    analyzing: "分析中",
    watching: "观察中",
    simulating: "模拟中",
    waitingScan: "Agent 正在等待市场扫描。",
    bitgetLive: "Bitget 永续实时",
    simulated: "模拟数据",
    loadingData: "加载数据中",
    fallbackData: "备用数据",
    staleData: "旧实时数据",
    updated: "更新于 {time}",
    awaitingAnalysis: "等待分析",
    standBy: "待命",
    waiting: "等待",
    noTrade: "不交易",
    longSetup: "做多计划",
    shortSetup: "做空计划",
    neutralRange: "中性震荡",
    bullishMomentum: "多头动能",
    bearishPressure: "空头压力",
    elevated: "偏高",
    normal: "正常",
    deep: "深",
    strong: "强",
    moderate: "中等",
    etfInflows: "ETF 资金流入稳定",
    l2Fees: "L2 费用回落",
    developerActivity: "开发者活跃度上升",
    rangeFlows: "资金流处于区间震荡",
    megaCapRates: "大型科技受利率重定价影响",
    aiCapex: "AI 资本开支仍是焦点",
    betaShock: "高 beta 美股承压",
    cloudDefensive: "云计算龙头更偏防守",
    adMomentum: "广告与 AI 动能分化",
    cryptoEquityBridge: "加密-股票桥梁活跃",
    noPlanThesis: "选择交易对并运行分析，生成带有风险控制的交易计划。",
    waitThesis: "{pair} 目前没有提供足够好的风险回报。上下文层标记为{news}，但价格仍在 {low} 到 {high} 的近期区间内。最佳动作：等待突破或重新站回关键位。",
    tradeThesis: "{pair} 正呈现{direction}，流动性{liquidity}。上下文层标记为{news}。计划先定义止损与分批目标，在考虑真实执行前完成风险约束。",
    upside: "上行动能延续",
    downside: "下行动能延续",
    planGeneratedTitle: "已生成{side}计划",
    planGeneratedBody: "已扫描 {pair}，周期 {timeframe}。置信度 {confidence}%。模拟账户风险预算 {risk}%。",
    tradeSkippedTitle: "跳过交易",
    tradeSkippedBody: "Agent 拒绝强行开仓，因为预期回报没有通过风险过滤器。",
    gateBlockedTitle: "交易闸门已阻止",
    gateBlockedBody: "风控台否决了执行。请修正交易设置或降低风险后再模拟。",
    tradeClosedTitle: "模拟交易已平仓",
    tradeClosedBody: "{side} {pair} 在 {exit} 通过{exitReason}出场，结果为{result} {pnl}。",
    takeProfit: "止盈",
    stopLoss: "止损",
    timeExit: "时间退出",
    profit: "盈利",
    loss: "亏损",
    resetTitle: "会话已重置",
    resetBody: "已清空模拟订单并重置演示盈亏。",
    timeframeChangedTitle: "周期已切换",
    timeframeChangedBody: "Agent 视角已切换到 {timeframe}。请重新分析以刷新计划。",
    dataLoadedTitle: "已载入 Bitget 数据",
    dataLoadedBody: "已从 Bitget 公共行情拉取 {pair} 的 {count} 根 K 线。",
    dataFallbackTitle: "正在使用备用数据",
    dataFallbackBody: "Bitget 实时 K 线暂不可用，演示已切换到本地模拟 K 线。",
    dataStaleTitle: "保留上一批实时数据",
    dataStaleBody: "刷新失败，风控台保留上一批 Bitget 快照并标记为旧数据。",
    contextLoadedTitle: "上下文信息流已载入",
    contextLoadedBody: "已为上下文层拉取 {count} 条公开加密新闻标题。",
    contextFallbackTitle: "正在使用备用上下文",
    contextFallbackBody: "实时新闻不可用，因此风控台已把上下文标记为备用状态。",
    tradeGate: "交易闸门",
    signalCouncil: "信号委员会",
    roleVotes: "角色投票",
    edgeDecomposer: "优势拆解器",
    evidenceStack: "证据堆栈",
    edgeEmpty: "运行分析后，把交易设置拆成可度量证据。",
    edgeMomentum: "动能优势",
    edgeLiquidity: "流动性优势",
    edgeVolatility: "波动优势",
    edgeContext: "上下文优势",
    edgeMacro: "宏观纪律",
    edgeStress: "压力优势",
    edgeMomentumBody: "近期斜率相对所选周期基准的强弱。",
    edgeLiquidityBody: "盘口价差、深度均衡和成交量参与度。",
    edgeVolatilityBody: "区间热度和止损距离压力。",
    edgeContextBody: "尽力拉取公开新闻标题；无法加载时使用明确标记的备用上下文。",
    edgeMacroBody: "事件日历压力、事件层级判断，以及数据后的耐心纪律。",
    edgeStressBody: "情景测试与执行事故敏感度。",
    realityHarness: "现实回放器",
    rollingReplay: "滚动回放",
    harnessEmpty: "运行分析后，在最近 K 线窗口上回放这套计划。",
    harnessWinRate: "胜率",
    harnessWorst: "最差路径",
    harnessMedian: "中位盈亏",
    harnessWindows: "窗口数",
    harnessLiveNote: "回放使用已载入的最新 OHLCV 窗口，执行层仍是模拟。",
    stressTape: "压力测试",
    scenarioTests: "情景测试",
    gateReasonEmpty: "运行分析后，风控台会判断这笔交易是否允许进入模拟执行。",
    noDecision: "暂无决策",
    allowTrade: "允许交易",
    cautionTrade: "谨慎通过",
    vetoTrade: "否决",
    gateAllow: "风控台允许该计划，因为信号质量、盈亏比、压力测试和事件时机基本一致。",
    gateCaution: "风控台仅允许降低仓位的模拟交易，因为宏观时机或其他风险角色提出了保留意见。",
    gateVeto: "风控台阻止这笔交易，因为该设置没有通过风险闸门，或正处于不适合出手的事件窗口。",
    momentumReviewer: "动能",
    riskReviewer: "风险",
    liquidityReviewer: "流动性",
    macroReviewer: "上下文",
    calendarReviewer: "日历",
    approve: "通过",
    caution: "谨慎",
    veto: "否决",
    voteMomentumOk: "趋势和近期斜率支持当前方向。",
    voteMomentumBad: "动能没有确认当前方向。",
    voteRiskOk: "盈亏比通过风控台最低要求。",
    voteRiskBad: "潜在收益不足以覆盖止损距离。",
    voteLiquidityOk: "流动性足以承载演示入场。",
    voteLiquidityBad: "该设置下流动性偏薄。",
    voteContextOk: "上下文层没有与计划冲突。",
    voteContextBad: "上下文层支持度不足。",
    voteCalendarOk: "没有主导性的事件窗口迫使风控台转入防守。",
    voteCalendarCaution: "宏观催化临近，风控台更偏向降仓或耐心等待。",
    voteCalendarBad: "FOMC 级别事件压力过高，不适合干净部署。",
    shockDown: "反向冲击",
    volatilityExpansion: "波动放大",
    lateEntry: "追价入场",
    pass: "通过",
    watch: "观察",
    fail: "失败",
    stressShockBody: "测试立即反向波动时止损是否可控。",
    stressVolBody: "检查波动扩大后是否突破风险预算。",
    stressLateBody: "模拟更差入场价格下追单的结果。",
    killSwitch: "熔断演练",
    killTitle: "运行一次执行事故演练",
    runDrill: "运行演练",
    drillLatency: "延迟",
    drillSlippage: "滑点",
    drillExposure: "暴露",
    drillAction: "动作",
    drillPass: "正常",
    drillWatch: "降仓",
    drillFail: "冻结",
    drillLoggedTitle: "熔断演练完成",
    drillLoggedBody: "执行安全检查返回 {action}：延迟 {latency}ms，滑点 {slippage}bps，暴露 {exposure}%。",
    shockMove: "价格冲击",
    shockDepth: "盘口抽走",
    shockLatency: "延迟尖峰",
    shockVerdict: "裁决",
    shockNotes: "风控备注",
    shockNormal: "正常",
    shockReduce: "降仓",
    shockFreeze: "冻结",
    shockNormalNote: "冲击仍在演示风险边界内，可以继续模拟执行。",
    shockReduceNote: "冲击偏高。风控台会降低仓位，并重新检查盘口深度。",
    shockFreezeNote: "冲击突破限制。风控台冻结执行，等待新的市场读取。",
  },
};

const state = {
  candles: [],
  orderBook: null,
  marketPrice: null,
  series: [],
  plan: null,
  orders: [],
  livePosition: null,
  arena: [],
  thesisEvents: [],
  sessionPnl: 0,
  lang: "en",
  status: "ready",
  dataSource: "simulated",
  refreshTimer: null,
  lastUpdated: null,
  activeRequestId: 0,
  marketKey: "",
  latencies: { candles: null, ticker: null, book: null },
  refreshMode: "monitorAuto",
  context: { source: "loading", headlines: [], score: 50, tone: "watch" },
  council: [],
  stress: [],
  gate: null,
  drill: null,
  passportIssued: false,
};

const $ = (id) => document.getElementById(id);
const chart = $("priceChart");
const ctx = chart.getContext("2d");

function money(value) {
  const maximumFractionDigits = Math.abs(value) > 1000 ? 2 : 4;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(value);
}

function t(key, replacements = {}) {
  const template = translations[state.lang][key] || translations.en[key] || key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    template
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "";
  } catch (error) {
    return "";
  }
}

function setTone(element, tones, activeTone) {
  if (!element) return;
  element.classList.remove(...tones);
  if (activeTone) element.classList.add(activeTone);
}

function sideLabel(side) {
  if (side === "LONG") return state.lang === "zh" ? "做多" : "LONG";
  if (side === "SHORT") return state.lang === "zh" ? "做空" : "SHORT";
  return state.lang === "zh" ? "观望" : "WAIT";
}

function timeframeLabel() {
  const value = $("timeframeSelect").value;
  if (value === "15m") return t("tf15");
  if (value === "4h") return t("tf4h");
  if (value === "1day") return t("tf1d");
  return t("tf1h");
}

function newsText(profile) {
  return state.context.headlines[0]?.title || t(profile.news);
}

function isStockPair(pairKey) {
  return pairProfiles[pairKey]?.assetClass === "stock";
}

function liquidityText(profile) {
  return t(profile.liquidity);
}

function nowTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function shortTime() {
  return new Intl.DateTimeFormat(state.lang === "zh" ? "zh-CN" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function daysFromToday(dateString) {
  const today = new Date();
  const anchor = new Date(`${dateString}T00:00:00`);
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utcAnchor = Date.UTC(anchor.getFullYear(), anchor.getMonth(), anchor.getDate());
  return Math.round((utcAnchor - utcToday) / 86400000);
}

function eventRelativeLabel(event) {
  const startDays = daysFromToday(event.start);
  const endDays = daysFromToday(event.end);
  if (startDays <= 0 && endDays >= 0) return t("macroToday");
  if (startDays > 0) return t("macroInDays", { days: startDays });
  return t("macroDaysAgo", { days: Math.abs(endDays) });
}

function macroWindow() {
  const events = macroEventBoard.map((event) => ({
    ...event,
    startDays: daysFromToday(event.start),
    endDays: daysFromToday(event.end),
  }));
  const live = events.find((event) => event.startDays <= 0 && event.endDays >= 0) || null;
  const next = events.filter((event) => event.startDays > 0).sort((a, b) => a.startDays - b.startDays)[0] || null;
  const recent = events.filter((event) => event.endDays < 0).sort((a, b) => b.endDays - a.endDays)[0] || null;
  const dominant = live || next || recent;
  let pressure = 28;
  let tone = "macroRiskOn";
  let reason = "macroReasonClear";
  if (dominant) {
    if (dominant.id === "fomc" && dominant.startDays <= 6 && dominant.endDays >= -1) {
      pressure = 92;
      tone = "macroRiskOff";
      reason = "macroReasonFomc";
    } else if (dominant.startDays >= 0 && dominant.startDays <= 3) {
      pressure = clamp(dominant.importance + 6, 38, 84);
      tone = "macroRiskTight";
      reason = "macroReasonNear";
    } else if (dominant.endDays >= -1 && dominant.endDays < 0 && dominant.digestion) {
      pressure = clamp(dominant.importance - 8, 34, 72);
      tone = "macroRiskTight";
      reason = "macroReasonRecent";
    } else {
      pressure = clamp(dominant.importance - 24, 24, 58);
      tone = "macroRiskOn";
      reason = "macroReasonClear";
    }
  }
  return { live, next, recent, dominant, pressure, tone, reason };
}

function profileCopy(copy) {
  return copy[state.lang] || copy.en;
}

function seededNoise(seed) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

function buildCandles(pairKey) {
  const profile = pairProfiles[pairKey];
  const candles = [];
  let price = profile.base;
  for (let i = 0; i < 72; i += 1) {
    const open = price;
    const wave = Math.sin(i / 7) * profile.bias * profile.volatility;
    const noise = (seededNoise(i + profile.base) - 0.5) * profile.volatility;
    price *= 1 + wave + noise;
    const close = price;
    const range = Math.abs(close - open) + open * profile.volatility * (0.35 + seededNoise(i * 3 + profile.base) * 0.9);
    const high = Math.max(open, close) + range * 0.45;
    const low = Math.min(open, close) - range * 0.45;
    const volume = 1000 + seededNoise(i * 11 + profile.base) * 5000;
    candles.push({ time: Date.now() - (72 - i) * 60000, open, high, low, close, volume });
  }
  return candles;
}

function bitgetGranularity() {
  const value = $("timeframeSelect").value;
  if (value === "15m") return "15m";
  if (value === "4h") return "4H";
  if (value === "1day") return "1D";
  return "1H";
}

async function fetchJsonWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { headers: { Accept: "application/json" }, signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

async function fetchTextWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { headers: { Accept: "application/rss+xml, text/xml, text/plain" }, signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    window.clearTimeout(timeout);
  }
}

async function timed(label, task) {
  const start = performance.now();
  try {
    return await task();
  } finally {
    state.latencies[label] = Math.round(performance.now() - start);
  }
}

async function fetchBitgetCandles(pairKey) {
  const symbol = pairKey;
  const granularity = bitgetGranularity();
  const url = `https://api.bitget.com/api/v2/mix/market/candles?symbol=${symbol}&productType=usdt-futures&granularity=${granularity}&limit=72`;
  const payload = await fetchJsonWithTimeout(url);
  if (payload.code !== "00000" || !Array.isArray(payload.data)) {
    throw new Error(payload.msg || "Unexpected Bitget payload");
  }
  const candles = payload.data
    .map((candle) => ({
      time: Number(candle[0]),
      open: Number(candle[1]),
      high: Number(candle[2]),
      low: Number(candle[3]),
      close: Number(candle[4]),
      volume: Number(candle[5]) || 0,
    }))
    .filter((candle) => [candle.open, candle.high, candle.low, candle.close].every((price) => Number.isFinite(price) && price > 0))
    .reverse();
  if (candles.length < 12) throw new Error("Not enough candle data");
  return candles;
}

async function fetchBitgetTicker(pairKey) {
  const url = `https://api.bitget.com/api/v2/mix/market/ticker?symbol=${pairKey}&productType=usdt-futures`;
  const payload = await fetchJsonWithTimeout(url);
  if (payload.code !== "00000" || !payload.data) {
    throw new Error(payload.msg || "Unexpected Bitget ticker payload");
  }
  const ticker = Array.isArray(payload.data) ? payload.data.find((item) => item.symbol === pairKey) || payload.data[0] : payload.data;
  const last =
    Number(ticker.lastPr) ||
    Number(ticker.close) ||
    Number(ticker.last) ||
    Number(ticker.price);
  const change24h = Number(ticker.change24h ?? ticker.changeUtc24h ?? ticker.priceChangePercent);
  const ts = Number(ticker.ts || ticker.systemTime || Date.now());
  if (!Number.isFinite(last) || last <= 0) throw new Error("Ticker price unavailable");
  return {
    last,
    change24h: Number.isFinite(change24h) ? change24h : null,
    ts: Number.isFinite(ts) ? ts : Date.now(),
  };
}

async function fetchBitgetOrderBook(pairKey) {
  const url = `https://api.bitget.com/api/v2/mix/market/merge-depth?symbol=${pairKey}&productType=usdt-futures&precision=scale0&limit=50`;
  const payload = await fetchJsonWithTimeout(url);
  if (payload.code !== "00000" || !payload.data) {
    throw new Error(payload.msg || "Unexpected Bitget orderbook payload");
  }
  const bids = (payload.data.bids || [])
    .map((level) => ({ price: Number(level[0]), size: Number(level[1]) }))
    .filter((level) => Number.isFinite(level.price) && Number.isFinite(level.size));
  const asks = (payload.data.asks || [])
    .map((level) => ({ price: Number(level[0]), size: Number(level[1]) }))
    .filter((level) => Number.isFinite(level.price) && Number.isFinite(level.size));
  if (!bids.length || !asks.length) throw new Error("Not enough orderbook data");
  return { bids, asks, ts: Number(payload.data.ts) || Date.now() };
}

async function fetchCryptoHeadlines() {
  const url = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=latest";
  const payload = await fetchJsonWithTimeout(url, 7000);
  const items = Array.isArray(payload.Data) ? payload.Data : [];
  const headlines = items
    .slice(0, 8)
    .map((item) => ({
      title: String(item.title || "").trim(),
      source: String(item.source_info?.name || item.source || "News").trim(),
      url: String(item.url || "").trim(),
    }))
    .filter((item) => item.title);
  if (!headlines.length) throw new Error("No headline data");
  return headlines;
}

function fallbackHeadlines() {
  const stockMode = isStockPair($("pairSelect").value);
  return [
    { title: t(stockMode ? "stockFallbackHeadline1" : "fallbackHeadline1"), source: "Signal Desk", url: "" },
    { title: t(stockMode ? "stockFallbackHeadline2" : "fallbackHeadline2"), source: "Signal Desk", url: "" },
    { title: t(stockMode ? "stockFallbackHeadline3" : "fallbackHeadline3"), source: "Signal Desk", url: "" },
  ];
}

function scoreHeadlines(headlines, source) {
  const text = headlines.map((item) => item.title.toLowerCase()).join(" ");
  const positive = ["etf", "inflow", "approval", "rally", "surge", "record", "adoption", "upgrade", "accumulate"];
  const negative = ["hack", "lawsuit", "outflow", "ban", "exploit", "liquidation", "crash", "fraud", "probe"];
  const pos = positive.reduce((sum, word) => sum + (text.includes(word) ? 1 : 0), 0);
  const neg = negative.reduce((sum, word) => sum + (text.includes(word) ? 1 : 0), 0);
  const raw = source === "live" ? 54 + pos * 8 - neg * 10 : 46;
  const score = Math.round(clamp(raw, 18, 88));
  const tone = score >= 66 ? "good" : score >= 42 ? "watch" : "bad";
  return { score, tone };
}

async function loadContextFeed({ log = false } = {}) {
  state.context = { ...state.context, source: "loading" };
  renderContextFeed();
  try {
    const headlines = await fetchCryptoHeadlines();
    const scored = scoreHeadlines(headlines, "live");
    state.context = { source: "live", headlines, ...scored };
    if (log) logDecision(t("contextLoadedTitle"), t("contextLoadedBody", { count: headlines.length }));
  } catch (error) {
    const headlines = fallbackHeadlines();
    const scored = scoreHeadlines(headlines, "fallback");
    state.context = { source: "fallback", headlines, ...scored };
    if (log) logDecision(t("contextFallbackTitle"), t("contextFallbackBody"));
  }
  renderContextFeed();
  renderRegimeMap();
  if (state.plan) {
    state.plan.thesis = buildThesis(state.plan);
    updatePlanUI();
    updateDeskUI();
  }
  renderProvenanceTape();
}

function updateDataSourceLabel() {
  const key =
    state.dataSource === "bitget"
      ? "bitgetLive"
      : state.dataSource === "loading"
        ? "loadingData"
        : state.dataSource === "stale"
          ? "staleData"
          : state.dataSource === "fallback"
            ? "fallbackData"
            : "simulated";
  const source = $("dataSource");
  source.querySelector("span").textContent = t(key);
  source.className = `source-pill source-${state.dataSource}`;
  $("lastUpdated").textContent = state.lastUpdated ? t("updated", { time: state.lastUpdated }) : "--";
  renderDemoRunway();
}

function renderBoundary() {
  const liveLabel = state.dataSource === "stale" ? "staleData" : state.dataSource === "fallback" ? "fallbackData" : "boundaryLive";
  $("boundaryList").innerHTML = [
    [liveLabel, "boundaryLiveText"],
    ["boundaryDerived", "boundaryDerivedText"],
    ["boundarySim", "boundarySimText"],
  ]
    .map(([label, body]) => `<div class="boundary-item"><strong>${t(label)}</strong><p>${t(body)}</p></div>`)
    .join("");
}

function renderProvenanceTape() {
  const marketIsLive = state.dataSource === "bitget" || state.dataSource === "stale";
  const marketBody = marketIsLive
    ? t("tapeMarketLive", { state: t(state.dataSource === "stale" ? "staleData" : "bitgetLive") })
    : t("tapeMarketFallback", { state: t(state.dataSource === "fallback" ? "fallbackData" : "simulated") });
  const steps = [
    ["tapeMarketTitle", marketBody],
    ["contextFeed", `${t(state.context.source === "live" ? "contextLive" : state.context.source === "loading" ? "contextLoading" : "contextFallback")} (${Math.round(state.context.score)}/100).`],
    ["tapeDerivedTitle", t("tapeDerivedBody")],
    ["tapeExecutionTitle", t("tapeExecutionBody")],
  ];
  $("provenanceTape").innerHTML = steps
    .map(
      ([title, body], index) => `
        <div class="tape-step">
          <div class="tape-index">${index + 1}</div>
          <div><strong>${t(title)}</strong><p>${body}</p></div>
        </div>
      `
    )
    .join("");
}

function renderSystemMonitor() {
  const items = [
    ["monitorCandles", state.latencies.candles == null ? "--" : `${state.latencies.candles}ms`],
    ["monitorTicker", state.latencies.ticker == null ? "--" : `${state.latencies.ticker}ms`],
    ["monitorBook", state.latencies.book == null ? "--" : `${state.latencies.book}ms`],
    ["monitorRefresh", t(state.refreshMode)],
    ["monitorMarket", currentMarketKey()],
  ];
  $("systemMonitor").innerHTML = items
    .map(([label, value]) => `<div class="monitor-item"><span>${t(label)}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderPersonaCard() {
  if (!$("personaCard")) return;
  const profile = pairProfiles[$("pairSelect").value];
  $("personaCard").innerHTML = [
    ["personaStyle", profileCopy(godotPersona.style)],
    ["personaHabit", profileCopy(godotPersona.habit)],
    ["personaFocus", profileCopy(godotPersona.focus)],
    ["personaLink", profileCopy(godotPersona.link)],
    ["personaPairLens", profileCopy(profile.macroLens)],
    ["personaCrossMarket", profileCopy(profile.crossMarket)],
  ]
    .map(([label, body]) => `<div class="persona-row"><span>${t(label)}</span><p>${body}</p></div>`)
    .join("");
}

function renderMacroBoard() {
  if (!$("macroBoard")) return;
  const macro = macroWindow();
  $("macroBadge").textContent = `${t(macro.tone)} · ${Math.round(macro.pressure)}`;
  $("macroBoard").innerHTML = `
    <div class="macro-summary">
      <div><span>${t("macroDeskLead")}</span><strong>${macro.dominant ? profileCopy(macro.dominant.title) : t("macroRiskOn")}</strong></div>
      <div><span>${t("macroDeskRisk")}</span><strong>${t(macro.reason)}</strong></div>
      <div><span>${t("macroScoreLabel")}</span><strong>${Math.round(macro.pressure)}/100</strong></div>
    </div>
    <div class="macro-events">
      ${macroEventBoard
        .map((event) => {
          const live = macro.live?.id === event.id;
          const next = macro.next?.id === event.id;
          const recent = macro.recent?.id === event.id;
          const stateLabel = live ? "macroWindowLive" : next ? "macroWindowNext" : recent ? "macroWindowPast" : "macroPriority";
          return `
            <div class="macro-event ${live ? "live" : next ? "next" : recent ? "recent" : ""}">
              <div class="macro-event-top">
                <strong>${profileCopy(event.title)}</strong>
                <span>${t(stateLabel)} · ${eventRelativeLabel(event)}</span>
              </div>
              <p>${profileCopy(event.impact)}</p>
              <div class="macro-event-meta">
                <em>${t("macroPriority")} ${event.importance}/100</em>
                <em>${t(event.digestion ? "macroDigest" : "macroDirect")}</em>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function currentPrice() {
  return state.marketPrice?.last || state.series.at(-1) || 0;
}

function addThesisEvent(titleKey, bodyKey, replacements = {}) {
  state.thesisEvents.unshift({ time: shortTime(), titleKey, bodyKey, replacements });
  state.thesisEvents = state.thesisEvents.slice(0, 8);
  renderThesisTimeline();
}

function renderThesisTimeline() {
  const timeline = $("thesisTimeline");
  if (!timeline) return;
  if (!state.thesisEvents.length) {
    timeline.innerHTML = `<li><span>${t("timelineScan")}</span><p>${t("timelineEmpty")}</p></li>`;
    return;
  }
  timeline.innerHTML = state.thesisEvents
    .map((event) => `<li><em>${event.time}</em><span>${t(event.titleKey)}</span><p>${t(event.bodyKey, event.replacements)}</p></li>`)
    .join("");
}

function arenaConsensus() {
  const counts = state.arena.reduce((acc, agent) => {
    acc[agent.side] = (acc[agent.side] || 0) + 1;
    return acc;
  }, {});
  if ((counts.LONG || 0) > Math.max(counts.SHORT || 0, counts.WAIT || 0)) return "LONG";
  if ((counts.SHORT || 0) > Math.max(counts.LONG || 0, counts.WAIT || 0)) return "SHORT";
  return "WAIT";
}

function consensusLabel(side) {
  if (side === "LONG") return t("arenaLong");
  if (side === "SHORT") return t("arenaShort");
  return t("arenaWait");
}

function buildArenaAgents(plan) {
  const data = state.series;
  const recent = data.slice(-18);
  const price = currentPrice();
  const first = recent[0] || data[0] || price;
  const recentHigh = Math.max(...recent, price);
  const recentLow = Math.min(...recent, price);
  const avg = average(recent.length ? recent : [price]);
  const slope = first ? (price - first) / first : 0;
  const range = Math.max(recentHigh - recentLow, price * 0.004);
  const highDistance = (recentHigh - price) / range;
  const lowDistance = (price - recentLow) / range;
  const book = bookStats();
  const spreadOk = !book || book.spreadBps < 9;
  const trendSide = Math.abs(slope) < 0.004 ? "WAIT" : slope > 0 ? "LONG" : "SHORT";
  const meanSide = lowDistance < 0.28 ? "LONG" : highDistance < 0.28 ? "SHORT" : "WAIT";
  const breakSide = highDistance < 0.18 ? "LONG" : lowDistance < 0.18 ? "SHORT" : "WAIT";
  const riskSide = plan.side !== "WAIT" && plan.rr >= 1.35 && spreadOk ? plan.side : "WAIT";
  return [
    { role: "trendHunter", side: trendSide, confidence: clamp(52 + Math.abs(slope) * 1800, 45, 92), reason: trendSide === "LONG" ? "trendHunterLong" : trendSide === "SHORT" ? "trendHunterShort" : "trendHunterWait" },
    { role: "meanReversion", side: meanSide, confidence: clamp(48 + Math.abs(price - avg) / Math.max(avg, 1) * 2600, 42, 88), reason: meanSide === "LONG" ? "meanReversionLong" : meanSide === "SHORT" ? "meanReversionShort" : "meanReversionWait" },
    { role: "breakoutScout", side: breakSide, confidence: clamp(46 + (1 - Math.min(highDistance, lowDistance)) * 42, 42, 90), reason: breakSide === "LONG" ? "breakoutScoutLong" : breakSide === "SHORT" ? "breakoutScoutShort" : "breakoutScoutWait" },
    { role: "riskOfficer", side: riskSide, confidence: clamp(plan.confidence - (spreadOk ? 0 : 16), 35, 91), reason: riskSide === "LONG" ? "riskOfficerLong" : riskSide === "SHORT" ? "riskOfficerShort" : "riskOfficerWait" },
  ];
}

function renderAgentArena() {
  const list = $("arenaAgents");
  if (!list) return;
  if (!state.plan || !state.arena.length) {
    $("arenaBadge").textContent = "--";
    list.innerHTML = `<div class="arena-empty">${t("arenaEmpty")}</div>`;
    return;
  }
  const consensus = arenaConsensus();
  const score = Math.round(average(state.arena.map((agent) => agent.confidence)));
  $("arenaBadge").textContent = `${consensusLabel(consensus)} ${score}`;
  list.innerHTML = state.arena
    .map((agent) => {
      const tone = agent.side === "LONG" ? "long" : agent.side === "SHORT" ? "short" : "wait";
      return `
        <div class="arena-agent ${tone}">
          <div>
            <strong>${t(agent.role)}</strong>
            <span>${sideLabel(agent.side)} · ${Math.round(agent.confidence)}%</span>
          </div>
          <p>${t(agent.reason)}</p>
          <i style="--agent-score:${Math.round(agent.confidence)}%"></i>
        </div>
      `;
    })
    .join("");
}

function renderMindMap() {
  const list = $("mindList");
  if (!list) return;
  if (!state.plan) {
    list.innerHTML = `<div class="mind-card"><p>${t("mindEmpty")}</p></div>`;
    return;
  }
  const recent = state.series.slice(-16);
  const low = Math.min(...recent);
  const high = Math.max(...recent);
  const plan = state.plan;
  const rows =
    plan.side === "WAIT"
      ? [["mindWait", t("mindWaitBody", { low: money(low), high: money(high) })], ["mindReduce", t("mindReduceBody")]]
      : [
          ["mindStop", t(plan.side === "LONG" ? "mindStopLong" : "mindStopShort", { price: money(plan.stop) })],
          ["mindTarget", t(plan.side === "LONG" ? "mindTargetLong" : "mindTargetShort", { price: money(plan.target1) })],
          ["mindReduce", t("mindReduceBody")],
        ];
  list.innerHTML = rows
    .map(([label, body]) => `<div class="mind-card"><span>${t(label)}</span><p>${body}</p></div>`)
    .join("");
}

function positionPnl(position, mark) {
  if (!position || !mark) return 0;
  return (position.side === "LONG" ? mark - position.entry : position.entry - mark) * position.size;
}

function updateLivePosition({ closeReason = null } = {}) {
  const position = state.livePosition;
  if (!position || position.status !== "open") return;
  const mark = currentPrice();
  if (!mark) return;
  position.mark = mark;
  position.unrealized = positionPnl(position, mark);
  const hitStop = position.side === "LONG" ? mark <= position.stop : mark >= position.stop;
  const hitTarget = position.side === "LONG" ? mark >= position.target : mark <= position.target;
  if (closeReason || hitStop || hitTarget) {
    position.status = "closed";
    position.exit = mark;
    position.exitReason = closeReason || (hitTarget ? "takeProfit" : "stopLoss");
    position.realized = position.unrealized;
    state.sessionPnl += position.realized;
    $("sessionPnl").textContent = money(state.sessionPnl);
    $("sessionPnl").className = state.sessionPnl >= 0 ? "positive" : "negative";
    state.orders.unshift({
      time: nowTime(),
      pair: pairProfiles[position.pairKey].label,
      side: position.side,
      entry: position.entry,
      exit: position.exit,
      pnl: position.realized,
      exitReason: position.exitReason,
    });
    renderOrders();
    addThesisEvent("timelineClose", "timelineCloseBody", { exitReason: t(position.exitReason), exit: money(position.exit) });
  }
}

function renderLivePosition() {
  const board = $("positionBoard");
  if (!board) return;
  const position = state.livePosition;
  if (!position) {
    $("positionTitle").textContent = t("positionIdle");
    $("positionBadge").textContent = "FLAT";
    $("positionBadge").className = "badge";
    board.innerHTML = `<div class="position-empty">${t("noPositionBody")}</div>`;
    return;
  }
  const mark = currentPrice() || position.mark || position.entry;
  const pnl = position.status === "closed" ? position.realized : positionPnl(position, mark);
  const stopDistance = Math.abs(mark - position.stop) / mark * 100;
  const targetDistance = Math.abs(position.target - mark) / mark * 100;
  $("positionTitle").textContent = t(position.status === "open" ? "positionActive" : "positionClosed");
  $("positionBadge").textContent = position.status === "open" ? sideLabel(position.side) : t(position.exitReason || "timeExit");
  $("positionBadge").className = `badge ${pnl >= 0 ? "good" : "bad"}`;
  board.innerHTML = `
    <div><span>${t("entry")}</span><strong>${money(position.entry)}</strong></div>
    <div><span>${t("markPrice")}</span><strong>${money(mark)}</strong></div>
    <div><span>${t("unrealizedPnl")}</span><strong class="${pnl >= 0 ? "positive" : "negative"}">${money(pnl)}</strong></div>
    <div><span>${t("distanceToStop")}</span><strong>${stopDistance.toFixed(2)}%</strong></div>
    <div><span>${t("distanceToTarget")}</span><strong>${targetDistance.toFixed(2)}%</strong></div>
    <div><span>${t("positionSize")}</span><strong>${position.size.toFixed(4)}</strong></div>
  `;
}

function runwayStatusClass(step) {
  if (step.blocked) return "blocked";
  if (step.done) return "done";
  if (step.active) return "active";
  return "pending";
}

function runwayStatusLabel(status) {
  if (status === "blocked") return "runwayBlocked";
  if (status === "done") return "runwayDone";
  if (status === "active") return "runwayActive";
  return "runwayPending";
}

function renderDemoRunway() {
  if (!$("demoRunway")) return;
  const marketReady = state.dataSource !== "loading" && state.series.length > 0;
  const gateDone = Boolean(state.gate);
  const gateBlocked = state.gate?.decision === "vetoTrade" || state.plan?.side === "WAIT";
  const canExecute = gateDone && !gateBlocked;
  const steps = [
    { label: "runwayMarket", done: marketReady, active: !marketReady },
    { label: "runwayPlan", done: Boolean(state.plan), active: marketReady && !state.plan },
    { label: "runwayGate", done: gateDone, active: Boolean(state.plan) && !gateDone },
    { label: "runwayPassport", done: state.passportIssued, active: gateDone && !state.passportIssued },
    { label: "runwayExecution", done: state.orders.length > 0, active: canExecute && state.passportIssued && !state.orders.length, blocked: gateBlocked },
  ];
  const completed = steps.filter((step) => step.done).length;
  $("runwayBadge").textContent = `${completed}/${steps.length}`;
  $("demoRunway").innerHTML = steps
    .map((step, index) => {
      const status = runwayStatusClass(step);
      return `
        <div class="runway-step ${status}">
          <span>${index + 1}</span>
          <div>
            <strong>${t(step.label)}</strong>
            <em>${t(runwayStatusLabel(status))}</em>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderContextFeed() {
  if (!$("contextSource")) return;
  const key = state.context.source === "live" ? "contextLive" : state.context.source === "loading" ? "contextLoading" : "contextFallback";
  $("contextSource").textContent = t(key);
  $("contextMeter").className = `context-meter ${state.context.tone || "watch"}`;
  $("contextMeter").innerHTML = `
    <div>
      <span>${t("contextScore")}</span>
      <strong>${Math.round(state.context.score)}/100</strong>
    </div>
    <div>
      <span>${t("contextEvents")}</span>
      <strong>${state.context.headlines.length}</strong>
    </div>
    <p>${t("contextSourceNote")}</p>
  `;
  $("contextFeedList").innerHTML = (state.context.headlines.length ? state.context.headlines : fallbackHeadlines())
    .slice(0, 5)
    .map((item) => {
      const url = safeExternalUrl(item.url);
      const title = escapeHtml(item.title);
      const source = escapeHtml(item.source);
      const headline = url ? `<a href="${url}" target="_blank" rel="noreferrer">${title}</a>` : `<span>${title}</span>`;
      return `<div class="headline-item">${headline}<strong>${source}</strong></div>`;
    })
    .join("");
}

function setCandles(candles) {
  state.candles = candles;
  state.series = candles.map((candle) => candle.close);
}

function candleStats() {
  const candles = state.candles.length ? state.candles : buildCandles($("pairSelect").value);
  const recent = candles.slice(-24);
  const avgRange =
    recent.reduce((sum, candle) => sum + (candle.high - candle.low) / candle.close, 0) / Math.max(1, recent.length);
  const avgVolume = recent.reduce((sum, candle) => sum + candle.volume, 0) / Math.max(1, recent.length);
  const lastVolume = recent.at(-1)?.volume || 0;
  return { avgRange, avgVolume, lastVolume };
}

function bookStats() {
  if (!state.orderBook) return null;
  const bidDepth = state.orderBook.bids.reduce((sum, level) => sum + level.price * level.size, 0);
  const askDepth = state.orderBook.asks.reduce((sum, level) => sum + level.price * level.size, 0);
  const bestBid = state.orderBook.bids[0]?.price || 0;
  const bestAsk = state.orderBook.asks[0]?.price || 0;
  const mid = bestBid && bestAsk ? (bestBid + bestAsk) / 2 : 0;
  const spreadBps = mid ? ((bestAsk - bestBid) / mid) * 10000 : 0;
  const imbalance = bidDepth + askDepth ? ((bidDepth - askDepth) / (bidDepth + askDepth)) * 100 : 0;
  return { bidDepth, askDepth, spreadBps, imbalance };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function radarScores() {
  const candles = candleStats();
  const book = bookStats();
  const spreadScore = book ? clamp(100 - book.spreadBps * 7, 0, 100) : 45;
  const depthScore = book ? clamp(100 - Math.abs(book.imbalance) * 1.35, 0, 100) : 45;
  const volumeScore = clamp((candles.lastVolume / Math.max(candles.avgVolume, 1)) * 72, 0, 100);
  const rangeScore = clamp(100 - candles.avgRange * 2200, 0, 100);
  return [
    { label: "radarSpread", score: spreadScore },
    { label: "radarDepth", score: depthScore },
    { label: "radarVolume", score: volumeScore },
    { label: "radarRange", score: rangeScore },
  ];
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function edgeScores() {
  const data = state.series;
  if (!state.plan || data.length < 12) return [];
  const first = data[0];
  const last = data.at(-1);
  const change = first ? (last - first) / first : 0;
  const planDirection = state.plan.side === "SHORT" ? -1 : state.plan.side === "LONG" ? 1 : 0;
  const directedMove = planDirection ? change * planDirection : -Math.abs(change);
  const book = bookStats();
  const stats = candleStats();
  const radar = radarScores();
  const macro = macroWindow();
  const stressPass = state.stress.filter((item) => item.status === "pass").length;
  const stressWatch = state.stress.filter((item) => item.status === "watch").length;
  const momentumScore = clamp(50 + directedMove * 1800, 0, 100);
  const liquidityScore = book
    ? clamp(84 - book.spreadBps * 4 - Math.abs(book.imbalance) * 0.65, 0, 100)
    : clamp((stats.lastVolume / Math.max(stats.avgVolume, 1)) * 64, 0, 100);
  const volatilityScore = clamp(100 - stats.avgRange * 1800, 0, 100);
  const contextScore = state.context.source === "live" ? state.context.score : Math.min(state.context.score, 52);
  const macroScore = clamp(100 - macro.pressure, 0, 100);
  const stressScore = clamp(36 + stressPass * 20 + stressWatch * 8 - state.stress.filter((item) => item.status === "fail").length * 30, 0, 100);
  return [
    { label: "edgeMomentum", body: "edgeMomentumBody", score: momentumScore },
    { label: "edgeLiquidity", body: "edgeLiquidityBody", score: liquidityScore },
    { label: "edgeVolatility", body: "edgeVolatilityBody", score: volatilityScore },
    { label: "edgeContext", body: "edgeContextBody", score: contextScore },
    { label: "edgeMacro", body: "edgeMacroBody", score: macroScore },
    { label: "edgeStress", body: "edgeStressBody", score: stressScore || average(radar.map((axis) => axis.score)) },
  ];
}

function regimeState() {
  const data = state.series.length ? state.series : buildCandles($("pairSelect").value).map((candle) => candle.close);
  const first = data[0] || 1;
  const last = data.at(-1) || first;
  const trendPct = ((last - first) / first) * 100;
  const stats = candleStats();
  const book = bookStats();
  const trendScore = clamp(50 + trendPct * 8, 0, 100);
  const volScore = clamp(stats.avgRange * 2400, 0, 100);
  const liquidityScore = book ? clamp(100 - book.spreadBps * 5 - Math.abs(book.imbalance) * 0.5, 0, 100) : 48;
  const contextScore = state.context.source === "live" ? state.context.score : Math.min(state.context.score, 52);
  const x = Math.round(trendScore);
  const y = Math.round(100 - volScore);
  const regime =
    trendScore >= 58 && volScore < 46
      ? ["regimeCalmUptrend", "regimeNoteCalmUptrend"]
      : trendScore >= 58 && volScore >= 46
        ? ["regimeHotMomentum", "regimeNoteHotMomentum"]
        : trendScore < 42 && (volScore >= 46 || contextScore < 42)
          ? ["regimeRiskOff", "regimeNoteRiskOff"]
          : ["regimeMeanRevert", "regimeNoteMeanRevert"];
  return {
    x,
    y,
    trend: Math.round(trendPct * 100) / 100,
    volatility: Math.round(volScore),
    liquidity: Math.round(liquidityScore),
    context: Math.round(contextScore),
    title: regime[0],
    note: regime[1],
  };
}

function renderRegimeMap() {
  if (!$("regimeMapPlot")) return;
  const regime = regimeState();
  $("regimeTitle").textContent = t(regime.title);
  $("regimeBadge").textContent = `${regime.x}/${regime.y}`;
  $("regimeMapPlot").style.setProperty("--x", `${regime.x}%`);
  $("regimeMapPlot").style.setProperty("--y", `${regime.y}%`);
  $("regimeMapPlot").innerHTML = `
    <div class="regime-axis x">${t("regimeTrend")}</div>
    <div class="regime-axis y">${t("regimeVol")}</div>
    <span class="regime-dot"></span>
    <div class="regime-quadrant q1">${t("regimeCalmUptrend")}</div>
    <div class="regime-quadrant q2">${t("regimeHotMomentum")}</div>
    <div class="regime-quadrant q3">${t("regimeMeanRevert")}</div>
    <div class="regime-quadrant q4">${t("regimeRiskOff")}</div>
  `;
  $("regimeReadout").innerHTML = [
    ["regimeTrend", `${regime.trend >= 0 ? "+" : ""}${regime.trend.toFixed(2)}%`],
    ["regimeVol", `${regime.volatility}/100`],
    ["regimeLiquidity", `${regime.liquidity}/100`],
    ["regimeContext", `${regime.context}/100`],
  ]
    .map(([label, value]) => `<div><span>${t(label)}</span><strong>${value}</strong></div>`)
    .join("") + `<p>${t(regime.note)}</p>`;
}

function renderEdgeDecomposer() {
  if (!$("edgeList")) return;
  const edges = edgeScores();
  if (!edges.length) {
    $("edgeBadge").textContent = "--";
    $("edgeList").innerHTML = `<div class="edge-card"><p>${t("edgeEmpty")}</p></div>`;
    return;
  }
  const composite = Math.round(average(edges.map((edge) => edge.score)));
  $("edgeBadge").textContent = `${composite}/100`;
  $("edgeList").innerHTML = edges
    .map((edge) => {
      const tone = edge.score >= 70 ? "good" : edge.score >= 45 ? "watch" : "bad";
      return `
        <div class="edge-card ${tone}">
          <div class="edge-top">
            <strong>${t(edge.label)}</strong>
            <span>${Math.round(edge.score)}/100</span>
          </div>
          <div class="edge-track"><i style="--edge:${Math.round(edge.score)}%"></i></div>
          <p>${t(edge.body)}</p>
        </div>
      `;
    })
    .join("");
}

function replayPlan(plan) {
  if (!plan || plan.side === "WAIT" || state.candles.length < 30) return null;
  const windows = [];
  const riskUnit = Math.abs(plan.entry - plan.stop) || 1;
  for (let start = Math.max(0, state.candles.length - 54); start <= state.candles.length - 10; start += 6) {
    const slice = state.candles.slice(start, start + 10);
    const entry = slice[0].close;
    const stop = plan.side === "SHORT" ? entry + riskUnit : entry - riskUnit;
    const target = plan.side === "SHORT" ? entry - riskUnit * plan.rr : entry + riskUnit * plan.rr;
    let exit = slice.at(-1).close;
    let reason = "timeExit";
    for (const candle of slice.slice(1)) {
      if (plan.side === "LONG" && candle.low <= stop) {
        exit = stop;
        reason = "stopLoss";
        break;
      }
      if (plan.side === "LONG" && candle.high >= target) {
        exit = target;
        reason = "takeProfit";
        break;
      }
      if (plan.side === "SHORT" && candle.high >= stop) {
        exit = stop;
        reason = "stopLoss";
        break;
      }
      if (plan.side === "SHORT" && candle.low <= target) {
        exit = target;
        reason = "takeProfit";
        break;
      }
    }
    const r = ((plan.side === "LONG" ? exit - entry : entry - exit) / riskUnit);
    windows.push({ r, reason });
  }
  if (!windows.length) return null;
  const sorted = [...windows].sort((a, b) => a.r - b.r);
  const wins = windows.filter((item) => item.r > 0).length;
  return {
    windows,
    winRate: (wins / windows.length) * 100,
    worst: sorted[0].r,
    median: sorted[Math.floor(sorted.length / 2)].r,
  };
}

function renderRealityHarness() {
  if (!$("harnessStats")) return;
  const replay = replayPlan(state.plan);
  if (!replay) {
    $("harnessBadge").textContent = "--";
    $("harnessStats").innerHTML = `<div class="harness-note">${t("harnessEmpty")}</div>`;
    $("harnessPaths").innerHTML = "";
    return;
  }
  $("harnessBadge").textContent = `${Math.round(replay.winRate)}%`;
  $("harnessStats").innerHTML = [
    ["harnessWinRate", `${Math.round(replay.winRate)}%`],
    ["harnessWorst", `${replay.worst.toFixed(2)}R`],
    ["harnessMedian", `${replay.median.toFixed(2)}R`],
    ["harnessWindows", replay.windows.length],
  ]
    .map(([label, value]) => `<div><span>${t(label)}</span><strong>${value}</strong></div>`)
    .join("");
  $("harnessPaths").innerHTML = `
    <div class="path-strip">
      ${replay.windows
        .map((item) => {
          const tone = item.r > 0 ? "win" : item.r < -0.8 ? "loss" : "flat";
          const height = `${Math.max(18, Math.min(100, Math.abs(item.r) * 48))}%`;
          return `<span class="${tone}" title="${item.r.toFixed(2)}R ${t(item.reason)}" style="--height:${height}"></span>`;
        })
        .join("")}
    </div>
    <p>${t("harnessLiveNote")}</p>
  `;
}

function renderFingerprint() {
  const candles = (state.candles.length ? state.candles : buildCandles($("pairSelect").value)).slice(-48);
  const maxVolume = Math.max(...candles.map((candle) => candle.volume), 1);
  const ranges = candles.map((candle) => (candle.high - candle.low) / candle.close);
  const hotRange = ranges.reduce((sum, value) => sum + value, 0) / Math.max(1, ranges.length) * 1.4;
  $("fingerprintMatrix").innerHTML = candles
    .map((candle) => {
      const move = (candle.close - candle.open) / candle.open;
      const range = (candle.high - candle.low) / candle.close;
      const direction = Math.abs(move) < 0.0008 ? "flat" : move > 0 ? "up" : "down";
      const hot = range > hotRange ? " hot" : "";
      const volume = `${Math.max(8, Math.round((candle.volume / maxVolume) * 100))}%`;
      const label = `${money(candle.open)} -> ${money(candle.close)}`;
      return `<div class="finger-cell ${direction}${hot}" title="${label}" style="--volume:${volume}"></div>`;
    })
    .join("");
}

function renderOrderBook() {
  if (!$("bookSource") || !$("riskRadar")) return;
  const stats = bookStats();
  const bar = document.querySelector(".book-bar");
  if (!stats) {
    $("bookSource").textContent = t("bookUnavailable");
    $("bidDepth").textContent = "--";
    $("askDepth").textContent = "--";
    $("spreadValue").textContent = "--";
    $("imbalanceValue").textContent = "--";
    bar.style.setProperty("--bid", "1fr");
    bar.style.setProperty("--ask", "1fr");
    renderRiskRadar();
    return;
  }
  const total = Math.max(1, stats.bidDepth + stats.askDepth);
  $("bookSource").textContent = t("bookLive");
  $("bidDepth").textContent = money(stats.bidDepth);
  $("askDepth").textContent = money(stats.askDepth);
  $("spreadValue").textContent = `${stats.spreadBps.toFixed(2)} bps`;
  $("imbalanceValue").textContent = `${stats.imbalance >= 0 ? "+" : ""}${stats.imbalance.toFixed(1)}%`;
  bar.style.setProperty("--bid", `${Math.max(8, (stats.bidDepth / total) * 100)}fr`);
  bar.style.setProperty("--ask", `${Math.max(8, (stats.askDepth / total) * 100)}fr`);
  renderRiskRadar();
}

function renderRiskRadar() {
  $("riskRadar").innerHTML = radarScores()
    .map((axis) => {
      const tone = axis.score >= 70 ? "good" : axis.score >= 42 ? "watch" : "bad";
      return `
        <div class="radar-axis ${tone}">
          <span>${t(axis.label)}</span>
          <strong>${Math.round(axis.score)}/100</strong>
          <div class="radar-track"><i style="--score:${Math.round(axis.score)}%"></i></div>
        </div>
      `;
    })
    .join("");
}

function renderPassport() {
  if (!state.plan || !state.gate) {
    $("passportCard").innerHTML = `<div class="passport-row"><span>${t("decisionPassport")}</span><strong>${t("passportEmpty")}</strong></div>`;
    $("passportSummary").value = t("passportEmpty");
    return;
  }
  const radarAvg = Math.round(radarScores().reduce((sum, axis) => sum + axis.score, 0) / 4);
  const macro = macroWindow();
  const rows = [
    ["passPair", pairProfiles[state.plan.pairKey].label],
    ["passSource", t(state.dataSource === "bitget" ? "bitgetLive" : state.dataSource === "stale" ? "staleData" : state.dataSource === "fallback" ? "fallbackData" : "simulated")],
    ["passGate", `${t(state.gate.decision)} (${state.gate.score}/100)`],
    ["passRadar", `${radarAvg}/100`],
    ["passMacro", `${t(macro.tone)} (${Math.round(macro.pressure)}/100)`],
    ["passPlan", state.plan.side === "WAIT" ? t("noTrade") : `${sideLabel(state.plan.side)} ${money(state.plan.entry)} -> ${money(state.plan.target1)}`],
    ["passBoundary", t("passBoundaryText")],
    ["passTimestamp", shortTime()],
  ];
  $("passportCard").innerHTML = rows
    .map(([label, value]) => `<div class="passport-row"><span>${t(label)}</span><strong>${value}</strong></div>`)
    .join("");
  $("passportSummary").value = passportSummary(rows);
}

function passportSummary(rows) {
  const lines = rows.map(([label, value]) => `${t(label)}: ${value}`);
  return [`Signal Desk ${t("decisionPassport")}`, ...lines].join("\n");
}

async function copyPassportSummary() {
  renderPassport();
  const text = $("passportSummary").value;
  try {
    await navigator.clipboard.writeText(text);
    $("copyPassportBtn").textContent = t("copied");
  } catch (error) {
    $("copyPassportBtn").textContent = t("copyFallback");
    $("passportSummary").focus();
    $("passportSummary").select();
  }
  window.setTimeout(() => {
    $("copyPassportBtn").textContent = t("copySummary");
  }, 1600);
}

function flashPrice() {
  const price = $("lastPrice");
  price.classList.remove("flash");
  window.requestAnimationFrame(() => price.classList.add("flash"));
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = chart.getBoundingClientRect();
  chart.width = Math.round(rect.width * dpr);
  chart.height = Math.round(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawChart() {
  resizeCanvas();
  const width = chart.clientWidth;
  const height = chart.clientHeight;
  const pad = { top: 16, right: 18, bottom: 28, left: 18 };
  const data = state.series;
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#171b21";
  ctx.fillRect(0, 0, width, height);

  if (!data.length) return;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const plotW = width - pad.left - pad.right;
  const volumeH = Math.min(64, height * 0.22);
  const plotH = height - pad.top - pad.bottom - volumeH;

  ctx.strokeStyle = "#29313b";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const y = pad.top + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  const point = (price, i) => ({
    x: pad.left + (plotW * i) / (data.length - 1),
    y: pad.top + plotH - ((price - min) / range) * plotH,
  });

  const candles = state.candles.slice(-data.length);
  const maxVolume = Math.max(...candles.map((candle) => candle.volume), 1);
  const barW = Math.max(2, plotW / data.length - 3);
  candles.forEach((candle, i) => {
    const p = point(candle.close, i);
    const vol = (candle.volume / maxVolume) * (volumeH - 10);
    ctx.fillStyle = candle.close >= candle.open ? "rgba(46, 209, 124, 0.35)" : "rgba(255, 95, 102, 0.32)";
    ctx.fillRect(p.x - barW / 2, height - pad.bottom - vol, barW, vol);
  });

  ctx.beginPath();
  data.forEach((price, i) => {
    const p = point(price, i);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.strokeStyle = "#4ed6c7";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  if (state.plan) {
    [
      { value: state.plan.entry, color: "#65a5ff", label: t("entry") },
      { value: state.plan.stop, color: "#ff5f66", label: t("stop") },
      { value: state.plan.target1, color: "#2ed17c", label: t("target1") },
    ].forEach((line) => {
      const y = pad.top + plotH - ((line.value - min) / range) * plotH;
      if (y < pad.top || y > height - pad.bottom) return;
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = line.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(width - pad.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = line.color;
      ctx.font = "700 11px Inter, system-ui, sans-serif";
      ctx.fillText(line.label, pad.left + 6, y - 6);
    });
  }
}

function setStatus(statusKey) {
  state.status = statusKey;
  $("agentStatus").textContent = t(statusKey);
}

function logDecision(title, body) {
  const item = document.createElement("li");
  item.innerHTML = `<span>${title}</span><p>${body}</p>`;
  $("decisionLog").prepend(item);
}

function buildThesis(plan) {
  const profile = pairProfiles[plan.pairKey];
  const data = state.series;
  const recent = data.slice(-16);
  const recentHigh = Math.max(...recent);
  const recentLow = Math.min(...recent);
  const context = newsText(profile);
  const macro = macroWindow();
  if (plan.side === "WAIT") {
    return `${t("waitThesis", { pair: profile.label, news: context, low: money(recentLow), high: money(recentHigh) })} ${t(macro.reason)}`;
  }
  return `${t("tradeThesis", {
    pair: profile.label,
    direction: t(plan.side === "LONG" ? "upside" : "downside"),
    liquidity: liquidityText(profile).toLowerCase(),
    news: context.toLowerCase(),
  })} ${t(macro.reason)}`;
}

function generatePlan() {
  const pairKey = $("pairSelect").value;
  const profile = pairProfiles[pairKey];
  const risk = Number($("riskSlider").value);
  const mode = $("modeSelect").value;
  const macro = macroWindow();
  const data = state.series;
  const last = state.marketPrice?.last || data.at(-1);
  const recent = data.slice(-24);
  const first = recent[0] || data[0];
  const change = first ? (last - first) / first : 0;
  const recentHigh = Math.max(...recent);
  const recentLow = Math.min(...recent);
  const fast = data.slice(-8);
  const slowAvg = average(recent);
  const fastAvg = average(fast);
  const range = Math.max(recentHigh - recentLow, last * 0.004);
  const nearHigh = (recentHigh - last) / range < 0.24;
  const nearLow = (last - recentLow) / range < 0.24;
  const momentum = fastAvg >= slowAvg;
  const macroTight = macro.pressure >= 68;
  const macroBlocked = macro.pressure >= 88;
  const bullish = (change > 0.0018 && momentum) || (nearHigh && change > -0.002);
  const bearish = (change < -0.0018 && !momentum) || (nearLow && change < 0.002);
  const quietRange = Math.abs(change) < 0.0008 && !nearHigh && !nearLow;
  let side = bullish ? "LONG" : bearish ? "SHORT" : mode === "conservative" && quietRange ? "WAIT" : momentum ? "LONG" : "SHORT";
  if (macroBlocked || (macroTight && quietRange)) side = "WAIT";
  const stats = candleStats();
  const realizedVolatility = Math.max(profile.volatility * 0.65, stats.avgRange);
  const volatility = realizedVolatility * (mode === "aggressive" ? 1.15 : mode === "conservative" ? 0.85 : 1);
  const confidencePenalty = macroBlocked ? 28 : macroTight ? 12 : macro.pressure >= 52 ? 6 : 0;
  const confidence = side === "WAIT" ? Math.max(42, 58 - Math.round(confidencePenalty / 2)) : Math.min(91, Math.round(62 + Math.abs(change) * 900 + risk * 4 - confidencePenalty));

  const entry = last;
  const stopDistance = entry * volatility * (side === "WAIT" ? 0.8 : 1.05);
  const targetDistance = stopDistance * (mode === "aggressive" ? 2.4 : mode === "conservative" ? 1.45 : 1.9);
  const stop = side === "SHORT" ? entry + stopDistance : entry - stopDistance;
  const target1 = side === "SHORT" ? entry - targetDistance : entry + targetDistance;
  const target2 = side === "SHORT" ? entry - targetDistance * 1.55 : entry + targetDistance * 1.55;
  const account = 10000;
  const riskBudget = account * (risk / 100);
  const macroSizeFactor = macroBlocked ? 0 : macroTight ? 0.45 : macro.pressure >= 52 ? 0.72 : 1;
  const size = side === "WAIT" ? 0 : (riskBudget / Math.abs(entry - stop)) * macroSizeFactor;

  state.plan = {
    pairKey,
    side,
    entry,
    stop,
    target1,
    target2,
    confidence,
    size,
    rr: Math.abs(target1 - entry) / Math.abs(entry - stop),
    thesis: "",
  };
  state.plan.thesis = buildThesis(state.plan);
  state.passportIssued = false;
  state.arena = buildArenaAgents(state.plan);

  updatePlanUI();
  updateDeskUI();
  renderAgentArena();
  renderMindMap();
  renderLivePosition();
  drawChart();
  addThesisEvent("timelinePlan", "timelinePlanBody", {
    side: sideLabel(side),
    entry: money(entry),
    confidence,
    consensus: consensusLabel(arenaConsensus()),
  });
  logDecision(
    t("planGeneratedTitle", { side: sideLabel(side) }),
    t("planGeneratedBody", { pair: profile.label, timeframe: timeframeLabel(), confidence, risk })
  );
}

function buildCouncil(plan, change) {
  const profile = pairProfiles[plan.pairKey];
  const stats = candleStats();
  const book = bookStats();
  const macro = macroWindow();
  const alignedMomentum = plan.side === "WAIT" ? false : (plan.side === "LONG" && change > 0) || (plan.side === "SHORT" && change < 0);
  const rrOk = plan.side !== "WAIT" && plan.rr >= 1.45;
  const bookOk = book ? book.spreadBps < 8 && Math.abs(book.imbalance) < 42 : false;
  const liquidityOk = bookOk || stats.lastVolume >= stats.avgVolume * 0.72 || profile.liquidity !== "moderate" || plan.confidence > 74;
  const contextVote = state.context.score >= 62 ? "approve" : state.context.score >= 38 ? "caution" : "veto";
  const calendarVote = macro.pressure >= 88 ? "veto" : macro.pressure >= 62 ? "caution" : "approve";
  return [
    {
      role: "momentumReviewer",
      vote: alignedMomentum ? "approve" : "veto",
      reason: alignedMomentum ? "voteMomentumOk" : "voteMomentumBad",
    },
    {
      role: "riskReviewer",
      vote: rrOk ? "approve" : "veto",
      reason: rrOk ? "voteRiskOk" : "voteRiskBad",
    },
    {
      role: "liquidityReviewer",
      vote: liquidityOk ? "approve" : "caution",
      reason: liquidityOk ? "voteLiquidityOk" : "voteLiquidityBad",
    },
    {
      role: "macroReviewer",
      vote: contextVote,
      reason: contextVote === "approve" ? "voteContextOk" : "voteContextBad",
    },
    {
      role: "calendarReviewer",
      vote: calendarVote,
      reason:
        calendarVote === "approve"
          ? "voteCalendarOk"
          : calendarVote === "caution"
            ? "voteCalendarCaution"
            : "voteCalendarBad",
    },
  ];
}

function buildStress(plan) {
  if (plan.side === "WAIT") {
    return [
      { name: "shockDown", status: "watch", body: "stressShockBody" },
      { name: "volatilityExpansion", status: "watch", body: "stressVolBody" },
      { name: "lateEntry", status: "watch", body: "stressLateBody" },
    ];
  }
  const shockLoss = Math.abs(plan.entry - plan.stop) * plan.size;
  const volLoss = shockLoss * (pairProfiles[plan.pairKey].volatility > 0.03 ? 1.25 : 0.85);
  const latePenalty = Math.abs(plan.target1 - plan.entry) / Math.abs(plan.entry - plan.stop);
  return [
    { name: "shockDown", status: shockLoss <= 160 ? "pass" : "fail", body: "stressShockBody" },
    { name: "volatilityExpansion", status: volLoss <= 190 ? "pass" : "watch", body: "stressVolBody" },
    { name: "lateEntry", status: latePenalty >= 1.6 ? "pass" : "watch", body: "stressLateBody" },
  ];
}

function buildGate(plan) {
  const votes = state.council;
  const stress = state.stress;
  const macro = macroWindow();
  const vetoes = votes.filter((vote) => vote.vote === "veto").length;
  const cautions = votes.filter((vote) => vote.vote === "caution").length + stress.filter((item) => item.status === "watch").length;
  const failures = stress.filter((item) => item.status === "fail").length;
  const arenaAligned = state.arena.filter((agent) => agent.side === plan.side).length >= 2;
  if (plan.side === "WAIT" || failures > 0 || macro.pressure >= 92 || (vetoes > 1 && !arenaAligned)) {
    return { decision: "vetoTrade", score: 22, reason: "gateVeto" };
  }
  if (cautions > 1 || vetoes > 0 || plan.confidence < 72 || macro.pressure >= 62) {
    return { decision: "cautionTrade", score: Math.max(44, 72 - Math.round(macro.pressure * 0.22)), reason: "gateCaution" };
  }
  return { decision: "allowTrade", score: Math.max(76, 96 - Math.round(macro.pressure * 0.18)), reason: "gateAllow" };
}

function updateDeskUI() {
  if (!state.plan) {
    state.council = [];
    state.stress = [];
    state.gate = null;
    state.arena = [];
    setTone(document.querySelector(".gate-panel"), ["good", "watch", "bad"], "");
    $("gateBadge").className = "badge";
    $("gateDecision").textContent = t("noDecision");
    $("gateBadge").textContent = "--";
    $("gateReason").textContent = t("gateReasonEmpty");
    $("gateMeter").style.width = "0%";
    $("councilList").innerHTML = emptyDeskCard(t("waitingScan"));
    $("stressList").innerHTML = emptyDeskCard(t("gateReasonEmpty"));
    renderAgentArena();
    renderMindMap();
    renderEdgeDecomposer();
    renderRealityHarness();
    renderDemoRunway();
    return;
  }

  const first = state.series[0];
  const last = state.marketPrice?.last || state.series.at(-1);
  const change = (last - first) / first;
  state.council = buildCouncil(state.plan, change);
  state.stress = buildStress(state.plan);
  state.gate = buildGate(state.plan);
  const gateTone = state.gate.decision === "allowTrade" ? "good" : state.gate.decision === "cautionTrade" ? "watch" : "bad";
  setTone(document.querySelector(".gate-panel"), ["good", "watch", "bad"], gateTone);
  $("gateBadge").className = `badge ${gateTone}`;

  $("gateDecision").textContent = t(state.gate.decision);
  $("gateBadge").textContent = `${state.gate.score}/100`;
  $("gateReason").textContent = t(state.gate.reason);
  $("gateMeter").style.width = `${state.gate.score}%`;
  $("councilList").innerHTML = state.council.map(renderVote).join("");
  $("stressList").innerHTML = state.stress.map(renderStress).join("");
  renderEdgeDecomposer();
  renderRealityHarness();
  renderDemoRunway();
}

function emptyDeskCard(text) {
  return `<div class="vote-card"><p>${text}</p></div>`;
}

function renderVote(item) {
  return `
    <div class="vote-card">
      <div class="vote-top">
        <strong>${t(item.role)}</strong>
        <span class="vote-tag ${item.vote}">${t(item.vote)}</span>
      </div>
      <p>${t(item.reason)}</p>
    </div>
  `;
}

function renderStress(item) {
  return `
    <div class="stress-card">
      <div class="stress-top">
        <strong>${t(item.name)}</strong>
        <span class="stress-tag ${item.status}">${t(item.status)}</span>
      </div>
      <p>${t(item.body)}</p>
    </div>
  `;
}

function runKillSwitchDrill() {
  const seed = Date.now() % 100000;
  const exposure = state.plan ? Math.min(18, Math.round(state.plan.size * state.plan.entry * 0.018)) : Math.round(4 + seededNoise(seed) * 8);
  const latency = Math.round(80 + seededNoise(seed + 3) * 680);
  const slippage = Math.round(2 + seededNoise(seed + 9) * 42);
  const fail = latency > 560 || slippage > 34 || exposure > 14;
  const watch = !fail && (latency > 360 || slippage > 20 || exposure > 10);
  const status = fail ? "fail" : watch ? "watch" : "pass";
  const action = fail ? "drillFail" : watch ? "drillWatch" : "drillPass";
  state.drill = { latency, slippage, exposure, status, action };
  renderDrill();
  logDecision(
    t("drillLoggedTitle"),
    t("drillLoggedBody", { action: t(action), latency, slippage, exposure })
  );
}

function renderDrill() {
  const drill = state.drill || { latency: "--", slippage: "--", exposure: "--", status: "watch", action: "drillWatch" };
  $("drillBoard").innerHTML = [
    ["drillLatency", `${drill.latency}${drill.latency === "--" ? "" : "ms"}`, drill.status],
    ["drillSlippage", `${drill.slippage}${drill.slippage === "--" ? "" : "bps"}`, drill.status],
    ["drillExposure", `${drill.exposure}${drill.exposure === "--" ? "" : "%"}`, drill.status],
    ["drillAction", t(drill.action), drill.status],
  ]
    .map(([label, value, status]) => `<div class="drill-cell ${status}"><span>${t(label)}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderShockLab() {
  const move = Number($("shockMove")?.value || 0);
  const depthRemoved = Number($("shockDepth")?.value || 0);
  const latency = Number($("shockLatency")?.value || 0);
  const book = bookStats();
  const candles = candleStats();
  const spreadPenalty = book ? Math.min(35, book.spreadBps * 2.2) : 12;
  const rangePenalty = Math.min(30, candles.avgRange * 900);
  const score = move * 4.2 + depthRemoved * 0.42 + latency * 0.035 + spreadPenalty + rangePenalty;
  const stateKey = score > 86 ? "freeze" : score > 52 ? "reduce" : "normal";
  const verdictKey = stateKey === "freeze" ? "shockFreeze" : stateKey === "reduce" ? "shockReduce" : "shockNormal";
  const noteKey = stateKey === "freeze" ? "shockFreezeNote" : stateKey === "reduce" ? "shockReduceNote" : "shockNormalNote";
  $("shockResult").className = `shock-result ${stateKey}`;
  $("shockResult").innerHTML = `
    <div><span>${t("shockVerdict")}</span><strong>${t(verdictKey)}</strong></div>
    <div><span>${t("shockNotes")}</span><p>${t(noteKey)}</p></div>
  `;
}

function updateMarketUI({ preservePlan = false } = {}) {
  const pairKey = $("pairSelect").value;
  const profile = pairProfiles[pairKey];
  if (!state.series.length) {
    setCandles(buildCandles(pairKey));
    state.dataSource = "simulated";
  }
  if (!preservePlan) {
    state.plan = null;
    state.passportIssued = false;
  }
  const first = state.series[0];
  const last = state.marketPrice?.last || state.series.at(-1);
  const change = state.marketPrice?.change24h != null ? state.marketPrice.change24h * 100 : ((last - first) / first) * 100;
  $("pairTitle").textContent = profile.label;
  $("lastPrice").textContent = money(last);
  flashPrice();
  $("priceChange").textContent = `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;
  $("priceChange").className = change >= 0 ? "positive" : "negative";
  if (preservePlan && state.plan) {
    updatePlanUI();
    updateDeskUI();
  } else {
    $("trendSignal").textContent = t("awaitingAnalysis");
    $("volatilitySignal").textContent = "--";
    $("liquiditySignal").textContent = "--";
    $("newsSignal").textContent = "--";
    $("confidenceScore").textContent = "--";
    updatePlanUI();
    updateDeskUI();
  }
  updateDataSourceLabel();
  updateLivePosition();
  renderFingerprint();
  renderOrderBook();
  renderPersonaCard();
  renderMacroBoard();
  renderRegimeMap();
  renderPassport();
  renderAgentArena();
  renderMindMap();
  renderLivePosition();
  renderThesisTimeline();
  drawChart();
}

function currentMarketKey() {
  return `${$("pairSelect").value}:${$("timeframeSelect").value}`;
}

async function loadMarketData({ log = false, preservePlan = false, allowStale = false } = {}) {
  const pairKey = $("pairSelect").value;
  const profile = pairProfiles[pairKey];
  const requestKey = currentMarketKey();
  const requestId = state.activeRequestId + 1;
  state.activeRequestId = requestId;
  state.refreshMode = log ? "monitorManual" : "monitorAuto";
  state.dataSource = "loading";
  updateDataSourceLabel();
  setStatus("analyzing");
  if (!preservePlan) {
    state.plan = null;
    state.gate = null;
    state.council = [];
    state.stress = [];
    state.arena = [];
    state.livePosition = null;
    state.thesisEvents = [];
    state.passportIssued = false;
    updatePlanUI();
    updateDeskUI();
    renderPassport();
  }
  try {
    const [candles, ticker, orderBook] = await Promise.all([
      timed("candles", () => fetchBitgetCandles(pairKey)),
      timed("ticker", () => fetchBitgetTicker(pairKey)).catch(() => null),
      timed("book", () => fetchBitgetOrderBook(pairKey)).catch(() => null),
    ]);
    if (requestId !== state.activeRequestId || requestKey !== currentMarketKey()) return;
    setCandles(candles);
    state.marketPrice = ticker;
    state.orderBook = orderBook;
    state.dataSource = "bitget";
    state.marketKey = requestKey;
    state.lastUpdated = shortTime();
    if (log) {
      logDecision(t("dataLoadedTitle"), t("dataLoadedBody", { pair: profile.label, count: state.series.length }));
    }
    if (!preservePlan && !state.thesisEvents.length) {
      addThesisEvent("timelineScan", "timelineScanBody", { pair: profile.label });
    }
    if (!log && state.livePosition?.status === "open") {
      const mark = ticker?.last || state.series.at(-1);
      const pressure =
        state.livePosition.side === "LONG"
          ? mark < state.livePosition.entry
          : mark > state.livePosition.entry;
      addThesisEvent("timelineRefresh", "timelineRefreshBody", {
        price: money(mark),
        state: t(pressure ? "thesisThreatened" : "thesisHealthy"),
      });
    }
  } catch (error) {
    if (requestId !== state.activeRequestId || requestKey !== currentMarketKey()) return;
    if (allowStale && state.candles.length && state.marketKey === requestKey) {
      state.dataSource = "stale";
      if (log) {
        logDecision(t("dataStaleTitle"), t("dataStaleBody"));
      }
    } else {
      setCandles(buildCandles(pairKey));
      state.marketPrice = null;
      state.orderBook = null;
      state.dataSource = "fallback";
      state.marketKey = requestKey;
      state.lastUpdated = shortTime();
      if (log) {
        logDecision(t("dataFallbackTitle"), t("dataFallbackBody"));
      }
    }
  }
  loadContextFeed({ log });
  updateMarketUI({ preservePlan });
  renderBoundary();
  renderProvenanceTape();
  renderSystemMonitor();
  setStatus("ready");
}

function startAutoRefresh() {
  if (state.refreshTimer) window.clearInterval(state.refreshTimer);
  state.refreshTimer = window.setInterval(() => {
    loadMarketData({ log: false, preservePlan: true, allowStale: true });
  }, 15000);
}

function updatePlanUI() {
  const plan = state.plan;
  const planPanel = document.querySelector(".plan-panel");
  const confidenceCell = $("confidenceScore")?.parentElement;
  if (!plan) {
    setTone(planPanel, ["good", "watch", "bad"], "");
    setTone($("planBadge"), ["good", "watch", "bad"], "");
    setTone(confidenceCell, ["good", "watch", "bad"], "");
    $("planAction").textContent = t("standBy");
    $("planBadge").textContent = t("waiting");
    $("entryPrice").textContent = "--";
    $("stopPrice").textContent = "--";
    $("targetOne").textContent = "--";
    $("targetTwo").textContent = "--";
    $("positionSize").textContent = "--";
    $("riskReward").textContent = "--";
    $("agentThesis").textContent = t("noPlanThesis");
    renderDemoRunway();
    return;
  }

  const planTone = plan.side === "WAIT" ? "bad" : plan.confidence >= 76 ? "good" : "watch";
  setTone(planPanel, ["good", "watch", "bad"], planTone);
  setTone($("planBadge"), ["good", "watch", "bad"], planTone);
  setTone(confidenceCell, ["good", "watch", "bad"], planTone);
  $("planAction").textContent = plan.side === "WAIT" ? t("noTrade") : t(plan.side === "LONG" ? "longSetup" : "shortSetup");
  $("planBadge").textContent = `${plan.confidence}%`;
  $("entryPrice").textContent = money(plan.entry);
  $("stopPrice").textContent = money(plan.stop);
  $("targetOne").textContent = money(plan.target1);
  $("targetTwo").textContent = money(plan.target2);
  $("positionSize").textContent = plan.side === "WAIT" ? "0.0000" : plan.size.toFixed(4);
  $("riskReward").textContent = plan.side === "WAIT" ? "--" : `1:${plan.rr.toFixed(2)}`;
  $("agentThesis").textContent = plan.thesis;
  $("confidenceScore").textContent = `${plan.confidence}%`;
  $("trendSignal").textContent = plan.side === "WAIT" ? t("neutralRange") : plan.side === "LONG" ? t("bullishMomentum") : t("bearishPressure");
  const stats = candleStats();
  const book = bookStats();
  $("volatilitySignal").textContent = stats.avgRange > 0.028 ? t("elevated") : t("normal");
  $("liquiditySignal").textContent =
    book && book.spreadBps < 8 && Math.abs(book.imbalance) < 42
      ? t("strong")
      : stats.lastVolume >= stats.avgVolume
        ? t("strong")
        : liquidityText(pairProfiles[plan.pairKey]);
  $("newsSignal").textContent = newsText(pairProfiles[plan.pairKey]);
  renderDemoRunway();
}

function runPaperTrade() {
  if (!state.plan) {
    generatePlan();
  }

  const plan = state.plan;
  if (plan.side === "WAIT") {
    setStatus("watching");
    logDecision(t("tradeSkippedTitle"), t("tradeSkippedBody"));
    renderDemoRunway();
    return;
  }

  if (!state.gate || state.gate.decision === "vetoTrade") {
    updateDeskUI();
    setStatus("watching");
    logDecision(t("gateBlockedTitle"), t("gateBlockedBody"));
    renderDemoRunway();
    return;
  }

  setStatus("simulating");
  state.livePosition = {
    pairKey: plan.pairKey,
    side: plan.side,
    entry: currentPrice() || plan.entry,
    stop: plan.stop,
    target: plan.target1,
    size: plan.size,
    mark: currentPrice() || plan.entry,
    unrealized: 0,
    status: "open",
    openedAt: nowTime(),
  };
  updateLivePosition();
  renderLivePosition();
  setStatus("ready");
  addThesisEvent("timelineDeploy", "timelineDeployBody", {
    side: sideLabel(plan.side),
    entry: money(state.livePosition.entry),
  });
  logDecision(
    t("timelineDeploy"),
    t("timelineDeployBody", { side: sideLabel(plan.side), entry: money(state.livePosition.entry) })
  );
  renderDemoRunway();
}

function buildForwardPath(plan) {
  const basePath = state.series.slice(-18);
  const direction = plan.side === "LONG" ? 1 : -1;
  const volatility = pairProfiles[plan.pairKey].volatility;
  let price = plan.entry;
  return basePath.map((historicPrice, index) => {
    const historicMove = (historicPrice - basePath[0]) / basePath[0];
    const shock = (seededNoise(Date.now() / 1000 + index * 17) - 0.5) * volatility * 1.8;
    const meanReversion = -direction * volatility * 0.18 * index;
    price *= 1 + historicMove * 0.18 + shock + meanReversion;
    return Number(price.toFixed(6));
  });
}

function resolvePaperTrade(plan, path) {
  for (const price of path) {
    if (plan.side === "LONG" && price <= plan.stop) return { exit: plan.stop, exitReason: "stopLoss" };
    if (plan.side === "LONG" && price >= plan.target1) return { exit: plan.target1, exitReason: "takeProfit" };
    if (plan.side === "SHORT" && price >= plan.stop) return { exit: plan.stop, exitReason: "stopLoss" };
    if (plan.side === "SHORT" && price <= plan.target1) return { exit: plan.target1, exitReason: "takeProfit" };
  }
  return { exit: path.at(-1) || plan.entry, exitReason: "timeExit" };
}

function renderOrders() {
  const body = $("ordersBody");
  body.innerHTML = "";
  if (!state.orders.length) {
    body.innerHTML = `<tr class="empty-row"><td colspan="6">${t("noTrades")}</td></tr>`;
    return;
  }
  state.orders.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.time}</td>
      <td>${order.pair}</td>
      <td>${sideLabel(order.side)}</td>
      <td>${money(order.entry)}</td>
      <td>${money(order.exit)}</td>
      <td class="${order.pnl >= 0 ? "positive" : "negative"}">${money(order.pnl)}</td>
    `;
    body.appendChild(row);
  });
}

function resetSession() {
  state.orders = [];
  state.livePosition = null;
  state.sessionPnl = 0;
  $("sessionPnl").textContent = "$0.00";
  $("sessionPnl").className = "";
  renderOrders();
  renderLivePosition();
  logDecision(t("resetTitle"), t("resetBody"));
  renderDemoRunway();
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  setStatus(state.status);
  updateDataSourceLabel();
  renderBoundary();
  renderProvenanceTape();
  renderSystemMonitor();
  renderContextFeed();
  renderPersonaCard();
  renderMacroBoard();
  updatePlanUI();
  updateDeskUI();
  renderDrill();
  renderShockLab();
  renderFingerprint();
  renderOrderBook();
  renderRegimeMap();
  renderEdgeDecomposer();
  renderRealityHarness();
  renderAgentArena();
  renderMindMap();
  renderLivePosition();
  renderThesisTimeline();
  renderPassport();
  renderOrders();
  renderDemoRunway();
  drawChart();
}

function openProjectInfo() {
  $("projectInfoModal").classList.add("open");
  $("projectInfoModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("projectInfoClose").focus();
}

function closeProjectInfo() {
  $("projectInfoModal").classList.remove("open");
  $("projectInfoModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  $("projectInfoBtn").focus();
}

$("pairSelect").addEventListener("change", () => loadMarketData({ log: true, preservePlan: false, allowStale: false }));
$("timeframeSelect").addEventListener("change", () => {
  logDecision(t("timeframeChangedTitle"), t("timeframeChangedBody", { timeframe: timeframeLabel() }));
  loadMarketData({ log: true, preservePlan: false, allowStale: false });
});
$("riskSlider").addEventListener("input", (event) => {
  $("riskValue").textContent = `${Number(event.target.value).toFixed(2)}%`;
});
$("analyzeBtn").addEventListener("click", () => {
  setStatus("analyzing");
  setTimeout(() => {
    generatePlan();
    setStatus("ready");
  }, 280);
});
$("simulateBtn").addEventListener("click", runPaperTrade);
$("resetBtn").addEventListener("click", resetSession);
$("refreshBtn").addEventListener("click", () => loadMarketData({ log: true, preservePlan: true, allowStale: true }));
$("drillBtn").addEventListener("click", runKillSwitchDrill);
$("passportBtn").addEventListener("click", () => {
  renderPassport();
  if (state.plan && state.gate) {
    state.passportIssued = true;
    renderDemoRunway();
  }
  logDecision(t("decisionPassport"), t("auditCard"));
});
$("copyPassportBtn").addEventListener("click", copyPassportSummary);
$("projectInfoBtn").addEventListener("click", openProjectInfo);
$("projectInfoClose").addEventListener("click", closeProjectInfo);
$("projectInfoModal").addEventListener("click", (event) => {
  if (event.target === $("projectInfoModal")) closeProjectInfo();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && $("projectInfoModal").classList.contains("open")) {
    closeProjectInfo();
  }
});
document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = $(`section-${button.dataset.jump}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
["shockMove", "shockDepth", "shockLatency"].forEach((id) => {
  $(id).addEventListener("input", renderShockLab);
});
document.querySelectorAll(".lang-option").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
window.addEventListener("resize", drawChart);

const initialLang = (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
applyLanguage(initialLang);
loadMarketData({ log: false });
startAutoRefresh();
