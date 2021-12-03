// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Success from './pages/Success';

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// UI components
import { Announcement, NavBar, Newsletter, Footer } from './components';

// Global styles
import { GlobalStyle } from './GlobalStyle';

// Redux
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <Router>
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/shopi-fe" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products/:category/:productId" element={<Product />} />
        {user && (
          <>
            <Route
              path="/login"
              element={<Navigate replace to="/shopi-fe" />}
            />
            <Route
              path="/register"
              element={<Navigate replace to="/shopi-fe" />}
            />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
