import React from "react";

export default function Cart({ cart, setCart }) {
  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  // Total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = (total * 0.05).toFixed(2); // 5% GST
  const grandTotal = (total + parseFloat(gst)).toFixed(2);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <div>
              <span>Subtotal:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="gst">
              <span>GST (5%):</span>
              <span>₹{gst}</span>
            </div>
            <div className="grand-total">
              <span>Grand Total:</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          <button className="place-order-btn" onClick={() => {
            setCart([]);
            alert("Order placed successfully!");
          }}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}
