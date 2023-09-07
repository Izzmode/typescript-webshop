import { NavLink } from 'react-router-dom'
const ProductCard = ({ product }: {product: any}) => {

  return (

    <NavLink to={`/products/${product.id}` }>
    <li className='ProductCard'>
      <img src={product.image} alt={product.title} className='ProductCard-img' />
      <h2 className='productName'>{product.title}</h2>
      <p className='productPrice'>{"$" + product.price}</p>
    </li>
     </NavLink>
  )
}

export default ProductCard