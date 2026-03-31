import express from "express";
import Request from "../models/Request.js";
import Inventory from "../models/Inventory.js";

const router = express.Router();

// Create Request
router.post("/", async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();

    res.json({ success: true, data: request });
  } catch (err) {
    res.json({ success: false });
  }
});

// Get Requests by City
router.get("/:city", async (req, res) => {
  const { city } = req.params;

  const requests = await Request.find({
    city,
    // status: "pending"
  });

  res.json(requests);
});


// Accept Request

router.put("/accept/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { hospitalName } = req.body;

    const request = await Request.findById(id);

    if (!request) {
      return res.json({ success: false, message: "Request not found" });
    }

    // ✅ Update request
    request.status = "accepted";
    request.acceptedBy = hospitalName;

    await request.save();

    // 🔥 UPDATE INVENTORY (IMPORTANT)
    const blood = await Inventory.findOne({
      hospitalName,
      bloodGroup: request.bloodGroup,
    });

    if (blood) {
      // subtract units
      blood.units -= request.units;

      // safety check
      if (blood.units < 0) blood.units = 0;

      await blood.save();
    }

    res.json({ success: true, data: request });

  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

// GET user requests (by hospitalName OR user name)
router.get("/user/:name", async (req, res) => {
  const data = await Request.find({
    hospitalName: req.params.name,
  });

  res.json(data);
});

router.put("/reject/:id", async (req, res) => {
  const request = await Request.findById(req.params.id);

  request.status = "rejected";

  await request.save();

  res.json({ success: true });
});

router.get("/:city/:hospitalName", async (req, res) => {
  const { city, hospitalName } = req.params;

  const requests = await Request.find({
    city,
    $or: [
      { status: "pending" }, // sabko dikhe
      { status: "accepted", acceptedBy: hospitalName } // sirf apna
    ]
  });

  res.json(requests);
});

export default router;