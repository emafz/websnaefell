import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Product, ProductVariant } from "../../types/Product";
import { productDetails } from "../../data/productDetails";
import TrustBenefits from "../../components/TrustBenefits/TrustBenefits";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import motors from "../../assets/f2/Recurso-6.webp";
import suspension from "../../assets/f2/F2_Suspencion-trasera-F2.webp";
import equipment from "../../assets/f2/Recurso-5.webp";
import studioF2 from "../../assets/models/bestride-pro-f2.webp";
import studioF1 from "../../assets/models/bestride-f1.webp";
import "./ProductEditorialDetails.css";
import "./ProductoDetalle.css";

const f2StoryImages = [motors, suspension, equipment];

export default function ProductEditorialDetails({ product, variant }: { product: Product; variant: ProductVariant }) {
  const navigate = useNavigate();
  const detail = productDetails[product.id];
  const storyImages = product.id === "bestride-pro-f2" ? f2StoryImages : detail?.stories.map((story) => story.image) ?? [];
  const studio = product.id === "bestride-f1" ? studioF1 : studioF2;
  return (
    <div className="product-editorial-details">
      <div className="product-editorial-details__support">
        <section className="section product-editorial-details__recommendations"><div className="container"><h2>Ideal para vos si...</h2><div className="product-editorial-details__cards">{product.recommendedFor.map((item) => <article key={item}><Check aria-hidden="true" /><p>{item}</p></article>)}</div></div></section>
        <section className="section product-editorial-details__trust"><div className="container"><h2>Te acompañamos antes y después de elegir.</h2><TrustBenefits /></div></section>
      </div>
      {detail && <>
        <section className="visual-product__intro"><p>{product.model}</p><h2>{detail.intro}</h2></section>
        <section className="visual-stories" aria-label={`Más detalles del ${product.name}`}>
          {detail.stories.map((story, index) => <article className="visual-story" key={story.title}><div className="visual-story__image"><img src={storyImages[index] ?? story.image} alt={`${product.name}: ${story.title}`} loading="lazy" /></div><div className="visual-story__copy"><p>{story.eyebrow}</p><h2>{story.title}</h2><span>{story.text}</span></div></article>)}
        </section>
      </>}
      <section className="visual-product__studio">
        <div className="visual-product__studio-image"><img src={studio} alt={product.name} loading="lazy" /></div>
        <div className="visual-product__studio-copy"><p>Tu {product.model}</p><h2>Elegí tu color.</h2><div className="visual-product__color-name">{variant.color}</div><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/productos/${product.slug}/${next.slug}`)} /><WhatsAppCTA className="visual-product__contact" location={`${product.model.toLowerCase()}_editorial_bottom`} label={`Consultar ${product.name}`} productName={product.name} model={product.model} sku={variant.sku} color={variant.color} /><small>Consultá disponibilidad y opciones de entrega.</small></div>
      </section>
    </div>
  );
}
