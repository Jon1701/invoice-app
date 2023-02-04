import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { onClickButtonArgType, disabledArgType } from '@storybookRoot/args';

import { Button, ColorScheme, Shape, Variant } from '.';

export default {
  component: Button,
  argTypes: {
    onClick: onClickButtonArgType,
    disabled: disabledArgType,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorScheme: ColorScheme.White,
  variant: Variant.Solid,
  shape: Shape.Box,
  minWidth: '100px',
  width: '150px',
  padding: '0px',
  children: <React.Fragment>Button</React.Fragment>,
};
