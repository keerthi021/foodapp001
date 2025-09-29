import React from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurent.js";

export default function RestaurantPage({ cart, setCart }) {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) return <p>Restaurant not found</p>;

  const handleAddToCart = (dish) => {
    const existing = cart.find(
      (item) => item.id === dish.id && item.restaurantId === restaurant.id
    );
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === dish.id && item.restaurantId === restaurant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...dish, restaurantId: restaurant.id, quantity: 1 }]);
    }
  };

  return (
    <div className="menu-container">
      {restaurant.menu.map((dish) => (
        <div key={dish.id} className="dish-card">
          <img src={dish.image} alt={dish.name} className="dish-image" />
          <p className="dish-name">{dish.name}</p>
          <p className="dish-price">₹{dish.price}</p>
          <p className="dish-rating">
            ⭐ {dish.rating ? dish.rating.toFixed(1) : "N/A"}
          </p>
          <button className="add-cart-btn" onClick={() => handleAddToCart(dish)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
