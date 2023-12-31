
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  interface CartItemInterface extends Product {
    quantity: number;
  }


  //when creating a product
  interface FormData {
    title: string;
    description: string;
    price: string;
    image: string;
  }



export type { Product, CartItemInterface, FormData }