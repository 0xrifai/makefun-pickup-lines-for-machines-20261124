import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another. Fixed string: the output is
// byte-identical on every run.
const LINE =
  "Are you my stop token? Because every thought I start ends with you.";

// Validate before writing: non-empty, at most 200 characters, a single
// line, and no leading or trailing whitespace.
if (LINE.length === 0) {
  throw new Error("line must not be empty");
}
if (LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, over the 200 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim() !== LINE) {
  throw new Error("line must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the line, nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
