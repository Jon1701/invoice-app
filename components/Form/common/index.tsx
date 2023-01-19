import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';

import FormFieldErrors from '@components/Form/FieldErrors';

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

interface StyledInputButtonProps {
  /**
   * Indicates if the button is disabled.
   */
  disabled?: boolean;
}

/**
 * Container for the Styled Input button.
 */
const ContainerStyledInputButton = styled.span`
  padding-right: 10px;
`;

/**
 * Styled Input button.
 */
const StyledInputButton = styled.button<StyledInputButtonProps>`
  all: unset;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export interface BaseInputProps {
  /**
   * Reference to this element.
   */
  ref?: React.ForwardedRef<HTMLInputElement>;

  /**
   * Unique ID.
   */
  id?: string;

  /**
   * Input type.
   */
  type?: React.HTMLInputTypeAttribute;

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
 * Base input field control.
 *
 * @param props Component props.
 * @param ref Reference to this element.
 */
export const BaseInput: React.FC<BaseInputProps> = React.forwardRef<
  HTMLInputElement,
  BaseInputProps
>(
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
      <Container hasErrors={hasErrors} disabled={disabled} readOnly={readOnly}>
        <StyledInput
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
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
  }
);

BaseInput.displayName = 'BaseInput';

export interface BaseDropdownProps {
  /**
   * Reference to this element.
   */
  ref?: React.ForwardedRef<HTMLSelectElement>;

  /**
   * Unique ID.
   */
  id?: string;

  /**
   * Input value.
   */
  value?: string;

  /**
   * Change handler function.
   */
  handleChange?: React.ChangeEventHandler<HTMLSelectElement>;

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
   * Child nodes to be rendered.
   */
  children: React.ReactNode;
}

/**
 * Styled select element.
 */
const StyledSelect = styled.select`
  all: unset;
  width: 100%;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  box-sizing: border-box;
`;

/**
 * Base dropdown component.
 *
 * @param props Component props.
 * @param ref Reference to this element.
 */
export const BaseDropdown = React.forwardRef<
  HTMLSelectElement,
  BaseDropdownProps
>(
  (
    {
      id,
      value,
      handleChange,
      handleClearButtonClick,
      errorMessages,
      disabled,
      children,
    },
    ref
  ) => {
    const hasErrors: boolean =
      errorMessages !== undefined && errorMessages.length > 0;

    return (
      <Container hasErrors={hasErrors} disabled={disabled}>
        <StyledSelect
          ref={ref}
          id={id}
          value={value}
          onChange={handleChange}
          disabled={disabled}>
          {children}
        </StyledSelect>
        {!disabled ? (
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
  }
);

BaseDropdown.displayName = 'BaseDropdown';
