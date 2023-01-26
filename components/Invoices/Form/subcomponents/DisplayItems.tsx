import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { InvoiceItem } from '@appTypes/index';
import WhiteButton from '@components/Button/WhiteButton';

/**
 * Component container.
 */
const Container = styled.table`
  width: 100%;
  text-align: left;

  border-collapse: collapse;

  th,
  td {
    padding: 5px;
  }
`;

/**
 * Styled row.
 */
const Row = styled.tr`
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #453c67;
  }
`;

/**
 * Styled white button.
 */
const StyledWhiteButton = styled(WhiteButton)`
  display: inline;
  padding: 3px;

  aspect-ratio: 1 / 1;
  width: 35px;
  height: auto;
`;

/**
 * Component props.
 */
interface Props {
  /**
   * Currency code.
   */
  currency: string;

  /**
   * Array of Invoice Items.
   */
  items: Array<InvoiceItem>;
}

/**
 * Displays a table of Invoice Items.
 */
const DisplayItems: React.FC<Props> = ({ currency, items }) => {
  return (
    <Container>
      <thead>
        <th style={{ textAlign: 'left' }}>Quantity</th>
        <th>Unit Price</th>
        <th>Description</th>
        <th style={{ textAlign: 'right' }}>Actions</th>
      </thead>
      <tbody>
        {items.map((item: InvoiceItem) => {
          const { id, quantity, unitPrice, description } = item;

          return (
            <Row key={id}>
              <td style={{ textAlign: 'left' }}>{quantity}</td>
              <td>
                {currency} {unitPrice}
              </td>
              <td>{description}</td>
              <td style={{ textAlign: 'right' }}>
                <StyledWhiteButton type="button">
                  <FontAwesomeIcon icon={faPencil} size={'1x'} />
                </StyledWhiteButton>
              </td>
            </Row>
          );
        })}
      </tbody>
    </Container>
  );
};

export default DisplayItems;
