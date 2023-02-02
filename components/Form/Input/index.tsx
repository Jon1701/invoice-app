import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Indicates if any errors messages are present.
   */
  hasErrors?: boolean;

  /**
   * Click handler function for the Clear button.
   */
  handleClearButtonClick?(): void;
}

/**
 * Input component with Clear button.
 */
const Input: React.FC<Props> = ({
  hasErrors = false,
  disabled = false,
  readOnly = false,
  handleClearButtonClick,
  ...rest
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

  return (
    <Container
      disabled={disabled}
      readOnly={readOnly}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hasErrors={hasErrors}>
      <StyledInput disabled={disabled} readOnly={readOnly} {...rest} />

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

export default Input;
