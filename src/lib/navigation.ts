export function activeSection(
  sections: { id: string; top: number }[],
  guide: number,
): string | null {
  return sections.filter((section) => section.top <= guide).at(-1)?.id ?? null;
}
