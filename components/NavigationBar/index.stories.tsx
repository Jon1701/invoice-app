import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationBar from '.';

export default {
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

export const Default: ComponentStory<typeof NavigationBar> = () => (
  <NavigationBar />
);
