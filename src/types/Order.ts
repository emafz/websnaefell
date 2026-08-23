import type { CartItem } from "./Cart";

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  document: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  notes?: string;
}

export interface OrderPayload {
  customer: CustomerData;
  items: CartItem[];
  total: number;
}
