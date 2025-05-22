
import './App.css'
import Navbar from './Navbar'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home'
import Products from './Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeToggle from './ThemeToggle';
import useDarkMode from './UseDarkMode';
import ProductDetails from "./ProductDetails"
import {CartProvider} from "./CartContext"
import LoginForm from './LoginForm';
import Cart from './Cart';
import RegisterForm from './RegisterForm';
import ProtectedRoute from './context/ProtectedRoute'
import ImageUpload from './ImageUpload';
import Shoes from './Shoes';
import Clothes from './Clothes';
import Watches from './Watches';
function App() {
  const [isAutenticated, setIsAuthenticated  ] = useState(()=>{
        try {
            const token = localStorage.getItem("token");
            return token ? true : false;
        } catch (error) {
            console.log(error)
            return false
        }});

  return (
  <CartProvider>
  <BrowserRouter>  
        <Navbar isAutenticated={isAutenticated}  />

  <Routes>

    <Route path="/" element={ <Home />} />
    <Route path="/cart" element={<ProtectedRoute isAuthenticated={isAutenticated}><Cart /></ProtectedRoute>}/>

    <Route  element={<h1>Checkout page</h1>} />

    <Route path="/products" element={<ProtectedRoute isAuthenticated={isAutenticated}><Products /></ProtectedRoute>} />
    <Route path="/detail/:id" element ={<ProductDetails />} />
     <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<RegisterForm />} />
                    <Route path="/upload" element={<ImageUpload />} />
   <Route path="/products/shoes" element={<Shoes />} />
                    <Route path="/products/clothes" element={<Clothes />} />
   <Route path="/products/watches" element={<Watches />} />

  </Routes>
  
  </BrowserRouter>
  </CartProvider>
  )
}

export default App
