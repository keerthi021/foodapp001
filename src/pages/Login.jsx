import React, { useState } from "react";  

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Signin successful!");
  };

  return (
    <div className="signup-container">
      {/* Image section */}
      <div className="signup-images">
        <img src="/images/res.jpg" alt="Hotel" className="signup-image" />
        <img src="/images/food.jpg" alt="Food" className="signup-image" />
      </div>

      {/* Form section */}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signin</h2>

        <label>Name</label>
        <input
      
          type="text"
          value={name}
          placeholder="Enter your name"
           onChange={(e) => {
    const lettersOnly = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // allow letters and space
    setName(lettersOnly);
  }}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signin</button>

        {message && <p className="signup-message">{message}</p>}
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account? <a href="/login">Login</a> {/* 🔹 changed text to Login */}
        </p>
      </form>
    </div>
  );
}
