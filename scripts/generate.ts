import { buildAll } from "./parsers";

async function main() {
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
