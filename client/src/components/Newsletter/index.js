import React, { useState } from 'react';

// Styled components
import { Container, InputContainer } from './Newsletter.styles';

// MUI
import { Send } from '@material-ui/icons';

// API
import API from '../../API';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    API.createEmail({ email });
    setSuccess(true);
  };

  return (
    <Container>
      <h1>Newsletter</h1>
      <p>Get timely updates and deals from all the products you love.</p>
      {success ? (
        <p>Awesome, awesome deals are coming your way!</p>
      ) : (
        <InputContainer>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={handleClick}>
            <Send />
          </button>
        </InputContainer>
      )}
    </Container>
  );
};

export default Newsletter;
