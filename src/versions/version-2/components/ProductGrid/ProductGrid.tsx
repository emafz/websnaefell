import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <div className="empty-state">No encontramos productos con esos filtros.</div>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
