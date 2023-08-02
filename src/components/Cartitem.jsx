function Cartitem(props) {
  return (
    <div className="cart-item">
        <div className="img-cart-item">
            <img src={props.image} alt="item" />
        </div>
        <div className="info">
            <h3>{props.title}</h3>
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.price}</p>
        </div>
        <div className="remove-btn"></div>
    </div>
  )
}

export default Cartitem