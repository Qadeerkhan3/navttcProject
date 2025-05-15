
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError("Product not found");
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="pdetails" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '400px', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div className="product-info">
          <h2 style={{ textAlign: 'left' }}>{product.title}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p style={{ color: 'black', fontSize: '20px' }}>
            <strong>Price:</strong> Rs {product.price}
          </p>
        </div>
      </div>
      
    );
}

