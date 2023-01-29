import React from 'react';

import { Invoice } from '@appTypes/index';
import useGetDeviceType, { DeviceTypes } from '@hooks/useGetDeviceType';

import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

export interface ListInvoicesTableProps {
  /**
   * Array of Invoices.
   */
  invoices: Array<Invoice>;
}

/**
 * Displays a list of Invoices.
 */
const ListInvoicesTable: React.FC<ListInvoicesTableProps> = ({ invoices }) => {
  const deviceType = useGetDeviceType();

  switch (deviceType) {
    case DeviceTypes.Mobile:
      return <Mobile invoices={invoices} />;

    default:
      return <Desktop invoices={invoices} />;
  }
};

export default ListInvoicesTable;
