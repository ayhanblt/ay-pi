/**
 * CALIBRATION-REPORT.TS
 * ------------------------
 * ay-pi.telemetry.jsonl dosyasını okuyup, her model için "istenen thinking
 * seviyesi" ile "gerçekte uygulanan seviye" arasındaki farkı özetler.
 *
 * NEDEN VAR: gerçek kullanımda GLM-5.2'ye "medium" istediğimizde "high"
 * uygulandığını gördük (Pi'nin clamp mekanizması, bkz. sohbet geçmişi).
 * Bu script, böyle uyuşmazlıkları TAHMİN etmek yerine gerçek veriden
 * bulup, ay-pi.policy.json'daki thinking değerlerini modellerin GERÇEK
 * kapasitesine göre kalibre etmeni sağlıyor.
 *
 * Çalıştırma: npx tsx dev-tools/calibration-report.ts [telemetry-dosya-yolu]
 * (yol verilmezse repo kökündeki ay-pi.telemetry.jsonl kullanılır)
 */

import { readFileSync, existsSync } from "node:fs";

interface TelemetryLine {
  workflow: { modelPool: string[]; thinking: string; provider: string };
  appliedThinking?: string;
  appliedModel?: string;
}

function main() {
  const path = process.argv[2] ?? new URL("../ay-pi.telemetry.jsonl", import.meta.url).pathname;
  if (!existsSync(path)) {
    console.error(`Telemetry dosyası bulunamadı: ${path}`);
    process.exit(1);
  }

  const lines = readFileSync(path, "utf-8").split("\n").filter(Boolean);
  const stats = new Map<string, Map<string, Map<string, number>>>();

  let skipped = 0;
  for (const line of lines) {
    let entry: TelemetryLine;
    try {
      entry = JSON.parse(line);
    } catch {
      skipped++;
      continue;
    }
    if (!entry.appliedThinking) {
      skipped++;
      continue;
    }
    const model = entry.appliedModel ?? entry.workflow.modelPool[0];
    const requested = entry.workflow.thinking;
    const applied = entry.appliedThinking;

    if (!stats.has(model)) stats.set(model, new Map());
    const byRequested = stats.get(model)!;
    if (!byRequested.has(requested)) byRequested.set(requested, new Map());
    const byApplied = byRequested.get(requested)!;
    byApplied.set(applied, (byApplied.get(applied) ?? 0) + 1);
  }

  console.log(
    `\n${lines.length} kayıt okundu, ${skipped} tanesi atlandı ` +
    `(appliedThinking yok -- --execute ile ya da extension üzerinden ` +
    `gerçekten çalıştırılmamış kararlar).\n`
  );

  if (stats.size === 0) {
    console.log("Hiç kalibre edilebilir veri yok. Extension'ı gerçek Pi'de birkaç kez kullanıp tekrar dene.");
    return;
  }

  for (const [model, byRequested] of stats) {
    console.log(`## ${model}`);
    for (const [requested, byApplied] of byRequested) {
      const parts = [...byApplied.entries()]
        .map(([applied, count]) => `${applied}×${count}`)
        .join(", ");
      const mismatch = [...byApplied.keys()].some((a) => a !== requested);
      const flag = mismatch ? "  ⚠️  UYUŞMUYOR -- policy.json'da bu modelin thinking değerini gözden geçir" : "";
      console.log(`  istenen="${requested}" -> uygulanan: ${parts}${flag}`);
    }
    console.log("");
  }
}

main();
