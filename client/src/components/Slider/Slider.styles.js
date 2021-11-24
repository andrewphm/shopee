import styled from 'styled-components';

// Media Query
import { tablet, mobile } from '../../responsive';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${tablet({
    height: '40vh',
  })}

  ${mobile({
    display: 'none',
  })}
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  scroll-behavior: smooth;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 700px;
  position: relative;
  z-index: 1;
`;

export const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: lightsalmon;
  margin: 0 auto;
  position: absolute;
  z-index: -1;
  top: 40px;
  left: 100px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const InfoContainer = styled.div`
  padding: 50px;

  h1 {
    font-size: clamp(2rem, vw6, 60px);
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
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.05);
    }
  }

  ${tablet({
    padding: '25px',
  })}
`;

export const Slide = styled.div`
  background-color: ${(props) => `#${props.bg}`};
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
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
