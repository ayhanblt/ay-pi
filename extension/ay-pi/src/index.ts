/**
 * EXTENSION/AY-PI/SRC/INDEX.TS
 * ------------------------------
 * AY-PI extension'ının TEK giriş noktası. Faz 0-1'de yazdığımız hiçbir
 * dosyayı DEĞİŞTİRMİYOR -- sadece onları Pi'nin `before_agent_start`
 * hook'una bağlayan ince bir adaptör.
 *
 * NEDEN before_agent_start: kullanıcı bir prompt gönderdikten sonra,
 * agent loop başlamadan HEMEN önce ateşleniyor. Tam olarak bizim
 * "kullanıcı bir şey yazdı, LLM'e gitmeden önce CPU'da karar ver" adımımız.
 *
 * BURADA YAPILAN ŞEY:
 *   1) event.prompt (ham metin) -> buildSignal() -> RequestSignal
 *      (git diff otomatik hesaplanır, ctx.cwd kullanılarak)
 *   2) route() -> WorkflowObject (model havuzu + thinking + budget + constraint)
 *   3) pi.setModel() + pi.setThinkingLevel() ile Pi'nin KENDİ çağırma
 *      mekanizması yönlendirilir -- BİZ HTTP isteği ATMIYORUZ, bunu Pi
 *      kendi pi-ai katmanıyla yapıyor (bkz. sohbet geçmişimiz: Faz 1'deki
 *      Executor burada KULLANILMIYOR)
 *   4) Context Assembler + Prompt Builder ile constraint cümleleri ve
 *      seçilen dosya içerikleri hazırlanır
 *   5) systemPrompt (constraint'ler) ve message (dosya içeriği) olarak
 *      Pi'ye geri döndürülür
 *   6) Karar telemetry'ye loglanır (aynı ay-pi.telemetry.jsonl, dev-tools
 *      ile paylaşılan)
 */

