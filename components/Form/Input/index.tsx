import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import FormFieldErrors from '../FieldErrors';

interface ContainerProps {
  /**
   * Indicates if any errors messages are present.
   */
  hasErrors: boolean;

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
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  background-color: #484b7c;
  background-color: ${props => (props.hasErrors ? '#b5445a' : '#25273c')};

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
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  &:read-only {
    cursor: text;
  }

  box-sizing: border-box;
`;

interface StyledClearButtonProps {
  /**
   * Indicates if the button is disabled.
   */
  disabled?: boolean;
}

/**
 * Styled clear button.
 */
const StyledClearButton = styled.button<StyledClearButtonProps>`
  all: unset;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

/**
 * Container for the Clear button.
 */
const ContainerClearButton = styled.span`
  padding-right: 10px;
`;

interface Props {
  /**
   * Unique ID.
   */
  id: string | undefined;

  /**
   * Input type.
   */
  type?: React.HTMLInputTypeAttribute | undefined;

  /**
   * Input value.
   */
  value?: string;

  /**
   * Change handler function.
   */
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * Click handler function for the Clear Button.
   */
  handleClearButtonClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Array of error messages.
   */
  errorMessages?: Array<string>;

  /**
   * Indicates if the input is disabled.
   */
  disabled?: boolean;

  /**
   * Indicates if the input is read-only.
   */
  readOnly?: boolean;
}

/**
 * Text/Email form field input component.
 *
 * @param props Component props.
 * @param ref Reference to this element.
 */
const Input: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      type,
      handleChange,
      handleClearButtonClick,
      value,
      errorMessages,
      disabled,
      readOnly,
    },
    ref
  ) => {
    const hasErrors: boolean =
      errorMessages !== undefined && errorMessages.length > 0;

    return (
      <Container
        ref={ref}
        hasErrors={hasErrors}
        disabled={disabled}
        readOnly={readOnly}>
        <StyledInput
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
        />
        {!disabled && !readOnly ? (
          <ContainerClearButton>
            <StyledClearButton
              type="button"
              onClick={handleClearButtonClick}
              disabled={disabled}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </StyledClearButton>
          </ContainerClearButton>
        ) : undefined}
      </Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
