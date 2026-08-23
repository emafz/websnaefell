import { products } from "../data/products";
import type { ProductCategory } from "../types/Product";

export const getProducts = () => products;
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getProductsByCategory = (category: ProductCategory) => products.filter((product) => product.category === category);
export const getVariantBySlug = (productSlug: string, variantSlug: string) => getProductBySlug(productSlug)?.variants.find((variant) => variant.slug === variantSlug);
