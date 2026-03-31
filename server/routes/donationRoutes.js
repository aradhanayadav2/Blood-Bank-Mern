import express from "express";
import Donation from "../models/Donations.js";

const router = express.Router();

// ✅ Save Donation
router.post("/", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();

    res.json({ success: true, data: donation });
  } catch (err) {
    res.json({ success: false });
  }
});

// ✅ Get Donations by Donor
router.get("/:name", async (req, res) => {
  const data = await Donation.find({
    donorName: req.params.name,
  });

  res.json(data);
});

router.get("/hospital/:name", async (req, res) => {
  const data = await Donation.find({
    hospitalName: req.params.name,
  });

  res.json(data);
});

export default router;