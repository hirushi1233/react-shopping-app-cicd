import React, { useState } from 'react';
import ProductList from './components/productList';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🛍️ My Shopping App</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
