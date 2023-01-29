import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import {
  Table,
  Body,
  Cell,
  Header,
  ColumnHeading,
  Row,
} from '@components/Table/Desktop';
import { InvoiceItem } from '@appTypes/index';
import { Button, Shape, Variant, ColorScheme } from '@components/Button';

import { DisplayInvoiceItemsProps } from '.';

/**
 * Displays a table of Invoice Items (Desktop layout).
 */
const DesktopInvoiceItems: React.FC<DisplayInvoiceItemsProps> = ({
  currency,
  items,
}) => {
  return (
    <Table style={{ textAlign: 'left' }}>
      <Header>
        <Row>
          <ColumnHeading style={{ textAlign: 'left' }}>Quantity</ColumnHeading>
          <ColumnHeading>Unit Price</ColumnHeading>
          <ColumnHeading>Description</ColumnHeading>
          <ColumnHeading style={{ textAlign: 'right' }}>Actions</ColumnHeading>
        </Row>
      </Header>
      <Body>
        {items.map((item: InvoiceItem) => {
          const { id, quantity, unitPrice, description } = item;

          return (
            <Row key={id}>
              <Cell style={{ textAlign: 'left' }}>{quantity}</Cell>
              <Cell>
                {currency} {unitPrice}
              </Cell>
              <Cell>{description}</Cell>
              <Cell style={{ textAlign: 'right' }}>
                <Button
                  type="button"
                  variant={Variant.Solid}
                  colorScheme={ColorScheme.White}
                  shape={Shape.Rounded}
                  minWidth="1px"
                  width="35px"
                  aspectRatio="1 / 1"
                  padding="0">
                  <FontAwesomeIcon icon={faPencil} size={'1x'} />
                </Button>
              </Cell>
            </Row>
          );
        })}
      </Body>
    </Table>
  );
};

export default DesktopInvoiceItems;
