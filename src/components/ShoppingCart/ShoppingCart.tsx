import { CartItemInterface } from '../../interfaces/interface';
import CartItem from './CartItem';


interface ShoppingCartProps {
  cart: [];
  add: Function;
  remove: Function;
  onDelete: Function;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ( { cart, add, remove, onDelete } ) => {

  return (
    <div className='ShoppingCart'>
      {cart.length < 1 && <p>You have no items in your shopping cart</p>}
      {cart.map((item: CartItemInterface) => (
        <CartItem 
        key= {item.id} 
        item={item} 
        add={add} 
        remove={remove} 
        onDelete={onDelete}
        />
      ))}     

    </div>
  );
};

export default ShoppingCart;
