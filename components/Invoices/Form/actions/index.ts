import { Invoice, InvoiceItem, InvoiceStatus, Currency } from '@appTypes/index';

/**
 * Action types associated with a reducer.
 */
export enum ActionTypeEnums {
  SetInvoice = 'SET_INVOICE',
  SetCurrency = 'SET_CURRENCY',
  SetInvoiceStatus = 'SET_INVOICE_STATUS',
  SetBillerName = 'SET_BILLER_NAME',
  SetBillerEmail = 'SET_BILLER_EMAIL',
  SetBillerAddressLine1 = 'SET_BILLER_ADDRESS_LINE1',
  SetBillerAddressLine2 = 'SET_BILLER_ADDRESS_LINE2',
  SetBillerAddressCity = 'SET_BILLER_ADDRESS_CITY',
  SetBillerAddressState = 'SET_BILLER_ADDRESS_STATE',
  SetBillerAddressPostalCode = 'SET_BILLER_ADDRESS_POSTAL_CODE',
  SetBillerAddressCountry = 'SET_BILLER_ADDRESS_COUNTRY',
  SetClientName = 'SET_CLIENT_NAME',
  SetClientEmail = 'SET_CLIENT_EMAIL',
  SetClientAddressLine1 = 'SET_CLIENT_ADDRESS_LINE1',
  SetClientAddressLine2 = 'SET_CLIENT_ADDRESS_LINE2',
  SetClientAddressCity = 'SET_CLIENT_ADDRESS_CITY',
  SetClientAddressState = 'SET_CLIENT_ADDRESS_STATE',
  SetClientAddressPostalCode = 'SET_CLIENT_ADDRESS_POSTAL_CODE',
  SetClientAddressCountry = 'SET_CLIENT_ADDRESS_COUNTRY',
  AddBlankInvoiceItem = 'ADD_BLANK_INVOICE_ITEM',
  DeleteInvoiceItem = 'DELETE_INVOICE_ITEM',
  SetInvoiceItemQuantity = 'SET_INVOICE_ITEM_QUANTITY',
  SetInvoiceItemDescription = 'SET_INVOICE_ITEM_DESCRIPTION',
  SetInvoiceItemUnitPrice = 'SET_INVOICE_ITEM_UNIT_PRICE',
}

/**
 * Structure of an Action Creator.
 */
export interface ActionCreator<PayloadType = void> {
  type: ActionTypeEnums;
  payload?: PayloadType;
}

/**
 * Payload structure for Invoice Item quantity.
 */
export interface InvoiceItemQuantityPayload {
  id: string;
  quantity: number;
}

/**
 * Payload structure for Invoice Item description.
 */
export interface InvoiceItemDescriptionPayload {
  id: string;
  description: string;
}

/**
 * Payload structure for Invoice Item unit price.
 */
export interface InvoiceItemUnitPricePayload {
  id: string;
  unitPrice: number;
}

/**
 * Sets the Invoice.
 *
 * @param payload Invoice.
 */
export const setInvoice = (payload: Invoice): ActionCreator<Invoice> => ({
  type: ActionTypeEnums.SetInvoice,
  payload,
});

/**
 * Sets the Currency.
 *
 * @param payload Currency Code.
 */
export const setCurrency = (payload: Currency): ActionCreator<Currency> => ({
  type: ActionTypeEnums.SetCurrency,
  payload,
});

/**
 * Sets the Invoice Status.
 *
 * @param payload Invoice Status.
 */
export const setInvoiceStatus = (
  payload: InvoiceStatus
): ActionCreator<InvoiceStatus> => ({
  type: ActionTypeEnums.SetInvoiceStatus,
  payload,
});

/**
 * Sets the Name of the Biller.
 *
 * @param payload Name of the Biller.
 */
export const setBillerName = (payload: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerName,
  payload,
});

/**
 * Sets the Email Address of the Biller.
 *
 * @param payload Email Address of the Biller.
 */
export const setBillerEmail = (payload: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerEmail,
  payload,
});

/**
 * Sets the Biller Address Line 1.
 *
 * @param payload Address Line 1 of the Biller.
 */
export const setBillerAddressLine1 = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressLine1,
  payload,
});

/**
 * Sets the Biller Address Line 2.
 *
 * @param payload Address Line 2 of the Biller.
 */
