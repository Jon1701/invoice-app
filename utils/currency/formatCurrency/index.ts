import { dinero, toUnits } from 'dinero.js';

import { Currency } from '@appTypes/index';

import getDineroCurrency from '../getDineroCurrency';

/**
 * Formats a given amount according to the given currency code.
 *
 * @param currencyCode Currency code.
 * @param rawIntegerAmount Amount to be formatted.
 * @returns Formatted string.
 */
const formatCurrency = (
  currencyCode: Currency,
  rawIntegerAmount: number
): string => {
  const d = dinero({
    amount: rawIntegerAmount,
    currency: getDineroCurrency(currencyCode),
  });

  // Split into major and minor currencies.
  const units = toUnits(d);
  const major = String(units[0]);
  let minor = String(units[1]);

  // Prepend a 0 to the minor currency to fill in the 10s place.
  if (minor.length === 1) {
    minor = `0${minor}`;
  }

  // Join major and minor currencies, and format with separators.
  return Number([major, minor].join('.')).toLocaleString('en-US', {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol',
  });
};

export default formatCurrency;
