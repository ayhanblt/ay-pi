import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getProjectRoot(currentDir: string): string {
    const root = path.parse(currentDir).root;
    let dir = currentDir;
    while (dir !== root) {
        if (fs.existsSync(path.join(dir, 'package.json'))) {
            return dir;
        }
        dir = path.dirname(dir);
    }
    return currentDir; // fallback
}

const PROJECT_ROOT = getProjectRoot(__dirname);

// Dynamically resolved absolute paths
const LOG_FILE = path.join(PROJECT_ROOT, "ay-pi.debug.log");
// Structured, one-record-per-line telemetry log (machine-readable).
const TELEMETRY_FILE = path.join(PROJECT_ROOT, "ay-pi.telemetry.jsonl");

export class DebugLogger {
  private static instance = new DebugLogger();

  public enabled = true;
  private startTime: number = 0;
  private startTimestamp: string = "";
  private logs: string[] = [];

  // Data bags
  public input: string = "";
  
  public ruleEngine = {
    regex: [] as string[],
    confidence: 0,
    decision: "UNRESOLVED"
  };

  public semanticEngine = {
    invoked: false,
    modelLoadedBefore: false,
    loadingModel: false,
    embeddingTimeMs: 0,
    scores: {} as Record<string, { score: number; description: string }>,
    threshold: 0,
    decision: "UNRESOLVED"
  };

  public workflowResolver = {
    behavior: "",
    explicitCommand: undefined as string | undefined,
    scores: {} as Record<string, number>,
    selected: "",
    isDefaultFallback: false
  };

  public policy = {
    selected: "",
    reasoning: "",
    model: "",
    tools: [] as string[]
  };

  public adapter = {
    target: "",
    name: "",
    systemPrompt: ""
  };

  public finalResult = {
    behavior: "",
    workflow: "",
    policy: ""
  };
  
  public fallback = "";

  public contextStrategy = {
    focusTargets: [] as string[],
    repositoryScan: "",
    expectedGoal: "",
    reason: ""
  };

  public static getInstance() {
    return DebugLogger.instance;
  }

  public start(input: string) {
    if (!this.enabled) return;
    this.startTime = performance.now();
    this.startTimestamp = new Date().toISOString();
    this.input = input;
    // reset state
    this.ruleEngine = { regex: [], confidence: 0, decision: "UNRESOLVED" };
    this.semanticEngine = { invoked: false, modelLoadedBefore: false, loadingModel: false, embeddingTimeMs: 0, scores: {}, threshold: 0, decision: "UNRESOLVED" };
    this.workflowResolver = { behavior: "", explicitCommand: undefined, scores: {}, selected: "", isDefaultFallback: false };
    this.policy = { selected: "", reasoning: "", model: "", tools: [] };
    this.adapter = { target: "", name: "", systemPrompt: "" };
    this.finalResult = { behavior: "", workflow: "", policy: "" };
    this.fallback = "";
    this.contextStrategy = { focusTargets: [], repositoryScan: "", expectedGoal: "", reason: "" };
  }

