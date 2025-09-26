import "./App.css"; // import CSS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  const [cart, setCart] = useState([]); // Global cart state

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route path="/restaurants" element={<RestaurantsMenu />} />
        <Route
          path="/restaurant/:id"
          element={<RestaurantPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
