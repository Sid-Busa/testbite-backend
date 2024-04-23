const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routers = require("../routers/index");

module.exports = () => {
  let app = express();
  app.use([
    cors(),
    bodyParser.json({ limit: "50mb" }),
    bodyParser.urlencoded({ limit: "50mb", extended: true }),
  ]);
  routers(app);
  return app;
};
