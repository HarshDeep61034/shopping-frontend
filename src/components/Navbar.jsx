import "../styles/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

function Navbar(props){

  return (
    <div className="nav">
      <Link className="logo" to="/" ><h1>BizarreBazaar</h1></Link>
      <div className="navigation">
        <Link to="/" className={props.page == "Home" ? `active` : undefined}>
           <li>HOME</li>
        </Link>
        <Link to="/Shop" className={props.page == "Shop" ? "active" : undefined }>
          <li>SHOP</li>
        </Link>
        <Link to='/About' className={props.page == "About"  ? "active" : undefined}>
           <li>ABOUT</li>
        </Link>
        <Link to="/Contact" className={props.page == "Contact"  ? "active" : undefined} >
          <li>CONTACT US</li>
        </Link>
      </div>
      <Link to="/Cart" className="cart">
      <span className="cartcount">{props.cartItems && props.cartItems.length} </span><FaShoppingCart /> CART
      </Link>
    </div>
  )
}

export default Navbar