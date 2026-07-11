/**
 * WORKFLOW TİPLERİ
 * ------------------
 * Bu dosya, AY-PI'nin ürettiği "nihai karar"ın şeklini tanımlar.
 * Router, Context Assembler ve Prompt Builder'dan geçen her istek,
 * en sonunda bir WorkflowObject'e dönüşür. Pi'ye (veya herhangi bir
 * executor'a) giden TEK ŞEY budur — metin değil, yapılandırılmış bir karar.
 */

// Modelin ne kadar "düşüneceği". Pi'nin gerçek thinking level API'sine
// birebir uyacak şekilde tanımlandı -- pi.setThinkingLevel() bu değerleri
// aynen kabul ediyor, bizim ayrı bir eşleme tablosu tutmamıza gerek kalmadı.
export type ThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";

// Thinking seviyelerinin sıralı merdiveni -- escalateThinking() (router/index.ts)
// bir seviye yukarı çıkarmak için bu diziyi kullanır.
export const THINKING_LEVELS: ThinkingLevel[] = ["off", "minimal", "low", "medium", "high", "xhigh"];

// Context Assembler'ın ne kadar bağlam toplayabileceğinin sınırı.
// "maxFiles": kaç dosya dahil edilebilir, "maxChars": toplam karakter tavanı.
export interface ContextBudget {
  maxFiles: number;
  maxChars: number;
}

// Modelin çıktısını sınırlayan kurallar. Bunlar sistem promptuna
// Prompt Builder tarafından enjekte edilir (örn. "code_only" ->
// "Sadece kod bloğu döndür, açıklama yazma").
export type Constraint =
  | "code_only"       // sadece kod, düz metin açıklama yok
  | "no_comments"     // üretilen kodda yorum satırı olmasın
  | "no_refactor"     // sadece istenen satırları değiştir, etrafına dokunma
  | "no_code_output" // (örn. /plan için) kod değil, plan/metin üret
  | "scope_limited";  // sadece enjekte edilen dosyalara bak, kapsam dışına çıkma+
// Pi'nin bilinen tüm yerleşik araçları (gerçek tip tanımlarından doğrulandı:
// node_modules/@earendil-works/pi-coding-agent/dist/core/tools/index.d.ts).
// Bir policy kuralı "allowedTools" belirtmezse route() bu TAM listeyi kullanır
// -- yani varsayılan davranış "kısıtlama yok" olur, sadece explicit olarak
// dar bir liste verilen kurallar (örn. /quick) araç erişimini kısıtlar.
export const ALL_TOOLS = ["read", "bash", "edit", "write", "grep", "find", "ls"] as const;
export type ToolName = (typeof ALL_TOOLS)[number];

// Router'ın çıktı token limiti üzerindeki kararı.
export interface OutputConstraint {
  maxTokens: number;
}

/**
 * WorkflowObject: pipeline'ın TEK çıktısı.
 * Router bunu üretir, Context Assembler contextini doldurur,
 * Prompt Builder bundan sistem promptu inşa eder, Executor bunu
 * kullanarak gerçek model çağrısını yapar.
 *
 * modelPool: sıralı model havuzu (örn. ["kimi-k2.7-code", "deepseek-v4-pro",
 * "minimax-m3"]). modelPool[0] "birincil" modeldir -- Faz 1 Executor'ı şu an
 * SADECE ilk modeli kullanıyor, otomatik fallback (ilk model hata verirse
 * ikinciye geçme) HENÜZ UYGULANMADI, ileride ayrı bir fazda eklenecek.
 * Havuzun geri kalanı şimdilik sadece policy dosyasında kayıtlı duruyor.
* allowedTools: modelin bu turda erişebileceği araçlar. Router tarafından
* belirlenir (policy'deki "allowedTools" alanından, yoksa ALL_TOOLS).
* Extension bunu pi.setActiveTools() ile Pi'ye uygular -- örn. "/quick"
* gibi dar bütçeli görevlerde bash/grep/find kapatılıp modelin kendi
* başına tüm projeyi taramasının ÖNÜNE geçilir (bkz. sohbet geçmişi:
* kontrolsüz keşif token patlaması sorunu).
 **/
export interface WorkflowObject {
  intent: string;              // örn. "/code", "/plan", "/chat"
  provider: string;            // örn. "opencode-go", ileride "anthropic"
  modelPool: string[];         // sıralı model havuzu, [0] birincil model
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output: OutputConstraint;
  allowedTools: ToolName[];          // modelin kullanmasına izin verilen araçlar (örn. ["read", "edit"])
  meta: {
    ruleId: string;                        // hangi policy kuralı tetiklendi (debug/telemetry için)
    diffLinesEscalationApplied: boolean;    // diffLines eşiği aşıldığı için thinking yükseltildi mi
  };
}
