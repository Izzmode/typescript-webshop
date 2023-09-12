import { CartItemInterface } from '../../interfaces/interface';
import CartItem from './CartItem';


interface ShoppingCartProps {
  cart: [];
  remove: Function;
  onDelete: Function;
  addInCart: Function;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ( { cart, remove, onDelete, addInCart } ) => {

  return (
    <div className='ShoppingCart'>
      {cart.length < 1 && <p>You have no items in your shopping cart</p>}
      {cart.map((item: CartItemInterface) => (
        <CartItem 
        key= {item.id} 
        item={item} 
        remove={remove} 
        onDelete={onDelete}
        addInCart={addInCart}
        />
      ))}     

    </div>
  );
};

export default ShoppingCart;
