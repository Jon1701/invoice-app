import React, { useState, useReducer, useCallback } from 'react';

import {
  Invoice,
  Address,
  ContactInfo,
  InvoiceStatus,
  Currency,
  InvoiceAmounts,
  InvoiceItem,
} from '@appTypes/index';
import {
  Action,
  ActionTypeEnums,
  InvoiceItemDescriptionPayload,
  InvoiceItemQuantityPayload,
  InvoiceItemUnitPricePayload,
} from '@components/Invoices/Form';
import deepClone from '@utils/deepClone';
import generateUUID, { UUIDTypeEnums } from '@utils/generateUUID';

// Blank Invoice.
export const blankInvoice: Invoice = {
  id: '',
  status: InvoiceStatus.Draft,
  currency: Currency.USD,
  amount: { total: 0 } as InvoiceAmounts,
  biller: {
    name: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  } as Address & ContactInfo,
  client: {
    name: '',
    email: '',
    address: {
      line1: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
  } as Address & ContactInfo,
  items: [],
};

// Blank Invoice Item.
export const blankInvoiceItem: InvoiceItem = {
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
export const invoiceReducer = (state: Invoice, action: Action): Invoice => {
  // If setting an Invoice, just return the Invoice.
  if (action.type === ActionTypeEnums.SetInvoice) {
    return action.payload as Invoice;
  }

  // Create copy of existing state.
  let copy: Invoice = deepClone(state);

  switch (action.type) {
    case ActionTypeEnums.SetCurrency:
      copy.currency = action.payload as Currency;
      break;

    case ActionTypeEnums.SetInvoiceStatus:
      copy.status = action.payload as InvoiceStatus;
      break;

    case ActionTypeEnums.SetBillerName:
      copy.biller.name = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerEmail:
      copy.biller.email = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressLine1:
      copy.biller.address.line1 = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressLine2:
      copy.biller.address.line2 = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressCity:
      copy.biller.address.city = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressState:
      copy.biller.address.state = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressPostalCode:
      copy.biller.address.postalCode = action.payload as string;
      break;

    case ActionTypeEnums.SetBillerAddressCountry:
      copy.biller.address.country = action.payload as string;
      break;

    case ActionTypeEnums.SetClientName:
      copy.client.name = action.payload as string;
      break;

    case ActionTypeEnums.SetClientEmail:
      copy.client.email = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressLine1:
      copy.client.address.line1 = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressLine2:
      copy.client.address.line2 = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressCity:
      copy.client.address.city = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressState:
      copy.client.address.state = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressPostalCode:
      copy.client.address.postalCode = action.payload as string;
      break;

    case ActionTypeEnums.SetClientAddressCountry:
      copy.client.address.country = action.payload as string;
      break;

    case ActionTypeEnums.AddBlankInvoiceItem:
      {
        // Create a copy of the array of Invoice Items.
        const itemsCopy: Array<InvoiceItem> = copy.items.slice();

        // Add new Invoice Item to the copy of Invoice Items.
        const item = deepClone(blankInvoiceItem);
        item.id = generateUUID(UUIDTypeEnums.InvoiceItem);
        itemsCopy.push(blankInvoiceItem);

        // Replace old array with new one.
        copy.items = itemsCopy;
      }
      break;

    case ActionTypeEnums.DeleteInvoiceItem:
      {
        // Find the index of the Invoice Item in the array of Invoice items.
        const matchingIndex = copy.items.findIndex(
          (item: InvoiceItem) => item.id === (action.payload as string)
        );

        // If no matching Invoice Item could be found, then do not modify array.
        if (matchingIndex < 0) {
          break;
        }

        // Create a copy of the array of Invoice Items.
        const itemsCopy: Array<InvoiceItem> = copy.items.slice();

        // Delete Invoice Item from array copy.
        itemsCopy.splice(matchingIndex, 1);

        // Replace old array with new one.
        copy.items = itemsCopy;
      }
      break;

    case ActionTypeEnums.SetInvoiceItemQuantity:
      {
        // Add typeguarding to payload variables.
        const { id, quantity } = action.payload as InvoiceItemQuantityPayload;

        // Find the index of the Invoice Item in the array of Invoice items.
        const matchingIndex = copy.items.findIndex(
          (item: InvoiceItem) => item.id === id
        );

        // If no matching Invoice Item could be found, then do not modify array.
        if (matchingIndex < 0) {
          break;
        }

        // Create a copy of the array of Invoice Items.
        const itemsCopy: Array<InvoiceItem> = copy.items.slice();

        // Update quantity.
        itemsCopy[matchingIndex].quantity = quantity;

        // Replace old array with new one.
        copy.items = itemsCopy;
      }
      break;

    case ActionTypeEnums.SetInvoiceItemDescription:
      {
        // Add typeguarding to payload variables.
        const { id, description } =
          action.payload as InvoiceItemDescriptionPayload;

        // Find the index of the Invoice Item in the array of Invoice items.
        const matchingIndex = copy.items.findIndex(
          (item: InvoiceItem) => item.id === id
        );

        // If no matching Invoice Item could be found, then do not modify array.
        if (matchingIndex < 0) {
          break;
        }

        // Create a copy of the array of Invoice Items.
        const itemsCopy: Array<InvoiceItem> = copy.items.slice();

        // Update quantity.
        itemsCopy[matchingIndex].description = description;

        // Replace old array with new one.
        copy.items = itemsCopy;
      }
      break;

    case ActionTypeEnums.SetInvoiceItemUnitPrice:
      {
        // Add typeguarding to payload variables.
        const { id, unitPrice } = action.payload as InvoiceItemUnitPricePayload;

        // Find the index of the Invoice Item in the array of Invoice items.
        const matchingIndex = copy.items.findIndex(
          (item: InvoiceItem) => item.id === id
        );

        // If no matching Invoice Item could be found, then do not modify array.
        if (matchingIndex < 0) {
          break;
        }

        // Create a copy of the array of Invoice Items.
        const itemsCopy: Array<InvoiceItem> = copy.items.slice();

        // Update quantity.
        itemsCopy[matchingIndex].unitPrice = unitPrice;

        // Replace old array with new one.
        copy.items = itemsCopy;
      }
      break;

    default:
      break;
  }

  return copy;
};
