const express = require("express");

const router = express.Router();

const {

createBooking,
getBookings

} = require("../controllers/bookingController");


router.post("/",createBooking);
router.delete("/cancel", async (req,res)=>{

  const {temple,date,slot} = req.body;

  try{

    const booking = await Booking.findOneAndDelete({
      temple,
      date,
      slot
    });

    if(!booking){
      return res.status(404).json({message:"Booking not found"});
    }

    res.json({message:"Booking cancelled successfully"});

  }catch(err){
    res.status(500).json({message:"Server error"});
  }

});

router.get("/",getBookings);


module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   createBooking,
//   getBookings
// } = require("../controllers/bookingController");

// router.post("/", createBooking);

// router.get("/", getBookings);

// module.exports = router;



// const express = require("express");

// const router = express.Router();

// const {createBooking} = require("../controllers/bookingController");

// router.post("/create",createBooking);

// module.exports = router;