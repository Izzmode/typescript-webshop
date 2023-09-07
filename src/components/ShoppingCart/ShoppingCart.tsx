import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, addToCart, removeOne } from '../../store/features/shoppingCart/shoppingCartSlice';
import CartItem from './CartItem';
import { useState } from 'react'
// import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ShoppingCartProps {
  cart: any; // Change 'any' to the actual type of your cart data
  add: any;
  remove: any;
  onDelete: any;
  clearCart: any;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ( { cart, add, remove, onDelete, clearCart } ) => {

  const dispatch = useDispatch();

//   // Retrieve existing cart data from local storage
//   const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  
//   const [cart, setCart] = useState(cartFromLocalStorage);

//   const addProductToCart = (product: any) => {
//     // Clone the existing cart array to avoid mutating it directly
//     const updatedCart = [...cart];
    
//     // Add the new product to the updated cart array
//     updatedCart.push(product);
    
//     // Update the component's cart state
//     setCart(updatedCart);
    
//     // Save the updated cart to local storage
//     localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
//   };

//  useEffect(() => {
//     localStorage.setItem('shoppingCart', JSON.stringify(cart));
//   }, [cart] )


  ////HÄRIFRÅN UPP SENASTE


  // let existingData: any[] = []

  //   const cartLocalStorageJSON = localStorage.getItem('shoppingCart');
  
  //   if(cartLocalStorageJSON) {
  //     try {
  //       existingData = JSON.parse(cartLocalStorageJSON);
  
  //       if (!Array.isArray(existingData)) {
  //         existingData = [];
  //       }
  //     }  catch (error) {
  //       // Handle parsing errors, or initialize as an empty array
  //       existingData = [];
  //     }
  //   }

  // const dispatch = useDispatch();

  // //hämtar data från localstorage, om det inte finns någon för det till en tom array.
  // const cartFromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart')! || '[]')

  

  // //lägger in datan som finns i localstorage in i state
  // const [cart, setCart] = useState(cartFromLocalStorage)

  // const updatedData = [...existingData, cart];

  // // localStorage.setItem('shoppingCart', JSON.stringify(updatedData));

  // //original code
  // // const { cart, totalAmount } = useSelector((state: RootState) => state.shoppingCart);
  
  // //detta loggas ut, ej vid add utan vid tryck på shoppingcart
  // // console.log(cartFromLocalStorage)

  // //detta loggas inte ut alls
  // console.log(cart)
  // //second code with seperat cart and totalAmount
  // // const { totalAmount } = useSelector((state: RootState) => state.shoppingCart)
  // // const [cart, setCart] = useLocalStorage('shoppingCart', (state: RootState) => state.shoppingCart);

 

  return (
    <div className='ShoppingCart'>
      {cart.length < 1 && <p>You have no items in your shopping cart</p>}
      {cart.map((item: any) => (
        <CartItem 
        key= {item.id} 
        item={item} 
        cart={cart} 
        add={add} 
        remove={remove} 
        onDelete={onDelete}
        clearCart={clearCart}/>
      ))}
      <div className='total'>
        <p className='total-price'>
          {/* Total amount:<span className='bold'> ${ totalAmount }</span> */}
        </p>
        <div className='buttons'>
          {/* //detta gjorde så inget sparades till local storage tbd */}
          {/* <button className='cart-btn clear' onClick={localStorage.removeItem('shoppingCart')!}> */}
            {/* Clear Cart */}
          {/* </button> */}
      
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

// Define RootState to provide type safety for useSelector
type RootState = {
  shoppingCart: {
    cart: any[]; // Replace with your actual cart item type
    totalAmount: number;
  };
};
