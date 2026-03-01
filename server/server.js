const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

<<<<<<< HEAD
/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());

/* ================= DATABASE ================= */

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/darshanEase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB Error:", err);
});

/* ================= ROUTES ================= */

=======
// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DATABASE CONNECTION =================
mongoose.connect("mongodb://127.0.0.1:27017/darshanEase")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// ================= ROUTES =================
>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
const authRoutes = require("./routes/authRoutes");
const templeRoutes = require("./routes/templeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/bookings", bookingRoutes);

<<<<<<< HEAD
/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("DarshanEase Backend Running 🚀");
});

/* ================= ERROR HANDLING ================= */

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong on the server"
  });
});

/* ================= SERVER START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

=======
// ================= TEST ROUTE =================
app.get("/", (req, res) => {
    res.send("DarshanEase Backend Running 🚀");
});

// ================= SERVER START =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
