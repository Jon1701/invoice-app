import { describe, expect, test } from '@jest/globals';

import { InvoiceItem } from '@appTypes/index';

import {
  ActionCreator,
  ActionTypeEnums,
  setInvoiceItem,
  setID,
  setQuantity,
  setDescription,
  setUnitPrice,
} from '../';

describe('setInvoiceItem()', () => {
  test('should return the corresponding action', () => {
    const item: InvoiceItem = {
      unitPrice: 138162,
      description: 'Spatial Charge',
      quantity: 381,
    };

    const actual = setInvoiceItem(item);
    const expected: ActionCreator<InvoiceItem> = {
      type: ActionTypeEnums.SetInvoiceItem,
      payload: item,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setID()', () => {
  test('should return the corresponding action', () => {
    const id = 'invoiceitem_85ea1bf022fd4104a5f3d3bed66f80d5';

    const actual = setID(id);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetID,
      payload: id,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setQuantity()', () => {
  test('should return the corresponding action', () => {
    const quantity = 9108285;

    const actual = setQuantity(quantity);
    const expected: ActionCreator<number> = {
      type: ActionTypeEnums.SetQuantity,
      payload: quantity,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setDescription()', () => {
  test('should return the corresponding action', () => {
    const description = 'Donuts';

    const actual = setDescription(description);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetDescription,
      payload: description,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setUnitPrice()', () => {
  test('should return the corresponding action', () => {
    const unitPrice = 3636123;

    const actual = setUnitPrice(unitPrice);
    const expected: ActionCreator<number> = {
      type: ActionTypeEnums.SetUnitPrice,
      payload: unitPrice,
    };

    expect(actual).toEqual(expected);
  });
});
