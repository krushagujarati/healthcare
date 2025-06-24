import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && pass) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="left">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>

          <div className="social-buttons">
            <button className="google">G</button>
            <button className="facebook">f</button>
            <button className="x">X</button>
          </div>

          <p className="or-text">or continue with</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <div className="options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="/signup">Forgot password?</a>
            </div>
            <button className="signin-btn" type="submit">Sign In</button>
          </form>

          <p className="bottom-text">
            Don’t have an account?{' '}
            <span onClick={() => navigate('/signup')}>Sign up</span>
          </p>

          {success && <div className="success-msg">✅ Login Successful!</div>}
        </div>

        <div className="right">
          <h2>HealthConnect</h2>
          <p>Your trusted healthcare companion</p>
          <ul>
            <li>✓ Find the best doctors near you</li>
            <li>✓ Book appointments online</li>
            <li>✓ Access your medical records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
