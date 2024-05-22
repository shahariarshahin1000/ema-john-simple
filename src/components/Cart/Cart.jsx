import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart; option:1
  // const {cart}=props //option:2
  console.log(cart);

  let totalShipping = 0;
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tex = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tex;

  return (
    <div className="cart">
      <h4>Order sumary</h4>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price:${totalPrice}</p>
      <p>Total Shipping:${totalShipping}</p>
      <p>Tex:${tex.toFixed(2)}</p>
      <h6>Grand Total:${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
