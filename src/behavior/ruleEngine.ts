import type { Behavior, BehaviorResolution } from "@/behavior/types.js";
import type { RequestSignal } from "@/input/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

const BEHAVIOR_COMMANDS: Record<string, Behavior> = {
  "/chat": "CHAT",
  "/plan": "PLAN",
  "/review": "REVIEW",
  "/code": "CODE",
};

const PLAN_KEYWORDS = [
  "architecture",
  "architectural",
  "design",
  "brainstorm",
  "migration",
  "migrate",
  "strategy",
  "roadmap",
  "plan",
];

const REVIEW_KEYWORDS = [
  "review",
  "audit",
  "security",
  "performance",
  "quality",
  "code review",
];

const CODE_KEYWORDS = [
  "fix",
  "bug",
  "refactor",
  "generate",
  "implement",
  "edit",
  "test",
  "change this code",
  "code",
];

const CHAT_KEYWORDS = [
  "hello",
  "hi",
  "thanks",
  "thank you",
  "how are you",
  "explain",
  "summarize",
  "teach",
  "translate",
];

const STICKY_CODE_KEYWORDS = [
  "uygula",
  "apply",
  "devam et",
  "kodla",
  "code it",
  "go ahead",
  "implement",
];

function containsKeyword(text: string, keyword: string): boolean {
  if (keyword.includes(" ")) {
    return text.includes(keyword);
  }
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "u").test(text);
}

function scoreKeywords(rawText: string, keywords: string[]): number {
  let score = 0;
  for (const keyword of keywords) {
    if (containsKeyword(rawText, keyword)) {
      score += keyword.includes(" ") ? 0.16 : 0.1;
    }
  }
  return Math.min(score, 0.49);
}

interface BehaviorRuleHit {
  behavior: Behavior;
  score: number;
  ruleId: string;
}

function bestKeywordBehavior(signal: RequestSignal): BehaviorRuleHit | null {
  const lower = signal.rawText.toLowerCase();

  const candidates: Array<{ behavior: Behavior; score: number; ruleId: string }> = [
    {
      behavior: "PLAN",
      score: scoreKeywords(lower, PLAN_KEYWORDS),
      ruleId: "behavior::keywords.plan",
    },
    {
      behavior: "REVIEW",
      score: scoreKeywords(lower, REVIEW_KEYWORDS),
      ruleId: "behavior::keywords.review",
    },
    {
      behavior: "CODE",
      score: scoreKeywords(lower, CODE_KEYWORDS),
      ruleId: "behavior::keywords.code",
    },
    {
      behavior: "CHAT",
      score: scoreKeywords(lower, CHAT_KEYWORDS),
      ruleId: "behavior::keywords.chat",
    },
  ];

  if (signal.hasQuickKeyword) {
    candidates.push({
      behavior: "CODE",
      score: 0.36,
      ruleId: "behavior::quickKeyword",
    });
  }

  if (signal.previousBehavior === "PLAN" && STICKY_CODE_KEYWORDS.some((keyword) => containsKeyword(lower, keyword))) {
    candidates.push({
      behavior: "CODE",
      score: 0.95,
      ruleId: "behavior::sticky.plan-to-code",
    });
  }

  const logger = DebugLogger.getInstance();
  logger.ruleEngine.keywords = candidates.filter(c => c.score > 0).map(c => c.behavior);
  
  let winner = candidates[0];
  for (const candidate of candidates.slice(1)) {
    if (candidate.score > winner.score) {
      winner = candidate;
    }
  }

  if (winner.score <= 0) {
    logger.ruleEngine.confidence = 0;
    logger.ruleEngine.decision = "UNRESOLVED";
    return null;
  }

  logger.ruleEngine.confidence = winner.score;
  logger.ruleEngine.decision = winner.behavior;
  return winner;
}

export function resolveBehaviorByRule(signal: RequestSignal): BehaviorResolution | null {
  const logger = DebugLogger.getInstance();
  
  const explicit = BEHAVIOR_COMMANDS[signal.command];
  if (explicit) {
    logger.ruleEngine.confidence = 1;
    logger.ruleEngine.decision = explicit;
    return {
      behavior: explicit,
      confidence: 1,
      source: "rule",
      ruleId: `behavior::command.${signal.command.slice(1)}`,
    };
  }

  const keywordMatch = bestKeywordBehavior(signal);
  if (keywordMatch) {
    return {
      ...keywordMatch,
      confidence: keywordMatch.score,
      source: "rule",
    };
  }

  return null;
}
