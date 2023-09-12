import { useShoppingCart } from '../../context/ShoppingCartContext';
import { CartItemInterface } from '../../interfaces/interface';
import CartItem from './CartItem';


// interface ShoppingCartProps {
//   cart: [];
// }

const ShoppingCart: React.FC = ( ) => {

  const { cart } = useShoppingCart()



  return (
    <div className='ShoppingCart'>
      {cart.length < 1 && <p>You have no items in your shopping cart</p>}
      {cart.map((item: CartItemInterface) => (
        <CartItem 
        key= {item.id} 
        item={item} 
        />
      ))}     

    </div>
  );
};

export default ShoppingCart;
