const mongoose = require("mongoose");
dbUrl =
  "mongodb+srv://xinghmp968:dgOqFGMbP2SioGej@cluster0.za5iv.mongodb.net/issueTarcker?retryWrites=true&w=majority" ||
  "mongodb://localhost/issueTarcker";
mongoose.connect(dbUrl);
const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "erroe connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("Success fully connected to the database");
});
module.exports = db;
