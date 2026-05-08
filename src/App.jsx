import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusList from "./pages/BusList";
import Seats from "./pages/Seats";
import Confirmation from "./pages/Confirmation";
import Tracking from "./pages/Tracking";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buses" element={<BusList />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/mybookings" element={<MyBookings />} />
    </Routes>
  );
}

export default App;