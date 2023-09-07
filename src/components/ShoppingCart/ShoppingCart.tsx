import CartItem from './CartItem';


interface ShoppingCartProps {
  cart: any; // Change 'any' to the actual type of your cart data
  add: any;
  remove: any;
  onDelete: any;
  clearCart: any;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ( { cart, add, remove, onDelete, clearCart } ) => {

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
