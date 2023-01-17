/* stylelint-disable keyframes-name-pattern */

import { keyframes } from 'styled-components';

/**
 * Animation to rotate an element 360 degrees.
 */
const rotate360 = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export default rotate360;
