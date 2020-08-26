import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="products">
      {cart.map((prod, idx) => (
        <div key={idx}>
          <h3>{prod.Name}</h3>
          <h4>{prod.Price}</h4>
          <img src={prod.Image} alt=""></img>
          <button onClick={() => removeFromCart(prod)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
