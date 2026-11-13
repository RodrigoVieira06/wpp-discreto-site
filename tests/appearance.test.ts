import {
  normalizeVisibleArea,
  parseTheme,
  resolveTheme,
} from '../src/lib/appearance';

test('unknown and missing theme preferences follow the system', () => {
  expect(parseTheme(null)).toBe('auto');
  expect(parseTheme('invalid')).toBe('auto');
  expect(resolveTheme('auto', true)).toBe('dark');
  expect(resolveTheme('auto', false)).toBe('light');
});

test('saved overrides retain their theme when the system changes', () => {
  expect(resolveTheme('dark', false)).toBe('dark');
  expect(resolveTheme('light', true)).toBe('light');
});

test('the demo accepts only the product readable-area range', () => {
  expect(normalizeVisibleArea(40)).toBe(40);
  expect(normalizeVisibleArea(0)).toBe(20);
  expect(normalizeVisibleArea(150)).toBe(100);
  expect(normalizeVisibleArea(Number.NaN)).toBe(40);
});
