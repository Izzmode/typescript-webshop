
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  interface CartItemInterface extends Product {
    // product: Product;
    quantity: number;
  }



export type { Product, CartItemInterface }