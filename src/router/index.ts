/**
 * ROUTER/INDEX.TS
 * ----------------
 * Pipeline'ın "Intent Detection + Decision Engine + Model/Thinking
 * Selection" adımlarının HEPSİNİN birleştiği tek dosya.
 *
 *   detectIntent(rawText)        -> ham metinden komut ismini çıkarır ("/code")
 *   detectSubcommand(rawText)    -> komuttan hemen sonraki alt-komutu çıkarır ("/quick")
 *   buildSignal(rawText, ...)    -> ham metinden TAM RequestSignal inşa eder
 *   route(signal, policyFile)    -> RequestSignal + policy dosyası alır,
 *                                    WorkflowObject üretir
 */

import type { ThinkingLevel, WorkflowObject } from "../workflow/types.js";
import { ALL_TOOLS, THINKING_LEVELS } from "../workflow/types.js";
import type { PolicyFile, RequestSignal, RouteRule } from "./types.js";
import { findMatchingRule } from "./rules.js";
import { classifyText } from "./textClassifier.js";

/**
 * Ham kullanıcı metninden intent (komut) çıkarır.
 *
 * GİRDİ:  "/code fix the typo in login.ts"
 * ÇIKTI:  "/code"
 *
 * GİRDİ:  "bugün hava nasıl"   (komut yok, düz sohbet)
 * ÇIKTI:  "/chat"
 *
 * Bu adım tamamen string işlemi -- LLM'e hiç uğramaz.
 */
export function detectIntent(rawText: string): string {
  const trimmed = rawText.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.split(/\s+/)[0];
  }
  return "/chat";
}

/**
 * Komuttan HEMEN sonraki token da "/" ile başlıyorsa, bunu bir alt-komut
 * (subcommand) olarak kabul eder. Bu, kullanıcının bilinçli yazdığı KESİN
 * bir sinyaldir (Katman 1) -- diffLines gibi tahmine dayalı değildir.
 *
 * GİRDİ:  "/code /quick fix typo in login.ts"
 * ÇIKTI:  "/quick"
 *
 * GİRDİ:  "/plan /brainstorm add payment retry logic"
 * ÇIKTI:  "/brainstorm"
 *
 * GİRDİ:  "/code fix typo"  (alt-komut yok)
 * ÇIKTI:  undefined
 */
export function detectSubcommand(rawText: string): string | undefined {
  const tokens = rawText.trim().split(/\s+/);
  if (tokens[0]?.startsWith("/") && tokens[1]?.startsWith("/")) {
    return tokens[1];
  }
  return undefined;
}

/**
 * Ham metinde "hızlı/quick/ufak" gibi anahtar kelime var mı?
 * NOT: /quick artık açık bir subcommand (yukarıya bkz.), bu yüzden bu alan
 * şu an hiçbir policy kuralında KULLANILMIYOR -- ileride serbest metin
 * (/chat) için bir ince ayar sinyali olarak değerlendirilebilir diye
 * saklı tutuluyor.
 */
