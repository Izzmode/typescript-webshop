import { Routes, Route } from 'react-router-dom'
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

const App = () => {

  return (
    <div>
      <ShoppingCartProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element= { <Home />}/>
            <Route path="/products" element= { <Products />}/>
            <Route path="/products/add" element= { <CreateProduct />}/>
            <Route path="/products/:id" element= {<ProductDetails/>}/>
        </Routes>
        </ShoppingCartProvider>
    </div>
  )
}

export default App