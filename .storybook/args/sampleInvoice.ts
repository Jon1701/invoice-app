import { sampleInvoices } from '@sampleData/Invoices';
import { blankInvoice } from '@components/Invoices/Form';

export enum SampleInvoiceEnums {
  BlankInvoice = 'Blank Invoice',
  SampleInvoice1 = 'Sample Invoice 1',
  SampleInvoice2 = 'Sample Invoice 2',
  SampleInvoice3 = 'Sample Invoice 3',
  SampleInvoice4 = 'Sample Invoice 4',
}

export const sampleInvoiceMapping = {
  [SampleInvoiceEnums.BlankInvoice]: blankInvoice,
  [SampleInvoiceEnums.SampleInvoice1]: sampleInvoices[0],
  [SampleInvoiceEnums.SampleInvoice2]: sampleInvoices[1],
  [SampleInvoiceEnums.SampleInvoice3]: sampleInvoices[2],
  [SampleInvoiceEnums.SampleInvoice4]: sampleInvoices[3],
};

export const sampleInvoiceArgType = {
  options: Object.keys(sampleInvoiceMapping),
  mapping: sampleInvoiceMapping,
  control: {
    type: 'radio',
  },
};
