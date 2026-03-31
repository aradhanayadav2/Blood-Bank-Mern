import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  role: String, // donor / hospital
  bloodGroup: String,
  address: String,
  city: String,
});

export default mongoose.model("User", userSchema);