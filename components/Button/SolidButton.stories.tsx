import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SolidButton } from '.';

export default {
  component: SolidButton,
} as ComponentMeta<typeof SolidButton>;

const Template: ComponentStory<typeof SolidButton> = args => (
  <SolidButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};
