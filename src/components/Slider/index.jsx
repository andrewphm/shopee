import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
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
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex === 0 ? slideIndex : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper id="wrapper" slideIndex={slideIndex}>
        {sliderItems.map((slide) => {
          const { id, title, desc, bg, img } = slide;
          return (
            <Slide id={id} key={id} bg={bg}>
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
