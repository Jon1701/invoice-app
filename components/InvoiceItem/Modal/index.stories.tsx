import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  currencyCodeArgType,
  currencyCodeMapping,
  onClickButtonArgType,
} from '@storybookRoot/args';

import InvoiceItemModal from '.';

export default {
  component: InvoiceItemModal,
  argTypes: {
    currencyCode: currencyCodeArgType,
    handleCloseButtonClick: onClickButtonArgType,
  },
} as ComponentMeta<typeof InvoiceItemModal>;

const Template: ComponentStory<typeof InvoiceItemModal> = args => {
  return <InvoiceItemModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  currencyCode: currencyCodeMapping.CAD,
};
