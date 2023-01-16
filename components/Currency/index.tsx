import React from 'react';

import { Currency } from '@appTypes/index';
import formatCurrency from '@utils/currency/formatCurrency';

interface Props {
  /**
   * CSS class names.
   */
  className?: string;

  /**
   * Currency code.
   */
  currencyCode: Currency;

  /**
   * Amount to be formatted.
   */
  amount: number;
}

/**
 * Displays a given amount according to the given currency code.
 */
export const DisplayFormattedCurrency: React.FC<Props> = ({
  className,
  currencyCode,
  amount,
}: Props) => {
  return (
    <span className={className}>{formatCurrency(currencyCode, amount)}</span>
  );
};
