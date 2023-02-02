import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from '.';

import {
  disabledArgType,
  errorMessagesArgType,
  onClickButtonArgType,
} from '@storybook/args';

export default {
  component: Dropdown,
  argTypes: {
    errorMessages: errorMessagesArgType,
    disabled: disabledArgType,
    handleClearButtonClick: onClickButtonArgType,
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

  return <Dropdown value={value} onChange={handleChange} {...args} />;
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
