import { daysInMonth } from './DateChecker';

describe('daysInMonth', () => {
  test('returns 31 for January', () => {
    expect(daysInMonth(2023, 1)).toBe(31);
  });

  test('returns 28 for February in a non-leap year', () => {
    expect(daysInMonth(2023, 2)).toBe(28);
  });

  test('returns 29 for February in a leap year', () => {
    expect(daysInMonth(2024, 2)).toBe(29);
  });

  test('returns 30 for April', () => {
    expect(daysInMonth(2023, 4)).toBe(30);
  });

  test('returns 31 for December', () => {
    expect(daysInMonth(2023, 12)).toBe(31);
  });

  test('returns 0 for invalid month', () => {
    expect(daysInMonth(2023, 13)).toBe(0);
  });

  test('returns 0 for month less than 1', () => {
    expect(daysInMonth(2023, 0)).toBe(0);
  });
});