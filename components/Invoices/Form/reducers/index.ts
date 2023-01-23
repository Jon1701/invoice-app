import React, { useState, useReducer, useCallback } from 'react';

import {
  Invoice,
  Address,
  ContactInfo,
  InvoiceStatus,
  Currency,
  InvoiceAmounts,
  WithEmptyString,
} from '@appTypes/index';
import deepClone from '@utils/deepClone';

import { Action, ActionTypeEnums } from '../actions';

// Blank Invoice.
export const blankInvoice: Invoice = {
  id: '',
  status: '',
  currency: '',
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
      copy.currency = action.payload as WithEmptyString<Currency>;
      break;

    case ActionTypeEnums.SetInvoiceStatus:
      copy.status = action.payload as WithEmptyString<InvoiceStatus>;
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

    default:
      break;
  }

  return copy;
};
