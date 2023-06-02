const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const requestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  maintenanceType: {
    type: String,
    required: true,
  },
  blockName: {
    type: String,
    required: true,
  },
  officeNumber: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: mongoose.Schema.username,
  //   ref: "User",
  //   required: true,
  // },
});
module.exports = mongoose.model("Request", requestSchema);
