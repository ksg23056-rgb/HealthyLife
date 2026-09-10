const express = require("express");

const HealthData = require("../models/HealthData");
const authMiddleware = require("../middleware/auth");

const router = express.Router();


// GET TODAY'S HEALTH DATA
router.get("/today", authMiddleware, async (req, res) => {
  try {
    const today = new Date()
      .toISOString()
      .split("T")[0];

    const healthData = await HealthData.findOne({
      user: req.user.id,
      date: today
    });

    if (!healthData) {
      return res.json({
        waterIntake: 0,
        exerciseMinutes: 0,
        sleepHours: 0
      });
    }

    res.json(healthData);

  } catch (error) {
    console.error("GET HEALTH DATA ERROR:", error);

    res.status(500).json({
      message: "Unable to get health data",
      error: error.message
    });
  }
});


// SAVE TODAY'S HEALTH DATA
router.put("/", authMiddleware, async (req, res) => {
  try {

    console.log("Received health data:", req.body);
    console.log("User ID:", req.user.id);

    const {
      waterIntake,
      exerciseMinutes,
      sleepHours
    } = req.body;


    // Basic validation
    if (
      waterIntake === undefined ||
      exerciseMinutes === undefined ||
      sleepHours === undefined
    ) {
      return res.status(400).json({
        message: "Please provide water, exercise and sleep data"
      });
    }


    const today = new Date()
      .toISOString()
      .split("T")[0];


    const healthData =
      await HealthData.findOneAndUpdate(
        {
          user: req.user.id,
          date: today
        },
        {
          user: req.user.id,
          date: today,
          waterIntake: Number(waterIntake),
          exerciseMinutes: Number(exerciseMinutes),
          sleepHours: Number(sleepHours)
        },
        {
          new: true,
          upsert: true,
          runValidators: true
        }
      );


    console.log("Health data saved:", healthData);


    res.json({
      message: "Health data saved successfully",
      healthData
    });

  } catch (error) {

    console.error("SAVE HEALTH DATA ERROR:", error);

    res.status(500).json({
      message: "Unable to save health data",
      error: error.message
    });

  }
});


// GET LAST 7 DAYS HEALTH DATA
router.get("/weekly", authMiddleware, async (req, res) => {
  try {

    const today = new Date();

    const dates = [];

    for (let i = 6; i >= 0; i--) {

      const date = new Date(today);

      date.setDate(today.getDate() - i);

      const formattedDate =
        date.toISOString().split("T")[0];

      dates.push(formattedDate);
    }


    const healthData = await HealthData.find({
      user: req.user.id,
      date: {
        $in: dates
      }
    }).sort({ date: 1 });


    const weeklyData = dates.map((date) => {

      const record = healthData.find(
        (item) => item.date === date
      );

      return {
        date,

        waterIntake:
          record?.waterIntake || 0,

        exerciseMinutes:
          record?.exerciseMinutes || 0,

        sleepHours:
          record?.sleepHours || 0
      };

    });


    res.json(weeklyData);

  } catch (error) {

    console.error("WEEKLY HEALTH DATA ERROR:", error);

    res.status(500).json({
      message: "Unable to get weekly health data",
      error: error.message
    });

  }
});


module.exports = router;