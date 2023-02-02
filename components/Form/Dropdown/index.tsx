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

  border-style: ${props => (props.disabled ? 'dashed' : 'solid')};
  border-width: 1.5px;
  border-color: ${props => (props.hasErrors ? '#dc143c' : '#fff')};
  border-radius: 3px;
`;

/**
 * Styled Select.
 */
const StyledSelect = styled.select`
  all: unset;
  width: 100%;

  &:hover {
    cursor: text;
  }

  &:disabled:hover {
    cursor: not-allowed;
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

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Indicates if any errors messages are present.
   */
  hasErrors?: boolean;

  /**
   * Click handler function for the Clear button.
   */
  handleClearButtonClick?(): void;

  /**
   * Dropdown options.
   */
  children: React.ReactNode;
}

/**
 * Dropdown component with Clear button.
 */
const Dropdown: React.FC<Props> = ({
  hasErrors = false,
  disabled = false,
  handleClearButtonClick,
  children,
  ...rest
}) => {
  // Controls visibility of the Clear button.
  const [showClearButton, setShowClearButton] = useState(false);

  /**
   * Displays the Clear button when a mouse has entered the div.
   */
  const handleMouseEnter = useCallback(() => {
    return disabled ? undefined : setShowClearButton(true);
  }, []);

  /**
   * Hides the Clear button when a mouse has left the div.
   */
  const handleMouseLeave = useCallback(() => {
    return disabled ? undefined : setShowClearButton(false);
  }, []);

  return (
    <Container
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hasErrors={hasErrors}>
      <StyledSelect disabled={disabled} {...rest}>
        {children}
      </StyledSelect>

      {!disabled && handleClearButtonClick !== undefined && showClearButton ? (
        <StyledButton type="button" onClick={handleClearButtonClick}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </StyledButton>
      ) : undefined}
    </Container>
  );
};

export default Dropdown;
