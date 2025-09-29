import React, { useState } from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurent";

export default function RestaurantsMenu() {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchesCuisine = cuisineFilter === "All" || r.cuisine === cuisineFilter;
    const matchesRating = ratingFilter === "All" || r.rating >= parseFloat(ratingFilter);
    return matchesSearch && matchesCuisine && matchesRating;
  });

  // Function to render gold stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        <span style={{ color: "#ffb400" }}>{"★".repeat(fullStars)}</span>
        <span style={{ color: "#ffb400" }}>{halfStar ? "⯪" : ""}</span>
        <span style={{ color: "#ccc" }}>{"☆".repeat(emptyStars)}</span>
      </>
    );
  };

  return (
    <div style={{ paddingTop: "100px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Restaurants</h1>

      {/* Search & Filters */}
      <div
        className="filters"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            flex: "1",
            minWidth: "200px",
          }}
        />

        <select
          value={cuisineFilter}
          onChange={(e) => setCuisineFilter(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
        >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Mexican">Mexican</option>
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
        >
          <option value="All">All Ratings</option>
          <option value="4">4 & above</option>
          <option value="4.5">4.5 & above</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Restaurant Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((r) => (
            <div
              key={r.id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                textAlign: "center",
                background: "#fff",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <Link
                to={`/restaurant/${r.id}`}
                style={{ textDecoration: "none", color: "#333" }}
              >
                {/* Restaurant Image */}
                <img
                  src={r.image}
                  alt={r.name}
                  style={{
                    width: "100%",
                    height: "140px", // smaller image
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ color: "#ff4d4f", marginBottom: "8px" }}>{r.name}</h3>
                <p style={{ margin: "4px 0" }}>Cuisine: {r.cuisine}</p>
                <p style={{ margin: "4px 0", fontSize: "1rem" }}>
                  {renderStars(r.rating)}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#999" }}>
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
}
