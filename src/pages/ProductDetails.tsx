import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md"


//props from app.tsx to add product to cart
interface ProductDetailsProps {
  cart: any; 
  add: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({cart, add }) => {

  const { id } = useParams();
  const [data, setData] = useState<any>(null)
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
  
         fetch('http://localhost:3000/products/' + id)
         .then ( res => {
             if(!res.ok){
                 throw Error('Could not fetch the data')
             }
 
             return res.json()
         })
         .then(data => {
           setData(data)
 
         })
         .catch(err => {
          console.log(err)
             
         })
 
 
     }, [])
     //id?
  

  if (!data) {
    return <div>Loading...</div>;
  }


  const addProductToCart = () => {
    const productToAdd = { ...data, quantity}
    add(productToAdd)
    setQuantity(1); 
  };



  return (
    <div className='product-details'>

      <div className='product-detail-top'>
      
        <img src={data.image} alt="" width={501} height={430} />

        <div className='product-description'>
          <p><i>Product name:</i></p>
          <h4>{data.title}</h4>
          <hr></hr>
          <p><i>Product description:</i></p>
          <h4 className='description'>{data.description}</h4>
          <hr></hr>
          <p><i>Product price:</i></p>
          <h4 className='price'>{'$' + data.price}</h4>
          <hr></hr>
         

        </div>

      </div>
      <form className='quantity-form' onSubmit={e => e.preventDefault()}>

        <div>
          <input type="button" value="-" className='plus'  onClick={() => setQuantity(quantity - 1)}/>
          <input type="number" className='qty-text' value={quantity}  onChange={(e) => setQuantity(parseInt(e.target.value))}/>
          <input type="button" value="+" className='plus'  onClick={() => setQuantity(quantity + 1)} />
        </div>
        <button type='submit' className='addTo-cart-btn' onClick={addProductToCart}>Add to Cart<MdOutlineAddShoppingCart className='shopping-cart-icon' /></button>
        </form>
      </div>

  )
}
export default ProductDetails