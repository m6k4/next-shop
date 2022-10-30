export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  pictureUrl?: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Cart {
  id: number;
  product: Product;
  quantity: number;
}