export const setBillerAddressLine2 = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressLine2,
  payload,
});

/**
 * Sets the Biller Address City.
 *
 * @param payload Address City of the Biller.
 */
export const setBillerAddressCity = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressCity,
  payload,
});

/**
 * Sets the Biller Address State.
 *
 * @param payload Address State of the Biller.
 */
export const setBillerAddressState = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressState,
  payload,
});

/**
 * Sets the Biller Address Postal Code.
 *
 * @param payload Address Postal Code of the Biller.
 */
export const setBillerAddressPostalCode = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressPostalCode,
  payload,
});

/**
 * Sets the Biller Address Country.
 *
 * @param payload Address Country of the Biller.
 */
export const setBillerAddressCountry = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetBillerAddressCountry,
  payload,
});

/**
 * Sets the Client Name.
 *
 * @param payload Name of the Client.
 */
export const setClientName = (payload: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientName,
  payload,
});

/**
 * Sets the Client Email Address.
 *
 * @param payload Email Address of the Client.
 */
export const setClientEmail = (payload: string): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientEmail,
  payload,
});

/**
 * Sets the Client Address Line 1.
 *
 * @param payload Address Line 1 of the Client.
 */
export const setClientAddressLine1 = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressLine1,
  payload,
});

/**
 * Sets the Client Address Line 2.
 *
 * @param payload Address Line 2 of the Client.
 */
export const setClientAddressLine2 = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressLine2,
  payload,
});

/**
 * Sets the Client Address City.
 *
 * @param payload Address City of the Client.
 */
export const setClientAddressCity = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressCity,
  payload,
});

/**
 * Sets the Client Address State.
 *
 * @param payload Address State of the Client.
 */
export const setClientAddressState = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressState,
  payload,
});

/**
 * Sets the Client Address Postal Code.
 *
 * @param payload Address Postal Code of the Client.
 */
export const setClientAddressPostalCode = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressPostalCode,
  payload,
});

/**
 * Sets the Client Address Country.
 *
 * @param payload Address Country of the Client.
 */
export const setClientAddressCountry = (
  payload: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.SetClientAddressCountry,
  payload,
});

/**
 * Adds a new blank Invoice Item to the Invoice.
 */
export const addBlankInvoiceItem = (): ActionCreator<void> => ({
  type: ActionTypeEnums.AddBlankInvoiceItem,
});

/**
 * Deletes an Invoice Item from the Invoice.
 */
export const deleteInvoiceItem = (
  invoiceID: string
): ActionCreator<string> => ({
  type: ActionTypeEnums.DeleteInvoiceItem,
  payload: invoiceID,
});

/**
 * Sets the Quantity field of an Invoice Item.
 */
export const setInvoiceItemQuantity = (
  id: string,
  quantity: number
): ActionCreator<InvoiceItemQuantityPayload> => ({
  type: ActionTypeEnums.SetInvoiceItemQuantity,
  payload: { id, quantity } as InvoiceItemQuantityPayload,
});

/**
 * Sets the Description field of an Invoice Item.
 */
export const setInvoiceItemDescription = (
  id: string,
  description: string
): ActionCreator<InvoiceItemDescriptionPayload> => ({
  type: ActionTypeEnums.SetInvoiceItemDescription,
  payload: {
    id,
    description,
  } as InvoiceItemDescriptionPayload,
});

/**
 * Sets the Unit Price field of an Invoice Item.
 */
export const setInvoiceItemUnitPrice = (
  id: string,
  unitPrice: number
): ActionCreator<InvoiceItemUnitPricePayload> => ({
  type: ActionTypeEnums.SetInvoiceItemUnitPrice,
  payload: { id, unitPrice } as InvoiceItemUnitPricePayload,
});

export type Action =
  | ActionCreator<void>
  | ActionCreator<number>
  | ActionCreator<string>
  | ActionCreator<Invoice>
  | ActionCreator<Currency>
  | ActionCreator<InvoiceStatus>
  | ActionCreator<InvoiceItem>
  | ActionCreator<InvoiceItemQuantityPayload>
  | ActionCreator<InvoiceItemDescriptionPayload>
  | ActionCreator<InvoiceItemUnitPricePayload>;
