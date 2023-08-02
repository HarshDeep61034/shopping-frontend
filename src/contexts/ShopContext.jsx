import { createContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});



function ShopProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const { data, loading } = useFetchData('https://fakestoreapi.com/products');

    const addToCart = (id) => {
      const product = data[id-1]
      const existingProduct = cartItems.find((item) => item.id === product.id);
  
      if (existingProduct) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };

    const removeFromCart = (id) => {
      setCartItems((prevItems) => {
        return prevItems.filter((item) => item.id !== id);
      });
    };
    
    if (loading) {
      // You can render a loading spinner or placeholder while data is being fetched
      return <div>Loading...</div>;
    }
  
    return (
      /* We are going to pass the things that we want to inject to these components using the value prop */
      /* This value prop will overwrite the default value */
      <ShopContext.Provider value={{cartItems, data, addToCart, removeFromCart}}>
        {children}
      </ShopContext.Provider>
    );
  };

  export {ShopContext, ShopProvider};
  
