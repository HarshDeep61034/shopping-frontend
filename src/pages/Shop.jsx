import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { ShopContext } from "../contexts/ShopContext";
import '../styles/Shop.css';

function Shop() {
  const { products, cartItems, addToCart } = useContext(ShopContext);

  function handleClick() {
    console.log(products)
  }
  // const elements = data.map((item) => (
  //   <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
  // ));

  return (
    <>
      <Navbar page={'Shop'}/>
      <div className='shop'>
        {/* {elements} */}
      </div>
      <button onClick={handleClick}>DEBUG</button>
      <Footer />
    </>
  );
}

export default Shop;
