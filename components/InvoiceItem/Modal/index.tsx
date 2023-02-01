import React, { useState, useReducer } from 'react';

import {
  invoiceItemReducer,
  blankInvoiceItem,
  Action,
} from '@components/InvoiceItem/Form';
import { CurrencyCode, InvoiceItem } from '@appTypes/index';
import deepClone from '@utils/deepClone';
import generateUUID, { UUIDTypeEnums } from '@utils/generateUUID';
import InvoiceItemForm from '@components/InvoiceItem/Form';
import ModalWrapper from '@components/ModalWrapper';

interface Props {
  /**
   * Currency code.
   */
  currencyCode: CurrencyCode;

  /**
   * Click handler for the close button.
   */
  handleCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Modal for creating Invoice Items.
 */
const CreateInvoiceItemModal: React.FC<Props> = ({
  currencyCode,
  handleCloseButtonClick,
}) => {
  // Invoice Item state.
  const [formValues, dispatch] = useReducer<
    (state: InvoiceItem, action: Action) => InvoiceItem
  >(invoiceItemReducer, blankInvoiceItem);

  // Indicates if the form is disabled.
  const [isDisabled, setIsDisabled] = useState(false);

  /**
   * Form submission handler.
   */
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);

    // Add ID to Invoice Item.
    const copy = deepClone<InvoiceItem>(formValues);
    copy.id = generateUUID(UUIDTypeEnums.InvoiceItem);

    console.log(copy);

    setIsDisabled(false);
  };

  return (
    <ModalWrapper
      title="Create Item"
      handleCloseButtonClick={handleCloseButtonClick}>
      <InvoiceItemForm
        currencyCode={currencyCode}
        formValues={formValues}
        dispatch={dispatch}
        handleSubmit={handleFormSubmit}
        disabled={isDisabled}
      />
    </ModalWrapper>
  );
};

export default CreateInvoiceItemModal;
