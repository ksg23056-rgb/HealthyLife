const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    waterGoal: {
      type: Number,
      default: 2
    },

    exerciseGoal: {
      type: Number,
      default: 30
    },

    sleepGoal: {
      type: Number,
      default: 8
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);