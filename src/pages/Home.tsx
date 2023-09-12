import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'


const Home: React.FC = () => {

const style = { color: "rgba(0, 0, 0, 0.784)", fontSize: "4rem", marginTop: "3rem"}


  return (
    <>
    <h1 className='homeh1'>Welcome</h1>
    <div className='home-container'>
    {<div className='section-one'><NavLink to='/products' className='nav-link'>
    <p>Shop products</p>
    <FaShoppingCart style={style}/></NavLink>
    </div>}
    {<div className='section-two'><NavLink to='/products/add' className='nav-link'>
    <p>Create new product</p>
    <MdAddCircle style={style}/></NavLink>
    </div>}
    
    </div>
    </>

  )
}

export default Home