import express from "express";
import User from "../models/User.js";
import crypto from "crypto";

const router = express.Router();


// ✅ REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = new User(req.body);
    await user.save();

    res.json({ success: true, message: "Registered successfully" });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.json({ success: false, message: err.message });
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong password" });
    }

    res.json({ success: true, data: user });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.json({ success: false, message: err.message });
  }
});


// ✅ FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;
    user.resetTokenExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    const link = `http://localhost:5173/reset-password/${token}`;
    console.log("Reset Link:", link);

    res.json({ success: true, message: "Check console for link" });

  } catch (err) {
    console.log("FORGOT ERROR:", err);
    res.json({ success: false, message: err.message });
  }
});


// ✅ RESET PASSWORD
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.json({ success: false, message: "Invalid token" });
    }

    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;

    await user.save();

    res.json({ success: true, message: "Password updated" });

  } catch (err) {
    console.log("RESET ERROR:", err);
    res.json({ success: false, message: err.message });
  }
});

export default router;