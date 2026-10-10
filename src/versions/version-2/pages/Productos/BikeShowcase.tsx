import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { Product, ProductVariant } from "../../types/Product";
import { productDetails } from "../../data/productDetails";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import ProductPhoto from "./ProductPhoto";
import "./BestrideF1.css";

export default function BikeShowcase({ product, variant, hero, studio, children }: {
  product: Product;
  variant: ProductVariant;
  hero: string;
  studio: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const detail = productDetails[product.id];
  const modelId = product.model.toLowerCase();
  const specificationId = `${modelId}-specifications`;
  const capacity = product.specifications.find((spec) => spec.label === "Carga máxima" || spec.label === "Capacidad de carga");
  const facts = capacity ? [...product.features, capacity] : product.features;
  const context = { productName: product.name, model: product.model, sku: variant.sku, color: variant.color };
  // P2 detail shots are small; keep them paired instead of enlarging them to a full screen.
  const compactDetails = product.id === "light-p2";
  const photos = detail?.stories.map((story, index) => ({
    image: index === 0 ? studio : story.image,
    alt: `${product.name}: ${story.title}`,
    title: story.title,
    text: story.text,
    studio: true,
  })) ?? [];

  return <div className="f1-page f1-showcase bike-showcase">
    <header className="f1-hero">
      <img className="f1-hero__image" src={hero} alt={product.name} fetchPriority="high" />
      <div className="f1-hero__title"><h1>{product.name}</h1><p>{product.tagline}</p></div>
      <dl className="f1-hero__facts">{facts.map((fact) => <div key={fact.label}><dd>{fact.value}</dd><dt>{fact.label}</dt></div>)}</dl>
    </header>
    {photos.slice(0, compactDetails ? 1 : 2).map((photo) => <ProductPhoto key={photo.title} {...photo} />)}
    {compactDetails && <section className="f1-detail-pair bike-showcase__details" aria-label={`Diseño y detalles de ${product.name}`}>
      {photos.slice(1).map((photo) => <figure className="f1-detail-pair__tile" key={photo.title}>
        <img src={photo.image} alt={photo.alt} loading="lazy" decoding="async" />
        <figcaption><h2>{photo.title}</h2><p>{photo.text}</p></figcaption>
      </figure>)}
    </section>}
    <section className="f1-colors bike-showcase__colors" aria-labelledby={`${modelId}-colors-heading`}>
      <h2 id={`${modelId}-colors-heading`}>Elegí tu {product.model}</h2>
      <p>{product.variants.map((item) => item.color).join(" / ")}. Tu movimiento, tu estilo.</p>
      <img className="f1-colors__image" src={studio} alt={product.name} loading="lazy" decoding="async" />
      <div className="f1-colors__selector"><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/productos/${product.slug}/${next.slug}`)} /><span>{variant.color}</span></div>
    </section>
    {compactDetails && detail ? <ProductPhoto image={detail.stories[0].image} alt={`${product.name}, vista de su cuadro y sistema de plegado`} title="Compacta para todos los días." text={detail.intro} studio /> : photos.slice(2).map((photo) => <ProductPhoto key={photo.title} {...photo} />)}
    <section className="f1-contact" style={{ backgroundImage: `url(${hero})` }}>
      <div><h2>Conocé {product.name}</h2><p>{compactDetails ? product.description : detail?.intro ?? product.description}</p><div className="f1-contact__actions"><WhatsAppCTA location={`${modelId}_detail`} label="Consultanos por WhatsApp" {...context} /><a href={`#${specificationId}`}>Ficha técnica</a></div></div>
    </section>
    <section className="f1-technical" id={specificationId}><details><summary>Especificaciones técnicas <ChevronDown aria-hidden="true" /></summary><dl>{product.specifications.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></details><Link to="/productos">Ver todos los productos</Link></section>
    {children}
  </div>;
}
