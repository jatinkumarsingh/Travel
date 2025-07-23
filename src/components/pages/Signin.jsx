import React, { useState } from 'react';
import './Signin.css';
import { auth, googleProvider, facebookProvider } from '../../firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import videoBg from '../../assets/back.mp4';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const displayName = result.user.displayName || result.user.email;
      localStorage.setItem("username", displayName);
      setMessage('✅ Sign in successful!');
      setTimeout(() => navigate('/home'), 1000);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const displayName = result.user.displayName || result.user.email;
      localStorage.setItem("username", displayName);
      setMessage('✅ Signed in with Google!');
      setTimeout(() => navigate('/home'), 1000);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const displayName = result.user.displayName || result.user.email;
      localStorage.setItem("username", displayName);
      setMessage('✅ Signed in with Facebook!');
      setTimeout(() => navigate('/home'), 1000);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="video-wrapper">
      <video autoPlay muted loop className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="overlay">
        <form className="form" onSubmit={handleSignIn}>
          <h2>Sign In</h2>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="button">Sign In</button>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleSignIn}
          >
            Sign In with Google
          </button>

          <button
            type="button"
            className="facebook-button"
            onClick={handleFacebookSignIn}
          >
            Sign In with Facebook
          </button>

          {message && <p className="message">{message}</p>}

          <p className="link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
