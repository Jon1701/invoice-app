import { InvoiceStatus } from '@appTypes/index';

export enum InvoiceStatusIndicatorEnums {
  Draft = 'Draft',
  Pending = 'Pending',
  Paid = 'Paid',
  Unknown = 'Unknown',
}

export const invoiceStatusIndicatorMapping = {
  [InvoiceStatusIndicatorEnums.Draft]: InvoiceStatus.Draft,
  [InvoiceStatusIndicatorEnums.Pending]: InvoiceStatus.Pending,
  [InvoiceStatusIndicatorEnums.Paid]: InvoiceStatus.Paid,
  [InvoiceStatusIndicatorEnums.Unknown]: undefined,
};

export const invoiceStatusIndicatorArgType = {
  options: Object.keys(invoiceStatusIndicatorMapping),
  mapping: invoiceStatusIndicatorMapping,
  control: {
    type: 'radio',
  },
};
