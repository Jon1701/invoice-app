import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  disabledArgType,
  readOnlyArgType,
  errorMessagesArgType,
  onClickButtonArgType,
} from '@storybook/args';

import { CurrencyCode } from '@appTypes/index';

import InputCurrency from '.';

export default {
  component: InputCurrency,
  argTypes: {
    errorMessages: errorMessagesArgType,
    disabled: disabledArgType,
    readOnly: readOnlyArgType,
    handleClearButtonClick: onClickButtonArgType,
  },
} as ComponentMeta<typeof InputCurrency>;

const Template: ComponentStory<typeof InputCurrency> = args => {
  const [value, setValue] = useState<number>(0);

  return (
    <InputCurrency
      {...args}
      rawIntegerValue={value}
      setRawIntegerValue={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currencyCode: CurrencyCode.CAD,
};
