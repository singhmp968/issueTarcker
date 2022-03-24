const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
const db = require("./config/mongoose");
app.use(express.urlencoded());
app.use("/", require("./routes"));
port = 8000;
app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(port, function (err) {
  if (err) {
    console.log(`error in running ${err}`);
    return;
  }
  console.log(`server is running @ ${port}`);
});
