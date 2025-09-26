export default function DishCard({ dish, onAdd }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <img src={dish.image} alt={dish.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h4>{dish.name}</h4>
      <p>₹{dish.price}</p>
      <button onClick={() => onAdd(dish)} style={{ padding: "0.5rem 1rem", background: "#ff4d4f", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
}
