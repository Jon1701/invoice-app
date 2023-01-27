import { InvoiceStatus } from '@appTypes/index';

/**
 * Returns the user-friendly status from an Invoice status enum.
 */
const displayStatus = (status: InvoiceStatus): string => {
  switch (status) {
    case InvoiceStatus.Draft:
      return 'Draft';

    case InvoiceStatus.Paid:
      return 'Paid';

    case InvoiceStatus.Pending:
      return 'Pending';

    default:
      return 'Unknown';
  }
};

export default displayStatus;
