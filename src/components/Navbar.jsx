import "../styles/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link className="logo" to="/" ><h1>BizarreBazaar</h1></Link>
      <div className="navigation">
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to='/About'>
          <li>ABOUT</li>
        </Link>
        <Link to="/Contact">
          <li>CONTACT US</li>
        </Link>
      </div>
      <Link to="/Cart" className="cart">
          <FaShoppingCart /> CART
      </Link>
    </div>
  )
}

export default Navbar