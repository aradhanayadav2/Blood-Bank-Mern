import express from "express";
import Inventory from "../models/Inventory.js";

import { updateInventoryStatus } from "../utils/updateInventoryStatus.js";

const router = express.Router();

// ✅ Add / Update Blood
router.post("/", async (req, res) => {
  try {
    const { hospitalName, bloodGroup, units, location } = req.body;

    // 🔥 AUTO DATES
    const collectionDate = new Date();

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30); // 30 days expiry

    let blood = await Inventory.findOne({
      hospitalName,
      bloodGroup,
    });

    if (blood) {
      blood.units += Number(units);

      // 🔥 update latest dates
      blood.collection = collectionDate;
      blood.expiry = expiryDate;

      await blood.save();
    } else {
      await Inventory.create({
        hospitalName,
        bloodGroup,
        units,
        collection: collectionDate, // ✅ FIX
        expiry: expiryDate,         // ✅ FIX
        location: location || "Main Storage",
      });
    }

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});


router.get("/:hospitalName", async (req, res) => {
  try {
    const data = await Inventory.find({
      hospitalName: req.params.hospitalName,
    });

    // 🔥 AUTO UPDATE STATUS
    const updatedData = data.map((item) => {
      const today = new Date();
      const expiryDate = new Date(item.expiry);

      const diffTime = expiryDate - today;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      let status = "healthy";

      if (expiryDate < today) {
        status = "expired";
      } else if (diffDays <= 3) {
        status = "nearExpiry";
      }

      return {
        ...item._doc,
        status,
      };
    });

    res.json(updatedData);

  } catch (err) {
    res.json({ success: false });
  }
});

export default router;