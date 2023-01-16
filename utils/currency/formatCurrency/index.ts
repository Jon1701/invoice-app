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
const formatCurrency = (currencyCode: Currency, amount: number): string => {
  return intl.formatNumber(amount, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol', // Don't show currency code.
  });
};

export default formatCurrency;
