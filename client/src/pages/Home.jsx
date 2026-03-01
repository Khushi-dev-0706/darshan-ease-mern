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
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "10px"
          }}
        >
          <h1 className="display-4">Welcome to DarshanEase 🏛</h1>

          <p className="lead">
            Book darshan slots at India's most sacred temples easily
          </p>

          <Link to="/temples">
            <button className="btn btn-warning btn-lg mt-3">
              Explore Temples
            </button>
          </Link>
        </div>
      </div>

      {/* FEATURED TEMPLES */}
     <div className="container mt-5">

  <h2 className="text-center mb-4">Popular Temples</h2>

  <div className="row text-center">

    <div className="col-md-4 mb-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Tirumala_Temple.jpg"
        className="img-fluid rounded shadow"
        alt="Tirupati Temple"
        style={{height:"250px", objectFit:"cover", width:"100%"}}
      />
      <h5 className="mt-2">Tirupati Balaji</h5>
    </div>

    <div className="col-md-4 mb-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Kashi_Vishwanath_Temple_Varanasi.jpg"
        className="img-fluid rounded shadow"
        alt="Kashi Vishwanath"
        style={{height:"250px", objectFit:"cover", width:"100%"}}
      />
      <h5 className="mt-2">Kashi Vishwanath</h5>
    </div>

    <div className="col-md-4 mb-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Golden_Temple_night.jpg"
        className="img-fluid rounded shadow"
        alt="Golden Temple"
        style={{height:"250px", objectFit:"cover", width:"100%"}}
      />
      <h5 className="mt-2">Golden Temple</h5>
    </div>

  </div>

</div>

      {/* WHY CHOOSE US */}
      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Why Choose DarshanEase
        </h2>

        <div className="row text-center">

          <div className="col-md-4">
            <h4>⚡ Fast Booking</h4>
            <p>Reserve your darshan slot in seconds.</p>
          </div>

          <div className="col-md-4">
            <h4>📅 Slot Management</h4>
            <p>Choose convenient darshan timings.</p>
          </div>

          <div className="col-md-4">
            <h4>🙏 Secure Donations</h4>
            <p>Support temples directly from the platform.</p>
          </div>

        </div>

      </div>

      {/* STATS SECTION */}
      <div className="bg-light mt-5 p-5">

        <div className="container text-center">

          <div className="row">

            <div className="col-md-4">
              <h2>50+</h2>
              <p>Temples Listed</p>
            </div>

            <div className="col-md-4">
              <h2>10K+</h2>
              <p>Bookings Completed</p>
            </div>

            <div className="col-md-4">
              <h2>25K+</h2>
              <p>Devotees Served</p>
            </div>

          </div>

        </div>

      </div>

      {/* CALL TO ACTION */}
      <div className="container text-center mt-5">

        <h2>Start Your Spiritual Journey Today</h2>

        <p className="text-muted">
          Discover sacred temples and book your darshan slot easily.
        </p>

        <Link to="/temples">
          <button className="btn btn-primary btn-lg">
            View Temples
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;