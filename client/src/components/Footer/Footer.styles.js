import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2rem 0;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
  }

  p {
    margin: 20px 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
  }
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    margin-bottom: 10px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.05);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  margin: 8px 0;
`;

export const Payment = styled.img`
  margin: 10px 0;
  width: 50%;
`;
