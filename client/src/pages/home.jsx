import React from 'react';

// UI components
import {
  NavBar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from '../components/index';

// Layout
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <Products />
    </Layout>
  );
};

export default Home;
