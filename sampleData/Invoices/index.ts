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
        line2: "Captain's Quarters",
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
      {
        id: 'invoiceitem_a40957b920af41f08ea89e9c192b2076',
        description: 'Plasma Conduit',
        unitPrice: 9102,
        quantity: 84,
      },
      {
        id: 'invoiceitem_a6be1a51b249453abd2f301bd1b204d6',
        description: 'Quantum Torpedo',
        unitPrice: 123957,
        quantity: 47,
      },
      {
        id: 'invoiceitem_3007759a86c34937a41e5b18d49c42e6',
        description: 'Medical Tricorder',
        unitPrice: 2582,
        quantity: 155,
      },
      {
        id: 'invoiceitem_4c461cf74b3a4b90a961b19e3631842b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        unitPrice: 120346879,
        quantity: 1325,
      },
      {
        id: 'invoiceitem_9e257977e9364b82b4422d2dd2d0a0aa',
        description: 'Polarized Hull Plate',
        unitPrice: 356812,
        quantity: 1825,
      },
      {
        id: 'invoiceitem_bfb9bc3326cb4a87a163ce56c2601067',
        description: 'Antimatter Injector',
        unitPrice: 47387,
        quantity: 5,
      },
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
        line2: 'N/A',
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
      {
        id: 'invoiceitem_1deee6c0df3c4a058f717bea813a2c0b',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis at consectetur lorem donec. Egestas sed tempus urna et pharetra pharetra massa. Bibendum enim facilisis gravida neque convallis a cras. Nunc aliquet bibendum enim facilisis gravida neque convallis. Lacus vestibulum sed arcu non odio euismod lacinia at. Varius sit amet mattis vulputate. Orci dapibus ultrices in iaculis. A erat nam at lectus urna duis convallis convallis. Vel eros donec ac odio tempor orci dapibus ultrices. Metus vulputate eu scelerisque felis imperdiet proin. Dictum non consectetur a erat nam at lectus urna. Dictum sit amet justo donec enim diam vulputate ut pharetra.',
        unitPrice: 25929578.3,
        quantity: 346234,
      },
    ],
  },
  {
    id: '3',
    amount: { total: 0 },
    currency: Currency.USD,
    status: InvoiceStatus.Pending,
    biller: {
      name: 'Jean-Luc Picard',
      email: 'jlp@stargazer.com',
      address: {
        line1: '2893 Stargazer Lane',
        line2: 'Suite AC3A',
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
        description: 'M-5 Computer',
        unitPrice: 3623441,
        quantity: 15,
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
