import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ");

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (

    <div
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/3/3f/Kashi_Vishwanath_Temple_Varanasi.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      {/* Dark overlay */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "40px",
          borderRadius: "10px"
        }}
      >

        <div
          className="card shadow-lg p-4"
          style={{ width: "350px", borderRadius: "10px" }}
        >

          <h3 className="text-center mb-3">Welcome Back 🙏</h3>

          <p className="text-center text-muted">
            Login to book your darshan slot
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={handleChange}
              required
            />

            <button className="btn btn-warning w-100">
              Login
            </button>

          </form>

          <p className="text-center mt-3">

            Don't have an account?{" "}
            <Link to="/register">Register</Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;