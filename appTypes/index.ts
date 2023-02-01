/**
 * All Invoice Statuses.
 */
export enum InvoiceStatus {
  Draft = 'draft',
  Pending = 'pending',
  Paid = 'paid',
}

/**
 * All supported Currencies.
 */
export enum CurrencyCode {
  CAD = 'CAD',
  USD = 'USD',
}

/**
 * Mailing/Billing Address.
 */
export interface Address {
  /**
   * Address line 1.
   */
  line1: string;

  /**
   * Address line 2.
   */
  line2?: string;

  /**
   * City.
   */
  city: string;

  /**
   * State/Province.
   */
  state: string;

  /**
   * ZIP/Postal Code.
   */
  postalCode: string;

  /**
   * Country.
   */
  country: string;
}

/**
 * Contact information.
 */
export interface ContactInfo {
  /**
   * Name of the Contact.
   */
  name: string;

  /**
   * Email Address of the Contact.
   */
  email: string;

  /**
   * Phone Number of the Contact.
   */
  phone?: string;

  /**
   * Mailing/Billing Address of the Contact.
   */
  address: Address;
}

/**
 * Amounts in an Invoice.
 */
export interface InvoiceAmounts {
  /**
   * Total Amount.
   */
  total: number;
}

/**
 * An Item in an Invoice.
 */
export interface InvoiceItem {
  /**
   * Unique identifier.
   */
  id?: string;

  /**
   * Item Description.
   */
  description: string;

  /**
   * Unit Price.
   */
  unitPrice: number;

  /**
   * Quantity.
   */
  quantity: number;
}

/**
 * Invoice.
 */
export interface Invoice {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Invoice amounts.
   */
  amount: InvoiceAmounts;

  /**
   * Currency code.
   */
  currencyCode: CurrencyCode;

  /**
   * Status.
   */
  status: InvoiceStatus;

  /**
   * Invoice items.
   */
  items: Array<InvoiceItem>;

  /**
   * Biller information.
   */
  biller: ContactInfo;

  /**
   * Client information.
   */
  client: ContactInfo;
}
