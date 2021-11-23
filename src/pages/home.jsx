import React from 'react';

// UI components
import { NavBar, Announcement, Slider, Categories } from '../components/index';

const home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
};

export default home;
