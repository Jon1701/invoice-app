import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FieldErrors from '.';

export default {
  component: FieldErrors,
} as ComponentMeta<typeof FieldErrors>;

const Template: ComponentStory<typeof FieldErrors> = args => (
  <FieldErrors {...args} />
);

export const OneErrorMessage = Template.bind({});
OneErrorMessage.args = {
  errors: ['invalid field value'],
};

export const MultipleErrorMessages = Template.bind({});
MultipleErrorMessages.args = {
  errors: [
    'invalid field value',
    'value must be a number',
    '"Faith of the Heart" is the greatest opening theme of a Star Trek series',
  ],
};

export const EmptyErrorMessages = Template.bind({});
EmptyErrorMessages.args = {
  errors: [],
};

export const UndefinedErrorMessages = Template.bind({});
UndefinedErrorMessages.args = {
  errors: undefined,
};