  public print() {
    if (!this.enabled) return;
    const totalTime = Math.round(performance.now() - this.startTime);

    let output = `\n--------------------------------------------------\nAY-PI Routing Debug\n--------------------------------------------------\n\n`;
    output += `Input:\n"${this.input}"\n\n`;
    
    output += `----------------------------------------\n\nRule Engine\n\n`;

    output += `Regex:\n[${this.ruleEngine.regex.join(", ")}]\n\n`;
    output += `Confidence:\n${this.ruleEngine.confidence.toFixed(2)}\n\n`;
    output += `Decision:\n${this.ruleEngine.decision}\n\n`;

    if (this.semanticEngine.invoked) {
      output += `----------------------------------------\n\nSemantic Engine\n\n`;
      output += `Model:\nXenova/multilingual-e5-small\n\n`;
      output += `Loaded:\n${this.semanticEngine.modelLoadedBefore}\n\n`;
      output += `Load Source:\n${this.semanticEngine.modelLoadedBefore ? 'memory' : 'disk'}\n\n`;
      output += `Loading Model:\n${this.semanticEngine.loadingModel ? 'YES' : 'NO'}\n\n`;
      output += `Embedding Time:\n${this.semanticEngine.embeddingTimeMs}ms\n\n`;
      output += `Similarity Scores:\n\n`;
      for (const [bh, data] of Object.entries(this.semanticEngine.scores)) {
        output += `Behavior: ${bh}\nDescription: ${data.description}\nScore: ${data.score.toFixed(2)}\n\n`;
      }
      output += `Threshold:\n${this.semanticEngine.threshold}\n\n`;
      output += `Decision:\n${this.semanticEngine.decision}\n\n`;
    }

    if (this.fallback) {
      output += `Fallback:\n\n${this.fallback}\n\n`;
    }

    output += `----------------------------------------\n\nWorkflow Resolver\n\n`;
    output += `Behavior:\n${this.workflowResolver.behavior}\n\n`;
    if (this.workflowResolver.explicitCommand) {
      output += `Explicit Command:\n${this.workflowResolver.explicitCommand}\n\n`;
    }
    if (Object.keys(this.workflowResolver.scores).length > 0) {
      output += `Workflow Scores:\n\n`;
      for (const [wf, score] of Object.entries(this.workflowResolver.scores)) {
        output += `${wf.padEnd(10)}: ${score.toFixed(2)}\n`;
      }
      output += `\n`;
    }
    output += `Selected Workflow:\n\n${this.workflowResolver.selected}\n\n`;
    if (this.workflowResolver.isDefaultFallback) {
      output += `Default Fallback:\nYES\n\n`;
    }

    output += `----------------------------------------\n\nPolicy\n\n`;
    output += `Selected Policy:\n\n${this.policy.selected}\n\n`;
    output += `Reasoning:\n${this.policy.reasoning}\n\n`;
    output += `Model:\n\n${this.policy.model}\n\n`;
    output += `Tools:\n\n${this.policy.tools.join("\n")}\n\n`;

    output += `----------------------------------------\n\nAdapter\n\n`;
    output += `Target:\n\n${this.adapter.target}\n\n`;
    output += `Adapter:\n\n${this.adapter.name}\n\n`;

    output += `--------------------------------------------------\nContext Strategy\n--------------------------------------------------\n\n`;
    output += `Behavior:\n\n${this.finalResult.behavior}\n\n`;
    output += `Workflow:\n\n${this.finalResult.workflow}\n\n`;
    output += `Reasoning:\n\n${this.policy.reasoning}\n\n`;
    // Select first model from pool for logging 
    const firstModel = this.policy.model.split(",")[0].trim();
    output += `Selected Model:\n\n${firstModel}\n\n`;
    output += `Target:\n\n${this.adapter.target}\n\n`;

    output += `--------------------------------------------------\nContext Instructions\n\n`;
    output += `Required Files:\n\n- N/A\n\n`;
    output += `Optional Files:\n\n- N/A\n\n`;
    output += `Avoid Reading:\n\n- N/A\n\n`;
    output += `Focus Targets:\n\n${this.contextStrategy.focusTargets.length > 0 ? this.contextStrategy.focusTargets.join(", ") : "None"}\n\n`;
    output += `Repository Scan:\n\n${this.contextStrategy.repositoryScan}\n\n`;
    output += `Expected Goal:\n\n${this.contextStrategy.expectedGoal}\n\n`;
    output += `Reason:\n\n${this.contextStrategy.reason}\n\n`;

    output += `--------------------------------------------------\nPrompt Preview\n\n`;
    output += `${this.adapter.systemPrompt}\n\n`;

    output += `--------------------------------------------------\nEstimated Prompt Size\n\n`;
    const chars = this.adapter.systemPrompt.length;
    const tokens = Math.ceil(chars / 4); // rough estimate
    output += `Characters:\n\n${chars}\n\n`;
    output += `Estimated Tokens:\n\n${tokens}\n\n`;

    output += `----------------------------------------\n\nFINAL RESULT\n\n`;
    output += `Behavior:\n${this.finalResult.behavior}\n\n`;
    output += `Workflow:\n${this.finalResult.workflow}\n\n`;
    output += `Policy:\n${this.finalResult.policy}\n\n`;

    output += `----------------------------------------\n\nTotal Routing Time:\n\n${totalTime}ms\n\n==================================================\n`;

    try {
      fs.appendFileSync(LOG_FILE, output);
    } catch (err) {
      console.error("Failed to write debug log to", LOG_FILE, err);
    }

    // Structured telemetry record (one JSON object per line) for machine analysis.
    // Mirrors the historical telemetry schema (timestamp + signal + workflow) and
    // extends it with the behavior/workflow/source/confidence now produced by routing.
    const record = {
      timestamp: this.startTimestamp,
      routingTimeMs: totalTime,
      input: this.input,
      ruleEngine: {
        regex: this.ruleEngine.regex,
        confidence: Number(this.ruleEngine.confidence.toFixed(3)),
        decision: this.ruleEngine.decision,
      },
      semanticEngine: this.semanticEngine.invoked
        ? {
            invoked: true,
            embeddingTimeMs: this.semanticEngine.embeddingTimeMs,
            scores: Object.fromEntries(
              Object.entries(this.semanticEngine.scores).map(([k, v]) => [
                k,
                Number(v.score.toFixed(3)),
              ])
            ),
            threshold: this.semanticEngine.threshold,
            decision: this.semanticEngine.decision,
          }
        : { invoked: false },
      workflow: {
        behavior: this.finalResult.behavior,
        workflow: this.finalResult.workflow,
        policy: this.finalResult.policy,
        reasoning: this.policy.reasoning,
        model: this.policy.model.split(",")[0].trim(),
        tools: this.policy.tools,
      },
      context: {
        focusTargets: this.contextStrategy.focusTargets,
        repositoryScan: this.contextStrategy.repositoryScan,
        expectedGoal: this.contextStrategy.expectedGoal,
      },
    };

    try {
      fs.appendFileSync(TELEMETRY_FILE, JSON.stringify(record) + "\n");
    } catch (err) {
      console.error("Failed to write telemetry to", TELEMETRY_FILE, err);
    }
  }
}
