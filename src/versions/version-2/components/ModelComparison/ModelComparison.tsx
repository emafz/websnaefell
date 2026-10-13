import { Link } from "react-router-dom";
import { products } from "../../data/products";
import type { Product } from "../../types/Product";
import { trackEvent } from "../../utils/analytics";
import "./ModelComparison.css";

const fields = [
  { label: "Potencia", sourceLabels: ["Potencia del motor", "Potencia"] },
  { label: "Autonomía", sourceLabels: ["Autonomía"] },
  { label: "Velocidad máxima", sourceLabels: ["Velocidad máxima", "Velocidad"] },
  { label: "Batería", sourceLabels: ["Batería"] },
  { label: "Peso", sourceLabels: ["Peso"] },
  { label: "Carga máxima", sourceLabels: ["Carga máxima", "Capacidad de carga"] },
] as const;

function valueFor(product: typeof products[number], sourceLabels: readonly string[]) {
  return [...product.specifications, ...product.features]
    .find((spec) => sourceLabels.includes(spec.label))?.value || "Consultar";
}

export default function ModelComparison({ products: displayedProducts = products }: { products?: Product[] }) {
  return <section className="model-comparison" id="comparador" aria-labelledby="comparison-title">
    <div className="models-section-heading"><h2 id="comparison-title">Compará la gama Snaefell</h2></div>
    <p className="model-comparison__intro">Prestaciones de ficha técnica, lado a lado, para elegir con claridad.</p>
    <div className="model-comparison__scroll" role="region" aria-label="Tabla comparativa" onFocus={() => trackEvent("view_model_comparison", { page_path: window.location.pathname })}>
      <table>
        <caption>Comparación de los cinco modelos Snaefell</caption>
        <thead><tr><th scope="col">Características</th>{displayedProducts.map((product) => <th scope="col" key={product.id}><img src={product.variants[0].images[0]} alt="" /><Link to={productUrl(product)} onClick={() => trackEvent("select_model", { product_name:product.name, product_model:product.model, cta_location:"comparison_header" })}>{product.name}</Link><span>{product.category === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"}</span></th>)}</tr></thead>
        <tbody>
          {fields.map((field) => <tr key={field.label}><th scope="row">{field.label}</th>{displayedProducts.map((product) => <td key={product.id}>{valueFor(product, field.sourceLabels)}</td>)}</tr>)}
          <tr><th scope="row">Colores</th>{displayedProducts.map((product) => <td key={product.id}><div className="model-comparison__colors" role="list" aria-label={`Colores disponibles para ${product.name}`}>{product.variants.map((variant) => <span key={variant.id} role="listitem" aria-label={variant.color} title={variant.color} style={{ backgroundColor: variant.colorHex }} />)}</div></td>)}</tr>
        </tbody>
      </table>
    </div>
  </section>;
}

function productUrl(product: Product) {
  return `/modelos/${product.slug}/${product.variants[0].slug}`;
}
