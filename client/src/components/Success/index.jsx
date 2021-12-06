import { CheckCircle } from '@material-ui/icons';
import React from 'react';

// Styled components
import { Wrapper, Title } from './Success.styles';
const Success = ({ order }) => {
  console.log(order);

  const {
    _id,
    address: { city, country, line1, postal_code, state },
  } = order;

  return (
    <Wrapper>
      <Title>
        <CheckCircle /> <p>Order placed, thanks!</p>
      </Title>
      <p>
        Order Number: <strong>{_id}</strong>
      </p>
      <p>Confirmation will be sent to your email.</p>
      <p>
        Shipping to{' '}
        <strong>
          {`${line1} ${city} ${state} ${country}, ${postal_code}`}
        </strong>
      </p>
    </Wrapper>
  );
};

export default Success;
