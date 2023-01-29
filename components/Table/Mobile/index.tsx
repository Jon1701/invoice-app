import styled from 'styled-components';

/**
 * Table.
 */
export const Table = styled.div`
  border: solid 1.5px #fff;
`;

/**
 * Row group.
 */
export const RowGroup = styled.div`
  transition: ease-in-out 0.2s;

  padding: 15px;

  &:not(:last-child) {
    border-bottom: solid 1.5px #fff;
  }

  &:nth-child(odd) {
    background-color: #0a0a10;
  }

  &:nth-child(even) {
    background-color: #25273c;
  }

  &:hover {
    background-color: #44486e;
  }
`;

/**
 * Row.
 */
export const Row = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

/**
 * Table heading.
 */
export const Heading = styled.div`
  font-weight: 700;
`;

/**
 * Cell.
 */
export const Cell = styled.div``;
