import React from 'react';

// MUI icons
import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';

// Styled-components
import {
  Container,
  Left,
  Right,
  Center,
  SocialContainer,
  SocialIcon,
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
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
