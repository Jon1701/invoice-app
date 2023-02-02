import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getUnixTime, sub, add } from 'date-fns';

import DateSelector from '.';

const errorMappings = {
  'with errors': ['this is an error'],
  'without errors': undefined,
};

export default {
  component: DateSelector,
  args: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleChange: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleClearButtonClick: () => {},
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    errorMessages: {
      options: Object.keys(errorMappings),
      mapping: errorMappings,
      control: {
        type: 'radio',
      },
    },
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
