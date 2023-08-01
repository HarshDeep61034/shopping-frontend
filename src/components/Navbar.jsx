import "../styles/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="nav">
      <Link className="logo" to="/" ><h1>BizarreBazaar</h1></Link>
      <div className="navigation">
        <Link to="/" className={props.page == "Home" && `active`}>
          <li>HOME</li>
        </Link>
        <Link to="/Products" className={props.page == "Products" && "active"}>
          <li>PRODUCTS</li>
        </Link>
        <Link to='/About' className={props.page == "About" && "active"}>
          <li>ABOUT</li>
        </Link>
        <Link to="/Contact" className={props.page == "Contact" && "active"}>
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