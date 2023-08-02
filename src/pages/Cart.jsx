import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

function Cart() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <Navbar cartItems={cartItems} />
    <div>This is Cart Page</div>
    <Footer />
    </>
    )
}

export default Cart