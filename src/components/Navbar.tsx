import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { Product, CartItemInterface } from '../interfaces/interface';


interface NavbarProps {
  cart: []; 
  remove: Function;
  onDelete: Function;
  addInCart: Function;
}

const Navbar: React.FC<NavbarProps> = ({ cart, remove, onDelete, addInCart }) => {
  // Showing and hiding shopping cart
  const [showCart, setShowCart] = useState(false);
  
  const totalQuantity = cart.reduce((total: number, product: CartItemInterface) => total + product.quantity, 0);

    // Local state to hold cart data
    const [localCart, setLocalCart] = useState(cart);

    // Update localCart whenever cart prop changes
    useEffect(() => {
      setLocalCart(cart);
    }, [cart]);

  return (
    <div className="Navbar">
      <div className="container">
        <Link to="/">
          <h1>WebShop</h1>
        </Link>
        <ul className="nav-links">
          <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
          <li>
            <NavLink to={`/products`} className="nav-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to={`/products/add`} className="nav-link">
              Create product
            </NavLink>
          </li>
          <li>
            <span
              className="nav-link nav-link-grey"
              onClick={() => setShowCart((showCart) => !showCart)}
            >
              <FaShoppingCart />
              <span className="cart-quantity">{ totalQuantity }</span>
            </span>
            <div className={`shoppingCart-dropdown ${showCart && 'show'}`}>
              <ShoppingCart 
              cart={cart} 
              remove={remove} 
              onDelete={onDelete}
              addInCart={addInCart}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;