export enum InvoiceStatus {
  Pending = 'pending',
  Draft = 'draft',
  Paid = 'paid',
}

export enum Currency {
  CAD = 'CAD',
  USD = 'USD',
  JPY = 'JPY',
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  address?: Address;
}

export interface InvoiceItem {
  description: string;
  unitPrice: number;
  quantity: number;
}

export interface InvoiceAmounts {
  total: number;
}

export interface Invoice {
  id: string;
  amount: InvoiceAmounts;
  currency: Currency;
  status: InvoiceStatus;
  items: Array<InvoiceItem>;
  biller: ContactInfo;
  client: ContactInfo;
}
