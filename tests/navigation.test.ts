import { activeSection } from '../src/lib/navigation';

test('tracks the last section above the header guide', () => {
  expect(
    activeSection(
      [
        { id: 'recursos', top: 300 },
        { id: 'aparencia', top: 900 },
      ],
      120,
    ),
  ).toBeNull();
  expect(
    activeSection(
      [
        { id: 'recursos', top: -500 },
        { id: 'aparencia', top: 110 },
        { id: 'dados', top: 700 },
      ],
      120,
    ),
  ).toBe('aparencia');
});
