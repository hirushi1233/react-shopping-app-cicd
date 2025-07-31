import React from 'react';

function cart({ cart }) {
  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default cart;
