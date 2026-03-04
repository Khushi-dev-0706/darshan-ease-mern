import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TempleList from "./pages/TempleList";
import TempleDetails from "./pages/TempleDetails";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import DonationPage from "./pages/DonationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TicketPage from "./pages/TicketPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MyTemple from "./pages/admin/MyTemple";
import Donations from "./pages/admin/Donations";
import Bookings from "./pages/admin/Bookings";
import AdminRoute from "./components/AdminRoute";
import AdminNavbar from "./components/AdminNavbar";

function App() {
  const role = localStorage.getItem("role");
  return (
    <BrowserRouter>
      {/* Navbar will appear on all pages */}
      {role === "admin" ? <AdminNavbar /> : <Navbar />}

      {/* Routes for different pages */}
      <Routes>
        <Route
        path="/"
        element={
          role === "admin"
          ? <Navigate to="/admin/dashboard" />
          : <Home />
          }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/temples" element={<TempleList />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
        <Route
        path="/admin/dashboard"
        element={
        <AdminRoute>
          <AdminDashboard />
          </AdminRoute>
        }
        />
        
        <Route
        path="/admin/my-temple"
        element={
        <AdminRoute>
          <MyTemple />
          </AdminRoute>
        }
        />
        
        <Route
        path="/admin/donations"
        element={
        <AdminRoute>
          <Donations />
          </AdminRoute>
        }
        />
        
        <Route
        path="/admin/bookings"
        element={
        <AdminRoute>
          <Bookings />
          </AdminRoute>
        }
        />

        <Route
  path="/booking"
  element={
    <ProtectedRoute>
      <BookingPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/account"
  element={
    <ProtectedRoute>
      <MyBookings />
    </ProtectedRoute>
  }
/>
        <Route
        path="/donate"
        element={
        <ProtectedRoute>
          <DonationPage />
          </ProtectedRoute>
        }
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
