import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import { CartItemInterface, Product } from './interfaces/interface'

const App = () => {

    // Retrieve existing cart data from local storage

    const initializeCart = () => {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
      return cartFromLocalStorage;
    };
    
    //ci
    const [cart, setCart] = useState(initializeCart);
    

    const removeProductFromCart = (product: Product) => {
      const updatedCart = [...cart];
      const index = updatedCart.findIndex((item: any) => item.id === product.id);

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
  
  
    const addProductToCart = (product: CartItemInterface) => {
      // Clone the existing cart array to avoid mutating it directly
      const updatedCart = [...cart];

      const existingProduct = updatedCart.find((item:any) => item.id === product.id)
      
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

    //Tar bort en product helt från korgen
    const deleteProductFromCart = (product: CartItemInterface) => {


      const updatedCartDelete = cart.filter((item:any) => item.id !== product.id)

        setCart(updatedCartDelete)
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCartDelete)); // Replace with your storage key
      
    }
    
   

   useEffect(() => {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }, [cart] )

  return (
    <div>
        <Navbar 
        cart={cart} 
        add={addProductToCart} 
        remove={removeProductFromCart} 
        onDelete={deleteProductFromCart}
        />
        <Routes>
            <Route path="/" element= { <Home />}/>
    
            <Route path="/products" element= { <Products />}/>
            <Route path="/products/add" element= { <CreateProduct />}/>

            <Route path="/products/:id" element= {<ProductDetails cart={cart} add={addProductToCart}/>}/>
            
        </Routes>
    </div>
  )
}

export default App