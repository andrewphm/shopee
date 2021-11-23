import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.4s ease-in;
  transform: translateX(0);
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  padding: 50px;

  h1 {
    font-size: 60px;
    white-space: nowrap;
  }

  p {
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  button {
    padding: 10px;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Slide = styled.div`
  background-color: ${(props) => `#${props.bg}`};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.8;
  z-index: 100;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }
`;
