import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PortalWrapper from '.';

// Filler text to simulate page content.
const fillerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores modi et accusantium, sed est, eligendi eaque molestiae doloribus quas debitis vel. Beatae sed eum, optio sint excepturi consectetur in.';

// Repeat the filler text.
const arrayFillerText = new Array(20).fill(fillerText);

// Selectable colours for the background colour.
const backgroundColorMapping = {
  'Solid Colour 1': '#AF3E4D',
  'Solid Colour 2': '#533A71',
  'Solid Colour 3': '#00A6ED',
  'Translucent Colour 1': 'rgb(128 113 130 / 0.1)',
  'Translucent Colour 2': 'rgb(66 0 57 / 0.5)',
  Transparent: 'transparent',
};

// Selectable functions for the background onClick function.
const backgroundOnClickMapping = {
  'Say Hello World': () => {
    window.alert('Hello World');
  },
  'No Alert': undefined,
};

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
  backgroundColor: {
    options: Object.keys(backgroundColorMapping),
    mapping: backgroundColorMapping,
    control: {
      type: 'radio',
    },
  },
  backgroundOnClick: {
    options: Object.keys(backgroundOnClickMapping),
    mapping: backgroundOnClickMapping,
    control: {
      type: 'radio',
    },
  },
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
  backgroundColor: backgroundColorMapping['Translucent Colour 2'],
  children: childrenMapping['Lorem Ipsum with Button'],
  backgroundOnClick: backgroundOnClickMapping['Say Hello World'],
};
