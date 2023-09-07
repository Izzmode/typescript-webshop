import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'

const App = () => {

  // const { cart, totalAmount } = useSelector((state: RootState) => state.shoppingCart);
  
  
  // //hämtar data från localstorage, om det inte finns någon för det till en tom array.
  // const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart')! || '[]')
  
  // //detta loggas ut, ej vid add utan vid tryck på shoppingcart
  // console.log(cartFromLocalStorage)

  // //lägger in datan som finns i localstorage in i state
  // const [cart, setCart] = useState(cartFromLocalStorage)

  // //detta loggas inte ut alls
  // console.log(cart)

  // useEffect(() => {
  //   localStorage.setItem('shoppingCart', JSON.stringify(cart));
  // }, [cart] )

  // const dispatch = useDispatch();

    // Retrieve existing cart data from local storage
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    
    const [cart, setCart] = useState(cartFromLocalStorage);

    interface Product {
      _id: any;
      price: number;
    }

    interface CartItem {
      product: Product;
      quantity: number;
    }

    const getTotalQuantity = (cart: CartItem[]) => {
      // return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const removeProductFromCart = (product: any) => {
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
  
  
    const addProductToCart = (product: any) => {
      // Clone the existing cart array to avoid mutating it directly
      const updatedCart = [...cart];

      const existingProduct = updatedCart.find((item:any) => item.id === product.id)
      
      if (existingProduct) {

        existingProduct.quantity += 1;

        // localStorage.setItem('shoppingCart', JSON.stringify(test)); // Replace with your storage key

        //kolla mer på detta
 
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
    const deleteProductFromCart = (product: any) => {


      const updatedCartDelete = cart.filter((item:any) => item.id !== product.id)

        setCart(updatedCartDelete)
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCartDelete)); // Replace with your storage key
      
    }
    
    const clearCart = () => {
      // localStorage.removeItem('shoppingCart'); // Remove the cart data from local storage
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
        clearCart={clearCart}/>
        <Routes>
            <Route path="/" element= { <Products />}/>
    
            <Route path="/products" element= { <Products />}/>

            <Route path="/products/:id" element= {<ProductDetails cart={cart} add={addProductToCart}/>}/>
            
        </Routes>
    </div>
  )
}

export default App