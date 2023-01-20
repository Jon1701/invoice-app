import React from 'react';
import DatePicker from 'react-datepicker';
import { getUnixTime, fromUnixTime } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import timestampToDate from '@utils/datetime/timestampToDate';

import {
  Container,
  ContainerProps,
  ContainerStyledInputButton,
  StyledInputButton,
  StyledInput,
} from '../common/styles';

export interface DateSelectorProps {
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
   * Error messages.
   */
  errorMessages?: Array<string>;

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
 * Date selector control.
 */
const DateSelector: React.FC<DateSelectorProps> = ({
  timestamp,
  setTimestamp,
  handleClearButtonClick,
  errorMessages,
  minTimestamp,
  maxTimestamp,
  disabled,
  readOnly,
}) => {
  // Checks if any error messages were included.
  const hasErrors: boolean =
    errorMessages !== undefined && errorMessages.length > 0;

  /**
   * Sets the internal value of the Datepicker component.
   * Hooks onto the setTimestamp prop and passes in the UNIX timestamp
   * representation of the selected date.
   */
  const handleChange = (date: Date | null) => {
    date === null ? setTimestamp(undefined) : setTimestamp(getUnixTime(date));
  };

  return (
    <Container hasErrors={hasErrors} disabled={disabled} readOnly={readOnly}>
      <DatePicker
        selected={timestampToDate(timestamp)}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        customInput={<StyledInput />}
        minDate={timestampToDate(minTimestamp)}
        maxDate={timestampToDate(maxTimestamp)}
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

DateSelector.displayName = 'DateSelector';

export default DateSelector;
