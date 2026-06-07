import { cleanDomainList } from "../cleaners/domain";

export function parseDomains(list: string[]): string {
  const cleaned = cleanDomainList(list);

  return cleaned
    .map((d) => {
      if (d.startsWith("*.")) return `DOMAIN-SUFFIX,${d.slice(2)}`;
      if (d.includes("*")) return `DOMAIN-KEYWORD,${d.replace(/\*/g, "")}`;
      return `DOMAIN,${d}`;
    })
    .join("\n");
}
