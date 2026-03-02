const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String
});

module.exports = mongoose.model("Temple", templeSchema);