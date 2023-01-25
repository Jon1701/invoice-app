import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { sampleInvoices } from '@sampleData/Invoices';

import ListInvoicesTable from '.';

export default {
  component: ListInvoicesTable,
} as ComponentMeta<typeof ListInvoicesTable>;

const Template: ComponentStory<typeof ListInvoicesTable> = args => (
  <ListInvoicesTable {...args} />
);

export const TableWithData = Template.bind({});
TableWithData.args = {
  invoices: sampleInvoices,
};

export const TableWithNoData = Template.bind({});
TableWithNoData.args = {
  invoices: [],
};
