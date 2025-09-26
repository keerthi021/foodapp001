import React from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";

export default function RestaurantsMenu() {
  return (
    <div className="restaurants-menu" style={{ paddingTop: "80px" }}>
      {/* paddingTop should match header height */}
      <h1>Restaurants</h1>
      <div className="restaurant-row">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="card">
            <Link to={`/restaurant/${restaurant.id}`}>
              <h3>{restaurant.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
