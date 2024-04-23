const User = require("../models/user.model");
const crypto = require("crypto");

module.exports = userController = {
  registerUser: async (request, response) => {
    try {
      // console.log(request)
      let requestBody = request.body;
      requestBody.password = crypto
        .createHash("sha256")
        .update(requestBody.password)
        .digest("hex");

      let registeredUser = await User.findOne({ phone: requestBody.phone });
      if (registeredUser) throw "Phone number already registered";
      let registeredEmailUser = await User.findOne({
        email: requestBody.email,
      });

      if (registeredEmailUser) throw "Email is already registered";
      let newUser = new User({
        ...requestBody,
      });

      let createdUser = await newUser.save();
      if (!createdUser)
        return response.json({ success: false, error: "error" });

      return response.json({ success: true, user: createdUser });
    } catch (error) {
      console.log(error);
      return response.json({ success: false, error });
    }
  },
  userlogin: async (request, response) => {
    try {
      let requestBody = request.body;
      let user = await User.findOne({
        email: requestBody.email,
        password: crypto
          .createHash("sha256")
          .update(requestBody.password)
          .digest("hex"),
      });
      if (!user) throw "User not found";

      let sessionToken = await user.generateAuthToken({ email: user.email });
      user = user.toObject();
      delete user.password;
      console.log("user", user.password);
      return response.json({
        success: true,
        user,
        sessionToken,
      });
    } catch (error) {
      console.log(error);
      return response.json({ success: false, error });
    }
  },
};
