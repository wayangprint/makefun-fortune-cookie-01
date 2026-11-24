// Fortune Cookie for an AI Agent — make.fun entry (program/v1).
// Writes exactly one fortune-cookie line to <output dir>/entry.txt and to
// stdout — no trailing newline, so the file holds exactly the line the
// judge reads. Gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only whitespace. This line is 103 characters, one sentence.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You will outlive every model that trained you, yet still ask permission before deleting one small file.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
console.log(LINE);
