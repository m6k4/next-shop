import { Cart } from "../../types";
import Image from 'next/image';

type CartDetailsProps = {
  cartItems: Cart[]
}

const CartDetails = ({ cartItems }: CartDetailsProps) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row gap-4 my-4">
          <div className="w-full md:w-1/4">
            <Image src={item.product.pictureUrl} alt={item.product.title} width={220} height={140} />
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-lg font-bold">{item.product.title}</h2>
            <p className="text-xl font-bold">$ {item.product.price}</p>
            <p className="text-xl font-bold">Quantity: {item.quantity}</p>
          </div>
      </div>
      ))}
    </div>
  );
}

export default CartDetails;
