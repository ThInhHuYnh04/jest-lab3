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

  test('returns 0 for an invalid month', () => {
    expect(daysInMonth(2023, 13)).toBe(0);
  });

  test('returns 0 for a year out of range', () => {
    expect(daysInMonth(999, 1)).toBe(0);
    expect(daysInMonth(3001, 1)).toBe(0);
  });

  test('returns 0 for non-numeric inputs', () => {
    expect(daysInMonth('year', 'month')).toBe(0);
  });

  test('returns 0 for empty inputs', () => {
    expect(daysInMonth('', '')).toBe(0);
  });
});