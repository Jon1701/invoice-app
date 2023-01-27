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
  width: 100vw;
  height: 100vh;

  z-index: ${props => props.numChildren + ZIndexOffsets.Container};

  display: grid;
  place-items: center;
`;

interface BackgroundProps {
  backgroundColor?: string;
}

/**
 * Container for the background colour.
 */
const Background = styled.div<NumChildren & BackgroundProps>`
  position: fixed;
  background-color: ${props => props.backgroundColor || 'rgb(0 0 0 / 0.8)'};
  z-index: ${props => props.numChildren + ZIndexOffsets.Background};

  width: 100vw;
  height: 100vh;
`;

/**
 * Container for the content displayed.
 */
const Content = styled.div<NumChildren>`
  max-width: 90vw;
  max-height: 90vh;
  z-index: ${props => props.numChildren + ZIndexOffsets.Content};

  overflow-y: scroll;
`;

interface PortalWrapperProps {
  /**
   * Background colour.
   */
  backgroundColor?: string;

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
  backgroundColor,
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
        <Background
          backgroundColor={backgroundColor}
          numChildren={numChildren}
          onClick={backgroundOnClick}
        />
        <Content numChildren={numChildren}>{children}</Content>
      </Container>,
      targetNode
    );
  }

  return null;
};

export default PortalWrapper;
