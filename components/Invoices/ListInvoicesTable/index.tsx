import React from 'react';
import styled from 'styled-components';

import { Invoice, InvoiceItem } from '@appTypes/index';

import { DisplayFormattedCurrency } from '@components/Currency';
import { StatusIndicator } from '@components/Invoices/StatusIndicator';

/**
 * Styled table.
 */
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
  text-align: center;
`;

/**
 * Styled table heading.
 */
const Heading = styled.th`
  padding: 15px;
`;

/**
 * Styled table row.
 */
const Row = styled.tr`
  background-color: #453c67;
`;

/**
 * Styled table column.
 */
const Column = styled.td`
  padding: 15px;
`;

/**
 * Container for the No Invoices message.
 */
const ContainerNoInvoices = styled.div`
  background-color: #453c67;
  text-align: center;

  padding: 15px;
`;

interface Props {
  /**
   * Array of Invoices.
   */
  invoices: Array<Invoice>;
}

/**
 * Displays a list of Invoices.
 */
const ListInvoicesTable: React.FC<Props> = ({ invoices }: Props) => {
  if (invoices.length === 0) {
    return <ContainerNoInvoices>No Invoices found.</ContainerNoInvoices>;
  }

  const nodes = invoices.map((invoice: Invoice) => {
    return (
      <Row key={invoice.id}>
        <Column>{invoice.id}</Column>
        <Column>
          <StatusIndicator status={invoice.status} />
        </Column>
        <Column>{invoice.client.name}</Column>
        <Column>
          <DisplayFormattedCurrency
            currencyCode={invoice.currency}
            amount={invoice.amount.total}
          />
        </Column>
      </Row>
    );
  });

  return (
    <Table>
      <thead>
        <Row>
          <Heading>ID</Heading>
          <Heading>Status</Heading>
          <Heading>Client Name</Heading>
          <Heading>Amount</Heading>
        </Row>
      </thead>
      <tbody>{nodes}</tbody>
    </Table>
  );
};

export default ListInvoicesTable;
