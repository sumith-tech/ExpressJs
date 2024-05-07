const express = require("express");
const adminRoutes = require("./Routes/admin");
const storeRoutes = require("./Routes/store");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoutes);
app.use(storeRoutes);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(3000);
