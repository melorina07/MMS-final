const express = require("express");
const { createDepartment } = require("../controller/DepController");

const router = express.Router();

router.route("/createDepartment").post(createDepartment);

module.exports = router;
