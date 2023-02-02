import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { dinero, toDecimal } from 'dinero.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrencyFormat, {
  Values as OnValueChangeParameters,
} from 'react-currency-format';

import { CurrencyCode } from '@appTypes/index';
import getDineroCurrencyInfo from '@utils/currency/getDineroCurrencyInfo';

export interface ContainerProps {
  /**
   * Indicates if any errors messages are present.
   */
  hasErrors?: boolean;

  /**
   * Indicates if the field is disabled.
   */
  disabled?: boolean;

  /**
   * Indicates if the field is read-only.
   */
  readOnly?: boolean;
}

/**
 * Component container.
 */
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
  gap: 10px;

  background-color: #484b7c;
  background-color: ${props => (props.hasErrors ? '#b5445a' : '#484b7c')};

  border-style: ${props =>
    props.disabled || props.readOnly ? 'dashed' : 'solid'};
  border-width: 1.5px;
  border-color: ${props => (props.hasErrors ? '#dc143c' : '#fff')};
  border-radius: 3px;
`;

/**
 * Styled Clear button.
 */
const StyledButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;

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
const ContainerSymbol = styled.span``;

/**
 * Styled input.
 */
const StyledInput = styled(CurrencyFormat)`
  all: unset;
  width: 100%;

  &:hover {
    cursor: text;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }

  &:read-only:hover {
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
  // Controls visibility of the Clear button.
  const [showClearButton, setShowClearButton] = useState(false);

  /**
   * Displays the Clear button when a mouse has entered the div.
   */
  const handleMouseEnter = useCallback(() => {
    return disabled || readOnly ? undefined : setShowClearButton(true);
  }, []);

  /**
   * Hides the Clear button when a mouse has left the div.
   */
  const handleMouseLeave = useCallback(() => {
    return disabled || readOnly ? undefined : setShowClearButton(false);
  }, []);

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
    <Container
      hasErrors={hasErrors}
      disabled={disabled}
      readOnly={readOnly}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}>
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
      </div>

      {!disabled &&
      !readOnly &&
      handleClearButtonClick !== undefined &&
      showClearButton ? (
        <StyledButton type="button" onClick={handleClearButtonClick}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </StyledButton>
      ) : undefined}
    </Container>
  );
};

export default InputCurrency;
