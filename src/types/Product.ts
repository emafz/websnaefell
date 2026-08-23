export type ProductCategory = "monopatin" | "bicicleta";

export interface ProductFeature {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProductVariant {
  id: string;
  sku: string;
  slug: string;
  color: string;
  colorHex?: string;
  price: number;
  images: string[];
  sourceUrl?: string;
  available?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  name: string;
  model: string;
  category: ProductCategory;
  tagline?: string;
  shortDescription: string;
  description?: string;
  featured?: boolean;
  features: ProductFeature[];
  specifications: ProductFeature[];
  variants: ProductVariant[];
}
