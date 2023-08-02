import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import '../styles/Productpage.css'
import { useContext } from 'react';
import { ShopContext } from '../contexts/ShopContext';


function Productpage() {
    const {id} = useParams();
    const {data, addToCart, cartItems} = useContext(ShopContext);
    const product = data[id-1];
  return (
    <>
    <Navbar cartItems={cartItems}/>
    <div className="product-page">
      <div className="product-image-div">
        <img className='product-image' src={product.image} alt="" />
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={()=>addToCart(id)} className='product-addtocart-btn'>Add to Cart</button>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Productpage