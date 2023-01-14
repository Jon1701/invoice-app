import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IndexPageLayout from '.';

export default {
  component: IndexPageLayout,
} as ComponentMeta<typeof IndexPageLayout>;

const Template: ComponentStory<typeof IndexPageLayout> = args => (
  <IndexPageLayout {...args}>{args.children}</IndexPageLayout>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum
      accusantium nam provident, quo repudiandae minus ea accusamus, corporis,
      labore soluta hic officiis aspernatur voluptatibus iste molestiae odit eos
      aliquid!
    </main>
  ),
};
