import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router.jsx'
import { ShopProvider } from './contexts/ShopContext.jsx'
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider >
    <Router />
    </ShopProvider >
  </React.StrictMode>,
)
