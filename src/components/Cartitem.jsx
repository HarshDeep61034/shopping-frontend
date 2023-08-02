import '../styles/Cartitem.css'
function Cartitem(props) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.substring(0, maxLength - 3) + '...';
        }
      }

const maxLength = 25; 

const truncatedTitle = truncateText(props.title, maxLength);
  return (
    <div className="cart-item">
        <div className="img-cart-item">
            <img className='item-img' src={props.image} alt="item" />
        </div>
        <div className="info">
            <p className='cart-item-title'>{truncatedTitle}</p>
            <p className='cart-item-quantity'>Quantity: {props.quantity}</p>
            <p className='cart-item-price'>${props.price}</p>
        </div>
        <div className="remove-btn" onClick={()=>props.removeFromCart(props.id)}>Remove</div>
    </div>
  )
}

export default Cartitem