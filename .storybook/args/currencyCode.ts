import { CurrencyCode as CurrencyCodeEnums } from '@appTypes/index';

export const currencyCodeMapping = {
  [CurrencyCodeEnums.CAD]: CurrencyCodeEnums.CAD,
  [CurrencyCodeEnums.USD]: CurrencyCodeEnums.USD,
};

export const currencyCodeArgType = {
  options: Object.keys(currencyCodeMapping),
  mapping: currencyCodeMapping,
  control: {
    type: 'radio',
  },
};
