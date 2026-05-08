import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import buses from "../data/buses.json";
import "../styles/buslist.css";

function BusList() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const filtered = buses.filter(
    (bus) =>
      bus.from.toLowerCase() === state.from.toLowerCase() &&
      bus.to.toLowerCase() === state.to.toLowerCase()
  );

  return (
    <>
      <Navbar />

      <div className="bus-list container">
        <h1>Available Buses</h1>

        {filtered.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <div>
              <h2>{bus.busName}</h2>
              <p>
                {bus.from} → {bus.to}
              </p>
              <p>
                {bus.departureTime} - {bus.arrivalTime}
              </p>
            </div>

            <div className="bus-buttons">
              <button
              className="btn"
                onClick={() =>
                  navigate("/tracking", {
                    state: { bus },
                  })
                }
              >
                Track Bus
              </button>

              <button
                className="btn"
                onClick={() =>
                  navigate("/seats", {
                    state: { bus },
                  })
                }
              >
                Select Seats
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BusList;