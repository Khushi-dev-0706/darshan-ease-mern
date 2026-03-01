import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully");
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          DarshanEase
        </Link>

        <div>
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