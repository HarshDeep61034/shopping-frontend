import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react"
import { ShopContext } from "../contexts/ShopContext"
import myimage from "../assets/contact-img.jpg"

function Contact() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <Navbar cartItems={cartItems} page={'Contact'}/>
    <div className="product-page">
      <div className="div">
        <img className="product-image" src={myimage} alt="contact-img" />
      </div>
      <div className="product-info">
        <form>
          <input type="text" className="coupon-input" placeholder="Your Name" />
          <input type="email" className="coupon-input" placeholder="Email Id" />
          <textarea name="reason" id="reason" cols="44" rows="10" style={{padding: 10,}} placeholder="Reason for Contacting!"></textarea>
          <button type="button" className="coupon-btn">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact