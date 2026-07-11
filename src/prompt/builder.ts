/**
 * PROMPT BUILDER
 * ===============
 * BURASI ÖNEMLİ: Pipeline'da "metin" ilk kez burada üretilir.
 *
 * Router hiç metin üretmedi (sadece WorkflowObject -- yapılandırılmış
 * karar). Context Assembler de metin üretmedi (sadece hangi dosyaların
 * seçileceğine karar verdi). Prompt Builder bu ikisini + gerçek dosya
 * İÇERİKLERİNİ birleştirip LLM'e gidecek asıl system/user prompt'u
 * inşa eder.
 *
 * GİRDİ:
 *   - WorkflowObject (Router'ın kararı: constraints, thinking, vs.)
 *   - seçilen dosyaların gerçek içerikleri (path + content)
 *   - kullanıcının orijinal rawText'i
 *
 * ÇIKTI:
 *   - { systemPrompt: string, userPrompt: string }
 *   Bu obje Executor'a (Faz 1'de düz fetch, Faz 2'de Pi) gidecek son duraktır.
 *
 * Neden ayrı bir modül: Router "hangi kural" derken, burası "o kural
 * pratikte ne anlama geliyor, LLM'e hangi cümleyle söylenir" işini yapar.
 * Constraint etiketleri (örn. "code_only") burada insan-okur cümlelere
 * çevriliyor. Bu çeviriyi TEK bir yerde tutmak, ileride constraint
 * cümlelerini değiştirmek istediğinde (örn. daha sert/yumuşak ifade)
 * tek dosyada değişiklik yapman yeterli olsun diyedir.
 */

import type { Constraint, WorkflowObject } from "../workflow/types.js";

/** Her constraint etiketinin karşılığı olan, LLM'e verilecek talimat cümlesi. */
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
    "tarama -- bunun yerine hangi dosyayı kastettiğimi sor.",
};

export interface AssembledFile {
  path: string;
  content: string;
}

export interface BuiltPrompt {
  systemPrompt: string;
  userPrompt: string;
}

/**
 * WorkflowObject'teki constraint etiketlerini gerçek talimat
 * cümlelerine çevirip birleştirir.
 */
function renderConstraints(constraints: Constraint[]): string {
  if (constraints.length === 0) return "";
  return constraints.map((c) => `- ${CONSTRAINT_TEXT[c]}`).join("\n");
}

/**
 * Seçilen dosyaları, LLM'in okuyacağı şekilde "### path\n```\ncontent\n```"
 * formatında birleştirir. Context Assembler'ın seçtiği dosyalar dışında
 * HİÇBİR şey buraya girmez -- bütçe kararı zaten önceki adımda verildi.
 */
function renderFiles(files: AssembledFile[]): string {
  if (files.length === 0) return "(Bu istek için dosya bağlamı seçilmedi.)";
  return files
    .map((f) => `### ${f.path}\n\`\`\`\n${f.content}\n\`\`\``)
    .join("\n\n");
}

/**
 * ANA FONKSİYON.
 *
 * Örnek çağrı (cli.ts / Faz 2'de Pi adaptörü içinde):
 *
 *   const prompt = buildPrompt(workflow, selectedFiles, signal.rawText);
 *   // prompt.systemPrompt -> Executor'ın system mesajı olarak geçeceği metin
 *   // prompt.userPrompt   -> Executor'ın user mesajı olarak geçeceği metin
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
