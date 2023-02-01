import { CurrencyCode } from '@appTypes/index';
import { USD, CAD, Currency } from '@dinero.js/currencies';

/**
 * Given a Currency Code, return Dinero currency information.
 *
 * @param currencyCode Currency code.
 * @returns Dinero currency information.
 */
const getDineroCurrencyInfo = (
  currencyCode: CurrencyCode
): Currency<number> => {
  switch (currencyCode) {
    case CurrencyCode.CAD:
      return CAD;

    default:
      return USD;
  }
};

export default getDineroCurrencyInfo;
