import React, { useState } from 'react';

// Styled-components
import { Container, Title, FormContainer, Form, FormItem } from './Auth.styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const Auth = () => {
  const params = window.location.pathname;
  const [form, setForm] = useState(initialState);

  return (
    <Container>
      <Title>REGISTER</Title>
      <div className="desc">
        <p>
          Create a <strong>SHOPI</strong> account and take advantage of faster
          checkouts and other great benefits.
        </p>
      </div>
      <FormContainer>
        <h3>New Customer</h3>
        <p>
          <strong>Required *</strong>
        </p>
        <Form>
          <div className="first-last-name">
            <FormItem>
              <label htmlFor="firstName">FIRST NAME *</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              ></input>
            </FormItem>
            <FormItem>
              <label htmlFor="lastName">FIRST NAME *</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              ></input>
            </FormItem>
          </div>
          <FormItem>
            <label htmlFor="email">EMAIL *</label>
            <input
              type="text"
              name="email"
              placeholder="your@email.com"
              required
            ></input>
          </FormItem>
          <FormItem>
            <label htmlFor="password">PASSWORD *</label>
            <input
              type="password"
              name="email"
              placeholder="password"
              required
            ></input>
          </FormItem>
          <FormItem>
            <label htmlFor="password">RE-ENTER PASSWORD *</label>
            <input
              type="password"
              name="email"
              placeholder="password"
              required
            ></input>
          </FormItem>
          <FormItem>
            <button type="onsubmit">Create an Account</button>
          </FormItem>
        </Form>
      </FormContainer>
      <p>Already have an account? Sign in</p>
    </Container>
  );
};

export default Auth;
