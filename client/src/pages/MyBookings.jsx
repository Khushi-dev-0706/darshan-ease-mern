import { useEffect, useState } from "react";
import API from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const bookingRes = await API.get("/bookings", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const donationRes = await API.get("/donations", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setBookings(bookingRes.data);
        setDonations(donationRes.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <h4>Loading bookings...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-4">My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="alert alert-info">
          No bookings found.
        </div>
      ) : (
        bookings.map((booking) => (
          <div
            key={booking._id}
            className="card mb-4 p-4 shadow-lg border-0"
          >
            <div className="row align-items-center">

              {/* QR Code */}
              <div className="col-md-3 text-center">
                <QRCodeCanvas
                  value={`${window.location.origin}/ticket/${booking._id}`}
                  size={130}
                />
                <p className="mt-2 small text-muted">
                  Scan for verification
                </p>
              </div>

              {/* Ticket Details */}
              <div className="col-md-9">
                <h4 className="mb-3 text-primary">
                  🎫 Darshan Ticket
                </h4>

                <p><strong>Temple:</strong> {booking.temple}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Slot:</strong> {booking.slot}</p>
                <p><strong>Booking ID:</strong> {booking._id}</p>
              </div>

            </div>
          </div>
        ))
      )}

      {/* Donations Section */}
      <h2 className="mt-5 mb-4">My Donations</h2>

      {donations.length === 0 ? (
        <div className="alert alert-info">
          No donations found.
        </div>
      ) : (
        donations.map((donation) => (
          <div key={donation._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5>Amount: ₹{donation.amount}</h5>
              <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default MyBookings;

// import { useEffect, useState } from "react";
// import API from "../services/api";

// function MyBookings() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     API.get("/bookings")
//       .then((res) => setBookings(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>My Bookings</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings yet.</p>
//       ) : (
//         bookings.map((booking) => (
//           <div key={booking._id} className="card mb-2 p-3">
//             <h5>{booking.templeName}</h5>
//             <p>Slot: {booking.slotTime}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyBookings;