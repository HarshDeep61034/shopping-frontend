import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import Footer from "../components/Footer"
import '../styles/Shop.css'

function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
            .catch(err=>console.error(err))
            .finally(setLoading(false))
  })

  const elements = data.map((item)=>(
    <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
  ))
  if(loading){
    return(<>Loading...</>)
  }
  return (<>
    <Navbar page={'Shop'}/>
    <div className='shop'>
      {elements}
    </div>
    <Footer />
  </>
  )
}

export default Shop