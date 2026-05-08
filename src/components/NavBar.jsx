import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/" className="logo">
        BusConnect
      </Link>

      <div className="nav-links">
        <Link to="/">Track Bus</Link>
        <Link to="/">Book Tickets</Link>
        <Link to="/mybookings">My Bookings</Link>
      </div>
    </nav>
  );
}

export default Navbar;