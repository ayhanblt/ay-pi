import assert from "node:assert/strict";
import test from "node:test";
import { rankScores } from "@/behavior/semanticEngine.js";

test("rankScores exposes top score and runner-up for abstention", () => {
  assert.deepEqual(rankScores([
    { id: "CHAT", score: 0.7 },
    { id: "CODE", score: 0.8 },
    { id: "PLAN", score: 0.75 },
  ]).map((item) => item.id), ["CODE", "PLAN", "CHAT"]);
});
