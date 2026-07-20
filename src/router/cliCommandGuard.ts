/**
 * CLI-COMMAND-GUARD.TS
 * ----------------------
 * Bazı metinler ("pi update" gibi) aslında Pi'nin kendi CLI komutları --
 * sohbet kutusuna değil, gerçek bir terminale yazılmalı. Bu dosya, böyle
 * bir metin tespit edilirse (Pi-agnostik, saf regex/string eşleştirmesiyle)
 * kullanıcıya gösterilecek yönlendirme mesajını üretir. LLM çağrısı YAPMAZ,
 * Pi'yi import ETMEZ -- extension bunu "input" event'inde çağırıp sonucu
 * kullanır.
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

export function detectMisplacedCliCommand(rawText: string): string | null {
  const trimmed = rawText.trim();
  for (const cmd of CLI_ONLY_COMMANDS) {
    if (cmd.pattern.test(trimmed)) {
      return cmd.displayName;
    }
  }
  return null;
}
