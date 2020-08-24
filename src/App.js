import React, { useState } from "react";
import "./App.css";
import Product from "./product";
import Cart from "./cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [cart, setCarts] = useState([]);

  const addToCart = (prod) => {
    setCarts([...cart, { ...prod }]);
  };

  const removeFromCart = (prod) => {
    setCarts(cart.filter((p) => p != prod));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
      </header>
      <h1>Products</h1>

      {page === PAGE_PRODUCTS && <Product addToCart={addToCart}></Product>}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      )}
    </div>
  );
}

export default App;
