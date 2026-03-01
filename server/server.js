const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth",authRoutes);

const templeRoutes = require("./routes/templeRoutes");

app.use("/api/temples",templeRoutes);

// Test Route
app.get("/", (req,res)=>{
  res.send("DarshanEase Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});