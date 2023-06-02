const express = require("express");
const { createFaculty } = require("../controller/FacultyController");

const router = express.Router();

router.route("/createfaculty").post(createFaculty);

module.exports = router;
