import React, { useState } from 'react';
import './Login.css';  // We will style it later

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for handling login (e.g., Firebase Authentication)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <p> or </p>

        <button type="submit">Login</button>
      
        <button type="submit">Create and Account</button>
        
      </form>
      <p>Don't have an account? <a href="#signup">Sign up</a></p>
    </div>
  );
}

export default Login;