export function detectQuickKeyword(rawText: string): boolean {
  const keywords = ["quick", "hızlı", "hızlıca", "ufak", "küçük düzeltme"];
  const lower = rawText.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

import { detectStickyCodeIntent } from "./stickyRouting.js";

/**
 * Ham metinden ve (varsa) dışarıdan gelen ek sinyallerden (diffLines gibi,
 * git'ten hesaplanan) TAM bir RequestSignal inşa eder. Bu, "ham metin
 * girer, yapılandırılmış sinyal çıkar" adımının TEK giriş noktasıdır --
 * cli.ts ve ileride Pi adaptörü aynı fonksiyonu çağırır.
 *
 * textCategory SADECE command === "/chat" ise hesaplanır: /code, /plan
 * gibi açık komutlarda intent zaten netleşmiştir, sınıflandırıcıyı
 * gereksiz yere çalıştırmayız.
 *
 * previousIntent: Pi session'ından okunan ÖNCEKİ turun intent'i (örn.
 * "/plan"). Sadece "yapışkan routing" (sticky routing) için kullanılır --
 * bkz. stickyRouting.ts. dev-tools/cli.ts gibi session'sız ortamlarda
 * bu parametre hiç verilmez (varsayılan null), sticky routing devreye
 * girmez -- bu KASITLI bir davranış farkı, bug değil.
 */
export function buildSignal(
  rawText: string,
  overrides: Partial<Pick<RequestSignal, "diffLines" | "changedFileCount" | "openFileCount">> = {},
  previousIntent: string | null = null
): RequestSignal {
  let command = detectIntent(rawText);

  const sticky = detectStickyCodeIntent(rawText, command, previousIntent);
  if (sticky) {
    command = sticky;
  }

  const signal: RequestSignal = {
    command,
    rawText,
    hasQuickKeyword: detectQuickKeyword(rawText),
    subcommand: detectSubcommand(rawText),
    ...overrides,
  };

  if (command === "/chat") {
    signal.textCategory = classifyText(rawText).category;
  }

  return signal;
}

/**
 * Thinking seviyesini merdivende bir basamak yukarı çıkarır.
 * Zaten en tepedeyse (xhigh) hiçbir şey yapmaz.
 *
 * SADECE diffLines eşiği aşıldığında çağrılır (bkz. route()). Asla model
 * havuzunu (pool) değiştirmez -- sadece bu tek alanı etkiler.
 */
export function escalateThinking(level: ThinkingLevel): ThinkingLevel {
  const index = THINKING_LEVELS.indexOf(level);
  const nextIndex = Math.min(index + 1, THINKING_LEVELS.length - 1);
  return THINKING_LEVELS[nextIndex];
}

/**
 * ANA FONKSİYON: verilen RequestSignal ve policy dosyasına göre
 * WorkflowObject üretir. Bu, tüm pipeline'ın "karar verme" adımıdır.
 *
 * Adımlar:
 *  1) signal.command'a karşılık gelen RoutePolicy'yi bul
 *     (bulunamazsa "/chat" politikasına düş)
 *  2) O politikanın kuralları arasında signal'e uyan ilk kuralı bul
 *     (subcommand varsa "when" koşuluyla eşleşen kural öncelikli --
 *     bu adım pool'u BELİRLER)
 *  3) diffLines, policy.settings.diffLinesEscalationThreshold'u
 *     aşıyorsa, thinking'i bir basamak yukarı çıkar (pool'a DOKUNMAZ)
 *  4) Kuralın alanlarından bir WorkflowObject inşa et
 */
export function route(signal: RequestSignal, policyFile: PolicyFile): WorkflowObject {
  const policy =
    policyFile.routes.find((p) => p.intent === signal.command) ??
    policyFile.routes.find((p) => p.intent === "/chat");

  if (!policy) {
    throw new Error(
      `Ne "${signal.command}" ne de fallback "/chat" için policy tanımlı. ` +
      `ay-pi.policy.json dosyanı kontrol et.`
    );
  }

  const rule: RouteRule = findMatchingRule(signal, policy.rules);

  const threshold = policyFile.settings.diffLinesEscalationThreshold;
  const shouldEscalate =
    signal.diffLines !== undefined &&
    signal.diffLines >= threshold &&
    policyFile.settings.diffLinesEscalationIntents.includes(signal.command);
  const finalThinking = shouldEscalate ? escalateThinking(rule.thinking) : rule.thinking;

  return {
    intent: signal.command,
    provider: rule.provider,
    modelPool: rule.pool,
    thinking: finalThinking,
    contextBudget: rule.contextBudget,
    constraints: rule.constraints,
    // Kural özel bir liste vermediyse tüm araçlar açık kalır -- kısıtlama
    // sadece explicit olarak dar bir "allowedTools" tanımlanan kurallarda
    // (örn. /code /quick) devreye girer.
    allowedTools: rule.allowedTools ?? [...ALL_TOOLS],
    output: rule.output ?? { maxTokens: 1000 },
    meta: {
      ruleId: `${signal.command}${signal.subcommand ? "+" + signal.subcommand : ""}::${JSON.stringify(rule.when ?? "default")}`,
      diffLinesEscalationApplied: shouldEscalate,
    },
  };
}
