import "../styles/Navbar.css"
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="nav">
        <div className="logo"><h1>NavBar</h1></div>
        <div className="navigation">
            
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            
        </div>
        <div className="cart">
            <FaShoppingCart /> CART
        </div>
    </div>
  )
}

export default Navbar