import { Link } from "react-router-dom";
import { products } from "../../data/products";
import type { Product } from "../../types/Product";
import bestrideF1 from "../../assets/models/bestride-f1.png";
import bestrideProF2 from "../../assets/models/bestride-pro-f2.png";
import mantisP6 from "../../assets/models/mantis-p6.png";
import lightP2 from "../../assets/models/light-p2.png";
import antelopeP5 from "../../assets/models/antelope-p5.png";
import "./Modelos.css";

const modelImages: Record<string, string> = {
  "bestride-f1": bestrideF1,
  "bestride-pro-f2": bestrideProF2,
  "mantis-p6": mantisP6,
  "light-p2": lightP2,
  "antelope-p5": antelopeP5,
};

function FeatureIcon({ index }: { index: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
      {index === 0 && <><path d="M18 2 7 17h8l-1 13 11-16h-8l1-12Z" /><circle cx="16" cy="16" r="14" /></>}
      {index === 1 && <><path d="M5 23a12 12 0 1 1 22 0" /><path d="m16 18 7-7M7 23h18" /><circle cx="16" cy="18" r="2" /></>}
      {index === 2 && <><path d="M5 9h20v15H5zM25 13h3v7h-3" /><path d="m10 18 4-5v4h7l-4 5v-4h-7Z" /></>}
      {index === 3 && <><path d="M6 24V10h20v14H6ZM10 7h12M11 14h10M11 19h7" /></>}
    </svg>
  );
}

function productUrl(product: Product) {
  return `/tienda/${product.slug}/${product.variants[0].slug}`;
}

export default function Modelos() {
  return (
    <main className="models-page">
      <header className="models-hero">
        <div className="container models-hero__content">
          <span className="eyebrow">Gama Snaefell</span>
          <h1>Encontrá tu<br />próximo movimiento.</h1>
          <p>
            Compará nuestra línea de movilidad eléctrica y elegí el modelo que mejor
            acompaña tu ritmo, tu recorrido y tu forma de moverte.
          </p>
        </div>
      </header>

      <section className="models-catalog" id="modelos">
        <div className="container">
          <div className="models-list">
            {products.map((product) => {
              return (
                <article className="model-showcase" id={product.category} key={product.id}>
                  <Link className="model-showcase__visual" to={productUrl(product)}>
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
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={feature.label}>
                          <FeatureIcon index={featureIndex} />
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
                      <Link className="button button--primary" to={productUrl(product)}>Ver producto <span>→</span></Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="models-guide section">
        <div className="container models-guide__layout">
          <div>
            <span className="eyebrow">Guía rápida</span>
            <h2>¿Qué modelo es para vos?</h2>
          </div>
          <div className="models-guide__options">
            <article><span>01</span><h3>Ciudad y practicidad</h3><p>Light P2 prioriza portabilidad; Bestride F1 suma una conducción compacta y dinámica.</p></article>
            <article><span>02</span><h3>Aventura y autonomía</h3><p>Mantis P6 y Antelope P5 ofrecen neumáticos Fat, doble suspensión y gran autonomía.</p></article>
            <article><span>03</span><h3>Máximo control</h3><p>Bestride Pro F2 combina tres ruedas y doble motor para una experiencia estable y potente.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
