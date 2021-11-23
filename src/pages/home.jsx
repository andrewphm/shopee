import React from 'react';

// UI components
import {
  NavBar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
} from '../components/index';

const home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default home;
