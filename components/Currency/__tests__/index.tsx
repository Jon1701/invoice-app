import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import { Currency } from '@appTypes/index';

import { DisplayFormattedCurrency } from '../';

describe('<DisplayFormattedCurrency />', () => {
  describe('with prop currencyCode = "USD"', () => {
    const currencyCode: Currency = Currency.USD;

    describe('with prop amount = 0', () => {
      const amount = 0;

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
      const amount = 1;

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
      const amount = 314;

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
      const amount = 1386.37;

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
      const amount = 9817033.91;

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
      const amount = 0;

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
      const amount = 84;

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
      const amount = 74.1;

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
      const amount = 381736563816;

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
      const amount = 0;

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
      const amount = 371;

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
      const amount = 1024;

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
      const amount = 498167567;

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
