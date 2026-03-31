import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({ success: true, data: user });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  res.json({ success: true, data: user });
});

router.get("/hospitals", async (req, res) => {
  const hospitals = await User.find({ role: "hospital" });
  res.json(hospitals);
});

export default router;