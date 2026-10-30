/**
 * Optional classifier step (Jev and other Pi classifier models).
 *
 * Pi owns the credentials: a key added with /login (e.g. TypeSafe) or an env var
 * (TYPESAFE_API_KEY, OPENROUTER_API_KEY, ...) makes the classifier available.
 * AY-PI only asks typed questions and turns the answers into a ClassifierVerdict.
 */

import type { ExtensionContext } from "@earendil-works/pi-coding-agent";
import { BEHAVIORS, type Behavior } from "./profiles.js";
import type { ClassifierVerdict } from "./decide.js";
import { formatModelRef, parseModelRef } from "./models.js";

type Registry = ExtensionContext["modelRegistry"];
export type ClassifierModel = Parameters<Registry["classify"]>[0];
type ClassifierContext = Parameters<Registry["classify"]>[1];

const MAX_PROMPT_CHARS = 16_000;

/** Resolves the configured classifier to an available model, or undefined. */
export async function findClassifier(registry: Registry, setting: string): Promise<ClassifierModel | undefined> {
  if (setting === "off") return undefined;
  const available = (await registry.getAvailableOfType("classifier")) as readonly ClassifierModel[];
  if (setting === "auto") {
    return available.find((model) => /jev/i.test(model.id)) ?? available[0];
  }
  const ref = parseModelRef(setting);
  return available.find((model) => ref && model.provider === ref.provider && model.id === ref.id);
}

export async function listClassifiers(registry: Registry): Promise<string[]> {
  const available = (await registry.getAvailableOfType("classifier")) as readonly ClassifierModel[];
  return available.map((model) => formatModelRef(model));
}

const TASK_CRITERIA: Record<Behavior, string> = {
  CHAT: "Asks a question or wants something explained; no change is requested",
  SUGGEST: "Wants options, recommendations or a proposal, without changing files",
  REVIEW: "Wants existing code reviewed or audited, with findings reported",
  PLAN: "Wants work designed or planned before anything is implemented",
  CODE: "Wants files changed: implement, fix, refactor, or write tests",
};

/**
 * The classifier only ever sees the user's message. The pending plan is model output that may
 * carry text from files the model read, so it is never shown to the approval question.
 */
export function buildQuestions(prompt: string, hasPendingPlan = false, planningOpen = false): ClassifierContext {
  const state: Record<string, string> = { message: prompt.slice(0, MAX_PROMPT_CHARS) };
  const questions: ClassifierContext["questions"] = {
    task: {
      type: "choice",
      instructions: "What does the user ask the coding agent to do in `message`?",
      criteria: Object.fromEntries(BEHAVIORS.map((behavior) => [behavior.toLowerCase(), TASK_CRITERIA[behavior]])),
    },
    fileChanges: {
      type: "bool",
      instructions: "Does `message` ask the agent to modify files in the repository now?",
      criteria: { true: "Yes, change files now", false: "No, only talk, propose, review or plan" },
    },
    complexity: {
      type: "score",
      instructions: "How demanding is the software engineering work in `message`?",
      criteria: ["Trivial or quick", "Ordinary feature, fix, review or question", "Hard: subtle design, cross-cutting change or deep debugging"],
    },
  };
  if (hasPendingPlan) {
    questions.approvesPlan = {
      type: "bool",
      instructions:
        "Last turn the assistant proposed a plan and asked the user to approve it. Does `message` approve that plan and ask to implement it now?",
      criteria: { true: "Approves and asks to implement", false: "Does not approve, asks for changes, or talks about something else" },
    };
  }
  if (planningOpen) {
    questions.continuesPlan = {
      type: "bool",
      instructions:
        "Last turn the assistant was planning a change and asked the user a question before finishing the plan. Does `message` answer that question or add details for the plan, rather than start something else?",
      criteria: { true: "Answers the question or adds plan details", false: "Starts another topic or asks for something else" },
    };
  }
  return { state, questions };
}

type Answers = Awaited<ReturnType<Registry["classify"]>>["answers"];

/** Converts classifier answers; returns undefined when an answer is missing or malformed. */
export function toVerdict(answers: Answers): ClassifierVerdict | undefined {
  const { task, fileChanges, complexity, approvesPlan, continuesPlan } = answers;
  if (task?.type !== "choice" || fileChanges?.type !== "bool" || complexity?.type !== "score") return undefined;
  const behavior = task.choice.toUpperCase() as Behavior;
  if (!BEHAVIORS.includes(behavior)) return undefined;
  return {
    behavior,
    confidence: task.probabilities[task.choice] ?? task.confidence,
    wantsFileChanges: fileChanges.probability,
    complexity: complexity.score,
    approvesPlan: approvesPlan?.type === "bool" ? approvesPlan.probability : undefined,
    continuesPlan: continuesPlan?.type === "bool" ? continuesPlan.probability : undefined,
  };
}

/** Never throws: a failing classifier means "no verdict" and the ladder falls through. */
export async function classify(
  registry: Registry,
  model: ClassifierModel,
  prompt: string,
  hasPendingPlan: boolean,
  planningOpen: boolean,
  signal?: AbortSignal,
): Promise<ClassifierVerdict | undefined> {
  try {
    const result = await registry.classify(model, buildQuestions(prompt, hasPendingPlan, planningOpen), { signal });
    return result.stopReason === "stop" ? toVerdict(result.answers) : undefined;
  } catch {
    return undefined;
  }
}
