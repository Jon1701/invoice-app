import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HollowButton } from '.';

export default {
  component: HollowButton,
} as ComponentMeta<typeof HollowButton>;

const Template: ComponentStory<typeof HollowButton> = args => (
  <HollowButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};
