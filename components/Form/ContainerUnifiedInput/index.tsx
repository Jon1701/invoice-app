import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface ContainerProps {
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
 * Container for the unified input.
 */
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
  gap: 10px;

  background-color: ${props => (props.hasErrors ? '#b5445a' : '#484b7c')};

  border-style: ${props => (props.disabled ? 'dashed' : 'solid')};
  border-width: 1.5px;
  border-color: ${props => (props.hasErrors ? '#dc143c' : '#fff')};
  border-radius: 3px;
`;

interface MixinProps {
  /**
   * Indicates if the field is disabled.
   */
  disabled?: boolean;
}

/**
 * CSS mixin for the custom input.
 */
export const customInputCSSMixin = css<MixinProps>`
  all: unset;
  width: 100%;

  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'initial')};
  }

  box-sizing: border-box;
`;

/**
 * Styled Clear button.
 */
const StyledClearButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;

interface ContainerUnifiedInputProps {
  /**
   * Indicates if any errors messages are present.
   */
  errorMessages?: Array<string>;

  /**
   * Click handler function for the Clear button.
   */
  handleClearButtonClick?(): void;

  /**
   * Input which takes input from the User.
   */
  CustomInput: React.ReactNode;

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
 * Wraps some form element with added styling and functionality.
 */
const ContainerUnifiedInput: React.FC<ContainerUnifiedInputProps> = ({
  errorMessages,
  handleClearButtonClick,
  CustomInput,
  disabled = false,
  readOnly = false,
}) => {
  // Controls visibility of the Clear button (by mouse event).
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

  // Checks if there are error messages.
  const hasErrors = errorMessages !== undefined && errorMessages.length > 0;

  return (
    <Container
      disabled={disabled}
      readOnly={readOnly}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hasErrors={hasErrors}>
      {CustomInput}

      {disabled ||
      readOnly ||
      !showClearButton ||
      handleClearButtonClick === undefined ? undefined : (
        <StyledClearButton type="button" onClick={handleClearButtonClick}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </StyledClearButton>
      )}
    </Container>
  );
};

export default ContainerUnifiedInput;
