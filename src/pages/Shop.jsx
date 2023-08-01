import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import '../styles/Shop.css'

function Shop() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
            .catch(err=>console.error(err));
  })

  const elements = data.map((item)=>(
    <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
  ))
  return (<>
    <Navbar page={'Shop'}/>
    <div className='shop'>
      {elements}
    </div>
  </>
  )
}

export default Shop