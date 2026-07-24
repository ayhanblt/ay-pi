/**
 * GIT CONTEXT
 * -----------
 * Discovers modified files via `git diff`, retrieves file metadata (size, modification timestamp),
 * and loads file content for candidates selected by `ContextAssembler`.
 */

import { execSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import type { FileCandidate } from "./types.js";
import type { AssembledFile } from "../prompt/builder.js";

/**
 * Executes `git diff --name-only` to retrieve uncommitted modified file paths.
 * Returns an empty array if Git is not initialized or execution fails.
 */
export function getChangedFilePaths(cwd: string = process.cwd()): string[] {
  try {
    const output = execSync("git diff --name-only", {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!output) return [];
    return output.split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Constructs an array of `FileCandidate` objects with size and modification timestamp metadata.
 * Skips deleted or inaccessible files.
 */
export function buildFileCandidates(
  paths: string[],
  cwd: string = process.cwd()
): FileCandidate[] {
  const candidates: FileCandidate[] = [];
  for (const relativePath of paths) {
    try {
      const fullPath = join(cwd, relativePath);
      const stat = statSync(fullPath);
      candidates.push({
        path: relativePath,
        size: stat.size,
        isActive: false,
        lastModifiedAt: stat.mtimeMs,
      });
    } catch {
      // Omit deleted or unreadable files
    }
  }
  return candidates;
}

/**
 * Loads text content for selected `FileCandidate` files.
 * Replaces content with an error message string if reading fails for a particular file.
 */
export function loadFileContents(
  files: FileCandidate[],
  cwd: string = process.cwd()
): AssembledFile[] {
  return files.map((file) => {
    try {
      const content = readFileSync(join(cwd, file.path), "utf-8");
      return { path: file.path, content };
    } catch (error) {
      return {
        path: file.path,
        content: `(Failed to read file: ${error instanceof Error ? error.message : String(error)})`,
      };
    }
  });
}

