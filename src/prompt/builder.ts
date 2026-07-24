/**
 * PROMPT BUILDER
 * ==============
 * Assembles system and user prompts by combining resolved WorkflowObject decision parameters,
 * injected file context, and the user's raw prompt text.
 */

import type { Constraint, WorkflowObject } from "../workflow/types.js";

/** System prompt constraint instructions mapped per `Constraint` key. */
const CONSTRAINT_TEXT: Record<Constraint, string> = {
  code_only:
    "Sadece kod bloğu döndür. Açıklama, giriş cümlesi veya sonuç yorumu ekleme.",
  no_comments:
    "Ürettiğin kodun içine yorum satırı (// veya /* */) ekleme.",
  no_refactor:
    "SADECE istenen değişikliği yap. Etrafındaki kodu, isimlendirmeleri " +
    "veya yapıyı yeniden düzenleme (refactor etme).",
  no_code_output:
    "Bu bir plan/analiz isteğidir. Kod bloğu üretme, sadece adım adım " +
    "plan veya açıklama yaz.",
  scope_limited:
    "SADECE aşağıda 'İlgili dosyalar' bölümünde verilen dosyalara bak. " +
    "Aradığın şey bu dosyalarda yoksa, başka dosya arama veya tüm projeyi " +
    "tarama -- bunun yerine hangi dosyayı kastettiğimi sor. Kesinlikle bir dizine (klasöre) 'read' veya benzeri araçlar uygulamaya ÇALIŞMA.",
};

export interface AssembledFile {
  path: string;
  content: string;
}

export interface BuiltPrompt {
  systemPrompt: string;
  userPrompt: string;
}

/** Formats array of `Constraint` keys into bulleted instruction strings for the system prompt. */
function renderConstraints(constraints: Constraint[]): string {
  if (constraints.length === 0) return "";
  return constraints.map((c) => `- ${CONSTRAINT_TEXT[c]}`).join("\n");
}

/** Formats assembled file paths and contents into Markdown code block sections. */
function renderFiles(files: AssembledFile[]): string {
  if (files.length === 0) return "(Bu istek için dosya bağlamı seçilmedi.)";
  return files
    .map((f) => `### ${f.path}\n\`\`\`\n${f.content}\n\`\`\``)
    .join("\n\n");
}

/**
 * Builds the final `{ systemPrompt, userPrompt }` payload object from workflow metadata and file contents.
 */
export function buildPrompt(
  workflow: WorkflowObject,
  files: AssembledFile[],
  rawText: string
): BuiltPrompt {
  const constraintBlock = renderConstraints(workflow.constraints);

  const systemPrompt = [
    `Sen bir kod asistanısın. Görev tipi: ${workflow.intent}.`,
    constraintBlock ? `Uyman gereken kurallar:\n${constraintBlock}` : "",
    `Cevabını en fazla ${workflow.output.maxTokens} token ile sınırla.`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const userPrompt = [
    `İstek: ${rawText}`,
    `\nİlgili dosyalar:\n${renderFiles(files)}`,
  ].join("\n");

  return { systemPrompt, userPrompt };
}

