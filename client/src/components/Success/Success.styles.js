import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
  color: teal;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;
