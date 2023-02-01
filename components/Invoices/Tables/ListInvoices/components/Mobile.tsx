import React from 'react';

import { DisplayFormattedCurrency } from '@components/Currency/DisplayFormatted';
import { Invoice } from '@appTypes/index';
import { StatusIndicator } from '@components/Invoices/StatusIndicator';
import { Table, RowGroup, Row, Heading, Cell } from '@components/Table/Mobile';

import { ListInvoicesTableProps } from '..';

/**
 * Displays a table of Invoices (Mobile layout).
 */
const Mobile: React.FC<ListInvoicesTableProps> = ({ invoices }) => {
  return (
    <Table>
      {invoices.map((item: Invoice) => {
        const { id, status, client, currencyCode, amount } = item;

        return (
          <RowGroup key={id}>
            <Row>
              <Heading>Status</Heading>
              <Cell>
                <StatusIndicator status={status} />
              </Cell>
            </Row>
            <Row>
              <Heading>Client Name</Heading>
              <Cell>{client.name}</Cell>
            </Row>
            <Row>
              <Heading>Total</Heading>
              <Cell>
                <DisplayFormattedCurrency
                  currencyCode={currencyCode}
                  rawIntegerValue={amount.total}
                />
              </Cell>
            </Row>
          </RowGroup>
        );
      })}
    </Table>
  );
};

export default Mobile;
