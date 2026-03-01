import { useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";

function BookingPage() {

  // receive temple name from TempleCard
  const location = useLocation();

  const templeName = location.state?.temple || "Temple Not Selected";

  const [bookingData, setBookingData] = useState({
    date: "",
    slot: ""
  });

  const handleChange = (e) => {

    setBookingData({

      ...bookingData,
      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const res = await API.post(

        "/bookings",

        {
          temple: templeName,
          date: bookingData.date,
          slot: bookingData.slot
        },

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      alert("Booking Successful 🙏");

      console.log(res.data);

      // clear form after booking
      setBookingData({
        date: "",
        slot: ""
      });

    } catch (error) {

      console.log(error);

      alert("Booking Failed ❌");

    }

  };


  return (

    <div className="container mt-4">

      <h2 className="mb-3">Book Darshan Slot 🙏</h2>

      {/* show selected temple */}

      <div className="alert alert-info">

        <strong>Temple :</strong> {templeName}

      </div>


      <form onSubmit={handleSubmit}>


        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={bookingData.date}
          onChange={handleChange}
          required
        />


        <input
          type="text"
          name="slot"
          placeholder="Morning / Evening"
          className="form-control mb-3"
          value={bookingData.slot}
          onChange={handleChange}
          required
        />


        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Confirm Booking
        </button>


      </form>

    </div>

  );

}

export default BookingPage;

// import { useState } from "react";
// import API from "../services/api";

// function BookingPage() {

//   const [bookingData, setBookingData] = useState({
//     temple: "",
//     date: "",
//     slot: ""
//   });

//   const handleChange = (e) => {
//     setBookingData({
//       ...bookingData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const token = localStorage.getItem("token");

//       const res = await API.post(
//         "/bookings",
//         bookingData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert("Booking Successful 🙏");

//       console.log(res.data);

//     } catch (error) {

//       console.log(error);
//       alert("Booking Failed");

//     }
//   };

//   return (
//     <div className="container mt-4">

//       <h2>Book Darshan Slot</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="temple"
//           placeholder="Temple Name"
//           className="form-control mb-2"
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           className="form-control mb-2"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="slot"
//           placeholder="Morning / Evening"
//           className="form-control mb-2"
//           onChange={handleChange}
//         />

//         <button className="btn btn-primary">
//           Confirm Booking
//         </button>

//       </form>

//     </div>
//   );
// }

// export default BookingPage;



// function BookingPage() {
//   return (
//     <div className="container mt-5">

//       <h2 className="text-center mb-4">Confirm Your Darshan Booking</h2>

//       <div className="card p-4 shadow-lg text-center">

//         <p>Temple: Tirupati Balaji</p>
//         <p>Selected Slot: 10:00 AM</p>

//         <button className="btn btn-success">
//           Confirm Booking
//         </button>

//       </div>

//     </div>
//   );
// }

// export default BookingPage;