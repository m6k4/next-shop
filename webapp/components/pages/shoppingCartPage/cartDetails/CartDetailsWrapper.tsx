import { Cart } from "../../../../types";
// import Image from 'next/image';
import CartDetailsSingleItem from "./CartDetailsSingleItem";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./summary/OrderSummary";

type CartDetailsProps = {
  cartItems: Cart[]
}

const CartDetailsWrapper = ({ cartItems }: CartDetailsProps) => {
  
  return (
    <div className="py-24 px-14">
      <h1 className="text-3xl font-bold text-gray-800 uppercase mb-24">Shopping Cart</h1>
      <div className="flex gap-24 flex-col sm:flex-row">
        <div className="w-2/3">
          { !cartItems.length && <EmptyCart /> }
          {cartItems.map((item) => (
            <div key={item.id} className="border-t border-zinc-200 w-full">
              <CartDetailsSingleItem item={item} />
          </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between w-1/3">
          { cartItems.length && <OrderSummary /> }
        </div>
      </div>
    </div>
  );
}

export default CartDetailsWrapper;
