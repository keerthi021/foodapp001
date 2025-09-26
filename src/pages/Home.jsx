import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

export default function Home() {
  const [showRestaurants, setShowRestaurants] = useState(false);

  return (
    <div className="home-container">
      {!showRestaurants ? (
        <div className="hero">
          <h1>Welcome to Foodie 🍴</h1>
          <p>Find the best food from top restaurants near you.</p>
          <button
            onClick={() => setShowRestaurants(true)}
            className="explore-btn"
          >
            Explore Restaurants
          </button>
        </div>
      ) : (
        <div className="restaurant-row">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}
