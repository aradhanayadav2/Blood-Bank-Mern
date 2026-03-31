import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  hospitalName: String,
  bloodGroup: String,
  units: Number,

  healthy: {
    type: Number,
    default: 0,
  },
  nearExpiry: {
    type: Number,
    default: 0,
  },
  expired: {
    type: Number,
    default: 0,
  },

  collection: Date,
  expiry: Date,
  location: String,
});

export default mongoose.model("Inventory", inventorySchema);