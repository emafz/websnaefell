import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { modelDisplayProducts } from "../../data/modelOrder";
import paisaje from "../../assets/home/paisaje.webp";
import urban from "../../assets/home/range-urban.webp";
import scooters from "../../assets/home/range-scooters.webp";
import offroad from "../../assets/home/range-offroad.webp";
import heroF1 from "../../assets/hero/hero-f1-1920.jpg";
import heroF2 from "../../assets/hero/hero-f2-1920.jpg";
import heroP2 from "../../assets/hero/hero-p2-1920.jpg";
import heroP5 from "../../assets/hero/hero-p5-1920.jpg";
import heroP6 from "../../assets/hero/hero-p6-1920.jpg";
import { absoluteUrl } from "../../utils/site";
import { trackEvent } from "../../utils/analytics";
import "./Productos.css";

export const productHeroById: Record<string, string> = {
  "bestride-f1": heroF1,
  "bestride-pro-f2": heroF2,
  "light-p2": heroP2,
  "antelope-p5": heroP5,
  "mantis-p6": heroP6,
};

const categoryLabel = (category: string) =>
  category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica";

export default function Productos() {
  return (
    <div className="products-concept">
      <SEO
        title="Productos Snaefell | Experiencia visual"
        description="Descubrí las bicicletas y monopatines eléctricos Snaefell mediante una experiencia visual."
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

      <header className="products-hero" style={{ backgroundImage: `url(${paisaje})` }}>
        <div className="products-hero__shade" />
        <div className="products-hero__content">
          <p>Snaefell electric</p>
          <h1>Elegí cómo<br />querés moverte.</h1>
          <a href="#productos">Explorar productos <ChevronDown aria-hidden="true" /></a>
        </div>
      </header>

      <nav className="products-index" aria-label="Índice de productos">
        {modelDisplayProducts.map((product) => <a key={product.id} href={`#${product.slug}`}>{product.name}</a>)}
      </nav>

      <main className="product-scenes" id="productos">
        {modelDisplayProducts.map((product) => (
          <article className="product-scene" id={product.slug} key={product.id} style={{ backgroundImage: `url(${productHeroById[product.id]})` }}>
            <div className="product-scene__shade" />
            <div className="product-scene__content">
              <p>{categoryLabel(product.category)}</p>
              <h2>{product.name}</h2>
              <span>{product.tagline}</span>
              <dl>
                {product.features.slice(0, 3).map((feature) => <div key={feature.label}><dd>{feature.value}</dd><dt>{feature.label}</dt></div>)}
              </dl>
              <Link to={`/productos/${product.slug}`} onClick={() => trackEvent("select_model", { product_name: product.name, product_model: product.model, cta_location: "productos_visual" })}>
                Conocer {product.model} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </main>

      <section className="products-mosaic" aria-label="Formas de moverte">
        <figure><img src={urban} alt="Movilidad eléctrica urbana Snaefell" loading="lazy" /><figcaption>Ciudad</figcaption></figure>
        <figure><img src={scooters} alt="Monopatines eléctricos Snaefell" loading="lazy" /><figcaption>Movimiento</figcaption></figure>
        <figure><img src={offroad} alt="Bicicletas eléctricas Snaefell para aventura" loading="lazy" /><figcaption>Aventura</figcaption></figure>
      </section>

      <section className="products-closing">
        <p>¿No sabés cuál elegir?</p>
        <h2>Encontrá el producto que va con vos.</h2>
        <Link to="/contacto">Hablar con un asesor <ArrowRight aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
