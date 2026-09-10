import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { trackEvent } from "../../utils/analytics";
import "./ModelComparison.css";

const fields = [
  ["Categoría", (id: string) => id === "monopatin" ? "Monopatín eléctrico" : "Bicicleta eléctrica"],
  ["Potencia", "Potencia del motor"],
  ["Autonomía", "Autonomía"],
  ["Velocidad máxima", "Velocidad máxima"],
  ["Carga máxima", "Carga máxima"],
] as const;

function valueFor(product: typeof products[number], field: typeof fields[number]) {
  if (typeof field[1] === "function") return field[1](product.category);
  return product.specifications.find((spec) => spec.label === field[1])?.value || "Consultar";
}

export default function ModelComparison() {
  return <section className="model-comparison" id="comparador" aria-labelledby="comparison-title">
    <div className="models-section-heading"><h2 id="comparison-title">Compará la gama Snaefell</h2></div>
    <p className="model-comparison__intro">Prestaciones de ficha técnica, lado a lado, para elegir con claridad.</p>
    <div className="model-comparison__scroll" tabIndex={0} onFocus={() => trackEvent("view_model_comparison", { page_path: window.location.pathname })}>
      <table><thead><tr><th scope="col">Característica</th>{products.map((product) => <th scope="col" key={product.id}><Link className="model-comparison__link" to={`/modelos/${product.slug}`} onClick={() => trackEvent("select_model", { product_name:product.name, product_model:product.model, cta_location:"comparison_header" })}>{product.name}</Link></th>)}</tr></thead>
      <tbody>{fields.map((field) => <tr key={field[0]}><th scope="row">{field[0]}</th>{products.map((product) => <td key={product.id}>{valueFor(product, field)}</td>)}</tr>)}</tbody></table>
    </div>
  </section>;
}
