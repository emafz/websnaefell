import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import type { Product, ProductCategory } from "../../types/Product";
import bestrideF1 from "../../assets/models/bestride-f1.webp";
import bestrideProF2 from "../../assets/models/bestride-pro-f2.webp";
import mantisP6 from "../../assets/models/mantis-p6.webp";
import lightP2 from "../../assets/models/light-p2.webp";
import antelopeP5 from "../../assets/models/antelope-p5.webp";
import ModelComparison from "../../components/ModelComparison/ModelComparison";
import SEO from "../../components/SEO/SEO";
import Icon, { type IconName } from "../../components/Icon/Icon";
import { absoluteUrl } from "../../utils/site";
import { trackEvent } from "../../utils/analytics";
import FAQSection from "../../components/FAQSection/FAQSection";
import { generalPurchaseFaq } from "../../data/faqs";
import "./Modelos.css";

const modelImages: Record<string, string> = {
  "bestride-f1": bestrideF1,
  "bestride-pro-f2": bestrideProF2,
  "mantis-p6": mantisP6,
  "light-p2": lightP2,
  "antelope-p5": antelopeP5,
};

function featureIcon(label: string): IconName {
  const text = label.toLowerCase();
  if (/\bpeso\b|carga|capacidad/.test(text)) return "weight";
  if (/neum[aá]tic|cubierta|medida|dimensi|tamaño|rodado/.test(text)) return "tire";
  if (/motor|potencia|watt/.test(text)) return "bolt";
  if (/velocid|km\/h/.test(text)) return "speed";
  if (/autonom/.test(text)) return "route";
  if (/bater|volta/.test(text)) return "battery";
  return "gauge";
}

function productUrl(product: Product) {
  return `/modelos/${product.slug}/${product.variants[0].slug}`;
}

export default function Modelos() {
  const firstIndexByCategory = new Map<ProductCategory, number>();
  products.forEach((product, index) => {
    if (!firstIndexByCategory.has(product.category)) firstIndexByCategory.set(product.category, index);
  });
  return (
    <div className="models-page">
      <SEO title="Modelos Snaefell | Bicicletas y Monopatines Eléctricos" description="Compará bicicletas y monopatines eléctricos Snaefell por potencia, autonomía y uso. Conocé cada modelo y consultá por WhatsApp." path="/modelos" structuredData={{ "@context":"https://schema.org", "@type":"ItemList", name:"Modelos Snaefell", itemListElement:products.map((product,index) => ({ "@type":"ListItem", position:index+1, name:product.name, url:absoluteUrl(`/modelos/${product.slug}`) })) }} />
      <header className="models-hero">
        <div className="container models-hero__content">
          <span className="eyebrow">Gama Snaefell</span>
          <h1>Encontrá tu<br />próximo movimiento.</h1>
          <p>
            Compará la gama Snaefell y elegí el modelo que mejor se adapta
            a tu recorrido y a tu forma de moverte.
          </p>
        </div>
      </header>

      <section className="models-catalog" id="modelos">
        <div className="container">
          <div className="models-list">
{products.map((product, index) => {
              const categoryAnchor = firstIndexByCategory.get(product.category) === index ? product.category : undefined;
              return (
                <article className="model-showcase" id={categoryAnchor} key={product.id}>
                  <Link className="model-showcase__visual" to={productUrl(product)} onClick={() => trackEvent("select_model", { product_name:product.name, product_model:product.model, cta_location:"model_card" })}>
                    <img src={modelImages[product.id] ?? product.variants[0].images[0]} alt={product.name} />
                  </Link>
                  <div className="model-showcase__content">
                    <div className="model-showcase__title">
                      <div>
                        <span>{product.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"}</span>
                        <h3>{product.name}</h3>
                      </div>
                    </div>
                    <p className="model-showcase__description">{product.shortDescription}</p>
                    <dl className="model-specs">
                      {product.features.slice(0, 4).map((feature) => (
                        <div key={feature.label}>
                          <Icon name={featureIcon(feature.label)} />
                          <dt>{feature.label}</dt>
                          <dd>{feature.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="model-showcase__footer">
                      <div className="model-colors" aria-label="Colores disponibles">
                        {product.variants.map((variant) => (
                          <i key={variant.id} title={variant.color} style={{ backgroundColor: variant.colorHex }} />
                        ))}
                        <span>{product.variants.length} {product.variants.length === 1 ? "color" : "colores"}</span>
                      </div>
                      <Link className="button button--primary" to={productUrl(product)} onClick={() => trackEvent("select_model", { product_name:product.name, product_model:product.model, cta_location:"model_card" })}>Ver modelo <ArrowRight aria-hidden="true" /></Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <ModelComparison />
        </div>
      </section>

      <section className="section"><div className="container"><FAQSection title="Antes de elegir tu Snaefell" intro="Respuestas generales para comparar con más claridad. Para condiciones comerciales vigentes, consultá con nuestro equipo." items={generalPurchaseFaq}/></div></section>

      <section className="models-guide section">
        <div className="container models-guide__layout">
          <div>
            <h2>¿Qué modelo es para vos?</h2>
          </div>
          <div className="models-guide__options">
            <article><span>01</span><h3>Ciudad y practicidad</h3><p>Light P2 prioriza portabilidad; Bestride F1 suma una conducción compacta y dinámica.</p></article>
            <article><span>02</span><h3>Aventura y autonomía</h3><p>Mantis P6 y Antelope P5 ofrecen neumáticos Fat, doble suspensión y gran autonomía.</p></article>
            <article><span>03</span><h3>Máximo control</h3><p>Bestride Pro F2 combina tres ruedas y doble motor para una experiencia estable y potente.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
