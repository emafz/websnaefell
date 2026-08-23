import { Link } from "react-router-dom";
import type { CartItem as CartItemType } from "../../types/Cart";
import { formatCurrency } from "../../utils/currency";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import "./CartItem.css";

export default function CartItem({ item, onRemove, onQuantityChange }: { item: CartItemType; onRemove: () => void; onQuantityChange: (value: number) => void }) {
  return <article className="cart-item"><Link to={`/tienda/${item.productSlug}/${item.variantSlug}`} className="cart-item__image"><img src={item.image} alt={item.name} /></Link><div className="cart-item__info"><span>SKU {item.sku}</span><h3>{item.name}</h3><p>{item.color}</p><button onClick={onRemove}>Eliminar</button></div><div className="cart-item__quantity"><QuantitySelector value={item.quantity} onChange={onQuantityChange} /></div><strong className="cart-item__subtotal">{formatCurrency(item.price * item.quantity)}</strong></article>;
}
