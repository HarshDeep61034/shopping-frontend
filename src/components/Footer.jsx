import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Bizaare Bazzar</h3>
                </div>
                <div>
                    <Link className="footer-links" to="/">Home</Link>
                    <Link className="footer-links" to="/Shop">Shop</Link>
                    <Link className="footer-links" to="/About">About Us</Link>
                    <Link className="footer-links" to="/Contact">Contact Us</Link>
                </div>
            </div>
            <div className="footer-bottom bottom-link">
                <p>&copy; {new Date().getFullYear()} Bizaare Bazzar. All rights reserved.</p>
                <p>
                    <Link className='bottom-link' to="/terms">Terms of Service</Link> | <Link className='bottom-link' to="/privacy">Privacy Policy</Link>
                </p>
                <h2 className='ad'>Made with ❤️ by <a className='bottom-link' href="http://Github.com/HarshDeep61034" target="_blank" rel="noopener noreferrer">Harsh Deep</a></h2>
            </div>
        </div>
    )
}

export default Footer