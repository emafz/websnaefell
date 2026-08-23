import { createContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { CartItem } from "../../types/Cart";
import { cartReducer } from "./cartReducer";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "snaefell-cart";

function loadInitialCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) as CartItem[] : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitialCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((acc, item) => acc + item.quantity, 0),
    total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (variantId) => dispatch({ type: "REMOVE_ITEM", payload: variantId }),
    updateQuantity: (variantId, quantity) => dispatch({ type: "UPDATE_QUANTITY", payload: { variantId, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
