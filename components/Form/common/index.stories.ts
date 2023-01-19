import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export const errorMappings = {
  'with errors': ['this is an error'],
  'without errors': undefined,
};

export const args = {
  handleChange: () => {},
  handleClearButtonClick: () => {},
  disabled: false,
  readOnly: false,
};

export const argTypes = {
  errorMessages: {
    options: Object.keys(errorMappings),
    mapping: errorMappings,
    control: {
      type: 'radio',
    },
  },
};
