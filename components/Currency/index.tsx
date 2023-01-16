import React from 'react';
import { createIntl, createIntlCache } from '@formatjs/intl';

import { Currency } from '@appTypes/index';

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: 'en-US',
  },
  cache
);

/**
 * Formats a given amount according to the given currency code.
 *
 * @param currencyCode Currency code.
 * @param amount Amount to be formatted.
 * @returns Formatted string.
 */
export const formatCurrency = (
  currencyCode: Currency,
  amount: number
): string => {
  return intl.formatNumber(amount, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol', // Don't show currency code.
  });
};

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
