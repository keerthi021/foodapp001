import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./components/Cart"; // <-- Cart component
import Login from "./pages/Login"; // <-- Login page

function App() {
  const [cart, setCart] = useState([]); // global cart state

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route
          path="/restaurants"
          element={<RestaurantsMenu cart={cart} setCart={setCart} />}
        />
        <Route
          path="/restaurant/:id"
          element={<RestaurantPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
