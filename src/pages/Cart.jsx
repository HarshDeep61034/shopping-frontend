import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Cartitem from "../components/Cartitem";
import '../styles/Cart.css'
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { CouponCodes } from "../pages/Cuopons"

function Cart() {
  //HOOOKS
  const [total, setTotal] = useState();
  const [input, setInput] = useState();
  const [couponExist, setCouponExist] = useState(false);
  const { cartItems, removeFromCart } = useContext(ShopContext);

  useEffect(() => {
    const arr = cartItems.map((item) => item.quantity * item.price);
    let num = 0; // Initialize num to 0
    for (let i = 0; i < arr.length; i++) {
      num += arr[i];
    }
    setTotal(num);
  }, [cartItems]);

  //FUNCTIONS
  function checkout() {
    alert(`Checkout Done!! Payment Successfull of $${total}`)
  }

  function handleInput(e) {
    setInput(e.target.value)
  }

  function applyCoupon() {
    const match = CouponCodes.find((item) => item == input)
    if (match) {
      alert("Coupon Code Applied");
      setCouponExist(true);
      let totalPrice = total;
      setTotal(totalPrice-(totalPrice/10))
    }
    else {
      alert("invalid Coupon Code");
    }
  }

  //Mapping Over States to render Items Available in Cart
  const cartItemsArray = cartItems.map((item) => (
    <>
      <Cartitem removeFromCart={removeFromCart} key={item.id + "4"} id={item.id} image={item.image} title={item.title} quantity={item.quantity} price={item.price} />
      <hr className="hr-cartitem" />
    </>
  ))
  const totalNumber = parseFloat(total);
  const roundedtotal = parseFloat(totalNumber.toFixed(2));
  return (
    <>
      <Navbar cartItems={cartItems} />
      <p className="cart-heading">Your Cart</p>
      <div className="cart-page">
        <div className="cart-item-list">
          {cartItems == [] ? "EMPTY" : cartItemsArray}
        </div>
        <div className="ordersummary">
          <p className="order">Order Summary</p>
          <input onChange={handleInput} className="coupon-input" type="text" placeholder="Enter Cuopon Code here" />
          <button className="coupon-btn" onClick={applyCoupon}>Apply Coupon</button>
          { couponExist && <div className="total">
            <div>Discount</div>
            <div>-${parseFloat(roundedtotal/9).toFixed(2)}</div>
          </div>}
          <div className="total">
            <div>Total</div>
            <div>${roundedtotal}</div>
          </div>
          <button onClick={checkout} className="checkout-btn">Continue to checkout</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart