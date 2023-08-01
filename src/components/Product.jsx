import '../styles/Product.css'
import { FaStar } from 'react-icons/fa';
function Product(props) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.substring(0, maxLength - 3) + '...';
        }
      }

const maxLength = 40; 

const truncatedTitle = truncateText(props.title, maxLength);
  return (
    <div className="product">
        <div className="product-img">
        <img  className='product-img' src={props.image} alt="lol" />
        </div> 
        <div className="details">
        <p className='title'>{truncatedTitle}</p>
        <p className='price'>{props.price}$</p>
        <p className='rating'>{props.rating.rate} <FaStar /> ({props.rating.count})</p>

        </div>
    </div>
  )
}

export default Product