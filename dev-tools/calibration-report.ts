/**
 * CALIBRATION REPORT GENERATOR
 * ============================
 * Reads `ay-pi.telemetry.jsonl` and aggregates discrepancies between requested
 * thinking levels and actual applied thinking levels across models.
 *
 * Usage:
 *   npx tsx dev-tools/calibration-report.ts [telemetry-file-path]
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
    console.error(`Telemetry file not found: ${path}`);
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
    `\nParsed ${lines.length} entries (${skipped} skipped due to missing appliedThinking).\n`
  );

  if (stats.size === 0) {
    console.log("No calibration data found. Execute sessions via Pi or CLI with --execute to populate telemetry.");
    return;
  }

  for (const [model, byRequested] of stats) {
    console.log(`## ${model}`);
    for (const [requested, byApplied] of byRequested) {
      const parts = [...byApplied.entries()]
        .map(([applied, count]) => `${applied}×${count}`)
        .join(", ");
      const mismatch = [...byApplied.keys()].some((a) => a !== requested);
      const flag = mismatch ? "  ⚠️  MISMATCH -- review thinking settings in policy.json for this model" : "";
      console.log(`  requested="${requested}" -> applied: ${parts}${flag}`);
    }
    console.log("");
  }
}

main();

