import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo Left */}
      <div className="navbar-logo">🍴 Foodie</div>

      {/* Center Links */}
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Cart Right */}
      <div className="navbar-cart">
        <Link to="/checkout">Cart 🛒</Link> {/* Updated to Checkout page */}
      </div>
    </header>
  );
}
