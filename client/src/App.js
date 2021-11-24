// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

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
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
