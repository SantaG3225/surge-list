import { parseDomains } from "./domainParser";
import { parseCidrs } from "./cidrParser";
import { writeFileSync, mkdirSync } from "fs";
import sources from "../../sources.json";

export async function buildAll(config: { outputDir: string; files: string[] }) {
  mkdirSync(config.outputDir, { recursive: true });

  for (const name of config.files) {
    const list = sources[name];

    if (!list) continue;

    let output = "";

    if (name === "cncidr") {
      output = parseCidrs(list);
    } else {
      output = parseDomains(list);
    }

    writeFileSync(`${config.outputDir}/${name}.txt`, output.trim() + "\n");
  }
}
