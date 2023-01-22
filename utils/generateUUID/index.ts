import { v4 as uuidv4 } from 'uuid';

export enum UUIDTypeEnums {
  Invoice = 'invoice',
  InvoiceItem = 'invoiceitem',
}

/**
 * Generates a UUID associated with a prefix.
 * @param type Type of UUID to be prefixed with.
 * @returns UUID with prefix.
 */
const generateUUID = (type: UUIDTypeEnums): string => {
  let uuid = uuidv4().replaceAll('-', '');

  return `${type}_${uuid}`;
};

export default generateUUID;
