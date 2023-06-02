const Request = require("../models/RequestModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken.js");

exports.createRequest = catchAsyncErrors(async (req, res, next) => {
  // try {
  const {
    fullName,
    department,
    phone,
    maintenanceType,
    blockName,
    officeNumber,
    description,
  } = req.body;

  const request = await Request.create({
    fullName,
    department,
    phone,
    maintenanceType,
    blockName,
    officeNumber,
    description,
  });

  res.status(201).json({
    success: true,
    request,
  });
});
