import express from "express";
import User from "../models/User.js";
import Request from "../models/Request.js";
import Donation from "../models/Donations.js";
import Inventory from "../models/Inventory.js";

const router = express.Router();

// ✅ All Users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ Only Hospitals
router.get("/hospitals", async (req, res) => {
  const hospitals = await User.find({ role: "hospital" });
  res.json(hospitals);
});

// ✅ All Requests
router.get("/requests", async (req, res) => {
  const requests = await Request.find().sort({ createdAt: -1 });
  res.json(requests);
});

// ✅ All Donations
router.get("/donations", async (req, res) => {
  const donations = await Donation.find().sort({ date: -1 });
  res.json(donations);
});

// ✅ Inventory
router.get("/inventory", async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
});

export default router;