import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState([]);

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