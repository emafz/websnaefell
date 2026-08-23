import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import ColorSelector from "../../../components/ColorSelector/ColorSelector";
import ProductFeatures from "../../../components/ProductFeatures/ProductFeatures";
import ProductGallery from "../../../components/ProductGallery/ProductGallery";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import QuantitySelector from "../../../components/QuantitySelector/QuantitySelector";
import { productDetails } from "../../../data/productDetails";
import { products } from "../../../data/products";
import { useCart } from "../../../hooks/useCart";
import { formatCurrency } from "../../../utils/currency";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { productSlug = "", variantSlug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((item) => item.slug === productSlug);
  const variant = product?.variants.find((item) => item.slug === variantSlug) ?? product?.variants[0];
  const detail = product ? productDetails[product.id] : undefined;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => { setQuantity(1); setAdded(false); }, [productSlug, variantSlug]);
  useEffect(() => { if (product && !variantSlug && variant) navigate(`/tienda/${product.slug}/${variant.slug}`, { replace:true }); }, [product, variant, variantSlug, navigate]);
  const related = useMemo(() => product ? products.filter((item) => item.id !== product.id).slice(0,3) : [], [product]);

  if (!product || !variant) return <section className="section"><div className="container"><h1>Producto no encontrado</h1><Link to="/tienda">Volver a la tienda</Link></div></section>;

  const handleAdd = () => {
    addItem({ productId: product.id, productSlug: product.slug, variantId: variant.id, variantSlug: variant.slug, sku: variant.sku, name: product.name, color: variant.color, price: variant.price, quantity, image: variant.images[0] });
    setAdded(true); window.setTimeout(() => setAdded(false), 1800);
  };

  return <div className="product-page">
    <div className="container product-top">
      <Breadcrumbs items={[{label:"Inicio",to:"/"},{label:"Tienda",to:"/tienda"},{label:product.name}]} />
      <div className="product-layout">
        <ProductGallery images={variant.images} alt={`${product.name} ${variant.color}`} />
        <div className="product-buy">
          <span className="eyebrow">{product.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"}</span>
          <h1>{product.name}</h1><p className="product-tagline">{product.tagline}</p>
          <div className="product-price">{formatCurrency(variant.price)}</div><p className="product-description">{product.shortDescription}</p>
          <div className="product-option"><div className="product-option__label"><strong>Color</strong><span>{variant.color}</span></div><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/tienda/${product.slug}/${next.slug}`)} /></div>
          <div className="product-option"><div className="product-option__label"><strong>Cantidad</strong><span>SKU {variant.sku}</span></div><QuantitySelector value={quantity} onChange={setQuantity}/></div>
          <button className="button button--primary button--wide add-cart" onClick={handleAdd}>{added ? "Agregado al carrito ✓" : "Agregar al carrito"}</button><Link className="product-cart-link" to="/carrito">Ver carrito →</Link>
        </div>
      </div>
    </div>
    <section className="product-performance"><div className="container"><span className="eyebrow">Rendimiento</span><h2>{product.description}</h2><ProductFeatures features={product.features}/></div></section>
    {detail && <section className="product-editorial" aria-label={`Detalles de ${product.name}`}>
      <div className="container product-editorial__intro"><span className="eyebrow">Conocé tu {product.model}</span><h2>{detail.intro}</h2></div>
      <div className="product-stories">{detail.stories.map((story, index) => <article className={`product-story ${index % 2 ? "product-story--reverse" : ""}`} key={story.title}>
        <div className="product-story__image"><img src={story.image} alt={`${product.name}: ${story.title}`} loading="lazy" /></div>
        <div className="product-story__copy"><span>{story.eyebrow}</span><h3>{story.title}</h3><p>{story.text}</p></div>
      </article>)}</div>
    </section>}
    <section className="section"><div className="container spec-layout"><div><span className="eyebrow">Ficha técnica</span><h2>Especificaciones.</h2></div><dl>{product.specifications.map((spec)=><div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div></section>
    {detail && <section className="section product-faq"><div className="container product-faq__layout"><div><span className="eyebrow">Ayuda</span><h2>Preguntas frecuentes.</h2><p>Todo lo esencial antes de elegir tu próximo Snaefell.</p></div><div className="product-faq__list">{detail.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>}
    <section className="section related-section"><div className="container"><div className="related-heading"><h2>También podría interesarte</h2><Link to="/tienda">Ver todos →</Link></div><ProductGrid products={related}/></div></section>
  </div>;
}
