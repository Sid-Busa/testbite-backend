const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false, default: null },
});

userSchema.methods.generateAuthToken = function (user) {
  const token = jwt.sign(
    { _id: this._id, email: user.email },
    process.env.JWTSECRETKEY
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
