import styled from 'styled-components';

/**
 * Table.
 */
export const Table = styled.table`
  border: solid 1.5px #fff;

  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 15px;
  }
`;

/**
 * Groups column headings.
 */
export const Header = styled.thead`
  background-color: #0a0a10;

  & > :hover {
    background-color: transparent;
  }
`;

/**
 * Table body.
 */
export const Body = styled.tbody`
  tr {
    &:nth-child(odd) {
      background-color: #25273c;
    }

    &:nth-child(even) {
      background-color: #1d1f2f;
    }

    &:hover {
      background-color: #44486e;
    }
  }
`;

/**
 * Column heading cell.
 */
export const ColumnHeading = styled.th`
  font-weight: 700;
`;

/**
 * Table row.
 */
export const Row = styled.tr`
  transition: ease-in-out 0.2s;
`;

/**
 * Table cell.
 */
export const Cell = styled.td``;
