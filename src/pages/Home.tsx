import { NavLink } from 'react-router-dom'

const Home = () => {


  return (
    <div> <h1>Bmerketo CMS</h1>
    {<p><NavLink to='/products' className='nav-link'>Go to products</NavLink></p>}
    
    </div>

  )
}

export default Home