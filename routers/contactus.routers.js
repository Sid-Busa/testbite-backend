const express = require("express");
const contactusController = require("../controllers/contactus.controller");
const router = express.Router();

router.post("/add-feedback", contactusController.addContactusMessage);

module.exports = router;
