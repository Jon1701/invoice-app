import { describe, expect, test } from '@jest/globals';

import { InvoiceItem } from '@appTypes/index';

import calculateInvoiceTotalFromItems from '..';

describe('calculateInvoiceTotalFromItems()', () => {
  describe('with no Invoice items', () => {
    const items: Array<InvoiceItem> = [];

    test('should return 0', () => {
      const actual = items.reduce(calculateInvoiceTotalFromItems, 0);
      const expected = 0;

      expect(actual).toBe(expected);
    });
  });

  describe('with Invoice items', () => {
    const items: Array<InvoiceItem> = [
      {
        quantity: 37,
        unitPrice: 467.25,
        description: 'Sample Item #0',
      },
      {
        quantity: 361,
        unitPrice: 0.15,
        description: 'Sample Item #1',
      },
      {
        quantity: 3618,
        unitPrice: 16.12,
        description: 'Sample Item #2',
      },
    ];

    test('should return 75664.56', () => {
      const actual = items.reduce(calculateInvoiceTotalFromItems, 0);
      const expected = 75664.56;

      expect(actual).toBeCloseTo(expected, 2);
    });
  });
});
