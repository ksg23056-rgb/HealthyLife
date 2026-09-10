const mongoose = require("mongoose");

const healthDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    date: {
      type: String,
      required: true
    },

    waterIntake: {
      type: Number,
      default: 0
    },

    exerciseMinutes: {
      type: Number,
      default: 0
    },

    sleepHours: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

healthDataSchema.index(
  { user: 1, date: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "HealthData",
  healthDataSchema
);