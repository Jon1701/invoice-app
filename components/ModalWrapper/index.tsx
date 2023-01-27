import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import PortalWrapper, { PortalWrapperProps } from '@components/PortalWrapper';

/**
 * Component container.
 */
const Container = styled.div`
  position: relative;

  border: solid 1.5px #fff;
  background-color: #25273c;
  border-radius: 3px;

  max-width: calc(100vw - 15px);
  max-height: calc(100vh - 15px);
`;

/**
 * Title.
 */
const Title = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 1.25rem;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1.5rem;
  align-items: start;
  gap: 10px;

  border-bottom: solid 1.5px white;
`;

/**
 * Body / modal content.
 */
const Body = styled.div`
  padding: 10px;

  max-height: 400px;
  overflow-y: scroll;
`;

export interface ModalWrapperProps extends PortalWrapperProps {
  /**
   * Modal title.
   */
  title: string;

  /**
   * Click handler function for the Close button.
   */
  handleCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Close button.
 */
const StyledButton = styled.button`
  all: unset;

  display: inline-block;

  box-sizing: border-box;

  cursor: pointer;

  svg {
    aspect-ratio: 1 / 1;
    font-size: 1.5rem;
  }
`;

/**
 * Wraps a component with Modal functionality.
 */
const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  backgroundColor,
  backgroundOnClick,
  handleCloseButtonClick,
  children,
}) => {
  return (
    <PortalWrapper
      backgroundColor={backgroundColor}
      backgroundOnClick={backgroundOnClick}>
      <Container>
        <Title>
          <span style={{ textAlign: 'left' }}>{title}</span>
          <StyledButton type="button" onClick={handleCloseButtonClick}>
            <FontAwesomeIcon icon={faClose} />
          </StyledButton>
        </Title>
        <Body>{children}</Body>
      </Container>
    </PortalWrapper>
  );
};

export default ModalWrapper;
