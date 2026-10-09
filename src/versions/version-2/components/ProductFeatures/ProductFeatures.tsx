import type { ProductFeature } from "../../types/Product";
import "./ProductFeatures.css";
export default function ProductFeatures({ features }: { features: ProductFeature[] }) {
  return <div className="feature-grid">{features.map((feature) => <div key={feature.label}><strong>{feature.value}</strong><span>{feature.label}</span></div>)}</div>;
}
