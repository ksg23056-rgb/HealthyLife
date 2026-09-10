const express = require("express");

const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

const router = express.Router();


// GET USER GOALS
router.get("/", authMiddleware, async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      waterGoal: user.waterGoal,
      exerciseGoal: user.exerciseGoal,
      sleepGoal: user.sleepGoal
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to get goals",
      error: error.message
    });

  }
});


// SAVE USER GOALS
router.put("/", authMiddleware, async (req, res) => {
  try {

    const {
      waterGoal,
      exerciseGoal,
      sleepGoal
    } = req.body;


    if (
      waterGoal === undefined ||
      exerciseGoal === undefined ||
      sleepGoal === undefined
    ) {
      return res.status(400).json({
        message: "Please provide all goals"
      });
    }


    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        waterGoal,
        exerciseGoal,
        sleepGoal
      },
      {
        new: true
      }
    );


    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }


    res.json({
      message: "Goals saved successfully",
      goals: {
        waterGoal: user.waterGoal,
        exerciseGoal: user.exerciseGoal,
        sleepGoal: user.sleepGoal
      }
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to save goals",
      error: error.message
    });

  }
});


module.exports = router;