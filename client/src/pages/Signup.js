import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({ onAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      setError('');
      onAuth();
      navigate('/dashboard');
    } catch {
      setError('Signup failed. Try a different username.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Sign Up</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group mb-4">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-success w-100" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;
