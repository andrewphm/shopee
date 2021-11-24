import React from 'react';

// Styled components
import { Container, InputContainer } from './Newsletter.styles';

// MUI
import { Send } from '@material-ui/icons';

const Newsletter = () => {
  return (
    <Container>
      <h1>Newsletter</h1>
      <p>Get timely updates and deals from all the products you love.</p>
      <InputContainer>
        <input placeholder="Enter your email" />
        <button>
          <Send />
        </button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
