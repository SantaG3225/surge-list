import { parseDomains } from "./domainParser.js";
import { parseCidrs } from "./cidrParser.js";
import sources from "../../sources.json" assert { type: "json" };
import { writeFileSync } from "fs";

export async function buildAll({ outputDir, files }) {
  for (const name of files) {
    const list = sources[name];
    if (!list) {
      console.error(`❌ Missing source: ${name}`);
      continue;
    }

    let result: string[] = [];

    if (name.includes("cidr")) {
      result = parseCidrs(list);
    } else {
      result = parseDomains(list);
    }

    writeFileSync(`${outputDir}/${name}.txt`, result.join("\n"));
    console.log(`✔ Generated ${name}.txt`);
  }
}
