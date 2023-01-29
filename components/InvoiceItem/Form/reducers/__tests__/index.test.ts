import { describe, expect, test } from '@jest/globals';

import {
  ActionCreator,
  setInvoiceItem,
  setID,
  setDescription,
  setQuantity,
  setUnitPrice,
} from '@components/InvoiceItem/Form/actions';
import { blankInvoiceItem, invoiceItemReducer } from '../';
import { sampleInvoices } from '@sampleData/Invoices';
import { InvoiceItem } from '@appTypes/index';
import deepClone from '@utils/deepClone';

describe('invoiceItemReducer()', () => {
  describe('with the setInvoice() action', () => {
    describe('with existing state', () => {
      const initialState = sampleInvoices[0].items[0];

      test('should return the new Invoice Item', () => {
        const expected: InvoiceItem = sampleInvoices[0].items[1];

        const payload: ActionCreator<InvoiceItem> = setInvoiceItem(expected);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        expect(actual).toEqual(expected);
      });
    });

    describe('without existing state', () => {
      const initialState: InvoiceItem = blankInvoiceItem;

      test('should return the new Invoice Item', () => {
        const expected: InvoiceItem = sampleInvoices[0].items[1];

        const payload: ActionCreator<InvoiceItem> = setInvoiceItem(expected);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setID() action', () => {
    describe('with existing state', () => {
      const initialState: InvoiceItem = deepClone(sampleInvoices[0].items[0]);

      test('should return the Invoice Item with just the ID field updated', () => {
        const id = 'invoiceitem_5c540d44c79d426b8edad0845ecdfa06';

        // Manually set the ID.
        const expected: InvoiceItem = deepClone(initialState);
        expected.id = id;

        // Modify ID using Action.
        const payload: ActionCreator<string> = setID(id);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoice Items match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: InvoiceItem = deepClone(blankInvoiceItem);

      test('should return the Invoice Item with just the ID field updated', () => {
        const id = 'invoiceitem_b62449e05d044e168097ede1f6d22473';

        // Manually set ID.
        const expected: InvoiceItem = deepClone(initialState);
        expected.id = id;

        // Modify ID using Action.
        const payload: ActionCreator<string> = setID(id);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setDescription() action', () => {
    describe('with existing state', () => {
      const initialState: InvoiceItem = deepClone(sampleInvoices[0].items[0]);

      test('should return the Invoice Item with just the Description field updated', () => {
        const description = 'This is a the newly updated description';

        // Manually set the Description.
        const expected: InvoiceItem = deepClone(initialState);
        expected.description = description;

        // Modify Description using Action.
        const payload: ActionCreator<string> = setDescription(description);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoice Items match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: InvoiceItem = deepClone(blankInvoiceItem);

      test('should return the Invoice Item with just the Description field updated', () => {
        const description = 'I just updated the Description.';

        // Manually set Description.
        const expected: InvoiceItem = deepClone(initialState);
        expected.description = description;

        // Modify Description using Action.
        const payload: ActionCreator<string> = setDescription(description);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setQuantity() action', () => {
    describe('with existing state', () => {
      const initialState: InvoiceItem = deepClone(sampleInvoices[0].items[0]);

      test('should return the Invoice Item with just the Quantity field updated', () => {
        const quantity = 340376;

        // Manually set the Quantity.
        const expected: InvoiceItem = deepClone(initialState);
        expected.quantity = quantity;

        // Modify Quantity using Action.
        const payload: ActionCreator<number> = setQuantity(quantity);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoice Items match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: InvoiceItem = deepClone(blankInvoiceItem);

      test('should return the Invoice Item with just the Quantity field updated', () => {
        const quantity = 461;

        // Manually set Quantity.
        const expected: InvoiceItem = deepClone(initialState);
        expected.quantity = quantity;

        // Modify Quantity using Action.
        const payload: ActionCreator<number> = setQuantity(quantity);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setUnitPrice() action', () => {
    describe('with existing state', () => {
      const initialState: InvoiceItem = deepClone(sampleInvoices[0].items[0]);

      test('should return the Invoice Item with just the Unit Price field updated', () => {
        const unitPrice = 81;

        // Manually set the Unit Price.
        const expected: InvoiceItem = deepClone(initialState);
        expected.unitPrice = unitPrice;

        // Modify Unit Price using Action.
        const payload: ActionCreator<number> = setUnitPrice(unitPrice);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoice Items match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: InvoiceItem = deepClone(blankInvoiceItem);

      test('should return the Invoice Item with just the Unit Price field updated', () => {
        const unitPrice = 473483;

        // Manually set Unit Price.
        const expected: InvoiceItem = deepClone(initialState);
        expected.unitPrice = unitPrice;

        // Modify Unit Price using Action.
        const payload: ActionCreator<number> = setUnitPrice(unitPrice);
        const actual: InvoiceItem = invoiceItemReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });
});
