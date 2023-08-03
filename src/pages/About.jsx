import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import about from "../assets/About.jpg"
function About() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
    <Navbar cartItems={cartItems} page={'About'} />
    <div className="product-page">
      <div className="div">
        <img className="product-image" src={about} alt="contact-img" />
      </div>
      <div className="product-image-div">
        <p>Welcome to Bizaare Bazzar! We are not your average ecommerce platform. At Bizaare Bazzar, we celebrate the unconventional, the eccentric, and the extraordinary. Our curated collection of products is a testament to the vibrant creativity that exists in the world, and we take pride in providing a space where artists, creators, and innovators can showcase their exceptional creations. From one-of-a-kind artworks to whimsical gadgets, our platform is a treasure trove of unique finds that cater to the bold and adventurous souls who seek to stand out from the crowd. Embrace the bizarre, explore the extraordinary, and join us on a journey to discover the unexpected wonders that Bizaare Bazzar has to offer.</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About