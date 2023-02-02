import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from '.';

const handleClearButtonClickMapping = {
  'with Clear button function': () => {
    alert('Clear button has been Clicked!');
  },
  'without Clear button function': undefined,
};

const hasErrorsMapping = {
  'with errors': true,
  'without errors': false,
};

const booleanMapping = { true: true, false: false };

export default {
  component: Dropdown,
  argTypes: {
    hasErrors: {
      options: Object.keys(hasErrorsMapping),
      mapping: hasErrorsMapping,
      control: {
        type: 'radio',
      },
    },
    handleClearButtonClick: {
      options: Object.keys(handleClearButtonClickMapping),
      mapping: handleClearButtonClickMapping,
      control: {
        type: 'radio',
      },
    },
    disabled: {
      options: Object.keys(booleanMapping),
      mapping: booleanMapping,
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  /**
   * Currently selected value.
   */
  const [value, setValue] = useState<string>('');

  /**
   * Sets the value.
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  /**
   * Clears the selected value.
   */
  const handleClearButtonClick = () => {
    setValue('');
  };

  return (
    <Dropdown
      value={value}
      onChange={handleChange}
      handleClearButtonClick={handleClearButtonClick}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <React.Fragment>
      <option>(Select one)</option>
      <option value="1701">Enterprise</option>
      <option value="74656">Voyager</option>
      <option value="74205">Defiant</option>
      <option value="80102">Titan</option>
    </React.Fragment>
  ),
};
