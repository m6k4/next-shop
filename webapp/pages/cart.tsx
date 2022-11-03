import Page from "components/Page";
import { useCart } from "hooks/cart";
import CartDetailsWrapper from "components/pages/shoppingCartPage/cartDetails/CartDetailsWrapper";

const CartPage = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  
  return (
    <Page title="Cart">
     {cartItems && <CartDetailsWrapper cartItems={cartItems}/> }
    </Page>
  )
}

export default CartPage;