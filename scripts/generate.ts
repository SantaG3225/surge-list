import { buildAll } from "./parsers/index.js";
import { mkdirSync } from "fs";

async function main() {
  mkdirSync("generated", { recursive: true });

  await buildAll({
    outputDir: "generated",
    files: [
      "reject",
      "apple",
      "icloud",
      "telegram",
      "proxy",
      "microsoft",
      "cn",
      "cncidr"
    ]
  });
}

main();
