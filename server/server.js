const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "HealthyLife API is running 🌿"
  });
});

//Authentication routes
const authRoutes = require("./routes/auth");
const habitRoutes = require("./routes/habits");
const goalRoutes = require("./routes/goals");
const healthDataRoutes = require("./routes/healthData");



app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/health-data", healthDataRoutes);

// Start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully 🌿");

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });