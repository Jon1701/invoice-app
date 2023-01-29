import deepClone from '@utils/deepClone';
import { InvoiceItem } from '@appTypes/index';

import { Action, ActionTypeEnums } from '../actions';

// Blank Invoice Item.
export const blankInvoiceItem: InvoiceItem = {
  id: '',
  description: '',
  quantity: 0,
  unitPrice: 0,
};

/**
 * Reducer to modify an Invoice.
 *
 * @param state Existing state.
 * @param action Action.
 * @returns Modified state.
 */
export const invoiceItemReducer = (
  state: InvoiceItem,
  action: Action
): InvoiceItem => {
  // If setting an Invoice Item, just return it.
  if (action.type === ActionTypeEnums.SetInvoiceItem) {
    return action.payload as InvoiceItem;
  }

  // Create copy of existing state.
  const copy: InvoiceItem = deepClone(state);

  switch (action.type) {
    case ActionTypeEnums.SetID:
      copy.id = action.payload as string;
      break;

    case ActionTypeEnums.SetDescription:
      copy.description = action.payload as string;
      break;

    case ActionTypeEnums.SetQuantity:
      copy.quantity = action.payload as number;
      break;

    case ActionTypeEnums.SetUnitPrice:
      copy.unitPrice = action.payload as number;
      break;

    default:
      break;
  }

  return copy;
};
