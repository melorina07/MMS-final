import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import {  useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/v2/login', { email, password },
    {
      headers: {
        
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data);
       // navigate("/Home2")
      })
      .catch(err => console.log(err));
  };

  return (
    <form className='a' onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
