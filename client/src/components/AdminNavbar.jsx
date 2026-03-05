import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (

    <nav className="navbar navbar-dark bg-dark px-4">

      <span className="navbar-brand fw-bold">
        DarshanEase(Organizer)
      </span>

      <div className="d-flex align-items-center">

        <Link className="btn btn-outline-light me-2" to="/admin/dashboard">
          Dashboard
        </Link>

        <Link className="btn btn-outline-light me-2" to="/admin/my-temple">
          My Temples
        </Link>

        <Link className="btn btn-outline-light me-2" to="/admin/donations">
          Donations
        </Link>

        <Link className="btn btn-outline-light me-3" to="/admin/bookings">
          Bookings
        </Link>

        {/* User Dropdown */}

        <div className="dropdown">

          <button
            className="btn btn-outline-warning dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            👤 {username}
          </button>

          <ul className="dropdown-menu dropdown-menu-end">

            <li>

              <button
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout

              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default AdminNavbar;