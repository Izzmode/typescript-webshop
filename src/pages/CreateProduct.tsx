import { useState } from 'react'
import FormInput from '../components/FormInput'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {

  const navigate = useNavigate()

  interface FormData {
    title: string;
    description: string;
    price: string;
    image: string;
  }

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: '',
    image: '',
  })


   //register new product to db
   const registerProduct = async (formData: any) => {

    const product = {
      title: formData.title,
      description: formData.description,
      price: +formData.price,
      image: formData.image,
    }
  
    const res = await fetch('http://localhost:3000/products', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    }
    });
    
    if(!res.ok) throw new Error('something went wrong when creating product')
    return res.json()
  }



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    registerProduct(formData)
    .then(() => navigate('/products'))
  }

  return (
    <form noValidate onSubmit={handleSubmit} className='createForm'>
    <FormInput
    id="title"
    type="text"
    placeholder="Product name"
    value={formData.title}
    onChange={handleChange}
    />
    <FormInput
    id="description"
    type="text"
    placeholder="Description of product"
    value={formData.description}
    onChange={handleChange}
    />
    <FormInput
    id="price"
    type="number"
    placeholder="Price"
    value={formData.price}
    onChange={handleChange}
    />
    <FormInput
    id="image"
    type="text"
    placeholder="Image URL"
    value={formData.image}
    onChange={handleChange}
    />
  

    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default CreateProduct