const MODEL_ALIASES: Array<[string, string]> = [
  ["kimi-v2.7-code", "kimi-k2.7-code"],
  ["kimi-v.27-code", "kimi-k2.7-code"],
  ["kimi-2.7-code", "kimi-k2.7-code"],
  ["kimi-k2.7-code", "kimi-k2.7-code"],
  ["deepseek-v4-pro", "deepseek-v4-pro"],
  ["deepseek-v4-flash", "deepseek-v4-flash"],
  ["deepseek-v4", "deepseek-v4-pro"],
  ["glm-5.2", "glm-5.2"],
  ["qwen3.7-max", "qwen3.7-max"],
  ["minimax-m3", "minimax-m3"],
  ["mimo-v2.5-pro", "mimo-v2.5"],
  ["mimo-2.5-pro", "mimo-v2.5"],
  ["mimo-v2.5", "mimo-v2.5"],
];

function normalizeModelText(text: string): string {
  return text
    .toLocaleLowerCase("tr-TR")
    .split("")
    .map((character) => "\u2010\u2011\u2012\u2013\u2014\u2015".includes(character) || character.trim() === "" ? "-" : character)
    .join("")
    .split("-")
    .filter(Boolean)
    .join("-");
}

export function canonicalModelId(model: string): string {
  const normalized = normalizeModelText(model);
  return MODEL_ALIASES.find(([alias]) => alias === normalized)?.[1] ?? normalized;
}

export function detectRequestedModel(text: string): string | undefined {
  const normalized = normalizeModelText(text);
  const match = [...MODEL_ALIASES]
    .sort(([left], [right]) => right.length - left.length)
    .find(([alias]) => normalized.includes(alias));
  return match?.[1];
}
