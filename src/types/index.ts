export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}