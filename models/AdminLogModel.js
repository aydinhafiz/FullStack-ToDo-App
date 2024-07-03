const mongoose = require("mongoose");

const adminLogSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdminLog", adminLogSchema);
