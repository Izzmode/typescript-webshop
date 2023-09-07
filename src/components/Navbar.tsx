import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ShoppingCart from './ShoppingCart/ShoppingCart';

interface NavbarProps {
  cart: any; // Change 'any' to the actual type of your cart data
  add: any;
  remove: any;
  onDelete: any;
  clearCart: any;
}

const Navbar: React.FC<NavbarProps> = ({ cart, add, remove, onDelete, clearCart }) => {
  // Showing and hiding shopping cart
  const [showCart, setShowCart] = useState(false);
  
  const totalQuantity = cart.reduce((total: any, product: any) => total + product.quantity, 0);

    // Local state to hold cart data
    const [localCart, setLocalCart] = useState(cart);

    // Update localCart whenever cart prop changes
    useEffect(() => {
      setLocalCart(cart);
    }, [cart]);


  //denna hämtar från store och uppdaterar korrekt, sparar dock ej i local storage.
  // const { totalQuantity } = useSelector((state: RootState) => state.shoppingCart);

  //hämtar data från local storage men fungerar ej vid första tilläggning
  // const fromLocalStorage = JSON.parse(localStorage.getItem('shoppingCart')! || '[]')
   // Check if fromLocalStorage is not empty and if it has a quantity property
  //  const cartQuantity = fromLocalStorage.length > 0 ? fromLocalStorage[0].quantity : 0;

  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/">
          <h1>WebShop</h1>
        </Link>
        <ul className="nav-links">
          {/* <li><NavLink to='/' className='nav-link'>Home</NavLink></li> */}
          <li>
            <NavLink to={`/products`} className="nav-link">
              Products
            </NavLink>
          </li>
          <li>
            <span
              className="nav-link nav-link-grey"
              onClick={() => setShowCart((showCart) => !showCart)}
            >
              <FaShoppingCart />
              {/* <span className="cart-quantity">{ localCart.length }</span> */}
              <span className="cart-quantity">{ totalQuantity }</span>
            </span>
            <div className={`shoppingCart-dropdown ${showCart && 'show'}`}>
              <ShoppingCart 
              cart={cart} 
              add={add} 
              remove={remove} 
              onDelete={onDelete}
              clearCart={clearCart}/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// Define RootState to provide type safety for useSelector
type RootState = {
  shoppingCart: {
    totalQuantity: number;
  };
};
