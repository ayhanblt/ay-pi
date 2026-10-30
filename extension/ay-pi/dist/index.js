// src/index.ts
import { join } from "node:path";
import { getAgentDir } from "@earendil-works/pi-coding-agent";

// src/profiles.ts
var BEHAVIORS = ["CHAT", "SUGGEST", "REVIEW", "PLAN", "CODE"];
var TIERS = ["low", "medium", "high"];
var PROFILES = {
  CHAT: {
    tier: "low",
    thinking: "low",
    canWrite: false,
    instructions: "Answer the question or explain. Do not modify files."
  },
  SUGGEST: {
    tier: "medium",
    thinking: "medium",
    canWrite: false,
    instructions: "Propose options and explain their trade-offs. Code snippets are allowed as examples, but do not modify files."
  },
  REVIEW: {
    tier: "medium",
    thinking: "medium",
    canWrite: false,
    instructions: "Review the relevant code and report concrete findings, most severe first. Do not modify files."
  },
  PLAN: {
    tier: "high",
    thinking: "high",
    canWrite: false,
    instructions: "Write a step-by-step plan under a `## Plan` heading. Do not write code or modify files. End by asking the user to approve the plan (they can reply with /code). If the request is unclear, ask a clarifying question instead and do not write the heading."
  },
  CODE: {
    tier: "medium",
    thinking: "medium",
    canWrite: true,
    instructions: "Implement the requested change. Keep the change focused on the request."
  }
};
var SAFE_DEFAULT = { behavior: "CHAT", tier: "medium" };
var WRITE_TOOLS = /* @__PURE__ */ new Set(["edit", "write", "bash", "powershell"]);
function blocksTool(behavior, tool) {
  return !PROFILES[behavior].canWrite && WRITE_TOOLS.has(tool);
}
function shiftTier(tier, by) {
  const index = Math.min(Math.max(TIERS.indexOf(tier) + by, 0), TIERS.length - 1);
  return TIERS[index];
}
function isTier(value) {
  return TIERS.includes(value);
}
function extractPlan(answer) {
  const start = answer.search(/^##\s+Plan\b/im);
  return start === -1 ? void 0 : answer.slice(start).trim();
}
function behaviorInstructions(behavior) {
  const blocked = PROFILES[behavior].canWrite ? "" : "\nThe edit, write and bash tools are blocked in this turn.";
  return `AY-PI mode: ${behavior}.
${PROFILES[behavior].instructions}${blocked}`;
}

// src/models.ts
var FALLBACK_ORDER = {
  low: ["low", "medium", "high"],
  medium: ["medium", "high", "low"],
  high: ["high", "medium", "low"]
};
function parseModelRef(ref) {
  const slash = ref.indexOf("/");
  if (slash <= 0 || slash === ref.length - 1) return void 0;
  return { provider: ref.slice(0, slash), id: ref.slice(slash + 1) };
}
function formatModelRef(model) {
  return `${model.provider}/${model.id}`;
}
function candidateRefs(tiers, tier) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const candidateTier of FALLBACK_ORDER[tier]) {
    for (const ref of tiers[candidateTier]) {
      if (seen.has(ref)) continue;
      seen.add(ref);
      result.push({ ref, tier: candidateTier });
    }
  }
  return result;
}
function resolveTierModel(tiers, tier, lookup, exclude = /* @__PURE__ */ new Set()) {
  for (const candidate of candidateRefs(tiers, tier)) {
    if (exclude.has(candidate.ref)) continue;
    const parsed = parseModelRef(candidate.ref);
    const model = parsed && lookup.findUsable(parsed);
    if (model) return { model, ref: candidate.ref, tier: candidate.tier };
  }
  return void 0;
}
function hasAnyTierModel(tiers) {
  return Object.values(tiers).some((refs) => refs.length > 0);
}

