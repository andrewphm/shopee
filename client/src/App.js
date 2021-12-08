// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// UI components
import {
  Announcement,
  NavBar,
  Newsletter,
  Footer,
  ScrollToTop,
} from './components';

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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Load users cart
  useEffect(() => {
    const setUserCart = async () => {
      try {
        const { products } = await API.getUserCart(user._id, user.accessToken);
        const quantity = products.length;
        const total = products.reduce((acc, curr) => {
          return acc + Number(curr.price);
        }, 0);

        dispatch(setCart({ products, quantity, total }));
      } catch (error) {
        console.log(error);
      }
    };
    user && setUserCart();
  }, [user]);

  useEffect(() => {
    // Update Users Cart
    const updateCart = async () => {
      await API.updateUserCart(user._id, user.accessToken, {
        userId: user._id,
        products: cart.products,
      });
    };
    user && updateCart();
  }, [cart, user]);

  return (
    <Router>
      <ScrollToTop />

      <Announcement />
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
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
      </Routes>
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
