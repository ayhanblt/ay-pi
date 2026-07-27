export type RepositoryScanStrategy = "Allowed" | "Limited" | "Disabled";

export interface ContextStrategy {
  focusTargets: string[]; // e.g. "banner", "navbar", "login"
  repositoryScan: RepositoryScanStrategy;
  expectedGoal: string;
  reason: string;
}
