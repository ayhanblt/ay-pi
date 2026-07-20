# AY-PI

**A deterministic, CPU-first model and thinking routing extension for the [Pi](https://github.com/earendil-works/pi) coding agent.**

AY-PI is an extension that intercepts user prompts in the Pi coding agent *before* any LLM is invoked. By using pure, CPU-based logic (regex, keyword matching, and system state like git diffs), it deterministically decides which AI model pool to use, what thinking level to apply, and which tools to allow.

**The Golden Rule:** The routing decision itself is NEVER asked to an LLM.

## Key Features

- **Zero-Token Intent Routing:** Automatically detects commands like `/code`, `/plan`, or plain `/chat` using strict string operations.
- **Dynamic Thinking Escalation:** Calculates changed lines via `git diff`. If the changes exceed a configured threshold, the thinking level is automatically escalated (e.g., from `medium` to `high`), without changing the primary model pool.
- **Subcommands & Constraints:** Supports granular intents like `/code /quick` to apply strict context budgets, enforce limited toolsets, and prevent unnecessary repository scanning by the LLM.
- **Sticky Routing:** Remembers the previous session intent. If you generate a `/plan` and then say "apply this", AY-PI seamlessly routes the follow-up message to the `/code` tier.
- **CLI Guard:** Prevents wasting tokens on accidental CLI commands (like `pi update`) typed into the chat box.
- **Type-Safe Policies:** All routing rules are defined in a single, easy-to-read `ay-pi.policy.json` file, validated strictly at startup using Zod.

## Repository Structure

The project is split into a shared core, a testing CLI, and the actual Pi extension:

```text
ay-pi/
├── src/                      # SHARED CORE: Routing logic, context assembly, telemetry
├── dev-tools/                # CLI tools for testing policies without Pi
│   ├── cli.ts                # Test intents and diffs locally
│   └── calibration-report.ts # Telemetry analyzer for tuning thinking levels
├── extension/ay-pi/          # The actual Pi extension package
│   └── src/index.ts          # Adapter hooking into Pi's `before_agent_start`
└── ay-pi.policy.json         # Single source of truth for routing rules
```

## How It Works (Data Flow)

1. **Input Interception:** The user types a message (e.g., `/code /quick fix typo`). The AY-PI extension captures this via Pi's `before_agent_start` hook.
2. **Signal Building:** The core logic extracts the intent (`/code`), the subcommand (`/quick`), and calculates the current git diff size.
3. **Policy Matching:** These signals are matched against `ay-pi.policy.json`.
4. **Decision:** AY-PI determines the `modelPool`, `thinkingLevel`, `contextBudget`, `allowedTools`, and `constraints`.
5. **Execution Handoff:** AY-PI calls `pi.setModel()`, `pi.setThinkingLevel()`, and `pi.setActiveTools()`. It then attaches constraint instructions to the system prompt and hands control back to Pi's native execution loop.

## Installation & Usage

### 1. Standalone CLI Testing (No Pi Required)
You can test how your routing policy reacts to different inputs without making actual LLM calls.

```bash
npm install

# Test a simple chat
npx tsx dev-tools/cli.ts "hello how are you"

# Test a code command with a simulated large git diff
npx tsx dev-tools/cli.ts "/code refactor auth" --diff-lines=150
```

### 2. Installing as a Pi Extension
The extension code lives in `extension/ay-pi/`. It does not duplicate the core logic; it imports it directly.

```bash
cd extension/ay-pi
npm install
```

To load it into Pi, add the absolute path of the extension to your `~/.pi/agent/settings.json`:

```json
{
  "extensions": ["/absolute/path/to/ay-pi/extension/ay-pi"]
}
```
*Note: You can use `/reload` inside Pi to apply code or policy changes instantly without restarting the app.*

## Configuring Models in Pi

AY-PI's default policy (`ay-pi.policy.json`) relies on various OpenCode Go models (e.g., `deepseek-v4-flash`, `glm-5.2`). If these models are not inherently known to your Pi instance, you must define them in `~/.pi/agent/models.json`:

```json
{
  "providers": {
    "opencode-go": {
      "apiKey": "YOUR_API_KEY",
      "api": "openai-completions",
      "baseUrl": "https://opencode.ai/zen/go/v1",
      "models": [
        { "id": "deepseek-v4-flash", "name": "DeepSeek V4 Flash" },
        { "id": "deepseek-v4-pro", "name": "DeepSeek V4 Pro" },
        { "id": "minimax-m2.7", "name": "MiniMax M2.7" },
        { "id": "mimo-v2.5", "name": "MiMo-V2.5" },
        { "id": "kimi-k2.7-code", "name": "Kimi K2.7 Code" },
        { "id": "glm-5.2", "name": "GLM-5.2" },
        { "id": "qwen3.7-max", "name": "Qwen3.7 Max" }
      ]
    }
  }
}
```
*Warning: Never commit your API key to version control.*

## Telemetry & Calibration

Every routing decision is logged to `ay-pi.telemetry.jsonl` in the repository root. This allows you to track exactly why a specific model or thinking level was chosen.

Because API providers sometimes "clamp" or override requested thinking levels (e.g., forcing a model to `high` when `medium` was requested), AY-PI includes a calibration tool.

To run the calibration report:
```bash
npx tsx dev-tools/calibration-report.ts
```
This script parses your telemetry logs and flags mismatches between the `thinking` level your policy requested and the level the model actually executed, helping you fine-tune `ay-pi.policy.json`.
