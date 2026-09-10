const express = require("express");

const Habit = require("../models/Habit");
const authMiddleware = require("../middleware/auth");

const router = express.Router();


// =========================
// SAVE / UPDATE TODAY'S HABITS
// =========================

router.post("/", authMiddleware, async (req, res) => {
  try {

    const {
      water,
      exercise,
      healthyMeal,
      sleep,
      relaxation
    } = req.body;

    const today = new Date().toISOString().split("T")[0];

    const habit = await Habit.findOneAndUpdate(
      {
        user: req.user.id,
        date: today
      },
      {
        user: req.user.id,
        date: today,
        water,
        exercise,
        healthyMeal,
        sleep,
        relaxation
      },
      {
        new: true,
        upsert: true
      }
    );

    res.json({
      message: "Today's habits saved successfully",
      habit
    });

  } catch (error) {

    res.status(500).json({
      message: "Unable to save habits",
      error: error.message
    });

  }
});


// =========================
// GET TODAY'S HABITS
// =========================

router.get("/today", authMiddleware, async (req, res) => {
  try {

    const today = new Date().toISOString().split("T")[0];

    const habit = await Habit.findOne({
      user: req.user.id,
      date: today
    });

    if (!habit) {
      return res.json({
        water: false,
        exercise: false,
        healthyMeal: false,
        sleep: false,
        relaxation: false
      });
    }

    res.json(habit);

  } catch (error) {

    res.status(500).json({
      message: "Unable to get today's habits",
      error: error.message
    });

  }
});


module.exports = router;