import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        style={{ padding: 10, width: 100, cursor: 'pointer' }}
        onClick={handleClick}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
