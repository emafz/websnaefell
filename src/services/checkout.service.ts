import type { OrderPayload } from "../types/Order";

export async function createOrder(payload: OrderPayload) {
  // TODO: reemplazar por POST real a tu backend.
  await new Promise((resolve) => setTimeout(resolve, 650));
  return {
    id: `SNA-${Date.now()}`,
    status: "pending" as const,
    payload,
  };
}
