/**
 * ASSEMBLER.TS
 * -------------
 * GİRDİ:  aday dosya listesi (Pi adaptörünün topladığı, proje içindeki
 *         açık/değişen dosyalar) + WorkflowObject.contextBudget
 * ÇIKTI:  budget'a uyan, öncelik sırasına göre seçilmiş dosya listesi
 *
 * Bu fonksiyon LLM çağırmaz, embedding kullanmaz. Basit bir
 * "önce aktif dosya, sonra en son değişenler" sıralaması + bütçe
 * dolana kadar ekleme mantığı yürütür.
 */

import type { FileCandidate } from "./types.js";
import type { ContextBudget } from "../workflow/types.js";

export function selectFiles(
  candidates: FileCandidate[],
  budget: ContextBudget
): FileCandidate[] {
  const sorted = [...candidates].sort((a, b) => {
    if (a.isActive !== b.isActive) return a.isActive ? -1 : 1;
    return b.lastModifiedAt - a.lastModifiedAt;
  });

  const selected: FileCandidate[] = [];
  let usedChars = 0;

  for (const file of sorted) {
    if (selected.length >= budget.maxFiles) break;
    if (usedChars + file.size > budget.maxChars) continue; // sığmıyorsa atla, sıradakine bak
    selected.push(file);
    usedChars += file.size;
  }

  return selected;
}
