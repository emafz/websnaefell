import "./QuantitySelector.css";
export default function QuantitySelector({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="quantity-selector"><button type="button" onClick={() => onChange(Math.max(1, value - 1))}>−</button><span>{value}</span><button type="button" onClick={() => onChange(value + 1)}>+</button></div>;
}
