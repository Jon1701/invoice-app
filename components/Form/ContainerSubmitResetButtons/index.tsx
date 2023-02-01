import styled from 'styled-components';
import { breakpoints } from '@utils/breakpoints';

/**
 * Container for the Submit/Reset buttons.
 */
const ContainerSubmitResetButtons = styled.div`
  display: grid;
  gap: 15px;

  @media screen and (max-width: ${breakpoints.mobile.max}px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${breakpoints.tablet.min}px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 250px);

    justify-content: center;
  }
`;

export default ContainerSubmitResetButtons;
