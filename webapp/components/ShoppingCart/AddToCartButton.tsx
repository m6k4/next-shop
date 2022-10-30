import { useRef, useState } from "react";
import { useAddToCart } from "../../hooks/cart";
import CounterInput from "../common/CounterInput";

const AddToCartButton = ({ product }) => {
  const { addToCart, addToCartLoading, addToCartError }= useAddToCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex gap-4 mt-4 items-center">
        <CounterInput value={quantity} setValue={setQuantity} />
        <button
          disabled={addToCartLoading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product.id, quantity)}
        >
          Add to cart
        </button>
        { addToCartLoading && <p>Adding to cart...</p> }
      </div>
    { addToCartError && <p className="text-red-500 pb-4">Error adding to cart</p> }
    </>
  );
}

export default AddToCartButton;