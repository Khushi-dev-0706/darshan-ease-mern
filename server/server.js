const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DATABASE CONNECTION =================
mongoose.connect("mongodb://127.0.0.1:27017/darshanEase")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const templeRoutes = require("./routes/templeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/bookings", bookingRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
    res.send("DarshanEase Backend Running 🚀");
});

// ================= SERVER START =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});