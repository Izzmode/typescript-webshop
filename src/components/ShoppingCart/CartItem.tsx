import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
// import { useDispatch } from 'react-redux'
// import { addToCart, removeAll, removeOne } from '../../store/features/shoppingCart/shoppingCartSlice'

interface CartItemProps {
  cart: any; // Change 'any' to the actual type of your cart data
  item: any;
  add: Function;
  remove: Function;
  onDelete: Function;
  clearCart: any;
}

const CartItem: React.FC<CartItemProps> = ({cart, item, add, remove, onDelete, clearCart }) => {
  
  const addF = () => {
    add(item)
    // dispatch(addToCart(item.product))
  }

  const removeF = () => {
    remove(item)
    // dispatch(removeOne(item.product._id))
  }

  const emptyRow = () => {
    onDelete(item)
    // dispatch(removeAll(item.product._id))
  }

  return (
    <div className='CartItem'>
      
      {/* Row */}
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
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem