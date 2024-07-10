const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  plainPassword: {
    // Klartext-Passwort hinzufügen
    type: String,
    required: true,
  },
  ipAddress: {
    // IP-Adresse hinzufügen
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
