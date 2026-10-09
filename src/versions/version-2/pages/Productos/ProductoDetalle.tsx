import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import SEO from "../../components/SEO/SEO";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import { productDetails } from "../../data/productDetails";
import { products } from "../../data/products";
import { trackEvent } from "../../utils/analytics";
import { absoluteUrl } from "../../utils/site";
import bestrideF1 from "../../assets/models/bestride-f1.webp";
import bestrideProF2 from "../../assets/models/bestride-pro-f2.webp";
import mantisP6 from "../../assets/models/mantis-p6.webp";
import lightP2 from "../../assets/models/light-p2.webp";
import antelopeP5 from "../../assets/models/antelope-p5.webp";
import { productHeroById } from "./Productos";
import BestrideF1 from "./BestrideF1";
import BestrideF2 from "./BestrideF2";
import "./ProductoDetalle.css";

const studioById: Record<string, string> = {
  "bestride-f1": bestrideF1, "bestride-pro-f2": bestrideProF2,
  "light-p2": lightP2, "antelope-p5": antelopeP5, "mantis-p6": mantisP6,
};

const categoryLabel = (category: string) => category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica";

export default function ProductoDetalle() {
  const { productSlug = "", variantSlug } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === productSlug);
  const variant = product?.variants.find((item) => item.slug === variantSlug) ?? product?.variants[0];
  const detail = product ? productDetails[product.id] : undefined;

  useEffect(() => {
    if (product && variant) trackEvent("view_product", { product_name:product.name, product_model:product.model, sku:variant.sku, color:variant.color, page_path:window.location.pathname });
  }, [product, variant]);

  if (!product || !variant) return <section className="section"><SEO title="Producto no encontrado | Snaefell" description="El producto solicitado no está disponible." noIndex /><div className="container"><h1>Producto no encontrado</h1><Link to="/productos">Volver a productos</Link></div></section>;

  const canonicalPath = `/productos/${product.slug}`;
  const categoryName = categoryLabel(product.category);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const hero = productHeroById[product.id] ?? variant.images[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  const whatsappProps = { productName:product.name, model:product.model, sku:variant.sku, color:variant.color };
  const structuredData = [
    { "@context":"https://schema.org", "@type":"Product", name:`Snaefell ${product.name}`, description:product.shortDescription, image:variant.images, sku:variant.sku, brand:{ "@type":"Brand", name:"Snaefell" }, category:categoryName, url:canonicalUrl },
    { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[
      { "@type":"ListItem", position:1, name:"Inicio", item:absoluteUrl("/") },
      { "@type":"ListItem", position:2, name:"Productos", item:absoluteUrl("/productos") },
      { "@type":"ListItem", position:3, name:product.name, item:canonicalUrl },
    ] },
  ];

  if (product.id === "bestride-f1") return <BestrideF1 product={product} variant={variant} />;

  if (product.id === "bestride-pro-f2") return <BestrideF2 product={product} variant={variant} />;

  return <div className="visual-product">
    <SEO title={`Snaefell ${product.name} | ${categoryName}`} description={product.shortDescription} path={canonicalPath} image={hero} type="product" structuredData={structuredData} />
    <header className="visual-product__hero" style={{backgroundImage:`url(${hero})`}}>
      <div className="visual-product__hero-shade" />
      <Link className="visual-product__back" to="/productos"><ArrowLeft aria-hidden="true" /> Todos los productos</Link>
      <div className="visual-product__hero-copy"><p>{categoryName}</p><h1>{product.name}</h1><span>{product.tagline}</span><a href="#historia">Descubrir <ChevronDown aria-hidden="true" /></a></div>
    </header>
    <section className="visual-product__facts" aria-label="Características principales">
      {product.features.slice(0,4).map((feature)=><div key={feature.label}><strong>{feature.value}</strong><span>{feature.label}</span></div>)}
    </section>
    <section className="visual-product__intro" id="historia"><p>{product.model}</p><h2>{detail?.intro ?? product.description}</h2></section>
    {detail && <section className="visual-stories" aria-label={`Diseño de ${product.name}`}>
      {detail.stories.map((story,index)=><article className="visual-story" key={story.title}>
        <div className="visual-story__image"><img src={story.image} alt={`${product.name}: ${story.title}`} loading={index===0?"eager":"lazy"}/></div>
        <div className="visual-story__copy"><p>{story.eyebrow}</p><h2>{story.title}</h2><span>{story.text}</span></div>
      </article>)}
    </section>}
    <section className="visual-product__studio">
      <div className="visual-product__studio-image"><img src={studioById[product.id]} alt={`${product.name} en color ${variant.color}`} loading="lazy"/></div>
      <div className="visual-product__studio-copy"><p>Tu {product.model}</p><h2>Elegí tu color.</h2><div className="visual-product__color-name">{variant.color}</div><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next)=>navigate(`/productos/${product.slug}/${next.slug}`)}/><WhatsAppCTA className="visual-product__contact" location="productos_visual" label={`Consultar ${product.name}`} {...whatsappProps}/><small>Consultá disponibilidad y opciones de entrega.</small></div>
    </section>
    <section className="visual-product__technical"><details><summary>Especificaciones técnicas <ChevronDown aria-hidden="true" /></summary><dl>{product.specifications.map((spec)=><div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></details></section>
    <section className="visual-related"><div className="visual-related__heading"><p>Seguí explorando</p><h2>Otros productos Snaefell</h2></div><div className="visual-related__grid">{related.map((item)=><Link key={item.id} to={`/productos/${item.slug}`} style={{backgroundImage:`url(${productHeroById[item.id]})`}}><span>{item.name}</span><ArrowRight aria-hidden="true" /></Link>)}</div></section>
  </div>;
}
