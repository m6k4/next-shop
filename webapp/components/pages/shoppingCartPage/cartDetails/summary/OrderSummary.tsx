import { useCart } from "../../../../../hooks/cart";
import Button from "../../../../common/Button";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();
  const shippingPrice = 10;

  return (
    <div className="bg-stone-100 w-full rounded-lg p-8 h-2/3 flex flex-col">
      <h2>Order Summary</h2>
      <div className="mt-8">
        {cartItems.map((item) => (
          <div className="" key={item.id}>
            <OrderSummaryItem item={item} />
          </div>
        ))}
        <div className="mt-8 flex flex-row justify-between">
          <p>
          Shipping price: 
          </p>
          <span className="font-bold">
            {shippingPrice} $
          </span>
        </div>
      </div>
      <div className="mt-8 flex flex-row justify-between border-t pt-4 border-stone-400">
        <p>
        Total
        </p>
        <span className="font-bold">
          ${ cartTotal + shippingPrice}
        </span>
      </div>
      <div className="mt-auto w-full">
        <Button type="submit">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default OrderSummary;