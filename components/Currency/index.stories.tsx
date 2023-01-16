import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from '@appTypes/index';

import { DisplayFormattedCurrency } from '.';

export default {
  component: DisplayFormattedCurrency,
} as ComponentMeta<typeof DisplayFormattedCurrency>;

const Template: ComponentStory<typeof DisplayFormattedCurrency> = args => (
  <DisplayFormattedCurrency {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currencyCode: Currency.CAD,
  amount: 1823671726.18,
};
