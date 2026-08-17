import assert from "node:assert/strict";
import test from "node:test";
import { resolveBehaviorByRule } from "@/behavior/ruleEngine.js";
import { buildSignal } from "@/input/signal.js";

test("explicit command wins over all semantic behavior", () => {
  const result = resolveBehaviorByRule(buildSignal("/review bunu uygula"));
  assert.equal(result?.behavior, "REVIEW");
  assert.equal(result?.source, "rule");
});

test("handoff behavior is deterministic while preserving explicit command priority", () => {
  const forced = resolveBehaviorByRule(buildSignal("continue", { forcedBehavior: "CODE" }));
  assert.equal(forced?.behavior, "CODE");
  assert.equal(forced?.ruleId, "handoff::forced-behavior");

  const explicit = resolveBehaviorByRule(buildSignal("/review", { forcedBehavior: "CODE" }));
  assert.equal(explicit?.behavior, "REVIEW");
});
