import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/userRedux';

import {
  Wrapper,
  Container,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from './NavBar.styles';

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/shopi-fe">SHOPI.</Link>
          </Logo>
          <MenuItem>
            <Link to="/products/men">
              <h3>Men</h3>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/products/women">
              <h3>Women</h3>
            </Link>
          </MenuItem>
        </Left>
        <Center></Center>
        <Right>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search />
          </SearchContainer>
          {user ? (
            <>
              <MenuItem user="user">
                <span>
                  <strong>{user.username}</strong>
                </span>
              </MenuItem>
              <MenuItem>
                <span onClick={handleSignOut}>Sign Out</span>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <Link to="/register">Register</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login">Sign In</Link>
              </MenuItem>
            </>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
