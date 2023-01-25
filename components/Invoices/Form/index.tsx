import React from 'react';
import styled from 'styled-components';

import {
  Action,
  setCurrency,
  setBillerName,
  setBillerEmail,
  setBillerAddressLine1,
  setBillerAddressLine2,
  setBillerAddressCity,
  setBillerAddressState,
  setBillerAddressPostalCode,
  setBillerAddressCountry,
  setClientName,
  setClientEmail,
  setClientAddressLine1,
  setClientAddressLine2,
  setClientAddressCity,
  setClientAddressState,
  setClientAddressPostalCode,
  setClientAddressCountry,
} from '@components/Invoices/Form/actions';
import { blankInvoice } from '@components/Invoices/Form';
import { Invoice, Currency } from '@appTypes/index';
import { SolidButton, HollowButton } from '@components/Button';
import Dropdown from '@components/Form/Dropdown';
import Label from '@components/Form/Label';

import { Legend } from './subcomponents/styles';
import ContactFieldset from './subcomponents/ContactFieldset';

/**
 * Styled form.
 */
const Form = styled.form`
  & > fieldset:not(:last-child) {
    margin-bottom: 15px;
  }
`;

/**
 * Styled fieldset.
 */
const Fieldset = styled.fieldset`
  all: unset;
  display: block;
`;

/**
 * Container for the Submit/Cancel buttons.
 */
const ContainerButtons = styled.div`
  margin-top: 25px;

  text-align: center;

  & > button:not(:last-child) {
    margin-right: 15px;
  }
`;

/**
 * Form props.
 */
export interface InvoiceFormProps<ActionCreatorType> {
  /**
   * Submission handler.
   */
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;

  /**
   * Resets form state.
   */
  handleReset?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Form values.
   */
  formValues: Invoice;

  /**
   * Dispatches actions.
   */
  dispatch: React.Dispatch<ActionCreatorType>;

  /**
   * Indicates if the form is read-only.
   */
  readOnly?: boolean;

  /**
   * Indicates if the form is disabled.
   */
  disabled?: boolean;
}

/**
 * Form to Create an Invoice.
 */
export const InvoiceForm: React.FC<InvoiceFormProps<Action>> = ({
  handleSubmit,
  handleReset,
  dispatch,
  formValues,
  readOnly = false,
  disabled = false,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <ContactFieldset
        title="Bill From"
        contactInfo={formValues.biller}
        dispatch={dispatch}
        setName={setBillerName}
        setEmail={setBillerEmail}
        setAddressLine1={setBillerAddressLine1}
        setAddressLine2={setBillerAddressLine2}
        setAddressCity={setBillerAddressCity}
        setAddressState={setBillerAddressState}
        setAddressPostalCode={setBillerAddressPostalCode}
        setAddressCountry={setBillerAddressCountry}
        readOnly={readOnly}
        disabled={disabled}
      />

      <ContactFieldset
        title="Client"
        contactInfo={formValues.client}
        dispatch={dispatch}
        setName={setClientName}
        setEmail={setClientEmail}
        setAddressLine1={setClientAddressLine1}
        setAddressLine2={setClientAddressLine2}
        setAddressCity={setClientAddressCity}
        setAddressState={setClientAddressState}
        setAddressPostalCode={setClientAddressPostalCode}
        setAddressCountry={setClientAddressCountry}
        readOnly={readOnly}
        disabled={disabled}
      />

      <Fieldset>
        <Legend>Items</Legend>

        <Label htmlFor="currency-code" isRequired>
          Currency
        </Label>
        <Dropdown
          id="currency-code"
          handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            dispatch(setCurrency(e.target.value as Currency));
          }}
          value={formValues.currency}
          disabled={disabled || readOnly}
          handleClearButtonClick={() =>
            dispatch(setCurrency(blankInvoice.currency))
          }>
          <option disabled hidden>
            (Select one)
          </option>
          <option value={Currency.CAD}>Canadian Dollar (CAD)</option>
          <option value={Currency.JPY}>Japanese Yen (JPY)</option>
          <option value={Currency.USD}>United States Dollar (USD)</option>
        </Dropdown>
      </Fieldset>

      <ContainerButtons>
        <SolidButton type="submit">Submit</SolidButton>
        {handleReset !== undefined ? (
          <HollowButton type="reset" onClick={handleReset}>
            Clear
          </HollowButton>
        ) : undefined}
      </ContainerButtons>
    </Form>
  );
};

export default InvoiceForm;

// Re-export modules from actions.
export * from './actions';

// Re-export modules from reducers.
export * from './reducers';
