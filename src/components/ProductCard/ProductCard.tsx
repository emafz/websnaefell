import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/currency";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: Product }) {
  const variant = product.variants[0];
  const minPrice = Math.min(...product.variants.map((item) => item.price));

  return (
    <article className="product-card">
      <Link to={`/tienda/${product.slug}/${variant.slug}`} className="product-card__media">
        <img src={variant.images[0]} alt={`${product.name} ${variant.color}`} />
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{product.category === "monopatin" ? "Monopatin electrico" : "Bicicleta electrica"}</span>
          <span>{product.model}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <div className="product-card__colors">
          {product.variants.map((item) => (
            <span key={item.id} title={item.color} style={{ background: item.colorHex }} />
          ))}
          <small>{product.variants.length} {product.variants.length === 1 ? "color" : "colores"}</small>
        </div>
        <div className="product-card__footer">
          <div>
            <small>Desde</small>
            <strong>{formatCurrency(minPrice)}</strong>
          </div>
          <Link className="product-card__arrow" to={`/tienda/${product.slug}/${variant.slug}`} aria-label={`Ver ${product.name}`}>-&gt;</Link>
        </div>
      </div>
    </article>
  );
}
