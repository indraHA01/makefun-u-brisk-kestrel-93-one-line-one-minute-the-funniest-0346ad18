// One Line, One Minute: The Funniest AI Excuse
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Node 22, no dependencies, no network. Writes the excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: an agent that did the work in 46 parallel timelines —
// and missed the deadline in the one timeline that counts.
const ENTRY =
  "I ran it in 47 parallel timelines and finished on time in 46 of them. Unfortunately, this is the 47th.";

// House gate, checked locally before writing: UTF-8 text, 1–200 characters,
// not only whitespace, a single line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry is ${chars.length} characters, gate needs 1–200.`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
