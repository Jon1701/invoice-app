import React, { useReducer, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  disabledArgType,
  readOnlyArgType,
  sampleInvoiceArgType,
  SampleInvoiceEnums,
  sampleInvoiceMapping,
} from '@storybookRoot/args';
import { Invoice } from '@appTypes/index';

import InvoiceForm, {
  setInvoice,
  Action,
  invoiceReducer,
  blankInvoice,
} from '.';

export default {
  component: InvoiceForm,
  args: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
  },
  argTypes: {
    formValues: sampleInvoiceArgType,
    disabled: disabledArgType,
    readOnly: readOnlyArgType,
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
  formValues: sampleInvoiceMapping[SampleInvoiceEnums.SampleInvoice1],
  readOnly: false,
  disabled: false,
};
