import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import InputEmail from '..';

const stubFunc = () => {};

const propCombinations = {
  id: ['uniqueid', undefined],
  value: ['test@example.com', undefined],
  errorMessages: [['This is an error message'], undefined],
  disabled: [true, false],
  readOnly: [true, false],
};

describe('Testing all permutations of props for <InputEmail />', () => {
  propCombinations.id.forEach(idItem => {
    propCombinations.value.forEach(valueItem => {
      propCombinations.errorMessages.forEach(errorMessagesItem => {
        propCombinations.disabled.forEach(disabledItem => {
          propCombinations.readOnly.forEach(readOnlyItem => {
            describe(`with prop id=${
              idItem === undefined ? 'undefined' : `"${idItem}"`
            } value=${
              valueItem === undefined ? 'undefined' : `"${valueItem}"`
            } errorMessages=${
              errorMessagesItem === undefined
                ? 'undefined'
                : `"${errorMessagesItem}"`
            } disabled=${disabledItem} readOnly=${readOnlyItem} `, () => {
              test('should render without issues', () => {
                const node = render(
                  <InputEmail
                    id={idItem}
                    value={valueItem}
                    errorMessages={errorMessagesItem}
                    disabled={disabledItem}
                    readOnly={readOnlyItem}
                    handleChange={stubFunc}
                    handleClearButtonClick={stubFunc}
                  />
                );

                expect(node).toMatchSnapshot();
              });
            });
          });
        });
      });
    });
  });
});
