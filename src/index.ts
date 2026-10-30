/**
 * AY-PI — Pi extension entry point.
 *
 * Per user prompt:
 *   /plan, /code, ...   remember the behavior and send the prompt
 *   F2 / F3             pin a behavior for the following prompts (or /ay-pi mode)
 *   before_agent_start  decide behavior + tier, add instructions
 *   tool_call           read-only turns block Pi's edit/write/bash
 *   Plannotator         while its plan mode plans or executes, that phase picks the tier (see plannotatorWorkflow)
 *   route (ay-pi/auto)  auto mode: pick the model for the tier
 *   agent_end           remember the `## Plan` of a PLAN answer as the pending plan
 *
 * Auto mode = the selected model is the virtual model `ay-pi/auto`.
 * Manual mode = any other model; AY-PI only suggests a tier/model.
 * Subagent = a Pi started by an AY-PI process; AY-PI stays out of it (see subagentTier).
 */

import { randomUUID } from "node:crypto";
import { join } from "node:path";
import { getAgentDir, type ExtensionAPI, type ExtensionContext } from "@earendil-works/pi-coding-agent";
import { classify, findClassifier, listClassifiers } from "./classifier.js";
import { commandNames, renamedCommands } from "./commands.js";
import { defaultConfig, loadConfig, shortcutKeys, updateUserConfig, type AyPiConfig } from "./config.js";
import { decide, extensionTurn, type Decision, type Workflow } from "./decide.js";
import { formatModelRef, hasAnyTierModel, parseModelRef, resolveTierModel, type ModelRef } from "./models.js";
import {
  BEHAVIORS,
  PROFILES,
  SAFE_DEFAULT,
  TIERS,
  behaviorInstructions,
  blocksTool,
  cycleMode,
  extractPlan,
  isBehavior,
  isTier,
  type Behavior,
  type Tier,
} from "./profiles.js";

const VIRTUAL: ModelRef = { provider: "ay-pi", id: "auto" };
const STATE_ENTRY = "ay-pi.state";
const DECISION_ENTRY = "ay-pi.decision";

// Child processes inherit these, so a Pi started by AY-PI's Pi (a subagent) knows it is one.
const PID_ENV = "AY_PI_PID";
const TIER_ENV = "AY_PI_TIER";

// Plannotator answers "plan-mode status" requests on Pi's event bus (documented in its README).
const PLANNOTATOR_CHANNEL = "plannotator:request";
const PLANNOTATOR_WORKFLOWS: Record<string, Workflow> = {
  planning: { behavior: "PLAN", reason: "Plannotator: planning" },
  executing: { behavior: "CODE", reason: "Plannotator: executing the approved plan" },
};

interface SessionState {
  pendingPlan?: string;
  /** The last PLAN turn asked a question instead of giving a `## Plan`; the next answer may continue it. */
  planningOpen?: boolean;
  pinnedTier?: Tier;
  /** Pinned mode: every prompt without a command runs as this behavior. */
  pinnedBehavior?: Behavior;
  /** Before 2.0.5 AY-PI switched write tools off; sessions saved then get them back once. */
  removedTools?: string[];
}

interface RouteState {
  tier: Tier;
  model: string;
}

type Model = NonNullable<ExtensionContext["model"]>;

