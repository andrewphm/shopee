import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/cartRedux';

// Stripe Checkout
import StripeCheckout from 'react-stripe-checkout';
// API
import API, { userRequest } from '../../API';

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
  const [stripeToken, setStripeToken] = useState(null);
  let navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (i, item) => {
    dispatch(removeProduct({ ...item, index: i }));
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total,
        });

        console.log(res);

        navigate('/success', { state: res.data });
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

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
          {cart.products.map((item, i) => (
            <Product key={i}>
              <ImageWrapper>
                <Image src={item.img[1].img_small} />
              </ImageWrapper>
              <ProductDetails>
                <div className="top">
                  <h4>LIGHTX RUNNERS</h4>
                  <p>
                    <strong>ID:</strong> {item._id.slice(-10)}
                  </p>
                  <p className="price">$ {item.price}</p>
                </div>
                <div className="middle">
                  <Colour colour={item.color}>
                    <strong>Product colour: </strong>{' '}
                    <div className="circle"></div>
                  </Colour>
                  <Size size="size">
                    <strong>Product size: </strong>
                    <p>{item.size}</p>
                  </Size>

                  <Quantity>
                    <strong>Quantity: </strong>
                    <p>{item.quantity}</p>
                  </Quantity>
                </div>
                <div className="bottom">
                  <button onClick={(e) => handleClick(i, item)}>Remove</button>
                </div>
              </ProductDetails>
            </Product>
          ))}
        </ItemContainer>
        <CheckOutContainer>
          <h1>ORDER SUMMARY</h1>
          <PriceContainer>
            <SummaryItem>
              <strong>SUBTOTAL</strong>
              <strong>$ {cart.total}</strong>
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
              <p>$ {cart.total * 0.1}</p>
            </SummaryItem>
            <SummaryItem>
              <strong>TOTAL</strong>
              <strong>$ {(cart.total * 1.1).toFixed(2)}</strong>
            </SummaryItem>
            <StripeCheckout
              name="Shopi"
              billingAddress
              shippingAddress
              description={`Your total is $${(cart.total * 1.1).toFixed(2)}`}
              amount={cart.total * 100 * 1.1}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE}
            >
              <button>CHECK OUT</button>
            </StripeCheckout>
          </PriceContainer>
        </CheckOutContainer>
      </Container>
    </Wrapper>
  );
};

export default ShoppingCart;
