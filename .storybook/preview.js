import React from 'react';
import GlobalStyle from '@components/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
