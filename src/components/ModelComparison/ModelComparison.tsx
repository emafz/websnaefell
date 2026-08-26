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
    <div className="models-section-heading"><span>Comparador</span><h2 id="comparison-title">Compará la gama Snaefell</h2></div>
    <p className="model-comparison__intro">Revisá las prestaciones principales con datos de las fichas técnicas y elegí qué modelo querés conocer en detalle.</p>
    <div className="model-comparison__scroll" tabIndex={0} onFocus={() => trackEvent("view_model_comparison", { page_path: window.location.pathname })}>
      <table><thead><tr><th scope="col">Característica</th>{products.map((product) => <th scope="col" key={product.id}>{product.name}</th>)}</tr></thead>
      <tbody>{fields.map((field) => <tr key={field[0]}><th scope="row">{field[0]}</th>{products.map((product) => <td key={product.id}>{valueFor(product, field)}</td>)}</tr>)}</tbody></table>
    </div>
  </section>;
}
