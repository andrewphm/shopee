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
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from './redux/cartRedux';
import { useEffect } from 'react';

// API
import API from './API';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  // Change cart state
  useEffect(() => {
    console.log('user', user);
    if (user === null) return console.log('nothing happens');

    const setUserCart = async () => {
      const { products } = await API.getUserCart(user._id, user.accessToken);
      const quantity = products.length;
      const total = products.reduce((prev, curr) => {
        return Number(prev.price) + Number(curr.price);
      }, 0);
      console.log(products, quantity, total);

      dispatch(setCart({ products, quantity, total }));
    };
    setUserCart();
  }, [user]);

  return (
    <Router>
      <Announcement />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
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
