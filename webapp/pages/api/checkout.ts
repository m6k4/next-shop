import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { Cart } from "types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

const handlePostCheckout = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const jwt = req.cookies.jwt;
  if( !jwt ) {
    res.status(401).end();
    return;
  }
  const { cartItems, shipment } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map((item: Cart) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.title,
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
      })).concat({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
          },
          unit_amount: shipment * 100,
        },
        quantity: 1,
      }),
      
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout/success',
      cancel_url: 'http://localhost:300/checkout/error',
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(401).end();
  }
}

export default handlePostCheckout;