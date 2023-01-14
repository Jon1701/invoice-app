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
}

export interface InvoiceItem {
  description: string;
  unitPrice: number;
  quantity: number;
}

export interface Invoice {
  id: string;
  currency: Currency;
  status: InvoiceStatus;
  items: Array<InvoiceItem>;
  billerAddress: Address | ContactInfo;
  clientAddress: Address | ContactInfo;
}
