import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Currency } from '@appTypes/index';

import InputCurrency from '.';

const errorMessagesMapping = {
  'with errors': ['unknown error', 'invalid value'],
  'without errors': undefined,
};

export default {
  component: InputCurrency,
  argTypes: {
    errorMessages: {
      options: Object.keys(errorMessagesMapping),
      mapping: errorMessagesMapping,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof InputCurrency>;

const Template: ComponentStory<typeof InputCurrency> = args => {
  const [value, setValue] = useState<number>(0);

  /**
   * Clears the field.
   */
  const handleClearButtonClick = () => {
    setValue(0);
  };

  return (
    <InputCurrency
      {...args}
      rawIntegerValue={value}
      setRawIntegerValue={setValue}
      handleClearButtonClick={handleClearButtonClick}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currency: Currency.CAD,
};
