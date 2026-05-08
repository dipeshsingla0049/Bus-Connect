import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../styles/home.css";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please fill all fields");
      return;
    }

    navigate("/buses", {
      state: {
        from,
        to,
      },
    });
  };

  return (
    <>
      <Navbar />

      <div className="home container">
        <div className="hero-section">
          <h1>
            Find your next <span>bus journey</span>
          </h1>

          <p>
            Search routes, pick your seat and track your bus in real-time.
          </p>
        </div>

        <div className="search-card">
          <div className="input-group">
            <label>FROM</label>
            <div className="input-box">
              <input
                type="text"
                placeholder="Delhi"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>TO</label>
            <div className="input-box">
              <input
                type="text"
                placeholder="Jaipur"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;