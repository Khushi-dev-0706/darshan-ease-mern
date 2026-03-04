import { useEffect, useState } from "react";
import axios from "axios";

function Donations() {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donations", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
})
      .then(res => {
        setDonations(res.data);
      })
      .catch(err => console.error("Error fetching donations:", err));
  }, []);

  return (
    <div className="container mt-4">

      <h2>Donations</h2>

      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>User</th>
              <th>Temple</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td>{donation.user?.name}</td>
                <td>{donation.temple?.name}</td>
                <td>₹{donation.amount}</td>
                <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Donations;