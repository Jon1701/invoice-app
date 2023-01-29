import React from 'react';
import styled from 'styled-components';
import { Button, Shape, Variant, ColorScheme } from '@components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { InvoiceItem } from '@appTypes/index';

import { DisplayInvoiceItemsProps } from '.';

/**
 * Component container.
 */
const Container = styled.div`
  width: 100%;
`;

/**
 * Container for an Invoice Item.
 */
const ContainerItem = styled.div`
  border: solid 1.5px #fff;
  padding: 15px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #453c67;
  }
`;

/**
 * Heading.
 */
const Heading = styled.div`
  font-weight: 700;
`;

/**
 * Row.
 */
const Row = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

/**
 * Displays a table of Invoice Items (Mobile layout).
 */
const MobileInvoiceItems: React.FC<DisplayInvoiceItemsProps> = ({
  currency,
  items,
}) => {
  return (
    <Container>
      {items.map((item: InvoiceItem) => {
        const { id, description, quantity, unitPrice } = item;

        return (
          <ContainerItem key={id}>
            <Row>
              <Heading>Description</Heading>
              <div>{description}</div>
            </Row>
            <Row>
              <Heading>Quantity</Heading>
              <div>{quantity}</div>
            </Row>
            <Row>
              <Heading>Unit Price</Heading>
              <div>
                {currency} {unitPrice}
              </div>
            </Row>
            <Row>
              <Heading>Actions</Heading>
              <div>
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
              </div>
            </Row>
          </ContainerItem>
        );
      })}
    </Container>
  );
};

export default MobileInvoiceItems;
