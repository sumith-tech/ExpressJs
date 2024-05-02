let express = require("express");

let app = express();
app.use((req, res, next) => {
  console.log("inside of middleware");

  next();
});
app.use((req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});
app.listen(3000);
