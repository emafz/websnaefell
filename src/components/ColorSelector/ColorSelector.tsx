import type { ProductVariant } from "../../types/Product";
import "./ColorSelector.css";

export default function ColorSelector({ variants, selectedId, onChange }: { variants: ProductVariant[]; selectedId: string; onChange: (variant: ProductVariant) => void }) {
  return (
    <div className="color-selector">
      {variants.map((variant) => (
        <button key={variant.id} type="button" onClick={() => onChange(variant)} className={selectedId === variant.id ? "selected" : ""} aria-label={`Color ${variant.color}`} title={variant.color}>
          <span style={{ background: variant.colorHex }} />
        </button>
      ))}
    </div>
  );
}
