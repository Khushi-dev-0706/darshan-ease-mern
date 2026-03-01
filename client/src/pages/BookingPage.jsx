function BookingPage() {
  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Confirm Your Darshan Booking</h2>

      <div className="card p-4 shadow-lg text-center">

        <p>Temple: Tirupati Balaji</p>
        <p>Selected Slot: 10:00 AM</p>

        <button className="btn btn-success">
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default BookingPage;