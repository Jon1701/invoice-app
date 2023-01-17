import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import rotate360 from '@utils/keyframes/rotate360';

/**
 * Component container.
 */
const Container = styled.div`
  display: grid;
  place-items: center;

  svg {
    animation: ${rotate360} 2s linear infinite;

    display: block;
    max-width: 100px;
    height: auto;
  }
`;

/**
 * Loading spinner.
 */
const Loading = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} />
    </Container>
  );
};

export default Loading;
