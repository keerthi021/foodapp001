import React from "react";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div
      className="restaurant-card"
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
    >
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
}
