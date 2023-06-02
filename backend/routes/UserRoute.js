const express = require("express");

const {
  createUser,
  loginUser,
  userList,
  ChangeUserRole,
  logoutUser,
} = require("../controller/UserController");
const { checkRole } = require("../middleware/authenticate");
const { isAuthenticatedUser } = require("../middleware/authenticate");
const router = express.Router();

// router.get("/admin", checkRole("admin"), (req, res, next) => {
//   res.json({ message: "This is the admin page" });
// });

// router.get("/staff", checkRole("staff"), (req, res, next) => {
//   res.json({ message: "This is the staff page" });
// });

// router.get("/dean", checkRole("dean"), (req, res, next) => {
//   res.json({ message: "This is the dean page" });
// });

module.exports = router;
//router.route("/stafform", checkRoleStaff).post(createStaffform);

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);
router.route("/users").get(userList);
router.route("/changeRole").put(ChangeUserRole);

// router
//   .route("/admin/user/:id")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
