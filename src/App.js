import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Menu from './components/Navbar/Menu';
import Products from './components/Products/Products';

function App() {
  const [cart, setCart] = useState(0);
  const cartUpdate = () => {
    setCart(cart + 1)
  }
  return (
    <div className="App">
      <Menu cart={cart}></Menu>
      <Products setCart={cartUpdate}></Products>
    </div>
  );
}

export default App;
