const Booking = require("../models/Booking");


// CREATE BOOKING

exports.createBooking = async (req,res)=>{

try{

const { temple , date , slot } = req.body;

if(!temple || !date || !slot){

return res.status(400).json({

message:"All fields required"

});

}

const booking = await Booking.create({

temple,
date,
slot

});

res.status(201).json({

message:"Booking Saved",

booking

});

}

catch(error){

console.log(error);

res.status(500).json({

message:"Booking Failed"

});

}

};


// GET BOOKINGS

exports.getBookings = async(req,res)=>{

try{

const bookings = await Booking.find();

res.json(bookings);

}

catch(error){

res.status(500).json({

message:"Fetch Failed"

});

}

};

// const Booking = require("../models/Booking");


// // CREATE BOOKING
// exports.createBooking = async (req, res) => {

//   try {

//     const { temple, date, slot } = req.body;

//     const booking = await Booking.create({

//       temple,
//       date,
//       slot

//     });

//     res.status(201).json({
//       message: "Booking Successful",
//       booking
//     });

//   } catch (error) {

//     console.log("BOOKING ERROR:", error);

//     res.status(500).json({
//       message: "Booking failed"
//     });

//   }

// };


// // GET BOOKINGS

// exports.getBookings = async (req, res) => {

//   try {

//     const bookings = await Booking.find();

//     res.json(bookings);

//   } catch (error) {

//     res.status(500).json({
//       message: "Failed to fetch bookings"
//     });

//   }

// };



// exports.createBooking = async (req,res)=>{

// res.json({
// message:"Booking API working"
// });

// };

// exports.getBookings = async (req,res)=>{

// res.json([]);

// };



// const Booking = require("../models/Booking");

// exports.createBooking = async (req,res)=>{

// try{

// const booking = await Booking.create({

// user : req.body.user,
// temple : req.body.temple,
// date : req.body.date,
// slot : req.body.slot

// });

// res.status(201).json(booking);

// }catch(error){

// console.log(error);

// res.status(500).json({
// message:"Booking failed"
// });

// }

// };



// const Booking = require("../models/Booking");

// exports.createBooking = async(req,res)=>{

//  try{

//    const {temple,slot,userEmail} = req.body;

//    const booking = new Booking({
//      temple,
//      slot,
//      userEmail
//    });

//    await booking.save();

//    res.json({
//      message:"Booking Confirmed",
//      booking
//    });

//  }
//  catch(err){

//    res.status(500).json({error:err.message});

//  }

// };