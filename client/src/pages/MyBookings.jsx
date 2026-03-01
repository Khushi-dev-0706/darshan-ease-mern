import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get("/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="card mb-2 p-3">
            <h5>{booking.templeName}</h5>
            <p>Slot: {booking.slotTime}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;