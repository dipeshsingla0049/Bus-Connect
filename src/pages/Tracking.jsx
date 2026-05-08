import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import "../styles/tracking.css";
function Tracking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const bus = state?.bus;
  const stops = bus?.stops || bus?.route?.map((item) => item.stop) || [];

  if (!bus) {
    return (
      <>
        <Navbar />
        <div className="tracking-page container">
          <h1>No Bus Found</h1>
          <p>Please go back and select a bus first.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="tracking-page container">
        <div className="tracking-top">
          <div>
            <h1>{bus.busName}</h1>
            <p>
              {bus.from} → {bus.to}
            </p>
          </div>

        </div>

        <div className="status-grid">

          <div className="track-card">

            <div className="card-head">

              <h3>Bus Status</h3>

              <span className="live">
                ● On the way
              </span>

            </div>

            <div className="info-row">

              <div>

                <p>Operator</p>

                <h4>{bus.operator}</h4>

              </div>

              <div>

                <p>Plate</p>

                <h4>{bus.busNumber}</h4>

              </div>

            </div>

          </div>

          <div className="track-card">

            <h3>ETA & Delay</h3>

            <div className="eta-box">

              <div>

                <p>Expected Arrival</p>

                <h2>{bus.arrivalTime}</h2>

              </div>

              <div>

                <p>Delay</p>

                <h2 className="delay">
                  {bus.delay}
                </h2>

              </div>

            </div>

          </div>

        </div>

        <div className="timeline-card">

          <h3>Journey Timeline</h3>

          <div className="timeline">

            {stops.map((stop, index) => (

              <div className="timeline-stop" key={index}>

                <div
                  className={
                    index <= bus.currentStopIndex
                      ? "dot active"
                      : "dot"
                  }
                ></div>

                <p>{stop}</p>

              </div>

            ))}

          </div>

          <div className="stop-boxes">

            <div className="stop-box">

              <p>CURRENT STOP</p>

              <h4>
                {stops[bus.currentStopIndex] || "-"}
              </h4>

            </div>

            <div className="stop-box">

              <p>NEXT STOP</p>

              <h4>
                {stops[bus.currentStopIndex + 1] || "Destination"}
              </h4>

            </div>

          </div>

        </div>

        <div className="details-card">

          <h3>Journey Details</h3>

          <div className="details-grid">

            <div className="detail-box">

              <p>Departure Time</p>

              <h4>{bus.departureTime}</h4>

            </div>

            <div className="detail-box">

              <p>Scheduled Arrival</p>

              <h4>{bus.arrivalTime}</h4>

            </div>

            <div className="detail-box">

              <p>Seats Available</p>

              <h4>{bus.seats} seats</h4>

            </div>

            <div className="detail-box">

              <p>Fare</p>

              <h4>₹{bus.price}</h4>

            </div>

          </div>

        </div>

        <div className="tracking-buttons">

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Back to Search
          </button>

          <button
            className="book-btn"
            onClick={() =>
              navigate("/seats", {
                state: { bus }
              })
            }
          >
            Book This Bus
          </button>

        </div>

      </div>
    </>
  );
}

export default Tracking;