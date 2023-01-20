import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  StyledInput,
  ContainerStyledInputButton,
  StyledInputButton,
} from './styles';

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
