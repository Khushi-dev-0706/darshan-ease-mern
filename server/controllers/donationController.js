const Donation = require("../models/Donation");

exports.createDonation = async (req, res) => {
  try {
    const { amount } = req.body;

    const donation = await Donation.create({
      user: req.user.id,
      amount
    });

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: "Error creating donation" });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("user", "name");

    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donations" });
  }
};