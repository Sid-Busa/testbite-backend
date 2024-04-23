require("dotenv").config();
const dotenv = require("dotenv");
let express = require("./config/express");
let db = require("./config/mongoose");
let app = express();
dotenv.config();
const port = process.env.PORT || 8000;
console.log(port);
app.listen(port, () => {
  console.log(`Magic Happens at port ${port}`);
});