// src/classifier.ts
var MAX_PROMPT_CHARS = 16e3;
async function findClassifier(registry, setting) {
  if (setting === "off") return void 0;
  const available = await registry.getAvailableOfType("classifier");
  if (setting === "auto") {
    return available.find((model) => /jev/i.test(model.id)) ?? available[0];
  }
  const ref = parseModelRef(setting);
  return available.find((model) => ref && model.provider === ref.provider && model.id === ref.id);
}
async function listClassifiers(registry) {
  const available = await registry.getAvailableOfType("classifier");
  return available.map((model) => formatModelRef(model));
}
var TASK_CRITERIA = {
  CHAT: "Asks a question or wants something explained; no change is requested",
  SUGGEST: "Wants options, recommendations or a proposal, without changing files",
  REVIEW: "Wants existing code reviewed or audited, with findings reported",
  PLAN: "Wants work designed or planned before anything is implemented",
  CODE: "Wants files changed: implement, fix, refactor, or write tests"
};
function buildQuestions(prompt, hasPendingPlan = false) {
  const state = { message: prompt.slice(0, MAX_PROMPT_CHARS) };
  const questions = {
    task: {
      type: "choice",
      instructions: "What does the user ask the coding agent to do in `message`?",
      criteria: Object.fromEntries(BEHAVIORS.map((behavior) => [behavior.toLowerCase(), TASK_CRITERIA[behavior]]))
    },
    fileChanges: {
      type: "bool",
      instructions: "Does `message` ask the agent to modify files in the repository now?",
      criteria: { true: "Yes, change files now", false: "No, only talk, propose, review or plan" }
    },
    complexity: {
      type: "score",
      instructions: "How demanding is the software engineering work in `message`?",
      criteria: ["Trivial or quick", "Ordinary feature, fix, review or question", "Hard: subtle design, cross-cutting change or deep debugging"]
    }
  };
  if (hasPendingPlan) {
    questions.approvesPlan = {
      type: "bool",
      instructions: "Last turn the assistant proposed a plan and asked the user to approve it. Does `message` approve that plan and ask to implement it now?",
      criteria: { true: "Approves and asks to implement", false: "Does not approve, asks for changes, or talks about something else" }
    };
  }
  return { state, questions };
}
function toVerdict(answers) {
  const { task, fileChanges, complexity, approvesPlan } = answers;
  if (task?.type !== "choice" || fileChanges?.type !== "bool" || complexity?.type !== "score") return void 0;
  const behavior = task.choice.toUpperCase();
  if (!BEHAVIORS.includes(behavior)) return void 0;
  return {
    behavior,
    confidence: task.probabilities[task.choice] ?? task.confidence,
    wantsFileChanges: fileChanges.probability,
    complexity: complexity.score,
    approvesPlan: approvesPlan?.type === "bool" ? approvesPlan.probability : void 0
  };
}
async function classify(registry, model, prompt, hasPendingPlan, signal) {
  try {
    const result = await registry.classify(model, buildQuestions(prompt, hasPendingPlan), { signal });
    return result.stopReason === "stop" ? toVerdict(result.answers) : void 0;
  } catch {
    return void 0;
  }
}

// src/commands.ts
var COMMANDS = {
  chat: "CHAT",
  suggest: "SUGGEST",
  review: "REVIEW",
  plan: "PLAN",
  code: "CODE"
};
function renamedCommands(available, ours) {
  const renamed = new Set(available.filter((name) => /:\d+$/.test(name)).map((name) => name.replace(/:\d+$/, "")));
  return ours.filter((name) => renamed.has(name));
}
function commandNames(overrides) {
  return Object.entries(COMMANDS).flatMap(([name, behavior]) => {
    const override = overrides[name];
    if (override === false) return [];
    return [[override ?? name, behavior]];
  });
}

