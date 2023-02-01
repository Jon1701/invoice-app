import React from 'react';

import { InvoiceItem, CurrencyCode } from '@appTypes/index';
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
  currencyCode: CurrencyCode;

  /**
   * Array of Invoice Items.
   */
  items: Array<InvoiceItem>;
}

/**
 * Displays a table of Invoice Items.
 */
const DisplayInvoiceItems: React.FC<DisplayInvoiceItemsProps> = ({
  currencyCode,
  items,
}) => {
  const deviceType = useGetDeviceType();

  switch (deviceType) {
    case DeviceTypes.Mobile:
      return <Mobile currencyCode={currencyCode} items={items} />;

    default:
      return <Desktop currencyCode={currencyCode} items={items} />;
  }
};

export default DisplayInvoiceItems;
