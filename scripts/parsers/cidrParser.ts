export function parseCidrs(list: string[]): string[] {
  return list
    .map(x => x.trim())
    .filter(Boolean)
    .map(x => `IP-CIDR,${x}`);
}
