// Pages
import Home from './pages/Home';
import ProductList from './pages/ProductList';

// Global styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <ProductList />
      <GlobalStyle />
    </div>
  );
}

export default App;
