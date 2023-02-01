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

      test('should format it as "$1.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 314', () => {
      const amount = 314;

      test('should format it as "$314"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$314.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1386.37', () => {
      const amount = 1386.37;

      test('should format it as "$1,386.37"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1,386.37';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 9817033.91', () => {
      const amount = 9817033.91;

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

      test('should format it as "$84.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$84.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 74.1', () => {
      const amount = 74.1;

      test('should format it as "$74.10"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$74.10';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 381736563816', () => {
      const amount = 381736563816;

      test('should format it as "$381,736,563,816.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$381,736,563,816.00';

        expect(actual).toBe(expected);
      });
    });
  });

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

    describe('with amount = 371', () => {
      const amount = 371;

      test('should format it as "$371.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$371.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1024', () => {
      const amount = 1024;

      test('should format it as "$1,024.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1,024.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 498167567', () => {
      const amount = 498167567;

      test('should format it as "$498,167,567.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$498,167,567.00';

        expect(actual).toBe(expected);
      });
    });
  });
});
