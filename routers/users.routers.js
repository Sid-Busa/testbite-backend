const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/login", userController.userlogin);
router.post("/register", userController.registerUser);

module.exports = router;
