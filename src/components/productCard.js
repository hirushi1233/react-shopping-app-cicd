import React from 'react';

function productCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default productCard;
