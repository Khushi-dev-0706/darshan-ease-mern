
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TempleCard({ temple }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => {
    navigate("/booking", {
      state: { temple: temple.name }
    });
  };

  return (
    <>
      <div className="card temple-card flex-row align-items-center p-3 mb-4 shadow-sm" style={{ minHeight: 220 }}>
        <img
          src={`http://localhost:5000${temple.image}`}
          alt={temple.name}
          className="temple-img me-4"
          style={{ width: 180, height: 140, objectFit: "cover", borderRadius: 10 }}
        />
        <div className="flex-grow-1">
          <h5 className="fw-bold mb-1" style={{ color: '#222' }}>{temple.name}</h5>
          <div className="mb-2 text-muted">📍 {temple.location}</div>
          <div className="mb-2"><b>Open:</b> {temple.openTime || "6:00 AM"} &nbsp; <b>Close:</b> {temple.closeTime || "8:00 PM"}</div>
          <div className="mb-2"><b>VIP Booking:</b> ₹{temple.vipCost || 500}</div>
          <div className="mb-2"><b>Features:</b> {temple.features ? temple.features.join(", ") : "Darshan, Prasad, Aarti"}</div>
          <button className="btn btn-warning me-2 mt-2" onClick={handleBooking}>Book Darshan</button>
        </div>
        <div className="ms-auto">
          <button className="btn btn-outline-primary" onClick={() => setShowModal(true)}>
            View Details
          </button>
        </div>
      </div>

      {/* Modal for details */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.4)" }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{temple.name} - Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img
                  src={`http://localhost:5000${temple.image}`}
                  alt={temple.name}
                  style={{ width: "100%", maxHeight: 250, objectFit: "cover", borderRadius: 8, marginBottom: 16 }}
                />
                <p><b>Location:</b> {temple.location}</p>
                <p><b>Open Time:</b> {temple.openTime || "6:00 AM"}</p>
                <p><b>Close Time:</b> {temple.closeTime || "8:00 PM"}</p>
                <p><b>VIP Booking Cost:</b> ₹{temple.vipCost || 500}</p>
                <p><b>Description:</b> {temple.description || "No description available."}</p>
                <p><b>Features:</b> {temple.features ? (
                  <ul>
                    {temple.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                ) : "Darshan, Prasad, Aarti"}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TempleCard;