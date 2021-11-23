import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Title,
} from '@material-ui/icons';
import React, { useState } from 'react';

// slider data
import { sliderItems } from '../../data';

// Styled Components
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  Slide,
  InfoContainer,
  Image,
} from './Slider.styles';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState();

  const handleClick = (direction) => {
    if (direction === 'right') {
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map((slide) => {
          const { id, title, desc, bg, img } = slide;
          return (
            <Slide key={id} bg={bg}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>SHOW MORE</button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
