import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605640840605-14ac1855827b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative"
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)"
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-3 fw-bold">Welcome to DarshanEase 🛕</h1>

          <p className="lead mt-3">
            Book darshan slots at India's most sacred temples easily
          </p>

          <Link to="/temples">
            <button className="btn btn-warning btn-lg mt-4 px-4">
              Explore Temples
            </button>
          </Link>
        </div>
      </div>


      {/* FEATURE SECTION */}
      <div className="container mt-5 text-center">

        <div className="row">

          <div className="col-md-4">
            <h4>⚡ Fast Booking</h4>
            <p className="text-muted">
              Reserve your darshan slot instantly without long waiting lines.
            </p>
          </div>

          <div className="col-md-4">
            <h4>📅 Flexible Slots</h4>
            <p className="text-muted">
              Choose convenient timings that suit your schedule.
            </p>
          </div>

          <div className="col-md-4">
            <h4>🔒 Secure Platform</h4>
            <p className="text-muted">
              Your bookings and data are completely safe and protected.
            </p>
          </div>

        </div>

      </div>


      {/* POPULAR TEMPLES */}
      <div className="container mt-5">

        <h2 className="text-center mb-4 fw-bold">
          Popular Temples
        </h2>

        <div className="row">

  <div className="col-md-4 mb-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tirumala_Temple.jpg/640px-Tirumala_Temple.jpg"
      className="img-fluid rounded shadow"
      alt="Tirupati Temple"
      style={{ height: "260px", objectFit: "cover", width: "100%" }}
    />
    <h5 className="mt-3 text-center">Tirupati Balaji</h5>
  </div>

  <div className="col-md-4 mb-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Kashi_Vishwanath_Temple.jpg"
      className="img-fluid rounded shadow"
      alt="Kashi Vishwanath"
      style={{ height: "260px", objectFit: "cover", width: "100%" }}
    />
    <h5 className="mt-3 text-center">Kashi Vishwanath</h5>
  </div>

  <div className="col-md-4 mb-4">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Golden_Temple_night.jpg/640px-Golden_Temple_night.jpg"
      className="img-fluid rounded shadow"
      alt="Golden Temple"
      style={{ height: "260px", objectFit: "cover", width: "100%" }}
    />
    <h5 className="mt-3 text-center">Golden Temple</h5>
  </div>

</div>

      </div>


      {/* STATS SECTION */}
      <div className="bg-light mt-5 py-5">

        <div className="container text-center">

          <div className="row">

            <div className="col-md-4">
              <h2 className="fw-bold">50+</h2>
              <p className="text-muted">Temples Listed</p>
            </div>

            <div className="col-md-4">
              <h2 className="fw-bold">10K+</h2>
              <p className="text-muted">Bookings Completed</p>
            </div>

            <div className="col-md-4">
              <h2 className="fw-bold">25K+</h2>
              <p className="text-muted">Devotees Served</p>
            </div>

          </div>

        </div>

      </div>


      {/* CALL TO ACTION */}
      <div className="container text-center mt-5 mb-5">

        <h2 className="fw-bold">
          Start Your Spiritual Journey Today
        </h2>

        <p className="text-muted mt-3">
          Discover sacred temples and book your darshan slot easily.
        </p>

        <Link to="/temples">
          <button className="btn btn-primary btn-lg mt-3">
            View Temples
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;