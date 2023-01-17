import React from 'react';
import { describe, test } from '@jest/globals';
import { render } from '@testing-library/react';

import { Alert, AlertProps, AlertTypes } from '..';

const propCombinations = {
  showSymbol: [true, false],
  alertType: Object.values(AlertTypes),
  showSpaceBelow: [true, false],
  handleCloseButtonClick: [() => {}, undefined],
};

describe('Testing all permutations of props for <Alert />', () => {
  propCombinations.showSymbol.forEach(showSymbolItem => {
    propCombinations.alertType.forEach(alertTypeItem => {
      propCombinations.showSpaceBelow.forEach(showSpaceBelowItem => {
        propCombinations.handleCloseButtonClick.forEach(
          handleCloseButtonClickItem => {
            describe(`with props: showSymbol=${showSymbolItem} alertType="${alertTypeItem}" showSpaceBelow=${showSpaceBelowItem} and handleCloseButtonClick ${
              handleCloseButtonClickItem === undefined
                ? 'not provided'
                : 'provided'
            }`, () => {
              test('should render without issues', () => {
                const node = render(
                  <Alert
                    showSymbol={showSymbolItem}
                    alertType={alertTypeItem}
                    showSpaceBelow={showSpaceBelowItem}
                    handleCloseButtonClick={handleCloseButtonClickItem}>
                    Hello World
                  </Alert>
                );
                expect(node).toMatchSnapshot();
              });
            });
          }
        );
      });
    });
  });
});
