import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import Loading from '..';

describe('<Loading />', () => {
  test('it should render without errors', () => {
    const node = render(<Loading />);
    expect(node).toMatchSnapshot();
  });
});
