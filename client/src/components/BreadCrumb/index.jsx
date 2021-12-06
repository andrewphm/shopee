import React from 'react';

// Router
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ category, filter }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/shopi-fe">
          <span>Home</span>
        </Link>
        {category && (
          <>
            <span> / </span>
            <Link to={`/products/${category}`}>
              <span>{category}</span>
            </Link>
          </>
        )}
        <span> / </span>
        <span className="last">{filter ? filter : 'Shop All'}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
