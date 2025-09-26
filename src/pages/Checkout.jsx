import React from "react";

export default function Checkout({ cart, setCart }) {
  // Increase quantity
  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.05; // 5% GST
  const total = subtotal + gst;

  return (
    <div className="checkout-container">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>GST (5%): ₹{gst.toFixed(2)}</p>
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button
            className="checkout-btn"
            onClick={() => {
              alert("Order placed successfully!");
              setCart([]); // clear cart
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
