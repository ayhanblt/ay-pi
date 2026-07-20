/**
 * STICKY-ROUTING.TS
 * -------------------
 * "/plan" ile bir plan çıkardıktan sonra kullanıcı "uygula" gibi kısa bir
 * onay mesajı yazdığında, bu serbest metin normalde /chat'in ucuz tier'ına
 * düşüyor -- oysa niyet açıkça "şimdi kodu yaz" (yani /code). Bu modül,
 * ÖNCEKİ turun intent'ine bakarak böyle bir mesajı /code'a yönlendirir.
 *
 * Pi-agnostik: sadece düz string'lerle çalışır, Pi'yi import etmez.
 * Extension, gerçek session geçmişinden okuduğu önceki mesajın METNİNİ
 * bu modüle verir (bkz. extension/ay-pi/src/index.ts).
 */

const APPLY_KEYWORDS = ["uygula", "apply", "devam et", "kodla", "code it", "go ahead", "implement"];

function containsApplyKeyword(text: string): boolean {
  const lower = text.trim().toLowerCase();
  return APPLY_KEYWORDS.some((k) => {
    if (k.includes(" ")) return lower.includes(k);
    const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "u").test(lower);
  });
}

/**
 * rawText serbest metin mi (komut değil) VE bir "uygula" niyeti taşıyor mu
 * VE önceki turun intent'i "/plan" mıydı? Üçü de doğruysa "/code" döner,
 * değilse null (normal akışa devam edilsin demektir -- yani sticky routing
 * devreye girmez).
 */
export function detectStickyCodeIntent(
  rawText: string,
  currentIntent: string,
  previousIntent: string | null
): string | null {
  if (currentIntent !== "/chat") return null;
  if (previousIntent !== "/plan") return null;
  if (!containsApplyKeyword(rawText)) return null;
  return "/code";
}
