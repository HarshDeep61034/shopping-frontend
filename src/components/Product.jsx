import { Link } from 'react-router-dom';
import '../styles/Product.css';
import { FaStar } from 'react-icons/fa';

function Product(props) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + '...';
    }
  }

  function handleAddToCart(event) {
    event.stopPropagation();
    props.addToCart(props.id);
  }

  const maxLength = 40;
  const truncatedTitle = truncateText(props.title, maxLength);

  return (
    <div className="product">
      <Link to={`/Shop/Product/${props.id}`}>
        <div className="product-img-div">
          <img className="product-img" src={props.image} alt="lol" />
        </div>
        <div className="details">
          <p className="title">{truncatedTitle}</p>
          <p className="price">{props.price}$</p>
          <p className="rating">
            {props.rating.rate} <FaStar /> ({props.rating.count})
          </p>
        </div>
      </Link>
      <div className="product-btns">
        <button className="addtocart-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
        <button className="buynow-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
