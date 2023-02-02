import React from 'react';
import styled from 'styled-components';

import ContainerUnifiedInput, {
  customInputCSSMixin,
} from '@components/Form/ContainerUnifiedInput';

/**
 * Styled input.
 */
const StyledInput = styled.input`
  ${customInputCSSMixin}
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error messages.
   */
  errorMessages?: Array<string>;

  /**
   * Click handler function for the Clear button.
   */
  handleClearButtonClick?(): void;
}

/**
 * Input form control.
 */
const Input: React.FC<Props> = ({
  errorMessages,
  disabled = false,
  readOnly = false,
  handleClearButtonClick,
  ...rest
}) => {
  return (
    <ContainerUnifiedInput
      errorMessages={errorMessages}
      handleClearButtonClick={handleClearButtonClick}
      disabled={disabled}
      readOnly={readOnly}
      CustomInput={
        <StyledInput disabled={disabled} readOnly={readOnly} {...rest} />
      }
    />
  );
};

export default Input;
