import type { NextApiRequest, NextApiResponse } from 'next';
import { Invoice } from '@appTypes/index';

import { sampleInvoices } from '@sampleData/Invoices';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Invoice>>
) {
  if (req.method === 'GET') {
    res.status(200).json(sampleInvoices);
    return;
  }
}
