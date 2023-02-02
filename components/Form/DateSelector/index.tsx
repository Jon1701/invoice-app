import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { getUnixTime } from 'date-fns';

import ContainerUnifiedInput, {
  customInputCSSMixin,
} from '@components/Form/ContainerUnifiedInput';
import timestampToDate from '@utils/datetime/timestampToDate';

export interface DateSelectorProps {
  /**
   * Error messages.
   */
  errorMessages?: Array<string>;

  /**
   * UNIX timestamp.
   */
  timestamp?: number;

  /**
   * Sets the timestamp.
   */
  setTimestamp(timestamp: number | undefined): void;

  /**
   * Clears the timestamp.
   */
  handleClearButtonClick(): void;

  /**
   * Minimum selectable date.
   */
  minTimestamp?: number;

  /**
   * Maximum selectable date.
   */
  maxTimestamp?: number;

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
 * Dummy input which styles the Date Picker element..
 */
const DummyInput = styled.input`
  ${customInputCSSMixin}
`;

/**
 * Date selector form control.
 */
const DateSelector: React.FC<DateSelectorProps> = ({
  errorMessages,
  timestamp,
  setTimestamp,
  handleClearButtonClick,
  minTimestamp,
  maxTimestamp,
  disabled = false,
  readOnly = false,
}) => {
  /**
   * Sets the timestamp.
   */
  const handleChange = (date: Date | null) => {
    date === null ? setTimestamp(undefined) : setTimestamp(getUnixTime(date));
  };

  return (
    <ContainerUnifiedInput
      errorMessages={errorMessages}
      handleClearButtonClick={handleClearButtonClick}
      disabled={disabled}
      readOnly={readOnly}
      CustomInput={
        <DatePicker
          selected={timestampToDate(timestamp)}
          onChange={handleChange}
          dateFormat="yyyy-MM-dd"
          customInput={<DummyInput />}
          minDate={timestampToDate(minTimestamp)}
          maxDate={timestampToDate(maxTimestamp)}
          disabled={disabled}
          readOnly={readOnly}
        />
      }
    />
  );
};

export default DateSelector;
