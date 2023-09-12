import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { Product, CartItemInterface } from '../interfaces/interface'

const Products = () => {

  const [data, setData] = useState<Product[]>([])

 useEffect(() => {
  

        fetch('http://localhost:3000/products/')
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


  return (
    <div className='Products'>

      <h1 className="productsTitle">Products</h1>
      <p className='productsSubtitle'>Click on any product for more details</p>
      <ul className='ProductCards-container'>
   
      
      { data && data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          )) }

      </ul>
    </div>
  )
}

export default Products