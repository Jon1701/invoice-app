import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert, AlertTypes } from '.';

import { onClickButtonArgType } from '@storybookRoot/args';

export default {
  component: Alert,
  argTypes: {
    handleCloseButtonClick: onClickButtonArgType,
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => (
  <React.Fragment>
    <Alert {...args} />
    <div>
      This block of text is only here to see the flow of the Alert with other
      page content. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Architecto quibusdam ratione similique accusantium sint cumque eaque
      doloremque modi quis. Quos facilis blanditiis eos nesciunt aliquam
      asperiores aperiam! Inventore, blanditiis error.
    </div>
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  alertType: AlertTypes.Success,
  children: (
    <React.Fragment>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      soluta, eius ut mollitia asperiores adipisci possimus libero dolores rerum
      similique veritatis modi at porro quibusdam exercitationem. Accusamus
      nesciunt perspiciatis totam.
    </React.Fragment>
  ),
};
