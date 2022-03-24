const ProjectList = require("../models/projectDetails");

module.exports.home = function (req, res) {
  // Future Reference
  //   return res.send("hello");
  ProjectList.find({}, function (err, projectDet) {
    if (err) {
      console.log("error", err);
      return;
    }
    return res.render("home", {
      project: projectDet,
    });
  });
  //return res.render("home");
};
