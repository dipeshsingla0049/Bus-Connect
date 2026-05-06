import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Search Bus</h1>

      <input
        placeholder="From"
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        placeholder="To"
        onChange={(e) => setTo(e.target.value)}
      />

      <button
        onClick={() => navigate("/buses", { state: { from, to } })}
      >
        Search
      </button>
    </div>
  );
}

export default Home;