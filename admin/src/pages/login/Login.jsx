import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
};

export default Login;
