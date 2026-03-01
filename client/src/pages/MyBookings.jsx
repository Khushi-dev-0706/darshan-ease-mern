import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBookings = async () => {

      try {

        const res = await API.get("/bookings");

        setBookings(res.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchBookings();

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
            className="card mb-3 shadow-sm"
          >

            <div className="card-body">

              <h5 className="card-title">
                Temple: {booking.temple}
              </h5>

              <p className="card-text">
                Date: {booking.date}
              </p>

              <p className="card-text">
                Slot: {booking.slot}
              </p>

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