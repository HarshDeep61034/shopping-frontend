import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { ShopContext } from "../contexts/ShopContext";
import '../styles/Shop.css';

function Shop() {
  const {cartItems, data, addToCart} = useContext(ShopContext);
  const elements = data.map((item) => (
    <Product addToCart={addToCart} key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
  ));

  return (
    <>
      <Navbar cartItems={cartItems} page={'Shop'}/>
      <div className='shop'>
        {elements}
      </div>
      <Footer />
    </>
  );
}

export default Shop;
