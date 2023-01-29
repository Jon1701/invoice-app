import React from 'react';

import {
  Table,
  Header,
  Body,
  ColumnHeading,
  Row,
  Cell,
} from '@components/Table/Desktop';
import { DisplayFormattedCurrency } from '@components/Currency';
import { Invoice } from '@appTypes/index';
import { StatusIndicator } from '@components/Invoices/StatusIndicator';

import { ListInvoicesTableProps } from '..';

/**
 * Displays a table of Invoices (Desktop layout).
 */
const Desktop: React.FC<ListInvoicesTableProps> = ({ invoices }) => {
  return (
    <Table>
      <Header>
        <Row>
          <ColumnHeading>Status</ColumnHeading>
          <ColumnHeading>Client Name</ColumnHeading>
          <ColumnHeading style={{ textAlign: 'right' }}>Total</ColumnHeading>
        </Row>
      </Header>
      <Body>
        {invoices.map((item: Invoice) => {
          const { id, status, client, currency, amount } = item;

          return (
            <Row key={id}>
              <Cell style={{ textAlign: 'center' }}>
                <StatusIndicator status={status} />
              </Cell>
              <Cell style={{ textAlign: 'center' }}>{client.name}</Cell>
              <Cell style={{ textAlign: 'right' }}>
                <DisplayFormattedCurrency
                  currencyCode={currency}
                  amount={amount.total}
                />
              </Cell>
            </Row>
          );
        })}
      </Body>
    </Table>
  );
};

export default Desktop;
