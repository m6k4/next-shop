import { useMutation, useQueryClient } from "react-query";
import { loadStripe } from '@stripe/stripe-js';
import { fetchJson } from "lib/api";
import { Cart } from "types";


const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

type CheckoutParams = {
  cartItems: Cart[];
  shipment: number;
};

export const useCheckout = () => {
  const mutation = useMutation(({ cartItems, shipment}: CheckoutParams) =>
    fetchJson('/api/checkout', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems,
        shipment
      }),
    }));
  return {
    checkout: async ({ cartItems, shipment }: CheckoutParams) => {
      console.log('TEST')
      try {
        const session = await mutation.mutateAsync({ cartItems, shipment });
        const stripePromise = loadStripe(PUBLISHABLE_KEY);
        const stripe = await stripePromise;
        console.log(session)
        await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        return true;
      } catch (err) {
        return false;
      }
    },
    checkoutLoading: mutation.isLoading,
    checkoutError: mutation.error,
  };
}
