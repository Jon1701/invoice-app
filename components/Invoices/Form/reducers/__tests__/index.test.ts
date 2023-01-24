import { describe, expect, test } from '@jest/globals';

import { sampleInvoices } from '@sampleData/Invoices';
import { Currency, Invoice, InvoiceStatus, InvoiceItem } from '@appTypes/index';
import deepClone from '@utils/deepClone';
import {
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
  ActionCreator,
  InvoiceItemQuantityPayload,
  InvoiceItemDescriptionPayload,
  InvoiceItemUnitPricePayload,
  invoiceReducer,
  blankInvoice,
  blankInvoiceItem,
} from '@components/Invoices/Form';

describe('invoiceReducer()', () => {
  describe('with the setInvoice() action', () => {
    describe('with existing state', () => {
      const initialState = sampleInvoices[0];

      test('should return the new Invoice', () => {
        const expected: Invoice = sampleInvoices[1];

        const payload: ActionCreator<Invoice> = setInvoice(expected);
        const actual: Invoice = invoiceReducer(initialState, payload);

        expect(actual).toEqual(expected);
      });
    });

    describe('without existing state', () => {
      const initialState: Invoice = blankInvoice;

      test('should return the new Invoice', () => {
        const expected: Invoice = sampleInvoices[1];

        const payload: ActionCreator<Invoice> = setInvoice(expected);
        const actual: Invoice = invoiceReducer(initialState, payload);

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setCurrency() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Currency field updated', () => {
        const currency = Currency.JPY;

        // Manually set new Currency.
        const expected: Invoice = deepClone(initialState);
        expected.currency = currency;

        // Modify Currency using Action.
        const payload: ActionCreator<Currency> = setCurrency(currency);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Currency field updated', () => {
        const currency = Currency.JPY;

        // Manually set new Currency.
        const expected: Invoice = deepClone(initialState);
        expected.currency = currency;

        // Modify Currency using Action.
        const payload: ActionCreator<Currency> = setCurrency(currency);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setInvoiceStatus() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Invoice Status field updated', () => {
        const status = InvoiceStatus.Pending;

        // Manually set new Invoice Status.
        const expected: Invoice = deepClone(initialState);
        expected.status = status;

        // Modify Invoice Status using Action.
        const payload: ActionCreator<InvoiceStatus> = setInvoiceStatus(status);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if the Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Invoice Status field updated', () => {
        const status = InvoiceStatus.Paid;

        // Manually set new Invoice Status.
        const expected: Invoice = deepClone(initialState);
        expected.status = status;

        // Modify Invoice Status using Action.
        const payload: ActionCreator<InvoiceStatus> = setInvoiceStatus(status);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerName() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Biller Name field updated', () => {
        const billerName = 'Edward Jellico';

        // Manually set new Biller Name.
        const expected: Invoice = deepClone(initialState);
        expected.biller.name = billerName;

        // Modify Biller Name using Action.
        const payload: ActionCreator<string> = setBillerName(billerName);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Name field updated', () => {
        const billerName = 'Ross';

        // Manually set new Biller Name.
        const expected: Invoice = deepClone(initialState);
        expected.biller.name = billerName;

        // Modify Biller Name using Action.
        const payload: ActionCreator<string> = setBillerName(billerName);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerEmail() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Biller Email field updated', () => {
        const billerEmail = 'randomly-generated-email-address@example.com';

        // Manually set new Biller Email Status.
        const expected: Invoice = deepClone(initialState);
        expected.biller.email = billerEmail;

        // Modify Biller Email using Action.
        const payload: ActionCreator<string> = setBillerEmail(billerEmail);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Email field updated', () => {
        const billerEmail = 'another-random-email@example.net';

        // Manually set new Biller Email.
        const expected: Invoice = deepClone(initialState);
        expected.biller.email = billerEmail;

        // Modify Biller Email using Action.
        const payload: ActionCreator<string> = setBillerEmail(billerEmail);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressLine1() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Biller Address Line 1 field updated', () => {
        const line1 = 'NX-59650 Prometheus Court';

        // Manually set new Biller Address Line 1.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.line1 = line1;

        // Modify Biller Address Line 1 using Action.
        const payload: ActionCreator<string> = setBillerAddressLine1(line1);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address Line 1 field updated', () => {
        const line1 = 'NCC-1764 I.S.S. Defiant Avenue';

        // Manually set new Biller Address Line 1.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.line1 = line1;

        // Modify Biller Address Line 1 using Action.
        const payload: ActionCreator<string> = setBillerAddressLine1(line1);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressLine2() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Biller Address Line 2 field updated', () => {
        const line2 = 'NX-02';

        // Manually set new Biller Address Line 2.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.line2 = line2;

        // Modify Biller Address Line 2 using Action.
        const payload: ActionCreator<string> = setBillerAddressLine2(line2);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if the Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address Line 2 field updated', () => {
        const line2 = 'NCC-1863';

        // Manually set new Biller Address Line 2.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.line2 = line2;

        // Modify Biller Address Line 2 using Action.
        const payload: ActionCreator<string> = setBillerAddressLine2(line2);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressCity() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Biller Address City field updated', () => {
        const city = 'Tokyo';

        // Manually set new Biller Address City.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.city = city;

        // Modify Biller Address City using Action.
        const payload: ActionCreator<string> = setBillerAddressCity(city);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address City field updated', () => {
        const city = 'Nagoya';

        // Manually set new Biller Address City.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.city = city;

        // Modify Biller Address City using Action.
        const payload: ActionCreator<string> = setBillerAddressCity(city);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressState() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Biller Address State field updated', () => {
        const state = 'British Columbia';

        // Manually set new Biller Address State.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.state = state;

        // Modify Biller Address State using Action.
        const payload: ActionCreator<string> = setBillerAddressState(state);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address State field updated', () => {
        const state = 'Prince Edward Island';

        // Manually set new Biller Address State.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.state = state;

        // Modify Biller Address State using Action.
        const payload: ActionCreator<string> = setBillerAddressState(state);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressPostalCode() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Biller Address Postal Code field updated', () => {
        const postalCode = 'L8M6S6';

        // Manually set new Biller Address Postal Code.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.postalCode = postalCode;

        // Modify Biller Address Postal Code using Action.
        const payload: ActionCreator<string> =
          setBillerAddressPostalCode(postalCode);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address Postal Code field updated', () => {
        const postalCode = 'C6A7H2';

        // Manually set new Biller Address Postal Code.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.postalCode = postalCode;

        // Modify Biller Address Postal Code using Action.
        const payload: ActionCreator<string> =
          setBillerAddressPostalCode(postalCode);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setBillerAddressCountry() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Biller Address Country field updated', () => {
        const country = 'Taiwan';

        // Manually set new Biller Address Country.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.country = country;

        // Modify Biller Address Country using Action.
        const payload: ActionCreator<string> = setBillerAddressCountry(country);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address Country field updated', () => {
        const country = 'Taiwan';

        // Manually set new Biller Address Country.
        const expected: Invoice = deepClone(initialState);
        expected.biller.address.country = country;

        // Modify Biller Address Country using Action.
        const payload: ActionCreator<string> = setBillerAddressCountry(country);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientName() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Client Name field updated', () => {
        const clientName = 'Edward Jellico';

        // Manually set new Client Name.
        const expected: Invoice = deepClone(initialState);
        expected.client.name = clientName;

        // Modify Client Name using Action.
        const payload: ActionCreator<string> = setClientName(clientName);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Name field updated', () => {
        const clientName = 'Ross';

        // Manually set new Client Name.
        const expected: Invoice = deepClone(initialState);
        expected.client.name = clientName;

        // Modify Client Name using Action.
        const payload: ActionCreator<string> = setClientName(clientName);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientEmail() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Client Email field updated', () => {
        const clientEmail = 'randomly-generated-email-address@example.com';

        // Manually set new Client Email Status.
        const expected: Invoice = deepClone(initialState);
        expected.client.email = clientEmail;

        // Modify Client Email using Action.
        const payload: ActionCreator<string> = setClientEmail(clientEmail);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Email field updated', () => {
        const clientEmail = 'another-random-email@example.net';

        // Manually set new Client Email.
        const expected: Invoice = deepClone(initialState);
        expected.client.email = clientEmail;

        // Modify Client Email using Action.
        const payload: ActionCreator<string> = setClientEmail(clientEmail);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressLine1() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Client Address Line 1 field updated', () => {
        const line1 = 'NX-59650 Prometheus Court';

        // Manually set new Client Address Line 1.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.line1 = line1;

        // Modify Client Address Line 1 using Action.
        const payload: ActionCreator<string> = setClientAddressLine1(line1);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Biller Address Line 1 field updated', () => {
        const line1 = 'NCC-1764 I.S.S. Defiant Avenue';

        // Manually set new Client Address Line 1.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.line1 = line1;

        // Modify Client Address Line 1 using Action.
        const payload: ActionCreator<string> = setClientAddressLine1(line1);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressLine2() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Client Address Line 2 field updated', () => {
        const line2 = 'NX-02';

        // Manually set new Client Address Line 2.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.line2 = line2;

        // Modify Client Address Line 2 using Action.
        const payload: ActionCreator<string> = setClientAddressLine2(line2);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if the Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Address Line 2 field updated', () => {
        const line2 = 'NCC-1863';

        // Manually set new Client Address Line 2.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.line2 = line2;

        // Modify Client Address Line 2 using Action.
        const payload: ActionCreator<string> = setClientAddressLine2(line2);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressCity() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Client Address City field updated', () => {
        const city = 'Tokyo';

        // Manually set new Client Address City.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.city = city;

        // Modify Client Address City using Action.
        const payload: ActionCreator<string> = setClientAddressCity(city);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Address City field updated', () => {
        const city = 'Nagoya';

        // Manually set new Client Address City.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.city = city;

        // Modify Client Address City using Action.
        const payload: ActionCreator<string> = setClientAddressCity(city);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressState() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with just the Client Address State field updated', () => {
        const state = 'British Columbia';

        // Manually set new Client Address State.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.state = state;

        // Modify Client Address State using Action.
        const payload: ActionCreator<string> = setClientAddressState(state);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Address State field updated', () => {
        const state = 'Prince Edward Island';

        // Manually set new Client Address State.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.state = state;

        // Modify Client Address State using Action.
        const payload: ActionCreator<string> = setClientAddressState(state);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressPostalCode() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[3]);

      test('should return the Invoice with just the Client Address Postal Code field updated', () => {
        const postalCode = 'L8M6S6';

        // Manually set new Client Address Postal Code.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.postalCode = postalCode;

        // Modify Client Address Postal Code using Action.
        const payload: ActionCreator<string> =
          setClientAddressPostalCode(postalCode);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Address Postal Code field updated', () => {
        const postalCode = 'C6A7H2';

        // Manually set new Client Address Postal Code.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.postalCode = postalCode;

        // Modify Client Address Postal Code using Action.
        const payload: ActionCreator<string> =
          setClientAddressPostalCode(postalCode);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the setClientAddressCountry() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[2]);

      test('should return the Invoice with just the Client Address Country field updated', () => {
        const country = 'Taiwan';

        // Manually set new Client Address Country.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.country = country;

        // Modify Client Address Country using Action.
        const payload: ActionCreator<string> = setClientAddressCountry(country);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with just the Client Address Country field updated', () => {
        const country = 'Taiwan';

        // Manually set new Client Address Country.
        const expected: Invoice = deepClone(initialState);
        expected.client.address.country = country;

        // Modify Client Address Country using Action.
        const payload: ActionCreator<string> = setClientAddressCountry(country);
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the addBlankInvoiceItem() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      test('should return the Invoice with a new, blank Invoice Item', () => {
        // Manually add the new Item.
        const expected: Invoice = deepClone(sampleInvoices[0]);
        expected.items = expected.items.concat([deepClone(blankInvoiceItem)]);

        // Modify Items using Action.
        const payload: ActionCreator<void> = addBlankInvoiceItem();
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      test('should return the Invoice with a new, blank Invoice Item', () => {
        // Manually add the new Item.
        const expected: Invoice = deepClone(initialState);
        expected.items = [deepClone(blankInvoiceItem)];

        // Modify Items using Action.
        const payload: ActionCreator<void> = addBlankInvoiceItem();
        const actual: Invoice = invoiceReducer(initialState, payload);

        // Check if Invoices match.
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('with the deleteInvoiceItem() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[1]);

      describe('with a known Invoice Item ID', () => {
        // Invoice Item ID (located at end of array).
        const invoiceItemID =
          sampleInvoices[1].items[sampleInvoices[1].items.length - 1].id;

        test('should return the Invoice without the matching Invoice Item', () => {
          // Manually remove the last item in the array.
          const expected: Invoice = deepClone(initialState);
          expected.items = expected.items.slice(0, expected.items.length - 1);

          // Modify Items using Action.
          const payload: ActionCreator<string> = deleteInvoiceItem(
            invoiceItemID as string
          );
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_6a43fb6450174768852054f105dda2a5';

        test('should not delete any Invoice Items from the array', () => {
          const expected: Invoice = deepClone(initialState);

          // Delete matching Invoice Item by ID.
          const payload: ActionCreator<string> =
            deleteInvoiceItem(invoiceItemID);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_6a43fb6450174768852054f105dda2a5';

        test('should not delete any Invoice Items from the array', () => {
          const expected: Invoice = deepClone(initialState);

          // Delete matching Invoice Item by ID.
          const payload: ActionCreator<string> =
            deleteInvoiceItem(invoiceItemID);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe('with the setInvoiceItemQuantity() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      describe('with a known Invoice Item ID', () => {
        const invoiceItemID = initialState.items[0].id;

        test('should return the Invoice with the quantity modified', () => {
          const quantity = 9001;

          // Manually set the quantity.
          const expected: Invoice = deepClone(initialState);
          expected.items[0].quantity = quantity;

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemQuantityPayload> =
            setInvoiceItemQuantity(invoiceItemID as string, quantity);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the quantity unmodified', () => {
          const quantity = 9001;

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemQuantityPayload> =
            setInvoiceItemQuantity(invoiceItemID as string, quantity);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the quantity unmodified', () => {
          const quantity = 9001;

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemQuantityPayload> =
            setInvoiceItemQuantity(invoiceItemID as string, quantity);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe('with the setInvoiceItemDescription() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[0]);

      describe('with a known Invoice Item ID', () => {
        const invoiceItemID = initialState.items[0].id;

        test('should return the Invoice with the description modified', () => {
          const description = 'Jelly Donut';

          // Manually set the description.
          const expected: Invoice = deepClone(initialState);
          expected.items[0].description = description;

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemDescriptionPayload> =
            setInvoiceItemDescription(invoiceItemID as string, description);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the description unmodified', () => {
          const description = 'Jelly Donut';

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemDescriptionPayload> =
            setInvoiceItemDescription(invoiceItemID as string, description);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the description unmodified', () => {
          const description = 'Jelly Donut';

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemDescriptionPayload> =
            setInvoiceItemDescription(invoiceItemID as string, description);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe('with the setInvoiceItemUnitPrice() action', () => {
    describe('with existing state', () => {
      const initialState: Invoice = deepClone(sampleInvoices[1]);

      describe('with a known Invoice Item ID', () => {
        const invoiceItemID = initialState.items[1].id;

        test('should return the Invoice with the unit price modified', () => {
          const unitPrice = 19285.1;

          // Manually set the unit price.
          const expected: Invoice = deepClone(initialState);
          expected.items[1].unitPrice = unitPrice;

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemUnitPricePayload> =
            setInvoiceItemUnitPrice(invoiceItemID as string, unitPrice);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the description unmodified', () => {
          const unitPrice = 328306182;

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemUnitPricePayload> =
            setInvoiceItemUnitPrice(invoiceItemID as string, unitPrice);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('with blank state', () => {
      const initialState: Invoice = deepClone(blankInvoice);

      describe('with an unknown Invoice Item ID', () => {
        const invoiceItemID = 'invoiceitem_5d6ad4de46c74947801f1ae7a87b5d92';

        test('should return the Invoice with the unit price unmodified', () => {
          const unitPrice = 124890;

          const expected: Invoice = deepClone(initialState);

          // Modify Items using Action.
          const payload: ActionCreator<InvoiceItemUnitPricePayload> =
            setInvoiceItemUnitPrice(invoiceItemID as string, unitPrice);
          const actual: Invoice = invoiceReducer(initialState, payload);

          // Check if Invoices match.
          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
