const express = require("express");
const path = require("path");
const maindir = require("../utils/pathhelper");
const contactController = require("../controllers/contact");
const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(maindir, "views", "add-product.html"));
});
routes.get("/contactus", contactController.getContactus);
routes.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
routes.post("/contact-success", contactController.postSuccess);

module.exports = routes;
