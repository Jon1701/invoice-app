import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import FieldErrors from '..';

const testCases = [
  { case: 'one error message', errors: ['an unknown error occurred'] },
  {
    case: 'multiple error messages',
    errors: ['activate self-destruct', 'abandon ship', 'ship destroyed'],
  },
  { case: 'no error messages', errors: [] },
  { case: 'undefined', errors: undefined },
];

describe('<FieldErrors />', () => {
  describe.each(testCases)('with case: $case', ({ errors }) => {
    test('should render without issues', () => {
      const node = render(<FieldErrors errors={errors} />);
      expect(node).toMatchSnapshot();
    });
  });
});
