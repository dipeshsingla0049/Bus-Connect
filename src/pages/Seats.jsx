import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <div>
      <h1>Select Seats</h1>

      {seats.map((seat) => (
        <button key={seat} onClick={() => toggleSeat(seat)}>
          {seat}
        </button>
      ))}

      <br /><br />

      <button
        onClick={() =>
          navigate("/confirmation", { state: { selected, bus: state.bus } })
        }
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default Seats;