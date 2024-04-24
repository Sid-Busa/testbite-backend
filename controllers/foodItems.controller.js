const FoodItems = require("../models/foodItems.model");

module.exports = foodItemsController = {
  getFoodItem: async (request, response) => {
    try {
      let foodItem = await FoodItems.find({
        type: request.body.type,
      });
      if (!foodItem)
        return response.json({ success: false, error: "Food Item Not Found" });
      return response.json({ success: true, foodItem });
    } catch (error) {
      return response.json({ success: false, error });
    }
  },
  updateFoodItem: async (request, response) => {
    try {
      const requestBody = request.body;
      const foodItem = await FoodItems.findByIdAndUpdate(
        request.body.foodItemId,
        requestBody
      );
      if (!foodItem) throw "FoodItem Not Found";
      return response.json({ success: true, foodItem });
    } catch (error) {
      console.log(error);
      return response.json({ success: false, error });
    }
  },
  addFoodItem: async (request, response) => {
    try {
      let addFoodItems = new FoodItems({
        ...request.body,
      });

      let foodItem = await addFoodItems.save();
      if (!foodItem)
        return response.json({
          success: false,
          error: "Feedback not getting save",
        });

      return response.json({ success: true, user: foodItem });
    } catch (error) {
      console.log(error);
      return response.json({ success: false, error });
    }
  },
};
