const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="item"></input><input type="number" name="quantity"></input><button type="submit">Submit</button></form>'
  );
});
routes.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
