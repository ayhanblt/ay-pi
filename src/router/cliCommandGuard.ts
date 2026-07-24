/**
 * CLI COMMAND GUARD
 * -----------------
 * Detects shell CLI commands typed inadvertently into the agent chat prompt (e.g. `pi update`).
 * Pure deterministic pattern matching without external SDK dependencies.
 */

interface CliOnlyCommand {
  pattern: RegExp;
  displayName: string;
}

const CLI_ONLY_COMMANDS: CliOnlyCommand[] = [
  { pattern: /^pi\s+update(\s|$)/i, displayName: "pi update" },
  { pattern: /^pi\s+--version(\s|$)/i, displayName: "pi --version" },
  { pattern: /^pi\s+config(\s|$)/i, displayName: "pi config" },
  { pattern: /^pi\s+login(\s|$)/i, displayName: "pi login" },
];

/**
 * Returns the matching command name if `rawText` represents a CLI command; otherwise returns `null`.
 */
export function detectMisplacedCliCommand(rawText: string): string | null {
  const trimmed = rawText.trim();
  for (const cmd of CLI_ONLY_COMMANDS) {
    if (cmd.pattern.test(trimmed)) {
      return cmd.displayName;
    }
  }
  return null;
}

