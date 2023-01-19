import React from 'react';
import { BaseInputProps } from '../common';

import { BaseInput } from '../common';

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
