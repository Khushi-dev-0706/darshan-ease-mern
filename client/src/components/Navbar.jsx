import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  alert("Logged out successfully");
  navigate("/");
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          DarshanEase
        </Link>
        <div>
          {username && (
            <span className="text-warning fw-bold me-3">
              👤 {username}
              </span>
            )}
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/temples">
            Temples
          </Link>

          <Link className="btn btn-outline-light me-2" to="/login">
            Login
          </Link>

          <Link className="btn btn-outline-light" to="/register">
            Register
          </Link>

          <Link className="btn btn-outline-light me-2" to="/donate">
           Donate
          </Link>

          <Link className="btn btn-outline-light me-2" to="/my-bookings">
           My Bookings
          </Link>
          <button className="btn btn-danger ms-2" onClick={handleLogout}>
            Logout
           </button>


        </div>
      </div>
    </nav>
  );
}

export default Navbar;