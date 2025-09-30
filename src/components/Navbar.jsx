import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo-text">MyRestaurants</Link>
      </div>

      {/* Center: Search */}
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right: Nav Links */}
      <div className={`navbar-right ${showMenu ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login">Signin</Link> {/* 🔹 changed text only */}

        {/* Mobile search inside menu */}
        <div className="search-bar-mobile">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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
