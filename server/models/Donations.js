import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorName: String,
  bloodGroup: String,
  units: Number,
  hospitalName: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Donation", donationSchema);