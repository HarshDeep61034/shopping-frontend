import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react"
import { ShopContext } from "../contexts/ShopContext"

function Contact() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <Navbar cartItems={cartItems} page={'Contact'}/>
    <div>This is Contact Page</div>
    <Footer />
    </>
  )
}

export default Contact