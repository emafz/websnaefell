import type { CartItem } from "../../types/Cart";

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { variantId: string; quantity: number } }
  | { type: "CLEAR_CART" };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const found = state.find((item) => item.variantId === action.payload.variantId);
      if (!found) return [...state, action.payload];
      return state.map((item) => item.variantId === action.payload.variantId ? { ...item, quantity: item.quantity + action.payload.quantity } : item);
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.variantId !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) => item.variantId === action.payload.variantId ? { ...item, quantity: Math.max(1, action.payload.quantity) } : item);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
