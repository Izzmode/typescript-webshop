import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

interface CartItemProps {
  item: any;
  add: Function;
  remove: Function;
  onDelete: Function;
  clearCart: Function;
}

const CartItem: React.FC<CartItemProps> = ({ item, add, remove, onDelete, clearCart }) => {
  
  const addF = () => {
    add(item)
  }

  const removeF = () => {
    remove(item)
  }

  const emptyRow = () => {
    onDelete(item)
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
            <hr />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem