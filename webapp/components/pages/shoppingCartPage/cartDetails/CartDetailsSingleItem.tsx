import Image from "next/image";
import {VscChromeClose} from "react-icons/vsc";

import { useRemoveFromCart } from  "../../../../hooks/cart";

const CartDetailsSingleItem = ({ item }) => {
  const { removeFromCart } = useRemoveFromCart();

  return (
    <div className="flex flex-col md:flex-row gap-4 my-8">
      <div className="w-full md:w-1/4">
        <Image src={item.product.pictureUrl} alt={item.product.title} width={120} height={80} />
      </div>
      <div className="w-full md:w-3/4">
        <h2 className="text-lg font-bold">{item.product.title}</h2>
        <p className="text-xl font-bold">$ {item.product.price}</p>
        <p className="text-xl font-bold">Quantity: {item.quantity}</p>
      </div>
      <div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xl font-bold text-gray-500 hover:text-gray-900 hover:font-bold"
        >
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
}

export default CartDetailsSingleItem;