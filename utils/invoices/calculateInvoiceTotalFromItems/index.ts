import { InvoiceItem } from '@appTypes/index';

/**
 * Callback function for reduce() to calculate the total Invoice amount from
 * an array of Invoice items.
 *
 * @param runningTotal Running total.
 * @param invoiceItem Invoice item object.
 * @returns Running total.
 */
const calculateInvoiceTotalFromItems = (
  runningTotal: number,
  invoiceItem: InvoiceItem
): number => {
  return runningTotal + invoiceItem.quantity * invoiceItem.unitPrice;
};

export default calculateInvoiceTotalFromItems;
