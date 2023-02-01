import React from 'react';
import styled from 'styled-components';
import { dinero, toDecimal } from 'dinero.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrencyFormat, {
  Values as OnValueChangeParameters,
} from 'react-currency-format';

import { CurrencyCode } from '@appTypes/index';
import getDineroCurrencyInfo from '@utils/currency/getDineroCurrencyInfo';

import {
  Container,
  ContainerStyledInputButton,
  StyledInputButton,
} from '../common/styles';

const currencyInfo = {
  [CurrencyCode.CAD]: {
    base: 10,
    exponent: 2,
    prefix: '$',
  },
  [CurrencyCode.USD]: {
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
  currencyCode: CurrencyCode;

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
  currencyCode,
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
    currency: getDineroCurrencyInfo(currencyCode),
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

  const { prefix, exponent } = currencyInfo[currencyCode];

  return (
    <Container hasErrors={hasErrors} disabled={disabled} readOnly={readOnly}>
      <ContainerSymbol>{prefix}</ContainerSymbol>
      <StyledInput
        id={id}
        value={toDecimal(d)}
        displayType="input"
        type="text"
        onValueChange={handleOnValueChange}
        onBlur={handleOnBlur}
        fixedDecimalScale={true}
        thousandSeparator=","
        decimalScale={exponent}
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
