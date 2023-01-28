import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import GlobalStyle from '@components/GlobalStyle';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  Story => (
    <React.Fragment>
      <GlobalStyle />
      <div id="portal-modal"></div>
      <Story />
    </React.Fragment>
  ),
];
