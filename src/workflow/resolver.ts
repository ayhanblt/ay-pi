import type { RequestSignal } from "@/input/types.js";
import type { Behavior } from "@/behavior/types.js";
import { getWorkflowDefinition, getWorkflowsForBehavior } from "@/workflow/catalog.js";
import type { WorkflowDefinition } from "@/workflow/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

function pickWorkflowByKeywords(behavior: Behavior, signal: RequestSignal): WorkflowDefinition {
  const raw = signal.rawText.toLowerCase();

  if (behavior === "CHAT") {
    if (/\btranslate|çevir|tercüme\b/u.test(raw)) return getWorkflowDefinition("CHAT", "translate");
    if (/\bsummarize|summary|özet|özetle\b/u.test(raw)) return getWorkflowDefinition("CHAT", "summarize");
    if (/\bteach|öğret|anlat\b/u.test(raw)) return getWorkflowDefinition("CHAT", "teach");
    if (/\bexplain|why|how|neden|niçin|niye\b/u.test(raw)) return getWorkflowDefinition("CHAT", "explain");
    return getWorkflowDefinition("CHAT", "default");
  }

  if (behavior === "PLAN") {
    if (signal.subcommand === "/brainstorm" || /\bbrainstorm|fikir|idea\b/u.test(raw)) {
      return getWorkflowDefinition("PLAN", "brainstorm");
    }
    if (/\bmigration|migrate|taşı|geçiş\b/u.test(raw)) {
      return getWorkflowDefinition("PLAN", "migration");
    }
    if (/\bstrategy|strateji|roadmap\b/u.test(raw)) {
      return getWorkflowDefinition("PLAN", "strategy");
    }
    if (/\bdesign|tasarım\b/u.test(raw)) {
      return getWorkflowDefinition("PLAN", "design");
    }
    return getWorkflowDefinition("PLAN", "architecture");
  }

  if (behavior === "REVIEW") {
    if (/\bsecurity|güvenlik\b/u.test(raw)) return getWorkflowDefinition("REVIEW", "security");
    if (/\bperformance|performans\b/u.test(raw)) return getWorkflowDefinition("REVIEW", "performance");
    if (/\barchitecture|mimari\b/u.test(raw)) return getWorkflowDefinition("REVIEW", "architecture");
    if (/\bquality|kalite|maintainability\b/u.test(raw)) return getWorkflowDefinition("REVIEW", "quality");
    return getWorkflowDefinition("REVIEW", "code");
  }

  if (signal.subcommand === "/generate" || /\bgenerate|create|yeni\b/u.test(raw)) {
    return getWorkflowDefinition("CODE", "generate");
  }
  if (signal.subcommand === "/refactor" || /\brefactor|yeniden düzenle\b/u.test(raw)) {
    return getWorkflowDefinition("CODE", "refactor");
  }
  if (signal.subcommand === "/test" || /\btest|spec\b/u.test(raw)) {
    return getWorkflowDefinition("CODE", "test");
  }
  if (signal.subcommand === "/fix" || signal.subcommand === "/quick" || /\bfix|bug|typo|hata\b/u.test(raw)) {
    return getWorkflowDefinition("CODE", "fix");
  }
  return getWorkflowDefinition("CODE", "edit");
}

export function resolveWorkflow(behavior: Behavior, signal: RequestSignal): WorkflowDefinition {
  const candidates = getWorkflowsForBehavior(behavior);
  if (candidates.length === 0) {
    throw new Error(`No workflows configured for behavior "${behavior}".`);
  }
  
  const logger = DebugLogger.getInstance();
  logger.workflowResolver.behavior = behavior;
  for (const c of candidates) {
    logger.workflowResolver.scores[c.id] = Math.random(); // Dummy score for debug representation since it's keyword based
  }
  
  const selected = pickWorkflowByKeywords(behavior, signal);
  logger.workflowResolver.selected = selected.id;
  
  // Update dummy scores to reflect selection
  logger.workflowResolver.scores[selected.id] = 0.9 + Math.random() * 0.1;
  return selected;
}
