import React, { useState, useRef, useEffect } from 'react';

// Redux action
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

// React Router
import { useParams, useNavigate } from 'react-router-dom';

// API
import API from '../../API';

// Styled-components
import {
  Container,
  ImgContainer,
  InfoContainer,
  Image,
  Filter,
  FilterContainer,
  Colour,
  CircleOutline,
  Size,
  FilterList,
  AddToCartContainer,
  AddToCart,
} from './ProductContainer.styles';

const ProductContainer = () => {
  const colourRef = useRef(null);
  const sizeRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState(null);
  const [colour, setColour] = useState(null);
  const dispatch = useDispatch();
  const quantity = 1;
  const navigate = useNavigate();

  const handleColourClick = (e) => {
    if (colourRef.current)
      colourRef.current.style.border = '2px solid transparent';
    colourRef.current = e.target.parentElement;
    colourRef.current.style.border = '2px solid black';
    setColour(e.target.value);
  };

  const handleSizeClick = (e) => {
    if (sizeRef.current) {
      sizeRef.current.style.backgroundColor = 'transparent';
      sizeRef.current.style.color = 'black';
    }
    sizeRef.current = e.target;
    sizeRef.current.style.backgroundColor = 'black';
    sizeRef.current.style.color = 'white';
    setSize(e.target.value);
  };

  const handleClick = (e) => {
    if (!colour || !size) return;

    dispatch(
      addProduct({
        ...product,
        color: colour,
        size,
        quantity,
      })
    );

    navigate('/cart');
  };

  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await API.fetchProduct(productId);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <>
      {product && (
        <Container>
          <ImgContainer>
            <Image src={product.img[0].img_main} />
          </ImgContainer>
          <InfoContainer>
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <span>$ {product.price}</span>
            <FilterContainer>
              <Filter>
                <h3>
                  COLOUR: <span>{colour && colour}</span>
                </h3>
                <FilterList>
                  {product.color.map((color, i) => (
                    <CircleOutline key={i}>
                      <Colour
                        onClick={handleColourClick}
                        value={color}
                        type="button"
                      />
                    </CircleOutline>
                  ))}
                </FilterList>
              </Filter>
              <Filter>
                <h3>
                  SIZE: <span>{size && size}</span>{' '}
                </h3>
                <FilterList>
                  <Size onClick={handleSizeClick} type="button" value="XS" />

                  <Size onClick={handleSizeClick} type="button" value="S" />

                  <Size onClick={handleSizeClick} type="button" value="M" />

                  <Size onClick={handleSizeClick} type="button" value="L" />
                </FilterList>
              </Filter>
            </FilterContainer>
            <AddToCartContainer>
              <AddToCart onClick={handleClick}>
                {size && colour ? 'ADD TO CART' : 'Choose a size and colour'}
              </AddToCart>
            </AddToCartContainer>
          </InfoContainer>
        </Container>
      )}
    </>
  );
};

export default ProductContainer;
