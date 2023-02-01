import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '@utils/breakpoints';
import { Button, Shape, Variant, ColorScheme } from '@components/Button';
import { InvoiceItem, Currency } from '@appTypes/index';
import InputCurrency from '@components/Form/InputCurrency';
import InputText from '@components/Form/InputText';
import Label from '@components/Form/Label';

import {
  blankInvoiceItem,
  setInvoiceItem,
  setDescription,
  setQuantity,
  setUnitPrice,
  Action,
} from './';

/**
 * Styled form.
 */
const Form = styled.form`
  display: grid;
  gap: 15px;
`;

/**
 * Field grouping.
 */
const Fieldset = styled.fieldset`
  all: unset;
  width: 100%;

  display: grid;
  gap: 15px;

  @media screen and (max-width: ${breakpoints.mobile.max}px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet.min}px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    & > *:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }

    & > *:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    & > *:nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
    }
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

// Pattern to match non-digit and period characters.
const patternNoDigits = new RegExp('[^\\d.+]', 'g');

export interface Props {
  /**
   * Form submission handler.
   */
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;

  /**
   * Form values.
   */
  formValues: InvoiceItem;

  /**
   * Dispatches actions.
   */
  dispatch: React.Dispatch<Action>;

  /**
   * Currency code.
   */
  currency: Currency;

  /**
   * Indicates if the field is disabled.
   */
  disabled: boolean;

  /**
   * Indicates if the field is read-only.
   */
  readOnly: boolean;
}

/**
 * Form to create an Invoice Item.
 */
const InvoiceItemForm: React.FC<Props> = ({
  handleSubmit,
  formValues,
  dispatch,
  currency,
  disabled = false,
  readOnly = false,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <div>
          <Label htmlFor="invoice-item-quantity" isRequired>
            Quantity
          </Label>
          <InputText
            id="invoice-item-quantity"
            value={String(formValues.quantity)}
            handleChange={e => {
              // Remove non-numeric characters.
              const nonNumeric = e.target.value
                .trim()
                .replaceAll(patternNoDigits, '');

              // Convert to number.
              const numeric = Number.parseInt(nonNumeric, 10);

              dispatch(setQuantity(numeric));
            }}
          />
        </div>

        <div>
          <Label htmlFor="invoice-item-unit-price" isRequired>
            Unit Price
          </Label>
          <InputCurrency
            id="invoice-item-unit-price"
            currency={currency}
            rawIntegerValue={formValues.unitPrice}
            setRawIntegerValue={(v: number) => dispatch(setUnitPrice(v))}
            disabled={disabled}
            readOnly={readOnly}
            handleClearButtonClick={() => dispatch(setUnitPrice(0))}
          />
        </div>

        <div>
          <Label htmlFor="invoice-item-description" isRequired>
            Description
          </Label>
          <InputText
            id="invoice-item-description"
            value={formValues.description}
            handleChange={e => dispatch(setDescription(e.target.value))}
          />
        </div>
      </Fieldset>

      <ContainerButtons>
        <Button
          type="submit"
          shape={Shape.Rounded}
          variant={Variant.Solid}
          colorScheme={ColorScheme.Purple}>
          Submit
        </Button>
        <Button
          type="reset"
          shape={Shape.Rounded}
          variant={Variant.Hollow}
          colorScheme={ColorScheme.Purple}
          onClick={() => {
            dispatch(setInvoiceItem(blankInvoiceItem));
          }}>
          Clear
        </Button>
      </ContainerButtons>
    </Form>
  );
};

export default InvoiceItemForm;

// Re-export Actions.
export * from './actions';

// Re-export Reducers.
export * from './reducers';
