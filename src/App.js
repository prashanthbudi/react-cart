import React, { useState } from "react";
import "./App.css";
import Product from "./product";
import Cart from "./cart";
import Login from "./login";
import { useFetch } from "./customhooks/useFetch";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";
const LOGIN_FORM = "login";

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCarts] = useState([]);
  const [loginuser, setUser] = useState();

  const addToCart = (prod) => {
    setCarts([...cart, { ...prod }]);
  };

  const removeFromCart = (prod) => {
    setCarts(cart.filter((p) => p != prod));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const setLoginDetails = (user) => {
    console.log(user);
    setUser(user);
    navigateTo(PAGE_PRODUCTS);
  };
  const logout = () => {
    setUser();
  };

  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div className="App">
      <header>
        <div className="leftButton">
          <button onClick={() => setCount((c) => c + 1)}>New Trivia</button>
          <div>{!data ? "loading.." : data}</div>
        </div>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
        <div className="rightButton">
          {!loginuser && (
            <button onClick={() => navigateTo(LOGIN_FORM)}>Login</button>
          )}
          {loginuser && <button onClick={() => logout()}>Logout</button>}
          {loginuser && <p>{loginuser.firstName}</p>}
        </div>
      </header>
      <h1>Products</h1>
      {page === LOGIN_FORM && (
        <Login setLoginUser={(user) => setLoginDetails(user)}></Login>
      )}
      {page === PAGE_PRODUCTS && <Product addToCart={addToCart}></Product>}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      )}
    </div>
  );
}

export default App;
