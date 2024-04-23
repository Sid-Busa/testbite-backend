const express = require("express");
app = express();
const path = require("path");

module.exports = (app) => {
  app.use("/user", require("./users.routers"));
  app.use("/contactus", require("./contactus.routers"));
  app.use("/food", require("./foodItems.routers"));

  app.use("/assets", express.static(path.join("./images")));
};
