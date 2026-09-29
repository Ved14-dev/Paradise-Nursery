import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout is Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <p>Your cart is currently empty.</p>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              Unit Price: ${item.price}
            </p>

            <p>
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              className="quantity-btn"
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>
          </div>

          <button
            className="delete-btn"
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h2>
          Total Cart Amount: ${totalAmount.toFixed(2)}
        </h2>

        <button
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;
