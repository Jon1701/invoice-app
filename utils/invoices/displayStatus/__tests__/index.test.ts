import { describe, test } from '@jest/globals';

import { InvoiceStatus } from '@appTypes/index';

import displayStatus from '..';

describe('displayStatus()', () => {
  describe('with status = draft', () => {
    const status = InvoiceStatus.Draft;

    test('it should return Draft', () => {
      const expected = 'Draft';
      const actual = displayStatus(status);

      expect(actual).toBe(expected);
    });
  });

  describe('with status = pending', () => {
    const status = InvoiceStatus.Pending;

    test('it should return Pending', () => {
      const expected = 'Pending';
      const actual = displayStatus(status);

      expect(actual).toBe(expected);
    });
  });

  describe('with status = paid', () => {
    const status = InvoiceStatus.Paid;

    test('it should return Paid', () => {
      const expected = 'Paid';
      const actual = displayStatus(status);

      expect(actual).toBe(expected);
    });
  });
});
