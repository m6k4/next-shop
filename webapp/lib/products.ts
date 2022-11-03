import { Product } from 'types';
import { fetchJson } from './api';

const { NEXT_PUBLIC_CMS_URL } = process.env;

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchJson(`${NEXT_PUBLIC_CMS_URL}/products`);
  return products.map(stripProduct);
}

export const getProduct = async (id: string): Promise<Product> => {
  const product = await fetchJson(`${NEXT_PUBLIC_CMS_URL}/products/${id}`);
  return stripProduct(product);
}

const stripProduct = (product: any): Product => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    pictureUrl: NEXT_PUBLIC_CMS_URL  + product.picture.url,
  };
};