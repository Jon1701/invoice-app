import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import IndexPage from '@pages/index';

describe('IndexPage', () => {
  test('should render correctly', () => {
    const node = render(<IndexPage />);

    expect(node).toMatchSnapshot();
  });
});
