import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import {ShopContext} from "./ShopContext";
import Shop from "../pages/Shop";

function ShopState() {
    const [cartItems, setCartItems] = useState([]);
    const { data, loading } = useFetchData('https://fakestoreapi.com/products');
  
    const addToCart = (id) => {
      setCartItems((prevItems) => [...prevItems, data[id]]);
    };
  
    if (loading) {
      // You can render a loading spinner or placeholder while data is being fetched
      return <div>Loading...</div>;
    }
  
    return (
      /* We are going to pass the things that we want to inject to these components using the value prop */
      /* This value prop will overwrite the default value */
      <ShopContext.Provider value={{cartItems, products: data, addToCart}}>
        <Shop />
      </ShopContext.Provider>
    );
  }
  
  export default ShopState