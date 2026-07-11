/**
 * CLI.TS
 * -------
 * Bu dosya Pi'ye HİÇ dokunmuyor. Faz 1'de artık gerçek dosya sistemi
 * (git diff + fs) ve isteğe bağlı olarak gerçek OpenCode Go API çağrısı
 * kullanıyor -- ama hâlâ Pi'siz, bağımsız bir test aracı.
 *
 * ÇALIŞTIRMA (sadece karar göster, API çağrısı yapma):
 *   npx tsx src/cli.ts "/code /quick fix typo in login.ts"
 *   npx tsx src/cli.ts "/code refactor the auth module" --diff-lines=80
 *   npx tsx src/cli.ts "/plan /brainstorm add payment retry logic"
 *
 * ÇALIŞTIRMA (gerçek API çağrısı da yap -- OPENCODE_API_KEY gerekli):
 *   npx tsx src/cli.ts "/code /quick fix typo in login.ts" --execute
 *
 * TAM AKIŞ:
 *   1. .env yüklenir (varsa)
 *   2. Ham metinden RequestSignal inşa edilir (subcommand + diffLines dahil)
 *   3. Policy dosyası (settings + routes) okunur
 *   4. route() çağrılır -> WorkflowObject üretilir (pool + escalation)
 *   5. Gerçek değişen dosyalar (git diff) bulunur, contextBudget'a göre seçilir
 *   6. Seçilen dosyaların gerçek içeriği okunur
 *   7. buildPrompt() ile system/user prompt inşa edilir
 *   8. --execute verildiyse: gerçek API çağrısı yapılır, sonuç gösterilir
 *   9. Karar (+ varsa execution sonucu) telemetry'ye loglanır
 */

import { execSync } from "node:child_process";
import { loadEnvFile } from "../src/config/env.js";
import { buildSignal, route } from "../src/router/index.js";
import { classifyText } from "../src/router/textClassifier.js";
import { loadPolicies } from "../src/config/policy.loader.js";
import { selectFiles } from "../src/context/assembler.js";
import { getChangedFilePaths, buildFileCandidates, loadFileContents } from "../src/context/gitContext.js";
import { buildPrompt } from "../src/prompt/builder.js";
import { logDecision } from "../src/telemetry/logger.js";
import { executeOpenCodeGo } from "./executor/openCodeGoExecutor.js";
import type { ExecutionResult } from "../src/telemetry/types.js";

loadEnvFile();

/**
 * ÖNEMLİ: gerçek entegrasyonda (Faz 2, Pi adaptörü) kullanıcı hiçbir zaman
 * "--diff-lines" gibi bir bayrak yazmaz. Bu bilgi CPU tarafından, `git diff`
 * çalıştırılarak OTOMATİK hesaplanır. --diff-lines bayrağı sadece bu CLI'da,
 * git deposu olmayan bir ortamda manuel test etmek için var (override amaçlı).
 */
function detectDiffLinesFromGit(): number | undefined {
  try {
    const stat = execSync("git diff --shortstat", {
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

function parseArgs(argv: string[]): { rawText: string; diffLines?: number; execute: boolean } {
  const rawText = argv[0] ?? "";
  const diffFlag = argv.find((a) => a.startsWith("--diff-lines="));
  const diffLines = diffFlag ? Number(diffFlag.split("=")[1]) : detectDiffLinesFromGit();
  const execute = argv.includes("--execute");
  return { rawText, diffLines, execute };
}

async function main() {
  const argv = process.argv.slice(2);
  const { rawText, diffLines, execute } = parseArgs(argv);

  if (!rawText) {
    console.error('Kullanım: npx tsx src/cli.ts "/code /quick fix typo" [--diff-lines=N] [--execute]');
    process.exit(1);
  }

  // --- 1) Ham metinden RequestSignal inşa et (CPU-only, LLM yok) ---
  const signal = buildSignal(rawText, { diffLines });

  console.log("\n[1] RequestSignal (ham metinden çıkarılan sinyaller):");
  console.log(signal);

  if (signal.command === "/chat") {
    const debug = classifyText(rawText);
    console.log(
      `    (sınıflandırma detayı: yöntem=${debug.method}, güven=${debug.confidence.toFixed(3)})`
    );
  }

  // --- 2) Policy dosyasını yükle ve karar ver ---
  const policyFile = loadPolicies(new URL("../ay-pi.policy.json", import.meta.url).pathname);
  const workflow = route(signal, policyFile);

  console.log("\n[2] WorkflowObject (Router'ın nihai kararı):");
  console.log(workflow);
  console.log(`    (birincil model: ${workflow.provider}/${workflow.modelPool[0]})`);
  console.log(`    (izinli araçlar: ${workflow.allowedTools.join(", ")})`);

  // --- 3) Gerçek değişen dosyaları bul, bütçeye göre seç ---
  const changedPaths = getChangedFilePaths();
  const candidates = buildFileCandidates(changedPaths);
  const selected = selectFiles(candidates, workflow.contextBudget);

  console.log("\n[3] Seçilen dosyalar (gerçek git diff + contextBudget'a göre):");
  console.log(selected.length > 0 ? selected.map((f) => f.path) : "(değişen dosya bulunamadı / git deposu değil)");

  // --- 4) Seçilen dosyaların gerçek içeriğini oku, prompt'u inşa et ---
  const assembledFiles = loadFileContents(selected);
  const prompt = buildPrompt(workflow, assembledFiles, rawText);

  console.log("\n[4] Üretilen prompt:");
  console.log("--- systemPrompt ---\n" + prompt.systemPrompt);
  console.log("--- userPrompt ---\n" + prompt.userPrompt);

  // --- 5) İsteğe bağlı: gerçek API çağrısı ---
  let execution: ExecutionResult | undefined;
  if (execute) {
    const apiKey = process.env.OPENCODE_API_KEY;
    if (!apiKey) {
      console.error(
        "\n[5] --execute verildi ama OPENCODE_API_KEY tanımlı değil " +
        "(.env dosyasına ya da ortam değişkenine ekle)."
      );
    } else {
      console.log("\n[5] Gerçek API çağrısı yapılıyor...");
      execution = await executeOpenCodeGo(workflow, prompt, apiKey);
      if (execution.success) {
        console.log(`    Başarılı (${execution.durationMs}ms). Cevap:\n`);
        console.log(execution.content);
        if (execution.usage) {
          console.log(
            `\n    (token kullanımı: giriş=${execution.usage.inputTokens ?? "?"}, çıkış=${execution.usage.outputTokens ?? "?"})`
          );
        }
      } else {
        console.error(`    Başarısız (${execution.durationMs}ms): ${execution.errorMessage}`);
      }
    }
  } else {
    console.log("\n[5] --execute verilmedi, gerçek API çağrısı yapılmadı (sadece karar gösterildi).");
  }

  // --- 6) Telemetry'ye logla ---
  logDecision(signal, workflow, execution);

  console.log("\n=> Karar (+ varsa çağrı sonucu) ay-pi.telemetry.jsonl'e loglandı.\n");
}

main();
