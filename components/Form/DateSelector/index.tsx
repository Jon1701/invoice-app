import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { getUnixTime } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import timestampToDate from '@utils/datetime/timestampToDate';

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
 * Styled input.
 */
const StyledInput = styled.input`
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

/**
 * Styled Clear button.
 */
const StyledButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;

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
    <Container
      hasErrors={hasErrors}
      disabled={disabled}
      readOnly={readOnly}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
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

DateSelector.displayName = 'DateSelector';

export default DateSelector;
