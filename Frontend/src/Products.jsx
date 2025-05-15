import React from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";


import { useState, useEffect } from 'react'

import axios from 'axios';

import { useCart } from './CartContext';
const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
]
export default function Products() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [selectCategory, setSelectCategory] = useState("All")
    const [error, setError] = useState(null);

    const {addToCart} = useCart();


    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
            const product = response.data;
            setData(product)
            console.log(product);
            setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false)
            }
        }
        fetchData();
    
    },[]);

    function handleCart(product){
        addToCart(product);
        navigate('/cart');
    }
    


    const filteredProduct = selectCategory === "All"
  ? data
  : data.filter(product =>
      product.category.toLowerCase().includes(selectCategory.toLowerCase())
    );

  return (
    <div className='product-section'>
        <h1 className='text-align:"center"'>List of products</h1>


        <div style={{display:"flex", gap:"12px", marginLeft:"23px"}}>{categories.map((cat)=>(
            <button className='rounded' onClick={()=> setSelectCategory(cat)} style={{border:"none", padding:"6px", marginTop:"22px", background : selectCategory === cat ? 'black': '', color:selectCategory === cat ? 'white' :''}}>
                {cat}
            </button>
        ))}</div>

        {loading ? <div style={{}}>Loading products ....</div> : 
        
        error ? <div>{error}</div> : filteredProduct.length === 0 ? <div>No product found</div> :

        <div className='mx-auto d-flex text-center justify-content-center' style={{display:"flex", flexWrap:"wrap", gap:"15px", marginTop:"23px"}}>{
            filteredProduct.map((product)=>(
            <div className="card" style={{width:"15rem", height:"auto"}}>
  <img src={product.image} className="card-img-top img" style={{height:"150px"}} alt={product.id} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="fs-5 text-success">RS {product.price}</p>
    <button className='btn btn-warning rounded' onClick={() => handleCart(product)}>Add to Cart</button>
  </div>
</div>
        ))
     } </div>
        
        }
    </div>
  )
}
