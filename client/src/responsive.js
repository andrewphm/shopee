import { css } from 'styled-components';

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 350px) {
      ${props}
    }
  `;
};
