import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";
import { trackEvent } from "../../utils/analytics";
import "./ProductCard.css";

export default function ProductCard({ product }: { product: Product }) {
  const variant = product.variants[0];
  const productUrl = `/modelos/${product.slug}/${variant.slug}`;

  return (
    <article className="product-card">
      <Link to={productUrl} className="product-card__media" onClick={() => trackEvent("select_model", { product_name:product.name, product_model:product.model, cta_location:"model_card" })}>
        <img src={variant.images[0]} alt={`${product.name} en color ${variant.color}`} loading="lazy" />
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{product.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"}</span>
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
          <strong>Conocé el modelo</strong>
          <Link className="product-card__arrow" to={productUrl} aria-label={`Conocé ${product.name}`}>-&gt;</Link>
        </div>
      </div>
    </article>
  );
}
