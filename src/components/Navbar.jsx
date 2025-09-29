import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo-text">MyRestaurants</Link>
      </div>

      {/* Right: Nav Links */}
      <div className={`navbar-right ${showMenu ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login">Login</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
