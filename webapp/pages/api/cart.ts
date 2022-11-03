import { NextApiRequest, NextApiResponse } from "next";
import { fetchJson } from "lib/api";
import { Cart } from "types";

const { NEXT_PUBLIC } = process.env;

const stripCart = (cart: any): Cart => {
  return {
    id: cart.id,
    product: {
      id: cart.product.id,
      title: cart.product.title,
      price: cart.product.price,
      pictureUrl: NEXT_PUBLIC + cart.product.picture.url,
    },
    quantity: cart.quantity,
  };
};

const handleGetCart = async (req: NextApiRequest, res: NextApiResponse): Promise<Cart[]>  => {
  const jwt = req.cookies.jwt;
  if( !jwt ) {
    res.status(401).end();
    return;
  }
  try {
    const cart = await fetchJson(`${NEXT_PUBLIC}/cart-items`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json(cart.map(stripCart));
  } catch (error) {
    res.status(401).end();
  }
};

const handlePostCart = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const jwt = req.cookies.jwt;
  if( !jwt ) {
    res.status(401).end();
    return;
  }
  const { productId, quantity } = req.body;
  try {
    const cart = await fetchJson(`${NEXT_PUBLIC}/cart-items`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: productId,
        quantity,
      }),
    });
    res.status(200).json({});
  } catch (error) {
    res.status(401).end();
  }
};

const handleDeleteCart = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const jwt = req.cookies.jwt;
  if( !jwt ) {
    res.status(401).end();
    return;
  }
  const { productId } = req.body;
  try {
    await fetchJson(`${NEXT_PUBLIC}/cart-items/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json({});
  } catch (error) {
    res.status(401).end();
  }
};

const handleCart = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (req.method) {
    case "GET":
      await handleGetCart(req, res);
      break;
    case "POST":
      await handlePostCart(req, res);
      break;
    case "DELETE":
      await handleDeleteCart(req, res);
      break;
    default:
      res.status(405).end();
      break;
  }
};



export default handleCart;