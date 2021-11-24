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
  const param = window.location.pathname.slice(1);
  const [form, setForm] = useState(initialState);

  return (
    <Container>
      <Title>{param === 'register' ? 'REGISTER' : 'SIGN IN'}</Title>
      <div className="desc">
        <p>
          Sign in with your <strong>SHOPI</strong> account for faster checkout
          and take advantage of all the member benefits.
        </p>
      </div>
      <FormContainer>
        <h3>{param === 'register' ? 'New Customer' : 'Welcome Back'}</h3>
        <p>
          <strong>Required *</strong>
        </p>
        <Form>
          {param === 'register' && (
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
          )}
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
            <button type="onsubmit">
              {param === 'register' ? 'Create an Account' : 'Sign In'}
            </button>
          </FormItem>
        </Form>
      </FormContainer>
      <p>
        {param === 'register'
          ? 'Already have an account? Sign in'
          : 'Need an account? Register here'}
      </p>
    </Container>
  );
};

export default Auth;
