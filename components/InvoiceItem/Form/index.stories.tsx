import React, { useReducer } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InvoiceItem, Currency } from '@appTypes/index';
import { sampleInvoices } from '@sampleData/Invoices';

import InvoiceItemForm, {
  blankInvoiceItem,
  invoiceItemReducer,
  Action,
} from '.';

export default {
  component: InvoiceItemForm,
  argTypes: {
    currency: {
      options: Object.keys(Currency),
      mapping: Currency,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof InvoiceItemForm>;

const Template: ComponentStory<typeof InvoiceItemForm> = args => {
  /**
   * Form submission handler.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
  };

  // Form state.
  const [formValues, dispatch] = useReducer<
    (state: InvoiceItem, action: Action) => InvoiceItem
  >(invoiceItemReducer, blankInvoiceItem);

  return (
    <InvoiceItemForm
      {...args}
      handleSubmit={handleSubmit}
      formValues={formValues}
      dispatch={dispatch}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  formValues: sampleInvoices[0].items[0],
  currency: Currency.CAD,
};
