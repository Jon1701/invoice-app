import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Invoice, InvoiceStatus } from '@appTypes/index';

/**
 * Indicator default style.
 */
const StyledBaseIndicator = styled.span`
  border-style: solid;
  border-width: 1px;
  border-color: #084298;
  font-size: 0.8em;

  background-color: #031633;
  color: #6ea8fe;

  padding: 2px 25px;
`;

/**
 * Draft indicator.
 */
const StyledDraftIndicator = styled(StyledBaseIndicator)`
  border-color: #495057;
  background-color: #343a40;
  color: #f8f9fa;
`;

/**
 * Pending indicator.
 */
const StyledPendingIndicator = styled(StyledBaseIndicator)`
  border-color: #664d03;
  background-color: #332701;
  color: #ffda6a;
`;

/**
 * Paid indicator.
 */
const StyledPaidIndicator = styled(StyledBaseIndicator)`
  border-color: #0f5132;
  background-color: #051b11;
  color: #75b798;
`;

/**
 * Returns the user-friendly status from an Invoice status enum.
 */
export const displayStatus = (status: InvoiceStatus): string => {
  switch (status) {
    case InvoiceStatus.Draft:
      return 'Draft';

    case InvoiceStatus.Paid:
      return 'Paid';

    case InvoiceStatus.Pending:
      return 'Pending';

    default:
      return 'Unknown';
  }
};

interface Props {
  /**
   * Invoice status.
   */
  status: InvoiceStatus;
}

/**
 * Returns a user-friendly status indicator component from an Invoice
 * status enum.
 */
export const StatusIndicator: React.FC<Props> = ({ status }: Props) => {
  let Container = StyledBaseIndicator;
  const text = displayStatus(status);

  switch (status) {
    case InvoiceStatus.Draft:
      Container = StyledDraftIndicator;
      break;

    case InvoiceStatus.Pending:
      Container = StyledPendingIndicator;
      break;

    case InvoiceStatus.Paid:
      Container = StyledPaidIndicator;
      break;

    default:
      Container = StyledBaseIndicator;
      break;
  }

  return <Container>{text}</Container>;
};
