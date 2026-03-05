import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
<<<<<<< HEAD
import React from "react";
=======

>>>>>>> e9b5be0 (saving local changes)
import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TempleList from "./pages/TempleList";
import TempleDetails from "./pages/TempleDetails";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import DonationPage from "./pages/DonationPage";
import TicketPage from "./pages/TicketPage";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import MyTemple from "./pages/admin/MyTemple";
import Donations from "./pages/admin/Donations";
import Bookings from "./pages/admin/Bookings";

function App() {
<<<<<<< HEAD
  //const [role] = useState(localStorage.getItem("role"));
=======

  const role = localStorage.getItem("role");

>>>>>>> e9b5be0 (saving local changes)
  return (

    <BrowserRouter>
<<<<<<< HEAD
      {/* Navbar will appear on all pages */}
      {window.location.pathname.startsWith("/admin") ? <AdminNavbar /> : <Navbar />}
=======

      {/* Dynamic Navbar */}

      {role === "admin" ? <AdminNavbar /> : <Navbar />}
>>>>>>> e9b5be0 (saving local changes)

      <Routes>

        {/* Home Redirect */}

        <Route
<<<<<<< HEAD
  path="/"
  element={
    localStorage.getItem("role") === "admin"
      ? <Navigate to="/admin/dashboard" />
      : <Home />
  }
/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/temples"
  element={
    localStorage.getItem("role") === "admin"
      ? <Navigate to="/admin/my-temple" />
      : <TempleList />
  }
/>
=======
          path="/"
          element={
            role === "admin"
              ? <Navigate to="/admin/dashboard" />
              : <Home />
          }
        />

        {/* Auth */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public Pages */}

        <Route path="/temples" element={<TempleList />} />
>>>>>>> e9b5be0 (saving local changes)
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/ticket/:id" element={<TicketPage />} />

        {/* User Protected */}

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />

        <Route
<<<<<<< HEAD
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
   localStorage.getItem("role") === "admin"
     ? <Navigate to="/admin/bookings" />
     : (
       <ProtectedRoute>
         <MyBookings />
       </ProtectedRoute>
     )
 }
/>
        <Route
  path="/donate"
  element={
    localStorage.getItem("role") === "admin"
      ? <Navigate to="/admin/donations" />
      : <DonationPage />
  }
/>
=======
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

        {/* Admin Routes */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/temples"
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

>>>>>>> e9b5be0 (saving local changes)
      </Routes>

    </BrowserRouter>

  );
}

export default App;