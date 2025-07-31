import React from 'react';
import ProductCard from './productCard';

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone", price: 999, image: "https://via.placeholder.com/150" },
];

function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
