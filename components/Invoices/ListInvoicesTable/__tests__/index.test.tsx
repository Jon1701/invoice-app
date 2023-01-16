import React from 'react';
import { describe, test } from '@jest/globals';
import { render } from '@testing-library/react';

import { Invoice } from '@appTypes/index';
import { sampleInvoices } from '@sampleData/Invoices';

import ListInvoicesTable from '..';

describe('<ListInvoicesTable />', () => {
  describe('with empty invoices prop', () => {
    const invoices: Array<Invoice> = [];

    test('it should render without errors', () => {
      const node = render(<ListInvoicesTable invoices={invoices} />);

      expect(node).toMatchSnapshot();
    });
  });

  describe('with prop invoices set to sample data', () => {
    const invoices: Array<Invoice> = sampleInvoices;

    test('it should render without errors', () => {
      const node = render(<ListInvoicesTable invoices={invoices} />);

      expect(node).toMatchSnapshot();
    });
  });
});
