import React from 'react';
import styled from 'styled-components';
import { dinero, toDecimal } from 'dinero.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrencyFormat, {
  Values as OnValueChangeParameters,
} from 'react-currency-format';

import { Currency } from '@appTypes/index';
import getDineroCurrency from '@utils/currency/getDineroCurrency';

import {
  Container,
  ContainerStyledInputButton,
  StyledInputButton,
} from '../common/styles';

const currencyInfo = {
  [Currency.CAD]: {
    base: 10,
    exponent: 2,
    prefix: '$',
  },
  [Currency.USD]: {
    base: 10,
    exponent: 2,
    prefix: '$',
  },
};

/**
 * Container for the currency code symbol.
 */
const ContainerSymbol = styled.span`
  padding: 10px 0 10px 10px;
`;

/**
 * Styled input.
 */
const StyledInput = styled(CurrencyFormat)`
  all: unset;
  width: 100%;
  padding: 10px 10px 10px 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:read-only {
    cursor: text;
  }

  box-sizing: border-box;
`;

interface Props {
  /**
   * Unique ID.
   */
  id?: string;

  /**
   * Currency code.
   */
  currency: Currency;

  /**
   * Amount (as an integer).
   */
  rawIntegerValue: number;

  /**
   * Sets the Amount (as an integer).
   */
  setRawIntegerValue(value: number): void;

  /**
   * Error messages.
   */
  errorMessages?: Array<string>;

  /**
   * Indicates if the field is disabled.
   */
  disabled: boolean;

  /**
   * Indicates if the field is read-only.
   */
  readOnly: boolean;

  /**
   * Clear button click handler function.
   */
  handleClearButtonClick(): void;
}

const InputCurrency: React.FC<Props> = ({
  id,
  currency,
  rawIntegerValue,
  setRawIntegerValue,
  errorMessages,
  disabled = false,
  readOnly = false,
  handleClearButtonClick,
}) => {
  const hasErrors: boolean =
    errorMessages !== undefined && errorMessages.length > 0;

  // Create Dinero object.
  const d = dinero({
    amount: rawIntegerValue,
    currency: getDineroCurrency(currency),
  });

  /**
   * Sets the amount.
   */
  const handleOnValueChange = (values: OnValueChangeParameters) => {
    if (values.formattedValue === '') {
      return;
    }

    const formattedValue = values.formattedValue || '0';

    // String representation of the integer.
    const strInt = formattedValue.replaceAll(/[^\d+]/g, '');

    // Store integer representation.
    setRawIntegerValue(Number.parseInt(strInt, 10));
  };

  /**
   * Sets the amount to 0 when focus is lost and input is empty.
   */
  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setRawIntegerValue(0);
    }
  };

  return (
    <Container hasErrors={hasErrors} disabled={disabled} readOnly={readOnly}>
      <ContainerSymbol>{currencyInfo[currency].prefix}</ContainerSymbol>
      <StyledInput
        id={id}
        value={toDecimal(d)}
        displayType="input"
        type="text"
        onValueChange={handleOnValueChange}
        onBlur={handleOnBlur}
        fixedDecimalScale={true}
        thousandSeparator=","
        decimalScale={currencyInfo[currency].exponent}
        allowNegative={false}
        disabled={disabled}
        readOnly={readOnly}
      />
      {!disabled && !readOnly ? (
        <ContainerStyledInputButton>
          <StyledInputButton
            type="button"
            onClick={handleClearButtonClick}
            disabled={disabled}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </StyledInputButton>
        </ContainerStyledInputButton>
      ) : undefined}
    </Container>
  );
};

export default InputCurrency;
