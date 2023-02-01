import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CurrencyCode } from '@appTypes/index';

import InvoiceItemModal from '.';

export default {
  component: InvoiceItemModal,
  argTypes: {
    currencyCode: {
      options: Object.keys(CurrencyCode),
      mapping: CurrencyCode,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof InvoiceItemModal>;

const Template: ComponentStory<typeof InvoiceItemModal> = args => {
  return <InvoiceItemModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  currencyCode: CurrencyCode.CAD,
  handleCloseButtonClick: () => {
    console.log('handle close click');
  },
};
