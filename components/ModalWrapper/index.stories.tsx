import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalWrapper from '.';

// Selectable titles.
const titleMapping = {
  'Short-length Title': 'Hello World',
  'Medium-length Title': 'Lorem ipsum dolor sit amet consectetur.',
  'Long title':
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod culpa eaque repudiandae eveniet quibusdam numquam error quasi cumque quam omnis dicta, veritatis reprehenderit porro possimus quis ex asperiores in.',
};

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
  'Translucent Colour 1': 'rgb(96 191 123 / 0.25)',
  'Translucent Colour 2': 'rgb(66 0 57 / 0.5)',
  Transparent: 'transparent',
  'Default Background': undefined,
};

// Selectable functions for the background onClick function.
const backgroundOnClickMapping = {
  'Display alert': () => {
    window.alert('The background has been clicked!');
  },
  'No Alert': undefined,
};

// Selectable Portal content.
const childrenMapping = {
  'Single Paragraph': <div>{fillerText}</div>,
  'Multiple Paragraphs': (
    <React.Fragment>
      {arrayFillerText.map((item, index) => {
        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            {item}
          </div>
        );
      })}
    </React.Fragment>
  ),
  'A few words': <div>Hello World!</div>,
};

const argTypes = {
  title: {
    options: Object.keys(titleMapping),
    mapping: titleMapping,
    control: {
      type: 'radio',
    },
  },
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
  component: ModalWrapper,
  argTypes,
} as ComponentMeta<typeof ModalWrapper>;

const Template: ComponentStory<typeof ModalWrapper> = args => (
  <main>
    <h1>Hello World</h1>

    <ModalWrapper {...args} />
  </main>
);

export const Default = Template.bind({});
Default.args = {
  title: 'This is the modal title',
  handleCloseButtonClick: () => {
    alert('The close button has been clicked!');
  },
};
