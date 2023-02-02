import React, { useReducer, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Invoice } from '@appTypes/index';
import { sampleInvoices } from '@sampleData/Invoices';

import InvoiceForm, { setInvoice } from '.';
import { Action, invoiceReducer, blankInvoice } from '.';

// Allows selectable data options in the Story.
const sampleDataMappings = {
  'Blank Invoice': blankInvoice,
  'Sample Data 1': sampleInvoices[0],
  'Sample Data 2': sampleInvoices[1],
  'Sample Data 3': sampleInvoices[2],
  'Sample Data 4': sampleInvoices[3],
};

export default {
  component: InvoiceForm,
  args: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
  },
  argTypes: {
    // Selectable form values.
    formValues: {
      options: Object.keys(sampleDataMappings),
      mapping: sampleDataMappings,
      control: { type: 'radio' },
    },
    // Selectable states for `disabled`.
    disabled: {
      options: [false, true],
      control: { type: 'radio' },
    },
    // Selectable states for `readOnly`.
    readOnly: {
      options: [false, true],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof InvoiceForm>;

const Template: ComponentStory<typeof InvoiceForm> = args => {
  // Form data.
  const [formValues, dispatch] = useReducer<
    (state: Invoice, action: Action) => Invoice
  >(invoiceReducer, blankInvoice);

  // Submits the form.
  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
  };

  // Clears the form.
  const handleReset = () => {
    dispatch(setInvoice(blankInvoice));
  };

  // Sets the form values.
  useEffect(() => {
    dispatch(setInvoice(args.formValues));
  }, [args.formValues.id]);

  return (
    <InvoiceForm
      {...args}
      handleSubmit={handleFormSubmit}
      formValues={formValues}
      dispatch={dispatch}
      handleReset={handleReset}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  formValues: sampleInvoices[0],
  readOnly: false,
  disabled: false,
};
