import { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { CartItemInterface } from '../interfaces/interface'

type ShoppingCartProviderProps = {
    children: ReactNode
}

//all I wish to have available in context
type ShoppingCartContext = {
    deleteProductFromCart: (product: CartItemInterface) => void;
    addProductInCart: (product: CartItemInterface) => void;
    addProductToCart: (product: CartItemInterface) => void;
    removeProductFromCart: (product: CartItemInterface) => void;
    cart: CartItemInterface[];
    totalQuantity: number;
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

//this is what I import when I use it in other components
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider( { children }: ShoppingCartProviderProps ) {

    //getting from local storage, and setting local storage.
    const initializeCart = () => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
        return cartFromLocalStorage;
      };
      
      const [cart, setCart] = useState<CartItemInterface[]>(initializeCart);

      useEffect(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
      }, [cart] )


      //remove, minus one item from cart
    const removeProductFromCart = (product: CartItemInterface) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex((item: CartItemInterface) => item.id === product.id);
  
        if (index !== -1) {
          if(updatedCart[index].quantity<=1) {
               // If the quantity is 1, remove the product from the cart
            updatedCart.splice(index, 1);
          } else {
            // Decrease the quantity by 1
            updatedCart[index].quantity -= 1;
            }
  
              // Update the component's cart state
             setCart(updatedCart);
  
            // Update the data in local storage with the modified array
            localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
        }
      }
    
      //adds items to cart
      const addProductToCart = (product: CartItemInterface) => {
        // Clone the existing cart array to avoid mutating it directly
        const updatedCart = [...cart];
  
        const existingProduct = updatedCart.find((item: CartItemInterface) => item.id === product.id)
        
        if (existingProduct) {
  
          existingProduct.quantity += product.quantity;
   
        } else {
          
          // Add the new product to the updated cart array
          updatedCart.push(product);
        }
        
        // Update the component's cart state
        setCart(updatedCart);
        
        // Save the updated cart to local storage
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
      };
  
      //add one product at a time in cart
      const addProductInCart = (product: CartItemInterface) => {
        // Clone the existing cart array to avoid mutating it directly
        const updatedCart = [...cart];
  
        const existingProduct = updatedCart.find((item: CartItemInterface) => item.id === product.id)!
        
  
          existingProduct.quantity += 1;
        
        // Update the component's cart state
        setCart(updatedCart);
        
        // Save the updated cart to local storage
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
      };
  
      //Remove entire product from cart
      const deleteProductFromCart = (product: CartItemInterface) => {
  
  
        const updatedCartDelete = cart.filter((item:CartItemInterface) => item.id !== product.id)
  
          setCart(updatedCartDelete)
          localStorage.setItem('shoppingCart', JSON.stringify(updatedCartDelete)); // Replace with your storage key
        
      }

    const totalQuantity = cart.reduce((total: number, product: CartItemInterface) => total + product.quantity, 0);

    return (
    <ShoppingCartContext.Provider value={{ 
        removeProductFromCart, 
        addProductInCart, 
        addProductToCart, 
        deleteProductFromCart,
        cart,
        totalQuantity}}> 
    {children} 
    </ShoppingCartContext.Provider>
    )
}