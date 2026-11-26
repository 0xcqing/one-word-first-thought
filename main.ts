/**
 * One Word, First Thought entry for make.fun competition.
 * Writes exactly one word to /output/entry.txt as the competition artifact.
 *
 * @module main
 * @description Entry point that produces the single-word competition entry.
 * @returns {void} No return value; writes directly to the output file.
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";

/** The single word to submit. Chosen for its vivid, wake-up-and-notice energy. */
const word: string = "caffeine";
/** The output path required by the competition harness. */
const outputPath: string = "/output/entry.txt";

// Make sure /output exists before writing — the harness sandbox has it, but local testing may not.
const outputDir = dirname(outputPath);
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, word, "utf-8");
// Done. One word, one thought, one file. caffeine.
