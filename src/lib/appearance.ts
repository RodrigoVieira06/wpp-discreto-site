export type Theme = 'auto' | 'light' | 'dark';
export function parseTheme(value: unknown): Theme {
  return value === 'light' || value === 'dark' ? value : 'auto';
}
export function resolveTheme(
  theme: Theme,
  darkSystem: boolean,
): 'light' | 'dark' {
  return theme === 'auto' ? (darkSystem ? 'dark' : 'light') : theme;
}
export function normalizeVisibleArea(value: number): number {
  return Number.isFinite(value)
    ? Math.max(20, Math.min(100, Math.round(value)))
    : 40;
}
