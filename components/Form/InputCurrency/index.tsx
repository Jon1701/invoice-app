import React from 'react';
import styled from 'styled-components';
import { dinero, toDecimal } from 'dinero.js';
import CurrencyFormat, {
  Values as OnValueChangeParameters,
} from 'react-currency-format';

import ContainerUnifiedInput, {
  customInputCSSMixin,
} from '@components/Form/ContainerUnifiedInput';
import { CurrencyCode } from '@appTypes/index';
import getDineroCurrencyInfo from '@utils/currency/getDineroCurrencyInfo';

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
 * Styled input.
 */
const StyledInput = styled(CurrencyFormat)`
  ${customInputCSSMixin}
`;

/**
 * Container for the prefix (currency symbol) and input.
 */
const ContainerCustomInput = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

interface Props {
  /**
   * Error messages.
   */
  errorMessages?: Array<string>;

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
   * Clear button click handler function.
   */
  handleClearButtonClick(): void;

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
 * Input Currency form control.
 */
const InputCurrency: React.FC<Props> = ({
  errorMessages,
  id,
  currencyCode,
  rawIntegerValue,
  setRawIntegerValue,
  handleClearButtonClick,
  disabled = false,
  readOnly = false,
}) => {
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
    <ContainerUnifiedInput
      errorMessages={errorMessages}
      handleClearButtonClick={handleClearButtonClick}
      disabled={disabled}
      readOnly={readOnly}
      CustomInput={
        <ContainerCustomInput>
          <span>{prefix}</span>
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
        </ContainerCustomInput>
      }
    />
  );
};

export default InputCurrency;