// src/config.ts
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
function defaultConfig() {
  return { tiers: { low: [], medium: [], high: [] }, classifier: "auto", scope: "full", commands: {} };
}
function parseConfig(raw, source) {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new Error(`${source}: expected a JSON object`);
  }
  const input = raw;
  const result = {};
  if (input.tiers !== void 0) {
    if (typeof input.tiers !== "object" || input.tiers === null) throw new Error(`${source}: "tiers" must be an object`);
    const tiers = {};
    for (const [key, value] of Object.entries(input.tiers)) {
      if (!TIERS.includes(key)) throw new Error(`${source}: unknown tier "${key}" (use low, medium, high)`);
      if (!Array.isArray(value) || value.some((ref) => typeof ref !== "string" || !ref.includes("/"))) {
        throw new Error(`${source}: tiers.${key} must be a list of "provider/model" strings`);
      }
      tiers[key] = value;
    }
    result.tiers = tiers;
  }
  if (input.classifier !== void 0) {
    if (typeof input.classifier !== "string") throw new Error(`${source}: "classifier" must be a string`);
    result.classifier = input.classifier;
  }
  if (input.scope !== void 0) {
    if (input.scope !== "full" && input.scope !== "routing") throw new Error(`${source}: "scope" must be "full" or "routing"`);
    result.scope = input.scope;
  }
  if (input.commands !== void 0) {
    if (typeof input.commands !== "object" || input.commands === null) throw new Error(`${source}: "commands" must be an object`);
    const commands = {};
    for (const [key, value] of Object.entries(input.commands)) {
      if (!(key in COMMANDS)) throw new Error(`${source}: unknown command "${key}" (use ${Object.keys(COMMANDS).join(", ")})`);
      if (value !== false && (typeof value !== "string" || !/^[a-z][a-z0-9-]*$/.test(value))) {
        throw new Error(`${source}: commands.${key} must be false or a command name like "ay-${key}"`);
      }
      commands[key] = value;
    }
    result.commands = commands;
  }
  return result;
}
function readFile(path) {
  if (!existsSync(path)) return {};
  return parseConfig(JSON.parse(readFileSync(path, "utf-8")), path);
}
function merge(config, part) {
  return {
    tiers: { ...config.tiers, ...part.tiers },
    classifier: part.classifier ?? config.classifier,
    scope: part.scope ?? config.scope,
    commands: { ...config.commands, ...part.commands }
  };
}
function loadConfig(paths) {
  return paths.reduce((config, path) => merge(config, readFile(path)), defaultConfig());
}
function updateUserConfig(path, change) {
  const config = merge(defaultConfig(), readFile(path));
  change(config);
  const { scope, commands, ...rest } = config;
  const file = { ...rest, ...scope !== "full" && { scope }, ...Object.keys(commands).length > 0 && { commands } };
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(file, null, 2)}
`);
  return config;
}

// src/decide.ts
var WRITE_CONFIDENCE = 0.8;
var TASK_CONFIDENCE = 0.5;
function extensionTurn(previous) {
  return {
    behavior: previous?.behavior ?? SAFE_DEFAULT.behavior,
    tier: previous?.tier ?? SAFE_DEFAULT.tier,
    source: "extension",
    reason: "turn started by another extension",
    usePlan: false
  };
}
function decide(input) {
  const decision = climb(input);
  return input.pinnedTier ? { ...decision, tier: input.pinnedTier, reason: `${decision.reason}; tier pinned` } : decision;
}
function climb({ command, hasPendingPlan, verdict }) {
  if (command) {
    const usePlan = command === "CODE" && hasPendingPlan;
    return {
      behavior: command,
      tier: PROFILES[command].tier,
      source: "command",
      reason: usePlan ? "explicit /code approves the pending plan" : "explicit command",
      usePlan
    };
  }
  if (verdict && hasPendingPlan && (verdict.approvesPlan ?? 0) >= WRITE_CONFIDENCE) {
    return { behavior: "CODE", tier: PROFILES.CODE.tier, source: "plan", reason: "classifier: plan approved", usePlan: true };
  }
  if (verdict && verdict.confidence >= TASK_CONFIDENCE) {
    let behavior = verdict.behavior;
    let reason = `classifier: ${behavior.toLowerCase()}`;
    if (behavior === "CODE" && verdict.wantsFileChanges < WRITE_CONFIDENCE) {
      behavior = "SUGGEST";
      reason = "classifier: code change not confirmed, suggesting instead";
    }
    const tier = shiftTier(PROFILES[behavior].tier, Math.round(verdict.complexity) - 1);
    return { behavior, tier, source: "classifier", reason, usePlan: false };
  }
  return {
    ...SAFE_DEFAULT,
    source: "default",
    reason: verdict ? "classifier unsure" : "no command, no classifier",
    usePlan: false
  };
}

// src/index.ts
var VIRTUAL = { provider: "ay-pi", id: "auto" };
var STATE_ENTRY = "ay-pi.state";
var DECISION_ENTRY = "ay-pi.decision";
var PID_ENV = "AY_PI_PID";
var TIER_ENV = "AY_PI_TIER";
function ayPi(pi) {
  let config = defaultConfig();
  let session = {};
  let command;
  let decision;
  let lastRouted;
  let routed;
  let lastSuggestion;
  const extensionPrompts = [];
  const userConfigPath = () => join(getAgentDir(), "ay-pi.json");
  const behaviorCommands = (() => {
    try {
      return commandNames(loadConfig([userConfigPath()]).commands);
    } catch {
      return commandNames({});
    }
  })();
  const codeCommand = behaviorCommands.find(([, behavior]) => behavior === "CODE")?.[0];
  const approveHint = codeCommand ? `reply with /${codeCommand}` : "reply to approve it";
  const isRoutingOnly = () => config.scope === "routing";
  const parentPid = process.env[PID_ENV];
  const parentTier = process.env[TIER_ENV];
  const subagentTier = parentPid && parentPid !== String(process.pid) ? parentTier && isTier(parentTier) ? parentTier : "medium" : void 0;
  process.env[PID_ENV] = String(process.pid);
  function reloadConfig(ctx) {
    const paths = [userConfigPath()];
    if (ctx.isProjectTrusted()) paths.push(join(ctx.cwd, ".pi", "ay-pi.json"));
    try {
      config = loadConfig(paths);
    } catch (error) {
      config = defaultConfig();
      ctx.ui.notify(`AY-PI: ${error.message}. Using defaults.`, "error");
    }
  }
  function saveState() {
    pi.appendEntry(STATE_ENTRY, session);
  }
  function isAuto(ctx) {
    return ctx.model?.provider === VIRTUAL.provider && ctx.model?.id === VIRTUAL.id;
  }
  function resolveTier(ctx, tier, exclude) {
    return resolveTierModel(config.tiers, tier, {
      findUsable: (ref) => {
        const model = ctx.modelRegistry.find(ref.provider, ref.id);
        return model && ctx.modelRegistry.hasConfiguredAuth(model) ? model : void 0;
      }
    }, exclude);
  }
  function fallbackModel(ctx, previous) {
    if (previous) return previous;
    const model = ctx.modelRegistry.getAvailable().find((candidate) => !(candidate.provider === VIRTUAL.provider && candidate.id === VIRTUAL.id));
    if (!model) throw new Error("AY-PI: no usable model. Log in to a provider, then add models with /ay-pi add <tier>.");
    return model;
  }
  function suggestInManualMode(ctx, current) {
    if (!hasAnyTierModel(config.tiers)) return;
    const currentRef = ctx.model ? formatModelRef(ctx.model) : void 0;
    if (currentRef && config.tiers[current.tier].includes(currentRef)) return;
    const suggested = resolveTier(ctx, current.tier);
    const key = `${current.tier}:${suggested?.ref}:${currentRef}`;
    if (key === lastSuggestion) return;
    lastSuggestion = key;
    ctx.ui.notify(
      `AY-PI suggests the ${current.tier} tier${suggested ? ` (${suggested.ref})` : ""} for this ${current.behavior} request. Current model: ${currentRef ?? "none"}. Switch with /model, or run /ay-pi auto.`,
      "info"
    );
  }
  function showStatus(ctx) {
    const mode = (isAuto(ctx) ? "auto" : "manual") + (isRoutingOnly() ? " \xB7 routing only" : "");
    const pin = session.pinnedTier ? " (pinned)" : "";
    if (!decision) {
      ctx.ui.setStatus("ay-pi", `AY-PI ready \xB7 ${session.pinnedTier ?? "auto tier"}${pin} \xB7 ${mode}`);
      return;
    }
    const tier = routed?.tier && routed.tier !== decision.tier ? `${decision.tier}\u2192${routed.tier}` : decision.tier;
    const model = isAuto(ctx) && routed ? ` \xB7 ${routed.model}` : "";
    const label = decision.source === "extension" ? "extension turn" : decision.behavior;
    ctx.ui.setStatus("ay-pi", `AY-PI ${label} \xB7 ${tier}${pin} \xB7 ${mode}${model}`);
  }
  pi.registerVirtualModel({
    provider: VIRTUAL.provider,
    id: VIRTUAL.id,
    name: "AY-PI Auto",
    route(request, ctx) {
      const current = decision ?? { ...SAFE_DEFAULT, source: "default", reason: "no decision yet", usePlan: false };
      const thinkingLevel = subagentTier ? request.thinkingLevel : PROFILES[current.behavior].thinking;
      if (request.reason === "continuation" && request.previous) {
        return { model: request.previous.model, thinkingLevel: request.previous.thinkingLevel ?? thinkingLevel };
      }
      const tier = request.reason === "direct" ? "low" : subagentTier ?? current.tier;
      const exclude = /* @__PURE__ */ new Set();
      if (request.reason === "retry" && request.failed) exclude.add(formatModelRef(request.failed.model));
      const resolved = resolveTier(ctx, tier, exclude);
      const model = resolved?.model ?? fallbackModel(ctx, request.previous?.model);
      const ref = resolved?.ref ?? formatModelRef(model);
      lastRouted = ref;
      if (request.reason !== "direct" && !subagentTier) {
        routed = { tier: resolved?.tier, model: model.id };
        showStatus(ctx);
      }
      return { model, thinkingLevel, state: { tier: resolved?.tier ?? tier, model: ref } };
    }
  });
  if (subagentTier) {
    pi.on("session_start", async (_event, ctx) => reloadConfig(ctx));
    return;
  }
  pi.on("session_start", async (_event, ctx) => {
    reloadConfig(ctx);
    const saved = [...ctx.sessionManager.getBranch()].reverse().find((entry) => entry.type === "custom" && entry.customType === STATE_ENTRY);
    session = saved?.data ? { ...saved.data } : {};
    if (session.removedTools?.length) {
      const active = pi.getActiveTools();
      pi.setActiveTools([...active, ...session.removedTools.filter((tool) => !active.includes(tool))]);
      session.removedTools = void 0;
      saveState();
    }
    decision = void 0;
    routed = void 0;
    extensionPrompts.length = 0;
    showStatus(ctx);
    const ours = behaviorCommands.map(([name]) => name);
    for (const base of renamedCommands(pi.getCommands().map((info) => info.name), ours)) {
      ctx.ui.notify(
        `AY-PI: another extension also registers /${base}, so Pi renamed both to /${base}:1 and /${base}:2. Give AY-PI's another name with "commands": { "${base}": "ay-${base}" } in ay-pi.json, or leave /${base} to the other extension with false, then /reload.`,
        "warning"
      );
    }
    if (isAuto(ctx) && !hasAnyTierModel(config.tiers)) {
      ctx.ui.notify("AY-PI: no tier models configured yet. Add some with /ay-pi add low|medium|high.", "warning");
    }
  });
  pi.on("input", async (event) => {
    if (event.source === "extension" && !command) {
      extensionPrompts.push(event.text);
      if (extensionPrompts.length > 20) extensionPrompts.shift();
    }
    return { action: "continue" };
  });
  pi.on("before_agent_start", async (event, ctx) => {
    const explicit = event.messageType === "user" ? command : void 0;
    if (event.messageType === "user") command = void 0;
    const queued = event.messageType === "user" ? extensionPrompts.indexOf(event.prompt) : -1;
    if (queued !== -1) extensionPrompts.splice(queued, 1);
    if (event.messageType !== "user" || !explicit && queued !== -1) {
      decision = extensionTurn(decision);
      routed = void 0;
      showStatus(ctx);
      pi.appendEntry(DECISION_ENTRY, { ...decision, mode: isAuto(ctx) ? "auto" : "manual" });
      return {};
    }
    const routingOnly = isRoutingOnly();
    const hasPendingPlan = !routingOnly && Boolean(session.pendingPlan);
    let verdict;
    if (!explicit) {
      const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
      if (classifier) verdict = await classify(ctx.modelRegistry, classifier, event.prompt, hasPendingPlan, ctx.signal);
    }
    decision = decide({ command: explicit, hasPendingPlan, verdict, pinnedTier: session.pinnedTier });
    const plan = decision.usePlan ? session.pendingPlan : void 0;
    if (plan) session.pendingPlan = void 0;
    if (decision.source === "plan") {
      ctx.ui.notify("AY-PI: plan approved, implementing it now.", "info");
    }
    if (decision.source === "default" && hasPendingPlan) {
      ctx.ui.notify(`AY-PI: a plan is waiting. To implement it, ${approveHint}; this turn stays read-only.`, "info");
    }
    if (!isAuto(ctx)) suggestInManualMode(ctx, decision);
    process.env[TIER_ENV] = decision.tier;
    routed = void 0;
    showStatus(ctx);
    pi.appendEntry(DECISION_ENTRY, { ...decision, verdict, mode: isAuto(ctx) ? "auto" : "manual", ...routingOnly && { scope: "routing" } });
    saveState();
    if (routingOnly) return {};
    return {
      systemPrompt: `${event.systemPrompt}

${behaviorInstructions(decision.behavior).replace("reply with /code", approveHint)}`,
      message: plan ? { customType: "ay-pi.plan", content: `Approved plan. Implement it; do not re-plan.

${plan}`, display: false } : void 0
    };
  });
  pi.on("tool_call", async (event) => {
    if (isRoutingOnly()) return;
    const current = decision ?? { ...SAFE_DEFAULT, source: "default" };
    if (current.source === "extension" || !blocksTool(current.behavior, event.toolName)) return;
    const unlock = codeCommand ? `reply with /${codeCommand}` : "ask for the change directly";
    return {
      block: true,
      reason: `AY-PI: this is a read-only ${current.behavior} turn, so ${event.toolName} is blocked. Ask the user to ${unlock} to make changes.`
    };
  });
  pi.on("agent_end", async (event) => {
    if (isRoutingOnly() || decision?.behavior !== "PLAN" || decision.source === "extension") return;
    const plan = [...event.messages].reverse().filter((message) => message.role === "assistant").map(
      (message) => typeof message.content === "string" ? message.content : (message.content ?? []).filter((part) => part?.type === "text").map((part) => part.text).join("\n")
    ).map(extractPlan).find(Boolean);
    if (plan) {
      session.pendingPlan = plan;
      saveState();
    }
  });
  for (const [name, behavior] of behaviorCommands) {
    pi.registerCommand(name, {
      description: `AY-PI: run this prompt as ${behavior}`,
      handler: async (args, ctx) => {
        if (!ctx.isIdle()) return ctx.ui.notify("AY-PI: wait for the current run to finish.", "warning");
        let text = args.trim();
        if (!text && behavior === "CODE" && session.pendingPlan) text = "Implement the approved plan.";
        if (!text) return ctx.ui.notify(`AY-PI: write your request after /${name}.`, "warning");
        command = behavior;
        pi.sendUserMessage(text);
        for (let i = 0; i < 50 && ctx.isIdle(); i++) await new Promise((resolve) => setTimeout(resolve, 20));
        await ctx.waitForIdle();
      }
    });
  }
  const SUBCOMMANDS = ["status", "auto", "manual", "tier", "add", "remove", "jev", "classifier", "reload"];
  pi.registerCommand("ay-pi", {
    description: "AY-PI: status, auto/manual mode, tier models, classifier (Jev)",
    getArgumentCompletions: (prefix) => {
      const [sub, arg] = prefix.split(/\s+/);
      if (arg === void 0) return SUBCOMMANDS.filter((name) => name.startsWith(sub)).map((value) => ({ value, label: value }));
      if (["tier", "add", "remove"].includes(sub)) {
        const options = sub === "tier" ? [...TIERS, "auto"] : [...TIERS];
        return options.filter((name) => name.startsWith(arg)).map((name) => ({ value: `${sub} ${name}`, label: name }));
      }
      if (sub === "classifier") {
        return ["auto", "off"].filter((name) => name.startsWith(arg)).map((name) => ({ value: `${sub} ${name}`, label: name }));
      }
      return null;
    },
    handler: async (args, ctx) => {
      const [sub = "status", arg = ""] = args.trim().split(/\s+/).filter(Boolean);
      const notify = (message, type = "info") => ctx.ui.notify(message, type);
      switch (sub) {
        case "status": {
          const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
          const lines = [
            `Mode: ${isAuto(ctx) ? "auto (ay-pi/auto)" : `manual (${ctx.model ? formatModelRef(ctx.model) : "no model"})`}`,
            `Tier: ${session.pinnedTier ? `${session.pinnedTier} (pinned)` : "auto"}`,
            ...TIERS.map((tier) => `  ${tier.padEnd(6)} ${config.tiers[tier].join(", ") || "(empty)"}`),
            `Classifier: ${classifier ? formatModelRef(classifier) : `none (${config.classifier})`}`,
            `Scope: ${isRoutingOnly() ? "routing only (tiers and models; tools, instructions and plans are left to other extensions)" : "full"}`,
            `Pending plan: ${session.pendingPlan ? `yes (${approveHint})` : "no"}`,
            decision ? `Last decision: ${decision.behavior} \xB7 ${decision.tier} \xB7 ${decision.reason}` : "Last decision: -",
            lastRouted ? `Last routed model: ${lastRouted}` : ""
          ];
          notify(lines.filter(Boolean).join("\n"));
          return;
        }
        case "auto": {
          const model = ctx.modelRegistry.find(VIRTUAL.provider, VIRTUAL.id);
          if (!model || !await pi.setModel(model)) return notify("AY-PI: could not select ay-pi/auto.", "error");
          showStatus(ctx);
          return notify(hasAnyTierModel(config.tiers) ? "AY-PI: auto mode." : "AY-PI: auto mode. Add tier models with /ay-pi add <tier>.");
        }
        case "manual": {
          const ref = lastRouted ? parseModelRef(lastRouted) : void 0;
          const model = ref && ctx.modelRegistry.find(ref.provider, ref.id);
          if (model && await pi.setModel(model)) {
            showStatus(ctx);
            return notify(`AY-PI: manual mode on ${lastRouted}. AY-PI will only suggest tiers now.`);
          }
          return notify("AY-PI: pick a model with /model. AY-PI will only suggest tiers.");
        }
        case "tier": {
          if (arg === "auto") session.pinnedTier = void 0;
          else if (isTier(arg)) session.pinnedTier = arg;
          else return notify("Usage: /ay-pi tier low|medium|high|auto", "warning");
          saveState();
          showStatus(ctx);
          return notify(session.pinnedTier ? `AY-PI: tier pinned to ${arg}.` : "AY-PI: tier is chosen automatically.");
        }
        case "add":
        case "remove": {
          if (!isTier(arg)) return notify(`Usage: /ay-pi ${sub} low|medium|high`, "warning");
          const options = sub === "add" ? ctx.modelRegistry.getAvailable().map((model) => formatModelRef(model)).filter((ref) => ref !== formatModelRef(VIRTUAL) && !config.tiers[arg].includes(ref)) : config.tiers[arg];
          if (options.length === 0) return notify(sub === "add" ? "No more available models. Log in with /login first." : `The ${arg} tier is empty.`, "warning");
          const choice = await ctx.ui.select(`${sub === "add" ? "Add to" : "Remove from"} the ${arg} tier`, options);
          if (!choice) return;
          updateUserConfig(userConfigPath(), (file) => {
            file.tiers[arg] = sub === "add" ? [...file.tiers[arg], choice] : file.tiers[arg].filter((ref) => ref !== choice);
          });
          reloadConfig(ctx);
          return notify(`AY-PI: ${arg} tier = ${config.tiers[arg].join(", ") || "(empty)"}`);
        }
        case "jev": {
          const available = await listClassifiers(ctx.modelRegistry);
          const active = await findClassifier(ctx.modelRegistry, config.classifier);
          if (active) return notify(`AY-PI: decisions use ${formatModelRef(active)}. Available: ${available.join(", ")}.`);
          return notify(
            [
              "AY-PI: no classifier available, so only explicit commands and the safe default are used.",
              "To let Jev decide, add a key:",
              "  /login  -> choose TypeSafe and paste the API key (saved in Pi's auth.json)",
              "  or set TYPESAFE_API_KEY (also works: OpenRouter, OpenCode, Cloudflare Workers AI keys)",
              "Then check again with /ay-pi jev."
            ].join("\n")
          );
        }
        case "classifier": {
          if (!arg) return notify("Usage: /ay-pi classifier auto|off|provider/model", "warning");
          if (arg !== "auto" && arg !== "off" && !parseModelRef(arg)) return notify("Use auto, off, or provider/model.", "warning");
          updateUserConfig(userConfigPath(), (file) => {
            file.classifier = arg;
          });
          reloadConfig(ctx);
          return notify(`AY-PI: classifier = ${config.classifier}`);
        }
        case "reload": {
          reloadConfig(ctx);
          return notify("AY-PI: configuration reloaded.");
        }
        default:
          return notify(`Usage: /ay-pi ${SUBCOMMANDS.join("|")}`, "warning");
      }
    }
  });
}
export {
  ayPi as default
};
