import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { modalTitleArgType, onClickButtonMapping } from '@storybookRoot/args';

import ModalWrapper from '.';

// Filler text to simulate page content.
const fillerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores modi et accusantium, sed est, eligendi eaque molestiae doloribus quas debitis vel. Beatae sed eum, optio sint excepturi consectetur in.';

// Repeat the filler text.
const arrayFillerText = new Array(20).fill(fillerText);

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
  'Multiple Paragraphs with 600px Minimum width': (
    <div style={{ minWidth: '600px' }}>
      {arrayFillerText.map((item, index) => {
        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            {item}
          </div>
        );
      })}
    </div>
  ),
  'Multiple Paragraphs with 1200px Minimum width': (
    <div style={{ minWidth: '1200px' }}>
      {arrayFillerText.map((item, index) => {
        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            {item}
          </div>
        );
      })}
    </div>
  ),
  'A few words': <div>Hello World!</div>,
};

const argTypes = {
  title: modalTitleArgType,
  backgroundOnClick: onClickButtonMapping,
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

const Template: ComponentStory<typeof ModalWrapper> = args => {
  return (
    <main>
      <h1>Hello World</h1>

      <ModalWrapper {...args} />

      <div>
        {arrayFillerText.map((item, index) => {
          return (
            <div key={index} style={{ marginBottom: '15px' }}>
              {item}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'This is the modal title',
  handleCloseButtonClick: () => {
    alert('The close button has been clicked!');
  },
};
