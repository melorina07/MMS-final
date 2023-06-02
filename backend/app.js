const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const router = express.Router();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Route imports
const user = require("./routes/UserRoute");
const request = require("./routes/RequestRoute");
const Faculty = require("./routes/facultyroute");
const Department = require("./routes/DepartmentRoutes");
const register = require("./routes/AdminRoute");

app.use("/api/v2", user);
app.use("/api/v2", request);
app.use("/api/v2", Faculty);
app.use("/api/v2", Department);
app.use("/api/v2", register);

app.use(ErrorHandler);

module.exports = app;
