import React from 'react';

// UI components
import { NavBar, Footer, Announcement } from './index';
import Newsletter from './Newsletter';

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <NavBar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
