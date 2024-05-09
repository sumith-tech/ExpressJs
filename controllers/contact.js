const path = require("path");
const maindir = require("../utils/pathhelper");
exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "contactus.html"));
};
exports.postSuccess = (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "success.html"));
};
