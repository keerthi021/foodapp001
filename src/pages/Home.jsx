import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing food and great service!" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Delicious dishes, will come again!" },
    { id: 3, name: "Mike Johnson", rating: 5, comment: "Best restaurant in town!" },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to MyRestaurants</h1>
          <p>Discover the best restaurants around you.</p>
          <Link to="/restaurants" className="explore-btn">
  Explore
</Link>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="home-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <p className="review-rating">{"⭐".repeat(review.rating)}</p>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
