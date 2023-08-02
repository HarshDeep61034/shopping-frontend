import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
function About() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <Navbar cartItems={cartItems} page={'About'} />
    <div>This is About Page</div>
    <Footer />
    </>
  )
}

export default About