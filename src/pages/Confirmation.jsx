import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../styles/confirmation.css";

function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const pnr =
    "PNR" +
    Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <Navbar />

      <div className="confirmation-page container">
        <div className="confirmation-card">
          <h1>Booking Confirmed 🎉</h1>

          <p>
            {state.bus.from} → {state.bus.to}
          </p>

          <p>
            {state.bus.departureTime} - {state.bus.arrivalTime}
          </p>

          <p>Seats: {state.selected.join(", ")}</p>

          <p>PNR: {pnr}</p>
          <button
            className="btn"
            onClick={() =>
              navigate("/tracking", {
                state: {
                  bus: state.bus,
                },
              })
            }
          >
            Track Bus
          </button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
