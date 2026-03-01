import { useState } from "react";

function DonationPage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🙏 Thank you for your donation of ₹" + amount);
    setAmount("");
  };

  return (
    <div>

      {/* Banner Section */}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605640840605-14ac1855827b)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Support Temple Donations 🙏</h1>
          <p>Your contribution helps preserve spiritual heritage</p>
        </div>
      </div>

      {/* Donation Card */}
      <div className="container d-flex justify-content-center mt-5">

        <div className="card shadow-lg p-4 text-center" style={{ width: "400px" }}>

          <h3 className="mb-3">Make a Donation</h3>

          <p className="text-muted">
            Help temples maintain facilities and serve devotees.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Enter Amount (₹)</label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter donation amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-warning w-100">
              Donate Now
            </button>

          </form>

        </div>

      </div>

      {/* Inspirational Section */}
      <div className="container text-center mt-5">

        <h4>“Giving is not just about making a donation.”</h4>
        <p className="text-muted">
          It is about making a difference in preserving sacred places.
        </p>

      </div>

    </div>
  );
}

export default DonationPage;