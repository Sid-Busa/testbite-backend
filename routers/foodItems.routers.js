const express = require("express");
const router = express.Router();

const foodItemsController = require("../controllers/foodItems.controller");
const { isAuthenticated } = require("../middleware/authentication");

router.post("/getFood", isAuthenticated, foodItemsController.getFoodItem);
router.post(
  "/updateRatting",
  isAuthenticated,
  foodItemsController.updateFoodItem
);
router.post("/addFoodItem", isAuthenticated, foodItemsController.addFoodItem);

module.exports = router;
