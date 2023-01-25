import styled from 'styled-components';

export interface ContainerProps {
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
export const Container = styled.div<ContainerProps>`
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
export const StyledInput = styled.input`
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

export interface StyledInputButtonProps {
  /**
   * Indicates if the button is disabled.
   */
  disabled?: boolean;
}

/**
 * Container for the Styled Input button.
 */
export const ContainerStyledInputButton = styled.span`
  padding-right: 10px;
`;

/**
 * Styled Input button.
 */
export const StyledInputButton = styled.button<StyledInputButtonProps>`
  all: unset;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

/**
 * Styled select element.
 */
export const StyledSelect = styled.select`
  all: unset;
  width: 100%;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  box-sizing: border-box;
`;
