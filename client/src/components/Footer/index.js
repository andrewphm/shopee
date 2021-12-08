import React from 'react';

// MUI icons
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';

// Styled-components
import {
  Container,
  Left,
  Right,
  Center,
  SocialContainer,
  SocialIcon,
  ContactItem,
  Payment,
} from './Footer.styles';

// React Router
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Left>
        <h1>SHOPI.</h1>
        <p>
          bibendum ut tristique et egestas quis ipsum suspendisse ultrices
          gravida dictum fusce ut placerat orci nulla pellentesque dignissim
          enim sit
        </p>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link to="/shopi-fe">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/products/men">Mens Fashion</Link>
          </li>
          <li>
            <Link to="/products/women">Womens Fashion</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
          <li>
            <Link to="/terms">Terms of service</Link>
          </li>
        </ul>
      </Center>

      <Right>
        <h3>Contact</h3>
        <ContactItem>
          <Room />
          123 Address, City, Country
        </ContactItem>
        <ContactItem>
          <Phone /> +1 234 56789
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@shopi.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
