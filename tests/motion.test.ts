import { scrollMotion } from '../src/lib/motion';

test('scroll motion stays bounded for overscroll and short pages', () => {
  expect(scrollMotion(-20, 100)).toBe(0);
  expect(scrollMotion(50, 100)).toBe(0.5);
  expect(scrollMotion(200, 100)).toBe(1);
  expect(scrollMotion(50, 0)).toBe(0);
  expect(scrollMotion(Number.NaN, 100)).toBe(0);
});