export default function ayPi(pi: ExtensionAPI) {
  let config: AyPiConfig = defaultConfig();
  let session: SessionState = {};
  let command: Behavior | undefined; // set by /chat ... /code for the prompt they send
  let decision: Decision | undefined;
  let lastRouted: string | undefined;
  let routed: { tier?: Tier; model: string } | undefined; // what auto mode used for the current decision
  let lastSuggestion: string | undefined;
  const extensionPrompts: string[] = []; // prompts other extensions sent, waiting for their turn

  const userConfigPath = () => join(getAgentDir(), "ay-pi.json");

  // Commands and shortcuts are registered at load time, so they come from the user file only (a reload applies changes).
  const userFile = (() => {
    try {
      return loadConfig([userConfigPath()]);
    } catch {
      return defaultConfig();
    }
  })();
  const behaviorCommands = commandNames(userFile.commands);
  const codeCommand = behaviorCommands.find(([, behavior]) => behavior === "CODE")?.[0];
  /** How the user approves a plan, for messages to the user and the model. */
  const approveHint = codeCommand ? `reply with /${codeCommand}` : "reply to approve it";
  const isRoutingOnly = () => config.scope === "routing";

  // The main agent decides; a subagent just does the delegated task. In a subagent AY-PI adds no commands,
  // decisions or tool scoping. Only ay-pi/auto, if the subagent inherited it, resolves to the parent's tier.
  const parentPid = process.env[PID_ENV];
  const parentTier = process.env[TIER_ENV];
  const subagentTier: Tier | undefined =
    parentPid && parentPid !== String(process.pid) ? (parentTier && isTier(parentTier) ? parentTier : "medium") : undefined;
  process.env[PID_ENV] = String(process.pid);

  function reloadConfig(ctx: ExtensionContext): void {
    const paths = [userConfigPath()];
    if (ctx.isProjectTrusted()) paths.push(join(ctx.cwd, ".pi", "ay-pi.json"));
    try {
      config = loadConfig(paths);
    } catch (error) {
      config = defaultConfig();
      ctx.ui.notify(`AY-PI: ${(error as Error).message}. Using defaults.`, "error");
    }
  }

  function saveState(): void {
    pi.appendEntry(STATE_ENTRY, session);
  }

  function isAuto(ctx: ExtensionContext): boolean {
    return ctx.model?.provider === VIRTUAL.provider && ctx.model?.id === VIRTUAL.id;
  }

  function resolveTier(ctx: ExtensionContext, tier: Tier, exclude?: ReadonlySet<string>) {
    return resolveTierModel<Model>(config.tiers, tier, {
      findUsable: (ref) => {
        const model = ctx.modelRegistry.find(ref.provider, ref.id);
        return model && ctx.modelRegistry.hasConfiguredAuth(model) ? model : undefined;
      },
    }, exclude);
  }

  /** Used when no tier model is usable: stay on the last physical model, else the first available one. */
  function fallbackModel(ctx: ExtensionContext, previous?: Model): Model {
    if (previous) return previous;
    const model = ctx.modelRegistry
      .getAvailable()
      .find((candidate) => !(candidate.provider === VIRTUAL.provider && candidate.id === VIRTUAL.id));
    if (!model) throw new Error("AY-PI: no usable model. Log in to a provider, then add models with /ay-pi add <tier>.");
    return model;
  }

  function suggestInManualMode(ctx: ExtensionContext, current: Decision): void {
    if (!hasAnyTierModel(config.tiers)) return;
    const currentRef = ctx.model ? formatModelRef(ctx.model) : undefined;
    if (currentRef && config.tiers[current.tier].includes(currentRef)) return;
    const suggested = resolveTier(ctx, current.tier);
    const key = `${current.tier}:${suggested?.ref}:${currentRef}`;
    if (key === lastSuggestion) return;
    lastSuggestion = key;
    ctx.ui.notify(
      `AY-PI suggests the ${current.tier} tier${suggested ? ` (${suggested.ref})` : ""} for this ${current.behavior} request. ` +
        `Current model: ${currentRef ?? "none"}. Switch with /model, or run /ay-pi auto.`,
      "info",
    );
  }

  function showStatus(ctx: ExtensionContext): void {
    const mode = (isAuto(ctx) ? "auto" : "manual") + (isRoutingOnly() ? " · routing only" : "");
    const pin = session.pinnedTier ? " (pinned)" : "";
    if (!decision) {
      const pinned = session.pinnedBehavior ? `${session.pinnedBehavior} (pinned) · ` : "";
      ctx.ui.setStatus("ay-pi", `AY-PI ready · ${pinned}${session.pinnedTier ?? "auto tier"}${pin} · ${mode}`);
      return;
    }
    // Show a fallback as "low→medium" and, in auto mode, the model that actually answered.
    const tier = routed?.tier && routed.tier !== decision.tier ? `${decision.tier}→${routed.tier}` : decision.tier;
    const model = isAuto(ctx) && routed ? ` · ${routed.model}` : "";
    const label = decision.reason.startsWith("Plannotator")
      ? `${decision.behavior} (Plannotator)`
      : decision.source === "extension"
        ? "extension turn"
        : `${decision.behavior}${decision.reason.startsWith("pinned") ? " (pinned)" : ""}`;
    ctx.ui.setStatus("ay-pi", `AY-PI ${label} · ${tier}${pin} · ${mode}${model}`);
  }

  // ---------------------------------------------------------------- virtual model

  pi.registerVirtualModel<RouteState>({
    provider: VIRTUAL.provider,
    id: VIRTUAL.id,
    name: "AY-PI Auto",
    route(request, ctx) {
      const current = decision ?? { ...SAFE_DEFAULT, source: "default", reason: "no decision yet", usePlan: false };
      const thinkingLevel = subagentTier ? request.thinkingLevel : PROFILES[current.behavior].thinking;

      // Tool follow-ups stay on the model that handled the turn (keeps the prompt cache warm).
      if (request.reason === "continuation" && request.previous) {
        return { model: request.previous.model, thinkingLevel: request.previous.thinkingLevel ?? thinkingLevel };
      }

      // Compaction summaries and other side requests: cheapest tier.
      const tier: Tier = request.reason === "direct" ? "low" : (subagentTier ?? current.tier);

      // A retry moves to the next model in the chain.
      const exclude = new Set<string>();
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
    },
  });

  if (subagentTier) {
    pi.on("session_start", async (_event, ctx) => reloadConfig(ctx));
    return;
  }

  /**
   * Plannotator's phase as a workflow: while it plans, the plan tier answers; while it executes, the code tier.
   * Plannotator answers at once; without it nobody answers and this gives up after a few milliseconds.
   */
  function plannotatorWorkflow(): Promise<Workflow | undefined> {
    return new Promise((resolve) => {
      const timer = setTimeout(() => resolve(undefined), 25);
      const respond = (response: any) => {
        clearTimeout(timer);
        resolve(response?.status === "handled" ? PLANNOTATOR_WORKFLOWS[response.result?.phase] : undefined);
      };
      try {
        pi.events.emit(PLANNOTATOR_CHANNEL, { requestId: randomUUID(), action: "plan-mode", payload: { mode: "status" }, respond });
      } catch {
        respond(undefined);
      }
    });
  }

  // ---------------------------------------------------------------- events

  pi.on("session_start", async (_event, ctx) => {
    reloadConfig(ctx);
    const saved = [...ctx.sessionManager.getBranch()]
      .reverse()
      .find((entry: any) => entry.type === "custom" && entry.customType === STATE_ENTRY) as any;
    session = saved?.data ? { ...saved.data } : {};
    if (session.removedTools?.length) {
      const active = pi.getActiveTools();
      pi.setActiveTools([...active, ...session.removedTools.filter((tool) => !active.includes(tool))]);
      session.removedTools = undefined;
      saveState();
    }
    decision = undefined;
    routed = undefined;
    extensionPrompts.length = 0;
    showStatus(ctx);
    // Pi renames commands that two extensions register (/plan:1, /plan:2), so neither answers to /plan any more.
    const ours = behaviorCommands.map(([name]) => name);
    for (const base of renamedCommands(pi.getCommands().map((info) => info.name), ours)) {
      ctx.ui.notify(
        `AY-PI: another extension also registers /${base}, so Pi renamed both to /${base}:1 and /${base}:2. ` +
          `Give AY-PI's another name with "commands": { "${base}": "ay-${base}" } in ay-pi.json, or leave /${base} to the other extension with false, then /reload.`,
        "warning",
      );
    }
    if (isAuto(ctx) && !hasAnyTierModel(config.tiers)) {
      ctx.ui.notify("AY-PI: no tier models configured yet. Add some with /ay-pi add low|medium|high.", "warning");
    }
  });

  // Prompts sent by other extensions (pi.sendUserMessage) reach before_agent_start as user messages.
  // Remember them here so their turns are left to the extension that sent them.
  pi.on("input", async (event) => {
    if (event.source === "extension" && !command) {
      extensionPrompts.push(event.text);
      if (extensionPrompts.length > 20) extensionPrompts.shift();
    }
    return { action: "continue" };
  });

  pi.on("before_agent_start", async (event, ctx) => {
    const explicit = event.messageType === "user" ? command : undefined;
    if (event.messageType === "user") command = undefined;
    const queued = event.messageType === "user" ? extensionPrompts.indexOf(event.prompt) : -1;
    if (queued !== -1) extensionPrompts.splice(queued, 1);

    const workflow = await plannotatorWorkflow();

    if (event.messageType !== "user" || (!explicit && queued !== -1)) {
      decision = extensionTurn(decision, workflow);
      routed = undefined;
      showStatus(ctx);
      pi.appendEntry(DECISION_ENTRY, { ...decision, mode: isAuto(ctx) ? "auto" : "manual" });
      return {};
    }

    // Routing only: the behavior just picks the tier. Plans, instructions and tool scoping belong to other extensions.
    const routingOnly = isRoutingOnly();
    const hasPendingPlan = !routingOnly && Boolean(session.pendingPlan);
    const planningOpen = !routingOnly && Boolean(session.planningOpen);

    // A command, a pinned mode or a workflow already says what the prompt is, so the classifier is not asked.
    let verdict;
    if (!explicit && !session.pinnedBehavior && !workflow) {
      const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
      if (classifier) verdict = await classify(ctx.modelRegistry, classifier, event.prompt, hasPendingPlan, planningOpen, ctx.signal);
    }

    decision = decide({
      command: explicit,
      pinnedBehavior: session.pinnedBehavior,
      hasPendingPlan,
      planningOpen,
      workflow,
      verdict,
      pinnedTier: session.pinnedTier,
    });
    if (decision.behavior !== "PLAN") session.planningOpen = undefined;
    const plan = decision.usePlan ? session.pendingPlan : undefined;
    if (plan) session.pendingPlan = undefined;

    if (decision.source === "plan") {
      ctx.ui.notify("AY-PI: plan approved, implementing it now.", "info");
    }
    if (decision.source === "default" && hasPendingPlan) {
      ctx.ui.notify(`AY-PI: a plan is waiting. To implement it, ${approveHint}; this turn stays read-only.`, "info");
    }
    if (!isAuto(ctx)) suggestInManualMode(ctx, decision);
    process.env[TIER_ENV] = decision.tier;
    routed = undefined;
    showStatus(ctx);
    pi.appendEntry(DECISION_ENTRY, { ...decision, verdict, mode: isAuto(ctx) ? "auto" : "manual", ...(routingOnly && { scope: "routing" }) });
    saveState();

    // A workflow turn belongs to the extension that runs it, as in routing only.
    if (routingOnly || decision.source === "workflow") return {};
    return {
      systemPrompt: `${event.systemPrompt}\n\n${behaviorInstructions(decision.behavior).replace("reply with /code", approveHint)}`,
      message: plan
        ? { customType: "ay-pi.plan", content: `Approved plan. Implement it; do not re-plan.\n\n${plan}`, display: false }
        : undefined,
    };
  });

  // The tool list stays the same every turn (other extensions manage it, and it keeps the prompt cache warm).
  // Read-only turns block Pi's own write tools here instead; nested calls (codemode) pass here too.
  pi.on("tool_call", async (event) => {
    if (isRoutingOnly()) return;
    const current = decision ?? { ...SAFE_DEFAULT, source: "default" as const };
    if (current.source === "extension" || current.source === "workflow" || !blocksTool(current.behavior, event.toolName)) return;
    const unlock = codeCommand ? `reply with /${codeCommand}` : "ask for the change directly";
    return {
      block: true,
      reason: `AY-PI: this is a read-only ${current.behavior} turn, so ${event.toolName} is blocked. Ask the user to ${unlock} to make changes.`,
    };
  });

  pi.on("agent_end", async (event) => {
    if (isRoutingOnly() || decision?.behavior !== "PLAN" || decision.source === "extension" || decision.source === "workflow") return;
    const plan = [...event.messages]
      .reverse()
      .filter((message: any) => message.role === "assistant")
      .map((message: any) =>
        typeof message.content === "string"
          ? message.content
          : (message.content ?? []).filter((part: any) => part?.type === "text").map((part: any) => part.text).join("\n"),
      )
      .map(extractPlan)
      .find(Boolean);
    session.pendingPlan = plan ?? session.pendingPlan;
    session.planningOpen = plan ? undefined : true;
    saveState();
  });

  // ---------------------------------------------------------------- /chat /suggest /review /plan /code

  // Registered so Pi's autocomplete offers them; unregistered, Enter picks a fuzzy match instead.
  for (const [name, behavior] of behaviorCommands) {
    pi.registerCommand(name, {
      description: `AY-PI: run this prompt as ${behavior}`,
      handler: async (args, ctx) => {
        if (!ctx.isIdle()) return ctx.ui.notify("AY-PI: wait for the current run to finish.", "warning");
        let text = args.trim();
        // A bare /code implements the pending plan, or else what the conversation has settled on so far.
        if (!text && behavior === "CODE") text = session.pendingPlan ? "Implement the approved plan." : "Implement what we just discussed.";
        if (!text) return ctx.ui.notify(`AY-PI: write your request after /${name}.`, "warning");
        command = behavior;
        pi.sendUserMessage(text);
        // Print mode exits when the command returns: wait (briefly) for the run to start, then for it to end.
        for (let i = 0; i < 50 && ctx.isIdle(); i++) await new Promise((resolve) => setTimeout(resolve, 20));
        await ctx.waitForIdle();
      },
    });
  }

  // ---------------------------------------------------------------- pinned mode (F2 / F3, /ay-pi mode)

  function pinMode(ctx: ExtensionContext, behavior: Behavior | undefined): void {
    session.pinnedBehavior = behavior;
    saveState();
    showStatus(ctx);
    ctx.ui.notify(
      behavior
        ? `AY-PI: ${behavior} mode pinned. Prompts run as ${behavior} until you switch (a command still wins for its prompt).`
        : "AY-PI: mode unpinned. Each prompt is decided on its own again.",
      "info",
    );
  }

  // Pi does not let users rebind extension shortcuts in keybindings.json, so the keys come from ay-pi.json.
  // Keys Pi reserves are skipped by Pi, which lists them under [Extension issues] at startup.
  for (const [key, name] of shortcutKeys(userFile.shortcuts)) {
    pi.registerShortcut(key as Parameters<ExtensionAPI["registerShortcut"]>[0], {
      description: name === "nextMode" ? "AY-PI: pin the next mode" : "AY-PI: pin the previous mode",
      handler: (ctx) => pinMode(ctx, cycleMode(session.pinnedBehavior, name === "nextMode" ? 1 : -1)),
    });
  }

  // ---------------------------------------------------------------- /ay-pi command

  const SUBCOMMANDS = ["status", "auto", "manual", "mode", "tier", "add", "remove", "jev", "classifier", "reload"];
  const MODE_ARGS = ["auto", ...BEHAVIORS.map((behavior) => behavior.toLowerCase())];

  pi.registerCommand("ay-pi", {
    description: "AY-PI: status, auto/manual mode, tier models, classifier (Jev)",
    getArgumentCompletions: (prefix) => {
      const [sub, arg] = prefix.split(/\s+/);
      if (arg === undefined) return SUBCOMMANDS.filter((name) => name.startsWith(sub)).map((value) => ({ value, label: value }));
      if (["tier", "add", "remove"].includes(sub)) {
        const options = sub === "tier" ? [...TIERS, "auto"] : [...TIERS];
        return options.filter((name) => name.startsWith(arg)).map((name) => ({ value: `${sub} ${name}`, label: name }));
      }
      if (sub === "mode") {
        return MODE_ARGS.filter((name) => name.startsWith(arg)).map((name) => ({ value: `${sub} ${name}`, label: name }));
      }
      if (sub === "classifier") {
        return ["auto", "off"].filter((name) => name.startsWith(arg)).map((name) => ({ value: `${sub} ${name}`, label: name }));
      }
      return null;
    },
    handler: async (args, ctx) => {
      const [sub = "status", arg = ""] = args.trim().split(/\s+/).filter(Boolean);
      const notify = (message: string, type: "info" | "warning" | "error" = "info") => ctx.ui.notify(message, type);

      switch (sub) {
        case "status": {
          const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
          const lines = [
            `Mode: ${isAuto(ctx) ? "auto (ay-pi/auto)" : `manual (${ctx.model ? formatModelRef(ctx.model) : "no model"})`}`,
            `Behavior: ${session.pinnedBehavior ? `${session.pinnedBehavior} (pinned)` : "auto"}`,
            `Tier: ${session.pinnedTier ? `${session.pinnedTier} (pinned)` : "auto"}`,
            ...TIERS.map((tier) => `  ${tier.padEnd(6)} ${config.tiers[tier].join(", ") || "(empty)"}`),
            `Classifier: ${classifier ? formatModelRef(classifier) : `none (${config.classifier})`}`,
            `Scope: ${isRoutingOnly() ? "routing only (tiers and models; tools, instructions and plans are left to other extensions)" : "full"}`,
            `Pending plan: ${session.pendingPlan ? `yes (${approveHint})` : "no"}`,
            decision ? `Last decision: ${decision.behavior} · ${decision.tier} · ${decision.reason}` : "Last decision: -",
            lastRouted ? `Last routed model: ${lastRouted}` : "",
          ];
          notify(lines.filter(Boolean).join("\n"));
          return;
        }
        case "auto": {
          const model = ctx.modelRegistry.find(VIRTUAL.provider, VIRTUAL.id);
          if (!model || !(await pi.setModel(model))) return notify("AY-PI: could not select ay-pi/auto.", "error");
          showStatus(ctx);
          return notify(hasAnyTierModel(config.tiers) ? "AY-PI: auto mode." : "AY-PI: auto mode. Add tier models with /ay-pi add <tier>.");
        }
        case "manual": {
          const ref = lastRouted ? parseModelRef(lastRouted) : undefined;
          const model = ref && ctx.modelRegistry.find(ref.provider, ref.id);
          if (model && (await pi.setModel(model))) {
            showStatus(ctx);
            return notify(`AY-PI: manual mode on ${lastRouted}. AY-PI will only suggest tiers now.`);
          }
          return notify("AY-PI: pick a model with /model. AY-PI will only suggest tiers.");
        }
        case "mode": {
          const behavior = arg.toUpperCase();
          if (arg === "auto") return pinMode(ctx, undefined);
          if (isBehavior(behavior)) return pinMode(ctx, behavior);
          return notify(`Usage: /ay-pi mode ${MODE_ARGS.join("|")}`, "warning");
        }
        case "tier": {
          if (arg === "auto") session.pinnedTier = undefined;
          else if (isTier(arg)) session.pinnedTier = arg;
          else return notify("Usage: /ay-pi tier low|medium|high|auto", "warning");
          saveState();
          showStatus(ctx);
          return notify(session.pinnedTier ? `AY-PI: tier pinned to ${arg}.` : "AY-PI: tier is chosen automatically.");
        }
        case "add":
        case "remove": {
          if (!isTier(arg)) return notify(`Usage: /ay-pi ${sub} low|medium|high`, "warning");
          const options =
            sub === "add"
              ? ctx.modelRegistry
                  .getAvailable()
                  .map((model) => formatModelRef(model))
                  .filter((ref) => ref !== formatModelRef(VIRTUAL) && !config.tiers[arg].includes(ref))
              : config.tiers[arg];
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
              "Then check again with /ay-pi jev.",
            ].join("\n"),
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
    },
  });
}
