import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const Authenticate = () => {
  const [message, setMessage] = useState('');

  // Register handler
  const handleRegister = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = event.target.elements;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'An error occurred');
    }
  };

  // Login handler
  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: email.value,
        password: password.value
      });
      setMessage('Logged in successfully');
      localStorage.setItem('authToken', res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || 'An error occurred');
    }
  };

  // Google login handler
  const handleGoogleLogin = async (response) => {
    if (response.error) {
      setMessage('Google login failed');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/google-login', {
        tokenId: response.tokenId
      });
      localStorage.setItem('authToken', res.data.token);
      setMessage('Logged in with Google');
    } catch (err) {
      setMessage('Google login failed');
    }
  };

  return (
    <Router>
      <div className="auth-container">
        <h1>Authentication</h1>
        {message && <p>{message}</p>}
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/google-login">Login with Google</Link>
        </nav>
        <Routes>
          <Route path="/register" element={
            <form onSubmit={handleRegister}>
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Register</button>
            </form>
          } />
          
          <Route path="/login" element={
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          } />

          <Route path="/google-login" element={
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default Authenticate;

