// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';

// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// UI components
import { Announcement, NavBar, Newsletter, Footer } from './components';

// Global styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
