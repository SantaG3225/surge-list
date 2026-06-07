export function cleanCidrList(list: string[]): string[] {
  return Array.from(
    new Set(
      list
        .map((c) => c.trim())
        .filter((c) => c.length > 0)
    )
  ).sort();
}
