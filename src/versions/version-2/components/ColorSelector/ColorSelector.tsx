import type { ProductVariant } from "../../types/Product";
import "./ColorSelector.css";

export default function ColorSelector({ variants, selectedId, onChange }: { variants: ProductVariant[]; selectedId: string; onChange: (variant: ProductVariant) => void }) {
  return (
    <div className="color-selector" role="radiogroup" aria-label="Color">
      {variants.map((variant) => {
        const isSelected = selectedId === variant.id;
        return (
          <button key={variant.id} type="button" onClick={() => onChange(variant)} className={isSelected ? "selected" : ""} role="radio" aria-checked={isSelected} aria-label={`Color ${variant.color}${isSelected ? ", seleccionado" : ""}`} title={variant.color}>
            <span style={{ background: variant.colorHex }} />
          </button>
        );
      })}
    </div>
  );
}
