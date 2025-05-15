import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function LoginForm() {
  const navigate = useNavigate();
const [formdata, setFormData] = useState({
  email : '',
  password: '',
});

  const handleSubmit = async(e) => {

    e.preventDefault();

    if (!formdata.email || !formdata.password) {
      setError('Please enter both username and password.');
      return;
    }

    
        try {
          
    
          const res = await axios.post('http://localhost:5000/api/login', formdata);
    
          alert(res.data.message);

          navigate('/')
    
        } catch (error) {
         console.log('something went wrong', error);

          if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred");
      }
          
        }

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="email"
          value={formdata.email}
          onChange={(e) => setFormData({...formdata, email: e.target.value})}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) => setFormData({...formdata, password: e.target.value})}
          className="login-input"
          required
        />
        <button type="submit" className="btn login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
