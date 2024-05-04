const express = require("express");
const adminRoutes = require("./Routes/admin");
const storeRoutes = require("./Routes/store");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(storeRoutes);
app.use("/", (req, res, next) => {
  res.status(404).send('<h1>Error "Page Not found"</h1>');
});

app.listen(3000);
