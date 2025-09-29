import React, { useState } from "react";
import "./App.css"; // Make sure CSS is in App.css

export default function SearchFilters() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const restaurants = [
    { id: 1, name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
    { id: 2, name: "Sushi World", cuisine: "Japanese", rating: 4.8 },
    { id: 3, name: "Curry House", cuisine: "Indian", rating: 4.2 },
    { id: 4, name: "Burger Town", cuisine: "American", rating: 4.0 },
  ];

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine =
      cuisineFilter === "All" || r.cuisine === cuisineFilter;
    const matchesRating =
      ratingFilter === "All" || r.rating >= parseFloat(ratingFilter);
    return matchesSearch && matchesCuisine && matchesRating;
  });

  return (
    <div className="search-filters-container">
      <h2>Restaurants</h2>

      {/* Search & Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={cuisineFilter}
          onChange={(e) => setCuisineFilter(e.target.value)}
        >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option value="All">All Ratings</option>
          <option value="4">4 & above</option>
          <option value="4.5">4.5 & above</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((r) => (
            <div key={r.id} className="restaurant-card">
              <h3>{r.name}</h3>
              <p>Cuisine: {r.cuisine}</p>
              <p>Rating: {r.rating} ⭐</p>
            </div>
          ))
        ) : (
          <p className="no-results">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}
