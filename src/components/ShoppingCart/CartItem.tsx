import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import { CartItemInterface } from '../../interfaces/interface'
import { useShoppingCart } from '../../context/ShoppingCartContext';

interface CartItemProps {
  item: CartItemInterface;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {

  //functions from my context
  const { removeProductFromCart, addProductInCart, deleteProductFromCart } = useShoppingCart()
  
  const addF = () => {
    addProductInCart(item)
  }

  const removeF = () => {
    removeProductFromCart(item)
  }

  const emptyRow = () => {
    deleteProductFromCart(item)
  }

  return (
    <div className='CartItem'>
            <div className='row'>
        <div className='row-left'>
          <img src={item.image} alt={item.title} className='item-img' />
          <p className='item-name'>{item.title}</p>
        </div>
        <div className='row-right'>
          <p>{item.quantity} x ${item.price},00</p>
          <div className="buttons">
            <button className="cart-btn clear" onClick={emptyRow}><FaTrash /></button>
            <button className="cart-btn" onClick={removeF}><FaMinus /></button>
            <button className="cart-btn" onClick={addF}><FaPlus /></button>
            <hr />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem