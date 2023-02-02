import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

const handleClearButtonClickMapping = {
  'with Clear button function': () => {
    alert('Clear button has been Clicked!');
  },
  'without Clear button function': undefined,
};

const booleanMapping = { true: true, false: false };

const placeholderMapping = {
  'with placeholder': 'This is placeholder text',
  'without placeholder': undefined,
};

export default {
  component: Input,
  argTypes: {
    hasErrors: {
      options: Object.keys(booleanMapping),
      mapping: booleanMapping,
      control: {
        type: 'radio',
      },
    },
    disabled: {
      options: Object.keys(booleanMapping),
      mapping: booleanMapping,
      control: {
        type: 'radio',
      },
    },
    readOnly: {
      options: Object.keys(booleanMapping),
      mapping: booleanMapping,
      control: {
        type: 'radio',
      },
    },
    placeholder: {
      options: Object.keys(placeholderMapping),
      mapping: placeholderMapping,
      control: {
        type: 'radio',
      },
    },
    handleClearButtonClick: {
      options: Object.keys(handleClearButtonClickMapping),
      mapping: handleClearButtonClickMapping,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  type: 'text',
  handleClearButtonClick:
    handleClearButtonClickMapping['with Clear button function'],
};

export const InputNumber = Template.bind({});
InputNumber.args = {
  type: 'number',
  handleClearButtonClick:
    handleClearButtonClickMapping['with Clear button function'],
};
