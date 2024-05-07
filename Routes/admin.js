const express = require("express");
const path = require("path");
const maindir = require("../utils/pathhelper");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "add-product.html"));
});
routes.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "contactus.html"));
});
routes.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
routes.post("/contact-success", (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "success.html"));
});

module.exports = routes;
