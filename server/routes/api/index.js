const router = require("express").Router();

const {
  createUser,
  getSingleUser,
  saveActivity,
  deleteActivity,
  login,
} = require("../../controllers/user-controller");

const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser).put(authMiddleware, saveActivity);

router.route("/login").post(login);

router.route("/user").get(authMiddleware, getSingleUser);

router.route('bookings').delete(authMiddleware, deleteActivity);

module.exports = router;
