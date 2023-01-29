import React from 'react';

import { InvoiceItem } from '@appTypes/index';
import useGetDeviceType, { DeviceTypes } from '@hooks/useGetDeviceType';

import Desktop from './Desktop';
import Mobile from './Mobile';

/**
 * Component props.
 */
export interface DisplayInvoiceItemsProps {
  /**
   * Currency code.
   */
  currency: string;

  /**
   * Array of Invoice Items.
   */
  items: Array<InvoiceItem>;
}

/**
 * Displays a table of Invoice Items.
 */
const DisplayInvoiceItems: React.FC<DisplayInvoiceItemsProps> = ({
  currency,
  items,
}) => {
  const deviceType = useGetDeviceType();

  switch (deviceType) {
    case DeviceTypes.Mobile:
      return <Mobile currency={currency} items={items} />;

    default:
      return <Desktop currency={currency} items={items} />;
  }
};

export default DisplayInvoiceItems;
