import { useLocation, useNavigate } from "react-router-dom";
import buses from "../data/buses.json";

function BusList() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const filtered = buses.filter(
    (bus) =>
      bus.from.toLowerCase() === state.from.toLowerCase() &&
      bus.to.toLowerCase() === state.to.toLowerCase()
  );

  return (
    <div>
      <h1>Available Buses</h1>

      {filtered.map((bus) => (
        <div key={bus.id}>
          <p>{bus.from} → {bus.to}</p>
          <p>{bus.time}</p>
          <p>Seats: {bus.seats}</p>

          <button
            onClick={() => navigate("/seats", { state: { bus } })}>
            Select Seat
          </button>
        </div>
      ))}
    </div>
  );
}

export default BusList;