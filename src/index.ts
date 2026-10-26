/**
 * AY-PI — Pi extension entry point.
 *
 * Per user prompt:
 *   /plan, /code, ...   remember the behavior and send the prompt
 *   before_agent_start  decide behavior + tier, scope tools, add instructions
 *   route (ay-pi/auto)  auto mode: pick the model for the tier
 *   agent_end           remember the `## Plan` of a PLAN answer as the pending plan
 *
 * Auto mode = the selected model is the virtual model `ay-pi/auto`.
 * Manual mode = any other model; AY-PI only suggests a tier/model.
 */

import { join } from "node:path";
import { getAgentDir, type ExtensionAPI, type ExtensionContext } from "@earendil-works/pi-coding-agent";
import { classify, findClassifier, listClassifiers } from "./classifier.js";
import { COMMANDS } from "./commands.js";
import { defaultConfig, loadConfig, updateUserConfig, type AyPiConfig } from "./config.js";
import { decide, type Decision } from "./decide.js";
import { formatModelRef, hasAnyTierModel, parseModelRef, resolveTierModel, type ModelRef } from "./models.js";
import { PROFILES, SAFE_DEFAULT, TIERS, WRITE_TOOLS, behaviorInstructions, extractPlan, isTier, type Behavior, type Tier } from "./profiles.js";

const VIRTUAL: ModelRef = { provider: "ay-pi", id: "auto" };
const STATE_ENTRY = "ay-pi.state";
const DECISION_ENTRY = "ay-pi.decision";

interface SessionState {
  pendingPlan?: string;
  pinnedTier?: Tier;
  /** Write tools AY-PI switched off for read-only turns; restored for CODE. */
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

  const userConfigPath = () => join(getAgentDir(), "ay-pi.json");

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

  // Pi restores the active tools with the session, so remember what we switched off instead of a baseline.
  function applyTools(behavior: Decision["behavior"]): void {
    const current = pi.getActiveTools();
    let wanted: string[];
    if (PROFILES[behavior].canWrite) {
      wanted = [...current, ...(session.removedTools ?? []).filter((tool) => !current.includes(tool))];
      session.removedTools = undefined;
    } else {
      const removed = current.filter((tool) => WRITE_TOOLS.has(tool));
      session.removedTools = [...new Set([...(session.removedTools ?? []), ...removed])];
      wanted = current.filter((tool) => !WRITE_TOOLS.has(tool));
    }
    if (wanted.length !== current.length) pi.setActiveTools(wanted); // only on change: the tool list is part of the cached prefix
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
    const mode = isAuto(ctx) ? "auto" : "manual";
    const pin = session.pinnedTier ? " (pinned)" : "";
    if (!decision) {
      ctx.ui.setStatus("ay-pi", `AY-PI ready · ${session.pinnedTier ?? "auto tier"}${pin} · ${mode}`);
      return;
    }
    // Show a fallback as "low→medium" and, in auto mode, the model that actually answered.
    const tier = routed?.tier && routed.tier !== decision.tier ? `${decision.tier}→${routed.tier}` : decision.tier;
    const model = isAuto(ctx) && routed ? ` · ${routed.model}` : "";
    ctx.ui.setStatus("ay-pi", `AY-PI ${decision.behavior} · ${tier}${pin} · ${mode}${model}`);
  }

  // ---------------------------------------------------------------- virtual model

  pi.registerVirtualModel<RouteState>({
    provider: VIRTUAL.provider,
    id: VIRTUAL.id,
    name: "AY-PI Auto",
    route(request, ctx) {
      const current = decision ?? { ...SAFE_DEFAULT, source: "default", reason: "no decision yet", usePlan: false };
      const thinkingLevel = PROFILES[current.behavior].thinking;

      // Tool follow-ups stay on the model that handled the turn (keeps the prompt cache warm).
      if (request.reason === "continuation" && request.previous) {
        return { model: request.previous.model, thinkingLevel: request.previous.thinkingLevel ?? thinkingLevel };
      }

      // Compaction summaries and other side requests: cheapest tier.
      const tier: Tier = request.reason === "direct" ? "low" : current.tier;

      // A retry moves to the next model in the chain.
      const exclude = new Set<string>();
      if (request.reason === "retry" && request.failed) exclude.add(formatModelRef(request.failed.model));

      const resolved = resolveTier(ctx, tier, exclude);
      const model = resolved?.model ?? fallbackModel(ctx, request.previous?.model);
      const ref = resolved?.ref ?? formatModelRef(model);
      lastRouted = ref;
      if (request.reason !== "direct") {
        routed = { tier: resolved?.tier, model: model.id };
        showStatus(ctx);
      }
      return { model, thinkingLevel, state: { tier: resolved?.tier ?? tier, model: ref } };
    },
  });

