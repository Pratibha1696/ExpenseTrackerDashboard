// Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogin = () => {
    // Simulate an API call to authenticate the user
    const user = { username }; // In a real app, you'd get this data from your API
    if (username === 'test' && password === 'password') {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <h2>You are already logged in</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
