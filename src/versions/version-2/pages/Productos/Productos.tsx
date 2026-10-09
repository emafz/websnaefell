import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { modelDisplayProducts } from "../../data/modelOrder";
import heroF1 from "../../assets/hero/hero-f1-1920.jpg";
import heroF2 from "../../assets/hero/hero-f2-1920.jpg";
import heroP2 from "../../assets/hero/hero-p2-1920.jpg";
import heroP5 from "../../assets/hero/hero-p5-1920.jpg";
import heroP6 from "../../assets/hero/hero-p6-1920.jpg";
import modelF1 from "../../assets/models/bestride-f1.webp";
import modelF2 from "../../assets/models/bestride-pro-f2.webp";
import modelP2 from "../../assets/models/light-p2.webp";
import modelP5 from "../../assets/models/antelope-p5.webp";
import modelP6 from "../../assets/models/mantis-p6.webp";
import { absoluteUrl } from "../../utils/site";
import { trackEvent } from "../../utils/analytics";
import ModelComparison from "../../components/ModelComparison/ModelComparison";
import FAQSection from "../../components/FAQSection/FAQSection";
import { generalPurchaseFaq } from "../../data/faqs";
import "./Productos.css";

export const productHeroById: Record<string, string> = {
  "bestride-f1": heroF1,
  "bestride-pro-f2": heroF2,
  "light-p2": heroP2,
  "antelope-p5": heroP5,
  "mantis-p6": heroP6,
};

const catalogImageById: Record<string, string> = {
  "bestride-f1": modelF1,
  "bestride-pro-f2": modelF2,
  "light-p2": modelP2,
  "antelope-p5": modelP5,
  "mantis-p6": modelP6,
};

export default function Productos() {
  return (
    <div className="products-concept">
      <SEO
        title="Productos Snaefell | Bicicletas y monopatines eléctricos"
        description="Descubrí los modelos de bicicletas y monopatines eléctricos Snaefell."
        path="/productos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Productos Snaefell",
          itemListElement: modelDisplayProducts.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: absoluteUrl(`/productos/${product.slug}`),
          })),
        }}
      />
      <h1 className="products-concept__heading">Productos Snaefell</h1>
      <section className="products-grid" id="productos" aria-label="Modelos Snaefell">
        {modelDisplayProducts.map((product, index) => (
          <article className={`product-tile${product.category === "monopatin" ? " product-tile--bestride" : ""}`} id={product.slug} key={product.id}>
            <img className="product-tile__image" src={catalogImageById[product.id] ?? product.variants[0].images[0]} alt={product.name} loading={index < 3 ? "eager" : "lazy"} />
            <h2 className="product-tile__name">{product.name}</h2>
            <Link className="product-tile__cta" to={`/productos/${product.slug}`} aria-label={`Ver modelo ${product.name}`} onClick={() => trackEvent("select_model", { product_name: product.name, product_model: product.model, cta_location: "productos_visual" })}>
              Ver modelo
            </Link>
          </article>
        ))}
      </section>
      <div className="products-information">
      <section className="products-comparison">
        <div className="container">
          <ModelComparison products={modelDisplayProducts} />
        </div>
      </section>

      <section className="section"><div className="container"><FAQSection title="Antes de elegir tu Snaefell" intro="Respuestas generales para comparar con más claridad. Para condiciones comerciales vigentes, consultá con nuestro equipo." items={generalPurchaseFaq}/></div></section>

      <section className="products-guide section">
        <div className="container products-guide__layout">
          <div>
            <h2>¿Qué modelo es para vos?</h2>
          </div>
          <div className="products-guide__options">
            <article><span>01</span><h3>Ciudad y practicidad</h3><p>Light P2 prioriza portabilidad; Bestride F1 suma una conducción compacta y dinámica.</p></article>
            <article><span>02</span><h3>Aventura y autonomía</h3><p>Mantis P6 y Antelope P5 ofrecen neumáticos Fat, doble suspensión y gran autonomía.</p></article>
            <article><span>03</span><h3>Máximo control</h3><p>Bestride Pro F2 combina tres ruedas y doble motor para una experiencia estable y potente.</p></article>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
