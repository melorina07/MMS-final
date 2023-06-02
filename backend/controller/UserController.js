const User = require("../models/UserModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken.js");
//const sendMail = require("../utils/sendMail.js");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
//const router = express.Router();

// Register user
exports.createUser = catchAsyncErrors(async (req, res, next) => {
  // try {
  const { name, email, password, department } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    department,
  });

  sendToken(user, 201, res);
  //catch (error) {
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter the email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler("User is not find with this email & password", 401)
    );
  }

  sendToken(user, 201, res);
});

// list all users from DB

exports.userList = catchAsyncErrors(async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving users" });
  }
});

//  Log out user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Log out success",
  });
});
//for changing staffs role into dean alseralegnm
exports.ChangeUserRole = catchAsyncErrors(async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate({ email }, { role: "dean" });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
});

// router.get("/user", async (req, res) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, "secret-key");
//     const user = await User.findById(decodedToken.userId);
//     res.json({ fullName: user.fullName });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching user" });
//   }
// });
