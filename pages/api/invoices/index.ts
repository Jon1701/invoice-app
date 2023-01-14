import type { NextApiRequest, NextApiResponse } from 'next';
import { Currency, Invoice, InvoiceStatus } from '@appTypes/index';

const db: Array<Invoice> = [
  {
    id: '1',
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
      { description: 'Self Sealing Stem Bolt', unitPrice: 3618, quantity: 5 },
      {
        description: 'Reverse Ratcheting Router',
        unitPrice: 432,
        quantity: 10,
      },
      { description: 'Gold-pressed Latinum', unitPrice: 1236, quantity: 88 },
    ],
  },
  {
    id: '2',
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
      { description: 'Tricorder', unitPrice: 3617, quantity: 277 },
      { description: 'Medical Tricorder', unitPrice: 584, quantity: 3693 },
      { description: 'Tribble', unitPrice: 790, quantity: 363 },
    ],
  },
  {
    id: '3',
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
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Invoice>>
) {
  if (req.method === 'GET') {
    res.status(200).json(db);
    return;
  }
}
