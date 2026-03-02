import { useNavigate } from "react-router-dom";

function TempleCard({ temple }) {

  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", {
      state: { temple: temple.name }
    });
  };

  return (


<div className="card temple-card shadow-sm h-100">
      <img
        src={`http://localhost:5000${temple.image}`}
        alt={temple.name}
        className="temple-img"
      />

      <div className="card-body text-center">

        <h5 className="fw-bold">{temple.name}</h5>

        <p className="text-muted">
          📍 {temple.location}
        </p>

        <button
          className="btn btn-warning mt-2"
          onClick={handleBooking}
        >
          Book Darshan
        </button>

      </div>

    </div>

  );
}

export default TempleCard;