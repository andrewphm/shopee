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
            <a href="#home" alt="home">
              Home
            </a>
          </li>
          <li>
            <a href="#cart" alt="">
              Cart
            </a>
          </li>
          <li>
            <a href="#men" alt="">
              Mens Fashion
            </a>
          </li>
          <li>
            <a href="#women" alt="">
              Womens Fashion
            </a>
          </li>
          <li>
            <a href="#account" alt="">
              My Account
            </a>
          </li>
          <li>
            <a href="#wish" alt="">
              Wishlist
            </a>
          </li>
          <li>
            <a href="#faq" alt="">
              FAQs
            </a>
          </li>
          <li>
            <a href="#shipping" alt="">
              Shipping
            </a>
          </li>
          <li>
            <a href="#terms" alt="">
              Terms of service
            </a>
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
