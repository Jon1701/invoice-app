import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getUnixTime, sub, add } from 'date-fns';

import {
  disabledArgType,
  readOnlyArgType,
  errorMessagesArgType,
  onClickButtonArgType,
} from '@storybook/args';

import DateSelector from '.';

export default {
  component: DateSelector,
  argTypes: {
    errorMessages: errorMessagesArgType,
    disabled: disabledArgType,
    readOnly: readOnlyArgType,
    handleClearButtonClick: onClickButtonArgType,
  },
} as ComponentMeta<typeof DateSelector>;

const Template: ComponentStory<typeof DateSelector> = args => {
  // Stores the timestamp.
  const [value, setValue] = useState<number | undefined>(args.timestamp);

  /**
   * Sets the timestamp.
   */
  const setTimestamp = (ts: number | undefined) => {
    setValue(ts);
  };

  return (
    <DateSelector {...args} timestamp={value} setTimestamp={setTimestamp} />
  );
};

export const Default = Template.bind({});

export const WithMinMaxTimestamp = Template.bind({});
WithMinMaxTimestamp.args = {
  timestamp: getUnixTime(new Date()),
  minTimestamp: getUnixTime(sub(new Date(), { days: 2 })),
  maxTimestamp: getUnixTime(add(new Date(), { days: 2 })),
};
