import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TempleList from "./pages/TempleList";
import TempleDetails from "./pages/TempleDetails";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import DonationPage from "./pages/DonationPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/temples" element={<TempleList />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
