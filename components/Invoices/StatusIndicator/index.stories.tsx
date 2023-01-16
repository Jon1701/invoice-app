import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InvoiceStatus } from '@appTypes/index';

import { StatusIndicator } from '.';

export default {
  component: StatusIndicator,
} as ComponentMeta<typeof StatusIndicator>;

const Template: ComponentStory<typeof StatusIndicator> = args => (
  <StatusIndicator {...args} />
);

export const Base = Template.bind({});
Base.args = {
  status: undefined,
};

export const Draft = Template.bind({});
Draft.args = {
  status: InvoiceStatus.Draft,
};

export const Paid = Template.bind({});
Paid.args = {
  status: InvoiceStatus.Paid,
};

export const Pending = Template.bind({});
Pending.args = {
  status: InvoiceStatus.Pending,
};
