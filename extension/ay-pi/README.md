# AY-PI

AY-PI is an extension for the [Pi coding agent](https://github.com/earendil-works/pi). For every prompt it decides **what kind of work** you are asking for and **how much model** it deserves, then:

- limits the tools (only coding turns can change files),
- adds a short instruction for that kind of work to the system prompt,
- in **auto mode**, picks a model from the tier you configured; in **manual mode**, only suggests one.

AY-PI works with any provider Pi supports (Anthropic, OpenAI, Google, OpenRouter, local models, ...). You choose the models. AY-PI chooses the tier.

## Install

```bash
pi install npm:@ayhanblt/ay-pi
```

Requires Pi 1.4 or newer.

## Quick start

1. Log in to the providers you use (`/login`).
2. Put models into tiers:

   ```text
   /ay-pi add low       # pick a fast, cheap model
   /ay-pi add medium    # pick your everyday model
   /ay-pi add high      # pick your strongest model
   ```

   You can add several models to a tier. They form a fallback chain: the first usable one wins.
3. Turn on auto mode: `/ay-pi auto` (or select `ay-pi/auto` in `/model`).
4. Optional but recommended: add **Jev** so you can skip the commands (see [Jev and other classifiers](#jev-and-other-classifiers)).

## Usage examples

The footer shows every decision as `AY-PI <behavior> · <tier> · <mode>`, plus the model that answered in auto mode. Before the first prompt it reads `AY-PI ready · auto tier · <mode>`. `/ay-pi` shows the same and more.

The examples use these tiers:

```json
{ "low": ["openai-codex/gpt-6-luna"], "medium": ["openai-codex/gpt-6.1-sol"], "high": ["openai-codex/gpt-6-astra"] }
```

### Pick the behavior with a command (auto mode)

| You type | Footer | What happens |
| --- | --- | --- |
| `/chat what is 2+2?` | `CHAT · low · auto · gpt-6-luna` | A quick answer from the cheap model |
| `/review math.js` | `REVIEW · medium · auto · gpt-6.1-sol` | Findings, no file changes |
| `/plan fix add() in math.js and add a test` | `PLAN · high · auto · gpt-6-astra` | A `## Plan`, no file changes |
| `how does math.js work?` | `CHAT · medium · auto · gpt-6.1-sol` | No command and no classifier: the safe default, read-only |

### Plan, then code

```text
/plan fix add() in math.js and add a test     → PLAN · high, the plan is kept
what are the risks of this plan?              → CHAT · medium, read-only;
                                                 "a plan is waiting. Reply /code to implement it"
/code                                         → CODE · medium, the plan is implemented
```

`/code` with text (`/code also update the README`) implements the plan with your extra note. If the model answers `/plan` with a question instead of a plan, the earlier plan stays pending.

### Pin a tier

```text
/ay-pi tier high      → every prompt uses high: /chat hello → CHAT · high (pinned)
/ay-pi tier auto      → the behavior decides the tier again
```

### Fallback

If a tier is empty or its models are not usable, the neighbouring tier answers. With an empty `low` tier, `/chat hello` shows `CHAT · low→medium · auto · gpt-6.1-sol`. If a request fails, it is retried on the next model of the chain.

### Manual mode

```text
/ay-pi manual           → back to the last model auto mode used
/plan refactor config   → PLAN · high · manual, and a hint:
                          "AY-PI suggests the high tier (openai-codex/gpt-6-astra) for this PLAN request."
```

Your model is kept. AY-PI still turns off the file tools for read-only behaviors and adds the behavior instructions.

## Behaviors

| Behavior | What it is for | Default tier | Can change files |
| --- | --- | --- | --- |
| `CHAT` | Questions and explanations | low | no |
| `SUGGEST` | Options, recommendations | medium | no |
| `REVIEW` | Code review, audits | medium | no |
| `PLAN` | Designing work before coding | high | no |
| `CODE` | Implementing, fixing, refactoring, tests | medium | yes |

"Cannot change files" means the `edit`, `write` and `bash` tools are switched off for that turn.

## How a prompt is decided

AY-PI walks down this ladder and stops at the first rung that applies:

1. **Explicit command.** `/chat`, `/suggest`, `/review`, `/plan` or `/code` before the prompt (they show up in `/` autocomplete). No model is called.
2. **Pending plan.** After a `PLAN` turn, the plan (its `## Plan` section) is kept. A clarifying question is not a plan and does not replace one. `/code` (alone or with text) implements it. With a classifier, a message like "looks good, go ahead" also counts as approval.
3. **Classifier (optional).** If a classifier such as Jev is available, AY-PI asks it three typed questions: what kind of task is this, does the user want files changed now, and how hard is it. Hard tasks move one tier up, trivial ones one tier down.
4. **Safe default.** If nothing above applies: `CHAT`, medium tier, read-only.

`CODE` is only reached through `/code`, an approved plan, or a classifier that is at least 80% sure files should change. If the classifier thinks it is a coding task but is not sure about changing files, the turn runs as `SUGGEST`.

## Auto and manual mode

- **Auto:** the selected model is `ay-pi/auto`. Before each request it picks the first usable model of the decided tier. If that tier is empty or unavailable, it tries the neighbouring tiers (a missing `high` model falls back to `medium` before `low`). Tool follow-ups stay on the same model, so the prompt cache stays warm. A failed request is retried on the next model in the chain.
- **Manual:** you pick any model with `/model`. AY-PI still scopes tools and adds instructions, and tells you when it would have chosen a different tier.

Pin the tier for the session with `/ay-pi tier high` (or `low`, `medium`), and give the choice back with `/ay-pi tier auto`.

## Jev and other classifiers

Without a classifier, AY-PI only knows what you tell it with a command; every other prompt gets the safe default (`CHAT`, medium, read-only). With a classifier such as **Jev**, you can just type, and AY-PI picks the behavior and the tier for you. Jev is a small, fast classification model, so a decision costs a fraction of a cent and adds little latency.

### Set up Jev

1. Run `/login`, choose **TypeSafe** and paste your API key (or set `TYPESAFE_API_KEY`).
2. Check it with `/ay-pi jev`: it shows the classifier AY-PI uses. `/ay-pi` shows it on the `Classifier:` line.

`classifier` in `ay-pi.json` is `auto` by default: the first available Jev model, else any other classifier Pi offers (OpenRouter, OpenCode, Cloudflare Workers AI, OpenAI, llama.cpp). Choose one with `/ay-pi classifier provider/model`, or turn it off with `/ay-pi classifier off`.

### What Jev is asked

For every prompt without a command, AY-PI asks three typed questions:

- **task**: is this `CHAT`, `SUGGEST`, `REVIEW`, `PLAN` or `CODE`?
- **file changes**: does the user want files changed now?
- **complexity**: trivial, ordinary or hard? Trivial work moves one tier down, hard work one tier up.

While a plan is pending, it also asks whether the message approves the plan.

`CODE` needs at least 80% on "file changes"; below that the turn runs as `SUGGEST`. A task answer under 50% is ignored and the safe default is used.

### Examples (no commands typed)

| You type | Decision |
| --- | --- |
| `what does math.js do?` | `CHAT · low` (trivial question) |
| `which improvements would you suggest for this code?` | `SUGGEST · medium` |
| `review math.js, is there a bug?` | `REVIEW · medium` |
| `plan adding a multiply function, don't write code yet` | `PLAN · high`, the plan is kept |
| `ok, go ahead` (plan pending) | `CODE · medium`, the plan is implemented |
| `add a subtract function to math.js` | `CODE · medium` |
| `what are the architectural implications of moving to a monorepo? dig deep` | `CHAT · medium` (hard question, one tier up) |

Commands still win: `/plan`, `/code` and the others skip the classifier. Each decision, with the classifier's answers, is stored in the session as an `ay-pi.decision` entry.

## Commands

| Command | Effect |
| --- | --- |
| `/ay-pi` or `/ay-pi status` | Mode, tiers, classifier, pending plan, last decision |
| `/ay-pi auto` | Select `ay-pi/auto` |
| `/ay-pi manual` | Switch to the last model auto mode used; pick others with `/model` |
| `/ay-pi tier low\|medium\|high\|auto` | Pin or unpin the tier for this session |
| `/ay-pi add <tier>` / `/ay-pi remove <tier>` | Edit a tier's model list |
| `/ay-pi jev` | Show the classifier status and how to add a key |
| `/ay-pi classifier auto\|off\|provider/model` | Choose the classifier |
| `/ay-pi reload` | Re-read the configuration files |

## Configuration

`/ay-pi add` and `/ay-pi classifier` write `~/.pi/agent/ay-pi.json`. You can also edit it by hand:

```json
{
  "tiers": {
    "low": ["anthropic/claude-haiku-4-5"],
    "medium": ["anthropic/claude-sonnet-4-5", "openai-codex/gpt-5.6-terra"],
    "high": ["openai-codex/gpt-5.6-sol"]
  },
  "classifier": "auto"
}
```

- Models are `provider/model`, as shown in `/model`.
- `classifier`: `auto` (first available Jev, else any classifier), `off`, or a specific `provider/model`.
- A trusted project can override keys in `.pi/ay-pi.json`.

Each decision is stored in the session as an `ay-pi.decision` entry, so you can see later why a turn ran the way it did.

## Development

```bash
npm install
npm run typecheck
npm test
npm run build        # bundles src/ into extension/ay-pi/dist
```

The published package lives in `extension/ay-pi`. See [docs/architecture.md](docs/architecture.md) for the code layout.

## License

MIT
