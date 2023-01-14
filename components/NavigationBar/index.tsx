import React from 'react';
import styled from 'styled-components';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

/**
 * Component container.
 */
const Container = styled.nav`
  background-color: #0f0e0e;
  color: #eee;

  min-height: 100vh;
  padding: 10px;
`;

/**
 * List which will hold navigation bar items.
 */
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

/**
 * Navigation bar item.
 */
const ListItem = styled.li``;

/**
 * Styled Link component.
 */
const StyledLink = styled(Link)`
  position: relative;
  display: block;

  width: 50px;
  height: 50px;

  font-size: 2rem;
  color: inherit;
  text-align: center;

  background-color: #252525;
  border-radius: 100%;

  transition: 0.3s;

  &:hover {
    background-color: #eee;
    color: #29c7ac;
    border-radius: 33%;
    transform: scale(1.1);
  }

  svg {
    aspect-ratio: 1 / 1;
  }
`;

/**
 * Navigation bar component.
 */
const NavigationBar: React.FC = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink href="/">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default NavigationBar;
