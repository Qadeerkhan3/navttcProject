
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeToggle from './ThemeToggle';
import useDarkMode from './UseDarkMode';
import ProductDetails from "./ProductDetails"
import {CartProvider} from "./CartContext"
import LoginForm from './LoginForm';
import Cart from './Cart';
import RegisterForm from './RegisterForm';
function App() {
  return (
  <CartProvider>
  <BrowserRouter>
  <Navbar />
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cart" element={<Cart />} />

    <Route path="/checkout" element={<h1>Checkout page</h1>} />

    <Route path="/cart" element={<Cart />} />

    <Route path="/product" element={<h1>Product page</h1>} />
    <Route path="/detail/:id" element ={<ProductDetails />} />
     <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />


  </Routes>
  
  </BrowserRouter>
  </CartProvider>
  )
}

export default App
