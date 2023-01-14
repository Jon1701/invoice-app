import React from 'react';
import styled from 'styled-components';

import NavigationBar from '@components/NavigationBar';

/**
 * Layout definition.
 */
const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: max-content auto;
`;

interface Props {
  /**
   * Page content to be enclosed by this layout.
   */
  children: React.ReactElement;
}

/**
 * Layout used by the Index Page.
 */
export default function IndexPageLayout({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Container>
        <NavigationBar />

        <React.Fragment>{children}</React.Fragment>
      </Container>
    </React.Fragment>
  );
}
