import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { Product, ProductVariant } from "../../types/Product";
import { productDetails } from "../../data/productDetails";
import { products } from "../../data/products";
import TrustBenefits from "../../components/TrustBenefits/TrustBenefits";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import FAQSection from "../../components/FAQSection/FAQSection";
import RelatedGuides from "../../components/RelatedGuides/RelatedGuides";
import { formatCurrency } from "../../utils/currency";
import motors from "../../assets/f2/Recurso-6.webp";
import suspension from "../../assets/f2/F2_Suspencion-trasera-F2.webp";
import equipment from "../../assets/f2/Recurso-5.webp";
import f1Black from "../Tienda/BestrideF1/assets/negro/principal.jpg";
import f1White from "../Tienda/BestrideF1/assets/blanco/principal.jpg";
import f1Yellow from "../Tienda/BestrideF1/assets/amarillo/principal.jpg";
import f1Green from "../Tienda/BestrideF1/assets/verde/principal.jpg";
import f2Orange from "../Tienda/BestrideF2/assets/naranja/principal.jpg";
import "./ProductoDetalle.css";
import "./ProductEditorialDetails.css";

const f2StoryImages = [motors, suspension, equipment];

const purchaseImageByVariant: Record<string, string> = {
  "f1-negro": f1Black,
  "f1-blanco": f1White,
  "f1-amarillo": f1Yellow,
  "f1-verde": f1Green,
  "f2-naranja": f2Orange,
};

export default function ProductEditorialDetails({ product, variant }: { product: Product; variant: ProductVariant }) {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const detail = productDetails[product.id];
  const storyImages = product.id === "bestride-pro-f2" ? f2StoryImages : detail?.stories.map((story) => story.image) ?? [];
  const purchaseImage = purchaseImageByVariant[variant.id] ?? variant.images[0];
  const galleryImages = [purchaseImage, ...variant.images.slice(1)];
  const specificationId = `${product.model.toLowerCase()}-specifications`;
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  const context = { productName: product.name, model: product.model, sku: variant.sku, color: variant.color };

  useEffect(() => setActiveImage(0), [variant.id]);

  return (
    <div className="product-editorial-details">
      {detail && <>
        <section className="visual-product__intro"><p>Conocé {product.name}</p><h2>{detail.intro}</h2></section>
        <section className="visual-stories" aria-label={`Más detalles del ${product.name}`}>
          {detail.stories.map((story, index) => <article className="visual-story" key={story.title}><div className="visual-story__image"><img src={storyImages[index] ?? story.image} alt={`${product.name}: ${story.title}`} loading="lazy" /></div><div className="visual-story__copy"><p>{story.eyebrow}</p><h2>{story.title}</h2><span>{story.text}</span></div></article>)}
        </section>
      </>}

      <section className="visual-product__studio" id="colores">
        <div className="visual-product__gallery">
          <div className="visual-product__gallery-image"><img src={galleryImages[activeImage]} alt={`${product.name} en color ${variant.color}`} loading="eager" /></div>
          {galleryImages.length > 1 && <div className="visual-product__gallery-controls"><button type="button" aria-label="Foto anterior" onClick={() => setActiveImage((activeImage + galleryImages.length - 1) % galleryImages.length)}><ChevronLeft aria-hidden="true" /></button><span aria-live="polite">{activeImage + 1} / {galleryImages.length}</span><button type="button" aria-label="Foto siguiente" onClick={() => setActiveImage((activeImage + 1) % galleryImages.length)}><ChevronRight aria-hidden="true" /></button></div>}
        </div>
        <div className="visual-product__studio-copy"><p>Hacelo tuyo</p><h2>Tu {product.name}.<br />Tu color.</h2><div className="visual-product__color-name">{variant.color}</div><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/productos/${product.slug}/${next.slug}#colores`)} /><div className="visual-product__price"><small>Precio de referencia</small><strong>{formatCurrency(variant.price)}</strong></div><p className="visual-product__availability">Consultá precio vigente, disponibilidad de este color, formas de pago y entrega.</p><WhatsAppCTA className="visual-product__contact" location={`${product.model.toLowerCase()}_editorial_bottom`} label={`Consultar ${product.name}`} {...context} /><small className="visual-product__sku">SKU {variant.sku}</small></div>
      </section>

      <section className="product-editorial-details__recommendations"><div className="product-editorial-details__inner"><h2>Para tu forma de moverte.</h2><div className="product-editorial-details__cards">{product.recommendedFor.map((item) => <article key={item}><Check aria-hidden="true" /><p>{item}</p></article>)}</div></div></section>

      <section className="product-editorial-details__technical" id={specificationId}>
        <details open>
          <summary>Ficha técnica.<ChevronDown aria-hidden="true" /></summary>
          <dl>{product.specifications.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
        </details>
        <Link className="product-editorial-details__compare" to="/productos">Comparar con otros modelos <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      {detail && <section className="product-editorial-details__faq"><FAQSection title="Resolvemos tus dudas." items={detail.faqs} defaultOpenCount={0} /></section>}

      <section className="product-editorial-details__trust"><div className="product-editorial-details__inner"><h2>Te acompañamos antes y después de elegir.</h2><TrustBenefits /></div></section>

      <section className="product-editorial-details__learning"><div className="product-editorial-details__inner"><div className="product-editorial-details__section-heading"><h2>Conocé un poco más.</h2><Link to="/novedades">Todas las guías <ArrowUpRight aria-hidden="true" /></Link></div><RelatedGuides slugs={product.relatedGuides} title="" /></div></section>

      <section className="product-editorial-details__related"><div className="product-editorial-details__inner"><h2>Seguí explorando.</h2><div className="product-editorial-details__product-grid">{related.map((item) => {
        const option = item.variants[0];
        const motor = item.features.find((feature) => feature.label.toLowerCase().includes("motor"));
        const autonomy = item.features.find((feature) => feature.label.toLowerCase().includes("autonom"));
        return <article key={item.id}><Link className="product-editorial-details__product-image" to={`/productos/${item.slug}/${option.slug}`}><img src={option.images[0]} alt={item.name} loading="lazy" /></Link><div className="product-editorial-details__product-body"><p>{item.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"}</p><h3><Link to={`/productos/${item.slug}/${option.slug}`}>{item.name}<ArrowUpRight aria-hidden="true" /></Link></h3><span>{item.tagline}</span><dl><div><dt>Motor</dt><dd>{motor?.value}</dd></div><div><dt>Autonomía</dt><dd>{autonomy?.value}</dd></div></dl><div className="product-editorial-details__product-colors">{item.variants.map((color) => <span key={color.id} title={color.color} style={{ background: color.colorHex }} />)}<small>{item.variants.length} {item.variants.length === 1 ? "color" : "colores"}</small></div></div></article>;
      })}</div></div></section>
    </div>
  );
}
