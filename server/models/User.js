import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: String,

    role: {
      type: String,
      enum: ["admin", "hospital", "donor"],
      default: "donor",
    },

    bloodGroup: String,
    address: String,
    city: String,

    // 🔐 Forgot Password
    resetToken: String,
    resetTokenExpire: Date,
  },
  { timestamps: true }
);


// 🔐 PASSWORD HASH (NO next → no error)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});


// 🔑 PASSWORD COMPARE
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export default mongoose.model("User", userSchema);