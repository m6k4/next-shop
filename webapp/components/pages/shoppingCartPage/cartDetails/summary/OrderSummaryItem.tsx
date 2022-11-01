const OrderSummaryItem = ({ item }) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-l "> {item.quantity} x {item.product.title}</p>
      <p className="text-m font-bold">$ {item.product.price * item.quantity}</p>
    </div>
  );
}

export default OrderSummaryItem;