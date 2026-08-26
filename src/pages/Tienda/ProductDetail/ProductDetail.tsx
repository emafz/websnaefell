import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import ColorSelector from "../../../components/ColorSelector/ColorSelector";
import ProductFeatures from "../../../components/ProductFeatures/ProductFeatures";
import ProductGallery from "../../../components/ProductGallery/ProductGallery";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import SEO from "../../../components/SEO/SEO";
import ShareButton from "../../../components/ShareButton/ShareButton";
import TrustBenefits from "../../../components/TrustBenefits/TrustBenefits";
import WhatsAppCTA from "../../../components/WhatsAppCTA/WhatsAppCTA";
import BatteryEducation, { autonomyNote } from "../../../components/BatteryEducation/BatteryEducation";
import FAQSection from "../../../components/FAQSection/FAQSection";
import Icon from "../../../components/Icon/Icon";
import RelatedGuides from "../../../components/RelatedGuides/RelatedGuides";
import { productDetails } from "../../../data/productDetails";
import { products } from "../../../data/products";
import { trackEvent } from "../../../utils/analytics";
import { formatCurrency } from "../../../utils/currency";
import { absoluteUrl } from "../../../utils/site";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { productSlug = "", variantSlug } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === productSlug);
  const variant = product?.variants.find((item) => item.slug === variantSlug) ?? product?.variants[0];
  const detail = product ? productDetails[product.id] : undefined;
  const related = useMemo(() => product ? products.filter((item) => item.id !== product.id).slice(0, 3) : [], [product]);

  useEffect(() => {
    if (product && variant) trackEvent("view_product", { product_name:product.name, product_model:product.model, sku:variant.sku, color:variant.color, page_path:window.location.pathname });
  }, [product, variant]);

  if (!product || !variant) return <section className="section"><SEO title="Modelo no encontrado | Snaefell" description="El modelo solicitado no está disponible." noIndex /><div className="container"><h1>Modelo no encontrado</h1><Link to="/modelos">Volver a modelos</Link></div></section>;

  const canonicalPath = `/modelos/${product.slug}`;
  const categoryName = product.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica";
  const power = product.features.find((feature) => feature.label.toLowerCase().includes("motor"))?.value;
  const seoTitle = `Snaefell ${product.name} | ${categoryName}${power ? ` ${power}` : ""}`;
  const seoDescription = `Conocé la Snaefell ${product.name}, ${categoryName.toLowerCase()}${power ? ` de ${power}` : ""}. Especificaciones, colores y asesoramiento por WhatsApp.`;
  const canonicalUrl = absoluteUrl(canonicalPath);
  const structuredData = [
    { "@context":"https://schema.org", "@type":"Product", name:`Snaefell ${product.name}`, description:product.shortDescription, image:variant.images, sku:variant.sku, brand:{ "@type":"Brand", name:"Snaefell" }, category:categoryName, url:canonicalUrl },
    { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
      { "@type":"ListItem", position:1, name:"Inicio", item:absoluteUrl("/") },
      { "@type":"ListItem", position:2, name:"Modelos", item:absoluteUrl("/modelos") },
      { "@type":"ListItem", position:3, name:product.name, item:canonicalUrl },
    ] },
  ];
  const whatsappProps = { productName:product.name, model:product.model, sku:variant.sku, color:variant.color };
  const hasAutonomy = product.features.some((feature)=>feature.label.toLowerCase().includes("autonom"));

  return <div className="product-page">
    <SEO title={seoTitle} description={seoDescription} path={canonicalPath} image={variant.images[0]} type="product" structuredData={structuredData} />
    <div className="container product-top">
      <Breadcrumbs items={[{label:"Inicio",to:"/"},{label:"Modelos",to:"/modelos"},{label:product.name}]} />
      <div className="product-layout">
        <ProductGallery images={variant.images} alt={`${categoryName} Snaefell ${product.name} ${variant.color}`} />
        <div className="product-buy">
          <span className="eyebrow">{categoryName}</span>
          <h1>{product.name}</h1><p className="product-tagline">{product.tagline}</p>
          <p className="product-description">{product.shortDescription}</p>
          <ProductFeatures features={product.features.slice(0, 5)} />
          {hasAutonomy && <p className="product-autonomy-note">* {autonomyNote}</p>}
          <div className="product-price"><small>Precio de referencia</small>{formatCurrency(variant.price)}</div>
          <div className="product-option"><div className="product-option__label"><strong>Color</strong><span>{variant.color} · SKU {variant.sku}</span></div><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/modelos/${product.slug}/${next.slug}`)} /></div>
          <WhatsAppCTA className="product-whatsapp" location="product_hero" {...whatsappProps} />
          <p className="product-consult-note">Consultá disponibilidad, formas de pago y opciones de entrega con nuestro equipo.</p>
          <ShareButton title={`Snaefell ${product.name}`} text={product.shortDescription} url={canonicalUrl} />
        </div>
      </div>
    </div>
    <section className="section recommended-for"><div className="container"><span className="eyebrow">Uso recomendado</span><h2>Ideal para vos si...</h2><div>{product.recommendedFor.map((item)=><article key={item}><Icon name="check"/><p>{item}</p></article>)}</div></div></section>
    <section className="section product-trust"><div className="container"><span className="eyebrow">Respaldo Snaefell</span><h2>Te acompañamos antes y después de elegir.</h2><TrustBenefits /></div></section>
    <section className="product-performance"><div className="container"><span className="eyebrow">Características principales</span><h2>{product.description}</h2><ProductFeatures features={product.features}/></div></section>
    <BatteryEducation productName={product.name} model={product.model}/>
    {detail && <section className="product-editorial" aria-label={`Detalles de ${product.name}`}>
      <div className="container product-editorial__intro"><span className="eyebrow">Conocé tu {product.model}</span><h2>{detail.intro}</h2></div>
      <div className="product-stories">{detail.stories.map((story, index) => <article className={`product-story ${index % 2 ? "product-story--reverse" : ""}`} key={story.title}>
        <div className="product-story__image"><img src={story.image} alt={`${product.name}: ${story.title}`} loading="lazy" /></div>
        <div className="product-story__copy"><span>{story.eyebrow}</span><h3>{story.title}</h3><p>{story.text}</p></div>
      </article>)}</div>
    </section>}
    <section className="section"><div className="container spec-layout"><div><span className="eyebrow">Ficha técnica</span><h2>Especificaciones técnicas</h2></div><dl>{product.specifications.map((spec)=><div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div></section>
    <section className="section product-learning"><div className="container"><span className="eyebrow">Antes de elegir</span><RelatedGuides slugs={product.relatedGuides} title="Aprendé más sobre tu Snaefell"/></div></section>
    {detail && <section className="section product-faq"><div className="container"><FAQSection title={`Preguntas frecuentes sobre ${product.name}`} intro="Información disponible para ayudarte a decidir." items={detail.faqs}/></div></section>}
    <section className="section product-bottom-cta"><div className="container"><div><span className="eyebrow">Asesoramiento</span><h2>¿Querés conocer disponibilidad de la {product.name}?</h2></div><WhatsAppCTA location="product_bottom" {...whatsappProps} /></div></section>
    <section className="section related-section"><div className="container"><div className="related-heading"><h2>Otros modelos Snaefell</h2><Link to="/modelos">Comparar toda la gama →</Link></div><ProductGrid products={related}/></div></section>
    <div className="product-sticky-cta"><WhatsAppCTA location="product_mobile_sticky" label={`Consultar ${product.name}`} {...whatsappProps} /></div>
  </div>;
}
