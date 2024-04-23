const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    console.log(req.headers);
    let token = "";
    if (req.headers["authorization"]) {
      token = req.headers["authorization"].replace("Bearer ", "");
    } else
      return res.status(403).json({ success: false, message: "Access denied" });
    if (!token)
      return res.status(403).json({ success: false, message: "Access denied" });

    const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
    req.body.userId = decoded._id;
    next();
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(403).json({ success: false, message: "Access denied" });
  }
};

module.exports = {
  isAuthenticated,
};
