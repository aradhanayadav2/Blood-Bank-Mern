import express from "express";
import dotenv from "dotenv"
dotenv.config();
import cors from "cors";
import connectDB from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import donorRoutes from "./routes/donorRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


const app = express();

app.use(express.json());
app.use(cors({
  origin:process.env.Frontend_URL
}));

// DB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/admin", adminRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});