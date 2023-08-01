import './styles/App.css'
import Navbar from './components/Navbar'
import svg from './assets/addtocart.svg'
import { Link } from 'react-router-dom'
function App() {

  return (
    <>
      <div className="app">
        <Navbar page={"Home"}/>
        <div className="main">
          <div className="para">
            Welcome to <span className="bold">Bizzare Bazzar</span>, your one-stop online shop for all things weird and wonderful! Unleash your inner curiosity and discover the extraordinary in our diverse and delightfully unconventional marketplace.
          </div>
          <div className="addtocartimg">
            <img className='cart-illustration' src={svg} alt="Illustration" />
          </div>
        </div>
        <div className="moto">
          <div>Elevate Your</div>
          <div>Shopping: Unleash<span className='stroke'> Possibilities!</span></div>
        </div>
        <div className="product-btn-div">
          <Link to='/Products'> <button className='product-btn'>PRODUCTS</button>
          </Link>         </div>
      </div>
    </>
  )
}

export default App
