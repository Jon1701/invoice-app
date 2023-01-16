import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import { Currency } from '@appTypes/index';

import { formatCurrency, DisplayFormattedCurrency } from '../';

describe('formatCurrency()', () => {
  describe('with currencyCode = "USD"', () => {
    const currencyCode: Currency = Currency.USD;

    describe('with amount = 0', () => {
      const amount: number = 0;

      test('should format it as "$0.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1', () => {
      const amount: number = 1;

      test('should format it as "$1.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 314', () => {
      const amount: number = 314;

      test('should format it as "$314"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$314.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1386.37', () => {
      const amount: number = 1386.37;

      test('should format it as "$1,386.37"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$1,386.37';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 9817033.91', () => {
      const amount: number = 9817033.91;

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
      const amount: number = 0;

      test('should format it as "$0.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$0.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 84', () => {
      const amount: number = 84;

      test('should format it as "$84.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$84.00';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 74.1', () => {
      const amount: number = 74.1;

      test('should format it as "$74.10"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$74.10';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 381736563816', () => {
      const amount: number = 381736563816;

      test('should format it as "$381,736,563,816.00"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '$381,736,563,816.00';

        expect(actual).toBe(expected);
      });
    });
  });

  describe('with currencyCode = "JPY"', () => {
    const currencyCode: Currency = Currency.JPY;

    describe('with amount = 0', () => {
      const amount: number = 0;

      test('should format it as "¥0"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '¥0';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 371', () => {
      const amount: number = 371;

      test('should format it as "¥371"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '¥371';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 1024', () => {
      const amount: number = 1024;

      test('should format it as "¥1,024"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '¥1,024';

        expect(actual).toBe(expected);
      });
    });

    describe('with amount = 498167567', () => {
      const amount: number = 498167567;

      test('should format it as "¥498,167,567"', () => {
        const actual = formatCurrency(currencyCode, amount);
        const expected = '¥498,167,567';

        expect(actual).toBe(expected);
      });
    });
  });
});

describe('<DisplayFormattedCurrency />', () => {
  describe('with prop currencyCode = "USD"', () => {
    const currencyCode: Currency = Currency.USD;

    describe('with prop amount = 0', () => {
      const amount: number = 0;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 1', () => {
      const amount: number = 1;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 314', () => {
      const amount: number = 314;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 1386.37', () => {
      const amount: number = 1386.37;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 9817033.91', () => {
      const amount: number = 9817033.91;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });
  });

  describe('with prop currencyCode = "CAD"', () => {
    const currencyCode: Currency = Currency.CAD;

    describe('with prop amount = 0', () => {
      const amount: number = 0;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 84', () => {
      const amount: number = 84;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 74.1', () => {
      const amount: number = 74.1;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 381736563816', () => {
      const amount: number = 381736563816;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });
  });

  describe('with prop currencyCode = "JPY"', () => {
    const currencyCode: Currency = Currency.JPY;

    describe('with prop amount = 0', () => {
      const amount: number = 0;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 371', () => {
      const amount: number = 371;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 1024', () => {
      const amount: number = 1024;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });

    describe('with prop amount = 498167567', () => {
      const amount: number = 498167567;

      test('should render without errors', () => {
        const node = render(
          <DisplayFormattedCurrency
            currencyCode={currencyCode}
            amount={amount}
          />
        );

        expect(node).toMatchSnapshot();
      });
    });
  });
});
