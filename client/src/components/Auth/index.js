import React, { useState } from 'react';

// Styled-components
import {
  Container,
  Title,
  FormContainer,
  Form,
  FormItem,
  Error,
} from './Auth.styles';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure } from '../../redux/userRedux';

// Redux api calls
import { login } from '../../redux/apiCalls';

// API
import API from '../../API';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
};

const Auth = () => {
  const param = window.location.pathname.slice(1);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const register = async (form) => {
      try {
        let res = await API.registerUser(form);

        const user = await login(dispatch, {
          username: res.username,
          password: form.password,
        });

        await API.createCart(
          { userId: res._id, products: [] },
          user.accessToken
        );
      } catch (error) {
        console.log(error);

        dispatch(loginFailure());
      }
    };

    // Login
    if (param !== 'register') {
      login(dispatch, { username: form.username, password: form.password });
      // Load cart
    }

    // Register
    if (param === 'register') {
      register(form);
    }
  };

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
            <>
              <div className="first-last-name">
                <FormItem>
                  <label htmlFor="firstName">FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                    value={form.firstName}
                  ></input>
                </FormItem>
                <FormItem>
                  <label htmlFor="lastName">LAST NAME *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={form.lastName}
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
                  onChange={handleChange}
                  value={form.email}
                  required
                ></input>
              </FormItem>
            </>
          )}
          <FormItem>
            <label htmlFor="username">USERNAME *</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
              value={form.username}
              required
              autoComplete="new-username"
            ></input>
          </FormItem>
          <FormItem>
            <label htmlFor="password">PASSWORD *</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={form.password}
              autoComplete="new-password"
              required
            ></input>
          </FormItem>
          {param === 'register' && (
            <FormItem>
              <label htmlFor="password">RE-ENTER PASSWORD *</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                autoComplete="new-password"
              ></input>
            </FormItem>
          )}
          <FormItem>
            <button type="onsubmit" onClick={handleClick} disabled={isFetching}>
              {param === 'register' ? 'Create an Account' : 'Sign In'}
            </button>
          </FormItem>
          {error && <Error>Something went wrong, please try again.</Error>}
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
