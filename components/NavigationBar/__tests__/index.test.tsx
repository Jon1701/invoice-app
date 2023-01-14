import React from 'react';
import { render } from '@testing-library/react';
import { describe, test } from '@jest/globals';

import NavigationBar from '..';

describe('Navigation Bar component', () => {
  test('renders correctly', () => {
    const node = render(<NavigationBar />);

    expect(node).toMatchSnapshot();
  });
});
