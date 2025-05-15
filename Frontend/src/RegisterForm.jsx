import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
function RegisterForm() {
const [formdata, setFormData] = useState({
 username: '',
  email : '',
  password: '',
});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.email || !formdata.password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      

      const res = await axios.post('http://localhost:5000/api/register', formdata);

      alert(res.data.message);


    } catch (error) {
      console.log('something went wrong',error);
      
    }

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="username"
          value={formdata.username}
          onChange={(e) => setFormData({...formdata, username: e.target.value})}
          className="login-input"
          required
        />
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

export default RegisterForm;
