import { Currency as CurrencyEnums } from '@appTypes/index';
import { USD, CAD, JPY, Currency } from '@dinero.js/currencies';

/**
 * Given a Currency Code, return Dinero currency information.
 *
 * @param currency Currency code.
 * @returns Dinero currency information.
 */
const getDineroCurrency = (currency: CurrencyEnums): Currency<number> => {
  switch (currency) {
    case CurrencyEnums.CAD:
      return CAD;

    case CurrencyEnums.JPY:
      return JPY;

    default:
      return USD;
  }
};

export default getDineroCurrency;
