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

export const Default = Template.bind({});
Default.args = {
  invoices: sampleInvoices,
};
