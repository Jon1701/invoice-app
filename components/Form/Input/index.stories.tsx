import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  disabledArgType,
  readOnlyArgType,
  errorMessagesArgType,
  onClickButtonArgType,
  placeholderArgType,
} from '@storybook/args';

import Input from '.';

export default {
  component: Input,
  argTypes: {
    errorMessages: errorMessagesArgType,
    disabled: disabledArgType,
    readOnly: readOnlyArgType,
    handleClearButtonClick: onClickButtonArgType,
    placeholder: placeholderArgType,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  type: 'text',
};

export const InputNumber = Template.bind({});
InputNumber.args = {
  type: 'number',
};
