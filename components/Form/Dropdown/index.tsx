import React from 'react';
import styled from 'styled-components';

import ContainerUnifiedInput, {
  customInputCSSMixin,
} from '@components/Form/ContainerUnifiedInput';

/**
 * Styled dropdown.
 */
const StyledSelect = styled.select`
  ${customInputCSSMixin}
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Error messages.
   */
  errorMessages?: Array<string>;

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
 * Dropdown form control.
 */
const Dropdown: React.FC<Props> = ({
  errorMessages,
  disabled = false,
  handleClearButtonClick,
  children,
  ...rest
}) => {
  return (
    <ContainerUnifiedInput
      errorMessages={errorMessages}
      handleClearButtonClick={handleClearButtonClick}
      disabled={disabled}
      CustomInput={
        <StyledSelect disabled={disabled} {...rest}>
          {children}
        </StyledSelect>
      }
    />
  );
};

export default Dropdown;