import type { ExtensionAPI, ExtensionContext, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";
import { execSync } from "node:child_process";

// DİKKAT: bunlar Faz 0-1'de yazdığımız, HİÇ DEĞİŞTİRİLMEMİŞ paylaşılan
// çekirdek modüller. Repo kökündeki src/'den import ediliyorlar --
// extension paketinin kendi içinde bir KOPYASI YOK (bkz. README, "neden
// kopyalamadık" bölümü).
import { buildSignal, route } from "../../../src/router/index.js";
import type { PolicyFile } from "../../../src/router/types.js";
import { loadPolicies } from "../../../src/config/policy.loader.js";
import { selectFiles } from "../../../src/context/assembler.js";
import {
  getChangedFilePaths,
  buildFileCandidates,
  loadFileContents,
} from "../../../src/context/gitContext.js";
import { buildPrompt } from "../../../src/prompt/builder.js";
import { logDecision } from "../../../src/telemetry/logger.js";
import { ALL_TOOLS } from "../../../src/workflow/types.js";
import { detectMisplacedCliCommand } from "../../../src/router/cliCommandGuard.js";

// Policy dosyası repo kökünde yaşıyor (dev-tools ile PAYLAŞILAN, tek bir
// karar tablosu -- iki ayrı kopya bakımı istemiyoruz).
const POLICY_PATH = new URL("../../../ay-pi.policy.json", import.meta.url).pathname;

// Policy'yi extension her yüklendiğinde (/reload dahil) bir kez okuyoruz.
// Modül seviyesinde cache -- /reload zaten modülü sıfırdan çalıştırdığı
// için bu, "policy dosyasını değiştirdim, /reload dedim, hemen etkili
// oldu" davranışını doğal olarak sağlıyor.
let cachedPolicy: PolicyFile | null = null;
function getPolicy(): PolicyFile {
  if (!cachedPolicy) {
    cachedPolicy = loadPolicies(POLICY_PATH);
  }
  return cachedPolicy;
}

/**
 * dev-tools/cli.ts'teki AYNI mantık -- ama burada `cwd` parametresi Pi'nin
 * verdiği GERÇEK proje dizini (ctx.cwd), process.cwd() değil. Kullanıcı
 * Pi'yi hangi proje klasöründe çalıştırıyorsa, git diff O klasörde çalışır.
 */
function detectDiffLinesFromGit(cwd: string): number | undefined {
  try {
    const stat = execSync("git diff --shortstat", {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!stat) return 0;
    const insertions = /(\d+) insertion/.exec(stat)?.[1] ?? "0";
    const deletions = /(\d+) deletion/.exec(stat)?.[1] ?? "0";
    return Number(insertions) + Number(deletions);
  } catch {
    return undefined;
  }
}

/**
 * Önceki turun intent'ini tutan basit bir modül-seviyesi değişken (tıpkı
 * yukarıdaki cachedPolicy gibi). Pi'nin session geçmişini okumak yerine
 * (karmaşık AgentMessage tip navigasyonu gerektiriyordu) bunu tercih
 * ettik -- kişisel/tekli oturum kullanımı için yeterli ve çok daha basit.
 * Her `before_agent_start` turunun sonunda (buildSignal çağrısından hemen
 * sonra) güncellenir.
 */
let lastIntent: string | null = null;

export default function ayPi(pi: ExtensionAPI) {
  pi.on("input", async (event, ctx: ExtensionContext) => {
    if (event.source !== "interactive") return { action: "continue" };

    const misplaced = detectMisplacedCliCommand(event.text);
    if (misplaced) {
      ctx.ui.notify(
        `"${misplaced}" bir terminal komutudur, Pi sohbet kutusuna değil ` +
        `gerçek bir terminale yazılmalı. Yeni bir terminal sekmesi açıp ` +
        `orada "${misplaced}" çalıştır.`,
        "info"
      );
      return { action: "handled" };
    }

    return { action: "continue" };
  });

  // GEÇİCİ DEBUG: extension'ın gerçekten yüklenip yüklenmediğini görmek için.
  // Pi'yi açtığında bu bildirimi görmüyorsan, sorun before_agent_start
  // mantığında değil -- extension hiç YÜKLENMİYOR demektir (yol/manifest
  // sorunu). Görüyorsan, sorun muhtemelen model bulunamaması vs.
  pi.on("session_start", async (_event, ctx: ExtensionContext) => {
    ctx.ui.notify("AY-PI extension yüklendi ✓", "info");
  });

  pi.on("before_agent_start", async (event, ctx: ExtensionContext) => {
    const rawText = event.prompt;
    if (!rawText) return {};

    // --- 1) RequestSignal inşa et (gerçek proje dizininde git diff) ---
    const diffLines = detectDiffLinesFromGit(ctx.cwd);
    const signal = buildSignal(rawText, { diffLines }, lastIntent);
    lastIntent = signal.command;

    // --- 2) Router karar versin ---
    const policy = getPolicy();
    const workflow = route(signal, policy);

    // --- 3) Pi'nin KENDİ model/thinking mekanizmasını yönlendir ---
    // Not: burada kendi HTTP çağrımızı ATMIYORUZ -- pi.setModel() sonrası
    // gerçek isteği Pi'nin pi-ai katmanı yapacak.
    let appliedModelInfo: string | undefined;
    let modelApplied = false;

    for (const modelId of workflow.modelPool) {
      const model = ctx.modelRegistry.find(workflow.provider, modelId);
      if (model) {
        const applied = await pi.setModel(model);
        if (applied) {
          modelApplied = true;
          appliedModelInfo = modelId;
          break;
        }
      }
    }

    if (!modelApplied) {
      ctx.ui.notify(
        `AY-PI: Belirtilen model havuzundaki hiçbir model (${workflow.modelPool.join(", ")}) bulunamadı veya uygulanamadı. Mevcut model değiştirilmedi.`,
        "error"
      );
    }
    pi.setThinkingLevel(workflow.thinking);

    const appliedThinking = pi.getThinkingLevel();
    const appliedModelObj = ctx.model;
    const appliedModelId = appliedModelObj ? appliedModelObj.id : undefined;

    if (appliedThinking !== workflow.thinking) {
      ctx.ui.notify(
        `AY-PI: '${workflow.thinking}' istendi ama model '${appliedThinking}' seviyesinde çalışıyor.`,
        "info"
      );
    }

    // --- 3b) Araç erişimini WorkflowObject.allowedTools'a göre sınırla ---
    // Bu, "modele bırakırsak kontrolsüz keşif yapıp tüm projeyi tarayabilir"
    // sorununu MEKANİK olarak çözüyor (bkz. sohbet geçmişi: /quick + gerçek
    // repo testinde model bash/grep ile tüm projeyi taramıştı). allowedTools
    // dar bir listeyse (örn. /quick -> ["read","edit"]), bash/grep/find/ls/write
    // bu turda hiç sunulmuyor -- model sadece enjekte ettiğimiz dosyalarla
    // çalışabiliyor, bulamazsa aramak yerine SORMAK zorunda kalıyor.

    pi.setActiveTools(workflow.allowedTools);

    // --- 4) Gerçek değişen dosyaları bul, bütçeye göre seç, oku ---
    const changedPaths = getChangedFilePaths(ctx.cwd);
    const candidates = buildFileCandidates(changedPaths, ctx.cwd);
    const selected = selectFiles(candidates, workflow.contextBudget);
    const assembledFiles = loadFileContents(selected, ctx.cwd);
    const prompt = buildPrompt(workflow, assembledFiles, rawText);

    // --- 5) Görünürlük: footer'da hangi model/thinking seçildiğini göster ---
    // --- 5) Görünürlük: footer'da hangi model/thinking/araç seçildiğini göster ---
    const toolsNote =
      workflow.allowedTools.length < ALL_TOOLS.length
        ? ` (araçlar: ${workflow.allowedTools.join(",")})`
        : "";

    ctx.ui.setStatus(
      "ay-pi",
      `AY-PI: ${workflow.provider}/${appliedModelInfo ?? workflow.modelPool[0]} · ${appliedThinking}` +
      (workflow.meta.diffLinesEscalationApplied ? " (↑ diffLines eşiği aşıldı)" : "") +
      toolsNote
    );

    // --- 6) Telemetry (aynı JSONL, dev-tools ile paylaşılan) ---
    logDecision(signal, workflow, undefined, appliedModelId, appliedThinking);

    // --- 7) Constraint'leri systemPrompt'a, dosya içeriğini message'a enjekte et ---
    // systemPrompt TAM DEĞİŞTİRME semantiğinde (Pi #575) -- bu yüzden
    // event.systemPrompt'u KORUYUP üstüne EKLEMEK bizim sorumluluğumuz,
    // yoksa başka extension'ların/Pi'nin temel talimatlarını silmiş oluruz.
    const result: { systemPrompt: string; message?: { customType: string; content: string; display: boolean } } = {
      systemPrompt: `${event.systemPrompt}\n\n${prompt.systemPrompt}`,
    };

    if (assembledFiles.length > 0) {
      result.message = {
        customType: "ay-pi-context",
        content: prompt.userPrompt,
        display: false, // sadece LLM context'ine gitsin, kullanıcıya ayrıca gösterilmesin (Pi zaten kendi mesajını gösteriyor)
      };
    }

    return result;
  });

  pi.registerCommand("ay-pi-status", {
    description: "AY-PI policy dosyasını ve son kararları göster (LLM çağrısı yapmaz)",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      const policy = getPolicy();
      const ruleCount = policy.routes.reduce((acc, r) => acc + r.rules.length, 0);
      commandCtx.ui.notify(
        `AY-PI Aktif.\nPolicy: ${policy.routes.length} intent, ${ruleCount} rule yüklü.\nLoglar: ay-pi.telemetry.jsonl`,
        "info"
      );
    },
  });

  pi.registerCommand("ay-pi-reload-policy", {
    description: "AY-PI policy dosyasını yeniden yükle (LLM çağrısı yapmaz)",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      cachedPolicy = null;
      getPolicy();
      commandCtx.ui.notify("AY-PI: Policy cache temizlendi ve dosya yeniden yüklendi.", "info");
    },
  });
}
