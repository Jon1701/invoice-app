import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  disabledArgType,
  readOnlyArgType,
  errorMessagesArgType,
  onClickButtonArgType,
  currencyCodeArgType,
  currencyCodeMapping,
} from '@storybookRoot/args';

import InputCurrency from '.';

export default {
  component: InputCurrency,
  argTypes: {
    errorMessages: errorMessagesArgType,
    disabled: disabledArgType,
    readOnly: readOnlyArgType,
    handleClearButtonClick: onClickButtonArgType,
    currencyCode: currencyCodeArgType,
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
  currencyCode: currencyCodeMapping.CAD,
};
