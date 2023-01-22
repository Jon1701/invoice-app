import { describe, expect, test } from '@jest/globals';

import generateUUID, { UUIDTypeEnums } from '..';

describe('generateUUID()', () => {
  describe('with UUIDTypeEnum="invoice"', () => {
    test('should return a UUID indicating it belongs to an Invoice', () => {
      const actual = generateUUID(UUIDTypeEnums.Invoice);

      expect(actual).toMatch(/invoice_[\w\d]+/);
    });
  });

  describe('with UUIDTypeEnum="invoiceitem"', () => {
    test('should return a UUID indicating it belongs to an Invoice Item', () => {
      const actual = generateUUID(UUIDTypeEnums.InvoiceItem);

      expect(actual).toMatch(/invoiceitem_[\w\d]+/);
    });
  });
});
