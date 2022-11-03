import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>Your cart is empty</h2>
      <p>Looks like you haven&apos;t added anything to your cart yet.</p>
      <Link className="hover:underline" href="/"> Go back to the home page </Link>
    </div>
  );
};

export default EmptyCart;