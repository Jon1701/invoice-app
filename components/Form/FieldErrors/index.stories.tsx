import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { errorMessagesArgType } from '@storybookRoot/args';

import FieldErrors from '.';

export default {
  component: FieldErrors,
  argTypes: {
    errors: errorMessagesArgType,
  },
} as ComponentMeta<typeof FieldErrors>;

const Template: ComponentStory<typeof FieldErrors> = args => (
  <FieldErrors {...args} />
);

export const Default = Template.bind({});
