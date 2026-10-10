import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { Product, ProductVariant } from "../../types/Product";
import SEO from "../../components/SEO/SEO";
import ColorSelector from "../../components/ColorSelector/ColorSelector";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
import { absoluteUrl } from "../../utils/site";
import hero from "../../assets/f1/01.webp";
import profile from "../../assets/f1/02.webp";
import colors from "../../assets/f1/06.webp";
import riding from "../../assets/f1/09.webp";
import battery from "../../assets/f1/F1_Bateria-F1.webp";
import dashboard from "../../assets/f1/F1_Tablero-F1.webp";
import folded from "../../assets/f1/Recurso-7-10.webp";
import suspension from "../../assets/f1/Recurso-8-1.webp";
import ProductEditorialDetails from "./ProductEditorialDetails";
import PhotoSection from "./ProductPhoto";
import "./BestrideF1.css";
import "./BestrideF1Showcase.css";

const mosaic = [
  { image: folded, title: "Estructura plegable. Llevá tu F1 con vos.", alt: "Bestride F1 plegado" },
  { image: suspension, title: "Doble suspensión trasera", alt: "Detalle del amortiguador del F1" },
];

export default function BestrideF1({ product, variant }: { product: Product; variant: ProductVariant }) {
  const navigate = useNavigate();
  const path = `/productos/${product.slug}`;
  const context = { productName: product.name, model: product.model, sku: variant.sku, color: variant.color };
  const facts = [...product.features, { label: "Carga máxima", value: "120 kg" }];
  return (
    <div className="f1-page f1-showcase">
      <SEO title="Bestride F1 | Snaefell" description={product.shortDescription} path={path} image={hero} type="product" structuredData={{ "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.shortDescription, image: absoluteUrl(hero), sku: variant.sku, brand: { "@type": "Brand", name: "Snaefell" }, url: absoluteUrl(path) }} />
      <header className="f1-hero">
        <img className="f1-hero__image" src={hero} alt="Bestride F1 en un espacio urbano iluminado" fetchPriority="high" />
        <div className="f1-hero__title"><h1>Bestride F1</h1><p>Tu próximo movimiento, eléctrico.</p></div>
        <dl className="f1-hero__facts">{facts.map((fact) => <div key={fact.label}><dd>{fact.value}</dd><dt>{fact.label}</dt></div>)}</dl>
      </header>
      <PhotoSection image={profile} alt="Bestride F1 de perfil en un espacio de arquitectura urbana" title="La ciudad, a tu manera." text="Diseño compacto para moverte sentado o de pie. Vos elegís cómo hacer tu recorrido." />
      <PhotoSection image={battery} alt="Batería extraíble del Bestride F1" title="Energía que va con vos." text="Batería de litio de 48 V / 13 Ah. Retirala para cargarla o cargala directamente en tu F1." position="center 45%" />
      <section className="f1-detail-pair" aria-label="Diseño y detalles del Bestride F1">
        {mosaic.map((tile) => <figure className="f1-detail-pair__tile" key={tile.title}><img src={tile.image} alt={tile.alt} loading="lazy" decoding="async" /><figcaption>{tile.title}</figcaption></figure>)}
      </section>
      <section className="f1-colors" aria-labelledby="f1-colors-heading">
        <h2 id="f1-colors-heading">Elegí tu F1</h2>
        <p>Negro, blanco, amarillo o verde. Tu movimiento, tu estilo.</p>
        <img className="f1-colors__image" src={colors} alt="Bestride F1 en distintos colores" loading="lazy" />
        <div className="f1-colors__selector"><ColorSelector variants={product.variants} selectedId={variant.id} onChange={(next) => navigate(`/productos/${product.slug}/${next.slug}`)} /><span>{variant.color}</span></div>
      </section>
      <PhotoSection image={riding} alt="Persona conduciendo un Bestride F1 en la ciudad" title="Encontrá tu ritmo." text="Tres modos de conducción: Eco, City y Sport." position="58% center" />
      <PhotoSection image={dashboard} alt="Pantalla del tablero digital y controles del Bestride F1" title="Tu recorrido, a la vista." text="Toda la información de tu F1 en su tablero digital." position="center 40%" />
      <section className="f1-contact" style={{ backgroundImage: `url(${profile})` }}>
        <div><h2>Conocé Bestride F1</h2><p>Descubrí su diseño y equipamiento. Consultanos por disponibilidad y opciones de entrega.</p><div className="f1-contact__actions"><WhatsAppCTA location="f1_detail" label="Consultanos por WhatsApp" {...context} /><a href="#f1-specifications">Ficha técnica</a></div></div>
      </section>
      <section className="f1-technical" id="f1-specifications"><details><summary>Especificaciones técnicas <ChevronDown aria-hidden="true" /></summary><dl>{product.specifications.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></details><Link to="/productos">Ver todos los productos</Link></section>
      <ProductEditorialDetails product={product} variant={variant} />
    </div>
  );
}
