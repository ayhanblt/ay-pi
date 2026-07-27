import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Hardcoded absolute path for temporary debugging to ensure it is always written exactly here
const LOG_FILE = "/Users/ayhanblt/Desktop/projects/ay-pi/ay-pi.debug.log";

export class DebugLogger {
  private static instance = new DebugLogger();

  public enabled = true;
  private startTime: number = 0;
  private logs: string[] = [];

  // Data bags
  public input: string = "";
  
  public ruleEngine = {
    keywords: [] as string[],
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
    scores: {} as Record<string, number>,
    selected: ""
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
    this.input = input;
    // reset state
    this.ruleEngine = { keywords: [], regex: [], confidence: 0, decision: "UNRESOLVED" };
    this.semanticEngine = { invoked: false, modelLoadedBefore: false, loadingModel: false, embeddingTimeMs: 0, scores: {}, threshold: 0, decision: "UNRESOLVED" };
    this.workflowResolver = { behavior: "", scores: {}, selected: "" };
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
    output += `Keywords:\n[${this.ruleEngine.keywords.join(", ")}]\n\n`;
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
    if (Object.keys(this.workflowResolver.scores).length > 0) {
      output += `Workflow Scores:\n\n`;
      for (const [wf, score] of Object.entries(this.workflowResolver.scores)) {
        output += `${wf.padEnd(10)}: ${score.toFixed(2)}\n`;
      }
      output += `\n`;
    }
    output += `Selected Workflow:\n\n${this.workflowResolver.selected}\n\n`;

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
  }
}
