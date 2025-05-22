
import Button from "./Button";
import Footer from "./Footer";
import './Home.css'
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar";


import Products from "./Products";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const username = location.state?.username;
useEffect(() => {
    if (username) {
      toast.success(`Welcome ${username}`);
    }
  }, [username]);
  return (<div className="continer-fluid">
    <div className="hero-section">
    <div className="hero-content-wrapper">
      <h1 className="hero-content">Welcome to the project</h1>
      <div className="hero-title">This is an ecommerce website  and we have <br /> products avalaible on orders</div>
      <Button title="Get Started" cssClass="get-started" className="warning" />
    </div>

  </div>
      <Products />
      <Footer/>

            <ToastContainer position="top-right"  />


</div>  


  )
}
