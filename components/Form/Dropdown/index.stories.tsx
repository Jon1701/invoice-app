import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { argTypes } from '@components/Form/common/styles.stories';

import Dropdown from '.';

export default {
  component: Dropdown,
  args: {
    disabled: false,
  },
  argTypes,
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
      handleChange={handleChange}
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
