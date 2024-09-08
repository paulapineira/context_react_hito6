import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import PizzaProvider from './context/PizzaContext.jsx';
import CartProvider from './context/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <PizzaProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </PizzaProvider>
)

