import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { args, argTypes } from '../common/index.stories';

import InputEmail from '.';

export default {
  component: InputEmail,
  args,
  argTypes,
} as ComponentMeta<typeof InputEmail>;

const Template: ComponentStory<typeof InputEmail> = args => (
  <InputEmail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'lorem@ipsum.com',
};
