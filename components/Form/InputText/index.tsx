import React from 'react';
import { BaseInputProps } from '../common';

import { BaseInput } from '../common';

/**
 * Omit the type prop.
 */
export type InputTextProps = Omit<BaseInputProps, 'type'>;

/**
 * Input text control.
 */
const InputText: React.FC<InputTextProps> = React.forwardRef<
  HTMLInputElement,
  BaseInputProps
>(({ type, ...rest }, ref) => {
  return <BaseInput ref={ref} type="text" {...rest} />;
});

InputText.displayName = 'InputText';

export default InputText;
