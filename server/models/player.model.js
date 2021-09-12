const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [2, "Player name must be at least 2 characters"]
  },
  position: {
    type: String
  },
  gameStatus: {
    type: [String],
    validate: [v => Array.isArray(v) && v.length === 3, "3 game status required"]
  }

}, {timestamps:true})

module.exports.Player = mongoose.model("Player", PlayerSchema);