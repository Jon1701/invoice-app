import { Currency, Invoice, InvoiceStatus } from '@appTypes/index';
import { describe, expect, test } from '@jest/globals';

import { sampleInvoices } from '@sampleData/Invoices';

import {
  ActionCreator,
  ActionTypeEnums,
  setInvoice,
  setCurrency,
  setInvoiceStatus,
  setBillerName,
  setBillerEmail,
  setBillerAddressLine1,
  setBillerAddressLine2,
  setBillerAddressCity,
  setBillerAddressState,
  setBillerAddressPostalCode,
  setBillerAddressCountry,
  setClientName,
  setClientEmail,
  setClientAddressLine1,
  setClientAddressLine2,
  setClientAddressCity,
  setClientAddressState,
  setClientAddressPostalCode,
  setClientAddressCountry,
  addBlankInvoiceItem,
  deleteInvoiceItem,
  setInvoiceItemQuantity,
  setInvoiceItemDescription,
  setInvoiceItemUnitPrice,
  InvoiceItemQuantityPayload,
  InvoiceItemDescriptionPayload,
  InvoiceItemUnitPricePayload,
} from '../';

describe('setInvoice()', () => {
  test('should return the corresponding action', () => {
    const invoice: Invoice = sampleInvoices[0];

    const actual = setInvoice(invoice);
    const expected: ActionCreator<Invoice> = {
      type: ActionTypeEnums.SetInvoice,
      payload: invoice,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setCurrency()', () => {
  test('should return the corresponding action', () => {
    const currency: Currency = Currency.USD;

    const actual = setCurrency(currency);
    const expected: ActionCreator<Currency> = {
      type: ActionTypeEnums.SetCurrency,
      payload: currency,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setInvoiceStatus()', () => {
  test('should return the corresponding action', () => {
    const status: InvoiceStatus = InvoiceStatus.Paid;

    const actual = setInvoiceStatus(status);
    const expected: ActionCreator<InvoiceStatus> = {
      type: ActionTypeEnums.SetInvoiceStatus,
      payload: status,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerName()', () => {
  test('should return the corresponding action', () => {
    const name = 'Hoshi Sato';

    const actual = setBillerName(name);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerName,
      payload: name,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerEmail()', () => {
  test('should return the corresponding action', () => {
    const email = 'hello@world.com';

    const actual = setBillerEmail(email);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerEmail,
      payload: email,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressLine1()', () => {
  test('should return the corresponding action', () => {
    const line1 = '73811 Sovereign Crescent';

    const actual = setBillerAddressLine1(line1);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressLine1,
      payload: line1,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressLine2()', () => {
  test('should return the corresponding action', () => {
    const line2 = 'Deck 10 - Forward Section';

    const actual = setBillerAddressLine2(line2);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressLine2,
      payload: line2,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressCity()', () => {
  test('should return the corresponding action', () => {
    const city = 'Nagoya';

    const actual = setBillerAddressCity(city);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressCity,
      payload: city,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressState()', () => {
  test('should return the corresponding action', () => {
    const state = 'Fukuoka';

    const actual = setBillerAddressState(state);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressState,
      payload: state,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressPostalCode()', () => {
  test('should return the corresponding action', () => {
    const postalCode = '182-1902';

    const actual = setBillerAddressPostalCode(postalCode);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressPostalCode,
      payload: postalCode,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setBillerAddressCountry()', () => {
  test('should return the corresponding action', () => {
    const country = 'Taiwan';

    const actual = setBillerAddressCountry(country);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetBillerAddressCountry,
      payload: country,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientName()', () => {
  test('should return the corresponding action', () => {
    const name = 'Empress Sato';

    const actual = setClientName(name);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientName,
      payload: name,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientEmail()', () => {
  test('should return the corresponding action', () => {
    const email = 'example@domain.com';

    const actual = setClientEmail(email);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientEmail,
      payload: email,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressLine1()', () => {
  test('should return the corresponding action', () => {
    const line1 = '59650 Prometheus Avenue';

    const actual = setClientAddressLine1(line1);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressLine1,
      payload: line1,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressLine2()', () => {
  test('should return the corresponding action', () => {
    const line2 = 'Deck 73';

    const actual = setClientAddressLine2(line2);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressLine2,
      payload: line2,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressCity()', () => {
  test('should return the corresponding action', () => {
    const city = 'Taichung City';

    const actual = setClientAddressCity(city);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressCity,
      payload: city,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressState()', () => {
  test('should return the corresponding action', () => {
    const state = '臺灣省';

    const actual = setClientAddressState(state);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressState,
      payload: state,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressPostalCode()', () => {
  test('should return the corresponding action', () => {
    const postalCode = '0123456789';

    const actual = setClientAddressPostalCode(postalCode);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressPostalCode,
      payload: postalCode,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setClientAddressCountry()', () => {
  test('should return the corresponding action', () => {
    const country = 'Japan';

    const actual = setClientAddressCountry(country);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.SetClientAddressCountry,
      payload: country,
    };

    expect(actual).toEqual(expected);
  });
});

describe('addBlankInvoiceItem()', () => {
  test('should return the corresponding action', () => {
    const actual = addBlankInvoiceItem();
    const expected: ActionCreator<void> = {
      type: ActionTypeEnums.AddBlankInvoiceItem,
    };

    expect(actual).toEqual(expected);
  });
});

describe('deleteInvoiceItem()', () => {
  test('should return the corresponding action', () => {
    const id = 'invoiceitem_962dcd8b7dfd465792507a79bff07628';

    const actual = deleteInvoiceItem(id);
    const expected: ActionCreator<string> = {
      type: ActionTypeEnums.DeleteInvoiceItem,
      payload: id,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setInvoiceItemQuantity()', () => {
  test('should return the corresponding action', () => {
    const id = 'invoiceitem_962dcd8b7dfd465792507a79bff07628';
    const quantity = 9108285;

    const actual = setInvoiceItemQuantity(id, quantity);
    const expected: ActionCreator<InvoiceItemQuantityPayload> = {
      type: ActionTypeEnums.SetInvoiceItemQuantity,
      payload: { id, quantity } as InvoiceItemQuantityPayload,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setInvoiceItemDescription()', () => {
  test('should return the corresponding action', () => {
    const id = 'invoiceitem_962dcd8b7dfd465792507a79bff07628';
    const description = 'Donuts';

    const actual = setInvoiceItemDescription(id, description);
    const expected: ActionCreator<InvoiceItemDescriptionPayload> = {
      type: ActionTypeEnums.SetInvoiceItemDescription,
      payload: { id, description } as InvoiceItemDescriptionPayload,
    };

    expect(actual).toEqual(expected);
  });
});

describe('setInvoiceItemUnitPrice()', () => {
  test('should return the corresponding action', () => {
    const id = 'invoiceitem_962dcd8b7dfd465792507a79bff07628';
    const unitPrice = 3636123;

    const actual = setInvoiceItemUnitPrice(id, unitPrice);
    const expected: ActionCreator<InvoiceItemUnitPricePayload> = {
      type: ActionTypeEnums.SetInvoiceItemUnitPrice,
      payload: { id, unitPrice } as InvoiceItemUnitPricePayload,
    };

    expect(actual).toEqual(expected);
  });
});
