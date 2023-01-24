import { Currency, Invoice, InvoiceStatus } from '@appTypes/index';
import calculateInvoiceTotalFromItems from '@utils/invoices/calculateInvoiceTotalFromItems';

// Original Invoice data with placeholder calculated values to satisfy interface
// requirements.
const originalData: Array<Invoice> = [
  {
    id: '1',
    amount: { total: 0 },
    currency: Currency.CAD,
    status: InvoiceStatus.Draft,
    biller: {
      name: 'Jonathan Archer',
      email: 'jarcher@nx01.com',
      address: {
        line1: '01 Enterprise Avenue',
        city: 'San Francisco',
        state: 'California',
        postalCode: '12345',
        country: 'United States',
      },
    },
    client: {
      name: 'Kathryn Janeway',
      email: 'kathryn.janeway@ncc74656.com',
      address: {
        line1: '74656 Voyager Path',
        city: 'Calgary',
        state: 'Alberta',
        postalCode: 'L1H3C1',
        country: 'Canada',
      },
    },
    items: [
      {
        id: 'invoiceitem_1a881a28d41345059705ea73209a3447',
        description: 'Self Sealing Stem Bolt',
        unitPrice: 36.18,
        quantity: 5,
      },
      {
        id: 'invoiceitem_68450b8e-8276-4dc7-b720-91b07fadec85',
        description: 'Reverse Ratcheting Router',
        unitPrice: 4.32,
        quantity: 10,
      },
      {
        id: 'invoiceitem_60e546e905b2422ba945ca7911fe7f50',
        description: 'Gold-pressed Latinum',
        unitPrice: 12.36,
        quantity: 88,
      },
      { description: 'Plasma Conduit', unitPrice: 9102, quantity: 84 },
    ],
  },
  {
    id: '2',
    amount: { total: 0 },
    currency: Currency.USD,
    status: InvoiceStatus.Pending,
    biller: {
      name: 'Hikaru Sulu',
      email: 'sulu.hikaru@excelsior.net',
      address: {
        line1: '2000 Excelsior Road',
        city: 'San Francisco',
        state: 'California',
        postalCode: '12856',
        country: 'United States',
      },
    },
    client: {
      name: 'James Kirk',
      email: 'jtk@enterprise.com',
      address: {
        line1: '1701 Enterprise Road',
        line2: 'Block A',
        city: 'Toronto',
        state: 'Ontario',
        postalCode: 'K8S7H6',
        country: 'Canada',
      },
    },
    items: [
      {
        id: 'invoiceitem_0422e201d4514d1b912ba74ef3860e14',
        description: 'Tricorder',
        unitPrice: 3617.12,
        quantity: 277,
      },
      {
        id: 'invoiceitem_8bf64b9dafb94a3a9b2ed741c1e64cfe',
        description: 'Medical Tricorder',
        unitPrice: 5.84,
        quantity: 3693,
      },
      {
        id: 'invoiceitem_6b2ec443bdde405eb735e2cbee65a361',
        description: 'Tribble',
        unitPrice: 7.9,
        quantity: 363,
      },
    ],
  },
  {
    id: '3',
    amount: { total: 0 },
    currency: Currency.JPY,
    status: InvoiceStatus.Pending,
    biller: {
      name: 'Jean-Luc Picard',
      email: 'jlp@stargazer.com',
      address: {
        line1: '2893 Stargazer Lane',
        city: 'Winnipeg',
        state: 'Manitoba',
        postalCode: 'K8B2V1',
        country: 'Canada',
      },
    },
    client: {
      name: 'Locutus of Borg',
      email: 'locutus@borg.com',
      address: {
        line1: '634 Sphere Street',
        city: 'Toronto',
        state: 'Ontario',
        postalCode: 'J8M2G1',
        country: 'Canada',
      },
    },
    items: [
      {
        id: 'invoiceitem_a43047d100d8459198fbfb59bdfd9f8e',
        description: 'Hull Plate',
        unitPrice: 5851674,
        quantity: 50,
      },
    ],
  },
  {
    id: '4',
    amount: { total: 0 },
    currency: Currency.CAD,
    status: InvoiceStatus.Paid,
    biller: {
      name: 'William T. Riker',
      email: 'riker@titan.com',
      address: {
        line1: '80102 Titan Avenue',
        city: 'Unknown City',
        state: 'Unknown State',
        postalCode: 'M7B6D1',
        country: 'Canada',
      },
    },
    client: {
      name: 'Beverly Crusher',
      email: 'crusher@sf.medical',
      address: {
        line1: '18276 Pasteur Lane',
        city: 'Los Angeles',
        state: 'California',
        postalCode: '89182',
        country: 'United States',
      },
    },
    items: [],
  },
];

// Transformed data with calculated values.
export const sampleInvoices: Array<Invoice> = originalData.map(
  (invoice: Invoice) => {
    // Get total amount from items (quantity and unit price.)
    const total: number = invoice.items.reduce(
      calculateInvoiceTotalFromItems,
      0
    );

    invoice.amount.total = total;

    return invoice;
  }
);
