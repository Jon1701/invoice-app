import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency, Invoice, InvoiceStatus } from '@appTypes/index';

import { Alert, AlertTypes } from '.';

const handleCloseButtonClickMappings = {
  'with Click handler': () => {
    alert('Close button has been clicked');
  },
  'without Click handler': undefined,
};

export default {
  component: Alert,
  argTypes: {
    handleCloseButtonClick: {
      options: Object.keys(handleCloseButtonClickMappings),
      mapping: handleCloseButtonClickMappings,
      control: {
        type: 'radio',
      },
    },
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
