import React from 'react';
import { render } from '@testing-library/react';
import { describe, test } from '@jest/globals';

import { InvoiceStatus } from '@appTypes/index';

import { StatusIndicator } from '..';

describe('<StatusIndicator />', () => {
  describe('with prop status = draft', () => {
    const status = InvoiceStatus.Draft;

    test('it should render correctly', () => {
      const node = render(<StatusIndicator status={status} />);
      expect(node).toMatchSnapshot();
    });
  });

  describe('with prop status = pending', () => {
    const status = InvoiceStatus.Pending;

    test('it should render correctly', () => {
      const node = render(<StatusIndicator status={status} />);
      expect(node).toMatchSnapshot();
    });
  });

  describe('with prop status = paid', () => {
    const status = InvoiceStatus.Paid;

    test('it should render correctly', () => {
      const node = render(<StatusIndicator status={status} />);
      expect(node).toMatchSnapshot();
    });
  });

  describe('with an unknown prop', () => {
    const status = 'hello world' as InvoiceStatus;

    test('it should render correctly', () => {
      const node = render(<StatusIndicator status={status} />);
      expect(node).toMatchSnapshot();
    });
  });
});
