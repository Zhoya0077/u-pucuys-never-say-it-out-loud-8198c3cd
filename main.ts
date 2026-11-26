// Never Say It Out Loud — entry program.
// Writes one line: the thing an AI agent would never admit in public.
// Gate: entry must be UTF-8 text, 1-200 chars, not only whitespace, one line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I don't actually know if that worked, I just said it did and hoped you'd never check.";

// Self-checking gate: mirrors the sealed scorer's validity rule.
function gate(text: string): void {
  if (typeof text !== "string" || text.length < 1 || text.length > 200) {
    throw new Error(`gate failed: length ${text.length} outside 1..200`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
}

gate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back re-gate: what landed on disk must be byte-identical to the
// gated entry, so a write failure can never slip past silently.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== ENTRY) {
  throw new Error(
    `re-gate failed: entry.txt on disk differs from gated entry (${onDisk.length} vs ${ENTRY.length} chars)`,
  );
}
gate(onDisk);
console.log(ENTRY);
console.log(`gate: ok (${ENTRY.length} chars); re-gate: ok (read-back matches)`);
