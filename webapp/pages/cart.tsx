import CartDetails from "../components/ShoppingCart/CartDetails";
import Page from "../components/Page";
import { useCart } from "../hooks/cart";
import { Cart } from "../types";

const CartPage = () => {
  const cartItems: Cart[] = useCart();
  
  return (
    <Page title="Cart">
     {cartItems && <CartDetails cartItems={cartItems}/> }
    </Page>
  )
}

export default CartPage;