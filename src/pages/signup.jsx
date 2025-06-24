import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Signup = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="left">
          <h2>Create Account</h2>
          <p>Sign up to get started</p>

          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Create Password" required />
            <button className="signin-btn" type="submit">Sign Up</button>
          </form>

          <p className="bottom-text">
            Already have an account?{' '}
            <span onClick={() => navigate('/')}>Sign in</span>
          </p>

          {success && <div className="success-msg">✅ Signup Successful!</div>}
        </div>

        <div className="right signup-theme">
          <h2>Welcome to HealthConnect</h2>
          <p>Join and take control of your health today</p>
          <ul>
            <li>✓ Book online consultations</li>
            <li>✓ Access reports anytime</li>
            <li>✓ 24x7 support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
