import React from 'react';

import { BaseInput, BaseInputProps } from '../common/BaseInput';

/**
 * Omit the type prop.
 */
export type InputEmailProps = Omit<BaseInputProps, 'type'>;

/**
 * Input email control.
 */
const InputEmail: React.FC<InputEmailProps> = React.forwardRef<
  HTMLInputElement,
  BaseInputProps
>(({ type, ...rest }, ref) => {
  return <BaseInput ref={ref} type="email" {...rest} />;
});

InputEmail.displayName = 'InputEmail';

export default InputEmail;
