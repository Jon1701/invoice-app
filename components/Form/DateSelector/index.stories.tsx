import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getUnixTime, sub, add } from 'date-fns';

import { args, argTypes } from '@components/Form/common/styles.stories';

import DateSelector from '.';

export default {
  component: DateSelector,
  args,
  argTypes,
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

  /**
   * Clears the tiemstamp.
   */
  const handleClearButtonClick = () => {
    setTimestamp(undefined);
  };

  return (
    <DateSelector
      {...args}
      timestamp={value}
      setTimestamp={setTimestamp}
      handleClearButtonClick={handleClearButtonClick}
    />
  );
};

export const Default = Template.bind({});

export const WithMinMaxTimestamp = Template.bind({});
WithMinMaxTimestamp.args = {
  timestamp: getUnixTime(new Date()),
  minTimestamp: getUnixTime(sub(new Date(), { days: 2 })),
  maxTimestamp: getUnixTime(add(new Date(), { days: 2 })),
};
