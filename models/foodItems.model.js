const mongoose = require("mongoose");

const foodItemsSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: String, required: true, default: 0 },
  image: { type: String, required: true },
  totalRecipes: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: Array, required: true },
  creator: { type: String, required: true },
});

module.exports = mongoose.model("FoodItems", foodItemsSchema);
