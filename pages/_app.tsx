import React from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from '@components/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
