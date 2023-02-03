import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * Specifies z-index offsets relative to the Portal wrapper for individual
 * layers.
 */
enum ZIndexOffsets {
  Container = 1,
  Background = 2,
  Content = 3,
}

interface NumChildren {
  numChildren: number;
}

/**
 * Component container.
 */
const Container = styled.div<NumChildren>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: ${props => props.numChildren + ZIndexOffsets.Container};
`;

/**
 * Container for the background colour.
 */
const Background = styled.div<NumChildren>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  background-color: rgb(0 0 0 / 80%);
  z-index: ${props => props.numChildren + ZIndexOffsets.Background};
`;

/**
 * Container for the content displayed.
 */
const Content = styled.div<NumChildren>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow-y: auto;

  z-index: ${props => props.numChildren + ZIndexOffsets.Content};
`;

export interface PortalWrapperProps {
  /**
   * Background click handler function.
   */
  backgroundOnClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Child nodes to render.
   */
  children: React.ReactNode;
}

/**
 * Wraps a component within a React Portal.
 */
const PortalWrapper: React.FC<PortalWrapperProps> = ({
  backgroundOnClick,
  children,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Check if window.document is loaded.
    setMounted(true);
    return () => setMounted(false);
  });

  if (mounted) {
    const targetNode = document.getElementById('portal-modal');
    if (!targetNode) {
      return null;
    }

    // Get the number of children in the target node.
    const numChildren = targetNode.children.length;

    return ReactDOM.createPortal(
      <Container numChildren={numChildren}>
        <Background numChildren={numChildren} onClick={backgroundOnClick} />
        <Content numChildren={numChildren}>{children}</Content>
      </Container>,
      targetNode
    );
  }

  return null;
};

export default PortalWrapper;
