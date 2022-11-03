import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchJson } from "lib/api";
import { Cart } from "types";

type AddToCartParams = {
  productId: number;
  quantity: number;
};
;
export const useCart = (): { cartItems: Cart[], cartTotal: number }  => {
  const query = useQuery('cartItems', (): Promise<Cart[]> => fetchJson('/api/cart'));
  const cartTotal = query.data?.reduce((acc, item) => acc + item.product.price, 0) ?? 0;

  return {
    cartItems: query.data, 
    cartTotal
  }
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

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((cartProductId: number) =>
    fetchJson("api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: cartProductId,
      }),
    })
  );
  return {
    removeFromCart: async (cartProductId) => {
      await mutation.mutateAsync(cartProductId);
      queryClient.invalidateQueries("cartItems");
    },
    removeFromCartLoading: mutation.isLoading,
    removeFromCartError: mutation.error,
  };
}


