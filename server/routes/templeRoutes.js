const express = require("express");

const router = express.Router();

const { getTemples } =
require("../controllers/templeController");


router.get("/",getTemples);

module.exports = router;