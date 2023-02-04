import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { onClickButtonArgType } from '@storybookRoot/args';

import PortalWrapper from '.';

// Filler text to simulate page content.
const fillerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores modi et accusantium, sed est, eligendi eaque molestiae doloribus quas debitis vel. Beatae sed eum, optio sint excepturi consectetur in.';

// Repeat the filler text.
const arrayFillerText = new Array(20).fill(fillerText);

// Selectable Portal content.
const childrenMapping = {
  'Lorem Ipsum': (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '25px' }}>
      {fillerText}
    </div>
  ),
  'Lorem Ipsum with Button': (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '25px' }}>
      <div>{fillerText}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            window.alert('I got clicked!');
          }}>
          Click me
        </button>
      </div>
    </div>
  ),
};

const argTypes = {
  backgroundOnClick: onClickButtonArgType,
  children: {
    options: Object.keys(childrenMapping),
    mapping: childrenMapping,
    control: {
      type: 'radio',
    },
  },
};

export default {
  component: PortalWrapper,
  argTypes,
} as ComponentMeta<typeof PortalWrapper>;

const Template: ComponentStory<typeof PortalWrapper> = args => (
  <main>
    <h1>Lorem Ipsum</h1>

    {arrayFillerText.map((item, index) => {
      return <p key={index}>{item}</p>;
    })}
    <PortalWrapper {...args} />
  </main>
);

export const Default = Template.bind({});
Default.args = {
  children: childrenMapping['Lorem Ipsum with Button'],
};
