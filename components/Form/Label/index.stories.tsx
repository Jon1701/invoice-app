import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import InputText from '../InputText';
import Label from '.';

export default {
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => (
  <React.Fragment>
    <Label {...args} />
    <InputText id={args.htmlFor} />
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default label',
};

export const WithFor = Template.bind({});
WithFor.args = {
  htmlFor: 'temporary-id',
  children: 'Clicking on this label should focus on the input field',
};
