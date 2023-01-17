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
    billerAddress: {
      name: 'Jonathan Archer',
      email: 'jarcher@nx01.com',
      line1: '01 Enterprise Avenue',
      city: 'San Francisco',
      state: 'California',
      postalCode: '12345',
      country: 'United States',
    },
    clientAddress: {
      name: 'Kathryn Janeway',
      email: 'kathryn.janeway@ncc74656.com',
      line1: '74656 Voyager Path',
      city: 'Calgary',
      state: 'Alberta',
      postalCode: 'L1H3C1',
      country: 'Canada',
    },
    items: [
      { description: 'Self Sealing Stem Bolt', unitPrice: 36.18, quantity: 5 },
      {
        description: 'Reverse Ratcheting Router',
        unitPrice: 4.32,
        quantity: 10,
      },
      { description: 'Gold-pressed Latinum', unitPrice: 12.36, quantity: 88 },
      { description: 'Plasma Conduit', unitPrice: 9102, quantity: 84 },
    ],
  },
  {
    id: '2',
    amount: { total: 0 },
    currency: Currency.USD,
    status: InvoiceStatus.Pending,
    billerAddress: {
      name: 'Hikaru Sulu',
      email: 'sulu.hikaru@excelsior.net',
      line1: '2000 Excelsior Road',
      city: 'San Francisco',
      state: 'California',
      postalCode: '12856',
      country: 'United States',
    },
    clientAddress: {
      name: 'James Kirk',
      email: 'jtk@enterprise.com',
      line1: '1701 Enterprise Road',
      line2: 'Block A',
      city: 'Toronto',
      state: 'Ontario',
      postalCode: 'K8S7H6',
      country: 'Canada',
    },
    items: [
      { description: 'Tricorder', unitPrice: 3617.12, quantity: 277 },
      { description: 'Medical Tricorder', unitPrice: 5.84, quantity: 3693 },
      { description: 'Tribble', unitPrice: 7.9, quantity: 363 },
    ],
  },
  {
    id: '3',
    amount: { total: 0 },
    currency: Currency.JPY,
    status: InvoiceStatus.Pending,
    billerAddress: {
      name: 'Jean-Luc Picard',
      email: 'jlp@stargazer.com',
      line1: '2893 Stargazer Lane',
      city: 'Winnipeg',
      state: 'Manitoba',
      postalCode: 'K8B2V1',
      country: 'Canada',
    },
    clientAddress: {
      name: 'Locutus of Borg',
      email: 'locutus@borg.com',
      line1: '634 Sphere Street',
      city: 'Toronto',
      state: 'Ontario',
      postalCode: 'J8M2G1',
      country: 'Canada',
    },
    items: [{ description: 'Hull Plate', unitPrice: 5851674, quantity: 50 }],
  },
  {
    id: '4',
    amount: { total: 0 },
    currency: Currency.CAD,
    status: InvoiceStatus.Paid,
    billerAddress: {
      name: 'William T. Riker',
      email: 'riker@titan.com',
      line1: '80102 Titan Avenue',
      city: 'Unknown City',
      state: 'Unknown State',
      postalCode: 'M7B6D1',
      country: 'Canada',
    },
    clientAddress: {
      name: 'Beverly Crusher',
      email: 'crusher@sf.medical',
      line1: '18276 Pasteur Lane',
      city: 'Los Angeles',
      state: 'California',
      postalCode: '89182',
      country: 'United States',
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
