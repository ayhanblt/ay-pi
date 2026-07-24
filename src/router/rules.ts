/**
 * RULES
 * -----
 * Evaluates `RouteRule` `when` expressions against a `RequestSignal`.
 * Implementation is strictly deterministic and pure-CPU with zero network overhead.
 */

import type { RequestSignal, RouteRule } from "./types.js";

/**
 * Evaluates numeric comparison expressions (e.g. "<10", ">=5", "==0") against a numeric value.
 */
export function evalNumericExpr(value: number | undefined, expr: string): boolean {
  if (value === undefined) return false;

  const match = expr.match(/^(<=|>=|<|>|==)(\d+)$/);
  if (!match) {
    throw new Error(`Invalid condition expression: "${expr}"`);
  }
  const [, operator, numberText] = match;
  const threshold = Number(numberText);

  switch (operator) {
    case "<": return value < threshold;
    case "<=": return value <= threshold;
    case ">": return value > threshold;
    case ">=": return value >= threshold;
    case "==": return value === threshold;
    default: return false;
  }
}

/**
 * Evaluates boolean equality expressions (e.g. "true", "false") against a boolean value.
 */
export function evalBooleanExpr(value: boolean | undefined, expr: string): boolean {
  if (value === undefined) return false;
  return String(value) === expr;
}

/**
 * Evaluates string equality expressions (e.g. "==deep") against a string value.
 */
export function evalStringExpr(value: string | undefined, expr: string): boolean {
  if (value === undefined) return false;
  const match = expr.match(/^==(.+)$/);
  if (!match) {
    throw new Error(`Invalid string condition expression: "${expr}" (expected format: "==value")`);
  }
  return value === match[1];
}

/**
 * Checks whether a `RequestSignal` satisfies all conditions defined in a `RouteRule` `when` block (AND logic).
 */
export function matchesWhen(signal: RequestSignal, rule: RouteRule): boolean {
  if (!rule.when) return true; // Unconditional rule always matches

  return Object.entries(rule.when).every(([key, expr]) => {
    const fieldValue = signal[key as keyof RequestSignal];
    if (typeof fieldValue === "boolean") {
      return evalBooleanExpr(fieldValue, expr as string);
    }
    if (typeof fieldValue === "string") {
      return evalStringExpr(fieldValue, expr as string);
    }
    return evalNumericExpr(fieldValue as number | undefined, expr as string);
  });
}

/**
 * Returns the first rule in a rule list matching the provided `RequestSignal`.
 * Rules are evaluated sequentially in array order.
 */
export function findMatchingRule(signal: RequestSignal, rules: RouteRule[]): RouteRule {
  const found = rules.find((rule) => matchesWhen(signal, rule));
  if (!found) {
    throw new Error(
      `No matching rule found. Signal: ${JSON.stringify(signal)}. ` +
      `Ensure a fallback rule is defined in the policy.`
    );
  }
  return found;
}

