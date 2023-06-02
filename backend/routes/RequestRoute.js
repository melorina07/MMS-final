const express = require("express");

const { createRequest } = require("../controller/RequestController");
//const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
//router.post("/form", formController.createForm);

//const { checkRole } = require("../middleware/authenticate");
//const { isAuthenticatedUser } = require("../middleware/authenticate");
const router = express.Router();

module.exports = router;
//router.route("/stafform", checkRoleStaff).post(createStaffform);

router.route("/request").post(createRequest);

module.exports = router;
