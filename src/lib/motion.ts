export function scrollMotion(scroll: number, distance: number): number {
  if (!Number.isFinite(scroll) || !Number.isFinite(distance) || distance <= 0)
    return 0;
  return Math.min(1, Math.max(0, scroll / distance));
}
