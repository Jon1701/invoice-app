import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  StyledSelect,
  ContainerStyledInputButton,
  StyledInputButton,
} from './styles';

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
