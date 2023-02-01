import { describe, test, expect } from '@jest/globals';

import { Currency } from '@appTypes/index';

import formatCurrency from '../index';

describe('formatCurrency()', () => {
  describe('with currencyCode = "USD"', () => {
    const currencyCode: Currency = Currency.USD;

    describe('with amount = 0', () => {
      const amount = 0;

      test('should format it as "$0.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1', () => {
      const amount = 1;

      test('should format it as "$0.01"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.01';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 314', () => {
      const amount = 314;

      test('should format it as "$3.14"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$3.14';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 138637', () => {
      const amount = 138637;

      test('should format it as "$1,386.37"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1,386.37';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 981703391', () => {
      const amount = 981703391;

      test('should format it as "$9,817,033.91"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$9,817,033.91';

        expect(actual).toBe(expected);
      });
    });
  });

  describe('with currencyCode = "CAD"', () => {
    const currencyCode: Currency = Currency.CAD;

    describe('with amount = 0', () => {
      const amount = 0;

      test('should format it as "$0.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 84', () => {
      const amount = 84;

      test('should format it as "$0.84"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.84';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 741', () => {
      const amount = 741;

      test('should format it as "$7.41"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$7.41';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 381736563816', () => {
      const amount = 381736563816;

      test('should format it as "$3,817,365,638.16"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$3,817,365,638.16';

        expect(actual).toBe(expected);
      });
    });
  });
});
