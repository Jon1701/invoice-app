import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { currencyCodeArgType, currencyCodeMapping } from '@storybookRoot/args';

import { DisplayFormattedCurrency } from '.';

export default {
  component: DisplayFormattedCurrency,
  argTypes: {
    currencyCode: currencyCodeArgType,
  },
} as ComponentMeta<typeof DisplayFormattedCurrency>;

const Template: ComponentStory<typeof DisplayFormattedCurrency> = args => (
  <DisplayFormattedCurrency {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rawIntegerValue: 182367172618,
  currencyCode: currencyCodeMapping.CAD,
};
