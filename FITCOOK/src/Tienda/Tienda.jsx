import React, { useState } from 'react';
import './tienda.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.99,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 5.99,
  },
];

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <div className='Store'>
      <h1>Store</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}{' '}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price.toFixed(2)}{' '}
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </li>
            ))}
            <p>Total: ${cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Store;