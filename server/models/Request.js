import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  hospitalName: String,
  patientName: String,
  bloodGroup: String,
  units: Number,
  urgency: String,
  contact: String,
  city: String,
  status: {
    type: String,
    default: "pending",
  },
  acceptedBy: String,
});

export default mongoose.model("Request", requestSchema);