  // ---------------------------------------------------------------- events

  pi.on("session_start", async (_event, ctx) => {
    reloadConfig(ctx);
    const saved = [...ctx.sessionManager.getBranch()]
      .reverse()
      .find((entry: any) => entry.type === "custom" && entry.customType === STATE_ENTRY) as any;
    session = saved?.data ? { ...saved.data } : {};
    decision = undefined;
    routed = undefined;
    showStatus(ctx);
    if (isAuto(ctx) && !hasAnyTierModel(config.tiers)) {
      ctx.ui.notify("AY-PI: no tier models configured yet. Add some with /ay-pi add low|medium|high.", "warning");
    }
  });

  pi.on("before_agent_start", async (event, ctx) => {
    if (event.messageType !== "user") return {};
    const explicit = command;
    command = undefined;

    let verdict;
    if (!explicit) {
      const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
      if (classifier) verdict = await classify(ctx.modelRegistry, classifier, event.prompt, session.pendingPlan, ctx.signal);
    }

    decision = decide({
      command: explicit,
      hasPendingPlan: Boolean(session.pendingPlan),
      verdict,
      pinnedTier: session.pinnedTier,
    });
    const plan = decision.usePlan ? session.pendingPlan : undefined;
    if (plan) session.pendingPlan = undefined;

    applyTools(decision.behavior);
    if (decision.source === "default" && session.pendingPlan) {
      ctx.ui.notify("AY-PI: a plan is waiting. Reply /code to implement it; this turn stays read-only.", "info");
    }
    if (!isAuto(ctx)) suggestInManualMode(ctx, decision);
    routed = undefined;
    showStatus(ctx);
    pi.appendEntry(DECISION_ENTRY, { ...decision, verdict, mode: isAuto(ctx) ? "auto" : "manual" });
    saveState();

    return {
      systemPrompt: `${event.systemPrompt}\n\n${behaviorInstructions(decision.behavior)}`,
      message: plan
        ? { customType: "ay-pi.plan", content: `Approved plan. Implement it; do not re-plan.\n\n${plan}`, display: false }
        : undefined,
    };
  });

  pi.on("agent_end", async (event) => {
    if (decision?.behavior !== "PLAN") return;
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
    if (plan) {
      session.pendingPlan = plan;
      saveState();
    }
  });

  // ---------------------------------------------------------------- /chat /suggest /review /plan /code

  // Registered so Pi's autocomplete offers them; unregistered, Enter picks a fuzzy match instead.
  for (const [name, behavior] of Object.entries(COMMANDS)) {
    pi.registerCommand(name, {
      description: `AY-PI: run this prompt as ${behavior}`,
      handler: async (args, ctx) => {
        if (!ctx.isIdle()) return ctx.ui.notify("AY-PI: wait for the current run to finish.", "warning");
        let text = args.trim();
        if (!text && behavior === "CODE" && session.pendingPlan) text = "Implement the approved plan.";
        if (!text) return ctx.ui.notify(`AY-PI: write your request after /${name}.`, "warning");
        command = behavior;
        pi.sendUserMessage(text);
        // Print mode exits when the command returns: wait (briefly) for the run to start, then for it to end.
        for (let i = 0; i < 50 && ctx.isIdle(); i++) await new Promise((resolve) => setTimeout(resolve, 20));
        await ctx.waitForIdle();
      },
    });
  }

  // ---------------------------------------------------------------- /ay-pi command

  const SUBCOMMANDS = ["status", "auto", "manual", "tier", "add", "remove", "jev", "classifier", "reload"];

  pi.registerCommand("ay-pi", {
    description: "AY-PI: status, auto/manual mode, tier models, classifier (Jev)",
    getArgumentCompletions: (prefix) => {
      const [sub, arg] = prefix.split(/\s+/);
      if (arg === undefined) return SUBCOMMANDS.filter((name) => name.startsWith(sub)).map((value) => ({ value, label: value }));
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
      const notify = (message: string, type: "info" | "warning" | "error" = "info") => ctx.ui.notify(message, type);

      switch (sub) {
        case "status": {
          const classifier = await findClassifier(ctx.modelRegistry, config.classifier);
          const lines = [
            `Mode: ${isAuto(ctx) ? "auto (ay-pi/auto)" : `manual (${ctx.model ? formatModelRef(ctx.model) : "no model"})`}`,
            `Tier: ${session.pinnedTier ? `${session.pinnedTier} (pinned)` : "auto"}`,
            ...TIERS.map((tier) => `  ${tier.padEnd(6)} ${config.tiers[tier].join(", ") || "(empty)"}`),
            `Classifier: ${classifier ? formatModelRef(classifier) : `none (${config.classifier})`}`,
            `Pending plan: ${session.pendingPlan ? "yes (/code to implement)" : "no"}`,
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
