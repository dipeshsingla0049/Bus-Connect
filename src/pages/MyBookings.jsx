// MyBookings.jsx

import Navbar from "../components/NavBar";
import "../styles/mybookings.css";

function MyBookings() {

  return (
    <>
      <Navbar />

      <div className="my-bookings container">

        <h1>My Bookings</h1>

        <div className="booking-card">

          <h2>Orange Travels</h2>

          <p>Delhi → Jaipur</p>

          <p>Seats: 4, 5</p>

          <p>PNR: PNR456321</p>

        </div>

      </div>
    </>
  );
}

export default MyBookings;