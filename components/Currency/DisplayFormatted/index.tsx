import React from 'react';

import { CurrencyCode } from '@appTypes/index';
import formatCurrency from '@utils/currency/formatCurrency';

interface Props {
  /**
   * CSS class names.
   */
  className?: string;

  /**
   * Currency code.
   */
  currencyCode: CurrencyCode;

  /**
   * Amount to be formatted.
   */
  rawIntegerValue: number;
}

/**
 * Displays a given amount according to the given currency code.
 */
export const DisplayFormattedCurrency: React.FC<Props> = ({
  className,
  currencyCode,
  rawIntegerValue,
}: Props) => {
  return (
    <span className={className}>
      {formatCurrency(currencyCode, rawIntegerValue)}
    </span>
  );
};
