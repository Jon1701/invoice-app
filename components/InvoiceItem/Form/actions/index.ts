import { InvoiceItem } from '@appTypes/index';

export enum ActionTypeEnums {
  SetInvoiceItem = 'SET_INVOICE_ITEM',
  SetID = 'SET_ID',
  SetQuantity = 'SET_QUANTITY',
  SetDescription = 'SET_DESCRIPTION',
  SetUnitPrice = 'SET_UNIT_PRICE',
}

/**
 * Structure of an Action Creator.
 */
export interface ActionCreator<PayloadType = void> {
  type: ActionTypeEnums;
  payload?: PayloadType;
}

/**
 * Sets the Invoice Item.
 */
export const setInvoiceItem = (
  item: InvoiceItem
): ActionCreator<InvoiceItem> => ({
  type: ActionTypeEnums.SetInvoiceItem,
  payload: item,
});

/**
 * Sets the ID.
 */
export const setID = (id: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetID,
  payload: id,
});

/**
 * Sets the Quantity.
 */
export const setQuantity = (quantity: number): ActionCreator<number> => ({
  type: ActionTypeEnums.SetQuantity,
  payload: quantity,
});

/**
 * Sets the Description.
 */
export const setDescription = (description: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetDescription,
  payload: description,
});

/**
 * Sets the Unit Price.
 */
export const setUnitPrice = (unitPrice: number): ActionCreator<number> => ({
  type: ActionTypeEnums.SetUnitPrice,
  payload: unitPrice,
});

export type Action =
  | ActionCreator<InvoiceItem>
  | ActionCreator<number>
  | ActionCreator<string>;
