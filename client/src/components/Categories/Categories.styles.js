import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100vw;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 500px;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.1);
      filter: grayscale(100%);
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    margin-bottom: 20px;
  }

  button {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    font-weight: 600;
    font-size: 1.1.rem;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.05);
    }
  }
`;

export const Item = styled.div`
  flex: 1;
  position: relative;
`;
