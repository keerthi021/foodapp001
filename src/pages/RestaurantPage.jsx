import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";

export default function RestaurantPage({ cart, setCart }) {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));
  const [showToast, setShowToast] = useState(false); // Toast state

  if (!restaurant) return <h2>Restaurant not found</h2>;

  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });

    // Show toast for 2 seconds
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="restaurant-page">
      <h1>{restaurant.name}</h1>

      <h2>Menu</h2>
      <div className="dish-row">
        {restaurant.menu.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>₹{dish.price}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Toast message */}
      {showToast && <div className="toast">Item added to cart!</div>}
    </div>
  );
}
