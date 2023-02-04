import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  invoiceStatusIndicatorArgType,
  InvoiceStatusIndicatorEnums,
  invoiceStatusIndicatorMapping,
} from '@storybookRoot/args';

import { StatusIndicator } from '.';

export default {
  component: StatusIndicator,
  argTypes: {
    status: invoiceStatusIndicatorArgType,
  },
} as ComponentMeta<typeof StatusIndicator>;

const Template: ComponentStory<typeof StatusIndicator> = args => (
  <StatusIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: invoiceStatusIndicatorMapping[InvoiceStatusIndicatorEnums.Paid],
};
