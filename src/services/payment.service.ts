export interface PaymentPreferenceResponse {
  preferenceId: string;
  checkoutUrl: string;
}

export async function createPaymentPreference(): Promise<PaymentPreferenceResponse> {
  throw new Error("Integración de pago pendiente: crear la preferencia desde un backend seguro.");
}
