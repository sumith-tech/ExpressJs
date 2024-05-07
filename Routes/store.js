const express = require("express");
const maindir = require("../utils/pathhelper");
const path = require("path");
const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "shop.html"));
});
module.exports = routes;
