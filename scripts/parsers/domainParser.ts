export function parseDomains(list: string[]): string[] {
  return list
    .map(x => x.trim())
    .filter(Boolean)
    .map(x => `DOMAIN-SUFFIX,${x}`);
}
