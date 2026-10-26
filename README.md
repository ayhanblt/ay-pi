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

1. **Explicit command.** `/chat`, `/suggest`, `/review`, `/plan` or `/code` at the start of the prompt. No model is called.
2. **Pending plan.** After a `PLAN` turn, the plan is kept. `/code` (alone or with text) implements it. With a classifier, a message like "looks good, go ahead" also counts as approval.
3. **Classifier (optional).** If a classifier such as Jev is available, AY-PI asks it three typed questions: what kind of task is this, does the user want files changed now, and how hard is it. Hard tasks move one tier up, trivial ones one tier down.
4. **Safe default.** If nothing above applies: `CHAT`, medium tier, read-only.

`CODE` is only reached through `/code`, an approved plan, or a classifier that is at least 80% sure files should change. If the classifier thinks it is a coding task but is not sure about changing files, the turn runs as `SUGGEST`.

## Auto and manual mode

- **Auto:** the selected model is `ay-pi/auto`. Before each request it picks the first usable model of the decided tier. If that tier is empty or unavailable, it tries the neighbouring tiers (a missing `high` model falls back to `medium` before `low`). Tool follow-ups stay on the same model, so the prompt cache stays warm. A failed request is retried on the next model in the chain.
- **Manual:** you pick any model with `/model`. AY-PI still scopes tools and adds instructions, and tells you when it would have chosen a different tier.

Pin the tier for the session with `/ay-pi tier high` (or `low`, `medium`), and give the choice back with `/ay-pi tier auto`.

## Jev and other classifiers

Without a classifier, AY-PI uses only explicit commands and the safe default. To let a classifier decide:

- run `/login`, choose **TypeSafe** and paste your API key, or
- set `TYPESAFE_API_KEY`.

Other classifier sources Pi supports work too (OpenRouter, OpenCode, Cloudflare Workers AI, OpenAI, llama.cpp). Check what AY-PI sees with `/ay-pi jev`.

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
