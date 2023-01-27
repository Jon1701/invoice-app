import { describe, expect, test } from '@jest/globals';

import timestampToDate from '..';

describe('timestampToDate()', () => {
  describe('with timestamp = undefined', () => {
    const timestamp = undefined;

    test('it should return undefined', () => {
      const actual = timestampToDate(timestamp);

      expect(actual).toBeUndefined();
    });
  });

  describe('with timestamp = 1645514542', () => {
    const timestamp = 1645514542;

    test('it should return the ISO date string representation of new Date(2022, 1, 22, 2, 22, 22)', () => {
      const expected = new Date(2022, 1, 22, 2, 22, 22).toISOString();
      const actual = timestampToDate(timestamp);

      expect(actual?.toISOString()).toBe(expected);
    });
  });
});
