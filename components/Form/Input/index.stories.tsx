import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

const errorMappings = {
  'with errors': ['this is an error'],
  'without errors': undefined,
};

export default {
  component: Input,
  args: {
    handleChange: () => {},
    handleClearButtonClick: () => {},
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    errorMessages: {
      options: Object.keys(errorMappings),
      mapping: errorMappings,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  value:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur consequatur quaerat dolores ut perferendis necessitatibus odio distinctio. Modi reprehenderit voluptatum sit sed odio? Sunt nemo culpa facere ipsam libero.',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  value: 'lorem@ipsum.com',
};
