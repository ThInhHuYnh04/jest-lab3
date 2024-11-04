import { isValidDate } from './DateChecker';

describe('isValidDate', () => {
  test('returns true for a valid date', () => {
    expect(isValidDate(2023, 1, 15)).toBe(true);
  });

  test('returns false for an invalid month', () => {
    expect(isValidDate(2023, 13, 15)).toBe(false);
  });

  test('returns false for a day less than 1', () => {
    expect(isValidDate(2023, 1, 0)).toBe(false);
  });

  test('returns false for a day greater than the number of days in the month', () => {
    expect(isValidDate(2023, 2, 29)).toBe(false);
  });

  test('returns false for February 29 in a non-leap year', () => {
    expect(isValidDate(2023, 2, 29)).toBe(false);
  });

  test('returns true for February 29 in a leap year', () => {
    expect(isValidDate(2024, 2, 29)).toBe(true);
  });

  test('returns true for the last day of a month with 31 days', () => {
    expect(isValidDate(2023, 1, 31)).toBe(true);
  });

  test('returns true for the last day of a month with 30 days', () => {
    expect(isValidDate(2023, 4, 30)).toBe(true);
  });

  test('returns false for a year out of range', () => {
    expect(isValidDate(999, 1, 15)).toBe(false);
    expect(isValidDate(3001, 1, 15)).toBe(false);
  });

  test('returns false for non-numeric inputs', () => {
    expect(isValidDate('year', 'month', 'day')).toBe(false);
  });

  test('returns false for empty inputs', () => {
    expect(isValidDate('', '', '')).toBe(false);
  });
});