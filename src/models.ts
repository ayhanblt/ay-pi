/**
 * Tier -> model resolution.
 *
 * Each tier is a fallback chain. When a tier has nothing available, the
 * neighbouring tiers are tried: a missing "high" model is better replaced by
 * "medium" than by "low".
 */

import type { AyPiConfig } from "./config.js";
import type { Tier } from "./profiles.js";

const FALLBACK_ORDER: Record<Tier, Tier[]> = {
  low: ["low", "medium", "high"],
  medium: ["medium", "high", "low"],
  high: ["high", "medium", "low"],
};

export interface ModelRef {
  provider: string;
  id: string;
}

/** "openrouter/typesafe/jev-1.14" -> provider "openrouter", id "typesafe/jev-1.14". */
export function parseModelRef(ref: string): ModelRef | undefined {
  const slash = ref.indexOf("/");
  if (slash <= 0 || slash === ref.length - 1) return undefined;
  return { provider: ref.slice(0, slash), id: ref.slice(slash + 1) };
}

export function formatModelRef(model: ModelRef): string {
  return `${model.provider}/${model.id}`;
}

/** Every configured reference for a tier, in the order they should be tried. */
export function candidateRefs(tiers: AyPiConfig["tiers"], tier: Tier): Array<{ ref: string; tier: Tier }> {
  const seen = new Set<string>();
  const result: Array<{ ref: string; tier: Tier }> = [];
  for (const candidateTier of FALLBACK_ORDER[tier]) {
    for (const ref of tiers[candidateTier]) {
      if (seen.has(ref)) continue;
      seen.add(ref);
      result.push({ ref, tier: candidateTier });
    }
  }
  return result;
}

export interface ModelLookup<M> {
  /** Returns the model only when it exists and has credentials. */
  findUsable(ref: ModelRef): M | undefined;
}

export interface ResolvedModel<M> {
  model: M;
  ref: string;
  /** The tier the model came from; differs from the request when a fallback was used. */
  tier: Tier;
}

/** First usable model for the tier, skipping `exclude` (e.g. the model that just failed). */
export function resolveTierModel<M>(
  tiers: AyPiConfig["tiers"],
  tier: Tier,
  lookup: ModelLookup<M>,
  exclude: ReadonlySet<string> = new Set(),
): ResolvedModel<M> | undefined {
  for (const candidate of candidateRefs(tiers, tier)) {
    if (exclude.has(candidate.ref)) continue;
    const parsed = parseModelRef(candidate.ref);
    const model = parsed && lookup.findUsable(parsed);
    if (model) return { model, ref: candidate.ref, tier: candidate.tier };
  }
  return undefined;
}

export function hasAnyTierModel(tiers: AyPiConfig["tiers"]): boolean {
  return Object.values(tiers).some((refs) => refs.length > 0);
}
