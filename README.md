# AY-PI — Faz 0, 1 & 2 (çekirdek mantık + gerçek entegrasyon + Pi extension'ı)

`src/` altındaki hiçbir dosya Pi'yi import etmiyor -- bu, **paylaşılan
çekirdek**: routing mantığı (hangi komut/durum → hangi model havuzu/
thinking/context/prompt), izole ve test edilebilir. Bu çekirdek iki farklı
"tüketici" tarafından kullanılıyor: `dev-tools/` (Pi'siz, CLI üzerinden
test) ve `extension/ay-pi/` (gerçek Pi extension'ı, Faz 2).

## Repo yapısı

```
ay-pi/
├── src/                      # PAYLAŞILAN ÇEKİRDEK -- hem dev-tools hem extension bunu kullanır
│   ├── workflow/               # WorkflowObject, ThinkingLevel
│   ├── router/                  # RequestSignal, route(), buildSignal(), textClassifier
│   ├── context/                  # dosya seçimi + gerçek git/dosya okuma
│   ├── prompt/                    # sistem/user prompt inşası
│   ├── config/                     # policy.loader, .env loader
│   └── telemetry/                   # karar + execution loglama
├── dev-tools/                # SADECE Faz 0-1 test aracı, Pi'ye HİÇ dahil değil
│   ├── cli.ts
│   └── executor/                # gerçek OpenCode Go HTTP çağrısı (SADECE burada!)
├── extension/ay-pi/          # Faz 2: gerçek Pi extension paketi
│   ├── package.json             # pi manifest ("pi": {"extensions": [...]})
│   └── src/index.ts              # TEK yeni dosya -- before_agent_start adaptörü
├── ay-pi.policy.json         # TEK karar tablosu (dev-tools VE extension paylaşır)
└── data/                     # bag-of-words eğitim verisi + üretilen ağırlıklar
```

## Kurulum (dev-tools için)

```bash
npm install
cp .env.example .env
# .env dosyasını açıp OPENCODE_API_KEY'ini gir
```

## Çalıştırma (dev-tools/cli.ts, Pi'siz test)

**Sadece kararı gör (API çağrısı yapma, ücretsiz/hızlı test):**
```bash
npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts"
npx tsx dev-tools/cli.ts "/code refactor the auth module" --diff-lines=80
npx tsx dev-tools/cli.ts "/plan /brainstorm redesign auth architecture"
npx tsx dev-tools/cli.ts "selam nasılsın"
```

**Gerçek API çağrısı da yap (OPENCODE_API_KEY gerekli):**
```bash
npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts" --execute
```

## Veri akışı

```
Kullanıcı ham metni ("/code /quick fix typo" + otomatik git diff)
        │
        ▼
src/router/index.ts → detectIntent(), detectSubcommand(), buildSignal()
        │             ham metinden RequestSignal (router/types.ts) inşa eder
        ▼
src/router/rules.ts  → RequestSignal'i policy kurallarıyla karşılaştırır
        │              (saf sayısal/string/boolean karşılaştırma, LLM yok)
        ▼
src/config/policy.loader.ts → ay-pi.policy.json'ı ({settings, routes}) okur + valide eder
        ▼
route() çıktısı: WorkflowObject (src/workflow/types.ts) -- modelPool + thinking + escalation
        │
        ├──▶ src/context/gitContext.ts   → gerçek `git diff --name-only` ile değişen dosyaları bulur
        ├──▶ src/context/assembler.ts    → contextBudget'a göre hangi dosyalar seçilecek karar verir
        │
        └──▶ src/prompt/builder.ts   → WorkflowObject + seçilen dosyaların GERÇEK
                                        içerikleri + rawText'ten system/user prompt inşa eder
                     │
                     ├──▶ dev-tools/executor/openCodeGoExecutor.ts → (--execute ile) gerçek API çağrısı
                     │    [SADECE dev-tools'ta -- extension bunu KULLANMAZ]
                     │
                     ▼
              src/telemetry/logger.ts → kararı (+ varsa execution sonucunu)
                                        ay-pi.telemetry.jsonl'e loglar (yan etki)
                     │
                     ▼
     dev-tools/cli.ts: Executor ile Pi'siz test için
     extension/ay-pi: pi.setModel()/pi.setThinkingLevel() Pi'nin kendi pi-ai katmanına devreder
```


## Komut ve alt-komut (subcommand) sistemi

| Komut | Alt-komut | Model havuzu | Varsayılan thinking |
|---|---|---|---|
| `/plan` | *(yok)* | glm-5.2, qwen3.7-max | medium |
| `/plan` | `/brainstorm` | glm-5.2, qwen3.7-max | high |
| `/code` | *(yok)* | kimi-k2.7-code, deepseek-v4-pro, minimax-m3 | medium |
| `/code` | `/quick` | deepseek-v4-flash, minimax-m2.7, mimo-v2.5 | low |
| `/chat` (serbest metin) | — | hibrit sınıflandırıcıya göre (aşağıya bkz.) | deep→medium, chat→off |

Alt-komut yazımı: `/code /quick fix typo` — ilk token komut, hemen
sonraki token da `/` ile başlıyorsa alt-komut olarak algılanır
(`detectSubcommand()`, `src/router/index.ts`). Bu, kullanıcının bilinçli
yazdığı KESİN bir sinyaldir (Katman 1) ve model HAVUZUNU belirler.

**Model havuzu (`modelPool`) neden bir dizi?** `modelPool[0]` şu an
"birincil" model — Executor sadece bunu kullanıyor. Havuzun geri kalanı
(örn. `/code`'da `deepseek-v4-pro`, `minimax-m3`) policy dosyasında KAYITLI
duruyor ama otomatik fallback (ilk model hata verirse ikinciye geçme)
HENÜZ UYGULANMADI — bu ayrı bir fazda ele alınacak.

**Bilinen kısıtlama:** `/chat`'in `deep` kategorisi için ayrı bir model
havuzu belirtilmemişti, bu yüzden `/code` havuzunu (Kimi K2.7 Code,
DeepSeek V4 Pro, MiniMax M3) yeniden kullandım; normal `chat` için Fast
Worker havuzunu kullandım. Bunu değiştirmek istersen `ay-pi.policy.json`'daki
`/chat` bloğunu güncellemen yeterli.

## `diffLines`: ikincil ayar, asla birincil karar değil

Komut/alt-komut (`/code`, `/code /quick`) hangi model HAVUZUNUN
kullanılacağına KESİN olarak karar verir — bu senin bilinçli niyetin.
`diffLines` (otomatik `git diff --shortstat`'tan hesaplanır, `--diff-lines=N`
ile manuel override edilebilir) bu kararı ASLA değiştirmez, sadece
`settings.diffLinesEscalationThreshold` (varsayılan `60`) değerini AŞARSA
thinking seviyesini bir basamak yukarı çeker:

- `diffLines: 3`, `8`, `undefined` (bilgi yok) → eşiğin altında/yok → **hiçbir etki yok**
- `diffLines: 80` → eşiği aştı → thinking bir basamak yükselir (örn. `medium` → `high`), havuz DEĞİŞMEZ
- `/code /quick` + `diffLines: 200` → yine havuz değişmez (Fast Worker kalır), sadece thinking `low` → `medium` çıkar

Bu, daha önceki bir tasarım prensibimizin ("bilgi yoksa ucuza düş")
devamı: `diffLines` bilinmiyorsa hiçbir müdahale yapılmaz, en ucuz/varsayılan
davranış korunur. Eşiği değiştirmek için tek dokunman gereken yer:
`ay-pi.policy.json` → `settings.diffLinesEscalationThreshold`.

## Hibrit metin sınıflandırıcı (`/chat` intent'i için)

`/code`, `/plan` gibi açık komutlarda intent zaten netleşmiştir. Ama serbest
metin ("selam" mı, mimari bir soru mu?) için üç katmanlı bir hibrit sistem var:

1. **Keyword eşleşmesi** (`src/router/keywords.ts`) — kesin, açıklanabilir,
   milisaniyeler sürer. Genişletilmiş Türkçe/İngilizce kelime listeleri.
2. **Bag-of-words / Naive Bayes** (`src/router/textClassifier.ts` +
   `data/bow-weights.json`) — keyword eşleşmesi yoksa devreye girer.
   İstatistiksel ama hâlâ tamamen CPU'da, LLM'e hiç gitmeden çalışır.
3. **Belirsizlikte ucuza düşme** — skor net değilse (`uncertain`), yine
   güvenli/ucuz tarafa düşülür.

Modeli yeniden eğitmek için (yeni örnek eklendiğinde):
```bash
npx tsx scripts/train-bow.ts
```
Bu, `data/bow-training.json`'ı okuyup `data/bow-weights.json`'ı yeniden üretir.
Runtime kodu (`textClassifier.ts`) sadece üretilen ağırlık dosyasını okur,
hiç eğitim yapmaz — eğitim ve tahmin ayrı adımlardır.

**Dikkat edilecek bilinen tuzak:** kısa anahtar kelimeler (`hi`, `vs` gibi)
başka kelimelerin İÇİNDE yanlışlıkla eşleşebilir (örn. "hi" ⊂ "hissediyorum").
`containsKeyword()` fonksiyonu bu yüzden tek kelimelik anahtarlarda kelime
sınırı (regex `\b` benzeri, Unicode/Türkçe uyumlu) kullanır; çok kelimeli
öbekler (`"iyi akşamlar"` gibi) bu riske daha az açık olduğundan basit
substring ile kontrol edilir.

## Dosyalar tek tek ne işe yarıyor

- **`src/workflow/types.ts`** — pipeline'ın TEK ortak dili: `WorkflowObject`.
  `ThinkingLevel` artık Pi'nin gerçek API'sindeki değerlerle birebir aynı
  (`off/minimal/low/medium/high/xhigh`).
- **`src/router/types.ts`** — `RequestSignal` (Router'ın girdisi, `subcommand`
  dahil), `RouteRule` (artık `model` yerine `pool: string[]`), `PolicySettings`
  ve `PolicyFile` (policy dosyasının tam şekli) burada.
- **`src/router/rules.ts`** — koşul değerlendirme (`<10`, `==deep`, `==/quick`
  gibi ifadeler). Saf fonksiyonlar, yan etkisiz.
- **`src/router/keywords.ts`** — `/chat` sınıflandırıcısının Katman 1
  (kesin kelime) listeleri.
- **`src/router/textClassifier.ts`** — hibrit (keyword + bag-of-words)
  `/chat` sınıflandırıcısı.
- **`src/router/index.ts`** — `detectIntent()`, `detectSubcommand()`,
  `buildSignal()`, `escalateThinking()`, `route()`: ham metni sinyale,
  sinyali WorkflowObject'e çevirir.
- **`src/context/types.ts` + `assembler.ts`** — hangi dosyaların prompt'a
  dahil edileceğine karar verir (RAG/embedding yok, öncelik sıralaması).
- **`src/context/gitContext.ts`** — gerçek `git diff --name-only` + gerçek
  dosya okuma (Faz 1'de eklendi, sahte veriyi değiştirdi).
- **`src/prompt/builder.ts`** — metnin ilk kez üretildiği yer: constraint
  etiketlerini cümleye çevirir, dosya içeriklerini birleştirir.
- **`src/executor/types.ts` + `openCodeGoExecutor.ts`** — gerçek OpenCode Go
  API çağrısı. **SADECE bu CLI'da kullanılıyor**, Faz 2'de Pi'nin kendi
  `pi-ai` katmanına (`pi.setModel`/`pi.setThinkingLevel`) devredilecek,
  üretimde kalmayacak.
- **`src/config/env.ts`** — bağımlılıksız minimal `.env` yükleyici.
- **`src/config/policy.loader.ts`** — `ay-pi.policy.json`'ı okuyup şekil
  kontrolü yapar (yanlış yazılmış bir alan başlangıçta patlar).
- **`src/telemetry/logger.ts`** — kararı (+ varsa gerçek API çağrısının
  sonucunu: başarı/hata, süre, token kullanımı) JSONL'e loglar.
- **`ay-pi.policy.json`** — asıl karar tablosu: `settings` (eşik değerleri)
  + `routes` (komut → kural listesi → model havuzu/thinking/budget/constraint).
- **`src/cli.ts`** — hepsini birbirine bağlayan, Pi olmadan test etmeni
  sağlayan komut satırı aracı.

## Faz 2: Pi extension'ı — kurulum ve kullanım

Extension kodu `extension/ay-pi/` içinde. **Tek yeni dosya `extension/ay-pi/src/index.ts`** — geri kalan her şey (Router, Context Assembler, Prompt Builder, Telemetry) Faz 0-1'de yazdığımız, hiç değiştirilmemiş `src/` modülleri. Extension bunları **kopyalamıyor**, doğrudan import ediyor (`../../../src/...`) — tek bir karar tablosu, tek bir router mantığı, iki farklı giriş noktası (CLI ve Pi).

### Kurulum

```bash
cd extension/ay-pi
npm install
```

Sonra Pi'ye tanıt — geliştirme sırasında (kopyalamadan, doğrudan bu repodan) kullanmak için `~/.pi/agent/settings.json`'a ekle:

```json
{
  "extensions": ["/tam/yol/ay-pi/extension/ay-pi"]
}
```

Pi içinde `/reload` ile değişiklikleri anında görürsün (extension `jiti` ile TypeScript olarak doğrudan çalıştırılıyor, build adımı yok).

### OpenCode Go modellerinin Pi'ye tanıtılması

`ctx.modelRegistry.find("opencode-go", "deepseek-v4-flash")` gibi bir çağrı, Pi'nin bildiği modeller arasında arama yapıyor. Eğer OpenCode Go modelleri Pi'nin yerleşik listesinde yoksa (pi.dev'de sayfaları olması muhtemelen orada olduklarını gösteriyor ama garanti değil), `~/.pi/agent/models.json` dosyasına şunu eklemen gerekir (Pi'nin gerçek kaynak kodundan doğrulanmış dosya yolu ve format):

```json
{
  "providers": {
    "opencode-go": {
      "apiKey": "senin-opencode-go-api-key'in",
      "api": "openai-completions",
      "baseUrl": "https://opencode.ai/zen/go/v1",
      "models": [
        { "id": "deepseek-v4-flash", "name": "DeepSeek V4 Flash" },
        { "id": "deepseek-v4-pro", "name": "DeepSeek V4 Pro" },
        { "id": "minimax-m2.7", "name": "MiniMax M2.7" },
        { "id": "minimax-m3", "name": "MiniMax M3" },
        { "id": "mimo-v2.5", "name": "MiMo-V2.5" },
        { "id": "kimi-k2.7-code", "name": "Kimi K2.7 Code" },
        { "id": "glm-5.2", "name": "GLM-5.2" },
        { "id": "qwen3.7-max", "name": "Qwen3.7 Max" }
      ]
    }
  }
}
```

Extension bu dosyaya dokunmuyor/yazmıyor — bu, senin bir kerelik, elle yapman gereken bir Pi yapılandırma adımı. `~/.pi/agent/models.json` içindeki `apiKey` alanı düz metin olarak API key'ini tutar; bu dosyayı asla git'e commit etme.

### Çalışırken ne göreceksin

- Her `/code`, `/plan` veya serbest metin mesajından önce, extension arka planda modeli/thinking'i ayarlar — sen bunu yazmazsın, extension senin yerine karar verir.
- Pi'nin footer'ında (durum çubuğunda) `AY-PI: opencode-go/deepseek-v4-flash · low` gibi bir bilgi göreceksin — hangi kararın verildiğinin görünür kanıtı.
- Eğer model bulunamazsa ya da API key eksikse, Pi içinde bir uyarı bildirimi (`ctx.ui.notify`) göreceksin.
- Kararlar aynı `ay-pi.telemetry.jsonl`'e loglanır (dev-tools/cli.ts ile paylaşılan).

### Faz 1 Executor'ı burada YOK

`dev-tools/executor/openCodeGoExecutor.ts` extension paketinin bir parçası değil ve `extension/ay-pi/src/index.ts` onu hiç import etmiyor. Gerçek model çağrısını artık Pi'nin kendi `pi-ai` katmanı, `pi.setModel()` sonrası otomatik olarak yapıyor.

## Sırada ne var (Faz 3+)
