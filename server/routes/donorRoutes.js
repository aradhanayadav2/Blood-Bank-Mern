import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Add Donor
router.post("/", async (req, res) => {
  try {
    const donor = new User({
      ...req.body,
      role: "donor",
    });

    await donor.save();

    res.json({ success: true, data: donor });
  } catch (err) {
    res.json({ success: false });
  }
});

export default router;