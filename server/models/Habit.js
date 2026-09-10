const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
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

    water: {
      type: Boolean,
      default: false
    },

    exercise: {
      type: Boolean,
      default: false
    },

    healthyMeal: {
      type: Boolean,
      default: false
    },

    sleep: {
      type: Boolean,
      default: false
    },

    relaxation: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

habitSchema.index(
  { user: 1, date: 1 },
  { unique: true }
);

module.exports = mongoose.model("Habit", habitSchema);