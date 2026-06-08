// scripts/build.js

const fs = require("fs");

// Generate AI.list
const ai = fs
  .readFileSync("source/AI.txt", "utf8")
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean);

// Remove duplicates
const result = [...new Set(ai)].sort();

// Write output
fs.writeFileSync(
  "rules/AI.list",
  result.join("\n")
);

console.log(`Generated ${result.length} rules`);