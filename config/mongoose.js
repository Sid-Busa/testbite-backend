require("dotenv").config();
const mongoose = require("mongoose");

const mongooseConnectionString =
  process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/sidbusa81";

mongoose
  .connect(mongooseConnectionString)
  .then(() => console.log(`connected to MongoDB...`))
  .catch((err) => console.log(err));
