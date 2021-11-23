import React from 'react';
import Announcement from '../components/Announcement';

// UI components
import NavBar from '../components/NavBar';

const home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
    </div>
  );
};

export default home;
