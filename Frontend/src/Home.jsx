import Button from "./Button";
import Footer from "./Footer";
import './Home.css'


import Products from "./Products";

export default function Home() {
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


</div>  


  )
}
