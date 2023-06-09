const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/loginSignupController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

module.exports = router;
