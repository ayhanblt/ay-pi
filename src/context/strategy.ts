import type { RequestSignal } from "@/input/types.js";
import type { Workflow } from "@/workflow/types.js";
import type { ContextStrategy, RepositoryScanStrategy } from "@/context/types.js";
import type { Behavior } from "@/behavior/types.js";

/**
 * Extracts deterministic context entities from the raw input text.
 *
 * This is pure string parsing — NOT keyword/intent matching. It identifies:
 * - File paths and filenames (e.g. "login.ts", "src/auth/session.py")
 * - Component/module identifiers (camelCase, PascalCase, kebab-case, snake_case)
 *
 * These extracted entities give the downstream agent concrete focus targets
 * derived directly from the user's wording.
 */

// Recognized source file extensions for filename/path detection.
// IMPORTANT: Longer extensions must come before their shorter prefixes
// (e.g. "tsx" before "ts", "mjs"/"cjs" before "js") so the regex alternation,
// which is ordered (left-to-right), does not truncate them.
const FILE_EXTENSIONS = [
  "tsx", "jsx", "mjs", "cjs", "hpp",
  "ts", "js", "py", "go", "rs", "java", "kt",
  "json", "yaml", "yml", "toml", "xml",
  "scss", "sass", "less", "css",
  "html", "vue", "svelte",
  "cpp", "md", "txt", "sh", "rb", "php", "c", "h",
];

// Build an alternation of escaped extensions once.
const EXT_ALT = FILE_EXTENSIONS.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");

// Matches a path-like or filename token ending with a known extension.
// e.g. src/auth/login.ts, banner.tsx, config.json
const FILE_PATH_RE = new RegExp(`(?:[\\w./-]+/)?[\\w-]+\\.(?:${EXT_ALT})`, "g");

// Matches identifiers that look like code symbols (component, module, function names):
// PascalCase, camelCase, kebab-case, snake_case, with at least one internal boundary.
// Excludes pure single words to reduce noise; requires a casing or separator signal.
const IDENTIFIER_RE = /\b(?:[A-Z][a-zA-Z0-9]+[A-Z][a-zA-Z0-9]*|[a-z]+[A-Z][a-zA-Z0-9]*|[a-z0-9]+-[a-z0-9-]+|[a-z0-9]+_[a-z0-9_]+)\b/g;

// Common stop-words to filter out of identifier matches (function words only).
// Domain nouns like "banner", "navbar" are intentionally NOT filtered — they are
// legitimate focus targets when the user points at a component.
const STOP_WORDS = new Set([
  "the", "this", "that", "these", "those", "for", "with", "from", "into",
  "and", "or", "but", "not",
]);

function extractEntities(rawText: string): { files: string[]; identifiers: string[] } {
  const files = new Set<string>();
  const identifiers = new Set<string>();

  for (const match of rawText.matchAll(FILE_PATH_RE)) {
    files.add(match[0]);
  }

  for (const match of rawText.matchAll(IDENTIFIER_RE)) {
    const token = match[0];
    if (!STOP_WORDS.has(token.toLowerCase())) {
      identifiers.add(token);
    }
  }

  return {
    files: [...files],
    identifiers: [...identifiers],
  };
}

// Maps a workflow id to a human-readable focus description for the downstream agent.
const WORKFLOW_FOCUS: Record<string, string> = {
  // CHAT
  explain: "Kavramın net ve adım adım açıklanması",
  summarize: "Ana noktaların özetlenmesi",
  teach: "Örneklerle öğretim",
  translate: "Anlam ve tonun korunarak çeviri",
  // PLAN
  architecture: "Sistem mimarisi ve bileşen yerleşimi",
  design: "Arayüz, API veya bileşen tasarımı",
  brainstorm: "Seçenek ve alternatif üretilmesi",
  migration: "Güvenli geçiş planı",
  strategy: "Yürütme stratejisi ve iş sırası",
  // REVIEW
  security: "Güvenlik riskleri ve saldırı yüzeyi",
  performance: "Performans karakteristikleri ve darboğazlar",
  quality: "Sürdürülebilirlik, tutarlılık ve test kalitesi",
  code: "Kod doğruluğu ve stil sorunları",
  // CODE
  generate: "Yeni kod üretilmesi",
  refactor: "Davranışı koruyarak yeniden yapılandırma",
  fix: "Hata giderme ve küçük düzeltmeler",
  test: "Test yazımı veya güncellenmesi",
  edit: "Hedefe yönelik yerinde düzenlemeler",
  // SUGGEST
  color: "Renk ve görsel tasarım seçenekleri",
  approach: "Uygulama yaklaşımı ve desen seçenekleri",
  technology: "Kütüphane, çatı ve araç seçenekleri",
  "design-option": "UI/UX tasarım alternatifleri",
};

function buildFocusTargets(
  behavior: Behavior,
  workflowId: string,
  entities: { files: string[]; identifiers: string[] }
): string[] {
  const targets: string[] = [];

  const focus = WORKFLOW_FOCUS[workflowId];
  if (focus) {
    targets.push(`Odak: ${focus}`);
  }

  if (entities.files.length > 0) {
    targets.push(`İlgili dosyalar: ${entities.files.join(", ")}`);
  }

  if (entities.identifiers.length > 0) {
    targets.push(`İlgili bileşenler/semboller: ${entities.identifiers.join(", ")}`);
  }

  return targets;
}

export function resolveContextStrategy(signal: RequestSignal, resolvedPolicy: Workflow): ContextStrategy {
  let repositoryScan: RepositoryScanStrategy = "Allowed";

  // 1. Repository Scan Rules
  switch (resolvedPolicy.behavior) {
    case "CODE":
      repositoryScan = "Limited";
      break;
    case "CHAT":
      repositoryScan = "Disabled";
      break;
    case "PLAN":
    case "REVIEW":
      repositoryScan = "Allowed";
      break;
    case "SUGGEST":
      repositoryScan = "Limited";
      break;
  }

  // 2. Extract deterministic entities from the raw input
  const entities = extractEntities(signal.rawText);

  // 3. Focus Targets (Context Hints)
  const focusTargets = buildFocusTargets(resolvedPolicy.behavior, resolvedPolicy.workflow.id, entities);

  // 4. Expected Goal — concrete and workflow-aware
  const fileHint = entities.files.length > 0 ? ` (${entities.files.join(", ")} üzerinde)` : "";
  const expectedGoal = `${resolvedPolicy.behavior}/${resolvedPolicy.workflow.id} işini yerine getir${fileHint}: "${signal.rawText}"`;

  return {
    focusTargets,
    repositoryScan,
    expectedGoal,
    reason: `Resolved context strategy for ${resolvedPolicy.behavior}.${resolvedPolicy.workflow.id}`,
  };
}
