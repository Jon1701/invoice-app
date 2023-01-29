import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { sampleInvoices } from '@sampleData/Invoices';
import { InvoiceItem, Currency } from '@appTypes/index';

const items: Array<InvoiceItem> = sampleInvoices[0].items;
const currency: Currency = sampleInvoices[0].currency;

import { Table, Header, Body, ColumnHeading, Row, Cell } from '.';

const BaseComponent: React.FC = () => (
  <Table>
    <Header>
      <Row>
        <ColumnHeading>ID</ColumnHeading>
        <ColumnHeading>Quantity</ColumnHeading>
        <ColumnHeading>Unit Price</ColumnHeading>
        <ColumnHeading>Description</ColumnHeading>
      </Row>
    </Header>
    <Body>
      {items.map((item: InvoiceItem) => {
        const { id, unitPrice, quantity, description } = item;

        return (
          <Row key={id}>
            <Cell>{id}</Cell>
            <Cell>{quantity}</Cell>
            <Cell>
              {currency} {unitPrice}
            </Cell>
            <Cell>{description}</Cell>
          </Row>
        );
      })}
    </Body>
  </Table>
);

export default {
  component: BaseComponent,
} as ComponentMeta<typeof BaseComponent>;

export const Default = () => <BaseComponent />;
