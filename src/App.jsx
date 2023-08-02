import './styles/App.css'
import Navbar from './components/Navbar'
import Mainsection from './components/Mainsection'
import Footer from './components/Footer'
import { useContext } from 'react';
import { ShopContext } from './contexts/ShopContext';

function App() {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
      <div className="app">
        <Navbar cartItems={cartItems} page={"Home"}/>
        <Mainsection />
        <Footer />
      </div>
    </>
  )
}

export default App
