const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, "1!2@3#4$abcdefg");

  req.user = await User.findById(decodedData.id);

  next();
});

// Admin Roles
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
};

module.exports = checkRole;
