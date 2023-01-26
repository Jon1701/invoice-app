import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ColorScheme, Shape, Variant } from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorScheme: ColorScheme.White,
  variant: Variant.Solid,
  shape: Shape.Box,
  disabled: false,
  minWidth: '100px',
  width: '150px',
  padding: '0px',
  onClick: () => {
    console.log('test');
  },
  children: <React.Fragment>Button</React.Fragment>,
};
