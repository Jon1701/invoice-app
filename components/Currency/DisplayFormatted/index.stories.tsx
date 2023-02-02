import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyCode } from '@appTypes/index';

import { DisplayFormattedCurrency } from '.';

export default {
  component: DisplayFormattedCurrency,
} as ComponentMeta<typeof DisplayFormattedCurrency>;

const Template: ComponentStory<typeof DisplayFormattedCurrency> = args => (
  <DisplayFormattedCurrency {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currencyCode: CurrencyCode.CAD,
  rawIntegerValue: 182367172618,
};