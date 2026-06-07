export function cleanDomainList(list: string[]): string[] {
  return Array.from(
    new Set(
      list
        .map((d) => d.trim().toLowerCase())
        .filter((d) => d.length > 0)
    )
  ).sort();
}
