import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/NavBar";
import "../styles/seats.css";

function Seats() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <>
      <Navbar />

      <div className="seats-page container">
        <h1>Select Seats</h1>

        <div className="seat-grid">
          {seats.map((seat) => (
            <button
              key={seat}
              className={selected.includes(seat) ? "seat active" : "seat"}
              onClick={() => toggleSeat(seat)}
              >
              {seat}
            </button>
          ))}
        </div>

        <button
          className="btn"
          onClick={() =>
            navigate("/confirmation", {
              state: {
                selected,
                bus: state.bus,
              },
            })
          }
        >
          Confirm Booking
        </button>
      </div>
    </>
  );
}

export default Seats;