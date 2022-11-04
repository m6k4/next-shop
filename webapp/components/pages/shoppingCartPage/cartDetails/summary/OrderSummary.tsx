import { useCart } from "hooks/cart";
import { useCheckout } from "hooks/checkout";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  const { cartItems, cartTotal } = useCart();
  const { checkout, checkoutLoading, checkoutError } = useCheckout();

  const shippingPrice = 10;

  return (
    <div className="bg-stone-100 w-full rounded-lg p-8 flex flex-col h-96">
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
        <button
          disabled={checkoutLoading}
          className="bg-green-700 hover:bg-green-900 text-white w-full rounded-lg font-bold py-2 px-4"
          onClick={() => checkout({cartItems, shipment: shippingPrice})}
        >
          {checkoutLoading ? <p>loading...</p> : <p>Checkout</p>}
        </button>
        <span>
          {checkoutError && <p>Checkout error...</p>}
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;