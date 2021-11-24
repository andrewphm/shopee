import React from 'react';

// Styled-components
import {
  Wrapper,
  CartNav,
  Container,
  ItemContainer,
  Product,
  CheckOutContainer,
  Links,
  ProductDetails,
  ImageWrapper,
  Image,
  Colour,
  Size,
  Quantity,
  PriceContainer,
  SummaryItem,
} from './ShoppingCart.styles';

const ShoppingCart = () => {
  return (
    <Wrapper>
      <h1>SHOPPING CART</h1>
      <CartNav>
        <button>CONTINUE SHOPPING</button>
        <Links className="links">
          <a href="#cart" alt="Shopping bag">
            Shopping Bag (0)
          </a>
          <a href="#wishlist" alt="Wishlist">
            Your Wishlist (0)
          </a>
        </Links>
      </CartNav>
      <Container>
        <ItemContainer>
          <Product>
            <ImageWrapper>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
            </ImageWrapper>
            <ProductDetails>
              <div className="top">
                <h4>LIGHTX RUNNERS</h4>
                <p>
                  <strong>ID:</strong> 43516295
                </p>
                <p className="price">$ 69</p>
              </div>
              <div className="middle">
                <Colour colour="black">
                  <strong>Product colour: </strong>{' '}
                  <div className="circle"></div>
                </Colour>
                <Size size="size">
                  <strong>Product size: </strong>
                  <p>37</p>
                </Size>

                <Quantity>
                  <strong>Quantity: </strong>
                  <p>1</p>
                </Quantity>
              </div>
              <div className="bottom">
                <button>Remove</button>
              </div>
            </ProductDetails>
          </Product>
          <Product>
            <ImageWrapper>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
            </ImageWrapper>
            <ProductDetails>
              <div className="top">
                <h4>PHILZ T-SHIRT</h4>
                <p>
                  <strong>ID:</strong> 93818298
                </p>
                <p className="price">$ 25</p>
              </div>
              <div className="middle">
                <Colour colour="grey">
                  <strong>Product colour: </strong>{' '}
                  <div className="circle"></div>
                </Colour>
                <Size size="size">
                  <strong>Product size: </strong>
                  <p>SMALL</p>
                </Size>

                <Quantity>
                  <strong>Quantity: </strong>
                  <p>1</p>
                </Quantity>
              </div>
              <div className="bottom">
                <button>Remove</button>
              </div>
            </ProductDetails>
          </Product>
        </ItemContainer>
        <CheckOutContainer>
          <h1>ORDER SUMMARY</h1>
          <PriceContainer>
            <SummaryItem>
              <strong>SUBTOTAL</strong>
              <strong>$ 94.0</strong>
            </SummaryItem>
            <SummaryItem>
              <p>ESTIMATED SHIPPING</p>
              <p>$ 5.0</p>
            </SummaryItem>
            <SummaryItem>
              <p>SHIPPING DISCOUNT</p>
              <p>-$ 5.0</p>
            </SummaryItem>
            <SummaryItem>
              <p>TAX</p>
              <p>$ 9</p>
            </SummaryItem>
            <SummaryItem>
              <strong>TOTAL</strong>
              <strong>$ 103</strong>
            </SummaryItem>
            <button>CHECK OUT</button>
          </PriceContainer>
        </CheckOutContainer>
      </Container>
    </Wrapper>
  );
};

export default ShoppingCart;
