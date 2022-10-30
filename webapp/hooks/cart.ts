import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchJson } from "../lib/api";
import { Cart } from "../types";

type AddToCartParams = {
  productId: number;
  quantity: number;
};

export const useCart = (): Cart[] => {
  const query = useQuery('cartItems', (): Promise<Cart[]> => fetchJson('/api/cart'));
  return query.data;
}

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(({ productId, quantity}: AddToCartParams) =>
    fetchJson("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId,
        quantity: quantity,
      }),
    })
  );
  return {
    addToCart: async (productId, quantity) => {
      await mutation.mutateAsync({ productId, quantity});
      queryClient.invalidateQueries("cartItems");
    },
    addToCartLoading: mutation.isLoading,
    addToCartError: mutation.error,
  };
}
