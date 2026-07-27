import type { Constraint, Workflow } from "@/workflow/types.js";
import type { ContextStrategy } from "@/context/types.js";

const CONSTRAINT_TEXT: Record<Constraint, string> = {
  code_only:
    "Sadece kod bloğu döndür. Açıklama, giriş cümlesi veya sonuç yorumu ekleme.",
  no_comments:
    "Ürettiğin kodun içine yorum satırı (// veya /* */) ekleme.",
  no_refactor:
    "SADECE istenen değişikliği yap. Etrafındaki kodu, isimlendirmeleri " +
    "veya yapıyı yeniden düzenleme (refactor etme).",
  no_code_output:
    "Bu bir plan/analiz isteğidir. Kod bloğu üretme, sadece adım adım plan veya açıklama yaz.",
  suggest_only:
    "Bu bir öneri isteğidir. Kodu dosyalara yazma veya uygulama. Öneriyi metin olarak sun, " +
    "seçenekleri ve avantajlarını açıkla. Opsiyonel olarak kod snippet örnekleri gösterebilirsin " +
    "ama bunlar sadece referans amaçlıdır, doğrudan uygulanmamalıdır.",
  scope_limited:
    "SADECE hedef ajanın mevcut bağlamında verilen dosyalarla çalış. " +
    "Bağlam yetersizse hangi dosyanın gerektiğini sor.",
};

export function buildAdapterInstructions(workflow: Workflow, strategy: ContextStrategy): string {
  const constraints = workflow.constraints.map((constraint) => `- ${CONSTRAINT_TEXT[constraint]}`).join("\n");
  
  const strategyLines = [
    `Beklenen Hedef: ${strategy.expectedGoal}`,
    `Repository Taraması: ${strategy.repositoryScan === "Disabled" ? "Kapatıldı" : strategy.repositoryScan === "Limited" ? "Sınırlandırıldı" : "İzin Verildi"}`,
  ];
  
  if (strategy.focusTargets.length > 0) {
    strategyLines.push(`Odaklanılacak Konular: ${strategy.focusTargets.join(", ")}`);
  }

  return [
    `Davranış: ${workflow.behavior}. Workflow: ${workflow.workflow.id}.`,
    `İş tanımı: ${workflow.workflow.description}`,
    `Bağlam Stratejisi:\n${strategyLines.join("\n")}`,
    constraints ? `Uyman gereken kurallar:\n${constraints}` : "",
    `Cevabını en fazla ${workflow.output.maxTokens} token ile sınırla.`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

