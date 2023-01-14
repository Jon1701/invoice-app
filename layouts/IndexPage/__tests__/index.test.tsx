import React from 'react';
import { render } from '@testing-library/react';
import { describe, test } from '@jest/globals';

import IndexPageLayout from '..';

describe('IndexPageLayout component', () => {
  test('renders correctly', () => {
    const node = render(
      <IndexPageLayout>
        <main>
          <h1>Hello World</h1>
          <p>This is the page content encapsulated by the layout.</p>
        </main>
      </IndexPageLayout>
    );

    expect(node).toMatchSnapshot();
  });
});
