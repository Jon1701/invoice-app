import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { args, argTypes } from '@components/Form/common/styles.stories';

import InputText from '.';

export default {
  component: InputText,
  args,
  argTypes,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = args => (
  <InputText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum doloremque corrupti ex, provident autem, suscipit excepturi, sit vitae mollitia pariatur atque non quisquam ipsam minima ipsum vero esse laboriosam.',
};
