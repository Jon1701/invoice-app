import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { sampleInvoices } from '@sampleData/Invoices';
import { InvoiceItem, Currency } from '@appTypes/index';

const items: Array<InvoiceItem> = sampleInvoices[0].items;
const currency: Currency = sampleInvoices[0].currency;

import { Table, RowGroup, Row, Heading, Cell } from '.';

const BaseComponent: React.FC = () => (
  <Table>
    {items.map((item: InvoiceItem) => {
      const { id, unitPrice, quantity, description } = item;

      return (
        <RowGroup key={id}>
          <Row>
            <Heading>ID</Heading>
            <Cell>{id}</Cell>
          </Row>
          <Row>
            <Heading>Quantity</Heading>
            <Cell>{quantity}</Cell>
          </Row>
          <Row>
            <Heading>Unit Price</Heading>
            <Cell>
              {currency} {unitPrice}
            </Cell>
          </Row>
          <Row>
            <Heading>Description</Heading>
            <Cell>{description}</Cell>
          </Row>
        </RowGroup>
      );
    })}
  </Table>
);

export default {
  component: BaseComponent,
} as ComponentMeta<typeof BaseComponent>;

export const Default = () => <BaseComponent />;
