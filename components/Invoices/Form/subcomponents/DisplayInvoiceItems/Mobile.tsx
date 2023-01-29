import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { Button, Shape, Variant, ColorScheme } from '@components/Button';
import { Table, RowGroup, Row, Heading, Cell } from '@components/Table/Mobile';
import { InvoiceItem } from '@appTypes/index';

import { DisplayInvoiceItemsProps } from '.';

/**
 * Displays a table of Invoice Items (Mobile layout).
 */
const MobileInvoiceItems: React.FC<DisplayInvoiceItemsProps> = ({
  currency,
  items,
}) => {
  return (
    <Table>
      {items.map((item: InvoiceItem) => {
        const { id, description, quantity, unitPrice } = item;

        return (
          <RowGroup key={id}>
            <Row>
              <Heading>Description</Heading>
              <Cell>{description}</Cell>
            </Row>
            <Row>
              <Heading>Quantity</Heading>
              <Cell>{quantity}</Cell>
            </Row>
            <Row>
              <Heading>Unit Price</Heading>
              <Cell>
                {currency} {unitPrice}
              </Cell>
            </Row>
            <Row>
              <Heading>Actions</Heading>
              <Cell>
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
          </RowGroup>
        );
      })}
    </Table>
  );
};

export default MobileInvoiceItems;
