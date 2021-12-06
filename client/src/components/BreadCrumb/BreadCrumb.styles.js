import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`

    span {
        font-size: 1.2rem;
        text-transform: capitalize;

        :hover {
            text-decoration: underline;
        }
    }

    .last {
        font-weight: 600;
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {

    }
  }
`;
