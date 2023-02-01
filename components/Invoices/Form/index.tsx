import React from 'react';
import styled from 'styled-components';

import {
  Action,
  setCurrencyCode,
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
  addBlankInvoiceItem,
} from '@components/Invoices/Form/actions';
import { blankInvoice } from '@components/Invoices/Form';
import { Invoice, CurrencyCode } from '@appTypes/index';
import { Button, ColorScheme, Shape, Variant } from '@components/Button';
import { breakpoints } from '@utils/breakpoints';
import Dropdown from '@components/Form/Dropdown';
import Label from '@components/Form/Label';

import { Legend } from './subcomponents/styles';
import AddItemButton from './subcomponents/AddItemButton';
import ContactFieldset from './subcomponents/ContactFieldset';
import DisplayInvoiceItems from './subcomponents/DisplayInvoiceItems';

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

  & > *:not(legend) {
    margin-bottom: 15px;
  }
`;

/**
 * Container for the Submit/Cancel buttons.
 */
const ContainerButtons = styled.div`
  display: grid;
  gap: 15px;

  @media screen and (max-width: ${breakpoints.mobile.max}px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${breakpoints.tablet.min}px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 250px);

    justify-content: center;
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

        <div>
          <Label htmlFor="currency-code" isRequired>
            Currency
          </Label>
          <Dropdown
            id="currency-code"
            handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(setCurrencyCode(e.target.value as CurrencyCode));
            }}
            value={formValues.currencyCode}
            disabled={disabled || readOnly}
            handleClearButtonClick={() =>
              dispatch(setCurrencyCode(blankInvoice.currencyCode))
            }>
            <option disabled hidden>
              (Select one)
            </option>
            <option value={CurrencyCode.CAD}>Canadian Dollar (CAD)</option>
            <option value={CurrencyCode.USD}>United States Dollar (USD)</option>
          </Dropdown>
        </div>

        {formValues?.items.length > 0 ? (
          <DisplayInvoiceItems
            currencyCode={formValues.currencyCode}
            items={formValues.items}
          />
        ) : undefined}

        {!(readOnly || disabled) ? (
          <AddItemButton
            handleClick={() => {
              dispatch(addBlankInvoiceItem());
            }}
          />
        ) : undefined}

        <ContainerButtons>
          <Button
            type="submit"
            shape={Shape.Rounded}
            variant={Variant.Solid}
            colorScheme={ColorScheme.Purple}>
            Submit
          </Button>
          {handleReset !== undefined ? (
            <Button
              type="reset"
              onClick={handleReset}
              shape={Shape.Rounded}
              variant={Variant.Hollow}
              colorScheme={ColorScheme.Purple}>
              Clear
            </Button>
          ) : undefined}
        </ContainerButtons>
      </Fieldset>
    </Form>
  );
};

export default InvoiceForm;

// Re-export modules from actions.
export * from './actions';

// Re-export modules from reducers.
export * from './reducers';
