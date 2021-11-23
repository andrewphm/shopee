import React from 'react';

// UI components
import {
  NavBar,
  Announcement,
  Slider,
  Categories,
  Products,
} from '../components/index';

const home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default home;
