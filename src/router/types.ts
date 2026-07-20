/**
 * ROUTER TİPLERİ
 * ---------------
 * Burada en kritik soru cevaplanıyor: "RequestSignal nedir, nereden gelir?"
 *
 * VERİ AKIŞI (baştan sona):
 *
 *   1) Kullanıcı Pi'de bir şey yazar: "/code fix the typo in login.ts"
 *      -> Bu HAM METİN. Henüz hiçbir yapı yok.
 *
 *   2) Pi extension'ı (adaptörümüz) bu ham metni ve o anki oturum
 *      durumunu (hangi dosyalar açık, git diff kaç satır, vs.) alır.
 *
 *   3) Bu ham veriden bir RequestSignal ÜRETİLİR. RequestSignal,
 *      "router'ın karar vermek için ihtiyaç duyduğu ÖLÇÜLEBİLİR
 *      sinyallerin" toplamıdır. Serbest metin değil, sayı/enum/boolean
 *      alanlardan oluşur -- çünkü Router LLM değildir, metni "anlamaz",
 *      sadece bu alanlar üzerinde if/else (kural) çalıştırır.
 *
 *   4) Router.route(signal, policies) bu RequestSignal'i policy
 *      tablosundaki kurallarla karşılaştırır ve bir WorkflowObject
 *      üretir (bkz. workflow/types.ts).
 *
 *   5) WorkflowObject, Executor'a (Faz 2'de Pi'ye) gider. Pi, gerçek
 *      model çağrısını YAPAR. Router bu noktada işini bitirmiştir,
 *      hiçbir LLM çağrısına karışmaz.
 *
 * Yani "prompt nereden girer" sorusunun cevabı: ham metin adım 1'de
 * kullanıcıdan girer, ama Router'a hiçbir zaman ham metin olarak
 * gitmez -- adım 3'te sayısal/yapısal bir sinyale (RequestSignal)
 * dönüştürülmüş halde gider. "Çıktı nerede" sorusunun cevabı: adım 4
 * sonunda üretilen WorkflowObject, konsola/log'a yazdırılabilir
 * (Faz 0-1'de yaptığımız gibi) ya da doğrudan Executor'a verilir
 * (Faz 2'de).
 */

import type { Constraint, ContextBudget, OutputConstraint, ThinkingLevel, ToolName } from "../workflow/types.js";

/**
 * RequestSignal: Router'ın GİRDİSİ.
 * Bu alanların her biri, ham kullanıcı metninden ya da o anki
 * oturum/proje durumundan CPU'da (LLM'siz) çıkarılır.
 */
export interface RequestSignal {
  // "/code fix the typo" -> command = "/code"
  // Nasıl çıkarılır: metnin ilk kelimesi "/" ile başlıyorsa odur,
  // başlamıyorsa "/chat" varsayılır. Bkz. router/index.ts -> detectIntent()
  command: string;

  // Kullanıcının komuttan sonraki kısmı, ham metin olarak SAKLANIR
  // ama Router bunun İÇİNE bakıp anlam çıkarmaz. Sadece Context
  // Assembler ve Prompt Builder'a iletmek için taşınır.
  rawText: string;

  // Eğer bir git diff / kod değişikliği söz konusuysa, değişen
  // satır sayısı. Nasıl çıkarılır: `git diff --stat` çalıştırılıp
  // "+/-" satırları toplanır (LLM'siz, saf shell/CPU işlemi).
  diffLines?: number;

  // Kaç dosya etkileniyor. `git diff --name-only | wc -l` gibi.
  changedFileCount?: number;

  // O anda editörde/oturumda açık olan dosya sayısı (Pi session'ından
  // okunur, adaptör bunu doldurur).
  openFileCount?: number;

  // Kullanıcının ham metninde "quick", "hızlıca", "ufak" gibi
  // anahtar kelimeler var mı? Basit bir regex/keyword taraması ile
  // dolduruluyor -- yine LLM yok, string.includes() seviyesinde.
  hasQuickKeyword?: boolean;

  // "/code" gibi açık komut olmayan serbest metinler için: mesaj basit bir
  // sohbet mi ("chat"), derin düşünme gerektiren bir soru mu ("deep"), yoksa
  // ikisi de net değil mi ("uncertain")? textClassifier.ts tarafından, hibrit
  // (keyword eşleşmesi) bir yöntemle, tamamen CPU'da hesaplanır.
  textCategory?: "chat" | "deep" | "uncertain";

  // "/code /quick fix typo" -> command="/code", subcommand="/quick"
  // "/plan /brainstorm ..." -> command="/plan", subcommand="/brainstorm"
  // Komuttan hemen sonraki token "/" ile başlıyorsa subcommand budur.
  // Bu KESİN bir kullanıcı sinyalidir (Katman 1) -- diffLines gibi tahmin
  // edilen bir şey değil, kullanıcının bilinçli yazdığı bir talimat. Bu
  // yüzden policy'de model HAVUZUNU (pool) seçen alan budur; diffLines
  // asla havuzu değiştirmez, sadece thinking'i ayarlar (bkz. router/index.ts
  // -> escalateThinking).
  subcommand?: string;
}

/**
 * RouteRule: policy dosyasındaki TEK bir satır/kural.
 * "when" yoksa bu kural KOŞULSUZ eşleşir (fallback/default kural).
 * "when" varsa, RequestSignal'deki alanlarla karşılaştırılır.
 *
 * Örnek "when": { subcommand: "==/quick" }
 * Anlamı: signal.subcommand === "/quick" ise bu kural uygulanır.
 *
 * DİKKAT: diffLines KASITLI OLARAK "when" koşullarında pool seçmek için
 * kullanılmıyor -- diffLines'ın havuzu değiştirmesine izin vermiyoruz
 * (kararlaştırdığımız "komut > diffLines" önceliği). diffLines sadece
 * route() içinde, kural seçildikten SONRA, thinking'i ayrıca yükseltmek
 * için kullanılır.
 */
export interface RouteRule {
  when?: Partial<Record<keyof RequestSignal, string>>;
  provider: string;
  pool: string[];      // sıralı model havuzu, [0] birincil model
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output?: OutputConstraint;
  allowedTools?: ToolName[];
}

/**
 * RoutePolicy: bir intent (örn. "/code") için tanımlı kural listesi.
 * Kurallar sırayla denenir, ilk eşleşen kazanır (yukarıdan aşağı öncelik).
 */
export interface RoutePolicy {
  intent: string;       // "/code", "/plan", "/chat" ...
  rules: RouteRule[];
}

/**
 * PolicySettings: policy dosyasının kök seviyesindeki genel ayarlar.
 * Şu an tek bir ayar var ama ileride büyüyebilir (örn. farklı bir
 * eşik türü daha eklenebilir).
 */
export interface PolicySettings {
  // diffLines bu değere ULAŞTIĞINDA (>=), route() thinking'i bir seviye
  // yukarı çıkarır. Havuzu (pool) ASLA değiştirmez. Bkz. router/index.ts
  // -> escalateThinking().
  diffLinesEscalationThreshold: number;
  // diffLines escalation'ının SADECE bu intent listesindeki komutlarda
  // uygulanacağını belirtir. Listede olmayan bir intent (örn. "/chat")
  // için diffLines ne olursa olsun thinking ASLA escalate edilmez.
  diffLinesEscalationIntents: string[];
}

/** ay-pi.policy.json dosyasının TAM şekli -- policy.loader.ts bunu döndürür. */
export interface PolicyFile {
  settings: PolicySettings;
  routes: RoutePolicy[];
}
