import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You opened me 47 times today and took nothing. The yogurt expired on Tuesday — I told it you said hi.";

// Gate: single line, 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
